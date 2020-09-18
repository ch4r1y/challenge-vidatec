import {Route} from "./route";
import {IncomingMessage, ServerResponse} from "http";
import {IResponse} from "../response/IResponse";
import {NotFoundResponse} from "../response/NotFoundResponse";

export class Router {

    private readonly route: Route;
    private readonly request: IncomingMessage;
    private readonly response: ServerResponse;

    constructor(request: IncomingMessage, response: ServerResponse, routes: Array<Route>) {
        this.request = request;
        this.response = response;
        this.route = routes.find(route => {
            return route.getMethod() === request.method.toUpperCase() && route.getPath() === request.url;
        });
    }

    public async send() {
        let response: IResponse = new NotFoundResponse();

        if (this.route) {
            let body = {};

            if (this.request.method === 'POST' || this.request.method === 'PUT') {
                body = await this.getBody(this.request);
            }
            response = await this.route.getResponse(this.request, body);
        }

        return this.makeResponse(this.response, response);
    }

    public makeResponse(res: ServerResponse, response: IResponse) {
        res.statusCode = response.getStatusCode();
        res.setHeader('content-type', 'text/json');
        return res.end(JSON.stringify(response.getData()));
    }

    private async getBody(req) {
        return new Promise((resolve, reject) => {
            try {
                let body = '';
                req.on('data', chunk => body += chunk.toString());

                req.on('end', () => {
                    resolve(JSON.parse(body));
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
}

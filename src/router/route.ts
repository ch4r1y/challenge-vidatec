import {IHandler} from "./IHandler";
import {IncomingMessage} from "http";
import {IResponse} from "../response/IResponse";

export class Route {

    private readonly method: string;
    private readonly path: string;
    private readonly handler: IHandler;

    constructor(method: string, path: string, handler: IHandler) {
        this.method = method.toUpperCase();
        this.path = path;
        this.handler = handler;
    }

    getMethod(): string {
        return this.method;
    }

    getPath(): string {
        return this.path;
    }

    getResponse(request: IncomingMessage, body: Object = {}): Promise<IResponse> {
        return this.handler(request, body);
    }
}

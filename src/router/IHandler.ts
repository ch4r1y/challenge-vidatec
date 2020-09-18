import {IncomingMessage} from "http";
import {IResponse} from "../response/IResponse";

export interface IHandler {
    (request: IncomingMessage, body: Object): Promise<IResponse>;
}

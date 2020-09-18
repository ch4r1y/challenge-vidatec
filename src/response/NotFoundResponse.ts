import {IResponse} from "./IResponse";

export class NotFoundResponse implements IResponse{
    getData(): Object {
        return {
            result: false,
            message: "NotFound"
        };
    }

    getStatusCode(): number {
        return 404;
    }
}

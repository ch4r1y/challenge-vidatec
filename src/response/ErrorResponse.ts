import {IResponse} from "./IResponse";

export class ErrorResponse implements IResponse {

    private readonly statusCode: number;
    private readonly message: string;

    constructor(statusCode: number, message: string) {
        this.statusCode = statusCode;
        this.message = message;
    }

    getData(): Object {
        return {
            result: false,
            message: this.message
        };
    }



    getStatusCode(): number {
        return this.statusCode;
    }
}

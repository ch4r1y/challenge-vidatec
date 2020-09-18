import {IResponse} from "./IResponse";
import {Transaction} from "../model/Transaction";

export class OperationResponse implements IResponse {
    private readonly transaction: Transaction;

    constructor(transaction: Transaction) {
        this.transaction = transaction;
    }

    getData(): Object {
        return {
            ...this.transaction,
        };
    }

    getStatusCode(): number {
        return 200;
    }

}

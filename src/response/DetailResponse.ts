import {Transaction} from "../model/Transaction";
import {IResponse} from "./IResponse";

export class DetailResponse implements IResponse {

    private readonly transactions: Array<Transaction>;
    private readonly balance: number;

    constructor(balance: number, transactions: Array<Transaction>) {
        this.balance = balance;
        this.transactions = transactions;
    }

    getData(): Object {
        return {
            balance: this.balance,
            transactions: this.transactions
        };
    }

    getStatusCode(): number {
        return 200;
    }

}

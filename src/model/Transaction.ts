import {TransactionType} from "./TransactionType";

export class Transaction {
    private readonly amount: number;
    private readonly type: TransactionType;
    private readonly id: string;
    private readonly date: Date;

    constructor(id: string, amount: number, type: TransactionType, date: Date) {
        this.id = id;
        this.amount = amount;
        this.type = type;
        this.date = date;
    }

    getAmount() {
        return this.amount;
    }

    getType() {
        return this.type;
    }

    getId() {
        return this.id;
    }

    getDate() {
        return this.date;
    }

}

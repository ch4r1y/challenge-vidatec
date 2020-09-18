export class DebitValidator {
    private readonly amount: number;
    private messages: Array<string> = [];
    private balance: number;

    constructor(amount: number, balance: number) {
        this.amount = amount;
        this.balance = balance;
    }

    validate() {
        const isNumber =  Number.isFinite(this.amount);
        if(!isNumber) {
            this.messages.push('Invalid amount');
        }

        if(this.amount > this.balance) {
            this.messages.push('Insufficient balance');
        }

        return this.messages.length === 0;
    }

    getMessage() {
        return this.messages.join(', ');
    }
}

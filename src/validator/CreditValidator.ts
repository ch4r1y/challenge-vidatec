export class CreditValidator {
    private readonly amount: number;
    private messages: Array<string> = [];

    constructor(amount: number) {
        this.amount = amount;
    }

    validate() {
        const isNumber =  Number.isFinite(this.amount);
        if(!isNumber) {
            this.messages.push('Invalid amount');
        }

        return isNumber;
    }

    getMessage() {
        return this.messages.join(', ');
    }
}

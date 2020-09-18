import {TransactionRepository} from "../repository/TransactionRepository";
import {Transaction} from "../model/Transaction";
import {TransactionType} from "../model/TransactionType";
import { v4 as uuidv4 } from 'uuid';
import {ValidationException} from "../exeptions/ValidationException";
import {DebitValidator} from "../validator/DebitValidator";
import {OperationResponse} from "../response/OperationResponse";

export class DebitController {
    private transactionRepository: TransactionRepository;

    constructor() {
        this.transactionRepository = new TransactionRepository();
    }

    public async create(amount: number): Promise<OperationResponse> {
        const balance = this.transactionRepository.balance();
        const validator = new DebitValidator(amount, balance);
        if(!validator.validate()) {
            ValidationException.throw(validator.getMessage())
        }

        const transaction = new Transaction(uuidv4(), (-1) * amount, TransactionType.Debit, new Date());
        await this.transactionRepository.add(transaction);

        return new OperationResponse(transaction)
    }
}

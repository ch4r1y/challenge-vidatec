import {TransactionRepository} from "../repository/TransactionRepository";
import {Transaction} from "../model/Transaction";
import {TransactionType} from "../model/TransactionType";
import { v4 as uuidv4 } from 'uuid';
import {CreditValidator} from "../validator/CreditValidator";
import {ValidationException} from "../exeptions/ValidationException";
import {OperationResponse} from "../response/OperationResponse";

export class CreditController {
    private transactionRepository: TransactionRepository;

    constructor() {
        this.transactionRepository = new TransactionRepository();
    }

    public async create(amount: number): Promise<OperationResponse> {
        const validator = new CreditValidator(amount);
        if(!validator.validate()) {
            ValidationException.throw(validator.getMessage())
        }

        const transaction = new Transaction(uuidv4(), amount, TransactionType.Credit, new Date());
        await this.transactionRepository.add(transaction);

        return new OperationResponse(transaction)

    }
}

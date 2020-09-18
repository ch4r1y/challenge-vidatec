import {TransactionRepository} from "../repository/TransactionRepository";
import {DetailResponse} from "../response/DetailResponse";

export class DetailController {
    private transactionRepository: TransactionRepository;

    constructor() {
        this.transactionRepository = new TransactionRepository();
    }

    public async index() {
        return new DetailResponse(this.transactionRepository.balance(), this.transactionRepository.all());
    }
}

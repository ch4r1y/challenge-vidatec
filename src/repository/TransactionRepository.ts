import {Mutex} from 'async-mutex';
import {Transaction} from "../model/Transaction";

const data: Array<Transaction> = [];

export class TransactionRepository {

    public async add(transaction: Transaction): Promise<Transaction> {

        const mutex = new Mutex();
        return await mutex
            .runExclusive(async () => {
                return new Promise((resolve) => {
                    setTimeout(() => {//simulate latency
                        data.push(transaction);
                        resolve(transaction)
                    }, 1000)
                })
            });
    }

    public balance() {
        return data.reduce((total: number, transaction: Transaction) => {
            return total + transaction.getAmount();
        }, 0)
    }

    public all(){
        return data;
    }
}

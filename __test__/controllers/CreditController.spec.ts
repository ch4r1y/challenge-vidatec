import {CreditController} from "../../src/controllers/CreditController";
import {TransactionRepository} from "../../src/repository/TransactionRepository";

jest.mock("../../src/repository/TransactionRepository");

describe("Check Credit controller ", () => {

    test("Check a valid amount", async () => {

        const controller = new CreditController();
        await controller.create(10);

        expect(TransactionRepository).toHaveBeenCalledTimes(1);
    });

});

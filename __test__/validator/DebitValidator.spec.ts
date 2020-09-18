import {DebitValidator} from "../../src/validator/DebitValidator";

describe("Check Debit Validator ", () => {

    test("Check valid Number", () => {
        const validator = new DebitValidator(10, 20);
        expect(validator.validate()).toBeTruthy()
    });

    test("Check Insufficient balance", () => {
        const validator = new DebitValidator(10, 5);
        expect(validator.validate()).toBeFalsy()
    });

});

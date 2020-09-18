import {CreditValidator} from "../../src/validator/CreditValidator";

describe("Check Credit Validator ", () => {


    test("Check valid Number", () => {
        const validator = new CreditValidator(10);
        expect(validator.validate()).toBeTruthy()
    });

});

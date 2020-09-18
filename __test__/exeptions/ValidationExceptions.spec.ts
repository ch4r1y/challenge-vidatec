import {ValidationException} from "../../src/exeptions/ValidationException";

describe("Check Validation Exception ", () => {
    const message = "Hello Word!!!";

    test("Check status", () => {
        try {
            ValidationException.throw(message)
        } catch (e) {
            expect(e.errorCode).toBe(400);
        }
    });

    test("Check message", () => {

        try {
            ValidationException.throw(message)
        } catch (e) {
            expect(e.message).toBe(message);
        }
    });
});

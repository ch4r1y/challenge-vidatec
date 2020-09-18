import {Router} from "../../src/router/router";
import {Route} from "../../src/router/route";
import {IncomingMessage, ServerResponse} from "http";
import {DetailResponse} from "../../src/response/DetailResponse";
import {Transaction} from "../../src/model/Transaction";
import {TransactionType} from "../../src/model/TransactionType";
import {NotFoundResponse} from "../../src/response/NotFoundResponse";

describe("Check Credit Validator ", () => {

    const req = {
        method: 'post',
        url: '/test'
    } as IncomingMessage;

    const res = {
        end: data => data,
        setHeader: (key, value) => {},
        statusCode: null
    } as ServerResponse;

    const balance = 10;
    const transaction = {
        id: "test",
        amount: 20,
        type: TransactionType.Credit,
        date: new Date()
    };

    const fakeResponse = new DetailResponse(balance, [new Transaction(transaction.id, transaction.amount, transaction.type, transaction.date)]);

    test("Check valid status code", async () => {


        const routes = [new Route('post', '/test', () => Promise.resolve(fakeResponse) )];

        const router = new Router(
            req, res, routes
        );

        await router.send();

        expect(res.statusCode).toBe(200);

    });

    test("Check valid response", async () => {
        const routes = [new Route('post', '/test', () => Promise.resolve(fakeResponse))];

        const router = new Router(
            req, res, routes
        );

        const data = await router.send();

        expect(JSON.stringify({
            balance: balance,
            transactions: [transaction]
        })).toBe(data);

    });

    test("Check valid not found", async () => {
        const routes = [new Route('get', '/foo', () => Promise.resolve(new NotFoundResponse()))];

        const router = new Router(
            req, res, routes
        );

        await router.send();

        expect(res.statusCode).toBe(404);

    });

});

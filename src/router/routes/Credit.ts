import {Route} from "../route";
import {IncomingMessage} from "http";
import {CreditController} from "../../controllers/CreditController";

/**
 * @api {post} /credit Credit
 * @apiName Credit
 * @apiDescription Generates a positive movement in the account
 * @apiGroup Transaction
 *
 * @apiParam {number} credit amount.
 *
 * @apiSuccess {String} id Transaction id.
 * @apiSuccess {number} amount Transaction amount.
 * @apiSuccess {String} type Transaction type.
 * @apiSuccess {String} date Transaction date.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "id": "69e5ad5d-aaed-43d1-811b-6324e2af94ce",
 *   "amount": 10,
 *   "type": "Credit",
 *   "date": "2020-01-01T01:00:00.537Z"
 * }
 *
 * @apiError ValidationException Invalid amount
 * @apiErrorExample ValidationException:
 * HTTP/1.1 400
 * {
 *    message: "Invalid amount"
 * }
 */
export default new Route('post',
    '/credit',
    async (req: IncomingMessage, body: any) => {
        const controller = new CreditController();
        return await controller.create(parseFloat(body.amount));
    });

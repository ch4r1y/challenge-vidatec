import {Route} from "../route";
import {DetailController} from "../../controllers/DetailController";

/**
 * @api {get} /detail Detail
 * @apiName Detail
 * @apiDescription Get Account Detail
 * @apiGroup Transaction
 *
 * @apiSuccess {number} balance Account Balance.
 * @apiSuccess {object[]} transaction Transaction history.
 * @apiSuccess {String} transaction.id Transaction id.
 * @apiSuccess {number} transaction.amount Transaction amount.
 * @apiSuccess {String} transaction.type Transaction type.
 * @apiSuccess {String} transaction.date Transaction date.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "balance": 10,
 *    "transactions": [{
 *      "id": "69e5ad5d-aaed-43d1-811b-6324e2af94ce",
 *      "amount": 10,
 *      "type": "Credit",
 *      "date": "2020-01-01T01:00:00.537Z"
 *    }]
 * }
 *
 */
export default new Route('get',
    '/detail',
    () => {
        const controller = new DetailController();
        return controller.index();
    });

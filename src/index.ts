import {Router} from "./router/router";
import Detail from "./router/routes/Detail";
import Credit from "./router/routes/Credit";
import Debit from "./router/routes/Debit";
import {ErrorResponse} from "./response/ErrorResponse";

const http = require('http');

const server = http.createServer(async (req, res) => {
    const router = new Router(
        req, res, [
            Detail,
            Credit,
            Debit
        ]
    );

    try {
        await router.send();
    } catch (error) {
        router.makeResponse(res, new ErrorResponse(error.errorCode || 500, error.message))
    }

});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

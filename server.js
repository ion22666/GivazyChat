const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";
const hostname = dev ? "localhost" : "0.0.0.0";
const port = dev ? 3000 : 8000;

const app = next({ dev, hostname, port });

const handle = app.getRequestHandler();

(async () => {
    await app.prepare();
    createServer(async (req, res) => {
        try {
            await handle(req, res, parse(req.url, true));
        } catch (err) {
            console.error("Error occurred handling", req.url, err);
            res.statusCode = 500;
            res.end("internal server error");
        }
    }).listen(port, hostname, err => {
        if (err) throw err;
        console.log(`> Ready on http://${hostname}:${port}`);
    });
})();

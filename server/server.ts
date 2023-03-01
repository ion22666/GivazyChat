import dotenv, { config } from "dotenv";
dotenv.config();

import { createServer } from "http";
import { parse } from "url";
import next from "next";

// import { setupRedisClient } from "../database/redis";
import { AppendWebSockets } from "./ws-server";

const dev = process.env.NODE_ENV !== "production";
const hostname = dev ? "localhost" : "0.0.0.0";
const port = dev ? 3000 : 8000;

const app = next({ dev, hostname, port });

const handle = app.getRequestHandler();

const server = createServer(async (req, res) => {
    try {
        await handle(req, res, parse(req.url, true));
    } catch (err) {
        console.error("Error occurred handling", req.url, err);
        res.statusCode = 500;
        res.end("internal server error");
    }
});

AppendWebSockets(server);

(async () => {
    // await setupRedisClient();

    await app.prepare();

    server.listen(port, hostname, () => {
        console.log(`> Ready on http://${hostname}:${port}`);
    });
})();

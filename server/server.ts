import dotenv from "dotenv";
import express, { Handler, Router } from "express";
import next from "next";
import http from "http";

import { AppendWebSockets } from "./ws-server";
import { auth_middleware } from "./middlewares/auth-middleware";
import { console_logger_middleware } from "./middlewares/console-logger-middleware";
import { parse } from "url";

import login_router from "./routers/loginRouter";
import register_router from "./routers/registerRouter";
import user_router from "./routers/userRouter";
import { MongoConnectionPromise } from "./database/mongodb";

dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const hostname = dev ? "localhost" : "0.0.0.0";
const port = dev ? 3000 : 8000;

const nextApp = next({ dev });
const nextHandle = nextApp.getRequestHandler();

const nextHook: Handler = (req, res) => {
    req.url = req.originalUrl;
    nextHandle(req, res, parse(req.url, true));
};

const expressApp = express();
const httpServer = http.createServer(expressApp);
AppendWebSockets(httpServer);

(async () => {
    await MongoConnectionPromise;
    if (!process.env.API_ONLY) {
        await nextApp.prepare();
    } else {
        expressApp.use("", console_logger_middleware);
    }

    expressApp.use("", express.json());

    expressApp.use("", express.urlencoded({ extended: true }));

    // auth not required
    {
        expressApp.use("/", express.static("public"));
        expressApp.use("/_next", nextHook);
        expressApp.use("/login", nextHook);
        expressApp.use("/register", nextHook);

        expressApp.use("/api/login", login_router);
        expressApp.use("/api/register", register_router);

        // Serve Next.js pages
        !process.env.API_ONLY && expressApp.get("/", nextHook);
    }

    // redirect to login if missing the cookie/jwt
    expressApp.use("", auth_middleware);

    // auth required
    {
        expressApp.use("/api/test-token", (req, res) => res.sendStatus(200));
        expressApp.use("/api/user", user_router);
    }

    httpServer.listen(port, hostname, () => {
        console.log(`>>> Ready on http://${hostname}:${port}`);
    });
})();

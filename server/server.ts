import dotenv from "dotenv";
dotenv.config();

import express, { Handler, Router } from "express";
import next from "next";
import http from "http";

import { AppendWebSockets } from "./ws-server";
import { auth_middleware } from "./middlewares/auth-middleware";
import { console_logger_middleware } from "./middlewares/console-logger-middleware";
import { parse } from "url";

import login_router from "./routers/login";
import register_router from "./routers/register";

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
    if (!process.env.API_ONLY) {
        await nextApp.prepare();
    } else {
        expressApp.use("", console_logger_middleware);
    }

    expressApp.use("", express.json());
    expressApp.use("/_next", nextHook);
    expressApp.use("", express.urlencoded({ extended: true }));

    // auth not required
    {
        expressApp.use("/", express.static("public"));
        expressApp.use("/login", nextHook);
        expressApp.use("/register", nextHook);

        expressApp.use("/api/login", login_router);
        expressApp.use("/api/register", register_router);
    }

    // redirect to login if missing the cookie/jwt
    expressApp.use("", auth_middleware);

    // auth required
    {
        // Serve Next.js pages
        !process.env.API_ONLY && expressApp.get("*", (req, res) => nextHandle(req, res));
    }

    httpServer.listen(port, hostname, () => {
        console.log(`>>> Ready on http://${hostname}:${port}`);
    });
})();

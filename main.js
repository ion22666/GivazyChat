import dotenv from 'dotenv';
import express from 'express';
import next from 'next';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import chalk from 'chalk';
import { parse } from 'url';
import bcrypt from 'bcrypt';
import axios from 'axios';

var config = {
    DATABASE: "givazy",
    USERNAME: process.env.MONGODB_USERNAME,
    PASSWORD: process.env.MONGODB_PASSWORD,
};

mongoose.set("strictQuery", true);
mongoose.connect(`mongodb+srv://${config.USERNAME}:${config.PASSWORD}@cluster0.wgurxzm.mongodb.net/${config.DATABASE}?retryWrites=true&w=majority`);

const ChatSchema = new mongoose.Schema({
    participants: [mongoose.Schema.Types.ObjectId],
    messages: [
        {
            sendAt: Number,
            content: String,
        },
    ],
});
const Chat = (mongoose.models.Chat || mongoose.model("Chat", ChatSchema));

const AppendWebSockets = (server) => {
    const io = new Server(server, { path: "/api/chat.socket" });
    io.on("connection", socket => {
        console.log("new ws connection ", socket.id);
        socket.emit("pong");
        socket.on("ping", () => socket.emit("pong"));
        socket.on("update request", async () => {
            console.log("AAAAAAAAAAA");
            console.log("Messages", await Chat.find());
            socket.emit("update response", (await Chat.find({}))[0].messages);
        });
    });
};

dotenv.config();
// intrebatil pe giovanni ce se intampla aici :(
const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, sparse: true },
    username: { type: String },
    password: { type: String },
    oauth: {
        google: {
            id: { type: String },
            email: { type: String, unique: true, sparse: true },
            verified_email: { type: String },
            name: { type: String },
            given_name: { type: String },
            family_name: { type: String },
            picture: { type: String },
            locale: { type: String },
        },
        facebook: {},
    }
    // {partialFilterExpression:{email: { $exists: true }}}
});
UserSchema.methods.createJWT = function () {
    return jwt.sign({ sub: this._id }, process.env.JWT_PRIVETE_KEY || "givazy", { algorithm: "HS256" });
};
const User = (mongoose.models.User || mongoose.model("User", UserSchema));

dotenv.config();
const auth_middleware = async (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token)
            throw new Error("Auth token missing on" + req.path);
        let payload = ((e) => (typeof e === "string" ? JSON.parse(e) : e)).call(null, jwt.verify(token, process.env.JWT_PRIVETE_KEY || "givazy", { algorithms: ["HS256"] }));
        if (!payload.sub)
            throw new Error("Invalid token");
        const user = await User.findOne({ _id: payload.sub });
        if (!user)
            throw new Error("The email from the JWT provided is not associeated to any user");
        req.user = user;
        return next();
    }
    catch (e) {
        if (process.env.NODE_ENV !== "production")
            console.log(e);
        if (process.env.API_ONLY)
            return res.status(401).json({ error: e });
        return res.redirect("/login?errors=" + encodeURIComponent(e));
    }
};

dotenv.config();
const console_logger_middleware = (req, res, next) => {
    let start = performance.now();
    console.log(chalk.bold.bgHex("#262626")(chalk.blueBright("REQUEST  "), chalk.hex("#00ff00")(req.method.toUpperCase().padEnd(5, " ")), chalk.cyan(req.originalUrl.padEnd(48, " "))));
    res.on("finish", () => {
        console.log(chalk.bold.bgHex("#363636")(chalk.hex("#FFA500")("RESPONSE "), chalk.hex("#00ff00")(req.method.toUpperCase().padEnd(5, " ")), chalk.cyan(req.originalUrl.substring(0, 26).padEnd(36, " ")), chalk.hex(res.statusCode >= 400 ? "#ff0000" : res.statusCode >= 300 ? "#FFA500" : "#00ff00")(res.statusCode), chalk.hex("#000000")(Math.round(performance.now() - start)
            .toString()
            .padStart(5, " ") + "ms")));
    });
    next();
};

dotenv.config();
const traditional_login_handler = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    // daca email sau password lipseste
    if (!email || !password) {
        return res.status(401).json({ message: "Some credentials are missing" });
    }
    // cauta in bazade da date un user cu emailul dat
    const user = await User.findOne({ email });
    // daca nu a fost gasit nici un user
    if (!user) {
        return res.status(401).json({ message: "Email not associeted with any user" });
    }
    // se compara parola introdusa de user si parola corecta din baza de date
    if (!(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Password not correct" });
    }
    // create a JWT for the user witch will be used to authenticate the user without providing email and password on every request
    const token = user.createJWT();
    res.set("Authorization", `Bearer ${token}`);
    return res.status(200).json({ token });
};

dotenv.config();
async function getGoogleUserInfo (code, path) {
    let token_response = await axios.post("https://oauth2.googleapis.com/token", {
        code: code,
        client_id: process.env.client_id,
        client_secret: process.env.client_secret,
        redirect_uri: process.env.domain + path,
        grant_type: "authorization_code",
    }, { validateStatus: () => true });
    let user_info_response = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token_response.data.access_token}`);
    return user_info_response.data;
}

dotenv.config();
// google oauth login
// receive the code -> get user's google email -> verify if exists -> create and send JWT
const google_login_handler = async (req, res) => {
    try {
        // check for params
        if (!req.query.code)
            throw new Error("Something bad happened with google auth");
        // fetch user info
        let user_info = await getGoogleUserInfo(req.query.code.toString(), "/api/login/google");
        // check if user exists
        let user = await User.findOne({ "oauth.google.email": user_info.email });
        if (!user)
            throw new Error("The google account has no user associated with it");
        const token = user.createJWT();
        res.set("Authorization", `Bearer ${token}`);
        return res.status(200).json({ token });
    }
    catch (e) {
        if (process.env.API_ONLY)
            return res.status(401).json({ error: e });
        return res.status(401).redirect("/login?errors=" + encodeURIComponent(e));
    }
};

dotenv.config();
// facebook oauth login
const facebook_login_handler = async (req, res) => {
    return res.json({ message: "facebook login" });
};

dotenv.config();
var login_router = express
    .Router()
    // all this routes will be called by the user browser
    .post("/", traditional_login_handler)
    .get("/google", google_login_handler)
    .get("/facebook", facebook_login_handler);

dotenv.config();
// traditional register
const traditional_register_handler = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        if (!email || !username || !password)
            throw new Error("Some parameters are missing");
        // sa fim siguri ca email-ul nu e deja folosit de cineva
        if (await User.findOne({ email: req.body.email }))
            throw new Error("email already in use");
        // creem userul
        let user = await User.create({ email, password: await bcrypt.hash(req.body.password, 10), username });
        // cream un JWT pentru user
        const token = user.createJWT();
        res.set("Authorization", `Bearer ${token}`);
        return res.status(200).json({ token });
    }
    catch (e) {
        return res.status(401).json({ error: e });
    }
};

dotenv.config();
// google oauth register
// receive the code -> get user's google email -> verify email not already in use -> create user -> create and send JWT
const google_register_handler = async (req, res) => {
    try {
        // check for params
        if (!req.query.code)
            throw new Error("Something bad happened with google auth");
        // fetch user info
        let user_info = await getGoogleUserInfo(req.query.code.toString(), "/api/register/google");
        // make sure that the email is not already in use
        if (await User.findOne({ "oauth.google.email": user_info.email }))
            throw new Error("Google account aleady in use");
        // creem userul
        let user = await User.create({ oauth: { google: user_info } });
        // cream un JWT pentru user
        const token = user.createJWT();
        res.set("Authorization", `Bearer ${token}`);
        return res.status(200).json({ token });
    }
    catch (e) {
        if (process.env.API_ONLY)
            return res.status(401).json({ error: e });
        return res.status(401).redirect("/login?errors=" + encodeURIComponent(e));
    }
};

dotenv.config();
// facebook oauth register
const facebook_register_handler = async (req, res) => {
    return res.json({ message: "facebook login" });
};

dotenv.config();
var register_router = express
    .Router()
    // all this routes will be called by the user browser
    .post("/", traditional_register_handler)
    .get("/google", google_register_handler)
    .get("/facebook", facebook_register_handler);

dotenv.config();
const dev = process.env.NODE_ENV !== "production";
const hostname = dev ? "localhost" : "0.0.0.0";
const port = dev ? 3000 : 8000;
const nextApp = next({ dev });
const nextHandle = nextApp.getRequestHandler();
const nextHook = (req, res) => {
    req.url = req.originalUrl;
    nextHandle(req, res, parse(req.url, true));
};
const expressApp = express();
const httpServer = http.createServer(expressApp);
AppendWebSockets(httpServer);
(async () => {
    if (!process.env.API_ONLY) {
        await nextApp.prepare();
    }
    else {
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

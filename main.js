import dotenv from 'dotenv';
import express from 'express';
import next from 'next';
import http from 'http';
import { Server } from 'socket.io';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import chalk from 'chalk';
import { parse } from 'url';
import bcrypt from 'bcrypt';
import axios from 'axios';

dotenv.config();
var config = {
    DATABASE: "givazy",
    USERNAME: process.env.MONGODB_USERNAME,
    PASSWORD: process.env.MONGODB_PASSWORD,
};

mongoose.set("strictQuery", true);
const MongoConnectionPromise = mongoose.connect(`mongodb+srv://${config.USERNAME}:${config.PASSWORD}@cluster0.wgurxzm.mongodb.net/${config.DATABASE}?retryWrites=true&w=majority`);

const ChatSchema = new mongoose.Schema({
    participants: [mongoose.Schema.Types.ObjectId],
    messages: [
        {
            sendAt: Number,
            content: String,
            sender: mongoose.Schema.Types.ObjectId,
        },
    ],
});
ChatSchema.methods.pushMessage = async function (message) {
    await this.update({ $push: { messages: message } });
};
const Chat = (mongoose.models.Chat || mongoose.model("Chat", ChatSchema));

dotenv.config();
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        sparse: true,
        default: null,
    },
    username: {
        type: String,
        default: null,
    },
    password: {
        type: String,
        default: null,
    },
    picture: {
        type: String,
        default: null,
    },
    friends: {
        type: Array({
            friendId: mongoose.Schema.Types.ObjectId,
            chatId: mongoose.Schema.Types.ObjectId,
        }),
        default: [],
    },
    receivedFriendRequests: {
        type: Array({
            userId: mongoose.Schema.Types.ObjectId,
            receivedAt: { type: Number, default: () => Date.now() },
            _id: false,
        }),
        default: [],
    },
    sentFriendRequests: {
        type: Array({
            userId: mongoose.Schema.Types.ObjectId,
            sentAt: { type: Number, default: () => Date.now() },
            _id: false,
        }),
        default: [],
    },
    oauth: {
        google: {
            type: {
                id: { type: String },
                email: { type: String, unique: true, sparse: true },
                verified_email: { type: String },
                name: { type: String },
                given_name: { type: String },
                family_name: { type: String },
                picture: { type: String },
                locale: { type: String },
            },
            default: null,
        },
        facebook: {
            type: {},
            default: null,
        },
    },
});
const createJWT = function () {
    return jwt.sign({ sub: this._id }, process.env.JWT_PRIVETE_KEY || "givazy", { algorithm: "HS256" });
};
const getChatsIds = async function () {
    return (await Chat.find({ participants: this._id }, { _id: 1 })).map(e => e._id.toString());
};
const updateSelf = async function () {
    const updatedUser = await User.findById(this._id);
    for (const key in this)
        this[key] = updatedUser[key];
};
const userData = function () {
    return {
        id: this.id,
        email: this.email,
        username: this.username,
        picture: this.picture,
    };
};
const friendData = function ({ currentUserId, chatId }) {
    chatId = chatId ? chatId : this.friends.find(f => f.friendId.toString() === currentUserId.toString()).chatId;
    return Object.assign(Object.assign({}, this.userData()), { chatId });
};
const currentUser = function () {
    return Object.assign(Object.assign({}, this.userData()), { oauth: this.oauth });
};
UserSchema.methods = {
    createJWT,
    getChatsIds,
    updateSelf,
    userData,
    friendData,
    currentUser,
};
const User = (mongoose.models.User || mongoose.model("User", UserSchema));
const removeFriendStream = User.watch([
    {
        $match: {
            operationType: "update",
            "updateDescription.updatedFields.receivedFriendRequests": { $exists: true },
        },
    },
    {
        $project: {
            updatedDocumentId: "$documentKey._id",
            addedFriends: {
                $setDifference: ["$updateDescription.updatedFields.receivedFriendRequests", "$fullDocumentBeforeChange.receivedFriendRequests"],
            },
        },
    },
], { fullDocument: "updateLookup", fullDocumentBeforeChange: "required" });
removeFriendStream.on("change", change => {
    console.log(change);
});

var getUserFromToken = async (token) => {
    if (!token)
        throw new Error("Auth token missing on");
    let payload = ((e) => (typeof e === "string" ? JSON.parse(e) : e)).call(null, jwt.verify(token, process.env.JWT_PRIVETE_KEY || "givazy", { algorithms: ["HS256"] }));
    if (!payload.sub)
        throw new Error("Invalid token");
    const user = await User.findOne({ _id: payload.sub });
    if (!user)
        throw new Error("The email from the JWT provided is not associeated to any user");
    return user;
};

const myOnlineFriends = (io, socket) => {
    return (data) => {
        const onlineFriends = [];
        socket.user.friends.forEach(e => io.sockets.adapter.rooms.has(e.friendId.toString()) && onlineFriends.push(e));
        return socket.emit("your online friends", onlineFriends);
    };
};

const messageFactory = function (partial_message, sender) {
    return {
        sender: sender._id,
        sendAt: Date.now(),
        content: partial_message.content,
    };
};

const sendMessage = (io, socket) => {
    return async (partialMessage, roomId) => {
        const chat = await Chat.findOne({ _id: roomId });
        // fulfil the message properties
        const message = messageFactory(partialMessage, socket.user);
        // save the message to the database
        await chat.pushMessage(message);
        // push event to all participants in that room, except the sender
        io.to(roomId).emit("push message", message, roomId);
    };
};

var io;
const AppendWebSockets = (httpServer) => {
    io = new Server(httpServer);
    io.use(async (socket, next) => {
        try {
            let user = await getUserFromToken(socket.handshake.headers["authorization"].split(" ")[1]);
            socket.user = user;
            return next();
        }
        catch (e) {
            return next(new Error("Authentication error"));
        }
    });
    io.on("connection", async (socket) => {
        // room = chat/conversation id
        // subscribe the user to all his conversations/chat rooms
        // 1. get user's conversations id's
        // 2. join the user to each conversation room
        const rooms = await socket.user.getChatsIds();
        rooms.forEach(room => socket.join(room));
        socket.join(socket.user._id.toString());
        console.log("new ws connection with: ", socket.user.username);
        // socket.emit("set sendFriendRequests", socket.user.sentFriendRequests);
        // socket.emit("set receivedFriendRequests", socket.user.receivedFriendRequests);
        // when users sends a message to a specific room/chat
        socket.on("send message", sendMessage(io, socket));
        socket.on("my online friends", myOnlineFriends(io, socket));
        setInterval(() => {
            const onlineFriends = [];
            socket.user.friends.forEach(e => io.sockets.adapter.rooms.has(e.friendId.toString()) && onlineFriends.push(e));
            socket.emit("set online friends", onlineFriends);
        }, 5 * 1000);
        // socket.on("removeFriend", removeFriend(io, socket));
        // socket.on("sendFriendRequest", sendFriendRequest(io, socket));
        // socket.on("cancelFriendRequest", cancelFriendRequest(io, socket));
        // socket.on("acceptFriendRequest", acceptFriendRequest(io, socket));
    });
};

dotenv.config();
const auth_middleware = async (req, res, next) => {
    var _a;
    try {
        req.user = await getUserFromToken((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1]);
        return next();
    }
    catch (e) {
        // if (process.env.NODE_ENV !== "production") console.log(e);
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
    // daca email sau password lipseste
    if (!email || !password) {
        return res.status(401).json({ error: "Some credentials are missing" });
    }
    // cauta in bazade da date un user cu emailul dat
    const user = await User.findOne({ email });
    // daca nu a fost gasit nici un user
    if (!user) {
        return res.status(401).json({ error: "Email not associeted with any user" });
    }
    // se compara parola introdusa de user si parola corecta din baza de date
    if (!(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: "Password not correct" });
    }
    // create a JWT for the user witch will be used to authenticate the user without providing email and password on every request
    const token = user.createJWT();
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

var inject_jwt_into_localstorage = (token) => {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <script>
                localStorage.setItem("token","${token}");
                window.location="/";
            </script>
        </head>
    </html>
`;
};

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
        return res.status(200).send(inject_jwt_into_localstorage(token));
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
        let user = await User.create({ username: user_info.name, picture: user_info.picture, oauth: { google: user_info } });
        // cream un JWT pentru user
        const token = user.createJWT();
        return res.status(200).send(inject_jwt_into_localstorage(token));
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
const delete_user = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user.id);
        res.sendStatus(200);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
};

const get_chats = async (req, res) => {
    try {
        const chats = await Chat.find({ _id: { $in: req.user.friends.map(e => e.chatId) } });
        res.json({ data: chats.map(c => ({ id: c._id, participants: c.participants, messages: c.messages })) });
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
};

dotenv.config();
const getCurrentUserData = async (req, res) => {
    res.json({ data: req.user.currentUser() });
};

dotenv.config();
const getUsersData = async (req, res) => {
    try {
        const usersIds = req.body.usersIds;
        const users = await User.find({ _id: { $in: usersIds } });
        users.forEach(user => {
            if (!user.picture)
                user.picture = user.oauth.google.picture || "img/blank_profile.png";
        });
        return res.json({ data: users });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: e });
    }
};

const acceptFriendRequest = async (req, res) => {
    try {
        const userId = req.query.userId.toString();
        await req.user.updateSelf();
        // make sure the user is in the friend requests list
        if (!req.user.receivedFriendRequests.map(e => e.userId.toString()).includes(userId))
            throw new Error(userId + " is not in your Received Friend Requests List");
        const newChat = await Chat.create({ participants: [userId, req.user._id] });
        const requestSenderData = await User.findByIdAndUpdate(userId, {
            $pull: {
                sentFriendRequests: { userId: req.user._id },
            },
            $push: {
                friends: { friendId: req.user._id, chatId: newChat._id },
            },
        }, { new: true });
        const requestAccepterData = await User.findByIdAndUpdate(req.user._id, {
            $pull: {
                receivedFriendRequests: { userId: userId },
            },
            $push: {
                friends: { friendId: userId, chatId: newChat._id },
            },
        }, { new: true });
        io.to(userId).emit("friend request accepted", requestAccepterData);
        return res.json({ data: requestSenderData.friendData({ currentUserId: req.user.id }) });
    }
    catch (e) {
        console.log(e);
    }
};

const cancelFriendRequest = async (req, res) => {
    try {
        const userId = req.query.userId.toString();
        // make sure the user is in the friends requests list
        if (!req.user.sentFriendRequests.map(e => e.userId.toString()).includes(userId))
            throw new Error(userId + " is not in your Friend Requests List");
        const user = await User.findById(userId);
        if (!user)
            throw new Error(userId + " doesn't exist");
        const theOtherUser = await User.findByIdAndUpdate(userId, {
            $pull: {
                receivedFriendRequests: { userId: req.user._id },
            },
        }, { new: true });
        const currentUser = await User.findByIdAndUpdate(req.user._id, {
            $pull: {
                sentFriendRequests: { userId: userId },
            },
        }, { new: true });
        io.to(userId).emit("friend request canceled", theOtherUser);
        const request = {
            friendData: theOtherUser.userData(),
            sendAt: req.user.sentFriendRequests.find(e => e.userId.toString() === theOtherUser.id).sentAt,
        };
        return res.json({ data: request });
    }
    catch (e) {
        console.log(e);
    }
};

const get_friends = async (req, res) => {
    try {
        const friends = await User.find({ _id: { $in: req.user.friends.map(f => f.friendId) } });
        return res.json({ data: friends.map(f => f.friendData({ currentUserId: req.user._id })) });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: e });
    }
};

dotenv.config();
const getReceivedFriendRequests = async (req, res) => {
    try {
        const usersData = await User.find({ _id: { $in: req.user.receivedFriendRequests.map(e => e.userId) } });
        const friendRequests = usersData.map(u => {
            return {
                friendData: u.userData(),
                receivedAt: req.user.receivedFriendRequests.find(e => e.userId.toString() === u.id).receivedAt,
            };
        });
        res.json({ data: friendRequests });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: e });
    }
};

dotenv.config();
const getSentFriendRequests = async (req, res) => {
    try {
        const usersData = await User.find({ _id: { $in: req.user.sentFriendRequests.map(e => e.userId) } });
        const friendRequests = usersData.map(u => {
            return {
                friendData: u.userData(),
                sendAt: req.user.sentFriendRequests.find(e => e.userId.toString() === u.id).sentAt,
            };
        });
        res.json({ data: friendRequests });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: e });
    }
};

const rejectFriendRequest = async (req, res) => {
    try {
        const userId = req.query.userId.toString();
        // make sure the user is in the friends requests list
        if (!req.user.sentFriendRequests.map(e => e.userId.toString()).includes(userId))
            throw new Error(userId + " is not in your Friend Requests List");
        const user = await User.findById(userId);
        if (!user)
            throw new Error(userId + " doesn't exist");
        const requestSenderData = await User.findByIdAndUpdate(userId, {
            $pull: {
                receivedFriendRequests: { userId: req.user._id },
            },
        }, { new: true });
        const rejecterData = await User.findByIdAndUpdate(req.user.id, {
            $pull: {
                sentFriendRequests: { userId: userId },
            },
        }, { new: true });
        io.to(userId).emit("friend request rejected", rejecterData);
        return res.json({ data: rejecterData.userData() });
    }
    catch (e) {
        console.log(e);
    }
};

const sendFriendRequest = async (req, res) => {
    try {
        const userId = req.query.userId.toString();
        // make sure the user is not already a friend
        if (req.user.friends.map(e => e.friendId.toString()).includes(userId))
            throw new Error(userId + " is already your friend");
        // make sure the user is not already in the friends requests list
        if (req.user.sentFriendRequests.map(e => e.userId.toString()).includes(userId))
            throw new Error(userId + " is already your Friend Requests List");
        const user = await User.findById(userId);
        if (!user)
            throw new Error(userId + " doesn't exist");
        const receiverData = await User.findByIdAndUpdate(userId, {
            $push: {
                receivedFriendRequests: {
                    userId: req.user._id,
                    receivedAt: Date.now(),
                },
            },
        }, { new: true });
        const senderData = await User.findByIdAndUpdate(req.user._id, {
            $push: {
                sentFriendRequests: {
                    userId: userId,
                    sentdAt: Date.now(),
                },
            },
        }, { new: true });
        io.to(userId).emit("set CurrentUser", receiverData);
        const request = {
            friendData: receiverData.userData(),
            sendAt: senderData.sentFriendRequests.find(e => e.userId.toString() === receiverData.id).sentAt,
        };
        return res.json({ data: request });
    }
    catch (e) {
        console.log(e);
    }
};

const removeFriend = async (req, res) => {
    try {
        const friendId = req.query.friendId.toString();
        if (!req.user.friends.map(e => e.friendId.toString()).includes(friendId))
            throw new Error(friendId + " is not in your friends list");
        const receiverData = await User.findByIdAndUpdate(friendId, { $pull: { friends: { friendId: req.user.id } } }, { new: true });
        const currentUser = await User.findByIdAndUpdate(req.user._id, { $pull: { friends: { friendId: friendId } } }, { new: true });
        io.to(friendId).emit("friend removed", currentUser);
        res.json({ data: receiverData });
    }
    catch (e) {
        console.log(e);
    }
};

dotenv.config();
var user_router = express
    .Router()
    //
    .get("/", getCurrentUserData)
    .delete("/", delete_user)
    //
    .get("/friends", get_friends)
    .delete("/friends", removeFriend)
    //
    .get("/friends/requests/received", getReceivedFriendRequests)
    .put("/friends/requests/received", acceptFriendRequest)
    .delete("/friends/requests/received", rejectFriendRequest)
    //
    .get("/friends/requests/sent", getSentFriendRequests)
    .put("/friends/requests/sent", sendFriendRequest)
    .delete("/friends/requests/sent", cancelFriendRequest)
    //
    .get("/chats", get_chats)
    //
    .post("/getUsersData", getUsersData);

const searchGroups = async (req, res) => {
    try {
        return res.json({ data: [] });
    }
    catch (e) {
        return res.json({ error: e });
    }
};

const countLimit = 20;
const searchUsers = async (req, res) => {
    var _a;
    try {
        const searchInput = req.query.input.toString();
        const skip = parseInt(((_a = req.query.skip) === null || _a === void 0 ? void 0 : _a.toString()) || "0");
        const usersData = await User.aggregate([
            {
                $match: {
                    $and: [
                        { $or: [{ username: new RegExp(searchInput, "i") }, { _id: searchInput.slice(0, 24).padEnd(24, "0") }] },
                        { _id: { $nin: [...req.user.friends.map(f => f.friendId), req.user._id] } },
                    ],
                },
            },
            {
                $group: {
                    _id: null,
                    totalMatch: { $sum: 1 },
                    data: { $push: "$$ROOT" },
                },
            },
            {
                $project: {
                    _id: 0,
                    totalMatch: 1,
                    data: { $slice: ["$data", skip, countLimit] }, // limit data array to 10 elements
                },
            },
        ]);
        usersData[0].data = usersData[0].data.map(e => (Object.assign(Object.assign({}, e), { id: e._id })));
        return res.json(Object.assign({}, usersData[0]));
    }
    catch (e) {
        console.log(e);
        return res.json({ error: e });
    }
};

dotenv.config();
var searchRouter = express.Router().get("/users", searchUsers).get("/groups", searchGroups);

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
    await MongoConnectionPromise;
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
        expressApp.use("/__nextjs_original-stack-frame", nextHook);
        expressApp.use("/api/login", login_router);
        expressApp.use("/api/register", register_router);
        // Serve Next.js pages
        if (!process.env.API_ONLY) {
            expressApp.get("/", nextHook);
            expressApp.use("/login", nextHook);
            expressApp.use("/register", nextHook);
        }
    }
    // redirect to login if missing the cookie/jwt
    expressApp.use("", auth_middleware);
    // auth required
    {
        expressApp.use("/api/test-token", (req, res) => res.sendStatus(200));
        expressApp.use("/api/user", user_router);
        expressApp.use("/api/search", searchRouter);
    }
    httpServer.listen(port, hostname, () => {
        console.log(`>>> Ready on http://${hostname}:${port}`);
    });
})();

import dotenv from 'dotenv';
import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import { Server } from 'socket.io';
import mongoose from 'mongoose';

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

const AppendWebSockets = server => {
    const io = new Server(server, { path: "/chat.socket" });
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
const dev = process.env.NODE_ENV !== "production";
const hostname = dev ? "localhost" : "0.0.0.0";
const port = dev ? 3000 : 8000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
const server = createServer(async (req, res) => {
    try {
        await handle(req, res, parse(req.url, true));
    }
    catch (err) {
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

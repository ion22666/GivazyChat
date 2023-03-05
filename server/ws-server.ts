import { Server, Socket } from "socket.io";
import { Chat } from "./models/chat";
import getUserFromToken from "./utils/getUserFromToken";

export const AppendWebSockets = (httpServer: any) => {
    const io = new Server(httpServer);
    io.use(async (socket: Socket & { user: global.User }, next) => {
        try {
            let user = await getUserFromToken(socket.handshake.headers["authorization"].split(" ")[1]);
            socket.user = user;
            return next();
        } catch (e) {
            return next(new Error("Authentication error"));
        }
    });

    io.on("connection", socket => {
        console.log("new ws connection ", socket.id);
        socket.emit("pong");

        socket.on("ping", () => socket.emit("pong"));

        socket.on("update request", async () => {
            socket.emit("update response", (await Chat.find({}))[0].messages);
        });
    });
};

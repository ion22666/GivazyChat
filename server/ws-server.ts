import { Server } from "socket.io";
import { Chat } from "./models/chat";

export const AppendWebSockets = (server: any) => {
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

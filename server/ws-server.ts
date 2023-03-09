import { Server, Socket } from "socket.io";
import { Chat } from "./models/chat";
import getUserFromToken from "./utils/getUserFromToken";
import { messageFactory } from "./utils/messageFactory";

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

    io.on("connection", async (socket: Socket & { user: global.User }) => {
        // room = chat/conversation id

        // subscribe the user to all his conversations/chat rooms
        // 1. get user's conversations id's
        // 2. join the user to each conversation room
        const rooms = await socket.user.getChatsIds();
        rooms.forEach(room => socket.join(room));

        socket.join(socket.user._id.toString());

        console.log("new ws connection with: ", socket.user.username);

        // when users sends a message to a specific room/chat
        socket.on("send message", async (partial_message: global.PartialMessage, room_id: string) => {
            const chat = await Chat.findOne({ _id: room_id });

            // fulfil the message properties
            const message = messageFactory(partial_message, socket.user);

            // save the message to the database
            await chat.pushMessage(message);

            // push event to all participants in that room, except the sender
            io.to(room_id).emit("push message", message, room_id);
        });

        socket.on("my online friends", () => {
            const onlineFriends = [];
            socket.user.friends.forEach(e => io.sockets.adapter.rooms.has(e.friendId.toString()) && onlineFriends.push(e));
            return socket.emit("your online friends", onlineFriends);
        });
    });
};

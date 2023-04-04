import { Server, Socket } from "socket.io";
import getUserFromToken from "./utils/getUserFromToken";
import { myOnlineFriends } from "./ws-handlers/myOnlineFriends";
import { updateLastReadMessageTimeStamp } from "./ws-handlers/updateLastReadMessageTimeStamp";

export interface CustomSocket extends Socket {
    user: global.User;
}
export var io: Server;
export const AppendWebSockets = (httpServer: any) => {
    io = new Server(httpServer);
    io.use(async (socket: CustomSocket, next) => {
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
        console.log("his rooms: ", rooms);

        // socket.emit("set sendFriendRequests", socket.user.sentFriendRequests);
        // socket.emit("set receivedFriendRequests", socket.user.receivedFriendRequests);

        socket.on("my online friends", () => myOnlineFriends(io, socket));

        socket.on("update last read message timestamp", updateLastReadMessageTimeStamp(io, socket));

        myOnlineFriends(io, socket);
        // setInterval(() => {
        //     myOnlineFriends(io, socket);
        // }, 5 * 1000);
    });
};

export type WsHandler = (io: Server, socket: CustomSocket) => (...args: any[]) => any;

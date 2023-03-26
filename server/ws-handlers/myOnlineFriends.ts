import { WsHandler } from "../ws-server";

export const myOnlineFriends: WsHandler = (io, socket) => {
    return (data: any) => {
        const onlineFriends = [];
        socket.user.friends.forEach(e => io.sockets.adapter.rooms.has(e.friendId.toString()) && onlineFriends.push(e));
        return socket.emit("your online friends", onlineFriends);
    };
};

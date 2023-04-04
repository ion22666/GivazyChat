import { WsHandler } from "../ws-server";

export const myOnlineFriends: WsHandler = (io, socket) => {
    socket.user.updateSelf();
    const onlineFriends: string[] = [];
    socket.user.friends.forEach(e => io.sockets.adapter.rooms.has(e.friendId.toString()) && onlineFriends.push(e.friendId));
    socket.emit("set online friends", onlineFriends);
    return () => 0;
};

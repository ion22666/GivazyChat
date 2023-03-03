import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const socket = io({ path: "/chat.socket", autoConnect: false });

function HomePage() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [lastPong, setLastPong] = useState(null);
    const [messages, setMessages] = useState<global.Message[]>([]);

    useEffect(() => {
        socket.on("connect", () => setIsConnected(true));

        socket.on("disconnect", () => setIsConnected(false));

        socket.on("pong", () => setLastPong(new Date().toISOString()));

        socket.on("update response", (messages: global.Message[]) => {
            console.log(messages);
            setMessages(messages);
        });

        socket.connect();

        return () => {
            socket.off("connect");
            socket.off("disconnect");
            socket.off("pong");
        };
    }, []);

    const sendPing = () => {
        socket.emit("ping", "HELLO");
    };

    return (
        <div>
            <p>Connected: {"" + isConnected}</p>
            <p>Last pong: {lastPong || "-"}</p>

            <button className="block p-2 bg-slate-700 rounded-md m-2 text-lime-600" onClick={sendPing}>
                {"Send ping"}
            </button>

            <button className="block p-2 bg-slate-700 rounded-md m-2 text-lime-600" onClick={() => socket.emit("update request")}>
                {"Update messages"}
            </button>

            <div className="bg-black p-6">
                {messages.map(message => (
                    <div style={{ color: "white", margin: "1vh" }}>{message.content}</div>
                ))}
            </div>
        </div>
    );
}
export default HomePage;

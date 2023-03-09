import App from "next/app";
import * as React from "react";

import io, { Socket } from "socket.io-client";

import DesktopIndexComponent from "../components/DesktopIndexComponent";
import MobileIndexComponent from "../components/MobileIndexComponent";

let socket: Socket;

interface AppContext {
    userData: global.UserData | undefined;
    setUserData: React.Dispatch<global.UserData>;
    chats: global.Chat[] | undefined;
    setChats: React.Dispatch<global.Chat[]>;
    activeChat: global.Chat | undefined;
    setActiveChat: React.Dispatch<global.Chat>;
    userFriendsData: global.UserData[] | undefined;
    setUserFriendsData: React.Dispatch<global.UserData[]>;
    forceReRenderChat: () => void;

    socket: Socket;
    isMobile: boolean;
}

const InitialAppContext: Partial<AppContext> = {
    forceReRenderChat(this: AppContext) {
        // 1. find the index of the activeChat in the chats array
        const index = this.chats.findIndex(c => c._id === this.activeChat._id);
        // 2. create a clone of that chat ( we suppose activeChat = chats[index] )
        const chatClone = Object.assign({}, this.chats[index]);
        // 3. replace the old chat
        this.chats[index] = chatClone;
        // 4. trigger the re-render
        this.setActiveChat(chatClone);
    },
    socket,
};

export const AppContext = React.createContext<AppContext>(InitialAppContext as AppContext);

function HomePage() {
    const [userData, setUserData] = React.useState<any>();
    const [userFriendsData, setUserFriendsData] = React.useState<any>();
    const [chats, setChats] = React.useState<any>();
    const [activeChat, setActiveChat] = React.useState<any>();

    const [isMobile, setIsMobile] = React.useState<any>(true);

    React.useEffect(() => {
        socket = io({
            autoConnect: false,
            extraHeaders: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        socket.connect();
    }, []);

    React.useEffect(() => {
        setIsMobile(window.matchMedia("(max-aspect-ratio: 1/1)").matches);
        window.matchMedia("(max-aspect-ratio: 1/1)").onchange = e => setIsMobile(e.matches);
    }, []);

    // fetch the api
    React.useEffect(() => {
        // fetch user data
        (async () => {
            let json_body = await (await window.request("/api/user/data")).json();
            if (json_body.error) alert(json_body.error);
            if (json_body.data) setUserData(json_body.data);
        })();
        // fetch user's friends data
        (async () => {
            let json_body = await (await window.request("/api/user/friends")).json();
            if (json_body.error) alert(json_body.error);
            if (json_body.data) setUserFriendsData(json_body.data);
        })();
        // fetch user's chats data
        (async () => {
            let json_body = await (await window.request("/api/user/chats")).json();
            if (json_body.error) alert(json_body.error);
            if (json_body.data) setChats(json_body.data);
        })();
    }, []);

    const AppContextValue: AppContext = {
        ...(InitialAppContext as AppContext),
        userData,
        setUserData,
        chats,
        setChats,
        activeChat,
        setActiveChat,
        userFriendsData,
        setUserFriendsData,
        socket,
        isMobile,
    };

    return <AppContext.Provider value={AppContextValue}>{isMobile ? <MobileIndexComponent /> : <DesktopIndexComponent />}</AppContext.Provider>;
}

export default HomePage;

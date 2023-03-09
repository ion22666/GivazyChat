import * as React from "react";

import io, { Socket } from "socket.io-client";
import Chat from "../components/Chat";

import FirstSection from "../components/FirstSection";
import FriendsSection from "../components/FriendsSection";
import SecondSection from "../components/SecondSection";

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

    const desktopReturn = (
        <div className="flex h-full w-full flex-col">
            <div className="flex  h-full w-full flex-grow flex-row gap-2 bg-black p-2">
                <div className="w-14 rounded-lg bg-Gray1">
                    <FirstSection />
                </div>
                <div className="w-72 rounded-lg bg-Gray2">
                    <SecondSection />
                </div>
                <div className="flex-grow rounded-lg bg-Gray3">{activeChat ? <Chat /> : <FriendsSection />}</div>
            </div>
        </div>
    );

    const mobileReturn = (
        <div className="flex h-full w-full flex-col">
            <div className="flex h-full w-full flex-grow flex-row gap-2 bg-black">
                <div className="flex-grow bg-Gray3">{activeChat ? <Chat /> : <FriendsSection />}</div>
            </div>
<<<<<<< HEAD
            
            <div className="w-full h-10 bg-white">
             
            </div>
=======
            <div className="h-10 w-full bg-white"></div>
>>>>>>> 04c6e2c18deddd835a9bd0d79735590961d3e934
        </div>
    );

    return <AppContext.Provider value={AppContextValue}>{isMobile ? mobileReturn : desktopReturn}</AppContext.Provider>;
}

export default HomePage;

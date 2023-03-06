import * as React from "react";
import Chat from "../components/Chat";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";

interface AppContext {
    userData: global.UserData;
    setUserData: React.Dispatch<global.UserData>;
    activeChat: global.Chat;
    setActiveChat: React.Dispatch<global.Chat>;
    forceReRenderChat: () => void;
}

const chats: global.Chat[] = [];

const InitialAppContext: AppContext = {
    userData: null,
    setUserData: null,
    activeChat: null,
    setActiveChat: null,
    forceReRenderChat(this: AppContext) {
        // 1. find the index of the activeChat in the chats array
        const index = chats.findIndex(c => c._id === this.activeChat._id);
        // 2. create a clone of that chat ( we suppose activeChat = chats[index] )
        const chatClone = Object.assign({}, chats[index]);
        // 3. replace the old chat
        chats[index] = chatClone;
        // 4. trigger the re-render
        this.setActiveChat(chatClone);
    },
};

export const AppContext = React.createContext<AppContext>(InitialAppContext);

function HomePage() {
    let [userData, setUserData] = React.useState(null);
    const [activeChat, setActiveChat] = React.useState<global.Chat>(null);

    React.useEffect(() => {
        (async () => {
            let json_body = await (await window.request("/api/user/data")).json();
            if (json_body.error) alert(json_body.error);
            if (json_body.data) setUserData(json_body.data);
        })();
    }, []);

    return (
        <AppContext.Provider value={{ ...InitialAppContext, userData, setUserData, activeChat, setActiveChat }}>
            <div className="h-full w-full flex flex-row bg-black">
                <div className="w-14 bg-neutral-600 flex flex-col gap-1 p-1">
                    <FirstSection />
                </div>
                <div className="bg-neutral-700 w-72">
                    <SecondSection />
                </div>
                <div className="flex-grow bg-neutral-800">
                    <Chat />
                </div>
            </div>
        </AppContext.Provider>
    );
}

export default HomePage;

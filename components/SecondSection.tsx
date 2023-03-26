import * as React from "react";
import { useDispatch } from "react-redux";

import { AppContext } from "../pages";
import { VerdeColor } from "../pages/_app";
import { chatSlice, useActiveChatId, useAvailableChats } from "../src/features/chatSlice";
import { useFriends, useOnlineFriends } from "../src/features/friendsSlice";

const SecondSection: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const { activeView, setActiveView, isMobile } = React.useContext(AppContext);
    const friends = useFriends();
    const onlineFriends = useOnlineFriends();
    const activeChatId = useActiveChatId();
    const availableChats = useAvailableChats();

    const isReady = friends.length > 0;

    if (!isReady) return <div>{"Loading..."}</div>;

    function handleFriendRowClick(id: string) {
        if (!availableChats.includes(id)) return;
        setActiveView("chat");
        dispatch(chatSlice.actions.setActiveChatId(id));
    }

    const desktopReturn = (
        <div className="h-full w-full rounded-lg p-4">
            <div className="w-full pb-4 text-xl text-stone-300"> {"Direct Messages"} </div>
            {friends.map(friendData => {
                const chatId = friendData.chatId;

                // isSelected = daca chatul activ este chatul cu acest friend
                const isSelected = activeView === "chat" && activeChatId === chatId;
                const isOnline = onlineFriends.find(id => id === friendData.id);
                return (
                    <div
                        key={friendData.id}
                        onClick={() => handleFriendRowClick(chatId)}
                        className="flex h-10 w-full cursor-pointer flex-row items-center gap-4 rounded-md p-1 duration-100 ease-linear hover:gap-2 hover:bg-white hover:bg-opacity-10"
                    >
                        <div className="aspect-square h-full">
                            <img src={friendData.picture} referrerPolicy="no-referrer" className="aspect-square h-full rounded-full" />
                            <div
                                style={{ backgroundColor: isOnline ? VerdeColor : "gray" }}
                                className="absolute bottom-0 right-0 box-content aspect-square h-2 translate-x-1/4 translate-y-1/4 rounded-full border-4 border-Gray2"
                            ></div>
                        </div>
                        <div className="text-lg" style={{ color: isSelected ? VerdeColor : "white" }}>
                            {friendData.username}
                        </div>
                    </div>
                );
            })}
        </div>
    );
    const mobileReturn = desktopReturn;
    return isMobile ? mobileReturn : desktopReturn;
};

export default SecondSection;

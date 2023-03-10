import * as React from "react";

import { AppContext } from "../pages";
import { VerdeColor } from "../pages/_app";

const SecondSection: React.FunctionComponent = () => {
    const { userData, userFriendsData, setUserFriendsData, chats, activeChat, setActiveView, setActiveChat, socket, isMobile } = React.useContext(AppContext);

    const isReady = userData && userFriendsData && chats;

    React.useEffect(() => {
        if (!isReady) return;
        socket.emit("my online friends");
        socket.on("your online friends", (online_friends: { friendId: string; chatId: string }[]) => {
            online_friends.forEach(({ friendId, chatId }) => {
                const friendData = userFriendsData.find(e => e._id === friendId);
                if (friendData) friendData.isOnline = true;
            });
            setUserFriendsData([...userFriendsData]);
        });
        return () => {
            socket.off("your online friends");
        };
    }, []);

    if (!isReady) return <div>{"Loading..."}</div>;

    function goToChat(id: string) {
        setActiveView("chat");
        setActiveChat(chats.find(e => e._id === id));
    }

    return (
        <div className="h-full w-full rounded-lg p-4">
            <div className="w-full pb-4 text-xl text-stone-300"> {"Direct Messages"} </div>
            {userFriendsData.map(friendData => {
                const chatId = userData.friends.find(e => e.friendId === friendData._id).chatId;
                const isActive = activeChat && activeChat._id === chatId;
                return (
                    <div
                        key={friendData._id}
                        onClick={() => goToChat(chatId)}
                        className="flex h-10 w-full cursor-pointer flex-row items-center gap-4 rounded-md p-1 duration-100 ease-linear hover:gap-2 hover:bg-white hover:bg-opacity-10"
                    >
                        <div className="aspect-square h-full">
                            <img src={friendData.picture} referrerPolicy="no-referrer" className="aspect-square h-full rounded-full" />
                            <div
                                style={{ backgroundColor: friendData.isOnline ? VerdeColor : "gray" }}
                                className="absolute bottom-0 right-0 box-content aspect-square h-2 translate-x-1/4 translate-y-1/4 rounded-full border-4 border-Gray2"
                            ></div>
                        </div>
                        <div className="text-lg" style={{ color: isActive ? VerdeColor : "white" }}>
                            {friendData.username}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default SecondSection;

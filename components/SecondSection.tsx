import * as React from "react";

import { AppContext } from "../pages";

const SecondSection: React.FunctionComponent = () => {
    const { userData, userFriendsData, setUserFriendsData, chats, activeChat, setActiveChat, socket, isMobile } = React.useContext(AppContext);

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

    return (
        <div className="w-full h-full p-4 rounded-lg">
            <div className="w-full text-xl text-stone-300 pb-4"> {"Direct Messages"} </div>
            {userFriendsData.map(friendData => {
                const chatId = userData.friends.find(e => e.friendId === friendData._id).chatId;
                const isActive = activeChat && activeChat._id === chatId;
                return (
                    <div
                        key={friendData._id}
                        onClick={() => setActiveChat(chats.find(e => e._id === chatId))}
                        className={
                            (isActive ? "" : "") +
                            " " +
                            "h-10 flex flex-row w-full items-center gap-4 hover:gap-2 duration-100 ease-linear hover:bg-white hover:bg-opacity-10 rounded-md p-1 cursor-pointer"
                        }
                    >
                        <div className="h-full aspect-square">
                            <img src={friendData.picture} referrerPolicy="no-referrer" className="h-full aspect-square rounded-full" />
                            <div
                                style={{ backgroundColor: friendData.isOnline ? "rgb(89 226 84)" : "#444" }}
                                className="absolute bottom-0 right-0 h-2 aspect-square rounded-full translate-x-1/4 translate-y-1/4 border-4 border-Gray2 box-content"
                            ></div>
                        </div>
                        <div className={(activeChat && activeChat._id === chatId ? "text-Verde" : "text-white") + " " + "text-lg"}>{friendData.username}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default SecondSection;

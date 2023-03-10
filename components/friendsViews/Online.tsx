import * as React from "react";

import { AppContext } from "../../pages";
import SearchIcon from "../svg/Search";
import SearchComponent from "../SearchComponent";
import { VerdeColor } from "../../pages/_app";
import VerticalDotsIcon from "../svg/VerticalDotsIcon";
import ChatSquareIcon from "../svg/ChatSquareIcon";
import ChatSquareIconFill from "../svg/ChatSquareFillIcon";

const OnlineFriends: React.FunctionComponent = props => {
    const { userData, userFriendsData, chats, activeChat, setActiveChat, setUserFriendsData, socket } = React.useContext(AppContext);

    if (!userData || !userFriendsData || !chats) return <div>{"Loading..."}</div>;

    const onlineFriends = userFriendsData.filter(e => e.isOnline);

    React.useEffect(() => {
        setOnScreenFriends([...userFriendsData.filter(e => e.isOnline)]);
    }, [userFriendsData]);

    const [onScreenFriends, setOnScreenFriends] = React.useState(onlineFriends);

    return (
        <div {...props} className="">
            <SearchComponent<global.UserData> state={onlineFriends} setState={setOnScreenFriends} filter={(text, e) => e.username.toLowerCase().includes(text.toLowerCase())} />

            <div>{`Online - ${onlineFriends.length}`}</div>
            {onScreenFriends.map(friendData => {
                const chatId = userData.friends.find(e => e.friendId === friendData._id).chatId;
                const isActive = activeChat && activeChat._id === chatId;
                return (
                    <div
                        key={friendData._id}
                        onClick={() => setActiveChat(chats.find(e => e._id === chatId))}
                        className="flex h-10 w-full cursor-pointer flex-row content-between items-center gap-4 rounded-md p-1 duration-100 ease-linear hover:gap-2 hover:bg-white hover:bg-opacity-10"
                    >
                        <div className="h-full">
                            <div className="aspect-square h-full">
                                <img src={friendData.picture} referrerPolicy="no-referrer" className="aspect-square h-full rounded-full" />
                                <div
                                    style={{ backgroundColor: friendData.isOnline ? "rgb(89 226 84)" : "#444" }}
                                    className="absolute bottom-0 right-0 box-content aspect-square h-2 translate-x-1/4 translate-y-1/4 rounded-full border-4 border-Gray2"
                                ></div>
                            </div>
                            <div className={"text-lg"} style={{ color: isActive ? VerdeColor : "white" }}>
                                {friendData.username}
                            </div>
                        </div>
                        <div className="h-full px-2">
                            <div className="h-full p-1 odd:hidden hover:odd:hidden hover:even:hidden">
                                <ChatSquareIcon className="h-full" />
                                <ChatSquareIconFill className="h-full" />
                            </div>
                            <div className="h-full p-1">
                                <VerticalDotsIcon className="h-full" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default OnlineFriends;

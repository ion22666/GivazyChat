import * as React from "react";

import { AppContext } from "../../pages";
import SearchIcon from "../svg/Search";
import SearchComponent from "../SearchComponent";

const OnlineFriends: React.FunctionComponent = props => {
    const { userData, userFriendsData, chats, activeChat, setActiveChat,setUserFriendsData, socket } = React.useContext(AppContext);

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

export default OnlineFriends;

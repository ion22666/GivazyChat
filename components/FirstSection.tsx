import * as React from "react";
import Router from "next/router";

import { AppContext, views } from "../pages";

import LogoutIcon from "../components/svg/Logout";
import TrashIcon from "../components/svg/Trash";
import HomeIcon from "./svg/Home";
import SearchIcon from "./svg/Search";
import FriendIcon from "./svg/Friend";
import ChatBubbleIcon from "./svg/ChatBubble";
import { useDispatch } from "react-redux";
import { useCurrentUser } from "../src/features/currentUserSlice";
import NumberNotification from "./utils/NumberNotification";
import { useTotalUnredMessagesForCurrentUser } from "../src/features/chatSlice";
import { useReceivedFriendRequestsCount } from "../src/features/friendRequestsSlice";
import GearFillIcon from "./svg/GearFillIcon";

const FirstSection: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const { activeView, setActiveView, isMobile } = React.useContext(AppContext);
    const totalUnredMessages = useTotalUnredMessagesForCurrentUser();
    const friendRequestsNumber = useReceivedFriendRequestsCount();

    function logoutUser() {
        window.token = undefined;
        window.localStorage.removeItem("token");
        Router.push("/login");
    }
    async function deleteUser() {
        await window.request("/api/user/delete");
        window.token = undefined;
        window.localStorage.removeItem("token");
        Router.push("/login");
    }

    const desktopReturn = (
        <div className="flex h-full w-full flex-col content-between p-1">
            <div className="w-full flex-grow [&>*]:mb-2">
                <div
                    onClick={() => setActiveView("chat")}
                    className={`w-full rounded-full ${
                        activeView === "chat" ? "bg-Verde p-3" : "cursor-pointer bg-white bg-opacity-10 p-2 duration-100 ease-linear hover:bg-opacity-20 hover:p-3"
                    }`}
                >
                    <ChatBubbleIcon className={`w-full ${activeView === "chat" ? "text-black" : "text-white"}`} />
                    {totalUnredMessages > 0 && <NumberNotification value={totalUnredMessages} />}
                </div>
                <div
                    onClick={() => setActiveView("friends")}
                    className={`w-full rounded-full ${
                        activeView === "friends" ? "bg-Verde p-3" : "cursor-pointer bg-white bg-opacity-10 p-2 duration-100 ease-linear hover:bg-opacity-20 hover:p-3"
                    }`}
                >
                    <FriendIcon className={`w-full ${activeView === "friends" ? "text-black" : "text-white"}`} />
                    {friendRequestsNumber > 0 && <NumberNotification value={friendRequestsNumber} />}
                </div>
                <div
                    onClick={() => setActiveView("search")}
                    className={`w-full rounded-full ${
                        activeView === "search" ? "bg-Verde p-3" : "cursor-pointer bg-white bg-opacity-10 p-2 duration-100 ease-linear hover:bg-opacity-20 hover:p-3"
                    }`}
                >
                    <SearchIcon className={`w-full ${activeView === "search" ? "text-black" : "text-white"}`} />
                </div>

                <div className="h-1 rounded-full bg-Verde"></div>
            </div>
            <div className="w-full [&>*]:mt-2 ">
                <div
                    onClick={() => {}}
                    className="flex aspect-square w-full cursor-pointer justify-center rounded-full bg-Verde p-2 align-middle hover:bg-white active:brightness-75"
                >
                    <GearFillIcon className="w-full overflow-visible text-Gray3 duration-100 ease-linear hover:scale-90 hover:text-Verde" />
                </div>
            </div>
        </div>
    );

    const mobileReturn = <></>;

    return isMobile ? mobileReturn : desktopReturn;
};

export default FirstSection;

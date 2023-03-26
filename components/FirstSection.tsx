import * as React from "react";
import Router from "next/router";

import { AppContext } from "../pages";

import LogoutIcon from "../components/svg/Logout";
import TrashIcon from "../components/svg/Trash";
import HomeIcon from "./svg/Home";
import SearchIcon from "./svg/Search";
import FriendIcon from "./svg/Friend";
import ChatBubbleIcon from "./svg/ChatBubble";
import { useDispatch } from "react-redux";
import { useCurrentUser } from "../src/features/currentUserSlice";

const FirstSection: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const { setActiveView, isMobile } = React.useContext(AppContext);

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
            <div className="w-full flex-grow [&>*]:mb-2 [&>*]:cursor-pointer">
                <div onClick={() => setActiveView("chat")} className="w-full rounded-full bg-white bg-opacity-10 p-2 duration-100 ease-linear hover:bg-opacity-20 hover:p-3">
                    <ChatBubbleIcon className="w-full text-Verde" />
                </div>
                <div onClick={() => setActiveView("friends")} className="w-full rounded-full bg-white bg-opacity-10 p-2 duration-100 ease-linear hover:bg-opacity-20 hover:p-3">
                    <FriendIcon className="w-full text-Verde" />
                </div>
                <div onClick={() => setActiveView("search")} className="w-full rounded-full bg-white bg-opacity-10 p-2 duration-100 ease-linear hover:bg-opacity-20 hover:p-3">
                    <SearchIcon className="w-full text-Verde" />
                </div>

                <div className="h-1 rounded-full bg-Verde"></div>
            </div>
            <div className="w-full [&>*]:mt-2 ">
                <div onClick={logoutUser} className="flex aspect-square w-full justify-center rounded-full bg-black p-2 align-middle ">
                    <LogoutIcon className="w-full overflow-visible text-white duration-100 ease-linear hover:w-10/12 hover:text-Verde" style={{ transform: "translateX(10%)" }} />
                </div>
                <div onClick={deleteUser} className="flex aspect-square w-full justify-center rounded-full bg-red-800 p-2 align-middle ">
                    <TrashIcon className="w-full overflow-visible text-white duration-100 ease-linear hover:w-10/12 hover:text-black" />
                </div>
            </div>
        </div>
    );

    const mobileReturn = <></>;

    return isMobile ? mobileReturn : desktopReturn;
};

export default FirstSection;

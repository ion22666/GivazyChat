import * as React from "react";
import Router from "next/router";

import { AppContext } from "../pages";

import LogoutIcon from "../components/svg/Logout";
import TrashIcon from "../components/svg/Trash";
import HomeIcon from "./svg/Home";

const FirstSection: React.FunctionComponent = () => {
    const { userData, userFriendsData, chats, activeChat, setActiveChat, isMobile } = React.useContext(AppContext);

    if (!(userData && userFriendsData && chats)) {
        return <div></div>;
    }

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

    return (
        <div  className="w-full h-full p-1 flex flex-col content-between">
            <div className="w-full flex-grow [&>*]:mb-2 ">
                <div onClick={() => setActiveChat(null)} className="w-full p-1 rounded-full bg-white bg-opacity-10 hover:p-2 duration-100 ease-linear hover:bg-opacity-20">
                    <HomeIcon className="w-full text-Verde" style={{ transform: "translateY(-5%)" }} />
                </div>

                <div className="h-1 bg-white rounded-full"></div>
            </div>
            <div className="w-full [&>*]:mt-2 ">
                <div onClick={logoutUser} className="bg-black w-full aspect-square rounded-full p-2 flex align-middle justify-center ">
                    <LogoutIcon className="text-white w-full hover:w-10/12 hover:text-Verde overflow-visible duration-100 ease-linear" style={{ transform: "translateX(10%)" }} />
                </div>
                <div onClick={deleteUser} className="bg-red-800 w-full aspect-square rounded-full p-2 flex align-middle justify-center ">
                    <TrashIcon className="text-white w-full hover:w-10/12 hover:text-black overflow-visible duration-100 ease-linear" />
                </div>
            </div>
        </div>
    );
};

export default FirstSection;

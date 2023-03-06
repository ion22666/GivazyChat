import * as React from "react";
import Router from "next/router";

import { AppContext } from "../pages";

import LogoutIcon from "../components/svg/Logout";
import TrashIcon from "../components/svg/Trash";

const FirstSection: React.FunctionComponent = () => {
    let { userData, setUserData } = React.useContext(AppContext);

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
        <div className="w-full h-full">
            <img src={userData && (userData.picture || userData.oauth?.google?.picture || "img/blank_profile.png")} className="aspect-square rounded-full" />
            <div onClick={logoutUser} className="bg-black w-full aspect-square rounded-full p-2 flex align-middle justify-center ">
                <LogoutIcon className="text-white w-full hover:w-10/12 hover:text-Verde overflow-visible duration-100 ease-linear" style={{ transform: "translateX(10%)" }} />
            </div>
            <div onClick={deleteUser} className="bg-red-800 w-full aspect-square rounded-full p-2 flex align-middle justify-center ">
                <TrashIcon className="text-white w-full hover:w-10/12 hover:text-black overflow-visible duration-100 ease-linear" />
            </div>
        </div>
    );
};

export default FirstSection;

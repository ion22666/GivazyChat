import * as React from "react";
import Router from "next/router";
import LogoutIcon from "../components/svg/Logout";

const default_user_picture = "img/blank_profile.png";

function HomePage() {
    let [user_data, SET_user_data] = React.useState(null);

    React.useEffect(() => {
        (async () => {
            let json_body = await (await window.request("/api/user/data")).json();
            if (json_body.error) alert(json_body.error);
            if (json_body.data) SET_user_data(json_body.data);
        })();
    }, []);

    function logoutUser() {
        window.token = undefined;
        window.localStorage.removeItem("token");
        Router.push("/login");
    }

    return (
        <div className="h-full w-full flex flex-row bg-black">
            <div className="w-14 bg-neutral-600 flex flex-col gap-1 p-1">
                <img src={user_data && (user_data.picture || default_user_picture)} className="aspect-square rounded-full" />
                <div onClick={logoutUser} className="bg-black w-full aspect-square rounded-full p-2 flex align-middle justify-center ">
                    <LogoutIcon className="text-white w-full hover:w-10/12 hover:text-Verde overflow-visible duration-100 ease-linear" style={{ transform: "translateX(10%)" }} />
                </div>
            </div>
            <div className="bg-neutral-700 w-72"></div>
            <div className="flex-grow bg-neutral-800"></div>
        </div>
    );
}

export default HomePage;

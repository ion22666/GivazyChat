import * as React from "react";
import Router from "next/router";
import LogoutIcon from "../components/svg/Logout";
import TrashIcon from "../components/svg/Trash";
import Chat from "../components/Chat";

const default_user_picture = "img/blank_profile.png";

export const AppContext = React.createContext<[global.UserData | null, React.Dispatch<global.UserData>]>(null);

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
    async function deleteUser() {
        await window.request("/api/user/delete");
        window.token = undefined;
        window.localStorage.removeItem("token");
        Router.push("/login");
    }

    return (
        <AppContext.Provider value={[user_data, SET_user_data]}>
            <div className="h-full w-full flex flex-row bg-black">
                <div className="w-14 bg-neutral-600 flex flex-col gap-1 p-1">
                    <img src={user_data && (user_data.picture || user_data.oauth?.google?.picture || default_user_picture)} className="aspect-square rounded-full" />
                    <div onClick={logoutUser} className="bg-black w-full aspect-square rounded-full p-2 flex align-middle justify-center ">
                        <LogoutIcon
                            className="text-white w-full hover:w-10/12 hover:text-Verde overflow-visible duration-100 ease-linear"
                            style={{ transform: "translateX(10%)" }}
                        />
                    </div>
                    <div onClick={deleteUser} className="bg-red-800 w-full aspect-square rounded-full p-2 flex align-middle justify-center ">
                        <TrashIcon className="text-white w-full hover:w-10/12 hover:text-black overflow-visible duration-100 ease-linear" />
                    </div>
                </div>
                <div className="bg-neutral-700 w-72"></div>
                <div className="flex-grow bg-neutral-800">
                    <Chat />
                </div>
            </div>
        </AppContext.Provider>
    );
}

export default HomePage;

import * as React from "react";

import { AppContext } from "../pages";
import { VerdeColor } from "../pages/_app";
import AllFriends from "./friendsViews/All";
import OnlineFriends from "./friendsViews/Online";
import PaddingFriends from "./friendsViews/Padding";
import FriendIcon from "./svg/Friend";

type Views = "Online" | "All" | "Padding";

const views: { name: Views; Component: React.FunctionComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> }[] = [
    {
        name: "Online",
        Component: OnlineFriends,
    },
    {
        name: "All",
        Component: AllFriends,
    },
    {
        name: "Padding",
        Component: PaddingFriends,
},
];

const FriendsSection: React.FunctionComponent = () => {
    const { userData, userFriendsData, chats, activeChat, setActiveChat, isMobile } = React.useContext(AppContext);

    if (!userData || !userFriendsData || !chats) return <div>{"Loading..."}</div>;

    let [activeView, setActiveView] = React.useState<Views>("Online");

    return (
        <div className="w-full h-full flex flex-col gap-2">
            
            <div
                style={{ display: isMobile ? "none" : "flex" }}
                className="h-16 w-full p-2 bg-white bg-opacity-10 rounded-lg flex flex-row gap-2 items-center [&>*]:text-2xl [&>*]:mx-1  text-white [&>*]:font-Whyte-Book"
            >
                <div className="flex flex-wrow gap-1 items-center border-r-2 border-white border-opacity-40 cursor-default">
                    <span>
                        <FriendIcon className="h-6 aspect-square" />
                    </span>
                    <span className="font-Whyte-Medium pr-2">{"Friends"}</span>
                </div>

                {views.map(({ name }) => {
                    return (
                        <div
                            onClick={() => setActiveView(name)}
                            key={name}
                            className="hover:bg-white hover:bg-opacity-10 cursor-pointer duration-100 ease-linear rounded-lg px-1"
                            style={{ color: activeView === name ? VerdeColor : "white" }}
                        >
                            {name}
                        </div>
                    );
                })}
                <div className="bg-Verde cursor-pointer whitespace-nowrap bg-opacity-70 rounded-lg px-2  hover:scale-95 active:scale-90 hover:bg-opacity-100 duration-100 ease-linear">
                    {"Add Friend"}
                </div>
            </div>
            <div className="w-full flex-grow rounded-lg">
                {views.map(({ name, Component }) => {
                    const display: React.CSSProperties = activeView !== name ? { display: "none" } : {};
                    return <Component style={{ height: "100%", width: "100%", borderRadius: "0.5rem", padding: "1rem", ...display }} />;
                })}
            </div>
        </div>
    );
};

export default FriendsSection;

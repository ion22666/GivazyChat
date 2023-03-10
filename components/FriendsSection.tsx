import * as React from "react";

import { AppContext } from "../pages";
import { VerdeColor } from "../pages/_app";
import AllFriends from "./friendsViews/All";
import OnlineFriends from "./friendsViews/Online";
import PaddingFriends from "./friendsViews/Padding";
import FriendIcon from "./svg/Friend";

type Views = "Online" | "All" | "Padding";

const friendViews: { name: Views; Component: React.FunctionComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> }[] = [
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
    let [activeView, setActiveView] = React.useState<Views>("Online");

    const isReady = userData && userFriendsData && chats;

    if (!isReady) return <div>{"Loading..."}</div>;

    const ActiveComponent = friendViews.find(v => v.name === activeView).Component;

    return (
        <div className="flex h-full w-full flex-col gap-2">
            <div
                style={{ display: isMobile ? "none" : "flex" }}
                className="flex h-16 w-full flex-row items-center gap-2 rounded-lg bg-white bg-opacity-10 p-2 text-white [&>*]:mx-1  [&>*]:font-Whyte-Book [&>*]:text-2xl"
            >
                <div className="flex-wrow flex cursor-default items-center gap-1 border-r-2 border-white border-opacity-40">
                    <span>
                        <FriendIcon className="aspect-square h-6" />
                    </span>
                    <span className="pr-2 font-Whyte-Medium">{"Friends"}</span>
                </div>

                {friendViews.map(({ name }) => {
                    return (
                        <div
                            onClick={() => setActiveView(name)}
                            key={name}
                            className="cursor-pointer rounded-lg px-1 duration-100 ease-linear hover:bg-white hover:bg-opacity-10"
                            style={{ color: activeView === name ? VerdeColor : "white" }}
                        >
                            {name}
                        </div>
                    );
                })}
                <div className="cursor-pointer whitespace-nowrap rounded-lg bg-Verde bg-opacity-70 px-2  duration-100 ease-linear hover:scale-95 hover:bg-opacity-100 active:scale-90">
                    {"Add Friend"}
                </div>
            </div>
            <div className="w-full flex-grow rounded-lg p-2">
                <ActiveComponent />
            </div>
        </div>
    );
};

export default FriendsSection;

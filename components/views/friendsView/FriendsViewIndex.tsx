import * as React from "react";

import { AppContext } from "../../../pages";
import { VerdeColor } from "../../../pages/_app";
import AllFriends from "./AllFriendsSubSection";
import FriendIcon from "../../svg/Friend";
import OnlineFriends from "./OnlineFriendsSubSection";
import PedingFriends from "./PedingFriendsSubSection";
import { useDispatch } from "react-redux";
import { useFriends } from "../../../src/features/friendsSlice";
import { searchSlice } from "../../../src/features/searchSlice";

type SubSections = "Online" | "All" | "Pending";

const friendSubSection: { name: SubSections; Component: React.FunctionComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> }[] = [
    {
        name: "Online",
        Component: OnlineFriends,
    },
    {
        name: "All",
        Component: AllFriends,
    },
    {
        name: "Pending",
        Component: PedingFriends,
    },
];

const FriendsSection: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const friends = useFriends();
    const { isMobile, setActiveView, searchViewInput } = React.useContext(AppContext);
    const [activeSubSection, setActiveSubSection] = React.useState<SubSections>("Online");

    const isReady = friends;

    if (!isReady) return <div>{"Loading..."}</div>;

    const ActiveFriendsSubSection = friendSubSection.find(v => v.name === activeSubSection).Component;

    const goToFriendsSearch = React.useCallback(() => {
        setActiveView("search");
        dispatch(searchSlice.actions.setActiveCategory("Users"));
        dispatch(searchSlice.actions.setInput(""));
    }, []);

    const desktopReturn = (
        <div className="flex h-full w-full flex-col gap-2">
            <div className="flex h-14 w-full flex-row items-center gap-2 rounded-lg bg-white bg-opacity-10 p-2 text-white [&>*]:mx-1  [&>*]:font-Whyte-Book [&>*]:text-2xl">
                <div className="flex-wrow flex cursor-default items-center gap-1 border-r-2 border-white border-opacity-40">
                    <span>
                        <FriendIcon className="aspect-square h-6" />
                    </span>
                    <span className="pr-2 font-Whyte-Medium">{"Friends"}</span>
                </div>

                {friendSubSection.map(({ name }) => {
                    return (
                        <div
                            onClick={() => setActiveSubSection(name)}
                            key={name}
                            className="cursor-pointer rounded-lg px-1 duration-100 ease-linear hover:bg-white hover:bg-opacity-10"
                            style={{ color: activeSubSection === name ? VerdeColor : "white" }}
                        >
                            {name}
                        </div>
                    );
                })}
                <div
                    onClick={goToFriendsSearch}
                    className="cursor-pointer whitespace-nowrap rounded-lg bg-Verde bg-opacity-70 px-2  duration-100 ease-linear hover:scale-95 hover:bg-opacity-100 active:scale-90"
                >
                    {"Add Friend"}
                </div>
            </div>
            <div className="w-full flex-grow rounded-lg p-2">
                <ActiveFriendsSubSection />
            </div>
        </div>
    );

    const mobileReturn = (
        <div className="flex h-full w-full flex-col gap-2">
            <div className="w-full flex-grow rounded-lg p-2">
                <ActiveFriendsSubSection />
            </div>
        </div>
    );

    return isMobile ? mobileReturn : desktopReturn;
};

export default FriendsSection;

import * as React from "react";

import { AppContext } from "../pages";
import Chat from "./Chat";
import FirstSection from "./FirstSection";
import FriendsSection from "./FriendsSection";
import SecondSection from "./SecondSection";

function DesktopIndexComponent() {
    const { activeChat, isMobile } = React.useContext(AppContext);

    return (
        <div className="w-full h-full flex flex-col">
            <div className="h-full w-full flex flex-row bg-black gap-2 p-2 flex-grow">
                <div className="w-14 bg-Gray1 rounded-lg">
                    <FirstSection />
                </div>
                <div style={{ ...(isMobile ? { display: "none" } : {}) }} className="w-72 bg-Gray2 rounded-lg">
                    <SecondSection />
                </div>
                <div className="flex-grow bg-Gray3 rounded-lg">{activeChat ? <Chat /> : <FriendsSection />}</div>
            </div>
        </div>
    );
}

export default DesktopIndexComponent;

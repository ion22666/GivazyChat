import * as React from "react";

import { AppContext } from "../pages";
import Chat from "./Chat";
import FirstSection from "./FirstSection";
import FriendsSection from "./FriendsSection";
import SecondSection from "./SecondSection";

function MobileIndexComponent() {
    const { activeChat, isMobile } = React.useContext(AppContext);

    return (
        <div className="w-full h-full flex flex-col">
            <div className="h-full w-full flex flex-row bg-black gap-2 flex-grow" >
                <div className="flex-grow bg-Gray3">{activeChat ? <Chat /> : <FriendsSection />}</div>
            </div>
            <div className="w-full h-10 bg-white"></div>
        </div>
    );
}

export default MobileIndexComponent;

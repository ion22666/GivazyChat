import * as React from "react";

import { AppContext } from "../../pages";
import { VerdeColor } from "../../pages/_app";
import ChatSquareIconFill from "../svg/ChatSquareFillIcon";
import ChatSquareIcon from "../svg/ChatSquareIcon";
import DeleteUserIcon from "../svg/DeleteUserIcon";
import PersonCircleIcon from "../svg/PersonCircleIcon";
import UserSlashIcon from "../svg/UserSlashIcon";
import VerticalDotsIcon from "../svg/VerticalDotsIcon";
import hasParent from "../utils/hasParent";

type Props = {
    rowData: global.UserData;
};

// acest component reprezinta un rand care reprezinta un user intr-o sectiune din friend view

// rowData: datele priendului la care se refera randul
// menuIsOpen: daca meniul cu optiuni este activ/deshis la acest rand (cand apesi pe 3 dots icon)
// closeMenu: inchide meniul cu optiuni pentru acest rand ( asta inchide toate meniurile )
// openMenu: deshide meniul cu optiuni pentru acest rand

const UserRow: React.FunctionComponent<Props> = ({ rowData }: Props) => {
    const { userFriendsData, chats, setActiveChat, isMobile, removeFriend } = React.useContext(AppContext);

    const menuRef = React.useRef<HTMLDivElement>();

    if (!rowData || !userFriendsData || !chats) return <div>{"Loading..."}</div>;

    const desktopReturn = (
        // containerul al row, e flex cu justify-between
        <div className="flex h-12 w-full flex-row justify-between rounded-md duration-100 ease-linear hover:bg-white hover:bg-opacity-10 [&:hover_#dots]:text-opacity-100 [&:hover_#empty]:hidden [&:hover_#full]:block [&:hover_#leftSide]:gap-2 [&:hover_#name]:text-Verde [&>*]:duration-100 [&>*]:ease-linear [&_#full]:hidden">
            {/* containerul din partea stanga */}
            <div id="leftSide" className="flex h-full  flex-row items-center gap-4 p-1">
                {/* poza si markul de online/offline */}
                <div className="aspect-square h-full">
                    <img src={rowData.picture} referrerPolicy="no-referrer" className="aspect-square h-full rounded-full" />
                    <div
                        style={{ backgroundColor: rowData.isOnline ? VerdeColor : "gray" }}
                        className="absolute bottom-0 right-0 box-content aspect-square h-2 translate-x-1/4 translate-y-1/4 rounded-full border-4 border-Gray3"
                    ></div>
                </div>
                {/* numele la user */}
                <div id="name" className="text-xl text-white">
                    {rowData.username}
                </div>
            </div>
            {/* containerul din partea dreapta */}
            <div className="flex h-full px-2">
                {/* containerul la iconita cu chat */}
                <div
                    className="h-full cursor-pointer rounded-full p-2 duration-100 ease-linear hover:bg-white hover:bg-opacity-5 hover:p-3 [&:hover_:nth-child(2)]:text-Verde"
                >
                    <ChatSquareIcon id="empty" className="h-full text-white text-opacity-10" />
                    <ChatSquareIconFill id="full" className="h-full text-white" />
                </div>
                {/* containerul la iconita cu 3 puncte */}
                <div
                    id="openMenuDiv"
                    className="h-full cursor-pointer rounded-full p-2 duration-100 ease-linear hover:bg-white hover:bg-opacity-5 hover:p-3 [&:hover_#dots]:text-Verde"
                >
                    <VerticalDotsIcon id="dots" className="pointer-events-none  h-full text-white  text-opacity-10" />
                </div>
            </div>
        </div>
    );
    const mobileReturn = desktopReturn;

    return isMobile ? mobileReturn : desktopReturn;
};

export default UserRow;

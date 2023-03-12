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
    friendData: global.UserData;
    menuIsOpen: boolean;
    closeMenu: () => any;
    openMenu: () => any;
};

// acest component reprezinta un rand care reprezinta un user intr-o sectiune din friend view

// friendData: datele priendului la care se refera randul
// menuIsOpen: daca meniul cu optiuni este activ/deshis la acest rand (cand apesi pe 3 dots icon)
// closeMenu: inchide meniul cu optiuni pentru acest rand ( asta inchide toate meniurile )
// openMenu: deshide meniul cu optiuni pentru acest rand

const FriendRow: React.FunctionComponent<Props> = ({ friendData, menuIsOpen, closeMenu, openMenu }: Props) => {
    const { userData, userFriendsData, chats, setActiveChat, isMobile, removeFriend } = React.useContext(AppContext);

    const menuRef = React.useRef<HTMLDivElement>();

    // cand meniul este deshis , daca userul face click oriunde pe ecran inafara de meniul in sine sau una dintre iconitele cu 3 puncte, atunci se inchide meniul
    React.useEffect(() => {
        console.log(friendData.username, menuIsOpen);
        if (!menuIsOpen) return;
        const closeMenuWrapper = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.id === "openMenuDiv" || hasParent(target, menuRef.current)) return;
            return closeMenu();
        };

        document.addEventListener("click", closeMenuWrapper);
        return () => document.removeEventListener("click", closeMenuWrapper);
    }, [menuIsOpen]);

    if (!userData || !userFriendsData || !chats) return <div>{"Loading..."}</div>;

    const chatId = userData.friends.find(e => e.friendId === friendData._id).chatId;

    type MenuOption = {
        optionText: string;
        Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
        onClick(): any;
        className: string;
    };
    const menuOptions: MenuOption[] = [
        {
            optionText: "Profile",
            Icon: PersonCircleIcon,
            onClick() {},
            className: "[&>*]:hover:text-Verde hover:bg-Verde",
        },
        {
            optionText: "Block Friend",
            Icon: UserSlashIcon,
            onClick() {},
            className: "[&>*]:hover:text-Crimson hover:bg-red hover:bg-opacity-50",
        },
        {
            optionText: "Remove Friend",
            Icon: DeleteUserIcon,
            onClick() {
                removeFriend(friendData._id).then(r => closeMenu());
            },
            className: "[&>*]:hover:text-Crimson hover:bg-red",
        },
    ];

    const desktopReturn = (
        // containerul al row, e flex cu justify-between
        <div className="flex h-12 w-full flex-row justify-between rounded-md duration-100 ease-linear hover:bg-white hover:bg-opacity-10 [&:hover_#dots]:text-opacity-100 [&:hover_#empty]:hidden [&:hover_#full]:block [&:hover_#leftSide]:gap-2 [&:hover_#name]:text-Verde [&>*]:duration-100 [&>*]:ease-linear [&_#full]:hidden">
            {/* containerul din partea stanga */}
            <div id="leftSide" className="flex h-full  flex-row items-center gap-4 p-1">
                {/* poza si markul de online/offline */}
                <div className="aspect-square h-full">
                    <img src={friendData.picture} referrerPolicy="no-referrer" className="aspect-square h-full rounded-full" />
                    <div
                        style={{ backgroundColor: friendData.isOnline ? VerdeColor : "gray" }}
                        className="absolute bottom-0 right-0 box-content aspect-square h-2 translate-x-1/4 translate-y-1/4 rounded-full border-4 border-Gray3"
                    ></div>
                </div>
                {/* numele la user */}
                <div id="name" className="text-xl text-white">
                    {friendData.username}
                </div>
            </div>
            {/* containerul din partea dreapta */}
            <div className="flex h-full px-2">
                {/* containerul la iconita cu chat */}
                <div
                    onClick={() => setActiveChat(chats.find(e => e._id === chatId))}
                    className="h-full cursor-pointer rounded-full p-2 duration-100 ease-linear hover:bg-white hover:bg-opacity-5 hover:p-3 [&:hover_:nth-child(2)]:text-Verde"
                >
                    <ChatSquareIcon id="empty" className="h-full text-white text-opacity-10" />
                    <ChatSquareIconFill id="full" className="h-full text-white" />
                </div>
                {/* containerul la iconita cu 3 puncte */}
                <div
                    id="openMenuDiv"
                    onClick={menuIsOpen ? closeMenu : openMenu}
                    className="h-full cursor-pointer rounded-full p-2 duration-100 ease-linear hover:bg-white hover:bg-opacity-5 hover:p-3 [&:hover_#dots]:text-Verde"
                >
                    <VerticalDotsIcon id="dots" className="pointer-events-none  h-full text-white  text-opacity-10" />
                    {/* containerul la meniul cu optiuni ( vizibil doar cand menuIsOpen=true ) */}
                    {/* asta e pozitionat relativ la iconita cu 3 puncte */}
                    <div
                        ref={menuRef}
                        className={`absolute left-0 top-0 z-50 flex -translate-x-full flex-col gap-2 overflow-hidden rounded-lg bg-black bg-opacity-50 px-2 text-white duration-75 ease-in ${
                            menuIsOpen ? "max-h-screen py-2" : "h-0"
                        }`}
                    >
                        {menuOptions.map(({ optionText, Icon, onClick, className }) => {
                            return (
                                <div
                                    key={optionText}
                                    onClick={onClick}
                                    className={"flex flex-row items-center gap-3 rounded-md duration-100 ease-linear hover:gap-1 hover:bg-opacity-10 hover:pr-2" + " " + className}
                                >
                                    <Icon className="w-6 text-white" />
                                    <div className="whitespace-nowrap text-2xl text-white"> {optionText} </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
    const mobileReturn = desktopReturn;

    return isMobile ? mobileReturn : desktopReturn;
};

export default FriendRow;

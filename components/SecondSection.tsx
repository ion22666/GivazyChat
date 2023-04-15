import * as React from "react";
import { useDispatch } from "react-redux";

import { AppContext } from "../pages";
import { VerdeColor } from "../pages/_app";
import { chatSlice, useActiveChat, useActiveChatId, useAvailableChats, useTotalUnredMessagesForCurrentUser, useUnreadMessages } from "../src/features/chatSlice";
import { useFriends, useOnlineFriends, useOnlineFriendsIds } from "../src/features/friendsSlice";
import { useCurrentUser } from "../src/features/currentUserSlice";
import NumberNotification from "./utils/NumberNotification";
import CaretDownEmptyIcon from "./svg/CaretDownEmpty";
import CaretDownFillIcon from "./svg/CaretDownFill";
import CaretRightEmptyIcon from "./svg/CaretRightEmpty";
import CaretRightEmptyFill from "./svg/CaretRightFill";
import { mobileSlice, useSecondSectionIsOpen } from "../src/features/mobileSlice";
import hasParent from "./utils/hasParent";

const SecondSection: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    // states
    const { activeView, setActiveView, isMobile } = React.useContext(AppContext);
    const friends = useFriends();
    const groups = [];
    const currentUser = useCurrentUser();
    const unreadMessages = useUnreadMessages();
    const onlineFriendsIds = useOnlineFriendsIds();
    const activeChatId = useActiveChat()?.id;
    const availableChats = useAvailableChats();
    const secondSectionRef = React.useRef<HTMLDivElement>();
    const [sectionVisibility, setSectionVisibility] = React.useState({ dirrectMessages: true, groupChats: false });
    const secondSectionIsOpen = useSecondSectionIsOpen();
    // HOOKS
    React.useEffect(() => {
        const closeSecondSectionWrapper = (e: MouseEvent) => {
            if (hasParent(e.target as HTMLHtmlElement, secondSectionRef.current)) return;
            return closeSecondSection();
        };
        const timeoutId = setTimeout(() => document.addEventListener("click", closeSecondSectionWrapper), 200);
        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener("click", closeSecondSectionWrapper);
        };
    }, [secondSectionIsOpen]);
    // functions
    function handleFriendRowClick(id: string) {
        if (!availableChats.includes(id)) return;
        setActiveView("chat");
        dispatch(chatSlice.actions.setActiveChatId(id));
        closeSecondSection();
    }

    function closeSecondSection() {
        dispatch(mobileSlice.actions.setSecondSectionIsOpen(false));
    }

    // JSX
    const desktopReturn = (
        <div ref={secondSectionRef} className={`flex h-full w-full flex-col overflow-hidden`}>
            {/* Direct Messages */}
            <div className="max-h-[50%] w-full flex-grow-0 overflow-clip">
                <div
                    onClick={() => setSectionVisibility(e => ({ ...e, dirrectMessages: !e.dirrectMessages }))}
                    className="flex w-full cursor-pointer items-center gap-1 rounded text-center font-Whyte-Medium text-xl text-stone-300 hover:bg-Verde hover:bg-opacity-20 [&:hover_#hiddenOnParentHover]:hidden [&:hover_#visibleOnParentHover]:flex [&_#hiddenOnParentHover]:flex [&_#visibleOnParentHover]:hidden"
                >
                    {sectionVisibility.dirrectMessages ? (
                        <>
                            <CaretDownEmptyIcon id="hiddenOnParentHover" className="h-[1.25rem] text-white" />
                            <CaretDownFillIcon id="visibleOnParentHover" className="hover:text:Verde h-[1.25rem] text-white hover:text-Verde" />
                        </>
                    ) : (
                        <>
                            <CaretRightEmptyIcon id="hiddenOnParentHover" className="h-[1.25rem] text-white" />
                            <CaretRightEmptyFill id="visibleOnParentHover" className="hover:text:Verde h-[1.25rem] text-white " />
                        </>
                    )}
                    {"Direct Messages"}
                </div>
                <div className={`ml-2 w-full border-l-[0.2vmin] border-l-white px-2 ${sectionVisibility.dirrectMessages ? "h-full overflow-y-auto" : "h-0 overflow-hidden"}`}>
                    {friends.length === 0 && <div className="w-full text-center text-base text-white text-opacity-10">{"*you have no friends*"}</div>}
                    {friends?.map(friendData => {
                        const chatId = friendData.chatId;
                        const unreadMessagesCount = chatId && unreadMessages.find(e => e.chatId === chatId)?.unredMessages.find(e => e.participantId === currentUser.id)?.count;
                        // isSelected = daca chatul activ este chatul cu acest friend
                        const isSelected = activeView === "chat" && activeChatId === chatId;
                        const isOnline = onlineFriendsIds.find(id => id === friendData.id);
                        return (
                            <div
                                key={friendData.id}
                                onClick={() => handleFriendRowClick(chatId)}
                                className="flex h-10 w-full cursor-pointer flex-row items-center gap-4 rounded-md p-1 duration-100 ease-linear hover:gap-2 hover:bg-white hover:bg-opacity-10"
                            >
                                <div className="aspect-square h-full">
                                    <img src={friendData.picture} referrerPolicy="no-referrer" className="aspect-square h-full rounded-full" />
                                    <div
                                        style={{ backgroundColor: isOnline ? VerdeColor : "gray" }}
                                        className="absolute bottom-0 right-0 box-content aspect-square h-2 translate-x-1/4 translate-y-1/4 rounded-full border-4 border-Gray2"
                                    ></div>
                                    <NumberNotification value={unreadMessagesCount} />
                                </div>
                                <div className="text-lg" style={{ color: isSelected ? VerdeColor : "white" }}>
                                    {friendData.username}
                                </div>
                            </div>
                        );
                    })}
                    {/* <div className="h-[100vh]">3</div> */}
                </div>
            </div>
            {/* Group Chats */}
            <div className="h-full w-full overflow-hidden">
                <div
                    onClick={() => setSectionVisibility(e => ({ ...e, groupChats: !e.groupChats }))}
                    className="flex w-full cursor-pointer items-center gap-1 rounded text-center font-Whyte-Medium text-xl text-stone-300 hover:bg-Verde hover:bg-opacity-20 [&:hover_#hiddenOnParentHover]:hidden [&:hover_#visibleOnParentHover]:flex [&_#hiddenOnParentHover]:flex [&_#visibleOnParentHover]:hidden"
                >
                    {sectionVisibility.groupChats ? (
                        <>
                            <CaretDownEmptyIcon id="hiddenOnParentHover" className="h-[1.25rem] text-white" />
                            <CaretDownFillIcon id="visibleOnParentHover" className="hover:text:Verde h-[1.25rem] text-white hover:text-Verde" />
                        </>
                    ) : (
                        <>
                            <CaretRightEmptyIcon id="hiddenOnParentHover" className="h-[1.25rem] text-white" />
                            <CaretRightEmptyFill id="visibleOnParentHover" className="hover:text:Verde h-[1.25rem] text-white hover:text-Verde" />
                        </>
                    )}
                    {"Group Chats"}
                </div>
                <div className={`ml-2 w-full border-l-[0.2vmin] border-l-white px-2 ${sectionVisibility.groupChats ? "h-fit overflow-y-auto" : "h-0 overflow-hidden"}`}>
                    {groups.length === 0 && <div className="w-full text-base text-white text-opacity-10">{"*you have no group chat*"}</div>}
                </div>
            </div>
        </div>
    );
    const mobileReturn = (
        <div ref={secondSectionRef} className={`flex h-full w-full flex-col overflow-hidden`}>
            {/* Direct Messages */}
            <div className="max-h-[50%] w-full flex-grow-0 overflow-clip">
                <div
                    onClick={() => setSectionVisibility(e => ({ ...e, dirrectMessages: !e.dirrectMessages }))}
                    className="flex w-full cursor-pointer items-center gap-1 rounded bg-white bg-opacity-10 text-center font-Whyte-Medium text-2xl text-stone-300 hover:bg-Verde hover:bg-opacity-20 [&:hover_#hiddenOnParentHover]:hidden [&:hover_#visibleOnParentHover]:flex [&_#hiddenOnParentHover]:flex [&_#visibleOnParentHover]:hidden"
                >
                    {sectionVisibility.dirrectMessages ? (
                        <>
                            <CaretDownEmptyIcon id="hiddenOnParentHover" className="h-[1.5rem] text-white" />
                            <CaretDownFillIcon id="visibleOnParentHover" className="hover:text:Verde h-[1.5rem] text-white hover:text-Verde" />
                        </>
                    ) : (
                        <>
                            <CaretRightEmptyIcon id="hiddenOnParentHover" className="h-[1.5rem] text-white" />
                            <CaretRightEmptyFill id="visibleOnParentHover" className="hover:text:Verde h-[1.5rem] text-white " />
                        </>
                    )}
                    {"Direct Messages"}
                </div>
                <div className={`ml-2 w-full border-l-[0.2vmin] border-l-white px-2 ${sectionVisibility.dirrectMessages ? "h-full overflow-y-auto" : "h-0 overflow-hidden"}`}>
                    {friends.length === 0 && <div className="w-full text-center text-base text-white text-opacity-10">{"*you have no friends*"}</div>}
                    {friends?.map(friendData => {
                        const chatId = friendData.chatId;
                        const unreadMessagesCount = chatId && unreadMessages.find(e => e.chatId === chatId)?.unredMessages.find(e => e.participantId === currentUser.id)?.count;
                        // isSelected = daca chatul activ este chatul cu acest friend
                        const isSelected = activeView === "chat" && activeChatId === chatId;
                        const isOnline = onlineFriendsIds.find(id => id === friendData.id);
                        return (
                            <div
                                key={friendData.id}
                                onClick={() => handleFriendRowClick(chatId)}
                                className="flex h-10 w-full cursor-pointer flex-row items-center gap-4 rounded-md p-1 duration-100 ease-linear hover:gap-2 hover:bg-white hover:bg-opacity-10"
                            >
                                <div className="aspect-square h-full">
                                    <img src={friendData.picture} referrerPolicy="no-referrer" className="aspect-square h-full rounded-full" />
                                    <div
                                        style={{ backgroundColor: isOnline ? VerdeColor : "gray" }}
                                        className="absolute bottom-0 right-0 box-content aspect-square h-2 translate-x-1/4 translate-y-1/4 rounded-full border-4 border-Gray2"
                                    ></div>
                                    <NumberNotification value={unreadMessagesCount} />
                                </div>
                                <div className="text-lg" style={{ color: isSelected ? VerdeColor : "white" }}>
                                    {friendData.username}
                                </div>
                            </div>
                        );
                    })}
                    {/* <div className="h-[100vh]">3</div> */}
                </div>
            </div>
            {/* Group Chats */}
            <div className="h-full w-full overflow-hidden">
                <div
                    onClick={() => setSectionVisibility(e => ({ ...e, groupChats: !e.groupChats }))}
                    className="flex w-full cursor-pointer items-center gap-1 rounded bg-white bg-opacity-10 text-center font-Whyte-Medium  text-2xl text-stone-300 hover:bg-Verde hover:bg-opacity-20 [&:hover_#hiddenOnParentHover]:hidden [&:hover_#visibleOnParentHover]:flex [&_#hiddenOnParentHover]:flex [&_#visibleOnParentHover]:hidden"
                >
                    {sectionVisibility.groupChats ? (
                        <>
                            <CaretDownEmptyIcon id="hiddenOnParentHover" className="h-[1.5rem] text-white" />
                            <CaretDownFillIcon id="visibleOnParentHover" className="hover:text:Verde h-[1.25rem] text-white hover:text-Verde" />
                        </>
                    ) : (
                        <>
                            <CaretRightEmptyIcon id="hiddenOnParentHover" className="h-[1.5rem] text-white" />
                            <CaretRightEmptyFill id="visibleOnParentHover" className="hover:text:Verde h-[1.25rem] text-white hover:text-Verde" />
                        </>
                    )}
                    {"Group Chats"}
                </div>
                <div className={`ml-2 w-full border-l-[0.2vmin] border-l-white px-2 ${sectionVisibility.groupChats ? "h-fit overflow-y-auto" : "h-0 overflow-hidden"}`}>
                    {groups.length === 0 && <div className="w-full text-base text-white text-opacity-10">{"*you have no group chat*"}</div>}
                </div>
            </div>
        </div>
    );
    return isMobile ? mobileReturn : desktopReturn;
};

export default SecondSection;

import * as React from "react";
import { useProfileUser, userProfileSlice } from "../../src/features/userProfileSlice";
import { useMyDispatch } from "../../src/store";
import { useFriends, useOnlineFriendsIds } from "../../src/features/friendsSlice";
import {
    useSentFriendRequests,
    useReceivedFriendRequests,
    acceptFriendRequest,
    cancelFriendRequest,
    rejectFriendRequest,
    sendFriendRequest,
} from "../../src/features/friendRequestsSlice";
import AddUserEmptyIcon from "../svg/AddUserEmptyIcon";
import AddUserFillIcon from "../svg/AddUserFillIcon";
import DeleteUserIcon from "../svg/DeleteUserIcon";
import DeleteUserIconFill from "../svg/DeleteUserIconFill";
import PersonCheckEmptyIcon from "../svg/PersonCheckEmptyIcon";
import PersonCheckFillIcon from "../svg/PersonCheckFillIcon";
import Tooltip from "../utils/Tooltip";
import { AppContext } from "../../pages";
import { chatSlice } from "../../src/features/chatSlice";
import ChatBubbleIcon from "../svg/ChatBubble";
import VerticalDotsIcon from "../svg/VerticalDotsIcon";

type ProfileSection = {
    name: "User Info" | "Mutual Friends" | "Mutual Groups";
};
const profileSections: ProfileSection[] = [
    {
        name: "User Info",
    },
    {
        name: "Mutual Friends",
    },
    {
        name: "Mutual Groups",
    },
];

function UserProfile({ userData }: { userData: ReturnType<typeof useProfileUser> }) {
    const dispatch = useMyDispatch();
    const { setActiveView } = React.useContext(AppContext);
    // states
    const containerRef = React.useRef<HTMLDivElement>();
    const [activeSection, setActiveSection] = React.useState<ProfileSection["name"]>("User Info");
    const friends = useFriends();
    const onlineFriendsIds = useOnlineFriendsIds();
    const sentFriendRequests = useSentFriendRequests();
    const receivdFriendRequests = useReceivedFriendRequests();
    const friendRequestAlreadySent: boolean = !!sentFriendRequests.find(e => e.friendData.id === userData.id);
    const friendRequestAlreadyReceived: boolean = !!receivdFriendRequests.find(e => e.friendData.id === userData.id);

    const [color1, color2, color3] = userData.profileColors || ["#f00f0f", "#00fff0", "#000000"];
    const isFriend = friends.map(e => e.id).includes(userData.id);
    const isOnline = isFriend && onlineFriendsIds.includes(userData.id);
    // hooks
    React.useEffect(() => {
        const closeProfileViewWrapper = (e: MouseEvent) => {
            if (e.target !== containerRef.current) return;
            return closeProfileView();
        };
        const timeoutId = setTimeout(() => document.addEventListener("click", closeProfileViewWrapper), 200);
        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener("click", closeProfileViewWrapper);
        };
    }, []);

    // functions
    function closeProfileView() {
        dispatch(userProfileSlice.actions.setUserData(undefined));
    }
    function openImageInNewTab() {
        window.open(userData.picture || "img/blank_profile.png", "_blank");
    }
    function openChat() {
        if (!isFriend) return;
        const chatId = friends.find(e => e.id === userData.id).chatId;
        dispatch(chatSlice.actions.setActiveChatId(chatId));
        setActiveView("chat");
        closeProfileView();
    }
    function withProgressDecorator(func: () => Promise<any>) {
        return async () => {
            document.body.style.cursor = "progress";
            document.body.style.position = "none";
            await func();
            document.body.style.cursor = "auto";
            document.body.style.position = "auto";
        };
    }
    const acceptRequest = withProgressDecorator(() => dispatch(acceptFriendRequest(userData.id)));
    const sendRequest = withProgressDecorator(() => dispatch(sendFriendRequest(userData.id)));
    const cancelRequest = withProgressDecorator(() => dispatch(cancelFriendRequest(userData.id)));
    const rejectRequest = withProgressDecorator(() => dispatch(rejectFriendRequest(userData.id)));

    // JSX
    return (
        <div ref={containerRef} className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-[.4]">
            <div className="flex h-1/2 w-1/2 flex-col gap-2 rounded-lg bg-black p-4">
                {/* component pentru bacground */}
                <div style={{ background: `linear-gradient(45deg, ${color1} 0%, ${color2} 100%)` }} className="absolute top-0 left-0 h-24 w-full rounded-t-lg">
                    <div style={{ background: `linear-gradient(45deg, ${color1} 0%, ${color2} 100%)` }} className=" absolute top-full left-0 h-16 w-full brightness-[0.5]">
                        <div style={{ background: `linear-gradient(0deg, rgba(0,0,0,1) 0%, transparent 100%)` }} className=" absolute top-0 left-0 h-full w-full"></div>
                    </div>
                </div>
                {/* componentu de sus care contine imaginea si altele */}
                <div className="flex h-32 items-end justify-between">
                    {/* containeru la imagine */}
                    <div className="h-3/4">
                        <img
                            onClick={openImageInNewTab}
                            src={userData.picture || "img/blank_profile.png"}
                            className="aspect-square h-full cursor-pointer rounded-full shadow-sm shadow-black hover:brightness-50 [&:hover_~_#visibleOnSiblingHover]:flex [&_~_#visibleOnSiblingHover]:hidden"
                        />
                        <Tooltip id="visibleOnSiblingHover">{"Open image in new tab"}</Tooltip>
                        <div
                            className={`${isOnline ? "bg-Verde" : "bg-neutral-500"} absolute bottom-0 right-0 box-content aspect-square h-5 rounded-full border-4 border-Gray2`}
                        ></div>
                    </div>
                    {/* containeru la butoanele cu send,accept,reject etc. */}
                    <div className={"flex cursor-pointer items-center gap-2 rounded-full hover:bg-white hover:bg-opacity-5 [&>*]:duration-100 [&>*]:ease-linear "}>
                        {/* open chat / send message */}
                        {isFriend && (
                            <div
                                className="flex items-center gap-1 rounded bg-Verde px-2 py-1 font-Whyte-Medium text-lg text-white shadow-sm shadow-black hover:bg-white hover:text-Verde active:scale-90 active:opacity-70"
                                onClick={openChat}
                            >
                                <ChatBubbleIcon className="aspect-square h-[1.2rem]" />
                                {"Message"}
                            </div>
                        )}
                        {/* send friend request */}
                        {!isFriend && !friendRequestAlreadySent && !friendRequestAlreadyReceived && (
                            <div
                                className="flex items-center gap-1 rounded bg-Verde px-2 py-1 font-Whyte-Medium text-lg text-white shadow-sm shadow-black hover:bg-white hover:text-Verde active:scale-90 active:opacity-70"
                                onClick={sendRequest}
                            >
                                <AddUserFillIcon className="aspect-square h-[1.2rem]" />
                                {"Send request"}
                            </div>
                        )}
                        {/* cancel friend request */}
                        {friendRequestAlreadySent && (
                            <div
                                className="flex items-center gap-1 rounded bg-Crimson px-2 py-1 font-Whyte-Medium text-lg text-white shadow-sm shadow-black hover:bg-white hover:text-Crimson active:scale-90 active:opacity-70"
                                onClick={cancelRequest}
                            >
                                <DeleteUserIconFill className="aspect-square h-[1.2rem]" />
                                {"Cancel request"}
                            </div>
                        )}
                        {/* accept or reject friend request */}
                        {friendRequestAlreadyReceived && (
                            <div className="flex items-center gap-1">
                                {/* accept */}
                                <div
                                    className="flex items-center gap-1 rounded bg-Verde px-2 py-1 font-Whyte-Medium text-lg text-white shadow-sm shadow-black hover:bg-white hover:text-Verde active:scale-90 active:opacity-70"
                                    onClick={acceptRequest}
                                >
                                    <PersonCheckFillIcon className="aspect-square h-[1.2rem]" />
                                    {"Accept request"}
                                </div>
                                {/* reject */}
                                <div
                                    className="flex items-center gap-1 rounded bg-Crimson px-2 py-1 font-Whyte-Medium text-lg text-white shadow-sm shadow-black hover:bg-white hover:text-Crimson active:scale-90 active:opacity-70"
                                    onClick={rejectRequest}
                                >
                                    <DeleteUserIcon className="aspect-square h-[1.2rem]" />
                                    {"Reject request"}
                                </div>
                            </div>
                        )}
                        {/* options */}
                        <div
                            className="flex items-center gap-1 rounded-full bg-white bg-opacity-10 p-1 font-Whyte-Medium text-lg text-white shadow-sm shadow-black hover:bg-Verde hover:bg-opacity-50 active:scale-90 active:opacity-70"
                            onClick={() => {}}
                        >
                            <VerticalDotsIcon className="aspect-square h-[1.75rem]" />
                        </div>
                    </div>
                </div>
                <div className="flex w-full font-Whyte-Medium text-xl">
                    {profileSections.map(section => (
                        <div
                            onClick={() => setActiveSection(section.name)}
                            className={`border-white p-3 text-white ${
                                activeSection === section.name
                                    ? "cursor-default border-b-[0.5vmin]"
                                    : "cursor-pointer border-b-[0.3vmin] border-opacity-30 text-opacity-30 hover:text-Verde"
                            }`}
                        >
                            {section.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserProfile;

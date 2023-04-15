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
import IdIcon from "../svg/IdIcon";
import { copyToClipboard } from "../utils/copyToClipboard";
import { formatAge, formatDate } from "../utils/formatTime";
import Icon from "../svg/IconTemplate";
import { socialMediaAccountNameExtractor } from "../utils/socialMediaAccountNameExtractor";
import RedditIcon from "../svg/RedditIcon";
import FacebookIcon from "../svg/FacebookIcon";
import DiscordIcon from "../svg/DiscordIcon";
import InstagramIcon from "../svg/InstagramIcon";
import BoxArrowUpRight from "../svg/BoxArrowUpRight";
import countriesJson from "../utils/countries.json";
import VerifiedIcon from "../svg/VerifiedIcon";
import { CrimsonColor } from "../../pages/_app";
import { useCurrentUser } from "../../src/features/currentUserSlice";
import PencilEmptyIcon from "../svg/PencilEmptyIcon";

const countries = countriesJson as global.Country[];

type Props = { userData: ReturnType<typeof useProfileUser> };

type ProfileSection = {
    name: "User Info" | "Mutual Friends" | "Mutual Groups";
    Component: React.FunctionComponent<Props>;
};

const profileSections: ProfileSection[] = [
    {
        name: "User Info",
        Component: UserInfoSection,
    },
    {
        name: "Mutual Friends",
        Component: MutualFriendsSection,
    },
    {
        name: "Mutual Groups",
        Component: MutualGroupsSection,
    },
];

function UserProfile({ userData }: Props) {
    const dispatch = useMyDispatch();
    const { setActiveView, isMobile } = React.useContext(AppContext);
    // states
    const containerRef = React.useRef<HTMLDivElement>();
    const [activeSection, setActiveSection] = React.useState<ProfileSection>(profileSections[0]);
    const friends = useFriends();
    const onlineFriendsIds = useOnlineFriendsIds();
    const sentFriendRequests = useSentFriendRequests();
    const receivdFriendRequests = useReceivedFriendRequests();
    const friendRequestAlreadySent: boolean = !!sentFriendRequests.find(e => e.friendData.id === userData.id);
    const friendRequestAlreadyReceived: boolean = !!receivdFriendRequests.find(e => e.friendData.id === userData.id);

    const [color1, color2, color3] = ["#f00f0f", "#00f0f0", "#000000"];
    const isFriend = friends.map(e => e.id).includes(userData.id);
    const isOnline = isFriend && onlineFriendsIds.includes(userData.id);
    const isCurrentUser = userData.id === useCurrentUser().id;
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
    function copyUserId() {
        copyToClipboard(userData.id);
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
    const ActiveSection = activeSection.Component;
    return (
        <div ref={containerRef} className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center overflow-hidden bg-black bg-opacity-[.4]">
            <div className={`flex flex-col gap-4 rounded-lg bg-black px-4 py-2 ${isMobile ? "h-[45rem] w-[90%]" : "h-[40rem] w-[50rem]"}`}>
                {/* component pentru bacground */}
                <div style={{ background: `linear-gradient(45deg, ${color1} 0%, ${color2} 100%)` }} className="absolute top-0 left-0 h-[5.5rem] w-full rounded-t-lg">
                    <div style={{ background: `linear-gradient(45deg, ${color1} 0%, ${color2} 100%)` }} className=" absolute top-full left-0 h-14 w-full brightness-[0.5]">
                        <div style={{ background: `linear-gradient(0deg, rgba(0,0,0,1) 0%, transparent 100%)` }} className=" absolute top-0 left-0 h-full w-full"></div>
                    </div>
                </div>
                {/* componenta cu id-ul la user */}
                <div className="flex">
                    <div
                        onClick={copyUserId}
                        className="flex w-fit cursor-pointer items-center gap-1 text-base text-white text-opacity-50 duration-100 ease-linear hover:tracking-wide hover:text-white active:scale-90 active:brightness-75 [&:hover_#visibleOnParentHover]:flex [&_#visibleOnParentHover]:hidden"
                    >
                        <IdIcon className="aspect-square h-[1.2rem]" />
                        {"#" + userData.id}

                        <Tooltip id="visibleOnParentHover">{"Copy user id"}</Tooltip>
                    </div>
                    <div className="flex-grow"></div>
                    {isCurrentUser && <PencilEmptyIcon className="aspect-square h-10 cursor-pointer text-white text-opacity-[0.75] hover:text-opacity-100" />}
                </div>
                {/* componentu de sus care contine imaginea si altele */}
                <div className={`flex items-end justify-center gap-2 ${isMobile ? "flex-wrap min-h-[8rem] mt-[1rem]" : "min-h-[6.5rem]"}`}>
                    {/* containeru la imagine */}

                    <div className={`aspect-square  ${isMobile ? "h-16" : "h-20"}`}>
                        <img
                            onClick={openImageInNewTab}
                            src={userData.picture || "img/blank_profile.png"}
                            className="aspect-square h-full cursor-pointer rounded-full shadow-sm shadow-black hover:brightness-50 [&:hover_~_#visibleOnSiblingHover]:flex [&_~_#visibleOnSiblingHover]:hidden"
                        />
                        <Tooltip id="visibleOnSiblingHover">{"Open image in new tab"}</Tooltip>
                        <div
                            className={`${
                                isOnline || isCurrentUser ? "bg-Verde" : "bg-neutral-500"
                            } absolute bottom-0 right-0 box-content aspect-square h-5 rounded-full border-4 border-Gray2`}
                        ></div>
                    </div>
                    {/* containeru la nume*/}
                    <div className="">
                        <div className="flex items-end gap-2">
                            <div className={`font-Whyte-Medium text-white ${isMobile ? "text-2xl" : "text-4xl"}`}>{userData.username}</div>
                        </div>
                        <div className="text-sm text-white text-opacity-50">
                            {isCurrentUser || isOnline ? "Online" : "Last seen " + formatDate(userData.lastSeenAt || 1680708838964)}
                        </div>
                    </div>
                    {/* spatiu liber */}
                    <div className="flex-grow"></div>
                    {/* containeru la butoanele cu send,accept,reject etc. */}
                    <div className={`flex cursor-pointer items-center gap-2 rounded-full [&>*]:duration-100 [&>*]:ease-linear ${isMobile ? "" : ""}`}>
                        {/* open chat / send message */}
                        {!isCurrentUser && isFriend && (
                            <div
                                className="flex items-center gap-1 rounded bg-Verde px-2 py-1 font-Whyte-Medium text-lg text-white shadow-sm shadow-black hover:bg-white hover:text-Verde active:scale-90 active:opacity-70"
                                onClick={openChat}
                            >
                                <ChatBubbleIcon className="aspect-square h-[1.2rem]" />
                                {"Message"}
                            </div>
                        )}
                        {/* send friend request */}
                        {!isCurrentUser && !isFriend && !friendRequestAlreadySent && !friendRequestAlreadyReceived && (
                            <div
                                className="flex items-center gap-1 rounded bg-Verde px-2 py-1 font-Whyte-Medium text-lg text-white shadow-sm shadow-black hover:bg-white hover:text-Verde active:scale-90 active:opacity-70"
                                onClick={sendRequest}
                            >
                                <AddUserFillIcon className="aspect-square h-[1.2rem]" />
                                {"Send request"}
                            </div>
                        )}
                        {/* cancel friend request */}
                        {!isCurrentUser && friendRequestAlreadySent && (
                            <div
                                className="flex items-center gap-1 rounded bg-Crimson px-2 py-1 font-Whyte-Medium text-lg text-white shadow-sm shadow-black hover:bg-white hover:text-Crimson active:scale-90 active:opacity-70"
                                onClick={cancelRequest}
                            >
                                <DeleteUserIconFill className="aspect-square h-[1.2rem]" />
                                {"Cancel request"}
                            </div>
                        )}
                        {/* accept or reject friend request */}
                        {!isCurrentUser && friendRequestAlreadyReceived && (
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
                {/* section chooser */}
                <div className={`flex w-full text-center font-Whyte-Medium ${isMobile ? "text-base" : "text-xl"}`}>
                    {profileSections.map(section => (
                        <div
                            onClick={() => setActiveSection(section)}
                            className={`border-white flex-grow text-white ${isMobile ? "" : "p-3"} ${
                                activeSection.name === section.name
                                    ? "cursor-default border-b-[0.5vmin]"
                                    : "cursor-pointer border-b-[0.3vmin] border-opacity-30 text-opacity-30 hover:text-Verde"
                            }`}
                        >
                            {section.name}
                        </div>
                    ))}
                </div>
                {/* section container */}
                <div className="h-full w-full overflow-auto">
                    <ActiveSection userData={userData} />
                </div>
            </div>
        </div>
    );
}

export default UserProfile;

function UserInfoSection({ userData }: { userData: ReturnType<typeof useProfileUser> }) {
    const dispatch = useMyDispatch();
    const { setActiveView, isMobile } = React.useContext(AppContext);
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

    const { instagram, facebook, reddit, discord } = false || {
        instagram: {
            accountName: "",
            link: "https://www.instagram.com/ion2266",
        },
        facebook: {
            accountName: "",
            link: "https://www.facebook.com/ion.mocanu.752861",
        },
        reddit: {
            accountName: "",
            link: "https://www.reddit.com/user/ion2266",
        },
        discord: {
            accountName: "giovanni#2266",
            link: "",
        },
    };
    const country = countries.find(e => e.code === (userData.location || "MD"));
    // const [instagram,reddid,facebook] = [];
    // JSX
    return (
        <div className="w-full [&>*]:my-3">
            {/* joinde on */}
            <div className="flex-col">
                <div className="font-Whyte-Heavy text-base text-white">{"JOINED ON"}</div>
                <div className="flex gap-2">
                    <div className="text-base text-white text-opacity-75">{formatDate(userData.registeredAt, { withTime: false })}</div>
                    <div className="text-base text-white text-opacity-75">{`(${formatAge(userData.registeredAt)} ago)`}</div>
                </div>
            </div>
            {/* about me */}
            <div className="flex-col gap-2">
                <div className="font-Whyte-Heavy text-base text-white">{"ABOUT ME"}</div>
                <div className="text-base text-white text-opacity-75">{userData.aboutMe || "My name is " + userData.username}</div>
            </div>
            {/* region */}
            <div className="flex-col gap-2">
                <div className="font-Whyte-Heavy text-base text-white">{"REGION"}</div>
                <div className="flex items-center gap-1 text-base text-white text-opacity-75">
                    <div className="cursor-default text-xl duration-100 ease-linear hover:text-4xl">{country.emoji}</div>
                    <div className="text-center text-base text-white text-opacity-50">{country.name}</div>
                </div>
            </div>
            {/* social media links */}
            <div className={`gap-2 ${isMobile ? "flex flex-col w-full" : "grid grid-cols-2 justify-items-center"}`}>
                <div className="col-span-2 w-full font-Whyte-Heavy text-base text-white">{"SOCIAL MEDIA LINKS"}</div>
                {userData.socialMediaLinks && (
                    <>
                        {instagram && <SocialMediaComponent Icon={InstagramIcon} accountName={socialMediaAccountNameExtractor.instagram(instagram.link)} link={instagram.link} />}
                        {facebook && <SocialMediaComponent Icon={FacebookIcon} accountName={socialMediaAccountNameExtractor.facebook(facebook.link)} link={facebook.link} />}
                        {reddit && <SocialMediaComponent Icon={RedditIcon} accountName={socialMediaAccountNameExtractor.reddit(reddit.link)} link={reddit.link} />}
                        {discord && <SocialMediaComponent Icon={DiscordIcon} accountName={discord.accountName} link={undefined} />}
                    </>
                )}
            </div>
            <div className="h-[100vh]"></div>
        </div>
    );
}

function MutualFriendsSection({ userData }: { userData: ReturnType<typeof useProfileUser> }) {
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

    // JSX
    return <div></div>;
}

function MutualGroupsSection({ userData }: { userData: ReturnType<typeof useProfileUser> }) {
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

    // JSX
    return <div></div>;
}

function SocialMediaComponent({ Icon, accountName, link }: { Icon: React.FunctionComponent<React.SVGProps<any>>; accountName: string; link?: string }) {
    function openLink() {
        link && window.open(link, "_blank");
    }
    return (
        <div className="flex h-12 w-full items-center gap-2 rounded-md  border-[0.2vmin] border-white border-opacity-50 p-1 px-3 text-base text-white text-opacity-90 duration-100 ease-linear hover:bg-white hover:bg-opacity-20 [&:hover_#visibleOnParentHover]:flex [&_#visibleOnParentHover]:hidden">
            <Icon onClick={openLink} className="aspect-square h-[90%] cursor-pointer duration-100  ease-linear hover:scale-105" />
            {accountName}
            {link && (
                <div className="flex h-full items-center">
                    <VerifiedIcon className="aspect-square h-[60%] text-blue-500" verified={false} />
                    <Tooltip shadowColor={"Crimson"} textColor={CrimsonColor} id="visibleOnParentHover" className="text-base">
                        {"Not Verified"}
                    </Tooltip>
                </div>
            )}
            <div className="flex-grow"></div>
            {link && <BoxArrowUpRight onClick={openLink} className="aspect-square h-[60%] cursor-pointer duration-100 ease-linear hover:scale-110 hover:text-Verde" />}
        </div>
    );
}

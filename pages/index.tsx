import * as React from "react";

import io, { Socket } from "socket.io-client";
import Chat from "../components/views/chatView/ChatViewIndex";

import FirstSection from "../components/FirstSection";
import FriendsSection from "../components/views/friendsView/FriendsViewIndex";
import SearchViewComponent from "../components/views/searchView/SearchViewIndex";
import SecondSection from "../components/SecondSection";
import MobileNavbar from "../components/MobileNavbar";
import { currentUserSlice, useCurrentUser } from "../src/features/currentUserSlice";
import { friendsSlice } from "../src/features/friendsSlice";
import { chatSlice, useActiveChat, useActiveChatFriend } from "../src/features/chatSlice";
import { useDispatch } from "react-redux";
import { friendRequestsSlice } from "../src/features/friendRequestsSlice";
import { CancelFriendRequestApiResponse } from "../server/controllers/user/friends/cancelFriendRequest";
import { AcceptFriendRequestApiResponse } from "../server/controllers/user/friends/acceptFriendRequest";
import { RemoveFriendApiResponse } from "../server/controllers/user/friends/removeFriend";
import { RejectFriendRequestApiResponse } from "../server/controllers/user/friends/rejectFriendRequest";
import { soundEffect1 } from "../components/utils/soundEffects";
import ChatBubbleIcon from "../components/svg/ChatBubble";
import FriendIcon from "../components/svg/Friend";
import SearchIcon from "../components/svg/Search";
import { store } from "../src/store";
import { useProfileUser } from "../src/features/userProfileSlice";
import UserProfile from "../components/views/UserProfile";
import { useSecondSectionIsOpen } from "../src/features/mobileSlice";

export var socket: Socket;

export interface View {
    name: "chat" | "search" | "friends" | "editProfile";
    Component: React.FunctionComponent<any>;
    NavBarIcon: React.FunctionComponent<any>;
    condition: () => any;
    FallbackComponent: React.FunctionComponent<any>;
}

interface AppContext {
    activeView: View["name"];
    setActiveView: React.Dispatch<View["name"]>;
    searchViewInput: string;
    setSearchViewInput: React.Dispatch<string>;
    socket: Socket;
    isMobile: boolean;
}

const InitialAppContext: Partial<AppContext> = {
    socket,
};

export const AppContext = React.createContext<AppContext>(InitialAppContext as AppContext);

export const views: View[] = [
    {
        name: "chat",
        Component: Chat,
        NavBarIcon: ChatBubbleIcon,
        condition: () => store.getState().chatSlice.chats.length || store.getState().chatSlice.activeChatId,
        FallbackComponent: () => <div>{"No Chat Selected"}</div>,
    },
    {
        name: "search",
        Component: SearchViewComponent,
        NavBarIcon: SearchIcon,
        condition: () => true,
        FallbackComponent: SearchViewComponent,
    },
    {
        name: "friends",
        Component: FriendsSection,
        NavBarIcon: FriendIcon,
        condition: () => true,
        FallbackComponent: FriendsSection,
    },
    {
        name: "editProfile",
        Component: FriendsSection,
        NavBarIcon: FriendIcon,
        condition: () => true,
        FallbackComponent: FriendsSection,
    },
];

function HomePage() {
    const dispatch = useDispatch();
    // states
    const currentUserId = useCurrentUser().id;
    const activeChat = useActiveChat();
    const activeChatFriend = useActiveChatFriend();
    const [activeView, setActiveView] = React.useState<any>("friends");
    const [isMobile, setIsMobile] = React.useState<any>(true);
    const [searchViewInput, setSearchViewInput] = React.useState<string>("");
    const profileUserData = useProfileUser();
    const secondSectionIsOpen = useSecondSectionIsOpen();
    // facem conexiunea la serverul web socket
    React.useEffect(() => {
        socket = io({
            autoConnect: false,
            extraHeaders: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        setInterval(() => socket.emit("my online friends"), 5000);
        socket.on("set online friends", data => {
            dispatch(friendsSlice.actions.setOnlineFriends(data));
        });
        socket.on("push message", (message: global.Message, chatId: string) => {
            if (message.sender !== currentUserId) {
                soundEffect1();
                dispatch(chatSlice.actions.pushMessage({ message, chatId }));
            }
        });
        {
            // cand cineva te sterge din lista de prieteni
            socket.on("friend removed", ({ data }: RemoveFriendApiResponse) => {
                const state = store.getState();
                const activeChatId = state.chatSlice.activeChatId;
                const activeChatFriendId =
                    activeChatId && state.chatSlice.chats.find(e => e.id === activeChatId).participants.find(e => e.participantId !== currentUserId).participantId;
                console.log("activeChatFriendId", activeChatId, activeChatFriendId);
                if (activeChatFriendId === data.id) {
                    dispatch(chatSlice.actions.setActiveChatId(undefined));
                    setActiveView("friends");
                }
                // userData este fostul friend care te-a sters
                dispatch(friendsSlice.actions.removeFriend(data.id));
            });
            // cand primesti un friend request
            socket.on("friend request received", receivedRequest => {
                soundEffect1();
                dispatch(friendRequestsSlice.actions.addReceivedRequest(receivedRequest));
            });
            // cand un friend request primit se anuleaza
            socket.on("friend request canceled", (canceledRequest: { data: global.receivedFriendRequests }) => {
                dispatch(friendRequestsSlice.actions.removeReceivedRequest(canceledRequest.data));
            });
            // cand cineva iti accepta friend requestul
            socket.on("friend request accepted", ({ data }: AcceptFriendRequestApiResponse) => {
                // friendData este ala care a dat accept
                soundEffect1();
                dispatch(friendRequestsSlice.actions.removeSentRequest(data.friendData.id));
                dispatch(chatSlice.actions.addChat(data.chatData));
                dispatch(friendsSlice.actions.addFriend(data.friendData));
            });
            // cand cineva iti refuza friend requestul
            socket.on("friend request rejected", ({ data }: RejectFriendRequestApiResponse) => {
                // userData este ala care a dat reject
                dispatch(friendRequestsSlice.actions.removeSentRequest(data as global.sentFriendRequests));
            });
        }
        socket.connect();
    }, []);

    React.useEffect(() => {
        setIsMobile(window.matchMedia("(max-aspect-ratio: 1/1)").matches);
        window.matchMedia("(max-aspect-ratio: 1/1)").onchange = e => setIsMobile(e.matches);

        (async () => {
            const json_body = await (await window.request("/api/user")).json();
            if (json_body.error) alert(json_body.error);
            if (json_body.data) dispatch(currentUserSlice.actions.setCurrentUserData(json_body.data));
        })();
        (async () => {
            const json_body = await (await window.request("/api/user/friends")).json();
            if (json_body.error) alert(json_body.error);
            if (json_body.data) dispatch(friendsSlice.actions.setFriends(json_body.data));
        })();
        (async () => {
            const json_body = await (await window.request("/api/user/chats")).json();
            if (json_body.error) alert(json_body.error);
            if (json_body.data) dispatch(chatSlice.actions.setChats(json_body.data));
        })();
        (async () => {
            const json_body = await (await window.request("/api/user/friends/requests/sent")).json();
            if (json_body.error) alert(json_body.error);
            if (json_body.data) dispatch(friendRequestsSlice.actions.setSentRequests(json_body.data));
        })();
        (async () => {
            const json_body = await (await window.request("/api/user/friends/requests/received")).json();
            if (json_body.error) alert(json_body.error);
            if (json_body.data) dispatch(friendRequestsSlice.actions.setReceivedRequests(json_body.data));
        })();
    }, []);

    async function fetchUsersData(usersIds: string[]): Promise<any> {
        const jsonRespone = await window.requestJson("/api/user/getUsersData", {
            method: "POST",
            body: JSON.stringify({ usersIds }),
        });
        return (await jsonRespone.json()).data;
    }

    const AppContextValue: AppContext = {
        ...(InitialAppContext as AppContext),
        socket,
        isMobile,
        activeView,
        setActiveView,
        searchViewInput,
        setSearchViewInput,
    };
    const activeViewObj = views.find(v => v.name === activeView);
    const ActiveViewComponent = activeViewObj.condition() ? activeViewObj.Component : activeViewObj.FallbackComponent;

    const desktopReturn = (
        <div className="flex  h-full w-full flex-row gap-2 bg-Gray3 p-2">
            {profileUserData && <UserProfile userData={profileUserData} />}

            <div className="w-14 rounded-lg bg-Gray3">
                <FirstSection />
            </div>
            <div className="w-60 rounded-lg bg-Gray2 p-2">
                <SecondSection />
            </div>
            <div className="flex-grow rounded-lg bg-Gray1">
                <ActiveViewComponent />
            </div>
        </div>
    );

    const mobileReturn = (
        <div className="flex h-full w-full flex-col">
            {profileUserData && <UserProfile userData={profileUserData} />}

            <div className={`h-full overflow-auto bg-Gray2 ${secondSectionIsOpen ? "brightness-50" : ""}`}>
                <ActiveViewComponent />
            </div>
            <div className={`h-14 w-full bg-Gray3 ${secondSectionIsOpen ? "brightness-50" : ""}`}>
                <FirstSection />
            </div>
            <div
                style={{ transform: `translateX(${secondSectionIsOpen ? "0%" : "-100%"})` }}
                className="absolute bottom-0 left-0 flex h-full w-[80%] bg-Gray1 p-2 duration-100 ease-linear"
            >
                <SecondSection />
            </div>
        </div>
    );

    return <AppContext.Provider value={AppContextValue}>{isMobile ? mobileReturn : desktopReturn}</AppContext.Provider>;
}

export default HomePage;

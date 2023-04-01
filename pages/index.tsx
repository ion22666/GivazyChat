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
import { chatSlice } from "../src/features/chatSlice";
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

export var socket: Socket;

export interface View {
    name: "chat" | "search" | "friends";
    Component: React.FunctionComponent<any>;
    NavBarIcon: React.FunctionComponent<any>;
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
    },
    {
        name: "search",
        Component: SearchViewComponent,
        NavBarIcon: SearchIcon,
    },
    {
        name: "friends",
        Component: FriendsSection,
        NavBarIcon: FriendIcon,
    },
];

function HomePage() {
    const dispatch = useDispatch();
    const currentUserId = useCurrentUser().id;
    const [activeView, setActiveView] = React.useState<any>("friends");
    const [isMobile, setIsMobile] = React.useState<any>(true);
    const [searchViewInput, setSearchViewInput] = React.useState<string>("");
    // facem conexiunea la serverul web socket
    React.useEffect(() => {
        socket = io({
            autoConnect: false,
            extraHeaders: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

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
                // userData este fostul friend care te-a sters
                dispatch(friendsSlice.actions.removeFriend(data.id));
            });
            // cand primesti un friend request
            socket.on("friend request received", receivedRequest => {
                dispatch(friendRequestsSlice.actions.addReceivedRequest(receivedRequest));
            });
            // cand un friend request primit se anuleaza
            socket.on("friend request canceled", (canceledRequest: { data: global.receivedFriendRequests }) => {
                dispatch(friendRequestsSlice.actions.removeReceivedRequest(canceledRequest.data));
            });
            // cand cineva iti accepta friend requestul
            socket.on("friend request accepted", ({ data }: AcceptFriendRequestApiResponse) => {
                // friendData este ala care a dat accept
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
        const jsonRespone = await window.request("/api/user/getUsersData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
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

    const ActiveViewComponent = views.find(v => v.name === activeView).Component;

    const desktopReturn = (
        <div className="flex h-full w-full flex-col">
            <div className="flex  h-full w-full flex-grow flex-row gap-2 p-2">
                <div className="w-14 rounded-lg bg-Gray1">
                    <FirstSection />
                </div>
                <div className="w-60 rounded-lg bg-Gray2">
                    <SecondSection />
                </div>
                <div className="flex-grow rounded-lg bg-Gray3 p-2">
                    <ActiveViewComponent />
                </div>
            </div>
        </div>
    );

    const mobileReturn = (
        <div className="flex h-full w-full flex-col">
            <div className="h-full overflow-auto bg-Gray2">
                <ActiveViewComponent />
            </div>
            <div className="h-10 w-full bg-white">
                <MobileNavbar />
            </div>
        </div>
    );

    return <AppContext.Provider value={AppContextValue}>{isMobile ? mobileReturn : desktopReturn}</AppContext.Provider>;
}

export default HomePage;

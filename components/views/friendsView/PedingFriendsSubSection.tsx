import * as React from "react";
import { useDispatch } from "react-redux";

import { AppContext } from "../../../pages";
import { VerdeColor } from "../../../pages/_app";
import { acceptFriendRequest, cancelFriendRequest, rejectFriendRequest, useReceivedFriendRequests, useSentFriendRequests } from "../../../src/features/friendRequestsSlice";
import { friendsSlice, useOnlineFriendsIds } from "../../../src/features/friendsSlice";
import { useMyDispatch } from "../../../src/store";
import ChatSquareIconFill from "../../svg/ChatSquareFillIcon";
import ChatSquareIcon from "../../svg/ChatSquareIcon";
import PersonCheckEmptyIcon from "../../svg/PersonCheckEmptyIcon";
import PersonCheckFillIcon from "../../svg/PersonCheckFillIcon";
import PersonUpEmptyIcon from "../../svg/PersonUpEmptyIcon";
import VerticalDotsIcon from "../../svg/VerticalDotsIcon";
import SearchComponent from "./FriendsSearchBar";
import PersonDownEmptyIcon from "../../svg/PersonDownEmptyIcon";
import DeleteUserIcon from "../../svg/DeleteUserIcon";

const PendingFriends: React.FunctionComponent = props => {
    const receivedFriendRequests = useReceivedFriendRequests();
    const sentFriendRequests = useSentFriendRequests();
    const [activeRequests, setActiveRequests] = React.useState<"Received" | "Sent">("Received");
    const requests = activeRequests === "Received" ? receivedFriendRequests : sentFriendRequests;
    const onlineFriendsIds = useOnlineFriendsIds();

    const [onScreenRequests, setOnScreenRequests] = React.useState<(global.sentFriendRequests | global.receivedFriendRequests)[]>(null);

    function changeRequestsType() {
        setActiveRequests(e => (e === "Received" ? "Sent" : "Received"));
    }
    const desktopReturn = (
        <div {...props} className="flex h-full w-full flex-col gap-2">
            <SearchComponent<global.receivedFriendRequests | global.sentFriendRequests>
                nativeState={requests}
                setState={setOnScreenRequests}
                filter={(text, e) => e.friendData.username.toLowerCase().includes(text.toLowerCase())}
            />

            <div className="wrapper flex justify-between">
                {/* elementu de unde shimbi intre sent and received requests */}
                <div onClick={changeRequestsType} className={" flex w-fit cursor-pointer flex-row-reverse items-center gap-1 rounded-md bg-Verde p-2 text-black"}>
                    {activeRequests}
                    {activeRequests === "Received" ? <PersonDownEmptyIcon className={"h-8"} /> : <PersonUpEmptyIcon className={"h-8"} />}
                </div>

                {/* textul `total` de langa butonul recevied */}
                <div className="p-2 text-lg font-normal ">{`Total - ${requests.length}`}</div>
            </div>

            <div className="flex-gro block w-full [&>*]:mt-2">
                {(onScreenRequests || requests).map(request => {
                    const isOnline = !!onlineFriendsIds.find(id => id === request.friendData.id);
                    return <PendingUserRow key={request.friendData.id} request={request} isOnline={isOnline} />;
                })}
            </div>
        </div>
    );

    return desktopReturn;
};

export default PendingFriends;

type Props = {
    request: global.receivedFriendRequests | global.sentFriendRequests;
    isOnline: boolean;
};

function PendingUserRow({ request, isOnline }: Props) {
    const dispatch = useMyDispatch();

    /** indica faptul daca requestul este din categoria 'sent friend requests' **/
    const isSentRequestType = !!(request as global.sentFriendRequests).sendAt;
    console.log("request", request);
    const userId = request.friendData.id;

    // containerul al row, e flex cu justify-between
    return (
        <div
            key={request.friendData.id}
            className={
                "mt-2 flex h-12 w-full flex-row justify-between rounded-md bg-white bg-opacity-5 p-1 shadow-sm shadow-black duration-100 ease-linear hover:bg-opacity-10 hover:shadow hover:shadow-Verde" +
                " " +
                "[&:hover_#dots]:text-opacity-100 [&:hover_#hiddenOnParentHover]:hidden [&:hover_#leftSide]:gap-2 [&:hover_#name]:text-Verde [&:hover_#visibleOnParentHover]:block [&>*]:duration-100 [&>*]:ease-linear [&_#visibleOnParentHover]:hidden"
            }
        >
            {/* containerul din partea stanga */}
            <div id="leftSide" className="flex h-full  flex-row items-center gap-4 p-1">
                {/* poza si markul de online/offline */}
                <div className="aspect-square h-full">
                    <img src={request.friendData.picture} referrerPolicy="no-referrer" className="aspect-square h-full rounded-full" />
                </div>
                {/* numele la user */}
                <div id="name" className="text-xl text-white">
                    {request.friendData.username}
                </div>
            </div>

            {/* containerul din partea dreapta */}
            <div className="flex h-full px-2">
                {/* containerul la iconita cu add friend */}
                {!isSentRequestType && (
                    <div
                        className={
                            "flex h-full cursor-pointer items-center gap-2 rounded-full p-1 duration-100 ease-linear hover:bg-white hover:bg-opacity-5 hover:p-2 hover:text-Crimson" +
                            " " +
                            "[&:hover_>*]:text-Verde"
                        }
                        onClick={() => dispatch(acceptFriendRequest(userId))}
                    >
                        {/* accept */}
                        <>
                            <PersonCheckEmptyIcon id="hiddenOnParentHover" className="h-full text-white text-opacity-10" />
                            <PersonCheckFillIcon id="visibleOnParentHover" className="h-full text-white hover:text-Verde" />
                        </>
                    </div>
                )}
                <div
                    className={
                        "flex h-full cursor-pointer items-center gap-2 rounded-full p-1 duration-100 ease-linear hover:bg-white hover:bg-opacity-5 hover:p-2 hover:text-Crimson" +
                        " " +
                        "[&:hover_>*]:text-Crimson"
                    }
                    onClick={() => (isSentRequestType ? dispatch(cancelFriendRequest(userId)) : dispatch(rejectFriendRequest(userId)))}
                >
                    {isSentRequestType ? (
                        <>
                            {/* cancel */}
                            <DeleteUserIcon id="hiddenOnParentHover" className="h-full text-white text-opacity-10" />
                            <DeleteUserIcon id="visibleOnParentHover" className="h-full text-white hover:text-Crimson" />
                        </>
                    ) : (
                        <>
                            {/* reject */}
                            <DeleteUserIcon id="hiddenOnParentHover" className="h-full text-white text-opacity-10" />
                            <DeleteUserIcon id="visibleOnParentHover" className="h-full text-white hover:text-Crimson" />
                        </>
                    )}
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
}

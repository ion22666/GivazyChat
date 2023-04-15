import * as React from "react";
import { useDispatch } from "react-redux";

import { AppContext } from "../../../pages";
import { VerdeColor } from "../../../pages/_app";
import {
    acceptFriendRequest,
    cancelFriendRequest,
    friendRequestsSlice,
    rejectFriendRequest,
    sendFriendRequest,
    useReceivedFriendRequests,
    useSentFriendRequests,
} from "../../../src/features/friendRequestsSlice";
import { AppDispatch, useMyDispatch } from "../../../src/store";
import AddUserEmptyIcon from "../../svg/AddUserEmptyIcon";
import AddUserFillIcon from "../../svg/AddUserFillIcon";
import DeleteUserIcon from "../../svg/DeleteUserIcon";
import PersonUpEmptyIcon from "../../svg/PersonUpEmptyIcon";
import VerticalDotsIcon from "../../svg/VerticalDotsIcon";
import PersonCheckFillIcon from "../../svg/PersonCheckFillIcon";
import PersonCheckEmptyIcon from "../../svg/PersonCheckEmptyIcon";
import Tooltip from "../../utils/Tooltip";
import { useFriends } from "../../../src/features/friendsSlice";
import DeleteUserIconFill from "../../svg/DeleteUserIconFill";
import { userProfileSlice } from "../../../src/features/userProfileSlice";

type Props = {
    rowData: global.UserData;
};

// acest component reprezinta un rand care reprezinta un user intr-o sectiune din friend view

// rowData: datele priendului la care se refera randul
// menuIsOpen: daca meniul cu optiuni este activ/deshis la acest rand (cand apesi pe 3 dots icon)
// closeMenu: inchide meniul cu optiuni pentru acest rand ( asta inchide toate meniurile )
// openMenu: deshide meniul cu optiuni pentru acest rand

export const UserRow: React.FunctionComponent<Props> = ({ rowData }: Props) => {
    // states
    const dispatch = useMyDispatch();
    const { isMobile } = React.useContext(AppContext);
    const friends = useFriends();
    const sentFriendRequests = useSentFriendRequests();
    const receivdFriendRequests = useReceivedFriendRequests();

    // daca userul este in lista de friends, il scoatem
    if (friends.find(e => e.id === rowData.id)) return <> </>;
    //
    const friendRequestAlreadySent: boolean = !!sentFriendRequests.find(e => e.friendData.id === rowData.id);
    const friendRequestAlreadyReceived: boolean = !!receivdFriendRequests.find(e => e.friendData.id === rowData.id);

    function withProgressDecorator(func: () => Promise<any>) {
        return async () => {
            document.body.style.cursor = "progress";
            document.body.style.position = "none";
            await func();
            document.body.style.cursor = "auto";
            document.body.style.position = "auto";
        };
    }
    const acceptRequest = withProgressDecorator(() => dispatch(acceptFriendRequest(rowData.id)));
    const sendRequest = withProgressDecorator(() => dispatch(sendFriendRequest(rowData.id)));
    const cancelRequest = withProgressDecorator(() => dispatch(cancelFriendRequest(rowData.id)));
    const rejectRequest = withProgressDecorator(() => dispatch(rejectFriendRequest(rowData.id)));
    const openUserProfile = () => {
        dispatch(userProfileSlice.actions.setUserData(rowData));
    };
    const desktopReturn = (
        // containerul al row, e flex cu justify-between
        <div
            className={
                "mt-2 flex h-12 w-full flex-row justify-between rounded-md bg-white bg-opacity-5 p-1 shadow-sm shadow-black duration-100 ease-linear hover:bg-opacity-10 hover:shadow hover:shadow-Verde" +
                " " +
                "[&:hover_#dots]:text-opacity-100 [&:hover_#hiddenOnParentHover]:hidden [&:hover_#leftSide]:gap-2 [&:hover_#name]:text-Verde [&:hover_#visibleOnParentHover]:flex [&>*]:duration-100 [&>*]:ease-linear [&_#visibleOnParentHover]:hidden"
            }
        >
            {/* containerul din partea stanga */}
            <div id="leftSide" className="flex h-full  flex-row items-center gap-4 p-1">
                {/* poza si markul de online/offline */}
                <div onClick={openUserProfile} className="aspect-square h-full cursor-pointer">
                    <img src={rowData.picture} referrerPolicy="no-referrer" className="aspect-square h-full rounded-full" />
                    <div
                        style={{ backgroundColor: "gray" }}
                        className="absolute bottom-0 right-0 box-content aspect-square h-2 translate-x-1/4 translate-y-1/4 rounded-full border-4 border-Gray3"
                    ></div>
                </div>
                {/* numele la user */}
                <div onClick={openUserProfile} id="name" className={`cursor-pointer whitespace-nowrap overflow-hidden overflow-ellipsis text-white ${isMobile ? "text-base" : "text-xl"}`}>
                    {rowData.username}
                </div>
            </div>

            {/* containerul din partea dreapta */}
            <div className="flex h-full px-2">
                {/* containerul la iconita cu add friend */}
                <div className={"flex h-full cursor-pointer items-center gap-2 rounded-full p-1 hover:bg-white hover:bg-opacity-5 [&>*]:duration-100 [&>*]:ease-linear "}>
                    {/* send friend request */}
                    {!friendRequestAlreadySent && !friendRequestAlreadyReceived && (
                        <div className="h-full hover:p-1 [&:hover_#visibleOnParentHover1]:flex [&_#visibleOnParentHover1]:hidden" onClick={sendRequest}>
                            <AddUserEmptyIcon id="hiddenOnParentHover" className="h-full text-white text-opacity-10" />
                            <AddUserFillIcon id="visibleOnParentHover" className="h-full text-white hover:text-Verde" />
                            <Tooltip id="visibleOnParentHover1">{"Send request"}</Tooltip>
                        </div>
                    )}
                    {/* cancel friend request */}
                    {friendRequestAlreadySent && (
                        <div className="h-full hover:p-1 [&:hover_#visibleOnParentHover1]:flex [&_#visibleOnParentHover1]:hidden" onClick={cancelRequest}>
                            <DeleteUserIcon id="hiddenOnParentHover" className="h-full text-white text-opacity-10 " />
                            <DeleteUserIconFill id="visibleOnParentHover" className="h-full text-white hover:text-Crimson" />
                            <Tooltip id="visibleOnParentHover1">{"Cancel request"}</Tooltip>
                        </div>
                    )}
                    {/* accept or reject friend request */}
                    {friendRequestAlreadyReceived && (
                        <>
                            {/* accept */}
                            <div className="h-full hover:p-1 [&:hover_#visibleOnParentHover1]:flex [&_#visibleOnParentHover1]:hidden" onClick={acceptRequest}>
                                <PersonCheckEmptyIcon id="hiddenOnParentHover" className="h-full text-white text-opacity-10 " />
                                <PersonCheckFillIcon id="visibleOnParentHover" className="h-full text-white hover:text-Verde" />
                                <Tooltip id="visibleOnParentHover1">{"Accept request"}</Tooltip>
                            </div>
                            {/* reject */}
                            <div className="h-full hover:p-1 [&:hover_#visibleOnParentHover1]:flex [&_#visibleOnParentHover1]:hidden" onClick={rejectRequest}>
                                <DeleteUserIcon id="hiddenOnParentHover" className="h-full text-white text-opacity-10 " />
                                <DeleteUserIcon id="visibleOnParentHover" className="h-full text-white hover:text-Crimson" />
                                <Tooltip id="visibleOnParentHover1">{"Reject request"}</Tooltip>
                            </div>
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
    const mobileReturn = desktopReturn;

    return isMobile ? mobileReturn : desktopReturn;
};

// export default UserRow;

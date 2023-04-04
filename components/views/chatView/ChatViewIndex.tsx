import * as React from "react";

import SendIcon from "../../svg/Send";
import { AppContext } from "../../../pages";
import Message from "./ChatMessage";
import { sendMessage, updateLastReadMessageTimeStamp, useActiveChat, useUnredMessagesForChat } from "../../../src/features/chatSlice";
import { useCurrentUser } from "../../../src/features/currentUserSlice";
import { useFriends, useOnlineFriendsIds } from "../../../src/features/friendsSlice";
import { useMyDispatch } from "../../../src/store";
import { soundEffect2, soundEffect3, soundEffect4 } from "../../utils/soundEffects";
import SendEmptyIcon from "../../svg/SendEmptyIcon";
import SendEmptyFill from "../../svg/SendEmptyFill";
import { userProfileSlice } from "../../../src/features/userProfileSlice";

const Chat: React.FunctionComponent = () => {
    const dispatch = useMyDispatch();
    // states
    const activeChat = useActiveChat();
    const unredMessagesCount = useUnredMessagesForChat(activeChat.id);
    const [unreadMarkIndex, setUnreadMarkIndex] = React.useState(-1);
    const currentUser = useCurrentUser();
    const friends = useFriends();
    const onlineFriendsIds = useOnlineFriendsIds();
    const [isSending, setIsSending] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>();
    const messagesContainerRef = React.useRef<HTMLDivElement>();
    const newMarkRef = React.useRef<HTMLInputElement>();
    // gasim userul la care se refera activeChat-ul din lista 'friends'
    const friendId: string = activeChat.participants.find(p => p.participantId !== currentUser.id).participantId;
    const friendData: global.FriendData = friends.find(e => e.id === friendId);
    const friendIsOnline = onlineFriendsIds.includes(friendData.id);

    // hooks
    React.useEffect(updateNewMark, []);

    const scrollDown = React.useCallback(() => (messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight), []);
    const scrollToNewMarck = React.useCallback(() => {
        return messagesContainerRef.current.scrollTo({
            top: newMarkRef.current.offsetTop,
            behavior: "smooth",
        });
    }, []);

    React.useEffect(() => {
        scrollDown();
        setTimeout(() => newMarkRef.current && scrollToNewMarck(), 100);
        dispatch(updateLastReadMessageTimeStamp({ chatId: activeChat.id, participantId: currentUser.id }));
    }, [activeChat.messages.length]);

    // React.useEffect(() => {
    //     newMarkRef.current ? scrollToNewMarck() : scrollDown();
    // }, [newMarkRef.current]);

    // functions
    async function sendMessageHandler() {
        removeNewMark();
        soundEffect4();
        if (!inputRef.current.value.replace(" ", "")) return;
        setIsSending(true);
        const { meta } = await dispatch(
            sendMessage({
                partialMessage: { content: inputRef.current.value },
                chatId: activeChat.id,
            })
        );
        await dispatch(updateLastReadMessageTimeStamp({ chatId: activeChat.id, participantId: currentUser.id }));
        if (meta.requestStatus === "fulfilled") inputRef.current.value = "";
        setIsSending(false);
        scrollDown();
    }
    function updateNewMark() {
        setUnreadMarkIndex(activeChat.messages.length - unredMessagesCount);
    }
    function removeNewMark() {
        setUnreadMarkIndex(-1);
    }
    function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        switch (event.key) {
            case "Enter":
                sendMessageHandler();
                break;
            case "Backspace":
                soundEffect2();
                break;
            default:
                soundEffect3();
                break;
        }
    }
    function openFriendProfile() {
        friendData && dispatch(userProfileSlice.actions.setUserData(friendData));
    }
    // fara CurrentUser && friends pagina de chat nu poate exista
    if (!(currentUser && friendData && friends)) return <div>{"Loading..."}</div>;

    return (
        // <DesktopChatComponent
        <div className="flex h-full w-full flex-col gap-2 ">
            {/* Asta e meniu de sus */}
            <div className="flex h-14 items-center gap-2 rounded-t-lg bg-Verde bg-opacity-20 p-2 shadow-sm shadow-black">
                <img
                    onClick={openFriendProfile}
                    src={friendData.picture || "img/blank_profile.png"}
                    className="aspect-square h-full cursor-pointer rounded-full shadow-sm shadow-black duration-100 ease-linear hover:scale-105 hover:opacity-70"
                />
                <div onClick={openFriendProfile} className="cursor-pointer font-Whyte-Medium text-xl text-white hover:text-Verde">
                    {friendData.username}
                </div>
                <div className={`aspect-square h-4 rounded-full ${friendIsOnline ? "bg-Verde" : "bg-neutral-500"} shadow-sm shadow-black`}></div>
                <div className="h-full w-[0.2vmin] rounded-full bg-white bg-opacity-30"></div>
            </div>

            {/* Asta e containeru cu mesaje */}
            <div ref={messagesContainerRef} className="m-2 h-full w-full overflow-y-auto overflow-x-hidden">
                {activeChat.messages
                    .map((c, i, a) => a[a.length - i - 1])
                    .map((message, index) => {
                        return (
                            <>
                                {index === unreadMarkIndex && (
                                    <div ref={newMarkRef} className="flex items-center">
                                        <div className="h-1 w-full flex-grow rounded-l-full bg-Crimson"></div>
                                        <div className="rounded-sm bg-Crimson px-1 text-white">NEW</div>
                                    </div>
                                )}
                                <Message key={message.sendAt + message.content} senderData={message.sender === currentUser.id ? currentUser : friendData} message={message} />
                            </>
                        );
                    })}
                {/* asta lam pus de test ca sa vedem cum merge scrollul */}
                {/* <div style={{ height: "100vh" }}></div> */}
            </div>
            {/* Asta e containeru de jos care are inputul */}
            <div className="m-2 flex h-12 w-auto flex-row rounded bg-white bg-opacity-20 shadow-sm shadow-black">
                <input
                    className="flex-grow rounded rounded-r-xl bg-Gray3 px-2 font-Whyte-Book text-lg text-white"
                    ref={inputRef}
                    placeholder="Send a message"
                    type="text"
                    onKeyDown={onKeyDown}
                />
                {/* asta e containerul la SendIcon, e mai bine cand pui iconitele intrun wrapper/container decat sa le pui direct asa, iti permite sa faci animatii pe ele mai usor */}
                <div onClick={sendMessageHandler} className="flex h-full items-center justify-center p-2">
                    <div className="flex h-full cursor-pointer items-center gap-1 font-Whyte-Medium text-xl text-white hover:text-Verde active:opacity-50 [&:hover_#hiddenOnParentHover1]:hidden [&:hover_#visibleOnParentHover1]:flex [&_#hiddenOnParentHover1]:flex [&_#visibleOnParentHover1]:hidden">
                        {isSending ? (
                            <div className="flex h-full items-center justify-center">
                                <span className="loader1 h-[1.3rem]"></span>
                            </div>
                        ) : (
                            <>
                                <SendEmptyIcon id="hiddenOnParentHover1" className="aspect-square h-[1.3rem] text-white duration-100" />
                                <SendEmptyFill id="visibleOnParentHover1" className="aspect-square h-[1.3rem] text-Verde duration-100" />
                            </>
                        )}
                        {"Send"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;

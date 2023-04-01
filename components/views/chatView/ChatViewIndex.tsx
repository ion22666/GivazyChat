import * as React from "react";

import SendIcon from "../../svg/Send";
import { AppContext } from "../../../pages";
import Message from "./ChatMessage";
import { sendMessage, updateLastReadMessageTimeStamp, useActiveChat, useUnredMessagesCount } from "../../../src/features/chatSlice";
import { useCurrentUser } from "../../../src/features/currentUserSlice";
import { useFriends } from "../../../src/features/friendsSlice";
import { useMyDispatch } from "../../../src/store";
import { soundEffect2, soundEffect3, soundEffect4 } from "../../utils/soundEffects";

const Chat: React.FunctionComponent = () => {
    const dispatch = useMyDispatch();
    const activeChat = useActiveChat();
    const unredMessagesCount = useUnredMessagesCount();
    const [unreadMarkIndex, setUnreadMarkIndex] = React.useState(-1);
    const currentUser = useCurrentUser();
    const friends = useFriends();
    const [isSending, setIsSending] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>();
    const messagesContainerRef = React.useRef<HTMLDivElement>();
    const newMarkRef = React.useRef<HTMLInputElement>();

    function updateNewMark() {
        setUnreadMarkIndex(activeChat.messages.length - unredMessagesCount);
    }
    function removeNewMark() {
        setUnreadMarkIndex(-1);
    }
    React.useEffect(updateNewMark, []);

    const scrollDown = React.useCallback(() => (messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight), []);
    const scrollToNewMarck = React.useCallback(
        () =>
            messagesContainerRef.current.scrollTo({
                top: newMarkRef.current.offsetTop,
                behavior: "smooth",
            }),
        []
    );

    React.useEffect(() => {
        scrollDown();
        setTimeout(() => newMarkRef.current && scrollToNewMarck(), 100);
        dispatch(updateLastReadMessageTimeStamp({ chatId: activeChat.id, participantId: currentUser.id }));
    }, [activeChat.messages.length]);

    // React.useEffect(() => {
    //     newMarkRef.current ? scrollToNewMarck() : scrollDown();
    // }, [newMarkRef.current]);

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

    // fara CurrentUser && friends pagina de chat nu poate exista
    if (!(currentUser && friends)) return <div>{"Loading..."}</div>;

    // daca nu exista un activeChat
    if (!activeChat) return <div>{"No chat selected"}</div>;

    // gasim userul la care se refera activeChat-ul din lista 'friends'
    const friendId: string = activeChat.participants.find(p => p.participantId !== currentUser.id).participantId;
    const friendData: global.FriendData = friends.find(e => e.id === friendId);

    return (
        // <DesktopChatComponent
        <div className="flex h-full w-full flex-col gap-2">
            {/* Asta e containeru cu mesaje */}
            <div ref={messagesContainerRef} className="h-full w-full overflow-y-auto overflow-x-hidden">
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
            <div className="flex h-12 w-full flex-row gap-1 rounded-xl bg-stone-700 py-1 px-1 ">
                <input ref={inputRef} placeholder="Send a message" type="text" className="ml-1 flex-grow bg-transparent font-Whyte-Book text-lg" onKeyDown={onKeyDown} />
                {/* asta e containerul la SendIcon, e mai bine cand pui iconitele intrun wrapper/container decat sa le pui direct asa, iti permite sa faci animatii pe ele mai usor */}
                <div onClick={sendMessageHandler} className="flex h-full items-center justify-center rounded-xl bg-white bg-opacity-20">
                    {isSending && (
                        <div className="flex h-full scale-50 items-center justify-center p-2">
                            <span className="loader"></span>
                        </div>
                    )}
                    {!isSending && <SendIcon className="aspect-square h-full text-Verde duration-100 ease-linear hover:p-1 hover:text-orange-400 active:p-2 active:opacity-100" />}
                </div>
            </div>
        </div>
    );
};

export default Chat;

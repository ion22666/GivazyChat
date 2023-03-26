import * as React from "react";

import SendIcon from "../../svg/Send";
import { AppContext } from "../../../pages";
import Message from "./ChatMessage";
import { useDispatch } from "react-redux";
import { chatSlice, useActiveChat } from "../../../src/features/chatSlice";
import { useCurrentUser } from "../../../src/features/currentUserSlice";
import { useFriends } from "../../../src/features/friendsSlice";

const Chat: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const activeChat = useActiveChat();
    console.log(activeChat);
    const currentUser = useCurrentUser();
    const friends = useFriends();
    const { socket } = React.useContext(AppContext);

    const inputRef = React.useRef<HTMLInputElement>();

    function sendMessage() {
        const partialMessage: global.PartialMessage = {
            content: inputRef.current.value,
        };
        socket.emit("send message", partialMessage, activeChat.id);
    }
    // fara CurrentUser && friends pagina de chat nu poate exista
    if (!(currentUser && friends)) return <div>{"Loading..."}</div>;

    // daca nu exista un activeChat
    if (!activeChat) return <div>{"No chat selected"}</div>;

    // gasim userul la care se refera activeChat-ul din lista 'friends'
    const friendData = friends.find(e => e.id === activeChat.participants.find(id => id !== currentUser.id));

    return (
        // <DesktopChatComponent
        <div className="flex h-full w-full flex-col">
            {/* Asta e containeru cu mesaje */}
            <div className="h-full w-full overflow-y-auto overflow-x-hidden">
                {activeChat.messages.map(message => (
                    <Message key={message.sendAt} senderData={message.sender === currentUser.id ? currentUser : friendData} message={message} />
                ))}
                {/* asta lam pus de test ca sa vedem cum merge scrollul */}
                <div style={{ height: "100vh" }}></div>
            </div>
            {/* Asta e containeru de jos care are inputul */}
            <div className="flex h-16 w-full flex-row gap-1 px-2 py-3">
                <input
                    ref={inputRef}
                    placeholder="Send a message"
                    type="text"
                    className="flex-grow rounded-xl bg-stone-700 py-3 px-2 font-Whyte-Book text-lg focus:outline focus:outline-2 focus:outline-Verde"
                />
                {/* asta e containerul la SendIcon, e mai bine cand pui iconitele intrun wrapper/container decat sa le pui direct asa, iti permite sa faci animatii pe ele mai usor */}
                <div onClick={sendMessage} className="flex h-full items-center justify-center">
                    <SendIcon className="aspect-square h-full text-Verde duration-100 ease-linear hover:p-1 hover:text-orange-400 active:p-2 active:opacity-100" />
                </div>
            </div>
        </div>
    );
};

export default Chat;

import * as React from "react";

import SendIcon from "./svg/Send";
import { AppContext } from "../pages";
import Message from "./Message";

const Chat: React.FunctionComponent = () => {
    let { userData, activeChat, userFriendsData, chats, socket } = React.useContext(AppContext);

    // avem nevoie de obiectul 'AppContext' pentru a putea folosi 'AppObj.forceReRenderChat()'
    // deorece 'forceReRenderChat()' foloseste 'this'
    const AppObj = React.useContext(AppContext);

    // cand pagina de chat este on screen, conectam clientul la serverul ws pentru a putea primi mesaje
    React.useEffect(() => {
        socket.on("push message", (message: global.Message, chat_id) => {
            if (activeChat._id === chat_id) {
                activeChat.messages.push(message);
                AppObj.forceReRenderChat();
            }
        });
        return () => {
            socket.off("push message");
        };
    }, []);

    // fara userData && userFriendsData pagina de chat nu poate exista
    if (!(userData && userFriendsData)) return <div>{"Loading..."}</div>;

    if (chats.length === 0) return <div>{"You have no friends :("}</div>;

    // daca nu exista inca un activeChat, il folosim pe primul din lista ( nu e nevoie sa folosim 'setChats()' )
    if (!activeChat) activeChat = chats[0];

    const inputRef = React.useRef<HTMLInputElement>();

    function sendMessage() {
        const partial_message: global.PartialMessage = {
            content: inputRef.current.value,
        };
        socket.emit("send message", partial_message, activeChat._id);
    }

    // gasim userul la care se refera activeChat-ul din lista 'userFriendsData'
    const friendData = userFriendsData.find(e => e._id === userData.friends.find(e => e.chatId === activeChat._id).friendId);

    return (
        // <DesktopChatComponent
        <div className="flex h-full w-full flex-col place-content-stretch">
            {/* Asta e containeru cu mesaje */}
            <div className="w-full flex-grow overflow-y-auto overflow-x-hidden">
                {activeChat.messages.map(message => (
                    <Message senderData={message.sender === userData._id ? userData : friendData} message={message} />
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

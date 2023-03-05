import * as React from "react";

import SendIcon from "./svg/Send";
import { AppContext } from "../pages";

const chat_partener_picture = "https://cdn.discordapp.com/avatars/992720734600310814/80c518a21fc828406c4f18c5313ba462.webp";
const user_picture = "https://cdn.discordapp.com/avatars/452869400563810304/c90c7053eb97900669a5b20758a07a09.webp";

const messages = [
    {
        id: 1,
        received: true,
        content: "Salut",
        sendAt: "14:50",
    },
    {
        id: 2,
        received: false,
        content: "Salut ba",
        sendAt: "14:60",
    },
    {
        id: 3,
        received: true,
        content: "Ce mai faci",
        sendAt: "14:65",
    },
    {
        id: 4,
        received: false,
        content: "Uite bine si io pa-icia",
        sendAt: "15:50",
    },
    {
        id: 5,
        received: true,
        content: "Hai Ciao",
        sendAt: "18:20",
    },
];

const Chat: React.FunctionComponent = () => {
    let [userData, SetUserData] = React.useContext(AppContext);

    return (
        <div className="bg-stone-900 w-full h-full flex flex-col place-content-stretch">
            {/* Asta e containeru cu mesaje */}
            <div className="w-full flex-grow overflow-y-auto overflow-x-hidden">
                {messages.map(message => {
                    return (
                        // asta e containerul unui singur mesaj
                        <div key={message.id} className="h-12 w-full flex flex-row gap-2 m-4">
                            {/* asta e poza la sender */}
                            <img src={message.received ? chat_partener_picture : user_picture} className="h-full aspect-square rounded-full" />
                            {/* aici e numele, cand sa trimis si ce a trimis */}
                            <div className="flex flex-col gap-1">
                                <div className="text-stone-400 text-xs flex flex-row gap-2 items-center">
                                    <span className="text-white font-Whyte-Medium text-base">{message.received ? "Valy" : "Giovanni"}</span> {"Sended at " + message.sendAt}
                                </div>
                                <div className="text-stone-500">{message.content}</div>
                            </div>
                        </div>
                    );
                })}
                {/* asta lam pus de test ca sa vedem cum merge scrollul */}
                <div style={{ height: "100vh" }}></div>
            </div>
            {/* Asta e containeru de jos care are inputul */}
            <div className="h-16 w-full flex flex-row gap-1 px-2 py-3">
                
                <input
                    placeholder="Send a message"
                    type="text"
                    className="bg-stone-700 font-Whyte-Book flex-grow rounded-xl py-3 px-2 text-lg focus:outline-Verde focus:outline-2 focus:outline"
                />
                {/* asta e containerul la SendIcon, e mai bine cand pui iconitele intrun wrapper/container decat sa le pui direct asa, iti permite sa faci animatii pe ele mai usor */}
                <div className="h-full flex justify-center items-center">
                    <SendIcon className="h-full aspect-square hover:p-1 text-Verde hover:text-orange-400 duration-100 ease-linear active:p-2 active:opacity-100" />
                </div>
            </div>
        </div>
    );
};

export default Chat;

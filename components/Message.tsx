import * as React from "react";

type Props = {
    senderData: global.UserData;
    message: global.Message;
};

const Message: React.FunctionComponent<Props> = (props: Props) => {
    // asta e containerul unui singur mesaj

    const { senderData, message } = props;
    return (
        <div key={message.sendAt} className="h-12 w-full flex flex-row gap-2 m-4">
            {/* asta e poza la sender */}
            <img src={senderData.picture || "img/blank_profile.png"} className="h-full aspect-square rounded-full" />
            {/* aici e numele, cand sa trimis si ce a trimis */}
            <div className="flex flex-col gap-1">
                <div className="text-stone-400 text-xs flex flex-row gap-2 items-center">
                    <span className="text-white font-Whyte-Medium text-base">{senderData.username}</span>
                    <span>{"Sended at " + message.sendAt}</span>
                </div>
                <div className="text-stone-500">{message.content}</div>
            </div>
        </div>
    );
};

export default Message;

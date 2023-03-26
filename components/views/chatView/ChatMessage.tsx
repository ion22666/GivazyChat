import * as React from "react";

type Props = {
    senderData: global.CurrentUser;
    message: global.Message;
};

const Message: React.FunctionComponent<Props> = (props: Props) => {
    // asta e containerul unui singur mesaj

    const { senderData, message } = props;
    return (
        <div key={message.sendAt} className="m-4 flex h-12 w-full flex-row gap-2">
            {/* asta e poza la sender */}
            <img src={senderData.picture || "img/blank_profile.png"} className="aspect-square h-full rounded-full" />
            {/* aici e numele, cand sa trimis si ce a trimis */}
            <div className="flex flex-col gap-1">
                <div className="flex flex-row items-center gap-2 text-xs text-stone-400">
                    <span className="font-Whyte-Medium text-base text-white">{senderData.username}</span>
                    <span>{"Sended at " + message.sendAt}</span>
                </div>
                <div className="text-stone-500">{message.content}</div>
            </div>
        </div>
    );
};

export default Message;

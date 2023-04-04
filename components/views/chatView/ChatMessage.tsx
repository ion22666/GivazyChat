import * as React from "react";
import { formatDate } from "../../utils/formatTime";

type Props = {
    senderData: global.CurrentUser;
    message: global.Message;
};

const Message: React.FunctionComponent<Props> = (props: Props) => {
    // asta e containerul unui singur mesaj

    const { senderData, message } = props;
    return (
        <div key={message.sendAt} className="mx-2 my-3 flex h-12 w-full flex-row gap-2">
            {/* asta e poza la sender */}
            <img
                src={senderData.picture || "img/blank_profile.png"}
                className="shadow-black aspect-square h-full cursor-pointer rounded-full shadow-sm duration-100 ease-linear hover:scale-105 hover:opacity-70"
            />
            {/* aici e numele, cand sa trimis si ce a trimis */}
            <div className="flex flex-col gap-1">
                <div className="flex flex-row items-center gap-2 text-xs text-stone-400">
                    <span className="cursor-pointer font-Whyte-Medium text-base text-white text-opacity-60 hover:text-Verde">{senderData.username}</span>
                    <span>{formatDate(message.sendAt)}</span>
                </div>
                <div className="text-white">{message.content}</div>
            </div>
        </div>
    );
};

export default Message;

import * as React from "react";
import { formatDate } from "../../utils/formatTime";
import { userProfileSlice } from "../../../src/features/userProfileSlice";
import { useMyDispatch } from "../../../src/store";
import { AppContext } from "../../../pages";

type Props = {
    senderData: global.CurrentUser;
    message: global.Message;
};

const Message: React.FunctionComponent<Props> = (props: Props) => {
    const dispatch = useMyDispatch();
    const { isMobile } = React.useContext(AppContext);
    // asta e containerul unui singur mesaj
    const regex = /^\p{Emoji}+$/u;
    const { senderData, message } = props;
    const isOnlyEmoji = regex.test(message.content);
    function openSenderProfile() {
        senderData && dispatch(userProfileSlice.actions.setUserData(senderData));
    }
    return (
        <div key={message.sendAt} className="p-2 flex w-full flex-row gap-2">
            {/* asta e poza la sender */}
            <img
                onClick={openSenderProfile}
                src={senderData.picture || "img/blank_profile.png"}
                className="aspect-square h-[2.75rem] cursor-pointer rounded-full shadow-sm shadow-black duration-100 ease-linear hover:scale-105 hover:opacity-70"
            />
            {/* aici e numele, cand sa trimis si ce a trimis */}
            <div className="flex flex-col gap-1">
                <div className="flex flex-row items-center gap-2 text-xs text-stone-400">
                    <span className="cursor-pointer font-Whyte-Medium text-[0.85rem] text-white text-opacity-60 hover:text-Verde">{senderData.username}</span>
                    <span>{formatDate(message.sendAt)}</span>
                </div>
                <div style={{ lineHeight: "1.2"}} className={`text-white ${isOnlyEmoji ? "text-5xl" : "text-base"}`}>{message.content}</div>
            </div>
        </div>
    );
};

export default Message;

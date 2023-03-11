import * as React from "react";

import { AppContext } from "../../pages";

const PaddingFriends: React.FunctionComponent = props => {
    const { userData, userFriendsData, chats, activeChat, setActiveChat } = React.useContext(AppContext);

    if (!userData || !userFriendsData || !chats) return <div>{"Loading..."}</div>;
    return <div {...props}></div>;
};

export default PaddingFriends;

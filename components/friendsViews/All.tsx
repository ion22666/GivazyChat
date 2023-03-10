import * as React from "react";

import { AppContext } from "../../pages";
import SearchComponent from "../SearchComponent";
import FriendRow from "./FriendRow";

const AllFriends: React.FunctionComponent = props => {
    const { userData, userFriendsData, chats } = React.useContext(AppContext);

    const [onScreenFriends, setOnScreenFriends] = React.useState(userFriendsData);
    const [activeMenuId, setActiveMenuId] = React.useState<string>(null);

    if (!userData || !userFriendsData || !chats) return <div>{"Loading..."}</div>;

    return (
        <div {...props} className="flex h-full w-full flex-col gap-2">
            <SearchComponent<global.UserData> state={userFriendsData} setState={setOnScreenFriends} filter={(text, e) => e.username.toLowerCase().includes(text.toLowerCase())} />

            <div>{`Total - ${userFriendsData.length}`}</div>

            <div className="flex-gro block w-full [&>*]:mt-2">
                {onScreenFriends.map(friendData => (
                    <FriendRow
                        key={friendData._id}
                        friendData={friendData}
                        menuIsOpen={activeMenuId === friendData._id}
                        closeMenu={() => setActiveMenuId(null)}
                        openMenu={() => setActiveMenuId(friendData._id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllFriends;

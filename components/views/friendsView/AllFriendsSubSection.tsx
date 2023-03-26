import * as React from "react";

import { AppContext } from "../../../pages";
import SearchComponent from "./FriendsSearchBar";
import FriendRow from "./FriendRow";
import { useFriends } from "../../../src/features/friendsSlice";

const AllFriends: React.FunctionComponent = props => {
    const { isMobile } = React.useContext(AppContext);
    const friends = useFriends();
    //
    const [onScreenFriends, setOnScreenFriends] = React.useState([]);
    const [activeMenuId, setActiveMenuId] = React.useState<string>(null);

    if (!friends) return <div>{"Loading..."}</div>;

    const desktopReturn = (
        <div {...props} className="flex h-full w-full flex-col gap-2">
            <SearchComponent<global.FriendData> nativeState={friends} setState={setOnScreenFriends} filter={(text, e) => e.username.toLowerCase().includes(text.toLowerCase())} />

            <div>{`Total - ${friends.length}`}</div>

            <div className="flex-gro block w-full [&>*]:mt-2">
                {onScreenFriends.map(friendData => (
                    <FriendRow
                        key={friendData.id}
                        friendData={friendData}
                        menuIsOpen={activeMenuId === friendData.id}
                        closeMenu={() => setActiveMenuId(null)}
                        openMenu={() => setActiveMenuId(friendData.id)}
                    />
                ))}
            </div>
        </div>
    );

    const mobileReturn = desktopReturn;

    return isMobile ? mobileReturn : desktopReturn;
};

export default AllFriends;

import * as React from "react";

import { AppContext } from "../../../pages";
import { VerdeColor } from "../../../pages/_app";
import { useOnlineFriends } from "../../../src/features/friendsSlice";
import ChatSquareIconFill from "../../svg/ChatSquareFillIcon";
import ChatSquareIcon from "../../svg/ChatSquareIcon";
import VerticalDotsIcon from "../../svg/VerticalDotsIcon";
import FriendRow from "./FriendRow";
import SearchComponent from "./FriendsSearchBar";

const OnlineFriends: React.FunctionComponent = props => {
    const { socket } = React.useContext(AppContext);
    const onlineFriends = useOnlineFriends();
    //
    const [onScreenFriends, setOnScreenFriends] = React.useState<global.FriendData[]>(onlineFriends);
    const [activeMenuId, setActiveMenuId] = React.useState<string>(null);

    return (
        <div {...props} className="flex h-full w-full flex-col gap-2">
            <SearchComponent<global.FriendData>
                nativeState={onlineFriends}
                setState={setOnScreenFriends}
                filter={(text, e) => e.username.toLowerCase().includes(text.toLowerCase())}
            />

            <div>{`Online - ${onlineFriends.length}`}</div>

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
};

export default OnlineFriends;

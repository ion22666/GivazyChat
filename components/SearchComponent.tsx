import * as React from "react";

import { AppContext } from "../pages";
import SearchIcon from "./svg/Search";

type Props<T> = {
    state: T[];
    setState: React.Dispatch<T[]>;
    filter: (input: string, value: T, index: number, array: T[]) => any;
};

function SearchComponent<T>({ state, setState, filter }: Props<T>) {
    const { userData, userFriendsData, chats, activeChat, setActiveChat } = React.useContext(AppContext);

    if (!userData || !userFriendsData || !chats) return <div>{"Loading..."}</div>;

    return (
        <div className="h-10 w-full flex flex-row items-center gap-1 px-2 py-1 rounded-md bg-black">
            <input
                onChange={e => setState(state.filter((...arg) => filter(e.currentTarget.value, ...arg)))}
                className="bg-transparent h-full flex-grow text-xl text-Verde"
                type="text"
                placeholder="Search"
            />
            <div className="h-full p-1 hover:p-2  duration-100 ease-linear">
                <SearchIcon className="text-white h-full active:text-Verde" />
            </div>
        </div>
    );
}

export default SearchComponent;

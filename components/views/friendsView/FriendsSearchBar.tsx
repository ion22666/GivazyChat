import * as React from "react";

import { AppContext } from "../../../pages";
import SearchIcon from "../../svg/Search";

type Props<T> = {
    state: T[];
    setState: React.Dispatch<T[]>;
    filter: (input: string, value: T, index: number, array: T[]) => any;
};

function SearchComponent<T>({ state, setState, filter }: Props<T>) {
    const { userData, userFriendsData, chats, activeChat, setActiveChat } = React.useContext(AppContext);

    if (!userData || !userFriendsData || !chats) return <div>{"Loading..."}</div>;

    return (
        <div className="flex h-10 w-full flex-row items-center gap-1 rounded-md bg-black px-2 py-1">
            <input
                onChange={e => setState(state.filter((...arg) => filter(e.currentTarget.value, ...arg)))}
                className="h-full flex-grow bg-transparent text-xl text-Verde"
                type="text"
                placeholder="Search"
            />
            <div className="h-full p-1 duration-100  ease-linear hover:p-2">
                <SearchIcon className="h-full text-white active:text-Verde" />
            </div>
        </div>
    );
}

export default SearchComponent;

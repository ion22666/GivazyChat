import * as React from "react";

import { AppContext } from "../../../pages";
import SearchIcon from "../../svg/Search";

type Props<T> = {
    nativeState: T[];
    setState: React.Dispatch<T[]>;
    filter: (input: string, value: T, index: number, array: T[]) => any;
};

function SearchComponent<T>({ nativeState, setState, filter }: Props<T>) {
    // const {  } = React.useContext(AppContext);
    function updateState(input: string = "") {
        setState(nativeState.filter((...arg) => filter(input, ...arg)));
    }
    React.useEffect(updateState, [nativeState]);
    return (
        <div className="flex h-10 w-full flex-row items-center gap-1 rounded-md bg-black px-2 py-1">
            <input onChange={e => updateState(e.currentTarget.value)} className="h-full flex-grow bg-transparent text-xl text-Verde" type="text" placeholder="Search" />
            <div className="h-full p-1 duration-100  ease-linear hover:p-2">
                <SearchIcon className="h-full text-white active:text-Verde" />
            </div>
        </div>
    );
}

export default SearchComponent;

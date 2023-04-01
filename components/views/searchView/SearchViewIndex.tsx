import * as React from "react";
import { AppContext } from "../../../pages";
import { UserRow } from "./SearchUserRow";
import GroupIconEmpty from "../../svg/GroupIconEmpty";
import GroupIconFill from "../../svg/GroupIconFill";
import PersonFillIcon from "../../svg/PersonFillIcon";
import PersonIcon from "../../svg/PersonIcon";
import SearchIcon from "../../svg/Search";
import ExclamationIcon from "../../svg/ExclamationIcon";
import { useDispatch } from "react-redux";
import { searchSlice, useActiveCategory, useSearchInput } from "../../../src/features/searchSlice";

type SearchCategory = {
    name: "Users" | "Groups";
    ActiveIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    InactiveIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    rowsData: any[];
    matchFound: number | null;
    RowBuilderComponent: React.FunctionComponent<{ rowData: any }>;
    apiSearchEndpoint: string;
    searchBarPlaceholder: string;
};

const onScreenMaxRows = 10;

function SearchViewComponent() {
    const searchCategories: SearchCategory[] = [
        {
            name: "Users",
            ActiveIcon: PersonFillIcon,
            InactiveIcon: PersonIcon,
            rowsData: [],
            RowBuilderComponent: UserRow,
            apiSearchEndpoint: "api/search/users",
            searchBarPlaceholder: "Search by username or #user_id",
            matchFound: null,
        },
        {
            name: "Groups",
            ActiveIcon: GroupIconFill,
            InactiveIcon: GroupIconEmpty,
            rowsData: [],
            RowBuilderComponent: UserRow,
            apiSearchEndpoint: "api/search/groups",
            searchBarPlaceholder: "Search by group name or #group_id",
            matchFound: null,
        },
    ];
    const dispatch = useDispatch();
    const activeSearchCategoryName = useActiveCategory();
    const { isMobile, searchViewInput, setSearchViewInput } = React.useContext(AppContext);
    const [activeSearchCategory, setActiveSearchCategory] = React.useState<SearchCategory>(searchCategories[0]);
    const [isSearching, setIsSearching] = React.useState<boolean>(null);

    const ActiveRowBuilder = activeSearchCategory.RowBuilderComponent;

    const isEmptyWarning = !isSearching && !searchViewInput.trim() && !activeSearchCategory.rowsData.length;
    const noDataFound = !isSearching && activeSearchCategory.matchFound === 0 && !isEmptyWarning;
    const thereIsMoreToFetch = activeSearchCategory.rowsData.length < activeSearchCategory.matchFound;
    const isEndOfResults = !isEmptyWarning && !thereIsMoreToFetch && activeSearchCategory.rowsData.length > onScreenMaxRows;
    const toDisplayTheResults = !(isSearching && !thereIsMoreToFetch);

    React.useEffect(() => {
        setActiveSearchCategory(searchCategories.find(e => e.name === activeSearchCategoryName));
    }, [activeSearchCategoryName]);

    React.useEffect(() => {
        let timeoutId = setTimeout(updateCategoryRowsData, 200);
        return () => clearTimeout(timeoutId);
    }, [searchViewInput]);

    React.useEffect(() => {
        console.log(activeSearchCategory);
    }, [activeSearchCategory]);

    async function updateCategoryRowsData(category = activeSearchCategory) {
        const cleanedInput = searchViewInput.trim().replace("#", "");
        if (!cleanedInput) return;
        setIsSearching(true);
        const response = await window.request(`${category.apiSearchEndpoint}?input=${cleanedInput}`);
        const jsonResponse = await response.json();
        category.rowsData = jsonResponse.data || [];
        category.matchFound = jsonResponse.totalMatch || 0;
        setActiveSearchCategory({ ...category });
        setIsSearching(false);
    }

    async function appendRowsData(category = activeSearchCategory) {
        const cleanedInput = searchViewInput.trim().replace("#", "");
        if (!cleanedInput) return;
        setIsSearching(true);
        const response = await window.request(`${category.apiSearchEndpoint}?input=${cleanedInput}&skip=${category.rowsData.length || 0}`);
        const jsonResponse = await response.json();
        category.rowsData.push(...(jsonResponse.data || []));
        setActiveSearchCategory({ ...category });
        setIsSearching(false);
    }

    function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch(searchSlice.actions.setInput(event.currentTarget.value));
        setSearchViewInput(event.currentTarget.value);
    }

    function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") updateCategoryRowsData();
    }

    function onScroll(event: React.UIEvent<HTMLDivElement, UIEvent>) {
        if (!isSearching && thereIsMoreToFetch && event.currentTarget.offsetHeight + event.currentTarget.scrollTop >= event.currentTarget.scrollHeight) appendRowsData();
    }

    function switchCategory(category: SearchCategory) {
        dispatch(searchSlice.actions.setActiveCategory(category.name));
        setActiveSearchCategory(category);
        updateCategoryRowsData(category);
    }

    const desktopReturn = (
        <div className="flex h-full w-full flex-col rounded-md px-2">
            {/* search bar component */}
            <div className="flex w-full justify-center rounded-t-lg bg-Verde bg-opacity-75 py-4">
                <div className="flex h-12 min-w-[90%] flex-row items-center gap-1 rounded-md bg-Gray2 px-2 py-1">
                    <input
                        onChange={onInputChange}
                        onKeyDown={onKeyDown}
                        value={searchViewInput}
                        placeholder={activeSearchCategory.searchBarPlaceholder}
                        className="h-full flex-grow bg-transparent font-Whyte-Medium text-xl text-Verde placeholder:font-Whyte-Italic"
                        type="text"
                    />
                    <div onClick={updateCategoryRowsData as any} className="h-full p-1 duration-100  ease-linear hover:p-2">
                        <SearchIcon className="h-full text-white active:text-Verde" />
                    </div>
                </div>
            </div>

            {/* search category chooser component */}
            <div className="flex w-full gap-8 rounded-b-lg bg-Gray1 bg-opacity-50 p-4">
                {searchCategories.map(categoty => {
                    const isActive = activeSearchCategory.name === categoty.name;
                    const IconToRender = isActive ? categoty.ActiveIcon : categoty.InactiveIcon;
                    return (
                        <div
                            key={categoty.name}
                            onClick={() => switchCategory({ ...categoty })}
                            className={
                                "flex flex-grow cursor-pointer items-center justify-center gap-2 rounded-lg p-4" +
                                " " +
                                "[&>*]:duration-100 [&>*]:ease-linear [&>*]:hover:scale-110" +
                                " " +
                                (isActive ? "pointer-events-none bg-Verde text-black" : "bg-white bg-opacity-10 text-white hover:bg-Verde hover:bg-opacity-25 hover:text-Verde")
                            }
                        >
                            <IconToRender className="h-5" />
                            <div className={"font-Whyte-HeavyItalic text-xl tracking-widest"}>{categoty.name}</div>
                        </div>
                    );
                })}
            </div>

            {/* containerul cu rezultatele gasite (users sau groups) */}
            <div onScroll={onScroll} className="mt-4 w-full flex-grow gap-4 overflow-y-auto rounded-lg bg-white bg-opacity-5 p-4">
                {/* display the total match count */}
                <div className="-mt-2 text-white text-opacity-50">{(activeSearchCategory.matchFound || "0") + " - total matches"}</div>

                {/* cand search input este gol */}
                {isEmptyWarning && (
                    <div className="flex w-full items-center justify-center p-2 text-center font-Whyte-Medium text-xl text-white">
                        {/* <ExclamationIcon className="h-5" /> */}
                        {"so empty"}
                        {/* <ExclamationIcon className="h-5" /> */}
                    </div>
                )}

                {/* rezultatele */}
                {toDisplayTheResults && activeSearchCategory.rowsData.map((data, index) => <ActiveRowBuilder key={index} rowData={data} />)}

                {/* is searching animation */}
                {(isSearching || thereIsMoreToFetch) && (
                    <div className="flex w-full items-center justify-center p-2">
                        <span className="loader"></span>
                    </div>
                )}

                {/* cand nu sa gasit nimic */}
                {noDataFound && <div className="flex w-full items-center justify-center p-2 text-center font-Whyte-Medium text-xl text-white">{"No Data Found"}</div>}

                {/* cand nu mai exista rezultate */}
                {isEndOfResults && <div className="flex w-full items-center justify-center p-2 text-center font-Whyte-Medium text-xl text-white">{"No more results"}</div>}
            </div>
        </div>
    );

    const mobileReturn = (
        <div className="flex h-full w-full flex-col rounded-md px-2">
            {/* search bar component */}
            <div className="flex w-full justify-center rounded-t-lg bg-Verde bg-opacity-75 py-4">
                <div className="flex h-12 min-w-[90%] flex-row items-center gap-1 rounded-md bg-Gray2 px-2 py-1">
                    <input
                        onChange={onInputChange}
                        onKeyDown={onKeyDown}
                        value={searchViewInput}
                        placeholder={activeSearchCategory.searchBarPlaceholder}
                        className="h-full flex-grow bg-transparent font-Whyte-Medium text-xl text-Verde placeholder:font-Whyte-Italic"
                        type="text"
                    />
                    <div onClick={updateCategoryRowsData as any} className="h-full p-1 duration-100  ease-linear hover:p-2">
                        <SearchIcon className="h-full text-white active:text-Verde" />
                    </div>
                </div>
            </div>

            {/* search category chooser component */}
            <div className="flex w-full gap-8 rounded-b-lg bg-Gray1 bg-opacity-50 p-4">
                {searchCategories.map(categoty => {
                    const isActive = activeSearchCategory.name === categoty.name;
                    const IconToRender = isActive ? categoty.ActiveIcon : categoty.InactiveIcon;
                    return (
                        <div
                            key={categoty.name}
                            onClick={() => switchCategory({ ...categoty })}
                            className={
                                "flex flex-grow cursor-pointer items-center justify-center gap-2 rounded-lg p-4" +
                                " " +
                                "[&>*]:duration-100 [&>*]:ease-linear [&>*]:hover:scale-110" +
                                " " +
                                (isActive ? "pointer-events-none bg-Verde text-black" : "bg-white bg-opacity-10 text-white hover:bg-Verde hover:bg-opacity-25 hover:text-Verde")
                            }
                        >
                            <IconToRender className="h-5" />
                            <div className={"font-Whyte-HeavyItalic text-xl tracking-widest"}>{categoty.name}</div>
                        </div>
                    );
                })}
            </div>

            {/* containerul cu rezultatele gasite (users sau groups) */}
            <div onScroll={onScroll} className="mt-4 w-full flex-grow gap-4 overflow-y-auto rounded-lg bg-white bg-opacity-5 p-4">
                {/* display the total match count */}
                <div className="-mt-2 text-white text-opacity-50">{(activeSearchCategory.matchFound || "0") + " - total matches"}</div>

                {/* cand search input este gol */}
                {isEmptyWarning && (
                    <div className="flex w-full items-center justify-center p-2 text-center font-Whyte-Medium text-xl text-white">
                        {/* <ExclamationIcon className="h-5" /> */}
                        {"so empty"}
                        {/* <ExclamationIcon className="h-5" /> */}
                    </div>
                )}

                {/* rezultatele */}
                {toDisplayTheResults && activeSearchCategory.rowsData.map((data, index) => <ActiveRowBuilder key={index} rowData={data} />)}

                {/* is searching animation */}
                {(isSearching || thereIsMoreToFetch) && (
                    <div className="flex w-full items-center justify-center p-2">
                        <span className="loader"></span>
                    </div>
                )}

                {/* cand nu sa gasit nimic */}
                {noDataFound && <div className="flex w-full items-center justify-center p-2 text-center font-Whyte-Medium text-xl text-white">{"No Data Found"}</div>}

                {/* cand nu mai exista rezultate */}
                {isEndOfResults && <div className="flex w-full items-center justify-center p-2 text-center font-Whyte-Medium text-xl text-white">{"No more results"}</div>}
            </div>
        </div>
    );

    return isMobile ? mobileReturn : desktopReturn;
}

export default SearchViewComponent;

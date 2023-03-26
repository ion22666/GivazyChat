import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import GroupIconEmpty from "../../components/svg/GroupIconEmpty";
import GroupIconFill from "../../components/svg/GroupIconFill";
import PersonFillIcon from "../../components/svg/PersonFillIcon";
import PersonIcon from "../../components/svg/PersonIcon";
import { UserRow } from "../../components/views/searchView/SearchUserRow";
import { StoreState } from "../store";

export type SearchCategory = {
    name: "Users" | "Groups";
    ActiveIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    InactiveIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    rowsData: any[];
    matchFound: number | null;
    RowBuilderComponent: React.FunctionComponent<{ rowData: any }>;
    apiSearchEndpoint: string;
    searchBarPlaceholder: string;
};

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

type State = {
    input: string;
    activeCategory: SearchCategory["name"];
    categories: SearchCategory[];
};

const initialState: State = {
    categories: searchCategories,
    input: "",
    activeCategory: searchCategories[0].name,
};
export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setInput: (state, action: PayloadAction<string>) => {
            state.input = action.payload;
        },
        setActiveCategory: (state, action: PayloadAction<SearchCategory["name"]>) => {
            state.activeCategory = action.payload; // state.categories.find(e => e.name === action.payload);
        },
    },
});

export const useSearchInput = () => useSelector<StoreState, string>(state => state.search.input);
export const useActiveCategory = () => useSelector<StoreState, SearchCategory["name"]>(state => state.search.activeCategory);

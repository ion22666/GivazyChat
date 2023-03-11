import * as React from "react";
import { AppContext } from "../pages";
import UserRow from "./searchView/UserRow";
import GroupIconEmpty from "./svg/GroupIconEmpty";
import GroupIconFill from "./svg/GroupIconFill";
import PersonFillIcon from "./svg/PersonFillIcon";
import PersonIcon from "./svg/PersonIcon";
import SearchIcon from "./svg/Search";

type SearchCategory = {
    name: "Users" | "Groups";
    ActiveIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    InactiveIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    rowsData: any[];
    RowBuilderComponent: React.FunctionComponent<{ rowData: any }>;
    onInputChange(this: SearchCategory, event: React.ChangeEvent<HTMLInputElement>): void;
};

function SearchViewComponent() {
    const { isMobile } = React.useContext(AppContext);

    const searchCategories: SearchCategory[] = [
        {
            name: "Users",
            ActiveIcon: PersonFillIcon,
            InactiveIcon: PersonIcon,
            rowsData: [],
            RowBuilderComponent: UserRow,
            onInputChange: async function (event) {
                const response = await window.request("api/search/users?input=" + event.currentTarget.value);
                const data = (await response.json()).data;
                this.rowsData = data;
                setActiveSearchCategory({ ...this });
            },
        },
        {
            name: "Groups",
            ActiveIcon: GroupIconFill,
            InactiveIcon: GroupIconEmpty,
            rowsData: [],
            RowBuilderComponent: UserRow,
            onInputChange: async function (event) {
                const response = await window.request("api/search/groups?input=" + event.currentTarget.value);
                const data = (await response.json()).data;
                this.rowsData = data;
                setActiveSearchCategory({ ...this });
            },
        },
    ];

    const [activeSearchCategory, setActiveSearchCategory] = React.useState<SearchCategory>(searchCategories[0]);

    const ActiveRowBuilder = activeSearchCategory.RowBuilderComponent;

    const desktopReturn = (
        <div className="flex h-full w-full flex-col gap-4 rounded-lg p-4">
            {/* search component */}
            <div className="flex w-full justify-center rounded-lg bg-Verde bg-opacity-75 py-8">
                <div style={{ minWidth: "50%" }} className="flex h-12 flex-row items-center gap-1 rounded-md bg-black px-2 py-1">
                    <input
                        onChange={e => activeSearchCategory.onInputChange(e)}
                        className="h-full flex-grow bg-transparent font-Whyte-Medium text-xl text-Verde placeholder:font-Whyte-Italic"
                        type="text"
                        placeholder="Search"
                    />
                    <div className="h-full p-1 duration-100  ease-linear hover:p-2">
                        <SearchIcon className="h-full text-white active:text-Verde" />
                    </div>
                </div>
            </div>
            {/* search category chooser component */}
            <div className="flex w-full gap-4 rounded-lg bg-black bg-opacity-50 p-4">
                {searchCategories.map(categoty => {
                    const isActive = activeSearchCategory.name === categoty.name;
                    const IconToRender = isActive ? categoty.ActiveIcon : categoty.InactiveIcon;
                    return (
                        <div
                            key={categoty.name}
                            onClick={() => setActiveSearchCategory({ ...categoty })}
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
            <div className="w-full flex-grow gap-4 overflow-y-auto rounded-lg bg-white bg-opacity-5 p-4">
                {activeSearchCategory.rowsData.map((data, index) => (
                    <ActiveRowBuilder key={index} rowData={data} />
                ))}
            </div>
        </div>
    );
    const mobileReturn = <div></div>;

    return isMobile ? mobileReturn : desktopReturn;
}

export default SearchViewComponent;

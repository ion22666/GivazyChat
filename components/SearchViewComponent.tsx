import * as React from "react";
import { AppContext } from "../pages";

function SearchViewComponent() {
    const { isMobile } = React.useContext(AppContext);

    const desktopReturn = <div></div>;
    const mobileReturn = <div></div>;
    
    return isMobile ? mobileReturn : desktopReturn;
}

export default SearchViewComponent;

import React from "react";

function Tooltip(props: React.HTMLProps<HTMLDivElement> ) {
    return (
        <div {...props} className="absolute top-0 left-1/2 flex -translate-y-full -translate-x-1/2 flex-col items-center justify-center">
            <div className="whitespace-nowrap rounded-md bg-black py-1 px-2 text-base text-Verde">
                {props.children}
            </div>
            <div className="h-0 w-0 border-t-[0.5rem] border-r-[0.5rem] border-l-[0.5rem]  border-solid  border-transparent border-t-black text-black"></div>
        </div>
    );
}

export default Tooltip;

import * as React from "react";

const images = ["https://static.deepl.com/img/logo/DeepL_Logo_darkBlue_v2.svg"].map(e => [e, e, e, e, e, e, e, e, e]);
images[0][0] = "img/20230215_183612.png";
function HomePage() {
    return (
        <div className="h-full w-full flex flex-row bg-black">
            <div className="bg-neutral-600 flex flex-col gap-1 p-1">
                {images[0].map(image => (
                    <img src={image} className="w-12 aspect-square" />
                ))}
            </div>
            <div className="bg-neutral-700 w-72"></div>
            <div className="flex-grow bg-neutral-800"></div>
        </div>
    );
}

export default HomePage;

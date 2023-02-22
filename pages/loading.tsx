import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-full fixed top-0 left-0">

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-fill absolute h-64 md:h-64 lg:h-64 w-auto " viewBox="0 0 16 16 ">
            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
         </svg>




        <div className="flex justify-center items-center top-0 left-0 ">
            <div className="bg-gray-400 w-2.5 h-2.5 rounded-full animate-loading-dot ml-4"></div>
            <div className="bg-gray-400 w-2.5 h-2.5 rounded-full animate-loading-dot ml-4"></div>
            <div className="bg-gray-400 w-2.5 h-2.5 rounded-full animate-loading-dot ml-4"></div>
        </div>


    </div>
  );
};

export default Loading;

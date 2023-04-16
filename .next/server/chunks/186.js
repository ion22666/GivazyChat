exports.id = 186;
exports.ids = [186];
exports.modules = {

/***/ 5268:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4186);
/* harmony import */ var _components_svg_Logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7767);
/* harmony import */ var _svg_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6380);
/* harmony import */ var _svg_Friend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4940);
/* harmony import */ var _svg_ChatBubble__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(454);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_NumberNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7497);
/* harmony import */ var _src_features_chatSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6473);
/* harmony import */ var _src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4639);
/* harmony import */ var _svg_GearFillIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2306);
/* harmony import */ var _svg_XIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3860);
/* harmony import */ var _svg_ListIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6460);
/* harmony import */ var _src_features_mobileSlice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6543);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages__WEBPACK_IMPORTED_MODULE_3__, _src_features_chatSlice__WEBPACK_IMPORTED_MODULE_10__]);
([_pages__WEBPACK_IMPORTED_MODULE_3__, _src_features_chatSlice__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const FirstSection = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    const { activeView , setActiveView , isMobile  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_pages__WEBPACK_IMPORTED_MODULE_3__.AppContext);
    const [settingsIsOpen, setSettingsIsOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const totalUnredMessages = (0,_src_features_chatSlice__WEBPACK_IMPORTED_MODULE_10__/* .useTotalUnredMessagesForCurrentUser */ .Zd)();
    const friendRequestsNumber = (0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_11__/* .useReceivedFriendRequestsCount */ .e7)();
    function logoutUser() {
        window.token = undefined;
        window.localStorage.removeItem("token");
        next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/login");
    }
    async function deleteUser() {
        await window.request("/api/user/delete");
        window.token = undefined;
        window.localStorage.removeItem("token");
        next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/login");
    }
    function openSecondSection() {
        dispatch(_src_features_mobileSlice__WEBPACK_IMPORTED_MODULE_15__/* .mobileSlice.actions.setSecondSectionIsOpen */ .U.actions.setSecondSectionIsOpen(true));
    }
    const desktopReturn = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-full w-full flex-col content-between p-1",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex-grow [&>*]:mb-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>setActiveView("chat"),
                        className: `w-full rounded-full ${activeView === "chat" ? "bg-Verde p-3" : "cursor-pointer bg-white bg-opacity-10 p-2 duration-100 ease-linear hover:bg-opacity-20 hover:p-3"}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_ChatBubble__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                className: `w-full ${activeView === "chat" ? "text-black" : "text-white"}`
                            }),
                            totalUnredMessages > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_NumberNotification__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                value: totalUnredMessages
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>setActiveView("friends"),
                        className: `w-full rounded-full ${activeView === "friends" ? "bg-Verde p-3" : "cursor-pointer bg-white bg-opacity-10 p-2 duration-100 ease-linear hover:bg-opacity-20 hover:p-3"}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Friend__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                className: `w-full ${activeView === "friends" ? "text-black" : "text-white"}`
                            }),
                            friendRequestsNumber > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_NumberNotification__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                value: friendRequestsNumber
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>setActiveView("search"),
                        className: `w-full rounded-full ${activeView === "search" ? "bg-Verde p-3" : "cursor-pointer bg-white bg-opacity-10 p-2 duration-100 ease-linear hover:bg-opacity-20 hover:p-3"}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Search__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            className: `w-full ${activeView === "search" ? "text-black" : "text-white"}`
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-1 rounded-full bg-Verde"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full [&>*]:mt-2 ",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: ()=>{},
                    className: `flex w-full cursor-pointer flex-col justify-center gap-4 rounded-full  ${settingsIsOpen ? "bg-black px-2 py-4" : "bg-Verde p-2 hover:bg-white active:brightness-75"} align-middle`,
                    children: [
                        settingsIsOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_svg_Logout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            onClick: logoutUser,
                            className: "w-full overflow-visible text-white duration-100 ease-linear hover:scale-90 hover:text-Crimson"
                        }),
                        settingsIsOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_XIcon__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            onClick: ()=>setSettingsIsOpen(false),
                            className: "w-full overflow-visible text-white duration-100 ease-linear hover:scale-90 hover:text-Crimson [&:hover_#hiddenOnParentHover]:hidden [&:hover_#visibleOnParentHover]:flex [&_#hiddenOnParentHover]:flex [&_#visibleOnParentHover]:hidden"
                        }),
                        !settingsIsOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_GearFillIcon__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            onClick: ()=>setSettingsIsOpen(true),
                            className: "w-full overflow-visible text-Gray3 duration-100 ease-linear hover:scale-90 hover:text-Verde"
                        })
                    ]
                })
            })
        ]
    });
    const mobileReturn = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-full w-full content-between justify-around p-1",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: openSecondSection,
                className: `h-full rounded-full ${ false ? 0 : "cursor-pointer bg-white bg-opacity-10 p-2 duration-100 ease-linear hover:bg-opacity-20 hover:p-3"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_ListIcon__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    className: `aspect-square h-full ${ false ? 0 : "text-white"}`
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                onClick: ()=>setActiveView("chat"),
                className: `h-full rounded-full ${activeView === "chat" ? "bg-Verde p-3" : "cursor-pointer bg-white bg-opacity-10 p-2 duration-100 ease-linear hover:bg-opacity-20 hover:p-3"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_ChatBubble__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        className: `aspect-square h-full ${activeView === "chat" ? "text-black" : "text-white"}`
                    }),
                    totalUnredMessages > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_NumberNotification__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        value: totalUnredMessages
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                onClick: ()=>setActiveView("friends"),
                className: `h-full rounded-full ${activeView === "friends" ? "bg-Verde p-3" : "cursor-pointer bg-white bg-opacity-10 p-2 duration-100 ease-linear hover:bg-opacity-20 hover:p-3"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Friend__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: `h-full ${activeView === "friends" ? "text-black" : "text-white"}`
                    }),
                    friendRequestsNumber > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_NumberNotification__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        value: friendRequestsNumber
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setActiveView("search"),
                className: `h-full rounded-full ${activeView === "search" ? "bg-Verde p-3" : "cursor-pointer bg-white bg-opacity-10 p-2 duration-100 ease-linear hover:bg-opacity-20 hover:p-3"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Search__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    className: `h-full ${activeView === "search" ? "text-black" : "text-white"}`
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-full",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: ()=>{},
                    className: `flex h-full cursor-pointer flex-col justify-center gap-4 rounded-full  ${settingsIsOpen ? "bg-black px-2 py-4" : "bg-white bg-opacity-10 p-2 active:brightness-75"} align-middle`,
                    children: [
                        settingsIsOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_svg_Logout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            onClick: logoutUser,
                            className: "h-full overflow-visible text-white duration-100 ease-linear hover:scale-90 hover:text-Crimson"
                        }),
                        settingsIsOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_XIcon__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            onClick: ()=>setSettingsIsOpen(false),
                            className: "h-full overflow-visible text-white duration-100 ease-linear hover:scale-90 hover:text-Crimson [&:hover_#hiddenOnParentHover]:hidden [&:hover_#visibleOnParentHover]:flex [&_#hiddenOnParentHover]:flex [&_#visibleOnParentHover]:hidden"
                        }),
                        !settingsIsOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_GearFillIcon__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            onClick: ()=>setSettingsIsOpen(true),
                            className: "h-full overflow-visible text-white duration-100 ease-linear hover:scale-90 hover:text-Verde"
                        })
                    ]
                })
            })
        ]
    });
    return isMobile ? mobileReturn : desktopReturn;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FirstSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NB": () => (/* binding */ minimum_time_loading),
/* harmony export */   "f": () => (/* binding */ transition_duration),
/* harmony export */   "gb": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_ChatBubble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(454);



const transition_duration = 100;
const minimum_time_loading = 1500;
const Loading = ({ is_loading  })=>{
    // exista o diferenta intre is_loading si is_visible:
    // is_loading se termina cand next.js a rendat pagina,
    // is_visible trebuie sa se termine dupa ce loading screenul isi termina tranzitia
    let [is_visible, set_is_visible] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    let [opacity, set_opacity] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("0");
    const divRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (is_loading) {
            set_is_visible(true);
        } else {
            divRef.current.ontransitionend = ()=>set_is_visible(false);
        }
        return ()=>divRef.current.ontransitionend = null;
    }, [
        is_loading
    ]);
    // este nevoie sa punem opacitatea = 1 doar dupa ce div-ul este vizibil, altfel animatia nu se va activa
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        // folosim IntersectionObserver API pentru a adauga un "eventListener" pentru momentul cand div-ul devine vizibil for sure
        const observer = new IntersectionObserver((entries)=>entries.forEach((entry)=>{
                observer.unobserve(entry.target);
                if (entry.isIntersecting) set_opacity(is_visible && is_loading ? "1" : "0");
            }));
        observer.observe(divRef.current);
        return ()=>observer.disconnect();
    }, [
        is_visible,
        is_loading
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: divRef,
        style: {
            zIndex: "999999",
            opacity: opacity,
            display: is_visible ? "flex" : "none",
            transitionDuration: transition_duration + "ms"
        },
        className: "flex justify-center items-center w-full h-full fixed top-0 left-0 loading-screen ease-linear backdrop-blur-md bg-black bg-opacity-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_ChatBubble__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: "bi bi-chat-fill absolute h-64 md:h-64 lg:h-64 w-auto text-Verde"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-center items-center top-0 left-0 gap-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-white h-5 aspect-square rounded-full animate-loading-dot",
                        style: {
                            animationDelay: "0ms"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-white h-5 aspect-square rounded-full animate-loading-dot",
                        style: {
                            animationDelay: "100ms"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-white w-5 aspect-square rounded-full animate-loading-dot",
                        style: {
                            animationDelay: "200ms"
                        }
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 4337:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4186);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3847);
/* harmony import */ var _src_features_chatSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6473);
/* harmony import */ var _src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5031);
/* harmony import */ var _src_features_currentUserSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9301);
/* harmony import */ var _utils_NumberNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7497);
/* harmony import */ var _svg_CaretDownEmpty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6353);
/* harmony import */ var _svg_CaretDownFill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6965);
/* harmony import */ var _svg_CaretRightEmpty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5608);
/* harmony import */ var _svg_CaretRightFill__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9986);
/* harmony import */ var _src_features_mobileSlice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6543);
/* harmony import */ var _utils_hasParent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9613);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages__WEBPACK_IMPORTED_MODULE_3__, _pages_app__WEBPACK_IMPORTED_MODULE_4__, _src_features_chatSlice__WEBPACK_IMPORTED_MODULE_5__]);
([_pages__WEBPACK_IMPORTED_MODULE_3__, _pages_app__WEBPACK_IMPORTED_MODULE_4__, _src_features_chatSlice__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const SecondSection = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    // states
    const { activeView , setActiveView , isMobile  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_pages__WEBPACK_IMPORTED_MODULE_3__.AppContext);
    const friends = (0,_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_6__/* .useFriends */ .mz)();
    const groups = [];
    const currentUser = (0,_src_features_currentUserSlice__WEBPACK_IMPORTED_MODULE_7__/* .useCurrentUser */ .x)();
    const unreadMessages = (0,_src_features_chatSlice__WEBPACK_IMPORTED_MODULE_5__/* .useUnreadMessages */ .LU)();
    const onlineFriendsIds = (0,_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_6__/* .useOnlineFriendsIds */ .Gb)();
    const activeChatId = (0,_src_features_chatSlice__WEBPACK_IMPORTED_MODULE_5__/* .useActiveChat */ .KF)()?.id;
    const availableChats = (0,_src_features_chatSlice__WEBPACK_IMPORTED_MODULE_5__/* .useAvailableChats */ .GB)();
    const secondSectionRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
    const [sectionVisibility, setSectionVisibility] = react__WEBPACK_IMPORTED_MODULE_1__.useState({
        dirrectMessages: true,
        groupChats: false
    });
    const secondSectionIsOpen = (0,_src_features_mobileSlice__WEBPACK_IMPORTED_MODULE_13__/* .useSecondSectionIsOpen */ .u)();
    // HOOKS
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        const closeSecondSectionWrapper = (e)=>{
            if ((0,_utils_hasParent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(e.target, secondSectionRef.current)) return;
            return closeSecondSection();
        };
        const timeoutId = setTimeout(()=>document.addEventListener("click", closeSecondSectionWrapper), 200);
        return ()=>{
            clearTimeout(timeoutId);
            document.removeEventListener("click", closeSecondSectionWrapper);
        };
    }, [
        secondSectionIsOpen
    ]);
    // functions
    function handleFriendRowClick(id) {
        if (!availableChats.includes(id)) return;
        setActiveView("chat");
        dispatch(_src_features_chatSlice__WEBPACK_IMPORTED_MODULE_5__/* .chatSlice.actions.setActiveChatId */ .J7.actions.setActiveChatId(id));
        closeSecondSection();
    }
    function closeSecondSection() {
        dispatch(_src_features_mobileSlice__WEBPACK_IMPORTED_MODULE_13__/* .mobileSlice.actions.setSecondSectionIsOpen */ .U.actions.setSecondSectionIsOpen(false));
    }
    // JSX
    const desktopReturn = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: secondSectionRef,
        className: `flex h-full w-full flex-col overflow-hidden`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-h-[50%] w-full flex-grow-0 overflow-clip",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>setSectionVisibility((e)=>({
                                    ...e,
                                    dirrectMessages: !e.dirrectMessages
                                })),
                        className: "flex w-full cursor-pointer items-center gap-1 rounded text-center font-Whyte-Medium text-xl text-stone-300 hover:bg-Verde hover:bg-opacity-20 [&:hover_#hiddenOnParentHover]:hidden [&:hover_#visibleOnParentHover]:flex [&_#hiddenOnParentHover]:flex [&_#visibleOnParentHover]:hidden",
                        children: [
                            sectionVisibility.dirrectMessages ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CaretDownEmpty__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        id: "hiddenOnParentHover",
                                        className: "h-[1.25rem] text-white"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CaretDownFill__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        id: "visibleOnParentHover",
                                        className: "hover:text:Verde h-[1.25rem] text-white hover:text-Verde"
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CaretRightEmpty__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        id: "hiddenOnParentHover",
                                        className: "h-[1.25rem] text-white"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CaretRightFill__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        id: "visibleOnParentHover",
                                        className: "hover:text:Verde h-[1.25rem] text-white "
                                    })
                                ]
                            }),
                            "Direct Messages"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `ml-2 w-full border-l-[0.2vmin] border-l-white px-2 ${sectionVisibility.dirrectMessages ? "h-full overflow-y-auto" : "h-0 overflow-hidden"}`,
                        children: [
                            friends.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full text-center text-base text-white text-opacity-10",
                                children: "*you have no friends*"
                            }),
                            friends?.map((friendData)=>{
                                const chatId = friendData.chatId;
                                const unreadMessagesCount = chatId && unreadMessages.find((e)=>e.chatId === chatId)?.unredMessages.find((e)=>e.participantId === currentUser.id)?.count;
                                // isSelected = daca chatul activ este chatul cu acest friend
                                const isSelected = activeView === "chat" && activeChatId === chatId;
                                const isOnline = onlineFriendsIds.find((id)=>id === friendData.id);
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    onClick: ()=>handleFriendRowClick(chatId),
                                    className: "flex h-10 w-full cursor-pointer flex-row items-center gap-4 rounded-md p-1 duration-100 ease-linear hover:gap-2 hover:bg-white hover:bg-opacity-10",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "aspect-square h-full",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: friendData.picture,
                                                    referrerPolicy: "no-referrer",
                                                    className: "aspect-square h-full rounded-full"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        backgroundColor: isOnline ? _pages_app__WEBPACK_IMPORTED_MODULE_4__.VerdeColor : "gray"
                                                    },
                                                    className: "absolute bottom-0 right-0 box-content aspect-square h-2 translate-x-1/4 translate-y-1/4 rounded-full border-4 border-Gray2"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_NumberNotification__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    value: unreadMessagesCount
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-lg",
                                            style: {
                                                color: isSelected ? _pages_app__WEBPACK_IMPORTED_MODULE_4__.VerdeColor : "white"
                                            },
                                            children: friendData.username
                                        })
                                    ]
                                }, friendData.id);
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "h-full w-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>setSectionVisibility((e)=>({
                                    ...e,
                                    groupChats: !e.groupChats
                                })),
                        className: "flex w-full cursor-pointer items-center gap-1 rounded text-center font-Whyte-Medium text-xl text-stone-300 hover:bg-Verde hover:bg-opacity-20 [&:hover_#hiddenOnParentHover]:hidden [&:hover_#visibleOnParentHover]:flex [&_#hiddenOnParentHover]:flex [&_#visibleOnParentHover]:hidden",
                        children: [
                            sectionVisibility.groupChats ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CaretDownEmpty__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        id: "hiddenOnParentHover",
                                        className: "h-[1.25rem] text-white"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CaretDownFill__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        id: "visibleOnParentHover",
                                        className: "hover:text:Verde h-[1.25rem] text-white hover:text-Verde"
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CaretRightEmpty__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        id: "hiddenOnParentHover",
                                        className: "h-[1.25rem] text-white"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CaretRightFill__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        id: "visibleOnParentHover",
                                        className: "hover:text:Verde h-[1.25rem] text-white hover:text-Verde"
                                    })
                                ]
                            }),
                            "Group Chats"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `ml-2 w-full border-l-[0.2vmin] border-l-white px-2 ${sectionVisibility.groupChats ? "h-fit overflow-y-auto" : "h-0 overflow-hidden"}`,
                        children: groups.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full text-base text-white text-opacity-10",
                            children: "*you have no group chat*"
                        })
                    })
                ]
            })
        ]
    });
    const mobileReturn = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: secondSectionRef,
        className: `flex h-full w-full flex-col overflow-hidden`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-h-[50%] w-full flex-grow-0 overflow-clip",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>setSectionVisibility((e)=>({
                                    ...e,
                                    dirrectMessages: !e.dirrectMessages
                                })),
                        className: "flex w-full cursor-pointer items-center gap-1 rounded bg-white bg-opacity-10 text-center font-Whyte-Medium text-2xl text-stone-300 hover:bg-Verde hover:bg-opacity-20 [&:hover_#hiddenOnParentHover]:hidden [&:hover_#visibleOnParentHover]:flex [&_#hiddenOnParentHover]:flex [&_#visibleOnParentHover]:hidden",
                        children: [
                            sectionVisibility.dirrectMessages ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CaretDownEmpty__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        id: "hiddenOnParentHover",
                                        className: "h-[1.5rem] text-white"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CaretDownFill__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        id: "visibleOnParentHover",
                                        className: "hover:text:Verde h-[1.5rem] text-white hover:text-Verde"
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CaretRightEmpty__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        id: "hiddenOnParentHover",
                                        className: "h-[1.5rem] text-white"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CaretRightFill__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        id: "visibleOnParentHover",
                                        className: "hover:text:Verde h-[1.5rem] text-white "
                                    })
                                ]
                            }),
                            "Direct Messages"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `ml-2 w-full border-l-[0.2vmin] border-l-white px-2 ${sectionVisibility.dirrectMessages ? "h-full overflow-y-auto" : "h-0 overflow-hidden"}`,
                        children: [
                            friends.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full text-center text-base text-white text-opacity-10",
                                children: "*you have no friends*"
                            }),
                            friends?.map((friendData)=>{
                                const chatId = friendData.chatId;
                                const unreadMessagesCount = chatId && unreadMessages.find((e)=>e.chatId === chatId)?.unredMessages.find((e)=>e.participantId === currentUser.id)?.count;
                                // isSelected = daca chatul activ este chatul cu acest friend
                                const isSelected = activeView === "chat" && activeChatId === chatId;
                                const isOnline = onlineFriendsIds.find((id)=>id === friendData.id);
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    onClick: ()=>handleFriendRowClick(chatId),
                                    className: "flex h-10 w-full cursor-pointer flex-row items-center gap-4 rounded-md p-1 duration-100 ease-linear hover:gap-2 hover:bg-white hover:bg-opacity-10",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "aspect-square h-full",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: friendData.picture,
                                                    referrerPolicy: "no-referrer",
                                                    className: "aspect-square h-full rounded-full"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        backgroundColor: isOnline ? _pages_app__WEBPACK_IMPORTED_MODULE_4__.VerdeColor : "gray"
                                                    },
                                                    className: "absolute bottom-0 right-0 box-content aspect-square h-2 translate-x-1/4 translate-y-1/4 rounded-full border-4 border-Gray2"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_NumberNotification__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    value: unreadMessagesCount
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-lg",
                                            style: {
                                                color: isSelected ? _pages_app__WEBPACK_IMPORTED_MODULE_4__.VerdeColor : "white"
                                            },
                                            children: friendData.username
                                        })
                                    ]
                                }, friendData.id);
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "h-full w-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>setSectionVisibility((e)=>({
                                    ...e,
                                    groupChats: !e.groupChats
                                })),
                        className: "flex w-full cursor-pointer items-center gap-1 rounded bg-white bg-opacity-10 text-center font-Whyte-Medium text-2xl text-stone-300 hover:bg-Verde hover:bg-opacity-20 [&:hover_#hiddenOnParentHover]:hidden [&:hover_#visibleOnParentHover]:flex [&_#hiddenOnParentHover]:flex [&_#visibleOnParentHover]:hidden",
                        children: [
                            sectionVisibility.groupChats ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CaretDownEmpty__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        id: "hiddenOnParentHover",
                                        className: "h-[1.5rem] text-white"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CaretDownFill__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        id: "visibleOnParentHover",
                                        className: "hover:text:Verde h-[1.25rem] text-white hover:text-Verde"
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CaretRightEmpty__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        id: "hiddenOnParentHover",
                                        className: "h-[1.5rem] text-white"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CaretRightFill__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        id: "visibleOnParentHover",
                                        className: "hover:text:Verde h-[1.25rem] text-white hover:text-Verde"
                                    })
                                ]
                            }),
                            "Group Chats"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `ml-2 w-full border-l-[0.2vmin] border-l-white px-2 ${sectionVisibility.groupChats ? "h-fit overflow-y-auto" : "h-0 overflow-hidden"}`,
                        children: groups.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full text-base text-white text-opacity-10",
                            children: "*you have no group chat*"
                        })
                    })
                ]
            })
        ]
    });
    return isMobile ? mobileReturn : desktopReturn;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecondSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const AddUserEmptyIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                d: "M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddUserEmptyIcon);


/***/ }),

/***/ 2057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const AddUserFillIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                d: "M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddUserFillIcon);


/***/ }),

/***/ 4565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BoxArrowUpRight = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                "fill-rule": "evenodd",
                d: "M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                "fill-rule": "evenodd",
                d: "M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxArrowUpRight);


/***/ }),

/***/ 6353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CaretDownEmptyIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CaretDownEmptyIcon);


/***/ }),

/***/ 6965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CaretDownFillIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CaretDownFillIcon);


/***/ }),

/***/ 5608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CaretRightEmptyIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CaretRightEmptyIcon);


/***/ }),

/***/ 9986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CaretRightEmptyFill = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CaretRightEmptyFill);


/***/ }),

/***/ 454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ChatBubbleIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16 ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatBubbleIcon);


/***/ }),

/***/ 1981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ChatSquareIconFill(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            }),
            props.children
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatSquareIconFill);


/***/ }),

/***/ 6082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ChatSquareIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
            }),
            props.children
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatSquareIcon);


/***/ }),

/***/ 8812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const DeleteUserIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708Z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteUserIcon);


/***/ }),

/***/ 5770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const DeleteUserIconFill = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708Z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteUserIconFill);


/***/ }),

/***/ 2424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const DiscordIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        viewBox: "0 0 1024 1024",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
            scale: "0.9"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "512",
                cy: "512",
                r: "512",
                fill: "#5865f2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M689.43 349a422.21 422.21 0 0 0-104.22-32.32 1.58 1.58 0 0 0-1.68.79 294.11 294.11 0 0 0-13 26.66 389.78 389.78 0 0 0-117.05 0 269.75 269.75 0 0 0-13.18-26.66 1.64 1.64 0 0 0-1.68-.79A421 421 0 0 0 334.44 349a1.49 1.49 0 0 0-.69.59c-66.37 99.17-84.55 195.9-75.63 291.41a1.76 1.76 0 0 0 .67 1.2 424.58 424.58 0 0 0 127.85 64.63 1.66 1.66 0 0 0 1.8-.59 303.45 303.45 0 0 0 26.15-42.54 1.62 1.62 0 0 0-.89-2.25 279.6 279.6 0 0 1-39.94-19 1.64 1.64 0 0 1-.16-2.72c2.68-2 5.37-4.1 7.93-6.22a1.58 1.58 0 0 1 1.65-.22c83.79 38.26 174.51 38.26 257.31 0a1.58 1.58 0 0 1 1.68.2c2.56 2.11 5.25 4.23 8 6.24a1.64 1.64 0 0 1-.14 2.72 262.37 262.37 0 0 1-40 19 1.63 1.63 0 0 0-.87 2.28 340.72 340.72 0 0 0 26.13 42.52 1.62 1.62 0 0 0 1.8.61 423.17 423.17 0 0 0 128-64.63 1.64 1.64 0 0 0 .67-1.18c10.68-110.44-17.88-206.38-75.7-291.42a1.3 1.3 0 0 0-.63-.63zM427.09 582.85c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.02 28.44-20.37 51.6-46 51.6zm170.13 0c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.01 28.44-20.17 51.6-46 51.6z",
                fill: "#fff"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiscordIcon);


/***/ }),

/***/ 7425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const EmojiSmileIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmojiSmileIcon);


/***/ }),

/***/ 8212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const EmojiSmileFullIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmojiSmileFullIcon);


/***/ }),

/***/ 3294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const FacebookIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "#1877F2",
                d: "M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "#ffffff",
                d: "M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FacebookIcon);


/***/ }),

/***/ 4940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const FriendIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fill: "currentColor",
                        fillRule: "nonzero",
                        d: "M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z",
                        transform: "translate(2 4)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"
                    })
                ]
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FriendIcon);


/***/ }),

/***/ 2306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const GearFillIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GearFillIcon);


/***/ }),

/***/ 7713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const GroupIconEmpty = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupIconEmpty);


/***/ }),

/***/ 4290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const GroupIconFill = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupIconFill);


/***/ }),

/***/ 704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const IdIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IdIcon);


/***/ }),

/***/ 1326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const InstagramIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "2",
                y: "2",
                width: "28",
                height: "28",
                rx: "6",
                fill: "url(#paint0_radial_87_7153)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "2",
                y: "2",
                width: "28",
                height: "28",
                rx: "6",
                fill: "url(#paint1_radial_87_7153)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "2",
                y: "2",
                width: "28",
                height: "28",
                rx: "6",
                fill: "url(#paint2_radial_87_7153)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z",
                fill: "white"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("radialGradient", {
                        id: "paint0_radial_87_7153",
                        cx: "0",
                        cy: "0",
                        r: "1",
                        gradientUnits: "userSpaceOnUse",
                        gradientTransform: "translate(12 23) rotate(-55.3758) scale(25.5196)",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                "stop-color": "#B13589"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.79309",
                                "stop-color": "#C62F94"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                "stop-color": "#8A3AC8"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("radialGradient", {
                        id: "paint1_radial_87_7153",
                        cx: "0",
                        cy: "0",
                        r: "1",
                        gradientUnits: "userSpaceOnUse",
                        gradientTransform: "translate(11 31) rotate(-65.1363) scale(22.5942)",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                "stop-color": "#E0E8B7"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.444662",
                                "stop-color": "#FB8A2E"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.71474",
                                "stop-color": "#E2425C"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                "stop-color": "#E2425C",
                                "stop-opacity": "0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("radialGradient", {
                        id: "paint2_radial_87_7153",
                        cx: "0",
                        cy: "0",
                        r: "1",
                        gradientUnits: "userSpaceOnUse",
                        gradientTransform: "translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.156701",
                                "stop-color": "#406ADC"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.467799",
                                "stop-color": "#6A45BE"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                "stop-color": "#6A45BE",
                                "stop-opacity": "0"
                            })
                        ]
                    })
                ]
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstagramIcon);


/***/ }),

/***/ 6460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ListIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                d: "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListIcon);


/***/ }),

/***/ 7767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const LogoutIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                ...props,
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 16 16",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        d: "M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        d: "M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    })
                ]
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogoutIcon);


/***/ }),

/***/ 6445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PencilEmptyIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PencilEmptyIcon);


/***/ }),

/***/ 8188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PersonCheckEmptyIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonCheckEmptyIcon);


/***/ }),

/***/ 7101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PersonCheckFillIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonCheckFillIcon);


/***/ }),

/***/ 2106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PersonCircleIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonCircleIcon);


/***/ }),

/***/ 8739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PersonDownEmptyIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonDownEmptyIcon);


/***/ }),

/***/ 6740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PersonFillIcon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonFillIcon);


/***/ }),

/***/ 1252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PersonIcon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonIcon);


/***/ }),

/***/ 8932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PersonUpEmptyIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonUpEmptyIcon);


/***/ }),

/***/ 9758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const RedditIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M16 2C8.27812 2 2 8.27812 2 16C2 23.7219 8.27812 30 16 30C23.7219 30 30 23.7219 30 16C30 8.27812 23.7219 2 16 2Z",
                fill: "#FC471E"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M20.0193 8.90951C20.0066 8.98984 20 9.07226 20 9.15626C20 10.0043 20.6716 10.6918 21.5 10.6918C22.3284 10.6918 23 10.0043 23 9.15626C23 8.30819 22.3284 7.6207 21.5 7.6207C21.1309 7.6207 20.7929 7.7572 20.5315 7.98359L16.6362 7L15.2283 12.7651C13.3554 12.8913 11.671 13.4719 10.4003 14.3485C10.0395 13.9863 9.54524 13.7629 9 13.7629C7.89543 13.7629 7 14.6796 7 15.8103C7 16.5973 7.43366 17.2805 8.06967 17.6232C8.02372 17.8674 8 18.1166 8 18.3696C8 21.4792 11.5817 24 16 24C20.4183 24 24 21.4792 24 18.3696C24 18.1166 23.9763 17.8674 23.9303 17.6232C24.5663 17.2805 25 16.5973 25 15.8103C25 14.6796 24.1046 13.7629 23 13.7629C22.4548 13.7629 21.9605 13.9863 21.5997 14.3485C20.2153 13.3935 18.3399 12.7897 16.2647 12.7423L17.3638 8.24143L20.0193 8.90951ZM12.5 18.8815C13.3284 18.8815 14 18.194 14 17.3459C14 16.4978 13.3284 15.8103 12.5 15.8103C11.6716 15.8103 11 16.4978 11 17.3459C11 18.194 11.6716 18.8815 12.5 18.8815ZM19.5 18.8815C20.3284 18.8815 21 18.194 21 17.3459C21 16.4978 20.3284 15.8103 19.5 15.8103C18.6716 15.8103 18 16.4978 18 17.3459C18 18.194 18.6716 18.8815 19.5 18.8815ZM12.7773 20.503C12.5476 20.3462 12.2372 20.4097 12.084 20.6449C11.9308 20.8802 11.9929 21.198 12.2226 21.3548C13.3107 22.0973 14.6554 22.4686 16 22.4686C17.3446 22.4686 18.6893 22.0973 19.7773 21.3548C20.0071 21.198 20.0692 20.8802 19.916 20.6449C19.7628 20.4097 19.4524 20.3462 19.2226 20.503C18.3025 21.1309 17.1513 21.4449 16 21.4449C15.3173 21.4449 14.6345 21.3345 14 21.1137C13.5646 20.9621 13.1518 20.7585 12.7773 20.503Z",
                fill: "white"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RedditIcon);


/***/ }),

/***/ 6380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SearchIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchIcon);


/***/ }),

/***/ 390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SendEmptyFill = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SendEmptyFill);


/***/ }),

/***/ 3529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SendEmptyIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SendEmptyIcon);


/***/ }),

/***/ 170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const UserSlashIcon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M13.879 10.414a2.501 2.501 0 0 0-3.465 3.465l3.465-3.465Zm.707.707-3.465 3.465a2.501 2.501 0 0 0 3.465-3.465Zm-4.56-1.096a3.5 3.5 0 1 1 4.949 4.95 3.5 3.5 0 0 1-4.95-4.95ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserSlashIcon);


/***/ }),

/***/ 4338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const VerifiedIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-Crimson scale-125 -translate-x-[12.5%] -translate-y-[12.5%]",
                style: props.verified ? {
                    display: "none"
                } : {},
                d: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerifiedIcon);


/***/ }),

/***/ 4875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function VerticalDotsIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
            }),
            props.children
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerticalDotsIcon);


/***/ }),

/***/ 3860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const XIcon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                ...props,
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 16 16",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
                })
            }),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (XIcon);


/***/ }),

/***/ 7497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function NumberNotification(props) {
    return props.value > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "absolute top-0 right-0 flex aspect-square min-h-[1.2rem] min-w-[1.2rem] translate-x-1/2 items-center justify-center rounded-full bg-Crimson text-base text-white shadow-sm shadow-black",
        children: props.value
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberNotification);


/***/ }),

/***/ 9696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Tooltip(props) {
    const style = {};
    props.textColor && (style.color = props.textColor);
    props.textSize && (style.fontSize = props.textSize);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ...props,
        className: "absolute top-0 left-1/2 z-10 flex -translate-y-full -translate-x-1/2 flex-col items-center justify-center ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: style,
                className: `whitespace-nowrap rounded-md bg-black py-1 px-2 text-base text-Verde shadow-sm ${props.shadowColor ? "shadow-Crimson" : "shadow-Verde"}`,
                children: props.children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-0 w-0 border-t-[0.5rem] border-r-[0.5rem] border-l-[0.5rem] border-solid border-transparent border-t-black text-black"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);


/***/ }),

/***/ 283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ copyToClipboard)
/* harmony export */ });
function copyToClipboard(text) {
    return navigator.clipboard.writeText(text);
}


/***/ }),

/***/ 4398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ formatAge),
/* harmony export */   "p": () => (/* binding */ formatDate)
/* harmony export */ });
const formatDate = (unixTime, options = {
    withTime: true
})=>{
    const now = new Date();
    const date = new Date(unixTime);
    const year = date.getFullYear();
    const month = date.toLocaleString("ro-RO", {
        month: "long"
    });
    const dayOfMonth = date.getDate();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    // Comparăm doar data și ora (fără secunde sau milisecunde)
    const nowWithoutTime = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dateWithoutTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes());
    if (nowWithoutTime.getTime() < dateWithoutTime.getTime()) {
        return `Astăzi la ${hours}:${minutes}`;
    } else if (nowWithoutTime.getTime() - dateWithoutTime.getTime() < 24 * 60 * 60 * 1000) {
        return `Ieri la ${hours}:${minutes}`;
    } else {
        return `${dayOfMonth} ${month} ${year} ${options.withTime ? `la ${hours}:${minutes}` : ""}`;
    }
};
const formatAge = (unixTime)=>{
    const now = Date.now();
    const differenceInMs = now - unixTime;
    if (differenceInMs < 0) {
        return "0 minute";
    } else if (differenceInMs < 60 * 60 * 1000) {
        const minutes = Math.floor(differenceInMs / (60 * 1000));
        return `${minutes} minute`;
    } else if (differenceInMs < 24 * 60 * 60 * 1000) {
        const hours = Math.floor(differenceInMs / (60 * 60 * 1000));
        return `${hours} ore`;
    } else if (differenceInMs < 30 * 24 * 60 * 60 * 1000) {
        const days = Math.floor(differenceInMs / (24 * 60 * 60 * 1000));
        return `${days} zile`;
    } else if (differenceInMs < 365 * 24 * 60 * 60 * 1000) {
        const months = Math.floor(differenceInMs / (30 * 24 * 60 * 60 * 1000));
        return `${months} luni`;
    } else {
        const years = Math.floor(differenceInMs / (365 * 24 * 60 * 60 * 1000));
        return `${years} ani`;
    }
};


/***/ }),

/***/ 9613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** 
introduci un childElement si un parentElement si zice daca child este copilu lu parent
**/ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((childElement, parentElement)=>{
    let element = childElement;
    while(element){
        if (element === parentElement) {
            return true;
        }
        element = element.parentElement;
    }
    return false;
});


/***/ }),

/***/ 3415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ socialMediaAccountNameExtractor)
/* harmony export */ });
const socialMediaAccountNameExtractor = {
    instagram (link) {
        const regex = /instagram\.com\/([\w._]+)/i;
        const match = regex.exec(link);
        return match ? match[1] : null;
    },
    facebook (link) {
        // https://www.facebook.com/ion.mocanu.752861
        const regex = /facebook\.com\/([\w.-]+)/i;
        const match = regex.exec(link);
        return match ? match[1] : null;
    },
    reddit (link) {
        // https://www.reddit.com/user/ion2266
        const regex = /reddit\.com\/(?:user\/|u\/)?([\w-]+)/i;
        const match = regex.exec(link);
        return match ? match[1] : null;
    }
};


/***/ }),

/***/ 6856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PM": () => (/* binding */ soundEffect2),
/* harmony export */   "g1": () => (/* binding */ soundEffect3),
/* harmony export */   "me": () => (/* binding */ soundEffect4),
/* harmony export */   "wV": () => (/* binding */ soundEffect1)
/* harmony export */ });
const playSound = (file)=>{
    return ()=>{
        try {
            const audio = new Audio(file);
            audio.play();
        } catch (e) {}
    };
};
const soundEffect1 = playSound("/audio/mixkit-gaming-lock-2848.mp3");
const soundEffect2 = playSound("/audio/mixkit-pebbles-click-1128.wav");
const soundEffect3 = playSound("/audio/mixkit-plastic-bubble-click-1124.wav");
const soundEffect4 = playSound("/audio/mixkit-pebbles-click-1128.wav");


/***/ }),

/***/ 5143:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_features_userProfileSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5541);
/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6634);
/* harmony import */ var _src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5031);
/* harmony import */ var _src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4639);
/* harmony import */ var _svg_AddUserFillIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2057);
/* harmony import */ var _svg_DeleteUserIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8812);
/* harmony import */ var _svg_DeleteUserIconFill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5770);
/* harmony import */ var _svg_PersonCheckFillIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7101);
/* harmony import */ var _utils_Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9696);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4186);
/* harmony import */ var _src_features_chatSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6473);
/* harmony import */ var _svg_ChatBubble__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(454);
/* harmony import */ var _svg_VerticalDotsIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4875);
/* harmony import */ var _svg_IdIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(704);
/* harmony import */ var _utils_copyToClipboard__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(283);
/* harmony import */ var _utils_formatTime__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(4398);
/* harmony import */ var _utils_socialMediaAccountNameExtractor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3415);
/* harmony import */ var _svg_RedditIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9758);
/* harmony import */ var _svg_FacebookIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3294);
/* harmony import */ var _svg_DiscordIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2424);
/* harmony import */ var _svg_InstagramIcon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1326);
/* harmony import */ var _svg_BoxArrowUpRight__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(4565);
/* harmony import */ var _utils_countries_json__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(4079);
/* harmony import */ var _svg_VerifiedIcon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(4338);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(3847);
/* harmony import */ var _src_features_currentUserSlice__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(9301);
/* harmony import */ var _svg_PencilEmptyIcon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(6445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_store__WEBPACK_IMPORTED_MODULE_3__, _pages__WEBPACK_IMPORTED_MODULE_11__, _src_features_chatSlice__WEBPACK_IMPORTED_MODULE_12__, _pages_app__WEBPACK_IMPORTED_MODULE_24__]);
([_src_store__WEBPACK_IMPORTED_MODULE_3__, _pages__WEBPACK_IMPORTED_MODULE_11__, _src_features_chatSlice__WEBPACK_IMPORTED_MODULE_12__, _pages_app__WEBPACK_IMPORTED_MODULE_24__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





























const countries = _utils_countries_json__WEBPACK_IMPORTED_MODULE_22__;
const profileSections = [
    {
        name: "User Info",
        Component: UserInfoSection
    },
    {
        name: "Mutual Friends",
        Component: MutualFriendsSection
    },
    {
        name: "Mutual Groups",
        Component: MutualGroupsSection
    }
];
function UserProfile({ userData  }) {
    const dispatch = (0,_src_store__WEBPACK_IMPORTED_MODULE_3__/* .useMyDispatch */ .F)();
    const { setActiveView , isMobile  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_pages__WEBPACK_IMPORTED_MODULE_11__.AppContext);
    // states
    const containerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
    const [activeSection, setActiveSection] = react__WEBPACK_IMPORTED_MODULE_1__.useState(profileSections[0]);
    const friends = (0,_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_4__/* .useFriends */ .mz)();
    const onlineFriendsIds = (0,_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_4__/* .useOnlineFriendsIds */ .Gb)();
    const sentFriendRequests = (0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_5__/* .useSentFriendRequests */ .Hd)();
    const receivdFriendRequests = (0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_5__/* .useReceivedFriendRequests */ .Bx)();
    const friendRequestAlreadySent = !!sentFriendRequests.find((e)=>e.friendData.id === userData.id);
    const friendRequestAlreadyReceived = !!receivdFriendRequests.find((e)=>e.friendData.id === userData.id);
    const [color1, color2, color3] = [
        "#f00f0f",
        "#00f0f0",
        "#000000"
    ];
    const isFriend = friends.map((e)=>e.id).includes(userData.id);
    const isOnline = isFriend && onlineFriendsIds.includes(userData.id);
    const isCurrentUser = userData.id === (0,_src_features_currentUserSlice__WEBPACK_IMPORTED_MODULE_25__/* .useCurrentUser */ .x)().id;
    // hooks
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        const closeProfileViewWrapper = (e)=>{
            if (e.target !== containerRef.current) return;
            return closeProfileView();
        };
        const timeoutId = setTimeout(()=>document.addEventListener("click", closeProfileViewWrapper), 200);
        return ()=>{
            clearTimeout(timeoutId);
            document.removeEventListener("click", closeProfileViewWrapper);
        };
    }, []);
    // functions
    function closeProfileView() {
        dispatch(_src_features_userProfileSlice__WEBPACK_IMPORTED_MODULE_2__/* .userProfileSlice.actions.setUserData */ .B.actions.setUserData(undefined));
    }
    function openImageInNewTab() {
        window.open(userData.picture || "img/blank_profile.png", "_blank");
    }
    function openChat() {
        if (!isFriend) return;
        const chatId = friends.find((e)=>e.id === userData.id).chatId;
        dispatch(_src_features_chatSlice__WEBPACK_IMPORTED_MODULE_12__/* .chatSlice.actions.setActiveChatId */ .J7.actions.setActiveChatId(chatId));
        setActiveView("chat");
        closeProfileView();
    }
    function copyUserId() {
        (0,_utils_copyToClipboard__WEBPACK_IMPORTED_MODULE_27__/* .copyToClipboard */ .v)(userData.id);
    }
    function withProgressDecorator(func) {
        return async ()=>{
            document.body.style.cursor = "progress";
            document.body.style.position = "none";
            await func();
            document.body.style.cursor = "auto";
            document.body.style.position = "auto";
        };
    }
    const acceptRequest = withProgressDecorator(()=>dispatch((0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_5__/* .acceptFriendRequest */ .ND)(userData.id)));
    const sendRequest = withProgressDecorator(()=>dispatch((0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_5__/* .sendFriendRequest */ .QT)(userData.id)));
    const cancelRequest = withProgressDecorator(()=>dispatch((0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_5__/* .cancelFriendRequest */ .J3)(userData.id)));
    const rejectRequest = withProgressDecorator(()=>dispatch((0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_5__/* .rejectFriendRequest */ .t0)(userData.id)));
    // JSX
    const ActiveSection = activeSection.Component;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: containerRef,
        className: "absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center overflow-hidden bg-black bg-opacity-[.4]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `flex flex-col gap-4 rounded-lg bg-black px-4 py-2 ${isMobile ? "h-[45rem] w-[90%]" : "h-[40rem] w-[50rem]"}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        background: `linear-gradient(45deg, ${color1} 0%, ${color2} 100%)`
                    },
                    className: "absolute top-0 left-0 h-[5.5rem] w-full rounded-t-lg",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            background: `linear-gradient(45deg, ${color1} 0%, ${color2} 100%)`
                        },
                        className: " absolute top-full left-0 h-14 w-full brightness-[0.5]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                background: `linear-gradient(0deg, rgba(0,0,0,1) 0%, transparent 100%)`
                            },
                            className: " absolute top-0 left-0 h-full w-full"
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: copyUserId,
                            className: "flex w-fit cursor-pointer items-center gap-1 text-base text-white text-opacity-50 duration-100 ease-linear hover:tracking-wide hover:text-white active:scale-90 active:brightness-75 [&:hover_#visibleOnParentHover]:flex [&_#visibleOnParentHover]:hidden",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_IdIcon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    className: "aspect-square h-[1.2rem]"
                                }),
                                "#" + userData.id,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_Tooltip__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    id: "visibleOnParentHover",
                                    children: "Copy user id"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-grow"
                        }),
                        isCurrentUser && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_PencilEmptyIcon__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                            className: "aspect-square h-10 cursor-pointer text-white text-opacity-[0.75] hover:text-opacity-100"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `flex items-end justify-center gap-2 ${isMobile ? "flex-wrap min-h-[8rem] mt-[1rem]" : "min-h-[6.5rem]"}`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `aspect-square  ${isMobile ? "h-16" : "h-20"}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    onClick: openImageInNewTab,
                                    src: userData.picture || "img/blank_profile.png",
                                    className: "aspect-square h-full cursor-pointer rounded-full shadow-sm shadow-black hover:brightness-50 [&:hover_~_#visibleOnSiblingHover]:flex [&_~_#visibleOnSiblingHover]:hidden"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_Tooltip__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    id: "visibleOnSiblingHover",
                                    children: "Open image in new tab"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `${isOnline || isCurrentUser ? "bg-Verde" : "bg-neutral-500"} absolute bottom-0 right-0 box-content aspect-square h-5 rounded-full border-4 border-Gray2`
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex items-end gap-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `font-Whyte-Medium text-white ${isMobile ? "text-2xl" : "text-4xl"}`,
                                        children: userData.username
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-sm text-white text-opacity-50",
                                    children: isCurrentUser || isOnline ? "Online" : "Last seen " + (0,_utils_formatTime__WEBPACK_IMPORTED_MODULE_28__/* .formatDate */ .p)(userData.lastSeenAt || 1680708838964)
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-grow"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `flex cursor-pointer items-center gap-2 rounded-full [&>*]:duration-100 [&>*]:ease-linear ${isMobile ? "" : ""}`,
                            children: [
                                !isCurrentUser && isFriend && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center gap-1 rounded bg-Verde px-2 py-1 font-Whyte-Medium text-lg text-white shadow-sm shadow-black hover:bg-white hover:text-Verde active:scale-90 active:opacity-70",
                                    onClick: openChat,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_ChatBubble__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            className: "aspect-square h-[1.2rem]"
                                        }),
                                        "Message"
                                    ]
                                }),
                                !isCurrentUser && !isFriend && !friendRequestAlreadySent && !friendRequestAlreadyReceived && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center gap-1 rounded bg-Verde px-2 py-1 font-Whyte-Medium text-lg text-white shadow-sm shadow-black hover:bg-white hover:text-Verde active:scale-90 active:opacity-70",
                                    onClick: sendRequest,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_AddUserFillIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            className: "aspect-square h-[1.2rem]"
                                        }),
                                        "Send request"
                                    ]
                                }),
                                !isCurrentUser && friendRequestAlreadySent && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center gap-1 rounded bg-Crimson px-2 py-1 font-Whyte-Medium text-lg text-white shadow-sm shadow-black hover:bg-white hover:text-Crimson active:scale-90 active:opacity-70",
                                    onClick: cancelRequest,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_DeleteUserIconFill__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            className: "aspect-square h-[1.2rem]"
                                        }),
                                        "Cancel request"
                                    ]
                                }),
                                !isCurrentUser && friendRequestAlreadyReceived && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-1 rounded bg-Verde px-2 py-1 font-Whyte-Medium text-lg text-white shadow-sm shadow-black hover:bg-white hover:text-Verde active:scale-90 active:opacity-70",
                                            onClick: acceptRequest,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_PersonCheckFillIcon__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                    className: "aspect-square h-[1.2rem]"
                                                }),
                                                "Accept request"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-1 rounded bg-Crimson px-2 py-1 font-Whyte-Medium text-lg text-white shadow-sm shadow-black hover:bg-white hover:text-Crimson active:scale-90 active:opacity-70",
                                            onClick: rejectRequest,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_DeleteUserIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    className: "aspect-square h-[1.2rem]"
                                                }),
                                                "Reject request"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex items-center gap-1 rounded-full bg-white bg-opacity-10 p-1 font-Whyte-Medium text-lg text-white shadow-sm shadow-black hover:bg-Verde hover:bg-opacity-50 active:scale-90 active:opacity-70",
                                    onClick: ()=>{},
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_VerticalDotsIcon__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        className: "aspect-square h-[1.75rem]"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `flex w-full text-center font-Whyte-Medium ${isMobile ? "text-base" : "text-xl"}`,
                    children: profileSections.map((section)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: ()=>setActiveSection(section),
                            className: `border-white flex-grow text-white ${isMobile ? "" : "p-3"} ${activeSection.name === section.name ? "cursor-default border-b-[0.5vmin]" : "cursor-pointer border-b-[0.3vmin] border-opacity-30 text-opacity-30 hover:text-Verde"}`,
                            children: section.name
                        }))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "h-full w-full overflow-auto",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ActiveSection, {
                        userData: userData
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserProfile);
function UserInfoSection({ userData  }) {
    const dispatch = (0,_src_store__WEBPACK_IMPORTED_MODULE_3__/* .useMyDispatch */ .F)();
    const { setActiveView , isMobile  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_pages__WEBPACK_IMPORTED_MODULE_11__.AppContext);
    // states
    const containerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
    const [activeSection, setActiveSection] = react__WEBPACK_IMPORTED_MODULE_1__.useState("User Info");
    const friends = (0,_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_4__/* .useFriends */ .mz)();
    const onlineFriendsIds = (0,_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_4__/* .useOnlineFriendsIds */ .Gb)();
    const sentFriendRequests = (0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_5__/* .useSentFriendRequests */ .Hd)();
    const receivdFriendRequests = (0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_5__/* .useReceivedFriendRequests */ .Bx)();
    const friendRequestAlreadySent = !!sentFriendRequests.find((e)=>e.friendData.id === userData.id);
    const friendRequestAlreadyReceived = !!receivdFriendRequests.find((e)=>e.friendData.id === userData.id);
    const [color1, color2, color3] = userData.profileColors || [
        "#f00f0f",
        "#00fff0",
        "#000000"
    ];
    const isFriend = friends.map((e)=>e.id).includes(userData.id);
    const isOnline = isFriend && onlineFriendsIds.includes(userData.id);
    const { instagram , facebook , reddit , discord  } =  false || {
        instagram: {
            accountName: "",
            link: "https://www.instagram.com/ion2266"
        },
        facebook: {
            accountName: "",
            link: "https://www.facebook.com/ion.mocanu.752861"
        },
        reddit: {
            accountName: "",
            link: "https://www.reddit.com/user/ion2266"
        },
        discord: {
            accountName: "giovanni#2266",
            link: ""
        }
    };
    const country = countries.find((e)=>e.code === (userData.location || "MD"));
    // const [instagram,reddid,facebook] = [];
    // JSX
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full [&>*]:my-3",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-col",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "font-Whyte-Heavy text-base text-white",
                        children: "JOINED ON"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-base text-white text-opacity-75",
                                children: (0,_utils_formatTime__WEBPACK_IMPORTED_MODULE_28__/* .formatDate */ .p)(userData.registeredAt, {
                                    withTime: false
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-base text-white text-opacity-75",
                                children: `(${(0,_utils_formatTime__WEBPACK_IMPORTED_MODULE_28__/* .formatAge */ .K)(userData.registeredAt)} ago)`
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-col gap-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "font-Whyte-Heavy text-base text-white",
                        children: "ABOUT ME"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-base text-white text-opacity-75",
                        children: userData.aboutMe || "My name is " + userData.username
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-col gap-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "font-Whyte-Heavy text-base text-white",
                        children: "REGION"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-1 text-base text-white text-opacity-75",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "cursor-default text-xl duration-100 ease-linear hover:text-4xl",
                                children: country.emoji
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-center text-base text-white text-opacity-50",
                                children: country.name
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `gap-2 ${isMobile ? "flex flex-col w-full" : "grid grid-cols-2 justify-items-center"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-span-2 w-full font-Whyte-Heavy text-base text-white",
                        children: "SOCIAL MEDIA LINKS"
                    }),
                    userData.socialMediaLinks && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            instagram && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialMediaComponent, {
                                Icon: _svg_InstagramIcon__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z,
                                accountName: _utils_socialMediaAccountNameExtractor__WEBPACK_IMPORTED_MODULE_16__/* .socialMediaAccountNameExtractor.instagram */ .O.instagram(instagram.link),
                                link: instagram.link
                            }),
                            facebook && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialMediaComponent, {
                                Icon: _svg_FacebookIcon__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
                                accountName: _utils_socialMediaAccountNameExtractor__WEBPACK_IMPORTED_MODULE_16__/* .socialMediaAccountNameExtractor.facebook */ .O.facebook(facebook.link),
                                link: facebook.link
                            }),
                            reddit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialMediaComponent, {
                                Icon: _svg_RedditIcon__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
                                accountName: _utils_socialMediaAccountNameExtractor__WEBPACK_IMPORTED_MODULE_16__/* .socialMediaAccountNameExtractor.reddit */ .O.reddit(reddit.link),
                                link: reddit.link
                            }),
                            discord && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialMediaComponent, {
                                Icon: _svg_DiscordIcon__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
                                accountName: discord.accountName,
                                link: undefined
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-[100vh]"
            })
        ]
    });
}
function MutualFriendsSection({ userData  }) {
    const dispatch = (0,_src_store__WEBPACK_IMPORTED_MODULE_3__/* .useMyDispatch */ .F)();
    const { setActiveView  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_pages__WEBPACK_IMPORTED_MODULE_11__.AppContext);
    // states
    const containerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
    const [activeSection, setActiveSection] = react__WEBPACK_IMPORTED_MODULE_1__.useState("User Info");
    const friends = (0,_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_4__/* .useFriends */ .mz)();
    const onlineFriendsIds = (0,_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_4__/* .useOnlineFriendsIds */ .Gb)();
    const sentFriendRequests = (0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_5__/* .useSentFriendRequests */ .Hd)();
    const receivdFriendRequests = (0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_5__/* .useReceivedFriendRequests */ .Bx)();
    const friendRequestAlreadySent = !!sentFriendRequests.find((e)=>e.friendData.id === userData.id);
    const friendRequestAlreadyReceived = !!receivdFriendRequests.find((e)=>e.friendData.id === userData.id);
    const [color1, color2, color3] = userData.profileColors || [
        "#f00f0f",
        "#00fff0",
        "#000000"
    ];
    const isFriend = friends.map((e)=>e.id).includes(userData.id);
    const isOnline = isFriend && onlineFriendsIds.includes(userData.id);
    // JSX
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {});
}
function MutualGroupsSection({ userData  }) {
    const dispatch = (0,_src_store__WEBPACK_IMPORTED_MODULE_3__/* .useMyDispatch */ .F)();
    const { setActiveView  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_pages__WEBPACK_IMPORTED_MODULE_11__.AppContext);
    // states
    const containerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
    const [activeSection, setActiveSection] = react__WEBPACK_IMPORTED_MODULE_1__.useState("User Info");
    const friends = (0,_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_4__/* .useFriends */ .mz)();
    const onlineFriendsIds = (0,_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_4__/* .useOnlineFriendsIds */ .Gb)();
    const sentFriendRequests = (0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_5__/* .useSentFriendRequests */ .Hd)();
    const receivdFriendRequests = (0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_5__/* .useReceivedFriendRequests */ .Bx)();
    const friendRequestAlreadySent = !!sentFriendRequests.find((e)=>e.friendData.id === userData.id);
    const friendRequestAlreadyReceived = !!receivdFriendRequests.find((e)=>e.friendData.id === userData.id);
    const [color1, color2, color3] = userData.profileColors || [
        "#f00f0f",
        "#00fff0",
        "#000000"
    ];
    const isFriend = friends.map((e)=>e.id).includes(userData.id);
    const isOnline = isFriend && onlineFriendsIds.includes(userData.id);
    // JSX
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {});
}
function SocialMediaComponent({ Icon , accountName , link  }) {
    function openLink() {
        link && window.open(link, "_blank");
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-12 w-full items-center gap-2 rounded-md border-[0.2vmin] border-white border-opacity-50 p-1 px-3 text-base text-white text-opacity-90 duration-100 ease-linear hover:bg-white hover:bg-opacity-20 [&:hover_#visibleOnParentHover]:flex [&_#visibleOnParentHover]:hidden",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                onClick: openLink,
                className: "aspect-square h-[90%] cursor-pointer duration-100 ease-linear hover:scale-105"
            }),
            accountName,
            link && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex h-full items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_VerifiedIcon__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                        className: "aspect-square h-[60%] text-blue-500",
                        verified: false
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_Tooltip__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        shadowColor: "Crimson",
                        textColor: _pages_app__WEBPACK_IMPORTED_MODULE_24__.CrimsonColor,
                        id: "visibleOnParentHover",
                        className: "text-base",
                        children: "Not Verified"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex-grow"
            }),
            link && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_BoxArrowUpRight__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                onClick: openLink,
                className: "aspect-square h-[60%] cursor-pointer duration-100 ease-linear hover:scale-110 hover:text-Verde"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1397:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_formatTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4398);
/* harmony import */ var _src_features_userProfileSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5541);
/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6634);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4186);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_store__WEBPACK_IMPORTED_MODULE_3__, _pages__WEBPACK_IMPORTED_MODULE_4__]);
([_src_store__WEBPACK_IMPORTED_MODULE_3__, _pages__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Message = (props)=>{
    const dispatch = (0,_src_store__WEBPACK_IMPORTED_MODULE_3__/* .useMyDispatch */ .F)();
    const { isMobile  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_pages__WEBPACK_IMPORTED_MODULE_4__.AppContext);
    // asta e containerul unui singur mesaj
    const regex = /^\p{Emoji}+$/u;
    const { senderData , message  } = props;
    const isOnlyEmoji = regex.test(message.content);
    function openSenderProfile() {
        senderData && dispatch(_src_features_userProfileSlice__WEBPACK_IMPORTED_MODULE_2__/* .userProfileSlice.actions.setUserData */ .B.actions.setUserData(senderData));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex w-full flex-row gap-2 p-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                onClick: openSenderProfile,
                src: senderData.picture || "img/blank_profile.png",
                className: "aspect-square h-[2.75rem] cursor-pointer rounded-full shadow-sm shadow-black duration-100 ease-linear hover:scale-105 hover:opacity-70"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row items-center gap-2 text-xs text-stone-400",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                onClick: openSenderProfile,
                                className: "cursor-pointer font-Whyte-Medium text-[0.85rem] text-white text-opacity-60 hover:text-Verde",
                                children: senderData.username
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: (0,_utils_formatTime__WEBPACK_IMPORTED_MODULE_5__/* .formatDate */ .p)(message.sendAt)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            lineHeight: "1.2"
                        },
                        className: `text-white ${isOnlyEmoji ? "text-5xl" : "text-base"}`,
                        children: message.content
                    })
                ]
            })
        ]
    }, message.sendAt);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2374:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4186);
/* harmony import */ var _ChatMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1397);
/* harmony import */ var _src_features_chatSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6473);
/* harmony import */ var _src_features_currentUserSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9301);
/* harmony import */ var _src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5031);
/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6634);
/* harmony import */ var _utils_soundEffects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6856);
/* harmony import */ var _svg_SendEmptyIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3529);
/* harmony import */ var _svg_SendEmptyFill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(390);
/* harmony import */ var _src_features_userProfileSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5541);
/* harmony import */ var _svg_EmojiSmileEmptyIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7425);
/* harmony import */ var _svg_EmojiSmileFullIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8212);
/* harmony import */ var _emoji_mart_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9390);
/* harmony import */ var _emoji_mart_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_emoji_mart_react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _emoji_mart_data__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6638);
/* harmony import */ var _utils_hasParent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9613);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages__WEBPACK_IMPORTED_MODULE_2__, _ChatMessage__WEBPACK_IMPORTED_MODULE_3__, _src_features_chatSlice__WEBPACK_IMPORTED_MODULE_4__, _src_store__WEBPACK_IMPORTED_MODULE_7__]);
([_pages__WEBPACK_IMPORTED_MODULE_2__, _ChatMessage__WEBPACK_IMPORTED_MODULE_3__, _src_features_chatSlice__WEBPACK_IMPORTED_MODULE_4__, _src_store__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const Chat = ()=>{
    const dispatch = (0,_src_store__WEBPACK_IMPORTED_MODULE_7__/* .useMyDispatch */ .F)();
    // states
    const { isMobile  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_pages__WEBPACK_IMPORTED_MODULE_2__.AppContext);
    const activeChat = (0,_src_features_chatSlice__WEBPACK_IMPORTED_MODULE_4__/* .useActiveChat */ .KF)();
    const unredMessagesCount = (0,_src_features_chatSlice__WEBPACK_IMPORTED_MODULE_4__/* .useUnredMessagesForChat */ .Hi)(activeChat.id);
    const [unreadMarkIndex, setUnreadMarkIndex] = react__WEBPACK_IMPORTED_MODULE_1__.useState(-1);
    const [emojiPickerIsVisible, setEmojiPickerIsVisible] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const currentUser = (0,_src_features_currentUserSlice__WEBPACK_IMPORTED_MODULE_5__/* .useCurrentUser */ .x)();
    const friends = (0,_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_6__/* .useFriends */ .mz)();
    const onlineFriendsIds = (0,_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_6__/* .useOnlineFriendsIds */ .Gb)();
    const [isSending, setIsSending] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const inputRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
    const messagesContainerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
    const newMarkRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
    const emojiPickerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
    // gasim userul la care se refera activeChat-ul din lista 'friends'
    const friendId = activeChat.participants.find((p)=>p.participantId !== currentUser.id).participantId;
    const friendData = friends.find((e)=>e.id === friendId);
    const friendIsOnline = onlineFriendsIds.includes(friendData.id);
    // HOOKS
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(updateNewMark, []);
    const scrollDown = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(()=>messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight, []);
    const scrollToNewMarck = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(()=>{
        return messagesContainerRef.current.scrollTo({
            top: newMarkRef.current.offsetTop,
            behavior: "smooth"
        });
    }, []);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        scrollDown();
        setTimeout(()=>newMarkRef.current && scrollToNewMarck(), 100);
        dispatch((0,_src_features_chatSlice__WEBPACK_IMPORTED_MODULE_4__/* .updateLastReadMessageTimeStamp */ .aC)({
            chatId: activeChat.id,
            participantId: currentUser.id
        }));
    }, [
        activeChat.messages.length
    ]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (!emojiPickerIsVisible) return;
        function wrapper(e) {
            const target = e.target;
            if (!(0,_utils_hasParent__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(target, emojiPickerRef.current)) setEmojiPickerIsVisible(false);
        }
        const timeoutId = setTimeout(()=>document.addEventListener("click", wrapper), 0);
        return ()=>{
            clearTimeout(timeoutId);
            document.removeEventListener("click", wrapper);
        };
    }, [
        emojiPickerIsVisible
    ]);
    // FUNCTIONS
    async function sendMessageHandler() {
        removeNewMark();
        (0,_utils_soundEffects__WEBPACK_IMPORTED_MODULE_8__/* .soundEffect4 */ .me)();
        if (!inputRef.current.value.replace(" ", "")) return;
        setIsSending(true);
        const { meta  } = await dispatch((0,_src_features_chatSlice__WEBPACK_IMPORTED_MODULE_4__/* .sendMessage */ .bG)({
            partialMessage: {
                content: inputRef.current.value
            },
            chatId: activeChat.id
        }));
        await dispatch((0,_src_features_chatSlice__WEBPACK_IMPORTED_MODULE_4__/* .updateLastReadMessageTimeStamp */ .aC)({
            chatId: activeChat.id,
            participantId: currentUser.id
        }));
        if (meta.requestStatus === "fulfilled") inputRef.current.value = "";
        setIsSending(false);
        scrollDown();
    }
    function updateNewMark() {
        setUnreadMarkIndex(activeChat.messages.length - unredMessagesCount);
    }
    function removeNewMark() {
        setUnreadMarkIndex(-1);
    }
    function onKeyDown(event) {
        switch(event.key){
            case "Enter":
                sendMessageHandler();
                break;
            case "Backspace":
                (0,_utils_soundEffects__WEBPACK_IMPORTED_MODULE_8__/* .soundEffect2 */ .PM)();
                break;
            default:
                (0,_utils_soundEffects__WEBPACK_IMPORTED_MODULE_8__/* .soundEffect3 */ .g1)();
                break;
        }
    }
    function openFriendProfile() {
        friendData && dispatch(_src_features_userProfileSlice__WEBPACK_IMPORTED_MODULE_11__/* .userProfileSlice.actions.setUserData */ .B.actions.setUserData(friendData));
    }
    // fara CurrentUser && friends pagina de chat nu poate exista
    if (!(currentUser && friendData && friends)) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Loading..."
    });
    return(// <DesktopChatComponent
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-full w-full flex-col gap-2 ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `flex h-14 items-center gap-2 bg-Verde bg-opacity-20 p-2 shadow-sm shadow-black ${isMobile ? "" : "rounded-t-lg"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        onClick: openFriendProfile,
                        src: friendData.picture || "img/blank_profile.png",
                        className: "aspect-square h-full cursor-pointer rounded-full shadow-sm shadow-black duration-100 ease-linear hover:scale-105 hover:opacity-70"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: openFriendProfile,
                        className: "cursor-pointer font-Whyte-Medium text-xl text-white hover:text-Verde",
                        children: friendData.username
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `aspect-square h-4 rounded-full ${friendIsOnline ? "bg-Verde" : "bg-neutral-500"} shadow-sm shadow-black`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-full w-[0.2vmin] rounded-full bg-white bg-opacity-30"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: messagesContainerRef,
                className: `h-full w-full overflow-y-auto overflow-x-hidden ${isMobile ? "" : "m-2"}`,
                children: activeChat.messages.map((c, i, a)=>a[a.length - i - 1]).map((message, index)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            index === unreadMarkIndex && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                ref: newMarkRef,
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-1 w-full flex-grow rounded-l-full bg-Crimson"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "rounded-sm bg-Crimson px-1 text-white",
                                        children: "NEW"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                senderData: message.sender === currentUser.id ? currentUser : friendData,
                                message: message
                            }, message.sendAt + message.content)
                        ]
                    });
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "m-2 flex h-12 w-auto flex-row rounded bg-Gray1 shadow-sm shadow-black brightness-90",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: "z-[1] flex-grow rounded rounded-r-xl bg-Gray3 px-2 font-Whyte-Book text-lg text-white",
                        ref: inputRef,
                        placeholder: "Send a message",
                        type: "text",
                        onKeyDown: onKeyDown
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>setEmojiPickerIsVisible((e)=>!e),
                        className: "-ml-4 flex h-full cursor-pointer items-center justify-center rounded-lg bg-Gray2 p-2 pl-6 duration-100 ease-linear hover:pl-8 hover:pr-4 [&:hover_#hiddenOnParentHover1]:hidden [&:hover_#visibleOnParentHover1]:flex [&_#hiddenOnParentHover1]:flex [&_#visibleOnParentHover1]:hidden",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_EmojiSmileEmptyIcon__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                id: "hiddenOnParentHover1",
                                className: "aspect-square h-[1.4rem] text-white duration-100"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_EmojiSmileFullIcon__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                id: "visibleOnParentHover1",
                                className: "aspect-square h-[1.4rem] text-Verde duration-100"
                            })
                        ]
                    }),
                    emojiPickerIsVisible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: emojiPickerRef,
                        className: "absolute right-0 top-0 -translate-y-full pb-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_emoji_mart_react__WEBPACK_IMPORTED_MODULE_14___default()), {
                            data: _emoji_mart_data__WEBPACK_IMPORTED_MODULE_16__,
                            onEmojiSelect: (emoji)=>{
                                setEmojiPickerIsVisible(false);
                                inputRef.current.value += emoji.native;
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: sendMessageHandler,
                        className: "flex h-full items-center justify-center p-2 duration-100 ease-linear hover:px-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex h-full cursor-pointer items-center gap-1 font-Whyte-Medium text-xl text-white hover:text-Verde active:opacity-50 [&:hover_#hiddenOnParentHover1]:hidden [&:hover_#visibleOnParentHover1]:flex [&_#hiddenOnParentHover1]:flex [&_#visibleOnParentHover1]:hidden",
                            children: [
                                isSending ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex h-full items-center justify-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "loader1 h-[1.3rem]"
                                    })
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_SendEmptyIcon__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            id: "hiddenOnParentHover1",
                                            className: "aspect-square h-[1.3rem] text-white duration-100"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_SendEmptyFill__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            id: "visibleOnParentHover1",
                                            className: "aspect-square h-[1.3rem] text-Verde duration-100"
                                        })
                                    ]
                                }),
                                "Send"
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5392:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4186);
/* harmony import */ var _FriendsSearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2573);
/* harmony import */ var _FriendRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(643);
/* harmony import */ var _src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5031);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages__WEBPACK_IMPORTED_MODULE_2__, _FriendRow__WEBPACK_IMPORTED_MODULE_4__]);
([_pages__WEBPACK_IMPORTED_MODULE_2__, _FriendRow__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const AllFriends = (props)=>{
    const { isMobile  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_pages__WEBPACK_IMPORTED_MODULE_2__.AppContext);
    const friends = (0,_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_5__/* .useFriends */ .mz)();
    //
    const [onScreenFriends, setOnScreenFriends] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
    const [activeMenuId, setActiveMenuId] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    if (!friends) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Loading..."
    });
    const desktopReturn = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ...props,
        className: "flex h-full w-full flex-col gap-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FriendsSearchBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                nativeState: friends,
                setState: setOnScreenFriends,
                filter: (text, e)=>e.username.toLowerCase().includes(text.toLowerCase())
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: `Total - ${friends.length}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex-gro block w-full [&>*]:mt-2",
                children: onScreenFriends.map((friendData)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FriendRow__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        friendData: friendData,
                        menuIsOpen: activeMenuId === friendData.id,
                        closeMenu: ()=>setActiveMenuId(null),
                        openMenu: ()=>setActiveMenuId(friendData.id)
                    }, friendData.id))
            })
        ]
    });
    const mobileReturn = desktopReturn;
    return isMobile ? mobileReturn : desktopReturn;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllFriends);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 643:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4186);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3847);
/* harmony import */ var _src_features_chatSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6473);
/* harmony import */ var _src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5031);
/* harmony import */ var _svg_ChatSquareFillIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1981);
/* harmony import */ var _svg_ChatSquareIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6082);
/* harmony import */ var _svg_DeleteUserIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8812);
/* harmony import */ var _svg_PersonCircleIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2106);
/* harmony import */ var _svg_UserSlashIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(170);
/* harmony import */ var _svg_VerticalDotsIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4875);
/* harmony import */ var _utils_hasParent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9613);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages__WEBPACK_IMPORTED_MODULE_3__, _pages_app__WEBPACK_IMPORTED_MODULE_4__, _src_features_chatSlice__WEBPACK_IMPORTED_MODULE_5__]);
([_pages__WEBPACK_IMPORTED_MODULE_3__, _pages_app__WEBPACK_IMPORTED_MODULE_4__, _src_features_chatSlice__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














// acest component reprezinta un rand care reprezinta un user intr-o sectiune din friend view
// friendData: datele priendului la care se refera randul
// menuIsOpen: daca meniul cu optiuni este activ/deshis la acest rand (cand apesi pe 3 dots icon)
// closeMenu: inchide meniul cu optiuni pentru acest rand ( asta inchide toate meniurile )
// openMenu: deshide meniul cu optiuni pentru acest rand
const FriendRow = ({ friendData , menuIsOpen , closeMenu , openMenu  })=>{
    const { setActiveView , isMobile , socket  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_pages__WEBPACK_IMPORTED_MODULE_3__.AppContext);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const onlineFriendsIds = (0,_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_6__/* .useOnlineFriendsIds */ .Gb)();
    const availableChats = (0,_src_features_chatSlice__WEBPACK_IMPORTED_MODULE_5__/* .useAvailableChats */ .GB)();
    const menuRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
    const isOnline = onlineFriendsIds.find((id)=>id === friendData.id);
    // cand meniul este deshis , daca userul face click oriunde pe ecran inafara de meniul in sine sau una dintre iconitele cu 3 puncte, atunci se inchide meniul
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (!menuIsOpen) return;
        const closeMenuWrapper = (e)=>{
            const target = e.target;
            if (target.id === "openMenuDiv" || (0,_utils_hasParent__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(target, menuRef.current)) return;
            return closeMenu();
        };
        document.addEventListener("click", closeMenuWrapper);
        // after a friend is removed, close the menu when the server emits and update of the friendsData
        socket.on("Update userFriendsData", closeMenu);
        return ()=>{
            document.removeEventListener("click", closeMenuWrapper);
            socket.off("Update userFriendsData", closeMenu);
        };
    }, [
        menuIsOpen
    ]);
    const menuOptions = [
        {
            optionText: "Profile",
            Icon: _svg_PersonCircleIcon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
            onClick () {},
            className: "[&>*]:hover:text-Verde hover:bg-Verde"
        },
        {
            optionText: "Block Friend",
            Icon: _svg_UserSlashIcon__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
            onClick () {},
            className: "[&>*]:hover:text-Crimson hover:bg-red hover:bg-opacity-50"
        },
        {
            optionText: "Remove Friend",
            Icon: _svg_DeleteUserIcon__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
            async onClick () {
                dispatch((0,_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_6__/* .removeFriend */ .tJ)(friendData.id));
            },
            className: "[&>*]:hover:text-Crimson hover:bg-red"
        }
    ];
    function goToChat(id) {
        if (!availableChats.includes(id)) return;
        setActiveView("chat");
        dispatch(_src_features_chatSlice__WEBPACK_IMPORTED_MODULE_5__/* .chatSlice.actions.setActiveChatId */ .J7.actions.setActiveChatId(id));
    }
    const desktopReturn = // containerul al row, e flex cu justify-between
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-12 w-full flex-row justify-between rounded-md duration-100 ease-linear hover:bg-white hover:bg-opacity-10 [&:hover_#dots]:text-opacity-100 [&:hover_#empty]:hidden [&:hover_#full]:block [&:hover_#leftSide]:gap-2 [&:hover_#name]:text-Verde [&>*]:duration-100 [&>*]:ease-linear [&_#full]:hidden",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "leftSide",
                className: "flex h-full flex-row items-center gap-4 p-1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "aspect-square h-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: friendData.picture,
                                referrerPolicy: "no-referrer",
                                className: "aspect-square h-full rounded-full"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    backgroundColor: isOnline ? _pages_app__WEBPACK_IMPORTED_MODULE_4__.VerdeColor : "gray"
                                },
                                className: "absolute bottom-0 right-0 box-content aspect-square h-2 translate-x-1/4 translate-y-1/4 rounded-full border-4 border-Gray3"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "name",
                        className: "text-xl text-white",
                        children: friendData.username
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex h-full px-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>goToChat(friendData.chatId),
                        className: "h-full cursor-pointer rounded-full p-2 duration-100 ease-linear hover:bg-white hover:bg-opacity-5 hover:p-3 [&:hover_:nth-child(2)]:text-Verde",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_ChatSquareIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                id: "empty",
                                className: "h-full text-white text-opacity-10"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_ChatSquareFillIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                id: "full",
                                className: "h-full text-white"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        id: "openMenuDiv",
                        onClick: menuIsOpen ? closeMenu : openMenu,
                        className: "h-full cursor-pointer rounded-full p-2 duration-100 ease-linear hover:bg-white hover:bg-opacity-5 hover:p-3 [&:hover_#dots]:text-Verde",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_VerticalDotsIcon__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                id: "dots",
                                className: "pointer-events-none h-full text-white text-opacity-10"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: menuRef,
                                className: `absolute left-0 top-0 z-50 flex -translate-x-full flex-col gap-2 overflow-hidden rounded-lg bg-black bg-opacity-50 px-2 text-white duration-75 ease-in ${menuIsOpen ? "max-h-screen py-2" : "h-0"}`,
                                children: menuOptions.map(({ optionText , Icon , onClick , className  })=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        onClick: onClick,
                                        className: "flex flex-row items-center gap-3 rounded-md duration-100 ease-linear hover:gap-1 hover:bg-opacity-10 hover:pr-2" + " " + className,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                                                className: "w-6 text-white"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "whitespace-nowrap text-2xl text-white",
                                                children: [
                                                    " ",
                                                    optionText,
                                                    " "
                                                ]
                                            })
                                        ]
                                    }, optionText);
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
    const mobileReturn = desktopReturn;
    return isMobile ? mobileReturn : desktopReturn;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FriendRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6380);



function SearchComponent({ nativeState , setState , filter  }) {
    // const {  } = React.useContext(AppContext);
    function updateState(input = "") {
        setState(nativeState.filter((...arg)=>filter(input, ...arg)));
    }
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(updateState, [
        nativeState
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-10 w-full flex-row items-center gap-1 rounded-md bg-black px-2 py-1",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                onChange: (e)=>updateState(e.currentTarget.value),
                className: "h-full flex-grow bg-transparent text-xl text-Verde",
                type: "text",
                placeholder: "Search"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-full p-1 duration-100 ease-linear hover:p-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Search__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    className: "h-full text-white active:text-Verde"
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchComponent);


/***/ }),

/***/ 2330:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4186);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3847);
/* harmony import */ var _AllFriendsSubSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5392);
/* harmony import */ var _svg_Friend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4940);
/* harmony import */ var _OnlineFriendsSubSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3231);
/* harmony import */ var _PedingFriendsSubSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4103);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5031);
/* harmony import */ var _src_features_searchSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3255);
/* harmony import */ var _utils_NumberNotification__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7497);
/* harmony import */ var _src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4639);
/* harmony import */ var _svg_AddUserFillIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2057);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages__WEBPACK_IMPORTED_MODULE_2__, _pages_app__WEBPACK_IMPORTED_MODULE_3__, _AllFriendsSubSection__WEBPACK_IMPORTED_MODULE_4__, _OnlineFriendsSubSection__WEBPACK_IMPORTED_MODULE_6__, _PedingFriendsSubSection__WEBPACK_IMPORTED_MODULE_7__, _src_features_searchSlice__WEBPACK_IMPORTED_MODULE_10__]);
([_pages__WEBPACK_IMPORTED_MODULE_2__, _pages_app__WEBPACK_IMPORTED_MODULE_3__, _AllFriendsSubSection__WEBPACK_IMPORTED_MODULE_4__, _OnlineFriendsSubSection__WEBPACK_IMPORTED_MODULE_6__, _PedingFriendsSubSection__WEBPACK_IMPORTED_MODULE_7__, _src_features_searchSlice__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const friendSubSection = [
    {
        name: "Online",
        Component: _OnlineFriendsSubSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
    },
    {
        name: "All",
        Component: _AllFriendsSubSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
    },
    {
        name: "Pending",
        Component: _PedingFriendsSubSection__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
    }
];
const FriendsSection = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    const friends = (0,_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_9__/* .useFriends */ .mz)();
    const { isMobile , setActiveView , searchViewInput  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_pages__WEBPACK_IMPORTED_MODULE_2__.AppContext);
    const [activeSubSection, setActiveSubSection] = react__WEBPACK_IMPORTED_MODULE_1__.useState("Online");
    const receivedFriendRequestsCount = (0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_12__/* .useReceivedFriendRequestsCount */ .e7)();
    const isReady = friends;
    if (!isReady) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Loading..."
    });
    const ActiveFriendsSubSection = friendSubSection.find((v)=>v.name === activeSubSection).Component;
    const goToFriendsSearch = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(()=>{
        setActiveView("search");
        dispatch(_src_features_searchSlice__WEBPACK_IMPORTED_MODULE_10__/* .searchSlice.actions.setActiveCategory */ .iv.actions.setActiveCategory("Users"));
        dispatch(_src_features_searchSlice__WEBPACK_IMPORTED_MODULE_10__/* .searchSlice.actions.setInput */ .iv.actions.setInput(""));
    }, []);
    const desktopReturn = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-full w-full flex-col gap-2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex h-14 w-full flex-row items-center gap-2 rounded-lg bg-white bg-opacity-10 p-2 text-white [&>*]:mx-1 [&>*]:font-Whyte-Book [&>*]:text-2xl",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-wrow flex cursor-default items-center gap-1 border-r-2 border-white border-opacity-40",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Friend__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    className: "aspect-square h-6"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "pr-2 font-Whyte-Medium",
                                children: "Friends"
                            })
                        ]
                    }),
                    friendSubSection.map(({ name  })=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: ()=>setActiveSubSection(name),
                            className: "cursor-pointer rounded-lg px-1 duration-100 ease-linear hover:bg-white hover:bg-opacity-10",
                            style: {
                                color: activeSubSection === name ? _pages_app__WEBPACK_IMPORTED_MODULE_3__.VerdeColor : "white"
                            },
                            children: [
                                name,
                                name === "Pending" && receivedFriendRequestsCount > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_NumberNotification__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    value: receivedFriendRequestsCount
                                })
                            ]
                        }, name);
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: goToFriendsSearch,
                        className: "cursor-pointer whitespace-nowrap rounded-lg bg-Verde bg-opacity-70 px-2 duration-100 ease-linear hover:scale-95 hover:bg-opacity-100 active:scale-90",
                        children: "Add Friend"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full flex-grow rounded-lg p-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ActiveFriendsSubSection, {})
            })
        ]
    });
    const mobileReturn = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-full w-full flex-col gap-2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `flex h-14 w-full flex-row items-center bg-white bg-opacity-10 text-white ${isMobile ? "justify-around p-1" : "gap-2 p-2"}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `flex-wrow  flex cursor-default items-center gap-1 border-r-2 border-white border-opacity-40  font-Whyte-Book ${isMobile ? "pr-2" : "pr-2"}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Friend__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    className: "aspect-square h-6"
                                })
                            }),
                            !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "font-Whyte-Medium",
                                children: "Friends"
                            })
                        ]
                    }),
                    friendSubSection.map(({ name  })=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: ()=>setActiveSubSection(name),
                            className: `cursor-pointer rounded-lg font-Whyte-Book text-2xl duration-100 ease-linear hover:bg-white hover:bg-opacity-10 ${isMobile ? "bg-white bg-opacity-10 text-center px-2" : "px-1"}`,
                            style: {
                                color: activeSubSection === name ? _pages_app__WEBPACK_IMPORTED_MODULE_3__.VerdeColor : "white"
                            },
                            children: [
                                name,
                                name === "Pending" && receivedFriendRequestsCount > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_NumberNotification__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    value: receivedFriendRequestsCount
                                })
                            ]
                        }, name);
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: goToFriendsSearch,
                        className: `cursor-pointer whitespace-nowrap rounded-lg ${isMobile ? "" : "bg-Verde bg-opacity-70 px-2  font-Whyte-Book text-2xl duration-100 ease-linear hover:scale-95 hover:bg-opacity-100 active:scale-90"}`,
                        children: isMobile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_AddUserFillIcon__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            className: "aspect-square h-[2rem] rounded-lg bg-Verde p-1"
                        }) : "Add Friend"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full flex-grow rounded-lg p-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ActiveFriendsSubSection, {})
            })
        ]
    });
    return isMobile ? mobileReturn : desktopReturn;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FriendsSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3231:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4186);
/* harmony import */ var _src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5031);
/* harmony import */ var _FriendRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(643);
/* harmony import */ var _FriendsSearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages__WEBPACK_IMPORTED_MODULE_2__, _FriendRow__WEBPACK_IMPORTED_MODULE_4__]);
([_pages__WEBPACK_IMPORTED_MODULE_2__, _FriendRow__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const OnlineFriends = (props)=>{
    const { socket  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_pages__WEBPACK_IMPORTED_MODULE_2__.AppContext);
    const onlineFriends = (0,_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_3__/* .useOnlineFriends */ .kd)();
    //
    const [onScreenFriends, setOnScreenFriends] = react__WEBPACK_IMPORTED_MODULE_1__.useState(onlineFriends);
    const [activeMenuId, setActiveMenuId] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ...props,
        className: "flex h-full w-full flex-col gap-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FriendsSearchBar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                nativeState: onlineFriends,
                setState: setOnScreenFriends,
                filter: (text, e)=>e.username.toLowerCase().includes(text.toLowerCase())
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: `Online - ${onlineFriends.length}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex-gro block w-full [&>*]:mt-2",
                children: onScreenFriends.map((friendData)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FriendRow__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        friendData: friendData,
                        menuIsOpen: activeMenuId === friendData.id,
                        closeMenu: ()=>setActiveMenuId(null),
                        openMenu: ()=>setActiveMenuId(friendData.id)
                    }, friendData.id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnlineFriends);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4103:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4639);
/* harmony import */ var _src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5031);
/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6634);
/* harmony import */ var _svg_PersonCheckEmptyIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8188);
/* harmony import */ var _svg_PersonCheckFillIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7101);
/* harmony import */ var _svg_PersonUpEmptyIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8932);
/* harmony import */ var _svg_VerticalDotsIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4875);
/* harmony import */ var _FriendsSearchBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2573);
/* harmony import */ var _svg_PersonDownEmptyIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8739);
/* harmony import */ var _svg_DeleteUserIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8812);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_store__WEBPACK_IMPORTED_MODULE_4__]);
_src_store__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const PendingFriends = (props)=>{
    const receivedFriendRequests = (0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_2__/* .useReceivedFriendRequests */ .Bx)();
    const sentFriendRequests = (0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_2__/* .useSentFriendRequests */ .Hd)();
    const [activeRequests, setActiveRequests] = react__WEBPACK_IMPORTED_MODULE_1__.useState("Received");
    const requests = activeRequests === "Received" ? receivedFriendRequests : sentFriendRequests;
    const onlineFriendsIds = (0,_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_3__/* .useOnlineFriendsIds */ .Gb)();
    const [onScreenRequests, setOnScreenRequests] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    function changeRequestsType() {
        setActiveRequests((e)=>e === "Received" ? "Sent" : "Received");
    }
    const desktopReturn = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ...props,
        className: "flex h-full w-full flex-col gap-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FriendsSearchBar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                nativeState: requests,
                setState: setOnScreenRequests,
                filter: (text, e)=>e.friendData.username.toLowerCase().includes(text.toLowerCase())
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "wrapper flex justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: changeRequestsType,
                        className: " flex w-fit cursor-pointer flex-row-reverse items-center gap-1 rounded-md bg-Verde p-2 text-black",
                        children: [
                            activeRequests,
                            activeRequests === "Received" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_PersonDownEmptyIcon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                className: "h-8"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_PersonUpEmptyIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                className: "h-8"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "p-2 text-lg font-normal ",
                        children: `Total - ${requests.length}`
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex-gro block w-full [&>*]:mt-2",
                children: (onScreenRequests || requests).map((request)=>{
                    const isOnline = !!onlineFriendsIds.find((id)=>id === request.friendData.id);
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PendingUserRow, {
                        request: request,
                        isOnline: isOnline
                    }, request.friendData.id);
                })
            })
        ]
    });
    return desktopReturn;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PendingFriends);
function PendingUserRow({ request , isOnline  }) {
    const dispatch = (0,_src_store__WEBPACK_IMPORTED_MODULE_4__/* .useMyDispatch */ .F)();
    /** indica faptul daca requestul este din categoria 'sent friend requests' **/ const isSentRequestType = !!request.sendAt;
    console.log("request", request);
    const userId = request.friendData.id;
    // containerul al row, e flex cu justify-between
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-2 flex h-12 w-full flex-row justify-between rounded-md bg-white bg-opacity-5 p-1 shadow-sm shadow-black duration-100 ease-linear hover:bg-opacity-10 hover:shadow hover:shadow-Verde" + " " + "[&:hover_#dots]:text-opacity-100 [&:hover_#hiddenOnParentHover]:hidden [&:hover_#leftSide]:gap-2 [&:hover_#name]:text-Verde [&:hover_#visibleOnParentHover]:block [&>*]:duration-100 [&>*]:ease-linear [&_#visibleOnParentHover]:hidden",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "leftSide",
                className: "flex h-full flex-row items-center gap-4 p-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "aspect-square h-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: request.friendData.picture,
                            referrerPolicy: "no-referrer",
                            className: "aspect-square h-full rounded-full"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "name",
                        className: "text-xl text-white",
                        children: request.friendData.username
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex h-full px-2",
                children: [
                    !isSentRequestType && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex h-full cursor-pointer items-center gap-2 rounded-full p-1 duration-100 ease-linear hover:bg-white hover:bg-opacity-5 hover:p-2 hover:text-Crimson" + " " + "[&:hover_>*]:text-Verde",
                        onClick: ()=>dispatch((0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_2__/* .acceptFriendRequest */ .ND)(userId)),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_PersonCheckEmptyIcon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    id: "hiddenOnParentHover",
                                    className: "h-full text-white text-opacity-10"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_PersonCheckFillIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    id: "visibleOnParentHover",
                                    className: "h-full text-white hover:text-Verde"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex h-full cursor-pointer items-center gap-2 rounded-full p-1 duration-100 ease-linear hover:bg-white hover:bg-opacity-5 hover:p-2 hover:text-Crimson" + " " + "[&:hover_>*]:text-Crimson",
                        onClick: ()=>isSentRequestType ? dispatch((0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_2__/* .cancelFriendRequest */ .J3)(userId)) : dispatch((0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_2__/* .rejectFriendRequest */ .t0)(userId)),
                        children: isSentRequestType ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_DeleteUserIcon__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    id: "hiddenOnParentHover",
                                    className: "h-full text-white text-opacity-10"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_DeleteUserIcon__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    id: "visibleOnParentHover",
                                    className: "h-full text-white hover:text-Crimson"
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_DeleteUserIcon__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    id: "hiddenOnParentHover",
                                    className: "h-full text-white text-opacity-10"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_DeleteUserIcon__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    id: "visibleOnParentHover",
                                    className: "h-full text-white hover:text-Crimson"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "openMenuDiv",
                        className: "h-full cursor-pointer rounded-full p-2 duration-100 ease-linear hover:bg-white hover:bg-opacity-5 hover:p-3 [&:hover_#dots]:text-Verde",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_VerticalDotsIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            id: "dots",
                            className: "pointer-events-none h-full text-white text-opacity-10"
                        })
                    })
                ]
            })
        ]
    }, request.friendData.id);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3936:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ UserRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4186);
/* harmony import */ var _src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4639);
/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6634);
/* harmony import */ var _svg_AddUserEmptyIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3291);
/* harmony import */ var _svg_AddUserFillIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2057);
/* harmony import */ var _svg_DeleteUserIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8812);
/* harmony import */ var _svg_VerticalDotsIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4875);
/* harmony import */ var _svg_PersonCheckFillIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7101);
/* harmony import */ var _svg_PersonCheckEmptyIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8188);
/* harmony import */ var _utils_Tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9696);
/* harmony import */ var _src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5031);
/* harmony import */ var _svg_DeleteUserIconFill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5770);
/* harmony import */ var _src_features_userProfileSlice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5541);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages__WEBPACK_IMPORTED_MODULE_2__, _src_store__WEBPACK_IMPORTED_MODULE_4__]);
([_pages__WEBPACK_IMPORTED_MODULE_2__, _src_store__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















// acest component reprezinta un rand care reprezinta un user intr-o sectiune din friend view
// rowData: datele priendului la care se refera randul
// menuIsOpen: daca meniul cu optiuni este activ/deshis la acest rand (cand apesi pe 3 dots icon)
// closeMenu: inchide meniul cu optiuni pentru acest rand ( asta inchide toate meniurile )
// openMenu: deshide meniul cu optiuni pentru acest rand
const UserRow = ({ rowData  })=>{
    // states
    const dispatch = (0,_src_store__WEBPACK_IMPORTED_MODULE_4__/* .useMyDispatch */ .F)();
    const { isMobile  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_pages__WEBPACK_IMPORTED_MODULE_2__.AppContext);
    const friends = (0,_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_12__/* .useFriends */ .mz)();
    const sentFriendRequests = (0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_3__/* .useSentFriendRequests */ .Hd)();
    const receivdFriendRequests = (0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_3__/* .useReceivedFriendRequests */ .Bx)();
    // daca userul este in lista de friends, il scoatem
    if (friends.find((e)=>e.id === rowData.id)) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: " "
    });
    //
    const friendRequestAlreadySent = !!sentFriendRequests.find((e)=>e.friendData.id === rowData.id);
    const friendRequestAlreadyReceived = !!receivdFriendRequests.find((e)=>e.friendData.id === rowData.id);
    function withProgressDecorator(func) {
        return async ()=>{
            document.body.style.cursor = "progress";
            document.body.style.position = "none";
            await func();
            document.body.style.cursor = "auto";
            document.body.style.position = "auto";
        };
    }
    const acceptRequest = withProgressDecorator(()=>dispatch((0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_3__/* .acceptFriendRequest */ .ND)(rowData.id)));
    const sendRequest = withProgressDecorator(()=>dispatch((0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_3__/* .sendFriendRequest */ .QT)(rowData.id)));
    const cancelRequest = withProgressDecorator(()=>dispatch((0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_3__/* .cancelFriendRequest */ .J3)(rowData.id)));
    const rejectRequest = withProgressDecorator(()=>dispatch((0,_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_3__/* .rejectFriendRequest */ .t0)(rowData.id)));
    const openUserProfile = ()=>{
        dispatch(_src_features_userProfileSlice__WEBPACK_IMPORTED_MODULE_14__/* .userProfileSlice.actions.setUserData */ .B.actions.setUserData(rowData));
    };
    const desktopReturn = // containerul al row, e flex cu justify-between
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-2 flex h-12 w-full flex-row justify-between rounded-md bg-white bg-opacity-5 p-1 shadow-sm shadow-black duration-100 ease-linear hover:bg-opacity-10 hover:shadow hover:shadow-Verde" + " " + "[&:hover_#dots]:text-opacity-100 [&:hover_#hiddenOnParentHover]:hidden [&:hover_#leftSide]:gap-2 [&:hover_#name]:text-Verde [&:hover_#visibleOnParentHover]:flex [&>*]:duration-100 [&>*]:ease-linear [&_#visibleOnParentHover]:hidden",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "leftSide",
                className: "flex h-full flex-row items-center gap-4 p-1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: openUserProfile,
                        className: "aspect-square h-full cursor-pointer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: rowData.picture,
                                referrerPolicy: "no-referrer",
                                className: "aspect-square h-full rounded-full"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    backgroundColor: "gray"
                                },
                                className: "absolute bottom-0 right-0 box-content aspect-square h-2 translate-x-1/4 translate-y-1/4 rounded-full border-4 border-Gray3"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: openUserProfile,
                        id: "name",
                        className: `cursor-pointer whitespace-nowrap overflow-hidden overflow-ellipsis text-white ${isMobile ? "text-base" : "text-xl"}`,
                        children: rowData.username
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex h-full px-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex h-full cursor-pointer items-center gap-2 rounded-full p-1 hover:bg-white hover:bg-opacity-5 [&>*]:duration-100 [&>*]:ease-linear ",
                        children: [
                            !friendRequestAlreadySent && !friendRequestAlreadyReceived && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "h-full hover:p-1 [&:hover_#visibleOnParentHover1]:flex [&_#visibleOnParentHover1]:hidden",
                                onClick: sendRequest,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_AddUserEmptyIcon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        id: "hiddenOnParentHover",
                                        className: "h-full text-white text-opacity-10"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_AddUserFillIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        id: "visibleOnParentHover",
                                        className: "h-full text-white hover:text-Verde"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_Tooltip__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        id: "visibleOnParentHover1",
                                        children: "Send request"
                                    })
                                ]
                            }),
                            friendRequestAlreadySent && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "h-full hover:p-1 [&:hover_#visibleOnParentHover1]:flex [&_#visibleOnParentHover1]:hidden",
                                onClick: cancelRequest,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_DeleteUserIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        id: "hiddenOnParentHover",
                                        className: "h-full text-white text-opacity-10 "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_DeleteUserIconFill__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        id: "visibleOnParentHover",
                                        className: "h-full text-white hover:text-Crimson"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_Tooltip__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        id: "visibleOnParentHover1",
                                        children: "Cancel request"
                                    })
                                ]
                            }),
                            friendRequestAlreadyReceived && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "h-full hover:p-1 [&:hover_#visibleOnParentHover1]:flex [&_#visibleOnParentHover1]:hidden",
                                        onClick: acceptRequest,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_PersonCheckEmptyIcon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                id: "hiddenOnParentHover",
                                                className: "h-full text-white text-opacity-10 "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_PersonCheckFillIcon__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                id: "visibleOnParentHover",
                                                className: "h-full text-white hover:text-Verde"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_Tooltip__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                id: "visibleOnParentHover1",
                                                children: "Accept request"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "h-full hover:p-1 [&:hover_#visibleOnParentHover1]:flex [&_#visibleOnParentHover1]:hidden",
                                        onClick: rejectRequest,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_DeleteUserIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                id: "hiddenOnParentHover",
                                                className: "h-full text-white text-opacity-10 "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_DeleteUserIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                id: "visibleOnParentHover",
                                                className: "h-full text-white hover:text-Crimson"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_Tooltip__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                id: "visibleOnParentHover1",
                                                children: "Reject request"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "openMenuDiv",
                        className: "h-full cursor-pointer rounded-full p-2 duration-100 ease-linear hover:bg-white hover:bg-opacity-5 hover:p-3 [&:hover_#dots]:text-Verde",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_VerticalDotsIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            id: "dots",
                            className: "pointer-events-none h-full text-white text-opacity-10"
                        })
                    })
                ]
            })
        ]
    });
    const mobileReturn = desktopReturn;
    return isMobile ? mobileReturn : desktopReturn;
}; // export default UserRow;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6755:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4186);
/* harmony import */ var _SearchUserRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3936);
/* harmony import */ var _svg_GroupIconEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7713);
/* harmony import */ var _svg_GroupIconFill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4290);
/* harmony import */ var _svg_PersonFillIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6740);
/* harmony import */ var _svg_PersonIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1252);
/* harmony import */ var _svg_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6380);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_features_searchSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3255);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages__WEBPACK_IMPORTED_MODULE_2__, _SearchUserRow__WEBPACK_IMPORTED_MODULE_3__, _src_features_searchSlice__WEBPACK_IMPORTED_MODULE_10__]);
([_pages__WEBPACK_IMPORTED_MODULE_2__, _SearchUserRow__WEBPACK_IMPORTED_MODULE_3__, _src_features_searchSlice__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const onScreenMaxRows = 10;
function SearchViewComponent() {
    const searchCategories = [
        {
            name: "Users",
            ActiveIcon: _svg_PersonFillIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
            InactiveIcon: _svg_PersonIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
            rowsData: [],
            RowBuilderComponent: _SearchUserRow__WEBPACK_IMPORTED_MODULE_3__/* .UserRow */ .p,
            apiSearchEndpoint: "api/search/users",
            searchBarPlaceholder: "Search by username or #user_id",
            matchFound: null
        },
        {
            name: "Groups",
            ActiveIcon: _svg_GroupIconFill__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
            InactiveIcon: _svg_GroupIconEmpty__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            rowsData: [],
            RowBuilderComponent: _SearchUserRow__WEBPACK_IMPORTED_MODULE_3__/* .UserRow */ .p,
            apiSearchEndpoint: "api/search/groups",
            searchBarPlaceholder: "Search by group name or #group_id",
            matchFound: null
        }
    ];
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
    const activeSearchCategoryName = (0,_src_features_searchSlice__WEBPACK_IMPORTED_MODULE_10__/* .useActiveCategory */ .xN)();
    const { isMobile , searchViewInput , setSearchViewInput  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_pages__WEBPACK_IMPORTED_MODULE_2__.AppContext);
    const [activeSearchCategory, setActiveSearchCategory] = react__WEBPACK_IMPORTED_MODULE_1__.useState(searchCategories[0]);
    const [isSearching, setIsSearching] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    // 
    const ActiveRowBuilder = activeSearchCategory.RowBuilderComponent;
    // 
    const isEmptyWarning = !isSearching && !searchViewInput.trim() && !activeSearchCategory.rowsData.length;
    const noDataFound = !isSearching && activeSearchCategory.matchFound === 0 && !isEmptyWarning;
    const thereIsMoreToFetch = activeSearchCategory.rowsData.length < activeSearchCategory.matchFound;
    const isEndOfResults = !isEmptyWarning && !thereIsMoreToFetch && activeSearchCategory.rowsData.length > onScreenMaxRows;
    const toDisplayTheResults = !(isSearching && !thereIsMoreToFetch);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        setActiveSearchCategory(searchCategories.find((e)=>e.name === activeSearchCategoryName));
    }, [
        activeSearchCategoryName
    ]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        let timeoutId = setTimeout(updateCategoryRowsData, 200);
        return ()=>clearTimeout(timeoutId);
    }, [
        searchViewInput
    ]);
    async function updateCategoryRowsData(category = activeSearchCategory) {
        const cleanedInput = searchViewInput.trim().replace("#", "");
        if (!cleanedInput) return;
        setIsSearching(true);
        const response = await window.request(`${category.apiSearchEndpoint}?input=${cleanedInput}`);
        const jsonResponse = await response.json();
        category.rowsData = jsonResponse.data || [];
        category.matchFound = jsonResponse.totalMatch || 0;
        setActiveSearchCategory({
            ...category
        });
        setIsSearching(false);
    }
    async function appendRowsData(category = activeSearchCategory) {
        const cleanedInput = searchViewInput.trim().replace("#", "");
        if (!cleanedInput) return;
        setIsSearching(true);
        const response = await window.request(`${category.apiSearchEndpoint}?input=${cleanedInput}&skip=${category.rowsData.length || 0}`);
        const jsonResponse = await response.json();
        category.rowsData.push(...jsonResponse.data || []);
        setActiveSearchCategory({
            ...category
        });
        setIsSearching(false);
    }
    function onInputChange(event) {
        dispatch(_src_features_searchSlice__WEBPACK_IMPORTED_MODULE_10__/* .searchSlice.actions.setInput */ .iv.actions.setInput(event.currentTarget.value));
        setSearchViewInput(event.currentTarget.value);
    }
    function onKeyDown(event) {
        if (event.key === "Enter") updateCategoryRowsData();
    }
    function onScroll(event) {
        if (!isSearching && thereIsMoreToFetch && event.currentTarget.offsetHeight + event.currentTarget.scrollTop >= event.currentTarget.scrollHeight) appendRowsData();
    }
    function switchCategory(category) {
        dispatch(_src_features_searchSlice__WEBPACK_IMPORTED_MODULE_10__/* .searchSlice.actions.setActiveCategory */ .iv.actions.setActiveCategory(category.name));
        setActiveSearchCategory(category);
        updateCategoryRowsData(category);
    }
    const desktopReturn = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-full w-full flex-col rounded-md",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex w-full justify-center rounded-t-lg bg-Verde bg-opacity-75 py-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex h-12 min-w-[90%] flex-row items-center gap-1 rounded-md bg-Gray2 px-2 py-1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            onChange: onInputChange,
                            onKeyDown: onKeyDown,
                            value: searchViewInput,
                            placeholder: activeSearchCategory.searchBarPlaceholder,
                            className: "h-full flex-grow bg-transparent font-Whyte-Medium text-xl text-Verde placeholder:font-Whyte-Italic",
                            type: "text"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-full p-1 duration-100 ease-linear hover:p-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Search__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                className: "h-full text-white active:text-Verde"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex w-full gap-8 rounded-b-lg bg-Gray1 bg-opacity-50 p-4",
                children: searchCategories.map((categoty)=>{
                    const isActive = activeSearchCategory.name === categoty.name;
                    const IconToRender = isActive ? categoty.ActiveIcon : categoty.InactiveIcon;
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>switchCategory({
                                ...categoty
                            }),
                        className: "flex flex-grow cursor-pointer items-center justify-center gap-2 rounded-lg p-4" + " " + "[&>*]:duration-100 [&>*]:ease-linear [&>*]:hover:scale-110" + " " + (isActive ? "pointer-events-none bg-Verde text-black" : "bg-white bg-opacity-10 text-white hover:bg-Verde hover:bg-opacity-25 hover:text-Verde"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconToRender, {
                                className: "h-5"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font-Whyte-HeavyItalic text-xl tracking-widest",
                                children: categoty.name
                            })
                        ]
                    }, categoty.name);
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                onScroll: onScroll,
                className: "mt-4 w-full flex-grow gap-4 overflow-y-auto rounded-lg bg-white bg-opacity-5 p-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "-mt-2 text-white text-opacity-50",
                        children: (activeSearchCategory.matchFound || "0") + " - total matches"
                    }),
                    isEmptyWarning && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex w-full items-center justify-center p-2 text-center font-Whyte-Medium text-xl text-white",
                        children: "so empty"
                    }),
                    toDisplayTheResults && activeSearchCategory.rowsData.map((data, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ActiveRowBuilder, {
                            rowData: data
                        }, index)),
                    (isSearching || thereIsMoreToFetch) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex w-full items-center justify-center p-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "loader"
                        })
                    }),
                    noDataFound && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex w-full items-center justify-center p-2 text-center font-Whyte-Medium text-xl text-white",
                        children: "No Data Found"
                    }),
                    isEndOfResults && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex w-full items-center justify-center p-2 text-center font-Whyte-Medium text-xl text-white",
                        children: "No more results"
                    })
                ]
            })
        ]
    });
    const mobileReturn = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-full w-full flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex w-full justify-center bg-Verde bg-opacity-75 p-3",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex h-12 w-full flex-row items-center gap-1 rounded-md bg-Gray2 px-2 py-1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            onChange: onInputChange,
                            onKeyDown: onKeyDown,
                            value: searchViewInput,
                            placeholder: activeSearchCategory.searchBarPlaceholder,
                            className: "h-full flex-grow bg-transparent font-Whyte-Medium text-lg text-Verde placeholder:font-Whyte-Italic",
                            type: "text"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-full p-1 duration-100 ease-linear hover:p-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_Search__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                className: "h-full text-white active:text-Verde"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex w-full gap-8 bg-Gray1 bg-opacity-50 p-3",
                children: searchCategories.map((categoty)=>{
                    const isActive = activeSearchCategory.name === categoty.name;
                    const IconToRender = isActive ? categoty.ActiveIcon : categoty.InactiveIcon;
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>switchCategory({
                                ...categoty
                            }),
                        className: "flex flex-grow cursor-pointer items-center justify-center gap-3 rounded-lg p-3" + " " + "[&>*]:duration-100 [&>*]:ease-linear [&>*]:hover:scale-110" + " " + (isActive ? "pointer-events-none bg-Verde text-black" : "bg-white bg-opacity-10 text-white hover:bg-Verde hover:bg-opacity-25 hover:text-Verde"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconToRender, {
                                className: "h-5"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font-Whyte-HeavyItalic text-xl tracking-widest",
                                children: categoty.name
                            })
                        ]
                    }, categoty.name);
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                onScroll: onScroll,
                className: "w-full flex-grow gap-4 overflow-y-auto bg-white bg-opacity-5 p-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "-mt-2 text-white text-opacity-50",
                        children: (activeSearchCategory.matchFound || "0") + " - total matches"
                    }),
                    isEmptyWarning && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex w-full items-center justify-center p-2 text-center font-Whyte-Medium text-xl text-white",
                        children: "so empty"
                    }),
                    toDisplayTheResults && activeSearchCategory.rowsData.map((data, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ActiveRowBuilder, {
                            rowData: data
                        }, index)),
                    (isSearching || thereIsMoreToFetch) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex w-full items-center justify-center p-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "loader"
                        })
                    }),
                    noDataFound && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex w-full items-center justify-center p-2 text-center font-Whyte-Medium text-xl text-white",
                        children: "No Data Found"
                    }),
                    isEndOfResults && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex w-full items-center justify-center p-2 text-center font-Whyte-Medium text-xl text-white",
                        children: "No more results"
                    })
                ]
            })
        ]
    });
    return isMobile ? mobileReturn : desktopReturn;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchViewComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrimsonColor": () => (/* binding */ CrimsonColor),
/* harmony export */   "VerdeColor": () => (/* binding */ VerdeColor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1945);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_LoadingScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4035);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6634);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_store__WEBPACK_IMPORTED_MODULE_7__]);
_src_store__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








let started_loading_at = performance.now();
function MyApp({ Component , pageProps  }) {
    const [is_loading, set_is_loading] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const originalPush = (next_router__WEBPACK_IMPORTED_MODULE_3___default().router.push); // Save a reference to the original push function
        // Overwrite the original push function with the wrapped version
        (next_router__WEBPACK_IMPORTED_MODULE_3___default().router.push) = async function(...arg) {
            // before the routes changes:
            set_is_loading(true);
            started_loading_at = performance.now();
            await new Promise((resolve)=>setTimeout(resolve, _components_LoadingScreen__WEBPACK_IMPORTED_MODULE_5__/* .transition_duration */ .f));
            // Call the original push function saved in the variable
            return originalPush.call((next_router__WEBPACK_IMPORTED_MODULE_3___default().router), ...arg);
        };
        next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on("routeChangeComplete", ()=>{
            let remaining_time = _components_LoadingScreen__WEBPACK_IMPORTED_MODULE_5__/* .minimum_time_loading */ .NB - (performance.now() - started_loading_at);
            setTimeout(()=>set_is_loading(false), remaining_time > 0 ? remaining_time : 0);
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {
        store: _src_store__WEBPACK_IMPORTED_MODULE_7__/* .store */ .h,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "UTF-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=edge"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Givazy"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LoadingScreen__WEBPACK_IMPORTED_MODULE_5__/* .Loading */ .gb, {
                is_loading: is_loading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
const VerdeColor = "rgb(22, 224, 107)";
const CrimsonColor = "#c22d2d";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppContext": () => (/* binding */ AppContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "socket": () => (/* binding */ socket),
/* harmony export */   "views": () => (/* binding */ views)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4612);
/* harmony import */ var _components_views_chatView_ChatViewIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2374);
/* harmony import */ var _components_FirstSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5268);
/* harmony import */ var _components_views_friendsView_FriendsViewIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2330);
/* harmony import */ var _components_views_searchView_SearchViewIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6755);
/* harmony import */ var _components_SecondSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4337);
/* harmony import */ var _src_features_currentUserSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9301);
/* harmony import */ var _src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5031);
/* harmony import */ var _src_features_chatSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6473);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4639);
/* harmony import */ var _components_utils_soundEffects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6856);
/* harmony import */ var _components_svg_ChatBubble__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(454);
/* harmony import */ var _components_svg_Friend__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4940);
/* harmony import */ var _components_svg_Search__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6380);
/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6634);
/* harmony import */ var _src_features_userProfileSlice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5541);
/* harmony import */ var _components_views_UserProfile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5143);
/* harmony import */ var _src_features_mobileSlice__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6543);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_2__, _components_views_chatView_ChatViewIndex__WEBPACK_IMPORTED_MODULE_3__, _components_FirstSection__WEBPACK_IMPORTED_MODULE_4__, _components_views_friendsView_FriendsViewIndex__WEBPACK_IMPORTED_MODULE_5__, _components_views_searchView_SearchViewIndex__WEBPACK_IMPORTED_MODULE_6__, _components_SecondSection__WEBPACK_IMPORTED_MODULE_7__, _src_features_chatSlice__WEBPACK_IMPORTED_MODULE_10__, _src_store__WEBPACK_IMPORTED_MODULE_17__, _components_views_UserProfile__WEBPACK_IMPORTED_MODULE_19__]);
([socket_io_client__WEBPACK_IMPORTED_MODULE_2__, _components_views_chatView_ChatViewIndex__WEBPACK_IMPORTED_MODULE_3__, _components_FirstSection__WEBPACK_IMPORTED_MODULE_4__, _components_views_friendsView_FriendsViewIndex__WEBPACK_IMPORTED_MODULE_5__, _components_views_searchView_SearchViewIndex__WEBPACK_IMPORTED_MODULE_6__, _components_SecondSection__WEBPACK_IMPORTED_MODULE_7__, _src_features_chatSlice__WEBPACK_IMPORTED_MODULE_10__, _src_store__WEBPACK_IMPORTED_MODULE_17__, _components_views_UserProfile__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















var socket;
const InitialAppContext = {
    socket
};
const AppContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext(InitialAppContext);
const views = [
    {
        name: "chat",
        Component: _components_views_chatView_ChatViewIndex__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        NavBarIcon: _components_svg_ChatBubble__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
        condition: ()=>_src_store__WEBPACK_IMPORTED_MODULE_17__/* .store.getState */ .h.getState().chatSlice.chats.length || _src_store__WEBPACK_IMPORTED_MODULE_17__/* .store.getState */ .h.getState().chatSlice.activeChatId,
        FallbackComponent: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: "No Chat Selected"
            })
    },
    {
        name: "search",
        Component: _components_views_searchView_SearchViewIndex__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
        NavBarIcon: _components_svg_Search__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
        condition: ()=>true,
        FallbackComponent: _components_views_searchView_SearchViewIndex__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
    },
    {
        name: "friends",
        Component: _components_views_friendsView_FriendsViewIndex__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
        NavBarIcon: _components_svg_Friend__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
        condition: ()=>true,
        FallbackComponent: _components_views_friendsView_FriendsViewIndex__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
    },
    {
        name: "editProfile",
        Component: _components_views_friendsView_FriendsViewIndex__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
        NavBarIcon: _components_svg_Friend__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
        condition: ()=>true,
        FallbackComponent: _components_views_friendsView_FriendsViewIndex__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
    }
];
function HomePage() {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useDispatch)();
    // states
    const currentUserId = (0,_src_features_currentUserSlice__WEBPACK_IMPORTED_MODULE_8__/* .useCurrentUser */ .x)().id;
    const activeChat = (0,_src_features_chatSlice__WEBPACK_IMPORTED_MODULE_10__/* .useActiveChat */ .KF)();
    const activeChatFriend = (0,_src_features_chatSlice__WEBPACK_IMPORTED_MODULE_10__/* .useActiveChatFriend */ .AD)();
    const [activeView, setActiveView] = react__WEBPACK_IMPORTED_MODULE_1__.useState("friends");
    const [isMobile, setIsMobile] = react__WEBPACK_IMPORTED_MODULE_1__.useState(true);
    const [searchViewInput, setSearchViewInput] = react__WEBPACK_IMPORTED_MODULE_1__.useState("");
    const profileUserData = (0,_src_features_userProfileSlice__WEBPACK_IMPORTED_MODULE_18__/* .useProfileUser */ .m)();
    const secondSectionIsOpen = (0,_src_features_mobileSlice__WEBPACK_IMPORTED_MODULE_20__/* .useSecondSectionIsOpen */ .u)();
    // facem conexiunea la serverul web socket
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__["default"])({
            autoConnect: false,
            extraHeaders: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        setInterval(()=>socket.emit("my online friends"), 5000);
        socket.on("set online friends", (data)=>{
            dispatch(_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_9__/* .friendsSlice.actions.setOnlineFriends */ .Er.actions.setOnlineFriends(data));
        });
        socket.on("push message", (message, chatId)=>{
            if (message.sender !== currentUserId) {
                (0,_components_utils_soundEffects__WEBPACK_IMPORTED_MODULE_13__/* .soundEffect1 */ .wV)();
                dispatch(_src_features_chatSlice__WEBPACK_IMPORTED_MODULE_10__/* .chatSlice.actions.pushMessage */ .J7.actions.pushMessage({
                    message,
                    chatId
                }));
            }
        });
        {
            // cand cineva te sterge din lista de prieteni
            socket.on("friend removed", ({ data  })=>{
                const state = _src_store__WEBPACK_IMPORTED_MODULE_17__/* .store.getState */ .h.getState();
                const activeChatId = state.chatSlice.activeChatId;
                const activeChatFriendId = activeChatId && state.chatSlice.chats.find((e)=>e.id === activeChatId).participants.find((e)=>e.participantId !== currentUserId).participantId;
                console.log("activeChatFriendId", activeChatId, activeChatFriendId);
                if (activeChatFriendId === data.id) {
                    dispatch(_src_features_chatSlice__WEBPACK_IMPORTED_MODULE_10__/* .chatSlice.actions.setActiveChatId */ .J7.actions.setActiveChatId(undefined));
                    setActiveView("friends");
                }
                // userData este fostul friend care te-a sters
                dispatch(_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_9__/* .friendsSlice.actions.removeFriend */ .Er.actions.removeFriend(data.id));
            });
            // cand primesti un friend request
            socket.on("friend request received", (receivedRequest)=>{
                (0,_components_utils_soundEffects__WEBPACK_IMPORTED_MODULE_13__/* .soundEffect1 */ .wV)();
                dispatch(_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_12__/* .friendRequestsSlice.actions.addReceivedRequest */ .Iw.actions.addReceivedRequest(receivedRequest));
            });
            // cand un friend request primit se anuleaza
            socket.on("friend request canceled", (canceledRequest)=>{
                dispatch(_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_12__/* .friendRequestsSlice.actions.removeReceivedRequest */ .Iw.actions.removeReceivedRequest(canceledRequest.data));
            });
            // cand cineva iti accepta friend requestul
            socket.on("friend request accepted", ({ data  })=>{
                // friendData este ala care a dat accept
                (0,_components_utils_soundEffects__WEBPACK_IMPORTED_MODULE_13__/* .soundEffect1 */ .wV)();
                dispatch(_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_12__/* .friendRequestsSlice.actions.removeSentRequest */ .Iw.actions.removeSentRequest(data.friendData.id));
                dispatch(_src_features_chatSlice__WEBPACK_IMPORTED_MODULE_10__/* .chatSlice.actions.addChat */ .J7.actions.addChat(data.chatData));
                dispatch(_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_9__/* .friendsSlice.actions.addFriend */ .Er.actions.addFriend(data.friendData));
            });
            // cand cineva iti refuza friend requestul
            socket.on("friend request rejected", ({ data  })=>{
                // userData este ala care a dat reject
                dispatch(_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_12__/* .friendRequestsSlice.actions.removeSentRequest */ .Iw.actions.removeSentRequest(data));
            });
        }
        socket.connect();
    }, []);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        setIsMobile(window.matchMedia("(max-aspect-ratio: 1/1)").matches);
        window.matchMedia("(max-aspect-ratio: 1/1)").onchange = (e)=>setIsMobile(e.matches);
        (async ()=>{
            const json_body = await (await window.request("/api/user")).json();
            if (json_body.error) alert(json_body.error);
            if (json_body.data) dispatch(_src_features_currentUserSlice__WEBPACK_IMPORTED_MODULE_8__/* .currentUserSlice.actions.setCurrentUserData */ .Z.actions.setCurrentUserData(json_body.data));
        })();
        (async ()=>{
            const json_body = await (await window.request("/api/user/friends")).json();
            if (json_body.error) alert(json_body.error);
            if (json_body.data) dispatch(_src_features_friendsSlice__WEBPACK_IMPORTED_MODULE_9__/* .friendsSlice.actions.setFriends */ .Er.actions.setFriends(json_body.data));
        })();
        (async ()=>{
            const json_body = await (await window.request("/api/user/chats")).json();
            if (json_body.error) alert(json_body.error);
            if (json_body.data) dispatch(_src_features_chatSlice__WEBPACK_IMPORTED_MODULE_10__/* .chatSlice.actions.setChats */ .J7.actions.setChats(json_body.data));
        })();
        (async ()=>{
            const json_body = await (await window.request("/api/user/friends/requests/sent")).json();
            if (json_body.error) alert(json_body.error);
            if (json_body.data) dispatch(_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_12__/* .friendRequestsSlice.actions.setSentRequests */ .Iw.actions.setSentRequests(json_body.data));
        })();
        (async ()=>{
            const json_body = await (await window.request("/api/user/friends/requests/received")).json();
            if (json_body.error) alert(json_body.error);
            if (json_body.data) dispatch(_src_features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_12__/* .friendRequestsSlice.actions.setReceivedRequests */ .Iw.actions.setReceivedRequests(json_body.data));
        })();
    }, []);
    async function fetchUsersData(usersIds) {
        const jsonRespone = await window.requestJson("/api/user/getUsersData", {
            method: "POST",
            body: JSON.stringify({
                usersIds
            })
        });
        return (await jsonRespone.json()).data;
    }
    const AppContextValue = {
        ...InitialAppContext,
        socket,
        isMobile,
        activeView,
        setActiveView,
        searchViewInput,
        setSearchViewInput
    };
    const activeViewObj = views.find((v)=>v.name === activeView);
    const ActiveViewComponent = activeViewObj.condition() ? activeViewObj.Component : activeViewObj.FallbackComponent;
    const desktopReturn = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-full w-full flex-row gap-2 bg-Gray3 p-2",
        children: [
            profileUserData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_views_UserProfile__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                userData: profileUserData
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-14 rounded-lg bg-Gray3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FirstSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-60 rounded-lg bg-Gray2 p-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SecondSection__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex-grow rounded-lg bg-Gray1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ActiveViewComponent, {})
            })
        ]
    });
    const mobileReturn = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-full w-full flex-col",
        children: [
            profileUserData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_views_UserProfile__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                userData: profileUserData
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `h-full overflow-auto bg-Gray2 ${secondSectionIsOpen ? "brightness-50" : ""}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ActiveViewComponent, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `h-14 w-full bg-Gray3 ${secondSectionIsOpen ? "brightness-50" : ""}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FirstSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    transform: `translateX(${secondSectionIsOpen ? "0%" : "-100%"})`
                },
                className: "absolute bottom-0 left-0 flex h-full w-[80%] bg-Gray1 p-2 duration-100 ease-linear",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SecondSection__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
            })
        ]
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
        value: AppContextValue,
        children: isMobile ? mobileReturn : desktopReturn
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6473:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AD": () => (/* binding */ useActiveChatFriend),
/* harmony export */   "GB": () => (/* binding */ useAvailableChats),
/* harmony export */   "Hi": () => (/* binding */ useUnredMessagesForChat),
/* harmony export */   "J7": () => (/* binding */ chatSlice),
/* harmony export */   "KF": () => (/* binding */ useActiveChat),
/* harmony export */   "LU": () => (/* binding */ useUnreadMessages),
/* harmony export */   "Zd": () => (/* binding */ useTotalUnredMessagesForCurrentUser),
/* harmony export */   "aC": () => (/* binding */ updateLastReadMessageTimeStamp),
/* harmony export */   "bG": () => (/* binding */ sendMessage)
/* harmony export */ });
/* unused harmony export useActiveChatId */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4186);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6634);
/* harmony import */ var _friendRequestsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4639);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages__WEBPACK_IMPORTED_MODULE_2__, _store__WEBPACK_IMPORTED_MODULE_3__]);
([_pages__WEBPACK_IMPORTED_MODULE_2__, _store__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const initialState = {
    activeChatId: undefined,
    chats: []
};
const updateLastReadMessageTimeStamp = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("chat/updateLastReadMessageTimeStamp", async ({ chatId , participantId  }, { getState  })=>{
    _pages__WEBPACK_IMPORTED_MODULE_2__.socket.emit("update last read message timestamp", chatId, participantId);
    return {
        chatId,
        participantId
    };
});
const sendMessage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("chat/sendMessage", async ({ partialMessage , chatId  }, { getState  })=>{
    if (!partialMessage || !chatId) return;
    return await window.requestJson(`/api/chat/${chatId}/messages`, {
        method: "POST",
        body: JSON.stringify({
            partialMessage,
            chatId
        })
    }).then((r)=>r.json()).then((r)=>({
            message: r.data,
            chatId
        }));
});
const chatSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "chat",
    initialState,
    reducers: {
        setActiveChatId: (state, action)=>{
            state.activeChatId = action.payload;
        },
        setChats: (state, action)=>{
            state.chats = action.payload;
        },
        addChat: (state, action)=>{
            !state.chats.find((e)=>e.id === action.payload.id) && state.chats.push(action.payload);
        },
        removeChat: (state, action)=>{
            state.chats = state.chats.filter((c)=>c !== action.payload);
        },
        pushMessage: (state, action)=>{
            const { message , chatId  } = action.payload;
            const chat = state.chats.find((e)=>e.id === chatId);
            chat.messages.unshift(message);
        },
        forceReRender: (state, action)=>{
            state = state;
        }
    },
    extraReducers (builder) {
        builder.addCase(_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_4__/* .acceptFriendRequest.fulfilled */ .ND.fulfilled, (state, action)=>{
            state.chats.push(action.payload.chatData);
        }).addCase(sendMessage.fulfilled, (state, { payload  })=>{
            state.chats.find((e)=>e.id === payload.chatId).messages.unshift(payload.message);
        }).addCase(updateLastReadMessageTimeStamp.fulfilled, (state, { payload  })=>{
            const { chatId , participantId  } = payload;
            const chat = state.chats.find((c)=>c.id === chatId);
            const lastTimestamp = chat.messages[0] ? chat.messages[0].sendAt : Date.now();
            chat.participants.find((p)=>p.participantId === participantId).lastReadTimestamp = lastTimestamp;
        });
    }
});
const activeChatSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)((state)=>state.chatSlice, (chatSlice)=>{
    const chat = chatSlice.chats.find((c)=>c.id === chatSlice.activeChatId) || chatSlice.chats[0];
    // console.log(chat.messages);
    // chat.messages.map((c, i, a) => a[a.length - i - 1]);
    // console.log(chat.messages);
    return chat;
});
const activeChatFriendSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)(activeChatSelector, (activeChat)=>{
    if (!activeChat) return;
    const currentUserId = _store__WEBPACK_IMPORTED_MODULE_3__/* .store.getState */ .h.getState().currentUser.data.id;
    const friends = _store__WEBPACK_IMPORTED_MODULE_3__/* .store.getState */ .h.getState().friendsSlice.friends;
    const friendId = activeChat.participants.find((e)=>e.participantId !== currentUserId).participantId;
    return friends.find((e)=>e.id === friendId);
});
const useActiveChat = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(activeChatSelector);
const useActiveChatFriend = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(activeChatFriendSelector);
const useActiveChatId = ()=>{
    return useSelector(({ chatSlice  })=>chatSlice.activeChatId);
};
const useAvailableChats = ()=>{
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({ chatSlice  })=>chatSlice.chats.map((e)=>e.id || e._id));
};
const unreadMessagesSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)([
    (state)=>state.chatSlice.chats,
    (state)=>state.currentUser.data.id
], (chats, currentUserId)=>{
    const result = [];
    if (!currentUserId) return result;
    chats.forEach((chat)=>{
        const element = {
            chatId: chat.id,
            unredMessages: []
        };
        chat.participants.forEach(({ participantId , lastReadTimestamp  })=>{
            let counter = 0;
            while(chat.messages.length > counter && chat.messages[counter].sendAt > lastReadTimestamp){
                counter++;
            }
            element.unredMessages.push({
                participantId,
                count: counter
            });
        });
        result.push(element);
    });
    return result;
});
const useUnreadMessages = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(unreadMessagesSelector);
const totalUnredMessagesForCurrentUserSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)(unreadMessagesSelector, (ureadMessages)=>{
    const currentUserId = _store__WEBPACK_IMPORTED_MODULE_3__/* .store.getState */ .h.getState().currentUser.data.id;
    let counter = 0;
    ureadMessages.map((e)=>{
        e.unredMessages.map(({ participantId , count  })=>{
            if (participantId === currentUserId) counter += count;
        });
    });
    return counter;
});
const useTotalUnredMessagesForCurrentUser = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(totalUnredMessagesForCurrentUserSelector);
const unredMessagesForChatSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)(unreadMessagesSelector, (state, chatId)=>chatId, (ureadMessages, chatId)=>{
    const currentUserId = _store__WEBPACK_IMPORTED_MODULE_3__/* .store.getState */ .h.getState().currentUser.data.id;
    return ureadMessages.find((e)=>e.chatId === chatId)?.unredMessages.find((f)=>f.participantId === currentUserId)?.count;
});
const useUnredMessagesForChat = (chatId)=>(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(()=>unredMessagesForChatSelector(_store__WEBPACK_IMPORTED_MODULE_3__/* .store.getState */ .h.getState(), chatId));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ currentUserSlice),
/* harmony export */   "x": () => (/* binding */ useCurrentUser)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    data: {
        id: undefined
    }
};
const currentUserSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "currentUser",
    initialState,
    reducers: {
        setCurrentUserData: (state, action)=>{
            state.data = action.payload;
        }
    }
});
const useCurrentUser = ()=>{
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({ currentUser  })=>currentUser.data);
};


/***/ }),

/***/ 4639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bx": () => (/* binding */ useReceivedFriendRequests),
/* harmony export */   "Hd": () => (/* binding */ useSentFriendRequests),
/* harmony export */   "Iw": () => (/* binding */ friendRequestsSlice),
/* harmony export */   "J3": () => (/* binding */ cancelFriendRequest),
/* harmony export */   "ND": () => (/* binding */ acceptFriendRequest),
/* harmony export */   "QT": () => (/* binding */ sendFriendRequest),
/* harmony export */   "e7": () => (/* binding */ useReceivedFriendRequestsCount),
/* harmony export */   "t0": () => (/* binding */ rejectFriendRequest)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    sent: [],
    received: []
};
const sendFriendRequest = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("friends/sendFriendRequest", async (userId, { dispatch  })=>{
    const response = await window.request("/api/user/friends/requests/sent?userId=" + userId, {
        method: "PUT"
    });
    if (!response.ok) throw new Error("nu sa trimis requestul");
    return (await response.json()).data;
});
const cancelFriendRequest = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("friends/cancelFriendRequest", async (userId, { dispatch  })=>{
    const response = await window.request("/api/user/friends/requests/sent?userId=" + userId, {
        method: "DELETE"
    });
    if (!response.ok) throw new Error("nu sa trimis requestul");
    return (await response.json()).data;
});
const acceptFriendRequest = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("friends/acceptFriendRequest", async (userId, { dispatch  })=>{
    const response = await window.request("/api/user/friends/requests/received?userId=" + userId, {
        method: "PUT"
    });
    return (await response.json()).data;
});
const rejectFriendRequest = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("friends/rejectFriendRequest", async (userId, { dispatch  })=>{
    const response = await window.request("/api/user/friends/requests/received?userId=" + userId, {
        method: "DELETE"
    });
    return (await response.json()).data;
});
const friendRequestsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "friendRequests",
    initialState,
    reducers: {
        setReceivedRequests: (state, action)=>{
            state.received = action.payload;
        },
        setSentRequests: (state, action)=>{
            state.sent = action.payload;
        },
        addReceivedRequest: (state, action)=>{
            !state.received.map((e)=>e.friendData.id).includes(action.payload.friendData.id) && state.received.unshift(action.payload);
        },
        removeReceivedRequest: (state, { payload  })=>{
            state.received = state.received.filter((f)=>f.friendData.id !== (typeof payload === "string" ? payload : payload.friendData.id));
        },
        addSentRequest: (state, action)=>{
            state.sent.push(action.payload);
        },
        removeSentRequest: (state, { payload  })=>{
            state.sent = state.sent.filter((f)=>f.friendData.id !== (typeof payload === "string" ? payload : payload.friendData.id));
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(sendFriendRequest.fulfilled, (state, { payload  })=>{
            state.sent.push(payload);
        }).addCase(cancelFriendRequest.fulfilled, (state, { payload  })=>{
            state.sent = state.sent.filter((e)=>e.friendData.id !== payload.friendData.id);
        })// remove  the sent friend request when a friend has accepted the request
        .addCase(acceptFriendRequest.fulfilled, (state, { payload  })=>{
            state.received = state.received.filter((e)=>e.friendData.id !== payload.friendData.id);
        }).addCase(rejectFriendRequest.fulfilled, (state, { payload  })=>{
            state.received = state.received.filter((e)=>e.friendData.id !== payload.friendData.id);
        });
    }
});
const useReceivedFriendRequests = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.friendRequests.received);
const useSentFriendRequests = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.friendRequests.sent);
const useReceivedFriendRequestsCount = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.friendRequests.received.length);


/***/ }),

/***/ 5031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Er": () => (/* binding */ friendsSlice),
/* harmony export */   "Gb": () => (/* binding */ useOnlineFriendsIds),
/* harmony export */   "kd": () => (/* binding */ useOnlineFriends),
/* harmony export */   "mz": () => (/* binding */ useFriends),
/* harmony export */   "tJ": () => (/* binding */ removeFriend)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _friendRequestsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4639);



const initialState = {
    friends: [],
    onlineFriends: []
};
const removeFriend = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("friends/removeFriend", async (friendId, { dispatch  })=>{
    const response = await window.request("/api/user/friends?friendId=" + friendId, {
        method: "DELETE"
    });
    if (!response.ok) throw new Error("nu sa sters friendul");
    return friendId;
});
const friendsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "friends",
    initialState,
    reducers: {
        setFriends: (state, action)=>{
            state.friends = action.payload;
        },
        addFriend: (state, action)=>{
            !state.friends.find((e)=>e.id === action.payload.id) && state.friends.unshift(action.payload);
        },
        removeFriend: (state, action)=>{
            state.friends = state.friends.filter((f)=>f.id !== action.payload);
        },
        setOnlineFriends: (state, action)=>{
            state.onlineFriends = action.payload;
            state.friends.forEach((e)=>e.isOnline = action.payload.includes(e.id));
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(removeFriend.fulfilled, (state, { payload  })=>{
            state.friends = state.friends.filter((f)=>f.id !== payload);
        }).addCase(_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_2__/* .acceptFriendRequest.fulfilled */ .ND.fulfilled, (state, { payload  })=>{
            state.friends.unshift(payload.friendData);
        });
    }
});
const useFriends = ()=>{
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({ friendsSlice  })=>friendsSlice.friends);
};
const useOnlineFriendsIds = ()=>{
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.friendsSlice.onlineFriends);
};
const onlineFriendsSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)([
    (state)=>state.friendsSlice.friends,
    (state)=>state.friendsSlice.onlineFriends
], (friends, onlineFriends)=>friends.filter((f)=>onlineFriends.includes(f.id)));
const useOnlineFriends = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(onlineFriendsSelector);


/***/ }),

/***/ 6543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ mobileSlice),
/* harmony export */   "u": () => (/* binding */ useSecondSectionIsOpen)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    secondSectionIsOpen: false
};
const mobileSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "mobileSlice",
    initialState,
    reducers: {
        setSecondSectionIsOpen: (state, action)=>{
            state.secondSectionIsOpen = action.payload;
        }
    }
});
const useSecondSectionIsOpen = ()=>{
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({ mobileSlice  })=>mobileSlice.secondSectionIsOpen);
};


/***/ }),

/***/ 3255:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iv": () => (/* binding */ searchSlice),
/* harmony export */   "xN": () => (/* binding */ useActiveCategory)
/* harmony export */ });
/* unused harmony export useSearchInput */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_svg_GroupIconEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7713);
/* harmony import */ var _components_svg_GroupIconFill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4290);
/* harmony import */ var _components_svg_PersonFillIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6740);
/* harmony import */ var _components_svg_PersonIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1252);
/* harmony import */ var _components_views_searchView_SearchUserRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3936);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_views_searchView_SearchUserRow__WEBPACK_IMPORTED_MODULE_6__]);
_components_views_searchView_SearchUserRow__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const searchCategories = [
    {
        name: "Users",
        ActiveIcon: _components_svg_PersonFillIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
        InactiveIcon: _components_svg_PersonIcon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
        rowsData: [],
        RowBuilderComponent: _components_views_searchView_SearchUserRow__WEBPACK_IMPORTED_MODULE_6__/* .UserRow */ .p,
        apiSearchEndpoint: "api/search/users",
        searchBarPlaceholder: "Search by username or #user_id",
        matchFound: null
    },
    {
        name: "Groups",
        ActiveIcon: _components_svg_GroupIconFill__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        InactiveIcon: _components_svg_GroupIconEmpty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        rowsData: [],
        RowBuilderComponent: _components_views_searchView_SearchUserRow__WEBPACK_IMPORTED_MODULE_6__/* .UserRow */ .p,
        apiSearchEndpoint: "api/search/groups",
        searchBarPlaceholder: "Search by group name or #group_id",
        matchFound: null
    }
];
const initialState = {
    categories: searchCategories,
    input: "",
    activeCategory: searchCategories[0].name
};
const searchSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "search",
    initialState,
    reducers: {
        setInput: (state, action)=>{
            state.input = action.payload;
        },
        setActiveCategory: (state, action)=>{
            state.activeCategory = action.payload; // state.categories.find(e => e.name === action.payload);
        }
    }
});
const useSearchInput = ()=>useSelector((state)=>state.search.input);
const useActiveCategory = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.search.activeCategory);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ userProfileSlice),
/* harmony export */   "m": () => (/* binding */ useProfileUser)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);


// const openProfileFor = createAsyncThunk("userProfile/openProfileFor",(user: State["selectedUser"],{dispatch}) => {
//     dispatch(userProfileSlice.actions.setUserData(user));
//     dispatch()
// });
const initialState = {
    selectedUser: undefined
};
const userProfileSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "userProfile",
    initialState,
    reducers: {
        setUserData: (state, action)=>{
            state.selectedUser = action.payload;
        }
    }
});
const useProfileUser = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.userProfile.selectedUser); // export const openProfileFor1 = (user: State["selectedUser"]) => {
 //     userProfileSlice;
 // }


/***/ }),

/***/ 6634:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useMyDispatch),
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _features_chatSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6473);
/* harmony import */ var _features_currentUserSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9301);
/* harmony import */ var _features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4639);
/* harmony import */ var _features_friendsSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5031);
/* harmony import */ var _features_searchSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3255);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4634);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _features_userProfileSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5541);
/* harmony import */ var _features_mobileSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6543);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_chatSlice__WEBPACK_IMPORTED_MODULE_2__, _features_searchSlice__WEBPACK_IMPORTED_MODULE_6__]);
([_features_chatSlice__WEBPACK_IMPORTED_MODULE_2__, _features_searchSlice__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
        currentUser: _features_currentUserSlice__WEBPACK_IMPORTED_MODULE_3__/* .currentUserSlice.reducer */ .Z.reducer,
        chatSlice: _features_chatSlice__WEBPACK_IMPORTED_MODULE_2__/* .chatSlice.reducer */ .J7.reducer,
        friendsSlice: _features_friendsSlice__WEBPACK_IMPORTED_MODULE_5__/* .friendsSlice.reducer */ .Er.reducer,
        friendRequests: _features_friendRequestsSlice__WEBPACK_IMPORTED_MODULE_4__/* .friendRequestsSlice.reducer */ .Iw.reducer,
        search: _features_searchSlice__WEBPACK_IMPORTED_MODULE_6__/* .searchSlice.reducer */ .iv.reducer,
        userProfile: _features_userProfileSlice__WEBPACK_IMPORTED_MODULE_8__/* .userProfileSlice.reducer */ .B.reducer,
        mobileSlice: _features_mobileSlice__WEBPACK_IMPORTED_MODULE_9__/* .mobileSlice.reducer */ .U.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        }).concat((0,redux_logger__WEBPACK_IMPORTED_MODULE_7__.createLogger)({
            predicate: (getState, action)=>!action.type.includes("friends/setOnlineFriends")
        }))
});
const useMyDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1945:
/***/ (() => {



/***/ }),

/***/ 4079:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"Ascension Island","code":"AC","emoji":"🇦🇨","unicode":"U+1F1E6 U+1F1E8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AC.svg"},{"name":"Andorra","code":"AD","emoji":"🇦🇩","unicode":"U+1F1E6 U+1F1E9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg"},{"name":"United Arab Emirates","code":"AE","emoji":"🇦🇪","unicode":"U+1F1E6 U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg"},{"name":"Afghanistan","code":"AF","emoji":"🇦🇫","unicode":"U+1F1E6 U+1F1EB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg"},{"name":"Antigua & Barbuda","code":"AG","emoji":"🇦🇬","unicode":"U+1F1E6 U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg"},{"name":"Anguilla","code":"AI","emoji":"🇦🇮","unicode":"U+1F1E6 U+1F1EE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AI.svg"},{"name":"Albania","code":"AL","emoji":"🇦🇱","unicode":"U+1F1E6 U+1F1F1","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg"},{"name":"Armenia","code":"AM","emoji":"🇦🇲","unicode":"U+1F1E6 U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg"},{"name":"Angola","code":"AO","emoji":"🇦🇴","unicode":"U+1F1E6 U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AO.svg"},{"name":"Antarctica","code":"AQ","emoji":"🇦🇶","unicode":"U+1F1E6 U+1F1F6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AQ.svg"},{"name":"Argentina","code":"AR","emoji":"🇦🇷","unicode":"U+1F1E6 U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AR.svg"},{"name":"American Samoa","code":"AS","emoji":"🇦🇸","unicode":"U+1F1E6 U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AS.svg"},{"name":"Austria","code":"AT","emoji":"🇦🇹","unicode":"U+1F1E6 U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg"},{"name":"Australia","code":"AU","emoji":"🇦🇺","unicode":"U+1F1E6 U+1F1FA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg"},{"name":"Aruba","code":"AW","emoji":"🇦🇼","unicode":"U+1F1E6 U+1F1FC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AW.svg"},{"name":"Åland Islands","code":"AX","emoji":"🇦🇽","unicode":"U+1F1E6 U+1F1FD","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AX.svg"},{"name":"Azerbaijan","code":"AZ","emoji":"🇦🇿","unicode":"U+1F1E6 U+1F1FF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AZ.svg"},{"name":"Bosnia & Herzegovina","code":"BA","emoji":"🇧🇦","unicode":"U+1F1E7 U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BA.svg"},{"name":"Barbados","code":"BB","emoji":"🇧🇧","unicode":"U+1F1E7 U+1F1E7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BB.svg"},{"name":"Bangladesh","code":"BD","emoji":"🇧🇩","unicode":"U+1F1E7 U+1F1E9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg"},{"name":"Belgium","code":"BE","emoji":"🇧🇪","unicode":"U+1F1E7 U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg"},{"name":"Burkina Faso","code":"BF","emoji":"🇧🇫","unicode":"U+1F1E7 U+1F1EB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BF.svg"},{"name":"Bulgaria","code":"BG","emoji":"🇧🇬","unicode":"U+1F1E7 U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg"},{"name":"Bahrain","code":"BH","emoji":"🇧🇭","unicode":"U+1F1E7 U+1F1ED","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BH.svg"},{"name":"Burundi","code":"BI","emoji":"🇧🇮","unicode":"U+1F1E7 U+1F1EE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BI.svg"},{"name":"Benin","code":"BJ","emoji":"🇧🇯","unicode":"U+1F1E7 U+1F1EF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BJ.svg"},{"name":"St. Barthélemy","code":"BL","emoji":"🇧🇱","unicode":"U+1F1E7 U+1F1F1","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BL.svg"},{"name":"Bermuda","code":"BM","emoji":"🇧🇲","unicode":"U+1F1E7 U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BM.svg"},{"name":"Brunei","code":"BN","emoji":"🇧🇳","unicode":"U+1F1E7 U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BN.svg"},{"name":"Bolivia","code":"BO","emoji":"🇧🇴","unicode":"U+1F1E7 U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BO.svg"},{"name":"Caribbean Netherlands","code":"BQ","emoji":"🇧🇶","unicode":"U+1F1E7 U+1F1F6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BQ.svg"},{"name":"Brazil","code":"BR","emoji":"🇧🇷","unicode":"U+1F1E7 U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg"},{"name":"Bahamas","code":"BS","emoji":"🇧🇸","unicode":"U+1F1E7 U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BS.svg"},{"name":"Bhutan","code":"BT","emoji":"🇧🇹","unicode":"U+1F1E7 U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BT.svg"},{"name":"Bouvet Island","code":"BV","emoji":"🇧🇻","unicode":"U+1F1E7 U+1F1FB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BV.svg"},{"name":"Botswana","code":"BW","emoji":"🇧🇼","unicode":"U+1F1E7 U+1F1FC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BW.svg"},{"name":"Belarus","code":"BY","emoji":"🇧🇾","unicode":"U+1F1E7 U+1F1FE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BY.svg"},{"name":"Belize","code":"BZ","emoji":"🇧🇿","unicode":"U+1F1E7 U+1F1FF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BZ.svg"},{"name":"Canada","code":"CA","emoji":"🇨🇦","unicode":"U+1F1E8 U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg"},{"name":"Cocos (Keeling) Islands","code":"CC","emoji":"🇨🇨","unicode":"U+1F1E8 U+1F1E8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CC.svg"},{"name":"Congo - Kinshasa","code":"CD","emoji":"🇨🇩","unicode":"U+1F1E8 U+1F1E9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CD.svg"},{"name":"Central African Republic","code":"CF","emoji":"🇨🇫","unicode":"U+1F1E8 U+1F1EB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CF.svg"},{"name":"Congo - Brazzaville","code":"CG","emoji":"🇨🇬","unicode":"U+1F1E8 U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CG.svg"},{"name":"Switzerland","code":"CH","emoji":"🇨🇭","unicode":"U+1F1E8 U+1F1ED","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg"},{"name":"Côte d’Ivoire","code":"CI","emoji":"🇨🇮","unicode":"U+1F1E8 U+1F1EE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CI.svg"},{"name":"Cook Islands","code":"CK","emoji":"🇨🇰","unicode":"U+1F1E8 U+1F1F0","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CK.svg"},{"name":"Chile","code":"CL","emoji":"🇨🇱","unicode":"U+1F1E8 U+1F1F1","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CL.svg"},{"name":"Cameroon","code":"CM","emoji":"🇨🇲","unicode":"U+1F1E8 U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CM.svg"},{"name":"China","code":"CN","emoji":"🇨🇳","unicode":"U+1F1E8 U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg"},{"name":"Colombia","code":"CO","emoji":"🇨🇴","unicode":"U+1F1E8 U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CO.svg"},{"name":"Clipperton Island","code":"CP","emoji":"🇨🇵","unicode":"U+1F1E8 U+1F1F5","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CP.svg"},{"name":"Costa Rica","code":"CR","emoji":"🇨🇷","unicode":"U+1F1E8 U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CR.svg"},{"name":"Cuba","code":"CU","emoji":"🇨🇺","unicode":"U+1F1E8 U+1F1FA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CU.svg"},{"name":"Cape Verde","code":"CV","emoji":"🇨🇻","unicode":"U+1F1E8 U+1F1FB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CV.svg"},{"name":"Curaçao","code":"CW","emoji":"🇨🇼","unicode":"U+1F1E8 U+1F1FC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CW.svg"},{"name":"Christmas Island","code":"CX","emoji":"🇨🇽","unicode":"U+1F1E8 U+1F1FD","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CX.svg"},{"name":"Cyprus","code":"CY","emoji":"🇨🇾","unicode":"U+1F1E8 U+1F1FE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CY.svg"},{"name":"Czechia","code":"CZ","emoji":"🇨🇿","unicode":"U+1F1E8 U+1F1FF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CZ.svg"},{"name":"Germany","code":"DE","emoji":"🇩🇪","unicode":"U+1F1E9 U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg"},{"name":"Diego Garcia","code":"DG","emoji":"🇩🇬","unicode":"U+1F1E9 U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DG.svg"},{"name":"Djibouti","code":"DJ","emoji":"🇩🇯","unicode":"U+1F1E9 U+1F1EF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DJ.svg"},{"name":"Denmark","code":"DK","emoji":"🇩🇰","unicode":"U+1F1E9 U+1F1F0","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg"},{"name":"Dominica","code":"DM","emoji":"🇩🇲","unicode":"U+1F1E9 U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DM.svg"},{"name":"Dominican Republic","code":"DO","emoji":"🇩🇴","unicode":"U+1F1E9 U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DO.svg"},{"name":"Algeria","code":"DZ","emoji":"🇩🇿","unicode":"U+1F1E9 U+1F1FF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DZ.svg"},{"name":"Ceuta & Melilla","code":"EA","emoji":"🇪🇦","unicode":"U+1F1EA U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EA.svg"},{"name":"Ecuador","code":"EC","emoji":"🇪🇨","unicode":"U+1F1EA U+1F1E8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EC.svg"},{"name":"Estonia","code":"EE","emoji":"🇪🇪","unicode":"U+1F1EA U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg"},{"name":"Egypt","code":"EG","emoji":"🇪🇬","unicode":"U+1F1EA U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg"},{"name":"Western Sahara","code":"EH","emoji":"🇪🇭","unicode":"U+1F1EA U+1F1ED","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EH.svg"},{"name":"Eritrea","code":"ER","emoji":"🇪🇷","unicode":"U+1F1EA U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ER.svg"},{"name":"Spain","code":"ES","emoji":"🇪🇸","unicode":"U+1F1EA U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg"},{"name":"Ethiopia","code":"ET","emoji":"🇪🇹","unicode":"U+1F1EA U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg"},{"name":"European Union","code":"EU","emoji":"🇪🇺","unicode":"U+1F1EA U+1F1FA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EU.svg"},{"name":"Finland","code":"FI","emoji":"🇫🇮","unicode":"U+1F1EB U+1F1EE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg"},{"name":"Fiji","code":"FJ","emoji":"🇫🇯","unicode":"U+1F1EB U+1F1EF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FJ.svg"},{"name":"Falkland Islands","code":"FK","emoji":"🇫🇰","unicode":"U+1F1EB U+1F1F0","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FK.svg"},{"name":"Micronesia","code":"FM","emoji":"🇫🇲","unicode":"U+1F1EB U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FM.svg"},{"name":"Faroe Islands","code":"FO","emoji":"🇫🇴","unicode":"U+1F1EB U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FO.svg"},{"name":"France","code":"FR","emoji":"🇫🇷","unicode":"U+1F1EB U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg"},{"name":"Gabon","code":"GA","emoji":"🇬🇦","unicode":"U+1F1EC U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GA.svg"},{"name":"United Kingdom","code":"GB","emoji":"🇬🇧","unicode":"U+1F1EC U+1F1E7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg"},{"name":"Grenada","code":"GD","emoji":"🇬🇩","unicode":"U+1F1EC U+1F1E9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GD.svg"},{"name":"Georgia","code":"GE","emoji":"🇬🇪","unicode":"U+1F1EC U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GE.svg"},{"name":"French Guiana","code":"GF","emoji":"🇬🇫","unicode":"U+1F1EC U+1F1EB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GF.svg"},{"name":"Guernsey","code":"GG","emoji":"🇬🇬","unicode":"U+1F1EC U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GG.svg"},{"name":"Ghana","code":"GH","emoji":"🇬🇭","unicode":"U+1F1EC U+1F1ED","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GH.svg"},{"name":"Gibraltar","code":"GI","emoji":"🇬🇮","unicode":"U+1F1EC U+1F1EE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GI.svg"},{"name":"Greenland","code":"GL","emoji":"🇬🇱","unicode":"U+1F1EC U+1F1F1","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GL.svg"},{"name":"Gambia","code":"GM","emoji":"🇬🇲","unicode":"U+1F1EC U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GM.svg"},{"name":"Guinea","code":"GN","emoji":"🇬🇳","unicode":"U+1F1EC U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GN.svg"},{"name":"Guadeloupe","code":"GP","emoji":"🇬🇵","unicode":"U+1F1EC U+1F1F5","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GP.svg"},{"name":"Equatorial Guinea","code":"GQ","emoji":"🇬🇶","unicode":"U+1F1EC U+1F1F6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GQ.svg"},{"name":"Greece","code":"GR","emoji":"🇬🇷","unicode":"U+1F1EC U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg"},{"name":"South Georgia & South Sandwich Islands","code":"GS","emoji":"🇬🇸","unicode":"U+1F1EC U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GS.svg"},{"name":"Guatemala","code":"GT","emoji":"🇬🇹","unicode":"U+1F1EC U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GT.svg"},{"name":"Guam","code":"GU","emoji":"🇬🇺","unicode":"U+1F1EC U+1F1FA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GU.svg"},{"name":"Guinea-Bissau","code":"GW","emoji":"🇬🇼","unicode":"U+1F1EC U+1F1FC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GW.svg"},{"name":"Guyana","code":"GY","emoji":"🇬🇾","unicode":"U+1F1EC U+1F1FE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GY.svg"},{"name":"Hong Kong SAR China","code":"HK","emoji":"🇭🇰","unicode":"U+1F1ED U+1F1F0","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HK.svg"},{"name":"Heard & McDonald Islands","code":"HM","emoji":"🇭🇲","unicode":"U+1F1ED U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HM.svg"},{"name":"Honduras","code":"HN","emoji":"🇭🇳","unicode":"U+1F1ED U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HN.svg"},{"name":"Croatia","code":"HR","emoji":"🇭🇷","unicode":"U+1F1ED U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg"},{"name":"Haiti","code":"HT","emoji":"🇭🇹","unicode":"U+1F1ED U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HT.svg"},{"name":"Hungary","code":"HU","emoji":"🇭🇺","unicode":"U+1F1ED U+1F1FA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg"},{"name":"Canary Islands","code":"IC","emoji":"🇮🇨","unicode":"U+1F1EE U+1F1E8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IC.svg"},{"name":"Indonesia","code":"ID","emoji":"🇮🇩","unicode":"U+1F1EE U+1F1E9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg"},{"name":"Ireland","code":"IE","emoji":"🇮🇪","unicode":"U+1F1EE U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg"},{"name":"Israel","code":"IL","emoji":"🇮🇱","unicode":"U+1F1EE U+1F1F1","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg"},{"name":"Isle of Man","code":"IM","emoji":"🇮🇲","unicode":"U+1F1EE U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IM.svg"},{"name":"India","code":"IN","emoji":"🇮🇳","unicode":"U+1F1EE U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg"},{"name":"British Indian Ocean Territory","code":"IO","emoji":"🇮🇴","unicode":"U+1F1EE U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IO.svg"},{"name":"Iraq","code":"IQ","emoji":"🇮🇶","unicode":"U+1F1EE U+1F1F6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg"},{"name":"Iran","code":"IR","emoji":"🇮🇷","unicode":"U+1F1EE U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IR.svg"},{"name":"Iceland","code":"IS","emoji":"🇮🇸","unicode":"U+1F1EE U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg"},{"name":"Italy","code":"IT","emoji":"🇮🇹","unicode":"U+1F1EE U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg"},{"name":"Jersey","code":"JE","emoji":"🇯🇪","unicode":"U+1F1EF U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JE.svg"},{"name":"Jamaica","code":"JM","emoji":"🇯🇲","unicode":"U+1F1EF U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JM.svg"},{"name":"Jordan","code":"JO","emoji":"🇯🇴","unicode":"U+1F1EF U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JO.svg"},{"name":"Japan","code":"JP","emoji":"🇯🇵","unicode":"U+1F1EF U+1F1F5","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg"},{"name":"Kenya","code":"KE","emoji":"🇰🇪","unicode":"U+1F1F0 U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg"},{"name":"Kyrgyzstan","code":"KG","emoji":"🇰🇬","unicode":"U+1F1F0 U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KG.svg"},{"name":"Cambodia","code":"KH","emoji":"🇰🇭","unicode":"U+1F1F0 U+1F1ED","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KH.svg"},{"name":"Kiribati","code":"KI","emoji":"🇰🇮","unicode":"U+1F1F0 U+1F1EE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KI.svg"},{"name":"Comoros","code":"KM","emoji":"🇰🇲","unicode":"U+1F1F0 U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KM.svg"},{"name":"St. Kitts & Nevis","code":"KN","emoji":"🇰🇳","unicode":"U+1F1F0 U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KN.svg"},{"name":"North Korea","code":"KP","emoji":"🇰🇵","unicode":"U+1F1F0 U+1F1F5","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KP.svg"},{"name":"South Korea","code":"KR","emoji":"🇰🇷","unicode":"U+1F1F0 U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg"},{"name":"Kuwait","code":"KW","emoji":"🇰🇼","unicode":"U+1F1F0 U+1F1FC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KW.svg"},{"name":"Cayman Islands","code":"KY","emoji":"🇰🇾","unicode":"U+1F1F0 U+1F1FE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KY.svg"},{"name":"Kazakhstan","code":"KZ","emoji":"🇰🇿","unicode":"U+1F1F0 U+1F1FF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KZ.svg"},{"name":"Laos","code":"LA","emoji":"🇱🇦","unicode":"U+1F1F1 U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LA.svg"},{"name":"Lebanon","code":"LB","emoji":"🇱🇧","unicode":"U+1F1F1 U+1F1E7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LB.svg"},{"name":"St. Lucia","code":"LC","emoji":"🇱🇨","unicode":"U+1F1F1 U+1F1E8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LC.svg"},{"name":"Liechtenstein","code":"LI","emoji":"🇱🇮","unicode":"U+1F1F1 U+1F1EE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LI.svg"},{"name":"Sri Lanka","code":"LK","emoji":"🇱🇰","unicode":"U+1F1F1 U+1F1F0","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg"},{"name":"Liberia","code":"LR","emoji":"🇱🇷","unicode":"U+1F1F1 U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LR.svg"},{"name":"Lesotho","code":"LS","emoji":"🇱🇸","unicode":"U+1F1F1 U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LS.svg"},{"name":"Lithuania","code":"LT","emoji":"🇱🇹","unicode":"U+1F1F1 U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg"},{"name":"Luxembourg","code":"LU","emoji":"🇱🇺","unicode":"U+1F1F1 U+1F1FA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LU.svg"},{"name":"Latvia","code":"LV","emoji":"🇱🇻","unicode":"U+1F1F1 U+1F1FB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg"},{"name":"Libya","code":"LY","emoji":"🇱🇾","unicode":"U+1F1F1 U+1F1FE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LY.svg"},{"name":"Morocco","code":"MA","emoji":"🇲🇦","unicode":"U+1F1F2 U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MA.svg"},{"name":"Monaco","code":"MC","emoji":"🇲🇨","unicode":"U+1F1F2 U+1F1E8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MC.svg"},{"name":"Moldova","code":"MD","emoji":"🇲🇩","unicode":"U+1F1F2 U+1F1E9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MD.svg"},{"name":"Montenegro","code":"ME","emoji":"🇲🇪","unicode":"U+1F1F2 U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ME.svg"},{"name":"St. Martin","code":"MF","emoji":"🇲🇫","unicode":"U+1F1F2 U+1F1EB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MF.svg"},{"name":"Madagascar","code":"MG","emoji":"🇲🇬","unicode":"U+1F1F2 U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MG.svg"},{"name":"Marshall Islands","code":"MH","emoji":"🇲🇭","unicode":"U+1F1F2 U+1F1ED","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MH.svg"},{"name":"North Macedonia","code":"MK","emoji":"🇲🇰","unicode":"U+1F1F2 U+1F1F0","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MK.svg"},{"name":"Mali","code":"ML","emoji":"🇲🇱","unicode":"U+1F1F2 U+1F1F1","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ML.svg"},{"name":"Myanmar (Burma)","code":"MM","emoji":"🇲🇲","unicode":"U+1F1F2 U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MM.svg"},{"name":"Mongolia","code":"MN","emoji":"🇲🇳","unicode":"U+1F1F2 U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MN.svg"},{"name":"Macao SAR China","code":"MO","emoji":"🇲🇴","unicode":"U+1F1F2 U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MO.svg"},{"name":"Northern Mariana Islands","code":"MP","emoji":"🇲🇵","unicode":"U+1F1F2 U+1F1F5","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MP.svg"},{"name":"Martinique","code":"MQ","emoji":"🇲🇶","unicode":"U+1F1F2 U+1F1F6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MQ.svg"},{"name":"Mauritania","code":"MR","emoji":"🇲🇷","unicode":"U+1F1F2 U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MR.svg"},{"name":"Montserrat","code":"MS","emoji":"🇲🇸","unicode":"U+1F1F2 U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MS.svg"},{"name":"Malta","code":"MT","emoji":"🇲🇹","unicode":"U+1F1F2 U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg"},{"name":"Mauritius","code":"MU","emoji":"🇲🇺","unicode":"U+1F1F2 U+1F1FA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MU.svg"},{"name":"Maldives","code":"MV","emoji":"🇲🇻","unicode":"U+1F1F2 U+1F1FB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MV.svg"},{"name":"Malawi","code":"MW","emoji":"🇲🇼","unicode":"U+1F1F2 U+1F1FC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MW.svg"},{"name":"Mexico","code":"MX","emoji":"🇲🇽","unicode":"U+1F1F2 U+1F1FD","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg"},{"name":"Malaysia","code":"MY","emoji":"🇲🇾","unicode":"U+1F1F2 U+1F1FE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MY.svg"},{"name":"Mozambique","code":"MZ","emoji":"🇲🇿","unicode":"U+1F1F2 U+1F1FF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MZ.svg"},{"name":"Namibia","code":"NA","emoji":"🇳🇦","unicode":"U+1F1F3 U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NA.svg"},{"name":"New Caledonia","code":"NC","emoji":"🇳🇨","unicode":"U+1F1F3 U+1F1E8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NC.svg"},{"name":"Niger","code":"NE","emoji":"🇳🇪","unicode":"U+1F1F3 U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NE.svg"},{"name":"Norfolk Island","code":"NF","emoji":"🇳🇫","unicode":"U+1F1F3 U+1F1EB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NF.svg"},{"name":"Nigeria","code":"NG","emoji":"🇳🇬","unicode":"U+1F1F3 U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg"},{"name":"Nicaragua","code":"NI","emoji":"🇳🇮","unicode":"U+1F1F3 U+1F1EE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NI.svg"},{"name":"Netherlands","code":"NL","emoji":"🇳🇱","unicode":"U+1F1F3 U+1F1F1","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg"},{"name":"Norway","code":"NO","emoji":"🇳🇴","unicode":"U+1F1F3 U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NO.svg"},{"name":"Nepal","code":"NP","emoji":"🇳🇵","unicode":"U+1F1F3 U+1F1F5","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg"},{"name":"Nauru","code":"NR","emoji":"🇳🇷","unicode":"U+1F1F3 U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NR.svg"},{"name":"Niue","code":"NU","emoji":"🇳🇺","unicode":"U+1F1F3 U+1F1FA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NU.svg"},{"name":"New Zealand","code":"NZ","emoji":"🇳🇿","unicode":"U+1F1F3 U+1F1FF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NZ.svg"},{"name":"Oman","code":"OM","emoji":"🇴🇲","unicode":"U+1F1F4 U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/OM.svg"},{"name":"Panama","code":"PA","emoji":"🇵🇦","unicode":"U+1F1F5 U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PA.svg"},{"name":"Peru","code":"PE","emoji":"🇵🇪","unicode":"U+1F1F5 U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PE.svg"},{"name":"French Polynesia","code":"PF","emoji":"🇵🇫","unicode":"U+1F1F5 U+1F1EB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PF.svg"},{"name":"Papua New Guinea","code":"PG","emoji":"🇵🇬","unicode":"U+1F1F5 U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PG.svg"},{"name":"Philippines","code":"PH","emoji":"🇵🇭","unicode":"U+1F1F5 U+1F1ED","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PH.svg"},{"name":"Pakistan","code":"PK","emoji":"🇵🇰","unicode":"U+1F1F5 U+1F1F0","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg"},{"name":"Poland","code":"PL","emoji":"🇵🇱","unicode":"U+1F1F5 U+1F1F1","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg"},{"name":"St. Pierre & Miquelon","code":"PM","emoji":"🇵🇲","unicode":"U+1F1F5 U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PM.svg"},{"name":"Pitcairn Islands","code":"PN","emoji":"🇵🇳","unicode":"U+1F1F5 U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PN.svg"},{"name":"Puerto Rico","code":"PR","emoji":"🇵🇷","unicode":"U+1F1F5 U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PR.svg"},{"name":"Palestinian Territories","code":"PS","emoji":"🇵🇸","unicode":"U+1F1F5 U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PS.svg"},{"name":"Portugal","code":"PT","emoji":"🇵🇹","unicode":"U+1F1F5 U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg"},{"name":"Palau","code":"PW","emoji":"🇵🇼","unicode":"U+1F1F5 U+1F1FC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PW.svg"},{"name":"Paraguay","code":"PY","emoji":"🇵🇾","unicode":"U+1F1F5 U+1F1FE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PY.svg"},{"name":"Qatar","code":"QA","emoji":"🇶🇦","unicode":"U+1F1F6 U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/QA.svg"},{"name":"Réunion","code":"RE","emoji":"🇷🇪","unicode":"U+1F1F7 U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RE.svg"},{"name":"Romania","code":"RO","emoji":"🇷🇴","unicode":"U+1F1F7 U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg"},{"name":"Serbia","code":"RS","emoji":"🇷🇸","unicode":"U+1F1F7 U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg"},{"name":"Russia","code":"RU","emoji":"🇷🇺","unicode":"U+1F1F7 U+1F1FA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg"},{"name":"Rwanda","code":"RW","emoji":"🇷🇼","unicode":"U+1F1F7 U+1F1FC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RW.svg"},{"name":"Saudi Arabia","code":"SA","emoji":"🇸🇦","unicode":"U+1F1F8 U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg"},{"name":"Solomon Islands","code":"SB","emoji":"🇸🇧","unicode":"U+1F1F8 U+1F1E7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SB.svg"},{"name":"Seychelles","code":"SC","emoji":"🇸🇨","unicode":"U+1F1F8 U+1F1E8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SC.svg"},{"name":"Sudan","code":"SD","emoji":"🇸🇩","unicode":"U+1F1F8 U+1F1E9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SD.svg"},{"name":"Sweden","code":"SE","emoji":"🇸🇪","unicode":"U+1F1F8 U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg"},{"name":"Singapore","code":"SG","emoji":"🇸🇬","unicode":"U+1F1F8 U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SG.svg"},{"name":"St. Helena","code":"SH","emoji":"🇸🇭","unicode":"U+1F1F8 U+1F1ED","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SH.svg"},{"name":"Slovenia","code":"SI","emoji":"🇸🇮","unicode":"U+1F1F8 U+1F1EE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg"},{"name":"Svalbard & Jan Mayen","code":"SJ","emoji":"🇸🇯","unicode":"U+1F1F8 U+1F1EF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SJ.svg"},{"name":"Slovakia","code":"SK","emoji":"🇸🇰","unicode":"U+1F1F8 U+1F1F0","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg"},{"name":"Sierra Leone","code":"SL","emoji":"🇸🇱","unicode":"U+1F1F8 U+1F1F1","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SL.svg"},{"name":"San Marino","code":"SM","emoji":"🇸🇲","unicode":"U+1F1F8 U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SM.svg"},{"name":"Senegal","code":"SN","emoji":"🇸🇳","unicode":"U+1F1F8 U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SN.svg"},{"name":"Somalia","code":"SO","emoji":"🇸🇴","unicode":"U+1F1F8 U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SO.svg"},{"name":"Suriname","code":"SR","emoji":"🇸🇷","unicode":"U+1F1F8 U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SR.svg"},{"name":"South Sudan","code":"SS","emoji":"🇸🇸","unicode":"U+1F1F8 U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SS.svg"},{"name":"São Tomé & Príncipe","code":"ST","emoji":"🇸🇹","unicode":"U+1F1F8 U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ST.svg"},{"name":"El Salvador","code":"SV","emoji":"🇸🇻","unicode":"U+1F1F8 U+1F1FB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SV.svg"},{"name":"Sint Maarten","code":"SX","emoji":"🇸🇽","unicode":"U+1F1F8 U+1F1FD","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SX.svg"},{"name":"Syria","code":"SY","emoji":"🇸🇾","unicode":"U+1F1F8 U+1F1FE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SY.svg"},{"name":"Eswatini","code":"SZ","emoji":"🇸🇿","unicode":"U+1F1F8 U+1F1FF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SZ.svg"},{"name":"Tristan da Cunha","code":"TA","emoji":"🇹🇦","unicode":"U+1F1F9 U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TA.svg"},{"name":"Turks & Caicos Islands","code":"TC","emoji":"🇹🇨","unicode":"U+1F1F9 U+1F1E8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TC.svg"},{"name":"Chad","code":"TD","emoji":"🇹🇩","unicode":"U+1F1F9 U+1F1E9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TD.svg"},{"name":"French Southern Territories","code":"TF","emoji":"🇹🇫","unicode":"U+1F1F9 U+1F1EB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TF.svg"},{"name":"Togo","code":"TG","emoji":"🇹🇬","unicode":"U+1F1F9 U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TG.svg"},{"name":"Thailand","code":"TH","emoji":"🇹🇭","unicode":"U+1F1F9 U+1F1ED","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg"},{"name":"Tajikistan","code":"TJ","emoji":"🇹🇯","unicode":"U+1F1F9 U+1F1EF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TJ.svg"},{"name":"Tokelau","code":"TK","emoji":"🇹🇰","unicode":"U+1F1F9 U+1F1F0","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TK.svg"},{"name":"Timor-Leste","code":"TL","emoji":"🇹🇱","unicode":"U+1F1F9 U+1F1F1","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TL.svg"},{"name":"Turkmenistan","code":"TM","emoji":"🇹🇲","unicode":"U+1F1F9 U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TM.svg"},{"name":"Tunisia","code":"TN","emoji":"🇹🇳","unicode":"U+1F1F9 U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TN.svg"},{"name":"Tonga","code":"TO","emoji":"🇹🇴","unicode":"U+1F1F9 U+1F1F4","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TO.svg"},{"name":"Turkey","code":"TR","emoji":"🇹🇷","unicode":"U+1F1F9 U+1F1F7","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg"},{"name":"Trinidad & Tobago","code":"TT","emoji":"🇹🇹","unicode":"U+1F1F9 U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TT.svg"},{"name":"Tuvalu","code":"TV","emoji":"🇹🇻","unicode":"U+1F1F9 U+1F1FB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TV.svg"},{"name":"Taiwan","code":"TW","emoji":"🇹🇼","unicode":"U+1F1F9 U+1F1FC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TW.svg"},{"name":"Tanzania","code":"TZ","emoji":"🇹🇿","unicode":"U+1F1F9 U+1F1FF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TZ.svg"},{"name":"Ukraine","code":"UA","emoji":"🇺🇦","unicode":"U+1F1FA U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UA.svg"},{"name":"Uganda","code":"UG","emoji":"🇺🇬","unicode":"U+1F1FA U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UG.svg"},{"name":"U.S. Outlying Islands","code":"UM","emoji":"🇺🇲","unicode":"U+1F1FA U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UM.svg"},{"name":"United Nations","code":"UN","emoji":"🇺🇳","unicode":"U+1F1FA U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UN.svg"},{"name":"United States","code":"US","emoji":"🇺🇸","unicode":"U+1F1FA U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg"},{"name":"Uruguay","code":"UY","emoji":"🇺🇾","unicode":"U+1F1FA U+1F1FE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UY.svg"},{"name":"Uzbekistan","code":"UZ","emoji":"🇺🇿","unicode":"U+1F1FA U+1F1FF","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg"},{"name":"Vatican City","code":"VA","emoji":"🇻🇦","unicode":"U+1F1FB U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VA.svg"},{"name":"St. Vincent & Grenadines","code":"VC","emoji":"🇻🇨","unicode":"U+1F1FB U+1F1E8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VC.svg"},{"name":"Venezuela","code":"VE","emoji":"🇻🇪","unicode":"U+1F1FB U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VE.svg"},{"name":"British Virgin Islands","code":"VG","emoji":"🇻🇬","unicode":"U+1F1FB U+1F1EC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VG.svg"},{"name":"U.S. Virgin Islands","code":"VI","emoji":"🇻🇮","unicode":"U+1F1FB U+1F1EE","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VI.svg"},{"name":"Vietnam","code":"VN","emoji":"🇻🇳","unicode":"U+1F1FB U+1F1F3","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg"},{"name":"Vanuatu","code":"VU","emoji":"🇻🇺","unicode":"U+1F1FB U+1F1FA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VU.svg"},{"name":"Wallis & Futuna","code":"WF","emoji":"🇼🇫","unicode":"U+1F1FC U+1F1EB","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WF.svg"},{"name":"Samoa","code":"WS","emoji":"🇼🇸","unicode":"U+1F1FC U+1F1F8","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WS.svg"},{"name":"Kosovo","code":"XK","emoji":"🇽🇰","unicode":"U+1F1FD U+1F1F0","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/XK.svg"},{"name":"Yemen","code":"YE","emoji":"🇾🇪","unicode":"U+1F1FE U+1F1EA","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YE.svg"},{"name":"Mayotte","code":"YT","emoji":"🇾🇹","unicode":"U+1F1FE U+1F1F9","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YT.svg"},{"name":"South Africa","code":"ZA","emoji":"🇿🇦","unicode":"U+1F1FF U+1F1E6","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg"},{"name":"Zambia","code":"ZM","emoji":"🇿🇲","unicode":"U+1F1FF U+1F1F2","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZM.svg"},{"name":"Zimbabwe","code":"ZW","emoji":"🇿🇼","unicode":"U+1F1FF U+1F1FC","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZW.svg"},{"name":"England","code":"ENGLAND","emoji":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","unicode":"U+1F3F4 U+E0067 U+E0062 U+E0065 U+E006E U+E0067 U+E007F","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ENGLAND.svg"},{"name":"Scotland","code":"SCOTLAND","emoji":"🏴󠁧󠁢󠁳󠁣󠁴󠁿","unicode":"U+1F3F4 U+E0067 U+E0062 U+E0073 U+E0063 U+E0074 U+E007F","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SCOTLAND.svg"},{"name":"Wales","code":"WALES","emoji":"🏴󠁧󠁢󠁷󠁬󠁳󠁿","unicode":"U+1F3F4 U+E0067 U+E0062 U+E0077 U+E006C U+E0073 U+E007F","image":"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WALES.svg"}]');

/***/ })

};
;
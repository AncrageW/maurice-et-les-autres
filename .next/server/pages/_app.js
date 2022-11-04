"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
;// CONCATENATED MODULE: ./components/layouts/Mobile.js





function Mobile({ mobiles , links  }) {
    const { 0: isActiveMenu , 1: setIsActiveMenu  } = (0,external_react_.useState)(false);
    const router = (0,router_namespaceObject.useRouter)();
    const path = router.pathname;
    const handleClick = ()=>{
        setIsActiveMenu(!isActiveMenu);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `md:hidden w-full absolute bottom-0 z-50 overflow-hidden`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${isActiveMenu ? ' h-auto max-h-[10rem]' : 'max-h-0'} bg-slate-50 overflow-hidden border-t border-cerulean-400 duration-300 transform transition-max-height w-full z-0`,
                children: links.map((el, i)=>el.icon === undefined && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${path === el.link && 'bg-cerulean-100'}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: el.link,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "py-2 px-3 text-sm",
                                    children: el.name
                                })
                            })
                        }, i)
                    })
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `grid grid-cols-4 bg-slate-50 inset-x-0 h-16 `,
                children: [
                    mobiles.map((mobile, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `flex items-center justify-center text-xs text-slate-900 
                ${path === mobile.link && 'bg-cerulean-100'}`,
                            onClick: ()=>setIsActiveMenu(false)
                            ,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: mobile.link,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "flex flex-col items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(mobile.icon, {
                                            className: "w-5"
                                        }),
                                        mobile.name
                                    ]
                                })
                            })
                        }, i)
                    ),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        onClick: ()=>handleClick()
                        ,
                        className: `h-full cursor-pointer flex flex-col items-center justify-center text-xs text-slate-900  
            ${path === `menu` && 'bg-cerulean-100'}
            ${isActiveMenu && 'text-cerulean-700'}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(outline_.MenuIcon, {
                                className: "w-5"
                            }),
                            "Menu"
                        ]
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/layouts/Navbar.js







function Navbar() {
    const router = (0,router_namespaceObject.useRouter)();
    const navLinks = [
        {
            name: "Accueil",
            link: "/",
            icon: outline_.HomeIcon
        },
        {
            name: "Spectacles",
            link: "/spectacles",
            icon: outline_.SpeakerphoneIcon
        },
        {
            name: "Compagnie",
            link: "/compagnie"
        },
        {
            name: "Calendrier",
            link: "/calendrier",
            icon: outline_.CalendarIcon
        },
        {
            name: "Espace pro",
            link: "/espace-pro"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ];
    const { 0: mobileLinks , 1: setMobileLinks  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        setMobileLinks(navLinks.filter((el)=>el.icon
        ));
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden lg:block absolute inset-x-0 bottom-0 lg:bottom-auto h-14",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `sticky h-full top-0 z-50 lg:border-t-0 lg:border-b border-slate-200 lg:h-16 hidden lg:block w-full text-slate-800 `,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "z-[-1] absolute inset-0 bg-white"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "max-w-6xl mx-auto flex items-center justify-between h-full",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "lg:flex items-center hidden",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "relative w-12 h-12",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "h-full flex items-center",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                    alt: "Maurice Logo",
                                                    layout: "fill",
                                                    src: "https://storage.googleapis.com/mauriceetlesautres/logo/maurice.ico"
                                                })
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hidden md:flex items-center justify-between h-full",
                                    children: navLinks.map((link, i)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: `${link.link}`,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: `relative h-full flex items-center md:text-sm lg:text-base cursor-pointer`,
                                                children: [
                                                    router.pathname.includes(link.name.toLowerCase()) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "absolute h-[2px] inset-x-0 -bottom-[1px] bg-gradient-to-r from-cerulean-400 via-turquoiseGreen-400 to-cerulean-400"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `px-6 text-cerulean-800`,
                                                        children: link.name
                                                    })
                                                ]
                                            })
                                        }, i)
                                    )
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Mobile, {
                links: navLinks,
                mobiles: mobileLinks
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/layouts/Footer.js


function Footer() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "pb-20 lg:pb-0",
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: "border-t border-slate-200",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                class: "px-3 py-5 max-w-6xl mx-auto grid lg:grid-cols-3 gap-6 lg:gap-10 text-slate-700",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex text-slate-800 text-sm",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mr-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.facebook.com/mauriceetlesautres/",
                                    target: "_blank",
                                    children: "Facebook"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mr-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.instagram.com/mauriceetlesautres/",
                                    target: "_blank",
                                    children: "Instagram"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-sm text-slate-800",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("audio", {
                                className: "max-w-full pointer-events-auto mb-4",
                                controls: true,
                                src: "https://storage.googleapis.com/mauriceetlesautres/audio/music-for-a-while.mp3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.MusicNoteIcon, {
                                    className: "w-5"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(outline_.MusicNoteIcon, {
                                className: "w-5 text-slate-800"
                            }),
                            "Music for a while - Purcell ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " Martial Pauliat & J\xe9r\xe9mie Arcache"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-slate-800 text-sm",
                        children: [
                            "Maurice et les autres ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "Association Loi 1901 ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "Si\xe8ge social : 7 rue de la Borie, 87 100 Limoges ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "N\xb0SIRET : 827 853 201 000 24 ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "Code APE : 9001Z"
                        ]
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ./components/layouts/index.js





;// CONCATENATED MODULE: ./layouts/Landing.js


function Landing({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "overflow-hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex",
                children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: "h-screen overflow-auto flex-1 mx-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                        className: "flex-1",
                        children: [
                            children,
                            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                        ]
                    })
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./layouts/index.js



;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        router_default().events.on('routeChangeComplete', ()=>{
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(Landing, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675], () => (__webpack_exec__(2492)));
module.exports = __webpack_exports__;

})();
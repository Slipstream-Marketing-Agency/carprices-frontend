"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/webStories/index.js":
/*!********************************************!*\
  !*** ./src/components/webStories/index.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Webstories; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _viewAllButton_ViewAllButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../viewAllButton/ViewAllButton */ \"./src/components/viewAllButton/ViewAllButton.js\");\n/* harmony import */ var _common_FeaturedImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/FeaturedImage */ \"./src/components/common/FeaturedImage.js\");\n\nvar _s = $RefreshSig$();\n\n\n// import axios from \"axios\";\n// import Layout from \"@/components/layout/Layout\";\n// import Ad728x90 from \"@/components/ads/Ad728x90\";\n// import Ad970x250 from \"@/components/ads/Ad970x250\";\n// import { useMediaQuery } from \"react-responsive\";\n// import Ad300x600 from \"@/components/ads/Ad300x600\";\n// import moment from \"moment\";\n\n\n\nfunction Webstories() {\n    _s();\n    // const [webStories, setWebStories] = useState(null);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const webstories = [\n        {\n            title: \"title\",\n            mainTitle\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"my-2\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card_wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Web Stories\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SlipStream marketing agency project\\\\car-prices-new-templates\\\\main-files\\\\Drivco-LTR\\\\src\\\\components\\\\webStories\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"storyList marginBottom20\",\n                            children: props.props.webstories && props.props.webstories.map((item, index)=>{\n                                var _item, _item1, _item2, _item3;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"webstoryCard\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/web-stories/\".concat(item.slug),\n                                            target: \"_blank\",\n                                            title: (_item = item) === null || _item === void 0 ? void 0 : _item.title,\n                                            rel: \"noopener\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_FeaturedImage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                    width: 250,\n                                                    height: 250,\n                                                    // src={item?.slides[0].image1}\n                                                    src: \"/asssets/img/mitsubishi-outlander-car.png\",\n                                                    alt: (_item1 = item) === null || _item1 === void 0 ? void 0 : _item1.title,\n                                                    title: (_item2 = item) === null || _item2 === void 0 ? void 0 : _item2.title,\n                                                    setIsLoading: setIsLoading\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\SlipStream marketing agency project\\\\car-prices-new-templates\\\\main-files\\\\Drivco-LTR\\\\src\\\\components\\\\webStories\\\\index.js\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 49\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"storyDetail\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            className: \"heading \",\n                                                            children: (_item3 = item) === null || _item3 === void 0 ? void 0 : _item3.mainTitle\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\SlipStream marketing agency project\\\\car-prices-new-templates\\\\main-files\\\\Drivco-LTR\\\\src\\\\components\\\\webStories\\\\index.js\",\n                                                            lineNumber: 55,\n                                                            columnNumber: 53\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"date\",\n                                                            children: [\n                                                                \"Carprices |  \",\n                                                                item.publishedAt.format(\"MMM DD, YYYY\")\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"D:\\\\SlipStream marketing agency project\\\\car-prices-new-templates\\\\main-files\\\\Drivco-LTR\\\\src\\\\components\\\\webStories\\\\index.js\",\n                                                            lineNumber: 58,\n                                                            columnNumber: 53\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"D:\\\\SlipStream marketing agency project\\\\car-prices-new-templates\\\\main-files\\\\Drivco-LTR\\\\src\\\\components\\\\webStories\\\\index.js\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 49\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\SlipStream marketing agency project\\\\car-prices-new-templates\\\\main-files\\\\Drivco-LTR\\\\src\\\\components\\\\webStories\\\\index.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 45\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SlipStream marketing agency project\\\\car-prices-new-templates\\\\main-files\\\\Drivco-LTR\\\\src\\\\components\\\\webStories\\\\index.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 41\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"D:\\\\SlipStream marketing agency project\\\\car-prices-new-templates\\\\main-files\\\\Drivco-LTR\\\\src\\\\components\\\\webStories\\\\index.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 37\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SlipStream marketing agency project\\\\car-prices-new-templates\\\\main-files\\\\Drivco-LTR\\\\src\\\\components\\\\webStories\\\\index.js\",\n                            lineNumber: 36,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SlipStream marketing agency project\\\\car-prices-new-templates\\\\main-files\\\\Drivco-LTR\\\\src\\\\components\\\\webStories\\\\index.js\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_viewAllButton_ViewAllButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        text: \"View All Stories\",\n                        link: \"/web-stories\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SlipStream marketing agency project\\\\car-prices-new-templates\\\\main-files\\\\Drivco-LTR\\\\src\\\\components\\\\webStories\\\\index.js\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SlipStream marketing agency project\\\\car-prices-new-templates\\\\main-files\\\\Drivco-LTR\\\\src\\\\components\\\\webStories\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\SlipStream marketing agency project\\\\car-prices-new-templates\\\\main-files\\\\Drivco-LTR\\\\src\\\\components\\\\webStories\\\\index.js\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Webstories, \"kGvZM12vVogN7acZohn9dg0dHWY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Webstories;\nvar _c;\n$RefreshReg$(_c, \"Webstories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy93ZWJTdG9yaWVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDWDtBQUN4Qyw2QkFBNkI7QUFDN0IsbURBQW1EO0FBQ25ELG9EQUFvRDtBQUNwRCxzREFBc0Q7QUFDdEQsb0RBQW9EO0FBQ3BELHNEQUFzRDtBQUV0RCwrQkFBK0I7QUFDRjtBQUM4QjtBQUNQO0FBR3JDLFNBQVNPOztJQUVwQixzREFBc0Q7SUFDdEQsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1EsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNVLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBLENBQUM7SUFDM0MsTUFBTVksU0FBU1gsc0RBQVNBO0lBRXhCLE1BQU1ZLGFBQVc7UUFDYjtZQUFDQyxPQUFNO1lBQ1BDO1FBQVM7S0FFWjtJQUVELHFCQUNJO2tCQUNJLDRFQUFDQztZQUFRQyxXQUFVO3NCQUNmLDRFQUFDQztnQkFBSUQsV0FBVTs7a0NBQ1gsOERBQUNFO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNEO3dCQUFJRCxXQUFVO2tDQUNYLDRFQUFDRzs0QkFBR0gsV0FBVTtzQ0FDVEksTUFBTUEsS0FBSyxDQUFDUixVQUFVLElBQ25CUSxNQUFNQSxLQUFLLENBQUNSLFVBQVUsQ0FBQ1MsR0FBRyxDQUFDLENBQUNDLE1BQU1DO29DQU1YRCxPQU1FQSxRQUNFQSxRQUtGQTtxREFqQnJCLDhEQUFDRTs4Q0FDRyw0RUFBQ1A7d0NBQUlELFdBQVU7a0RBQ1gsNEVBQUNmLGtEQUFJQTs0Q0FDRHdCLE1BQU0sZ0JBQTBCLE9BQVZILEtBQUtJLElBQUk7NENBQy9CQyxRQUFPOzRDQUNQZCxLQUFLLEdBQUVTLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTVQsS0FBSzs0Q0FDbEJlLEtBQUk7OzhEQUVKLDhEQUFDekIsNkRBQWFBO29EQUFDMEIsT0FBTztvREFBS0MsUUFBUTtvREFDL0IsK0JBQStCO29EQUMvQkMsS0FBSTtvREFDSkMsR0FBRyxHQUFFVixTQUFBQSxrQkFBQUEsNkJBQUFBLE9BQU1ULEtBQUs7b0RBQ2hCQSxLQUFLLEdBQUVTLFNBQUFBLGtCQUFBQSw2QkFBQUEsT0FBTVQsS0FBSztvREFDbEJILGNBQWNBOzs7Ozs7OERBRWxCLDhEQUFDTztvREFBSUQsV0FBVTs7c0VBQ1gsOERBQUNpQjs0REFBR2pCLFdBQVU7dUVBQ1RNLFNBQUFBLGtCQUFBQSw2QkFBQUEsT0FBTVIsU0FBUzs7Ozs7O3NFQUVwQiw4REFBQ0c7NERBQUlELFdBQVU7O2dFQUFPO2dFQUFlTSxLQUFLWSxXQUFXLENBQUVDLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQW5CckVaOzs7Ozs7Ozs7Ozs7Ozs7O2tDQTJCekIsOERBQUNyQixvRUFBYUE7d0JBQUNrQyxNQUFNO3dCQUFvQkMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25FO0dBdkR3QmpDOztRQU1MSixrREFBU0E7OztLQU5KSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy93ZWJTdG9yaWVzL2luZGV4LmpzPzBjMTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuLy8gaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuLy8gaW1wb3J0IEFkNzI4eDkwIGZyb20gXCJAL2NvbXBvbmVudHMvYWRzL0FkNzI4eDkwXCI7XHJcbi8vIGltcG9ydCBBZDk3MHgyNTAgZnJvbSBcIkAvY29tcG9uZW50cy9hZHMvQWQ5NzB4MjUwXCI7XHJcbi8vIGltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZVwiO1xyXG4vLyBpbXBvcnQgQWQzMDB4NjAwIGZyb20gXCJAL2NvbXBvbmVudHMvYWRzL0FkMzAweDYwMFwiO1xyXG5cclxuLy8gaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFZpZXdBbGxCdXR0b24gZnJvbSBcIi4uL3ZpZXdBbGxCdXR0b24vVmlld0FsbEJ1dHRvblwiO1xyXG5pbXBvcnQgRmVhdHVyZWRJbWFnZSBmcm9tIFwiLi4vY29tbW9uL0ZlYXR1cmVkSW1hZ2VcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWJzdG9yaWVzKCkge1xyXG5cclxuICAgIC8vIGNvbnN0IFt3ZWJTdG9yaWVzLCBzZXRXZWJTdG9yaWVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFt0b3RhbFBhZ2VzLCBzZXRUb3RhbFBhZ2VzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHdlYnN0b3JpZXM9W1xyXG4gICAgICAgIHt0aXRsZTpcInRpdGxlXCIsXHJcbiAgICAgICAgbWFpblRpdGxlfVxyXG5cclxuICAgIF1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm15LTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF93cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPldlYiBTdG9yaWVzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RvcnlMaXN0IG1hcmdpbkJvdHRvbTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMucHJvcHMud2Vic3RvcmllcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnByb3BzLndlYnN0b3JpZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYnN0b3J5Q2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Avd2ViLXN0b3JpZXMvJHtpdGVtLnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0/LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZWRJbWFnZSB3aWR0aD17MjUwfSBoZWlnaHQ9ezI1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNyYz17aXRlbT8uc2xpZGVzWzBdLmltYWdlMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NzZXRzL2ltZy9taXRzdWJpc2hpLW91dGxhbmRlci1jYXIucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbT8udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbT8udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmc9e3NldElzTG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeURldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImhlYWRpbmcgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0/Lm1haW5UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5DYXJwcmljZXMgfCAgeyhpdGVtLnB1Ymxpc2hlZEF0KS5mb3JtYXQoXCJNTU0gREQsIFlZWVlcIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QWxsQnV0dG9uIHRleHQ9e1wiVmlldyBBbGwgU3Rvcmllc1wifSBsaW5rPXtcIi93ZWItc3Rvcmllc1wifSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkxpbmsiLCJWaWV3QWxsQnV0dG9uIiwiRmVhdHVyZWRJbWFnZSIsIldlYnN0b3JpZXMiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwidG90YWxQYWdlcyIsInNldFRvdGFsUGFnZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJyb3V0ZXIiLCJ3ZWJzdG9yaWVzIiwidGl0bGUiLCJtYWluVGl0bGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJ1bCIsInByb3BzIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiLCJocmVmIiwic2x1ZyIsInRhcmdldCIsInJlbCIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYWx0IiwiaDMiLCJwdWJsaXNoZWRBdCIsImZvcm1hdCIsInRleHQiLCJsaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/webStories/index.js\n"));

/***/ })

});
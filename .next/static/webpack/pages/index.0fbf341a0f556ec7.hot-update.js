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

/***/ "./src/components/ads/Ad728x90.js":
/*!****************************************!*\
  !*** ./src/components/ads/Ad728x90.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Ad728x90 = (props)=>{\n    var _props;\n    _s();\n    const shouldDisplayAds = process.env.NEXT_PUBLIC_MODE === \"production\";\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        try {\n            window.adsbygoogle = window.adsbygoogle || [];\n            window.adsbygoogle.push({});\n        } catch (error) {\n            console.error(\"Error pushing ads:\", error);\n        }\n    }, [\n        router.query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"Ad728x90 \",\n        children: shouldDisplayAds && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ins\", {\n            className: \"adsbygoogle responsive_leaderboard_horizontal \",\n            style: {\n                display: \"block\"\n            },\n            \"data-ad-client\": \"ca-pub-4857144107996534\",\n            \"data-ad-slot\": (_props = props) === null || _props === void 0 ? void 0 : _props.dataAdSlot\n        }, void 0, false, {\n            fileName: \"D:\\\\SlipStream marketing agency project\\\\car-prices-new-templates\\\\main-files\\\\Drivco-LTR\\\\src\\\\components\\\\ads\\\\Ad728x90.js\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\SlipStream marketing agency project\\\\car-prices-new-templates\\\\main-files\\\\Drivco-LTR\\\\src\\\\components\\\\ads\\\\Ad728x90.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Ad728x90, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Ad728x90;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ad728x90);\nvar _c;\n$RefreshReg$(_c, \"Ad728x90\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hZHMvQWQ3Mjh4OTAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrQztBQUNNO0FBRXhDLE1BQU1FLFdBQVcsQ0FBQ0M7UUFzQk1BOztJQXJCdEIsTUFBTUMsbUJBQW1CQyxPQUFPQSxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQixLQUFLO0lBRTFELE1BQU1DLFNBQVNQLHNEQUFTQTtJQUV4QkQsZ0RBQVNBLENBQUM7UUFDUixJQUFJO1lBQ0ZTLE9BQU9DLFdBQVcsR0FBR0QsT0FBT0MsV0FBVyxJQUFJLEVBQUU7WUFDN0NELE9BQU9DLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7UUFDM0IsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxzQkFBc0JBO1FBQ3RDO0lBQ0YsR0FBRztRQUFDSixPQUFPTSxLQUFLO0tBQUM7SUFHakIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1paLGtDQUNDLDhEQUFDYTtZQUNDRCxXQUFVO1lBQ1ZFLE9BQU87Z0JBQUVDLFNBQVM7WUFBUTtZQUMxQkMsa0JBQWU7WUFDZkMsY0FBWSxHQUFFbEIsU0FBQUEsbUJBQUFBLDZCQUFBQSxPQUFPbUIsVUFBVTs7Ozs7Ozs7Ozs7QUFNekM7R0E1Qk1wQjs7UUFHV0Qsa0RBQVNBOzs7S0FIcEJDO0FBOEJOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Fkcy9BZDcyOHg5MC5qcz84OWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEFkNzI4eDkwID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgc2hvdWxkRGlzcGxheUFkcyA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PREUgPT09IFwicHJvZHVjdGlvblwiO1xyXG4gIFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgd2luZG93LmFkc2J5Z29vZ2xlID0gd2luZG93LmFkc2J5Z29vZ2xlIHx8IFtdO1xyXG4gICAgICB3aW5kb3cuYWRzYnlnb29nbGUucHVzaCh7fSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcHVzaGluZyBhZHM6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnF1ZXJ5XSk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBZDcyOHg5MCBcIj5cclxuICAgICAge3Nob3VsZERpc3BsYXlBZHMgJiYgKFxyXG4gICAgICAgIDxpbnNcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFkc2J5Z29vZ2xlIHJlc3BvbnNpdmVfbGVhZGVyYm9hcmRfaG9yaXpvbnRhbCBcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19XHJcbiAgICAgICAgICBkYXRhLWFkLWNsaWVudD1cImNhLXB1Yi00ODU3MTQ0MTA3OTk2NTM0XCJcclxuICAgICAgICAgIGRhdGEtYWQtc2xvdD17cHJvcHM/LmRhdGFBZFNsb3R9XHJcbiAgICAgICAgPjwvaW5zPlxyXG4gICAgICApfVxyXG4gICAgICB7LyogPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHAtM1wiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOidyb3N5YnJvd24nfX0+YWQgaGVyZTwvaDI+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkNzI4eDkwO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiQWQ3Mjh4OTAiLCJwcm9wcyIsInNob3VsZERpc3BsYXlBZHMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTU9ERSIsInJvdXRlciIsIndpbmRvdyIsImFkc2J5Z29vZ2xlIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsInF1ZXJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5zIiwic3R5bGUiLCJkaXNwbGF5IiwiZGF0YS1hZC1jbGllbnQiLCJkYXRhLWFkLXNsb3QiLCJkYXRhQWRTbG90Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ads/Ad728x90.js\n"));

/***/ })

});
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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst Home = ()=>{\n    var _s = $RefreshSig$();\n    const onConnect = async ()=>{\n        _s();\n        const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n        const [buttonText, setButtonText] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Connect your wallet\");\n        if (!window.mina) {\n            alert(\"No provider was found, please add the Auro Wallet extension\");\n        } else {\n            setButtonText(\"Onboarding in progress\");\n            let data = await window.mina.requestAccounts().catch((err)=>err);\n            if (data.message) {\n                setButtonText(data.message);\n            } else {\n                let approveAccount = data;\n                setAccount(approveAccount);\n                console.log(JSON.stringify(approveAccount));\n            }\n        }\n    };\n    _s(onConnect, \"dClJNeriFxQSTirWqcdixRXS8yM=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Mina Guardian Wallet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: containerStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                            children: \"Welcome to Mina Guardian Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            style: connectButtonStyle,\n                            onClick: onConnect,\n                            children: \"Connect your wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Home;\nconst containerStyle = {\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n};\nconst connectButtonStyle = {\n    padding: \"10px\",\n    borderRadius: \"30px\",\n    fontSize: \"1.5rem\",\n    marginTop: \"50px\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNFO0FBQ2dCO0FBRWQ7QUFFakMsTUFBTUksT0FBTyxJQUFNOztJQUNqQixNQUFNQyxZQUFZLFVBQVk7O1FBQzVCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUE7UUFDdEMsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDO1FBQzdDLElBQUksQ0FBQ08sT0FBT0MsSUFBSSxFQUFFO1lBQ2hCQyxNQUFNO1FBQ1IsT0FBTztZQUNMSCxjQUFjO1lBQ2QsSUFBSUksT0FBTyxNQUFNSCxPQUFPQyxJQUFJLENBQUNHLGVBQWUsR0FBR0MsS0FBSyxDQUFDLENBQUNDLE1BQWFBO1lBQ25FLElBQUlILEtBQUtJLE9BQU8sRUFBRTtnQkFDaEJSLGNBQWNJLEtBQUtJLE9BQU87WUFDNUIsT0FBTztnQkFDTCxJQUFJQyxpQkFBaUJMO2dCQUNyQk4sV0FBV1c7Z0JBQ1hDLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDSjtZQUM3QixDQUFDO1FBQ0gsQ0FBQztJQUNIO09BaEJNYjtJQWtCTixxQkFDRSw4REFBQ2tCO1FBQUlDLFdBQVd0QiwwRUFBZ0I7OzBCQUM5Qiw4REFBQ0Ysa0RBQUlBOztrQ0FDSCw4REFBQzBCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ0M7Z0JBQUtULFdBQVd0QixxRUFBVzswQkFDMUIsNEVBQUNxQjtvQkFBSVcsT0FBT0M7O3NDQUNWLDhEQUFDQzs0QkFBR1osV0FBV3RCLHNFQUFZO3NDQUFFOzs7Ozs7c0NBQzdCLDhEQUFDbUM7NEJBQU9ILE9BQU9JOzRCQUFvQkMsU0FBU2xDO3NDQUFXOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNM0QsOERBQUNtQztnQkFBT2hCLFdBQVd0Qix1RUFBYTswQkFDOUIsNEVBQUN1QztvQkFDQ1QsTUFBSztvQkFDTFUsUUFBTztvQkFDUFgsS0FBSTs7d0JBQ0w7d0JBQ1k7c0NBQ1gsOERBQUNZOzRCQUFLbkIsV0FBV3RCLHFFQUFXO3NDQUMxQiw0RUFBQ0QsbURBQUtBO2dDQUFDNEMsS0FBSTtnQ0FBY0MsS0FBSTtnQ0FBY0MsT0FBTztnQ0FBSUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0xRTtLQWxETTVDO0FBb0ROLE1BQU0rQixpQkFBNkI7SUFDakNjLFNBQVM7SUFDVEMsZUFBZTtJQUNmQyxZQUFZO0lBQ1pDLGdCQUFnQjtBQUNsQjtBQUVBLE1BQU1kLHFCQUFpQztJQUNyQ2UsU0FBUztJQUNUQyxjQUFjO0lBQ2RDLFVBQVU7SUFDVkMsV0FBVztBQUNiO0FBRUEsK0RBQWVwRCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgUHJvcGVydGllcyB9IGZyb20gXCJjc3N0eXBlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBvbkNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbYnV0dG9uVGV4dCwgc2V0QnV0dG9uVGV4dF0gPSB1c2VTdGF0ZShcIkNvbm5lY3QgeW91ciB3YWxsZXRcIik7XG4gICAgaWYgKCF3aW5kb3cubWluYSkge1xuICAgICAgYWxlcnQoXCJObyBwcm92aWRlciB3YXMgZm91bmQsIHBsZWFzZSBhZGQgdGhlIEF1cm8gV2FsbGV0IGV4dGVuc2lvblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QnV0dG9uVGV4dChcIk9uYm9hcmRpbmcgaW4gcHJvZ3Jlc3NcIik7XG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IHdpbmRvdy5taW5hLnJlcXVlc3RBY2NvdW50cygpLmNhdGNoKChlcnI6IGFueSkgPT4gZXJyKTtcbiAgICAgIGlmIChkYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgc2V0QnV0dG9uVGV4dChkYXRhLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGFwcHJvdmVBY2NvdW50ID0gZGF0YTtcbiAgICAgICAgc2V0QWNjb3VudChhcHByb3ZlQWNjb3VudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGFwcHJvdmVBY2NvdW50KSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NaW5hIEd1YXJkaWFuIFdhbGxldDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+V2VsY29tZSB0byBNaW5hIEd1YXJkaWFuIFdhbGxldDwvaDE+XG4gICAgICAgICAgPGJ1dHRvbiBzdHlsZT17Y29ubmVjdEJ1dHRvblN0eWxlfSBvbkNsaWNrPXtvbkNvbm5lY3R9PlxuICAgICAgICAgICAgQ29ubmVjdCB5b3VyIHdhbGxldFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5e1wiIFwifVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiB3aWR0aD17NzJ9IGhlaWdodD17MTZ9IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGNvbnRhaW5lclN0eWxlOiBQcm9wZXJ0aWVzID0ge1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG59O1xuXG5jb25zdCBjb25uZWN0QnV0dG9uU3R5bGU6IFByb3BlcnRpZXMgPSB7XG4gIHBhZGRpbmc6IFwiMTBweFwiLFxuICBib3JkZXJSYWRpdXM6IFwiMzBweFwiLFxuICBmb250U2l6ZTogXCIxLjVyZW1cIixcbiAgbWFyZ2luVG9wOiBcIjUwcHhcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwidXNlU3RhdGUiLCJIb21lIiwib25Db25uZWN0IiwiYWNjb3VudCIsInNldEFjY291bnQiLCJidXR0b25UZXh0Iiwic2V0QnV0dG9uVGV4dCIsIndpbmRvdyIsIm1pbmEiLCJhbGVydCIsImRhdGEiLCJyZXF1ZXN0QWNjb3VudHMiLCJjYXRjaCIsImVyciIsIm1lc3NhZ2UiLCJhcHByb3ZlQWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJzdHlsZSIsImNvbnRhaW5lclN0eWxlIiwiaDEiLCJidXR0b24iLCJjb25uZWN0QnV0dG9uU3R5bGUiLCJvbkNsaWNrIiwiZm9vdGVyIiwiYSIsInRhcmdldCIsInNwYW4iLCJsb2dvIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsIm1hcmdpblRvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
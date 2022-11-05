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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst Home = ()=>{\n    var _s = $RefreshSig$();\n    const onConnect = async ()=>{\n        _s();\n        const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n        const [buttonText, setButtonText] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Connect your wallet\");\n        if (!window.mina) {\n            alert(\"No provider was found, please add the Auro Wallet extension\");\n        } else {\n            setButtonText(\"Onboarding in progress\");\n            let data = await window.mina.requestAccounts().catch((err)=>err);\n            if (data.message) {\n                setButtonText(data.message);\n            } else {\n                let approveAccount = data;\n                setAccount(approveAccount);\n                console.log(JSON.stringify(approveAccount));\n            }\n        }\n    };\n    _s(onConnect, \"dClJNeriFxQSTirWqcdixRXS8yM=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Mina Guardian Wallet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: containerStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                            children: \"Welcome to Mina Guardian Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            style: connectButtonStyle,\n                            children: \"Connect your wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Home;\nconst containerStyle = {\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n};\nconst connectButtonStyle = {\n    padding: \"10px\",\n    borderRadius: \"30px\",\n    fontSize: \"1.5rem\",\n    marginTop: \"50px\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNFO0FBQ2dCO0FBRWQ7QUFFakMsTUFBTUksT0FBTyxJQUFNOztJQUNqQixNQUFNQyxZQUFZLFVBQVk7O1FBQzVCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUE7UUFDdEMsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDO1FBQzdDLElBQUksQ0FBQ08sT0FBT0MsSUFBSSxFQUFFO1lBQ2hCQyxNQUFNO1FBQ1IsT0FBTztZQUNMSCxjQUFjO1lBQ2QsSUFBSUksT0FBTyxNQUFNSCxPQUFPQyxJQUFJLENBQUNHLGVBQWUsR0FBR0MsS0FBSyxDQUFDLENBQUNDLE1BQWFBO1lBQ25FLElBQUlILEtBQUtJLE9BQU8sRUFBRTtnQkFDaEJSLGNBQWNJLEtBQUtJLE9BQU87WUFDNUIsT0FBTztnQkFDTCxJQUFJQyxpQkFBaUJMO2dCQUNyQk4sV0FBV1c7Z0JBQ1hDLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDSjtZQUM3QixDQUFDO1FBQ0gsQ0FBQztJQUNIO09BaEJNYjtJQWtCTixxQkFDRSw4REFBQ2tCO1FBQUlDLFdBQVd0QiwwRUFBZ0I7OzBCQUM5Qiw4REFBQ0Ysa0RBQUlBOztrQ0FDSCw4REFBQzBCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ0M7Z0JBQUtULFdBQVd0QixxRUFBVzswQkFDMUIsNEVBQUNxQjtvQkFBSVcsT0FBT0M7O3NDQUNWLDhEQUFDQzs0QkFBR1osV0FBV3RCLHNFQUFZO3NDQUFFOzs7Ozs7c0NBQzdCLDhEQUFDbUM7NEJBQU9ILE9BQU9JO3NDQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXZDLDhEQUFDQztnQkFBT2YsV0FBV3RCLHVFQUFhOzBCQUM5Qiw0RUFBQ3NDO29CQUNDUixNQUFLO29CQUNMUyxRQUFPO29CQUNQVixLQUFJOzt3QkFDTDt3QkFDWTtzQ0FDWCw4REFBQ1c7NEJBQUtsQixXQUFXdEIscUVBQVc7c0NBQzFCLDRFQUFDRCxtREFBS0E7Z0NBQUMyQyxLQUFJO2dDQUFjQyxLQUFJO2dDQUFjQyxPQUFPO2dDQUFJQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFFO0tBaERNM0M7QUFrRE4sTUFBTStCLGlCQUE2QjtJQUNqQ2EsU0FBUztJQUNUQyxlQUFlO0lBQ2ZDLFlBQVk7SUFDWkMsZ0JBQWdCO0FBQ2xCO0FBRUEsTUFBTWIscUJBQWlDO0lBQ3JDYyxTQUFTO0lBQ1RDLGNBQWM7SUFDZEMsVUFBVTtJQUNWQyxXQUFXO0FBQ2I7QUFFQSwrREFBZW5ELElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBQcm9wZXJ0aWVzIH0gZnJvbSBcImNzc3R5cGVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IG9uQ29ubmVjdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtidXR0b25UZXh0LCBzZXRCdXR0b25UZXh0XSA9IHVzZVN0YXRlKFwiQ29ubmVjdCB5b3VyIHdhbGxldFwiKTtcbiAgICBpZiAoIXdpbmRvdy5taW5hKSB7XG4gICAgICBhbGVydChcIk5vIHByb3ZpZGVyIHdhcyBmb3VuZCwgcGxlYXNlIGFkZCB0aGUgQXVybyBXYWxsZXQgZXh0ZW5zaW9uXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRCdXR0b25UZXh0KFwiT25ib2FyZGluZyBpbiBwcm9ncmVzc1wiKTtcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgd2luZG93Lm1pbmEucmVxdWVzdEFjY291bnRzKCkuY2F0Y2goKGVycjogYW55KSA9PiBlcnIpO1xuICAgICAgaWYgKGRhdGEubWVzc2FnZSkge1xuICAgICAgICBzZXRCdXR0b25UZXh0KGRhdGEubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgYXBwcm92ZUFjY291bnQgPSBkYXRhO1xuICAgICAgICBzZXRBY2NvdW50KGFwcHJvdmVBY2NvdW50KTtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoYXBwcm92ZUFjY291bnQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1pbmEgR3VhcmRpYW4gV2FsbGV0PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5XZWxjb21lIHRvIE1pbmEgR3VhcmRpYW4gV2FsbGV0PC9oMT5cbiAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtjb25uZWN0QnV0dG9uU3R5bGV9PkNvbm5lY3QgeW91ciB3YWxsZXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUG93ZXJlZCBieXtcIiBcIn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgd2lkdGg9ezcyfSBoZWlnaHQ9ezE2fSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBjb250YWluZXJTdHlsZTogUHJvcGVydGllcyA9IHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxufTtcblxuY29uc3QgY29ubmVjdEJ1dHRvblN0eWxlOiBQcm9wZXJ0aWVzID0ge1xuICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIixcbiAgZm9udFNpemU6IFwiMS41cmVtXCIsXG4gIG1hcmdpblRvcDogXCI1MHB4XCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsInVzZVN0YXRlIiwiSG9tZSIsIm9uQ29ubmVjdCIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiYnV0dG9uVGV4dCIsInNldEJ1dHRvblRleHQiLCJ3aW5kb3ciLCJtaW5hIiwiYWxlcnQiLCJkYXRhIiwicmVxdWVzdEFjY291bnRzIiwiY2F0Y2giLCJlcnIiLCJtZXNzYWdlIiwiYXBwcm92ZUFjY291bnQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwic3R5bGUiLCJjb250YWluZXJTdHlsZSIsImgxIiwiYnV0dG9uIiwiY29ubmVjdEJ1dHRvblN0eWxlIiwiZm9vdGVyIiwiYSIsInRhcmdldCIsInNwYW4iLCJsb2dvIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsIm1hcmdpblRvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
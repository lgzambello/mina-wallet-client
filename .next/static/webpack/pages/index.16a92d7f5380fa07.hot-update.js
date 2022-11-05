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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_MinaClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/MinaClient */ \"./api/MinaClient.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    var ref;\n    _s();\n    const minaClient = new _api_MinaClient__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    const [publicKey, setPublicKey] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [accountDetails, setAccountDetails] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [buttonText, setButtonText] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Connect your wallet\");\n    const onConnect = async ()=>{\n        if (!window.mina) {\n            alert(\"No provider was found, please add the Auro Wallet extension\");\n        } else {\n            setButtonText(\"Onboarding in progress\");\n            let data = await window.mina.requestAccounts().catch((err)=>err);\n            console.log(JSON.stringify(data));\n            if (data.message) {\n                setButtonText(data.message);\n            } else {\n                let publicKeys = data;\n                setPublicKey(publicKeys);\n                console.log(JSON.stringify(publicKey));\n                getAccountDetails(publicKeys[0]);\n            }\n        }\n    };\n    const getAccountDetails = async (publicKey)=>{\n        const resp = await minaClient.getAccountDetails(publicKey);\n        if (resp.status == 200) {\n            setAccountDetails(resp.data);\n            console.log(JSON.stringify(resp.data));\n        } else {\n            alert(\"Error retrieving account details for public key: \" + publicKey);\n        }\n    };\n    console.log(\"account details\");\n    console.log(accountDetails);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Mina Guardian Wallet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: containerStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                            children: \"Welcome to Mina Guardian Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        accountDetails === undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            style: connectButtonStyle,\n                            onClick: onConnect,\n                            children: buttonText\n                        }, void 0, false, {\n                            fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: walletContainerStyle,\n                            children: \"Balance: \" + ((ref = accountDetails.balance) === null || ref === void 0 ? void 0 : ref.total)\n                        }, void 0, false, {\n                            fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"QR/5s4uFcWM22u6++Mi+UH5mVSo=\");\n_c = Home;\nconst walletContainerStyle = {};\nconst containerStyle = {\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n};\nconst connectButtonStyle = {\n    padding: \"10px\",\n    borderRadius: \"30px\",\n    fontSize: \"1.5rem\",\n    marginTop: \"50px\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCO0FBQ2xCO0FBRUEsTUFBTWpCLHFCQUFpQztJQUNyQ2tCLFNBQVM7SUFDVEMsY0FBYztJQUNkQyxVQUFVO0lBQ1ZDLFdBQVc7QUFDYjtBQUVBLCtEQUFlOUQsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IFByb3BlcnRpZXMgfSBmcm9tIFwiY3NzdHlwZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNaW5hQ2xpZW50IGZyb20gXCIuLi9hcGkvTWluYUNsaWVudFwiO1xuaW1wb3J0IEFjY291bnREZXRhaWxzIGZyb20gXCIuLi90eXBlcy9BY2NvdW50RGV0YWlsc1wiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBtaW5hQ2xpZW50ID0gbmV3IE1pbmFDbGllbnQoKTtcbiAgY29uc3QgW3B1YmxpY0tleSwgc2V0UHVibGljS2V5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFthY2NvdW50RGV0YWlscywgc2V0QWNjb3VudERldGFpbHNdID0gdXNlU3RhdGU8QWNjb3VudERldGFpbHM+KCk7XG4gIGNvbnN0IFtidXR0b25UZXh0LCBzZXRCdXR0b25UZXh0XSA9IHVzZVN0YXRlKFwiQ29ubmVjdCB5b3VyIHdhbGxldFwiKTtcbiAgY29uc3Qgb25Db25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghd2luZG93Lm1pbmEpIHtcbiAgICAgIGFsZXJ0KFwiTm8gcHJvdmlkZXIgd2FzIGZvdW5kLCBwbGVhc2UgYWRkIHRoZSBBdXJvIFdhbGxldCBleHRlbnNpb25cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEJ1dHRvblRleHQoXCJPbmJvYXJkaW5nIGluIHByb2dyZXNzXCIpO1xuICAgICAgbGV0IGRhdGEgPSBhd2FpdCB3aW5kb3cubWluYS5yZXF1ZXN0QWNjb3VudHMoKS5jYXRjaCgoZXJyOiBhbnkpID0+IGVycik7XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICBpZiAoZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgIHNldEJ1dHRvblRleHQoZGF0YS5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwdWJsaWNLZXlzID0gZGF0YTtcbiAgICAgICAgc2V0UHVibGljS2V5KHB1YmxpY0tleXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwdWJsaWNLZXkpKTtcbiAgICAgICAgZ2V0QWNjb3VudERldGFpbHMocHVibGljS2V5c1swXSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldEFjY291bnREZXRhaWxzID0gYXN5bmMgKHB1YmxpY0tleTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IG1pbmFDbGllbnQuZ2V0QWNjb3VudERldGFpbHMocHVibGljS2V5KTtcbiAgICBpZiAocmVzcC5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICBzZXRBY2NvdW50RGV0YWlscyhyZXNwLmRhdGEpO1xuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcC5kYXRhKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwiRXJyb3IgcmV0cmlldmluZyBhY2NvdW50IGRldGFpbHMgZm9yIHB1YmxpYyBrZXk6IFwiICsgcHVibGljS2V5KTtcbiAgICB9XG4gIH07XG4gIGNvbnNvbGUubG9nKFwiYWNjb3VudCBkZXRhaWxzXCIpO1xuICBjb25zb2xlLmxvZyhhY2NvdW50RGV0YWlscyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NaW5hIEd1YXJkaWFuIFdhbGxldDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+V2VsY29tZSB0byBNaW5hIEd1YXJkaWFuIFdhbGxldDwvaDE+XG4gICAgICAgICAge2FjY291bnREZXRhaWxzID09PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtjb25uZWN0QnV0dG9uU3R5bGV9IG9uQ2xpY2s9e29uQ29ubmVjdH0+XG4gICAgICAgICAgICAgIHtidXR0b25UZXh0fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3dhbGxldENvbnRhaW5lclN0eWxlfT5cbiAgICAgICAgICAgICAge1wiQmFsYW5jZTogXCIgKyBhY2NvdW50RGV0YWlscy5iYWxhbmNlPy50b3RhbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7XCIgXCJ9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIHdpZHRoPXs3Mn0gaGVpZ2h0PXsxNn0gLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3Qgd2FsbGV0Q29udGFpbmVyU3R5bGU6IFByb3BlcnRpZXMgPSB7fTtcblxuY29uc3QgY29udGFpbmVyU3R5bGU6IFByb3BlcnRpZXMgPSB7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbn07XG5cbmNvbnN0IGNvbm5lY3RCdXR0b25TdHlsZTogUHJvcGVydGllcyA9IHtcbiAgcGFkZGluZzogXCIxMHB4XCIsXG4gIGJvcmRlclJhZGl1czogXCIzMHB4XCIsXG4gIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxuICBtYXJnaW5Ub3A6IFwiNTBweFwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsIk1pbmFDbGllbnQiLCJIb21lIiwiYWNjb3VudERldGFpbHMiLCJtaW5hQ2xpZW50IiwicHVibGljS2V5Iiwic2V0UHVibGljS2V5Iiwic2V0QWNjb3VudERldGFpbHMiLCJidXR0b25UZXh0Iiwic2V0QnV0dG9uVGV4dCIsIm9uQ29ubmVjdCIsIndpbmRvdyIsIm1pbmEiLCJhbGVydCIsImRhdGEiLCJyZXF1ZXN0QWNjb3VudHMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsInB1YmxpY0tleXMiLCJnZXRBY2NvdW50RGV0YWlscyIsInJlc3AiLCJzdGF0dXMiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsInN0eWxlIiwiY29udGFpbmVyU3R5bGUiLCJoMSIsInVuZGVmaW5lZCIsImJ1dHRvbiIsImNvbm5lY3RCdXR0b25TdHlsZSIsIm9uQ2xpY2siLCJ3YWxsZXRDb250YWluZXJTdHlsZSIsImJhbGFuY2UiLCJ0b3RhbCIsImZvb3RlciIsImEiLCJ0YXJnZXQiLCJzcGFuIiwibG9nbyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
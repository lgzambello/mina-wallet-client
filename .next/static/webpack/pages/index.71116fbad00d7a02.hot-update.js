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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_minaClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/minaClient */ \"./api/minaClient.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const minaClient = new _api_minaClient__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    const [publicKey, setPublicKey] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [accountDetails, setAccountDetails] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [buttonText, setButtonText] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Connect your wallet\");\n    const onConnect = async ()=>{\n        if (!window.mina) {\n            alert(\"No provider was found, please add the Auro Wallet extension\");\n        } else {\n            setButtonText(\"Onboarding in progress\");\n            let data = await window.mina.requestAccounts().catch((err)=>err);\n            console.log(JSON.stringify(data));\n            if (data.message) {\n                setButtonText(data.message);\n            } else {\n                let publicKeys = data;\n                setPublicKey(publicKeys);\n                console.log(JSON.stringify(publicKey));\n                getAccountDetails(publicKeys[0]);\n            }\n        }\n    };\n    const getAccountDetails = async (publicKey)=>{\n        const resp = await minaClient.getAccountDetails(publicKey);\n        if (resp.status == 200) {\n            setAccountDetails(resp.data);\n            console.log(JSON.stringify(resp.data));\n        } else {\n            alert(\"Error retrieving account details for public key: \" + publicKey);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Mina Guardian Wallet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: containerStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                            children: \"Welcome to Mina Guardian Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        accountDetails === undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            style: connectButtonStyle,\n                            onClick: onConnect,\n                            children: buttonText\n                        }, void 0, false, {\n                            fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gwynnzambello/hackathon/mina-wallet-client/pages/index.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"QR/5s4uFcWM22u6++Mi+UH5mVSo=\");\n_c = Home;\nconst containerStyle = {\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n};\nconst connectButtonStyle = {\n    padding: \"10px\",\n    borderRadius: \"30px\",\n    fontSize: \"1.5rem\",\n    marginTop: \"50px\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ0U7QUFDZ0I7QUFFZDtBQUNVO0FBRTNDLE1BQU1LLE9BQU8sSUFBTTs7SUFDakIsTUFBTUMsYUFBYSxJQUFJRix1REFBVUE7SUFDakMsTUFBTSxDQUFDRyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQTtJQUMxQyxNQUFNLENBQUNNLGdCQUFnQkMsa0JBQWtCLEdBQUdQLCtDQUFRQTtJQUNwRCxNQUFNLENBQUNRLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUM7SUFDN0MsTUFBTVUsWUFBWSxVQUFZO1FBQzVCLElBQUksQ0FBQ0MsT0FBT0MsSUFBSSxFQUFFO1lBQ2hCQyxNQUFNO1FBQ1IsT0FBTztZQUNMSixjQUFjO1lBQ2QsSUFBSUssT0FBTyxNQUFNSCxPQUFPQyxJQUFJLENBQUNHLGVBQWUsR0FBR0MsS0FBSyxDQUFDLENBQUNDLE1BQWFBO1lBQ25FQyxRQUFRQyxHQUFHLENBQUNDLEtBQUtDLFNBQVMsQ0FBQ1A7WUFDM0IsSUFBSUEsS0FBS1EsT0FBTyxFQUFFO2dCQUNoQmIsY0FBY0ssS0FBS1EsT0FBTztZQUM1QixPQUFPO2dCQUNMLElBQUlDLGFBQWFUO2dCQUNqQlQsYUFBYWtCO2dCQUNiTCxRQUFRQyxHQUFHLENBQUNDLEtBQUtDLFNBQVMsQ0FBQ2pCO2dCQUMzQm9CLGtCQUFrQkQsVUFBVSxDQUFDLEVBQUU7WUFDakMsQ0FBQztRQUNILENBQUM7SUFDSDtJQUVBLE1BQU1DLG9CQUFvQixPQUFPcEIsWUFBc0I7UUFDckQsTUFBTXFCLE9BQU8sTUFBTXRCLFdBQVdxQixpQkFBaUIsQ0FBQ3BCO1FBQ2hELElBQUlxQixLQUFLQyxNQUFNLElBQUksS0FBSztZQUN0Qm5CLGtCQUFrQmtCLEtBQUtYLElBQUk7WUFDM0JJLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDSSxLQUFLWCxJQUFJO1FBQ3RDLE9BQU87WUFDTEQsTUFBTSxzREFBc0RUO1FBQzlELENBQUM7SUFDSDtJQUVBLHFCQUNFLDhEQUFDdUI7UUFBSUMsV0FBVzdCLDBFQUFnQjs7MEJBQzlCLDhEQUFDRixrREFBSUE7O2tDQUNILDhEQUFDaUM7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDQztnQkFBS1QsV0FBVzdCLHFFQUFXOzBCQUMxQiw0RUFBQzRCO29CQUFJVyxPQUFPQzs7c0NBQ1YsOERBQUNDOzRCQUFHWixXQUFXN0Isc0VBQVk7c0NBQUU7Ozs7Ozt3QkFDNUJPLG1CQUFtQm1DLDJCQUNsQiw4REFBQ0M7NEJBQU9KLE9BQU9LOzRCQUFvQkMsU0FBU2xDO3NDQUN6Q0Y7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1ULDhEQUFDcUM7Z0JBQU9qQixXQUFXN0IsdUVBQWE7MEJBQzlCLDRFQUFDK0M7b0JBQ0NWLE1BQUs7b0JBQ0xXLFFBQU87b0JBQ1BaLEtBQUk7O3dCQUNMO3dCQUNZO3NDQUNYLDhEQUFDYTs0QkFBS3BCLFdBQVc3QixxRUFBVztzQ0FDMUIsNEVBQUNELG1EQUFLQTtnQ0FBQ29ELEtBQUk7Z0NBQWNDLEtBQUk7Z0NBQWNDLE9BQU87Z0NBQUlDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUU7R0FsRU1uRDtLQUFBQTtBQW9FTixNQUFNcUMsaUJBQTZCO0lBQ2pDZSxTQUFTO0lBQ1RDLGVBQWU7SUFDZkMsWUFBWTtJQUNaQyxnQkFBZ0I7QUFDbEI7QUFFQSxNQUFNZCxxQkFBaUM7SUFDckNlLFNBQVM7SUFDVEMsY0FBYztJQUNkQyxVQUFVO0lBQ1ZDLFdBQVc7QUFDYjtBQUVBLCtEQUFlM0QsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IFByb3BlcnRpZXMgfSBmcm9tIFwiY3NzdHlwZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNaW5hQ2xpZW50IGZyb20gXCIuLi9hcGkvbWluYUNsaWVudFwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBtaW5hQ2xpZW50ID0gbmV3IE1pbmFDbGllbnQoKTtcbiAgY29uc3QgW3B1YmxpY0tleSwgc2V0UHVibGljS2V5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFthY2NvdW50RGV0YWlscywgc2V0QWNjb3VudERldGFpbHNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2J1dHRvblRleHQsIHNldEJ1dHRvblRleHRdID0gdXNlU3RhdGUoXCJDb25uZWN0IHlvdXIgd2FsbGV0XCIpO1xuICBjb25zdCBvbkNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCF3aW5kb3cubWluYSkge1xuICAgICAgYWxlcnQoXCJObyBwcm92aWRlciB3YXMgZm91bmQsIHBsZWFzZSBhZGQgdGhlIEF1cm8gV2FsbGV0IGV4dGVuc2lvblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QnV0dG9uVGV4dChcIk9uYm9hcmRpbmcgaW4gcHJvZ3Jlc3NcIik7XG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IHdpbmRvdy5taW5hLnJlcXVlc3RBY2NvdW50cygpLmNhdGNoKChlcnI6IGFueSkgPT4gZXJyKTtcbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgIGlmIChkYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgc2V0QnV0dG9uVGV4dChkYXRhLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHB1YmxpY0tleXMgPSBkYXRhO1xuICAgICAgICBzZXRQdWJsaWNLZXkocHVibGljS2V5cyk7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHB1YmxpY0tleSkpO1xuICAgICAgICBnZXRBY2NvdW50RGV0YWlscyhwdWJsaWNLZXlzWzBdKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0QWNjb3VudERldGFpbHMgPSBhc3luYyAocHVibGljS2V5OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgbWluYUNsaWVudC5nZXRBY2NvdW50RGV0YWlscyhwdWJsaWNLZXkpO1xuICAgIGlmIChyZXNwLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgIHNldEFjY291bnREZXRhaWxzKHJlc3AuZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwLmRhdGEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXCJFcnJvciByZXRyaWV2aW5nIGFjY291bnQgZGV0YWlscyBmb3IgcHVibGljIGtleTogXCIgKyBwdWJsaWNLZXkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TWluYSBHdWFyZGlhbiBXYWxsZXQ8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lclN0eWxlfT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PldlbGNvbWUgdG8gTWluYSBHdWFyZGlhbiBXYWxsZXQ8L2gxPlxuICAgICAgICAgIHthY2NvdW50RGV0YWlscyA9PT0gdW5kZWZpbmVkICYmIChcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e2Nvbm5lY3RCdXR0b25TdHlsZX0gb25DbGljaz17b25Db25uZWN0fT5cbiAgICAgICAgICAgICAge2J1dHRvblRleHR9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5e1wiIFwifVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiB3aWR0aD17NzJ9IGhlaWdodD17MTZ9IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGNvbnRhaW5lclN0eWxlOiBQcm9wZXJ0aWVzID0ge1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG59O1xuXG5jb25zdCBjb25uZWN0QnV0dG9uU3R5bGU6IFByb3BlcnRpZXMgPSB7XG4gIHBhZGRpbmc6IFwiMTBweFwiLFxuICBib3JkZXJSYWRpdXM6IFwiMzBweFwiLFxuICBmb250U2l6ZTogXCIxLjVyZW1cIixcbiAgbWFyZ2luVG9wOiBcIjUwcHhcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwidXNlU3RhdGUiLCJNaW5hQ2xpZW50IiwiSG9tZSIsIm1pbmFDbGllbnQiLCJwdWJsaWNLZXkiLCJzZXRQdWJsaWNLZXkiLCJhY2NvdW50RGV0YWlscyIsInNldEFjY291bnREZXRhaWxzIiwiYnV0dG9uVGV4dCIsInNldEJ1dHRvblRleHQiLCJvbkNvbm5lY3QiLCJ3aW5kb3ciLCJtaW5hIiwiYWxlcnQiLCJkYXRhIiwicmVxdWVzdEFjY291bnRzIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJwdWJsaWNLZXlzIiwiZ2V0QWNjb3VudERldGFpbHMiLCJyZXNwIiwic3RhdHVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJzdHlsZSIsImNvbnRhaW5lclN0eWxlIiwiaDEiLCJ1bmRlZmluZWQiLCJidXR0b24iLCJjb25uZWN0QnV0dG9uU3R5bGUiLCJvbkNsaWNrIiwiZm9vdGVyIiwiYSIsInRhcmdldCIsInNwYW4iLCJsb2dvIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsIm1hcmdpblRvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
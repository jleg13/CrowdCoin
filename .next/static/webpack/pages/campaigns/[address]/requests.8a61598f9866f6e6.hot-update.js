"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[address]/requests",{

/***/ "./pages/campaigns/[address]/requests/index.js":
/*!*****************************************************!*\
  !*** ./pages/campaigns/[address]/requests/index.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_getCampaignSummary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/getCampaignSummary */ \"./utils/getCampaignSummary.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_CampaignLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/CampaignLayout */ \"./components/CampaignLayout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar RequestsIndex = function(summary) {\n    var renderAddRequestButton = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n            href: \"/campaigns/\".concat(summary.address, \"/requests/new\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    floated: \"right\",\n                    content: \"Create Request\",\n                    icon: \"add circle\",\n                    primary: true\n                }, void 0, false, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, _this);\n    };\n    console.log(summary.name);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CampaignLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        name: summary.name,\n        description: summary.description,\n        statistics: {\n            \"Active Requests\": summary.requestCount,\n            \"Total Spent\": \"\".concat(summary.totalBalance - summary.currentBalance, \" ether\"),\n            \"Finalised Requests\": summary.finalisedRequestCount\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"Heading\",\n                children: \"Campaign Requests:\"\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                columns: \"equal\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Column, {\n                            width: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.Header, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.Row, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.HeaderCell, {\n                                                children: \"ID\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.HeaderCell, {\n                                                children: \"Description\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.HeaderCell, {\n                                                children: \"Amount (ether)\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 43,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.HeaderCell, {\n                                                children: \"Recipient\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.HeaderCell, {\n                                                children: \"Approval Count\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.HeaderCell, {\n                                                children: \"Approve\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.HeaderCell, {\n                                                children: \"Finalize\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Column, {\n                            children: renderAddRequestButton()\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_c = RequestsIndex;\nRequestsIndex.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(param) {\n        var query, address, summary;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    query = param.query;\n                    address = query.address;\n                    return [\n                        4,\n                        (0,_utils_getCampaignSummary__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(address)\n                    ];\n                case 1:\n                    summary = _state.sent();\n                    return [\n                        2,\n                        summary\n                    ];\n            }\n        });\n    });\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestsIndex);\nvar _c;\n$RefreshReg$(_c, \"RequestsIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdL3JlcXVlc3RzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUEwQjtBQUM0QztBQUNkO0FBQ1c7QUFDdEM7QUFDd0I7QUFFckQsSUFBTVEsYUFBYSxHQUFHLFNBQUNDLE9BQU8sRUFBSztJQUNqQyxJQUFNQyxzQkFBc0IsR0FBRyxXQUFNO1FBQ25DLHFCQUNFLDhEQUFDSixrREFBSTtZQUFDSyxJQUFJLEVBQUUsYUFBWSxDQUFrQixNQUFhLENBQTdCRixPQUFPLENBQUNHLE9BQU8sRUFBQyxlQUFhLENBQUM7c0JBQ3RELDRFQUFDQyxHQUFDOzBCQUNBLDRFQUFDWCxxREFBTTtvQkFDTFksT0FBTyxFQUFDLE9BQU87b0JBQ2ZDLE9BQU8sRUFBQyxnQkFBZ0I7b0JBQ3hCQyxJQUFJLEVBQUMsWUFBWTtvQkFDakJDLE9BQU87Ozs7O3lCQUNQOzs7OztxQkFDQTs7Ozs7aUJBQ0MsQ0FDUDtJQUNKLENBQUM7SUFDREMsT0FBTyxDQUFDQyxHQUFHLENBQUNWLE9BQU8sQ0FBQ1csSUFBSSxDQUFDLENBQUM7SUFDMUIscUJBQ0UsOERBQUNmLGtFQUFjO1FBQ2JlLElBQUksRUFBRVgsT0FBTyxDQUFDVyxJQUFJO1FBQ2xCQyxXQUFXLEVBQUVaLE9BQU8sQ0FBQ1ksV0FBVztRQUNoQ0MsVUFBVSxFQUFFO1lBQ1YsaUJBQWlCLEVBQUViLE9BQU8sQ0FBQ2MsWUFBWTtZQUN2QyxhQUFhLEVBQUUsRUFBQyxDQUFnRCxNQUFNLENBQXBEZCxPQUFPLENBQUNlLFlBQVksR0FBR2YsT0FBTyxDQUFDZ0IsY0FBYyxFQUFDLFFBQU0sQ0FBQztZQUN2RSxvQkFBb0IsRUFBRWhCLE9BQU8sQ0FBQ2lCLHFCQUFxQjtTQUNwRDs7MEJBRUQsOERBQUNDLElBQUU7Z0JBQUNDLFNBQVMsRUFBQyxTQUFTOzBCQUFDLG9CQUFrQjs7Ozs7cUJBQUs7MEJBQy9DLDhEQUFDekIsbURBQUk7Z0JBQUMwQixPQUFPLEVBQUMsT0FBTzswQkFDbkIsNEVBQUMxQix1REFBUTs7c0NBQ1AsOERBQUNBLDBEQUFXOzRCQUFDNkIsS0FBSyxFQUFFLEVBQUU7c0NBQ3BCLDRFQUFDNUIsb0RBQUs7MENBQ0osNEVBQUNBLDJEQUFZOzhDQUNYLDRFQUFDQSx3REFBUzs7MERBQ1IsOERBQUNBLCtEQUFnQjswREFBQyxJQUFFOzs7OztxREFBbUI7MERBQ3ZDLDhEQUFDQSwrREFBZ0I7MERBQUMsYUFBVzs7Ozs7cURBQW1COzBEQUNoRCw4REFBQ0EsK0RBQWdCOzBEQUFDLGdCQUFjOzs7OztxREFBbUI7MERBQ25ELDhEQUFDQSwrREFBZ0I7MERBQUMsV0FBUzs7Ozs7cURBQW1COzBEQUM5Qyw4REFBQ0EsK0RBQWdCOzBEQUFDLGdCQUFjOzs7OztxREFBbUI7MERBQ25ELDhEQUFDQSwrREFBZ0I7MERBQUMsU0FBTzs7Ozs7cURBQW1COzBEQUM1Qyw4REFBQ0EsK0RBQWdCOzBEQUFDLFVBQVE7Ozs7O3FEQUFtQjs7Ozs7OzZDQUNuQzs7Ozs7eUNBQ0M7Ozs7O3FDQUNUOzs7OztpQ0FDSTtzQ0FDZCw4REFBQ0QsMERBQVc7c0NBQUVPLHNCQUFzQixFQUFFOzs7OztpQ0FBZTs7Ozs7O3lCQUM1Qzs7Ozs7cUJBQ047Ozs7OzthQUNRLENBQ2pCO0FBQ0osQ0FBQztBQWpES0YsS0FBQUEsYUFBYTtBQW1EbkJBLGFBQWEsQ0FBQzJCLGVBQWU7ZUFBRyxvR0FBcUI7WUFBWkMsS0FBSyxFQUN0Q3hCLE9BQU8sRUFRUEgsT0FBTzs7OztvQkFUMEIyQixLQUFLLFNBQUxBLEtBQUs7b0JBQ3RDeEIsT0FBTyxHQUFHd0IsS0FBSyxDQUFDeEIsT0FBTyxDQUFDO29CQVFkOzt3QkFBTVgscUVBQWtCLENBQUNXLE9BQU8sQ0FBQztzQkFBQTs7b0JBQTNDSCxPQUFPLEdBQUcsYUFBaUM7b0JBQ2pEOzt3QkFBT0EsT0FBTztzQkFBQzs7O0lBQ2pCLENBQUM7Ozs7R0FBQSxDQUFDO0FBRUYsK0RBQWVELGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdL3JlcXVlc3RzL2luZGV4LmpzPzI5Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdldENhbXBhaWduU3VtbWFyeSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvZ2V0Q2FtcGFpZ25TdW1tYXJ5XCI7XG5pbXBvcnQgeyBCdXR0b24sIEdyaWQsIFRhYmxlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgQ2FtcGFpZ25MYXlvdXQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQ2FtcGFpZ25MYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcblxuY29uc3QgUmVxdWVzdHNJbmRleCA9IChzdW1tYXJ5KSA9PiB7XG4gIGNvbnN0IHJlbmRlckFkZFJlcXVlc3RCdXR0b24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGhyZWY9e2AvY2FtcGFpZ25zLyR7c3VtbWFyeS5hZGRyZXNzfS9yZXF1ZXN0cy9uZXdgfT5cbiAgICAgICAgPGE+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJDcmVhdGUgUmVxdWVzdFwiXG4gICAgICAgICAgICBpY29uPVwiYWRkIGNpcmNsZVwiXG4gICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH07XG4gIGNvbnNvbGUubG9nKHN1bW1hcnkubmFtZSk7XG4gIHJldHVybiAoXG4gICAgPENhbXBhaWduTGF5b3V0XG4gICAgICBuYW1lPXtzdW1tYXJ5Lm5hbWV9XG4gICAgICBkZXNjcmlwdGlvbj17c3VtbWFyeS5kZXNjcmlwdGlvbn1cbiAgICAgIHN0YXRpc3RpY3M9e3tcbiAgICAgICAgXCJBY3RpdmUgUmVxdWVzdHNcIjogc3VtbWFyeS5yZXF1ZXN0Q291bnQsXG4gICAgICAgIFwiVG90YWwgU3BlbnRcIjogYCR7c3VtbWFyeS50b3RhbEJhbGFuY2UgLSBzdW1tYXJ5LmN1cnJlbnRCYWxhbmNlfSBldGhlcmAsXG4gICAgICAgIFwiRmluYWxpc2VkIFJlcXVlc3RzXCI6IHN1bW1hcnkuZmluYWxpc2VkUmVxdWVzdENvdW50LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiSGVhZGluZ1wiPkNhbXBhaWduIFJlcXVlc3RzOjwvaDE+XG4gICAgICA8R3JpZCBjb2x1bW5zPVwiZXF1YWxcIj5cbiAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTJ9PlxuICAgICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5JRDwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPkRlc2NyaXB0aW9uPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+QW1vdW50IChldGhlcik8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5SZWNpcGllbnQ8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5BcHByb3ZhbCBDb3VudDwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPkFwcHJvdmU8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5GaW5hbGl6ZTwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICAgICAgPC9UYWJsZS5IZWFkZXI+XG4gICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uPntyZW5kZXJBZGRSZXF1ZXN0QnV0dG9uKCl9PC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NhbXBhaWduTGF5b3V0PlxuICApO1xufTtcblxuUmVxdWVzdHNJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IGFkZHJlc3MgPSBxdWVyeS5hZGRyZXNzO1xuICAvLyBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xuICAvLyBjb25zdCByZXF1ZXN0Q291bnQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFJlcXVlc3RzQ291bnQoKS5jYWxsKCk7XG4gIC8vIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gIC8vICAgQXJyYXkocmVxdWVzdENvdW50KS5maWxsKCkubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAvLyAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMucmVxdWVzdHMoaW5kZXgpLmNhbGwoKTtcbiAgLy8gICB9KVxuICAvLyApO1xuICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgZ2V0Q2FtcGFpZ25TdW1tYXJ5KGFkZHJlc3MpO1xuICByZXR1cm4gc3VtbWFyeTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RzSW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJnZXRDYW1wYWlnblN1bW1hcnkiLCJCdXR0b24iLCJHcmlkIiwiVGFibGUiLCJDYW1wYWlnbkxheW91dCIsIkxpbmsiLCJDYW1wYWlnbiIsIlJlcXVlc3RzSW5kZXgiLCJzdW1tYXJ5IiwicmVuZGVyQWRkUmVxdWVzdEJ1dHRvbiIsImhyZWYiLCJhZGRyZXNzIiwiYSIsImZsb2F0ZWQiLCJjb250ZW50IiwiaWNvbiIsInByaW1hcnkiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImRlc2NyaXB0aW9uIiwic3RhdGlzdGljcyIsInJlcXVlc3RDb3VudCIsInRvdGFsQmFsYW5jZSIsImN1cnJlbnRCYWxhbmNlIiwiZmluYWxpc2VkUmVxdWVzdENvdW50IiwiaDEiLCJjbGFzc05hbWUiLCJjb2x1bW5zIiwiUm93IiwiQ29sdW1uIiwid2lkdGgiLCJIZWFkZXIiLCJIZWFkZXJDZWxsIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/[address]/requests/index.js\n"));

/***/ })

});
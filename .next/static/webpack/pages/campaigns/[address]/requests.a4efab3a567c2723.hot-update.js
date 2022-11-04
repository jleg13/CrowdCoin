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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_getCampaignSummary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/getCampaignSummary */ \"./utils/getCampaignSummary.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_CampaignLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/CampaignLayout */ \"./components/CampaignLayout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar RequestsIndex = function(param) {\n    var summary = param.summary, requests = param.requests;\n    console.log(requests);\n    var renderAddRequestButton = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n            href: \"/campaigns/\".concat(summary.address, \"/requests/new\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                    floated: \"right\",\n                    content: \"Create Request\",\n                    icon: \"add circle\",\n                    primary: true\n                }, void 0, false, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CampaignLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        name: summary.name,\n        description: summary.description,\n        statistics: {\n            \"Active Requests\": summary.requestsCount,\n            \"Total Spent\": \"\".concat(summary.totalBalance - summary.currentBalance, \" ether\"),\n            \"Finalised Requests\": 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"Heading\",\n                children: \"Campaign Requests:\"\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                columns: \"equal\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Column, {\n                            width: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Table, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Table.Header, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Table.Row, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Table.HeaderCell, {\n                                                children: \"ID\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Table.HeaderCell, {\n                                                children: \"Description\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 43,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Table.HeaderCell, {\n                                                children: \"Amount (ether)\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Table.HeaderCell, {\n                                                children: \"Recipient\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Table.HeaderCell, {\n                                                children: \"Approval Count\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Table.HeaderCell, {\n                                                children: \"Approve\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Table.HeaderCell, {\n                                                children: \"Finalize\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Column, {\n                            children: renderAddRequestButton()\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_c = RequestsIndex;\nRequestsIndex.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function(param) {\n        var query, address, campaign, accounts, requestCount, requests, summary;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    query = param.query;\n                    address = query.address;\n                    campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(address);\n                    return [\n                        4,\n                        _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__[\"default\"].eth.getAccounts()\n                    ];\n                case 1:\n                    accounts = _state.sent();\n                    return [\n                        4,\n                        campaign.methods.getRequestsCount().call()\n                    ];\n                case 2:\n                    requestCount = _state.sent();\n                    return [\n                        4,\n                        Promise.all(Array(parseInt(requestCount)).fill().map(function(element, index) {\n                            return campaign.methods.requests(index).call();\n                        }))\n                    ];\n                case 3:\n                    requests = _state.sent();\n                    return [\n                        4,\n                        (0,_utils_getCampaignSummary__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(address)\n                    ];\n                case 4:\n                    summary = _state.sent();\n                    console.log(accounts[0]);\n                    return [\n                        2,\n                        {\n                            summary: summary,\n                            requests: requests\n                        }\n                    ];\n            }\n        });\n    });\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestsIndex);\nvar _c;\n$RefreshReg$(_c, \"RequestsIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdL3JlcXVlc3RzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBMEI7QUFDNEM7QUFDZDtBQUNXO0FBQ3RDO0FBQ3dCO0FBQ1I7QUFFN0MsSUFBTVMsYUFBYSxHQUFHLGdCQUEyQjtRQUF4QkMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTtJQUN4Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLElBQU1HLHNCQUFzQixHQUFHLFdBQU07UUFDbkMscUJBQ0UsOERBQUNSLGtEQUFJO1lBQUNTLElBQUksRUFBRSxhQUFZLENBQWtCLE1BQWEsQ0FBN0JMLE9BQU8sQ0FBQ00sT0FBTyxFQUFDLGVBQWEsQ0FBQztzQkFDdEQsNEVBQUNDLEdBQUM7MEJBQ0EsNEVBQUNmLHFEQUFNO29CQUNMZ0IsT0FBTyxFQUFDLE9BQU87b0JBQ2ZDLE9BQU8sRUFBQyxnQkFBZ0I7b0JBQ3hCQyxJQUFJLEVBQUMsWUFBWTtvQkFDakJDLE9BQU87Ozs7O3lCQUNQOzs7OztxQkFDQTs7Ozs7aUJBQ0MsQ0FDUDtJQUNKLENBQUM7SUFDRCxxQkFDRSw4REFBQ2hCLGtFQUFjO1FBQ2JpQixJQUFJLEVBQUVaLE9BQU8sQ0FBQ1ksSUFBSTtRQUNsQkMsV0FBVyxFQUFFYixPQUFPLENBQUNhLFdBQVc7UUFDaENDLFVBQVUsRUFBRTtZQUNWLGlCQUFpQixFQUFFZCxPQUFPLENBQUNlLGFBQWE7WUFDeEMsYUFBYSxFQUFFLEVBQUMsQ0FBZ0QsTUFBTSxDQUFwRGYsT0FBTyxDQUFDZ0IsWUFBWSxHQUFHaEIsT0FBTyxDQUFDaUIsY0FBYyxFQUFDLFFBQU0sQ0FBQztZQUN2RSxvQkFBb0IsRUFBRSxDQUFDO1NBQ3hCOzswQkFFRCw4REFBQ0MsSUFBRTtnQkFBQ0MsU0FBUyxFQUFDLFNBQVM7MEJBQUMsb0JBQWtCOzs7OztxQkFBSzswQkFDL0MsOERBQUMxQixtREFBSTtnQkFBQzJCLE9BQU8sRUFBQyxPQUFPOzBCQUNuQiw0RUFBQzNCLHVEQUFROztzQ0FDUCw4REFBQ0EsMERBQVc7NEJBQUM4QixLQUFLLEVBQUUsRUFBRTtzQ0FDcEIsNEVBQUM3QixvREFBSzswQ0FDSiw0RUFBQ0EsMkRBQVk7OENBQ1gsNEVBQUNBLHdEQUFTOzswREFDUiw4REFBQ0EsK0RBQWdCOzBEQUFDLElBQUU7Ozs7O3FEQUFtQjswREFDdkMsOERBQUNBLCtEQUFnQjswREFBQyxhQUFXOzs7OztxREFBbUI7MERBQ2hELDhEQUFDQSwrREFBZ0I7MERBQUMsZ0JBQWM7Ozs7O3FEQUFtQjswREFDbkQsOERBQUNBLCtEQUFnQjswREFBQyxXQUFTOzs7OztxREFBbUI7MERBQzlDLDhEQUFDQSwrREFBZ0I7MERBQUMsZ0JBQWM7Ozs7O3FEQUFtQjswREFDbkQsOERBQUNBLCtEQUFnQjswREFBQyxTQUFPOzs7OztxREFBbUI7MERBQzVDLDhEQUFDQSwrREFBZ0I7MERBQUMsVUFBUTs7Ozs7cURBQW1COzs7Ozs7NkNBQ25DOzs7Ozt5Q0FDQzs7Ozs7cUNBQ1Q7Ozs7O2lDQUNJO3NDQUNkLDhEQUFDRCwwREFBVztzQ0FBRVcsc0JBQXNCLEVBQUU7Ozs7O2lDQUFlOzs7Ozs7eUJBQzVDOzs7OztxQkFDTjs7Ozs7O2FBQ1EsQ0FDakI7QUFDSixDQUFDO0FBakRLTCxLQUFBQSxhQUFhO0FBbURuQkEsYUFBYSxDQUFDMkIsZUFBZTtlQUFHLG9HQUFxQjtZQUFaQyxLQUFLLEVBQ3RDckIsT0FBTyxFQUNQc0IsUUFBUSxFQUNSQyxRQUFRLEVBQ1JDLFlBQVksRUFDWjdCLFFBQVEsRUFPUkQsT0FBTzs7OztvQkFaMEIyQixLQUFLLFNBQUxBLEtBQUs7b0JBQ3RDckIsT0FBTyxHQUFHcUIsS0FBSyxDQUFDckIsT0FBTyxDQUFDO29CQUN4QnNCLFFBQVEsR0FBRy9CLDhEQUFRLENBQUNTLE9BQU8sQ0FBQyxDQUFDO29CQUNsQjs7d0JBQU1SLHNFQUFvQixFQUFFO3NCQUFBOztvQkFBdkMrQixRQUFRLEdBQUcsYUFBNEI7b0JBQ3hCOzt3QkFBTUQsUUFBUSxDQUFDSyxPQUFPLENBQUNDLGdCQUFnQixFQUFFLENBQUNDLElBQUksRUFBRTtzQkFBQTs7b0JBQS9ETCxZQUFZLEdBQUcsYUFBZ0Q7b0JBQ3BEOzt3QkFBTU0sT0FBTyxDQUFDQyxHQUFHLENBQ2hDQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ1QsWUFBWSxDQUFDLENBQUMsQ0FDMUJVLElBQUksRUFBRSxDQUNOQyxHQUFHLENBQUMsU0FBQ0MsT0FBTyxFQUFFQyxLQUFLLEVBQUs7NEJBQ3ZCLE9BQU9mLFFBQVEsQ0FBQ0ssT0FBTyxDQUFDaEMsUUFBUSxDQUFDMEMsS0FBSyxDQUFDLENBQUNSLElBQUksRUFBRSxDQUFDO3dCQUNqRCxDQUFDLENBQUMsQ0FDTDtzQkFBQTs7b0JBTktsQyxRQUFRLEdBQUcsYUFNaEI7b0JBQ2U7O3dCQUFNVixxRUFBa0IsQ0FBQ2UsT0FBTyxDQUFDO3NCQUFBOztvQkFBM0NOLE9BQU8sR0FBRyxhQUFpQztvQkFDakRFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDMEIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4Qjs7d0JBQU87NEJBQUU3QixPQUFPLEVBQVBBLE9BQU87NEJBQUVDLFFBQVEsRUFBUkEsUUFBUTt5QkFBRTtzQkFBQzs7O0lBQy9CLENBQUM7Ozs7R0FBQSxDQUFDO0FBRUYsK0RBQWVGLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdL3JlcXVlc3RzL2luZGV4LmpzPzI5Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdldENhbXBhaWduU3VtbWFyeSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvZ2V0Q2FtcGFpZ25TdW1tYXJ5XCI7XG5pbXBvcnQgeyBCdXR0b24sIEdyaWQsIFRhYmxlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgQ2FtcGFpZ25MYXlvdXQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQ2FtcGFpZ25MYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi8uLi8uLi9ldGhlcmV1bS93ZWIzXCI7XG5cbmNvbnN0IFJlcXVlc3RzSW5kZXggPSAoeyBzdW1tYXJ5LCByZXF1ZXN0cyB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHJlcXVlc3RzKTtcbiAgY29uc3QgcmVuZGVyQWRkUmVxdWVzdEJ1dHRvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgaHJlZj17YC9jYW1wYWlnbnMvJHtzdW1tYXJ5LmFkZHJlc3N9L3JlcXVlc3RzL25ld2B9PlxuICAgICAgICA8YT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxuICAgICAgICAgICAgY29udGVudD1cIkNyZWF0ZSBSZXF1ZXN0XCJcbiAgICAgICAgICAgIGljb249XCJhZGQgY2lyY2xlXCJcbiAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Q2FtcGFpZ25MYXlvdXRcbiAgICAgIG5hbWU9e3N1bW1hcnkubmFtZX1cbiAgICAgIGRlc2NyaXB0aW9uPXtzdW1tYXJ5LmRlc2NyaXB0aW9ufVxuICAgICAgc3RhdGlzdGljcz17e1xuICAgICAgICBcIkFjdGl2ZSBSZXF1ZXN0c1wiOiBzdW1tYXJ5LnJlcXVlc3RzQ291bnQsXG4gICAgICAgIFwiVG90YWwgU3BlbnRcIjogYCR7c3VtbWFyeS50b3RhbEJhbGFuY2UgLSBzdW1tYXJ5LmN1cnJlbnRCYWxhbmNlfSBldGhlcmAsXG4gICAgICAgIFwiRmluYWxpc2VkIFJlcXVlc3RzXCI6IDAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJIZWFkaW5nXCI+Q2FtcGFpZ24gUmVxdWVzdHM6PC9oMT5cbiAgICAgIDxHcmlkIGNvbHVtbnM9XCJlcXVhbFwiPlxuICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMn0+XG4gICAgICAgICAgICA8VGFibGU+XG4gICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPklEPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+RGVzY3JpcHRpb248L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5BbW91bnQgKGV0aGVyKTwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPlJlY2lwaWVudDwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPkFwcHJvdmFsIENvdW50PC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+QXBwcm92ZTwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPkZpbmFsaXplPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgICAgICA8L1RhYmxlLkhlYWRlcj5cbiAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4+e3JlbmRlckFkZFJlcXVlc3RCdXR0b24oKX08L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ2FtcGFpZ25MYXlvdXQ+XG4gICk7XG59O1xuXG5SZXF1ZXN0c0luZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgYWRkcmVzcyA9IHF1ZXJ5LmFkZHJlc3M7XG4gIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XG4gIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgY29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpO1xuICBjb25zdCByZXF1ZXN0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIEFycmF5KHBhcnNlSW50KHJlcXVlc3RDb3VudCkpXG4gICAgICAuZmlsbCgpXG4gICAgICAubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5yZXF1ZXN0cyhpbmRleCkuY2FsbCgpO1xuICAgICAgfSlcbiAgKTtcbiAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGdldENhbXBhaWduU3VtbWFyeShhZGRyZXNzKTtcbiAgY29uc29sZS5sb2coYWNjb3VudHNbMF0pXG4gIHJldHVybiB7IHN1bW1hcnksIHJlcXVlc3RzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0c0luZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZ2V0Q2FtcGFpZ25TdW1tYXJ5IiwiQnV0dG9uIiwiR3JpZCIsIlRhYmxlIiwiQ2FtcGFpZ25MYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUmVxdWVzdHNJbmRleCIsInN1bW1hcnkiLCJyZXF1ZXN0cyIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJBZGRSZXF1ZXN0QnV0dG9uIiwiaHJlZiIsImFkZHJlc3MiLCJhIiwiZmxvYXRlZCIsImNvbnRlbnQiLCJpY29uIiwicHJpbWFyeSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInN0YXRpc3RpY3MiLCJyZXF1ZXN0c0NvdW50IiwidG90YWxCYWxhbmNlIiwiY3VycmVudEJhbGFuY2UiLCJoMSIsImNsYXNzTmFtZSIsImNvbHVtbnMiLCJSb3ciLCJDb2x1bW4iLCJ3aWR0aCIsIkhlYWRlciIsIkhlYWRlckNlbGwiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImNhbXBhaWduIiwiYWNjb3VudHMiLCJyZXF1ZXN0Q291bnQiLCJldGgiLCJnZXRBY2NvdW50cyIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsIlByb21pc2UiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/[address]/requests/index.js\n"));

/***/ })

});
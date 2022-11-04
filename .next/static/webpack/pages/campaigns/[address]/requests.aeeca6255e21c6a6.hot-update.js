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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_getCampaignSummary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/getCampaignSummary */ \"./utils/getCampaignSummary.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_CampaignLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/CampaignLayout */ \"./components/CampaignLayout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar RequestsIndex = function(param) {\n    var summary = param.summary, requests = param.requests;\n    _s();\n    var account = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function() {\n            var accounts;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__[\"default\"].eth.getAccounts()\n                        ];\n                    case 1:\n                        accounts = _state.sent();\n                        return [\n                            2,\n                            accounts[0].a\n                        ];\n                }\n            });\n        });\n        return function account() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        account();\n    }, []);\n    console.log(account);\n    var renderAddRequestButton = function() {\n        if (summary.manager === account) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/campaigns/\".concat(summary.address, \"/requests/new\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        floated: \"right\",\n                        primary: true,\n                        children: \"Add Request\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CampaignLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        name: summary.name,\n        description: summary.description,\n        statistics: {\n            \"Active Requests\": summary.requestsCount,\n            \"Total Spent\": \"\".concat(summary.totalBalance - summary.currentBalance, \" ether\"),\n            \"Finalised Requests\": 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"Heading\",\n                children: \"Campaign Requests:\"\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n                columns: \"equal\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Grid.Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Grid.Column, {\n                            width: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.Header, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.Row, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.HeaderCell, {\n                                                children: \"ID\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.HeaderCell, {\n                                                children: \"Description\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.HeaderCell, {\n                                                children: \"Amount (ether)\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.HeaderCell, {\n                                                children: \"Recipient\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.HeaderCell, {\n                                                children: \"Approval Count\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.HeaderCell, {\n                                                children: \"Approve\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.HeaderCell, {\n                                                children: \"Finalize\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                lineNumber: 55,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Grid.Column, {\n                            children: renderAddRequestButton()\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n};\n_s(RequestsIndex, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = RequestsIndex;\nRequestsIndex.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(param) {\n        var query, address, campaign, requestCount, requests, summary;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    query = param.query;\n                    address = query.address;\n                    campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(address);\n                    return [\n                        4,\n                        campaign.methods.getRequestsCount().call()\n                    ];\n                case 1:\n                    requestCount = _state.sent();\n                    return [\n                        4,\n                        Promise.all(Array(parseInt(requestCount)).fill().map(function(element, index) {\n                            return campaign.methods.requests(index).call();\n                        }))\n                    ];\n                case 2:\n                    requests = _state.sent();\n                    return [\n                        4,\n                        (0,_utils_getCampaignSummary__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(address)\n                    ];\n                case 3:\n                    summary = _state.sent();\n                    return [\n                        2,\n                        {\n                            summary: summary,\n                            requests: requests\n                        }\n                    ];\n            }\n        });\n    });\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestsIndex);\nvar _c;\n$RefreshReg$(_c, \"RequestsIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdL3JlcXVlc3RzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQXlDO0FBQzZCO0FBQ2Q7QUFDVztBQUN0QztBQUN3QjtBQUNSO0FBRTdDLElBQU1VLGFBQWEsR0FBRyxnQkFBMkI7UUFBeEJDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7O0lBQ3hDLElBQU1DLE9BQU87bUJBQUcsK0ZBQVk7Z0JBQ3BCQyxRQUFROzs7O3dCQUFHOzs0QkFBTUwsc0VBQW9CLEVBQUU7MEJBQUE7O3dCQUF2Q0ssUUFBUSxHQUFHLGFBQTRCO3dCQUM3Qzs7NEJBQU9BLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csQ0FBQzswQkFBQTs7O1FBQ3RCLENBQUM7d0JBSEtKLE9BQU87OztPQUdaO0lBRURaLGdEQUFTLENBQUMsV0FBTTtRQUNkWSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sT0FBTyxDQUFDO0lBQ3BCLElBQU1PLHNCQUFzQixHQUFHLFdBQU07UUFDbkMsSUFBSVQsT0FBTyxDQUFDVSxPQUFPLEtBQUtSLE9BQU8sRUFBRTtZQUMvQixxQkFDRSw4REFBQ04sa0RBQUk7Z0JBQUNlLElBQUksRUFBRSxhQUFZLENBQWtCLE1BQWEsQ0FBN0JYLE9BQU8sQ0FBQ1ksT0FBTyxFQUFDLGVBQWEsQ0FBQzswQkFDdEQsNEVBQUNOLEdBQUM7OEJBQ0EsNEVBQUNkLHFEQUFNO3dCQUFDcUIsT0FBTyxFQUFDLE9BQU87d0JBQUNDLE9BQU87a0NBQUMsYUFFaEM7Ozs7OzZCQUFTOzs7Ozt5QkFDUDs7Ozs7cUJBQ0MsQ0FDUDtRQUNKLENBQUM7SUFDSCxDQUFDO0lBQ0QscUJBQ0UsOERBQUNuQixrRUFBYztRQUNib0IsSUFBSSxFQUFFZixPQUFPLENBQUNlLElBQUk7UUFDbEJDLFdBQVcsRUFBRWhCLE9BQU8sQ0FBQ2dCLFdBQVc7UUFDaENDLFVBQVUsRUFBRTtZQUNWLGlCQUFpQixFQUFFakIsT0FBTyxDQUFDa0IsYUFBYTtZQUN4QyxhQUFhLEVBQUUsRUFBQyxDQUFnRCxNQUFNLENBQXBEbEIsT0FBTyxDQUFDbUIsWUFBWSxHQUFHbkIsT0FBTyxDQUFDb0IsY0FBYyxFQUFDLFFBQU0sQ0FBQztZQUN2RSxvQkFBb0IsRUFBRSxDQUFDO1NBQ3hCOzswQkFFRCw4REFBQ0MsSUFBRTtnQkFBQ0MsU0FBUyxFQUFDLFNBQVM7MEJBQUMsb0JBQWtCOzs7OztxQkFBSzswQkFDL0MsOERBQUM3QixtREFBSTtnQkFBQzhCLE9BQU8sRUFBQyxPQUFPOzBCQUNuQiw0RUFBQzlCLHVEQUFROztzQ0FDUCw4REFBQ0EsMERBQVc7NEJBQUNpQyxLQUFLLEVBQUUsRUFBRTtzQ0FDcEIsNEVBQUNoQyxvREFBSzswQ0FDSiw0RUFBQ0EsMkRBQVk7OENBQ1gsNEVBQUNBLHdEQUFTOzswREFDUiw4REFBQ0EsK0RBQWdCOzBEQUFDLElBQUU7Ozs7O3FEQUFtQjswREFDdkMsOERBQUNBLCtEQUFnQjswREFBQyxhQUFXOzs7OztxREFBbUI7MERBQ2hELDhEQUFDQSwrREFBZ0I7MERBQUMsZ0JBQWM7Ozs7O3FEQUFtQjswREFDbkQsOERBQUNBLCtEQUFnQjswREFBQyxXQUFTOzs7OztxREFBbUI7MERBQzlDLDhEQUFDQSwrREFBZ0I7MERBQUMsZ0JBQWM7Ozs7O3FEQUFtQjswREFDbkQsOERBQUNBLCtEQUFnQjswREFBQyxTQUFPOzs7OztxREFBbUI7MERBQzVDLDhEQUFDQSwrREFBZ0I7MERBQUMsVUFBUTs7Ozs7cURBQW1COzs7Ozs7NkNBQ25DOzs7Ozt5Q0FDQzs7Ozs7cUNBQ1Q7Ozs7O2lDQUNJO3NDQUNkLDhEQUFDRCwwREFBVztzQ0FBRWdCLHNCQUFzQixFQUFFOzs7OztpQ0FBZTs7Ozs7O3lCQUM1Qzs7Ozs7cUJBQ047Ozs7OzthQUNRLENBQ2pCO0FBQ0osQ0FBQztHQXhES1YsYUFBYTtBQUFiQSxLQUFBQSxhQUFhO0FBMERuQkEsYUFBYSxDQUFDOEIsZUFBZTtlQUFHLG9HQUFxQjtZQUFaQyxLQUFLLEVBQ3RDbEIsT0FBTyxFQUNQbUIsUUFBUSxFQUNSQyxZQUFZLEVBQ1ovQixRQUFRLEVBT1JELE9BQU87Ozs7b0JBWDBCOEIsS0FBSyxTQUFMQSxLQUFLO29CQUN0Q2xCLE9BQU8sR0FBR2tCLEtBQUssQ0FBQ2xCLE9BQU8sQ0FBQztvQkFDeEJtQixRQUFRLEdBQUdsQyw4REFBUSxDQUFDZSxPQUFPLENBQUMsQ0FBQztvQkFDZDs7d0JBQU1tQixRQUFRLENBQUNFLE9BQU8sQ0FBQ0MsZ0JBQWdCLEVBQUUsQ0FBQ0MsSUFBSSxFQUFFO3NCQUFBOztvQkFBL0RILFlBQVksR0FBRyxhQUFnRDtvQkFDcEQ7O3dCQUFNSSxPQUFPLENBQUNDLEdBQUcsQ0FDaENDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDUCxZQUFZLENBQUMsQ0FBQyxDQUMxQlEsSUFBSSxFQUFFLENBQ05DLEdBQUcsQ0FBQyxTQUFDQyxPQUFPLEVBQUVDLEtBQUssRUFBSzs0QkFDdkIsT0FBT1osUUFBUSxDQUFDRSxPQUFPLENBQUNoQyxRQUFRLENBQUMwQyxLQUFLLENBQUMsQ0FBQ1IsSUFBSSxFQUFFLENBQUM7d0JBQ2pELENBQUMsQ0FBQyxDQUNMO3NCQUFBOztvQkFOS2xDLFFBQVEsR0FBRyxhQU1oQjtvQkFDZTs7d0JBQU1WLHFFQUFrQixDQUFDcUIsT0FBTyxDQUFDO3NCQUFBOztvQkFBM0NaLE9BQU8sR0FBRyxhQUFpQztvQkFDakQ7O3dCQUFPOzRCQUFFQSxPQUFPLEVBQVBBLE9BQU87NEJBQUVDLFFBQVEsRUFBUkEsUUFBUTt5QkFBRTtzQkFBQzs7O0lBQy9CLENBQUM7Ozs7R0FBQSxDQUFDO0FBRUYsK0RBQWVGLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdL3JlcXVlc3RzL2luZGV4LmpzPzI5Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdldENhbXBhaWduU3VtbWFyeSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvZ2V0Q2FtcGFpZ25TdW1tYXJ5XCI7XG5pbXBvcnQgeyBCdXR0b24sIEdyaWQsIFRhYmxlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgQ2FtcGFpZ25MYXlvdXQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQ2FtcGFpZ25MYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi8uLi8uLi9ldGhlcmV1bS93ZWIzXCI7XG5cbmNvbnN0IFJlcXVlc3RzSW5kZXggPSAoeyBzdW1tYXJ5LCByZXF1ZXN0cyB9KSA9PiB7XG4gIGNvbnN0IGFjY291bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgIHJldHVybiBhY2NvdW50c1swXS5hXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY2NvdW50KCk7XG4gIH0sIFtdKTtcbiAgY29uc29sZS5sb2coYWNjb3VudClcbiAgY29uc3QgcmVuZGVyQWRkUmVxdWVzdEJ1dHRvbiA9ICgpID0+IHtcbiAgICBpZiAoc3VtbWFyeS5tYW5hZ2VyID09PSBhY2NvdW50KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPXtgL2NhbXBhaWducy8ke3N1bW1hcnkuYWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8QnV0dG9uIGZsb2F0ZWQ9XCJyaWdodFwiIHByaW1hcnk+XG4gICAgICAgICAgICAgIEFkZCBSZXF1ZXN0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxDYW1wYWlnbkxheW91dFxuICAgICAgbmFtZT17c3VtbWFyeS5uYW1lfVxuICAgICAgZGVzY3JpcHRpb249e3N1bW1hcnkuZGVzY3JpcHRpb259XG4gICAgICBzdGF0aXN0aWNzPXt7XG4gICAgICAgIFwiQWN0aXZlIFJlcXVlc3RzXCI6IHN1bW1hcnkucmVxdWVzdHNDb3VudCxcbiAgICAgICAgXCJUb3RhbCBTcGVudFwiOiBgJHtzdW1tYXJ5LnRvdGFsQmFsYW5jZSAtIHN1bW1hcnkuY3VycmVudEJhbGFuY2V9IGV0aGVyYCxcbiAgICAgICAgXCJGaW5hbGlzZWQgUmVxdWVzdHNcIjogMCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIkhlYWRpbmdcIj5DYW1wYWlnbiBSZXF1ZXN0czo8L2gxPlxuICAgICAgPEdyaWQgY29sdW1ucz1cImVxdWFsXCI+XG4gICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEyfT5cbiAgICAgICAgICAgIDxUYWJsZT5cbiAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+SUQ8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5EZXNjcmlwdGlvbjwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPkFtb3VudCAoZXRoZXIpPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+UmVjaXBpZW50PC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+QXBwcm92YWwgQ291bnQ8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5BcHByb3ZlPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+RmluYWxpemU8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyPlxuICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDxHcmlkLkNvbHVtbj57cmVuZGVyQWRkUmVxdWVzdEJ1dHRvbigpfTwvR3JpZC5Db2x1bW4+XG4gICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9DYW1wYWlnbkxheW91dD5cbiAgKTtcbn07XG5cblJlcXVlc3RzSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zdCBhZGRyZXNzID0gcXVlcnkuYWRkcmVzcztcbiAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcbiAgY29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpO1xuICBjb25zdCByZXF1ZXN0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIEFycmF5KHBhcnNlSW50KHJlcXVlc3RDb3VudCkpXG4gICAgICAuZmlsbCgpXG4gICAgICAubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5yZXF1ZXN0cyhpbmRleCkuY2FsbCgpO1xuICAgICAgfSlcbiAgKTtcbiAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGdldENhbXBhaWduU3VtbWFyeShhZGRyZXNzKTtcbiAgcmV0dXJuIHsgc3VtbWFyeSwgcmVxdWVzdHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RzSW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJnZXRDYW1wYWlnblN1bW1hcnkiLCJCdXR0b24iLCJHcmlkIiwiVGFibGUiLCJDYW1wYWlnbkxheW91dCIsIkxpbmsiLCJDYW1wYWlnbiIsIndlYjMiLCJSZXF1ZXN0c0luZGV4Iiwic3VtbWFyeSIsInJlcXVlc3RzIiwiYWNjb3VudCIsImFjY291bnRzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhIiwiY29uc29sZSIsImxvZyIsInJlbmRlckFkZFJlcXVlc3RCdXR0b24iLCJtYW5hZ2VyIiwiaHJlZiIsImFkZHJlc3MiLCJmbG9hdGVkIiwicHJpbWFyeSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInN0YXRpc3RpY3MiLCJyZXF1ZXN0c0NvdW50IiwidG90YWxCYWxhbmNlIiwiY3VycmVudEJhbGFuY2UiLCJoMSIsImNsYXNzTmFtZSIsImNvbHVtbnMiLCJSb3ciLCJDb2x1bW4iLCJ3aWR0aCIsIkhlYWRlciIsIkhlYWRlckNlbGwiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImNhbXBhaWduIiwicmVxdWVzdENvdW50IiwibWV0aG9kcyIsImdldFJlcXVlc3RzQ291bnQiLCJjYWxsIiwiUHJvbWlzZSIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwibWFwIiwiZWxlbWVudCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/[address]/requests/index.js\n"));

/***/ })

});
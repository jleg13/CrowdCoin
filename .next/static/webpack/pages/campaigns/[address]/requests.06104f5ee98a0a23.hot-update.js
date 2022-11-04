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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_getCampaignSummary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/getCampaignSummary */ \"./utils/getCampaignSummary.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_CampaignLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/CampaignLayout */ \"./components/CampaignLayout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _components_RequestRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/RequestRow */ \"./components/RequestRow.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar RequestsIndex = function(param) {\n    var summary = param.summary, requests = param.requests;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isManager = ref[0], setIsManager = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isApprover = ref1[0], setIsApprover = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function() {\n            var accounts, campaign, approver;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__[\"default\"].eth.getAccounts()\n                        ];\n                    case 1:\n                        accounts = _state.sent();\n                        setIsManager(accounts[0] === summary.manager);\n                        campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(summary.address);\n                        return [\n                            4,\n                            campaign.methods.approvers(accounts[0]).call()\n                        ];\n                    case 2:\n                        approver = _state.sent();\n                        setIsApprover(approver);\n                        return [\n                            2\n                        ];\n                }\n            });\n        })();\n    }, []);\n    var renderAddRequestButton = function() {\n        if (summary.manager === account) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/campaigns/\".concat(summary.address, \"/requests/new\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                        floated: \"right\",\n                        primary: true,\n                        children: \"Add Request\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, _this);\n        }\n    };\n    var renderActionOptions = function() {\n        if (isManager || isApprover) {\n            var actionCount = isManager + isApprover;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                colSpan: actionCount,\n                textAlign: \"center\",\n                children: \"Actions\"\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, _this);\n        }\n    };\n    var renderRows = function() {\n        return requests.map(function(request, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                id: index,\n                request: request\n            }, index, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                lineNumber: 52,\n                columnNumber: 14\n            }, _this);\n        });\n    };\n    var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Table.Row, Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Table.Header, HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Table.HeaderCell, Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Table.Body;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CampaignLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        name: summary.name,\n        description: summary.description,\n        statistics: {\n            \"Active Requests\": summary.requestsCount,\n            \"Total Spent\": \"\".concat(summary.totalBalance - summary.currentBalance, \" ether\"),\n            \"Finalised Requests\": 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"Heading\",\n                children: \"Campaign Requests:\"\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n                columns: \"equal\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Grid.Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Grid.Column, {\n                            width: 14,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Table, {\n                                celled: true,\n                                structured: true,\n                                fixed: true,\n                                singleLine: true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                                    rowSpan: \"2\",\n                                                    children: \"ID\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                                    rowSpan: \"2\",\n                                                    children: \"Name\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                                    rowSpan: \"2\",\n                                                    children: \"Description\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                                    rowSpan: \"2\",\n                                                    children: \"Amount (ether)\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                                    rowSpan: \"2\",\n                                                    children: \"Recipient\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                                    rowSpan: \"2\",\n                                                    children: \"Approval Count\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                renderActionOptions()\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Body, {\n                                        children: renderRows()\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Grid.Column, {\n                            children: renderAddRequestButton()\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, _this);\n};\n_s(RequestsIndex, \"9ip0VbeygKHB3N51NfY26IFA9RQ=\");\n_c = RequestsIndex;\nRequestsIndex.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function(param) {\n        var query, address, campaign, requestCount, requests, summary;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    query = param.query;\n                    address = query.address;\n                    campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(address);\n                    return [\n                        4,\n                        campaign.methods.getRequestsCount().call()\n                    ];\n                case 1:\n                    requestCount = _state.sent();\n                    return [\n                        4,\n                        Promise.all(Array(parseInt(requestCount)).fill().map(function(element, index) {\n                            return campaign.methods.requests(index).call();\n                        }))\n                    ];\n                case 2:\n                    requests = _state.sent();\n                    return [\n                        4,\n                        (0,_utils_getCampaignSummary__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(address)\n                    ];\n                case 3:\n                    summary = _state.sent();\n                    return [\n                        2,\n                        {\n                            summary: summary,\n                            requests: requests\n                        }\n                    ];\n            }\n        });\n    });\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestsIndex);\nvar _c;\n$RefreshReg$(_c, \"RequestsIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdL3JlcXVlc3RzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUFtRDtBQUNtQjtBQUNkO0FBQ1c7QUFDdEM7QUFDd0I7QUFDUjtBQUNjO0FBRTNELElBQU1ZLGFBQWEsR0FBRyxnQkFBMkI7UUFBeEJDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7O0lBQ3hDLElBQWtDWixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQTFDYSxTQUFTLEdBQWtCYixHQUFlLEdBQWpDLEVBQUVjLFlBQVksR0FBSWQsR0FBZSxHQUFuQjtJQUM5QixJQUFvQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUE1Q2UsVUFBVSxHQUFtQmYsSUFBZSxHQUFsQyxFQUFFZ0IsYUFBYSxHQUFJaEIsSUFBZSxHQUFuQjtJQUVoQ0QsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2IsK0ZBQVk7Z0JBQ0xrQixRQUFRLEVBR1JDLFFBQVEsRUFDUkMsUUFBUTs7Ozt3QkFKRzs7NEJBQU1YLHNFQUFvQixFQUFFOzBCQUFBOzt3QkFBdkNTLFFBQVEsR0FBRyxhQUE0Qjt3QkFDN0NILFlBQVksQ0FBQ0csUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLTixPQUFPLENBQUNXLE9BQU8sQ0FBQyxDQUFDO3dCQUV4Q0osUUFBUSxHQUFHWCw4REFBUSxDQUFDSSxPQUFPLENBQUNZLE9BQU8sQ0FBQyxDQUFDO3dCQUMxQjs7NEJBQU1MLFFBQVEsQ0FBQ00sT0FBTyxDQUFDQyxTQUFTLENBQUNSLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDUyxJQUFJLEVBQUU7MEJBQUE7O3dCQUEvRFAsUUFBUSxHQUFHLGFBQW9EO3dCQUNyRUgsYUFBYSxDQUFDRyxRQUFRLENBQUMsQ0FBQzs7Ozs7O1FBQzFCLENBQUMsR0FBRyxDQUFDO0lBQ1AsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFD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O29CQUNqRDs7d0JBQU87NEJBQUVBLE9BQU8sRUFBUEEsT0FBTzs0QkFBRUMsUUFBUSxFQUFSQSxRQUFRO3lCQUFFO3NCQUFDOzs7SUFDL0IsQ0FBQzs7OztHQUFBLENBQUM7QUFFRiwrREFBZUYsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9bYWRkcmVzc10vcmVxdWVzdHMvaW5kZXguanM/MjljZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdldENhbXBhaWduU3VtbWFyeSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvZ2V0Q2FtcGFpZ25TdW1tYXJ5XCI7XG5pbXBvcnQgeyBCdXR0b24sIEdyaWQsIFRhYmxlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgQ2FtcGFpZ25MYXlvdXQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQ2FtcGFpZ25MYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi8uLi8uLi9ldGhlcmV1bS93ZWIzXCI7XG5pbXBvcnQgUmVxdWVzdFJvdyBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9SZXF1ZXN0Um93XCI7XG5cbmNvbnN0IFJlcXVlc3RzSW5kZXggPSAoeyBzdW1tYXJ5LCByZXF1ZXN0cyB9KSA9PiB7XG4gIGNvbnN0IFtpc01hbmFnZXIsIHNldElzTWFuYWdlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0FwcHJvdmVyLCBzZXRJc0FwcHJvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICBzZXRJc01hbmFnZXIoYWNjb3VudHNbMF0gPT09IHN1bW1hcnkubWFuYWdlcik7XG5cbiAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oc3VtbWFyeS5hZGRyZXNzKTtcbiAgICAgIGNvbnN0IGFwcHJvdmVyID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlcnMoYWNjb3VudHNbMF0pLmNhbGwoKTtcbiAgICAgIHNldElzQXBwcm92ZXIoYXBwcm92ZXIpO1xuICAgIH0pKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCByZW5kZXJBZGRSZXF1ZXN0QnV0dG9uID0gKCkgPT4ge1xuICAgIGlmIChzdW1tYXJ5Lm1hbmFnZXIgPT09IGFjY291bnQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvY2FtcGFpZ25zLyR7c3VtbWFyeS5hZGRyZXNzfS9yZXF1ZXN0cy9uZXdgfT5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxCdXR0b24gZmxvYXRlZD1cInJpZ2h0XCIgcHJpbWFyeT5cbiAgICAgICAgICAgICAgQWRkIFJlcXVlc3RcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQWN0aW9uT3B0aW9ucyA9ICgpID0+IHtcbiAgICBpZiAoaXNNYW5hZ2VyIHx8IGlzQXBwcm92ZXIpIHtcbiAgICAgIGNvbnN0IGFjdGlvbkNvdW50ID0gaXNNYW5hZ2VyICsgaXNBcHByb3ZlcjtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxIZWFkZXJDZWxsIGNvbFNwYW49e2FjdGlvbkNvdW50fSB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICBBY3Rpb25zXG4gICAgICAgIDwvSGVhZGVyQ2VsbD5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclJvd3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHJlcXVlc3RzLm1hcCgocmVxdWVzdCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiA8UmVxdWVzdFJvdyBrZXk9e2luZGV4fSBpZD17aW5kZXh9IHJlcXVlc3Q9e3JlcXVlc3R9IC8+O1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHsgUm93LCBIZWFkZXIsIEhlYWRlckNlbGwsIEJvZHkgfSA9IFRhYmxlO1xuXG4gIHJldHVybiAoXG4gICAgPENhbXBhaWduTGF5b3V0XG4gICAgICBuYW1lPXtzdW1tYXJ5Lm5hbWV9XG4gICAgICBkZXNjcmlwdGlvbj17c3VtbWFyeS5kZXNjcmlwdGlvbn1cbiAgICAgIHN0YXRpc3RpY3M9e3tcbiAgICAgICAgXCJBY3RpdmUgUmVxdWVzdHNcIjogc3VtbWFyeS5yZXF1ZXN0c0NvdW50LFxuICAgICAgICBcIlRvdGFsIFNwZW50XCI6IGAke3N1bW1hcnkudG90YWxCYWxhbmNlIC0gc3VtbWFyeS5jdXJyZW50QmFsYW5jZX0gZXRoZXJgLFxuICAgICAgICBcIkZpbmFsaXNlZCBSZXF1ZXN0c1wiOiAwLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiSGVhZGluZ1wiPkNhbXBhaWduIFJlcXVlc3RzOjwvaDE+XG4gICAgICA8R3JpZCBjb2x1bW5zPVwiZXF1YWxcIj5cbiAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTR9PlxuICAgICAgICAgICAgPFRhYmxlIGNlbGxlZCBzdHJ1Y3R1cmVkIGZpeGVkIHNpbmdsZUxpbmU+XG4gICAgICAgICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsIHJvd1NwYW49XCIyXCI+SUQ8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbCByb3dTcGFuPVwiMlwiPk5hbWU8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbCByb3dTcGFuPVwiMlwiPkRlc2NyaXB0aW9uPC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGwgcm93U3Bhbj1cIjJcIj5BbW91bnQgKGV0aGVyKTwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsIHJvd1NwYW49XCIyXCI+UmVjaXBpZW50PC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGwgcm93U3Bhbj1cIjJcIj5BcHByb3ZhbCBDb3VudDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJBY3Rpb25PcHRpb25zKCl9XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICA8Qm9keT57cmVuZGVyUm93cygpfTwvQm9keT5cbiAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4+e3JlbmRlckFkZFJlcXVlc3RCdXR0b24oKX08L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ2FtcGFpZ25MYXlvdXQ+XG4gICk7XG59O1xuXG5SZXF1ZXN0c0luZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgYWRkcmVzcyA9IHF1ZXJ5LmFkZHJlc3M7XG4gIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XG4gIGNvbnN0IHJlcXVlc3RDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0UmVxdWVzdHNDb3VudCgpLmNhbGwoKTtcbiAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBBcnJheShwYXJzZUludChyZXF1ZXN0Q291bnQpKVxuICAgICAgLmZpbGwoKVxuICAgICAgLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMucmVxdWVzdHMoaW5kZXgpLmNhbGwoKTtcbiAgICAgIH0pXG4gICk7XG4gIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBnZXRDYW1wYWlnblN1bW1hcnkoYWRkcmVzcyk7XG4gIHJldHVybiB7IHN1bW1hcnksIHJlcXVlc3RzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0c0luZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRDYW1wYWlnblN1bW1hcnkiLCJCdXR0b24iLCJHcmlkIiwiVGFibGUiLCJDYW1wYWlnbkxheW91dCIsIkxpbmsiLCJDYW1wYWlnbiIsIndlYjMiLCJSZXF1ZXN0Um93IiwiUmVxdWVzdHNJbmRleCIsInN1bW1hcnkiLCJyZXF1ZXN0cyIsImlzTWFuYWdlciIsInNldElzTWFuYWdlciIsImlzQXBwcm92ZXIiLCJzZXRJc0FwcHJvdmVyIiwiYWNjb3VudHMiLCJjYW1wYWlnbiIsImFwcHJvdmVyIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJtYW5hZ2VyIiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJhcHByb3ZlcnMiLCJjYWxsIiwicmVuZGVyQWRkUmVxdWVzdEJ1dHRvbiIsImFjY291bnQiLCJocmVmIiwiYSIsImZsb2F0ZWQiLCJwcmltYXJ5IiwicmVuZGVyQWN0aW9uT3B0aW9ucyIsImFjdGlvbkNvdW50IiwiSGVhZGVyQ2VsbCIsImNvbFNwYW4iLCJ0ZXh0QWxpZ24iLCJyZW5kZXJSb3dzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiaWQiLCJSb3ciLCJIZWFkZXIiLCJCb2R5IiwibmFtZSIsImRlc2NyaXB0aW9uIiwic3RhdGlzdGljcyIsInJlcXVlc3RzQ291bnQiLCJ0b3RhbEJhbGFuY2UiLCJjdXJyZW50QmFsYW5jZSIsImgxIiwiY2xhc3NOYW1lIiwiY29sdW1ucyIsIkNvbHVtbiIsIndpZHRoIiwiY2VsbGVkIiwic3RydWN0dXJlZCIsImZpeGVkIiwic2luZ2xlTGluZSIsInJvd1NwYW4iLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsInJlcXVlc3RDb3VudCIsImdldFJlcXVlc3RzQ291bnQiLCJQcm9taXNlIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/[address]/requests/index.js\n"));

/***/ })

});
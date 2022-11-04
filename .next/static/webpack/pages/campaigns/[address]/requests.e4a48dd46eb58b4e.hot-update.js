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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_getCampaignSummary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/getCampaignSummary */ \"./utils/getCampaignSummary.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_CampaignLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/CampaignLayout */ \"./components/CampaignLayout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _components_RequestRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/RequestRow */ \"./components/RequestRow.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar RequestsIndex = function(param) {\n    var summary = param.summary, requests = param.requests;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), account = ref[0], setAccount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isApprover = ref1[0], setIsApprover = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function() {\n            var accounts, campaign;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__[\"default\"].eth.getAccounts()\n                        ];\n                    case 1:\n                        accounts = _state.sent();\n                        setAccount(accounts[0]);\n                        campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(summary.address);\n                        return [\n                            2\n                        ];\n                }\n            });\n        // const approver = await campaign.methods.approvers(account).call();\n        // setIsApprover(approver);\n        })();\n    }, []);\n    var renderAddRequestButton = function() {\n        if (summary.manager === account) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/campaigns/\".concat(summary.address, \"/requests/new\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                        floated: \"right\",\n                        primary: true,\n                        children: \"Add Request\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, _this);\n        }\n    };\n    var _this1 = _this;\n    var renderActionOptions = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function() {\n            var actionCount;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n                actionCount = 0;\n                if (summary.manager === account) {\n                    actionCount++;\n                    console.log(\"manager\");\n                }\n                if (isApprover) {\n                    actionCount++;\n                    console.log(\"approver\");\n                }\n                return [\n                    2,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                        colSpan: setActionPermissions(),\n                        textAlign: \"center\",\n                        children: \"Actions\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 12\n                    }, _this1)\n                ];\n            });\n        });\n        return function renderActionOptions() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var renderRows = function() {\n        return requests.map(function(request, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                id: index,\n                request: request\n            }, index, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                lineNumber: 55,\n                columnNumber: 14\n            }, _this);\n        });\n    };\n    var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Table.Row, Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Table.Header, HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Table.HeaderCell, Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Table.Body;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CampaignLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        name: summary.name,\n        description: summary.description,\n        statistics: {\n            \"Active Requests\": summary.requestsCount,\n            \"Total Spent\": \"\".concat(summary.totalBalance - summary.currentBalance, \" ether\"),\n            \"Finalised Requests\": 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"Heading\",\n                children: \"Campaign Requests:\"\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n                columns: \"equal\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Grid.Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Grid.Column, {\n                            width: 14,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Table, {\n                                celled: true,\n                                structured: true,\n                                fixed: true,\n                                singleLine: true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                                    rowSpan: \"2\",\n                                                    children: \"ID\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                                    rowSpan: \"2\",\n                                                    children: \"Name\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                                    rowSpan: \"2\",\n                                                    children: \"Description\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                                    rowSpan: \"2\",\n                                                    children: \"Amount (ether)\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                                    rowSpan: \"2\",\n                                                    children: \"Recipient\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                                    rowSpan: \"2\",\n                                                    children: \"Approval Count\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                renderActionOptions()\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Body, {\n                                        children: renderRows()\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Grid.Column, {\n                            children: renderAddRequestButton()\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/index.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, _this);\n};\n_s(RequestsIndex, \"hM5kSpP3esBNgrQqscvzLNNNt6w=\");\n_c = RequestsIndex;\nRequestsIndex.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function(param) {\n        var query, address, campaign, requestCount, requests, summary;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    query = param.query;\n                    address = query.address;\n                    campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(address);\n                    return [\n                        4,\n                        campaign.methods.getRequestsCount().call()\n                    ];\n                case 1:\n                    requestCount = _state.sent();\n                    return [\n                        4,\n                        Promise.all(Array(parseInt(requestCount)).fill().map(function(element, index) {\n                            return campaign.methods.requests(index).call();\n                        }))\n                    ];\n                case 2:\n                    requests = _state.sent();\n                    return [\n                        4,\n                        (0,_utils_getCampaignSummary__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(address)\n                    ];\n                case 3:\n                    summary = _state.sent();\n                    return [\n                        2,\n                        {\n                            summary: summary,\n                            requests: requests\n                        }\n                    ];\n            }\n        });\n    });\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestsIndex);\nvar _c;\n$RefreshReg$(_c, \"RequestsIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdL3JlcXVlc3RzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUFtRDtBQUNtQjtBQUNkO0FBQ1c7QUFDdEM7QUFDd0I7QUFDUjtBQUNjO0FBRTNELElBQU1ZLGFBQWEsR0FBRyxnQkFBMkI7UUFBeEJDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7O0lBQ3hDLElBQThCWixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQW5DYSxPQUFPLEdBQWdCYixHQUFZLEdBQTVCLEVBQUVjLFVBQVUsR0FBSWQsR0FBWSxHQUFoQjtJQUMxQixJQUFvQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUE1Q2UsVUFBVSxHQUFtQmYsSUFBZSxHQUFsQyxFQUFFZ0IsYUFBYSxHQUFJaEIsSUFBZSxHQUFuQjtJQUVoQ0QsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2IsK0ZBQVk7Z0JBQ0xrQixRQUFRLEVBRVJDLFFBQVE7Ozs7d0JBRkc7OzRCQUFNVixzRUFBb0IsRUFBRTswQkFBQTs7d0JBQXZDUyxRQUFRLEdBQUcsYUFBNEI7d0JBQzdDSCxVQUFVLENBQUNHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsQkMsUUFBUSxHQUFHWCw4REFBUSxDQUFDSSxPQUFPLENBQUNVLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7UUFDM0MscUVBQXFFO1FBQ3JFLDJCQUEyQjtRQUM3QixDQUFDLEdBQUcsQ0FBQztJQUNQLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQU1DLHNCQUFzQixHQUFHLFdBQU07UUFDbkMsSUFBSVgsT0FBTyxDQUFDWSxPQUFPLEtBQUtWLE9BQU8sRUFBRTtZQUMvQixxQkFDRSw4REFBQ1Asa0RBQUk7Z0JBQUNrQixJQUFJLEVBQUUsYUFBWSxDQUFrQixNQUFhLENBQTdCYixPQUFPLENBQUNVLE9BQU8sRUFBQyxl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QUFrQixDQUFDb0IsT0FBTyxDQUFDO3NCQUFBOztvQkFBM0NWLE9BQU8sR0FBRyxhQUFpQztvQkFDakQ7O3dCQUFPOzRCQUFFQSxPQUFPLEVBQVBBLE9BQU87NEJBQUVDLFFBQVEsRUFBUkEsUUFBUTt5QkFBRTtzQkFBQzs7O0lBQy9CLENBQUM7Ozs7R0FBQSxDQUFDO0FBRUYsK0RBQWVGLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdL3JlcXVlc3RzL2luZGV4LmpzPzI5Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBnZXRDYW1wYWlnblN1bW1hcnkgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxzL2dldENhbXBhaWduU3VtbWFyeVwiO1xuaW1wb3J0IHsgQnV0dG9uLCBHcmlkLCBUYWJsZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IENhbXBhaWduTGF5b3V0IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0NhbXBhaWduTGF5b3V0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xuaW1wb3J0IFJlcXVlc3RSb3cgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvUmVxdWVzdFJvd1wiO1xuXG5jb25zdCBSZXF1ZXN0c0luZGV4ID0gKHsgc3VtbWFyeSwgcmVxdWVzdHMgfSkgPT4ge1xuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzQXBwcm92ZXIsIHNldElzQXBwcm92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgIHNldEFjY291bnQoYWNjb3VudHNbMF0pO1xuICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihzdW1tYXJ5LmFkZHJlc3MpO1xuICAgICAgLy8gY29uc3QgYXBwcm92ZXIgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVycyhhY2NvdW50KS5jYWxsKCk7XG4gICAgICAvLyBzZXRJc0FwcHJvdmVyKGFwcHJvdmVyKTtcbiAgICB9KSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcmVuZGVyQWRkUmVxdWVzdEJ1dHRvbiA9ICgpID0+IHtcbiAgICBpZiAoc3VtbWFyeS5tYW5hZ2VyID09PSBhY2NvdW50KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPXtgL2NhbXBhaWducy8ke3N1bW1hcnkuYWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8QnV0dG9uIGZsb2F0ZWQ9XCJyaWdodFwiIHByaW1hcnk+XG4gICAgICAgICAgICAgIEFkZCBSZXF1ZXN0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckFjdGlvbk9wdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYWN0aW9uQ291bnQgPSAwO1xuICAgIGlmIChzdW1tYXJ5Lm1hbmFnZXIgPT09IGFjY291bnQpIHtcbiAgICAgIGFjdGlvbkNvdW50Kys7XG4gICAgICBjb25zb2xlLmxvZyhcIm1hbmFnZXJcIik7XG4gICAgfVxuICAgIGlmIChpc0FwcHJvdmVyKSB7XG4gICAgICBhY3Rpb25Db3VudCsrO1xuICAgICAgY29uc29sZS5sb2coXCJhcHByb3ZlclwiKTtcbiAgICB9XG4gICAgcmV0dXJuIDxIZWFkZXJDZWxsIGNvbFNwYW49e3NldEFjdGlvblBlcm1pc3Npb25zKCl9IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgQWN0aW9uc1xuICAgIDwvSGVhZGVyQ2VsbD47XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUm93cyA9ICgpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdHMubWFwKChyZXF1ZXN0LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIDxSZXF1ZXN0Um93IGtleT17aW5kZXh9IGlkPXtpbmRleH0gcmVxdWVzdD17cmVxdWVzdH0gLz47XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgeyBSb3csIEhlYWRlciwgSGVhZGVyQ2VsbCwgQm9keSB9ID0gVGFibGU7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FtcGFpZ25MYXlvdXRcbiAgICAgIG5hbWU9e3N1bW1hcnkubmFtZX1cbiAgICAgIGRlc2NyaXB0aW9uPXtzdW1tYXJ5LmRlc2NyaXB0aW9ufVxuICAgICAgc3RhdGlzdGljcz17e1xuICAgICAgICBcIkFjdGl2ZSBSZXF1ZXN0c1wiOiBzdW1tYXJ5LnJlcXVlc3RzQ291bnQsXG4gICAgICAgIFwiVG90YWwgU3BlbnRcIjogYCR7c3VtbWFyeS50b3RhbEJhbGFuY2UgLSBzdW1tYXJ5LmN1cnJlbnRCYWxhbmNlfSBldGhlcmAsXG4gICAgICAgIFwiRmluYWxpc2VkIFJlcXVlc3RzXCI6IDAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJIZWFkaW5nXCI+Q2FtcGFpZ24gUmVxdWVzdHM6PC9oMT5cbiAgICAgIDxHcmlkIGNvbHVtbnM9XCJlcXVhbFwiPlxuICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxNH0+XG4gICAgICAgICAgICA8VGFibGUgY2VsbGVkIHN0cnVjdHVyZWQgZml4ZWQgc2luZ2xlTGluZT5cbiAgICAgICAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGwgcm93U3Bhbj1cIjJcIj5JRDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsIHJvd1NwYW49XCIyXCI+TmFtZTwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsIHJvd1NwYW49XCIyXCI+RGVzY3JpcHRpb248L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbCByb3dTcGFuPVwiMlwiPkFtb3VudCAoZXRoZXIpPC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGwgcm93U3Bhbj1cIjJcIj5SZWNpcGllbnQ8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbCByb3dTcGFuPVwiMlwiPkFwcHJvdmFsIENvdW50PC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAge3JlbmRlckFjdGlvbk9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICAgIDxCb2R5PntyZW5kZXJSb3dzKCl9PC9Cb2R5PlxuICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDxHcmlkLkNvbHVtbj57cmVuZGVyQWRkUmVxdWVzdEJ1dHRvbigpfTwvR3JpZC5Db2x1bW4+XG4gICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9DYW1wYWlnbkxheW91dD5cbiAgKTtcbn07XG5cblJlcXVlc3RzSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zdCBhZGRyZXNzID0gcXVlcnkuYWRkcmVzcztcbiAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcbiAgY29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpO1xuICBjb25zdCByZXF1ZXN0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIEFycmF5KHBhcnNlSW50KHJlcXVlc3RDb3VudCkpXG4gICAgICAuZmlsbCgpXG4gICAgICAubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5yZXF1ZXN0cyhpbmRleCkuY2FsbCgpO1xuICAgICAgfSlcbiAgKTtcbiAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGdldENhbXBhaWduU3VtbWFyeShhZGRyZXNzKTtcbiAgcmV0dXJuIHsgc3VtbWFyeSwgcmVxdWVzdHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RzSW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldENhbXBhaWduU3VtbWFyeSIsIkJ1dHRvbiIsIkdyaWQiLCJUYWJsZSIsIkNhbXBhaWduTGF5b3V0IiwiTGluayIsIkNhbXBhaWduIiwid2ViMyIsIlJlcXVlc3RSb3ciLCJSZXF1ZXN0c0luZGV4Iiwic3VtbWFyeSIsInJlcXVlc3RzIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJpc0FwcHJvdmVyIiwic2V0SXNBcHByb3ZlciIsImFjY291bnRzIiwiY2FtcGFpZ24iLCJldGgiLCJnZXRBY2NvdW50cyIsImFkZHJlc3MiLCJyZW5kZXJBZGRSZXF1ZXN0QnV0dG9uIiwibWFuYWdlciIsImhyZWYiLCJhIiwiZmxvYXRlZCIsInByaW1hcnkiLCJyZW5kZXJBY3Rpb25PcHRpb25zIiwiYWN0aW9uQ291bnQiLCJjb25zb2xlIiwibG9nIiwiSGVhZGVyQ2VsbCIsImNvbFNwYW4iLCJzZXRBY3Rpb25QZXJtaXNzaW9ucyIsInRleHRBbGlnbiIsInJlbmRlclJvd3MiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJpZCIsIlJvdyIsIkhlYWRlciIsIkJvZHkiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJzdGF0aXN0aWNzIiwicmVxdWVzdHNDb3VudCIsInRvdGFsQmFsYW5jZSIsImN1cnJlbnRCYWxhbmNlIiwiaDEiLCJjbGFzc05hbWUiLCJjb2x1bW5zIiwiQ29sdW1uIiwid2lkdGgiLCJjZWxsZWQiLCJzdHJ1Y3R1cmVkIiwiZml4ZWQiLCJzaW5nbGVMaW5lIiwicm93U3BhbiIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwicmVxdWVzdENvdW50IiwibWV0aG9kcyIsImdldFJlcXVlc3RzQ291bnQiLCJjYWxsIiwiUHJvbWlzZSIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/[address]/requests/index.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[address]",{

/***/ "./pages/campaigns/[address].js":
/*!**************************************!*\
  !*** ./pages/campaigns/[address].js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _components_Contribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Contribute */ \"./components/Contribute.js\");\n/* harmony import */ var _components_StatisticSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/StatisticSummary */ \"./components/StatisticSummary.js\");\n/* harmony import */ var _components_CampaignLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/CampaignLayout */ \"./components/CampaignLayout.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar CampaignDisplay = function(summary) {\n    var address = summary.address, name = summary.name, description = summary.description, goal = summary.goal, contibutionCount = summary.contibutionCount, minimumContribution = summary.minimumContribution, totalBalance = summary.totalBalance, currentBalance = summary.currentBalance, requestsCount = summary.requestsCount, approversCount = summary.approversCount, manager = summary.manager;\n    var percentFunded = (_ethereum_web3__WEBPACK_IMPORTED_MODULE_7__[\"default\"].utils.fromWei(totalBalance, \"ether\") / goal * 100).toFixed(3);\n    var renderCards = function() {\n        var items = [\n            {\n                header: manager,\n                meta: \"Address of Manager\",\n                description: \"The manager created this campaign and can create requests to withdraw money\",\n                style: {\n                    overflowWrap: \"break-word\"\n                }\n            },\n            {\n                header: minimumContribution,\n                meta: \"Minimum Contribution (wei)\",\n                description: \"You must contribute at least this much wei to become an approver\"\n            },\n            {\n                header: requestsCount,\n                meta: \"Number of Requests\",\n                description: \"A request tries to withdraw money from the contract. Requests must be approved by approvers\"\n            },\n            {\n                header: approversCount,\n                meta: \"Number of Approvers\",\n                description: \"Number of people who have already donated to this campaign\"\n            },\n            {\n                header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__[\"default\"].utils.fromWei(currentBalance, \"ether\"),\n                meta: \"Current Balance (ether)\",\n                description: \"The balance is how much money this campaign has left to spend\"\n            }, \n        ];\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Group, {\n            items: items\n        }, void 0, false, {\n            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n            lineNumber: 65,\n            columnNumber: 12\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CampaignLayout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        name: name,\n        description: d,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StatisticSummary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                statistics: {\n                    \"Total Raised\": \"\".concat(_ethereum_web3__WEBPACK_IMPORTED_MODULE_7__[\"default\"].utils.fromWei(totalBalance.toString(), \"ether\"), \" ether\"),\n                    \"Number of Contributions\": contibutionCount,\n                    \"Percentage Funded\": \"\".concat(percentFunded, \"%\")\n                }\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"Heading\",\n                children: \"Campaign Details:\"\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                columns: \"equal\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Row, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Column, {\n                                width: 12,\n                                children: renderCards()\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Column, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contribute__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    address: address\n                                }, void 0, false, {\n                                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Row, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Column, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/campaigns/\".concat(address, \"/requests\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                        primary: true,\n                                        content: \"View Requests\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                                        lineNumber: 92,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, _this);\n};\n_c = CampaignDisplay;\nCampaignDisplay.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(function(param) {\n        var query, address, campaign, summary;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    query = param.query;\n                    address = query.address;\n                    campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(address);\n                    return [\n                        4,\n                        campaign.methods.getSummary().call()\n                    ];\n                case 1:\n                    summary = _state.sent();\n                    return [\n                        2,\n                        {\n                            address: address,\n                            name: summary[0],\n                            description: summary[1],\n                            goal: summary[2],\n                            contibutionCount: summary[3],\n                            minimumContribution: summary[4],\n                            totalBalance: summary[5],\n                            currentBalance: summary[6],\n                            requestsCount: summary[7],\n                            approversCount: summary[8],\n                            manager: summary[9]\n                        }\n                    ];\n            }\n        });\n    });\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignDisplay);\nvar _c;\n$RefreshReg$(_c, \"CampaignDisplay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEJBQzVCTSxtQkFBbUIsRUFBRU4sT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDL0JPLFlBQVksRUFBRVAsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDeEJRLGNBQWMsRUFBRVIsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDMUJTLGFBQWEsRUFBRVQsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDekJVLGNBQWMsRUFBRVYsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDMUJXLE9BQU8sRUFBRVgsT0FBTyxDQUFDLENBQUMsQ0FBQzt5QkFDcEI7c0JBQUM7OztJQUNKLENBQUM7Ozs7R0FBQSxDQUFDO0FBRUYsK0RBQWVELGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdLmpzPzhkYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR3JpZCwgQ2FyZCwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XG5pbXBvcnQgQ29udHJpYnV0ZUZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udHJpYnV0ZVwiO1xuaW1wb3J0IFN0YXRpc3RpY1N1bW1hcnkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU3RhdGlzdGljU3VtbWFyeVwiO1xuaW1wb3J0IENhbXBhaWduTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhbXBhaWduTGF5b3V0XCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xuXG5jb25zdCBDYW1wYWlnbkRpc3BsYXkgPSAoc3VtbWFyeSkgPT4ge1xuICBjb25zdCB7XG4gICAgYWRkcmVzcyxcbiAgICBuYW1lLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGdvYWwsXG4gICAgY29udGlidXRpb25Db3VudCxcbiAgICBtaW5pbXVtQ29udHJpYnV0aW9uLFxuICAgIHRvdGFsQmFsYW5jZSxcbiAgICBjdXJyZW50QmFsYW5jZSxcbiAgICByZXF1ZXN0c0NvdW50LFxuICAgIGFwcHJvdmVyc0NvdW50LFxuICAgIG1hbmFnZXIsXG4gIH0gPSBzdW1tYXJ5O1xuXG4gIGNvbnN0IHBlcmNlbnRGdW5kZWQgPSAoXG4gICAgKHdlYjMudXRpbHMuZnJvbVdlaSh0b3RhbEJhbGFuY2UsIFwiZXRoZXJcIikgLyBnb2FsKSAqXG4gICAgMTAwXG4gICkudG9GaXhlZCgzKTtcblxuICBjb25zdCByZW5kZXJDYXJkcyA9ICgpID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBtYW5hZ2VyLFxuICAgICAgICBtZXRhOiBcIkFkZHJlc3Mgb2YgTWFuYWdlclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlRoZSBtYW5hZ2VyIGNyZWF0ZWQgdGhpcyBjYW1wYWlnbiBhbmQgY2FuIGNyZWF0ZSByZXF1ZXN0cyB0byB3aXRoZHJhdyBtb25leVwiLFxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IG1pbmltdW1Db250cmlidXRpb24sXG4gICAgICAgIG1ldGE6IFwiTWluaW11bSBDb250cmlidXRpb24gKHdlaSlcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJZb3UgbXVzdCBjb250cmlidXRlIGF0IGxlYXN0IHRoaXMgbXVjaCB3ZWkgdG8gYmVjb21lIGFuIGFwcHJvdmVyXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IHJlcXVlc3RzQ291bnQsXG4gICAgICAgIG1ldGE6IFwiTnVtYmVyIG9mIFJlcXVlc3RzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQSByZXF1ZXN0IHRyaWVzIHRvIHdpdGhkcmF3IG1vbmV5IGZyb20gdGhlIGNvbnRyYWN0LiBSZXF1ZXN0cyBtdXN0IGJlIGFwcHJvdmVkIGJ5IGFwcHJvdmVyc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBhcHByb3ZlcnNDb3VudCxcbiAgICAgICAgbWV0YTogXCJOdW1iZXIgb2YgQXBwcm92ZXJzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiTnVtYmVyIG9mIHBlb3BsZSB3aG8gaGF2ZSBhbHJlYWR5IGRvbmF0ZWQgdG8gdGhpcyBjYW1wYWlnblwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiB3ZWIzLnV0aWxzLmZyb21XZWkoY3VycmVudEJhbGFuY2UsIFwiZXRoZXJcIiksXG4gICAgICAgIG1ldGE6IFwiQ3VycmVudCBCYWxhbmNlIChldGhlcilcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJUaGUgYmFsYW5jZSBpcyBob3cgbXVjaCBtb25leSB0aGlzIGNhbXBhaWduIGhhcyBsZWZ0IHRvIHNwZW5kXCIsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDYW1wYWlnbkxheW91dCBuYW1lPXtuYW1lfSBkZXNjcmlwdGlvbj17ZH0+XG4gICAgICA8U3RhdGlzdGljU3VtbWFyeVxuICAgICAgICBzdGF0aXN0aWNzPXt7XG4gICAgICAgICAgXCJUb3RhbCBSYWlzZWRcIjogYCR7d2ViMy51dGlscy5mcm9tV2VpKFxuICAgICAgICAgICAgdG90YWxCYWxhbmNlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBcImV0aGVyXCJcbiAgICAgICAgICApfSBldGhlcmAsXG4gICAgICAgICAgXCJOdW1iZXIgb2YgQ29udHJpYnV0aW9uc1wiOiBjb250aWJ1dGlvbkNvdW50LFxuICAgICAgICAgIFwiUGVyY2VudGFnZSBGdW5kZWRcIjogYCR7cGVyY2VudEZ1bmRlZH0lYCxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwiSGVhZGluZ1wiPkNhbXBhaWduIERldGFpbHM6PC9oMz5cbiAgICAgIDxHcmlkIGNvbHVtbnM9XCJlcXVhbFwiPlxuICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMn0+e3JlbmRlckNhcmRzKCl9PC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8Q29udHJpYnV0ZUZvcm0gYWRkcmVzcz17YWRkcmVzc30gLz5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jYW1wYWlnbnMvJHthZGRyZXNzfS9yZXF1ZXN0c2B9PlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgY29udGVudD1cIlZpZXcgUmVxdWVzdHNcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NhbXBhaWduTGF5b3V0PlxuICApO1xufTtcblxuQ2FtcGFpZ25EaXNwbGF5LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgYWRkcmVzcyA9IHF1ZXJ5LmFkZHJlc3M7XG4gIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XG4gIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG4gIHJldHVybiB7XG4gICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICBuYW1lOiBzdW1tYXJ5WzBdLFxuICAgIGRlc2NyaXB0aW9uOiBzdW1tYXJ5WzFdLFxuICAgIGdvYWw6IHN1bW1hcnlbMl0sXG4gICAgY29udGlidXRpb25Db3VudDogc3VtbWFyeVszXSxcbiAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBzdW1tYXJ5WzRdLFxuICAgIHRvdGFsQmFsYW5jZTogc3VtbWFyeVs1XSxcbiAgICBjdXJyZW50QmFsYW5jZTogc3VtbWFyeVs2XSxcbiAgICByZXF1ZXN0c0NvdW50OiBzdW1tYXJ5WzddLFxuICAgIGFwcHJvdmVyc0NvdW50OiBzdW1tYXJ5WzhdLFxuICAgIG1hbmFnZXI6IHN1bW1hcnlbOV0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkRpc3BsYXk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJHcmlkIiwiQ2FyZCIsIkJ1dHRvbiIsIkxpbmsiLCJDYW1wYWlnbiIsIkNvbnRyaWJ1dGVGb3JtIiwiU3RhdGlzdGljU3VtbWFyeSIsIkNhbXBhaWduTGF5b3V0Iiwid2ViMyIsIkNhbXBhaWduRGlzcGxheSIsInN1bW1hcnkiLCJhZGRyZXNzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZ29hbCIsImNvbnRpYnV0aW9uQ291bnQiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwidG90YWxCYWxhbmNlIiwiY3VycmVudEJhbGFuY2UiLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJtYW5hZ2VyIiwicGVyY2VudEZ1bmRlZCIsInV0aWxzIiwiZnJvbVdlaSIsInRvRml4ZWQiLCJyZW5kZXJDYXJkcyIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiR3JvdXAiLCJkIiwic3RhdGlzdGljcyIsInRvU3RyaW5nIiwiaDMiLCJjbGFzc05hbWUiLCJjb2x1bW5zIiwiUm93IiwiQ29sdW1uIiwid2lkdGgiLCJocmVmIiwiYSIsInByaW1hcnkiLCJjb250ZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/[address].js\n"));

/***/ })

});
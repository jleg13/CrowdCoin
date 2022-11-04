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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _components_Contribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Contribute */ \"./components/Contribute.js\");\n/* harmony import */ var _components_StatisticSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/StatisticSummary */ \"./components/StatisticSummary.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar CampaignDisplay = function(summary) {\n    var address = summary.address, name = summary.name, description = summary.description, goal = summary.goal, totalNumContibutions = summary.totalNumContibutions, minimumContribution = summary.minimumContribution, balance = summary.balance, requestsCount = summary.requestsCount, approversCount = summary.approversCount, manager = summary.manager;\n    var percentFunded = (balance / goal * 100).toFixed(3);\n    var renderCards = function() {\n        var items = [\n            {\n                header: manager,\n                meta: \"Address of Manager\",\n                description: \"The manager created this campaign and can create requests to withdraw money\",\n                style: {\n                    overflowWrap: \"break-word\"\n                }\n            },\n            {\n                header: minimumContribution,\n                meta: \"Minimum Contribution (wei)\",\n                description: \"You must contribute at least this much wei to become an approver\"\n            },\n            {\n                header: requestsCount,\n                meta: \"Number of Requests\",\n                description: \"A request tries to withdraw money from the contract. Requests must be approved by approvers\"\n            },\n            {\n                header: approversCount,\n                meta: \"Number of Approvers\",\n                description: \"Number of people who have already donated to this campaign\"\n            },\n            {\n                header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__[\"default\"].utils.fromWei(balance, \"ether\"),\n                meta: \"Current Balance (ether)\",\n                description: \"The balance is how much money this campaign has left to spend\"\n            }, \n        ];\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Card.Group, {\n            items: items\n        }, void 0, false, {\n            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n            lineNumber: 60,\n            columnNumber: 12\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Header, {\n                as: \"h2\",\n                textAlign: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Header.Content, {\n                    children: [\n                        name,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Header.Subheader, {\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StatisticSummary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                statistics: {\n                    \"Total Raised\": 1,\n                    \"Number of Contributions\": totalNumContibutions,\n                    \"Percentage Funded\": \"\".concat(percentFunded, \"%\")\n                }\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"Heading\",\n                children: \"Campaign Details:\"\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                columns: \"equal\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Column, {\n                            width: 12,\n                            children: renderCards()\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Column, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contribute__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                address: address\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, _this);\n};\n_c = CampaignDisplay;\nCampaignDisplay.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function(param) {\n        var query, address, campaign, summary;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    query = param.query;\n                    address = query.address;\n                    campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(address);\n                    return [\n                        4,\n                        campaign.methods.getSummary().call()\n                    ];\n                case 1:\n                    summary = _state.sent();\n                    return [\n                        2,\n                        {\n                            address: address,\n                            name: summary[0],\n                            description: summary[1],\n                            goal: summary[2],\n                            contibutionCount: summary[3],\n                            minimumContribution: summary[4],\n                            totalBalance: summary[5],\n                            currentBalance: summary[6],\n                            requestsCount: summary[7],\n                            approversCount: summary[8],\n                            manager: summary[9]\n                        }\n                    ];\n            }\n        });\n    });\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignDisplay);\nvar _c;\n$RefreshReg$(_c, \"CampaignDisplay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUQsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9bYWRkcmVzc10uanM/OGRhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHcmlkLCBDYXJkLCBIZWFkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XG5pbXBvcnQgQ29udHJpYnV0ZUZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udHJpYnV0ZVwiO1xuaW1wb3J0IFN0YXRpc3RpY1N1bW1hcnkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU3RhdGlzdGljU3VtbWFyeVwiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcblxuY29uc3QgQ2FtcGFpZ25EaXNwbGF5ID0gKHN1bW1hcnkpID0+IHtcbiAgY29uc3Qge1xuICAgIGFkZHJlc3MsXG4gICAgbmFtZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBnb2FsLFxuICAgIHRvdGFsTnVtQ29udGlidXRpb25zLFxuICAgIG1pbmltdW1Db250cmlidXRpb24sXG4gICAgYmFsYW5jZSxcbiAgICByZXF1ZXN0c0NvdW50LFxuICAgIGFwcHJvdmVyc0NvdW50LFxuICAgIG1hbmFnZXIsXG4gIH0gPSBzdW1tYXJ5O1xuXG4gIGNvbnN0IHBlcmNlbnRGdW5kZWQgPSAoKGJhbGFuY2UgLyBnb2FsKSAqIDEwMCkudG9GaXhlZCgzKTtcblxuICBjb25zdCByZW5kZXJDYXJkcyA9ICgpID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBtYW5hZ2VyLFxuICAgICAgICBtZXRhOiBcIkFkZHJlc3Mgb2YgTWFuYWdlclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlRoZSBtYW5hZ2VyIGNyZWF0ZWQgdGhpcyBjYW1wYWlnbiBhbmQgY2FuIGNyZWF0ZSByZXF1ZXN0cyB0byB3aXRoZHJhdyBtb25leVwiLFxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IG1pbmltdW1Db250cmlidXRpb24sXG4gICAgICAgIG1ldGE6IFwiTWluaW11bSBDb250cmlidXRpb24gKHdlaSlcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJZb3UgbXVzdCBjb250cmlidXRlIGF0IGxlYXN0IHRoaXMgbXVjaCB3ZWkgdG8gYmVjb21lIGFuIGFwcHJvdmVyXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IHJlcXVlc3RzQ291bnQsXG4gICAgICAgIG1ldGE6IFwiTnVtYmVyIG9mIFJlcXVlc3RzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQSByZXF1ZXN0IHRyaWVzIHRvIHdpdGhkcmF3IG1vbmV5IGZyb20gdGhlIGNvbnRyYWN0LiBSZXF1ZXN0cyBtdXN0IGJlIGFwcHJvdmVkIGJ5IGFwcHJvdmVyc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBhcHByb3ZlcnNDb3VudCxcbiAgICAgICAgbWV0YTogXCJOdW1iZXIgb2YgQXBwcm92ZXJzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiTnVtYmVyIG9mIHBlb3BsZSB3aG8gaGF2ZSBhbHJlYWR5IGRvbmF0ZWQgdG8gdGhpcyBjYW1wYWlnblwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiB3ZWIzLnV0aWxzLmZyb21XZWkoYmFsYW5jZSwgXCJldGhlclwiKSxcbiAgICAgICAgbWV0YTogXCJDdXJyZW50IEJhbGFuY2UgKGV0aGVyKVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlRoZSBiYWxhbmNlIGlzIGhvdyBtdWNoIG1vbmV5IHRoaXMgY2FtcGFpZ24gaGFzIGxlZnQgdG8gc3BlbmRcIixcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkZXIgYXM9XCJoMlwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8SGVhZGVyLkNvbnRlbnQ+XG4gICAgICAgICAge25hbWV9XG4gICAgICAgICAgPEhlYWRlci5TdWJoZWFkZXI+e2Rlc2NyaXB0aW9ufTwvSGVhZGVyLlN1YmhlYWRlcj5cbiAgICAgICAgPC9IZWFkZXIuQ29udGVudD5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPFN0YXRpc3RpY1N1bW1hcnlcbiAgICAgICAgc3RhdGlzdGljcz17e1xuICAgICAgICAgIFwiVG90YWwgUmFpc2VkXCI6IDEsXG4gICAgICAgICAgXCJOdW1iZXIgb2YgQ29udHJpYnV0aW9uc1wiOiB0b3RhbE51bUNvbnRpYnV0aW9ucyxcbiAgICAgICAgICBcIlBlcmNlbnRhZ2UgRnVuZGVkXCI6IGAke3BlcmNlbnRGdW5kZWR9JWAsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cIkhlYWRpbmdcIj5DYW1wYWlnbiBEZXRhaWxzOjwvaDM+XG4gICAgICA8R3JpZCBjb2x1bW5zPVwiZXF1YWxcIj5cbiAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTJ9PntyZW5kZXJDYXJkcygpfTwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPENvbnRyaWJ1dGVGb3JtIGFkZHJlc3M9e2FkZHJlc3N9IC8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbkNhbXBhaWduRGlzcGxheS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IGFkZHJlc3MgPSBxdWVyeS5hZGRyZXNzO1xuICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xuICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xuICByZXR1cm4ge1xuICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgbmFtZTogc3VtbWFyeVswXSxcbiAgICBkZXNjcmlwdGlvbjogc3VtbWFyeVsxXSxcbiAgICBnb2FsOiBzdW1tYXJ5WzJdLFxuICAgIGNvbnRpYnV0aW9uQ291bnQ6IHN1bW1hcnlbM10sXG4gICAgbWluaW11bUNvbnRyaWJ1dGlvbjogc3VtbWFyeVs0XSxcbiAgICB0b3RhbEJhbGFuY2U6IHN1bW1hcnlbNV0sXG4gICAgY3VycmVudEJhbGFuY2U6IHN1bW1hcnlbNl0sXG4gICAgcmVxdWVzdHNDb3VudDogc3VtbWFyeVs3XSxcbiAgICBhcHByb3ZlcnNDb3VudDogc3VtbWFyeVs4XSxcbiAgICBtYW5hZ2VyOiBzdW1tYXJ5WzldLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25EaXNwbGF5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiR3JpZCIsIkNhcmQiLCJIZWFkZXIiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNvbnRyaWJ1dGVGb3JtIiwiU3RhdGlzdGljU3VtbWFyeSIsIndlYjMiLCJDYW1wYWlnbkRpc3BsYXkiLCJzdW1tYXJ5IiwiYWRkcmVzcyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImdvYWwiLCJ0b3RhbE51bUNvbnRpYnV0aW9ucyIsIm1pbmltdW1Db250cmlidXRpb24iLCJiYWxhbmNlIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwibWFuYWdlciIsInBlcmNlbnRGdW5kZWQiLCJ0b0ZpeGVkIiwicmVuZGVyQ2FyZHMiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsIkdyb3VwIiwiYXMiLCJ0ZXh0QWxpZ24iLCJDb250ZW50IiwiU3ViaGVhZGVyIiwic3RhdGlzdGljcyIsImgzIiwiY2xhc3NOYW1lIiwiY29sdW1ucyIsIlJvdyIsIkNvbHVtbiIsIndpZHRoIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsImNvbnRpYnV0aW9uQ291bnQiLCJ0b3RhbEJhbGFuY2UiLCJjdXJyZW50QmFsYW5jZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/[address].js\n"));

/***/ })

});
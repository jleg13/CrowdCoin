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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_StatisticSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/StatisticSummary */ \"./components/StatisticSummary.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar CampaignIndex = function(param) {\n    var campaigns = param.campaigns;\n    var renderCampaigns = function() {\n        return campaigns.map(function(campaign) {\n            var percentFunded = (web / campaign.goal * 100).toFixed(2);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card, {\n                href: \"/campaigns/\".concat(campaign.address),\n                header: campaign.name,\n                meta: \"\".concat(percentFunded, \"% funded\"),\n                description: campaign.description,\n                fluid: true\n            }, campaign.address, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, _this);\n        });\n    };\n    var totalContributions = campaigns.reduce(function(total, campaign) {\n        return total + campaign.totalNumContibutions;\n    }, 0);\n    var numberContributions = campaigns.reduce(function(total, campaign) {\n        return total + campaign.contibutionCount;\n    }, 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Header, {\n                as: \"h2\",\n                textAlign: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Header.Content, {\n                    children: \"The future of sercure and transparent project funding.\"\n                }, void 0, false, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StatisticSummary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                statistics: {\n                    \"Projects funded\": campaigns.length,\n                    \"Total Contributions\": \"\".concat(totalContributions, \" ether\"),\n                    \"Number Contributions\": numberContributions\n                }\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"Heading\",\n                children: \"Current Campaigns:\"\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                columns: \"equal\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Column, {\n                            width: 10,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Group, {\n                                children: renderCampaigns()\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Column, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                href: \"/campaigns/new\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                        floated: \"right\",\n                                        content: \"Create Campaign\",\n                                        icon: \"add circle\",\n                                        primary: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this);\n};\n_c = CampaignIndex;\nCampaignIndex.getInitialProps = /*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(function() {\n    var campaignAddresses, campaigns;\n    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(this, function(_state) {\n        switch(_state.label){\n            case 0:\n                return [\n                    4,\n                    _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.getDeployedCampaigns().call()\n                ];\n            case 1:\n                campaignAddresses = _state.sent();\n                return [\n                    4,\n                    Promise.all(campaignAddresses.map(function() {\n                        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(function(address) {\n                            var campaign, summary;\n                            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(this, function(_state) {\n                                switch(_state.label){\n                                    case 0:\n                                        campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(address);\n                                        return [\n                                            4,\n                                            campaign.methods.getSummary().call()\n                                        ];\n                                    case 1:\n                                        summary = _state.sent();\n                                        return [\n                                            2,\n                                            {\n                                                address: address,\n                                                name: summary[0],\n                                                description: summary[1],\n                                                goal: summary[2],\n                                                contibutionCount: summary[3],\n                                                minimumContribution: summary[4],\n                                                totalBalance: summary[5],\n                                                currentBalance: summary[6],\n                                                requestsCount: summary[7],\n                                                approversCount: summary[8],\n                                                manager: summary[9]\n                                            }\n                                        ];\n                                }\n                            });\n                        });\n                        return function(address) {\n                            return _ref.apply(this, arguments);\n                        };\n                    }()))\n                ];\n            case 2:\n                campaigns = _state.sent();\n                return [\n                    2,\n                    {\n                        campaigns: campaigns\n                    }\n                ];\n        }\n    });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\nvar _c;\n$RefreshReg$(_c, \"CampaignIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDs7b0JBQU87d0JBQUVBLFNBQVMsRUFBVEEsU0FBUztxQkFBRTtrQkFBQzs7O0FBQ3ZCLENBQUMsRUFBQztBQUVGLCtEQUFlRCxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vZXRoZXJldW0vZmFjdG9yeVwiO1xuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uLCBHcmlkLCBIZWFkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgU3RhdGlzdGljU3VtbWFyeSBmcm9tIFwiLi4vY29tcG9uZW50cy9TdGF0aXN0aWNTdW1tYXJ5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xuXG5jb25zdCBDYW1wYWlnbkluZGV4ID0gKHsgY2FtcGFpZ25zIH0pID0+IHtcbiAgY29uc3QgcmVuZGVyQ2FtcGFpZ25zID0gKCkgPT4ge1xuICAgIHJldHVybiBjYW1wYWlnbnMubWFwKChjYW1wYWlnbikgPT4ge1xuICAgICAgY29uc3QgcGVyY2VudEZ1bmRlZCA9IChcbiAgICAgICAgKHdlYiAvIGNhbXBhaWduLmdvYWwpICpcbiAgICAgICAgMTAwXG4gICAgICApLnRvRml4ZWQoMik7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGtleT17Y2FtcGFpZ24uYWRkcmVzc31cbiAgICAgICAgICBocmVmPXtgL2NhbXBhaWducy8ke2NhbXBhaWduLmFkZHJlc3N9YH1cbiAgICAgICAgICBoZWFkZXI9e2NhbXBhaWduLm5hbWV9XG4gICAgICAgICAgbWV0YT17YCR7cGVyY2VudEZ1bmRlZH0lIGZ1bmRlZGB9XG4gICAgICAgICAgZGVzY3JpcHRpb249e2NhbXBhaWduLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIGZsdWlkXG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHRvdGFsQ29udHJpYnV0aW9ucyA9IGNhbXBhaWducy5yZWR1Y2UoKHRvdGFsLCBjYW1wYWlnbikgPT4ge1xuICAgIHJldHVybiB0b3RhbCArIGNhbXBhaWduLnRvdGFsTnVtQ29udGlidXRpb25zO1xuICB9LCAwKTtcblxuICBjb25zdCBudW1iZXJDb250cmlidXRpb25zID0gY2FtcGFpZ25zLnJlZHVjZSgodG90YWwsIGNhbXBhaWduKSA9PiB7XG4gICAgcmV0dXJuIHRvdGFsICsgY2FtcGFpZ24uY29udGlidXRpb25Db3VudDtcbiAgfSwgMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWRlciBhcz1cImgyXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIDxIZWFkZXIuQ29udGVudD5cbiAgICAgICAgICBUaGUgZnV0dXJlIG9mIHNlcmN1cmUgYW5kIHRyYW5zcGFyZW50IHByb2plY3QgZnVuZGluZy5cbiAgICAgICAgPC9IZWFkZXIuQ29udGVudD5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPFN0YXRpc3RpY1N1bW1hcnlcbiAgICAgICAgc3RhdGlzdGljcz17e1xuICAgICAgICAgIFwiUHJvamVjdHMgZnVuZGVkXCI6IGNhbXBhaWducy5sZW5ndGgsXG4gICAgICAgICAgXCJUb3RhbCBDb250cmlidXRpb25zXCI6IGAke3RvdGFsQ29udHJpYnV0aW9uc30gZXRoZXJgLFxuICAgICAgICAgIFwiTnVtYmVyIENvbnRyaWJ1dGlvbnNcIjogbnVtYmVyQ29udHJpYnV0aW9ucyxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiSGVhZGluZ1wiPkN1cnJlbnQgQ2FtcGFpZ25zOjwvaDE+XG4gICAgICA8R3JpZCBjb2x1bW5zPVwiZXF1YWxcIj5cbiAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9PlxuICAgICAgICAgICAgPENhcmQuR3JvdXA+e3JlbmRlckNhbXBhaWducygpfTwvQ2FyZC5Hcm91cD5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FtcGFpZ25zL25ld1wiPlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgY29udGVudD1cIkNyZWF0ZSBDYW1wYWlnblwiXG4gICAgICAgICAgICAgICAgICBpY29uPVwiYWRkIGNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5DYW1wYWlnbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY2FtcGFpZ25BZGRyZXNzZXMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XG4gIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIGNhbXBhaWduQWRkcmVzc2VzLm1hcChhc3luYyAoYWRkcmVzcykgPT4ge1xuICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcbiAgICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICBuYW1lOiBzdW1tYXJ5WzBdLFxuICAgICAgICBkZXNjcmlwdGlvbjogc3VtbWFyeVsxXSxcbiAgICAgICAgZ29hbDogc3VtbWFyeVsyXSxcbiAgICAgICAgY29udGlidXRpb25Db3VudDogc3VtbWFyeVszXSxcbiAgICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjogc3VtbWFyeVs0XSxcbiAgICAgICAgdG90YWxCYWxhbmNlOiBzdW1tYXJ5WzVdLFxuICAgICAgICBjdXJyZW50QmFsYW5jZTogc3VtbWFyeVs2XSxcbiAgICAgICAgcmVxdWVzdHNDb3VudDogc3VtbWFyeVs3XSxcbiAgICAgICAgYXBwcm92ZXJzQ291bnQ6IHN1bW1hcnlbOF0sXG4gICAgICAgIG1hbmFnZXI6IHN1bW1hcnlbOV0sXG4gICAgICB9O1xuICAgIH0pXG4gICk7XG4gIHJldHVybiB7IGNhbXBhaWducyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImZhY3RvcnkiLCJDYW1wYWlnbiIsIkNhcmQiLCJCdXR0b24iLCJHcmlkIiwiSGVhZGVyIiwiTGF5b3V0IiwiU3RhdGlzdGljU3VtbWFyeSIsIkxpbmsiLCJ3ZWIzIiwiQ2FtcGFpZ25JbmRleCIsImNhbXBhaWducyIsInJlbmRlckNhbXBhaWducyIsIm1hcCIsImNhbXBhaWduIiwicGVyY2VudEZ1bmRlZCIsIndlYiIsImdvYWwiLCJ0b0ZpeGVkIiwiaHJlZiIsImFkZHJlc3MiLCJoZWFkZXIiLCJuYW1lIiwibWV0YSIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJ0b3RhbENvbnRyaWJ1dGlvbnMiLCJyZWR1Y2UiLCJ0b3RhbCIsInRvdGFsTnVtQ29udGlidXRpb25zIiwibnVtYmVyQ29udHJpYnV0aW9ucyIsImNvbnRpYnV0aW9uQ291bnQiLCJhcyIsInRleHRBbGlnbiIsIkNvbnRlbnQiLCJzdGF0aXN0aWNzIiwibGVuZ3RoIiwiaDEiLCJjbGFzc05hbWUiLCJjb2x1bW5zIiwiUm93IiwiQ29sdW1uIiwid2lkdGgiLCJHcm91cCIsImEiLCJmbG9hdGVkIiwiY29udGVudCIsImljb24iLCJwcmltYXJ5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY2FtcGFpZ25BZGRyZXNzZXMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwiUHJvbWlzZSIsImFsbCIsInN1bW1hcnkiLCJnZXRTdW1tYXJ5IiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInRvdGFsQmFsYW5jZSIsImN1cnJlbnRCYWxhbmNlIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwibWFuYWdlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
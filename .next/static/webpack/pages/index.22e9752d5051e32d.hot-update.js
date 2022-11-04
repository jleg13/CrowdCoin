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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_StatisticSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/StatisticSummary */ \"./components/StatisticSummary.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar CampaignIndex = function(param) {\n    var campaigns = param.campaigns;\n    var renderCampaigns = function() {\n        return campaigns.map(function(campaign) {\n            var percentFunded = (_ethereum_web3__WEBPACK_IMPORTED_MODULE_7__[\"default\"].utils.fromWei(campaign.totalBalance, \"ether\") / campaign.goal * 100).toFixed(2);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card, {\n                href: \"/campaigns/\".concat(campaign.address),\n                header: campaign.name,\n                meta: \"\".concat(percentFunded, \"% funded\"),\n                description: campaign.description,\n                fluid: true\n            }, campaign.address, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, _this);\n        });\n    };\n    var totalContributions = campaigns.reduce(function(total, campaign) {\n        return total + parseInt(campaign.totalBalance);\n    }, 0);\n    var numberContributions = campaigns.reduce(function(total, campaign) {\n        return total + campaign.contributionCount;\n    }, 0);\n    console.log(totalContributions);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Header, {\n                as: \"h2\",\n                textAlign: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Header.Content, {\n                    children: \"The future of sercure and transparent project funding.\"\n                }, void 0, false, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StatisticSummary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                statistics: {\n                    \"Projects funded\": campaigns.length,\n                    \"Total Contributions\": \"\".concat(_ethereum_web3__WEBPACK_IMPORTED_MODULE_7__[\"default\"].utils.fromWei(totalContributions, \"ether\"), \" ether\"),\n                    \"Number Contributions\": numberContributions\n                }\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"Heading\",\n                children: \"Current Campaigns:\"\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                columns: \"equal\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Column, {\n                            width: 10,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Group, {\n                                children: renderCampaigns()\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Column, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                href: \"/campaigns/new\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                        floated: \"right\",\n                                        content: \"Create Campaign\",\n                                        icon: \"add circle\",\n                                        primary: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/index.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, _this);\n};\n_c = CampaignIndex;\nCampaignIndex.getInitialProps = /*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(function() {\n    var campaignAddresses, campaigns;\n    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(this, function(_state) {\n        switch(_state.label){\n            case 0:\n                return [\n                    4,\n                    _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.getDeployedCampaigns().call()\n                ];\n            case 1:\n                campaignAddresses = _state.sent();\n                return [\n                    4,\n                    Promise.all(campaignAddresses.map(function() {\n                        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(function(address) {\n                            var campaign, summary;\n                            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(this, function(_state) {\n                                switch(_state.label){\n                                    case 0:\n                                        campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(address);\n                                        return [\n                                            4,\n                                            campaign.methods.getSummary().call()\n                                        ];\n                                    case 1:\n                                        summary = _state.sent();\n                                        return [\n                                            2,\n                                            {\n                                                address: address,\n                                                name: summary[0],\n                                                description: summary[1],\n                                                goal: summary[2],\n                                                contibutionCount: summary[3],\n                                                minimumContribution: summary[4],\n                                                totalBalance: summary[5],\n                                                currentBalance: summary[6],\n                                                requestsCount: summary[7],\n                                                approversCount: summary[8],\n                                                manager: summary[9]\n                                            }\n                                        ];\n                                }\n                            });\n                        });\n                        return function(address) {\n                            return _ref.apply(this, arguments);\n                        };\n                    }()))\n                ];\n            case 2:\n                campaigns = _state.sent();\n                return [\n                    2,\n                    {\n                        campaigns: campaigns\n                    }\n                ];\n        }\n    });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\nvar _c;\n$RefreshReg$(_c, \"CampaignIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7Z0RBQzFCTyxPQUFPLEVBQUVQLE9BQU8sQ0FBQyxDQUFDLENBQUM7NkNBQ3BCOzBDQUFDOzs7d0JBQ0osQ0FBQzt3Q0FoQjRCdEMsT0FBTzs7O3dCQWdCbEMsQ0FDSDtrQkFBQTs7Z0JBbEJLWCxTQUFTLEdBQUcsYUFrQmpCO2dCQUNEOztvQkFBTzt3QkFBRUEsU0FBUyxFQUFUQSxTQUFTO3FCQUFFO2tCQUFDOzs7QUFDdkIsQ0FBQyxFQUFDO0FBRUYsK0RBQWVELGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi9ldGhlcmV1bS9mYWN0b3J5XCI7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XG5pbXBvcnQgeyBDYXJkLCBCdXR0b24sIEdyaWQsIEhlYWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBTdGF0aXN0aWNTdW1tYXJ5IGZyb20gXCIuLi9jb21wb25lbnRzL1N0YXRpc3RpY1N1bW1hcnlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XG5cbmNvbnN0IENhbXBhaWduSW5kZXggPSAoeyBjYW1wYWlnbnMgfSkgPT4ge1xuICBjb25zdCByZW5kZXJDYW1wYWlnbnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNhbXBhaWducy5tYXAoKGNhbXBhaWduKSA9PiB7XG4gICAgICBjb25zdCBwZXJjZW50RnVuZGVkID0gKFxuICAgICAgICAod2ViMy51dGlscy5mcm9tV2VpKGNhbXBhaWduLnRvdGFsQmFsYW5jZSwgXCJldGhlclwiKSAvIGNhbXBhaWduLmdvYWwpICpcbiAgICAgICAgMTAwXG4gICAgICApLnRvRml4ZWQoMik7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGtleT17Y2FtcGFpZ24uYWRkcmVzc31cbiAgICAgICAgICBocmVmPXtgL2NhbXBhaWducy8ke2NhbXBhaWduLmFkZHJlc3N9YH1cbiAgICAgICAgICBoZWFkZXI9e2NhbXBhaWduLm5hbWV9XG4gICAgICAgICAgbWV0YT17YCR7cGVyY2VudEZ1bmRlZH0lIGZ1bmRlZGB9XG4gICAgICAgICAgZGVzY3JpcHRpb249e2NhbXBhaWduLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIGZsdWlkXG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHRvdGFsQ29udHJpYnV0aW9ucyA9IGNhbXBhaWducy5yZWR1Y2UoKHRvdGFsLCBjYW1wYWlnbikgPT4ge1xuICAgIHJldHVybiB0b3RhbCArIHBhcnNlSW50KGNhbXBhaWduLnRvdGFsQmFsYW5jZSk7XG4gIH0sIDApO1xuXG4gIGNvbnN0IG51bWJlckNvbnRyaWJ1dGlvbnMgPSBjYW1wYWlnbnMucmVkdWNlKCh0b3RhbCwgY2FtcGFpZ24pID0+IHtcbiAgICByZXR1cm4gdG90YWwgKyBjYW1wYWlnbi5jb250cmlidXRpb25Db3VudDtcbiAgfSwgMCk7XG5cbiAgY29uc29sZS5sb2codG90YWxDb250cmlidXRpb25zKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZGVyIGFzPVwiaDJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPEhlYWRlci5Db250ZW50PlxuICAgICAgICAgIFRoZSBmdXR1cmUgb2Ygc2VyY3VyZSBhbmQgdHJhbnNwYXJlbnQgcHJvamVjdCBmdW5kaW5nLlxuICAgICAgICA8L0hlYWRlci5Db250ZW50PlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8U3RhdGlzdGljU3VtbWFyeVxuICAgICAgICBzdGF0aXN0aWNzPXt7XG4gICAgICAgICAgXCJQcm9qZWN0cyBmdW5kZWRcIjogY2FtcGFpZ25zLmxlbmd0aCxcbiAgICAgICAgICBcIlRvdGFsIENvbnRyaWJ1dGlvbnNcIjogYCR7d2ViMy51dGlscy5mcm9tV2VpKFxuICAgICAgICAgICAgdG90YWxDb250cmlidXRpb25zLFxuICAgICAgICAgICAgXCJldGhlclwiXG4gICAgICAgICAgKX0gZXRoZXJgLFxuICAgICAgICAgIFwiTnVtYmVyIENvbnRyaWJ1dGlvbnNcIjogbnVtYmVyQ29udHJpYnV0aW9ucyxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiSGVhZGluZ1wiPkN1cnJlbnQgQ2FtcGFpZ25zOjwvaDE+XG4gICAgICA8R3JpZCBjb2x1bW5zPVwiZXF1YWxcIj5cbiAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9PlxuICAgICAgICAgICAgPENhcmQuR3JvdXA+e3JlbmRlckNhbXBhaWducygpfTwvQ2FyZC5Hcm91cD5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FtcGFpZ25zL25ld1wiPlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgY29udGVudD1cIkNyZWF0ZSBDYW1wYWlnblwiXG4gICAgICAgICAgICAgICAgICBpY29uPVwiYWRkIGNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5DYW1wYWlnbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY2FtcGFpZ25BZGRyZXNzZXMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XG4gIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIGNhbXBhaWduQWRkcmVzc2VzLm1hcChhc3luYyAoYWRkcmVzcykgPT4ge1xuICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcbiAgICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICBuYW1lOiBzdW1tYXJ5WzBdLFxuICAgICAgICBkZXNjcmlwdGlvbjogc3VtbWFyeVsxXSxcbiAgICAgICAgZ29hbDogc3VtbWFyeVsyXSxcbiAgICAgICAgY29udGlidXRpb25Db3VudDogc3VtbWFyeVszXSxcbiAgICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjogc3VtbWFyeVs0XSxcbiAgICAgICAgdG90YWxCYWxhbmNlOiBzdW1tYXJ5WzVdLFxuICAgICAgICBjdXJyZW50QmFsYW5jZTogc3VtbWFyeVs2XSxcbiAgICAgICAgcmVxdWVzdHNDb3VudDogc3VtbWFyeVs3XSxcbiAgICAgICAgYXBwcm92ZXJzQ291bnQ6IHN1bW1hcnlbOF0sXG4gICAgICAgIG1hbmFnZXI6IHN1bW1hcnlbOV0sXG4gICAgICB9O1xuICAgIH0pXG4gICk7XG4gIHJldHVybiB7IGNhbXBhaWducyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImZhY3RvcnkiLCJDYW1wYWlnbiIsIkNhcmQiLCJCdXR0b24iLCJHcmlkIiwiSGVhZGVyIiwiTGF5b3V0IiwiU3RhdGlzdGljU3VtbWFyeSIsIkxpbmsiLCJ3ZWIzIiwiQ2FtcGFpZ25JbmRleCIsImNhbXBhaWducyIsInJlbmRlckNhbXBhaWducyIsIm1hcCIsImNhbXBhaWduIiwicGVyY2VudEZ1bmRlZCIsInV0aWxzIiwiZnJvbVdlaSIsInRvdGFsQmFsYW5jZSIsImdvYWwiLCJ0b0ZpeGVkIiwiaHJlZiIsImFkZHJlc3MiLCJoZWFkZXIiLCJuYW1lIiwibWV0YSIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJ0b3RhbENvbnRyaWJ1dGlvbnMiLCJyZWR1Y2UiLCJ0b3RhbCIsInBhcnNlSW50IiwibnVtYmVyQ29udHJpYnV0aW9ucyIsImNvbnRyaWJ1dGlvbkNvdW50IiwiY29uc29sZSIsImxvZyIsImFzIiwidGV4dEFsaWduIiwiQ29udGVudCIsInN0YXRpc3RpY3MiLCJsZW5ndGgiLCJoMSIsImNsYXNzTmFtZSIsImNvbHVtbnMiLCJSb3ciLCJDb2x1bW4iLCJ3aWR0aCIsIkdyb3VwIiwiYSIsImZsb2F0ZWQiLCJjb250ZW50IiwiaWNvbiIsInByaW1hcnkiLCJnZXRJbml0aWFsUHJvcHMiLCJjYW1wYWlnbkFkZHJlc3NlcyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJQcm9taXNlIiwiYWxsIiwic3VtbWFyeSIsImdldFN1bW1hcnkiLCJjb250aWJ1dGlvbkNvdW50IiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImN1cnJlbnRCYWxhbmNlIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwibWFuYWdlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
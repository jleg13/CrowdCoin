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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _components_Contribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Contribute */ \"./components/Contribute.js\");\n/* harmony import */ var _components_StatisticSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/StatisticSummary */ \"./components/StatisticSummary.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar CampaignDisplay = function(summary) {\n    var address = summary.address, name = summary.name, description = summary.description, goal = summary.goal, contibutionCount = summary.contibutionCount, minimumContribution = summary.minimumContribution, totalBalance = summary.totalBalance, currentBalance = summary.currentBalance, requestsCount = summary.requestsCount, approversCount = summary.approversCount, manager = summary.manager;\n    var percentFunded = (_ethereum_web3__WEBPACK_IMPORTED_MODULE_6__[\"default\"].utils.fromWei(totalBalance, \"ether\") / goal * 100).toFixed(3);\n    var renderCards = function() {\n        var items = [\n            {\n                header: manager,\n                meta: \"Address of Manager\",\n                description: \"The manager created this campaign and can create requests to withdraw money\",\n                style: {\n                    overflowWrap: \"break-word\"\n                }\n            },\n            {\n                header: minimumContribution,\n                meta: \"Minimum Contribution (wei)\",\n                description: \"You must contribute at least this much wei to become an approver\"\n            },\n            {\n                header: requestsCount,\n                meta: \"Number of Requests\",\n                description: \"A request tries to withdraw money from the contract. Requests must be approved by approvers\"\n            },\n            {\n                header: approversCount,\n                meta: \"Number of Approvers\",\n                description: \"Number of people who have already donated to this campaign\"\n            },\n            {\n                header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__[\"default\"].utils.fromWei(currentBalance, \"ether\"),\n                meta: \"Current Balance (ether)\",\n                description: \"The balance is how much money this campaign has left to spend\"\n            }, \n        ];\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Card.Group, {\n            items: items\n        }, void 0, false, {\n            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n            lineNumber: 64,\n            columnNumber: 12\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Header, {\n                as: \"h2\",\n                textAlign: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Header.Content, {\n                    children: [\n                        name,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Header.Subheader, {\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StatisticSummary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                statistics: {\n                    \"Total Raised\": \"\".concat(_ethereum_web3__WEBPACK_IMPORTED_MODULE_6__[\"default\"].utils.fromWei(totalBalance.toString(), \"ether\"), \" ether\"),\n                    \"Number of Contributions\": contibutionCount,\n                    \"Percentage Funded\": \"\".concat(percentFunded, \"%\")\n                }\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"Heading\",\n                children: \"Campaign Details:\"\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                columns: \"equal\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Column, {\n                            width: 12,\n                            children: [\n                                renderCards(),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Link, {\n                                    href: \"/campaigns/\".concat(address, \"/requests\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                            primary: true,\n                                            children: \"View Requests\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                                            lineNumber: 92,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Column, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contribute__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                address: address\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address].js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, _this);\n};\n_c = CampaignDisplay;\nCampaignDisplay.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function(param) {\n        var query, address, campaign, summary;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    query = param.query;\n                    address = query.address;\n                    campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(address);\n                    return [\n                        4,\n                        campaign.methods.getSummary().call()\n                    ];\n                case 1:\n                    summary = _state.sent();\n                    return [\n                        2,\n                        {\n                            address: address,\n                            name: summary[0],\n                            description: summary[1],\n                            goal: summary[2],\n                            contibutionCount: summary[3],\n                            minimumContribution: summary[4],\n                            totalBalance: summary[5],\n                            currentBalance: summary[6],\n                            requestsCount: summary[7],\n                            approversCount: summary[8],\n                            manager: summary[9]\n                        }\n                    ];\n            }\n        });\n    });\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignDisplay);\nvar _c;\n$RefreshReg$(_c, \"CampaignDisplay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDaEJLLGdCQUFnQixFQUFFTCxPQUFPLENBQUMsQ0FBQyxDQUFDOzRCQUM1Qk0sbUJBQW1CLEVBQUVOLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQy9CTyxZQUFZLEVBQUVQLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQ3hCUSxjQUFjLEVBQUVSLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQzFCUyxhQUFhLEVBQUVULE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQ3pCVSxjQUFjLEVBQUVWLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQzFCVyxPQUFPLEVBQUVYLE9BQU8sQ0FBQyxDQUFDLENBQUM7eUJBQ3BCO3NCQUFDOzs7SUFDSixDQUFDOzs7O0dBQUEsQ0FBQztBQUVGLCtEQUFlRCxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL1thZGRyZXNzXS5qcz84ZGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdyaWQsIENhcmQsIEhlYWRlciwgTGluaywgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi8uLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xuaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVcIjtcbmltcG9ydCBTdGF0aXN0aWNTdW1tYXJ5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1N0YXRpc3RpY1N1bW1hcnlcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XG5cbmNvbnN0IENhbXBhaWduRGlzcGxheSA9IChzdW1tYXJ5KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhZGRyZXNzLFxuICAgIG5hbWUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZ29hbCxcbiAgICBjb250aWJ1dGlvbkNvdW50LFxuICAgIG1pbmltdW1Db250cmlidXRpb24sXG4gICAgdG90YWxCYWxhbmNlLFxuICAgIGN1cnJlbnRCYWxhbmNlLFxuICAgIHJlcXVlc3RzQ291bnQsXG4gICAgYXBwcm92ZXJzQ291bnQsXG4gICAgbWFuYWdlcixcbiAgfSA9IHN1bW1hcnk7XG5cbiAgY29uc3QgcGVyY2VudEZ1bmRlZCA9IChcbiAgICAod2ViMy51dGlscy5mcm9tV2VpKHRvdGFsQmFsYW5jZSwgXCJldGhlclwiKSAvIGdvYWwpICpcbiAgICAxMDBcbiAgKS50b0ZpeGVkKDMpO1xuXG4gIGNvbnN0IHJlbmRlckNhcmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAge1xuICAgICAgICBoZWFkZXI6IG1hbmFnZXIsXG4gICAgICAgIG1ldGE6IFwiQWRkcmVzcyBvZiBNYW5hZ2VyXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiVGhlIG1hbmFnZXIgY3JlYXRlZCB0aGlzIGNhbXBhaWduIGFuZCBjYW4gY3JlYXRlIHJlcXVlc3RzIHRvIHdpdGhkcmF3IG1vbmV5XCIsXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogbWluaW11bUNvbnRyaWJ1dGlvbixcbiAgICAgICAgbWV0YTogXCJNaW5pbXVtIENvbnRyaWJ1dGlvbiAod2VpKVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIllvdSBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3QgdGhpcyBtdWNoIHdlaSB0byBiZWNvbWUgYW4gYXBwcm92ZXJcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogcmVxdWVzdHNDb3VudCxcbiAgICAgICAgbWV0YTogXCJOdW1iZXIgb2YgUmVxdWVzdHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJBIHJlcXVlc3QgdHJpZXMgdG8gd2l0aGRyYXcgbW9uZXkgZnJvbSB0aGUgY29udHJhY3QuIFJlcXVlc3RzIG11c3QgYmUgYXBwcm92ZWQgYnkgYXBwcm92ZXJzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IGFwcHJvdmVyc0NvdW50LFxuICAgICAgICBtZXRhOiBcIk51bWJlciBvZiBBcHByb3ZlcnNcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJOdW1iZXIgb2YgcGVvcGxlIHdobyBoYXZlIGFscmVhZHkgZG9uYXRlZCB0byB0aGlzIGNhbXBhaWduXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShjdXJyZW50QmFsYW5jZSwgXCJldGhlclwiKSxcbiAgICAgICAgbWV0YTogXCJDdXJyZW50IEJhbGFuY2UgKGV0aGVyKVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlRoZSBiYWxhbmNlIGlzIGhvdyBtdWNoIG1vbmV5IHRoaXMgY2FtcGFpZ24gaGFzIGxlZnQgdG8gc3BlbmRcIixcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkZXIgYXM9XCJoMlwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8SGVhZGVyLkNvbnRlbnQ+XG4gICAgICAgICAge25hbWV9XG4gICAgICAgICAgPEhlYWRlci5TdWJoZWFkZXI+e2Rlc2NyaXB0aW9ufTwvSGVhZGVyLlN1YmhlYWRlcj5cbiAgICAgICAgPC9IZWFkZXIuQ29udGVudD5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPFN0YXRpc3RpY1N1bW1hcnlcbiAgICAgICAgc3RhdGlzdGljcz17e1xuICAgICAgICAgIFwiVG90YWwgUmFpc2VkXCI6IGAke3dlYjMudXRpbHMuZnJvbVdlaShcbiAgICAgICAgICAgIHRvdGFsQmFsYW5jZS50b1N0cmluZygpLFxuICAgICAgICAgICAgXCJldGhlclwiXG4gICAgICAgICAgKX0gZXRoZXJgLFxuICAgICAgICAgIFwiTnVtYmVyIG9mIENvbnRyaWJ1dGlvbnNcIjogY29udGlidXRpb25Db3VudCxcbiAgICAgICAgICBcIlBlcmNlbnRhZ2UgRnVuZGVkXCI6IGAke3BlcmNlbnRGdW5kZWR9JWAsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cIkhlYWRpbmdcIj5DYW1wYWlnbiBEZXRhaWxzOjwvaDM+XG4gICAgICA8R3JpZCBjb2x1bW5zPVwiZXF1YWxcIj5cbiAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTJ9PlxuICAgICAgICAgICAge3JlbmRlckNhcmRzKCl9XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2NhbXBhaWducy8ke2FkZHJlc3N9L3JlcXVlc3RzYH0+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5WaWV3IFJlcXVlc3RzPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPENvbnRyaWJ1dGVGb3JtIGFkZHJlc3M9e2FkZHJlc3N9IC8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbkNhbXBhaWduRGlzcGxheS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IGFkZHJlc3MgPSBxdWVyeS5hZGRyZXNzO1xuICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xuICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xuICByZXR1cm4ge1xuICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgbmFtZTogc3VtbWFyeVswXSxcbiAgICBkZXNjcmlwdGlvbjogc3VtbWFyeVsxXSxcbiAgICBnb2FsOiBzdW1tYXJ5WzJdLFxuICAgIGNvbnRpYnV0aW9uQ291bnQ6IHN1bW1hcnlbM10sXG4gICAgbWluaW11bUNvbnRyaWJ1dGlvbjogc3VtbWFyeVs0XSxcbiAgICB0b3RhbEJhbGFuY2U6IHN1bW1hcnlbNV0sXG4gICAgY3VycmVudEJhbGFuY2U6IHN1bW1hcnlbNl0sXG4gICAgcmVxdWVzdHNDb3VudDogc3VtbWFyeVs3XSxcbiAgICBhcHByb3ZlcnNDb3VudDogc3VtbWFyeVs4XSxcbiAgICBtYW5hZ2VyOiBzdW1tYXJ5WzldLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25EaXNwbGF5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiR3JpZCIsIkNhcmQiLCJIZWFkZXIiLCJMaW5rIiwiQnV0dG9uIiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDb250cmlidXRlRm9ybSIsIlN0YXRpc3RpY1N1bW1hcnkiLCJ3ZWIzIiwiQ2FtcGFpZ25EaXNwbGF5Iiwic3VtbWFyeSIsImFkZHJlc3MiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJnb2FsIiwiY29udGlidXRpb25Db3VudCIsIm1pbmltdW1Db250cmlidXRpb24iLCJ0b3RhbEJhbGFuY2UiLCJjdXJyZW50QmFsYW5jZSIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiLCJwZXJjZW50RnVuZGVkIiwidXRpbHMiLCJmcm9tV2VpIiwidG9GaXhlZCIsInJlbmRlckNhcmRzIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJHcm91cCIsImFzIiwidGV4dEFsaWduIiwiQ29udGVudCIsIlN1YmhlYWRlciIsInN0YXRpc3RpY3MiLCJ0b1N0cmluZyIsImgzIiwiY2xhc3NOYW1lIiwiY29sdW1ucyIsIlJvdyIsIkNvbHVtbiIsIndpZHRoIiwiaHJlZiIsImEiLCJwcmltYXJ5IiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/[address].js\n"));

/***/ })

});
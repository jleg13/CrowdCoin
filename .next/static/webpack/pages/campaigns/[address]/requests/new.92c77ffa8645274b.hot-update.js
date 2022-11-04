"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[address]/requests/new",{

/***/ "./pages/campaigns/[address]/requests/new.js":
/*!***************************************************!*\
  !*** ./pages/campaigns/[address]/requests/new.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/Layout */ \"./components/Layout.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar RequestNew = function(address) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), description = ref1[0], setDescription = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), value = ref2[0], setValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), recipient = ref3[0], setRecipient = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), errorMessage = ref4[0], setErrorMessage = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref5[0], setLoading = ref5[1];\n    console.log(address);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var onSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function(event) {\n            var accounts, campaign, err;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        event.preventDefault();\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        setLoading(true);\n                        setErrorMessage(\"\");\n                        return [\n                            4,\n                            _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].eth.getAccounts()\n                        ];\n                    case 2:\n                        accounts = _state.sent();\n                        campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(address);\n                        return [\n                            4,\n                            campaign.methods.createRequest(name, description, value, recipient).send({\n                                from: accounts[0]\n                            })\n                        ];\n                    case 3:\n                        _state.sent();\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        err = _state.sent();\n                        setErrorMessage(err.message);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 5:\n                        setLoading(false);\n                        router.push(\"/campaigns/\".concat(address, \"/requests\"));\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function onSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"Heading\",\n                children: \"New Request:\"\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form, {\n                onSubmit: onSubmit,\n                error: !!errorMessage,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Request Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                value: name,\n                                onClick: function() {\n                                    return setErrorMessage(\"\"), setName(\"\");\n                                },\n                                onChange: function(event) {\n                                    return setName(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Request Description\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                value: description,\n                                onClick: function() {\n                                    return setErrorMessage(\"\"), setDescription(\"\");\n                                },\n                                onChange: function(event) {\n                                    return setDescription(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Group, {\n                        widths: \"equal\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                                width: 6,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Request Value\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                        label: \"ether\",\n                                        labelPosition: \"right\",\n                                        value: value,\n                                        onClick: function() {\n                                            return setErrorMessage(\"\"), setValue(\"\");\n                                        },\n                                        onChange: function(event) {\n                                            return setValue(event.target.value);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Recipient\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                        value: recipient,\n                                        onClick: function() {\n                                            return setErrorMessage(\"\"), setRecipient(\"\");\n                                        },\n                                        onChange: function(event) {\n                                            return setRecipient(event.target.value);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Message, {\n                        error: true,\n                        header: \"Oops!\",\n                        content: errorMessage\n                    }, void 0, false, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                        primary: true,\n                        loading: loading,\n                        children: \"Create!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this);\n};\n_s(RequestNew, \"euQ0zlQxW4QbW67Fv1NgYEP0ji4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = RequestNew;\nRequestNew.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function(param) {\n        var query;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n            query = param.query;\n            console.log;\n            return [\n                2,\n                query.address\n            ];\n        });\n    });\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestNew);\nvar _c;\n$RefreshReg$(_c, \"RequestNew\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdL3JlcXVlc3RzL25ldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQXdDO0FBQ3lCO0FBQ1o7QUFDUjtBQUNMO0FBQ1c7QUFFbkQsSUFBTVUsVUFBVSxHQUFHLFNBQUNDLE9BQU8sRUFBSzs7SUFDOUIsSUFBd0JWLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBN0JXLElBQUksR0FBYVgsR0FBWSxHQUF6QixFQUFFWSxPQUFPLEdBQUlaLEdBQVksR0FBaEI7SUFDcEIsSUFBc0NBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBM0NhLFdBQVcsR0FBb0JiLElBQVksR0FBaEMsRUFBRWMsY0FBYyxHQUFJZCxJQUFZLEdBQWhCO0lBQ2xDLElBQTBCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9CZSxLQUFLLEdBQWNmLElBQVksR0FBMUIsRUFBRWdCLFFBQVEsR0FBSWhCLElBQVksR0FBaEI7SUFDdEIsSUFBa0NBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBdkNpQixTQUFTLEdBQWtCakIsSUFBWSxHQUE5QixFQUFFa0IsWUFBWSxHQUFJbEIsSUFBWSxHQUFoQjtJQUM5QixJQUF3Q0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUE3Q21CLFlBQVksR0FBcUJuQixJQUFZLEdBQWpDLEVBQUVvQixlQUFlLEdBQUlwQixJQUFZLEdBQWhCO0lBQ3BDLElBQThCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXRDcUIsT0FBTyxHQUFnQnJCLElBQWUsR0FBL0IsRUFBRXNCLFVBQVUsR0FBSXRCLElBQWUsR0FBbkI7SUFDeEJ1QixPQUFPLENBQUNDLEdBQUcsQ0FBQ2QsT0FBTyxDQUFDLENBQUM7SUFDdkIsSUFBTWUsTUFBTSxHQUFHbEIsc0RBQVMsRUFBRTtJQUUxQixJQUFNbUIsUUFB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QUssQ0FBQ29CLE1BQU0sQ0FBQ2hDLEtBQUssQ0FBQzt5Q0FBQTs7Ozs7NkNBQ2pEOzs7Ozs7cUNBQ1M7MENBQ2IsOERBQUNkLHlEQUFVOztrREFDVCw4REFBQzJDLE9BQUs7a0RBQUMsV0FBUzs7Ozs7NkNBQVE7a0RBQ3hCLDhEQUFDekMsb0RBQUs7d0NBQ0pZLEtBQUssRUFBRUUsU0FBUzt3Q0FDaEI0QixPQUFPLEVBQUU7bURBQU96QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUVGLFlBQVksQ0FBQyxFQUFFLENBQUM7eUNBQUM7d0NBQ3RENEIsUUFBUSxFQUFFLFNBQUNuQixLQUFLO21EQUFLVCxZQUFZLENBQUNTLEtBQUssQ0FBQ29CLE1BQU0sQ0FBQ2hDLEtBQUssQ0FBQzt5Q0FBQTs7Ozs7NkNBQ3JEOzs7Ozs7cUNBQ1M7Ozs7Ozs2QkFDRjtrQ0FFYiw4REFBQ1gsc0RBQU87d0JBQUNzQyxLQUFLO3dCQUFDVSxNQUFNLEVBQUMsT0FBTzt3QkFBQ0MsT0FBTyxFQUFFbEMsWUFBWTs7Ozs7NkJBQUk7a0NBQ3ZELDhEQUFDakIscURBQU07d0JBQUNvRCxPQUFPO3dCQUFDakMsT0FBTyxFQUFFQSxPQUFPO2tDQUFFLFNBRWxDOzs7Ozs2QkFBUzs7Ozs7O3FCQUNKOzs7Ozs7YUFDQSxDQUNUO0FBQ0osQ0FBQztHQTdFS1osVUFBVTs7UUFRQ0Ysa0RBQVM7OztBQVJwQkUsS0FBQUEsVUFBVTtBQStFaEJBLFVBQVUsQ0FBQzhDLGVBQWU7ZUFBRyxvR0FBcUI7WUFBWkMsS0FBSzs7WUFBTEEsS0FBSyxTQUFMQSxLQUFLO1lBQ3ZDakMsT0FBTyxDQUFDQyxHQUFHO1lBQ2I7O2dCQUFPZ0MsS0FBSyxDQUFDOUMsT0FBTztjQUFDOztJQUN2QixDQUFDOzs7O0dBQUEsQ0FBQztBQUVGLCtEQUFlRCxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL1thZGRyZXNzXS9yZXF1ZXN0cy9uZXcuanM/MTM2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW5wdXQsIE1lc3NhZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi8uLi8uLi9ldGhlcmV1bS93ZWIzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmNvbnN0IFJlcXVlc3ROZXcgPSAoYWRkcmVzcykgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlY2lwaWVudCwgc2V0UmVjaXBpZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zb2xlLmxvZyhhZGRyZXNzKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcbiAgICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHNcbiAgICAgICAgLmNyZWF0ZVJlcXVlc3QobmFtZSwgZGVzY3JpcHRpb24sIHZhbHVlLCByZWNpcGllbnQpXG4gICAgICAgIC5zZW5kKHtcbiAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyLm1lc3NhZ2UpO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICByb3V0ZXIucHVzaChgL2NhbXBhaWducy8ke2FkZHJlc3N9L3JlcXVlc3RzYCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIkhlYWRpbmdcIj5OZXcgUmVxdWVzdDo8L2gxPlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBlcnJvcj17ISFlcnJvck1lc3NhZ2V9PlxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICA8bGFiZWw+UmVxdWVzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gKHNldEVycm9yTWVzc2FnZShcIlwiKSwgc2V0TmFtZShcIlwiKSl9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICA8bGFiZWw+UmVxdWVzdCBEZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAoc2V0RXJyb3JNZXNzYWdlKFwiXCIpLCBzZXREZXNjcmlwdGlvbihcIlwiKSl9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXREZXNjcmlwdGlvbihldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cbiAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD17Nn0+XG4gICAgICAgICAgICA8bGFiZWw+UmVxdWVzdCBWYWx1ZTwvbGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJldGhlclwiXG4gICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gKHNldEVycm9yTWVzc2FnZShcIlwiKSwgc2V0VmFsdWUoXCJcIikpfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICA8bGFiZWw+UmVjaXBpZW50PC9sYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17cmVjaXBpZW50fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAoc2V0RXJyb3JNZXNzYWdlKFwiXCIpLCBzZXRSZWNpcGllbnQoXCJcIikpfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRSZWNpcGllbnQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG5cbiAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXtlcnJvck1lc3NhZ2V9IC8+XG4gICAgICAgIDxCdXR0b24gcHJpbWFyeSBsb2FkaW5nPXtsb2FkaW5nfT5cbiAgICAgICAgICBDcmVhdGUhXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuUmVxdWVzdE5ldy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gICAgY29uc29sZS5sb2dcbiAgcmV0dXJuIHF1ZXJ5LmFkZHJlc3M7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0TmV3O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwidXNlUm91dGVyIiwiTGF5b3V0IiwiUmVxdWVzdE5ldyIsImFkZHJlc3MiLCJuYW1lIiwic2V0TmFtZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJ2YWx1ZSIsInNldFZhbHVlIiwicmVjaXBpZW50Iiwic2V0UmVjaXBpZW50IiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwib25TdWJtaXQiLCJldmVudCIsImFjY291bnRzIiwiY2FtcGFpZ24iLCJlcnIiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJwdXNoIiwiaDEiLCJjbGFzc05hbWUiLCJlcnJvciIsIkZpZWxkIiwibGFiZWwiLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJHcm91cCIsIndpZHRocyIsIndpZHRoIiwibGFiZWxQb3NpdGlvbiIsImhlYWRlciIsImNvbnRlbnQiLCJwcmltYXJ5IiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/[address]/requests/new.js\n"));

/***/ })

});
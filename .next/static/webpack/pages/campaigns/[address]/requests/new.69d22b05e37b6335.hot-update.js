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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/Layout */ \"./components/Layout.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar RequestNew = function(address) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), description = ref1[0], setDescription = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), value = ref2[0], setValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), recipient = ref3[0], setRecipient = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), errorMessage = ref4[0], setErrorMessage = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref5[0], setLoading = ref5[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var onSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function(event) {\n            var accounts, err;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        event.preventDefault();\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        setLoading(true);\n                        setErrorMessage(\"\");\n                        return [\n                            4,\n                            _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].eth.getAccounts()\n                        ];\n                    case 2:\n                        accounts = _state.sent();\n                        return [\n                            4,\n                            _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.createRequest(name, description, value, recipient).send({\n                                from: accounts[0]\n                            })\n                        ];\n                    case 3:\n                        _state.sent();\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        err = _state.sent();\n                        setErrorMessage(err.message);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 5:\n                        setLoading(false);\n                        router.push(\"/campaigns/\".concat(address, \"/requests\"));\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function onSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"Heading\",\n                children: \"New Request:\"\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form, {\n                onSubmit: onSubmit,\n                error: !!errorMessage,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Request Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                value: name,\n                                onClick: function() {\n                                    return setErrorMessage(\"\"), setName(\"\");\n                                },\n                                onChange: function(event) {\n                                    return setName(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Request Description\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                value: description,\n                                onClick: function() {\n                                    return setErrorMessage(\"\"), setDescription(\"\");\n                                },\n                                onChange: function(event) {\n                                    return setDescription(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Group, {\n                        widths: \"equal\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                                width: 6,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Request Value\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                        label: \"ether\",\n                                        labelPosition: \"right\",\n                                        value: value,\n                                        onClick: function() {\n                                            return setErrorMessage(\"\"), setValue(\"\");\n                                        },\n                                        onChange: function(event) {\n                                            return setValue(event.target.value);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Recipient\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                        value: recipient,\n                                        onClick: function() {\n                                            return setErrorMessage(\"\"), setRecipient(\"\");\n                                        },\n                                        onChange: function(event) {\n                                            return setRecipient(event.target.value);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Message, {\n                        error: true,\n                        header: \"Oops!\",\n                        content: errorMessage\n                    }, void 0, false, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                        primary: true,\n                        loading: loading,\n                        children: \"Create!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/[address]/requests/new.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, _this);\n};\n_s(RequestNew, \"euQ0zlQxW4QbW67Fv1NgYEP0ji4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = RequestNew;\nRequestNew.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function(param) {\n        var query;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n            query = param.query;\n            return [\n                2,\n                query.address\n            ];\n        });\n    });\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestNew);\nvar _c;\n$RefreshReg$(_c, \"RequestNew\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdL3JlcXVlc3RzL25ldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQXdDO0FBQ3lCO0FBQ2Q7QUFDTjtBQUNMO0FBQ1c7QUFFbkQsSUFBTVUsVUFBVSxHQUFHLFNBQUNDLE9BQU8sRUFBSzs7SUFDOUIsSUFBd0JWLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBN0JXLElBQUksR0FBYVgsR0FBWSxHQUF6QixFQUFFWSxPQUFPLEdBQUlaLEdBQVksR0FBaEI7SUFDcEIsSUFBc0NBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBM0NhLFdBQVcsR0FBb0JiLElBQVksR0FBaEMsRUFBRWMsY0FBYyxHQUFJZCxJQUFZLEdBQWhCO0lBQ2xDLElBQTBCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9CZSxLQUFLLEdBQWNmLElBQVksR0FBMUIsRUFBRWdCLFFBQVEsR0FBSWhCLElBQVksR0FBaEI7SUFDdEIsSUFBa0NBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBdkNpQixTQUFTLEdBQWtCakIsSUFBWSxHQUE5QixFQUFFa0IsWUFBWSxHQUFJbEIsSUFBWSxHQUFoQjtJQUM5QixJQUF3Q0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUE3Q21CLFlBQVksR0FBcUJuQixJQUFZLEdBQWpDLEVBQUVvQixlQUFlLEdBQUlwQixJQUFZLEdBQWhCO0lBQ3BDLElBQThCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXRDcUIsT0FBTyxHQUFnQnJCLElBQWUsR0FBL0IsRUFBRXNCLFVBQVUsR0FBSXRCLElBQWUsR0FBbkI7SUFFMUIsSUFBTXVCLE1BQU0sR0FBR2hCLHNEQUFTLEVBQUU7SUFFMUIsSUFBTWlCLFFBQVE7bUJBQUcsNkZBQU9DLEtBQUssRUFBSztnQkFLeEJDLFFBQVEsRUFNUEMs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REFBQ3RDLG9EQUFLO3dDQUNKWSxLQUFLLEVBQUVFLFNBQVM7d0NBQ2hCeUIsT0FBTyxFQUFFO21EQUFPdEIsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFRixZQUFZLENBQUMsRUFBRSxDQUFDO3lDQUFDO3dDQUN0RHlCLFFBQVEsRUFBRSxTQUFDbEIsS0FBSzttREFBS1AsWUFBWSxDQUFDTyxLQUFLLENBQUNtQixNQUFNLENBQUM3QixLQUFLLENBQUM7eUNBQUE7Ozs7OzZDQUNyRDs7Ozs7O3FDQUNTOzs7Ozs7NkJBQ0Y7a0NBRWIsOERBQUNYLHNEQUFPO3dCQUFDbUMsS0FBSzt3QkFBQ1UsTUFBTSxFQUFDLE9BQU87d0JBQUNDLE9BQU8sRUFBRS9CLFlBQVk7Ozs7OzZCQUFJO2tDQUN2RCw4REFBQ2pCLHFEQUFNO3dCQUFDaUQsT0FBTzt3QkFBQzlCLE9BQU8sRUFBRUEsT0FBTztrQ0FBRSxTQUVsQzs7Ozs7NkJBQVM7Ozs7OztxQkFDSjs7Ozs7O2FBQ0EsQ0FDVDtBQUNKLENBQUM7R0E1RUtaLFVBQVU7O1FBUUNGLGtEQUFTOzs7QUFScEJFLEtBQUFBLFVBQVU7QUE4RWhCQSxVQUFVLENBQUMyQyxlQUFlO2VBQUcsb0dBQXFCO1lBQVpDLEtBQUs7O1lBQUxBLEtBQUssU0FBTEEsS0FBSztZQUN6Qzs7Z0JBQU9BLEtBQUssQ0FBQzNDLE9BQU87Y0FBQzs7SUFDdkIsQ0FBQzs7OztHQUFBLENBQUM7QUFFRiwrREFBZUQsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9bYWRkcmVzc10vcmVxdWVzdHMvbmV3LmpzPzEzNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vLi4vLi4vLi4vZXRoZXJldW0vZmFjdG9yeVwiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uLy4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuY29uc3QgUmVxdWVzdE5ldyA9IChhZGRyZXNzKSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVjaXBpZW50LCBzZXRSZWNpcGllbnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgIGF3YWl0IGZhY3RvcnkubWV0aG9kc1xuICAgICAgICAuY3JlYXRlUmVxdWVzdChuYW1lLCBkZXNjcmlwdGlvbiwgdmFsdWUsIHJlY2lwaWVudClcbiAgICAgICAgLnNlbmQoe1xuICAgICAgICAgIGZyb206IGFjY291bnRzWzBdLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShlcnIubWVzc2FnZSk7XG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIHJvdXRlci5wdXNoKGAvY2FtcGFpZ25zLyR7YWRkcmVzc30vcmVxdWVzdHNgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiSGVhZGluZ1wiPk5ldyBSZXF1ZXN0OjwvaDE+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGVycm9yPXshIWVycm9yTWVzc2FnZX0+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5SZXF1ZXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAoc2V0RXJyb3JNZXNzYWdlKFwiXCIpLCBzZXROYW1lKFwiXCIpKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5SZXF1ZXN0IERlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IChzZXRFcnJvck1lc3NhZ2UoXCJcIiksIHNldERlc2NyaXB0aW9uKFwiXCIpKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldERlc2NyaXB0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxuICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPXs2fT5cbiAgICAgICAgICAgIDxsYWJlbD5SZXF1ZXN0IFZhbHVlPC9sYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cImV0aGVyXCJcbiAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAoc2V0RXJyb3JNZXNzYWdlKFwiXCIpLCBzZXRWYWx1ZShcIlwiKSl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgIDxsYWJlbD5SZWNpcGllbnQ8L2xhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXtyZWNpcGllbnR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IChzZXRFcnJvck1lc3NhZ2UoXCJcIiksIHNldFJlY2lwaWVudChcIlwiKSl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFJlY2lwaWVudChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDwvRm9ybS5Hcm91cD5cblxuICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e2Vycm9yTWVzc2FnZX0gLz5cbiAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGxvYWRpbmc9e2xvYWRpbmd9PlxuICAgICAgICAgIENyZWF0ZSFcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5SZXF1ZXN0TmV3LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgcmV0dXJuIHF1ZXJ5LmFkZHJlc3M7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0TmV3O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiZmFjdG9yeSIsIndlYjMiLCJ1c2VSb3V0ZXIiLCJMYXlvdXQiLCJSZXF1ZXN0TmV3IiwiYWRkcmVzcyIsIm5hbWUiLCJzZXROYW1lIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInZhbHVlIiwic2V0VmFsdWUiLCJyZWNpcGllbnQiLCJzZXRSZWNpcGllbnQiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsIm9uU3VibWl0IiwiZXZlbnQiLCJhY2NvdW50cyIsImVyciIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInNlbmQiLCJmcm9tIiwibWVzc2FnZSIsInB1c2giLCJoMSIsImNsYXNzTmFtZSIsImVycm9yIiwiRmllbGQiLCJsYWJlbCIsIm9uQ2xpY2siLCJvbkNoYW5nZSIsInRhcmdldCIsIkdyb3VwIiwid2lkdGhzIiwid2lkdGgiLCJsYWJlbFBvc2l0aW9uIiwiaGVhZGVyIiwiY29udGVudCIsInByaW1hcnkiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/[address]/requests/new.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/new",{

/***/ "./pages/campaigns/new.js":
/*!********************************!*\
  !*** ./pages/campaigns/new.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CampaignNew; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CampaignNew() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), description = ref1[0], setDescription = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), goal = ref2[0], setGoal = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), minimumContribution = ref3[0], setMinimumContribution = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), errorMessage = ref4[0], setErrorMessage = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref5[0], setLoading = ref5[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var onSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function(event) {\n            var accounts, err;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        event.preventDefault();\n                        // set listener for campaign creation event on solidity contract\n                        _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].once(\"CampaignCreated\", function(err, campaignEvent) {\n                            if (!err) {\n                                router.push(\"/campaigns/\".concat(campaignEvent.returnValues.campaignAddress));\n                            }\n                        });\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        setLoading(true);\n                        setErrorMessage(\"\");\n                        return [\n                            4,\n                            _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts()\n                        ];\n                    case 2:\n                        accounts = _state.sent();\n                        console.log(accout);\n                        return [\n                            4,\n                            _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.createCampaign(name, description, goal, minimumContribution).send({\n                                from: accounts[0]\n                            })\n                        ];\n                    case 3:\n                        _state.sent();\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        err = _state.sent();\n                        setErrorMessage(err.message);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 5:\n                        setLoading(false);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function onSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"Heading\",\n                children: \"New Campaign:\"\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/new.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form, {\n                onSubmit: onSubmit,\n                error: !!errorMessage,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Campaign Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/new.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                value: name,\n                                onClick: function() {\n                                    return setErrorMessage(\"\"), setName(\"\");\n                                },\n                                onChange: function(event) {\n                                    return setName(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/new.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/new.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Campaign Description\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/new.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                value: description,\n                                onClick: function() {\n                                    return setErrorMessage(\"\"), setDescription(\"\");\n                                },\n                                onChange: function(event) {\n                                    return setDescription(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/new.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/new.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Group, {\n                        widths: \"equal\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Campaign Goal\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/new.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                        label: \"ether\",\n                                        labelPosition: \"right\",\n                                        value: goal,\n                                        onClick: function() {\n                                            return setErrorMessage(\"\"), setGoal(\"\");\n                                        },\n                                        onChange: function(event) {\n                                            return setGoal(event.target.value);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/new.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/new.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Minimum Contribution\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/new.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                        label: \"wei\",\n                                        labelPosition: \"right\",\n                                        value: minimumContribution,\n                                        onClick: function() {\n                                            return setErrorMessage(\"\"), setMinimumContribution(\"\");\n                                        },\n                                        onChange: function(event) {\n                                            return setMinimumContribution(event.target.value);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/new.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/new.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/new.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Message, {\n                        error: true,\n                        header: \"Oops!\",\n                        content: errorMessage\n                    }, void 0, false, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/new.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                        primary: true,\n                        loading: loading,\n                        children: \"Create!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/new.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/new.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/pages/campaigns/new.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(CampaignNew, \"euQ0zlQxW4QbW67Fv1NgYEP0ji4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = CampaignNew;\nvar _c;\n$RefreshReg$(_c, \"CampaignNew\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvbmV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUF3QztBQUN5QjtBQUNwQjtBQUNBO0FBQ047QUFDQztBQUV6QixTQUFTVSxXQUFXLEdBQUc7O0lBQ3BDLElBQXdCVCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTdCVSxJQUFJLEdBQWFWLEdBQVksR0FBekIsRUFBRVcsT0FBTyxHQUFJWCxHQUFZLEdBQWhCO0lBQ3BCLElBQXNDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTNDWSxXQUFXLEdBQW9CWixJQUFZLEdBQWhDLEVBQUVhLGNBQWMsR0FBSWIsSUFBWSxHQUFoQjtJQUNsQyxJQUF3QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUE3QmMsSUFBSSxHQUFhZCxJQUFZLEdBQXpCLEVBQUVlLE9BQU8sR0FBSWYsSUFBWSxHQUFoQjtJQUNwQixJQUFzREEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUEzRGdCLG1CQUFtQixHQUE0QmhCLElBQVksR0FBeEMsRUFBRWlCLHNCQUFzQixHQUFJakIsSUFBWSxHQUFoQjtJQUNsRCxJQUF3Q0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUE3Q2tCLFlBQVksR0FBcUJsQixJQUFZLEdBQWpDLEVBQUVtQixlQUFlLEdBQUluQixJQUFZLEdBQWhCO0lBQ3BDLElBQThCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXRDb0IsT0FBTyxHQUFnQnBCLElBQWUsR0FBL0IsRUFBRXFCLFVBQVUsR0FBSXJCLElBQWUsR0FBbkI7SUFFMUIsSUFBTXNCLE1BQU0sR0FBR2Qsc0RBQVMsRUFBRTtJQUUxQixJQUFNZSxRQUFRO21CQUFHLDZGQUFPQyxLQUFLLEVBQUs7Z0JBWXhCQyxRQUFRLEVBT1BDLEdBQUc7Ozs7d0JBbEJaRixLQUFLLENBQUNHLGNBQWMsRUFBRSxDQUFDO3dCQUN2QixnRUFBZ0U7d0JBQ2hFckIsOERBQVksQ0FBQyxpQkFBaUIsRUFBRSxTQUFDb0IsR0FBRyxFQUFFRyxhQUFhLEVBQUs7NEJBQ3RELElBQUksQ0FBQ0gsR0FBRyxFQUFFO2dDQUNSSixNQUFNLENBQUNRLElBQUksQ0FBQyxhQUFZLENBQTZDLE9BQTNDRCxhQUFhLENBQUNFLFlBQVksQ0FBQ0MsZUFBZSxDQUFFLENBQUMsQ0FBQzs0QkFDMUUsQ0FBQzt3QkFDSCxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7O3dCQUdEWCxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2pCRixlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ0g7OzRCQUFNWixzRUFBb0IsRUFBRTswQkFBQTs7d0JBQXZDa0IsUUFBUSxHQUFHLGFBQTRCO3dCQUM3Q1UsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE1BQU0sQ0FBQzt3QkFDbkI7OzRCQUFNL0IsZ0ZBQ1csQ0FBQ0ksSUFBSSxFQUFFRSxXQUFXLEVBQUVFLElBQUksRUFBRUUsbUJBQW1CLENBQUMsQ0FDNUR3QixJQUFJLENBQUM7Z0NBQ0pDLElBQUksRUFBRWhCLFFBQVEsQ0FBQyxDQUFDLENBQUM7NkJBQ2xCLENBQUM7MEJBQUE7O3dCQUpKLGFBSUksQ0FBQzs7Ozs7O3dCQUNFQyxHQUFHO3dCQUNWUCxlQUFlLENBQUNPLEdBQUcsQ0FBQ2dCLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7d0JBRS9CckIsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7UUFDcEIsQ0FBQzt3QkF2QktFLFFBQVEsQ0FBVUMsS0FBSzs7O09BdUI1QjtJQUVELHFCQUNFLDhEQUFDbkIsMERBQU07OzBCQUNMLDhEQUFDc0MsSUFBRTtnQkFBQ0MsU0FBUyxFQUFDLFNBQVM7MEJBQUMsZUFBYTs7Ozs7b0JBQUs7MEJBQzFDLDhEQUFDM0MsbURBQUk7Z0JBQUNzQixRQUFRLEVBQUVBLFFBQVE7Z0JBQUVzQixLQUFLLEVBQUUsQ0FBQyxDQUFDM0IsWUFBWTs7a0NBQzdDLDhEQUFDakIseURBQVU7OzBDQUNULDhEQUFDOEMsT0FBSzswQ0FBQyxlQUFhOzs7OztvQ0FBUTswQ0FDNUIsOERBQUM1QyxvREFBSztnQ0FDSjZDLEtBQUssRUFBRXRDLElBQUk7Z0NBQ1h1QyxPQUFPLEVBQUU7MkNBQU85QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUVSLE9BQU8sQ0FBQyxFQUFFLENBQUM7aUNBQUM7Z0NBQ2pEdUMsUUFBUSxFQUFFLFNBQUMxQixLQUFLOzJDQUFLYixPQUFPLENBQUNhLEtBQUssQ0FBQzJCLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2lDQUFBOzs7OztvQ0FDaEQ7Ozs7Ozs0QkFDUztrQ0FDYiw4REFBQy9DLHlEQUFVOzswQ0FDVCw4REFBQzhDLE9BQUs7MENBQUMsc0JBQW9COzs7OztvQ0FBUTswQ0FDbkMsOERBQUM1QyxvREFBSztnQ0FDSjZDLEtBQUssRUFBRXBDLFdBQVc7Z0NBQ2xCcUMsT0FBTyxFQUFFOzJDQUFPOUIsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFTixjQUFjLENBQUMsRUFBRSxDQUFDO2lDQUFDO2dDQUN4RHFDLFFBQVEsRUFBRSxTQUFDMUIsS0FBSzsyQ0FBS1gsY0FBYyxDQUFDVyxLQUFLLENBQUMyQixNQUFNLENBQUNILEtBQUssQ0FBQztpQ0FBQTs7Ozs7b0NBQ3ZEOzs7Ozs7NEJBQ1M7a0NBQ2IsOERBQUMvQyx5REFBVTt3QkFBQ29ELE1BQU0sRUFBQyxPQUFPOzswQ0FDeEIsOERBQUNwRCx5REFBVTs7a0RBQ1QsOERBQUM4QyxPQUFLO2tEQUFDLGVBQWE7Ozs7OzRDQUFRO2tEQUM1Qiw4REFBQzVDLG9EQUFLO3dDQUNKNEMsS0FBSyxFQUFDLE9BQU87d0NBQ2JPLGFBQWEsRUFBQyxPQUFPO3dDQUNyQk4sS0FBSyxFQUFFbEMsSUFBSTt3Q0FDWG1DLE9BQU8sRUFBRTttREFBTzlCLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRUosT0FBTyxDQUFDLEVBQUUsQ0FBQzt5Q0FBQzt3Q0FDakRtQyxRQUFRLEVBQUUsU0FBQzFCLEtBQUs7bURBQUtULE9BQU8sQ0FBQ1MsS0FBSyxDQUFDMkIsTUFBTSxDQUFDSCxLQUFLLENBQUM7eUNBQUE7Ozs7OzRDQUNoRDs7Ozs7O29DQUNTOzBDQUNiLDhEQUFDL0MseURBQVU7O2tEQUNULDhEQUFDOEMsT0FBSztrREFBQyxzQkFBb0I7Ozs7OzRDQUFRO2tEQUNuQyw4REFBQzVDLG9EQUFLO3dDQUNKNEMsS0FBSyxFQUFDLEtBQUs7d0NBQ1hPLGFBQWEsRUFBQyxPQUFPO3dDQUNyQk4sS0FBSyxFQUFFaEMsbUJBQW1CO3dDQUMxQmlDLE9BQU8sRUFBRTttREFBTzlCLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRUYsc0JBQXNCLENBQUMsRUFBRSxDQUFDO3lDQUFDO3dDQUNoRWlDLFFBQVEsRUFBRSxTQUFDMUIsS0FBSzttREFBS1Asc0JBQXNCLENBQUNPLEtBQUssQ0FBQzJCLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO3lDQUFBOzs7Ozs0Q0FDL0Q7Ozs7OztvQ0FDUzs7Ozs7OzRCQUNGO2tDQUViLDhEQUFDNUMsc0RBQU87d0JBQUN5QyxLQUFLO3dCQUFDVSxNQUFNLEVBQUMsT0FBTzt3QkFBQ0MsT0FBTyxFQUFFdEMsWUFBWTs7Ozs7NEJBQUk7a0NBQ3ZELDhEQUFDaEIscURBQU07d0JBQUN1RCxPQUFPO3dCQUFDckMsT0FBTyxFQUFFQSxPQUFPO2tDQUFFLFNBRWxDOzs7Ozs0QkFBUzs7Ozs7O29CQUNKOzs7Ozs7WUFDQSxDQUNUO0FBQ0osQ0FBQztHQXJGdUJYLFdBQVc7O1FBUWxCRCxrREFBUzs7O0FBUkZDLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9iZDVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi8uLi9ldGhlcmV1bS9mYWN0b3J5XCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbXBhaWduTmV3KCkge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2dvYWwsIHNldEdvYWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttaW5pbXVtQ29udHJpYnV0aW9uLCBzZXRNaW5pbXVtQ29udHJpYnV0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gc2V0IGxpc3RlbmVyIGZvciBjYW1wYWlnbiBjcmVhdGlvbiBldmVudCBvbiBzb2xpZGl0eSBjb250cmFjdFxuICAgIGZhY3Rvcnkub25jZShcIkNhbXBhaWduQ3JlYXRlZFwiLCAoZXJyLCBjYW1wYWlnbkV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWVycikge1xuICAgICAgICByb3V0ZXIucHVzaChgL2NhbXBhaWducy8ke2NhbXBhaWduRXZlbnQucmV0dXJuVmFsdWVzLmNhbXBhaWduQWRkcmVzc31gKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgY29uc29sZS5sb2coYWNjb3V0KVxuICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzXG4gICAgICAgIC5jcmVhdGVDYW1wYWlnbihuYW1lLCBkZXNjcmlwdGlvbiwgZ29hbCwgbWluaW11bUNvbnRyaWJ1dGlvbilcbiAgICAgICAgLnNlbmQoe1xuICAgICAgICAgIGZyb206IGFjY291bnRzWzBdLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShlcnIubWVzc2FnZSk7XG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJIZWFkaW5nXCI+TmV3IENhbXBhaWduOjwvaDE+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGVycm9yPXshIWVycm9yTWVzc2FnZX0+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5DYW1wYWlnbiBOYW1lPC9sYWJlbD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gKHNldEVycm9yTWVzc2FnZShcIlwiKSwgc2V0TmFtZShcIlwiKSl9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICA8bGFiZWw+Q2FtcGFpZ24gRGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gKHNldEVycm9yTWVzc2FnZShcIlwiKSwgc2V0RGVzY3JpcHRpb24oXCJcIikpfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RGVzY3JpcHRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XG4gICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICA8bGFiZWw+Q2FtcGFpZ24gR29hbDwvbGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJldGhlclwiXG4gICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtnb2FsfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAoc2V0RXJyb3JNZXNzYWdlKFwiXCIpLCBzZXRHb2FsKFwiXCIpKX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0R29hbChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICA8bGFiZWw+TWluaW11bSBDb250cmlidXRpb248L2xhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGxhYmVsPVwid2VpXCJcbiAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e21pbmltdW1Db250cmlidXRpb259XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IChzZXRFcnJvck1lc3NhZ2UoXCJcIiksIHNldE1pbmltdW1Db250cmlidXRpb24oXCJcIikpfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRNaW5pbXVtQ29udHJpYnV0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxuXG4gICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17ZXJyb3JNZXNzYWdlfSAvPlxuICAgICAgICA8QnV0dG9uIHByaW1hcnkgbG9hZGluZz17bG9hZGluZ30+XG4gICAgICAgICAgQ3JlYXRlIVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkxheW91dCIsImZhY3RvcnkiLCJ3ZWIzIiwidXNlUm91dGVyIiwiQ2FtcGFpZ25OZXciLCJuYW1lIiwic2V0TmFtZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJnb2FsIiwic2V0R29hbCIsIm1pbmltdW1Db250cmlidXRpb24iLCJzZXRNaW5pbXVtQ29udHJpYnV0aW9uIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJvblN1Ym1pdCIsImV2ZW50IiwiYWNjb3VudHMiLCJlcnIiLCJwcmV2ZW50RGVmYXVsdCIsIm9uY2UiLCJjYW1wYWlnbkV2ZW50IiwicHVzaCIsInJldHVyblZhbHVlcyIsImNhbXBhaWduQWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiY29uc29sZSIsImxvZyIsImFjY291dCIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwibWVzc2FnZSIsImgxIiwiY2xhc3NOYW1lIiwiZXJyb3IiLCJGaWVsZCIsImxhYmVsIiwidmFsdWUiLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJHcm91cCIsIndpZHRocyIsImxhYmVsUG9zaXRpb24iLCJoZWFkZXIiLCJjb250ZW50IiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/new.js\n"));

/***/ })

});
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

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\nvar _this = undefined;\n\n\n\nvar RequestRow = function(props) {\n    var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Row, Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Cell;\n    var id = props.id, request = props.request, address = props.address, manager = props.manager;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: id\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: props.request.name\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: props.request.description\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: props.request.value\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: props.request.recipient\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: props.request.approvalCount\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: props.request.complete\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    color: \"green\",\n                    basic: true,\n                    children: \"Approve\"\n                }, void 0, false, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    color: \"teal\",\n                    basic: true,\n                    children: \"Finalise\"\n                }, void 0, false, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_c = RequestRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\nvar _c;\n$RefreshReg$(_c, \"RequestRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQTBCO0FBQ3dCO0FBRWxELElBQU1HLFVBQVUsR0FBRyxTQUFDQyxLQUFLLEVBQUs7SUFDNUIsSUFBUUMsR0FBRyxHQUFXSix3REFBWCxFQUFFSyxJQUFJLEdBQUtMLHlEQUFMO0lBQ2YsSUFBUU0sRUFBRSxHQUFnQ0gsS0FBSyxDQUF2Q0csRUFBRSxFQUFFQyxPQUFPLEdBQXVCSixLQUFLLENBQW5DSSxPQUFPLEVBQUVDLE9BQU8sR0FBY0wsS0FBSyxDQUExQkssT0FBTyxFQUFFQyxPQUFPLEdBQUtOLEtBQUssQ0FBakJNLE9BQU87SUFDdkMscUJBQ0UsOERBQUNMLEdBQUc7OzBCQUNGLDhEQUFDQyxJQUFJOzBCQUFFQyxFQUFFOzs7OztxQkFBUTswQkFDakIsOERBQUNELElBQUk7MEJBQUVGLEtBQUssQ0FBQ0ksT0FBTyxDQUFDRyxJQUFJOzs7OztxQkFBUTswQkFDakMsOERBQUNMLElBQUk7MEJBQUVGLEtBQUssQ0FBQ0ksT0FBTyxDQUFDSSxXQUFXOzs7OztxQkFBUTswQkFDeEMsOERBQUNOLElBQUk7MEJBQUVGLEtBQUssQ0FBQ0ksT0FBTyxDQUFDSyxLQUFLOzs7OztxQkFBUTswQkFDbEMsOERBQUNQLElBQUk7MEJBQUVGLEtBQUssQ0FBQ0ksT0FBTyxDQUFDTSxTQUFTOzs7OztxQkFBUTswQkFDdEMsOERBQUNSLElBQUk7MEJBQUVGLEtBQUssQ0FBQ0ksT0FBTyxDQUFDTyxhQUFhOzs7OztxQkFBUTswQkFDMUMsOERBQUNULElBQUk7MEJBQUVGLEtBQUssQ0FBQ0ksT0FBTyxDQUFDUSxRQUFROzs7OztxQkFBUTswQkFDckMsOERBQUNWLElBQUk7MEJBQ0gsNEVBQUNKLHFEQUFNO29CQUFDZSxLQUFLLEVBQUMsT0FBTztvQkFBQ0MsS0FBSzs4QkFBQyxTQUU1Qjs7Ozs7eUJBQVM7Ozs7O3FCQUNKOzBCQUNQLDhEQUFDWixJQUFJOzBCQUNILDRFQUFDSixxREFBTTtvQkFBQ2UsS0FBSyxFQUFDLE1BQU07b0JBQUNDLEtBQUs7OEJBQUMsVUFFM0I7Ozs7O3lCQUFTOzs7OztxQkFDSjs7Ozs7O2FBQ0gsQ0FDTjtBQUNKLENBQUM7QUF4QktmLEtBQUFBLFVBQVU7QUEwQmhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzP2NhMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5jb25zdCBSZXF1ZXN0Um93ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgUm93LCBDZWxsIH0gPSBUYWJsZTtcbiAgICBjb25zdCB7IGlkLCByZXF1ZXN0LCBhZGRyZXNzLCBtYW5hZ2VyIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8Um93PlxuICAgICAgPENlbGw+e2lkfTwvQ2VsbD5cbiAgICAgIDxDZWxsPntwcm9wcy5yZXF1ZXN0Lm5hbWV9PC9DZWxsPlxuICAgICAgPENlbGw+e3Byb3BzLnJlcXVlc3QuZGVzY3JpcHRpb259PC9DZWxsPlxuICAgICAgPENlbGw+e3Byb3BzLnJlcXVlc3QudmFsdWV9PC9DZWxsPlxuICAgICAgPENlbGw+e3Byb3BzLnJlcXVlc3QucmVjaXBpZW50fTwvQ2VsbD5cbiAgICAgIDxDZWxsPntwcm9wcy5yZXF1ZXN0LmFwcHJvdmFsQ291bnR9PC9DZWxsPlxuICAgICAgPENlbGw+e3Byb3BzLnJlcXVlc3QuY29tcGxldGV9PC9DZWxsPlxuICAgICAgPENlbGw+XG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJncmVlblwiIGJhc2ljPlxuICAgICAgICAgIEFwcHJvdmVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0NlbGw+XG4gICAgICA8Q2VsbD5cbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInRlYWxcIiBiYXNpYz5cbiAgICAgICAgICBGaW5hbGlzZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ2VsbD5cbiAgICA8L1Jvdz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUYWJsZSIsIkJ1dHRvbiIsIlJlcXVlc3RSb3ciLCJwcm9wcyIsIlJvdyIsIkNlbGwiLCJpZCIsInJlcXVlc3QiLCJhZGRyZXNzIiwibWFuYWdlciIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwicmVjaXBpZW50IiwiYXBwcm92YWxDb3VudCIsImNvbXBsZXRlIiwiY29sb3IiLCJiYXNpYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n"));

/***/ })

});
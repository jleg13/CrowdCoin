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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\nvar _this = undefined;\n\n\n\n\nvar RequestRow = function(props) {\n    var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Row, Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell;\n    var id = props.id, request = props.request, isManager = props.isManager, isApprover = props.isApprover;\n    var value = _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].utils.fromWei(request.value, \"ether\");\n    var renderActionButtons = function(hasPermission, color, content) {\n        if (hasPermission) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    color: color,\n                    icon: true,\n                    children: content\n                }, void 0, false, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, _this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: id\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                title: request.name,\n                children: request.name\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                title: request.description,\n                children: request.description\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                title: value,\n                children: value\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                title: request.recipient,\n                children: request.recipient\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: request.approvalCount\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            renderActionButtons(isApprover, \"green\", \"Approve\"),\n            renderActionButtons(isManager, \"teal\", \"Finalize\")\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_c = RequestRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\nvar _c;\n$RefreshReg$(_c, \"RequestRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUEwQjtBQUN3QjtBQUNkO0FBRXBDLElBQU1JLFVBQVUsR0FBRyxTQUFDQyxLQUFLLEVBQUs7SUFDNUIsSUFBUUMsR0FBRyxHQUFXTCx3REFBWCxFQUFFTSxJQUFJLEdBQUtOLHlEQUFMO0lBQ2pCLElBQVFPLEVBQUUsR0FBcUNILEtBQUssQ0FBNUNHLEVBQUUsRUFBRUMsT0FBTyxHQUE0QkosS0FBSyxDQUF4Q0ksT0FBTyxFQUFFQyxTQUFTLEdBQWlCTCxLQUFLLENBQS9CSyxTQUFTLEVBQUVDLFVBQVUsR0FBS04sS0FBSyxDQUFwQk0sVUFBVTtJQUMxQyxJQUFNQyxLQUFLLEdBQUdULG9FQUFrQixDQUFDTSxPQUFPLENBQUNHLEtBQUssRUFBRSxPQUFPLENBQUM7SUFFeEQsSUFBTUcsbUJBQW1CLEdBQUcsU0FBQ0MsYUFBYSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBSztRQUM3RCxJQUFJRixhQUFhLEVBQUU7WUFDakIscUJBQ0UsOERBQUNULElBQUk7MEJBQ0gsNEVBQUNMLHFEQUFNO29CQUFDZSxLQUFLLEVBQUVBLEtBQUs7b0JBQUVFLElBQUk7OEJBQ3ZCRCxPQUFPOzs7Ozt5QkFDRDs7Ozs7cUJBQ0osQ0FDUDtRQUNKLENBQUM7SUFDSCxDQUFDO0lBRUQscUJBQ0UsOERBQUNaLEdBQUc7OzBCQUNGLDhEQUFDQyxJQUFJOzBCQUFFQyxFQUFFOzs7OztxQkFBUTswQkFDakIsOERBQUNELElBQUk7Z0JBQUNhLEtBQUssRUFBRVgsT0FBTyxDQUFDWSxJQUFJOzBCQUFHWixPQUFPLENBQUNZLElBQUk7Ozs7O3FCQUFROzBCQUNoRCw4REFBQ2QsSUFBSTtnQkFBQ2EsS0FBSyxFQUFFWCxPQUFPLENBQUNhLFdBQVc7MEJBQUdiLE9BQU8sQ0FBQ2EsV0FBVzs7Ozs7cUJBQVE7MEJBQzlELDhEQUFDZixJQUFJO2dCQUFDYSxLQUFLLEVBQUVSLEtBQUs7MEJBQUdBLEtBQUs7Ozs7O3FCQUFROzBCQUNsQyw4REFBQ0wsSUFBSTtnQkFBQ2EsS0FBSyxFQUFFWCxPQUFPLENBQUNjLFNBQVM7MEJBQUdkLE9BQU8sQ0FBQ2MsU0FBUzs7Ozs7cUJBQVE7MEJBQzFELDhEQUFDaEIsSUFBSTswQkFBRUUsT0FBTyxDQUFDZSxhQUFhOzs7OztxQkFBUTtZQUNuQ1QsbUJBQW1CLENBQUNKLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO1lBQ25ESSxtQkFBbUIsQ0FBQ0wsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUM7Ozs7OzthQUMvQyxDQUNOO0FBQ0osQ0FBQztBQTdCS04sS0FBQUEsVUFBVTtBQStCaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanM/Y2EzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xuXG5jb25zdCBSZXF1ZXN0Um93ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgUm93LCBDZWxsIH0gPSBUYWJsZTtcbiAgY29uc3QgeyBpZCwgcmVxdWVzdCwgaXNNYW5hZ2VyLCBpc0FwcHJvdmVyIH0gPSBwcm9wcztcbiAgY29uc3QgdmFsdWUgPSB3ZWIzLnV0aWxzLmZyb21XZWkocmVxdWVzdC52YWx1ZSwgXCJldGhlclwiKTtcblxuICBjb25zdCByZW5kZXJBY3Rpb25CdXR0b25zID0gKGhhc1Blcm1pc3Npb24sIGNvbG9yLCBjb250ZW50KSA9PiB7XG4gICAgaWYgKGhhc1Blcm1pc3Npb24pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDZWxsPlxuICAgICAgICAgIDxCdXR0b24gY29sb3I9e2NvbG9yfSBpY29uPlxuICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2VsbD5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJvdz5cbiAgICAgIDxDZWxsPntpZH08L0NlbGw+XG4gICAgICA8Q2VsbCB0aXRsZT17cmVxdWVzdC5uYW1lfT57cmVxdWVzdC5uYW1lfTwvQ2VsbD5cbiAgICAgIDxDZWxsIHRpdGxlPXtyZXF1ZXN0LmRlc2NyaXB0aW9ufT57cmVxdWVzdC5kZXNjcmlwdGlvbn08L0NlbGw+XG4gICAgICA8Q2VsbCB0aXRsZT17dmFsdWV9Pnt2YWx1ZX08L0NlbGw+XG4gICAgICA8Q2VsbCB0aXRsZT17cmVxdWVzdC5yZWNpcGllbnR9PntyZXF1ZXN0LnJlY2lwaWVudH08L0NlbGw+XG4gICAgICA8Q2VsbD57cmVxdWVzdC5hcHByb3ZhbENvdW50fTwvQ2VsbD5cbiAgICAgIHtyZW5kZXJBY3Rpb25CdXR0b25zKGlzQXBwcm92ZXIsIFwiZ3JlZW5cIiwgXCJBcHByb3ZlXCIpfVxuICAgICAge3JlbmRlckFjdGlvbkJ1dHRvbnMoaXNNYW5hZ2VyLCBcInRlYWxcIiwgXCJGaW5hbGl6ZVwiKX1cbiAgICA8L1Jvdz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJSZXF1ZXN0Um93IiwicHJvcHMiLCJSb3ciLCJDZWxsIiwiaWQiLCJyZXF1ZXN0IiwiaXNNYW5hZ2VyIiwiaXNBcHByb3ZlciIsInZhbHVlIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyQWN0aW9uQnV0dG9ucyIsImhhc1Blcm1pc3Npb24iLCJjb2xvciIsImNvbnRlbnQiLCJpY29uIiwidGl0bGUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJhcHByb3ZhbENvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n"));

/***/ })

});
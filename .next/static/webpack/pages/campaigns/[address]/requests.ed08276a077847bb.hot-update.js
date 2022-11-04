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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\nvar _this = undefined;\n\n\n\n\nvar RequestRow = function(props) {\n    var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Row, Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell;\n    var id = props.id, request = props.request, isManager = props.isManager, isApprover = props.isApprover, approversCount = props.approversCount;\n    var value = _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].utils.fromWei(request.value, \"ether\");\n    var performAction = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                return [\n                    2\n                ];\n            });\n        });\n        return function performAction() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var renderActionButtons = function(hasPermission, color, content, action) {\n        if (hasPermission) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                textAlign: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    color: color,\n                    icon: true,\n                    onClick: action,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                        name: content\n                    }, void 0, false, {\n                        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: id\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                title: request.name,\n                children: request.name\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                title: request.description,\n                children: request.description\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                title: value,\n                children: value\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                title: request.recipient,\n                children: request.recipient\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: \"\".concat(request.approvalCount, \"/\").concat(approversCount)\n            }, void 0, false, {\n                fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            renderActionButtons(isApprover, \"green\", \"check\"),\n            renderActionButtons(isManager, \"teal\", \"share\")\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshua-le-gresley/Documents/Ethereum_Solidity_Course/kickstartProject/components/RequestRow.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_c = RequestRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\nvar _c;\n$RefreshReg$(_c, \"RequestRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFBMEI7QUFDOEI7QUFDcEI7QUFFcEMsSUFBTUssVUFBVSxHQUFHLFNBQUNDLEtBQUssRUFBSztJQUM1QixJQUFRQyxHQUFHLEdBQVdOLHdEQUFYLEVBQUVPLElBQUksR0FBS1AseURBQUw7SUFDakIsSUFBUVEsRUFBRSxHQUFxREgsS0FBSyxDQUE1REcsRUFBRSxFQUFFQyxPQUFPLEdBQTRDSixLQUFLLENBQXhESSxPQUFPLEVBQUVDLFNBQVMsR0FBaUNMLEtBQUssQ0FBL0NLLFNBQVMsRUFBRUMsVUFBVSxHQUFxQk4sS0FBSyxDQUFwQ00sVUFBVSxFQUFFQyxjQUFjLEdBQUtQLEtBQUssQ0FBeEJPLGNBQWM7SUFDMUQsSUFBTUMsS0FBSyxHQUFHVixvRUFBa0IsQ0FBQ00sT0FBTyxDQUFDSSxLQUFLLEVBQUUsT0FBTyxDQUFDO0lBRXhELElBQU1HLGFBQWE7bUJBQUcsK0ZBQVk7Ozs7OztRQUVsQyxDQUFDO3dCQUZLQSxhQUFhOzs7T0FFbEI7SUFFRCxJQUFNQyxtQkFBbUIsR0FBRyxTQUFDQyxhQUFhLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUs7UUFDckUsSUFBSUgsYUFBYSxFQUFFO1lBQ2pCLHFCQUNFLDhEQUFDWCxJQUFJO2dCQUFDZSxTQUFTLEVBQUMsUUFBUTswQkFDdEIsNEVBQUNyQixxREFBTTtvQkFBQ2tCLEtBQUssRUFBRUEsS0FBSztvQkFBRUksSUFBSTtvQkFBQ0MsT0FBTyxFQUFFSCxNQUFNOzhCQUN4Qyw0RUFBQ25CLG1EQUFJO3dCQUFDdUIsSUFBSSxFQUFFTCxPQUFPOzs7Ozs2QkFBSTs7Ozs7eUJBQ2hCOzs7OztxQkFDSixDQUNQO1FBQ0osQ0FBQztJQUNILENBQUM7SUFFRCxxQkFDRSw4REFBQ2QsR0FBRzs7MEJBQ0YsOERBQUNDLElBQUk7MEJBQUVDLEVBQUU7Ozs7O3FCQUFROzBCQUNqQiw4REFBQ0QsSUFBSTtnQkFBQ21CLEtBQUssRUFBRWpCLE9BQU8sQ0FBQ2dCLElBQUk7MEJBQUdoQixPQUFPLENBQUNnQixJQUFJOzs7OztxQkFBUTswQkFDaEQsOERBQUNsQixJQUFJO2dCQUFDbUIsS0FBSyxFQUFFakIsT0FBTyxDQUFDa0IsV0FBVzswQkFBR2xCLE9BQU8sQ0FBQ2tCLFdBQVc7Ozs7O3FCQUFROzBCQUM5RCw4REFBQ3BCLElBQUk7Z0JBQUNtQixLQUFLLEVBQUViLEtBQUs7MEJBQUdBLEtBQUs7Ozs7O3FCQUFROzBCQUNsQyw4REFBQ04sSUFBSTtnQkFBQ21CLEtBQUssRUFBRWpCLE9BQU8sQ0FBQ21CLFNBQVM7MEJBQUduQixPQUFPLENBQUNtQixTQUFTOzs7OztxQkFBUTswQkFDMUQsOERBQUNyQixJQUFJOzBCQUFFLEVBQUMsQ0FBMkJLLE1BQWMsQ0FBdkNILE9BQU8sQ0FBQ29CLGFBQWEsRUFBQyxHQUFDLENBQWlCLFFBQWZqQixjQUFjLENBQUU7Ozs7O3FCQUFRO1lBQzFESyxtQkFBbUIsQ0FBQ04sVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUc7WUFDbkRNLG1CQUFtQixDQUFDUCxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQzs7Ozs7O2FBQzVDLENBQ047QUFDSixDQUFDO0FBakNLTixLQUFBQSxVQUFVO0FBbUNoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVxdWVzdFJvdy5qcz9jYTMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYmxlLCBCdXR0b24sIEljb24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XG5cbmNvbnN0IFJlcXVlc3RSb3cgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBSb3csIENlbGwgfSA9IFRhYmxlO1xuICBjb25zdCB7IGlkLCByZXF1ZXN0LCBpc01hbmFnZXIsIGlzQXBwcm92ZXIsIGFwcHJvdmVyc0NvdW50IH0gPSBwcm9wcztcbiAgY29uc3QgdmFsdWUgPSB3ZWIzLnV0aWxzLmZyb21XZWkocmVxdWVzdC52YWx1ZSwgXCJldGhlclwiKTtcblxuICBjb25zdCBwZXJmb3JtQWN0aW9uID0gYXN5bmMgKCkgPT4ge1xuXG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQWN0aW9uQnV0dG9ucyA9IChoYXNQZXJtaXNzaW9uLCBjb2xvciwgY29udGVudCwgYWN0aW9uKSA9PiB7XG4gICAgaWYgKGhhc1Blcm1pc3Npb24pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDZWxsIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxCdXR0b24gY29sb3I9e2NvbG9yfSBpY29uIG9uQ2xpY2s9e2FjdGlvbn0+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPXtjb250ZW50fSAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NlbGw+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSb3c+XG4gICAgICA8Q2VsbD57aWR9PC9DZWxsPlxuICAgICAgPENlbGwgdGl0bGU9e3JlcXVlc3QubmFtZX0+e3JlcXVlc3QubmFtZX08L0NlbGw+XG4gICAgICA8Q2VsbCB0aXRsZT17cmVxdWVzdC5kZXNjcmlwdGlvbn0+e3JlcXVlc3QuZGVzY3JpcHRpb259PC9DZWxsPlxuICAgICAgPENlbGwgdGl0bGU9e3ZhbHVlfT57dmFsdWV9PC9DZWxsPlxuICAgICAgPENlbGwgdGl0bGU9e3JlcXVlc3QucmVjaXBpZW50fT57cmVxdWVzdC5yZWNpcGllbnR9PC9DZWxsPlxuICAgICAgPENlbGw+e2Ake3JlcXVlc3QuYXBwcm92YWxDb3VudH0vJHthcHByb3ZlcnNDb3VudH1gfTwvQ2VsbD5cbiAgICAgIHtyZW5kZXJBY3Rpb25CdXR0b25zKGlzQXBwcm92ZXIsIFwiZ3JlZW5cIiwgXCJjaGVja1wiLCApfVxuICAgICAge3JlbmRlckFjdGlvbkJ1dHRvbnMoaXNNYW5hZ2VyLCBcInRlYWxcIiwgXCJzaGFyZVwiKX1cbiAgICA8L1Jvdz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUYWJsZSIsIkJ1dHRvbiIsIkljb24iLCJ3ZWIzIiwiUmVxdWVzdFJvdyIsInByb3BzIiwiUm93IiwiQ2VsbCIsImlkIiwicmVxdWVzdCIsImlzTWFuYWdlciIsImlzQXBwcm92ZXIiLCJhcHByb3ZlcnNDb3VudCIsInZhbHVlIiwidXRpbHMiLCJmcm9tV2VpIiwicGVyZm9ybUFjdGlvbiIsInJlbmRlckFjdGlvbkJ1dHRvbnMiLCJoYXNQZXJtaXNzaW9uIiwiY29sb3IiLCJjb250ZW50IiwiYWN0aW9uIiwidGV4dEFsaWduIiwiaWNvbiIsIm9uQ2xpY2siLCJuYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsImFwcHJvdmFsQ291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n"));

/***/ })

});
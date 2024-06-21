(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": () => (/* binding */ Context),
/* harmony export */   "ContextProvider": () => (/* binding */ ContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\\u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629 \u0644\u0644\u062D\u0627\u0633\u0628\u0627\u062A\\Desktop\\nextjs-chat-tutorial-main\\context\\index.js";


const Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const ContextProvider = props => {
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: secret,
    1: setSecret
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const value = {
    username,
    setUsername,
    secret,
    setSecret
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Context.Provider, {
    value: value,
    children: [" ", props.children, " "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 12
  }, undefined);
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _styles_auth_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/auth.css */ "./styles/auth.css");
/* harmony import */ var _styles_auth_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_auth_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_chats_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/chats.css */ "./styles/chats.css");
/* harmony import */ var _styles_chats_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_chats_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ "./context/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\\u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629 \u0644\u0644\u062D\u0627\u0633\u0628\u0627\u062A\\Desktop\\nextjs-chat-tutorial-main\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_3__.ContextProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 14
  }, this);
}

/***/ }),

/***/ "./styles/auth.css":
/*!*************************!*\
  !*** ./styles/auth.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "./styles/chats.css":
/*!**************************!*\
  !*** ./styles/chats.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVPLE1BQU1HLE9BQU8sZ0JBQUdELG9EQUFhLEVBQTdCO0FBRUEsTUFBTUUsZUFBZSxHQUFJQyxLQUFELElBQVc7QUFDdEMsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JSLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUVBLFFBQU1TLEtBQUssR0FBRztBQUNWSixJQUFBQSxRQURVO0FBRVZDLElBQUFBLFdBRlU7QUFHVkMsSUFBQUEsTUFIVTtBQUlWQyxJQUFBQTtBQUpVLEdBQWQ7QUFPQSxzQkFBTyw4REFBQyxPQUFELENBQVMsUUFBVDtBQUFrQixTQUFLLEVBQUtDLEtBQTVCO0FBQUEsb0JBQXdDTCxLQUFLLENBQUNNLFFBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0gsQ0FaTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKUDtBQUNBO0FBQ0E7QUFFQTs7QUFFZSxTQUFTQyxHQUFULENBQWE7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWIsRUFBdUM7QUFDbEQsc0JBQVMsOERBQ0wscURBREs7QUFBQSwyQkFJTCw4REFDQSxTQURBLG9CQUNjQSxTQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVQ7QUFXSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUlsQkQ7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b3VyLXByb2plY3QvLi9jb250ZXh0L2luZGV4LmpzIiwid2VicGFjazovL3lvdXItcHJvamVjdC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8veW91ci1wcm9qZWN0Ly4vc3R5bGVzL2F1dGguY3NzIiwid2VicGFjazovL3lvdXItcHJvamVjdC8uL3N0eWxlcy9jaGF0cy5jc3MiLCJ3ZWJwYWNrOi8veW91ci1wcm9qZWN0Ly4vc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly95b3VyLXByb2plY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3lvdXItcHJvamVjdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3NlY3JldCwgc2V0U2VjcmV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHNldFVzZXJuYW1lLFxyXG4gICAgICAgIHNlY3JldCxcclxuICAgICAgICBzZXRTZWNyZXQsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZSA9IHsgdmFsdWUgfSA+IHsgcHJvcHMuY2hpbGRyZW4gfSA8IC9Db250ZXh0LlByb3ZpZGVyPjtcclxufSIsImltcG9ydCBcIi4uL3N0eWxlcy9hdXRoLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvY2hhdHMuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5jc3NcIjtcclxuXHJcbmltcG9ydCB7IENvbnRleHRQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKCA8XHJcbiAgICAgICAgQ29udGV4dFByb3ZpZGVyID5cclxuXHJcblxyXG4gICAgICAgIDxcclxuICAgICAgICBDb21wb25lbnQgey4uLnBhZ2VQcm9wcyB9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPFxyXG4gICAgICAgIC9Db250ZXh0UHJvdmlkZXI+XHJcbiAgICApO1xyXG59IiwiIiwiIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsIkNvbnRleHQiLCJDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzZWNyZXQiLCJzZXRTZWNyZXQiLCJ2YWx1ZSIsImNoaWxkcmVuIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==
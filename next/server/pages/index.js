"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Auth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./context/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\\u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629 \u0644\u0644\u062D\u0627\u0633\u0628\u0627\u062A\\Desktop\\nextjs-chat-tutorial-main\\pages\\index.js";





function Auth() {
  const {
    username,
    secret,
    setUsername,
    setSecret
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.Context);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  function onSubmit(e) {
    e.preventDefault();
    if (username.length === 0 || secret.length === 0) return;
    axios__WEBPACK_IMPORTED_MODULE_3___default().put('https://api.chatengine.io/users/', {
      username,
      secret
    }, {
      headers: {
        "private-key": "a98615b2-e988-487c-a6fd-eed1d50d00de"
      }
    }).then(r => router.push("/chats"));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "background",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "auth-container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
        className: "auth-form",
        onSubmit: e => onSubmit(e),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "auth-title",
          children: " NextJs Chat "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            placeholder: "Email",
            className: "text-input",
            onChange: e => setUsername(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "password",
            placeholder: "password",
            className: "text-input",
            onChange: e => setSecret(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
          type: "submit",
          className: "submit-button",
          children: "Login / sign Up "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 14
  }, this);
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVQ7QUFxREg7Ozs7Ozs7Ozs7QUN4RkQ7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b3VyLXByb2plY3QvLi9jb250ZXh0L2luZGV4LmpzIiwid2VicGFjazovL3lvdXItcHJvamVjdC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3lvdXItcHJvamVjdC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8veW91ci1wcm9qZWN0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly95b3VyLXByb2plY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3lvdXItcHJvamVjdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3NlY3JldCwgc2V0U2VjcmV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHNldFVzZXJuYW1lLFxyXG4gICAgICAgIHNlY3JldCxcclxuICAgICAgICBzZXRTZWNyZXQsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZSA9IHsgdmFsdWUgfSA+IHsgcHJvcHMuY2hpbGRyZW4gfSA8IC9Db250ZXh0LlByb3ZpZGVyPjtcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5cblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoKCkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgdXNlcm5hbWUsXG5cbiAgICAgICAgc2VjcmV0LFxuXG4gICAgICAgIHNldFVzZXJuYW1lLFxuXG4gICAgICAgIHNldFNlY3JldCxcblxuXG4gICAgfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgZnVuY3Rpb24gb25TdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYgKHVzZXJuYW1lLmxlbmd0aCA9PT0gMCB8fCBzZWNyZXQubGVuZ3RoID09PSAwKSByZXR1cm5cbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wdXQoXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vYXBpLmNoYXRlbmdpbmUuaW8vdXNlcnMvJywgeyB1c2VybmFtZSwgc2VjcmV0IH0sIHsgaGVhZGVyczogeyBcInByaXZhdGUta2V5XCI6IFwiYTk4NjE1YjItZTk4OC00ODdjLWE2ZmQtZWVkMWQ1MGQwMGRlXCIgfSB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICAudGhlbigocikgPT4gcm91dGVyLnB1c2goXCIvY2hhdHNcIikpO1xuICAgIH1cbiAgICByZXR1cm4gKCA8XG4gICAgICAgIGRpdiBjbGFzc05hbWUgPSBcImJhY2tncm91bmRcIiA+XG4gICAgICAgIDxcbiAgICAgICAgZGl2IGNsYXNzTmFtZSA9IFwiYXV0aC1jb250YWluZXJcIiA+XG4gICAgICAgIDxcbiAgICAgICAgZm9ybSBjbGFzc05hbWUgPSBcImF1dGgtZm9ybVwiXG4gICAgICAgIG9uU3VibWl0ID0ge1xuICAgICAgICAgICAgKGUpID0+IG9uU3VibWl0KGUpIH0gPlxuICAgICAgICA8XG4gICAgICAgIGRpdiBjbGFzc05hbWUgPSBcImF1dGgtdGl0bGVcIiA+IE5leHRKcyBDaGF0IDwgL2Rpdj5cblxuICAgICAgICA8XG4gICAgICAgIGRpdiBjbGFzc05hbWUgPSBcImlucHV0LWNvbnRhaW5lclwiID5cbiAgICAgICAgPFxuICAgICAgICBpbnB1dCBwbGFjZWhvbGRlciA9IFwiRW1haWxcIlxuICAgICAgICBjbGFzc05hbWUgPSBcInRleHQtaW5wdXRcIlxuICAgICAgICBvbkNoYW5nZSA9IHsgZSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSkgfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxcbiAgICAgICAgL2Rpdj5cblxuICAgICAgICA8XG4gICAgICAgIGRpdiBjbGFzc05hbWUgPSBcImlucHV0LWNvbnRhaW5lclwiID5cbiAgICAgICAgPFxuICAgICAgICBpbnB1dCB0eXBlID0gXCJwYXNzd29yZFwiXG4gICAgICAgIHBsYWNlaG9sZGVyID0gXCJwYXNzd29yZFwiXG4gICAgICAgIGNsYXNzTmFtZSA9IFwidGV4dC1pbnB1dFwiXG4gICAgICAgIG9uQ2hhbmdlID0geyBlID0+IHNldFNlY3JldChlLnRhcmdldC52YWx1ZSkgfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxcbiAgICAgICAgL2Rpdj5cblxuICAgICAgICA8XG4gICAgICAgIGJ1dHRvbiB0eXBlID0gXCJzdWJtaXRcIlxuICAgICAgICBjbGFzc05hbWUgPSBcInN1Ym1pdC1idXR0b25cIiA+XG4gICAgICAgIExvZ2luIC8gc2lnbiBVcCA8XG4gICAgICAgIC9idXR0b24+XG5cbiAgICAgICAgPFxuICAgICAgICAvZm9ybT5cblxuICAgICAgICA8XG4gICAgICAgIC9kaXY+XG5cblxuICAgICAgICA8XG4gICAgICAgIC9kaXY+XG5cblxuICAgIClcblxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJDb250ZXh0IiwiQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwic2VjcmV0Iiwic2V0U2VjcmV0IiwidmFsdWUiLCJjaGlsZHJlbiIsInVzZUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIkF1dGgiLCJyb3V0ZXIiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsInB1dCIsImhlYWRlcnMiLCJ0aGVuIiwiciIsInB1c2giLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9
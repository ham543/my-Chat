"use strict";
self["webpackHotUpdate_N_E"]("pages/chats",{

/***/ "./pages/chats.js":
/*!************************!*\
  !*** ./pages/chats.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Chats; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./context/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\\u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629 \u0644\u0644\u062D\u0627\u0633\u0628\u0627\u062A\\Desktop\\nextjs-chat-tutorial-main\\pages\\chats.js",
    _s = $RefreshSig$();






var ChatEngine = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "node_modules_react-chat-engine_dist_index_modern_js").then(__webpack_require__.bind(__webpack_require__, /*! react-chat-engine */ "./node_modules/react-chat-engine/dist/index.modern.js")).then(function (module) {
    return module.ChatEngine;
  });
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-chat-engine */ "./node_modules/react-chat-engine/dist/index.modern.js")];
    },
    modules: ["chats.js -> " + "react-chat-engine"]
  }
});
_c2 = ChatEngine;
var MessageFormSocial = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c3 = function _c3() {
  return __webpack_require__.e(/*! import() */ "node_modules_react-chat-engine_dist_index_modern_js").then(__webpack_require__.bind(__webpack_require__, /*! react-chat-engine */ "./node_modules/react-chat-engine/dist/index.modern.js")).then(function (module) {
    return module.MessageFormSocial;
  });
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-chat-engine */ "./node_modules/react-chat-engine/dist/index.modern.js")];
    },
    modules: ["chats.js -> " + "react-chat-engine"]
  }
});
_c4 = MessageFormSocial;
function Chats() {
  _s();

  var _this = this;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.Context),
      username = _useContext.username,
      secret = _useContext.secret;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      showChat = _useState[0],
      setShowChat = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (username.length === 0 || secret.length === 0) router.push("/");
  });
  if (!showChat) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 27
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "background",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "shadow",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(ChatEngine, {
        height: "calc(100vh - 200px)",
        projectID: "ea26c174-f8c0-4b75-824f-bfcf3a8d383b",
        userName: username,
        userSecret: secret,
        renderNewMessageForm: function renderNewMessageForm() {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(MessageFormSocial, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 23
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, this), " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), " "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 18
  }, this);
}

_s(Chats, "gQ5m4oMHq+GSYj2OIN+DW4vEenQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c5 = Chats;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "ChatEngine$dynamic");
$RefreshReg$(_c2, "ChatEngine");
$RefreshReg$(_c3, "MessageFormSocial$dynamic");
$RefreshReg$(_c4, "MessageFormSocial");
$RefreshReg$(_c5, "Chats");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdHMuZTc0MWVjNDM0MWM3MTQ0MzQ2MGEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1PLFVBQVUsR0FBR0QsbURBQU8sTUFBQztBQUFBLFNBQ3ZCLG1PQUE2QkUsSUFBN0IsQ0FBa0MsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0YsVUFBbkI7QUFBQSxHQUFsQyxDQUR1QjtBQUFBLENBQUQ7QUFBQTtBQUFBO0FBQUEsa0NBQ2QsZ0ZBRGM7QUFBQTtBQUFBLCtCQUNkLG1CQURjO0FBQUE7QUFBQSxFQUExQjtNQUFNQTtBQUdOLElBQU1HLGlCQUFpQixHQUFHSixtREFBTyxPQUFDO0FBQUEsU0FDOUIsbU9BQTZCRSxJQUE3QixDQUFrQyxVQUFDQyxNQUFEO0FBQUEsV0FBWUEsTUFBTSxDQUFDQyxpQkFBbkI7QUFBQSxHQUFsQyxDQUQ4QjtBQUFBLENBQUQ7QUFBQTtBQUFBO0FBQUEsa0NBQ3JCLGdGQURxQjtBQUFBO0FBQUEsK0JBQ3JCLG1CQURxQjtBQUFBO0FBQUEsRUFBakM7TUFBTUE7QUFLUyxTQUFTQyxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQzVCLG9CQUE2QlIsaURBQVUsQ0FBQ0MsNkNBQUQsQ0FBdkM7QUFBQSxNQUFRUSxRQUFSLGVBQVFBLFFBQVI7QUFBQSxNQUFrQkMsTUFBbEIsZUFBa0JBLE1BQWxCOztBQUNBLGtCQUFnQ1osK0NBQVEsQ0FBQyxLQUFELENBQXhDO0FBQUEsTUFBT2EsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdYLHNEQUFTLEVBQXhCO0FBRUFILEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUksT0FBT2UsUUFBUCxLQUFvQixJQUF4QixFQUE4QjtBQUMxQkYsTUFBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDtBQUNIO0FBQ0osR0FKUSxDQUFUO0FBTUFiLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlVLFFBQVEsQ0FBQ00sTUFBVCxLQUFvQixDQUFwQixJQUF5QkwsTUFBTSxDQUFDSyxNQUFQLEtBQWtCLENBQS9DLEVBQWtERixNQUFNLENBQUNHLElBQVAsQ0FBWSxHQUFaO0FBQ3JELEdBRlEsQ0FBVDtBQUlBLE1BQUksQ0FBQ0wsUUFBTCxFQUFlLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNYLHNCQUFTO0FBQ0QsYUFBUyxFQUFHLFlBRFg7QUFBQSw0QkFFTDtBQUNJLGVBQVMsRUFBRyxRQURoQjtBQUFBLDhCQUVBLDhEQUNBLFVBREE7QUFDVyxjQUFNLEVBQUcscUJBRHBCO0FBRUEsaUJBQVMsRUFBRyxzQ0FGWjtBQUlBLGdCQUFRLEVBQUtGLFFBSmI7QUFLQSxrQkFBVSxFQUFLQyxNQUxmO0FBTUEsNEJBQW9CLEVBQ2hCO0FBQUEsOEJBQU0sOERBQUUsaUJBQUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBTjtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFUO0FBaUJQOztHQWpDdUJGO1VBR0xOOzs7TUFIS00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmNvbnN0IENoYXRFbmdpbmUgPSBkeW5hbWljKCgpID0+XG4gICAgaW1wb3J0IChcInJlYWN0LWNoYXQtZW5naW5lXCIpLnRoZW4oKG1vZHVsZSkgPT4gbW9kdWxlLkNoYXRFbmdpbmUpXG4pO1xuY29uc3QgTWVzc2FnZUZvcm1Tb2NpYWwgPSBkeW5hbWljKCgpID0+XG4gICAgaW1wb3J0IChcInJlYWN0LWNoYXQtZW5naW5lXCIpLnRoZW4oKG1vZHVsZSkgPT4gbW9kdWxlLk1lc3NhZ2VGb3JtU29jaWFsKVxuKTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0cygpIHtcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBzZWNyZXQgfSA9IHVzZUNvbnRleHQoQ29udGV4dClcbiAgICBjb25zdCBbc2hvd0NoYXQsIHNldFNob3dDaGF0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRTaG93Q2hhdCh0cnVlKVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodXNlcm5hbWUubGVuZ3RoID09PSAwIHx8IHNlY3JldC5sZW5ndGggPT09IDApIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9KTtcblxuICAgIGlmICghc2hvd0NoYXQpIHJldHVybiA8ZGl2IC8gPlxuICAgICAgICByZXR1cm4gKCA8XG4gICAgICAgICAgICBkaXYgY2xhc3NOYW1lID0gXCJiYWNrZ3JvdW5kXCIgPlxuICAgICAgICAgICAgPFxuICAgICAgICAgICAgZGl2IGNsYXNzTmFtZSA9IFwic2hhZG93XCIgPlxuICAgICAgICAgICAgPFxuICAgICAgICAgICAgQ2hhdEVuZ2luZSBoZWlnaHQgPSBcImNhbGMoMTAwdmggLSAyMDBweClcIlxuICAgICAgICAgICAgcHJvamVjdElEID0gXCJlYTI2YzE3NC1mOGMwLTRiNzUtODI0Zi1iZmNmM2E4ZDM4M2JcIlxuXG4gICAgICAgICAgICB1c2VyTmFtZSA9IHsgdXNlcm5hbWUgfVxuICAgICAgICAgICAgdXNlclNlY3JldCA9IHsgc2VjcmV0IH1cbiAgICAgICAgICAgIHJlbmRlck5ld01lc3NhZ2VGb3JtID0ge1xuICAgICAgICAgICAgICAgICgpID0+IDwgTWVzc2FnZUZvcm1Tb2NpYWwgLyA+IH1cblxuICAgICAgICAgICAgLz4gPFxuICAgICAgICAgICAgL2Rpdj4gPFxuICAgICAgICAgICAgL2Rpdj5cbiAgICAgICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJkeW5hbWljIiwiQ2hhdEVuZ2luZSIsInRoZW4iLCJtb2R1bGUiLCJNZXNzYWdlRm9ybVNvY2lhbCIsIkNoYXRzIiwidXNlcm5hbWUiLCJzZWNyZXQiLCJzaG93Q2hhdCIsInNldFNob3dDaGF0Iiwicm91dGVyIiwiZG9jdW1lbnQiLCJsZW5ndGgiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==
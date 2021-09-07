"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var web3;

if ( true && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({
    method: "eth_requestAccounts"
  });
  web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  var provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)("https://rinkeby.infura.io/v3/b19ce415874041278af279c5db1d605e");
  web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);
}

/* harmony default export */ __webpack_exports__["default"] = (web3);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmI2MWFhNzE1NjllZjU1MDA0OGEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFJQyxJQUFKOztBQUVBLElBQUksU0FBaUMsT0FBT0MsTUFBTSxDQUFDQyxRQUFkLEtBQTJCLFdBQWhFLEVBQTZFO0FBQzNFO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFBRUMsSUFBQUEsTUFBTSxFQUFFO0FBQVYsR0FBeEI7QUFDQUosRUFBQUEsSUFBSSxHQUFHLElBQUlELDZDQUFKLENBQVNFLE1BQU0sQ0FBQ0MsUUFBaEIsQ0FBUDtBQUNELENBSkQsTUFJTztBQUNMO0FBQ0EsTUFBTUcsUUFBUSxHQUFHLElBQUlOLG9FQUFKLENBQ2YsK0RBRGUsQ0FBakI7QUFHQUMsRUFBQUEsSUFBSSxHQUFHLElBQUlELDZDQUFKLENBQVNNLFFBQVQsQ0FBUDtBQUNEOztBQUVELCtEQUFlTCxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2V0aGVyZXVtL3dlYjMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuXHJcbmxldCB3ZWIzO1xyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIC8vIFdlIGFyZSBpbiB0aGUgYnJvd3NlciBhbmQgbWV0YW1hc2sgaXMgcnVubmluZy5cclxuICB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XHJcbiAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbn0gZWxzZSB7XHJcbiAgLy8gV2UgYXJlIG9uIHRoZSBzZXJ2ZXIgKk9SKiB0aGUgdXNlciBpcyBub3QgcnVubmluZyBtZXRhbWFza1xyXG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihcclxuICAgIFwiaHR0cHM6Ly9yaW5rZWJ5LmluZnVyYS5pby92My9iMTljZTQxNTg3NDA0MTI3OGFmMjc5YzVkYjFkNjA1ZVwiXHJcbiAgKTtcclxuICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3ZWIzO1xyXG4iXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/useInfiniteScroll.js":
/*!************************************!*\
  !*** ./hooks/useInfiniteScroll.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _s = $RefreshSig$();\n\n\n\nvar useInfiniteScroll = function useInfiniteScroll(targetEl) {\n  _s();\n\n  var observerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      intersecting = _useState[0],\n      setIntersecting = _useState[1];\n\n  var getObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    if (!observerRef.current) {\n      observerRef.current = new IntersectionObserver(function (entries) {\n        return setIntersecting(entries.some(function (entry) {\n          return entry.isIntersecting;\n        }));\n      });\n    }\n\n    return observerRef.current;\n  }, [observerRef.current]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (targetEl.current) {\n      getObserver().observe(targetEl.current);\n    }\n\n    return function () {\n      getObserver().disconnect();\n    };\n  }, [targetEl.current]);\n  return intersecting;\n};\n\n_s(useInfiniteScroll, \"wgJwkE67wQsXc1eiCmrL0CTwPqc=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useInfiniteScroll);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlSW5maW5pdGVTY3JvbGwuanM/ODFlZiJdLCJuYW1lcyI6WyJ1c2VJbmZpbml0ZVNjcm9sbCIsInRhcmdldEVsIiwib2JzZXJ2ZXJSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImludGVyc2VjdGluZyIsInNldEludGVyc2VjdGluZyIsImdldE9ic2VydmVyIiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwic29tZSIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ1c2VFZmZlY3QiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxRQUFELEVBQWM7QUFBQTs7QUFDdEMsTUFBTUMsV0FBVyxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBMUI7O0FBRHNDLGtCQUdFQywrQ0FBUSxDQUFDLEtBQUQsQ0FIVjtBQUFBLE1BRy9CQyxZQUgrQjtBQUFBLE1BR2pCQyxlQUhpQjs7QUFLdEMsTUFBTUMsV0FBVyxHQUFHQyxrREFBVyxDQUFDLFlBQU07QUFDcEMsUUFBSSxDQUFDTixXQUFXLENBQUNPLE9BQWpCLEVBQTBCO0FBQ3hCUCxpQkFBVyxDQUFDTyxPQUFaLEdBQXNCLElBQUlDLG9CQUFKLENBQXlCLFVBQUNDLE9BQUQ7QUFBQSxlQUM3Q0wsZUFBZSxDQUFDSyxPQUFPLENBQUNDLElBQVIsQ0FBYSxVQUFDQyxLQUFEO0FBQUEsaUJBQVdBLEtBQUssQ0FBQ0MsY0FBakI7QUFBQSxTQUFiLENBQUQsQ0FEOEI7QUFBQSxPQUF6QixDQUF0QjtBQUdEOztBQUNELFdBQU9aLFdBQVcsQ0FBQ08sT0FBbkI7QUFDRCxHQVA4QixFQU81QixDQUFDUCxXQUFXLENBQUNPLE9BQWIsQ0FQNEIsQ0FBL0I7QUFTQU0sa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSWQsUUFBUSxDQUFDUSxPQUFiLEVBQXNCO0FBQ3BCRixpQkFBVyxHQUFHUyxPQUFkLENBQXNCZixRQUFRLENBQUNRLE9BQS9CO0FBQ0Q7O0FBQ0QsV0FBTyxZQUFNO0FBQ1hGLGlCQUFXLEdBQUdVLFVBQWQ7QUFDRCxLQUZEO0FBR0QsR0FQUSxFQU9OLENBQUNoQixRQUFRLENBQUNRLE9BQVYsQ0FQTSxDQUFUO0FBUUEsU0FBT0osWUFBUDtBQUNELENBdkJEOztHQUFNTCxpQjs7QUF5Qk4sK0RBQWVBLGlCQUFmIiwiZmlsZSI6Ii4vaG9va3MvdXNlSW5maW5pdGVTY3JvbGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCB1c2VJbmZpbml0ZVNjcm9sbCA9ICh0YXJnZXRFbCkgPT4ge1xuICBjb25zdCBvYnNlcnZlclJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBbaW50ZXJzZWN0aW5nLCBzZXRJbnRlcnNlY3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGdldE9ic2VydmVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghb2JzZXJ2ZXJSZWYuY3VycmVudCkge1xuICAgICAgb2JzZXJ2ZXJSZWYuY3VycmVudCA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT5cbiAgICAgICAgc2V0SW50ZXJzZWN0aW5nKGVudHJpZXMuc29tZSgoZW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKSksXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gb2JzZXJ2ZXJSZWYuY3VycmVudDtcbiAgfSwgW29ic2VydmVyUmVmLmN1cnJlbnRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0YXJnZXRFbC5jdXJyZW50KSB7XG4gICAgICBnZXRPYnNlcnZlcigpLm9ic2VydmUodGFyZ2V0RWwuY3VycmVudCk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBnZXRPYnNlcnZlcigpLmRpc2Nvbm5lY3QoKTtcbiAgICB9O1xuICB9LCBbdGFyZ2V0RWwuY3VycmVudF0pO1xuICByZXR1cm4gaW50ZXJzZWN0aW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlSW5maW5pdGVTY3JvbGw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useInfiniteScroll.js\n");

/***/ })

});
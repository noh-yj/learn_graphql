/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/nohyujin/projects/prac_graphql/client/components/MsgList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar MsgList = function MsgList() {\n  _s();\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)(),\n      query = _useRouter.query;\n\n  var userId = query.userId || query.userid || '';\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),\n      msgs = _useState[0],\n      setMsgs = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),\n      editingId = _useState2[0],\n      setEditingId = _useState2[1];\n\n  var fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n  var intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__.default)(fetchMoreEl);\n\n  var onCreate = /*#__PURE__*/function () {\n    var _ref = (0,_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(text) {\n      var newMsg;\n      return _Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.fetcher)('post', '/messages', {\n                text: text,\n                userId: userId\n              });\n\n            case 2:\n              newMsg = _context.sent;\n\n              if (newMsg) {\n                _context.next = 5;\n                break;\n              }\n\n              throw Error('something wrong');\n\n            case 5:\n              setMsgs(function (msgs) {\n                return [newMsg].concat((0,_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs));\n              });\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onCreate(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var onUpdate = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(text, id) {\n      var newMsg;\n      return _Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.fetcher)('put', \"/messages/\".concat(id), {\n                text: text,\n                userId: userId\n              });\n\n            case 2:\n              newMsg = _context2.sent;\n\n              if (newMsg) {\n                _context2.next = 5;\n                break;\n              }\n\n              throw Error('something wrong');\n\n            case 5:\n              setMsgs(function (msgs) {\n                var targetIndex = msgs.findIndex(function (msg) {\n                  return msg.id === id;\n                });\n                if (targetIndex < 0) return msgs;\n\n                var newMsgs = (0,_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs);\n\n                newMsgs.splice(targetIndex, 1, newMsg);\n                return newMsgs;\n              });\n              doneEdit();\n\n            case 7:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function onUpdate(_x2, _x3) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var _onDelete = /*#__PURE__*/function () {\n    var _ref3 = (0,_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(id) {\n      var receivedId;\n      return _Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.fetcher)('delete', \"/messages/\".concat(id), {\n                params: {\n                  userId: userId\n                }\n              });\n\n            case 2:\n              receivedId = _context3.sent;\n              setMsgs(function (msgs) {\n                var targetIndex = msgs.findIndex(function (msg) {\n                  return msg.id === receivedId + '';\n                });\n                if (targetIndex < 0) return msgs;\n\n                var newMsgs = (0,_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs);\n\n                newMsgs.splice(targetIndex, 1);\n                return newMsgs;\n              });\n\n            case 4:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function onDelete(_x4) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var doneEdit = function doneEdit() {\n    return setEditingId(null);\n  };\n\n  var getMessages = /*#__PURE__*/function () {\n    var _ref4 = (0,_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {\n      var _msgs;\n\n      var newMsgs;\n      return _Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.next = 2;\n              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.fetcher)('get', '/messages', {\n                params: {\n                  cursor: ((_msgs = msgs[msgs.length - 1]) === null || _msgs === void 0 ? void 0 : _msgs.id) || ''\n                }\n              });\n\n            case 2:\n              newMsgs = _context4.sent;\n              setMsgs(function (msgs) {\n                return [].concat((0,_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs), (0,_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(newMsgs));\n              });\n\n            case 4:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function getMessages() {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    if (intersecting) {\n      getMessages();\n    }\n  }, [intersecting]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_8__.default, {\n      mutate: onCreate\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 18\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      className: \"messages\",\n      children: msgs.map(function (val) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_7__.default, _objectSpread(_objectSpread({}, val), {}, {\n          onUpdate: onUpdate,\n          startEdit: function startEdit() {\n            return setEditingId(val.id);\n          },\n          onDelete: function onDelete() {\n            return _onDelete(val.id);\n          },\n          isEditing: editingId === val.id,\n          myId: userId\n        }), val.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      ref: fetchMoreEl\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(MsgList, \"EORl7EjYLKQM/7tPV8GMx7eNb8A=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter, _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__.default];\n});\n\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\n\nvar _c;\n\n$RefreshReg$(_c, \"MsgList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzA0YTgiXSwibmFtZXMiOlsiTXNnTGlzdCIsInVzZVJvdXRlciIsInF1ZXJ5IiwidXNlcklkIiwidXNlcmlkIiwidXNlU3RhdGUiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsImZldGNoTW9yZUVsIiwidXNlUmVmIiwiaW50ZXJzZWN0aW5nIiwidXNlSW5maW5pdGVTY3JvbGwiLCJvbkNyZWF0ZSIsInRleHQiLCJmZXRjaGVyIiwibmV3TXNnIiwiRXJyb3IiLCJvblVwZGF0ZSIsImlkIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvbkRlbGV0ZSIsInBhcmFtcyIsInJlY2VpdmVkSWQiLCJnZXRNZXNzYWdlcyIsImN1cnNvciIsImxlbmd0aCIsInVzZUVmZmVjdCIsIm1hcCIsInZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLG1CQUNGQyxzREFBUyxFQURQO0FBQUEsTUFDWkMsS0FEWSxjQUNaQSxLQURZOztBQUVwQixNQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0MsTUFBTixJQUFnQkQsS0FBSyxDQUFDRSxNQUF0QixJQUFnQyxFQUEvQzs7QUFGb0Isa0JBSUlDLCtDQUFRLENBQUMsRUFBRCxDQUpaO0FBQUEsTUFJYkMsSUFKYTtBQUFBLE1BSVBDLE9BSk87O0FBQUEsbUJBTWNGLCtDQUFRLENBQUMsSUFBRCxDQU50QjtBQUFBLE1BTWJHLFNBTmE7QUFBQSxNQU1GQyxZQU5FOztBQU9wQixNQUFNQyxXQUFXLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUExQjtBQUNBLE1BQU1DLFlBQVksR0FBR0Ms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RSxtQkFBUyxFQUFFWixTQUFTLEtBQUsyQixHQUFHLENBQUNmLEVBTi9CO0FBT0UsY0FBSSxFQUFFakI7QUFQUixZQUNPZ0MsR0FBRyxDQUFDZixFQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFXRCxPQVpBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBaUJFO0FBQUssU0FBRyxFQUFFVjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkY7QUFBQSxrQkFERjtBQXFCRCxDQTlFRDs7R0FBTVYsTztVQUNjQyxrRCxFQU9HWSw4RDs7O0tBUmpCYixPO0FBZ0ZOLCtEQUFlQSxPQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Nc2dMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJztcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICcuLi9mZXRjaGVyJztcbmltcG9ydCB1c2VJbmZpbml0ZVNjcm9sbCBmcm9tICcuLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbCc7XG5cbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB1c2VySWQgPSBxdWVyeS51c2VySWQgfHwgcXVlcnkudXNlcmlkIHx8ICcnO1xuXG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGZldGNoTW9yZUVsID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBpbnRlcnNlY3RpbmcgPSB1c2VJbmZpbml0ZVNjcm9sbChmZXRjaE1vcmVFbCk7XG5cbiAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyAodGV4dCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3Bvc3QnLCAnL21lc3NhZ2VzJywgeyB0ZXh0LCB1c2VySWQgfSk7XG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb21ldGhpbmcgd3JvbmcnKTtcbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XG4gIH07XG5cbiAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAodGV4dCwgaWQpID0+IHtcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwdXQnLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyB0ZXh0LCB1c2VySWQgfSk7XG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb21ldGhpbmcgd3JvbmcnKTtcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZyk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgICBkb25lRWRpdCgpO1xuICB9O1xuXG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc3QgcmVjZWl2ZWRJZCA9IGF3YWl0IGZldGNoZXIoJ2RlbGV0ZScsIGAvbWVzc2FnZXMvJHtpZH1gLCB7XG4gICAgICBwYXJhbXM6IHsgdXNlcklkIH0sXG4gICAgfSk7XG4gICAgc2V0TXNncygobXNncykgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IHJlY2VpdmVkSWQgKyAnJyk7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcblxuICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBuZXdNc2dzID0gYXdhaXQgZmV0Y2hlcignZ2V0JywgJy9tZXNzYWdlcycsIHtcbiAgICAgIHBhcmFtczogeyBjdXJzb3I6IG1zZ3NbbXNncy5sZW5ndGggLSAxXT8uaWQgfHwgJycgfSxcbiAgICB9KTtcbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbLi4ubXNncywgLi4ubmV3TXNnc10pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGludGVyc2VjdGluZykge1xuICAgICAgZ2V0TWVzc2FnZXMoKTtcbiAgICB9XG4gIH0sIFtpbnRlcnNlY3RpbmddKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dXNlcklkICYmIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPn1cbiAgICAgIDx1bCBjbGFzc05hbWU9J21lc3NhZ2VzJz5cbiAgICAgICAge21zZ3MubWFwKCh2YWwpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1zZ0l0ZW1cbiAgICAgICAgICAgICAga2V5PXt2YWwuaWR9XG4gICAgICAgICAgICAgIHsuLi52YWx9XG4gICAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cbiAgICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQodmFsLmlkKX1cbiAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHZhbC5pZCl9XG4gICAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB2YWwuaWR9XG4gICAgICAgICAgICAgIG15SWQ9e3VzZXJJZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiByZWY9e2ZldGNoTW9yZUVsfSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});
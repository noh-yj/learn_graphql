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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-query */ \"../node_modules/react-query/es/index.js\");\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _quertClient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../quertClient */ \"./quertClient.js\");\n/* harmony import */ var _graphql_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../graphql/message */ \"./graphql/message.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/nohyujin/projects/prac_graphql/client/components/MsgList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n // import useInfiniteScroll from '../hooks/useInfiniteScroll';\n\nvar MsgList = function MsgList(_ref) {\n  _s();\n\n  var smsgs = _ref.smsgs,\n      users = _ref.users;\n  console.log(users);\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)(),\n      query = _useRouter.query;\n\n  var userId = query.userId || query.userid || '';\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(smsgs),\n      msgs = _useState[0],\n      setMsgs = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true),\n      hasNext = _useState2[0],\n      setHasNext = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),\n      editingId = _useState3[0],\n      setEditingId = _useState3[1]; // const fetchMoreEl = useRef(null);\n  // const intersecting = useInfiniteScroll(fetchMoreEl);\n\n\n  var onCreate = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(text) {\n      var newMsg;\n      return _Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,_quertClient__WEBPACK_IMPORTED_MODULE_9__.fetcher)('post', '/messages', {\n                text: text,\n                userId: userId\n              });\n\n            case 2:\n              newMsg = _context.sent;\n\n              if (newMsg) {\n                _context.next = 5;\n                break;\n              }\n\n              throw Error('something wrong');\n\n            case 5:\n              setMsgs(function (msgs) {\n                return [newMsg].concat((0,_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs));\n              });\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onCreate(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var onUpdate = /*#__PURE__*/function () {\n    var _ref3 = (0,_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(text, id) {\n      var newMsg;\n      return _Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return (0,_quertClient__WEBPACK_IMPORTED_MODULE_9__.fetcher)('put', \"/messages/\".concat(id), {\n                text: text,\n                userId: userId\n              });\n\n            case 2:\n              newMsg = _context2.sent;\n\n              if (newMsg) {\n                _context2.next = 5;\n                break;\n              }\n\n              throw Error('something wrong');\n\n            case 5:\n              setMsgs(function (msgs) {\n                var targetIndex = msgs.findIndex(function (msg) {\n                  return msg.id === id;\n                });\n                if (targetIndex < 0) return msgs;\n\n                var newMsgs = (0,_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs);\n\n                newMsgs.splice(targetIndex, 1, newMsg);\n                return newMsgs;\n              });\n              doneEdit();\n\n            case 7:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function onUpdate(_x2, _x3) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var _onDelete = /*#__PURE__*/function () {\n    var _ref4 = (0,_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(id) {\n      var receivedId;\n      return _Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return (0,_quertClient__WEBPACK_IMPORTED_MODULE_9__.fetcher)('delete', \"/messages/\".concat(id), {\n                params: {\n                  userId: userId\n                }\n              });\n\n            case 2:\n              receivedId = _context3.sent;\n              setMsgs(function (msgs) {\n                var targetIndex = msgs.findIndex(function (msg) {\n                  return msg.id === receivedId + '';\n                });\n                if (targetIndex < 0) return msgs;\n\n                var newMsgs = (0,_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs);\n\n                newMsgs.splice(targetIndex, 1);\n                return newMsgs;\n              });\n\n            case 4:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function onDelete(_x4) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  var doneEdit = function doneEdit() {\n    return setEditingId(null);\n  };\n\n  var _useQuery = (0,react_query__WEBPACK_IMPORTED_MODULE_11__.useQuery)(_quertClient__WEBPACK_IMPORTED_MODULE_9__.QueryKeys.MESSAGES, function () {\n    return (0,_quertClient__WEBPACK_IMPORTED_MODULE_9__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_10__.GET_MESSAGES);\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      isError = _useQuery.isError;\n\n  console.log(data);\n\n  if (isError) {\n    console.log(error);\n    return null;\n  }\n\n  var getMessages = /*#__PURE__*/function () {\n    var _ref5 = (0,_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {\n      var _msgs;\n\n      var newMsgs;\n      return _Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.next = 2;\n              return (0,_quertClient__WEBPACK_IMPORTED_MODULE_9__.fetcher)('get', '/messages', {\n                params: {\n                  cursor: ((_msgs = msgs[msgs.length - 1]) === null || _msgs === void 0 ? void 0 : _msgs.id) || ''\n                }\n              });\n\n            case 2:\n              newMsgs = _context4.sent;\n\n              if (!(newMsgs.length === 0)) {\n                _context4.next = 6;\n                break;\n              }\n\n              setHasNext(false);\n              return _context4.abrupt(\"return\");\n\n            case 6:\n              setMsgs(function (msgs) {\n                return [].concat((0,_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs), (0,_Users_nohyujin_projects_prac_graphql_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(newMsgs));\n              });\n\n            case 7:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function getMessages() {\n      return _ref5.apply(this, arguments);\n    };\n  }(); // useEffect(() => {\n  //   if (intersecting && hasNext) {\n  //     getMessages();\n  //   }\n  // }, [intersecting]);\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_8__.default, {\n      mutate: onCreate\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 18\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      className: \"messages\",\n      children: msgs.map(function (val) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_7__.default, _objectSpread(_objectSpread({}, val), {}, {\n          onUpdate: onUpdate,\n          startEdit: function startEdit() {\n            return setEditingId(val.id);\n          },\n          onDelete: function onDelete() {\n            return _onDelete(val.id);\n          },\n          isEditing: editingId === val.id,\n          myId: userId,\n          user: users.find(function (val) {\n            return val.userId === userId;\n          })\n        }), val.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(MsgList, \"grKFK7JacWFkcVeJ8UCo5D25/Jg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter, react_query__WEBPACK_IMPORTED_MODULE_11__.useQuery];\n});\n\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\n\nvar _c;\n\n$RefreshReg$(_c, \"MsgList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzA0YTgiXSwibmFtZXMiOlsiTXNnTGlzdCIsInNtc2dzIiwidXNlcnMiLCJjb25zb2xlIiwibG9nIiwidXNlUm91dGVyIiwicXVlcnkiLCJ1c2VySWQiLCJ1c2VyaWQiLCJ1c2VTdGF0ZSIsIm1zZ3MiLCJzZXRNc2dzIiwiaGFzTmV4dCIsInNldEhhc05leHQiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsInRleHQiLCJmZXRjaGVyIiwibmV3TXNnIiwiRXJyb3IiLCJvblVwZGF0ZSIsImlkIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvbkRlbGV0ZSIsInBhcmFtcyIsInJlY2VpdmVkSWQiLCJ1c2VRdWVyeSIsIlF1ZXJ5S2V5cyIsIkdFVF9NRVNTQUdFUyIsImRhdGEiLCJlcnJvciIsImlzRXJyb3IiLCJnZXRNZXNzYWdlcyIsImN1cnNvciIsImxlbmd0aCIsIm1hcCIsInZhbCIsImZpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXNCO0FBQUE7O0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNwQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7O0FBRG9DLG1CQUVsQkcsc0RBQVMsRUFGUztBQUFBLE1BRTVCQyxLQUY0QixjQUU1QkEsS0FGNEI7O0FBR3BDLE1BQU1DLE1BQU0sR0FBR0QsS0FBSyxDQUFDQyxNQUFOLElBQWdCRCxLQUFLLENBQUNFLE1BQXRCLElBQWdDLEVBQS9DOztBQUhvQyxrQkFLWkMsK0NBQVEsQ0FBQ1IsS0FBRCxDQUxJO0FBQUEs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WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSc7XG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XG5pbXBvcnQgeyBmZXRjaGVyLCBRdWVyeUtleXMgfSBmcm9tICcuLi9xdWVydENsaWVudCc7XG5pbXBvcnQgeyBHRVRfTUVTU0FHRVMgfSBmcm9tICcuLi9ncmFwaHFsL21lc3NhZ2UnO1xuLy8gaW1wb3J0IHVzZUluZmluaXRlU2Nyb2xsIGZyb20gJy4uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsJztcblxuY29uc3QgTXNnTGlzdCA9ICh7IHNtc2dzLCB1c2VycyB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHVzZXJzKTtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHVzZXJJZCA9IHF1ZXJ5LnVzZXJJZCB8fCBxdWVyeS51c2VyaWQgfHwgJyc7XG5cbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoc21zZ3MpO1xuICBjb25zdCBbaGFzTmV4dCwgc2V0SGFzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xuICAvLyBjb25zdCBmZXRjaE1vcmVFbCA9IHVzZVJlZihudWxsKTtcbiAgLy8gY29uc3QgaW50ZXJzZWN0aW5nID0gdXNlSW5maW5pdGVTY3JvbGwoZmV0Y2hNb3JlRWwpO1xuXG4gIGNvbnN0IG9uQ3JlYXRlID0gYXN5bmMgKHRleHQpID0+IHtcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwb3N0JywgJy9tZXNzYWdlcycsIHsgdGV4dCwgdXNlcklkIH0pO1xuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignc29tZXRoaW5nIHdyb25nJyk7XG4gICAgc2V0TXNncygobXNncykgPT4gW25ld01zZywgLi4ubXNnc10pO1xuICB9O1xuXG4gIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKHRleHQsIGlkKSA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncHV0JywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgdGV4dCwgdXNlcklkIH0pO1xuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignc29tZXRoaW5nIHdyb25nJyk7XG4gICAgc2V0TXNncygobXNncykgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCBuZXdNc2cpO1xuICAgICAgcmV0dXJuIG5ld01zZ3M7XG4gICAgfSk7XG4gICAgZG9uZUVkaXQoKTtcbiAgfTtcblxuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGNvbnN0IHJlY2VpdmVkSWQgPSBhd2FpdCBmZXRjaGVyKCdkZWxldGUnLCBgL21lc3NhZ2VzLyR7aWR9YCwge1xuICAgICAgcGFyYW1zOiB7IHVzZXJJZCB9LFxuICAgIH0pO1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSByZWNlaXZlZElkICsgJycpO1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIG5ld01zZ3M7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNFcnJvciB9ID0gdXNlUXVlcnkoUXVlcnlLZXlzLk1FU1NBR0VTLCAoKSA9PlxuICAgIGZldGNoZXIoR0VUX01FU1NBR0VTKSxcbiAgKTtcblxuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgaWYgKGlzRXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBuZXdNc2dzID0gYXdhaXQgZmV0Y2hlcignZ2V0JywgJy9tZXNzYWdlcycsIHtcbiAgICAgIHBhcmFtczogeyBjdXJzb3I6IG1zZ3NbbXNncy5sZW5ndGggLSAxXT8uaWQgfHwgJycgfSxcbiAgICB9KTtcbiAgICBpZiAobmV3TXNncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldEhhc05leHQoZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbLi4ubXNncywgLi4ubmV3TXNnc10pO1xuICB9O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKGludGVyc2VjdGluZyAmJiBoYXNOZXh0KSB7XG4gIC8vICAgICBnZXRNZXNzYWdlcygpO1xuICAvLyAgIH1cbiAgLy8gfSwgW2ludGVyc2VjdGluZ10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt1c2VySWQgJiYgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+fVxuICAgICAgPHVsIGNsYXNzTmFtZT0nbWVzc2FnZXMnPlxuICAgICAgICB7bXNncy5tYXAoKHZhbCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TXNnSXRlbVxuICAgICAgICAgICAgICBrZXk9e3ZhbC5pZH1cbiAgICAgICAgICAgICAgey4uLnZhbH1cbiAgICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxuICAgICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh2YWwuaWQpfVxuICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUodmFsLmlkKX1cbiAgICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHZhbC5pZH1cbiAgICAgICAgICAgICAgbXlJZD17dXNlcklkfVxuICAgICAgICAgICAgICB1c2VyPXt1c2Vycy5maW5kKCh2YWwpID0+IHZhbC51c2VySWQgPT09IHVzZXJJZCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICAgIHsvKiA8ZGl2IHJlZj17ZmV0Y2hNb3JlRWx9IC8+ICovfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});
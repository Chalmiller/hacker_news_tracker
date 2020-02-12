webpackHotUpdate("static/development/pages/robots.js",{

/***/ "./pages/robots.js":
/*!*************************!*\
  !*** ./pages/robots.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/Chris/src/ReactProjects/next-ssr/pages/robots.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Robots = function Robots(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Robots"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Home")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.robots.map(function (robot) {
    return __jsx("li", {
      key: robot.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "robots/".concat(robot.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, robot.name));
  })));
};

Robots.getInitialProps = function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://jsonplaceholder.typicode.com/users'));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            robots: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Robots);

/***/ })

})
//# sourceMappingURL=robots.js.6e9192a37fde4de8b905.hot-update.js.map
"use strict";
(self["webpackChunkseeds_must_grow"] = self["webpackChunkseeds_must_grow"] || []).push([["main-fe735f20"],{

/***/ 9959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ CapsulesService)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5861);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3144);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8358);






var CapsulesService = /*#__PURE__*/function () {
  function CapsulesService() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, CapsulesService);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(CapsulesService, [{
    key: "getCapsules",
    value: function () {
      var _getCapsules = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var url;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "".concat(___WEBPACK_IMPORTED_MODULE_2__/* .API_URL */ .T5, "/capsules/");
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get(url);

              case 3:
                return _context.abrupt("return", _context.sent.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getCapsules() {
        return _getCapsules.apply(this, arguments);
      }

      return getCapsules;
    }()
  }, {
    key: "getCapsuleByID",
    value: function () {
      var _getCapsuleByID = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
        var url;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = "".concat(___WEBPACK_IMPORTED_MODULE_2__/* .API_URL */ .T5, "/capsules/").concat(id, "/");
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get(url);

              case 3:
                return _context2.abrupt("return", _context2.sent.data);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getCapsuleByID(_x) {
        return _getCapsuleByID.apply(this, arguments);
      }

      return getCapsuleByID;
    }()
  }]);

  return CapsulesService;
}();

/***/ })

}]);
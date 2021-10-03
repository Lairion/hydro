"use strict";
(self["webpackChunkseeds_must_grow"] = self["webpackChunkseeds_must_grow"] || []).push([["main-668571fc"],{

/***/ 2415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ PlantsService)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5861);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3144);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8358);






var PlantsService = /*#__PURE__*/function () {
  function PlantsService() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, PlantsService);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(PlantsService, [{
    key: "getPlants",
    value: function () {
      var _getPlants = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var url;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "".concat(___WEBPACK_IMPORTED_MODULE_2__/* .API_URL */ .T5, "/plants/");
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

      function getPlants() {
        return _getPlants.apply(this, arguments);
      }

      return getPlants;
    }()
  }, {
    key: "getPlantByID",
    value: function () {
      var _getPlantByID = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
        var url;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = "".concat(___WEBPACK_IMPORTED_MODULE_2__/* .API_URL */ .T5, "/plants/").concat(id, "/");
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

      function getPlantByID(_x) {
        return _getPlantByID.apply(this, arguments);
      }

      return getPlantByID;
    }()
  }, {
    key: "getPlantTypes",
    value: function () {
      var _getPlantTypes = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var url;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = "".concat(___WEBPACK_IMPORTED_MODULE_2__/* .API_URL */ .T5, "/plant_types/");
                _context3.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get(url);

              case 3:
                return _context3.abrupt("return", _context3.sent.data);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getPlantTypes() {
        return _getPlantTypes.apply(this, arguments);
      }

      return getPlantTypes;
    }()
  }, {
    key: "getPlantTypeByID",
    value: function () {
      var _getPlantTypeByID = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(id) {
        var url;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                url = "".concat(___WEBPACK_IMPORTED_MODULE_2__/* .API_URL */ .T5, "/plant_types/").concat(id, "/");
                _context4.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get(url);

              case 3:
                return _context4.abrupt("return", _context4.sent.data);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getPlantTypeByID(_x2) {
        return _getPlantTypeByID.apply(this, arguments);
      }

      return getPlantTypeByID;
    }()
  }]);

  return PlantsService;
}();

/***/ })

}]);
"use strict";
(self["webpackChunkseeds_must_grow"] = self["webpackChunkseeds_must_grow"] || []).push([["main-fa21a038"],{

/***/ 5578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3144);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2963);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1120);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3727);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1030);
/* harmony import */ var _assets_capsule_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6720);
/* harmony import */ var _assets_dashboard_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1962);
/* harmony import */ var _assets_NASA_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1593);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5893);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var NavBar = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(NavBar, _Component);

  var _super = _createSuper(NavBar);

  function NavBar() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(this, NavBar);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(NavBar, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "nav__bar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__/* .Link */ .rU, {
            to: "/",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
              src: _assets_NASA_logo_svg__WEBPACK_IMPORTED_MODULE_6__,
              alt: "NASA_logo"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(___WEBPACK_IMPORTED_MODULE_3__/* .NavElem */ .tO, {
            lto: "plants",
            innerText: "Plants",
            svg: _assets_dashboard_svg__WEBPACK_IMPORTED_MODULE_5__
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(___WEBPACK_IMPORTED_MODULE_3__/* .NavElem */ .tO, {
            lto: "capsules",
            innerText: "Capsules",
            svg: _assets_capsule_svg__WEBPACK_IMPORTED_MODULE_4__
          })]
        })]
      });
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

/***/ })

}]);
"use strict";
(self["webpackChunkseeds_must_grow"] = self["webpackChunkseeds_must_grow"] || []).push([["vendor-is-axios-error"],{

/***/ 6268:
/***/ ((module) => {



/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ })

}]);
"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var src_helpers_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);
/* harmony import */ var src_helpers_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(508);


async function handler(req, res) {
  await (0,src_helpers_express__WEBPACK_IMPORTED_MODULE_0__/* .middlewares */ .a)(req, res);
  res.status(200).json({
    max: src_helpers_env__WEBPACK_IMPORTED_MODULE_1__/* .env.max */ .O.max,
    min: src_helpers_env__WEBPACK_IMPORTED_MODULE_1__/* .env.min */ .O.min,
    name: src_helpers_env__WEBPACK_IMPORTED_MODULE_1__/* .env.name */ .O.name
  });
}

/***/ }),

/***/ 479:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 472:
/***/ ((module) => {

module.exports = require("express-rate-limit");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [879], () => (__webpack_exec__(356)));
module.exports = __webpack_exports__;

})();
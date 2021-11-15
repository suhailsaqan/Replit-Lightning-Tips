"use strict";
(() => {
var exports = {};
exports.id = 325;
exports.ids = [325];
exports.modules = {

/***/ 498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var src_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(279);
/* harmony import */ var src_util_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var src_helpers_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(384);
/* harmony import */ var src_helpers_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(508);
/* harmony import */ var src_helpers_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(615);





async function handler(req, res) {
  await (0,src_helpers_express__WEBPACK_IMPORTED_MODULE_1__/* .middlewares */ .a)(req, res);
  const ip = (0,src_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getIp */ .P)(req);
  const ipHash = (0,src_util_crypto__WEBPACK_IMPORTED_MODULE_0__/* .getHash */ .XR)(ip);
  const {
    origin
  } = (0,src_helpers_url__WEBPACK_IMPORTED_MODULE_4__/* .Url */ .R)(req);
  const response = {
    callback: `${origin}/api/v1/pay/${ipHash}`,
    maxSendable: src_helpers_env__WEBPACK_IMPORTED_MODULE_2__/* .env.max */ .O.max * 1000,
    minSendable: src_helpers_env__WEBPACK_IMPORTED_MODULE_2__/* .env.min */ .O.min * 1000,
    metadata: src_helpers_env__WEBPACK_IMPORTED_MODULE_2__/* .metadata */ .P,
    commentAllowed: 0,
    tag: "payRequest"
  };
  res.status(200).json(response);
}

/***/ }),

/***/ 615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ Url)
/* harmony export */ });
const Url = (req, setLocalhost) => {
  let protocol = 'https:';
  let host = req ? req.headers['x-forwarded-host'] || req.headers['host'] : window.location.host;

  if (host && host.indexOf('localhost') > -1) {
    if (setLocalhost) host = 'localhost:3000';
    protocol = 'http:';
  }

  return {
    protocol: protocol,
    host: host,
    origin: protocol + '//' + host
  };
};

/***/ }),

/***/ 74:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XR": () => (/* binding */ getHash)
/* harmony export */ });
/* unused harmony exports getRandomBytes, toUTF8Array */
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

const getHash = (str, encoding = "hex") => (0,crypto__WEBPACK_IMPORTED_MODULE_0__.createHash)("sha256").update(str).digest(encoding);
const getRandomBytes = (length = 64, encoding = "hex") => randomBytes(length).toString(encoding);
const toUTF8Array = str => {
  const utf8 = [];

  for (let i = 0; i < str.length; i++) {
    let charcode = str.charCodeAt(i);
    if (charcode < 0x80) utf8.push(charcode);else if (charcode < 0x800) {
      utf8.push(0xc0 | charcode >> 6, 0x80 | charcode & 0x3f);
    } else if (charcode < 0xd800 || charcode >= 0xe000) {
      utf8.push(0xe0 | charcode >> 12, 0x80 | charcode >> 6 & 0x3f, 0x80 | charcode & 0x3f);
    } else {
      i++;
      charcode = 0x10000 + ((charcode & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff);
      utf8.push(0xf0 | charcode >> 18, 0x80 | charcode >> 12 & 0x3f, 0x80 | charcode >> 6 & 0x3f, 0x80 | charcode & 0x3f);
    }
  }

  return utf8;
};

/***/ }),

/***/ 479:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 417:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 472:
/***/ ((module) => {

module.exports = require("express-rate-limit");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [879], () => (__webpack_exec__(498)));
module.exports = __webpack_exports__;

})();
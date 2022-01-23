"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./src/helpers/index.ts
var helpers = __webpack_require__(279);
// EXTERNAL MODULE: ./src/util/crypto.ts
var util_crypto = __webpack_require__(74);
// EXTERNAL MODULE: ./src/helpers/express.ts
var express = __webpack_require__(384);
// EXTERNAL MODULE: ./src/helpers/env.ts
var env = __webpack_require__(508);
;// CONCATENATED MODULE: ./src/helpers/url.ts
const Url = (req, setLocalhost) => {
  let protocol = "https:";
  let host = req ? req.headers["x-forwarded-host"] || req.headers["host"] : window.location.host;

  if (host && host.indexOf("localhost") > -1) {
    if (setLocalhost) host = "localhost:3000";
    protocol = "http:";
  }

  return {
    protocol: protocol,
    host: host,
    origin: protocol + "//" + host
  };
};
;// CONCATENATED MODULE: ./pages/api/index.ts





async function handler(req, res) {
  await (0,express/* middlewares */.a)(req, res);
  const ip = (0,helpers/* getIp */.P)(req);
  const ipHash = (0,util_crypto/* getHash */.XR)(ip);
  const {
    origin
  } = Url(req);
  const response = {
    callback: `${origin}/api/v1/pay/${ipHash}`,
    maxSendable: env/* env.max */.O.max * 1000,
    minSendable: env/* env.min */.O.min * 1000,
    lightning_memo: env/* lightning_memo */.k,
    commentAllowed: 0,
    tag: "payRequest"
  };
  res.status(200).json(response);
}

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [879], () => (__webpack_exec__(135)));
module.exports = __webpack_exports__;

})();
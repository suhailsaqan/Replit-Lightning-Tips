"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler),
  "encode": () => (/* binding */ encode)
});

// EXTERNAL MODULE: ./src/helpers/express.ts
var express = __webpack_require__(384);
// EXTERNAL MODULE: ./src/helpers/env.ts
var env = __webpack_require__(508);
// EXTERNAL MODULE: ./src/helpers/url.ts
var url = __webpack_require__(615);
;// CONCATENATED MODULE: external "bech32"
const external_bech32_namespaceObject = require("bech32");
;// CONCATENATED MODULE: ./pages/api/v1/info.ts




const encode = str => {
  const words = external_bech32_namespaceObject.bech32.toWords(Buffer.from(str, "utf-8"));
  return external_bech32_namespaceObject.bech32.encode("lnurl", words);
};
async function handler(req, res) {
  await (0,express/* middlewares */.a)(req, res);
  const {
    origin
  } = (0,url/* Url */.R)(req);
  res.status(200).json({
    url: encode(`${origin}/api/v1`),
    max: env/* env.max */.O.max,
    min: env/* env.min */.O.min,
    name: env/* env.name */.O.name
  });
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
var __webpack_exports__ = __webpack_require__.X(0, [879], () => (__webpack_exec__(539)));
module.exports = __webpack_exports__;

})();
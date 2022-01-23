"use strict";
exports.id = 879;
exports.ids = [879];
exports.modules = {

/***/ 508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ env),
/* harmony export */   "k": () => (/* binding */ lightning_memo)
/* harmony export */ });
const env = {
  max: Number(process.env['MAX']) || 1000000,
  min: Number(process.env['MIN']) || 0,
  lightning_memo: process.env.lightning_memo || "Replit Lightning Invoice",
  name: process.env['NAME'] || "Replit Lightning"
};
const lightning_memo = JSON.stringify([["text/plain", env.lightning_memo]]);

/***/ }),

/***/ 384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ middlewares)
/* harmony export */ });
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(472);
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_rate_limit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(479);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(279);



const cors = cors__WEBPACK_IMPORTED_MODULE_1___default()({
  origin: "*"
});
const limiter = express_rate_limit__WEBPACK_IMPORTED_MODULE_0___default()({
  windowMs: 10 * 1000,
  max: 4,
  keyGenerator: src_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getIp */ .P
});

const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};

const middlewares = async (req, res) => {
  await runMiddleware(req, res, cors);
  await runMiddleware(req, res, limiter);
};

/***/ }),

/***/ 279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ getIp),
/* harmony export */   "l": () => (/* binding */ toWithError)
/* harmony export */ });
const getIp = req => {
  if (!req || !req.headers) {
    return '';
  }

  const forwarded = req.headers['x-forwarded-for'];
  const ip = forwarded ? Array.isArray(forwarded) ? forwarded[0] : forwarded.split(/, /)[0] : req.connection.remoteAddress;
  return ip || '1.2.3.4';
};
const toWithError = async promise => {
  return promise.then(data => [data, undefined]).catch(err => [undefined, err]);
};

/***/ })

};
;
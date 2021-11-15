"use strict";
(() => {
var exports = {};
exports.id = 568;
exports.ids = [568];
exports.modules = {

/***/ 52:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var src_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(279);
/* harmony import */ var src_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var src_helpers_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(384);
/* harmony import */ var src_util_crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74);
/* harmony import */ var src_helpers_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(508);
/* harmony import */ var utf8__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(449);
/* harmony import */ var utf8__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(utf8__WEBPACK_IMPORTED_MODULE_4__);






process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
async function handler(req, res) {
  await (0,src_helpers_express__WEBPACK_IMPORTED_MODULE_1__/* .middlewares */ .a)(req, res);
  const {
    query: {
      hash,
      amount
    }
  } = req;

  if (!amount || typeof amount !== "string" || isNaN(Number(amount))) {
    res.status(200).json({
      status: "ERROR",
      reason: "Invalid amount"
    });
    return;
  } // Millisatoshis to satoshis


  const value = Math.round(Number(amount) / 1000);

  if (value < src_helpers_env__WEBPACK_IMPORTED_MODULE_3__/* .env.min */ .O.min) {
    res.status(200).json({
      status: "ERROR",
      reason: "Amount below minimum"
    });
    return;
  }

  if (value > src_helpers_env__WEBPACK_IMPORTED_MODULE_3__/* .env.max */ .O.max) {
    res.status(200).json({
      status: "ERROR",
      reason: "Amount above maximum"
    });
    return;
  }

  console.log(`Creating ${value} sat invoice for user ${hash}`);
  const shaHash = (0,src_util_crypto__WEBPACK_IMPORTED_MODULE_2__/* .getHash */ .XR)((0,utf8__WEBPACK_IMPORTED_MODULE_4__.encode)(src_helpers_env__WEBPACK_IMPORTED_MODULE_3__/* .metadata */ .P), "base64");
  const [invoice, error] = await (0,src_helpers__WEBPACK_IMPORTED_MODULE_5__/* .toWithError */ .l)(src_api__WEBPACK_IMPORTED_MODULE_0__/* .LndApi.getInvoice */ ._K.getInvoice(value, shaHash));

  if (error || !(invoice !== null && invoice !== void 0 && invoice.payment_request)) {
    console.log("Error creating invoice: ", {
      error,
      invoice
    });
    res.status(200).json({
      status: "ERROR",
      reason: "ErrorCreatingInvoice"
    });
    return;
  }

  const response = {
    pr: invoice.payment_request,
    successAction: {
      tag: "message",
      message: "Done!"
    },
    disposable: false,
    routes: []
  };
  res.status(200).json(response);
}

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

/***/ }),

/***/ 449:
/***/ ((module) => {

module.exports = require("utf8");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [879,417], () => (__webpack_exec__(52)));
module.exports = __webpack_exports__;

})();
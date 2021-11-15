"use strict";
exports.id = 417;
exports.ids = [417];
exports.modules = {

/***/ 33:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d5": () => (/* binding */ getInvoice),
/* harmony export */   "_K": () => (/* binding */ LndApi),
/* harmony export */   "Vn": () => (/* binding */ fetchInfo)
/* harmony export */ });
const getInvoice = ({
  amount
}) => fetch(`/api/v1/invoice?amount=${amount}`).then(res => res.json());
const LndApi = {
  getInvoice: async (value, hash) => {
    try {
      const headers = new Headers();
      headers.set("Accept", "application/json");
      headers.set("Content-Type", "application/json");
      headers.set("Grpc-Metadata-macaroon", process.env.LND_MACAROON || "");
      const response = await fetch(`${process.env.LND_URL}/v1/invoices`, {
        method: "post",
        headers,
        body: JSON.stringify({
          value,
          memo: "Replit Lightning Tip Invoice",
          description_hash: hash
        })
      });
      return await response.json();
    } catch (error) {
      console.log("Error generating invoice from LND", {
        error
      });
      throw new Error();
    }
  }
};
const fetchInfo = () => fetch("/api/v1/info").then(res => res.json());

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

/***/ })

};
;
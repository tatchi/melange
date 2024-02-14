// Generated by Melange
'use strict';

let Caml_exceptions = require("melange.js/caml_exceptions.js");
let Exception_def = require("./exception_def.js");
let Stdlib = require("melange/stdlib.js");

const E = /* @__PURE__ */Caml_exceptions.create("Exception_rebind_test.A.E");

const A = {
  E: E
};

const B = {
  F: E
};

const A0 = /* @__PURE__ */Caml_exceptions.create("Exception_rebind_test.A0");

const u0 = {
  MEL_EXN_ID: Stdlib.Invalid_argument,
  _1: "x"
};

const u1 = {
  MEL_EXN_ID: Stdlib.Invalid_argument,
  _1: "x"
};

const u2 = {
  MEL_EXN_ID: Stdlib.Not_found
};

const H = Exception_def.A;

const H0 = Stdlib.Invalid_argument;

const H1 = Stdlib.Invalid_argument;

exports.A = A;
exports.B = B;
exports.H = H;
exports.A0 = A0;
exports.H0 = H0;
exports.H1 = H1;
exports.u0 = u0;
exports.u1 = u1;
exports.u2 = u2;
/* Exception_def Not a pure module */

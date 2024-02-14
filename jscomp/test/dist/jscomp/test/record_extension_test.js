// Generated by Melange
'use strict';

let Caml_exceptions = require("melange.js/caml_exceptions.js");
let Caml_format = require("melange.js/caml_format.js");
let Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
let Curry = require("melange.js/curry.js");
let Mt = require("./mt.js");

const suites = {
  contents: /* [] */0
};

const test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

const Inline_record = /* @__PURE__ */Caml_exceptions.create("Record_extension_test.Inline_record");

function f(x) {
  if (x.MEL_EXN_ID === Inline_record) {
    return x.x + Caml_format.caml_int_of_string(x.y) | 0;
  }
  
}

const v0 = {
  MEL_EXN_ID: Inline_record,
  x: 3,
  y: "4"
};

eq("File \"jscomp/test/record_extension_test.ml\", line 18, characters 6-13", f(v0), 7);

function f2(x) {
  if (typeof x === "number" || x.TAG !== /* C */0) {
    return 0;
  } else {
    return x.x;
  }
}

function f2_with(x) {
  if (typeof x === "number" || x.TAG !== /* C */0) {
    return x;
  } else {
    return {
            TAG: /* C */0,
            x: 0,
            y: x.y
          };
  }
}

const A = /* @__PURE__ */Caml_exceptions.create("Record_extension_test.A");

const B = /* @__PURE__ */Caml_exceptions.create("Record_extension_test.B");

const C = /* @__PURE__ */Caml_exceptions.create("Record_extension_test.C");

function u(f) {
  try {
    return Curry._1(f, undefined);
  }
  catch (raw_exn){
    const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.MEL_EXN_ID === A) {
      return exn.name + exn.x | 0;
    } else if (exn.MEL_EXN_ID === B) {
      return exn._1 + exn._2 | 0;
    } else if (exn.MEL_EXN_ID === C) {
      return exn.name;
    } else {
      return -1;
    }
  }
}

Mt.from_pair_suites("File \"jscomp/test/record_extension_test.ml\", line 55, characters 22-29", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.Inline_record = Inline_record;
exports.f = f;
exports.v0 = v0;
exports.f2 = f2;
exports.f2_with = f2_with;
exports.A = A;
exports.B = B;
exports.C = C;
exports.u = u;
/*  Not a pure module */

// Generated by Melange
'use strict';

let Caml_exceptions = require("melange.js/caml_exceptions.js");
let Mt = require("./mt.js");
let Stdlib = require("melange/stdlib.js");
let Stdlib__Printexc = require("melange/printexc.js");

let suites = {
  contents: /* [] */0
};

let test_id = {
  contents: 0
};

function eq(loc, x, y) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + String(test_id.contents)),
      (function (param) {
          return {
                  TAG: /* Eq */0,
                  _0: x,
                  _1: y
                };
        })
    ],
    tl: suites.contents
  };
}

let A = /* @__PURE__ */Caml_exceptions.create("Gpr_1501_test.A");

let B = /* @__PURE__ */Caml_exceptions.create("Gpr_1501_test.B");

eq("File \"jscomp/test/gpr_1501_test.ml\", line 14, characters 7-14", "Not_found", Stdlib__Printexc.to_string({
          MEL_EXN_ID: Stdlib.Not_found
        }));

eq("File \"jscomp/test/gpr_1501_test.ml\", line 15, characters 7-14", /Gpr_1501_test.A\/[0-9]+/.test(Stdlib__Printexc.to_string({
              MEL_EXN_ID: A
            })), true);

eq("File \"jscomp/test/gpr_1501_test.ml\", line 18, characters 7-14", /Gpr_1501_test.B\/[0-9]+\(1\)/.test(Stdlib__Printexc.to_string({
              MEL_EXN_ID: B,
              _1: 1
            })), true);

Mt.from_pair_suites("Gpr_1501_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.A = A;
exports.B = B;
/*  Not a pure module */

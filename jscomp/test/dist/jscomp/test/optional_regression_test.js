// Generated by Melange
'use strict';

let Caml_option = require("melange.js/caml_option.js");
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

function make(s, b, i) {
  return function (param) {
    let tmp = {};
    if (s !== undefined) {
      tmp.s = Caml_option.valFromOption(s);
    }
    if (b !== undefined) {
      tmp.b = Caml_option.valFromOption(b);
    }
    if (i !== undefined) {
      tmp.i = Caml_option.valFromOption(i);
    }
    return tmp;
  };
}

const hh = {
  s: "",
  b: false,
  i: 0
};

eq("File \"jscomp/test/optional_regression_test.ml\", line 21, characters 6-13", Caml_option.undefined_to_opt(hh.s), "");

eq("File \"jscomp/test/optional_regression_test.ml\", line 22, characters 6-13", Caml_option.undefined_to_opt(hh.b), false);

eq("File \"jscomp/test/optional_regression_test.ml\", line 23, characters 6-13", Caml_option.undefined_to_opt(hh.i), 0);

console.log(hh);

Mt.from_pair_suites("Optional_regression_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.make = make;
exports.hh = hh;
/*  Not a pure module */

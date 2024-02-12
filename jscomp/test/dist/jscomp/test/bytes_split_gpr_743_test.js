// Generated by Melange
'use strict';

let Caml_bytes = require("melange.js/caml_bytes.js");
let Mt = require("./mt.js");
let Stdlib__Bytes = require("melange/bytes.js");

let suites = {
  contents: /* [] */0
};

let test_id = {
  contents: 0
};

function eq(loc, param) {
  let y = param[1];
  let x = param[0];
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

let b = [
  0,
  0,
  0
];

Caml_bytes.set(b, 0, /* 'a' */97);

Caml_bytes.set(b, 1, /* 'b' */98);

Caml_bytes.set(b, 2, /* 'c' */99);

Stdlib__Bytes.blit(b, 0, b, 1, 2);

let res = Caml_bytes.bytes_to_string(b);

console.log(res);

eq("File \"jscomp/test/bytes_split_gpr_743_test.ml\", line 17, characters 5-12", [
      "aab",
      res
    ]);

let b$1 = [
  0,
  0,
  0
];

Caml_bytes.set(b$1, 0, /* 'a' */97);

Caml_bytes.set(b$1, 1, /* 'b' */98);

Caml_bytes.set(b$1, 2, /* 'c' */99);

Stdlib__Bytes.blit(b$1, 1, b$1, 0, 2);

let res2 = Caml_bytes.bytes_to_string(b$1);

console.log(res2);

eq("File \"jscomp/test/bytes_split_gpr_743_test.ml\", line 32, characters 5-12", [
      "bcc",
      res2
    ]);

Mt.from_pair_suites("Bytes_split_gpr_743_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
/*  Not a pure module */

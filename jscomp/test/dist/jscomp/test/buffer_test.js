// Generated by Melange
'use strict';

let Caml_bytes = require("melange.js/caml_bytes.js");
let Mt = require("./mt.js");
let Stdlib__Buffer = require("melange/buffer.js");
let Stdlib__Bytes = require("melange/bytes.js");

const v = "gso";

const suites_0 = [
  "equal",
  (function (param) {
      return {
              TAG: /* Eq */0,
              _0: [
                Caml_bytes.get(Stdlib__Bytes.make(3, /* 'a' */97), 0),
                Stdlib__Bytes.make(3, /* 'a' */97)[0]
              ],
              _1: [
                /* 'a' */97,
                /* 'a' */97
              ]
            };
    })
];

const suites_1 = {
  hd: [
    "equal2",
    (function (param) {
        const u = Stdlib__Bytes.make(3, /* 'a' */97);
        u[0] = /* 'b' */98;
        return {
                TAG: /* Eq */0,
                _0: [
                  u[0],
                  /* 'g' */103
                ],
                _1: [
                  /* 'b' */98,
                  /* 'g' */103
                ]
              };
      })
  ],
  tl: {
    hd: [
      "buffer",
      (function (param) {
          const v = Stdlib__Buffer.create(30);
          for(let i = 0; i <= 10; ++i){
            Stdlib__Buffer.add_string(v, String(i));
          }
          return {
                  TAG: /* Eq */0,
                  _0: Stdlib__Buffer.contents(v),
                  _1: "012345678910"
                };
        })
    ],
    tl: /* [] */0
  }
};

const suites = {
  hd: suites_0,
  tl: suites_1
};

Mt.from_pair_suites("Buffer_test", suites);

exports.v = v;
exports.suites = suites;
/*  Not a pure module */

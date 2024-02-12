// Generated by Melange
'use strict';

let Caml_option = require("melange.js/caml_option.js");
let Js__Js_undefined = require("melange.js/js_undefined.js");
let Mt = require("./mt.js");

let suites_0 = [
  "toOption - empty",
  (function (param) {
      return {
              TAG: /* Eq */0,
              _0: undefined,
              _1: undefined
            };
    })
];

let suites_1 = {
  hd: [
    "File \"jscomp/test/js_undefined_test.ml\", line 5, characters 2-9",
    (function (param) {
        return {
                TAG: /* Eq */0,
                _0: undefined,
                _1: undefined
              };
      })
  ],
  tl: {
    hd: [
      "return",
      (function (param) {
          return {
                  TAG: /* Eq */0,
                  _0: "something",
                  _1: Caml_option.undefined_to_opt("something")
                };
        })
    ],
    tl: {
      hd: [
        "test - empty",
        (function (param) {
            return {
                    TAG: /* Eq */0,
                    _0: true,
                    _1: true
                  };
          })
      ],
      tl: {
        hd: [
          "File \"jscomp/test/js_undefined_test.ml\", line 8, characters 2-9",
          (function (param) {
              return {
                      TAG: /* Eq */0,
                      _0: true,
                      _1: true
                    };
            })
        ],
        tl: {
          hd: [
            "bind - empty",
            (function (param) {
                return {
                        TAG: /* Eq */0,
                        _0: undefined,
                        _1: Js__Js_undefined.bind((function (v) {
                                return v;
                              }), undefined)
                      };
              })
          ],
          tl: {
            hd: [
              "map - 'a",
              (function (param) {
                  return {
                          TAG: /* Eq */0,
                          _0: 4,
                          _1: Js__Js_undefined.map((function (n) {
                                  return (n << 1);
                                }), 2)
                        };
                })
            ],
            tl: {
              hd: [
                "iter - empty",
                (function (param) {
                    let hit = {
                      contents: false
                    };
                    Js__Js_undefined.iter((function (param) {
                            hit.contents = true;
                          }), undefined);
                    return {
                            TAG: /* Eq */0,
                            _0: false,
                            _1: hit.contents
                          };
                  })
              ],
              tl: {
                hd: [
                  "iter - 'a",
                  (function (param) {
                      let hit = {
                        contents: 0
                      };
                      Js__Js_undefined.iter((function (v) {
                              hit.contents = v;
                            }), 2);
                      return {
                              TAG: /* Eq */0,
                              _0: 2,
                              _1: hit.contents
                            };
                    })
                ],
                tl: {
                  hd: [
                    "fromOption - None",
                    (function (param) {
                        return {
                                TAG: /* Eq */0,
                                _0: undefined,
                                _1: Js__Js_undefined.fromOption(undefined)
                              };
                      })
                  ],
                  tl: {
                    hd: [
                      "fromOption - Some",
                      (function (param) {
                          return {
                                  TAG: /* Eq */0,
                                  _0: 2,
                                  _1: Js__Js_undefined.fromOption(2)
                                };
                        })
                    ],
                    tl: /* [] */0
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

let suites = {
  hd: suites_0,
  tl: suites_1
};

Mt.from_pair_suites("Js_undefined_test", suites);

exports.suites = suites;
/*  Not a pure module */

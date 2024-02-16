// Generated by Melange
'use strict';

let Mt = require("./mt.js");

const suites_0 = [
  "fromArray/toArray",
  (function (param) {
      const set = new Set([
            1,
            2,
            3
          ]);
      return {
              TAG: /* Eq */0,
              _0: [
                1,
                2,
                3
              ],
              _1: Array.from(set)
            };
    })
];

const suites_1 = {
  hd: [
    "size - empty set",
    (function (param) {
        const set = new Set();
        return {
                TAG: /* Eq */0,
                _0: 0,
                _1: set.size
              };
      })
  ],
  tl: {
    hd: [
      "size",
      (function (param) {
          const set = new Set([
                "one",
                "two",
                "two"
              ]);
          return {
                  TAG: /* Eq */0,
                  _0: 2,
                  _1: set.size
                };
        })
    ],
    tl: {
      hd: [
        "size - with duplicates",
        (function (param) {
            const set = new Set([
                  "one",
                  "one"
                ]);
            return {
                    TAG: /* Eq */0,
                    _0: 1,
                    _1: set.size
                  };
          })
      ],
      tl: {
        hd: [
          "has - true",
          (function (param) {
              const set = new Set([
                    "one",
                    "two"
                  ]);
              return {
                      TAG: /* Eq */0,
                      _0: true,
                      _1: set.has("two")
                    };
            })
        ],
        tl: {
          hd: [
            "has - false",
            (function (param) {
                const set = new Set([
                      "one",
                      "two"
                    ]);
                return {
                        TAG: /* Eq */0,
                        _0: false,
                        _1: set.has("three")
                      };
              })
          ],
          tl: {
            hd: [
              "delete",
              (function (param) {
                  const set = new Set([
                        "one",
                        "two"
                      ]);
                  const deleted = set.delete("two");
                  return {
                          TAG: /* Eq */0,
                          _0: [
                            true,
                            false
                          ],
                          _1: [
                            deleted,
                            set.has("two")
                          ]
                        };
                })
            ],
            tl: {
              hd: [
                "add",
                (function (param) {
                    const set = new Set().add("one").add("two");
                    return {
                            TAG: /* Eq */0,
                            _0: [
                              "one",
                              "two"
                            ],
                            _1: Array.from(set)
                          };
                  })
              ],
              tl: {
                hd: [
                  "clear",
                  (function (param) {
                      const set = new Set([
                            "one",
                            "two"
                          ]);
                      set.clear();
                      return {
                              TAG: /* Eq */0,
                              _0: 0,
                              _1: set.size
                            };
                    })
                ],
                tl: {
                  hd: [
                    "add mutate + return new set",
                    (function (param) {
                        const set_1 = new Set();
                        const set_2 = set_1.add("one");
                        const set_3 = set_2.add("two");
                        const all_same_size = set_1.size === 2 && set_2.size === 2 && set_3.size === 2;
                        const all_same_ref = set_1 === set_2 && set_2 === set_3;
                        return {
                                TAG: /* Eq */0,
                                _0: [
                                  true,
                                  true
                                ],
                                _1: [
                                  all_same_size,
                                  all_same_ref
                                ]
                              };
                      })
                  ],
                  tl: {
                    hd: [
                      "forEach",
                      (function (param) {
                          const set = new Set([
                                "one",
                                "two"
                              ]);
                          const arr = {
                            contents: []
                          };
                          set.forEach(function (value) {
                                arr.contents.push(value);
                              });
                          return {
                                  TAG: /* Eq */0,
                                  _0: [
                                    "one",
                                    "two"
                                  ],
                                  _1: arr.contents
                                };
                        })
                    ],
                    tl: {
                      hd: [
                        "values",
                        (function (param) {
                            const values = Array.from(new Set([
                                        "one",
                                        "two"
                                      ]).values());
                            return {
                                    TAG: /* Eq */0,
                                    _0: [
                                      "one",
                                      "two"
                                    ],
                                    _1: values
                                  };
                          })
                      ],
                      tl: {
                        hd: [
                          "entries",
                          (function (param) {
                              const entries = Array.from(new Set([
                                          "one",
                                          "two"
                                        ]).entries());
                              return {
                                      TAG: /* Eq */0,
                                      _0: [
                                        [
                                          "one",
                                          "one"
                                        ],
                                        [
                                          "two",
                                          "two"
                                        ]
                                      ],
                                      _1: entries
                                    };
                            })
                        ],
                        tl: {
                          hd: [
                            "iterator",
                            (function (param) {
                                const iterator = new Set([
                                        "one",
                                        "two"
                                      ]).values();
                                const n1 = iterator.next();
                                const n2 = iterator.next();
                                const n3 = iterator.next();
                                return {
                                        TAG: /* Eq */0,
                                        _0: [
                                          [
                                            n1.done,
                                            n1.value
                                          ],
                                          [
                                            n2.done,
                                            n2.value
                                          ],
                                          [
                                            n3.done,
                                            n3.value
                                          ]
                                        ],
                                        _1: [
                                          [
                                            false,
                                            "one"
                                          ],
                                          [
                                            false,
                                            "two"
                                          ],
                                          [
                                            true,
                                            undefined
                                          ]
                                        ]
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
      }
    }
  }
};

const suites = {
  hd: suites_0,
  tl: suites_1
};

Mt.from_pair_suites("Js_set_test", suites);

exports.suites = suites;
/*  Not a pure module */

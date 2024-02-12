// Generated by Melange
'use strict';

let Caml_exceptions = require("melange.js/caml_exceptions.js");
let Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
let Curry = require("melange.js/curry.js");
let Js__Js_exn = require("melange.js/js_exn.js");
let Mt = require("./mt.js");
let Stdlib = require("melange/stdlib.js");

let suites = {
  contents: /* [] */0
};

let counter = {
  contents: 0
};

function add_test(loc, test) {
  counter.contents = counter.contents + 1 | 0;
  let id = loc + (" id " + String(counter.contents));
  suites.contents = {
    hd: [
      id,
      test
    ],
    tl: suites.contents
  };
}

function eq(loc, x, y) {
  add_test(loc, (function (param) {
          return {
                  TAG: /* Eq */0,
                  _0: x,
                  _1: y
                };
        }));
}

function false_(loc) {
  add_test(loc, (function (param) {
          return {
                  TAG: /* Ok */4,
                  _0: false
                };
        }));
}

function true_(loc) {
  add_test(loc, (function (param) {
          return {
                  TAG: /* Ok */4,
                  _0: true
                };
        }));
}

let exit = 0;

let e;

try {
  e = JSON.parse(" {\"x\"}");
  exit = 1;
}
catch (raw_exn){
  let exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
  if (exn.MEL_EXN_ID === Js__Js_exn.$$Error) {
    add_test("File \"jscomp/test/js_exception_catch_test.ml\", line 21, characters 10-17", (function (param) {
            return {
                    TAG: /* Ok */4,
                    _0: true
                  };
          }));
  } else {
    throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
  }
}

if (exit === 1) {
  add_test("File \"jscomp/test/js_exception_catch_test.ml\", line 22, characters 16-23", (function (param) {
          return {
                  TAG: /* Ok */4,
                  _0: false
                };
        }));
}

let A = /* @__PURE__ */Caml_exceptions.create("Js_exception_catch_test.A");

let B = /* @__PURE__ */Caml_exceptions.create("Js_exception_catch_test.B");

let C = /* @__PURE__ */Caml_exceptions.create("Js_exception_catch_test.C");

function test(f) {
  try {
    Curry._1(f, undefined);
    return "No_error";
  }
  catch (raw_e){
    let e = Caml_js_exceptions.internalToOCamlException(raw_e);
    if (e.MEL_EXN_ID === Stdlib.Not_found) {
      return "Not_found";
    } else if (e.MEL_EXN_ID === Stdlib.Invalid_argument) {
      if (e._1 === "x") {
        return "Invalid_argument";
      } else {
        return "Invalid_any";
      }
    } else if (e.MEL_EXN_ID === A) {
      if (e._1 !== 2) {
        return "A_any";
      } else {
        return "A2";
      }
    } else if (e.MEL_EXN_ID === B) {
      return "B";
    } else if (e.MEL_EXN_ID === C) {
      if (e._1 !== 1 || e._2 !== 2) {
        return "C_any";
      } else {
        return "C";
      }
    } else if (e.MEL_EXN_ID === Js__Js_exn.$$Error) {
      return "Js_error";
    } else {
      return "Any";
    }
  }
}

eq("File \"jscomp/test/js_exception_catch_test.ml\", line 43, characters 5-12", test(function (param) {
          
        }), "No_error");

eq("File \"jscomp/test/js_exception_catch_test.ml\", line 44, characters 5-12", test(function (param) {
          throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
                    MEL_EXN_ID: Stdlib.Not_found
                  });
        }), "Not_found");

eq("File \"jscomp/test/js_exception_catch_test.ml\", line 45, characters 5-12", test(function (param) {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
                    MEL_EXN_ID: "Invalid_argument",
                    _1: "x"
                  });
        }), "Invalid_argument");

eq("File \"jscomp/test/js_exception_catch_test.ml\", line 46, characters 5-12", test(function (param) {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
                    MEL_EXN_ID: "Invalid_argument",
                    _1: ""
                  });
        }), "Invalid_any");

eq("File \"jscomp/test/js_exception_catch_test.ml\", line 47, characters 5-12", test(function (param) {
          throw new Caml_js_exceptions.MelangeError(A, {
                    MEL_EXN_ID: A,
                    _1: 2
                  });
        }), "A2");

eq("File \"jscomp/test/js_exception_catch_test.ml\", line 48, characters 5-12", test(function (param) {
          throw new Caml_js_exceptions.MelangeError(A, {
                    MEL_EXN_ID: A,
                    _1: 3
                  });
        }), "A_any");

eq("File \"jscomp/test/js_exception_catch_test.ml\", line 49, characters 5-12", test(function (param) {
          throw new Caml_js_exceptions.MelangeError(B, {
                    MEL_EXN_ID: B
                  });
        }), "B");

eq("File \"jscomp/test/js_exception_catch_test.ml\", line 50, characters 5-12", test(function (param) {
          throw new Caml_js_exceptions.MelangeError(C, {
                    MEL_EXN_ID: C,
                    _1: 1,
                    _2: 2
                  });
        }), "C");

eq("File \"jscomp/test/js_exception_catch_test.ml\", line 51, characters 5-12", test(function (param) {
          throw new Caml_js_exceptions.MelangeError(C, {
                    MEL_EXN_ID: C,
                    _1: 0,
                    _2: 2
                  });
        }), "C_any");

eq("File \"jscomp/test/js_exception_catch_test.ml\", line 52, characters 5-12", test(function (param) {
          throw new Caml_js_exceptions.MelangeError(new Error("x").MEL_EXN_ID, new Error("x"));
        }), "Js_error");

eq("File \"jscomp/test/js_exception_catch_test.ml\", line 53, characters 5-12", test(function (param) {
          throw new Caml_js_exceptions.MelangeError("Failure", {
                    MEL_EXN_ID: "Failure",
                    _1: "x"
                  });
        }), "Any");

Mt.from_pair_suites("Js_exception_catch_test", suites.contents);

exports.suites = suites;
exports.add_test = add_test;
exports.eq = eq;
exports.false_ = false_;
exports.true_ = true_;
exports.A = A;
exports.B = B;
exports.C = C;
exports.test = test;
/*  Not a pure module */

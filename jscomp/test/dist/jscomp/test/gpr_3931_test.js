// Generated by Melange
'use strict';

var Curry = require("melange.js/curry.js");
var Caml_module = require("melange.js/caml_module.js");
var Stdlib__Array = require("melange/array.js");

var PA = Caml_module.init_mod([
      "gpr_3931_test.ml",
      3,
      6
    ], {
      TAG: /* Module */0,
      _0: [[
          /* Function */0,
          "print"
        ]]
    });

var P = Caml_module.init_mod([
      "gpr_3931_test.ml",
      11,
      6
    ], {
      TAG: /* Module */0,
      _0: [[
          /* Function */0,
          "print"
        ]]
    });

function print(a) {
  Stdlib__Array.iter(P.print, a);
}

Caml_module.update_mod({
      TAG: /* Module */0,
      _0: [[
          /* Function */0,
          "print"
        ]]
    }, PA, {
      print: print
    });

function print$1(i) {
  console.log(String(i));
}

Caml_module.update_mod({
      TAG: /* Module */0,
      _0: [[
          /* Function */0,
          "print"
        ]]
    }, P, {
      print: print$1
    });

Curry._1(PA.print, [
      1,
      2
    ]);

exports.PA = PA;
exports.P = P;
/* PA Not a pure module */

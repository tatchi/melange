// Generated by Melange
'use strict';

let Caml_module = require("melange.js/caml_module.js");

function Make(X) {
  let f = function (param) {
    
  };
  let M = {
    f: f
  };
  return {
          M: M
        };
}

let B = Caml_module.init_mod([
      "jscomp/test/recursive_unbound_module_test.ml",
      18,
      0
    ], {
      TAG: /* Module */0,
      _0: [[
          {
            TAG: /* Module */0,
            _0: [[
                /* Function */0,
                "f"
              ]]
          },
          "M"
        ]]
    });

function f(param) {
  
}

let M = {
  f: f
};

Caml_module.update_mod({
      TAG: /* Module */0,
      _0: [[
          {
            TAG: /* Module */0,
            _0: [[
                /* Function */0,
                "f"
              ]]
          },
          "M"
        ]]
    }, B, {
      M: M
    });

let A;

exports.Make = Make;
exports.A = A;
exports.B = B;
/* B Not a pure module */

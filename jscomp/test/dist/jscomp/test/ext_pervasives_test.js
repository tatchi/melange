// Generated by Melange
'use strict';

var Curry = require("melange.js/curry.js");
var Stdlib = require("melange/stdlib.js");
var Caml_string = require("melange.js/caml_string.js");
var Stdlib__Arg = require("melange/arg.js");
var Stdlib__Format = require("melange/format.js");
var Caml_exceptions = require("melange.js/caml_exceptions.js");
var Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");

function $$finally(v, action, f) {
  var e;
  try {
    e = Curry._1(f, v);
  }
  catch (e$1){
    Curry._1(action, v);
    throw e$1;
  }
  Curry._1(action, v);
  return e;
}

function with_file_as_chan(filename, f) {
  return $$finally(Stdlib.open_out_bin(filename), Stdlib.close_out, f);
}

function with_file_as_pp(filename, f) {
  return $$finally(Stdlib.open_out_bin(filename), Stdlib.close_out, (function (chan) {
                var fmt = Stdlib__Format.formatter_of_out_channel(chan);
                var v = Curry._1(f, fmt);
                Stdlib__Format.pp_print_flush(fmt, undefined);
                return v;
              }));
}

function is_pos_pow(n) {
  var E = /* @__PURE__ */Caml_exceptions.create("E");
  try {
    var _c = 0;
    var _n = n;
    while(true) {
      var n$1 = _n;
      var c = _c;
      if (n$1 <= 0) {
        return -2;
      }
      if (n$1 === 1) {
        return c;
      }
      if ((n$1 & 1) === 0) {
        _n = (n$1 >> 1);
        _c = c + 1 | 0;
        continue ;
      }
      throw {
            RE_EXN_ID: E,
            Error: new Error()
          };
    };
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.RE_EXN_ID === E) {
      return -1;
    }
    throw exn;
  }
}

function failwithf(loc, fmt) {
  return Stdlib__Format.ksprintf((function (s) {
                var s$1 = loc + s;
                throw {
                      RE_EXN_ID: "Failure",
                      _1: s$1,
                      Error: new Error()
                    };
              }), fmt);
}

function invalid_argf(fmt) {
  return Stdlib__Format.ksprintf(Stdlib.invalid_arg, fmt);
}

function bad_argf(fmt) {
  return Stdlib__Format.ksprintf((function (x) {
                throw {
                      RE_EXN_ID: Stdlib__Arg.Bad,
                      _1: x,
                      Error: new Error()
                    };
              }), fmt);
}

function hash_variant(s) {
  var accu = 0;
  for(var i = 0 ,i_finish = s.length; i < i_finish; ++i){
    accu = Math.imul(223, accu) + Caml_string.get(s, i) | 0;
  }
  accu = accu & 2147483647;
  if (accu > 1073741823) {
    return accu - -2147483648 | 0;
  } else {
    return accu;
  }
}

exports.$$finally = $$finally;
exports.with_file_as_chan = with_file_as_chan;
exports.with_file_as_pp = with_file_as_pp;
exports.is_pos_pow = is_pos_pow;
exports.failwithf = failwithf;
exports.invalid_argf = invalid_argf;
exports.bad_argf = bad_argf;
exports.hash_variant = hash_variant;
/* Stdlib__Format Not a pure module */

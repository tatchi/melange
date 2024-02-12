// Generated by Melange
'use strict';

let Curry = require("melange.js/curry.js");

function f(value) {
  if (value == null) {
    return ;
  } else {
    return value;
  }
}

function fxx(v) {
  let match = Curry._1(v, undefined);
  switch (match) {
    case 1 :
        return /* 'a' */97;
    case 2 :
        return /* 'b' */98;
    case 3 :
        return /* 'c' */99;
    default:
      return /* 'd' */100;
  }
}

function fxxx2(v) {
  if (Curry._1(v, undefined)) {
    return 2;
  } else {
    return 1;
  }
}

function fxxx3(v) {
  if (Curry._1(v, undefined)) {
    return 2;
  } else {
    return 1;
  }
}

exports.f = f;
exports.fxx = fxx;
exports.fxxx2 = fxxx2;
exports.fxxx3 = fxxx3;
/* No side effect */

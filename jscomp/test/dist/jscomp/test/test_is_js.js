// Generated by Melange
'use strict';

var Mt = require("./mt.js");

var suites = {
  contents: /* [] */0
};

var test_id = {
  contents: 0
};

function b(loc, x) {
  Mt.bool_suites(test_id, suites, loc, x);
}

b("File \"test_is_js.ml\", line 9, characters 2-9", true);

b("File \"test_is_js.ml\", line 12, characters 2-9", true);

Mt.from_pair_suites("Test_is_js", suites.contents);

/*  Not a pure module */
Set up a few directories we'll need

  $ . ./setup.sh
  $ mkdir -p lib
  $ mkdir -p app
  $ mkdir -p output/lib
  $ mkdir -p output/app

  $ echo "let t = 1" > lib/a.ml
  $ echo "let t = A.t" > app/b.ml

Test that `-bs-package-name` works with `-bs-module-type` and not setting
`-bs-package-output`

  $ cd lib/
  $ BSPKG="-bs-package-name myPackage"
  $ melc $BSPKG -bs-package-output lib/ -bs-stop-after-cmj a.ml
  $ cd -
  $TESTCASE_ROOT

  $ cd app/
  $ melc $BSPKG -bs-package-output app/ -I ../lib b.ml -bs-stop-after-cmj
  $ cd -
  $TESTCASE_ROOT

The linking step just needs `-bs-module-type`, it already knows the package
paths

  $ cd output/lib
  $ melc $BSPKG -bs-module-type commonjs ../../lib/a.cmj -o a.js
  $ cd -
  $TESTCASE_ROOT

  $ cd output/app/
  $ melc $BSPKG -bs-module-type commonjs -I ../../lib ../../app/b.cmj -o b.js
  $ cd -
  $TESTCASE_ROOT

  $ cd output/app/
  $ melc $BSPKG -bs-module-type commonjs -I ../../lib ../../app/b.cmj -o b.js
  $ cd -
  $TESTCASE_ROOT

B depends on A, so it should import a.js in the right path

  $ cat output/app/b.js
  // Generated by Melange
  'use strict';
  
  let A = require("../lib/a.js");
  
  let t = A.t;
  
  exports.t = t;
  /* No side effect */

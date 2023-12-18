  $ cat > input.js <<EOF
  > require(process.env.DUNE_SOURCEROOT + '/_build/default/playground/mel_playground.bc.js');
  > require(process.env.DUNE_SOURCEROOT + '/_build/default/playground/melange-cmijs.js');
  > console.log(
  >   JSON.stringify(
  >     ocaml.compileML(
  >       \`let john = [%mel.obj { name = "john"; age = 99 }] let t = john##name\`),
  >     null,
  >     2
  >   )
  > );
  > EOF

  $ node input.js
  {
    "js_code": "// Generated by Melange\n\n\nvar john = {\n  name: \"john\",\n  age: 99\n};\n\nvar t = john.name;\n\nexport {\n  john ,\n  t ,\n}\n/* t Not a pure module */\n",
    "warnings": [],
    "type_hints": [
      {
        "start": {
          "line": 1,
          "col": 58
        },
        "end": {
          "line": 1,
          "col": 62
        },
        "kind": "expression",
        "hint": "< age : int; name : string > Js.t"
      },
      {
        "start": {
          "line": 0,
          "col": -1
        },
        "end": {
          "line": 0,
          "col": -1
        },
        "kind": "expression",
        "hint": "< age : int; name : string > Js.t -> < age : int; name : string >"
      },
      {
        "start": {
          "line": 1,
          "col": 58
        },
        "end": {
          "line": 1,
          "col": 68
        },
        "kind": "expression",
        "hint": "< age : int; name : string >"
      },
      {
        "start": {
          "line": 1,
          "col": 58
        },
        "end": {
          "line": 1,
          "col": 68
        },
        "kind": "expression",
        "hint": "string"
      },
      {
        "start": {
          "line": 1,
          "col": 54
        },
        "end": {
          "line": 1,
          "col": 55
        },
        "kind": "pattern_type",
        "hint": "string"
      },
      {
        "start": {
          "line": 1,
          "col": 50
        },
        "end": {
          "line": 1,
          "col": 68
        },
        "kind": "binding",
        "hint": "string"
      },
      {
        "start": {
          "line": 1,
          "col": 44
        },
        "end": {
          "line": 1,
          "col": 46
        },
        "kind": "expression",
        "hint": "int"
      },
      {
        "start": {
          "line": 1,
          "col": 30
        },
        "end": {
          "line": 1,
          "col": 36
        },
        "kind": "expression",
        "hint": "string"
      },
      {
        "start": {
          "line": 1,
          "col": 21
        },
        "end": {
          "line": 1,
          "col": 48
        },
        "kind": "expression",
        "hint": "name:string -> age:int -> < age : int; name : string > Js.t"
      },
      {
        "start": {
          "line": 1,
          "col": 21
        },
        "end": {
          "line": 1,
          "col": 48
        },
        "kind": "expression",
        "hint": "< age : int; name : string > Js.t"
      },
      {
        "start": {
          "line": 1,
          "col": 21
        },
        "end": {
          "line": 1,
          "col": 48
        },
        "kind": "core_type",
        "hint": "'a1"
      },
      {
        "start": {
          "line": 1,
          "col": 21
        },
        "end": {
          "line": 1,
          "col": 48
        },
        "kind": "core_type",
        "hint": "'a1"
      },
      {
        "start": {
          "line": 1,
          "col": 21
        },
        "end": {
          "line": 1,
          "col": 48
        },
        "kind": "core_type",
        "hint": "'a0"
      },
      {
        "start": {
          "line": 1,
          "col": 21
        },
        "end": {
          "line": 1,
          "col": 48
        },
        "kind": "core_type",
        "hint": "'a0"
      },
      {
        "start": {
          "line": 1,
          "col": 21
        },
        "end": {
          "line": 1,
          "col": 48
        },
        "kind": "core_type",
        "hint": "< age : 'a1; name : 'a0 >"
      },
      {
        "start": {
          "line": 1,
          "col": 21
        },
        "end": {
          "line": 1,
          "col": 48
        },
        "kind": "core_type",
        "hint": "< age : 'a1; name : 'a0 > Js.t"
      },
      {
        "start": {
          "line": 1,
          "col": 21
        },
        "end": {
          "line": 1,
          "col": 48
        },
        "kind": "core_type",
        "hint": "'a1"
      },
      {
        "start": {
          "line": 1,
          "col": 38
        },
        "end": {
          "line": 1,
          "col": 41
        },
        "kind": "core_type",
        "hint": "age:'a1 -> < age : 'a1; name : 'a0 > Js.t"
      },
      {
        "start": {
          "line": 1,
          "col": 21
        },
        "end": {
          "line": 1,
          "col": 48
        },
        "kind": "core_type",
        "hint": "'a0"
      },
      {
        "start": {
          "line": 1,
          "col": 23
        },
        "end": {
          "line": 1,
          "col": 27
        },
        "kind": "core_type",
        "hint": "name:'a0 -> age:'a1 -> < age : 'a1; name : 'a0 > Js.t"
      },
      {
        "start": {
          "line": 1,
          "col": 21
        },
        "end": {
          "line": 1,
          "col": 48
        },
        "kind": "expression",
        "hint": "< age : int; name : string > Js.t"
      },
      {
        "start": {
          "line": 1,
          "col": 4
        },
        "end": {
          "line": 1,
          "col": 8
        },
        "kind": "pattern_type",
        "hint": "< age : int; name : string > Js.t"
      },
      {
        "start": {
          "line": 1,
          "col": 0
        },
        "end": {
          "line": 1,
          "col": 49
        },
        "kind": "binding",
        "hint": "< age : int; name : string > Js.t"
      }
    ]
  }

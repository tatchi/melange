Test `Js.Bigint` code generation

  $ . ./setup.sh
  $ cat > dune-project <<EOF
  > (lang dune 3.8)
  > (using melange 0.1)
  > EOF
  $ cat > dune <<EOF
  > (melange.emit
  >  (target out)
  >  (preprocess (pps melange.ppx)))
  > EOF
  $ cat > x.ml <<EOF
  > let t = Js.Bigint.make "5"
  > let () = Js.log (Js.Bigint.asIntN ~precision:64 t)
  > let () =
  >   Js.log3
  >     (Js.Bigint.toString t)
  >     (Js.Bigint.toLocaleString ~locale:"de-DE" t)
  >     (Js.Bigint.toLocaleString
  >       ~locale:"en-US"
  >       ~options:{ style = "currency"; currency = "EUR" }
  >       t)
  > EOF
  $ dune build @melange
  $ node _build/default/out/x.js
  5n
  5 5 €5.00

  $ cat > x.ml <<EOF
  > let x =
  >   let open Js.Bigint in
  >   let a = make "5" and b = make "3" in
  >   sub (add a b |> mul b) b
  > let () = Js.log x
  > EOF
  $ dune build @melange
  $ cat _build/default/out/x.js
  // Generated by Melange
  'use strict';
  
  
  let a = BigInt("5");
  
  let b = BigInt("3");
  
  let x = b * (a + b) - b;
  
  console.log(x);
  
  exports.x = x;
  /* a Not a pure module */
  $ node _build/default/out/x.js
  21n

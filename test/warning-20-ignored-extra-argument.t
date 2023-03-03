Test showing "ignored extra argument" warning

  $ . ./setup.sh
  $ cat > main.ml <<EOF
  > type t
  > external clipboardData : t -> < .. > Js.t = "clipboardData" [@@bs.get]
  > let from_event evt = (clipboardData evt)##getData "text"
  > EOF

  $ melc main.ml
  // Generated by Melange
  'use strict';
  
  
  function from_event(evt) {
    return evt.clipboardData.getData("text");
  }
  
  exports.from_event = from_event;
  /* No side effect */

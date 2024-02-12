// Generated by Melange
'use strict';

let Caml = require("melange.js/caml.js");
let Caml_format = require("melange.js/caml_format.js");
let Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
let Caml_obj = require("melange.js/caml_obj.js");
let Caml_option = require("melange.js/caml_option.js");
let Curry = require("melange.js/curry.js");
let Stdlib = require("melange/stdlib.js");
let Stdlib__List = require("melange/list.js");
let Stdlib__Printf = require("melange/printf.js");
let Stdlib__Seq = require("melange/seq.js");
let Stdlib__String = require("melange/string.js");

function split(delim, s) {
  let len = s.length;
  if (len !== 0) {
    let _l = /* [] */0;
    let _i = len;
    while(true) {
      let i = _i;
      let l = _l;
      if (i === 0) {
        return l;
      }
      let i$p;
      try {
        i$p = Stdlib__String.rindex_from(s, i - 1 | 0, delim);
      }
      catch (raw_exn){
        let exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
        if (exn.MEL_EXN_ID === Stdlib.Not_found) {
          return {
                  hd: Stdlib__String.sub(s, 0, i),
                  tl: l
                };
        }
        throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
      }
      let l_0 = Stdlib__String.sub(s, i$p + 1 | 0, (i - i$p | 0) - 1 | 0);
      let l$1 = {
        hd: l_0,
        tl: l
      };
      let l$2 = i$p === 0 ? ({
            hd: "",
            tl: l$1
          }) : l$1;
      _i = i$p;
      _l = l$2;
      continue ;
    };
  } else {
    return /* [] */0;
  }
}

function string_of_float_option(param) {
  if (param !== undefined) {
    return Stdlib.string_of_float(param);
  } else {
    return "nan";
  }
}

let Util = {
  split: split,
  string_of_float_option: string_of_float_option
};

function string_of_rank(param) {
  if (typeof param === "number") {
    if (param) {
      return "Visited";
    } else {
      return "Uninitialized";
    }
  } else {
    return Curry._1(Stdlib__Printf.sprintf(/* Format */{
                    _0: {
                      TAG: /* String_literal */11,
                      _0: "Ranked(",
                      _1: {
                        TAG: /* Int */4,
                        _0: /* Int_i */3,
                        _1: /* No_padding */0,
                        _2: /* No_precision */0,
                        _3: {
                          TAG: /* Char_literal */12,
                          _0: /* ')' */41,
                          _1: /* End_of_format */0
                        }
                      }
                    },
                    _1: "Ranked(%i)"
                  }), param._0);
  }
}

function find_ticker_by_name(all_tickers, ticker) {
  return Stdlib__List.find((function (param) {
                return param.ticker_name === ticker;
              }), all_tickers);
}

function print_all_composite(all_tickers) {
  Stdlib__List.iter((function (param) {
          if (param.type_) {
            console.log(param.ticker_name);
            return ;
          }
          
        }), all_tickers);
}

let compare = Caml_obj.caml_compare;

let funarg = {
  compare: compare
};

function height(param) {
  if (param) {
    return param.h;
  } else {
    return 0;
  }
}

function create(l, x, d, r) {
  let hl = height(l);
  let hr = height(r);
  return /* Node */{
          l: l,
          v: x,
          d: d,
          r: r,
          h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
        };
}

function singleton(x, d) {
  return /* Node */{
          l: /* Empty */0,
          v: x,
          d: d,
          r: /* Empty */0,
          h: 1
        };
}

function bal(l, x, d, r) {
  let hl = l ? l.h : 0;
  let hr = r ? r.h : 0;
  if (hl > (hr + 2 | 0)) {
    if (l) {
      let lr = l.r;
      let ld = l.d;
      let lv = l.v;
      let ll = l.l;
      if (height(ll) >= height(lr)) {
        return create(ll, lv, ld, create(lr, x, d, r));
      }
      if (lr) {
        return create(create(ll, lv, ld, lr.l), lr.v, lr.d, create(lr.r, x, d, r));
      }
      throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
                MEL_EXN_ID: "Invalid_argument",
                _1: "Map.bal"
              });
    }
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
              MEL_EXN_ID: "Invalid_argument",
              _1: "Map.bal"
            });
  }
  if (hr <= (hl + 2 | 0)) {
    return /* Node */{
            l: l,
            v: x,
            d: d,
            r: r,
            h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          };
  }
  if (r) {
    let rr = r.r;
    let rd = r.d;
    let rv = r.v;
    let rl = r.l;
    if (height(rr) >= height(rl)) {
      return create(create(l, x, d, rl), rv, rd, rr);
    }
    if (rl) {
      return create(create(l, x, d, rl.l), rl.v, rl.d, create(rl.r, rv, rd, rr));
    }
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
              MEL_EXN_ID: "Invalid_argument",
              _1: "Map.bal"
            });
  }
  throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "Map.bal"
          });
}

function is_empty(param) {
  if (param) {
    return false;
  } else {
    return true;
  }
}

function add(x, data, m) {
  if (!m) {
    return /* Node */{
            l: /* Empty */0,
            v: x,
            d: data,
            r: /* Empty */0,
            h: 1
          };
  }
  let r = m.r;
  let d = m.d;
  let v = m.v;
  let l = m.l;
  let c = Curry._2(funarg.compare, x, v);
  if (c === 0) {
    if (d === data) {
      return m;
    } else {
      return /* Node */{
              l: l,
              v: x,
              d: data,
              r: r,
              h: m.h
            };
    }
  }
  if (c < 0) {
    let ll = add(x, data, l);
    if (l === ll) {
      return m;
    } else {
      return bal(ll, v, d, r);
    }
  }
  let rr = add(x, data, r);
  if (r === rr) {
    return m;
  } else {
    return bal(l, v, d, rr);
  }
}

function find(x, _param) {
  while(true) {
    let param = _param;
    if (param) {
      let c = Curry._2(funarg.compare, x, param.v);
      if (c === 0) {
        return param.d;
      }
      _param = c < 0 ? param.l : param.r;
      continue ;
    }
    throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
              MEL_EXN_ID: Stdlib.Not_found
            });
  };
}

function find_first(f, _param) {
  while(true) {
    let param = _param;
    if (param) {
      let v = param.v;
      if (Curry._1(f, v)) {
        let _v0 = v;
        let _d0 = param.d;
        let _param$1 = param.l;
        while(true) {
          let param$1 = _param$1;
          let d0 = _d0;
          let v0 = _v0;
          if (!param$1) {
            return [
                    v0,
                    d0
                  ];
          }
          let v$1 = param$1.v;
          if (Curry._1(f, v$1)) {
            _param$1 = param$1.l;
            _d0 = param$1.d;
            _v0 = v$1;
            continue ;
          }
          _param$1 = param$1.r;
          continue ;
        };
      }
      _param = param.r;
      continue ;
    }
    throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
              MEL_EXN_ID: Stdlib.Not_found
            });
  };
}

function find_first_opt(f, _param) {
  while(true) {
    let param = _param;
    if (!param) {
      return ;
    }
    let v = param.v;
    if (Curry._1(f, v)) {
      let _v0 = v;
      let _d0 = param.d;
      let _param$1 = param.l;
      while(true) {
        let param$1 = _param$1;
        let d0 = _d0;
        let v0 = _v0;
        if (!param$1) {
          return [
                  v0,
                  d0
                ];
        }
        let v$1 = param$1.v;
        if (Curry._1(f, v$1)) {
          _param$1 = param$1.l;
          _d0 = param$1.d;
          _v0 = v$1;
          continue ;
        }
        _param$1 = param$1.r;
        continue ;
      };
    }
    _param = param.r;
    continue ;
  };
}

function find_last(f, _param) {
  while(true) {
    let param = _param;
    if (param) {
      let v = param.v;
      if (Curry._1(f, v)) {
        let _v0 = v;
        let _d0 = param.d;
        let _param$1 = param.r;
        while(true) {
          let param$1 = _param$1;
          let d0 = _d0;
          let v0 = _v0;
          if (!param$1) {
            return [
                    v0,
                    d0
                  ];
          }
          let v$1 = param$1.v;
          if (Curry._1(f, v$1)) {
            _param$1 = param$1.r;
            _d0 = param$1.d;
            _v0 = v$1;
            continue ;
          }
          _param$1 = param$1.l;
          continue ;
        };
      }
      _param = param.l;
      continue ;
    }
    throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
              MEL_EXN_ID: Stdlib.Not_found
            });
  };
}

function find_last_opt(f, _param) {
  while(true) {
    let param = _param;
    if (!param) {
      return ;
    }
    let v = param.v;
    if (Curry._1(f, v)) {
      let _v0 = v;
      let _d0 = param.d;
      let _param$1 = param.r;
      while(true) {
        let param$1 = _param$1;
        let d0 = _d0;
        let v0 = _v0;
        if (!param$1) {
          return [
                  v0,
                  d0
                ];
        }
        let v$1 = param$1.v;
        if (Curry._1(f, v$1)) {
          _param$1 = param$1.r;
          _d0 = param$1.d;
          _v0 = v$1;
          continue ;
        }
        _param$1 = param$1.l;
        continue ;
      };
    }
    _param = param.l;
    continue ;
  };
}

function find_opt(x, _param) {
  while(true) {
    let param = _param;
    if (!param) {
      return ;
    }
    let c = Curry._2(funarg.compare, x, param.v);
    if (c === 0) {
      return Caml_option.some(param.d);
    }
    _param = c < 0 ? param.l : param.r;
    continue ;
  };
}

function mem(x, _param) {
  while(true) {
    let param = _param;
    if (!param) {
      return false;
    }
    let c = Curry._2(funarg.compare, x, param.v);
    if (c === 0) {
      return true;
    }
    _param = c < 0 ? param.l : param.r;
    continue ;
  };
}

function min_binding(_param) {
  while(true) {
    let param = _param;
    if (param) {
      let l = param.l;
      if (!l) {
        return [
                param.v,
                param.d
              ];
      }
      _param = l;
      continue ;
    }
    throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
              MEL_EXN_ID: Stdlib.Not_found
            });
  };
}

function min_binding_opt(_param) {
  while(true) {
    let param = _param;
    if (!param) {
      return ;
    }
    let l = param.l;
    if (!l) {
      return [
              param.v,
              param.d
            ];
    }
    _param = l;
    continue ;
  };
}

function max_binding(_param) {
  while(true) {
    let param = _param;
    if (param) {
      if (!param.r) {
        return [
                param.v,
                param.d
              ];
      }
      _param = param.r;
      continue ;
    }
    throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
              MEL_EXN_ID: Stdlib.Not_found
            });
  };
}

function max_binding_opt(_param) {
  while(true) {
    let param = _param;
    if (!param) {
      return ;
    }
    if (!param.r) {
      return [
              param.v,
              param.d
            ];
    }
    _param = param.r;
    continue ;
  };
}

function remove_min_binding(param) {
  if (param) {
    let l = param.l;
    if (l) {
      return bal(remove_min_binding(l), param.v, param.d, param.r);
    } else {
      return param.r;
    }
  }
  throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "Map.remove_min_elt"
          });
}

function merge(t1, t2) {
  if (!t1) {
    return t2;
  }
  if (!t2) {
    return t1;
  }
  let match = min_binding(t2);
  return bal(t1, match[0], match[1], remove_min_binding(t2));
}

function remove(x, m) {
  if (!m) {
    return /* Empty */0;
  }
  let r = m.r;
  let d = m.d;
  let v = m.v;
  let l = m.l;
  let c = Curry._2(funarg.compare, x, v);
  if (c === 0) {
    return merge(l, r);
  }
  if (c < 0) {
    let ll = remove(x, l);
    if (l === ll) {
      return m;
    } else {
      return bal(ll, v, d, r);
    }
  }
  let rr = remove(x, r);
  if (r === rr) {
    return m;
  } else {
    return bal(l, v, d, rr);
  }
}

function update(x, f, m) {
  if (m) {
    let r = m.r;
    let d = m.d;
    let v = m.v;
    let l = m.l;
    let c = Curry._2(funarg.compare, x, v);
    if (c === 0) {
      let data = Curry._1(f, Caml_option.some(d));
      if (data === undefined) {
        return merge(l, r);
      }
      let data$1 = Caml_option.valFromOption(data);
      if (d === data$1) {
        return m;
      } else {
        return /* Node */{
                l: l,
                v: x,
                d: data$1,
                r: r,
                h: m.h
              };
      }
    }
    if (c < 0) {
      let ll = update(x, f, l);
      if (l === ll) {
        return m;
      } else {
        return bal(ll, v, d, r);
      }
    }
    let rr = update(x, f, r);
    if (r === rr) {
      return m;
    } else {
      return bal(l, v, d, rr);
    }
  }
  let data$2 = Curry._1(f, undefined);
  if (data$2 !== undefined) {
    return /* Node */{
            l: /* Empty */0,
            v: x,
            d: Caml_option.valFromOption(data$2),
            r: /* Empty */0,
            h: 1
          };
  } else {
    return /* Empty */0;
  }
}

function add_to_list(x, data, m) {
  let add = function (param) {
    if (param !== undefined) {
      return {
              hd: data,
              tl: param
            };
    } else {
      return {
              hd: data,
              tl: /* [] */0
            };
    }
  };
  return update(x, add, m);
}

function iter(f, _param) {
  while(true) {
    let param = _param;
    if (!param) {
      return ;
    }
    iter(f, param.l);
    Curry._2(f, param.v, param.d);
    _param = param.r;
    continue ;
  };
}

function map(f, param) {
  if (!param) {
    return /* Empty */0;
  }
  let l$p = map(f, param.l);
  let d$p = Curry._1(f, param.d);
  let r$p = map(f, param.r);
  return /* Node */{
          l: l$p,
          v: param.v,
          d: d$p,
          r: r$p,
          h: param.h
        };
}

function mapi(f, param) {
  if (!param) {
    return /* Empty */0;
  }
  let v = param.v;
  let l$p = mapi(f, param.l);
  let d$p = Curry._2(f, v, param.d);
  let r$p = mapi(f, param.r);
  return /* Node */{
          l: l$p,
          v: v,
          d: d$p,
          r: r$p,
          h: param.h
        };
}

function fold(f, _m, _accu) {
  while(true) {
    let accu = _accu;
    let m = _m;
    if (!m) {
      return accu;
    }
    _accu = Curry._3(f, m.v, m.d, fold(f, m.l, accu));
    _m = m.r;
    continue ;
  };
}

function for_all(p, _param) {
  while(true) {
    let param = _param;
    if (!param) {
      return true;
    }
    if (!Curry._2(p, param.v, param.d)) {
      return false;
    }
    if (!for_all(p, param.l)) {
      return false;
    }
    _param = param.r;
    continue ;
  };
}

function exists(p, _param) {
  while(true) {
    let param = _param;
    if (!param) {
      return false;
    }
    if (Curry._2(p, param.v, param.d)) {
      return true;
    }
    if (exists(p, param.l)) {
      return true;
    }
    _param = param.r;
    continue ;
  };
}

function add_min_binding(k, x, param) {
  if (param) {
    return bal(add_min_binding(k, x, param.l), param.v, param.d, param.r);
  } else {
    return singleton(k, x);
  }
}

function add_max_binding(k, x, param) {
  if (param) {
    return bal(param.l, param.v, param.d, add_max_binding(k, x, param.r));
  } else {
    return singleton(k, x);
  }
}

function join(l, v, d, r) {
  if (!l) {
    return add_min_binding(v, d, r);
  }
  if (!r) {
    return add_max_binding(v, d, l);
  }
  let rh = r.h;
  let lh = l.h;
  if (lh > (rh + 2 | 0)) {
    return bal(l.l, l.v, l.d, join(l.r, v, d, r));
  } else if (rh > (lh + 2 | 0)) {
    return bal(join(l, v, d, r.l), r.v, r.d, r.r);
  } else {
    return create(l, v, d, r);
  }
}

function concat(t1, t2) {
  if (!t1) {
    return t2;
  }
  if (!t2) {
    return t1;
  }
  let match = min_binding(t2);
  return join(t1, match[0], match[1], remove_min_binding(t2));
}

function concat_or_join(t1, v, d, t2) {
  if (d !== undefined) {
    return join(t1, v, Caml_option.valFromOption(d), t2);
  } else {
    return concat(t1, t2);
  }
}

function split$1(x, param) {
  if (!param) {
    return [
            /* Empty */0,
            undefined,
            /* Empty */0
          ];
  }
  let r = param.r;
  let d = param.d;
  let v = param.v;
  let l = param.l;
  let c = Curry._2(funarg.compare, x, v);
  if (c === 0) {
    return [
            l,
            Caml_option.some(d),
            r
          ];
  }
  if (c < 0) {
    let match = split$1(x, l);
    return [
            match[0],
            match[1],
            join(match[2], v, d, r)
          ];
  }
  let match$1 = split$1(x, r);
  return [
          join(l, v, d, match$1[0]),
          match$1[1],
          match$1[2]
        ];
}

function merge$1(f, s1, s2) {
  if (s1) {
    let v1 = s1.v;
    if (s1.h >= height(s2)) {
      let match = split$1(v1, s2);
      return concat_or_join(merge$1(f, s1.l, match[0]), v1, Curry._3(f, v1, Caml_option.some(s1.d), match[1]), merge$1(f, s1.r, match[2]));
    }
    
  } else if (!s2) {
    return /* Empty */0;
  }
  if (s2) {
    let v2 = s2.v;
    let match$1 = split$1(v2, s1);
    return concat_or_join(merge$1(f, match$1[0], s2.l), v2, Curry._3(f, v2, match$1[1], Caml_option.some(s2.d)), merge$1(f, match$1[2], s2.r));
  }
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/stdlib/map.ml",
              408,
              10
            ]
          });
}

function union(f, s1, s2) {
  if (!s1) {
    return s2;
  }
  if (!s2) {
    return s1;
  }
  let d2 = s2.d;
  let v2 = s2.v;
  let d1 = s1.d;
  let v1 = s1.v;
  if (s1.h >= s2.h) {
    let match = split$1(v1, s2);
    let d2$1 = match[1];
    let l = union(f, s1.l, match[0]);
    let r = union(f, s1.r, match[2]);
    if (d2$1 !== undefined) {
      return concat_or_join(l, v1, Curry._3(f, v1, d1, Caml_option.valFromOption(d2$1)), r);
    } else {
      return join(l, v1, d1, r);
    }
  }
  let match$1 = split$1(v2, s1);
  let d1$1 = match$1[1];
  let l$1 = union(f, match$1[0], s2.l);
  let r$1 = union(f, match$1[2], s2.r);
  if (d1$1 !== undefined) {
    return concat_or_join(l$1, v2, Curry._3(f, v2, Caml_option.valFromOption(d1$1), d2), r$1);
  } else {
    return join(l$1, v2, d2, r$1);
  }
}

function filter(p, m) {
  if (!m) {
    return /* Empty */0;
  }
  let r = m.r;
  let d = m.d;
  let v = m.v;
  let l = m.l;
  let l$p = filter(p, l);
  let pvd = Curry._2(p, v, d);
  let r$p = filter(p, r);
  if (pvd) {
    if (l === l$p && r === r$p) {
      return m;
    } else {
      return join(l$p, v, d, r$p);
    }
  } else {
    return concat(l$p, r$p);
  }
}

function filter_map(f, param) {
  if (!param) {
    return /* Empty */0;
  }
  let v = param.v;
  let l$p = filter_map(f, param.l);
  let fvd = Curry._2(f, v, param.d);
  let r$p = filter_map(f, param.r);
  if (fvd !== undefined) {
    return join(l$p, v, Caml_option.valFromOption(fvd), r$p);
  } else {
    return concat(l$p, r$p);
  }
}

function partition(p, param) {
  if (!param) {
    return [
            /* Empty */0,
            /* Empty */0
          ];
  }
  let d = param.d;
  let v = param.v;
  let match = partition(p, param.l);
  let lf = match[1];
  let lt = match[0];
  let pvd = Curry._2(p, v, d);
  let match$1 = partition(p, param.r);
  let rf = match$1[1];
  let rt = match$1[0];
  if (pvd) {
    return [
            join(lt, v, d, rt),
            concat(lf, rf)
          ];
  } else {
    return [
            concat(lt, rt),
            join(lf, v, d, rf)
          ];
  }
}

function cons_enum(_m, _e) {
  while(true) {
    let e = _e;
    let m = _m;
    if (!m) {
      return e;
    }
    _e = /* More */{
      _0: m.v,
      _1: m.d,
      _2: m.r,
      _3: e
    };
    _m = m.l;
    continue ;
  };
}

function compare$1(cmp, m1, m2) {
  let _e1 = cons_enum(m1, /* End */0);
  let _e2 = cons_enum(m2, /* End */0);
  while(true) {
    let e2 = _e2;
    let e1 = _e1;
    if (!e1) {
      if (e2) {
        return -1;
      } else {
        return 0;
      }
    }
    if (!e2) {
      return 1;
    }
    let c = Curry._2(funarg.compare, e1._0, e2._0);
    if (c !== 0) {
      return c;
    }
    let c$1 = Curry._2(cmp, e1._1, e2._1);
    if (c$1 !== 0) {
      return c$1;
    }
    _e2 = cons_enum(e2._2, e2._3);
    _e1 = cons_enum(e1._2, e1._3);
    continue ;
  };
}

function equal(cmp, m1, m2) {
  let _e1 = cons_enum(m1, /* End */0);
  let _e2 = cons_enum(m2, /* End */0);
  while(true) {
    let e2 = _e2;
    let e1 = _e1;
    if (!e1) {
      if (e2) {
        return false;
      } else {
        return true;
      }
    }
    if (!e2) {
      return false;
    }
    if (Curry._2(funarg.compare, e1._0, e2._0) !== 0) {
      return false;
    }
    if (!Curry._2(cmp, e1._1, e2._1)) {
      return false;
    }
    _e2 = cons_enum(e2._2, e2._3);
    _e1 = cons_enum(e1._2, e1._3);
    continue ;
  };
}

function cardinal(param) {
  if (param) {
    return (cardinal(param.l) + 1 | 0) + cardinal(param.r) | 0;
  } else {
    return 0;
  }
}

function bindings_aux(_accu, _param) {
  while(true) {
    let param = _param;
    let accu = _accu;
    if (!param) {
      return accu;
    }
    _param = param.l;
    _accu = {
      hd: [
        param.v,
        param.d
      ],
      tl: bindings_aux(accu, param.r)
    };
    continue ;
  };
}

function bindings(s) {
  return bindings_aux(/* [] */0, s);
}

function of_list(bs) {
  return Stdlib__List.fold_left((function (m, param) {
                return add(param[0], param[1], m);
              }), /* Empty */0, bs);
}

function add_seq(i, m) {
  return Stdlib__Seq.fold_left((function (m, param) {
                return add(param[0], param[1], m);
              }), m, i);
}

function of_seq(i) {
  return add_seq(i, /* Empty */0);
}

function seq_of_enum_(c, param) {
  if (!c) {
    return /* Nil */0;
  }
  let partial_arg = cons_enum(c._2, c._3);
  return /* Cons */{
          _0: [
            c._0,
            c._1
          ],
          _1: (function (param) {
              return seq_of_enum_(partial_arg, param);
            })
        };
}

function to_seq(m) {
  let partial_arg = cons_enum(m, /* End */0);
  return function (param) {
    return seq_of_enum_(partial_arg, param);
  };
}

function snoc_enum(_s, _e) {
  while(true) {
    let e = _e;
    let s = _s;
    if (!s) {
      return e;
    }
    _e = /* More */{
      _0: s.v,
      _1: s.d,
      _2: s.l,
      _3: e
    };
    _s = s.r;
    continue ;
  };
}

function rev_seq_of_enum_(c, param) {
  if (!c) {
    return /* Nil */0;
  }
  let partial_arg = snoc_enum(c._2, c._3);
  return /* Cons */{
          _0: [
            c._0,
            c._1
          ],
          _1: (function (param) {
              return rev_seq_of_enum_(partial_arg, param);
            })
        };
}

function to_rev_seq(c) {
  let partial_arg = snoc_enum(c, /* End */0);
  return function (param) {
    return rev_seq_of_enum_(partial_arg, param);
  };
}

function to_seq_from(low, m) {
  let aux = function (low, _m, _c) {
    while(true) {
      let c = _c;
      let m = _m;
      if (!m) {
        return c;
      }
      let r = m.r;
      let d = m.d;
      let v = m.v;
      let n = Curry._2(funarg.compare, v, low);
      if (n === 0) {
        return /* More */{
                _0: v,
                _1: d,
                _2: r,
                _3: c
              };
      }
      if (n < 0) {
        _m = r;
        continue ;
      }
      _c = /* More */{
        _0: v,
        _1: d,
        _2: r,
        _3: c
      };
      _m = m.l;
      continue ;
    };
  };
  let partial_arg = aux(low, m, /* End */0);
  return function (param) {
    return seq_of_enum_(partial_arg, param);
  };
}

let Ticker_map = {
  empty: /* Empty */0,
  add: add,
  add_to_list: add_to_list,
  update: update,
  singleton: singleton,
  remove: remove,
  merge: merge$1,
  union: union,
  cardinal: cardinal,
  bindings: bindings,
  min_binding: min_binding,
  min_binding_opt: min_binding_opt,
  max_binding: max_binding,
  max_binding_opt: max_binding_opt,
  choose: min_binding,
  choose_opt: min_binding_opt,
  find: find,
  find_opt: find_opt,
  find_first: find_first,
  find_first_opt: find_first_opt,
  find_last: find_last,
  find_last_opt: find_last_opt,
  iter: iter,
  fold: fold,
  map: map,
  mapi: mapi,
  filter: filter,
  filter_map: filter_map,
  partition: partition,
  split: split$1,
  is_empty: is_empty,
  mem: mem,
  equal: equal,
  compare: compare$1,
  for_all: for_all,
  exists: exists,
  to_list: bindings,
  of_list: of_list,
  to_seq: to_seq,
  to_rev_seq: to_rev_seq,
  to_seq_from: to_seq_from,
  add_seq: add_seq,
  of_seq: of_seq
};

function compute_update_sequences(all_tickers) {
  Stdlib__List.fold_left((function (counter, ticker) {
          let loop = function (counter, ticker) {
            let rank = ticker.rank;
            if (typeof rank !== "number") {
              return counter;
            }
            if (rank) {
              return counter;
            }
            ticker.rank = /* Visited */1;
            let match = ticker.type_;
            if (match) {
              let match$1 = match._0;
              let counter$1 = loop(counter, match$1.lhs);
              let counter$2 = loop(counter$1, match$1.rhs);
              let counter$3 = counter$2 + 1 | 0;
              ticker.rank = /* Ranked */{
                _0: counter$3
              };
              return counter$3;
            }
            let counter$4 = counter + 1 | 0;
            ticker.rank = /* Ranked */{
              _0: counter$4
            };
            return counter$4;
          };
          return loop(counter, ticker);
        }), 0, all_tickers);
  let map = Stdlib__List.fold_left((function (map, ticker) {
          if (!ticker.type_) {
            return Curry._3(add, ticker.ticker_name, {
                        hd: ticker,
                        tl: /* [] */0
                      }, map);
          }
          let loop = function (_up, _map, _ticker) {
            while(true) {
              let ticker = _ticker;
              let map = _map;
              let up = _up;
              let type_ = ticker.type_;
              let ticker_name = ticker.ticker_name;
              if (type_) {
                let match = type_._0;
                let map$1 = loop({
                      hd: ticker,
                      tl: up
                    }, map, match.lhs);
                _ticker = match.rhs;
                _map = map$1;
                _up = {
                  hd: ticker,
                  tl: up
                };
                continue ;
              }
              let l = Curry._2(find, ticker_name, map);
              return Curry._3(add, ticker_name, Stdlib.$at(up, l), map);
            };
          };
          return loop(/* [] */0, map, ticker);
        }), /* Empty */0, Stdlib__List.rev(all_tickers));
  return Curry._3(fold, (function (k, l, map) {
                let l$1 = Stdlib__List.sort_uniq((function (lhs, rhs) {
                        let x = lhs.rank;
                        if (typeof x === "number") {
                          throw new Caml_js_exceptions.MelangeError("Failure", {
                                    MEL_EXN_ID: "Failure",
                                    _1: "All nodes should be ranked"
                                  });
                        }
                        let y = rhs.rank;
                        if (typeof y === "number") {
                          throw new Caml_js_exceptions.MelangeError("Failure", {
                                    MEL_EXN_ID: "Failure",
                                    _1: "All nodes should be ranked"
                                  });
                        }
                        return Caml.caml_int_compare(x._0, y._0);
                      }), l);
                return Curry._3(add, k, l$1, map);
              }), map, map);
}

function process_quote(ticker_map, new_ticker, new_value) {
  let update_sequence = Curry._2(find, new_ticker, ticker_map);
  Stdlib__List.iter((function (ticker) {
          let match = ticker.type_;
          if (match) {
            let match$1 = match._0;
            let match$2 = match$1.lhs.value;
            let match$3 = match$1.rhs.value;
            let value = match$2 !== undefined && match$3 !== undefined ? (
                match$1.op ? match$2 - match$3 : match$2 + match$3
              ) : undefined;
            ticker.value = value;
            return ;
          }
          if (ticker.ticker_name === new_ticker) {
            ticker.value = new_value;
            return ;
          }
          throw new Caml_js_exceptions.MelangeError("Failure", {
                    MEL_EXN_ID: "Failure",
                    _1: "Only single Market ticker should be udpated upon a new quote"
                  });
        }), update_sequence);
}

function process_input_line(ticker_map, all_tickers, line) {
  let make_binary_op = function (ticker_name, lhs, rhs, op) {
    let lhs$1 = find_ticker_by_name(all_tickers, lhs);
    let rhs$1 = find_ticker_by_name(all_tickers, rhs);
    return {
            value: undefined,
            rank: /* Uninitialized */0,
            ticker_name: ticker_name,
            type_: /* Binary_op */{
              _0: {
                op: op,
                rhs: rhs$1,
                lhs: lhs$1
              }
            }
          };
  };
  let tokens = split(/* '|' */124, line);
  if (tokens) {
    switch (tokens.hd) {
      case "Q" :
          let match = tokens.tl;
          if (match) {
            let match$1 = match.tl;
            if (match$1) {
              if (match$1.tl) {
                throw new Caml_js_exceptions.MelangeError("Failure", {
                          MEL_EXN_ID: "Failure",
                          _1: "Invalid input line"
                        });
              }
              let ticker_map$1 = ticker_map !== undefined ? Caml_option.valFromOption(ticker_map) : compute_update_sequences(all_tickers);
              let value = Caml_format.caml_float_of_string(match$1.hd);
              process_quote(ticker_map$1, match.hd, value);
              return [
                      all_tickers,
                      Caml_option.some(ticker_map$1)
                    ];
            }
            throw new Caml_js_exceptions.MelangeError("Failure", {
                      MEL_EXN_ID: "Failure",
                      _1: "Invalid input line"
                    });
          }
          throw new Caml_js_exceptions.MelangeError("Failure", {
                    MEL_EXN_ID: "Failure",
                    _1: "Invalid input line"
                  });
      case "R" :
          let match$2 = tokens.tl;
          if (match$2) {
            let match$3 = match$2.tl;
            if (match$3) {
              let ticker_name = match$2.hd;
              switch (match$3.hd) {
                case "+" :
                    let match$4 = match$3.tl;
                    if (match$4) {
                      let match$5 = match$4.tl;
                      if (match$5) {
                        if (match$5.tl) {
                          throw new Caml_js_exceptions.MelangeError("Failure", {
                                    MEL_EXN_ID: "Failure",
                                    _1: "Invalid input line"
                                  });
                        }
                        return [
                                {
                                  hd: make_binary_op(ticker_name, match$4.hd, match$5.hd, /* PLUS */0),
                                  tl: all_tickers
                                },
                                ticker_map
                              ];
                      }
                      throw new Caml_js_exceptions.MelangeError("Failure", {
                                MEL_EXN_ID: "Failure",
                                _1: "Invalid input line"
                              });
                    }
                    throw new Caml_js_exceptions.MelangeError("Failure", {
                              MEL_EXN_ID: "Failure",
                              _1: "Invalid input line"
                            });
                case "-" :
                    let match$6 = match$3.tl;
                    if (match$6) {
                      let match$7 = match$6.tl;
                      if (match$7) {
                        if (match$7.tl) {
                          throw new Caml_js_exceptions.MelangeError("Failure", {
                                    MEL_EXN_ID: "Failure",
                                    _1: "Invalid input line"
                                  });
                        }
                        return [
                                {
                                  hd: make_binary_op(ticker_name, match$6.hd, match$7.hd, /* MINUS */1),
                                  tl: all_tickers
                                },
                                ticker_map
                              ];
                      }
                      throw new Caml_js_exceptions.MelangeError("Failure", {
                                MEL_EXN_ID: "Failure",
                                _1: "Invalid input line"
                              });
                    }
                    throw new Caml_js_exceptions.MelangeError("Failure", {
                              MEL_EXN_ID: "Failure",
                              _1: "Invalid input line"
                            });
                case "S" :
                    if (match$3.tl) {
                      throw new Caml_js_exceptions.MelangeError("Failure", {
                                MEL_EXN_ID: "Failure",
                                _1: "Invalid input line"
                              });
                    }
                    return [
                            {
                              hd: {
                                value: undefined,
                                rank: /* Uninitialized */0,
                                ticker_name: ticker_name,
                                type_: /* Market */0
                              },
                              tl: all_tickers
                            },
                            ticker_map
                          ];
                default:
                  throw new Caml_js_exceptions.MelangeError("Failure", {
                            MEL_EXN_ID: "Failure",
                            _1: "Invalid input line"
                          });
              }
            } else {
              throw new Caml_js_exceptions.MelangeError("Failure", {
                        MEL_EXN_ID: "Failure",
                        _1: "Invalid input line"
                      });
            }
          } else {
            throw new Caml_js_exceptions.MelangeError("Failure", {
                      MEL_EXN_ID: "Failure",
                      _1: "Invalid input line"
                    });
          }
      default:
        throw new Caml_js_exceptions.MelangeError("Failure", {
                  MEL_EXN_ID: "Failure",
                  _1: "Invalid input line"
                });
    }
  } else {
    throw new Caml_js_exceptions.MelangeError("Failure", {
              MEL_EXN_ID: "Failure",
              _1: "Invalid input line"
            });
  }
}

function loop(_lines, _param) {
  while(true) {
    let param = _param;
    let lines = _lines;
    let all_tickers = param[0];
    if (!lines) {
      return print_all_composite(all_tickers);
    }
    _param = process_input_line(param[1], all_tickers, lines.hd);
    _lines = lines.tl;
    continue ;
  };
}

let lines = {
  hd: "R|MSFT|S",
  tl: {
    hd: "R|IBM|S",
    tl: {
      hd: "R|FB|S",
      tl: {
        hd: "R|CP1|+|MSFT|IBM",
        tl: {
          hd: "R|CP2|-|FB|IBM",
          tl: {
            hd: "R|CP12|+|CP1|CP2",
            tl: {
              hd: "Q|MSFT|120.",
              tl: {
                hd: "Q|IBM|130.",
                tl: {
                  hd: "Q|FB|80.",
                  tl: /* [] */0
                }
              }
            }
          }
        }
      }
    }
  }
};

exports.Util = Util;
exports.string_of_rank = string_of_rank;
exports.find_ticker_by_name = find_ticker_by_name;
exports.print_all_composite = print_all_composite;
exports.Ticker_map = Ticker_map;
exports.compute_update_sequences = compute_update_sequences;
exports.process_quote = process_quote;
exports.process_input_line = process_input_line;
exports.lines = lines;
exports.loop = loop;
/* Ticker_map Not a pure module */

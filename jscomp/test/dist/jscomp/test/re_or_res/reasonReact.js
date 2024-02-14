// Generated by Melange
'use strict';

let Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
let Caml_option = require("melange.js/caml_option.js");
let Curry = require("melange.js/curry.js");
let ReasonReactOptimizedCreateClass = require("./reasonReactOptimizedCreateClass.js");
let Stdlib = require("melange/stdlib.js");
let React = require("react");

function createDomElement(s, props, children) {
  const vararg = [
      s,
      props
    ].concat(children);
  return React.createElement.apply(null, vararg);
}

function anyToUnit(param) {
  
}

function anyToTrue(param) {
  return true;
}

function willReceivePropsDefault(param) {
  return param.state;
}

function renderDefault(_self) {
  return "RenderNotImplemented";
}

function initialStateDefault(param) {
  
}

function reducerDefault(_action, _state) {
  return /* NoUpdate */0;
}

function convertPropsIfTheyreFromJs(props, jsPropsToReason, debugName) {
  const match = props.reasonProps;
  if (!(match == null)) {
    return match;
  }
  if (jsPropsToReason !== undefined) {
    return /* Element */{
            _0: jsPropsToReason(props)
          };
  }
  throw new Caml_js_exceptions.MelangeError(Stdlib.Invalid_argument, {
            MEL_EXN_ID: Stdlib.Invalid_argument,
            _1: "A JS component called the Reason component " + (debugName + " which didn't implement the JS->Reason React props conversion.")
          });
}

function createClass(debugName) {
  return ReasonReactOptimizedCreateClass.createClass({
              displayName: debugName,
              subscriptions: null,
              self: (function (state, retainedProps) {
                  let $$this = this ;
                  return {
                          handle: $$this.handleMethod,
                          state: state,
                          retainedProps: retainedProps,
                          send: $$this.sendMethod,
                          onUnmount: $$this.onUnmountMethod
                        };
                }),
              getInitialState: (function () {
                  const thisJs = this;
                  const convertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                  return {
                          reasonState: Curry._1(convertedReasonProps._0.initialState, undefined)
                        };
                }),
              componentDidMount: (function () {
                  let $$this = this ;
                  const thisJs = this;
                  const convertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                  const component = convertedReasonProps._0;
                  const curTotalState = thisJs.state;
                  const curReasonState = curTotalState.reasonState;
                  const self = $$this.self(curReasonState, component.retainedProps);
                  if (component.didMount !== anyToUnit) {
                    return Curry._1(component.didMount, self);
                  }
                  
                }),
              componentDidUpdate: (function (prevProps, prevState) {
                  let $$this = this ;
                  const thisJs = this;
                  const curState = thisJs.state;
                  const curReasonState = curState.reasonState;
                  const newJsProps = thisJs.props;
                  const newConvertedReasonProps = convertPropsIfTheyreFromJs(newJsProps, thisJs.jsPropsToReason, debugName);
                  const newComponent = newConvertedReasonProps._0;
                  if (newComponent.didUpdate === anyToUnit) {
                    return ;
                  }
                  const oldConvertedReasonProps = prevProps === newJsProps ? newConvertedReasonProps : convertPropsIfTheyreFromJs(prevProps, thisJs.jsPropsToReason, debugName);
                  const prevReasonState = prevState.reasonState;
                  const newSelf = $$this.self(curReasonState, newComponent.retainedProps);
                  const oldSelf_handle = newSelf.handle;
                  const oldSelf_retainedProps = oldConvertedReasonProps._0.retainedProps;
                  const oldSelf_send = newSelf.send;
                  const oldSelf_onUnmount = newSelf.onUnmount;
                  const oldSelf = {
                    handle: oldSelf_handle,
                    state: prevReasonState,
                    retainedProps: oldSelf_retainedProps,
                    send: oldSelf_send,
                    onUnmount: oldSelf_onUnmount
                  };
                  Curry._1(newComponent.didUpdate, {
                        oldSelf: oldSelf,
                        newSelf: newSelf
                      });
                }),
              componentWillUnmount: (function () {
                  let $$this = this ;
                  const thisJs = this;
                  const convertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                  const component = convertedReasonProps._0;
                  const curState = thisJs.state;
                  const curReasonState = curState.reasonState;
                  if (component.willUnmount !== anyToUnit) {
                    Curry._1(component.willUnmount, $$this.self(curReasonState, component.retainedProps));
                  }
                  const subs = $$this.subscriptions;
                  if (subs !== null) {
                    subs.forEach(function (unsubscribe) {
                          Curry._1(unsubscribe, undefined);
                        });
                    return ;
                  }
                  
                }),
              componentWillUpdate: (function (nextProps, nextState) {
                  let $$this = this ;
                  const thisJs = this;
                  const newConvertedReasonProps = convertPropsIfTheyreFromJs(nextProps, thisJs.jsPropsToReason, debugName);
                  const newComponent = newConvertedReasonProps._0;
                  if (newComponent.willUpdate === anyToUnit) {
                    return ;
                  }
                  const oldJsProps = thisJs.props;
                  const oldConvertedReasonProps = nextProps === oldJsProps ? newConvertedReasonProps : convertPropsIfTheyreFromJs(oldJsProps, thisJs.jsPropsToReason, debugName);
                  const curState = thisJs.state;
                  const curReasonState = curState.reasonState;
                  const nextReasonState = nextState.reasonState;
                  const newSelf = $$this.self(nextReasonState, newComponent.retainedProps);
                  const oldSelf_handle = newSelf.handle;
                  const oldSelf_retainedProps = oldConvertedReasonProps._0.retainedProps;
                  const oldSelf_send = newSelf.send;
                  const oldSelf_onUnmount = newSelf.onUnmount;
                  const oldSelf = {
                    handle: oldSelf_handle,
                    state: curReasonState,
                    retainedProps: oldSelf_retainedProps,
                    send: oldSelf_send,
                    onUnmount: oldSelf_onUnmount
                  };
                  Curry._1(newComponent.willUpdate, {
                        oldSelf: oldSelf,
                        newSelf: newSelf
                      });
                }),
              componentWillReceiveProps: (function (nextProps) {
                  let $$this = this ;
                  const thisJs = this;
                  const newConvertedReasonProps = convertPropsIfTheyreFromJs(nextProps, thisJs.jsPropsToReason, debugName);
                  const newComponent = newConvertedReasonProps._0;
                  if (newComponent.willReceiveProps === willReceivePropsDefault) {
                    return ;
                  }
                  const oldJsProps = thisJs.props;
                  const oldConvertedReasonProps = nextProps === oldJsProps ? newConvertedReasonProps : convertPropsIfTheyreFromJs(oldJsProps, thisJs.jsPropsToReason, debugName);
                  const oldComponent = oldConvertedReasonProps._0;
                  thisJs.setState((function (curTotalState, param) {
                          const curReasonState = curTotalState.reasonState;
                          const oldSelf = $$this.self(curReasonState, oldComponent.retainedProps);
                          const nextReasonState = Curry._1(newComponent.willReceiveProps, oldSelf);
                          if (nextReasonState !== curTotalState) {
                            return {
                                    reasonState: nextReasonState
                                  };
                          } else {
                            return curTotalState;
                          }
                        }), null);
                }),
              shouldComponentUpdate: (function (nextJsProps, nextState, param) {
                  let $$this = this ;
                  const thisJs = this;
                  const curJsProps = thisJs.props;
                  const oldConvertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                  const newConvertedReasonProps = nextJsProps === curJsProps ? oldConvertedReasonProps : convertPropsIfTheyreFromJs(nextJsProps, thisJs.jsPropsToReason, debugName);
                  const newComponent = newConvertedReasonProps._0;
                  const nextReasonState = nextState.reasonState;
                  const newSelf = $$this.self(nextReasonState, newComponent.retainedProps);
                  if (newComponent.shouldUpdate === anyToTrue) {
                    return true;
                  }
                  const curState = thisJs.state;
                  const curReasonState = curState.reasonState;
                  const oldSelf_handle = newSelf.handle;
                  const oldSelf_retainedProps = oldConvertedReasonProps._0.retainedProps;
                  const oldSelf_send = newSelf.send;
                  const oldSelf_onUnmount = newSelf.onUnmount;
                  const oldSelf = {
                    handle: oldSelf_handle,
                    state: curReasonState,
                    retainedProps: oldSelf_retainedProps,
                    send: oldSelf_send,
                    onUnmount: oldSelf_onUnmount
                  };
                  return Curry._1(newComponent.shouldUpdate, {
                              oldSelf: oldSelf,
                              newSelf: newSelf
                            });
                }),
              onUnmountMethod: (function (subscription) {
                  let $$this = this ;
                  const subs = $$this.subscriptions;
                  if (subs !== null) {
                    subs.push(subscription);
                  } else {
                    $$this.subscriptions = [subscription];
                  }
                }),
              handleMethod: (function (callback) {
                  let $$this = this ;
                  const thisJs = this;
                  return function (callbackPayload) {
                    const curState = thisJs.state;
                    const curReasonState = curState.reasonState;
                    const convertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                    Curry._2(callback, callbackPayload, $$this.self(curReasonState, convertedReasonProps._0.retainedProps));
                  };
                }),
              sendMethod: (function (action) {
                  let $$this = this ;
                  const thisJs = this;
                  const convertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                  const component = convertedReasonProps._0;
                  if (component.reducer === reducerDefault) {
                    return ;
                  }
                  const sideEffects = {
                    contents: (function (prim) {
                        
                      })
                  };
                  const partialStateApplication = Curry._1(component.reducer, action);
                  thisJs.setState((function (curTotalState, param) {
                          const curReasonState = curTotalState.reasonState;
                          const reasonStateUpdate = Curry._1(partialStateApplication, curReasonState);
                          if (reasonStateUpdate === /* NoUpdate */0) {
                            return null;
                          }
                          let nextTotalState;
                          if (typeof reasonStateUpdate === "number") {
                            nextTotalState = curTotalState;
                          } else {
                            switch (reasonStateUpdate.TAG | 0) {
                              case /* Update */0 :
                                  nextTotalState = {
                                    reasonState: reasonStateUpdate._0
                                  };
                                  break;
                              case /* SideEffects */1 :
                                  sideEffects.contents = reasonStateUpdate._0;
                                  nextTotalState = curTotalState;
                                  break;
                              case /* UpdateWithSideEffects */2 :
                                  sideEffects.contents = reasonStateUpdate._1;
                                  nextTotalState = {
                                    reasonState: reasonStateUpdate._0
                                  };
                                  break;
                              
                            }
                          }
                          if (nextTotalState !== curTotalState) {
                            return nextTotalState;
                          } else {
                            return null;
                          }
                        }), $$this.handleMethod(function (param, self) {
                            Curry._1(sideEffects.contents, self);
                          }));
                }),
              render: (function () {
                  let $$this = this ;
                  const thisJs = this;
                  const convertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                  const created = convertedReasonProps._0;
                  const curState = thisJs.state;
                  const curReasonState = curState.reasonState;
                  return Curry._1(created.render, $$this.self(curReasonState, created.retainedProps));
                })
            });
}

function basicComponent(debugName) {
  return {
          debugName: debugName,
          reactClassInternal: createClass(debugName),
          handedOffState: {
            contents: undefined
          },
          willReceiveProps: willReceivePropsDefault,
          didMount: anyToUnit,
          didUpdate: anyToUnit,
          willUnmount: anyToUnit,
          willUpdate: anyToUnit,
          shouldUpdate: anyToTrue,
          render: renderDefault,
          initialState: initialStateDefault,
          retainedProps: undefined,
          reducer: reducerDefault,
          jsElementWrapped: undefined
        };
}

const statelessComponent = basicComponent;

const statelessComponentWithRetainedProps = basicComponent;

const reducerComponent = basicComponent;

const reducerComponentWithRetainedProps = basicComponent;

function element(keyOpt, refOpt, component) {
  const key = keyOpt !== undefined ? keyOpt : undefined;
  const ref = refOpt !== undefined ? refOpt : undefined;
  const element$1 = /* Element */{
    _0: component
  };
  const jsElementWrapped = component.jsElementWrapped;
  if (jsElementWrapped !== undefined) {
    return Curry._2(Caml_option.valFromOption(jsElementWrapped), key, ref);
  } else {
    return React.createElement(component.reactClassInternal, {
                key: key,
                ref: ref,
                reasonProps: element$1
              });
  }
}

function wrapReasonForJs(component, jsPropsToReason) {
  const uncurriedJsPropsToReason = Curry.__1(jsPropsToReason);
  component.reactClassInternal.prototype.jsPropsToReason = uncurriedJsPropsToReason;
  return component.reactClassInternal;
}

const dummyInteropComponent = basicComponent("interop");

function wrapJsForReason(reactClass, props, children) {
  const jsElementWrapped = (function (param, param$1) {
      const props$1 = Object.assign(Object.assign({}, props), {
            ref: param$1,
            key: param
          });
      const varargs = [
          reactClass,
          props$1
        ].concat(children);
      return React.createElement.apply(null, varargs);
    });
  return {
          debugName: dummyInteropComponent.debugName,
          reactClassInternal: dummyInteropComponent.reactClassInternal,
          handedOffState: dummyInteropComponent.handedOffState,
          willReceiveProps: dummyInteropComponent.willReceiveProps,
          didMount: dummyInteropComponent.didMount,
          didUpdate: dummyInteropComponent.didUpdate,
          willUnmount: dummyInteropComponent.willUnmount,
          willUpdate: dummyInteropComponent.willUpdate,
          shouldUpdate: dummyInteropComponent.shouldUpdate,
          render: dummyInteropComponent.render,
          initialState: dummyInteropComponent.initialState,
          retainedProps: dummyInteropComponent.retainedProps,
          reducer: dummyInteropComponent.reducer,
          jsElementWrapped: jsElementWrapped
        };
}

exports.statelessComponent = statelessComponent;
exports.statelessComponentWithRetainedProps = statelessComponentWithRetainedProps;
exports.reducerComponent = reducerComponent;
exports.reducerComponentWithRetainedProps = reducerComponentWithRetainedProps;
exports.element = element;
exports.wrapReasonForJs = wrapReasonForJs;
exports.createDomElement = createDomElement;
exports.wrapJsForReason = wrapJsForReason;
/* dummyInteropComponent Not a pure module */

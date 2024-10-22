function e(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r={exports:{}},i={},o={exports:{}},s={},a=Symbol.for("react.element"),l=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,x={};function E(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||b}function k(){}function _(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||b}E.prototype.isReactComponent={},E.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},E.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=E.prototype;var S=_.prototype=new k;S.constructor=_,w(S,E.prototype),S.isPureReactComponent=!0;var T=Array.isArray,C=Object.prototype.hasOwnProperty,O={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,n){var r,i={},o=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)C.call(t,r)&&!P.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:a,type:e,key:o,ref:s,props:i,_owner:O.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g;function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function M(e,t,n,r,i){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var s=!1;if(null===e)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case a:case l:s=!0}}if(s)return i=i(s=e),e=""===r?"."+L(s,0):r,T(i)?(n="",null!=e&&(n=e.replace(N,"$&/")+"/"),M(i,t,n,"",(function(e){return e}))):null!=i&&(I(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=""===r?".":r+":",T(e))for(var u=0;u<e.length;u++){var c=r+L(o=e[u],u);s+=M(o,t,n,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(o=e.next()).done;)s+=M(o=o.value,t,n,c=r+L(o,u++),i);else if("object"===o)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function R(e,t,n){if(null==e)return e;var r=[],i=0;return M(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function j(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},F={transition:null},V={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:F,ReactCurrentOwner:O};function U(){throw Error("act(...) is not supported in production builds of React.")}s.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!I(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},s.Component=E,s.Fragment=u,s.Profiler=d,s.PureComponent=_,s.StrictMode=c,s.Suspense=m,s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,s.act=U,s.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=w({},e.props),i=e.key,o=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,s=O.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)C.call(t,u)&&!P.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:a,type:e.type,key:i,ref:o,props:r,_owner:s}},s.createContext=function(e){return(e={$$typeof:f,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:h,_context:e},e.Consumer=e},s.createElement=A,s.createFactory=function(e){var t=A.bind(null,e);return t.type=e,t},s.createRef=function(){return{current:null}},s.forwardRef=function(e){return{$$typeof:p,render:e}},s.isValidElement=I,s.lazy=function(e){return{$$typeof:v,_payload:{_status:-1,_result:e},_init:j}},s.memo=function(e,t){return{$$typeof:g,type:e,compare:void 0===t?null:t}},s.startTransition=function(e){var t=F.transition;F.transition={};try{e()}finally{F.transition=t}},s.unstable_act=U,s.useCallback=function(e,t){return D.current.useCallback(e,t)},s.useContext=function(e){return D.current.useContext(e)},s.useDebugValue=function(){},s.useDeferredValue=function(e){return D.current.useDeferredValue(e)},s.useEffect=function(e,t){return D.current.useEffect(e,t)},s.useId=function(){return D.current.useId()},s.useImperativeHandle=function(e,t,n){return D.current.useImperativeHandle(e,t,n)},s.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},s.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},s.useMemo=function(e,t){return D.current.useMemo(e,t)},s.useReducer=function(e,t,n){return D.current.useReducer(e,t,n)},s.useRef=function(e){return D.current.useRef(e)},s.useState=function(e){return D.current.useState(e)},s.useSyncExternalStore=function(e,t,n){return D.current.useSyncExternalStore(e,t,n)},s.useTransition=function(){return D.current.useTransition()},s.version="18.3.1",o.exports=s;var z=o.exports;const B=n(z),q=e({__proto__:null,default:B},[z]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H=z,$=Symbol.for("react.element"),K=Symbol.for("react.fragment"),W=Object.prototype.hasOwnProperty,G=H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y={key:!0,ref:!0,__self:!0,__source:!0};function Q(e,t,n){var r,i={},o=null,s=null;for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(s=t.ref),t)W.call(t,r)&&!Y.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:$,type:e,key:o,ref:s,props:i,_owner:G.current}}i.Fragment=K,i.jsx=Q,i.jsxs=Q,r.exports=i;var X=r.exports,J={exports:{}},Z={},ee={exports:{}},te={};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<i(o,t)))break e;e[r]=t,e[n]=o,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,s=o>>>1;r<s;){var a=2*(r+1)-1,l=e[a],u=a+1,c=e[u];if(0>i(l,n))u<o&&0>i(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[a]=n,r=a);else{if(!(u<o&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,h=3,f=!1,p=!1,m=!1,g="function"==typeof setTimeout?setTimeout:null,v="function"==typeof clearTimeout?clearTimeout:null,y="undefined"!=typeof setImmediate?setImmediate:null;function b(e){for(var i=n(u);null!==i;){if(null===i.callback)r(u);else{if(!(i.startTime<=e))break;r(u),i.sortIndex=i.expirationTime,t(l,i)}i=n(u)}}function w(e){if(m=!1,b(e),!p)if(null!==n(l))p=!0,N(x);else{var t=n(u);null!==t&&L(w,t.startTime-e)}}function x(t,i){p=!1,m&&(m=!1,v(S),S=-1),f=!0;var o=h;try{for(b(i),d=n(l);null!==d&&(!(d.expirationTime>i)||t&&!O());){var s=d.callback;if("function"==typeof s){d.callback=null,h=d.priorityLevel;var a=s(d.expirationTime<=i);i=e.unstable_now(),"function"==typeof a?d.callback=a:d===n(l)&&r(l),b(i)}else r(l);d=n(l)}if(null!==d)var c=!0;else{var g=n(u);null!==g&&L(w,g.startTime-i),c=!1}return c}finally{d=null,h=o,f=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var E,k=!1,_=null,S=-1,T=5,C=-1;function O(){return!(e.unstable_now()-C<T)}function P(){if(null!==_){var t=e.unstable_now();C=t;var n=!0;try{n=_(!0,t)}finally{n?E():(k=!1,_=null)}}else k=!1}if("function"==typeof y)E=function(){y(P)};else if("undefined"!=typeof MessageChannel){var A=new MessageChannel,I=A.port2;A.port1.onmessage=P,E=function(){I.postMessage(null)}}else E=function(){g(P,0)};function N(e){_=e,k||(k=!0,E())}function L(t,n){S=g((function(){t(e.unstable_now())}),n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){p||f||(p=!0,N(x))},e.unstable_forceFrameRate=function(e){0>e||125<e||(T=0<e?Math.floor(1e3/e):5)},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},e.unstable_scheduleCallback=function(r,i,o){var s=e.unstable_now();switch("object"==typeof o&&null!==o?o="number"==typeof(o=o.delay)&&0<o?s+o:s:o=s,r){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return r={id:c++,callback:i,priorityLevel:r,startTime:o,expirationTime:a=o+a,sortIndex:-1},o>s?(r.sortIndex=o,t(u,r),null===n(l)&&r===n(u)&&(m?(v(S),S=-1):m=!0,L(w,o-s))):(r.sortIndex=a,t(l,r),p||f||(p=!0,N(x))),r},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}}(te),ee.exports=te;var ne=ee.exports,re=z,ie=ne;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function oe(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var se=new Set,ae={};function le(e,t){ue(e,t),ue(e+"Capture",t)}function ue(e,t){for(ae[e]=t,e=0;e<t.length;e++)se.add(t[e])}var ce=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),de=Object.prototype.hasOwnProperty,he=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fe={},pe={};function me(e,t,n,r,i,o,s){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){ge[e]=new me(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];ge[t]=new me(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){ge[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){ge[e]=new me(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){ge[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){ge[e]=new me(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){ge[e]=new me(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){ge[e]=new me(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){ge[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)}));var ve=/[\-:]([a-z])/g;function ye(e){return e[1].toUpperCase()}function be(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!de.call(pe,e)||!de.call(fe,e)&&(he.test(e)?pe[e]=!0:(fe[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(ve,ye);ge[t]=new me(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(ve,ye);ge[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(ve,ye);ge[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){ge[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)})),ge.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){ge[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)}));var we=re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xe=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),ke=Symbol.for("react.fragment"),_e=Symbol.for("react.strict_mode"),Se=Symbol.for("react.profiler"),Te=Symbol.for("react.provider"),Ce=Symbol.for("react.context"),Oe=Symbol.for("react.forward_ref"),Pe=Symbol.for("react.suspense"),Ae=Symbol.for("react.suspense_list"),Ie=Symbol.for("react.memo"),Ne=Symbol.for("react.lazy"),Le=Symbol.for("react.offscreen"),Me=Symbol.iterator;function Re(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Me&&e[Me]||e["@@iterator"])?e:null}var je,De=Object.assign;function Fe(e){if(void 0===je)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);je=t&&t[1]||""}return"\n"+je+e}var Ve=!1;function Ue(e,t){if(!e||Ve)return"";Ve=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"==typeof u.stack){for(var i=u.stack.split("\n"),o=r.stack.split("\n"),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(1!==s||1!==a)do{if(s--,0>--a||i[s]!==o[a]){var l="\n"+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=s&&0<=a);break}}}finally{Ve=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fe(e):""}function ze(e){switch(e.tag){case 5:return Fe(e.type);case 16:return Fe("Lazy");case 13:return Fe("Suspense");case 19:return Fe("SuspenseList");case 0:case 2:case 15:return e=Ue(e.type,!1);case 11:return e=Ue(e.type.render,!1);case 1:return e=Ue(e.type,!0);default:return""}}function Be(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case ke:return"Fragment";case Ee:return"Portal";case Se:return"Profiler";case _e:return"StrictMode";case Pe:return"Suspense";case Ae:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case Ce:return(e.displayName||"Context")+".Consumer";case Te:return(e._context.displayName||"Context")+".Provider";case Oe:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case Ie:return null!==(t=e.displayName||null)?t:Be(e.type)||"Memo";case Ne:t=e._payload,e=e._init;try{return Be(e(t))}catch(n){}}return null}function qe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Be(t);case 8:return t===_e?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function He(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function $e(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Ke(e){e._valueTracker||(e._valueTracker=function(e){var t=$e(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function We(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$e(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Ge(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Ye(e,t){var n=t.checked;return De({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Qe(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=He(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Xe(e,t){null!=(t=t.checked)&&be(e,"checked",t,!1)}function Je(e,t){Xe(e,t);var n=He(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?et(e,t.type,n):t.hasOwnProperty("defaultValue")&&et(e,t.type,He(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Ze(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function et(e,t,n){"number"===t&&Ge(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var tt=Array.isArray;function nt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+He(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function rt(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(oe(91));return De({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function it(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(oe(92));if(tt(n)){if(1<n.length)throw Error(oe(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:He(n)}}function ot(e,t){var n=He(t.value),r=He(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function st(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function at(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?at(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ut,ct,dt=(ct=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ut=ut||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ut.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ct(e,t)}))}:ct);function ht(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var ft={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pt=["Webkit","ms","Moz","O"];function mt(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||ft.hasOwnProperty(e)&&ft[e]?(""+t).trim():t+"px"}function gt(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=mt(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(ft).forEach((function(e){pt.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ft[t]=ft[e]}))}));var vt=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yt(e,t){if(t){if(vt[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(oe(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(oe(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(oe(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(oe(62))}}function bt(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wt=null;function xt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Et=null,kt=null,_t=null;function St(e){if(e=wo(e)){if("function"!=typeof Et)throw Error(oe(280));var t=e.stateNode;t&&(t=Eo(t),Et(e.stateNode,e.type,t))}}function Tt(e){kt?_t?_t.push(e):_t=[e]:kt=e}function Ct(){if(kt){var e=kt,t=_t;if(_t=kt=null,St(e),t)for(e=0;e<t.length;e++)St(t[e])}}function Ot(e,t){return e(t)}function Pt(){}var At=!1;function It(e,t,n){if(At)return e(t,n);At=!0;try{return Ot(e,t,n)}finally{At=!1,(null!==kt||null!==_t)&&(Pt(),Ct())}}function Nt(e,t){var n=e.stateNode;if(null===n)return null;var r=Eo(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(oe(231,t,typeof n));return n}var Lt=!1;if(ce)try{var Mt={};Object.defineProperty(Mt,"passive",{get:function(){Lt=!0}}),window.addEventListener("test",Mt,Mt),window.removeEventListener("test",Mt,Mt)}catch(ct){Lt=!1}function Rt(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var jt=!1,Dt=null,Ft=!1,Vt=null,Ut={onError:function(e){jt=!0,Dt=e}};function zt(e,t,n,r,i,o,s,a,l){jt=!1,Dt=null,Rt.apply(Ut,arguments)}function Bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function qt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ht(e){if(Bt(e)!==e)throw Error(oe(188))}function $t(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Bt(e)))throw Error(oe(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ht(i),e;if(o===r)return Ht(i),t;o=o.sibling}throw Error(oe(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(oe(189))}}if(n.alternate!==r)throw Error(oe(190))}if(3!==n.tag)throw Error(oe(188));return n.stateNode.current===n?e:t}(e))?Kt(e):null}function Kt(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Kt(e);if(null!==t)return t;e=e.sibling}return null}var Wt=ie.unstable_scheduleCallback,Gt=ie.unstable_cancelCallback,Yt=ie.unstable_shouldYield,Qt=ie.unstable_requestPaint,Xt=ie.unstable_now,Jt=ie.unstable_getCurrentPriorityLevel,Zt=ie.unstable_ImmediatePriority,en=ie.unstable_UserBlockingPriority,tn=ie.unstable_NormalPriority,nn=ie.unstable_LowPriority,rn=ie.unstable_IdlePriority,on=null,sn=null;var an=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(ln(e)/un|0)|0},ln=Math.log,un=Math.LN2;var cn=64,dn=4194304;function hn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fn(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=268435455&n;if(0!==s){var a=s&~i;0!==a?r=hn(a):0!==(o&=s)&&(r=hn(o))}else 0!==(s=n&~i)?r=hn(s):0!==o&&(r=hn(o));if(0===r)return 0;if(0!==t&&t!==r&&!(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&4194240&o))return t;if(4&r&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-an(t)),r|=e[n],t&=~i;return r}function pn(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mn(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gn(){var e=cn;return!(4194240&(cn<<=1))&&(cn=64),e}function vn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yn(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-an(t)]=n}function bn(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-an(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var wn=0;function xn(e){return 1<(e&=-e)?4<e?268435455&e?16:536870912:4:1}var En,kn,_n,Sn,Tn,Cn=!1,On=[],Pn=null,An=null,In=null,Nn=new Map,Ln=new Map,Mn=[],Rn="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jn(e,t){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":Nn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ln.delete(t.pointerId)}}function Dn(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=wo(t))&&kn(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Fn(e){var t=bo(e.target);if(null!==t){var n=Bt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=qt(n)))return e.blockedOn=t,void Tn(e.priority,(function(){_n(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Vn(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=wo(n))&&kn(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);wt=r,n.target.dispatchEvent(r),wt=null,t.shift()}return!0}function Un(e,t,n){Vn(e)&&n.delete(t)}function zn(){Cn=!1,null!==Pn&&Vn(Pn)&&(Pn=null),null!==An&&Vn(An)&&(An=null),null!==In&&Vn(In)&&(In=null),Nn.forEach(Un),Ln.forEach(Un)}function Bn(e,t){e.blockedOn===t&&(e.blockedOn=null,Cn||(Cn=!0,ie.unstable_scheduleCallback(ie.unstable_NormalPriority,zn)))}function qn(e){function t(t){return Bn(t,e)}if(0<On.length){Bn(On[0],e);for(var n=1;n<On.length;n++){var r=On[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Pn&&Bn(Pn,e),null!==An&&Bn(An,e),null!==In&&Bn(In,e),Nn.forEach(t),Ln.forEach(t),n=0;n<Mn.length;n++)(r=Mn[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Mn.length&&null===(n=Mn[0]).blockedOn;)Fn(n),null===n.blockedOn&&Mn.shift()}var Hn=we.ReactCurrentBatchConfig,$n=!0;function Kn(e,t,n,r){var i=wn,o=Hn.transition;Hn.transition=null;try{wn=1,Gn(e,t,n,r)}finally{wn=i,Hn.transition=o}}function Wn(e,t,n,r){var i=wn,o=Hn.transition;Hn.transition=null;try{wn=4,Gn(e,t,n,r)}finally{wn=i,Hn.transition=o}}function Gn(e,t,n,r){if($n){var i=Qn(e,t,n,r);if(null===i)Hi(e,t,r,Yn,n),jn(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Pn=Dn(Pn,e,t,n,r,i),!0;case"dragenter":return An=Dn(An,e,t,n,r,i),!0;case"mouseover":return In=Dn(In,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Nn.set(o,Dn(Nn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ln.set(o,Dn(Ln.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(jn(e,r),4&t&&-1<Rn.indexOf(e)){for(;null!==i;){var o=wo(i);if(null!==o&&En(o),null===(o=Qn(e,t,n,r))&&Hi(e,t,r,Yn,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else Hi(e,t,r,null,n)}}var Yn=null;function Qn(e,t,n,r){if(Yn=null,null!==(e=bo(e=xt(r))))if(null===(t=Bt(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=qt(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yn=e,null}function Xn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jt()){case Zt:return 1;case en:return 4;case tn:case nn:return 16;case rn:return 536870912;default:return 16}default:return 16}}var Jn=null,Zn=null,er=null;function tr(){if(er)return er;var e,t,n=Zn,r=n.length,i="value"in Jn?Jn.value:Jn.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var s=r-e;for(t=1;t<=s&&n[r-t]===i[o-t];t++);return er=i.slice(e,1<t?1-t:void 0)}function nr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function rr(){return!0}function ir(){return!1}function or(e){function t(t,n,r,i,o){for(var s in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?rr:ir,this.isPropagationStopped=ir,this}return De(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),t}var sr,ar,lr,ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cr=or(ur),dr=De({},ur,{view:0,detail:0}),hr=or(dr),fr=De({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&"mousemove"===e.type?(sr=e.screenX-lr.screenX,ar=e.screenY-lr.screenY):ar=sr=0,lr=e),sr)},movementY:function(e){return"movementY"in e?e.movementY:ar}}),pr=or(fr),mr=or(De({},fr,{dataTransfer:0})),gr=or(De({},dr,{relatedTarget:0})),vr=or(De({},ur,{animationName:0,elapsedTime:0,pseudoElement:0})),yr=De({},ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),br=or(yr),wr=or(De({},ur,{data:0})),xr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Er={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _r(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kr[e])&&!!t[e]}function Sr(){return _r}var Tr=De({},dr,{key:function(e){if(e.key){var t=xr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=nr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Er[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sr,charCode:function(e){return"keypress"===e.type?nr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?nr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Cr=or(Tr),Or=or(De({},fr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pr=or(De({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sr})),Ar=or(De({},ur,{propertyName:0,elapsedTime:0,pseudoElement:0})),Ir=De({},fr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nr=or(Ir),Lr=[9,13,27,32],Mr=ce&&"CompositionEvent"in window,Rr=null;ce&&"documentMode"in document&&(Rr=document.documentMode);var jr=ce&&"TextEvent"in window&&!Rr,Dr=ce&&(!Mr||Rr&&8<Rr&&11>=Rr),Fr=String.fromCharCode(32),Vr=!1;function Ur(e,t){switch(e){case"keyup":return-1!==Lr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zr(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Br=!1;var qr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!qr[e.type]:"textarea"===t}function $r(e,t,n,r){Tt(r),0<(t=Ki(t,"onChange")).length&&(n=new cr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kr=null,Wr=null;function Gr(e){Fi(e,0)}function Yr(e){if(We(xo(e)))return e}function Qr(e,t){if("change"===e)return t}var Xr=!1;if(ce){var Jr;if(ce){var Zr="oninput"in document;if(!Zr){var ei=document.createElement("div");ei.setAttribute("oninput","return;"),Zr="function"==typeof ei.oninput}Jr=Zr}else Jr=!1;Xr=Jr&&(!document.documentMode||9<document.documentMode)}function ti(){Kr&&(Kr.detachEvent("onpropertychange",ni),Wr=Kr=null)}function ni(e){if("value"===e.propertyName&&Yr(Wr)){var t=[];$r(t,Wr,e,xt(e)),It(Gr,t)}}function ri(e,t,n){"focusin"===e?(ti(),Wr=n,(Kr=t).attachEvent("onpropertychange",ni)):"focusout"===e&&ti()}function ii(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Yr(Wr)}function oi(e,t){if("click"===e)return Yr(t)}function si(e,t){if("input"===e||"change"===e)return Yr(t)}var ai="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function li(e,t){if(ai(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!de.call(t,i)||!ai(e[i],t[i]))return!1}return!0}function ui(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ci(e,t){var n,r=ui(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ui(r)}}function di(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?di(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function hi(){for(var e=window,t=Ge();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Ge((e=t.contentWindow).document)}return t}function fi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function pi(e){var t=hi(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&di(n.ownerDocument.documentElement,n)){if(null!==r&&fi(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ci(n,o);var s=ci(n,r);i&&s&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mi=ce&&"documentMode"in document&&11>=document.documentMode,gi=null,vi=null,yi=null,bi=!1;function wi(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;bi||null==gi||gi!==Ge(r)||("selectionStart"in(r=gi)&&fi(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yi&&li(yi,r)||(yi=r,0<(r=Ki(vi,"onSelect")).length&&(t=new cr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gi)))}function xi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ei={animationend:xi("Animation","AnimationEnd"),animationiteration:xi("Animation","AnimationIteration"),animationstart:xi("Animation","AnimationStart"),transitionend:xi("Transition","TransitionEnd")},ki={},_i={};function Si(e){if(ki[e])return ki[e];if(!Ei[e])return e;var t,n=Ei[e];for(t in n)if(n.hasOwnProperty(t)&&t in _i)return ki[e]=n[t];return e}ce&&(_i=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);var Ti=Si("animationend"),Ci=Si("animationiteration"),Oi=Si("animationstart"),Pi=Si("transitionend"),Ai=new Map,Ii="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ni(e,t){Ai.set(e,t),le(t,[e])}for(var Li=0;Li<Ii.length;Li++){var Mi=Ii[Li];Ni(Mi.toLowerCase(),"on"+(Mi[0].toUpperCase()+Mi.slice(1)))}Ni(Ti,"onAnimationEnd"),Ni(Ci,"onAnimationIteration"),Ni(Oi,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(Pi,"onTransitionEnd"),ue("onMouseEnter",["mouseout","mouseover"]),ue("onMouseLeave",["mouseout","mouseover"]),ue("onPointerEnter",["pointerout","pointerover"]),ue("onPointerLeave",["pointerout","pointerover"]),le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),le("onBeforeInput",["compositionend","keypress","textInput","paste"]),le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ji=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ri));function Di(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,o,s,a,l){if(zt.apply(this,arguments),jt){if(!jt)throw Error(oe(198));var u=Dt;jt=!1,Dt=null,Ft||(Ft=!0,Vt=u)}}(r,t,void 0,e),e.currentTarget=null}function Fi(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Di(i,a,u),o=l}else for(s=0;s<r.length;s++){if(l=(a=r[s]).instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Di(i,a,u),o=l}}}if(Ft)throw e=Vt,Ft=!1,Vt=null,e}function Vi(e,t){var n=t[go];void 0===n&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(qi(t,e,2,!1),n.add(r))}function Ui(e,t,n){var r=0;t&&(r|=4),qi(n,e,r,t)}var zi="_reactListening"+Math.random().toString(36).slice(2);function Bi(e){if(!e[zi]){e[zi]=!0,se.forEach((function(t){"selectionchange"!==t&&(ji.has(t)||Ui(t,!1,e),Ui(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[zi]||(t[zi]=!0,Ui("selectionchange",!1,t))}}function qi(e,t,n,r){switch(Xn(t)){case 1:var i=Kn;break;case 4:i=Wn;break;default:i=Gn}n=i.bind(null,t,n,e),i=void 0,!Lt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hi(e,t,n,r,i){var o=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var s=r.tag;if(3===s||4===s){var a=r.stateNode.containerInfo;if(a===i||8===a.nodeType&&a.parentNode===i)break;if(4===s)for(s=r.return;null!==s;){var l=s.tag;if((3===l||4===l)&&((l=s.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;s=s.return}for(;null!==a;){if(null===(s=bo(a)))return;if(5===(l=s.tag)||6===l){r=o=s;continue e}a=a.parentNode}}r=r.return}It((function(){var r=o,i=xt(n),s=[];e:{var a=Ai.get(e);if(void 0!==a){var l=cr,u=e;switch(e){case"keypress":if(0===nr(n))break e;case"keydown":case"keyup":l=Cr;break;case"focusin":u="focus",l=gr;break;case"focusout":u="blur",l=gr;break;case"beforeblur":case"afterblur":l=gr;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=pr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Pr;break;case Ti:case Ci:case Oi:l=vr;break;case Pi:l=Ar;break;case"scroll":l=hr;break;case"wheel":l=Nr;break;case"copy":case"cut":case"paste":l=br;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Or}var c=!!(4&t),d=!c&&"scroll"===e,h=c?null!==a?a+"Capture":null:a;c=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==h&&(null!=(m=Nt(p,h))&&c.push($i(p,m,f)))),d)break;p=p.return}0<c.length&&(a=new l(a,u,null,n,i),s.push({event:a,listeners:c}))}}if(!(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(a="mouseover"===e||"pointerover"===e)||n===wt||!(u=n.relatedTarget||n.fromElement)||!bo(u)&&!u[mo])&&(l||a)&&(a=i.window===i?i:(a=i.ownerDocument)?a.defaultView||a.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?bo(u):null)&&(u!==(d=Bt(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=pr,m="onMouseLeave",h="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=Or,m="onPointerLeave",h="onPointerEnter",p="pointer"),d=null==l?a:xo(l),f=null==u?a:xo(u),(a=new c(m,p+"leave",l,n,i)).target=d,a.relatedTarget=f,m=null,bo(i)===r&&((c=new c(h,p+"enter",u,n,i)).target=f,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(h=u,p=0,f=c=l;f;f=Wi(f))p++;for(f=0,m=h;m;m=Wi(m))f++;for(;0<p-f;)c=Wi(c),p--;for(;0<f-p;)h=Wi(h),f--;for(;p--;){if(c===h||null!==h&&c===h.alternate)break e;c=Wi(c),h=Wi(h)}c=null}else c=null;null!==l&&Gi(s,a,l,c,!1),null!==u&&null!==d&&Gi(s,d,u,c,!0)}if("select"===(l=(a=r?xo(r):window).nodeName&&a.nodeName.toLowerCase())||"input"===l&&"file"===a.type)var g=Qr;else if(Hr(a))if(Xr)g=si;else{g=ii;var v=ri}else(l=a.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(g=oi);switch(g&&(g=g(e,r))?$r(s,g,n,i):(v&&v(e,a,r),"focusout"===e&&(v=a._wrapperState)&&v.controlled&&"number"===a.type&&et(a,"number",a.value)),v=r?xo(r):window,e){case"focusin":(Hr(v)||"true"===v.contentEditable)&&(gi=v,vi=r,yi=null);break;case"focusout":yi=vi=gi=null;break;case"mousedown":bi=!0;break;case"contextmenu":case"mouseup":case"dragend":bi=!1,wi(s,n,i);break;case"selectionchange":if(mi)break;case"keydown":case"keyup":wi(s,n,i)}var y;if(Mr)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Br?Ur(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Dr&&"ko"!==n.locale&&(Br||"onCompositionStart"!==b?"onCompositionEnd"===b&&Br&&(y=tr()):(Zn="value"in(Jn=i)?Jn.value:Jn.textContent,Br=!0)),0<(v=Ki(r,b)).length&&(b=new wr(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:null!==(y=zr(n))&&(b.data=y))),(y=jr?function(e,t){switch(e){case"compositionend":return zr(t);case"keypress":return 32!==t.which?null:(Vr=!0,Fr);case"textInput":return(e=t.data)===Fr&&Vr?null:e;default:return null}}(e,n):function(e,t){if(Br)return"compositionend"===e||!Mr&&Ur(e,t)?(e=tr(),er=Zn=Jn=null,Br=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dr&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Ki(r,"onBeforeInput")).length&&(i=new wr("onBeforeInput","beforeinput",null,n,i),s.push({event:i,listeners:r}),i.data=y))}Fi(s,t)}))}function $i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ki(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=Nt(e,n))&&r.unshift($i(e,o,i)),null!=(o=Nt(e,t))&&r.push($i(e,o,i))),e=e.return}return r}function Wi(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Gi(e,t,n,r,i){for(var o=t._reactName,s=[];null!==n&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(null!==l&&l===r)break;5===a.tag&&null!==u&&(a=u,i?null!=(l=Nt(n,o))&&s.unshift($i(n,l,a)):i||null!=(l=Nt(n,o))&&s.push($i(n,l,a))),n=n.return}0!==s.length&&e.push({event:t,listeners:s})}var Yi=/\r\n?/g,Qi=/\u0000|\uFFFD/g;function Xi(e){return("string"==typeof e?e:""+e).replace(Yi,"\n").replace(Qi,"")}function Ji(e,t,n){if(t=Xi(t),Xi(e)!==t&&n)throw Error(oe(425))}function Zi(){}var eo=null,to=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ro="function"==typeof setTimeout?setTimeout:void 0,io="function"==typeof clearTimeout?clearTimeout:void 0,oo="function"==typeof Promise?Promise:void 0,so="function"==typeof queueMicrotask?queueMicrotask:void 0!==oo?function(e){return oo.resolve(null).then(e).catch(ao)}:ro;function ao(e){setTimeout((function(){throw e}))}function lo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void qn(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);qn(t)}function uo(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function co(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var ho=Math.random().toString(36).slice(2),fo="__reactFiber$"+ho,po="__reactProps$"+ho,mo="__reactContainer$"+ho,go="__reactEvents$"+ho,vo="__reactListeners$"+ho,yo="__reactHandles$"+ho;function bo(e){var t=e[fo];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mo]||n[fo]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=co(e);null!==e;){if(n=e[fo])return n;e=co(e)}return t}n=(e=n).parentNode}return null}function wo(e){return!(e=e[fo]||e[mo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(oe(33))}function Eo(e){return e[po]||null}var ko=[],_o=-1;function So(e){return{current:e}}function To(e){0>_o||(e.current=ko[_o],ko[_o]=null,_o--)}function Co(e,t){_o++,ko[_o]=e.current,e.current=t}var Oo={},Po=So(Oo),Ao=So(!1),Io=Oo;function No(e,t){var n=e.type.contextTypes;if(!n)return Oo;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Lo(e){return null!=(e=e.childContextTypes)}function Mo(){To(Ao),To(Po)}function Ro(e,t,n){if(Po.current!==Oo)throw Error(oe(168));Co(Po,t),Co(Ao,n)}function jo(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(oe(108,qe(e)||"Unknown",i));return De({},n,r)}function Do(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Oo,Io=Po.current,Co(Po,e),Co(Ao,Ao.current),!0}function Fo(e,t,n){var r=e.stateNode;if(!r)throw Error(oe(169));n?(e=jo(e,t,Io),r.__reactInternalMemoizedMergedChildContext=e,To(Ao),To(Po),Co(Po,e)):To(Ao),Co(Ao,n)}var Vo=null,Uo=!1,zo=!1;function Bo(e){null===Vo?Vo=[e]:Vo.push(e)}function qo(){if(!zo&&null!==Vo){zo=!0;var e=0,t=wn;try{var n=Vo;for(wn=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Vo=null,Uo=!1}catch(Tq){throw null!==Vo&&(Vo=Vo.slice(e+1)),Wt(Zt,qo),Tq}finally{wn=t,zo=!1}}return null}var Ho=[],$o=0,Ko=null,Wo=0,Go=[],Yo=0,Qo=null,Xo=1,Jo="";function Zo(e,t){Ho[$o++]=Wo,Ho[$o++]=Ko,Ko=e,Wo=t}function es(e,t,n){Go[Yo++]=Xo,Go[Yo++]=Jo,Go[Yo++]=Qo,Qo=e;var r=Xo;e=Jo;var i=32-an(r)-1;r&=~(1<<i),n+=1;var o=32-an(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Xo=1<<32-an(t)+i|n<<i|r,Jo=o+e}else Xo=1<<o|n<<i|r,Jo=e}function ts(e){null!==e.return&&(Zo(e,1),es(e,1,0))}function ns(e){for(;e===Ko;)Ko=Ho[--$o],Ho[$o]=null,Wo=Ho[--$o],Ho[$o]=null;for(;e===Qo;)Qo=Go[--Yo],Go[Yo]=null,Jo=Go[--Yo],Go[Yo]=null,Xo=Go[--Yo],Go[Yo]=null}var rs=null,is=null,os=!1,ss=null;function as(e,t){var n=Ac(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function ls(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,rs=e,is=uo(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,rs=e,is=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Qo?{id:Xo,overflow:Jo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Ac(18,null,null,0)).stateNode=t,n.return=e,e.child=n,rs=e,is=null,!0);default:return!1}}function us(e){return!(!(1&e.mode)||128&e.flags)}function cs(e){if(os){var t=is;if(t){var n=t;if(!ls(e,t)){if(us(e))throw Error(oe(418));t=uo(n.nextSibling);var r=rs;t&&ls(e,t)?as(r,n):(e.flags=-4097&e.flags|2,os=!1,rs=e)}}else{if(us(e))throw Error(oe(418));e.flags=-4097&e.flags|2,os=!1,rs=e}}}function ds(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;rs=e}function hs(e){if(e!==rs)return!1;if(!os)return ds(e),os=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=is)){if(us(e))throw fs(),Error(oe(418));for(;t;)as(e,t),t=uo(t.nextSibling)}if(ds(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(oe(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){is=uo(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}is=null}}else is=rs?uo(e.stateNode.nextSibling):null;return!0}function fs(){for(var e=is;e;)e=uo(e.nextSibling)}function ps(){is=rs=null,os=!1}function ms(e){null===ss?ss=[e]:ss.push(e)}var gs=we.ReactCurrentBatchConfig;function vs(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(oe(309));var r=n.stateNode}if(!r)throw Error(oe(147,e));var i=r,o=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===o?t.ref:((t=function(e){var t=i.refs;null===e?delete t[o]:t[o]=e})._stringRef=o,t)}if("string"!=typeof e)throw Error(oe(284));if(!n._owner)throw Error(oe(290,e))}return e}function ys(e,t){throw e=Object.prototype.toString.call(t),Error(oe(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bs(e){return(0,e._init)(e._payload)}function ws(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Nc(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function a(e,t,n,r){return null===t||6!==t.tag?((t=jc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){var o=n.type;return o===ke?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"==typeof o&&null!==o&&o.$$typeof===Ne&&bs(o)===t.type)?((r=i(t,n.props)).ref=vs(e,t,n),r.return=e,r):((r=Lc(n.type,n.key,n.props,null,e.mode,r)).ref=vs(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Dc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function c(e,t,n,r,o){return null===t||7!==t.tag?((t=Mc(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=jc(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case xe:return(n=Lc(t.type,t.key,t.props,null,e.mode,n)).ref=vs(e,null,t),n.return=e,n;case Ee:return(t=Dc(t,e.mode,n)).return=e,t;case Ne:return d(e,(0,t._init)(t._payload),n)}if(tt(t)||Re(t))return(t=Mc(t,e.mode,n,null)).return=e,t;ys(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:a(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case xe:return n.key===i?l(e,t,n,r):null;case Ee:return n.key===i?u(e,t,n,r):null;case Ne:return h(e,t,(i=n._init)(n._payload),r)}if(tt(n)||Re(n))return null!==i?null:c(e,t,n,r,null);ys(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return a(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case xe:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case Ee:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case Ne:return f(e,t,n,(0,r._init)(r._payload),i)}if(tt(r)||Re(r))return c(t,e=e.get(n)||null,r,i,null);ys(t,r)}return null}return function a(l,u,c,p){if("object"==typeof c&&null!==c&&c.type===ke&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case xe:e:{for(var m=c.key,g=u;null!==g;){if(g.key===m){if((m=c.type)===ke){if(7===g.tag){n(l,g.sibling),(u=i(g,c.props.children)).return=l,l=u;break e}}else if(g.elementType===m||"object"==typeof m&&null!==m&&m.$$typeof===Ne&&bs(m)===g.type){n(l,g.sibling),(u=i(g,c.props)).ref=vs(l,g,c),u.return=l,l=u;break e}n(l,g);break}t(l,g),g=g.sibling}c.type===ke?((u=Mc(c.props.children,l.mode,p,c.key)).return=l,l=u):((p=Lc(c.type,c.key,c.props,null,l.mode,p)).ref=vs(l,u,c),p.return=l,l=p)}return s(l);case Ee:e:{for(g=c.key;null!==u;){if(u.key===g){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(l,u.sibling),(u=i(u,c.children||[])).return=l,l=u;break e}n(l,u);break}t(l,u),u=u.sibling}(u=Dc(c,l.mode,p)).return=l,l=u}return s(l);case Ne:return a(l,u,(g=c._init)(c._payload),p)}if(tt(c))return function(i,s,a,l){for(var u=null,c=null,p=s,m=s=0,g=null;null!==p&&m<a.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var v=h(i,p,a[m],l);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(i,p),s=o(v,s,m),null===c?u=v:c.sibling=v,c=v,p=g}if(m===a.length)return n(i,p),os&&Zo(i,m),u;if(null===p){for(;m<a.length;m++)null!==(p=d(i,a[m],l))&&(s=o(p,s,m),null===c?u=p:c.sibling=p,c=p);return os&&Zo(i,m),u}for(p=r(i,p);m<a.length;m++)null!==(g=f(p,i,m,a[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),s=o(g,s,m),null===c?u=g:c.sibling=g,c=g);return e&&p.forEach((function(e){return t(i,e)})),os&&Zo(i,m),u}(l,u,c,p);if(Re(c))return function(i,s,a,l){var u=Re(a);if("function"!=typeof u)throw Error(oe(150));if(null==(a=u.call(a)))throw Error(oe(151));for(var c=u=null,p=s,m=s=0,g=null,v=a.next();null!==p&&!v.done;m++,v=a.next()){p.index>m?(g=p,p=null):g=p.sibling;var y=h(i,p,v.value,l);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(i,p),s=o(y,s,m),null===c?u=y:c.sibling=y,c=y,p=g}if(v.done)return n(i,p),os&&Zo(i,m),u;if(null===p){for(;!v.done;m++,v=a.next())null!==(v=d(i,v.value,l))&&(s=o(v,s,m),null===c?u=v:c.sibling=v,c=v);return os&&Zo(i,m),u}for(p=r(i,p);!v.done;m++,v=a.next())null!==(v=f(p,i,m,v.value,l))&&(e&&null!==v.alternate&&p.delete(null===v.key?m:v.key),s=o(v,s,m),null===c?u=v:c.sibling=v,c=v);return e&&p.forEach((function(e){return t(i,e)})),os&&Zo(i,m),u}(l,u,c,p);ys(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(l,u.sibling),(u=i(u,c)).return=l,l=u):(n(l,u),(u=jc(c,l.mode,p)).return=l,l=u),s(l)):n(l,u)}}var xs=ws(!0),Es=ws(!1),ks=So(null),_s=null,Ss=null,Ts=null;function Cs(){Ts=Ss=_s=null}function Os(e){var t=ks.current;To(ks),e._currentValue=t}function Ps(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function As(e,t){_s=e,Ts=Ss=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(!!(e.lanes&t)&&(yl=!0),e.firstContext=null)}function Is(e){var t=e._currentValue;if(Ts!==e)if(e={context:e,memoizedValue:t,next:null},null===Ss){if(null===_s)throw Error(oe(308));Ss=e,_s.dependencies={lanes:0,firstContext:e}}else Ss=Ss.next=e;return t}var Ns=null;function Ls(e){null===Ns?Ns=[e]:Ns.push(e)}function Ms(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Ls(t)):(n.next=i.next,i.next=n),t.interleaved=n,Rs(e,r)}function Rs(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var js=!1;function Ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vs(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Us(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,2&Cu){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Rs(e,n)}return null===(i=r.interleaved)?(t.next=t,Ls(r)):(t.next=i.next,i.next=t),r.interleaved=t,Rs(e,n)}function zs(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bn(e,n)}}function Bs(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=s:o=o.next=s,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qs(e,t,n,r){var i=e.updateQueue;js=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(null!==a){i.shared.pending=null;var l=a,u=l.next;l.next=null,null===s?o=u:s.next=u,s=l;var c=e.alternate;null!==c&&((a=(c=c.updateQueue).lastBaseUpdate)!==s&&(null===a?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(null!==o){var d=i.baseState;for(s=0,c=u=l=null,a=o;;){var h=a.lane,f=a.eventTime;if((r&h)===h){null!==c&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,m=a;switch(h=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){d=p.call(f,d,h);break e}d=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(h="function"==typeof(p=m.payload)?p.call(f,d,h):p))break e;d=De({},d,h);break e;case 2:js=!0}}null!==a.callback&&0!==a.lane&&(e.flags|=64,null===(h=i.effects)?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},null===c?(u=c=f,l=d):c=c.next=f,s|=h;if(null===(a=a.next)){if(null===(a=i.shared.pending))break;a=(h=a).next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}if(null===c&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{s|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);Ru|=s,e.lanes=s,e.memoizedState=d}}function Hs(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(oe(191,i));i.call(r)}}}var $s={},Ks=So($s),Ws=So($s),Gs=So($s);function Ys(e){if(e===$s)throw Error(oe(174));return e}function Qs(e,t){switch(Co(Gs,t),Co(Ws,e),Co(Ks,$s),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lt(null,"");break;default:t=lt(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}To(Ks),Co(Ks,t)}function Xs(){To(Ks),To(Ws),To(Gs)}function Js(e){Ys(Gs.current);var t=Ys(Ks.current),n=lt(t,e.type);t!==n&&(Co(Ws,e),Co(Ks,n))}function Zs(e){Ws.current===e&&(To(Ks),To(Ws))}var ea=So(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var ia=we.ReactCurrentDispatcher,oa=we.ReactCurrentBatchConfig,sa=0,aa=null,la=null,ua=null,ca=!1,da=!1,ha=0,fa=0;function pa(){throw Error(oe(321))}function ma(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ai(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,i,o){if(sa=o,aa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=null===e||null===e.memoizedState?Za:el,e=n(r,i),da){o=0;do{if(da=!1,ha=0,25<=o)throw Error(oe(301));o+=1,ua=la=null,t.updateQueue=null,ia.current=tl,e=n(r,i)}while(da)}if(ia.current=Ja,t=null!==la&&null!==la.next,sa=0,ua=la=aa=null,ca=!1,t)throw Error(oe(300));return e}function va(){var e=0!==ha;return ha=0,e}function ya(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ua?aa.memoizedState=ua=e:ua=ua.next=e,ua}function ba(){if(null===la){var e=aa.alternate;e=null!==e?e.memoizedState:null}else e=la.next;var t=null===ua?aa.memoizedState:ua.next;if(null!==t)ua=t,la=e;else{if(null===e)throw Error(oe(310));e={memoizedState:(la=e).memoizedState,baseState:la.baseState,baseQueue:la.baseQueue,queue:la.queue,next:null},null===ua?aa.memoizedState=ua=e:ua=ua.next=e}return ua}function wa(e,t){return"function"==typeof t?t(e):t}function xa(e){var t=ba(),n=t.queue;if(null===n)throw Error(oe(311));n.lastRenderedReducer=e;var r=la,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(null!==i){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((sa&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(a=l=d,s=r):l=l.next=d,aa.lanes|=c,Ru|=c}u=u.next}while(null!==u&&u!==o);null===l?s=r:l.next=a,ai(r,t.memoizedState)||(yl=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{o=i.lane,aa.lanes|=o,Ru|=o,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ea(e){var t=ba(),n=t.queue;if(null===n)throw Error(oe(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{o=e(o,s.action),s=s.next}while(s!==i);ai(o,t.memoizedState)||(yl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ka(){}function _a(e,t){var n=aa,r=ba(),i=t(),o=!ai(r.memoizedState,i);if(o&&(r.memoizedState=i,yl=!0),r=r.queue,ja(Ca.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==ua&&1&ua.memoizedState.tag){if(n.flags|=2048,Ia(9,Ta.bind(null,n,r,i,t),void 0,null),null===Ou)throw Error(oe(349));30&sa||Sa(n,t,i)}return i}function Sa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=aa.updateQueue)?(t={lastEffect:null,stores:null},aa.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ta(e,t,n,r){t.value=n,t.getSnapshot=r,Oa(t)&&Pa(e)}function Ca(e,t,n){return n((function(){Oa(t)&&Pa(e)}))}function Oa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ai(e,n)}catch(r){return!0}}function Pa(e){var t=Rs(e,1);null!==t&&tc(t,e,1,-1)}function Aa(e){var t=ya();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:e},t.queue=e,e=e.dispatch=Ga.bind(null,aa,e),[t.memoizedState,e]}function Ia(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=aa.updateQueue)?(t={lastEffect:null,stores:null},aa.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Na(){return ba().memoizedState}function La(e,t,n,r){var i=ya();aa.flags|=e,i.memoizedState=Ia(1|t,n,void 0,void 0===r?null:r)}function Ma(e,t,n,r){var i=ba();r=void 0===r?null:r;var o=void 0;if(null!==la){var s=la.memoizedState;if(o=s.destroy,null!==r&&ma(r,s.deps))return void(i.memoizedState=Ia(t,n,o,r))}aa.flags|=e,i.memoizedState=Ia(1|t,n,o,r)}function Ra(e,t){return La(8390656,8,e,t)}function ja(e,t){return Ma(2048,8,e,t)}function Da(e,t){return Ma(4,2,e,t)}function Fa(e,t){return Ma(4,4,e,t)}function Va(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ua(e,t,n){return n=null!=n?n.concat([e]):null,Ma(4,4,Va.bind(null,t,e),n)}function za(){}function Ba(e,t){var n=ba();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qa(e,t){var n=ba();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ha(e,t,n){return 21&sa?(ai(n,t)||(n=gn(),aa.lanes|=n,Ru|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,yl=!0),e.memoizedState=n)}function $a(e,t){var n=wn;wn=0!==n&&4>n?n:4,e(!0);var r=oa.transition;oa.transition={};try{e(!1),t()}finally{wn=n,oa.transition=r}}function Ka(){return ba().memoizedState}function Wa(e,t,n){var r=ec(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ya(e))Qa(t,n);else if(null!==(n=Ms(e,t,n,r))){tc(n,e,r,Zu()),Xa(n,t,r)}}function Ga(e,t,n){var r=ec(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ya(e))Qa(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ai(a,s)){var l=t.interleaved;return null===l?(i.next=i,Ls(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(u){}null!==(n=Ms(e,t,i,r))&&(tc(n,e,r,i=Zu()),Xa(n,t,r))}}function Ya(e){var t=e.alternate;return e===aa||null!==t&&t===aa}function Qa(e,t){da=ca=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xa(e,t,n){if(4194240&n){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bn(e,n)}}var Ja={readContext:Is,useCallback:pa,useContext:pa,useEffect:pa,useImperativeHandle:pa,useInsertionEffect:pa,useLayoutEffect:pa,useMemo:pa,useReducer:pa,useRef:pa,useState:pa,useDebugValue:pa,useDeferredValue:pa,useTransition:pa,useMutableSource:pa,useSyncExternalStore:pa,useId:pa,unstable_isNewReconciler:!1},Za={readContext:Is,useCallback:function(e,t){return ya().memoizedState=[e,void 0===t?null:t],e},useContext:Is,useEffect:Ra,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,La(4194308,4,Va.bind(null,t,e),n)},useLayoutEffect:function(e,t){return La(4194308,4,e,t)},useInsertionEffect:function(e,t){return La(4,2,e,t)},useMemo:function(e,t){var n=ya();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ya();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Wa.bind(null,aa,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ya().memoizedState=e},useState:Aa,useDebugValue:za,useDeferredValue:function(e){return ya().memoizedState=e},useTransition:function(){var e=Aa(!1),t=e[0];return e=$a.bind(null,e[1]),ya().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=aa,i=ya();if(os){if(void 0===n)throw Error(oe(407));n=n()}else{if(n=t(),null===Ou)throw Error(oe(349));30&sa||Sa(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ra(Ca.bind(null,r,o,e),[e]),r.flags|=2048,Ia(9,Ta.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ya(),t=Ou.identifierPrefix;if(os){var n=Jo;t=":"+t+"R"+(n=(Xo&~(1<<32-an(Xo)-1)).toString(32)+n),0<(n=ha++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Is,useCallback:Ba,useContext:Is,useEffect:ja,useImperativeHandle:Ua,useInsertionEffect:Da,useLayoutEffect:Fa,useMemo:qa,useReducer:xa,useRef:Na,useState:function(){return xa(wa)},useDebugValue:za,useDeferredValue:function(e){return Ha(ba(),la.memoizedState,e)},useTransition:function(){return[xa(wa)[0],ba().memoizedState]},useMutableSource:ka,useSyncExternalStore:_a,useId:Ka,unstable_isNewReconciler:!1},tl={readContext:Is,useCallback:Ba,useContext:Is,useEffect:ja,useImperativeHandle:Ua,useInsertionEffect:Da,useLayoutEffect:Fa,useMemo:qa,useReducer:Ea,useRef:Na,useState:function(){return Ea(wa)},useDebugValue:za,useDeferredValue:function(e){var t=ba();return null===la?t.memoizedState=e:Ha(t,la.memoizedState,e)},useTransition:function(){return[Ea(wa)[0],ba().memoizedState]},useMutableSource:ka,useSyncExternalStore:_a,useId:Ka,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=De({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:De({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var il={isMounted:function(e){return!!(e=e._reactInternals)&&Bt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Zu(),i=ec(e),o=Vs(r,i);o.payload=t,null!=n&&(o.callback=n),null!==(t=Us(e,o,i))&&(tc(t,e,i,r),zs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Zu(),i=ec(e),o=Vs(r,i);o.tag=1,o.payload=t,null!=n&&(o.callback=n),null!==(t=Us(e,o,i))&&(tc(t,e,i,r),zs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Zu(),r=ec(e),i=Vs(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=Us(e,i,r))&&(tc(t,e,r,n),zs(t,e,r))}};function ol(e,t,n,r,i,o,s){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,s):!t.prototype||!t.prototype.isPureReactComponent||(!li(n,r)||!li(i,o))}function sl(e,t,n){var r=!1,i=Oo,o=t.contextType;return"object"==typeof o&&null!==o?o=Is(o):(i=Lo(t)?Io:Po.current,o=(r=null!=(r=t.contextTypes))?No(e,i):Oo),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function al(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function ll(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ds(e);var o=t.contextType;"object"==typeof o&&null!==o?i.context=Is(o):(o=Lo(t)?Io:Po.current,i.context=No(e,o)),i.state=e.memoizedState,"function"==typeof(o=t.getDerivedStateFromProps)&&(rl(e,t,o,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&il.enqueueReplaceState(i,i.state,null),qs(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=ze(r),r=r.return}while(r);var i=n}catch(o){i="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:i,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}var dl="function"==typeof WeakMap?WeakMap:Map;function hl(e,t,n){(n=Vs(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qu||(qu=!0,Hu=r)},n}function fl(e,t,n){(n=Vs(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===$u?$u=new Set([this]):$u.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function pl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new dl;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=_c.bind(null,e,t,n),t.then(e,e))}function ml(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function gl(e,t,n,r,i){return 1&e.mode?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Vs(-1,1)).tag=2,Us(n,t,1))),n.lanes|=1),e)}var vl=we.ReactCurrentOwner,yl=!1;function bl(e,t,n,r){t.child=null===e?Es(t,null,n,r):xs(t,e.child,n,r)}function wl(e,t,n,r,i){n=n.render;var o=t.ref;return As(t,i),r=ga(e,t,n,r,o,i),n=va(),null===e||yl?(os&&n&&ts(t),t.flags|=1,bl(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ql(e,t,i))}function xl(e,t,n,r,i){if(null===e){var o=n.type;return"function"!=typeof o||Ic(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Lc(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,El(e,t,o,r,i))}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if((n=null!==(n=n.compare)?n:li)(s,r)&&e.ref===t.ref)return ql(e,t,i)}return t.flags|=1,(e=Nc(o,r)).ref=t.ref,e.return=t,t.child=e}function El(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(li(o,r)&&e.ref===t.ref){if(yl=!1,t.pendingProps=r=o,!(e.lanes&i))return t.lanes=e.lanes,ql(e,t,i);131072&e.flags&&(yl=!0)}}return Sl(e,t,n,r,i)}function kl(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(1&t.mode){if(!(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Co(Nu,Iu),Iu|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Co(Nu,Iu),Iu|=r}else t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Co(Nu,Iu),Iu|=n;else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Co(Nu,Iu),Iu|=r;return bl(e,t,i,n),t.child}function _l(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Sl(e,t,n,r,i){var o=Lo(n)?Io:Po.current;return o=No(t,o),As(t,i),n=ga(e,t,n,r,o,i),r=va(),null===e||yl?(os&&r&&ts(t),t.flags|=1,bl(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ql(e,t,i))}function Tl(e,t,n,r,i){if(Lo(n)){var o=!0;Do(t)}else o=!1;if(As(t,i),null===t.stateNode)Bl(e,t),sl(t,n,r),ll(t,n,r,i),r=!0;else if(null===e){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;"object"==typeof u&&null!==u?u=Is(u):u=No(t,u=Lo(n)?Io:Po.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof s.getSnapshotBeforeUpdate;d||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==r||l!==u)&&al(t,s,r,u),js=!1;var h=t.memoizedState;s.state=h,qs(t,r,s,i),l=t.memoizedState,a!==r||h!==l||Ao.current||js?("function"==typeof c&&(rl(t,n,c,r),l=t.memoizedState),(a=js||ol(t,n,a,r,h,l,u))?(d||"function"!=typeof s.UNSAFE_componentWillMount&&"function"!=typeof s.componentWillMount||("function"==typeof s.componentWillMount&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"==typeof s.componentDidMount&&(t.flags|=4194308)):("function"==typeof s.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):("function"==typeof s.componentDidMount&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Fs(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:nl(t.type,a),s.props=u,d=t.pendingProps,h=s.context,"object"==typeof(l=n.contextType)&&null!==l?l=Is(l):l=No(t,l=Lo(n)?Io:Po.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof s.getSnapshotBeforeUpdate)||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==d||h!==l)&&al(t,s,r,l),js=!1,h=t.memoizedState,s.state=h,qs(t,r,s,i);var p=t.memoizedState;a!==d||h!==p||Ao.current||js?("function"==typeof f&&(rl(t,n,f,r),p=t.memoizedState),(u=js||ol(t,n,u,r,h,p,l)||!1)?(c||"function"!=typeof s.UNSAFE_componentWillUpdate&&"function"!=typeof s.componentWillUpdate||("function"==typeof s.componentWillUpdate&&s.componentWillUpdate(r,p,l),"function"==typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof s.componentDidUpdate&&(t.flags|=4),"function"==typeof s.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),s.props=r,s.state=p,s.context=l,r=u):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Cl(e,t,n,r,o,i)}function Cl(e,t,n,r,i,o){_l(e,t);var s=!!(128&t.flags);if(!r&&!s)return i&&Fo(t,n,!1),ql(e,t,o);r=t.stateNode,vl.current=t;var a=s&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&s?(t.child=xs(t,e.child,null,o),t.child=xs(t,null,a,o)):bl(e,t,a,o),t.memoizedState=r.state,i&&Fo(t,n,!0),t.child}function Ol(e){var t=e.stateNode;t.pendingContext?Ro(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ro(0,t.context,!1),Qs(e,t.containerInfo)}function Pl(e,t,n,r,i){return ps(),ms(i),t.flags|=256,bl(e,t,n,r),t.child}var Al,Il,Nl,Ll,Ml={dehydrated:null,treeContext:null,retryLane:0};function Rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function jl(e,t,n){var r,i=t.pendingProps,o=ea.current,s=!1,a=!!(128&t.flags);if((r=a)||(r=(null===e||null!==e.memoizedState)&&!!(2&o)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Co(ea,1&o),null===e)return cs(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(1&t.mode?"$!"===e.data?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=i.children,e=i.fallback,s?(i=t.mode,s=t.child,a={mode:"hidden",children:a},1&i||null===s?s=Rc(a,i,0,null):(s.childLanes=0,s.pendingProps=a),e=Mc(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Rl(n),t.memoizedState=Ml,e):Dl(t,a));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,i,o,s){if(n)return 256&t.flags?(t.flags&=-257,Fl(e,t,s,r=cl(Error(oe(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Rc({mode:"visible",children:r.children},i,0,null),(o=Mc(o,i,s,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,1&t.mode&&xs(t,e.child,null,s),t.child.memoizedState=Rl(s),t.memoizedState=Ml,o);if(!(1&t.mode))return Fl(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var a=r.dgst;return r=a,Fl(e,t,s,r=cl(o=Error(oe(419)),r,void 0))}if(a=!!(s&e.childLanes),yl||a){if(null!==(r=Ou)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=i&(r.suspendedLanes|s)?0:i)&&i!==o.retryLane&&(o.retryLane=i,Rs(e,i),tc(r,e,i,-1))}return pc(),Fl(e,t,s,r=cl(Error(oe(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Tc.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,is=uo(i.nextSibling),rs=t,os=!0,ss=null,null!==e&&(Go[Yo++]=Xo,Go[Yo++]=Jo,Go[Yo++]=Qo,Xo=e.id,Jo=e.overflow,Qo=t),t=Dl(t,r.children),t.flags|=4096,t)}(e,t,a,i,r,o,n);if(s){s=i.fallback,a=t.mode,r=(o=e.child).sibling;var l={mode:"hidden",children:i.children};return 1&a||t.child===o?(i=Nc(o,l)).subtreeFlags=14680064&o.subtreeFlags:((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null),null!==r?s=Nc(r,s):(s=Mc(s,a,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,a=null===(a=e.child.memoizedState)?Rl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Ml,i}return e=(s=e.child).sibling,i=Nc(s,{mode:"visible",children:i.children}),!(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Dl(e,t){return(t=Rc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fl(e,t,n,r){return null!==r&&ms(r),xs(t,e.child,null,n),(e=Dl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Vl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ps(e.return,t,n)}function Ul(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function zl(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(bl(e,t,r.children,n),2&(r=ea.current))r=1&r|2,t.flags|=128;else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Vl(e,n,t);else if(19===e.tag)Vl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Co(ea,r),1&t.mode)switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ul(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ta(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ul(t,!0,n,null,o);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}else t.memoizedState=null;return t.child}function Bl(e,t){!(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ql(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ru|=t.lanes,!(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(oe(153));if(null!==t.child){for(n=Nc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Nc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Hl(e,t){if(!os)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $l(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kl(e,t,n){var r=t.pendingProps;switch(ns(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $l(t),null;case 1:case 17:return Lo(t.type)&&Mo(),$l(t),null;case 3:return r=t.stateNode,Xs(),To(Ao),To(Po),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(hs(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==ss&&(oc(ss),ss=null))),Il(e,t),$l(t),null;case 5:Zs(t);var i=Ys(Gs.current);if(n=t.type,null!==e&&null!=t.stateNode)Nl(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(oe(166));return $l(t),null}if(e=Ys(Ks.current),hs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[fo]=t,r[po]=o,e=!!(1&t.mode),n){case"dialog":Vi("cancel",r),Vi("close",r);break;case"iframe":case"object":case"embed":Vi("load",r);break;case"video":case"audio":for(i=0;i<Ri.length;i++)Vi(Ri[i],r);break;case"source":Vi("error",r);break;case"img":case"image":case"link":Vi("error",r),Vi("load",r);break;case"details":Vi("toggle",r);break;case"input":Qe(r,o),Vi("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Vi("invalid",r);break;case"textarea":it(r,o),Vi("invalid",r)}for(var s in yt(n,o),i=null,o)if(o.hasOwnProperty(s)){var a=o[s];"children"===s?"string"==typeof a?r.textContent!==a&&(!0!==o.suppressHydrationWarning&&Ji(r.textContent,a,e),i=["children",a]):"number"==typeof a&&r.textContent!==""+a&&(!0!==o.suppressHydrationWarning&&Ji(r.textContent,a,e),i=["children",""+a]):ae.hasOwnProperty(s)&&null!=a&&"onScroll"===s&&Vi("scroll",r)}switch(n){case"input":Ke(r),Ze(r,o,!0);break;case"textarea":Ke(r),st(r);break;case"select":case"option":break;default:"function"==typeof o.onClick&&(r.onclick=Zi)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=at(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fo]=t,e[po]=r,Al(e,t,!1,!1),t.stateNode=e;e:{switch(s=bt(n,r),n){case"dialog":Vi("cancel",e),Vi("close",e),i=r;break;case"iframe":case"object":case"embed":Vi("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ri.length;i++)Vi(Ri[i],e);i=r;break;case"source":Vi("error",e),i=r;break;case"img":case"image":case"link":Vi("error",e),Vi("load",e),i=r;break;case"details":Vi("toggle",e),i=r;break;case"input":Qe(e,r),i=Ye(e,r),Vi("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),Vi("invalid",e);break;case"textarea":it(e,r),i=rt(e,r),Vi("invalid",e)}for(o in yt(n,i),a=i)if(a.hasOwnProperty(o)){var l=a[o];"style"===o?gt(e,l):"dangerouslySetInnerHTML"===o?null!=(l=l?l.__html:void 0)&&dt(e,l):"children"===o?"string"==typeof l?("textarea"!==n||""!==l)&&ht(e,l):"number"==typeof l&&ht(e,""+l):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(ae.hasOwnProperty(o)?null!=l&&"onScroll"===o&&Vi("scroll",e):null!=l&&be(e,o,l,s))}switch(n){case"input":Ke(e),Ze(e,r,!1);break;case"textarea":Ke(e),st(e);break;case"option":null!=r.value&&e.setAttribute("value",""+He(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?nt(e,!!r.multiple,o,!1):null!=r.defaultValue&&nt(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=Zi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return $l(t),null;case 6:if(e&&null!=t.stateNode)Ll(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(oe(166));if(n=Ys(Gs.current),Ys(Ks.current),hs(t)){if(r=t.stateNode,n=t.memoizedProps,r[fo]=t,(o=r.nodeValue!==n)&&null!==(e=rs))switch(e.tag){case 3:Ji(r.nodeValue,n,!!(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Ji(r.nodeValue,n,!!(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fo]=t,t.stateNode=r}return $l(t),null;case 13:if(To(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(os&&null!==is&&1&t.mode&&!(128&t.flags))fs(),ps(),t.flags|=98560,o=!1;else if(o=hs(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(oe(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(oe(317));o[fo]=t}else ps(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;$l(t),o=!1}else null!==ss&&(oc(ss),ss=null),o=!0;if(!o)return 65536&t.flags?t:null}return 128&t.flags?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,1&t.mode&&(null===e||1&ea.current?0===Lu&&(Lu=3):pc())),null!==t.updateQueue&&(t.flags|=4),$l(t),null);case 4:return Xs(),Il(e,t),null===e&&Bi(t.stateNode.containerInfo),$l(t),null;case 10:return Os(t.type._context),$l(t),null;case 19:if(To(ea),null===(o=t.memoizedState))return $l(t),null;if(r=!!(128&t.flags),null===(s=o.rendering))if(r)Hl(o,!1);else{if(0!==Lu||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(s=ta(e))){for(t.flags|=128,Hl(o,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(s=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Co(ea,1&ea.current|2),t.child}e=e.sibling}null!==o.tail&&Xt()>zu&&(t.flags|=128,r=!0,Hl(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Hl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!s.alternate&&!os)return $l(t),null}else 2*Xt()-o.renderingStartTime>zu&&1073741824!==n&&(t.flags|=128,r=!0,Hl(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=o.last)?n.sibling=s:t.child=s,o.last=s)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Xt(),t.sibling=null,n=ea.current,Co(ea,r?1&n|2:1&n),t):($l(t),null);case 22:case 23:return cc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&1&t.mode?!!(1073741824&Iu)&&($l(t),6&t.subtreeFlags&&(t.flags|=8192)):$l(t),null;case 24:case 25:return null}throw Error(oe(156,t.tag))}function Wl(e,t){switch(ns(t),t.tag){case 1:return Lo(t.type)&&Mo(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xs(),To(Ao),To(Po),ra(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zs(t),null;case 13:if(To(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(oe(340));ps()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return To(ea),null;case 4:return Xs(),null;case 10:return Os(t.type._context),null;case 22:case 23:return cc(),null;default:return null}}Al=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Il=function(){},Nl=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ys(Ks.current);var o,s=null;switch(n){case"input":i=Ye(e,i),r=Ye(e,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=rt(e,i),r=rt(e,r),s=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=Zi)}for(u in yt(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(ae.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(null!=l||null!=a))if("style"===u)if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,a=a?a.__html:void 0,null!=l&&a!==l&&(s=s||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(s=s||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(ae.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&Vi("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}},Ll=function(e,t,n,r){n!==r&&(t.flags|=4)};var Gl=!1,Yl=!1,Ql="function"==typeof WeakSet?WeakSet:Set,Xl=null;function Jl(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(r){kc(e,t,r)}else n.current=null}function Zl(e,t,n){try{n()}catch(r){kc(e,t,r)}}var eu=!1;function tu(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&Zl(t,n,o)}i=i.next}while(i!==r)}}function nu(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ru(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function iu(e){var t=e.alternate;null!==t&&(e.alternate=null,iu(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fo],delete t[po],delete t[go],delete t[vo],delete t[yo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ou(e){return 5===e.tag||3===e.tag||4===e.tag}function su(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ou(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function au(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Zi));else if(4!==r&&null!==(e=e.child))for(au(e,t,n),e=e.sibling;null!==e;)au(e,t,n),e=e.sibling}function lu(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(lu(e,t,n),e=e.sibling;null!==e;)lu(e,t,n),e=e.sibling}var uu=null,cu=!1;function du(e,t,n){for(n=n.child;null!==n;)hu(e,t,n),n=n.sibling}function hu(e,t,n){if(sn&&"function"==typeof sn.onCommitFiberUnmount)try{sn.onCommitFiberUnmount(on,n)}catch(a){}switch(n.tag){case 5:Yl||Jl(n,t);case 6:var r=uu,i=cu;uu=null,du(e,t,n),cu=i,null!==(uu=r)&&(cu?(e=uu,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):uu.removeChild(n.stateNode));break;case 18:null!==uu&&(cu?(e=uu,n=n.stateNode,8===e.nodeType?lo(e.parentNode,n):1===e.nodeType&&lo(e,n),qn(e)):lo(uu,n.stateNode));break;case 4:r=uu,i=cu,uu=n.stateNode.containerInfo,cu=!0,du(e,t,n),uu=r,cu=i;break;case 0:case 11:case 14:case 15:if(!Yl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,void 0!==s&&(2&o||4&o)&&Zl(n,t,s),i=i.next}while(i!==r)}du(e,t,n);break;case 1:if(!Yl&&(Jl(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){kc(n,t,a)}du(e,t,n);break;case 21:du(e,t,n);break;case 22:1&n.mode?(Yl=(r=Yl)||null!==n.memoizedState,du(e,t,n),Yl=r):du(e,t,n);break;default:du(e,t,n)}}function fu(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Ql),t.forEach((function(t){var r=Cc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function pu(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;null!==a;){switch(a.tag){case 5:uu=a.stateNode,cu=!1;break e;case 3:case 4:uu=a.stateNode.containerInfo,cu=!0;break e}a=a.return}if(null===uu)throw Error(oe(160));hu(o,s,i),uu=null,cu=!1;var l=i.alternate;null!==l&&(l.return=null),i.return=null}catch(u){kc(i,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)mu(t,e),t=t.sibling}function mu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pu(t,e),gu(e),4&r){try{tu(3,e,e.return),nu(3,e)}catch(Cq){kc(e,e.return,Cq)}try{tu(5,e,e.return)}catch(Cq){kc(e,e.return,Cq)}}break;case 1:pu(t,e),gu(e),512&r&&null!==n&&Jl(n,n.return);break;case 5:if(pu(t,e),gu(e),512&r&&null!==n&&Jl(n,n.return),32&e.flags){var i=e.stateNode;try{ht(i,"")}catch(Cq){kc(e,e.return,Cq)}}if(4&r&&null!=(i=e.stateNode)){var o=e.memoizedProps,s=null!==n?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===a&&"radio"===o.type&&null!=o.name&&Xe(i,o),bt(a,s);var u=bt(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];"style"===c?gt(i,d):"dangerouslySetInnerHTML"===c?dt(i,d):"children"===c?ht(i,d):be(i,c,d,u)}switch(a){case"input":Je(i,o);break;case"textarea":ot(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var f=o.value;null!=f?nt(i,!!o.multiple,f,!1):h!==!!o.multiple&&(null!=o.defaultValue?nt(i,!!o.multiple,o.defaultValue,!0):nt(i,!!o.multiple,o.multiple?[]:"",!1))}i[po]=o}catch(Cq){kc(e,e.return,Cq)}}break;case 6:if(pu(t,e),gu(e),4&r){if(null===e.stateNode)throw Error(oe(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(Cq){kc(e,e.return,Cq)}}break;case 3:if(pu(t,e),gu(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{qn(t.containerInfo)}catch(Cq){kc(e,e.return,Cq)}break;case 4:default:pu(t,e),gu(e);break;case 13:pu(t,e),gu(e),8192&(i=e.child).flags&&(o=null!==i.memoizedState,i.stateNode.isHidden=o,!o||null!==i.alternate&&null!==i.alternate.memoizedState||(Uu=Xt())),4&r&&fu(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(Yl=(u=Yl)||c,pu(t,e),Yl=u):pu(t,e),gu(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&1&e.mode)for(Xl=e,c=e.child;null!==c;){for(d=Xl=c;null!==Xl;){switch(f=(h=Xl).child,h.tag){case 0:case 11:case 14:case 15:tu(4,h,h.return);break;case 1:Jl(h,h.return);var p=h.stateNode;if("function"==typeof p.componentWillUnmount){r=h,n=h.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(Cq){kc(r,n,Cq)}}break;case 5:Jl(h,h.return);break;case 22:if(null!==h.memoizedState){wu(d);continue}}null!==f?(f.return=h,Xl=f):wu(d)}c=c.sibling}e:for(c=null,d=e;;){if(5===d.tag){if(null===c){c=d;try{i=d.stateNode,u?"function"==typeof(o=i.style).setProperty?o.setProperty("display","none","important"):o.display="none":(a=d.stateNode,s=null!=(l=d.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,a.style.display=mt("display",s))}catch(Cq){kc(e,e.return,Cq)}}}else if(6===d.tag){if(null===c)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(Cq){kc(e,e.return,Cq)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:pu(t,e),gu(e),4&r&&fu(e);case 21:}}function gu(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ou(n)){var r=n;break e}n=n.return}throw Error(oe(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(ht(i,""),r.flags&=-33),lu(e,su(e),i);break;case 3:case 4:var o=r.stateNode.containerInfo;au(e,su(e),o);break;default:throw Error(oe(161))}}catch(s){kc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vu(e,t,n){Xl=e,yu(e)}function yu(e,t,n){for(var r=!!(1&e.mode);null!==Xl;){var i=Xl,o=i.child;if(22===i.tag&&r){var s=null!==i.memoizedState||Gl;if(!s){var a=i.alternate,l=null!==a&&null!==a.memoizedState||Yl;a=Gl;var u=Yl;if(Gl=s,(Yl=l)&&!u)for(Xl=i;null!==Xl;)l=(s=Xl).child,22===s.tag&&null!==s.memoizedState?xu(i):null!==l?(l.return=s,Xl=l):xu(i);for(;null!==o;)Xl=o,yu(o),o=o.sibling;Xl=i,Gl=a,Yl=u}bu(e)}else 8772&i.subtreeFlags&&null!==o?(o.return=i,Xl=o):bu(e)}}function bu(e){for(;null!==Xl;){var t=Xl;if(8772&t.flags){var n=t.alternate;try{if(8772&t.flags)switch(t.tag){case 0:case 11:case 15:Yl||nu(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Yl)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Hs(t,o,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Hs(t,s,n)}break;case 5:var a=t.stateNode;if(null===n&&4&t.flags){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var d=c.dehydrated;null!==d&&qn(d)}}}break;default:throw Error(oe(163))}Yl||512&t.flags&&ru(t)}catch(h){kc(t,t.return,h)}}if(t===e){Xl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Xl=n;break}Xl=t.return}}function wu(e){for(;null!==Xl;){var t=Xl;if(t===e){Xl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Xl=n;break}Xl=t.return}}function xu(e){for(;null!==Xl;){var t=Xl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{nu(4,t)}catch(l){kc(t,n,l)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){kc(t,i,l)}}var o=t.return;try{ru(t)}catch(l){kc(t,o,l)}break;case 5:var s=t.return;try{ru(t)}catch(l){kc(t,s,l)}}}catch(l){kc(t,t.return,l)}if(t===e){Xl=null;break}var a=t.sibling;if(null!==a){a.return=t.return,Xl=a;break}Xl=t.return}}var Eu,ku=Math.ceil,_u=we.ReactCurrentDispatcher,Su=we.ReactCurrentOwner,Tu=we.ReactCurrentBatchConfig,Cu=0,Ou=null,Pu=null,Au=0,Iu=0,Nu=So(0),Lu=0,Mu=null,Ru=0,ju=0,Du=0,Fu=null,Vu=null,Uu=0,zu=1/0,Bu=null,qu=!1,Hu=null,$u=null,Ku=!1,Wu=null,Gu=0,Yu=0,Qu=null,Xu=-1,Ju=0;function Zu(){return 6&Cu?Xt():-1!==Xu?Xu:Xu=Xt()}function ec(e){return 1&e.mode?2&Cu&&0!==Au?Au&-Au:null!==gs.transition?(0===Ju&&(Ju=gn()),Ju):0!==(e=wn)?e:e=void 0===(e=window.event)?16:Xn(e.type):1}function tc(e,t,n,r){if(50<Yu)throw Yu=0,Qu=null,Error(oe(185));yn(e,n,r),2&Cu&&e===Ou||(e===Ou&&(!(2&Cu)&&(ju|=n),4===Lu&&sc(e,Au)),nc(e,r),1===n&&0===Cu&&!(1&t.mode)&&(zu=Xt()+500,Uo&&qo()))}function nc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-an(o),a=1<<s,l=i[s];-1===l?a&n&&!(a&r)||(i[s]=pn(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}(e,t);var r=fn(e,e===Ou?Au:0);if(0===r)null!==n&&Gt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Gt(n),1===t)0===e.tag?function(e){Uo=!0,Bo(e)}(ac.bind(null,e)):Bo(ac.bind(null,e)),so((function(){!(6&Cu)&&qo()})),n=null;else{switch(xn(r)){case 1:n=Zt;break;case 4:n=en;break;case 16:default:n=tn;break;case 536870912:n=rn}n=Oc(n,rc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rc(e,t){if(Xu=-1,Ju=0,6&Cu)throw Error(oe(327));var n=e.callbackNode;if(xc()&&e.callbackNode!==n)return null;var r=fn(e,e===Ou?Au:0);if(0===r)return null;if(30&r||r&e.expiredLanes||t)t=mc(e,r);else{t=r;var i=Cu;Cu|=2;var o=fc();for(Ou===e&&Au===t||(Bu=null,zu=Xt()+500,dc(e,t));;)try{vc();break}catch(a){hc(e,a)}Cs(),_u.current=o,Cu=i,null!==Pu?t=0:(Ou=null,Au=0,t=Lu)}if(0!==t){if(2===t&&(0!==(i=mn(e))&&(r=i,t=ic(e,i))),1===t)throw n=Mu,dc(e,0),sc(e,r),nc(e,Xt()),n;if(6===t)sc(e,r);else{if(i=e.current.alternate,!(30&r||function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ai(o(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)||(t=mc(e,r),2===t&&(o=mn(e),0!==o&&(r=o,t=ic(e,o))),1!==t)))throw n=Mu,dc(e,0),sc(e,r),nc(e,Xt()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(oe(345));case 2:case 5:wc(e,Vu,Bu);break;case 3:if(sc(e,r),(130023424&r)===r&&10<(t=Uu+500-Xt())){if(0!==fn(e,0))break;if(((i=e.suspendedLanes)&r)!==r){Zu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ro(wc.bind(null,e,Vu,Bu),t);break}wc(e,Vu,Bu);break;case 4:if(sc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-an(r);o=1<<s,(s=t[s])>i&&(i=s),r&=~o}if(r=i,10<(r=(120>(r=Xt()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ku(r/1960))-r)){e.timeoutHandle=ro(wc.bind(null,e,Vu,Bu),r);break}wc(e,Vu,Bu);break;default:throw Error(oe(329))}}}return nc(e,Xt()),e.callbackNode===n?rc.bind(null,e):null}function ic(e,t){var n=Fu;return e.current.memoizedState.isDehydrated&&(dc(e,t).flags|=256),2!==(e=mc(e,t))&&(t=Vu,Vu=n,null!==t&&oc(t)),e}function oc(e){null===Vu?Vu=e:Vu.push.apply(Vu,e)}function sc(e,t){for(t&=~Du,t&=~ju,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-an(t),r=1<<n;e[n]=-1,t&=~r}}function ac(e){if(6&Cu)throw Error(oe(327));xc();var t=fn(e,0);if(!(1&t))return nc(e,Xt()),null;var n=mc(e,t);if(0!==e.tag&&2===n){var r=mn(e);0!==r&&(t=r,n=ic(e,r))}if(1===n)throw n=Mu,dc(e,0),sc(e,t),nc(e,Xt()),n;if(6===n)throw Error(oe(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Vu,Bu),nc(e,Xt()),null}function lc(e,t){var n=Cu;Cu|=1;try{return e(t)}finally{0===(Cu=n)&&(zu=Xt()+500,Uo&&qo())}}function uc(e){null!==Wu&&0===Wu.tag&&!(6&Cu)&&xc();var t=Cu;Cu|=1;var n=Tu.transition,r=wn;try{if(Tu.transition=null,wn=1,e)return e()}finally{wn=r,Tu.transition=n,!(6&(Cu=t))&&qo()}}function cc(){Iu=Nu.current,To(Nu)}function dc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,io(n)),null!==Pu)for(n=Pu.return;null!==n;){var r=n;switch(ns(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Mo();break;case 3:Xs(),To(Ao),To(Po),ra();break;case 5:Zs(r);break;case 4:Xs();break;case 13:case 19:To(ea);break;case 10:Os(r.type._context);break;case 22:case 23:cc()}n=n.return}if(Ou=e,Pu=e=Nc(e.current,null),Au=Iu=t,Lu=0,Mu=null,Du=ju=Ru=0,Vu=Fu=null,null!==Ns){for(t=0;t<Ns.length;t++)if(null!==(r=(n=Ns[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var s=o.next;o.next=i,r.next=s}n.pending=r}Ns=null}return e}function hc(e,t){for(;;){var n=Pu;try{if(Cs(),ia.current=Ja,ca){for(var r=aa.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ca=!1}if(sa=0,ua=la=aa=null,da=!1,ha=0,Su.current=null,null===n||null===n.return){Lu=1,Mu=t,Pu=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Au,a.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=a,d=c.tag;if(!(1&c.mode||0!==d&&11!==d&&15!==d)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=ml(s);if(null!==f){f.flags&=-257,gl(f,s,a,0,t),1&f.mode&&pl(o,u,t),l=u;var p=(t=f).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(!(1&t)){pl(o,u,t),pc();break e}l=Error(oe(426))}else if(os&&1&a.mode){var g=ml(s);if(null!==g){!(65536&g.flags)&&(g.flags|=256),gl(g,s,a,0,t),ms(ul(l,a));break e}}o=l=ul(l,a),4!==Lu&&(Lu=2),null===Fu?Fu=[o]:Fu.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Bs(o,hl(0,l,t));break e;case 1:a=l;var v=o.type,y=o.stateNode;if(!(128&o.flags||"function"!=typeof v.getDerivedStateFromError&&(null===y||"function"!=typeof y.componentDidCatch||null!==$u&&$u.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t,Bs(o,fl(o,a,t));break e}}o=o.return}while(null!==o)}bc(n)}catch(b){t=b,Pu===n&&null!==n&&(Pu=n=n.return);continue}break}}function fc(){var e=_u.current;return _u.current=Ja,null===e?Ja:e}function pc(){0!==Lu&&3!==Lu&&2!==Lu||(Lu=4),null===Ou||!(268435455&Ru)&&!(268435455&ju)||sc(Ou,Au)}function mc(e,t){var n=Cu;Cu|=2;var r=fc();for(Ou===e&&Au===t||(Bu=null,dc(e,t));;)try{gc();break}catch(Tq){hc(e,Tq)}if(Cs(),Cu=n,_u.current=r,null!==Pu)throw Error(oe(261));return Ou=null,Au=0,Lu}function gc(){for(;null!==Pu;)yc(Pu)}function vc(){for(;null!==Pu&&!Yt();)yc(Pu)}function yc(e){var t=Eu(e.alternate,e,Iu);e.memoizedProps=e.pendingProps,null===t?bc(e):Pu=t,Su.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,32768&t.flags){if(null!==(n=Wl(n,t)))return n.flags&=32767,void(Pu=n);if(null===e)return Lu=6,void(Pu=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}else if(null!==(n=Kl(n,t,Iu)))return void(Pu=n);if(null!==(t=t.sibling))return void(Pu=t);Pu=t=e}while(null!==t);0===Lu&&(Lu=5)}function wc(e,t,n){var r=wn,i=Tu.transition;try{Tu.transition=null,wn=1,function(e,t,n,r){do{xc()}while(null!==Wu);if(6&Cu)throw Error(oe(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(oe(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-an(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,o),e===Ou&&(Pu=Ou=null,Au=0),!(2064&n.subtreeFlags)&&!(2064&n.flags)||Ku||(Ku=!0,Oc(tn,(function(){return xc(),null}))),o=!!(15990&n.flags),!!(15990&n.subtreeFlags)||o){o=Tu.transition,Tu.transition=null;var s=wn;wn=1;var a=Cu;Cu|=4,Su.current=null,function(e,t){if(eo=$n,fi(e=hi())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(w){n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var f;d!==n||0!==i&&3!==d.nodeType||(a=s+i),d!==o||0!==r&&3!==d.nodeType||(l=s+r),3===d.nodeType&&(s+=d.nodeValue.length),null!==(f=d.firstChild);)h=d,d=f;for(;;){if(d===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++c===r&&(l=s),null!==(f=d.nextSibling))break;h=(d=h).parentNode}d=f}n=-1===a||-1===l?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},$n=!1,Xl=t;null!==Xl;)if(e=(t=Xl).child,1028&t.subtreeFlags&&null!==e)e.return=t,Xl=e;else for(;null!==Xl;){t=Xl;try{var p=t.alternate;if(1024&t.flags)switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?m:nl(t.type,m),g);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(oe(163))}}catch(w){kc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Xl=e;break}Xl=t.return}p=eu,eu=!1}(e,n),mu(n,e),pi(to),$n=!!eo,to=eo=null,e.current=n,vu(n),Qt(),Cu=a,wn=s,Tu.transition=o}else e.current=n;if(Ku&&(Ku=!1,Wu=e,Gu=i),o=e.pendingLanes,0===o&&($u=null),function(e){if(sn&&"function"==typeof sn.onCommitFiberRoot)try{sn.onCommitFiberRoot(on,e,void 0,!(128&~e.current.flags))}catch(t){}}(n.stateNode),nc(e,Xt()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qu)throw qu=!1,e=Hu,Hu=null,e;!!(1&Gu)&&0!==e.tag&&xc(),o=e.pendingLanes,1&o?e===Qu?Yu++:(Yu=0,Qu=e):Yu=0,qo()}(e,t,n,r)}finally{Tu.transition=i,wn=r}return null}function xc(){if(null!==Wu){var e=xn(Gu),t=Tu.transition,n=wn;try{if(Tu.transition=null,wn=16>e?16:e,null===Wu)var r=!1;else{if(e=Wu,Wu=null,Gu=0,6&Cu)throw Error(oe(331));var i=Cu;for(Cu|=4,Xl=e.current;null!==Xl;){var o=Xl,s=o.child;if(16&Xl.flags){var a=o.deletions;if(null!==a){for(var l=0;l<a.length;l++){var u=a[l];for(Xl=u;null!==Xl;){var c=Xl;switch(c.tag){case 0:case 11:case 15:tu(8,c,o)}var d=c.child;if(null!==d)d.return=c,Xl=d;else for(;null!==Xl;){var h=(c=Xl).sibling,f=c.return;if(iu(c),c===u){Xl=null;break}if(null!==h){h.return=f,Xl=h;break}Xl=f}}}var p=o.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}Xl=o}}if(2064&o.subtreeFlags&&null!==s)s.return=o,Xl=s;else e:for(;null!==Xl;){if(2048&(o=Xl).flags)switch(o.tag){case 0:case 11:case 15:tu(9,o,o.return)}var v=o.sibling;if(null!==v){v.return=o.return,Xl=v;break e}Xl=o.return}}var y=e.current;for(Xl=y;null!==Xl;){var b=(s=Xl).child;if(2064&s.subtreeFlags&&null!==b)b.return=s,Xl=b;else e:for(s=y;null!==Xl;){if(2048&(a=Xl).flags)try{switch(a.tag){case 0:case 11:case 15:nu(9,a)}}catch(x){kc(a,a.return,x)}if(a===s){Xl=null;break e}var w=a.sibling;if(null!==w){w.return=a.return,Xl=w;break e}Xl=a.return}}if(Cu=i,qo(),sn&&"function"==typeof sn.onPostCommitFiberRoot)try{sn.onPostCommitFiberRoot(on,e)}catch(x){}r=!0}return r}finally{wn=n,Tu.transition=t}}return!1}function Ec(e,t,n){e=Us(e,t=hl(0,t=ul(n,t),1),1),t=Zu(),null!==e&&(yn(e,1,t),nc(e,t))}function kc(e,t,n){if(3===e.tag)Ec(e,e,n);else for(;null!==t;){if(3===t.tag){Ec(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===$u||!$u.has(r))){t=Us(t,e=fl(t,e=ul(n,e),1),1),e=Zu(),null!==t&&(yn(t,1,e),nc(t,e));break}}t=t.return}}function _c(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=Zu(),e.pingedLanes|=e.suspendedLanes&n,Ou===e&&(Au&n)===n&&(4===Lu||3===Lu&&(130023424&Au)===Au&&500>Xt()-Uu?dc(e,0):Du|=n),nc(e,t)}function Sc(e,t){0===t&&(1&e.mode?(t=dn,!(130023424&(dn<<=1))&&(dn=4194304)):t=1);var n=Zu();null!==(e=Rs(e,t))&&(yn(e,t,n),nc(e,n))}function Tc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Sc(e,n)}function Cc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(oe(314))}null!==r&&r.delete(t),Sc(e,n)}function Oc(e,t){return Wt(e,t)}function Pc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ac(e,t,n,r){return new Pc(e,t,n,r)}function Ic(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Nc(e,t){var n=e.alternate;return null===n?((n=Ac(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lc(e,t,n,r,i,o){var s=2;if(r=e,"function"==typeof e)Ic(e)&&(s=1);else if("string"==typeof e)s=5;else e:switch(e){case ke:return Mc(n.children,i,o,t);case _e:s=8,i|=8;break;case Se:return(e=Ac(12,n,t,2|i)).elementType=Se,e.lanes=o,e;case Pe:return(e=Ac(13,n,t,i)).elementType=Pe,e.lanes=o,e;case Ae:return(e=Ac(19,n,t,i)).elementType=Ae,e.lanes=o,e;case Le:return Rc(n,i,o,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case Te:s=10;break e;case Ce:s=9;break e;case Oe:s=11;break e;case Ie:s=14;break e;case Ne:s=16,r=null;break e}throw Error(oe(130,null==e?e:typeof e,""))}return(t=Ac(s,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function Mc(e,t,n,r){return(e=Ac(7,e,r,t)).lanes=n,e}function Rc(e,t,n,r){return(e=Ac(22,e,r,t)).elementType=Le,e.lanes=n,e.stateNode={isHidden:!1},e}function jc(e,t,n){return(e=Ac(6,e,null,t)).lanes=n,e}function Dc(e,t,n){return(t=Ac(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vn(0),this.expirationTimes=vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vn(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vc(e,t,n,r,i,o,s,a,l){return e=new Fc(e,t,n,a,l),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Ac(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ds(o),e}function Uc(e){if(!e)return Oo;e:{if(Bt(e=e._reactInternals)!==e||1!==e.tag)throw Error(oe(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Lo(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(oe(171))}if(1===e.tag){var n=e.type;if(Lo(n))return jo(e,n,t)}return t}function zc(e,t,n,r,i,o,s,a,l){return(e=Vc(n,r,!0,e,0,o,0,a,l)).context=Uc(null),n=e.current,(o=Vs(r=Zu(),i=ec(n))).callback=null!=t?t:null,Us(n,o,i),e.current.lanes=i,yn(e,i,r),nc(e,r),e}function Bc(e,t,n,r){var i=t.current,o=Zu(),s=ec(i);return n=Uc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Vs(o,s)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Us(i,t,s))&&(tc(e,i,s,o),zs(e,i,s)),s}function qc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Hc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function $c(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}Eu=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ao.current)yl=!0;else{if(!(e.lanes&n||128&t.flags))return yl=!1,function(e,t,n){switch(t.tag){case 3:Ol(t),ps();break;case 5:Js(t);break;case 1:Lo(t.type)&&Do(t);break;case 4:Qs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Co(ks,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Co(ea,1&ea.current),t.flags|=128,null):n&t.child.childLanes?jl(e,t,n):(Co(ea,1&ea.current),null!==(e=ql(e,t,n))?e.sibling:null);Co(ea,1&ea.current);break;case 19:if(r=!!(n&t.childLanes),128&e.flags){if(r)return zl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Co(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,kl(e,t,n)}return ql(e,t,n)}(e,t,n);yl=!!(131072&e.flags)}else yl=!1,os&&1048576&t.flags&&es(t,Wo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bl(e,t),e=t.pendingProps;var i=No(t,Po.current);As(t,n),i=ga(null,t,r,e,i,n);var o=va();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Lo(r)?(o=!0,Do(t)):o=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Ds(t),i.updater=il,t.stateNode=i,i._reactInternals=t,ll(t,r,e,n),t=Cl(null,t,r,!0,o,n)):(t.tag=0,os&&o&&ts(t),bl(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bl(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return Ic(e)?1:0;if(null!=e){if((e=e.$$typeof)===Oe)return 11;if(e===Ie)return 14}return 2}(r),e=nl(r,e),i){case 0:t=Sl(null,t,r,e,n);break e;case 1:t=Tl(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=xl(null,t,r,nl(r.type,e),n);break e}throw Error(oe(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Sl(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 1:return r=t.type,i=t.pendingProps,Tl(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 3:e:{if(Ol(t),null===e)throw Error(oe(387));r=t.pendingProps,i=(o=t.memoizedState).element,Fs(e,t),qs(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Pl(e,t,r,n,i=ul(Error(oe(423)),t));break e}if(r!==i){t=Pl(e,t,r,n,i=ul(Error(oe(424)),t));break e}for(is=uo(t.stateNode.containerInfo.firstChild),rs=t,os=!0,ss=null,n=Es(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ps(),r===i){t=ql(e,t,n);break e}bl(e,t,r,n)}t=t.child}return t;case 5:return Js(t),null===e&&cs(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,s=i.children,no(r,i)?s=null:null!==o&&no(r,o)&&(t.flags|=32),_l(e,t),bl(e,t,s,n),t.child;case 6:return null===e&&cs(t),null;case 13:return jl(e,t,n);case 4:return Qs(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=xs(t,null,r,n):bl(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,wl(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 7:return bl(e,t,t.pendingProps,n),t.child;case 8:case 12:return bl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Co(ks,r._currentValue),r._currentValue=s,null!==o)if(ai(o.value,s)){if(o.children===i.children&&!Ao.current){t=ql(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var a=o.dependencies;if(null!==a){s=o.child;for(var l=a.firstContext;null!==l;){if(l.context===r){if(1===o.tag){(l=Vs(-1,n&-n)).tag=2;var u=o.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,null!==(l=o.alternate)&&(l.lanes|=n),Ps(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(10===o.tag)s=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(s=o.return))throw Error(oe(341));s.lanes|=n,null!==(a=s.alternate)&&(a.lanes|=n),Ps(s,n,t),s=o.sibling}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===t){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}bl(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,As(t,n),r=r(i=Is(i)),t.flags|=1,bl(e,t,r,n),t.child;case 14:return i=nl(r=t.type,t.pendingProps),xl(e,t,r,i=nl(r.type,i),n);case 15:return El(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nl(r,i),Bl(e,t),t.tag=1,Lo(r)?(e=!0,Do(t)):e=!1,As(t,n),sl(t,r,i),ll(t,r,i,n),Cl(null,t,r,!0,e,n);case 19:return zl(e,t,n);case 22:return kl(e,t,n)}throw Error(oe(156,t.tag))};var Kc="function"==typeof reportError?reportError:function(e){};function Wc(e){this._internalRoot=e}function Gc(e){this._internalRoot=e}function Yc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xc(){}function Jc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if("function"==typeof i){var a=i;i=function(){var e=qc(s);a.call(e)}}Bc(t,s,e,i)}else s=function(e,t,n,r,i){if(i){if("function"==typeof r){var o=r;r=function(){var e=qc(s);o.call(e)}}var s=zc(t,r,e,0,null,!1,0,"",Xc);return e._reactRootContainer=s,e[mo]=s.current,Bi(8===e.nodeType?e.parentNode:e),uc(),s}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var a=r;r=function(){var e=qc(l);a.call(e)}}var l=Vc(e,0,!1,null,0,!1,0,"",Xc);return e._reactRootContainer=l,e[mo]=l.current,Bi(8===e.nodeType?e.parentNode:e),uc((function(){Bc(t,l,n,r)})),l}(n,t,e,i,r);return qc(s)}Gc.prototype.render=Wc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(oe(409));Bc(e,t,null,null)},Gc.prototype.unmount=Wc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Bc(null,e,null,null)})),t[mo]=null}},Gc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mn.length&&0!==t&&t<Mn[n].priority;n++);Mn.splice(n,0,e),0===n&&Fn(e)}},En=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hn(t.pendingLanes);0!==n&&(bn(t,1|n),nc(t,Xt()),!(6&Cu)&&(zu=Xt()+500,qo()))}break;case 13:uc((function(){var t=Rs(e,1);if(null!==t){var n=Zu();tc(t,e,1,n)}})),$c(e,1)}},kn=function(e){if(13===e.tag){var t=Rs(e,134217728);if(null!==t)tc(t,e,134217728,Zu());$c(e,134217728)}},_n=function(e){if(13===e.tag){var t=ec(e),n=Rs(e,t);if(null!==n)tc(n,e,t,Zu());$c(e,t)}},Sn=function(){return wn},Tn=function(e,t){var n=wn;try{return wn=e,t()}finally{wn=n}},Et=function(e,t,n){switch(t){case"input":if(Je(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Eo(r);if(!i)throw Error(oe(90));We(r),Je(r,i)}}}break;case"textarea":ot(e,n);break;case"select":null!=(t=n.value)&&nt(e,!!n.multiple,t,!1)}},Ot=lc,Pt=uc;var Zc={usingClientEntryPoint:!1,Events:[wo,xo,Eo,Tt,Ct,lc]},ed={findFiberByHostInstance:bo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},td={bundleType:ed.bundleType,version:ed.version,rendererPackageName:ed.rendererPackageName,rendererConfig:ed.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=$t(e))?null:e.stateNode},findFiberByHostInstance:ed.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var nd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nd.isDisabled&&nd.supportsFiber)try{on=nd.inject(td),sn=nd}catch(ct){}}Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zc,Z.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Yc(t))throw Error(oe(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Ee,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},Z.createRoot=function(e,t){if(!Yc(e))throw Error(oe(299));var n=!1,r="",i=Kc;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Vc(e,1,!1,null,0,n,0,r,i),e[mo]=t.current,Bi(8===e.nodeType?e.parentNode:e),new Wc(t)},Z.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(oe(188));throw e=Object.keys(e).join(","),Error(oe(268,e))}return e=null===(e=$t(t))?null:e.stateNode},Z.flushSync=function(e){return uc(e)},Z.hydrate=function(e,t,n){if(!Qc(t))throw Error(oe(200));return Jc(null,e,t,!0,n)},Z.hydrateRoot=function(e,t,n){if(!Yc(e))throw Error(oe(405));var r=null!=n&&n.hydratedSources||null,i=!1,o="",s=Kc;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=zc(t,null,e,1,null!=n?n:null,i,0,o,s),e[mo]=t.current,Bi(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Gc(t)},Z.render=function(e,t,n){if(!Qc(t))throw Error(oe(200));return Jc(null,e,t,!1,n)},Z.unmountComponentAtNode=function(e){if(!Qc(e))throw Error(oe(40));return!!e._reactRootContainer&&(uc((function(){Jc(null,null,e,!1,(function(){e._reactRootContainer=null,e[mo]=null}))})),!0)},Z.unstable_batchedUpdates=lc,Z.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qc(n))throw Error(oe(200));if(null==e||void 0===e._reactInternals)throw Error(oe(38));return Jc(e,t,n,!1,r)},Z.version="18.3.1-next-f1338f8080-20240426",function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){}}(),J.exports=Z;var rd,id,od,sd=J.exports,ad=sd;
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ld(){return ld=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ld.apply(this,arguments)}rd=ad.createRoot,ad.hydrateRoot,(od=id||(id={})).Pop="POP",od.Push="PUSH",od.Replace="REPLACE";const ud="popstate";function cd(e){return void 0===e&&(e={}),function(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=id.Pop,l=null,u=c();null==u&&(u=0,s.replaceState(ld({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){a=id.Pop;let e=c(),t=null==e?null:e-u;u=e,l&&l({action:a,location:m.location,delta:t})}function h(e,t){a=id.Push;let r=pd(m.location,e,t);n&&n(r,e),u=c()+1;let d=fd(r,u),h=m.createHref(r);try{s.pushState(d,"",h)}catch(f){if(f instanceof DOMException&&"DataCloneError"===f.name)throw f;i.location.assign(h)}o&&l&&l({action:a,location:m.location,delta:1})}function f(e,t){a=id.Replace;let r=pd(m.location,e,t);n&&n(r,e),u=c();let i=fd(r,u),d=m.createHref(r);s.replaceState(i,"",d),o&&l&&l({action:a,location:m.location,delta:0})}function p(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:md(e);return n=n.replace(/ $/,"%20"),dd(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}let m={get action(){return a},get location(){return e(i,s)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ud,d),l=e,()=>{i.removeEventListener(ud,d),l=null}},createHref:e=>t(i,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:h,replace:f,go:e=>s.go(e)};return m}((function(e,t){let{pathname:n="/",search:r="",hash:i=""}=gd(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),pd("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"==typeof t?t:md(t))}),(function(e,t){hd("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),e)}function dd(e,t){if(!1===e||null==e)throw new Error(t)}function hd(e,t){if(!e)try{throw new Error(t)}catch(Tq){}}function fd(e,t){return{usr:e.state,key:e.key,idx:t}}function pd(e,t,n,r){return void 0===n&&(n=null),ld({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?gd(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function md(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function gd(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var vd,yd;function bd(e,t,n){return void 0===n&&(n="/"),function(e,t,n,r){let i="string"==typeof t?gd(t):t,o=Ld(i.pathname||"/",n);if(null==o)return null;let s=wd(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(s);let a=null;for(let l=0;null==a&&l<s.length;++l){let e=Nd(o);a=Ad(s[l],e,r)}return a}(e,t,n,!1)}function wd(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,o)=>{let s={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};s.relativePath.startsWith("/")&&(dd(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),s.relativePath=s.relativePath.slice(r.length));let a=Dd([r,s.relativePath]),l=n.concat(s);e.children&&e.children.length>0&&(dd(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+a+'".'),wd(e.children,t,l,a)),(null!=e.path||e.index)&&t.push({path:a,score:Pd(a,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of xd(e.path))i(e,t,r);else i(e,t)})),t}function xd(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let s=xd(r.join("/")),a=[];return a.push(...s.map((e=>""===e?o:[o,e].join("/")))),i&&a.push(...s),a.map((t=>e.startsWith("/")&&""===t?"/":t))}(yd=vd||(vd={})).data="data",yd.deferred="deferred",yd.redirect="redirect",yd.error="error";const Ed=/^:[\w-]+$/,kd=3,_d=2,Sd=1,Td=10,Cd=-2,Od=e=>"*"===e;function Pd(e,t){let n=e.split("/"),r=n.length;return n.some(Od)&&(r+=Cd),t&&(r+=_d),n.filter((e=>!Od(e))).reduce(((e,t)=>e+(Ed.test(t)?kd:""===t?Sd:Td)),r)}function Ad(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let e=r[a],l=a===r.length-1,u="/"===o?t:t.slice(o.length)||"/",c=Id({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},u),d=e.route;if(!c&&l&&n&&!r[r.length-1].route.index&&(c=Id({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(i,c.params),s.push({params:i,pathname:Dd([o,c.pathname]),pathnameBase:Fd(Dd([o,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(o=Dd([o,c.pathnameBase]))}return s}function Id(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);hd("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let o=new RegExp(i,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=a[n]||"";s=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const l=a[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:s,pattern:e}}function Nd(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return hd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function Ld(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function Md(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function Rd(e,t){let n=function(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function jd(e,t,n,r){let i;void 0===r&&(r=!1),"string"==typeof e?i=gd(e):(i=ld({},e),dd(!i.pathname||!i.pathname.includes("?"),Md("?","pathname","search",i)),dd(!i.pathname||!i.pathname.includes("#"),Md("#","pathname","hash",i)),dd(!i.search||!i.search.includes("#"),Md("#","search","hash",i)));let o,s=""===e||""===i.pathname,a=s?"/":i.pathname;if(null==a)o=n;else{let e=t.length-1;if(!r&&a.startsWith("..")){let t=a.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}o=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"==typeof e?gd(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:Vd(r),hash:Ud(i)}}(i,o),u=a&&"/"!==a&&a.endsWith("/"),c=(s||"."===a)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!c||(l.pathname+="/"),l}const Dd=e=>e.join("/").replace(/\/\/+/g,"/"),Fd=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Vd=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Ud=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";const zd=["post","put","patch","delete"];new Set(zd);const Bd=["get",...zd];
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function qd(){return qd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qd.apply(this,arguments)}new Set(Bd);const Hd=z.createContext(null),$d=z.createContext(null),Kd=z.createContext(null),Wd=z.createContext(null),Gd=z.createContext({outlet:null,matches:[],isDataRoute:!1}),Yd=z.createContext(null);function Qd(){return null!=z.useContext(Wd)}function Xd(){return Qd()||dd(!1),z.useContext(Wd).location}function Jd(e){z.useContext(Kd).static||z.useLayoutEffect(e)}function Zd(){let{isDataRoute:e}=z.useContext(Gd);return e?function(){let{router:e}=function(){let e=z.useContext(Hd);return e||dd(!1),e}(ah.UseNavigateStable),t=uh(lh.UseNavigateStable),n=z.useRef(!1);return Jd((()=>{n.current=!0})),z.useCallback((function(r,i){void 0===i&&(i={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,qd({fromRouteId:t},i)))}),[e,t])}():function(){Qd()||dd(!1);let e=z.useContext(Hd),{basename:t,future:n,navigator:r}=z.useContext(Kd),{matches:i}=z.useContext(Gd),{pathname:o}=Xd(),s=JSON.stringify(Rd(i,n.v7_relativeSplatPath)),a=z.useRef(!1);return Jd((()=>{a.current=!0})),z.useCallback((function(n,i){if(void 0===i&&(i={}),!a.current)return;if("number"==typeof n)return void r.go(n);let l=jd(n,JSON.parse(s),o,"path"===i.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:Dd([t,l.pathname])),(i.replace?r.replace:r.push)(l,i.state,i)}),[t,r,s,o,e])}()}function eh(){let{matches:e}=z.useContext(Gd),t=e[e.length-1];return t?t.params:{}}function th(e,t){let{relative:n}=void 0===t?{}:t,{future:r}=z.useContext(Kd),{matches:i}=z.useContext(Gd),{pathname:o}=Xd(),s=JSON.stringify(Rd(i,r.v7_relativeSplatPath));return z.useMemo((()=>jd(e,JSON.parse(s),o,"path"===n)),[e,s,o,n])}function nh(e,t){return function(e,t,n,r){Qd()||dd(!1);let{navigator:i}=z.useContext(Kd),{matches:o}=z.useContext(Gd),s=o[o.length-1],a=s?s.params:{};!s||s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u,c=Xd();if(t){var d;let e="string"==typeof t?gd(t):t;"/"===l||(null==(d=e.pathname)?void 0:d.startsWith(l))||dd(!1),u=e}else u=c;let h=u.pathname||"/",f=h;if("/"!==l){let e=l.replace(/^\//,"").split("/");f="/"+h.replace(/^\//,"").split("/").slice(e.length).join("/")}let p=bd(e,{pathname:f}),m=function(e,t,n,r){var i;void 0===t&&(t=[]);void 0===n&&(n=null);void 0===r&&(r=null);if(null==e){var o;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(o=r)&&o.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let s=e,a=null==(i=n)?void 0:i.errors;if(null!=a){let e=s.findIndex((e=>e.route.id&&void 0!==(null==a?void 0:a[e.route.id])));e>=0||dd(!1),s=s.slice(0,Math.min(s.length,e+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let e=s[c];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(u=c),e.route.id){let{loaderData:t,errors:r}=n,i=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||i){l=!0,s=u>=0?s.slice(0,u+1):[s[0]];break}}}return s.reduceRight(((e,r,i)=>{let o,c=!1,d=null,h=null;n&&(o=a&&r.route.id?a[r.route.id]:void 0,d=r.route.errorElement||ih,l&&(u<0&&0===i?(c=!0,h=null):u===i&&(c=!0,h=r.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,i+1)),p=()=>{let t;return t=o?d:c?h:r.route.Component?z.createElement(r.route.Component,null):r.route.element?r.route.element:e,z.createElement(sh,{match:r,routeContext:{outlet:e,matches:f,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===i)?z.createElement(oh,{location:n.location,revalidation:n.revalidation,component:d,error:o,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()}),null)}(p&&p.map((e=>Object.assign({},e,{params:Object.assign({},a,e.params),pathname:Dd([l,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:Dd([l,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),o,n,r);if(t&&m)return z.createElement(Wd.Provider,{value:{location:qd({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:id.Pop}},m);return m}(e,t)}function rh(){let e=function(){var e;let t=z.useContext(Yd),n=function(){let e=z.useContext($d);return e||dd(!1),e}(lh.UseRouteError),r=uh(lh.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},t),n?z.createElement("pre",{style:r},n):null,null)}const ih=z.createElement(rh,null);class oh extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){}render(){return void 0!==this.state.error?z.createElement(Gd.Provider,{value:this.props.routeContext},z.createElement(Yd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sh(e){let{routeContext:t,match:n,children:r}=e,i=z.useContext(Hd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(Gd.Provider,{value:t},r)}var ah=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ah||{}),lh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(lh||{});function uh(e){let t=function(){let e=z.useContext(Gd);return e||dd(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||dd(!1),n.route.id}function ch(e){let{to:t,replace:n,state:r,relative:i}=e;Qd()||dd(!1);let{future:o,static:s}=z.useContext(Kd),{matches:a}=z.useContext(Gd),{pathname:l}=Xd(),u=Zd(),c=jd(t,Rd(a,o.v7_relativeSplatPath),l,"path"===i),d=JSON.stringify(c);return z.useEffect((()=>u(JSON.parse(d),{replace:n,state:r,relative:i})),[u,d,i,n,r]),null}function dh(e){dd(!1)}function hh(e){let{basename:t="/",children:n=null,location:r,navigationType:i=id.Pop,navigator:o,static:s=!1,future:a}=e;Qd()&&dd(!1);let l=t.replace(/^\/*/,"/"),u=z.useMemo((()=>({basename:l,navigator:o,static:s,future:qd({v7_relativeSplatPath:!1},a)})),[l,a,o,s]);"string"==typeof r&&(r=gd(r));let{pathname:c="/",search:d="",hash:h="",state:f=null,key:p="default"}=r,m=z.useMemo((()=>{let e=Ld(c,l);return null==e?null:{location:{pathname:e,search:d,hash:h,state:f,key:p},navigationType:i}}),[l,c,d,h,f,p,i]);return null==m?null:z.createElement(Kd.Provider,{value:u},z.createElement(Wd.Provider,{children:n,value:m}))}function fh(e){let{children:t,location:n}=e;return nh(ph(t),n)}function ph(e,t){void 0===t&&(t=[]);let n=[];return z.Children.forEach(e,((e,r)=>{if(!z.isValidElement(e))return;let i=[...t,r];if(e.type===z.Fragment)return void n.push.apply(n,ph(e.props.children,i));e.type!==dh&&dd(!1),e.props.index&&e.props.children&&dd(!1);let o={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=ph(e.props.children,i)),n.push(o)})),n}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mh(){return mh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mh.apply(this,arguments)}new Promise((()=>{}));const gh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch(Tq){}const vh=q.startTransition;function yh(e){let{basename:t,children:n,future:r,window:i}=e,o=z.useRef();null==o.current&&(o.current=cd({window:i,v5Compat:!0}));let s=o.current,[a,l]=z.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=z.useCallback((e=>{u&&vh?vh((()=>l(e))):l(e)}),[l,u]);return z.useLayoutEffect((()=>s.listen(c)),[s,c]),z.createElement(hh,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const bh="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,wh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xh=z.forwardRef((function(e,t){let n,{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,h=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,gh),{basename:f}=z.useContext(Kd),p=!1;if("string"==typeof u&&wh.test(u)&&(n=u,bh))try{let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u),n=Ld(t.pathname,f);t.origin===e.origin&&null!=n?u=n+t.search+t.hash:p=!0}catch(Tq){}let m=function(e,t){let{relative:n}=void 0===t?{}:t;Qd()||dd(!1);let{basename:r,navigator:i}=z.useContext(Kd),{hash:o,pathname:s,search:a}=th(e,{relative:n}),l=s;return"/"!==r&&(l="/"===s?r:Dd([r,s])),i.createHref({pathname:l,search:a,hash:o})}(u,{relative:i}),g=function(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=void 0===t?{}:t,l=Zd(),u=Xd(),c=th(e,{relative:s});return z.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:md(u)===md(c);l(e,{replace:n,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}}),[u,l,c,r,i,n,e,o,s,a])}(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});return z.createElement("a",mh({},h,{href:n||m,onClick:p||o?r:function(e){r&&r(e),e.defaultPrevented||g(e)},ref:t,target:l}))}));var Eh,kh,_h,Sh;(kh=Eh||(Eh={})).UseScrollRestoration="useScrollRestoration",kh.UseSubmit="useSubmit",kh.UseSubmitFetcher="useSubmitFetcher",kh.UseFetcher="useFetcher",kh.useViewTransitionState="useViewTransitionState",(Sh=_h||(_h={})).UseFetcher="useFetcher",Sh.UseFetchers="useFetchers",Sh.UseScrollRestoration="useScrollRestoration";var Th={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Oh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,l=a?e[i+2]:0,u=t>>2,c=(3&t)<<4|s>>4;let d=(15&s)<<2|l>>6,h=63&l;a||(h=64,o||(d=64)),r.push(n[u],n[c],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ch(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const s=i<e.length?n[e.charAt(i)]:64;++i;const a=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==s||null==a)throw new Ph;const l=t<<2|o>>4;if(r.push(l),64!==s){const e=o<<4&240|s>>2;if(r.push(e),64!==a){const e=s<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ph extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ah=function(e){return function(e){const t=Ch(e);return Oh.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Ih=function(e){try{return Oh.decodeString(e,!0)}catch(Tq){}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nh=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Lh=()=>{try{return Nh()||(()=>{if("undefined"==typeof process)return;const e=Th.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(Tq){return}const t=e&&Ih(e[1]);return t&&JSON.parse(t)})()}catch(Tq){return}},Mh=e=>{var t,n;return null===(n=null===(t=Lh())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Rh=()=>{var e;return null===(e=Lh())||void 0===e?void 0:e.config},jh=e=>{var t;return null===(t=Lh())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fh(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Vh(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Uh(){return!function(){var e;const t=null===(e=Lh())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(Tq){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zh(){try{return"object"==typeof indexedDB}catch(Tq){return!1}}function Bh(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}class qh extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,qh.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hh.prototype.create)}}class Hh{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace($h,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`;return new qh(r,s,n)}}const $h=/\{\$([^}]+)}/g;function Kh(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(Wh(n)&&Wh(o)){if(!Kh(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wh(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Yh(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function Qh(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class Xh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Jh),void 0===r.error&&(r.error=Jh),void 0===r.complete&&(r.complete=Jh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(Tq){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(Tq){"undefined"!=typeof console&&console.error}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Jh(){}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(e){return e&&e._delegate?e._delegate:e}class tf{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Dh;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(Tq){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(Tq){if(r)return null;throw Tq}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:nf})}catch(Tq){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(Tq){}}}}clearInstance(e=nf){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=nf){return this.instances.has(e)}getOptions(e=nf){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===nf?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e=nf){return this.component?this.component.multipleInstances?e:nf:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class of{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new rf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sf,af;(af=sf||(sf={}))[af.DEBUG=0]="DEBUG",af[af.VERBOSE=1]="VERBOSE",af[af.INFO=2]="INFO",af[af.WARN=3]="WARN",af[af.ERROR=4]="ERROR",af[af.SILENT=5]="SILENT";const lf={debug:sf.DEBUG,verbose:sf.VERBOSE,info:sf.INFO,warn:sf.WARN,error:sf.ERROR,silent:sf.SILENT},uf=sf.INFO,cf={[sf.DEBUG]:"log",[sf.VERBOSE]:"log",[sf.INFO]:"info",[sf.WARN]:"warn",[sf.ERROR]:"error"},df=(e,t,...n)=>{if(t<e.logLevel)return;(new Date).toISOString();if(!cf[t])throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class hf{constructor(e){this.name=e,this._logLevel=uf,this._logHandler=df,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in sf))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?lf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,sf.DEBUG,...e),this._logHandler(this,sf.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,sf.VERBOSE,...e),this._logHandler(this,sf.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,sf.INFO,...e),this._logHandler(this,sf.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,sf.WARN,...e),this._logHandler(this,sf.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,sf.ERROR,...e),this._logHandler(this,sf.ERROR,...e)}}let ff,pf;const mf=new WeakMap,gf=new WeakMap,vf=new WeakMap,yf=new WeakMap,bf=new WeakMap;let wf={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return gf.get(e);if("objectStoreNames"===t)return e.objectStoreNames||vf.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kf(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function xf(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(pf||(pf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(_f(this),t),kf(mf.get(this))}:function(...t){return kf(e.apply(_f(this),t))}:function(t,...n){const r=e.call(_f(this),t,...n);return vf.set(r,t.sort?t.sort():[t]),kf(r)}}function Ef(e){return"function"==typeof e?xf(e):(e instanceof IDBTransaction&&function(e){if(gf.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));gf.set(e,t)}(e),t=e,(ff||(ff=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,wf):e);var t}function kf(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(kf(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&mf.set(t,e)})).catch((()=>{})),bf.set(t,e),t}(e);if(yf.has(e))return yf.get(e);const t=Ef(e);return t!==e&&(yf.set(e,t),bf.set(t,e)),t}const _f=e=>bf.get(e);function Sf(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=kf(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(kf(s.result),e.oldVersion,e.newVersion,kf(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const Tf=["get","getKey","getAll","getAllKeys","count"],Cf=["put","add","delete","clear"],Of=new Map;function Pf(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Of.get(t))return Of.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Cf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Tf.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return Of.set(t,o),o}wf=(e=>({...e,get:(t,n,r)=>Pf(t,n)||e.get(t,n,r),has:(t,n)=>!!Pf(t,n)||e.has(t,n)}))(wf);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Af{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const If="@firebase/app",Nf="0.10.13",Lf=new hf("@firebase/app"),Mf="@firebase/app-compat",Rf="@firebase/analytics-compat",jf="@firebase/analytics",Df="@firebase/app-check-compat",Ff="@firebase/app-check",Vf="@firebase/auth",Uf="@firebase/auth-compat",zf="@firebase/database",Bf="@firebase/data-connect",qf="@firebase/database-compat",Hf="@firebase/functions",$f="@firebase/functions-compat",Kf="@firebase/installations",Wf="@firebase/installations-compat",Gf="@firebase/messaging",Yf="@firebase/messaging-compat",Qf="@firebase/performance",Xf="@firebase/performance-compat",Jf="@firebase/remote-config",Zf="@firebase/remote-config-compat",ep="@firebase/storage",tp="@firebase/storage-compat",np="@firebase/firestore",rp="@firebase/vertexai-preview",ip="@firebase/firestore-compat",op="firebase",sp="[DEFAULT]",ap={[If]:"fire-core",[Mf]:"fire-core-compat",[jf]:"fire-analytics",[Rf]:"fire-analytics-compat",[Ff]:"fire-app-check",[Df]:"fire-app-check-compat",[Vf]:"fire-auth",[Uf]:"fire-auth-compat",[zf]:"fire-rtdb",[Bf]:"fire-data-connect",[qf]:"fire-rtdb-compat",[Hf]:"fire-fn",[$f]:"fire-fn-compat",[Kf]:"fire-iid",[Wf]:"fire-iid-compat",[Gf]:"fire-fcm",[Yf]:"fire-fcm-compat",[Qf]:"fire-perf",[Xf]:"fire-perf-compat",[Jf]:"fire-rc",[Zf]:"fire-rc-compat",[ep]:"fire-gcs",[tp]:"fire-gcs-compat",[np]:"fire-fst",[ip]:"fire-fst-compat",[rp]:"fire-vertex","fire-js":"fire-js",[op]:"fire-js-all"},lp=new Map,up=new Map,cp=new Map;function dp(e,t){try{e.container.addComponent(t)}catch(Tq){Lf.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,Tq)}}function hp(e){const t=e.name;if(cp.has(t))return Lf.debug(`There were multiple attempts to register component ${t}.`),!1;cp.set(t,e);for(const n of lp.values())dp(n,e);for(const n of up.values())dp(n,e);return!0}function fp(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function pp(e){return void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=new Hh("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gp{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new tf("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mp.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="10.14.1";function yp(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:sp,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw mp.create("bad-app-name",{appName:String(i)});if(n||(n=Rh()),!n)throw mp.create("no-options");const o=lp.get(i);if(o){if(Kh(n,o.options)&&Kh(r,o.config))return o;throw mp.create("duplicate-app",{appName:i})}const s=new of(i);for(const l of cp.values())s.addComponent(l);const a=new gp(n,r,s);return lp.set(i,a),a}function bp(e=sp){const t=lp.get(e);if(!t&&e===sp&&Rh())return yp();if(!t)throw mp.create("no-app",{appName:e});return t}function wp(e,t,n){var r;let i=null!==(r=ap[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Lf.warn(e.join(" "))}hp(new tf(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="firebase-heartbeat-store";let Ep=null;function kp(){return Ep||(Ep=Sf("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(xp)}catch(Tq){}}}).catch((e=>{throw mp.create("idb-open",{originalErrorMessage:e.message})}))),Ep}async function _p(e,t){try{const n=(await kp()).transaction(xp,"readwrite"),r=n.objectStore(xp);await r.put(t,Sp(e)),await n.done}catch(Tq){if(Tq instanceof qh)Lf.warn(Tq.message);else{const t=mp.create("idb-set",{originalErrorMessage:null==Tq?void 0:Tq.message});Lf.warn(t.message)}}}function Sp(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Op(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Cp();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}catch(Tq){Lf.warn(Tq)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Cp(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Pp(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=Ah(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(Tq){return Lf.warn(Tq),""}}}function Cp(){return(new Date).toISOString().substring(0,10)}class Op{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!zh()&&Bh().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await kp()).transaction(xp),n=await t.objectStore(xp).get(Sp(e));return await t.done,n}catch(Tq){if(Tq instanceof qh)Lf.warn(Tq.message);else{const t=mp.create("idb-get",{originalErrorMessage:null==Tq?void 0:Tq.message});Lf.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return _p(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return _p(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Pp(e){return Ah(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ap;Ap="",hp(new tf("platform-logger",(e=>new Af(e)),"PRIVATE")),hp(new tf("heartbeat",(e=>new Tp(e)),"PRIVATE")),wp(If,Nf,Ap),wp(If,Nf,"esm2017"),wp("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
wp("firebase","10.14.1","app");var Ip,Np,Lp="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var o=e.g[3],s=t+(o^n&(i^o))+r[0]+3614090360&4294967295;s=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=n+(s<<7&4294967295|s>>>25))+((s=o+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|s>>>20))+((s=i+(n^o&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|s>>>15))+((s=n+(t^i&(o^t))+r[3]+3250441966&4294967295)<<22&4294967295|s>>>10))+((s=t+(o^n&(i^o))+r[4]+4118548399&4294967295)<<7&4294967295|s>>>25))+((s=o+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|s>>>20))+((s=i+(n^o&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|s>>>15))+((s=n+(t^i&(o^t))+r[7]+4249261313&4294967295)<<22&4294967295|s>>>10))+((s=t+(o^n&(i^o))+r[8]+1770035416&4294967295)<<7&4294967295|s>>>25))+((s=o+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|s>>>20))+((s=i+(n^o&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|s>>>15))+((s=n+(t^i&(o^t))+r[11]+2304563134&4294967295)<<22&4294967295|s>>>10))+((s=t+(o^n&(i^o))+r[12]+1804603682&4294967295)<<7&4294967295|s>>>25))+((s=o+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|s>>>20))+((s=i+(n^o&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|s>>>15))+((s=n+(t^i&(o^t))+r[15]+1236535329&4294967295)<<22&4294967295|s>>>10))+((s=t+(i^o&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|s>>>27))+((s=o+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|s>>>23))+((s=i+(t^n&(o^t))+r[11]+643717713&4294967295)<<14&4294967295|s>>>18))+((s=n+(o^t&(i^o))+r[0]+3921069994&4294967295)<<20&4294967295|s>>>12))+((s=t+(i^o&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|s>>>27))+((s=o+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|s>>>23))+((s=i+(t^n&(o^t))+r[15]+3634488961&4294967295)<<14&4294967295|s>>>18))+((s=n+(o^t&(i^o))+r[4]+3889429448&4294967295)<<20&4294967295|s>>>12))+((s=t+(i^o&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|s>>>27))+((s=o+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|s>>>23))+((s=i+(t^n&(o^t))+r[3]+4107603335&4294967295)<<14&4294967295|s>>>18))+((s=n+(o^t&(i^o))+r[8]+1163531501&4294967295)<<20&4294967295|s>>>12))+((s=t+(i^o&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|s>>>27))+((s=o+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|s>>>23))+((s=i+(t^n&(o^t))+r[7]+1735328473&4294967295)<<14&4294967295|s>>>18))+((s=n+(o^t&(i^o))+r[12]+2368359562&4294967295)<<20&4294967295|s>>>12))+((s=t+(n^i^o)+r[5]+4294588738&4294967295)<<4&4294967295|s>>>28))+((s=o+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|s>>>21))+((s=i+(o^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|s>>>16))+((s=n+(i^o^t)+r[14]+4259657740&4294967295)<<23&4294967295|s>>>9))+((s=t+(n^i^o)+r[1]+2763975236&4294967295)<<4&4294967295|s>>>28))+((s=o+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|s>>>21))+((s=i+(o^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|s>>>16))+((s=n+(i^o^t)+r[10]+3200236656&4294967295)<<23&4294967295|s>>>9))+((s=t+(n^i^o)+r[13]+681279174&4294967295)<<4&4294967295|s>>>28))+((s=o+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|s>>>21))+((s=i+(o^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|s>>>16))+((s=n+(i^o^t)+r[6]+76029189&4294967295)<<23&4294967295|s>>>9))+((s=t+(n^i^o)+r[9]+3654602809&4294967295)<<4&4294967295|s>>>28))+((s=o+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|s>>>21))+((s=i+(o^t^n)+r[15]+530742520&4294967295)<<16&4294967295|s>>>16))+((s=n+(i^o^t)+r[2]+3299628645&4294967295)<<23&4294967295|s>>>9))+((s=t+(i^(n|~o))+r[0]+4096336452&4294967295)<<6&4294967295|s>>>26))+((s=o+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|s>>>22))+((s=i+(t^(o|~n))+r[14]+2878612391&4294967295)<<15&4294967295|s>>>17))+((s=n+(o^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|s>>>11))+((s=t+(i^(n|~o))+r[12]+1700485571&4294967295)<<6&4294967295|s>>>26))+((s=o+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|s>>>22))+((s=i+(t^(o|~n))+r[10]+4293915773&4294967295)<<15&4294967295|s>>>17))+((s=n+(o^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|s>>>11))+((s=t+(i^(n|~o))+r[8]+1873313359&4294967295)<<6&4294967295|s>>>26))+((s=o+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|s>>>22))+((s=i+(t^(o|~n))+r[6]+2734768916&4294967295)<<15&4294967295|s>>>17))+((s=n+(o^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|s>>>11))+((o=(t=n+((s=t+(i^(n|~o))+r[4]+4149444226&4294967295)<<6&4294967295|s>>>26))+((s=o+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|s>>>22))^((i=o+((s=i+(t^(o|~n))+r[2]+718787259&4294967295)<<15&4294967295|s>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+o&4294967295}function r(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var o=0|e[i];r&&o==t||(n[i]=o,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}(t,(function(){this.blockSize=-1})),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,i=this.B,o=this.h,s=0;s<t;){if(0==o)for(;s<=r;)n(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(i[o++]=e.charCodeAt(s++),o==this.blockSize){n(this,i),o=0;break}}else for(;s<t;)if(i[o++]=e[s++],o==this.blockSize){n(this,i),o=0;break}}this.h=o,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var i={};function o(e){return-128<=e&&128>e?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new r([0|e],0>e?-1:0)})):new r([0|e],0>e?-1:0)}function s(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return h(s(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new r(t,0)}var a=o(0),l=o(1),u=o(16777216);function c(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function d(e){return-1==e.h}function h(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(l)}function f(e,t){return e.add(h(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(c(t))throw Error("division by zero");if(c(e))return new m(a,a);if(d(e))return t=g(h(e),t),new m(h(t.g),h(t.h));if(d(t))return t=g(e,h(t)),new m(h(t.g),t.h);if(30<e.g.length){if(d(e)||d(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;0>=r.l(e);)n=v(n),r=v(r);var i=y(n,1),o=y(r,1);for(r=y(r,2),n=y(n,2);!c(r);){var u=o.add(r);0>=u.l(e)&&(i=i.add(n),o=u),r=y(r,1),n=y(n,1)}return t=f(e,i.j(t)),new m(i,t)}for(i=a;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),u=(o=s(n)).j(t);d(u)||0<u.l(e);)u=(o=s(n-=r)).j(t);c(o)&&(o=l),i=i.add(o),e=f(e,u)}return new m(i,e)}function v(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function y(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,o=[],s=0;s<i;s++)o[s]=0<t?e.i(s+n)>>>t|e.i(s+n+1)<<32-t:e.i(s+n);return new r(o,e.h)}(e=r.prototype).m=function(){if(d(this))return-h(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(c(this))return"0";if(d(this))return"-"+h(this).toString(e);for(var t=s(Math.pow(e,6)),n=this,r="";;){var i=g(n,t).g,o=((0<(n=f(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(c(n=i))return o+r;for(;6>o.length;)o="0"+o;r=o+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return d(e=f(this,e))?-1:c(e)?0:1},e.abs=function(){return d(this)?h(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,o=0;o<=t;o++){var s=i+(65535&this.i(o))+(65535&e.i(o)),a=(s>>>16)+(this.i(o)>>>16)+(e.i(o)>>>16);i=a>>>16,s&=65535,a&=65535,n[o]=a<<16|s}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(c(this)||c(e))return a;if(d(this))return d(e)?h(this).j(h(e)):h(h(this).j(e));if(d(e))return h(this.j(h(e)));if(0>this.l(u)&&0>e.l(u))return s(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var o=0;o<e.g.length;o++){var l=this.i(i)>>>16,f=65535&this.i(i),m=e.i(o)>>>16,g=65535&e.i(o);n[2*i+2*o]+=f*g,p(n,2*i+2*o),n[2*i+2*o+1]+=l*g,p(n,2*i+2*o+1),n[2*i+2*o+1]+=f*m,p(n,2*i+2*o+1),n[2*i+2*o+2]+=l*m,p(n,2*i+2*o+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},e.A=function(e){return g(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,Np=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=s,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return h(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=s(Math.pow(n,8)),i=a,o=0;o<t.length;o+=8){var l=Math.min(8,t.length-o),u=parseInt(t.substring(o,o+l),n);8>l?(l=s(Math.pow(n,l)),i=i.j(l).add(s(u))):i=(i=i.j(r)).add(s(u))}return i},Ip=r}).apply(void 0!==Lp?Lp:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Mp,Rp,jp,Dp,Fp,Vp,Up,zp,Bp="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Bp&&Bp];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var i=n;e=e.split(".");for(var o=0;o<e.length-1;o++){var s=e[o];if(!(s in i))break e;i=i[s]}(r=r(o=i[e=e[e.length-1]]))!=o&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",(function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,(function(e,t){return t}))}}));
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},i=this||self;function o(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function s(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function a(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function u(e,t,n){return(u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:l).apply(null,arguments)}function c(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function d(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}function h(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(o(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function p(e){return/^[\s\xa0]*$/.test(e)}function m(){var e=i.navigator;return e&&(e=e.userAgent)?e:""}function g(e){return g[" "](e),e}g[" "]=function(){};var v=!(-1==m().indexOf("Gecko")||-1!=m().toLowerCase().indexOf("webkit")&&-1==m().indexOf("Edge")||-1!=m().indexOf("Trident")||-1!=m().indexOf("MSIE")||-1!=m().indexOf("Edge"));function y(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function b(e){const t={};for(const n in e)t[n]=e[n];return t}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<w.length;t++)n=w[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function E(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function k(e){i.setTimeout((()=>{throw e}),0)}function _(){var e=P;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var S=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new T),(e=>e.reset()));class T{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let C,O=!1,P=new class{constructor(){this.h=this.g=null}add(e,t){const n=S.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},A=()=>{const e=i.Promise.resolve(void 0);C=()=>{e.then(I)}};var I=()=>{for(var e;e=_();){try{e.h.call(e.g)}catch(n){k(n)}var t=S;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}O=!1};function N(){this.s=this.s,this.C=this.C}function L(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}N.prototype.s=!1,N.prototype.ma=function(){this.s||(this.s=!0,this.N())},N.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},L.prototype.h=function(){this.defaultPrevented=!0};var M=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(n){}return e}();function R(e,t){if(L.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(v){e:{try{g(t.nodeName);var i=!0;break e}catch(o){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:j[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&R.aa.h.call(this)}}d(R,L);var j={2:"touch",3:"pen",4:"mouse"};R.prototype.h=function(){R.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),F=0;function V(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++F,this.da=this.fa=!1}function U(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function z(e){this.src=e,this.g={},this.h=0}function B(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],o=Array.prototype.indexOf.call(i,t,void 0);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(U(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function q(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.da&&o.listener==t&&o.capture==!!n&&o.ha==r)return i}return-1}z.prototype.add=function(e,t,n,r,i){var o=e.toString();(e=this.g[o])||(e=this.g[o]=[],this.h++);var s=q(e,t,r,i);return-1<s?(t=e[s],n||(t.fa=!1)):((t=new V(t,this.src,o,!!r,i)).fa=n,e.push(t)),t};var H="closure_lm_"+(1e6*Math.random()|0),$={};function K(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)K(e,t[o],n,r,i);return null}return n=Z(n),e&&e[D]?e.K(t,n,s(r)?!!r.capture:!!r,i):function(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var a=s(i)?!!i.capture:!!i,l=X(e);if(l||(e[H]=l=new z(e)),n=l.add(t,n,r,a,o),n.proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Q;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)M||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Y(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,i)}function W(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)W(e,t[o],n,r,i);else r=s(r)?!!r.capture:!!r,n=Z(n),e&&e[D]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=q(o=e.g[t],n,r,i))&&(U(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete e.g[t],e.h--)))):e&&(e=X(e))&&(t=e.g[t.toString()],e=-1,t&&(e=q(t,n,r,i)),(n=-1<e?t[e]:null)&&G(n))}function G(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[D])B(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Y(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=X(t))?(B(n,e),0==n.h&&(n.src=null,t[H]=null)):U(e)}}}function Y(e){return e in $?$[e]:$[e]="on"+e}function Q(e,t){if(e.da)e=!0;else{t=new R(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&G(e),e=n.call(r,t)}return e}function X(e){return(e=e[H])instanceof z?e:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(e){return"function"==typeof e?e:(e[J]||(e[J]=function(t){return e.handleEvent(t)}),e[J])}function ee(){N.call(this),this.i=new z(this),this.M=this,this.F=null}function te(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new L(t,e);else if(t instanceof L)t.target=t.target||e;else{var i=t;x(t=new L(r,e),i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=ne(s,r,!0,t)&&i}if(i=ne(s=t.g=e,r,!0,t)&&i,i=ne(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)i=ne(s=t.g=n[o],r,!1,t)&&i}function ne(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.da&&s.capture==n){var a=s.listener,l=s.ha||s.src;s.fa&&B(e.i,s),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}function re(e,t,n){if("function"==typeof e)n&&(e=u(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=u(e.handleEvent,e)}return 2147483647<Number(t)?-1:i.setTimeout(e,t||0)}function ie(e){e.g=re((()=>{e.g=null,e.i&&(e.i=!1,ie(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}d(ee,N),ee.prototype[D]=!0,ee.prototype.removeEventListener=function(e,t,n,r){W(this,e,t,n,r)},ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)U(n[r]);delete t.g[e],t.h--}}this.F=null},ee.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ee.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class oe extends N{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ie(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function se(e){N.call(this),this.h=e,this.g={}}d(se,N);var ae=[];function le(e){y(e.g,(function(e,t){this.g.hasOwnProperty(t)&&G(e)}),e),e.g={}}se.prototype.N=function(){se.aa.N.call(this),le(this)},se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ue=i.JSON.stringify,ce=i.JSON.parse,de=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function he(){}function fe(e){return e.h||(e.h=e.i())}function pe(){}he.prototype.h=null;var me={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ge(){L.call(this,"d")}function ve(){L.call(this,"c")}d(ge,L),d(ve,L);var ye={},be=null;function we(){return be=be||new ee}function xe(e){L.call(this,ye.La,e)}function Ee(e){const t=we();te(t,new xe(t))}function ke(e,t){L.call(this,ye.STAT_EVENT,e),this.stat=t}function _e(e){const t=we();te(t,new ke(t,e))}function Se(e,t){L.call(this,ye.Ma,e),this.size=t}function Te(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout((function(){e()}),t)}function Ce(){this.g=!0}function Oe(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return ue(n)}catch(a){return t}}(e,n)+(r?" "+r:"")}))}ye.La="serverreachability",d(xe,L),ye.STAT_EVENT="statevent",d(ke,L),ye.Ma="timingevent",d(Se,L),Ce.prototype.xa=function(){this.g=!1},Ce.prototype.info=function(){};var Pe,Ae={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ie={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Ne(){}function Le(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new se(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Me}function Me(){this.i=null,this.g="",this.h=!1}d(Ne,he),Ne.prototype.g=function(){return new XMLHttpRequest},Ne.prototype.i=function(){return{}},Pe=new Ne;var Re={},je={};function De(e,t,n){e.L=1,e.v=ut(it(t)),e.m=n,e.P=!0,Fe(e,null)}function Fe(e,t){e.F=Date.now(),ze(e),e.A=it(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),kt(n.i,"t",r),e.C=0,n=e.j.J,e.h=new Me,e.g=dn(e.j,n?t:null,!e.m),0<e.O&&(e.M=new oe(u(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ae[0]=i.toString()),i=ae);for(var o=0;o<i.length;o++){var s=K(n,i[o],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}t=e.H?b(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ee(),function(e,t,n,r,i,o){e.info((function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");s=2<=d.length&&"type"==d[1]?s+(c+"=")+u+"&":s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+s}))}(e.i,e.u,e.A,e.l,e.R,e.m)}function Ve(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function Ue(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?je:(n=Number(t.substring(n,r)),isNaN(n)?Re:(r+=1)+n>t.length?je:(t=t.slice(r,r+n),e.C=r+n,t))}function ze(e){e.S=Date.now()+e.I,Be(e,e.I)}function Be(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Te(u(e.ba,e),t)}function qe(e){e.B&&(i.clearTimeout(e.B),e.B=null)}function He(e){0==e.j.G||e.J||sn(e.j,e)}function $e(e){qe(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,le(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function Ke(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||Xe(n.h,e)))if(!e.K&&Xe(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(c){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;on(n),Gt(n)}tn(n),_e(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Te(u(n.Za,n),6e3));if(1>=Qe(n.h)&&n.ca){try{n.ca()}catch(c){}n.ca=void 0}}else ln(n,11)}else if((e.K||n.g==e)&&on(n),!p(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const t=u[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=r.h;o.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(Je(o,o.h),o.h=null))}if(r.D){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,lt(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms"));var s=e;if((r=n).qa=cn(r,r.J?r.ia:null,r.W),s.K){Ze(r.h,s);var a=s,l=r.L;l&&(a.I=l),a.B&&(qe(a),ze(a)),r.g=s}else en(r);0<n.i.length&&Qt(n)}else"stop"!=u[0]&&"close"!=u[0]||ln(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ln(n,7):Wt(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Ee()}catch(c){}}Le.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==qt(e)?t.j():this.Y(e)},Le.prototype.Y=function(e){try{if(e==this.g)e:{const h=qt(this.g);var t=this.g.Ba();this.g.Z();if(!(3>h)&&(3!=h||this.g&&(this.h.h||this.g.oa()||Ht(this.g)))){this.J||4!=h||7==t||Ee(),qe(this);var n=this.g.Z();this.X=n;t:if(Ve(this)){var r=Ht(this.g);e="";var o=r.length,s=4==qt(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){$e(this),He(this);var a="";break t}this.h.i=new i.TextDecoder}for(t=0;t<o;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(s&&t==o-1)});r.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,o,s){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+o+" "+s}))}(this.i,this.u,this.A,this.l,this.R,h,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(l)){var c=l;break t}}c=null}if(!(n=c)){this.o=!1,this.s=3,_e(12),$e(this),He(this);break e}Oe(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ke(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<a.length;){if(e=Ue(this,a),e==je){4==h&&(this.s=4,_e(14),n=!1),Oe(this.i,this.l,null,"[Incomplete Response]");break}if(e==Re){this.s=4,_e(15),Oe(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}Oe(this.i,this.l,e,null),Ke(this,e)}if(Ve(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=h||0!=a.length||this.h.h||(this.s=1,_e(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var d=this.j;d.g==this&&d.ba&&!d.M&&(d.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),nn(d),d.M=!0,_e(11))}}else Oe(this.i,this.l,a,"[Invalid Chunked Response]"),$e(this),He(this)}else Oe(this.i,this.l,a,null),Ke(this,a);4==h&&$e(this),this.o&&!this.J&&(4==h?sn(this.j,this):(this.o=!1,ze(this)))}else(function(e){const t={};e=(e.g&&2<=qt(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(p(e[r]))continue;var n=E(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const o=t[i]||[];t[i]=o,o.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,_e(12)):(this.s=0,_e(13)),$e(this),He(this)}}}catch(h){}},Le.prototype.cancel=function(){this.J=!0,$e(this)},Le.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.i,this.A),2!=this.L&&(Ee(),_e(17)),$e(this),this.s=2,He(this)):Be(this,this.S-e)};var We=class{constructor(e,t){this.g=e,this.map=t}};function Ge(e){this.l=e||10,i.PerformanceNavigationTiming?e=0<(e=i.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ye(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Qe(e){return e.h?1:e.g?e.g.size:0}function Xe(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Je(e,t){e.g?e.g.add(t):e.h=t}function Ze(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function et(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return h(e.i)}function tt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(o(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(o(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(o(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}Ge.prototype.cancel=function(){if(this.i=et(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var nt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof rt){this.h=e.h,ot(this,e.j),this.o=e.o,this.g=e.g,st(this,e.s),this.l=e.l;var t=e.i,n=new bt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),at(this,n),this.m=e.m}else e&&(t=String(e).match(nt))?(this.h=!1,ot(this,t[1]||"",!0),this.o=dt(t[2]||""),this.g=dt(t[3]||"",!0),st(this,t[4]),this.l=dt(t[5]||"",!0),at(this,t[6]||"",!0),this.m=dt(t[7]||"")):(this.h=!1,this.i=new bt(null,this.h))}function it(e){return new rt(e)}function ot(e,t,n){e.j=n?dt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function st(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function at(e,t,n){t instanceof bt?(e.i=t,function(e,t){t&&!e.j&&(wt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(xt(this,t),kt(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=ht(t,vt)),e.i=new bt(t,e.h))}function lt(e,t,n){e.i.set(t,n)}function ut(e){return lt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function dt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ht(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ft),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ft(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}rt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ht(t,pt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(ht(t,pt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ht(n,"/"==n.charAt(0)?gt:mt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",ht(n,yt)),e.join("")};var pt=/[#\/\?@]/g,mt=/[#\?:]/g,gt=/[#\?]/g,vt=/[#\?@]/g,yt=/#/g;function bt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function wt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function xt(e,t){wt(e),t=_t(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Et(e,t){return wt(e),t=_t(e,t),e.g.has(t)}function kt(e,t,n){xt(e,t),0<n.length&&(e.i=null,e.g.set(_t(e,t),h(n)),e.h+=n.length)}function _t(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function St(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(o){}}function Tt(){this.g=new de}function Ct(e,t,n){const r=n||"";try{tt(e,(function(e,n){let i=e;s(e)&&(i=ue(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(Tq){throw t.push(r+"type="+encodeURIComponent("_badmap")),Tq}}function Ot(e){this.l=e.Ub||null,this.j=e.eb||!1}function Pt(e,t){ee.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function At(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function It(e){e.readyState=4,e.l=null,e.j=null,e.v=null,Nt(e)}function Nt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Lt(e){let t="";return y(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Mt(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Lt(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):lt(e,t,n))}function Rt(e){ee.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=bt.prototype).add=function(e,t){wt(this),this.i=null,e=_t(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){wt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.na=function(){wt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){wt(this);let t=[];if("string"==typeof e)Et(this,e)&&(t=t.concat(this.g.get(_t(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return wt(this),this.i=null,Et(this,e=_t(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.V(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")},d(Ot,he),Ot.prototype.g=function(){return new Pt(this.l,this.j)},Ot.prototype.i=function(e){return function(){return e}}({}),d(Pt,ee),(e=Pt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,Nt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||i).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,It(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Nt(this)),this.g&&(this.readyState=3,Nt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;At(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?It(this):Nt(this),3==this.readyState&&At(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,It(this))},e.Qa=function(e){this.g&&(this.response=e,It(this))},e.ga=function(){this.g&&It(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Pt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),d(Rt,ee);var jt=/^https?$/i,Dt=["POST","PUT"];function Ft(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Vt(e),zt(e)}function Vt(e){e.A||(e.A=!0,te(e,"complete"),te(e,"error"))}function Ut(e){if(e.h&&void 0!==r&&(!e.v[1]||4!=qt(e)||2!=e.Z()))if(e.u&&4==qt(e))re(e.Ea,0,e);else if(te(e,"readystatechange"),4==qt(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var o;if(o=0===r){var s=String(e.D).match(nt)[1]||null;!s&&i.self&&i.self.location&&(s=i.self.location.protocol.slice(0,-1)),o=!jt.test(s?s.toLowerCase():"")}n=o}if(n)te(e,"complete"),te(e,"success");else{e.m=6;try{var a=2<qt(e)?e.g.statusText:""}catch(l){a=""}e.l=a+" ["+e.Z()+"]",Vt(e)}}finally{zt(e)}}}function zt(e,t){if(e.g){Bt(e);const n=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||te(e,"ready");try{n.onreadystatechange=r}catch(Tq){}}}function Bt(e){e.I&&(i.clearTimeout(e.I),e.I=null)}function qt(e){return e.g?e.g.readyState:0}function Ht(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function $t(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Kt(e){this.Aa=0,this.i=[],this.j=new Ce,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$t("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$t("baseRetryDelayMs",5e3,e),this.cb=$t("retryDelaySeedMs",1e4,e),this.Wa=$t("forwardChannelMaxRetries",2,e),this.wa=$t("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new Ge(e&&e.concurrentRequestLimit),this.Da=new Tt,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Wt(e){if(Yt(e),3==e.G){var t=e.U++,n=it(e.I);if(lt(n,"SID",e.K),lt(n,"RID",t),lt(n,"TYPE","terminate"),Jt(e,n),(t=new Le(e,e.j,t)).L=2,t.v=ut(it(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=t.v,n=!0),n||(t.g=dn(t.j,null),t.g.ea(t.v)),t.F=Date.now(),ze(t)}un(e)}function Gt(e){e.g&&(nn(e),e.g.cancel(),e.g=null)}function Yt(e){Gt(e),e.u&&(i.clearTimeout(e.u),e.u=null),on(e),e.h.cancel(),e.s&&("number"==typeof e.s&&i.clearTimeout(e.s),e.s=null)}function Qt(e){if(!Ye(e.h)&&!e.s){e.s=!0;var t=e.Ga;C||A(),O||(C(),O=!0),P.add(t,e),e.B=0}}function Xt(e,t){var n;n=t?t.l:e.U++;const r=it(e.I);lt(r,"SID",e.K),lt(r,"RID",n),lt(r,"AID",e.T),Jt(e,r),e.m&&e.o&&Mt(r,e.m,e.o),n=new Le(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Zt(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Je(e.h,n),De(n,r,t)}function Jt(e,t){e.H&&y(e.H,(function(e,n){lt(t,n,e)})),e.l&&tt({},(function(e,n){lt(t,n,e)}))}function Zt(e,t,n){n=Math.min(e.i.length,n);var r=e.l?u(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=i[a].g;const l=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),s=!1;else try{Ct(l,e,"req"+n+"_")}catch(o){r&&r(l)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function en(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;C||A(),O||(C(),O=!0),P.add(t,e),e.v=0}}function tn(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Te(u(e.Fa,e),an(e,e.v)),e.v++,!0)}function nn(e){null!=e.A&&(i.clearTimeout(e.A),e.A=null)}function rn(e){e.g=new Le(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=it(e.qa);lt(t,"RID","rpc"),lt(t,"SID",e.K),lt(t,"AID",e.T),lt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&lt(t,"TO",e.ja),lt(t,"TYPE","xmlhttp"),Jt(e,t),e.m&&e.o&&Mt(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=ut(it(t)),n.m=null,n.P=!0,Fe(n,e)}function on(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function sn(e,t){var n=null;if(e.g==t){on(e),nn(e),e.g=null;var r=2}else{if(!Xe(e.h,t))return;n=t.D,Ze(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;te(r=we(),new Se(r,n)),Qt(e)}else en(e);else if(3==(i=t.s)||0==i&&0<t.X||!(1==r&&function(e,t){return!(Qe(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=Te(u(e.Ga,e,t),an(e,e.B)),e.B++,0)))}(e,t)||2==r&&tn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:ln(e,5);break;case 4:ln(e,10);break;case 3:ln(e,6);break;default:ln(e,2)}}function an(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function ln(e,t){if(e.j.info("Error code "+t),2==t){var n=u(e.fb,e),r=e.Xa;const t=!r;r=new rt(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||ot(r,"https"),ut(r),t?function(e,t){const n=new Ce;if(i.Image){const r=new Image;r.onload=c(St,n,"TestLoadImage: loaded",!0,t,r),r.onerror=c(St,n,"TestLoadImage: error",!1,t,r),r.onabort=c(St,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=c(St,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new Ce;const n=new AbortController,r=setTimeout((()=>{n.abort(),St(0,0,!1,t)}),1e4);fetch(e,{signal:n.signal}).then((e=>{clearTimeout(r),e.ok?St(0,0,!0,t):St(0,0,!1,t)})).catch((()=>{clearTimeout(r),St(0,0,!1,t)}))}(r.toString(),n)}else _e(2);e.G=0,e.l&&e.l.sa(t),un(e),Yt(e)}function un(e){if(e.G=0,e.ka=[],e.l){const t=et(e.h);0==t.length&&0==e.i.length||(f(e.ka,t),f(e.ka,e.i),e.h.i.length=0,h(e.i),e.i.length=0),e.l.ra()}}function cn(e,t,n){var r=n instanceof rt?it(n):new rt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),st(r,r.s);else{var o=i.location;r=o.protocol,t=t?t+"."+o.hostname:o.hostname,o=+o.port;var s=new rt(null);r&&ot(s,r),t&&(s.g=t),o&&st(s,o),n&&(s.l=n),r=s}return n=e.D,t=e.ya,n&&t&&lt(r,n,t),lt(r,"VER",e.la),Jt(e,r),r}function dn(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new Rt(new Ot({eb:n})):new Rt(e.pa)).Ha(e.J),t}function hn(){}function fn(){}function pn(e,t){ee.call(this),this.g=new Kt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!p(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!p(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new vn(this)}function mn(e){ge.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gn(){ve.call(this),this.status=1}function vn(e){this.g=e}(e=Rt.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pe.g(),this.v=this.o?fe(this.o):fe(Pe),this.g.onreadystatechange=u(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(s){return void Ft(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var o in r)n.set(o,r[o]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),o=i.FormData&&e instanceof i.FormData,!(0<=Array.prototype.indexOf.call(Dt,t,void 0))||r||o||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of n)this.g.setRequestHeader(i,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bt(this),this.u=!0,this.g.send(e),this.u=!1}catch(s){Ft(this,s)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),zt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zt(this,!0)),Rt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Ut(this):this.bb())},e.bb=function(){Ut(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<qt(this)?this.g.status:-1}catch(ct){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(ct){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ce(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Kt.prototype).la=8,e.G=1,e.connect=function(e,t,n,r){_e(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=cn(this,null,this.W),Qt(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Le(this,this.j,e);let o=this.o;if(this.S&&(o?(o=b(o),x(o,this.S)):o=this.S),null!==this.m||this.O||(i.H=o,o=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Zt(this,i,t),lt(n=it(this.I),"RID",e),lt(n,"CVER",22),this.D&&lt(n,"X-HTTP-Session-Id",this.D),Jt(this,n),o&&(this.O?t="headers="+encodeURIComponent(String(Lt(o)))+"&"+t:this.m&&Mt(n,this.m,o)),Je(this.h,i),this.Ua&&lt(n,"TYPE","init"),this.P?(lt(n,"$req",t),lt(n,"SID","null"),i.T=!0,De(i,n,null)):De(i,n,t),this.G=2}}else 3==this.G&&(e?Xt(this,e):0==this.i.length||Ye(this.h)||Xt(this))},e.Fa=function(){if(this.u=null,rn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Te(u(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_e(10),Gt(this),rn(this))},e.Za=function(){null!=this.C&&(this.C=null,Gt(this),tn(this),_e(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),_e(2)):(this.j.info("Failed to ping google.com"),_e(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=hn.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},fn.prototype.g=function(e,t){return new pn(e,t)},d(pn,ee),pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pn.prototype.close=function(){Wt(this.g)},pn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ue(e),e=n);t.i.push(new We(t.Ya++,e)),3==t.G&&Qt(t)},pn.prototype.N=function(){this.g.l=null,delete this.j,Wt(this.g),delete this.g,pn.aa.N.call(this)},d(mn,ge),d(gn,ve),d(vn,hn),vn.prototype.ua=function(){te(this.g,"a")},vn.prototype.ta=function(e){te(this.g,new mn(e))},vn.prototype.sa=function(e){te(this.g,new gn)},vn.prototype.ra=function(){te(this.g,"b")},fn.prototype.createWebChannel=fn.prototype.g,pn.prototype.send=pn.prototype.o,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,zp=function(){return new fn},Up=function(){return we()},Vp=ye,Fp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ae.NO_ERROR=0,Ae.TIMEOUT=8,Ae.HTTP_ERROR=6,Dp=Ae,Ie.COMPLETE="complete",jp=Ie,pe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Rp=pe,Rt.prototype.listenOnce=Rt.prototype.L,Rt.prototype.getLastError=Rt.prototype.Ka,Rt.prototype.getLastErrorCode=Rt.prototype.Ba,Rt.prototype.getStatus=Rt.prototype.Z,Rt.prototype.getResponseJson=Rt.prototype.Oa,Rt.prototype.getResponseText=Rt.prototype.oa,Rt.prototype.send=Rt.prototype.ea,Rt.prototype.setWithCredentials=Rt.prototype.Ha,Mp=Rt}).apply(void 0!==Bp?Bp:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const qp="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Hp.UNAUTHENTICATED=new Hp(null),Hp.GOOGLE_CREDENTIALS=new Hp("google-credentials-uid"),Hp.FIRST_PARTY=new Hp("first-party-uid"),Hp.MOCK_USER=new Hp("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let $p="10.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=new hf("@firebase/firestore");function Wp(){return Kp.logLevel}function Gp(e,...t){if(Kp.logLevel<=sf.DEBUG){const n=t.map(Xp);Kp.debug(`Firestore (${$p}): ${e}`,...n)}}function Yp(e,...t){if(Kp.logLevel<=sf.ERROR){const n=t.map(Xp);Kp.error(`Firestore (${$p}): ${e}`,...n)}}function Qp(e,...t){if(Kp.logLevel<=sf.WARN){const n=t.map(Xp);Kp.warn(`Firestore (${$p}): ${e}`,...n)}}function Xp(e){if("string"==typeof e)return e;try{
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
return t=e,JSON.stringify(t)}catch(Cq){return e}var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(e="Unexpected state"){const t=`FIRESTORE (${$p}) INTERNAL ASSERTION FAILED: `+e;throw Yp(t),new Error(t)}function Zp(e,t){e||Jp()}function em(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class nm extends qh{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class om{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Hp.UNAUTHENTICATED)))}shutdown(){}}class sm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class am{constructor(e){this.t=e,this.currentUser=Hp.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Zp(void 0===this.o);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new rm;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rm,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},s=e=>{Gp("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((e=>s(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):(Gp("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rm)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Gp("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Zp("string"==typeof t.accessToken),new im(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Zp(null===e||"string"==typeof e),new Hp(e)}}class lm{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Hp.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class um{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new lm(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Hp.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class cm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dm{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Zp(void 0===this.o);const n=e=>{null!=e.error&&Gp("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,Gp("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Gp("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):Gp("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Zp("string"==typeof e.token),this.R=e.token,new cm(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=hm(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function pm(e,t){return e<t?-1:e>t?1:0}function mm(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new nm(tm.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new nm(tm.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new nm(tm.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new nm(tm.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return gm.fromMillis(Date.now())}static fromDate(e){return gm.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new gm(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pm(this.nanoseconds,e.nanoseconds):pm(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e){this.timestamp=e}static fromTimestamp(e){return new vm(e)}static min(){return new vm(new gm(0,0))}static max(){return new vm(new gm(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,t,n){void 0===t?t=0:t>e.length&&Jp(),void 0===n?n=e.length-t:n>e.length-t&&Jp(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ym.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ym?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class bm extends ym{construct(e,t,n){return new bm(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new nm(tm.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new bm(t)}static emptyPath(){return new bm([])}}const wm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xm extends ym{construct(e,t,n){return new xm(e,t,n)}static isValidIdentifier(e){return wm.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xm.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new xm(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new nm(tm.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new nm(tm.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new nm(tm.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(o=!o,r++):"."!==t||o?(n+=t,r++):(i(),r++)}if(i(),o)throw new nm(tm.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xm(t)}static emptyPath(){return new xm([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e){this.path=e}static fromPath(e){return new Em(bm.fromString(e))}static fromName(e){return new Em(bm.fromString(e).popFirst(5))}static empty(){return new Em(bm.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===bm.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return bm.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Em(new bm(e.slice()))}}function km(e){return new _m(e.readTime,e.key,-1)}class _m{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new _m(vm.min(),Em.empty(),-1)}static max(){return new _m(vm.max(),Em.empty(),-1)}}function Sm(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Em.comparator(e.documentKey,t.documentKey),0!==n?n:pm(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class Tm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cm(e){if(e.code!==tm.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;Gp("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Jp(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Om(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Om?t:Om.resolve(t)}catch(t){return Om.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Om.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Om.reject(t)}static resolve(e){return new Om(((t,n)=>{t(e)}))}static reject(e){return new Om(((t,n)=>{n(e)}))}static waitFor(e){return new Om(((t,n)=>{let r=0,i=0,o=!1;e.forEach((e=>{++r,e.next((()=>{++i,o&&i===r&&t()}),(e=>n(e)))})),o=!0,i===r&&t()}))}static or(e){let t=Om.resolve(!1);for(const n of e)t=t.next((e=>e?Om.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Om(((n,r)=>{const i=e.length,o=new Array(i);let s=0;for(let a=0;a<i;a++){const l=a;t(e[l]).next((e=>{o[l]=e,++s,s===i&&n(o)}),(e=>r(e)))}}))}static doWhile(e,t){return new Om(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}function Pm(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function Im(e){return null==e}function Nm(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lm(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Mm(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Rm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Am.oe=-1;class jm{constructor(e,t){this.comparator=e,this.root=t||Fm.EMPTY}insert(e,t){return new jm(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Fm.BLACK,null,null))}remove(e){return new jm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fm.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Dm(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Dm(this.root,e,this.comparator,!1)}getReverseIterator(){return new Dm(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Dm(this.root,e,this.comparator,!0)}}class Dm{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fm{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Fm.RED,this.left=null!=r?r:Fm.EMPTY,this.right=null!=i?i:Fm.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Fm(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Fm.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Fm.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fm.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fm.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Jp();if(this.right.isRed())throw Jp();const e=this.left.check();if(e!==this.right.check())throw Jp();return e+(this.isRed()?0:1)}}Fm.EMPTY=null,Fm.RED=!0,Fm.BLACK=!1,Fm.EMPTY=new class{constructor(){this.size=0}get key(){throw Jp()}get value(){throw Jp()}get color(){throw Jp()}get left(){throw Jp()}get right(){throw Jp()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Fm(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vm{constructor(e){this.comparator=e,this.data=new jm(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Um(this.data.getIterator())}getIteratorFrom(e){return new Um(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Vm))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Vm(this.comparator);return t.data=e,t}}class Um{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.fields=e,e.sort(xm.comparator)}static empty(){return new zm([])}unionWith(e){let t=new Vm(xm.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new zm(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mm(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Bm("Invalid base64 string: "+t):t}}(e);return new qm(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new qm(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pm(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qm.EMPTY_BYTE_STRING=new qm("");const Hm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $m(e){if(Zp(!!e),"string"==typeof e){let t=0;const n=Hm.exec(e);if(Zp(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Km(e.seconds),nanos:Km(e.nanos)}}function Km(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Wm(e){return"string"==typeof e?qm.fromBase64String(e):qm.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ym(e){const t=e.mapValue.fields.__previous_value__;return Gm(t)?Ym(t):t}function Qm(e){const t=$m(e.mapValue.fields.__local_write_time__.timestampValue);return new gm(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,t,n,r,i,o,s,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.longPollingOptions=a,this.useFetchStreams=l}}class Jm{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Jm("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Jm&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm={fields:{__type__:{stringValue:"__max__"}}};function eg(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Gm(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)?9007199254740991:function(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}(e)?10:11:Jp()}function tg(e,t){if(e===t)return!0;const n=eg(e);if(n!==eg(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Qm(e).isEqual(Qm(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=$m(e.timestampValue),r=$m(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Wm(e.bytesValue).isEqual(Wm(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Km(e.geoPointValue.latitude)===Km(t.geoPointValue.latitude)&&Km(e.geoPointValue.longitude)===Km(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Km(e.integerValue)===Km(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Km(e.doubleValue),r=Km(t.doubleValue);return n===r?Nm(n)===Nm(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return mm(e.arrayValue.values||[],t.arrayValue.values||[],tg);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Lm(n)!==Lm(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!tg(n[i],r[i])))return!1;return!0}(e,t);default:return Jp()}var r}function ng(e,t){return void 0!==(e.values||[]).find((e=>tg(e,t)))}function rg(e,t){if(e===t)return 0;const n=eg(e),r=eg(t);if(n!==r)return pm(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pm(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Km(e.integerValue||e.doubleValue),r=Km(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ig(e.timestampValue,t.timestampValue);case 4:return ig(Qm(e),Qm(t));case 5:return pm(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Wm(e),r=Wm(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=pm(n[i],r[i]);if(0!==e)return e}return pm(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=pm(Km(e.latitude),Km(t.latitude));return 0!==n?n:pm(Km(e.longitude),Km(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return og(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,o;const s=e.fields||{},a=t.fields||{},l=null===(n=s.value)||void 0===n?void 0:n.arrayValue,u=null===(r=a.value)||void 0===r?void 0:r.arrayValue,c=pm((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(o=null==u?void 0:u.values)||void 0===o?void 0:o.length)||0);return 0!==c?c:og(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===Zm&&t===Zm)return 0;if(e===Zm)return 1;if(t===Zm)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const e=pm(r[s],o[s]);if(0!==e)return e;const t=rg(n[r[s]],i[o[s]]);if(0!==t)return t}return pm(r.length,o.length)}(e.mapValue,t.mapValue);default:throw Jp()}}function ig(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return pm(e,t);const n=$m(e),r=$m(t),i=pm(n.seconds,r.seconds);return 0!==i?i:pm(n.nanos,r.nanos)}function og(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=rg(n[i],r[i]);if(e)return e}return pm(n.length,r.length)}function sg(e){return ag(e)}function ag(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=$m(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Wm(e.bytesValue).toBase64():"referenceValue"in e?function(e){return Em.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ag(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${ag(e.fields[i])}`;return n+"}"}(e.mapValue):Jp()}function lg(e){return!!e&&"integerValue"in e}function ug(e){return!!e&&"arrayValue"in e}function cg(e){return!!e&&"nullValue"in e}function dg(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function hg(e){return!!e&&"mapValue"in e}function fg(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Mm(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=fg(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=fg(e.arrayValue.values[n]);return t}return Object.assign({},e)}class pg{constructor(e){this.value=e}static empty(){return new pg({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!hg(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fg(t)}setAll(e){let t=xm.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=fg(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());hg(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tg(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];hg(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Mm(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new pg(fg(this.value))}}function mg(e){const t=[];return Mm(e.fields,((e,n)=>{const r=new xm([e]);if(hg(n)){const e=mg(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new zm(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class gg{constructor(e,t,n,r,i,o,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=s}static newInvalidDocument(e){return new gg(e,0,vm.min(),vm.min(),vm.min(),pg.empty(),0)}static newFoundDocument(e,t,n,r){return new gg(e,1,t,vm.min(),n,r,0)}static newNoDocument(e,t){return new gg(e,2,t,vm.min(),vm.min(),pg.empty(),0)}static newUnknownDocument(e,t){return new gg(e,3,t,vm.min(),vm.min(),pg.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(vm.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pg.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pg.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=vm.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof gg&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gg(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,t){this.position=e,this.inclusive=t}}function yg(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const o=t[i],s=e.position[i];if(r=o.field.isKeyField()?Em.comparator(Em.fromName(s.referenceValue),n.key):rg(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function bg(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!tg(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,t="asc"){this.field=e,this.dir=t}}function xg(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{}class kg extends Eg{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Ag(e,t,n):"array-contains"===t?new Mg(e,n):"in"===t?new Rg(e,n):"not-in"===t?new jg(e,n):"array-contains-any"===t?new Dg(e,n):new kg(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Ig(e,n):new Ng(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(rg(t,this.value)):null!==t&&eg(this.value)===eg(t)&&this.matchesComparison(rg(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Jp()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _g extends Eg{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new _g(e,t)}matches(e){return Sg(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Sg(e){return"and"===e.op}function Tg(e){return function(e){for(const t of e.filters)if(t instanceof _g)return!1;return!0}(e)&&Sg(e)}function Cg(e){if(e instanceof kg)return e.field.canonicalString()+e.op.toString()+sg(e.value);if(Tg(e))return e.filters.map((e=>Cg(e))).join(",");{const t=e.filters.map((e=>Cg(e))).join(",");return`${e.op}(${t})`}}function Og(e,t){return e instanceof kg?(n=e,(r=t)instanceof kg&&n.op===r.op&&n.field.isEqual(r.field)&&tg(n.value,r.value)):e instanceof _g?function(e,t){return t instanceof _g&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Og(n,t.filters[r])),!0)}(e,t):void Jp();var n,r}function Pg(e){return e instanceof kg?`${(t=e).field.canonicalString()} ${t.op} ${sg(t.value)}`:e instanceof _g?function(e){return e.op.toString()+" {"+e.getFilters().map(Pg).join(" ,")+"}"}(e):"Filter";var t}class Ag extends kg{constructor(e,t,n){super(e,t,n),this.key=Em.fromName(n.referenceValue)}matches(e){const t=Em.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ig extends kg{constructor(e,t){super(e,"in",t),this.keys=Lg("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ng extends kg{constructor(e,t){super(e,"not-in",t),this.keys=Lg("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Lg(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Em.fromName(e.referenceValue)))}class Mg extends kg{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ug(t)&&ng(t.arrayValue,this.value)}}class Rg extends kg{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ng(this.value.arrayValue,t)}}class jg extends kg{constructor(e,t){super(e,"not-in",t)}matches(e){if(ng(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ng(this.value.arrayValue,t)}}class Dg extends kg{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ug(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>ng(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,t=null,n=[],r=[],i=null,o=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.ue=null}}function Vg(e,t=null,n=[],r=[],i=null,o=null,s=null){return new Fg(e,t,n,r,i,o,s)}function Ug(e){const t=em(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Cg(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),Im(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>sg(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>sg(e))).join(",")),t.ue=e}return t.ue}function zg(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!xg(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Og(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!bg(e.startAt,t.startAt)&&bg(e.endAt,t.endAt)}function Bg(e){return Em.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,t=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Hg(e){return new qg(e)}function $g(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Kg(e){const t=em(e);if(null===t.ce){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new Vm(xm.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new wg(r,n))})),e.has(xm.keyField().canonicalString())||t.ce.push(new wg(xm.keyField(),n))}return t.ce}function Wg(e){const t=em(e);return t.le||(t.le=function(e,t){if("F"===e.limitType)return Vg(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new wg(e.field,t)}));const n=e.endAt?new vg(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new vg(e.startAt.position,e.startAt.inclusive):null;return Vg(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,Kg(e))),t.le}function Gg(e,t,n){return new qg(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Yg(e,t){return zg(Wg(e),Wg(t))&&e.limitType===t.limitType}function Qg(e){return`${Ug(Wg(e))}|lt:${e.limitType}`}function Xg(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Pg(e))).join(", ")}]`),Im(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>sg(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>sg(e))).join(",")),`Target(${t})`}(Wg(e))}; limitType=${e.limitType})`}function Jg(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Em.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Kg(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=yg(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,Kg(n),r)||n.endAt&&!function(e,t,n){const r=yg(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,Kg(n),r)));var n,r}function Zg(e){return(t,n)=>{let r=!1;for(const i of Kg(e)){const e=ev(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function ev(e,t,n){const r=e.field.isKeyField()?Em.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?rg(r,i):Jp()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Jp()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Mm(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Rm(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=new jm(Em.comparator);function rv(){return nv}const iv=new jm(Em.comparator);function ov(...e){let t=iv;for(const n of e)t=t.insert(n.key,n);return t}function sv(e){let t=iv;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function av(){return uv()}function lv(){return uv()}function uv(){return new tv((e=>e.toString()),((e,t)=>e.isEqual(t)))}const cv=new jm(Em.comparator),dv=new Vm(Em.comparator);function hv(...e){let t=dv;for(const n of e)t=t.add(n);return t}const fv=new Vm(pm);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pv(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nm(t)?"-0":t}}function mv(e){return{integerValue:""+e}}function gv(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Nm(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?mv(t):pv(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(){this._=void 0}}function yv(e,t,n){return e instanceof xv?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Gm(t)&&(t=Ym(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Ev?kv(e,t):e instanceof _v?Sv(e,t):function(e,t){const n=wv(e,t),r=Cv(n)+Cv(e.Pe);return lg(n)&&lg(e.Pe)?mv(r):pv(e.serializer,r)}(e,t)}function bv(e,t,n){return e instanceof Ev?kv(e,t):e instanceof _v?Sv(e,t):n}function wv(e,t){return e instanceof Tv?lg(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class xv extends vv{}class Ev extends vv{constructor(e){super(),this.elements=e}}function kv(e,t){const n=Ov(t);for(const r of e.elements)n.some((e=>tg(e,r)))||n.push(r);return{arrayValue:{values:n}}}class _v extends vv{constructor(e){super(),this.elements=e}}function Sv(e,t){let n=Ov(t);for(const r of e.elements)n=n.filter((e=>!tg(e,r)));return{arrayValue:{values:n}}}class Tv extends vv{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Cv(e){return Km(e.integerValue||e.doubleValue)}function Ov(e){return ug(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class Pv{constructor(e,t){this.version=e,this.transformResults=t}}class Av{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Av}static exists(e){return new Av(void 0,e)}static updateTime(e){return new Av(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Iv(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Nv{}function Lv(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new qv(e.key,Av.none()):new Fv(e.key,e.data,Av.none());{const n=e.data,r=pg.empty();let i=new Vm(xm.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Vv(e.key,r,new zm(i.toArray()),Av.none())}}function Mv(e,t,n){var r;e instanceof Fv?function(e,t,n){const r=e.value.clone(),i=zv(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Vv?function(e,t,n){if(!Iv(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=zv(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Uv(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function Rv(e,t,n,r){return e instanceof Fv?function(e,t,n,r){if(!Iv(e.precondition,t))return n;const i=e.value.clone(),o=Bv(e.fieldTransforms,r,t);return i.setAll(o),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Vv?function(e,t,n,r){if(!Iv(e.precondition,t))return n;const i=Bv(e.fieldTransforms,r,t),o=t.data;return o.setAll(Uv(e)),o.setAll(i),t.convertToFoundDocument(t.version,o).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):(i=t,o=n,Iv(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o);var i,o}function jv(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=wv(r.transform,e||null);null!=i&&(null===n&&(n=pg.empty()),n.set(r.field,i))}return n||null}function Dv(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&mm(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Ev&&r instanceof Ev||n instanceof _v&&r instanceof _v?mm(n.elements,r.elements,tg):n instanceof Tv&&r instanceof Tv?tg(n.Pe,r.Pe):n instanceof xv&&r instanceof xv);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class Fv extends Nv{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Vv extends Nv{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Uv(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function zv(e,t,n){const r=new Map;Zp(e.length===n.length);for(let i=0;i<n.length;i++){const o=e[i],s=o.transform,a=t.data.field(o.field);r.set(o.field,bv(s,a,n[i]))}return r}function Bv(e,t,n){const r=new Map;for(const i of e){const e=i.transform,o=n.data.field(i.field);r.set(i.field,yv(e,o,t))}return r}class qv extends Nv{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hv extends Nv{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Mv(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Rv(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Rv(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=lv();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let s=this.applyToLocalView(o,i.mutatedFields);s=t.has(r.key)?null:s;const a=Lv(o,s);null!==a&&n.set(r.key,a),o.isValidDocument()||o.convertToNoDocument(vm.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),hv())}isEqual(e){return this.batchId===e.batchId&&mm(this.mutations,e.mutations,((e,t)=>Dv(e,t)))&&mm(this.baseMutations,e.baseMutations,((e,t)=>Dv(e,t)))}}class Kv{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Zp(e.mutations.length===n.length);let r=function(){return cv}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new Kv(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yv,Qv;function Xv(e){if(void 0===e)return Yp("GRPC error has no .code"),tm.UNKNOWN;switch(e){case Yv.OK:return tm.OK;case Yv.CANCELLED:return tm.CANCELLED;case Yv.UNKNOWN:return tm.UNKNOWN;case Yv.DEADLINE_EXCEEDED:return tm.DEADLINE_EXCEEDED;case Yv.RESOURCE_EXHAUSTED:return tm.RESOURCE_EXHAUSTED;case Yv.INTERNAL:return tm.INTERNAL;case Yv.UNAVAILABLE:return tm.UNAVAILABLE;case Yv.UNAUTHENTICATED:return tm.UNAUTHENTICATED;case Yv.INVALID_ARGUMENT:return tm.INVALID_ARGUMENT;case Yv.NOT_FOUND:return tm.NOT_FOUND;case Yv.ALREADY_EXISTS:return tm.ALREADY_EXISTS;case Yv.PERMISSION_DENIED:return tm.PERMISSION_DENIED;case Yv.FAILED_PRECONDITION:return tm.FAILED_PRECONDITION;case Yv.ABORTED:return tm.ABORTED;case Yv.OUT_OF_RANGE:return tm.OUT_OF_RANGE;case Yv.UNIMPLEMENTED:return tm.UNIMPLEMENTED;case Yv.DATA_LOSS:return tm.DATA_LOSS;default:return Jp()}}(Qv=Yv||(Yv={}))[Qv.OK=0]="OK",Qv[Qv.CANCELLED=1]="CANCELLED",Qv[Qv.UNKNOWN=2]="UNKNOWN",Qv[Qv.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Qv[Qv.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Qv[Qv.NOT_FOUND=5]="NOT_FOUND",Qv[Qv.ALREADY_EXISTS=6]="ALREADY_EXISTS",Qv[Qv.PERMISSION_DENIED=7]="PERMISSION_DENIED",Qv[Qv.UNAUTHENTICATED=16]="UNAUTHENTICATED",Qv[Qv.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Qv[Qv.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Qv[Qv.ABORTED=10]="ABORTED",Qv[Qv.OUT_OF_RANGE=11]="OUT_OF_RANGE",Qv[Qv.UNIMPLEMENTED=12]="UNIMPLEMENTED",Qv[Qv.INTERNAL=13]="INTERNAL",Qv[Qv.UNAVAILABLE=14]="UNAVAILABLE",Qv[Qv.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jv=new Ip([4294967295,4294967295],0);function Zv(e){const t=(new TextEncoder).encode(e),n=new Np;return n.update(t),new Uint8Array(n.digest())}function ey(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Ip([n,r],0),new Ip([i,o],0)]}class ty{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ny(`Invalid padding: ${t}`);if(n<0)throw new ny(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new ny(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new ny(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Ip.fromNumber(this.Ie)}Ee(e,t,n){let r=e.add(t.multiply(Ip.fromNumber(n)));return 1===r.compare(Jv)&&(r=new Ip([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;const t=Zv(e),[n,r]=ey(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);if(!this.de(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ty(i,r,t);return n.forEach((e=>o.insert(e))),o}insert(e){if(0===this.Ie)return;const t=Zv(e),[n,r]=ey(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);this.Ae(e)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ny extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,iy.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ry(vm.min(),r,new jm(pm),rv(),hv())}}class iy{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new iy(n,t,hv(),hv(),hv())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class sy{constructor(e,t){this.targetId=e,this.me=t}}class ay{constructor(e,t,n=qm.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class ly{constructor(){this.fe=0,this.ge=dy(),this.pe=qm.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=hv(),t=hv(),n=hv();return this.ge.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Jp()}})),new iy(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=dy()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Zp(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class uy{constructor(e){this.Le=e,this.Be=new Map,this.ke=rv(),this.qe=cy(),this.Qe=new jm(pm)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:Jp()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((e,n)=>{this.ze(n)&&t(n)}))}He(e){const t=e.targetId,n=e.me.count,r=this.Je(t);if(r){const i=r.target;if(Bg(i))if(0===n){const e=new Em(i.path);this.Ue(t,e,gg.newNoDocument(e,vm.min()))}else Zp(1===n);else{const r=this.Ye(t);if(r!==n){const n=this.Ze(e),i=n?this.Xe(n,e,r):1;if(0!==i){this.je(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,e)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let o,s;try{o=Wm(n).toUint8Array()}catch(a){if(a instanceof Bm)return Qp("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{s=new ty(o,r,i)}catch(a){return Qp(a instanceof ny?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===s.Ie?null:s}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Le.tt(),o=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(o)||(this.Ue(t,n,null),r++)})),r}rt(e){const t=new Map;this.Be.forEach(((n,r)=>{const i=this.Je(r);if(i){if(n.current&&Bg(i.target)){const t=new Em(i.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,gg.newNoDocument(t,e))}n.be&&(t.set(r,n.ve()),n.Ce())}}));let n=hv();this.qe.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.ke.forEach(((t,n)=>n.setReadTime(e)));const r=new ry(e,t,this.Qe,this.ke,n);return this.ke=rv(),this.qe=cy(),this.Qe=new jm(pm),r}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new ly,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Vm(pm),this.qe=this.qe.insert(e,t)),t}ze(e){const t=null!==this.Je(e);return t||Gp("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ly),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function cy(){return new jm(Em.comparator)}function dy(){return new jm(Em.comparator)}const hy=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),fy=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),py=(()=>({and:"AND",or:"OR"}))();class my{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function gy(e,t){return e.useProto3Json||Im(t)?t:{value:t}}function vy(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function yy(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function by(e,t){return vy(e,t.toTimestamp())}function wy(e){return Zp(!!e),vm.fromTimestamp(function(e){const t=$m(e);return new gm(t.seconds,t.nanos)}(e))}function xy(e,t){return Ey(e,t).canonicalString()}function Ey(e,t){const n=(r=e,new bm(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function ky(e){const t=bm.fromString(e);return Zp(zy(t)),t}function _y(e,t){return xy(e.databaseId,t.path)}function Sy(e,t){const n=ky(t);if(n.get(1)!==e.databaseId.projectId)throw new nm(tm.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new nm(tm.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Em(Oy(n))}function Ty(e,t){return xy(e.databaseId,t)}function Cy(e){return new bm(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Oy(e){return Zp(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Py(e,t,n){return{name:_y(e,t),fields:n.value.mapValue.fields}}function Ay(e,t){return{documents:[Ty(e,t.path)]}}function Iy(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ty(e,i);const o=function(e){if(0!==e.length)return Vy(_g.create(e,"and"))}(t.filters);o&&(n.structuredQuery.where=o);const s=function(e){if(0!==e.length)return e.map((e=>{return{field:Dy((t=e).field),direction:My(t.dir)};var t}))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const a=gy(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{_t:n,parent:i};var l}function Ny(e){let t=function(e){const t=ky(e);return 4===t.length?bm.emptyPath():Oy(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Zp(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let o=[];n.where&&(o=function(e){const t=Ly(e);return t instanceof _g&&Tg(t)?t.getFilters():[t]}(n.where));let s=[];n.orderBy&&(s=n.orderBy.map((e=>{return new wg(Fy((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Im(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new vg(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new vg(n,t)}(n.endAt)),function(e,t,n,r,i,o,s,a){return new qg(e,t,n,r,i,o,s,a)}(t,i,s,o,a,"F",l,u)}function Ly(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Fy(e.unaryFilter.field);return kg.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Fy(e.unaryFilter.field);return kg.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Fy(e.unaryFilter.field);return kg.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Fy(e.unaryFilter.field);return kg.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Jp()}}(e):void 0!==e.fieldFilter?(t=e,kg.create(Fy(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Jp()}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return _g.create(e.compositeFilter.filters.map((e=>Ly(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Jp()}}(e.compositeFilter.op))}(e):Jp();var t}function My(e){return hy[e]}function Ry(e){return fy[e]}function jy(e){return py[e]}function Dy(e){return{fieldPath:e.canonicalString()}}function Fy(e){return xm.fromServerFormat(e.fieldPath)}function Vy(e){return e instanceof kg?function(e){if("=="===e.op){if(dg(e.value))return{unaryFilter:{field:Dy(e.field),op:"IS_NAN"}};if(cg(e.value))return{unaryFilter:{field:Dy(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(dg(e.value))return{unaryFilter:{field:Dy(e.field),op:"IS_NOT_NAN"}};if(cg(e.value))return{unaryFilter:{field:Dy(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dy(e.field),op:Ry(e.op),value:e.value}}}(e):e instanceof _g?function(e){const t=e.getFilters().map((e=>Vy(e)));return 1===t.length?t[0]:{compositeFilter:{op:jy(e.op),filters:t}}}(e):Jp()}function Uy(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function zy(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,t,n,r,i=vm.min(),o=vm.min(),s=qm.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s,this.expectedCount=a}withSequenceNumber(e){return new By(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new By(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new By(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new By(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e){this.ct=e}}function Hy(e){const t=Ny({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Gg(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.un=new Ky}addToCollectionParentIndex(e,t){return this.un.add(t),Om.resolve()}getCollectionParents(e,t){return Om.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return Om.resolve()}deleteFieldIndex(e,t){return Om.resolve()}deleteAllFieldIndexes(e){return Om.resolve()}createTargetIndexes(e,t){return Om.resolve()}getDocumentsMatchingTarget(e,t){return Om.resolve(null)}getIndexType(e,t){return Om.resolve(0)}getFieldIndexes(e,t){return Om.resolve([])}getNextCollectionGroupToUpdate(e){return Om.resolve(null)}getMinOffset(e,t){return Om.resolve(_m.min())}getMinOffsetFromCollectionGroup(e,t){return Om.resolve(_m.min())}updateCollectionGroup(e,t,n){return Om.resolve()}updateIndexEntries(e,t){return Om.resolve()}}class Ky{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Vm(bm.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Vm(bm.comparator)).toArray()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Wy(0)}static kn(){return new Wy(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(){this.changes=new tv((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,gg.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Om.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Rv(n.mutation,e,zm.empty(),gm.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,hv()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=hv()){const r=av();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=ov();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=av();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,hv())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=rv();const o=uv(),s=uv();return t.forEach(((e,t)=>{const s=n.get(t.key);r.has(t.key)&&(void 0===s||s.mutation instanceof Vv)?i=i.insert(t.key,t):void 0!==s?(o.set(t.key,s.mutation.getFieldMask()),Rv(s.mutation,t,s.mutation.getFieldMask(),gm.now())):o.set(t.key,zm.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>o.set(e,t))),t.forEach(((e,t)=>{var n;return s.set(e,new Yy(t,null!==(n=o.get(e))&&void 0!==n?n:null))})),s)))}recalculateAndSaveOverlays(e,t){const n=uv();let r=new jm(((e,t)=>e-t)),i=hv();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const o=t.get(e);if(null===o)return;let s=n.get(e)||zm.empty();s=i.applyToLocalView(o,s),n.set(e,s);const a=(r.get(i.batchId)||hv()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const o=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),a=r.key,l=r.value,u=lv();l.forEach((e=>{if(!i.has(e)){const r=Lv(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),o.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Om.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return i=t,Em.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var i}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Om.resolve(av());let s=-1,a=i;return o.next((t=>Om.forEach(t,((t,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(t)?Om.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,hv()))).next((e=>({batchId:s,changes:sv(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Em(t)).next((e=>{let t=ov();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let o=ov();return this.indexManager.getCollectionParents(e,i).next((s=>Om.forEach(s,(s=>{const a=(l=t,u=s.child(i),new qg(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt));var l,u;return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next((e=>{e.forEach(((e,t)=>{o=o.insert(e,t)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,gg.newInvalidDocument(r)))}));let n=ov();return e.forEach(((e,r)=>{const o=i.get(e);void 0!==o&&Rv(o.mutation,r,zm.empty(),gm.now()),Jg(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return Om.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,{id:(n=t).id,version:n.version,createTime:wy(n.createTime)}),Om.resolve();var n}getNamedQuery(e,t){return Om.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,{name:(n=t).name,query:Hy(n.bundledQuery),readTime:wy(n.readTime)}),Om.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.overlays=new jm(Em.comparator),this.Ir=new Map}getOverlay(e,t){return Om.resolve(this.overlays.get(t))}getOverlays(e,t){const n=av();return Om.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),Om.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ir.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Ir.delete(n)),Om.resolve()}getOverlaysForCollection(e,t,n){const r=av(),i=t.length+1,o=new Em(t.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const e=s.getNext().value,o=e.getKey();if(!t.isPrefixOf(o.path))break;o.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Om.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new jm(((e,t)=>e-t));const o=this.overlays.getIterator();for(;o.hasNext();){const e=o.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=av(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const s=av(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>s.set(e,t))),!(s.size()>=r)););return Om.resolve(s)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Wv(t,n));let i=this.Ir.get(t);void 0===i&&(i=hv(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.sessionToken=qm.EMPTY_BYTE_STRING}getSessionToken(e){return Om.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Om.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(){this.Tr=new Vm(tb.Er),this.dr=new Vm(tb.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new tb(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Vr(new tb(e,t))}mr(e,t){e.forEach((e=>this.removeReference(e,t)))}gr(e){const t=new Em(new bm([])),n=new tb(t,e),r=new tb(t,e+1),i=[];return this.dr.forEachInRange([n,r],(e=>{this.Vr(e),i.push(e.key)})),i}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new Em(new bm([])),n=new tb(t,e),r=new tb(t,e+1);let i=hv();return this.dr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new tb(e,0),n=this.Tr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class tb{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return Em.comparator(e.key,t.key)||pm(e.wr,t.wr)}static Ar(e,t){return pm(e.wr,t.wr)||Em.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Vm(tb.Er)}checkEmpty(e){return Om.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $v(i,t,n,r);this.mutationQueue.push(o);for(const s of r)this.br=this.br.add(new tb(s.key,i)),this.indexManager.addToCollectionParentIndex(e,s.key.path.popLast());return Om.resolve(o)}lookupMutationBatch(e,t){return Om.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.vr(n),i=r<0?0:r;return Om.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Om.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(e){return Om.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new tb(t,0),r=new tb(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,r],(e=>{const t=this.Dr(e.wr);i.push(t)})),Om.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Vm(pm);return t.forEach((e=>{const t=new tb(e,0),r=new tb(e,Number.POSITIVE_INFINITY);this.br.forEachInRange([t,r],(e=>{n=n.add(e.wr)}))})),Om.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Em.isDocumentKey(i)||(i=i.child(""));const o=new tb(new Em(i),0);let s=new Vm(pm);return this.br.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(s=s.add(e.wr)),!0)}),o),Om.resolve(this.Cr(s))}Cr(e){const t=[];return e.forEach((e=>{const n=this.Dr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Zp(0===this.Fr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return Om.forEach(t.mutations,(r=>{const i=new tb(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.br=n}))}On(e){}containsKey(e,t){const n=new tb(t,0),r=this.br.firstAfterOrEqual(n);return Om.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Om.resolve()}Fr(e,t){return this.vr(e)}vr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.Mr=e,this.docs=new jm(Em.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Om.resolve(n?n.document.mutableCopy():gg.newInvalidDocument(t))}getEntries(e,t){let n=rv();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():gg.newInvalidDocument(e))})),Om.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=rv();const o=t.path,s=new Em(o.child("")),a=this.docs.getIteratorFrom(s);for(;a.hasNext();){const{key:e,value:{document:s}}=a.getNext();if(!o.isPrefixOf(e.path))break;e.path.length>o.length+1||Sm(km(s),n)<=0||(r.has(s.key)||Jg(t,s))&&(i=i.insert(s.key,s.mutableCopy()))}return Om.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Jp()}Or(e,t){return Om.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new ib(this)}getSize(e){return Om.resolve(this.size)}}class ib extends Gy{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.cr.addEntry(e,r)):this.cr.removeEntry(n)})),Om.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.persistence=e,this.Nr=new tv((e=>Ug(e)),zg),this.lastRemoteSnapshotVersion=vm.min(),this.highestTargetId=0,this.Lr=0,this.Br=new eb,this.targetCount=0,this.kr=Wy.Bn()}forEachTarget(e,t){return this.Nr.forEach(((e,n)=>t(n))),Om.resolve()}getLastRemoteSnapshotVersion(e){return Om.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Om.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Om.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),Om.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Wy(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,Om.resolve()}updateTargetData(e,t){return this.Kn(t),Om.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,Om.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Nr.forEach(((o,s)=>{s.sequenceNumber<=t&&null===n.get(s.targetId)&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,s.targetId)),r++)})),Om.waitFor(i).next((()=>r))}getTargetCount(e){return Om.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return Om.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),Om.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Om.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),Om.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return Om.resolve(n)}containsKey(e,t){return Om.resolve(this.Br.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Am(0),this.Kr=!1,this.Kr=!0,this.$r=new Zy,this.referenceDelegate=e(this),this.Ur=new ob(this),this.indexManager=new $y,this.remoteDocumentCache=new rb((e=>this.referenceDelegate.Wr(e))),this.serializer=new qy(t),this.Gr=new Xy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Jy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new nb(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){Gp("MemoryPersistence","Starting transaction:",e);const r=new ab(this.Qr.next());return this.referenceDelegate.zr(),n(r).next((e=>this.referenceDelegate.jr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Hr(e,t){return Om.or(Object.values(this.qr).map((n=>()=>n.containsKey(e,t))))}}class ab extends Tm{constructor(e){super(),this.currentSequenceNumber=e}}class lb{constructor(e){this.persistence=e,this.Jr=new eb,this.Yr=null}static Zr(e){return new lb(e)}get Xr(){if(this.Yr)return this.Yr;throw Jp()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),Om.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),Om.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),Om.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((e=>this.Xr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Xr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Om.forEach(this.Xr,(n=>{const r=Em.fromPath(n);return this.ei(e,r).next((e=>{e||t.removeEntry(r,vm.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((e=>{e?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return Om.or([()=>Om.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=r}static Wi(e,t){let n=hv(),r=hv();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ub(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=Uh()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(Fh())>0?6:4}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.Yi(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.Zi(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new cb;return this.Xi(e,t,n).next((r=>{if(i.result=r,this.zi)return this.es(e,t,n,r.size)}))})).next((()=>i.result))}es(e,t,n,r){return n.documentReadCount<this.ji?(Wp()<=sf.DEBUG&&Gp("QueryEngine","SDK will not create cache indexes for query:",Xg(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Om.resolve()):(Wp()<=sf.DEBUG&&Gp("QueryEngine","Query:",Xg(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(Wp()<=sf.DEBUG&&Gp("QueryEngine","The SDK decides to create cache indexes for query:",Xg(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Wg(t))):Om.resolve())}Yi(e,t){if($g(t))return Om.resolve(null);let n=Wg(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Gg(t,null,"F"),n=Wg(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=hv(...r);return this.Ji.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const o=this.ts(t,r);return this.ns(t,o,i,n.readTime)?this.Yi(e,Gg(t,null,"F")):this.rs(e,o,t,n)}))))})))))}Zi(e,t,n,r){return $g(t)||r.isEqual(vm.min())?Om.resolve(null):this.Ji.getDocuments(e,n).next((i=>{const o=this.ts(t,i);return this.ns(t,o,n,r)?Om.resolve(null):(Wp()<=sf.DEBUG&&Gp("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Xg(t)),this.rs(e,o,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=vm.fromTimestamp(1e9===r?new gm(n+1,0):new gm(n,r));return new _m(i,Em.empty(),t)}(r,-1)).next((e=>e)))}))}ts(e,t){let n=new Vm(Zg(e));return t.forEach(((t,r)=>{Jg(e,r)&&(n=n.add(r))})),n}ns(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(e,t,n){return Wp()<=sf.DEBUG&&Gp("QueryEngine","Using full collection scan to execute query:",Xg(t)),this.Ji.getDocumentsMatchingQuery(e,t,_m.min(),n)}rs(e,t,n,r){return this.Ji.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,t,n,r){this.persistence=e,this.ss=t,this.serializer=r,this.os=new jm(pm),this._s=new tv((e=>Ug(e)),zg),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Qy(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}async function fb(e,t){const n=em(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.ls(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],o=[];let s=hv();for(const e of r){i.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}for(const e of t){o.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}return n.localDocuments.getDocuments(e,s).next((e=>({hs:e,removedBatchIds:i,addedBatchIds:o})))}))}))}function pb(e){const t=em(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ur.getLastRemoteSnapshotVersion(e)))}function mb(e,t){const n=em(e),r=t.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const s=[];t.targetChanges.forEach(((o,a)=>{const l=i.get(a);if(!l)return;s.push(n.Ur.removeMatchingKeys(e,o.removedDocuments,a).next((()=>n.Ur.addMatchingKeys(e,o.addedDocuments,a))));let u=l.withSequenceNumber(e.currentSequenceNumber);var c,d,h;null!==t.targetMismatches.get(a)?u=u.withResumeToken(qm.EMPTY_BYTE_STRING,vm.min()).withLastLimboFreeSnapshotVersion(vm.min()):o.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(o.resumeToken,r)),i=i.insert(a,u),d=u,h=o,(0===(c=l).resumeToken.approximateByteSize()||d.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&s.push(n.Ur.updateTargetData(e,u))}));let a=rv(),l=hv();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),s.push(function(e,t,n){let r=hv(),i=hv();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=rv();return n.forEach(((n,o)=>{const s=e.get(n);o.isFoundDocument()!==s.isFoundDocument()&&(i=i.add(n)),o.isNoDocument()&&o.version.isEqual(vm.min())?(t.removeEntry(n,o.readTime),r=r.insert(n,o)):!s.isValidDocument()||o.version.compareTo(s.version)>0||0===o.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(o),r=r.insert(n,o)):Gp("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",o.version)})),{Ps:r,Is:i}}))}(e,o,t.documentUpdates).next((e=>{a=e.Ps,l=e.Is}))),!r.isEqual(vm.min())){const t=n.Ur.getLastRemoteSnapshotVersion(e).next((t=>n.Ur.setTargetsMetadata(e,e.currentSequenceNumber,r)));s.push(t)}return Om.waitFor(s).next((()=>o.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.os=i,e)))}function gb(e,t){const n=em(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}async function vb(e,t,n){const r=em(e),i=r.os.get(t),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(s){if(!Pm(s))throw s;Gp("LocalStore",`Failed to update sequence numbers for target ${t}: ${s}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function yb(e,t,n){const r=em(e);let i=vm.min(),o=hv();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=em(e),i=r._s.get(n);return void 0!==i?Om.resolve(r.os.get(i)):r.Ur.getTargetData(t,n)}(r,e,Wg(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(e,t.targetId).next((e=>{o=e}))})).next((()=>r.ss.getDocumentsMatchingQuery(e,t,n?i:vm.min(),n?o:hv()))).next((e=>(function(e,t,n){let r=e.us.get(t)||vm.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.us.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,Ts:o})))))}class bb{constructor(){this.activeTargetIds=fv}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wb{constructor(){this.so=new bb,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new bb,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{_o(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Gp("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Gp("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kb=null;function _b(){return null===kb?kb=268435456+Math.round(2147483648*Math.random()):kb++,"0x"+kb.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Sb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb="WebChannelConnection";class Ob extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=t+"://"+e.host,this.vo=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Fo(){return!1}Mo(e,t,n,r,i){const o=_b(),s=this.xo(e,t.toUriEncodedString());Gp("RestConnection",`Sending RPC '${e}' ${o}:`,s,n);const a={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(a,r,i),this.No(e,s,a,n).then((t=>(Gp("RestConnection",`Received RPC '${e}' ${o}: `,t),t)),(t=>{throw Qp("RestConnection",`RPC '${e}' ${o} failed with error: `,t,"url: ",s,"request:",n),t}))}Lo(e,t,n,r,i,o){return this.Mo(e,t,n,r,i)}Oo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+$p,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}xo(e,t){const n=Sb[e];return`${this.Do}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,r){const i=_b();return new Promise(((o,s)=>{const a=new Mp;a.setWithCredentials(!0),a.listenOnce(jp.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Dp.NO_ERROR:const t=a.getResponseJson();Gp(Cb,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),o(t);break;case Dp.TIMEOUT:Gp(Cb,`RPC '${e}' ${i} timed out`),s(new nm(tm.DEADLINE_EXCEEDED,"Request time out"));break;case Dp.HTTP_ERROR:const n=a.getStatus();if(Gp(Cb,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(tm).indexOf(t)>=0?t:tm.UNKNOWN}(t.status);s(new nm(e,t.message))}else s(new nm(tm.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new nm(tm.UNAVAILABLE,"Connection failed."));break;default:Jp()}}finally{Gp(Cb,`RPC '${e}' ${i} completed.`)}}));const l=JSON.stringify(r);Gp(Cb,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",l,n,15)}))}Bo(e,t,n){const r=_b(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=zp(),s=Up(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Oo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Gp(Cb,`Creating RPC '${e}' stream ${r}: ${u}`,a);const c=o.createWebChannel(u,a);let d=!1,h=!1;const f=new Tb({Io:t=>{h?Gp(Cb,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(Gp(Cb,`Opening RPC '${e}' stream ${r} transport.`),c.open(),d=!0),Gp(Cb,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},To:()=>c.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(c,Rp.EventType.OPEN,(()=>{h||(Gp(Cb,`RPC '${e}' stream ${r} transport opened.`),f.yo())})),p(c,Rp.EventType.CLOSE,(()=>{h||(h=!0,Gp(Cb,`RPC '${e}' stream ${r} transport closed`),f.So())})),p(c,Rp.EventType.ERROR,(t=>{h||(h=!0,Qp(Cb,`RPC '${e}' stream ${r} transport errored:`,t),f.So(new nm(tm.UNAVAILABLE,"The operation could not be completed")))})),p(c,Rp.EventType.MESSAGE,(t=>{var n;if(!h){const i=t.data[0];Zp(!!i);const o=i,s=o.error||(null===(n=o[0])||void 0===n?void 0:n.error);if(s){Gp(Cb,`RPC '${e}' stream ${r} received error:`,s);const t=s.status;let n=function(e){const t=Yv[e];if(void 0!==t)return Xv(t)}(t),i=s.message;void 0===n&&(n=tm.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),h=!0,f.So(new nm(n,i)),c.close()}else Gp(Cb,`RPC '${e}' stream ${r} received:`,i),f.bo(i)}})),p(s,Vp.STAT_EVENT,(t=>{t.stat===Fp.PROXY?Gp(Cb,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Fp.NOPROXY&&Gp(Cb,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.wo()}),0),f}}function Pb(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(e){return new my(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,t-n);r>0&&Gp("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,t,n,r,i,o,s,a){this.ui=e,this.Ho=n,this.Jo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ib(e,t)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==e?this.t_.reset():t&&t.code===tm.RESOURCE_EXHAUSTED?(Yp(t.toString()),Yp("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===tm.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Yo===t&&this.P_(e,n)}),(t=>{e((()=>{const e=new nm(tm.UNKNOWN,"Fetching auth token failed: "+t.message);return this.I_(e)}))}))}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((e=>{n((()=>this.I_(e)))})),this.stream.onMessage((e=>{n((()=>1==++this.e_?this.E_(e):this.onNext(e)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return Gp("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(Gp("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Lb extends Nb{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Jp(),o=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(Zp(void 0===t||"string"==typeof t),qm.fromBase64String(t||"")):(Zp(void 0===t||t instanceof Buffer||t instanceof Uint8Array),qm.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(e){const t=void 0===e.code?tm.UNKNOWN:Xv(e.code);return new nm(t,e.message||"")}(a);n=new ay(i,o,s,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Sy(e,r.document.name),o=wy(r.document.updateTime),s=r.document.createTime?wy(r.document.createTime):vm.min(),a=new pg({mapValue:{fields:r.document.fields}}),l=gg.newFoundDocument(i,o,s,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new oy(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Sy(e,r.document),o=r.readTime?wy(r.readTime):vm.min(),s=gg.newNoDocument(i,o),a=r.removedTargetIds||[];n=new oy([],a,s.key,s)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Sy(e,r.document),o=r.removedTargetIds||[];n=new oy([],o,i,null)}else{if(!("filter"in t))return Jp();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,o=new Gv(r,i),s=e.targetId;n=new sy(s,o)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return vm.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?vm.min():t.readTime?wy(t.readTime):vm.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Cy(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Bg(r)?{documents:Ay(e,r)}:{query:Iy(e,r)._t},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=yy(e,t.resumeToken);const r=gy(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(vm.min())>0){n.readTime=vy(e,t.snapshotVersion.toTimestamp());const r=gy(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Jp()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Cy(this.serializer),t.removeTarget=e,this.a_(t)}}class Mb extends Nb{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Zp(!!e.streamToken),this.lastStreamToken=e.streamToken,Zp(!e.writeResults||0===e.writeResults.length),this.listener.f_()}onNext(e){Zp(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=function(e,t){return e&&e.length>0?(Zp(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?wy(e.updateTime):wy(t);return n.isEqual(vm.min())&&(n=wy(t)),new Pv(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=wy(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Cy(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof Fv)n={update:Py(e,t.key,t.value)};else if(t instanceof qv)n={delete:_y(e,t.key)};else if(t instanceof Vv)n={update:Py(e,t.key,t.data),updateMask:Uy(t.fieldMask)};else{if(!(t instanceof Hv))return Jp();n={verify:_y(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof xv)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ev)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof _v)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Tv)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw Jp()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:by(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Jp())),n;var r,i}(this.serializer,e)))};this.a_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new nm(tm.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Mo(e,Ey(t,n),r,i,o))).catch((e=>{throw"FirebaseError"===e.name?(e.code===tm.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new nm(tm.UNKNOWN,e.toString())}))}Lo(e,t,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,s])=>this.connection.Lo(e,Ey(t,n),r,o,s,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===tm.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new nm(tm.UNKNOWN,e.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class jb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,"Online"===e&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Yp(t),this.D_=!1):Gp("OnlineStateTracker",t)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o((e=>{n.enqueueAndForget((async()=>{Kb(this)&&(Gp("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=em(e);t.L_.add(4),await Vb(t),t.q_.set("Unknown"),t.L_.delete(4),await Fb(t)}(this))}))})),this.q_=new jb(n,r)}}async function Fb(e){if(Kb(e))for(const t of e.B_)await t(!0)}async function Vb(e){for(const t of e.B_)await t(!1)}function Ub(e,t){const n=em(e);n.N_.has(t.targetId)||(n.N_.set(t.targetId,t),$b(n)?Hb(n):cw(n).r_()&&Bb(n,t))}function zb(e,t){const n=em(e),r=cw(n);n.N_.delete(t),r.r_()&&qb(n,t),0===n.N_.size&&(r.r_()?r.o_():Kb(n)&&n.q_.set("Unknown"))}function Bb(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(vm.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}cw(e).A_(t)}function qb(e,t){e.Q_.xe(t),cw(e).R_(t)}function Hb(e){e.Q_=new uy({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),cw(e).start(),e.q_.v_()}function $b(e){return Kb(e)&&!cw(e).n_()&&e.N_.size>0}function Kb(e){return 0===em(e).L_.size}function Wb(e){e.Q_=void 0}async function Gb(e){e.q_.set("Online")}async function Yb(e){e.N_.forEach(((t,n)=>{Bb(e,t)}))}async function Qb(e,t){Wb(e),$b(e)?(e.q_.M_(t),Hb(e)):e.q_.set("Unknown")}async function Xb(e,t,n){if(e.q_.set("Online"),t instanceof ay&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.N_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.N_.delete(r),e.Q_.removeTarget(r))}(e,t)}catch(r){Gp("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Jb(e,r)}else if(t instanceof oy?e.Q_.Ke(t):t instanceof sy?e.Q_.He(t):e.Q_.We(t),!n.isEqual(vm.min()))try{const t=await pb(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Q_.rt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.N_.get(r);i&&e.N_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.N_.get(t);if(!r)return;e.N_.set(t,r.withResumeToken(qm.EMPTY_BYTE_STRING,r.snapshotVersion)),qb(e,t);const i=new By(r.target,t,n,r.sequenceNumber);Bb(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){Gp("RemoteStore","Failed to raise snapshot:",i),await Jb(e,i)}}async function Jb(e,t,n){if(!Pm(t))throw t;e.L_.add(1),await Vb(e),e.q_.set("Offline"),n||(n=()=>pb(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Gp("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await Fb(e)}))}function Zb(e,t){return t().catch((n=>Jb(e,n,t)))}async function ew(e){const t=em(e),n=dw(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;tw(t);)try{const e=await gb(t.localStore,r);if(null===e){0===t.O_.length&&n.o_();break}r=e.batchId,nw(t,e)}catch(i){await Jb(t,i)}rw(t)&&iw(t)}function tw(e){return Kb(e)&&e.O_.length<10}function nw(e,t){e.O_.push(t);const n=dw(e);n.r_()&&n.V_&&n.m_(t.mutations)}function rw(e){return Kb(e)&&!dw(e).n_()&&e.O_.length>0}function iw(e){dw(e).start()}async function ow(e){dw(e).p_()}async function sw(e){const t=dw(e);for(const n of e.O_)t.m_(n.mutations)}async function aw(e,t,n){const r=e.O_.shift(),i=Kv.from(r,t,n);await Zb(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await ew(e)}async function lw(e,t){t&&dw(e).V_&&await async function(e,t){if(function(e){switch(e){default:return Jp();case tm.CANCELLED:case tm.UNKNOWN:case tm.DEADLINE_EXCEEDED:case tm.RESOURCE_EXHAUSTED:case tm.INTERNAL:case tm.UNAVAILABLE:case tm.UNAUTHENTICATED:return!1;case tm.INVALID_ARGUMENT:case tm.NOT_FOUND:case tm.ALREADY_EXISTS:case tm.PERMISSION_DENIED:case tm.FAILED_PRECONDITION:case tm.ABORTED:case tm.OUT_OF_RANGE:case tm.UNIMPLEMENTED:case tm.DATA_LOSS:return!0}}(n=t.code)&&n!==tm.ABORTED){const n=e.O_.shift();dw(e).s_(),await Zb(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await ew(e)}var n}(e,t),rw(e)&&iw(e)}async function uw(e,t){const n=em(e);n.asyncQueue.verifyOperationInProgress(),Gp("RemoteStore","RemoteStore received new credentials");const r=Kb(n);n.L_.add(3),await Vb(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.L_.delete(3),await Fb(n)}function cw(e){return e.K_||(e.K_=function(e,t,n){const r=em(e);return r.w_(),new Lb(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:Gb.bind(null,e),Ro:Yb.bind(null,e),mo:Qb.bind(null,e),d_:Xb.bind(null,e)}),e.B_.push((async t=>{t?(e.K_.s_(),$b(e)?Hb(e):e.q_.set("Unknown")):(await e.K_.stop(),Wb(e))}))),e.K_}function dw(e){return e.U_||(e.U_=function(e,t,n){const r=em(e);return r.w_(),new Mb(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:()=>Promise.resolve(),Ro:ow.bind(null,e),mo:lw.bind(null,e),f_:sw.bind(null,e),g_:aw.bind(null,e)}),e.B_.push((async t=>{t?(e.U_.s_(),await ew(e)):(await e.U_.stop(),e.O_.length>0&&(Gp("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))}))),e.U_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class hw{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new rm,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,s=new hw(e,t,o,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new nm(tm.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fw(e,t){if(Yp("AsyncQueue",`${t}: ${e}`),Pm(e))return new nm(tm.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Em.comparator(t.key,n.key):(e,t)=>Em.comparator(e.key,t.key),this.keyedMap=ov(),this.sortedSet=new jm(this.comparator)}static emptySet(e){return new pw(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof pw))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new pw;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.W_=new jm(Em.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?0!==e.type&&3===n.type?this.W_=this.W_.insert(t,e):3===e.type&&1!==n.type?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.W_=this.W_.remove(t):1===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Jp():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class gw{constructor(e,t,n,r,i,o,s,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const o=[];return t.forEach((e=>{o.push({type:0,doc:e})})),new gw(e,t,pw.emptySet(t),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yg(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class yw{constructor(){this.queries=bw(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(e,t){const n=em(e),r=n.queries;n.queries=bw(),r.forEach(((e,n)=>{for(const r of n.j_)r.onError(t)}))}(this,new nm(tm.ABORTED,"Firestore shutting down"))}}function bw(){return new tv((e=>Qg(e)),Yg)}async function ww(e,t){const n=em(e);let r=3;const i=t.query;let o=n.queries.get(i);o?!o.H_()&&t.J_()&&(r=2):(o=new vw,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const e=fw(s,`Initialization of query '${Xg(t.query)}' failed`);return void t.onError(e)}n.queries.set(i,o),o.j_.push(t),t.Z_(n.onlineState),o.z_&&t.X_(o.z_)&&_w(n)}async function xw(e,t){const n=em(e),r=t.query;let i=3;const o=n.queries.get(r);if(o){const e=o.j_.indexOf(t);e>=0&&(o.j_.splice(e,1),0===o.j_.length?i=t.J_()?0:1:!o.H_()&&t.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ew(e,t){const n=em(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.j_)e.X_(i)&&(r=!0);t.z_=i}}r&&_w(n)}function kw(e,t,n){const r=em(e),i=r.queries.get(t);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(t)}function _w(e){e.Y_.forEach((e=>{e.next()}))}var Sw,Tw;(Tw=Sw||(Sw={})).ea="default",Tw.Cache="cache";class Cw{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new gw(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==t;return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}oa(e){e=gw.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Sw.Cache}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.key=e}}class Pw{constructor(e){this.key=e}}class Aw{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=hv(),this.mutatedKeys=hv(),this.Aa=Zg(e),this.Ra=new pw(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new mw,r=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),c=Jg(this.query,t)?t:null,d=!!u&&this.mutatedKeys.has(u.key),h=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?d!==h&&(n.track({type:3,doc:c}),f=!0):this.ga(u,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Aa(c,a)>0||l&&this.Aa(c,l)<0)&&(s=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(a||l)&&(s=!0)),f&&(c?(o=o.add(c),i=h?i.add(e):i.delete(e)):(o=o.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;o.size>this.query.limit;){const e="F"===this.query.limitType?o.last():o.first();o=o.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ra:o,fa:n,ns:s,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Jp()}};return n(e)-n(t)}(e.type,t.type)||this.Aa(e.doc,t.doc))),this.pa(n),r=null!=r&&r;const s=t&&!r?this.ya():[],a=0===this.da.size&&this.current&&!r?1:0,l=a!==this.Ea;return this.Ea=a,0!==o.length||l?{snapshot:new gw(this.query,e.Ra,i,o,e.mutatedKeys,0===a,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:s}:{wa:s}}Z_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new mw,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((e=>this.Ta=this.Ta.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Ta=this.Ta.delete(e))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=hv(),this.Ra.forEach((e=>{this.Sa(e.key)&&(this.da=this.da.add(e.key))}));const t=[];return e.forEach((e=>{this.da.has(e)||t.push(new Pw(e))})),this.da.forEach((n=>{e.has(n)||t.push(new Ow(n))})),t}ba(e){this.Ta=e.Ts,this.da=hv();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return gw.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class Iw{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Nw{constructor(e){this.key=e,this.va=!1}}class Lw{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new tv((e=>Qg(e)),Yg),this.Ma=new Map,this.xa=new Set,this.Oa=new jm(Em.comparator),this.Na=new Map,this.La=new eb,this.Ba={},this.ka=new Map,this.qa=Wy.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function Mw(e,t,n=!0){const r=tx(e);let i;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await jw(r,t,n,!0),i}async function Rw(e,t){const n=tx(e);await jw(n,t,!0,!1)}async function jw(e,t,n,r){const i=await function(e,t){const n=em(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ur.getTargetData(e,t).next((i=>i?(r=i,Om.resolve(r)):n.Ur.allocateTargetId(e).next((i=>(r=new By(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Ur.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.os.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(e.targetId,e),n._s.set(t,e.targetId)),e}))}(e.localStore,Wg(t)),o=i.targetId,s=e.sharedClientState.addLocalQueryTarget(o,n);let a;return r&&(a=await async function(e,t,n,r,i){e.Ka=(t,n,r)=>async function(e,t,n,r){let i=t.view.ma(n);i.ns&&(i=await yb(e.localStore,t.query,!1).then((({documents:e})=>t.view.ma(e,i))));const o=r&&r.targetChanges.get(t.targetId),s=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,o,s);return Yw(e,t.targetId,a.wa),a.snapshot}(e,t,n,r);const o=await yb(e.localStore,t,!0),s=new Aw(t,o.Ts),a=s.ma(o.documents),l=iy.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=s.applyChanges(a,e.isPrimaryClient,l);Yw(e,n,u.wa);const c=new Iw(t,n,s);return e.Fa.set(t,c),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),u.snapshot}(e,t,o,"current"===s,i.resumeToken)),e.isPrimaryClient&&n&&Ub(e.remoteStore,i),a}async function Dw(e,t,n){const r=em(e),i=r.Fa.get(t),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter((e=>!Yg(e,t)))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await vb(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&zb(r.remoteStore,i.targetId),Ww(r,i.targetId)})).catch(Cm)):(Ww(r,i.targetId),await vb(r.localStore,i.targetId,!0))}async function Fw(e,t){const n=em(e),r=n.Fa.get(t),i=n.Ma.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),zb(n.remoteStore,r.targetId))}async function Vw(e,t,n){const r=function(e){const t=em(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=qw.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Hw.bind(null,t),t}(e);try{const e=await function(e,t){const n=em(e),r=gm.now(),i=t.reduce(((e,t)=>e.add(t.key)),hv());let o,s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=rv(),l=hv();return n.cs.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{o=i;const s=[];for(const e of t){const t=jv(e,o.get(e.key).overlayedDocument);null!=t&&s.push(new Vv(e.key,t,mg(t.value.mapValue),Av.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,s,t)})).next((t=>{s=t;const r=t.applyToLocalDocumentSet(o,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:s.batchId,changes:sv(o)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ba[e.currentUser.toKey()];r||(r=new jm(pm)),r=r.insert(t,n),e.Ba[e.currentUser.toKey()]=r}(r,e.batchId,n),await Jw(r,e.changes),await ew(r.remoteStore)}catch(i){const e=fw(i,"Failed to persist write");n.reject(e)}}async function Uw(e,t){const n=em(e);try{const e=await mb(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Na.get(t);r&&(Zp(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.va=!0:e.modifiedDocuments.size>0?Zp(r.va):e.removedDocuments.size>0&&(Zp(r.va),r.va=!1))})),await Jw(n,e,t)}catch(r){await Cm(r)}}function zw(e,t,n){const r=em(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Fa.forEach(((n,r)=>{const i=r.view.Z_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=em(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.j_)i.Z_(t)&&(r=!0)})),r&&_w(n)}(r.eventManager,t),e.length&&r.Ca.d_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Bw(e,t,n){const r=em(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Na.get(t),o=i&&i.key;if(o){let e=new jm(Em.comparator);e=e.insert(o,gg.newNoDocument(o,vm.min()));const n=hv().add(o),i=new ry(vm.min(),new Map,new jm(pm),e,n);await Uw(r,i),r.Oa=r.Oa.remove(o),r.Na.delete(t),Xw(r)}else await vb(r.localStore,t,!1).then((()=>Ww(r,t,n))).catch(Cm)}async function qw(e,t){const n=em(e),r=t.batch.batchId;try{const e=await function(e,t){const n=em(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,o=i.keys();let s=Om.resolve();return o.forEach((e=>{s=s.next((()=>r.getEntry(t,e))).next((t=>{const o=n.docVersions.get(e);Zp(null!==o),t.version.compareTo(o)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),s.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=hv();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);Kw(n,r,null),$w(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Jw(n,e)}catch(i){await Cm(i)}}async function Hw(e,t,n){const r=em(e);try{const e=await function(e,t){const n=em(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Zp(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Kw(r,t,n),$w(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Jw(r,e)}catch(i){await Cm(i)}}function $w(e,t){(e.ka.get(t)||[]).forEach((e=>{e.resolve()})),e.ka.delete(t)}function Kw(e,t,n){const r=em(e);let i=r.Ba[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function Ww(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ma.get(t))e.Fa.delete(r),n&&e.Ca.$a(r,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach((t=>{e.La.containsKey(t)||Gw(e,t)}))}function Gw(e,t){e.xa.delete(t.path.canonicalString());const n=e.Oa.get(t);null!==n&&(zb(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),Xw(e))}function Yw(e,t,n){for(const r of n)r instanceof Ow?(e.La.addReference(r.key,t),Qw(e,r)):r instanceof Pw?(Gp("SyncEngine","Document no longer in limbo: "+r.key),e.La.removeReference(r.key,t),e.La.containsKey(r.key)||Gw(e,r.key)):Jp()}function Qw(e,t){const n=t.key,r=n.path.canonicalString();e.Oa.get(n)||e.xa.has(r)||(Gp("SyncEngine","New document in limbo: "+n),e.xa.add(r),Xw(e))}function Xw(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){const t=e.xa.values().next().value;e.xa.delete(t);const n=new Em(bm.fromString(t)),r=e.qa.next();e.Na.set(r,new Nw(n)),e.Oa=e.Oa.insert(n,r),Ub(e.remoteStore,new By(Wg(Hg(n.path)),r,"TargetPurposeLimboResolution",Am.oe))}}async function Jw(e,t,n){const r=em(e),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach(((e,a)=>{s.push(r.Ka(a,t,n).then((e=>{var t;if((e||n)&&r.isPrimaryClient){const i=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(e){i.push(e);const t=ub.Wi(a.targetId,e);o.push(t)}})))})),await Promise.all(s),r.Ca.d_(i),await async function(e,t){const n=em(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Om.forEach(t,(t=>Om.forEach(t.$i,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Om.forEach(t.Ui,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!Pm(r))throw r;Gp("LocalStore","Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.os.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.os=n.os.insert(e,i)}}}(r.localStore,o))}async function Zw(e,t){const n=em(e);if(!n.currentUser.isEqual(t)){Gp("SyncEngine","User change. New user:",t.toKey());const e=await fb(n.localStore,t);n.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).ka.forEach((e=>{e.forEach((e=>{e.reject(new nm(tm.CANCELLED,i))}))})),r.ka.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Jw(n,e.hs)}var r,i}function ex(e,t){const n=em(e),r=n.Na.get(t);if(r&&r.va)return hv().add(r.key);{let e=hv();const r=n.Ma.get(t);if(!r)return e;for(const t of r){const r=n.Fa.get(t);e=e.unionWith(r.view.Va)}return e}}function tx(e){const t=em(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Uw.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ex.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Bw.bind(null,t),t.Ca.d_=Ew.bind(null,t.eventManager),t.Ca.$a=kw.bind(null,t.eventManager),t}class nx{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ab(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return function(e,t,n,r){return new hb(e,t,n,r)}(this.persistence,new db,e.initialUser,this.serializer)}Ga(e){return new sb(lb.Zr,this.serializer)}Wa(e){return new wb}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nx.provider={build:()=>new nx};class rx{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>zw(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zw.bind(null,this.syncEngine),await async function(e,t){const n=em(e);t?(n.L_.delete(2),await Fb(n)):t||(n.L_.add(2),await Vb(n),n.q_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yw}createDatastore(e){const t=Ab(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Ob(r));var r;return function(e,t,n,r){return new Rb(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new Db(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,(e=>zw(this.syncEngine,e,0)),Eb.D()?new Eb:new xb)}createSyncEngine(e,t){return function(e,t,n,r,i,o,s){const a=new Lw(e,t,n,r,i,o);return s&&(a.Qa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=em(e);Gp("RemoteStore","RemoteStore shutting down."),t.L_.add(5),await Vb(t),t.k_.shutdown(),t.q_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}rx.provider={build:()=>new rx};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ix{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Yp("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Hp.UNAUTHENTICATED,this.clientId=fm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async e=>{Gp("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Gp("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rm;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(Cq){const n=fw(Cq,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function sx(e,t){e.asyncQueue.verifyOperationInProgress(),Gp("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await fb(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function ax(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Gp("FirestoreClient","Using user provided OfflineComponentProvider");try{await sx(e,e._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!("FirebaseError"===(n=i).name?n.code===tm.FAILED_PRECONDITION||n.code===tm.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw i;Qp("Error using user provided cache. Falling back to memory cache: "+i),await sx(e,new nx)}}else Gp("FirestoreClient","Using default OfflineComponentProvider"),await sx(e,new nx);var n;return e._offlineComponents}(e);Gp("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>uw(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>uw(t.remoteStore,n))),e._onlineComponents=t}async function lx(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Gp("FirestoreClient","Using user provided OnlineComponentProvider"),await ax(e,e._uninitializedComponentsProvider._online)):(Gp("FirestoreClient","Using default OnlineComponentProvider"),await ax(e,new rx))),e._onlineComponents}async function ux(e){const t=await lx(e),n=t.eventManager;return n.onListen=Mw.bind(null,t.syncEngine),n.onUnlisten=Dw.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Rw.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Fw.bind(null,t.syncEngine),n}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cx(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const dx=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(e,t,n){if(!n)throw new nm(tm.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function fx(e){if(!Em.isDocumentKey(e))throw new nm(tm.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function px(e){if(Em.isDocumentKey(e))throw new nm(tm.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function mx(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Jp()}function gx(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new nm(tm.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mx(e);throw new nm(tm.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new nm(tm.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new nm(tm.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new nm(tm.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cx(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new nm(tm.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new nm(tm.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new nm(tm.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class yx{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vx({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new nm(tm.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new nm(tm.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vx(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new om;switch(e.type){case"firstParty":return new um(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new nm(tm.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=dx.get(e);t&&(Gp("ComponentProvider","Removing Datastore"),dx.delete(e),t.terminate())}(this),Promise.resolve()}}function bx(e,t,n,r={}){var i;const o=(e=gx(e,yx))._getSettings(),s=`${t}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==s&&Qp("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Hp.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ah(JSON.stringify({alg:"none",type:"JWT"})),Ah(JSON.stringify(o)),""].join(".")}(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new nm(tm.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Hp(o)}e._authCredentials=new sm(new im(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new wx(this.firestore,e,this._query)}}class xx{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ex(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xx(this.firestore,e,this._key)}}class Ex extends wx{constructor(e,t,n){super(e,t,Hg(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xx(this.firestore,null,new Em(e))}withConverter(e){return new Ex(this.firestore,e,this._path)}}function kx(e,t,...n){if(e=ef(e),hx("collection","path",t),e instanceof yx){const r=bm.fromString(t,...n);return px(r),new Ex(e,null,r)}{if(!(e instanceof xx||e instanceof Ex))throw new nm(tm.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(bm.fromString(t,...n));return px(r),new Ex(e.firestore,null,r)}}function _x(e,t,...n){if(e=ef(e),1===arguments.length&&(t=fm.newId()),hx("doc","path",t),e instanceof yx){const r=bm.fromString(t,...n);return fx(r),new xx(e,null,new Em(r))}{if(!(e instanceof xx||e instanceof Ex))throw new nm(tm.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(bm.fromString(t,...n));return fx(r),new xx(e.firestore,e instanceof Ex?e.converter:null,new Em(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ib(this,"async_queue_retry"),this.Vu=()=>{const e=Pb();e&&Gp("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()},this.mu=e;const t=Pb();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Pb();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const t=new rm;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(0!==this.Pu.length){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(Tq){if(!Pm(Tq))throw Tq;Gp("AsyncQueue","Operation failed with retryable error: "+Tq)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const t=this.mu.then((()=>(this.du=!0,e().catch((e=>{this.Eu=e,this.du=!1;throw Yp("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.du=!1,e))))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const r=hw.createAndSchedule(this,e,t,n,(e=>this.yu(e)));return this.Tu.push(r),r}fu(){this.Eu&&Jp()}verifyOperationInProgress(){}async wu(){let e;do{e=this.mu,await e}while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Tu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Tx extends yx{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Sx,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sx(e),this._firestoreClient=void 0,await e}}}function Cx(e){if(e._terminated)throw new nm(tm.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r;const i=e._freezeSettings(),o=(s=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",l=e._persistenceKey,u=i,new Xm(s,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,cx(u.experimentalLongPollingOptions),u.useFetchStreams));var s,a,l,u;e._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),e._firestoreClient=new ox(e._authCredentials,e._appCheckCredentials,e._queue,o,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),e._firestoreClient}class Ox{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ox(qm.fromBase64String(e))}catch(t){throw new nm(tm.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ox(qm.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new nm(tm.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xm(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new nm(tm.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new nm(tm.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pm(this._lat,e._lat)||pm(this._long,e._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx=/^__.*__$/;class Mx{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Vv(e,this.data,this.fieldMask,t,this.fieldTransforms):new Fv(e,this.data,t,this.fieldTransforms)}}class Rx{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Vv(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function jx(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Jp()}}class Dx{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Dx(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.Ou(e),r}Nu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Yx(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(0===e.length)throw this.Bu("Document fields must not be empty");if(jx(this.Cu)&&Lx.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Fx{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ab(e)}Qu(e,t,n,r=!1){return new Dx({Cu:e,methodName:t,qu:n,path:xm.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vx(e){const t=e._freezeSettings(),n=Ab(e._databaseId);return new Fx(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Ux(e,t,n,r,i,o={}){const s=e.Qu(o.merge||o.mergeFields?2:0,t,n,i);$x("Data must be an object, but it was:",s,r);const a=qx(r,s);let l,u;if(o.merge)l=new zm(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const e=[];for(const r of o.mergeFields){const i=Kx(t,r,n);if(!s.contains(i))throw new nm(tm.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Qx(e,i)||e.push(i)}l=new zm(e),u=s.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=s.fieldTransforms;return new Mx(new pg(a),l,u)}class zx extends Ax{_toFieldTransform(e){if(2!==e.Cu)throw 1===e.Cu?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zx}}function Bx(e,t){if(Hx(e=ef(e)))return $x("Unsupported field value:",t,e),qx(e,t);if(e instanceof Ax)return function(e,t){if(!jx(t.Cu))throw t.Bu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Bu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xu&&4!==t.Cu)throw t.Bu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Bx(i,t.Lu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=ef(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return gv(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=gm.fromDate(e);return{timestampValue:vy(t.serializer,n)}}if(e instanceof gm){const n=new gm(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:vy(t.serializer,n)}}if(e instanceof Ix)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Ox)return{bytesValue:yy(t.serializer,e._byteString)};if(e instanceof xx){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Bu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:xy(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof Nx)return n=t,{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map((e=>{if("number"!=typeof e)throw n.Bu("VectorValues must only contain numeric values.");return pv(n.serializer,e)}))}}}}};var n;throw t.Bu(`Unsupported field value: ${mx(e)}`)}(e,t)}function qx(e,t){const n={};return Rm(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Mm(e,((e,r)=>{const i=Bx(r,t.Mu(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Hx(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof gm||e instanceof Ix||e instanceof Ox||e instanceof xx||e instanceof Ax||e instanceof Nx)}function $x(e,t,n){if(!Hx(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=mx(n);throw"an object"===r?t.Bu(e+" a custom object"):t.Bu(e+" "+r)}var r}function Kx(e,t,n){if((t=ef(t))instanceof Px)return t._internalPath;if("string"==typeof t)return Gx(e,t);throw Yx("Field path arguments must be of type string or ",e,!1,void 0,n)}const Wx=new RegExp("[~\\*/\\[\\]]");function Gx(e,t,n){if(t.search(Wx)>=0)throw Yx(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Px(...t.split("."))._internalPath}catch(r){throw Yx(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Yx(e,t,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new nm(tm.INVALID_ARGUMENT,a+e+l)}function Qx(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xx(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Jx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Zx("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Jx extends Xx{data(){return super.data()}}function Zx(e,t){return"string"==typeof t?Gx(e,t):t instanceof Px?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{convertValue(e,t="none"){switch(eg(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Km(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Wm(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Jp()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Mm(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertVectorValue(e){var t,n,r;const i=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((e=>Km(e.doubleValue)));return new Nx(i)}convertGeoPoint(e){return new Ix(Km(e.latitude),Km(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ym(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Qm(e));default:return null}}convertTimestamp(e){const t=$m(e);return new gm(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=bm.fromString(e);Zp(zy(n));const r=new Jm(n.get(1),n.get(3)),i=new Em(n.popFirst(5));return r.isEqual(t)||Yp(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tE{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nE extends Xx{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new rE(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Zx("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class rE extends nE{data(e={}){return super.data(e)}}class iE{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new tE(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new rE(this._firestore,this._userDataWriter,n.key,n,new tE(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new nm(tm.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new rE(e._firestore,e._userDataWriter,n.doc.key,n.doc,new tE(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new rE(e._firestore,e._userDataWriter,t.doc.key,t.doc,new tE(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,o=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),o=n.indexOf(t.doc.key)),{type:oE(t.type),doc:r,oldIndex:i,newIndex:o}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function oE(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Jp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(e){e=gx(e,xx);const t=gx(e.firestore,Tx);return function(e,t,n={}){const r=new rm;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const o=new ix({next:a=>{o.Za(),t.enqueueAndForget((()=>xw(e,s)));const l=a.docs.has(n);!l&&a.fromCache?i.reject(new nm(tm.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&a.fromCache&&r&&"server"===r.source?i.reject(new nm(tm.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:e=>i.reject(e)}),s=new Cw(Hg(n.path),o,{includeMetadataChanges:!0,_a:!0});return ww(e,s)}(await ux(e),e.asyncQueue,t,n,r))),r.promise}(Cx(t),e._key).then((n=>function(e,t,n){const r=n.docs.get(t._key),i=new aE(e);return new nE(e,i,t._key,r,new tE(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n)))}class aE extends eE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ox(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xx(this.firestore,null,t)}}function lE(e){e=gx(e,wx);const t=gx(e.firestore,Tx),n=Cx(t),r=new aE(t);return function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new nm(tm.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),function(e,t,n={}){const r=new rm;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const o=new ix({next:n=>{o.Za(),t.enqueueAndForget((()=>xw(e,s))),n.fromCache&&"server"===r.source?i.reject(new nm(tm.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),s=new Cw(n,o,{includeMetadataChanges:!0,_a:!0});return ww(e,s)}(await ux(e),e.asyncQueue,t,n,r))),r.promise}(n,e._query).then((n=>new iE(t,r,e,n)))}function uE(e,t,n,...r){e=gx(e,xx);const i=gx(e.firestore,Tx),o=Vx(i);let s;return s="string"==typeof(t=ef(t))||t instanceof Px?function(e,t,n,r,i,o){const s=e.Qu(1,t,n),a=[Kx(t,r,n)],l=[i];if(o.length%2!=0)throw new nm(tm.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<o.length;h+=2)a.push(Kx(t,o[h])),l.push(o[h+1]);const u=[],c=pg.empty();for(let h=a.length-1;h>=0;--h)if(!Qx(u,a[h])){const e=a[h];let t=l[h];t=ef(t);const n=s.Nu(e);if(t instanceof zx)u.push(e);else{const r=Bx(t,n);null!=r&&(u.push(e),c.set(e,r))}}const d=new zm(u);return new Rx(c,d,s.fieldTransforms)}(o,"updateDoc",e._key,t,n,r):function(e,t,n,r){const i=e.Qu(1,t,n);$x("Data must be an object, but it was:",i,r);const o=[],s=pg.empty();Mm(r,((e,r)=>{const a=Gx(t,e,n);r=ef(r);const l=i.Nu(a);if(r instanceof zx)o.push(a);else{const e=Bx(r,l);null!=e&&(o.push(a),s.set(a,e))}}));const a=new zm(o);return new Rx(s,a,i.fieldTransforms)}(o,"updateDoc",e._key,t),dE(i,[s.toMutation(e._key,Av.exists(!0))])}function cE(e){return dE(gx(e.firestore,Tx),[new qv(e._key,Av.none())])}function dE(e,t){return function(e,t){const n=new rm;return e.asyncQueue.enqueueAndForget((async()=>Vw(await function(e){return lx(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(Cx(e),t)}!function(e,t=!0){$p=vp,hp(new tf("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),o=new Tx(new am(e.getProvider("auth-internal")),new dm(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new nm(tm.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jm(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),wp(qp,"4.7.3",e),wp(qp,"4.7.3","esm2017")}();const hE="@firebase/installations",fE="0.6.9",pE=1e4,mE=`w:${fE}`,gE="FIS_v2",vE=36e5,yE=new Hh("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function bE(e){return e instanceof qh&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function xE(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function EE(e,t){const n=(await t.json()).error;return yE.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function kE({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function _E(e,{refreshToken:t}){const n=kE(e);return n.append("Authorization",function(e){return`${gE} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function SE(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function TE(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const CE=/^[cdef][\w-]{21}$/;function OE(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return CE.test(t)?t:""}catch(e){return""}}function PE(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE=new Map;function IE(e,t){const n=PE(e);NE(n,t),function(e,t){const n=function(){!LE&&"BroadcastChannel"in self&&(LE=new BroadcastChannel("[Firebase] FID Change"),LE.onmessage=e=>{NE(e.data.key,e.data.fid)});return LE}();n&&n.postMessage({key:e,fid:t});0===AE.size&&LE&&(LE.close(),LE=null)}(n,t)}function NE(e,t){const n=AE.get(e);if(n)for(const r of n)r(t)}let LE=null;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ME="firebase-installations-store";let RE=null;function jE(){return RE||(RE=Sf("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(ME)}})),RE}async function DE(e,t){const n=PE(e),r=(await jE()).transaction(ME,"readwrite"),i=r.objectStore(ME),o=await i.get(n);return await i.put(t,n),await r.done,o&&o.fid===t.fid||IE(e,t.fid),t}async function FE(e){const t=PE(e),n=(await jE()).transaction(ME,"readwrite");await n.objectStore(ME).delete(t),await n.done}async function VE(e,t){const n=PE(e),r=(await jE()).transaction(ME,"readwrite"),i=r.objectStore(ME),o=await i.get(n),s=t(o);return void 0===s?await i.delete(n):await i.put(s,n),await r.done,!s||o&&o.fid===s.fid||IE(e,s.fid),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UE(e){let t;const n=await VE(e.appConfig,(n=>{const r=function(e){const t=e||{fid:OE(),registrationStatus:0};return qE(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(yE.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=wE(e),i=kE(e),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={fid:n,authVersion:gE,appId:e.appId,sdkVersion:mE},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await SE((()=>fetch(r,a)));if(l.ok){const e=await l.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:xE(e.authToken)}}throw await EE("Create Installation",l)}(e,t);return DE(e.appConfig,n)}catch(Tq){throw bE(Tq)&&409===Tq.customData.serverCode?await FE(e.appConfig):await DE(e.appConfig,{fid:t.fid,registrationStatus:0}),Tq}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:zE(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function zE(e){let t=await BE(e.appConfig);for(;1===t.registrationStatus;)await TE(100),t=await BE(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await UE(e);return n||t}return t}function BE(e){return VE(e,(e=>{if(!e)throw yE.create("installation-not-found");return qE(e)}))}function qE(e){return 1===(t=e).registrationStatus&&t.registrationTime+pE<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function HE({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${wE(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),i=_E(e,n),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={installation:{sdkVersion:mE,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await SE((()=>fetch(r,a)));if(l.ok){return xE(await l.json())}throw await EE("Generate Auth Token",l)}async function $E(e,t=!1){let n;const r=await VE(e.appConfig,(r=>{if(!WE(r))throw yE.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+vE}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await KE(e.appConfig);for(;1===n.authToken.requestStatus;)await TE(100),n=await KE(e.appConfig);const r=n.authToken;return 0===r.requestStatus?$E(e,t):r}(e,t),r;{if(!navigator.onLine)throw yE.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await HE(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await DE(e.appConfig,r),n}catch(Tq){if(!bE(Tq)||401!==Tq.customData.serverCode&&404!==Tq.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await DE(e.appConfig,n)}else await FE(e.appConfig);throw Tq}}(e,t),t}}));return n?await n:r.authToken}function KE(e){return VE(e,(e=>{if(!WE(e))throw yE.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+pE<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function WE(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function GE(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await UE(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await $E(n,t)).token}function YE(e){return yE.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="installations",XE=e=>{const t=fp(e.getProvider("app").getImmediate(),QE).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await UE(t);return r?r.catch(console.error):$E(t).catch(console.error),n.fid}(t),getToken:e=>GE(t,e)}};hp(new tf(QE,(e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw YE("App Configuration");if(!e.name)throw YE("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw YE(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:fp(t,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),hp(new tf("installations-internal",XE,"PRIVATE")),wp(hE,fE),wp(hE,fE,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const JE="analytics",ZE="https://www.googletagmanager.com/gtag/js",ek=new hf("@firebase/analytics"),tk=new Hh("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nk(e){if(!e.startsWith(ZE)){const t=tk.create("invalid-gtag-resource",{gtagURL:e});return ek.warn(t.message),""}return e}function rk(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function ik(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:nk}),r=document.createElement("script"),i=`${ZE}?l=${e}&id=${t}`;r.src=n?null==n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function ok(e,t,n,r){return async function(i,...o){try{if("event"===i){const[r,i]=o;await async function(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await rk(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){o=[];break}o.push(i)}}0===o.length&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(Tq){ek.error(Tq)}}(e,t,n,r,i)}else if("config"===i){const[i,s]=o;await async function(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const e=(await rk(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(Tq){ek.error(Tq)}e("config",i,o)}(e,t,n,r,i,s)}else if("consent"===i){const[t,n]=o;e("consent",t,n)}else if("get"===i){const[t,n,r]=o;e("get",t,n,r)}else if("set"===i){const[t]=o;e("set",t)}else e(i,...o)}catch(Tq){ek.error(Tq)}}}const sk=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function ak(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function lk(e,t=sk,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw tk.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw tk.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ck;return setTimeout((async()=>{a.abort()}),6e4),uk({appId:r,apiKey:i,measurementId:o},s,a,t)}async function uk(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=sk){var o;const{appId:s,measurementId:a}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(o),r(tk.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(Tq){if(a)return ek.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==Tq?void 0:Tq.message}]`),{appId:s,measurementId:a};throw Tq}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:ak(r)},o="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),s=await fetch(o,i);if(200!==s.status&&304!==s.status){let e="";try{const n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw tk.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}(e);return i.deleteThrottleMetadata(s),t}catch(Tq){const l=Tq;if(!function(e){if(!(e instanceof qh&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(l)){if(i.deleteThrottleMetadata(s),a)return ek.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==l?void 0:l.message}]`),{appId:s,measurementId:a};throw Tq}const u=503===Number(null===(o=null==l?void 0:l.customData)||void 0===o?void 0:o.httpStatus)?Zh(n,i.intervalMillis,30):Zh(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(s,c),ek.debug(`Calling attemptFetch again in ${u} millis`),uk(e,c,r,i)}}class ck{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}async function dk(e,t,n,r,i,o,s){var a;const l=lk(e);l.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&ek.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>ek.error(e))),t.push(l);const u=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(){if(!zh())return ek.warn(tk.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Bh()}catch(Tq){return ek.warn(tk.create("indexeddb-unavailable",{errorInfo:null==Tq?void 0:Tq.toString()}).message),!1}return!0}().then((e=>e?r.getId():void 0)),[c,d]=await Promise.all([l,u]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ZE)&&n.src.includes(e))return n;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(o)||ik(o,c.measurementId),i("js",new Date);const h=null!==(a=null==s?void 0:s.config)&&void 0!==a?a:{};return h.origin="firebase",h.update=!0,null!=d&&(h.firebase_id=d),i("config",c.measurementId,h),c.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e){this.app=e}_delete(){return delete fk[this.app.options.appId],Promise.resolve()}}let fk={},pk=[];const mk={};let gk,vk,yk="dataLayer",bk=!1;function wk(){const e=[];if(Vh()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=tk.create("invalid-analytics-context",{errorInfo:t});ek.warn(n.message)}}function xk(e,t,n){wk();const r=e.options.appId;if(!r)throw tk.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw tk.create("no-api-key");ek.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=fk[r])throw tk.create("already-exists",{id:r});if(!bk){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(yk);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let o=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(o=window[i]),window[i]=ok(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}(fk,pk,mk,yk,"gtag");vk=e,gk=t,bk=!0}fk[r]=dk(e,pk,mk,t,gk,yk,n);return new hk(e)}function Ek(e,t,n,r){e=ef(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(vk,fk[e.app.options.appId],t,n,r).catch((e=>ek.error(e)))}const kk="@firebase/analytics",_k="0.10.8";function Sk(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function Tk(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}hp(new tf(JE,((e,{options:t})=>xk(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),hp(new tf("analytics-internal",(function(e){try{const t=e.getProvider(JE).getImmediate();return{logEvent:(e,n,r)=>Ek(t,e,n,r)}}catch(Tq){throw tk.create("interop-component-reg-failed",{reason:Tq})}}),"PRIVATE")),wp(kk,_k),wp(kk,_k,"esm2017"),"function"==typeof SuppressedError&&SuppressedError;const Ck=Tk,Ok=new Hh("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Pk=new hf("@firebase/auth");function Ak(e,...t){Pk.logLevel<=sf.ERROR&&Pk.error(`Auth (${vp}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(e,...t){throw Rk(e,...t)}function Nk(e,...t){return Rk(e,...t)}function Lk(e,t,n){const r=Object.assign(Object.assign({},Ck()),{[t]:n});return new Hh("auth","Firebase",r).create(t,{appName:e.name})}function Mk(e){return Lk(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rk(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Ok.create(e,...t)}function jk(e,t,...n){if(!e)throw Rk(t,...n)}function Dk(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ak(t),new Error(t)}function Fk(e,t){e||Dk(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Uk(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Uk()&&"https:"!==Uk()&&!Vh()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bk{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fk(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fh())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return zk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(e,t){Fk(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void Dk("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void Dk("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void Dk("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Kk=new Bk(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Gk(e,t,n,r,i={}){return Yk(e,i,(async()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});const s=Gh(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:a},i);return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),Hk.fetch()(Xk(e,e.config.apiHost,n,s),l)}))}async function Yk(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},$k),t);try{const t=new Zk(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw e_(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw e_(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw e_(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw e_(e,"user-disabled",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw Lk(e,a,s);Ik(e,a)}}catch(Tq){if(Tq instanceof qh)throw Tq;Ik(e,"network-request-failed",{message:String(Tq)})}}async function Qk(e,t,n,r,i={}){const o=await Gk(e,t,n,r,i);return"mfaPendingCredential"in o&&Ik(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Xk(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?qk(e.config,i):`${e.config.apiScheme}://${i}`}function Jk(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Zk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Nk(this.auth,"network-request-failed"))),Kk.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function e_(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nk(e,t,r);return i.customData._tokenResponse=n,i}function t_(e){return void 0!==e&&void 0!==e.enterprise}class n_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Jk(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}async function r_(e,t){return Gk(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(Tq){}}function o_(e){return 1e3*Number(e)}function s_(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Ak("JWT malformed, contained fewer than 3 sections"),null;try{const e=Ih(n);return e?JSON.parse(e):(Ak("Failed to decode base64 JWT payload"),null)}catch(Tq){return Ak("Caught error parsing JWT payload as JSON",null==Tq?void 0:Tq.toString()),null}}function a_(e){const t=s_(e);return jk(t,"internal-error"),jk(void 0!==t.exp,"internal-error"),jk(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(e,t,n=!1){if(n)return t;try{return await t}catch(Tq){throw Tq instanceof qh&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Tq)&&e.auth.currentUser===e&&await e.auth.signOut(),Tq}}class u_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(Tq){return void("auth/network-request-failed"===(null==Tq?void 0:Tq.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=i_(this.lastLoginAt),this.creationTime=i_(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d_(e){var t;const n=e.auth,r=await e.getIdToken(),i=await l_(e,r_(n,{idToken:r}));jk(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?h_(o.providerUserInfo):[],a=(l=e.providerData,u=s,[...l.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var l,u;const c=e.isAnonymous,d=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),h=!!c&&d,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new c_(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,f)}function h_(e){return e.map((e=>{var{providerId:t}=e,n=Sk(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class f_{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){jk(e.idToken,"internal-error"),jk(void 0!==e.idToken,"internal-error"),jk(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):a_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){jk(0!==e.length,"internal-error");const t=a_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(jk(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await Yk(e,{},(async()=>{const n=Gh({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=Xk(e,r,"/v1/token",`key=${i}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Hk.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new f_;return n&&(jk("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(jk("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(jk("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new f_,this.toJSON())}_performRefresh(){return Dk("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(e,t){jk("string"==typeof e||void 0===e,"internal-error",{appName:t})}class m_{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Sk(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new u_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new c_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await l_(this,this.stsTokenManager.getToken(this.auth,e));return jk(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=ef(e),r=await n.getIdToken(t),i=s_(r);jk(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:i_(o_(i.auth_time)),issuedAtTime:i_(o_(i.iat)),expirationTime:i_(o_(i.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ef(e);await d_(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(jk(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new m_(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){jk(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await d_(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pp(this.auth.app))return Promise.reject(Mk(this.auth));const e=await this.getIdToken();return await l_(this,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return Gk(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:x,stsTokenManager:E}=t;jk(y&&E,e,"internal-error");const k=f_.fromJSON(this.name,E);jk("string"==typeof y,e,"internal-error"),p_(c,e.name),p_(d,e.name),jk("boolean"==typeof b,e,"internal-error"),jk("boolean"==typeof w,e,"internal-error"),p_(h,e.name),p_(f,e.name),p_(p,e.name),p_(m,e.name),p_(g,e.name),p_(v,e.name);const _=new m_({uid:y,auth:e,email:d,emailVerified:b,displayName:c,isAnonymous:w,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:v});return x&&Array.isArray(x)&&(_.providerData=x.map((e=>Object.assign({},e)))),m&&(_._redirectEventId=m),_}static async _fromIdTokenResponse(e,t,n=!1){const r=new f_;r.updateFromServerResponse(t);const i=new m_({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await d_(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];jk(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?h_(r.providerUserInfo):[],o=!(r.email&&r.passwordHash||(null==i?void 0:i.length)),s=new f_;s.updateFromIdToken(n);const a=new m_({uid:r.localId,auth:e,stsTokenManager:s,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new c_(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==i?void 0:i.length))};return Object.assign(a,l),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=new Map;function v_(e){Fk(e instanceof Function,"Expected a class definition");let t=g_.get(e);return t?(Fk(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,g_.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}y_.type="NONE";const b_=y_;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(e,t,n){return`firebase:${e}:${t}:${n}`}class x_{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=w_(this.userKey,r.apiKey,i),this.fullPersistenceKey=w_("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?m_._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new x_(v_(b_),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||v_(b_);const o=w_(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=m_._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(l){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(l){}}))),new x_(i,e,n)):new x_(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(T_(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(k_(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(O_(t))return"Blackberry";if(P_(t))return"Webos";if(__(t))return"Safari";if((t.includes("chrome/")||S_(t))&&!t.includes("edge/"))return"Chrome";if(C_(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function k_(e=Fh()){return/firefox\//i.test(e)}function __(e=Fh()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function S_(e=Fh()){return/crios\//i.test(e)}function T_(e=Fh()){return/iemobile/i.test(e)}function C_(e=Fh()){return/android/i.test(e)}function O_(e=Fh()){return/blackberry/i.test(e)}function P_(e=Fh()){return/webos/i.test(e)}function A_(e=Fh()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function I_(){return function(){const e=Fh();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function N_(e=Fh()){return A_(e)||C_(e)||P_(e)||O_(e)||/windows phone/i.test(e)||T_(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(e,t=[]){let n;switch(e){case"Browser":n=E_(Fh());break;case"Worker":n=`${E_(Fh())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${vp}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(Tq){r(Tq)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(Tq){t.reverse();for(const r of t)try{r()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==Tq?void 0:Tq.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){var t,n,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=o.minPasswordLength)&&void 0!==t?t:6,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,o,s;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(o=a.containsNumericCharacter)||void 0===o||o),a.isValid&&(a.isValid=null===(s=a.containsNonAlphanumericCharacter)||void 0===s||s),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new F_(this),this.idTokenSubscription=new F_(this),this.beforeStateQueue=new M_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ok,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=v_(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await x_.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(Tq){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await r_(this,{idToken:e}),n=await m_._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(pp(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null==s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(Tq){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(Tq)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return jk(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(Tq){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await d_(e)}catch(Tq){if("auth/network-request-failed"!==(null==Tq?void 0:Tq.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pp(this.app))return Promise.reject(Mk(this));const t=e?ef(e):null;return t&&jk(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&jk(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return pp(this.app)?Promise.reject(Mk(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pp(this.app)?Promise.reject(Mk(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(v_(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Gk(e,"GET","/v2/passwordPolicy",Wk(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),t=new R_(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hh("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Gk(e,"POST","/v2/accounts:revokeToken",Wk(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&v_(e)||this._popupRedirectResolver;jk(t,this,"argument-error"),this.redirectPersistenceManager=await x_.create(this,[v_(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(jk(s,this,"internal-error"),s.then((()=>{o||i(this.currentUser)})),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{o=!0,i()}}{const n=e.addObserver(t);return()=>{o=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return jk(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=L_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Pk.logLevel<=sf.WARN&&Pk.warn(`Auth (${vp}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function D_(e){return ef(e)}class F_{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Xh(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return jk(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let V_={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function U_(e){return V_.loadJS(e)}class z_{constructor(e){this.type="recaptcha-enterprise",this.auth=D_(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{(async function(e,t){return Gk(e,"GET","/v2/recaptchaConfig",Wk(e,t))})(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new n_(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;t_(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&t_(window.grecaptcha))r(n,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=V_.recaptchaEnterpriseScript;0!==t.length&&(t+=n),U_(t).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function B_(e,t,n,r=!1){const i=new z_(e);let o;try{o=await i.verify(n)}catch(a){o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function q_(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await B_(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){const i=await B_(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(e,t,n){const r=D_(e);jk(r._canInitEmulator,r,"emulator-config-failed"),jk(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=$_(t),{host:o,port:s}=function(e){const t=$_(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:K_(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:K_(t)}}}(t),a=null===s?"":`:${s}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:!1})}),function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&console.info;"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function $_(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function K_(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class W_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dk("not implemented")}_getIdTokenResponse(e){return Dk("not implemented")}_linkToIdToken(e,t){return Dk("not implemented")}_getReauthenticationResolver(e){return Dk("not implemented")}}async function G_(e,t){return Gk(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(e,t){return Qk(e,"POST","/v1/accounts:signInWithPassword",Wk(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q_ extends W_{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Q_(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Q_(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return q_(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",Y_);case"emailLink":return async function(e,t){return Qk(e,"POST","/v1/accounts:signInWithEmailLink",Wk(e,t))}(e,{email:this._email,oobCode:this._password});default:Ik(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return q_(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",G_);case"emailLink":return async function(e,t){return Qk(e,"POST","/v1/accounts:signInWithEmailLink",Wk(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ik(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(e,t){return Qk(e,"POST","/v1/accounts:signInWithIdp",Wk(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_ extends W_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new J_(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ik("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Sk(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new J_(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){return X_(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,X_(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,X_(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Gh(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){var t,n,r,i,o,s;const a=Yh(Qh(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,c=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);jk(l&&u&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}static parseLink(e){const t=function(e){const t=Yh(Qh(e)).link,n=t?Yh(Qh(t)).deep_link_id:null,r=Yh(Qh(e)).deep_link_id;return(r?Yh(Qh(r)).link:null)||r||n||t||e}(e);try{return new Z_(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(){this.providerId=eS.PROVIDER_ID}static credential(e,t){return Q_._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Z_.parseLink(t);return jk(n,"argument-error"),Q_._fromEmailAndCode(e,n.code,n.tenantId)}}eS.PROVIDER_ID="password",eS.EMAIL_PASSWORD_SIGN_IN_METHOD="password",eS.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS extends tS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS extends nS{constructor(){super("facebook.com")}static credential(e){return J_._fromParams({providerId:rS.PROVIDER_ID,signInMethod:rS.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rS.credentialFromTaggedObject(e)}static credentialFromError(e){return rS.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return rS.credential(e.oauthAccessToken)}catch(t){return null}}}rS.FACEBOOK_SIGN_IN_METHOD="facebook.com",rS.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class iS extends nS{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return J_._fromParams({providerId:iS.PROVIDER_ID,signInMethod:iS.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return iS.credentialFromTaggedObject(e)}static credentialFromError(e){return iS.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return iS.credential(t,n)}catch(r){return null}}}iS.GOOGLE_SIGN_IN_METHOD="google.com",iS.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oS extends nS{constructor(){super("github.com")}static credential(e){return J_._fromParams({providerId:oS.PROVIDER_ID,signInMethod:oS.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oS.credentialFromTaggedObject(e)}static credentialFromError(e){return oS.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return oS.credential(e.oauthAccessToken)}catch(t){return null}}}oS.GITHUB_SIGN_IN_METHOD="github.com",oS.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sS extends nS{constructor(){super("twitter.com")}static credential(e,t){return J_._fromParams({providerId:sS.PROVIDER_ID,signInMethod:sS.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return sS.credentialFromTaggedObject(e)}static credentialFromError(e){return sS.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return sS.credential(t,n)}catch(r){return null}}}sS.TWITTER_SIGN_IN_METHOD="twitter.com",sS.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class aS{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await m_._fromIdTokenResponse(e,n,r),o=lS(n);return new aS({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=lS(n);return new aS({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function lS(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS extends qh{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,uS.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new uS(e,t,n,r)}}function cS(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw uS._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function dS(e,t,n=!1){if(pp(e.app))return Promise.reject(Mk(e));const r="signIn",i=await cS(e,r,t),o=await aS._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function hS(e,t,n){return pp(e.app)?Promise.reject(Mk(e)):async function(e,t){return dS(D_(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ef(e),eS.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&async function(e){const t=D_(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}(e),t}))}function fS(e,t,n,r){return ef(e).onAuthStateChanged(t,n,r)}const pS="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pS,"1"),this.storage.removeItem(pS),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS extends mS{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=N_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);I_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gS.type="LOCAL";const vS=gS;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS extends mS{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yS.type="SESSION";const bS=yS;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wS{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new wS(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xS(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wS.receivers=[];class ES{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const l=xS("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _S(){return void 0!==kS().WorkerGlobalScope&&"function"==typeof kS().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const SS="firebaseLocalStorageDb",TS="firebaseLocalStorage",CS="fbase_key";class OS{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function PS(e,t){return e.transaction([TS],t?"readwrite":"readonly").objectStore(TS)}function AS(){const e=indexedDB.open(SS,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(TS,{keyPath:CS})}catch(Tq){n(Tq)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(TS)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(SS);return new OS(e).toPromise()}(),t(await AS()))}))}))}async function IS(e,t,n){const r=PS(e,!0).put({[CS]:t,value:n});return new OS(r).toPromise()}function NS(e,t){const n=PS(e,!0).delete(t);return new OS(n).toPromise()}class LS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await AS()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(Tq){if(t++>3)throw Tq;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _S()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wS._getInstance(_S()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ES(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await AS();return await IS(e,pS,"1"),await NS(e,pS),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>IS(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=PS(e,!1).get(t),r=await new OS(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>NS(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=PS(e,!1).getAll();return new OS(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}LS.type="LOCAL";const MS=LS;new Bk(3e4,6e4);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class RS extends W_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return X_(e,this._buildIdpRequest())}_linkToIdToken(e,t){return X_(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return X_(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function jS(e){return dS(e.auth,new RS(e),e.bypassAuthState)}function DS(e){const{auth:t,user:n}=e;return jk(n,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,n=!1){const{auth:r}=e;if(pp(r.app))return Promise.reject(Mk(r));const i="reauthenticate";try{const o=await l_(e,cS(r,i,t,e),n);jk(o.idToken,r,"internal-error");const s=s_(o.idToken);jk(s,r,"internal-error");const{sub:a}=s;return jk(e.uid===a,r,"user-mismatch"),aS._forOperation(e,i,o)}catch(Tq){throw"auth/user-not-found"===(null==Tq?void 0:Tq.code)&&Ik(r,"user-mismatch"),Tq}}(n,new RS(e),e.bypassAuthState)}async function FS(e){const{auth:t,user:n}=e;return jk(n,t,"internal-error"),async function(e,t,n=!1){const r=await l_(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return aS._forOperation(e,"link",r)}(n,new RS(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(Tq){this.reject(Tq)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(Tq){this.reject(Tq)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jS;case"linkViaPopup":case"linkViaRedirect":return FS;case"reauthViaPopup":case"reauthViaRedirect":return DS;default:Ik(this.auth,"internal-error")}}resolve(e){Fk(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fk(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=new Bk(2e3,1e4);class zS extends VS{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,zS.currentPopupAction&&zS.currentPopupAction.cancel(),zS.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return jk(e,this.auth,"internal-error"),e}async onExecution(){Fk(1===this.filter.length,"Popup operations only handle one event");const e=xS();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Nk(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Nk(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zS.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Nk(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,US.get())};e()}}zS.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const BS="pendingRedirect",qS=new Map;class HS extends VS{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=qS.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return w_(BS,e.config.apiKey,e.name)}(t),r=function(e){return v_(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(Tq){e=()=>Promise.reject(Tq)}qS.set(this.auth._key(),e)}return this.bypassAuthState||qS.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function $S(e,t){qS.set(e._key(),t)}async function KS(e,t,n=!1){if(pp(e.app))return Promise.reject(Mk(e));const r=D_(e),i=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return t?v_(t):(jk(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),o=new HS(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return YS(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!YS(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Nk(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(GS(e))}saveEventToCache(e){this.cachedEventUids.add(GS(e)),this.lastProcessedEventTime=Date.now()}}function GS(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function YS({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const QS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XS=/^https?/;async function JS(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Gk(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(ZS(r))return}catch(n){}Ik(e,"unauthorized-domain")}function ZS(e){const t=Vk(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!XS.test(n))return!1;if(QS.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=new Bk(3e4,6e4);function tT(){const e=kS().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function nT(e){return new Promise(((t,n)=>{var r,i,o;function s(){tT(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tT(),n(Nk(e,"network-request-failed"))},timeout:eT.get()})}if(null===(i=null===(r=kS().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=kS().gapi)||void 0===o?void 0:o.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return kS()[t]=()=>{gapi.load?s():n(Nk(e,"network-request-failed"))},U_(`${V_.gapiScript}?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw rT=null,e}))}let rT=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const iT=new Bk(5e3,15e3),oT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aT(e){const t=e.config;jk(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?qk(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:vp},i=sT.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Gh(r).slice(1)}`}async function lT(e){const t=await function(e){return rT=rT||nT(e),rT}(e),n=kS().gapi;return jk(n,e,"internal-error"),t.open({where:document.body,url:aT(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oT,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Nk(e,"network-request-failed"),o=kS().setTimeout((()=>{r(i)}),iT.get());function s(){kS().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class cT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(Tq){}}}function dT(e,t,n,r=500,i=600){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},uT),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Fh().toLowerCase();n&&(a=S_(u)?"_blank":n),k_(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Fh()){var t;return A_(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new cT(null);const d=window.open(t||"",a,c);jk(d,e,"popup-blocked");try{d.focus()}catch(Tq){}return new cT(d)}const hT="__/auth/handler",fT="emulator/auth/handler",pT=encodeURIComponent("fac");async function mT(e,t,n,r,i,o){jk(e.config.authDomain,e,"auth-domain-config-required"),jk(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:vp,eventId:i};if(t instanceof tS){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))s[e]=t}if(t instanceof nS){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${pT}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${hT}`;return qk(e,fT)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Gh(a).slice(1)}${u}`}const gT="webStorageSupport";const vT=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bS,this._completeRedirectFn=KS,this._overrideRedirectResult=$S}async _openPopup(e,t,n,r){var i;Fk(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return dT(e,await mT(e,t,n,Vk(),r),xS())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){kS().location.href=e}(await mT(e,t,n,Vk(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Fk(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await lT(e),n=new WS(e);return t.register("authEvent",(t=>{jk(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gT,{type:gT},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[gT];void 0!==i&&t(!!i),Ik(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=JS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return N_()||__()||A_()}};var yT="@firebase/auth",bT="1.7.9";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){jk(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
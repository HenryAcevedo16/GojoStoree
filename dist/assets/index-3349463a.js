function e(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r={exports:{}},i={},s={exports:{}},o={},a=Symbol.for("react.element"),l=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,k={};function _(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||w}function E(){}function S(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||w}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},E.prototype=_.prototype;var x=S.prototype=new E;x.constructor=S,b(x,_.prototype),x.isPureReactComponent=!0;var C=Array.isArray,T=Object.prototype.hasOwnProperty,I={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r,i={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)T.call(t,r)&&!A.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:a,type:e,key:s,ref:o,props:i,_owner:I.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function D(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var o=!1;if(null===e)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case a:case l:o=!0}}if(o)return i=i(o=e),e=""===r?"."+O(o,0):r,C(i)?(n="",null!=e&&(n=e.replace(R,"$&/")+"/"),D(i,t,n,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(R,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=""===r?".":r+":",C(e))for(var c=0;c<e.length;c++){var u=r+O(s=e[c],c);o+=D(s,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=v&&e[v]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)o+=D(s=s.value,t,n,u=r+O(s,c++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function L(e,t,n){if(null==e)return e;var r=[],i=0;return D(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function M(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var j={current:null},F={transition:null},U={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:F,ReactCurrentOwner:I};o.Children={map:L,forEach:function(e,t,n){L(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return L(e,(function(){t++})),t},toArray:function(e){return L(e,(function(e){return e}))||[]},only:function(e){if(!N(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},o.Component=_,o.Fragment=c,o.Profiler=h,o.PureComponent=S,o.StrictMode=u,o.Suspense=m,o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,o.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=b({},e.props),i=e.key,s=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,o=I.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)T.call(t,c)&&!A.hasOwnProperty(c)&&(r[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:a,type:e.type,key:i,ref:s,props:r,_owner:o}},o.createContext=function(e){return(e={$$typeof:f,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},o.createElement=P,o.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},o.createRef=function(){return{current:null}},o.forwardRef=function(e){return{$$typeof:p,render:e}},o.isValidElement=N,o.lazy=function(e){return{$$typeof:y,_payload:{_status:-1,_result:e},_init:M}},o.memo=function(e,t){return{$$typeof:g,type:e,compare:void 0===t?null:t}},o.startTransition=function(e){var t=F.transition;F.transition={};try{e()}finally{F.transition=t}},o.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},o.useCallback=function(e,t){return j.current.useCallback(e,t)},o.useContext=function(e){return j.current.useContext(e)},o.useDebugValue=function(){},o.useDeferredValue=function(e){return j.current.useDeferredValue(e)},o.useEffect=function(e,t){return j.current.useEffect(e,t)},o.useId=function(){return j.current.useId()},o.useImperativeHandle=function(e,t,n){return j.current.useImperativeHandle(e,t,n)},o.useInsertionEffect=function(e,t){return j.current.useInsertionEffect(e,t)},o.useLayoutEffect=function(e,t){return j.current.useLayoutEffect(e,t)},o.useMemo=function(e,t){return j.current.useMemo(e,t)},o.useReducer=function(e,t,n){return j.current.useReducer(e,t,n)},o.useRef=function(e){return j.current.useRef(e)},o.useState=function(e){return j.current.useState(e)},o.useSyncExternalStore=function(e,t,n){return j.current.useSyncExternalStore(e,t,n)},o.useTransition=function(){return j.current.useTransition()},o.version="18.2.0",s.exports=o;var z=s.exports;const V=n(z),B=e({__proto__:null,default:V},[z]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $=z,q=Symbol.for("react.element"),H=Symbol.for("react.fragment"),K=Object.prototype.hasOwnProperty,W=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G={key:!0,ref:!0,__self:!0,__source:!0};function Q(e,t,n){var r,i={},s=null,o=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(o=t.ref),t)K.call(t,r)&&!G.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:q,type:e,key:s,ref:o,props:i,_owner:W.current}}i.Fragment=H,i.jsx=Q,i.jsxs=Q,r.exports=i;var Y=r.exports,X={},J={exports:{}},Z={},ee={exports:{}},te={};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,s=e[r];if(!(0<i(s,t)))break e;e[r]=t,e[n]=s,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,s=e.length,o=s>>>1;r<o;){var a=2*(r+1)-1,l=e[a],c=a+1,u=e[c];if(0>i(l,n))c<s&&0>i(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[a]=n,r=a);else{if(!(c<s&&0>i(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,d=3,f=!1,p=!1,m=!1,g="function"==typeof setTimeout?setTimeout:null,y="function"==typeof clearTimeout?clearTimeout:null,v="undefined"!=typeof setImmediate?setImmediate:null;function w(e){for(var i=n(c);null!==i;){if(null===i.callback)r(c);else{if(!(i.startTime<=e))break;r(c),i.sortIndex=i.expirationTime,t(l,i)}i=n(c)}}function b(e){if(m=!1,w(e),!p)if(null!==n(l))p=!0,R(k);else{var t=n(c);null!==t&&O(b,t.startTime-e)}}function k(t,i){p=!1,m&&(m=!1,y(x),x=-1),f=!0;var s=d;try{for(w(i),h=n(l);null!==h&&(!(h.expirationTime>i)||t&&!I());){var o=h.callback;if("function"==typeof o){h.callback=null,d=h.priorityLevel;var a=o(h.expirationTime<=i);i=e.unstable_now(),"function"==typeof a?h.callback=a:h===n(l)&&r(l),w(i)}else r(l);h=n(l)}if(null!==h)var u=!0;else{var g=n(c);null!==g&&O(b,g.startTime-i),u=!1}return u}finally{h=null,d=s,f=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var _,E=!1,S=null,x=-1,C=5,T=-1;function I(){return!(e.unstable_now()-T<C)}function A(){if(null!==S){var t=e.unstable_now();T=t;var n=!0;try{n=S(!0,t)}finally{n?_():(E=!1,S=null)}}else E=!1}if("function"==typeof v)_=function(){v(A)};else if("undefined"!=typeof MessageChannel){var P=new MessageChannel,N=P.port2;P.port1.onmessage=A,_=function(){N.postMessage(null)}}else _=function(){g(A,0)};function R(e){S=e,E||(E=!0,_())}function O(t,n){x=g((function(){t(e.unstable_now())}),n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){p||f||(p=!0,R(k))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(e){switch(d){case 1:case 2:case 3:var t=3;break;default:t=d}var n=d;d=t;try{return e()}finally{d=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=d;d=e;try{return t()}finally{d=n}},e.unstable_scheduleCallback=function(r,i,s){var o=e.unstable_now();switch("object"==typeof s&&null!==s?s="number"==typeof(s=s.delay)&&0<s?o+s:o:s=o,r){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return r={id:u++,callback:i,priorityLevel:r,startTime:s,expirationTime:a=s+a,sortIndex:-1},s>o?(r.sortIndex=s,t(c,r),null===n(l)&&r===n(c)&&(m?(y(x),x=-1):m=!0,O(b,s-o))):(r.sortIndex=a,t(l,r),p||f||(p=!0,R(k))),r},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(e){var t=d;return function(){var n=d;d=t;try{return e.apply(this,arguments)}finally{d=n}}}}(te),ee.exports=te;var ne=ee.exports,re=z,ie=ne;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function se(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oe=new Set,ae={};function le(e,t){ce(e,t),ce(e+"Capture",t)}function ce(e,t){for(ae[e]=t,e=0;e<t.length;e++)oe.add(t[e])}var ue=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),he=Object.prototype.hasOwnProperty,de=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fe={},pe={};function me(e,t,n,r,i,s,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){ge[e]=new me(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];ge[t]=new me(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){ge[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){ge[e]=new me(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){ge[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){ge[e]=new me(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){ge[e]=new me(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){ge[e]=new me(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){ge[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)}));var ye=/[\-:]([a-z])/g;function ve(e){return e[1].toUpperCase()}function we(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!he.call(pe,e)||!he.call(fe,e)&&(de.test(e)?pe[e]=!0:(fe[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(ye,ve);ge[t]=new me(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(ye,ve);ge[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(ye,ve);ge[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){ge[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)})),ge.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){ge[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)}));var be=re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ke=Symbol.for("react.element"),_e=Symbol.for("react.portal"),Ee=Symbol.for("react.fragment"),Se=Symbol.for("react.strict_mode"),xe=Symbol.for("react.profiler"),Ce=Symbol.for("react.provider"),Te=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),Pe=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),Oe=Symbol.for("react.offscreen"),De=Symbol.iterator;function Le(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=De&&e[De]||e["@@iterator"])?e:null}var Me,je=Object.assign;function Fe(e){if(void 0===Me)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Me=t&&t[1]||""}return"\n"+Me+e}var Ue=!1;function ze(e,t){if(!e||Ue)return"";Ue=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"==typeof c.stack){for(var i=c.stack.split("\n"),s=r.stack.split("\n"),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(1!==o||1!==a)do{if(o--,0>--a||i[o]!==s[a]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=a);break}}}finally{Ue=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fe(e):""}function Ve(e){switch(e.tag){case 5:return Fe(e.type);case 16:return Fe("Lazy");case 13:return Fe("Suspense");case 19:return Fe("SuspenseList");case 0:case 2:case 15:return e=ze(e.type,!1);case 11:return e=ze(e.type.render,!1);case 1:return e=ze(e.type,!0);default:return""}}function Be(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case Ee:return"Fragment";case _e:return"Portal";case xe:return"Profiler";case Se:return"StrictMode";case Ae:return"Suspense";case Pe:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case Te:return(e.displayName||"Context")+".Consumer";case Ce:return(e._context.displayName||"Context")+".Provider";case Ie:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case Ne:return null!==(t=e.displayName||null)?t:Be(e.type)||"Memo";case Re:t=e._payload,e=e._init;try{return Be(e(t))}catch(n){}}return null}function $e(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Be(t);case 8:return t===Se?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function qe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function He(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Ke(e){e._valueTracker||(e._valueTracker=function(e){var t=He(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function We(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=He(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Ge(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Qe(e,t){var n=t.checked;return je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Ye(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=qe(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Xe(e,t){null!=(t=t.checked)&&we(e,"checked",t,!1)}function Je(e,t){Xe(e,t);var n=qe(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?et(e,t.type,n):t.hasOwnProperty("defaultValue")&&et(e,t.type,qe(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Ze(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function et(e,t,n){"number"===t&&Ge(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var tt=Array.isArray;function nt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qe(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function rt(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(se(91));return je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function it(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(se(92));if(tt(n)){if(1<n.length)throw Error(se(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:qe(n)}}function st(e,t){var n=qe(t.value),r=qe(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ot(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function at(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?at(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ct,ut,ht=(ut=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ct=ct||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ct.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ut(e,t)}))}:ut);function dt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var ft={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pt=["Webkit","ms","Moz","O"];function mt(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||ft.hasOwnProperty(e)&&ft[e]?(""+t).trim():t+"px"}function gt(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=mt(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(ft).forEach((function(e){pt.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ft[t]=ft[e]}))}));var yt=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vt(e,t){if(t){if(yt[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(se(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(se(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(se(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(se(62))}}function wt(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function kt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var _t=null,Et=null,St=null;function xt(e){if(e=ws(e)){if("function"!=typeof _t)throw Error(se(280));var t=e.stateNode;t&&(t=ks(t),_t(e.stateNode,e.type,t))}}function Ct(e){Et?St?St.push(e):St=[e]:Et=e}function Tt(){if(Et){var e=Et,t=St;if(St=Et=null,xt(e),t)for(e=0;e<t.length;e++)xt(t[e])}}function It(e,t){return e(t)}function At(){}var Pt=!1;function Nt(e,t,n){if(Pt)return e(t,n);Pt=!0;try{return It(e,t,n)}finally{Pt=!1,(null!==Et||null!==St)&&(At(),Tt())}}function Rt(e,t){var n=e.stateNode;if(null===n)return null;var r=ks(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(se(231,t,typeof n));return n}var Ot=!1;if(ue)try{var Dt={};Object.defineProperty(Dt,"passive",{get:function(){Ot=!0}}),window.addEventListener("test",Dt,Dt),window.removeEventListener("test",Dt,Dt)}catch(ut){Ot=!1}function Lt(e,t,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Mt=!1,jt=null,Ft=!1,Ut=null,zt={onError:function(e){Mt=!0,jt=e}};function Vt(e,t,n,r,i,s,o,a,l){Mt=!1,jt=null,Lt.apply(zt,arguments)}function Bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function $t(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function qt(e){if(Bt(e)!==e)throw Error(se(188))}function Ht(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Bt(e)))throw Error(se(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(r=i.return)){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qt(i),e;if(s===r)return qt(i),t;s=s.sibling}throw Error(se(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==r)throw Error(se(190))}if(3!==n.tag)throw Error(se(188));return n.stateNode.current===n?e:t}(e))?Kt(e):null}function Kt(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Kt(e);if(null!==t)return t;e=e.sibling}return null}var Wt=ie.unstable_scheduleCallback,Gt=ie.unstable_cancelCallback,Qt=ie.unstable_shouldYield,Yt=ie.unstable_requestPaint,Xt=ie.unstable_now,Jt=ie.unstable_getCurrentPriorityLevel,Zt=ie.unstable_ImmediatePriority,en=ie.unstable_UserBlockingPriority,tn=ie.unstable_NormalPriority,nn=ie.unstable_LowPriority,rn=ie.unstable_IdlePriority,sn=null,on=null;var an=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(ln(e)/cn|0)|0},ln=Math.log,cn=Math.LN2;var un=64,hn=4194304;function dn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fn(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=268435455&n;if(0!==o){var a=o&~i;0!==a?r=dn(a):0!==(s&=o)&&(r=dn(s))}else 0!==(o=n&~i)?r=dn(o):0!==s&&(r=dn(s));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&i)&&((i=r&-r)>=(s=t&-t)||16===i&&0!=(4194240&s)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-an(t)),r|=e[n],t&=~i;return r}function pn(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mn(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gn(){var e=un;return 0==(4194240&(un<<=1))&&(un=64),e}function yn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vn(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-an(t)]=n}function wn(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-an(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var bn=0;function kn(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var _n,En,Sn,xn,Cn,Tn=!1,In=[],An=null,Pn=null,Nn=null,Rn=new Map,On=new Map,Dn=[],Ln="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mn(e,t){switch(e){case"focusin":case"focusout":An=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Rn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function jn(e,t,n,r,i,s){return null===e||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},null!==t&&(null!==(t=ws(t))&&En(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Fn(e){var t=vs(e.target);if(null!==t){var n=Bt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=$t(n)))return e.blockedOn=t,void Cn(e.priority,(function(){Sn(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Un(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ws(n))&&En(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);bt=r,n.target.dispatchEvent(r),bt=null,t.shift()}return!0}function zn(e,t,n){Un(e)&&n.delete(t)}function Vn(){Tn=!1,null!==An&&Un(An)&&(An=null),null!==Pn&&Un(Pn)&&(Pn=null),null!==Nn&&Un(Nn)&&(Nn=null),Rn.forEach(zn),On.forEach(zn)}function Bn(e,t){e.blockedOn===t&&(e.blockedOn=null,Tn||(Tn=!0,ie.unstable_scheduleCallback(ie.unstable_NormalPriority,Vn)))}function $n(e){function t(t){return Bn(t,e)}if(0<In.length){Bn(In[0],e);for(var n=1;n<In.length;n++){var r=In[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==An&&Bn(An,e),null!==Pn&&Bn(Pn,e),null!==Nn&&Bn(Nn,e),Rn.forEach(t),On.forEach(t),n=0;n<Dn.length;n++)(r=Dn[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Dn.length&&null===(n=Dn[0]).blockedOn;)Fn(n),null===n.blockedOn&&Dn.shift()}var qn=be.ReactCurrentBatchConfig,Hn=!0;function Kn(e,t,n,r){var i=bn,s=qn.transition;qn.transition=null;try{bn=1,Gn(e,t,n,r)}finally{bn=i,qn.transition=s}}function Wn(e,t,n,r){var i=bn,s=qn.transition;qn.transition=null;try{bn=4,Gn(e,t,n,r)}finally{bn=i,qn.transition=s}}function Gn(e,t,n,r){if(Hn){var i=Yn(e,t,n,r);if(null===i)qi(e,t,r,Qn,n),Mn(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return An=jn(An,e,t,n,r,i),!0;case"dragenter":return Pn=jn(Pn,e,t,n,r,i),!0;case"mouseover":return Nn=jn(Nn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Rn.set(s,jn(Rn.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,On.set(s,jn(On.get(s)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Mn(e,r),4&t&&-1<Ln.indexOf(e)){for(;null!==i;){var s=ws(i);if(null!==s&&_n(s),null===(s=Yn(e,t,n,r))&&qi(e,t,r,Qn,n),s===i)break;i=s}null!==i&&r.stopPropagation()}else qi(e,t,r,null,n)}}var Qn=null;function Yn(e,t,n,r){if(Qn=null,null!==(e=vs(e=kt(r))))if(null===(t=Bt(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=$t(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qn=e,null}function Xn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jt()){case Zt:return 1;case en:return 4;case tn:case nn:return 16;case rn:return 536870912;default:return 16}default:return 16}}var Jn=null,Zn=null,er=null;function tr(){if(er)return er;var e,t,n=Zn,r=n.length,i="value"in Jn?Jn.value:Jn.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[s-t];t++);return er=i.slice(e,1<t?1-t:void 0)}function nr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function rr(){return!0}function ir(){return!1}function sr(e){function t(t,n,r,i,s){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?rr:ir,this.isPropagationStopped=ir,this}return je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),t}var or,ar,lr,cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ur=sr(cr),hr=je({},cr,{view:0,detail:0}),dr=sr(hr),fr=je({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&"mousemove"===e.type?(or=e.screenX-lr.screenX,ar=e.screenY-lr.screenY):ar=or=0,lr=e),or)},movementY:function(e){return"movementY"in e?e.movementY:ar}}),pr=sr(fr),mr=sr(je({},fr,{dataTransfer:0})),gr=sr(je({},hr,{relatedTarget:0})),yr=sr(je({},cr,{animationName:0,elapsedTime:0,pseudoElement:0})),vr=je({},cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wr=sr(vr),br=sr(je({},cr,{data:0})),kr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_r={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Er={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Er[e])&&!!t[e]}function xr(){return Sr}var Cr=je({},hr,{key:function(e){if(e.key){var t=kr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=nr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?_r[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xr,charCode:function(e){return"keypress"===e.type?nr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?nr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Tr=sr(Cr),Ir=sr(je({},fr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Ar=sr(je({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xr})),Pr=sr(je({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0})),Nr=je({},fr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rr=sr(Nr),Or=[9,13,27,32],Dr=ue&&"CompositionEvent"in window,Lr=null;ue&&"documentMode"in document&&(Lr=document.documentMode);var Mr=ue&&"TextEvent"in window&&!Lr,jr=ue&&(!Dr||Lr&&8<Lr&&11>=Lr),Fr=String.fromCharCode(32),Ur=!1;function zr(e,t){switch(e){case"keyup":return-1!==Or.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vr(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Br=!1;var $r={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!$r[e.type]:"textarea"===t}function Hr(e,t,n,r){Ct(r),0<(t=Ki(t,"onChange")).length&&(n=new ur("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kr=null,Wr=null;function Gr(e){Fi(e,0)}function Qr(e){if(We(bs(e)))return e}function Yr(e,t){if("change"===e)return t}var Xr=!1;if(ue){var Jr;if(ue){var Zr="oninput"in document;if(!Zr){var ei=document.createElement("div");ei.setAttribute("oninput","return;"),Zr="function"==typeof ei.oninput}Jr=Zr}else Jr=!1;Xr=Jr&&(!document.documentMode||9<document.documentMode)}function ti(){Kr&&(Kr.detachEvent("onpropertychange",ni),Wr=Kr=null)}function ni(e){if("value"===e.propertyName&&Qr(Wr)){var t=[];Hr(t,Wr,e,kt(e)),Nt(Gr,t)}}function ri(e,t,n){"focusin"===e?(ti(),Wr=n,(Kr=t).attachEvent("onpropertychange",ni)):"focusout"===e&&ti()}function ii(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qr(Wr)}function si(e,t){if("click"===e)return Qr(t)}function oi(e,t){if("input"===e||"change"===e)return Qr(t)}var ai="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function li(e,t){if(ai(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!he.call(t,i)||!ai(e[i],t[i]))return!1}return!0}function ci(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ui(e,t){var n,r=ci(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ci(r)}}function hi(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?hi(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function di(){for(var e=window,t=Ge();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Ge((e=t.contentWindow).document)}return t}function fi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function pi(e){var t=di(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hi(n.ownerDocument.documentElement,n)){if(null!==r&&fi(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=void 0===r.end?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=ui(n,s);var o=ui(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mi=ue&&"documentMode"in document&&11>=document.documentMode,gi=null,yi=null,vi=null,wi=!1;function bi(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;wi||null==gi||gi!==Ge(r)||("selectionStart"in(r=gi)&&fi(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vi&&li(vi,r)||(vi=r,0<(r=Ki(yi,"onSelect")).length&&(t=new ur("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gi)))}function ki(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _i={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionend:ki("Transition","TransitionEnd")},Ei={},Si={};function xi(e){if(Ei[e])return Ei[e];if(!_i[e])return e;var t,n=_i[e];for(t in n)if(n.hasOwnProperty(t)&&t in Si)return Ei[e]=n[t];return e}ue&&(Si=document.createElement("div").style,"AnimationEvent"in window||(delete _i.animationend.animation,delete _i.animationiteration.animation,delete _i.animationstart.animation),"TransitionEvent"in window||delete _i.transitionend.transition);var Ci=xi("animationend"),Ti=xi("animationiteration"),Ii=xi("animationstart"),Ai=xi("transitionend"),Pi=new Map,Ni="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ri(e,t){Pi.set(e,t),le(t,[e])}for(var Oi=0;Oi<Ni.length;Oi++){var Di=Ni[Oi];Ri(Di.toLowerCase(),"on"+(Di[0].toUpperCase()+Di.slice(1)))}Ri(Ci,"onAnimationEnd"),Ri(Ti,"onAnimationIteration"),Ri(Ii,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(Ai,"onTransitionEnd"),ce("onMouseEnter",["mouseout","mouseover"]),ce("onMouseLeave",["mouseout","mouseover"]),ce("onPointerEnter",["pointerout","pointerover"]),ce("onPointerLeave",["pointerout","pointerover"]),le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),le("onBeforeInput",["compositionend","keypress","textInput","paste"]),le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mi=new Set("cancel close invalid load scroll toggle".split(" ").concat(Li));function ji(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,s,o,a,l){if(Vt.apply(this,arguments),Mt){if(!Mt)throw Error(se(198));var c=jt;Mt=!1,jt=null,Ft||(Ft=!0,Ut=c)}}(r,t,void 0,e),e.currentTarget=null}function Fi(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ji(i,a,c),s=l}else for(o=0;o<r.length;o++){if(l=(a=r[o]).instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ji(i,a,c),s=l}}}if(Ft)throw e=Ut,Ft=!1,Ut=null,e}function Ui(e,t){var n=t[ms];void 0===n&&(n=t[ms]=new Set);var r=e+"__bubble";n.has(r)||($i(t,e,2,!1),n.add(r))}function zi(e,t,n){var r=0;t&&(r|=4),$i(n,e,r,t)}var Vi="_reactListening"+Math.random().toString(36).slice(2);function Bi(e){if(!e[Vi]){e[Vi]=!0,oe.forEach((function(t){"selectionchange"!==t&&(Mi.has(t)||zi(t,!1,e),zi(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Vi]||(t[Vi]=!0,zi("selectionchange",!1,t))}}function $i(e,t,n,r){switch(Xn(t)){case 1:var i=Kn;break;case 4:i=Wn;break;default:i=Gn}n=i.bind(null,t,n,e),i=void 0,!Ot||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function qi(e,t,n,r,i){var s=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var a=r.stateNode.containerInfo;if(a===i||8===a.nodeType&&a.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==a;){if(null===(o=vs(a)))return;if(5===(l=o.tag)||6===l){r=s=o;continue e}a=a.parentNode}}r=r.return}Nt((function(){var r=s,i=kt(n),o=[];e:{var a=Pi.get(e);if(void 0!==a){var l=ur,c=e;switch(e){case"keypress":if(0===nr(n))break e;case"keydown":case"keyup":l=Tr;break;case"focusin":c="focus",l=gr;break;case"focusout":c="blur",l=gr;break;case"beforeblur":case"afterblur":l=gr;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=pr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Ar;break;case Ci:case Ti:case Ii:l=yr;break;case Ai:l=Pr;break;case"scroll":l=dr;break;case"wheel":l=Rr;break;case"copy":case"cut":case"paste":l=wr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Ir}var u=0!=(4&t),h=!u&&"scroll"===e,d=u?null!==a?a+"Capture":null:a;u=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&(null!=(m=Rt(p,d))&&u.push(Hi(p,m,f)))),h)break;p=p.return}0<u.length&&(a=new l(a,c,null,n,i),o.push({event:a,listeners:u}))}}if(0==(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(a="mouseover"===e||"pointerover"===e)||n===bt||!(c=n.relatedTarget||n.fromElement)||!vs(c)&&!c[ps])&&(l||a)&&(a=i.window===i?i:(a=i.ownerDocument)?a.defaultView||a.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?vs(c):null)&&(c!==(h=Bt(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=pr,m="onMouseLeave",d="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(u=Ir,m="onPointerLeave",d="onPointerEnter",p="pointer"),h=null==l?a:bs(l),f=null==c?a:bs(c),(a=new u(m,p+"leave",l,n,i)).target=h,a.relatedTarget=f,m=null,vs(i)===r&&((u=new u(d,p+"enter",c,n,i)).target=f,u.relatedTarget=h,m=u),h=m,l&&c)e:{for(d=c,p=0,f=u=l;f;f=Wi(f))p++;for(f=0,m=d;m;m=Wi(m))f++;for(;0<p-f;)u=Wi(u),p--;for(;0<f-p;)d=Wi(d),f--;for(;p--;){if(u===d||null!==d&&u===d.alternate)break e;u=Wi(u),d=Wi(d)}u=null}else u=null;null!==l&&Gi(o,a,l,u,!1),null!==c&&null!==h&&Gi(o,h,c,u,!0)}if("select"===(l=(a=r?bs(r):window).nodeName&&a.nodeName.toLowerCase())||"input"===l&&"file"===a.type)var g=Yr;else if(qr(a))if(Xr)g=oi;else{g=ii;var y=ri}else(l=a.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(g=si);switch(g&&(g=g(e,r))?Hr(o,g,n,i):(y&&y(e,a,r),"focusout"===e&&(y=a._wrapperState)&&y.controlled&&"number"===a.type&&et(a,"number",a.value)),y=r?bs(r):window,e){case"focusin":(qr(y)||"true"===y.contentEditable)&&(gi=y,yi=r,vi=null);break;case"focusout":vi=yi=gi=null;break;case"mousedown":wi=!0;break;case"contextmenu":case"mouseup":case"dragend":wi=!1,bi(o,n,i);break;case"selectionchange":if(mi)break;case"keydown":case"keyup":bi(o,n,i)}var v;if(Dr)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Br?zr(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart");w&&(jr&&"ko"!==n.locale&&(Br||"onCompositionStart"!==w?"onCompositionEnd"===w&&Br&&(v=tr()):(Zn="value"in(Jn=i)?Jn.value:Jn.textContent,Br=!0)),0<(y=Ki(r,w)).length&&(w=new br(w,e,null,n,i),o.push({event:w,listeners:y}),v?w.data=v:null!==(v=Vr(n))&&(w.data=v))),(v=Mr?function(e,t){switch(e){case"compositionend":return Vr(t);case"keypress":return 32!==t.which?null:(Ur=!0,Fr);case"textInput":return(e=t.data)===Fr&&Ur?null:e;default:return null}}(e,n):function(e,t){if(Br)return"compositionend"===e||!Dr&&zr(e,t)?(e=tr(),er=Zn=Jn=null,Br=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jr&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Ki(r,"onBeforeInput")).length&&(i=new br("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=v))}Fi(o,t)}))}function Hi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ki(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,s=i.stateNode;5===i.tag&&null!==s&&(i=s,null!=(s=Rt(e,n))&&r.unshift(Hi(e,s,i)),null!=(s=Rt(e,t))&&r.push(Hi(e,s,i))),e=e.return}return r}function Wi(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Gi(e,t,n,r,i){for(var s=t._reactName,o=[];null!==n&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(null!==l&&l===r)break;5===a.tag&&null!==c&&(a=c,i?null!=(l=Rt(n,s))&&o.unshift(Hi(n,l,a)):i||null!=(l=Rt(n,s))&&o.push(Hi(n,l,a))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Qi=/\r\n?/g,Yi=/\u0000|\uFFFD/g;function Xi(e){return("string"==typeof e?e:""+e).replace(Qi,"\n").replace(Yi,"")}function Ji(e,t,n){if(t=Xi(t),Xi(e)!==t&&n)throw Error(se(425))}function Zi(){}var es=null,ts=null;function ns(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var rs="function"==typeof setTimeout?setTimeout:void 0,is="function"==typeof clearTimeout?clearTimeout:void 0,ss="function"==typeof Promise?Promise:void 0,os="function"==typeof queueMicrotask?queueMicrotask:void 0!==ss?function(e){return ss.resolve(null).then(e).catch(as)}:rs;function as(e){setTimeout((function(){throw e}))}function ls(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void $n(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);$n(t)}function cs(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function us(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var hs=Math.random().toString(36).slice(2),ds="__reactFiber$"+hs,fs="__reactProps$"+hs,ps="__reactContainer$"+hs,ms="__reactEvents$"+hs,gs="__reactListeners$"+hs,ys="__reactHandles$"+hs;function vs(e){var t=e[ds];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ps]||n[ds]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=us(e);null!==e;){if(n=e[ds])return n;e=us(e)}return t}n=(e=n).parentNode}return null}function ws(e){return!(e=e[ds]||e[ps])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function bs(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(se(33))}function ks(e){return e[fs]||null}var _s=[],Es=-1;function Ss(e){return{current:e}}function xs(e){0>Es||(e.current=_s[Es],_s[Es]=null,Es--)}function Cs(e,t){Es++,_s[Es]=e.current,e.current=t}var Ts={},Is=Ss(Ts),As=Ss(!1),Ps=Ts;function Ns(e,t){var n=e.type.contextTypes;if(!n)return Ts;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,s={};for(i in n)s[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Rs(e){return null!=(e=e.childContextTypes)}function Os(){xs(As),xs(Is)}function Ds(e,t,n){if(Is.current!==Ts)throw Error(se(168));Cs(Is,t),Cs(As,n)}function Ls(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(se(108,$e(e)||"Unknown",i));return je({},n,r)}function Ms(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ts,Ps=Is.current,Cs(Is,e),Cs(As,As.current),!0}function js(e,t,n){var r=e.stateNode;if(!r)throw Error(se(169));n?(e=Ls(e,t,Ps),r.__reactInternalMemoizedMergedChildContext=e,xs(As),xs(Is),Cs(Is,e)):xs(As),Cs(As,n)}var Fs=null,Us=!1,zs=!1;function Vs(e){null===Fs?Fs=[e]:Fs.push(e)}function Bs(){if(!zs&&null!==Fs){zs=!0;var e=0,t=bn;try{var n=Fs;for(bn=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Fs=null,Us=!1}catch(i){throw null!==Fs&&(Fs=Fs.slice(e+1)),Wt(Zt,Bs),i}finally{bn=t,zs=!1}}return null}var $s=[],qs=0,Hs=null,Ks=0,Ws=[],Gs=0,Qs=null,Ys=1,Xs="";function Js(e,t){$s[qs++]=Ks,$s[qs++]=Hs,Hs=e,Ks=t}function Zs(e,t,n){Ws[Gs++]=Ys,Ws[Gs++]=Xs,Ws[Gs++]=Qs,Qs=e;var r=Ys;e=Xs;var i=32-an(r)-1;r&=~(1<<i),n+=1;var s=32-an(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ys=1<<32-an(t)+i|n<<i|r,Xs=s+e}else Ys=1<<s|n<<i|r,Xs=e}function eo(e){null!==e.return&&(Js(e,1),Zs(e,1,0))}function to(e){for(;e===Hs;)Hs=$s[--qs],$s[qs]=null,Ks=$s[--qs],$s[qs]=null;for(;e===Qs;)Qs=Ws[--Gs],Ws[Gs]=null,Xs=Ws[--Gs],Ws[Gs]=null,Ys=Ws[--Gs],Ws[Gs]=null}var no=null,ro=null,io=!1,so=null;function oo(e,t){var n=Ru(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function ao(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=cs(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Qs?{id:Ys,overflow:Xs}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Ru(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function lo(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function co(e){if(io){var t=ro;if(t){var n=t;if(!ao(e,t)){if(lo(e))throw Error(se(418));t=cs(n.nextSibling);var r=no;t&&ao(e,t)?oo(r,n):(e.flags=-4097&e.flags|2,io=!1,no=e)}}else{if(lo(e))throw Error(se(418));e.flags=-4097&e.flags|2,io=!1,no=e}}}function uo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function ho(e){if(e!==no)return!1;if(!io)return uo(e),io=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ns(e.type,e.memoizedProps)),t&&(t=ro)){if(lo(e))throw fo(),Error(se(418));for(;t;)oo(e,t),t=cs(t.nextSibling)}if(uo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(se(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=cs(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?cs(e.stateNode.nextSibling):null;return!0}function fo(){for(var e=ro;e;)e=cs(e.nextSibling)}function po(){ro=no=null,io=!1}function mo(e){null===so?so=[e]:so.push(e)}var go=be.ReactCurrentBatchConfig;function yo(e,t){if(e&&e.defaultProps){for(var n in t=je({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var vo=Ss(null),wo=null,bo=null,ko=null;function _o(){ko=bo=wo=null}function Eo(e){var t=vo.current;xs(vo),e._currentValue=t}function So(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xo(e,t){wo=e,ko=bo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(bl=!0),e.firstContext=null)}function Co(e){var t=e._currentValue;if(ko!==e)if(e={context:e,memoizedValue:t,next:null},null===bo){if(null===wo)throw Error(se(308));bo=e,wo.dependencies={lanes:0,firstContext:e}}else bo=bo.next=e;return t}var To=null;function Io(e){null===To?To=[e]:To.push(e)}function Ao(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Io(t)):(n.next=i.next,i.next=n),t.interleaved=n,Po(e,r)}function Po(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var No=!1;function Ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Do(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Lo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&Ac)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Po(e,n)}return null===(i=r.interleaved)?(t.next=t,Io(r)):(t.next=i.next,i.next=t),r.interleaved=t,Po(e,n)}function Mo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,wn(e,n)}}function jo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,s=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===s?i=s=o:s=s.next=o,n=n.next}while(null!==n);null===s?i=s=t:s=s.next=t}else i=s=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fo(e,t,n,r){var i=e.updateQueue;No=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(null!==a){i.shared.pending=null;var l=a,c=l.next;l.next=null,null===o?s=c:o.next=c,o=l;var u=e.alternate;null!==u&&((a=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===a?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(null!==s){var h=i.baseState;for(o=0,u=c=l=null,a=s;;){var d=a.lane,f=a.eventTime;if((r&d)===d){null!==u&&(u=u.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,m=a;switch(d=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(d="function"==typeof(p=m.payload)?p.call(f,h,d):p))break e;h=je({},h,d);break e;case 2:No=!0}}null!==a.callback&&0!==a.lane&&(e.flags|=64,null===(d=i.effects)?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},null===u?(c=u=f,l=h):u=u.next=f,o|=d;if(null===(a=a.next)){if(null===(a=i.shared.pending))break;a=(d=a).next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}if(null===u&&(l=h),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===s&&(i.shared.lanes=0);jc|=o,e.lanes=o,e.memoizedState=h}}function Uo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(se(191,i));i.call(r)}}}var zo=(new re.Component).refs;function Vo(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:je({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var Bo={isMounted:function(e){return!!(e=e._reactInternals)&&Bt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tu(),i=nu(e),s=Do(r,i);s.payload=t,null!=n&&(s.callback=n),null!==(t=Lo(e,s,i))&&(ru(t,e,i,r),Mo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tu(),i=nu(e),s=Do(r,i);s.tag=1,s.payload=t,null!=n&&(s.callback=n),null!==(t=Lo(e,s,i))&&(ru(t,e,i,r),Mo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tu(),r=nu(e),i=Do(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=Lo(e,i,r))&&(ru(t,e,r,n),Mo(t,e,r))}};function $o(e,t,n,r,i,s,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,o):!t.prototype||!t.prototype.isPureReactComponent||(!li(n,r)||!li(i,s))}function qo(e,t,n){var r=!1,i=Ts,s=t.contextType;return"object"==typeof s&&null!==s?s=Co(s):(i=Rs(t)?Ps:Is.current,s=(r=null!=(r=t.contextTypes))?Ns(e,i):Ts),t=new t(n,s),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=Bo,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Ho(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bo.enqueueReplaceState(t,t.state,null)}function Ko(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=zo,Ro(e);var s=t.contextType;"object"==typeof s&&null!==s?i.context=Co(s):(s=Rs(t)?Ps:Is.current,i.context=Ns(e,s)),i.state=e.memoizedState,"function"==typeof(s=t.getDerivedStateFromProps)&&(Vo(e,t,s,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&Bo.enqueueReplaceState(i,i.state,null),Fo(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function Wo(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(se(309));var r=n.stateNode}if(!r)throw Error(se(147,e));var i=r,s=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===s?t.ref:((t=function(e){var t=i.refs;t===zo&&(t=i.refs={}),null===e?delete t[s]:t[s]=e})._stringRef=s,t)}if("string"!=typeof e)throw Error(se(284));if(!n._owner)throw Error(se(290,e))}return e}function Go(e,t){throw e=Object.prototype.toString.call(t),Error(se(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qo(e){return(0,e._init)(e._payload)}function Yo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Du(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function a(e,t,n,r){return null===t||6!==t.tag?((t=Fu(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){var s=n.type;return s===Ee?u(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===s||"object"==typeof s&&null!==s&&s.$$typeof===Re&&Qo(s)===t.type)?((r=i(t,n.props)).ref=Wo(e,t,n),r.return=e,r):((r=Lu(n.type,n.key,n.props,null,e.mode,r)).ref=Wo(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Uu(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function u(e,t,n,r,s){return null===t||7!==t.tag?((t=Mu(n,e.mode,r,s)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Fu(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case ke:return(n=Lu(t.type,t.key,t.props,null,e.mode,n)).ref=Wo(e,null,t),n.return=e,n;case _e:return(t=Uu(t,e.mode,n)).return=e,t;case Re:return h(e,(0,t._init)(t._payload),n)}if(tt(t)||Le(t))return(t=Mu(t,e.mode,n,null)).return=e,t;Go(e,t)}return null}function d(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:a(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case ke:return n.key===i?l(e,t,n,r):null;case _e:return n.key===i?c(e,t,n,r):null;case Re:return d(e,t,(i=n._init)(n._payload),r)}if(tt(n)||Le(n))return null!==i?null:u(e,t,n,r,null);Go(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return a(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case ke:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case _e:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case Re:return f(e,t,n,(0,r._init)(r._payload),i)}if(tt(r)||Le(r))return u(t,e=e.get(n)||null,r,i,null);Go(t,r)}return null}return function a(l,c,u,p){if("object"==typeof u&&null!==u&&u.type===Ee&&null===u.key&&(u=u.props.children),"object"==typeof u&&null!==u){switch(u.$$typeof){case ke:e:{for(var m=u.key,g=c;null!==g;){if(g.key===m){if((m=u.type)===Ee){if(7===g.tag){n(l,g.sibling),(c=i(g,u.props.children)).return=l,l=c;break e}}else if(g.elementType===m||"object"==typeof m&&null!==m&&m.$$typeof===Re&&Qo(m)===g.type){n(l,g.sibling),(c=i(g,u.props)).ref=Wo(l,g,u),c.return=l,l=c;break e}n(l,g);break}t(l,g),g=g.sibling}u.type===Ee?((c=Mu(u.props.children,l.mode,p,u.key)).return=l,l=c):((p=Lu(u.type,u.key,u.props,null,l.mode,p)).ref=Wo(l,c,u),p.return=l,l=p)}return o(l);case _e:e:{for(g=u.key;null!==c;){if(c.key===g){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(l,c.sibling),(c=i(c,u.children||[])).return=l,l=c;break e}n(l,c);break}t(l,c),c=c.sibling}(c=Uu(u,l.mode,p)).return=l,l=c}return o(l);case Re:return a(l,c,(g=u._init)(u._payload),p)}if(tt(u))return function(i,o,a,l){for(var c=null,u=null,p=o,m=o=0,g=null;null!==p&&m<a.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var y=d(i,p,a[m],l);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(i,p),o=s(y,o,m),null===u?c=y:u.sibling=y,u=y,p=g}if(m===a.length)return n(i,p),io&&Js(i,m),c;if(null===p){for(;m<a.length;m++)null!==(p=h(i,a[m],l))&&(o=s(p,o,m),null===u?c=p:u.sibling=p,u=p);return io&&Js(i,m),c}for(p=r(i,p);m<a.length;m++)null!==(g=f(p,i,m,a[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),o=s(g,o,m),null===u?c=g:u.sibling=g,u=g);return e&&p.forEach((function(e){return t(i,e)})),io&&Js(i,m),c}(l,c,u,p);if(Le(u))return function(i,o,a,l){var c=Le(a);if("function"!=typeof c)throw Error(se(150));if(null==(a=c.call(a)))throw Error(se(151));for(var u=c=null,p=o,m=o=0,g=null,y=a.next();null!==p&&!y.done;m++,y=a.next()){p.index>m?(g=p,p=null):g=p.sibling;var v=d(i,p,y.value,l);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(i,p),o=s(v,o,m),null===u?c=v:u.sibling=v,u=v,p=g}if(y.done)return n(i,p),io&&Js(i,m),c;if(null===p){for(;!y.done;m++,y=a.next())null!==(y=h(i,y.value,l))&&(o=s(y,o,m),null===u?c=y:u.sibling=y,u=y);return io&&Js(i,m),c}for(p=r(i,p);!y.done;m++,y=a.next())null!==(y=f(p,i,m,y.value,l))&&(e&&null!==y.alternate&&p.delete(null===y.key?m:y.key),o=s(y,o,m),null===u?c=y:u.sibling=y,u=y);return e&&p.forEach((function(e){return t(i,e)})),io&&Js(i,m),c}(l,c,u,p);Go(l,u)}return"string"==typeof u&&""!==u||"number"==typeof u?(u=""+u,null!==c&&6===c.tag?(n(l,c.sibling),(c=i(c,u)).return=l,l=c):(n(l,c),(c=Fu(u,l.mode,p)).return=l,l=c),o(l)):n(l,c)}}var Xo=Yo(!0),Jo=Yo(!1),Zo={},ea=Ss(Zo),ta=Ss(Zo),na=Ss(Zo);function ra(e){if(e===Zo)throw Error(se(174));return e}function ia(e,t){switch(Cs(na,t),Cs(ta,e),Cs(ea,Zo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lt(null,"");break;default:t=lt(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}xs(ea),Cs(ea,t)}function sa(){xs(ea),xs(ta),xs(na)}function oa(e){ra(na.current);var t=ra(ea.current),n=lt(t,e.type);t!==n&&(Cs(ta,e),Cs(ea,n))}function aa(e){ta.current===e&&(xs(ea),xs(ta))}var la=Ss(0);function ca(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ua=[];function ha(){for(var e=0;e<ua.length;e++)ua[e]._workInProgressVersionPrimary=null;ua.length=0}var da=be.ReactCurrentDispatcher,fa=be.ReactCurrentBatchConfig,pa=0,ma=null,ga=null,ya=null,va=!1,wa=!1,ba=0,ka=0;function _a(){throw Error(se(321))}function Ea(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ai(e[n],t[n]))return!1;return!0}function Sa(e,t,n,r,i,s){if(pa=s,ma=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,da.current=null===e||null===e.memoizedState?al:ll,e=n(r,i),wa){s=0;do{if(wa=!1,ba=0,25<=s)throw Error(se(301));s+=1,ya=ga=null,t.updateQueue=null,da.current=cl,e=n(r,i)}while(wa)}if(da.current=ol,t=null!==ga&&null!==ga.next,pa=0,ya=ga=ma=null,va=!1,t)throw Error(se(300));return e}function xa(){var e=0!==ba;return ba=0,e}function Ca(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ya?ma.memoizedState=ya=e:ya=ya.next=e,ya}function Ta(){if(null===ga){var e=ma.alternate;e=null!==e?e.memoizedState:null}else e=ga.next;var t=null===ya?ma.memoizedState:ya.next;if(null!==t)ya=t,ga=e;else{if(null===e)throw Error(se(310));e={memoizedState:(ga=e).memoizedState,baseState:ga.baseState,baseQueue:ga.baseQueue,queue:ga.queue,next:null},null===ya?ma.memoizedState=ya=e:ya=ya.next=e}return ya}function Ia(e,t){return"function"==typeof t?t(e):t}function Aa(e){var t=Ta(),n=t.queue;if(null===n)throw Error(se(311));n.lastRenderedReducer=e;var r=ga,i=r.baseQueue,s=n.pending;if(null!==s){if(null!==i){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(null!==i){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((pa&u)===u)null!==l&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===l?(a=l=h,o=r):l=l.next=h,ma.lanes|=u,jc|=u}c=c.next}while(null!==c&&c!==s);null===l?o=r:l.next=a,ai(r,t.memoizedState)||(bl=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{s=i.lane,ma.lanes|=s,jc|=s,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Pa(e){var t=Ta(),n=t.queue;if(null===n)throw Error(se(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var o=i=i.next;do{s=e(s,o.action),o=o.next}while(o!==i);ai(s,t.memoizedState)||(bl=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Na(){}function Ra(e,t){var n=ma,r=Ta(),i=t(),s=!ai(r.memoizedState,i);if(s&&(r.memoizedState=i,bl=!0),r=r.queue,qa(La.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||null!==ya&&1&ya.memoizedState.tag){if(n.flags|=2048,Ua(9,Da.bind(null,n,r,i,t),void 0,null),null===Pc)throw Error(se(349));0!=(30&pa)||Oa(n,t,i)}return i}function Oa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ma.updateQueue)?(t={lastEffect:null,stores:null},ma.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Da(e,t,n,r){t.value=n,t.getSnapshot=r,Ma(t)&&ja(e)}function La(e,t,n){return n((function(){Ma(t)&&ja(e)}))}function Ma(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ai(e,n)}catch(r){return!0}}function ja(e){var t=Po(e,1);null!==t&&ru(t,e,1,-1)}function Fa(e){var t=Ca();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:e},t.queue=e,e=e.dispatch=nl.bind(null,ma,e),[t.memoizedState,e]}function Ua(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=ma.updateQueue)?(t={lastEffect:null,stores:null},ma.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function za(){return Ta().memoizedState}function Va(e,t,n,r){var i=Ca();ma.flags|=e,i.memoizedState=Ua(1|t,n,void 0,void 0===r?null:r)}function Ba(e,t,n,r){var i=Ta();r=void 0===r?null:r;var s=void 0;if(null!==ga){var o=ga.memoizedState;if(s=o.destroy,null!==r&&Ea(r,o.deps))return void(i.memoizedState=Ua(t,n,s,r))}ma.flags|=e,i.memoizedState=Ua(1|t,n,s,r)}function $a(e,t){return Va(8390656,8,e,t)}function qa(e,t){return Ba(2048,8,e,t)}function Ha(e,t){return Ba(4,2,e,t)}function Ka(e,t){return Ba(4,4,e,t)}function Wa(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ga(e,t,n){return n=null!=n?n.concat([e]):null,Ba(4,4,Wa.bind(null,t,e),n)}function Qa(){}function Ya(e,t){var n=Ta();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ea(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xa(e,t){var n=Ta();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ea(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ja(e,t,n){return 0==(21&pa)?(e.baseState&&(e.baseState=!1,bl=!0),e.memoizedState=n):(ai(n,t)||(n=gn(),ma.lanes|=n,jc|=n,e.baseState=!0),t)}function Za(e,t){var n=bn;bn=0!==n&&4>n?n:4,e(!0);var r=fa.transition;fa.transition={};try{e(!1),t()}finally{bn=n,fa.transition=r}}function el(){return Ta().memoizedState}function tl(e,t,n){var r=nu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rl(e))il(t,n);else if(null!==(n=Ao(e,t,n,r))){ru(n,e,r,tu()),sl(n,t,r)}}function nl(e,t,n){var r=nu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rl(e))il(t,i);else{var s=e.alternate;if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ai(a,o)){var l=t.interleaved;return null===l?(i.next=i,Io(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(c){}null!==(n=Ao(e,t,i,r))&&(ru(n,e,r,i=tu()),sl(n,t,r))}}function rl(e){var t=e.alternate;return e===ma||null!==t&&t===ma}function il(e,t){wa=va=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sl(e,t,n){if(0!=(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,wn(e,n)}}var ol={readContext:Co,useCallback:_a,useContext:_a,useEffect:_a,useImperativeHandle:_a,useInsertionEffect:_a,useLayoutEffect:_a,useMemo:_a,useReducer:_a,useRef:_a,useState:_a,useDebugValue:_a,useDeferredValue:_a,useTransition:_a,useMutableSource:_a,useSyncExternalStore:_a,useId:_a,unstable_isNewReconciler:!1},al={readContext:Co,useCallback:function(e,t){return Ca().memoizedState=[e,void 0===t?null:t],e},useContext:Co,useEffect:$a,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Va(4194308,4,Wa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Va(4194308,4,e,t)},useInsertionEffect:function(e,t){return Va(4,2,e,t)},useMemo:function(e,t){var n=Ca();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ca();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tl.bind(null,ma,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Ca().memoizedState=e},useState:Fa,useDebugValue:Qa,useDeferredValue:function(e){return Ca().memoizedState=e},useTransition:function(){var e=Fa(!1),t=e[0];return e=Za.bind(null,e[1]),Ca().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ma,i=Ca();if(io){if(void 0===n)throw Error(se(407));n=n()}else{if(n=t(),null===Pc)throw Error(se(349));0!=(30&pa)||Oa(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,$a(La.bind(null,r,s,e),[e]),r.flags|=2048,Ua(9,Da.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Ca(),t=Pc.identifierPrefix;if(io){var n=Xs;t=":"+t+"R"+(n=(Ys&~(1<<32-an(Ys)-1)).toString(32)+n),0<(n=ba++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ka++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ll={readContext:Co,useCallback:Ya,useContext:Co,useEffect:qa,useImperativeHandle:Ga,useInsertionEffect:Ha,useLayoutEffect:Ka,useMemo:Xa,useReducer:Aa,useRef:za,useState:function(){return Aa(Ia)},useDebugValue:Qa,useDeferredValue:function(e){return Ja(Ta(),ga.memoizedState,e)},useTransition:function(){return[Aa(Ia)[0],Ta().memoizedState]},useMutableSource:Na,useSyncExternalStore:Ra,useId:el,unstable_isNewReconciler:!1},cl={readContext:Co,useCallback:Ya,useContext:Co,useEffect:qa,useImperativeHandle:Ga,useInsertionEffect:Ha,useLayoutEffect:Ka,useMemo:Xa,useReducer:Pa,useRef:za,useState:function(){return Pa(Ia)},useDebugValue:Qa,useDeferredValue:function(e){var t=Ta();return null===ga?t.memoizedState=e:Ja(t,ga.memoizedState,e)},useTransition:function(){return[Pa(Ia)[0],Ta().memoizedState]},useMutableSource:Na,useSyncExternalStore:Ra,useId:el,unstable_isNewReconciler:!1};function ul(e,t){try{var n="",r=t;do{n+=Ve(r),r=r.return}while(r);var i=n}catch(s){i="\nError generating stack: "+s.message+"\n"+s.stack}return{value:e,source:t,stack:i,digest:null}}function hl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"==typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Do(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hc||(Hc=!0,Kc=r),dl(0,t)},n}function ml(e,t,n){(n=Do(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){dl(0,t)}}var s=e.stateNode;return null!==s&&"function"==typeof s.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!=typeof r&&(null===Wc?Wc=new Set([this]):Wc.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cu.bind(null,e,t,n),t.then(e,e))}function yl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,n,r,i){return 0==(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Do(-1,1)).tag=2,Lo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var wl=be.ReactCurrentOwner,bl=!1;function kl(e,t,n,r){t.child=null===e?Jo(t,null,n,r):Xo(t,e.child,n,r)}function _l(e,t,n,r,i){n=n.render;var s=t.ref;return xo(t,i),r=Sa(e,t,n,r,s,i),n=xa(),null===e||bl?(io&&n&&eo(t),t.flags|=1,kl(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hl(e,t,i))}function El(e,t,n,r,i){if(null===e){var s=n.type;return"function"!=typeof s||Ou(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Lu(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,Sl(e,t,s,r,i))}if(s=e.child,0==(e.lanes&i)){var o=s.memoizedProps;if((n=null!==(n=n.compare)?n:li)(o,r)&&e.ref===t.ref)return Hl(e,t,i)}return t.flags|=1,(e=Du(s,r)).ref=t.ref,e.return=t,t.child=e}function Sl(e,t,n,r,i){if(null!==e){var s=e.memoizedProps;if(li(s,r)&&e.ref===t.ref){if(bl=!1,t.pendingProps=r=s,0==(e.lanes&i))return t.lanes=e.lanes,Hl(e,t,i);0!=(131072&e.flags)&&(bl=!0)}}return Tl(e,t,n,r,i)}function xl(e,t,n){var r=t.pendingProps,i=r.children,s=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Cs(Dc,Oc),Oc|=n;else{if(0==(1073741824&n))return e=null!==s?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Cs(Dc,Oc),Oc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==s?s.baseLanes:n,Cs(Dc,Oc),Oc|=r}else null!==s?(r=s.baseLanes|n,t.memoizedState=null):r=n,Cs(Dc,Oc),Oc|=r;return kl(e,t,i,n),t.child}function Cl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tl(e,t,n,r,i){var s=Rs(n)?Ps:Is.current;return s=Ns(t,s),xo(t,i),n=Sa(e,t,n,r,s,i),r=xa(),null===e||bl?(io&&r&&eo(t),t.flags|=1,kl(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hl(e,t,i))}function Il(e,t,n,r,i){if(Rs(n)){var s=!0;Ms(t)}else s=!1;if(xo(t,i),null===t.stateNode)ql(e,t),qo(t,n,r),Ko(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,c=n.contextType;"object"==typeof c&&null!==c?c=Co(c):c=Ns(t,c=Rs(n)?Ps:Is.current);var u=n.getDerivedStateFromProps,h="function"==typeof u||"function"==typeof o.getSnapshotBeforeUpdate;h||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(a!==r||l!==c)&&Ho(t,o,r,c),No=!1;var d=t.memoizedState;o.state=d,Fo(t,r,o,i),l=t.memoizedState,a!==r||d!==l||As.current||No?("function"==typeof u&&(Vo(t,n,u,r),l=t.memoizedState),(a=No||$o(t,n,a,r,d,l,c))?(h||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Oo(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:yo(t.type,a),o.props=c,h=t.pendingProps,d=o.context,"object"==typeof(l=n.contextType)&&null!==l?l=Co(l):l=Ns(t,l=Rs(n)?Ps:Is.current);var f=n.getDerivedStateFromProps;(u="function"==typeof f||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(a!==h||d!==l)&&Ho(t,o,r,l),No=!1,d=t.memoizedState,o.state=d,Fo(t,r,o,i);var p=t.memoizedState;a!==h||d!==p||As.current||No?("function"==typeof f&&(Vo(t,n,f,r),p=t.memoizedState),(c=No||$o(t,n,c,r,d,p,l)||!1)?(u||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,l),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=l,r=c):("function"!=typeof o.componentDidUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Al(e,t,n,r,s,i)}function Al(e,t,n,r,i,s){Cl(e,t);var o=0!=(128&t.flags);if(!r&&!o)return i&&js(t,n,!1),Hl(e,t,s);r=t.stateNode,wl.current=t;var a=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=Xo(t,e.child,null,s),t.child=Xo(t,null,a,s)):kl(e,t,a,s),t.memoizedState=r.state,i&&js(t,n,!0),t.child}function Pl(e){var t=e.stateNode;t.pendingContext?Ds(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ds(0,t.context,!1),ia(e,t.containerInfo)}function Nl(e,t,n,r,i){return po(),mo(i),t.flags|=256,kl(e,t,n,r),t.child}var Rl,Ol,Dl,Ll,Ml={dehydrated:null,treeContext:null,retryLane:0};function jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fl(e,t,n){var r,i=t.pendingProps,s=la.current,o=!1,a=0!=(128&t.flags);if((r=a)||(r=(null===e||null!==e.memoizedState)&&0!=(2&s)),r?(o=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),Cs(la,1&s),null===e)return co(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(a=i.children,e=i.fallback,o?(i=t.mode,o=t.child,a={mode:"hidden",children:a},0==(1&i)&&null!==o?(o.childLanes=0,o.pendingProps=a):o=ju(a,i,0,null),e=Mu(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=jl(n),t.memoizedState=Ml,e):Ul(t,a));if(null!==(s=e.memoizedState)&&null!==(r=s.dehydrated))return function(e,t,n,r,i,s,o){if(n)return 256&t.flags?(t.flags&=-257,zl(e,t,o,r=hl(Error(se(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=ju({mode:"visible",children:r.children},i,0,null),(s=Mu(s,i,o,null)).flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,0!=(1&t.mode)&&Xo(t,e.child,null,o),t.child.memoizedState=jl(o),t.memoizedState=Ml,s);if(0==(1&t.mode))return zl(e,t,o,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var a=r.dgst;return r=a,zl(e,t,o,r=hl(s=Error(se(419)),r,void 0))}if(a=0!=(o&e.childLanes),bl||a){if(null!==(r=Pc)){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!=(i&(r.suspendedLanes|o))?0:i)&&i!==s.retryLane&&(s.retryLane=i,Po(e,i),ru(r,e,i,-1))}return gu(),zl(e,t,o,r=hl(Error(se(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Iu.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ro=cs(i.nextSibling),no=t,io=!0,so=null,null!==e&&(Ws[Gs++]=Ys,Ws[Gs++]=Xs,Ws[Gs++]=Qs,Ys=e.id,Xs=e.overflow,Qs=t),t=Ul(t,r.children),t.flags|=4096,t)}(e,t,a,i,r,s,n);if(o){o=i.fallback,a=t.mode,r=(s=e.child).sibling;var l={mode:"hidden",children:i.children};return 0==(1&a)&&t.child!==s?((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null):(i=Du(s,l)).subtreeFlags=14680064&s.subtreeFlags,null!==r?o=Du(r,o):(o=Mu(o,a,n,null)).flags|=2,o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,a=null===(a=e.child.memoizedState)?jl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Ml,i}return e=(o=e.child).sibling,i=Du(o,{mode:"visible",children:i.children}),0==(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ul(e,t){return(t=ju({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function zl(e,t,n,r){return null!==r&&mo(r),Xo(t,e.child,null,n),(e=Ul(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Vl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),So(e.return,t,n)}function Bl(e,t,n,r,i){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function $l(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(kl(e,t,r.children,n),0!=(2&(r=la.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Vl(e,n,t);else if(19===e.tag)Vl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Cs(la,r),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ca(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ca(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bl(t,!0,n,null,s);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ql(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),jc|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(se(153));if(null!==t.child){for(n=Du(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Du(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Kl(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Wl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gl(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wl(t),null;case 1:case 17:return Rs(t.type)&&Os(),Wl(t),null;case 3:return r=t.stateNode,sa(),xs(As),xs(Is),ha(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(ho(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==so&&(au(so),so=null))),Ol(e,t),Wl(t),null;case 5:aa(t);var i=ra(na.current);if(n=t.type,null!==e&&null!=t.stateNode)Dl(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(se(166));return Wl(t),null}if(e=ra(ea.current),ho(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[ds]=t,r[fs]=s,e=0!=(1&t.mode),n){case"dialog":Ui("cancel",r),Ui("close",r);break;case"iframe":case"object":case"embed":Ui("load",r);break;case"video":case"audio":for(i=0;i<Li.length;i++)Ui(Li[i],r);break;case"source":Ui("error",r);break;case"img":case"image":case"link":Ui("error",r),Ui("load",r);break;case"details":Ui("toggle",r);break;case"input":Ye(r,s),Ui("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ui("invalid",r);break;case"textarea":it(r,s),Ui("invalid",r)}for(var o in vt(n,s),i=null,s)if(s.hasOwnProperty(o)){var a=s[o];"children"===o?"string"==typeof a?r.textContent!==a&&(!0!==s.suppressHydrationWarning&&Ji(r.textContent,a,e),i=["children",a]):"number"==typeof a&&r.textContent!==""+a&&(!0!==s.suppressHydrationWarning&&Ji(r.textContent,a,e),i=["children",""+a]):ae.hasOwnProperty(o)&&null!=a&&"onScroll"===o&&Ui("scroll",r)}switch(n){case"input":Ke(r),Ze(r,s,!0);break;case"textarea":Ke(r),ot(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=Zi)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{o=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=at(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),"select"===n&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ds]=t,e[fs]=r,Rl(e,t,!1,!1),t.stateNode=e;e:{switch(o=wt(n,r),n){case"dialog":Ui("cancel",e),Ui("close",e),i=r;break;case"iframe":case"object":case"embed":Ui("load",e),i=r;break;case"video":case"audio":for(i=0;i<Li.length;i++)Ui(Li[i],e);i=r;break;case"source":Ui("error",e),i=r;break;case"img":case"image":case"link":Ui("error",e),Ui("load",e),i=r;break;case"details":Ui("toggle",e),i=r;break;case"input":Ye(e,r),i=Qe(e,r),Ui("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),Ui("invalid",e);break;case"textarea":it(e,r),i=rt(e,r),Ui("invalid",e)}for(s in vt(n,i),a=i)if(a.hasOwnProperty(s)){var l=a[s];"style"===s?gt(e,l):"dangerouslySetInnerHTML"===s?null!=(l=l?l.__html:void 0)&&ht(e,l):"children"===s?"string"==typeof l?("textarea"!==n||""!==l)&&dt(e,l):"number"==typeof l&&dt(e,""+l):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(ae.hasOwnProperty(s)?null!=l&&"onScroll"===s&&Ui("scroll",e):null!=l&&we(e,s,l,o))}switch(n){case"input":Ke(e),Ze(e,r,!1);break;case"textarea":Ke(e),ot(e);break;case"option":null!=r.value&&e.setAttribute("value",""+qe(r.value));break;case"select":e.multiple=!!r.multiple,null!=(s=r.value)?nt(e,!!r.multiple,s,!1):null!=r.defaultValue&&nt(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=Zi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Wl(t),null;case 6:if(e&&null!=t.stateNode)Ll(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(se(166));if(n=ra(na.current),ra(ea.current),ho(t)){if(r=t.stateNode,n=t.memoizedProps,r[ds]=t,(s=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Ji(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Ji(r.nodeValue,n,0!=(1&e.mode))}s&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[ds]=t,t.stateNode=r}return Wl(t),null;case 13:if(xs(la),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(io&&null!==ro&&0!=(1&t.mode)&&0==(128&t.flags))fo(),po(),t.flags|=98560,s=!1;else if(s=ho(t),null!==r&&null!==r.dehydrated){if(null===e){if(!s)throw Error(se(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(se(317));s[ds]=t}else po(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Wl(t),s=!1}else null!==so&&(au(so),so=null),s=!0;if(!s)return 65536&t.flags?t:null}return 0!=(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&la.current)?0===Lc&&(Lc=3):gu())),null!==t.updateQueue&&(t.flags|=4),Wl(t),null);case 4:return sa(),Ol(e,t),null===e&&Bi(t.stateNode.containerInfo),Wl(t),null;case 10:return Eo(t.type._context),Wl(t),null;case 19:if(xs(la),null===(s=t.memoizedState))return Wl(t),null;if(r=0!=(128&t.flags),null===(o=s.rendering))if(r)Kl(s,!1);else{if(0!==Lc||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=ca(e))){for(t.flags|=128,Kl(s,!1),null!==(r=o.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(s=n).flags&=14680066,null===(o=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Cs(la,1&la.current|2),t.child}e=e.sibling}null!==s.tail&&Xt()>$c&&(t.flags|=128,r=!0,Kl(s,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ca(o))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Kl(s,!0),null===s.tail&&"hidden"===s.tailMode&&!o.alternate&&!io)return Wl(t),null}else 2*Xt()-s.renderingStartTime>$c&&1073741824!==n&&(t.flags|=128,r=!0,Kl(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(null!==(n=s.last)?n.sibling=o:t.child=o,s.last=o)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Xt(),t.sibling=null,n=la.current,Cs(la,r?1&n|2:1&n),t):(Wl(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&Oc)&&(Wl(t),6&t.subtreeFlags&&(t.flags|=8192)):Wl(t),null;case 24:case 25:return null}throw Error(se(156,t.tag))}function Ql(e,t){switch(to(t),t.tag){case 1:return Rs(t.type)&&Os(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return sa(),xs(As),xs(Is),ha(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return aa(t),null;case 13:if(xs(la),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(se(340));po()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return xs(la),null;case 4:return sa(),null;case 10:return Eo(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Rl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ol=function(){},Dl=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ra(ea.current);var s,o=null;switch(n){case"input":i=Qe(e,i),r=Qe(e,r),o=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),o=[];break;case"textarea":i=rt(e,i),r=rt(e,r),o=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=Zi)}for(c in vt(n,r),n=null,i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&null!=i[c])if("style"===c){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ae.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=null!=i?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(null!=l||null!=a))if("style"===c)if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,a=a?a.__html:void 0,null!=l&&a!==l&&(o=o||[]).push(c,l)):"children"===c?"string"!=typeof l&&"number"!=typeof l||(o=o||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ae.hasOwnProperty(c)?(null!=l&&"onScroll"===c&&Ui("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}},Ll=function(e,t,n,r){n!==r&&(t.flags|=4)};var Yl=!1,Xl=!1,Jl="function"==typeof WeakSet?WeakSet:Set,Zl=null;function ec(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(r){xu(e,t,r)}else n.current=null}function tc(e,t,n){try{n()}catch(r){xu(e,t,r)}}var nc=!1;function rc(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,void 0!==s&&tc(t,n,s)}i=i.next}while(i!==r)}}function ic(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function sc(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function oc(e){var t=e.alternate;null!==t&&(e.alternate=null,oc(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[ds],delete t[fs],delete t[ms],delete t[gs],delete t[ys])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ac(e){return 5===e.tag||3===e.tag||4===e.tag}function lc(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ac(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function cc(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Zi));else if(4!==r&&null!==(e=e.child))for(cc(e,t,n),e=e.sibling;null!==e;)cc(e,t,n),e=e.sibling}function uc(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(uc(e,t,n),e=e.sibling;null!==e;)uc(e,t,n),e=e.sibling}var hc=null,dc=!1;function fc(e,t,n){for(n=n.child;null!==n;)pc(e,t,n),n=n.sibling}function pc(e,t,n){if(on&&"function"==typeof on.onCommitFiberUnmount)try{on.onCommitFiberUnmount(sn,n)}catch(a){}switch(n.tag){case 5:Xl||ec(n,t);case 6:var r=hc,i=dc;hc=null,fc(e,t,n),dc=i,null!==(hc=r)&&(dc?(e=hc,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):hc.removeChild(n.stateNode));break;case 18:null!==hc&&(dc?(e=hc,n=n.stateNode,8===e.nodeType?ls(e.parentNode,n):1===e.nodeType&&ls(e,n),$n(e)):ls(hc,n.stateNode));break;case 4:r=hc,i=dc,hc=n.stateNode.containerInfo,dc=!0,fc(e,t,n),hc=r,dc=i;break;case 0:case 11:case 14:case 15:if(!Xl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,void 0!==o&&(0!=(2&s)||0!=(4&s))&&tc(n,t,o),i=i.next}while(i!==r)}fc(e,t,n);break;case 1:if(!Xl&&(ec(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){xu(n,t,a)}fc(e,t,n);break;case 21:fc(e,t,n);break;case 22:1&n.mode?(Xl=(r=Xl)||null!==n.memoizedState,fc(e,t,n),Xl=r):fc(e,t,n);break;default:fc(e,t,n)}}function mc(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Jl),t.forEach((function(t){var r=Au.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function gc(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;null!==a;){switch(a.tag){case 5:hc=a.stateNode,dc=!1;break e;case 3:case 4:hc=a.stateNode.containerInfo,dc=!0;break e}a=a.return}if(null===hc)throw Error(se(160));pc(s,o,i),hc=null,dc=!1;var l=i.alternate;null!==l&&(l.return=null),i.return=null}catch(c){xu(i,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)yc(t,e),t=t.sibling}function yc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gc(t,e),vc(e),4&r){try{rc(3,e,e.return),ic(3,e)}catch(m){xu(e,e.return,m)}try{rc(5,e,e.return)}catch(m){xu(e,e.return,m)}}break;case 1:gc(t,e),vc(e),512&r&&null!==n&&ec(n,n.return);break;case 5:if(gc(t,e),vc(e),512&r&&null!==n&&ec(n,n.return),32&e.flags){var i=e.stateNode;try{dt(i,"")}catch(m){xu(e,e.return,m)}}if(4&r&&null!=(i=e.stateNode)){var s=e.memoizedProps,o=null!==n?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===a&&"radio"===s.type&&null!=s.name&&Xe(i,s),wt(a,o);var c=wt(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];"style"===u?gt(i,h):"dangerouslySetInnerHTML"===u?ht(i,h):"children"===u?dt(i,h):we(i,u,h,c)}switch(a){case"input":Je(i,s);break;case"textarea":st(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;null!=f?nt(i,!!s.multiple,f,!1):d!==!!s.multiple&&(null!=s.defaultValue?nt(i,!!s.multiple,s.defaultValue,!0):nt(i,!!s.multiple,s.multiple?[]:"",!1))}i[fs]=s}catch(m){xu(e,e.return,m)}}break;case 6:if(gc(t,e),vc(e),4&r){if(null===e.stateNode)throw Error(se(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(m){xu(e,e.return,m)}}break;case 3:if(gc(t,e),vc(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(m){xu(e,e.return,m)}break;case 4:default:gc(t,e),vc(e);break;case 13:gc(t,e),vc(e),8192&(i=e.child).flags&&(s=null!==i.memoizedState,i.stateNode.isHidden=s,!s||null!==i.alternate&&null!==i.alternate.memoizedState||(Bc=Xt())),4&r&&mc(e);break;case 22:if(u=null!==n&&null!==n.memoizedState,1&e.mode?(Xl=(c=Xl)||u,gc(t,e),Xl=c):gc(t,e),vc(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!u&&0!=(1&e.mode))for(Zl=e,u=e.child;null!==u;){for(h=Zl=u;null!==Zl;){switch(f=(d=Zl).child,d.tag){case 0:case 11:case 14:case 15:rc(4,d,d.return);break;case 1:ec(d,d.return);var p=d.stateNode;if("function"==typeof p.componentWillUnmount){r=d,n=d.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(m){xu(r,n,m)}}break;case 5:ec(d,d.return);break;case 22:if(null!==d.memoizedState){_c(h);continue}}null!==f?(f.return=d,Zl=f):_c(h)}u=u.sibling}e:for(u=null,h=e;;){if(5===h.tag){if(null===u){u=h;try{i=h.stateNode,c?"function"==typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none":(a=h.stateNode,o=null!=(l=h.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,a.style.display=mt("display",o))}catch(m){xu(e,e.return,m)}}}else if(6===h.tag){if(null===u)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(m){xu(e,e.return,m)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:gc(t,e),vc(e),4&r&&mc(e);case 21:}}function vc(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ac(n)){var r=n;break e}n=n.return}throw Error(se(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(dt(i,""),r.flags&=-33),uc(e,lc(e),i);break;case 3:case 4:var s=r.stateNode.containerInfo;cc(e,lc(e),s);break;default:throw Error(se(161))}}catch(o){xu(e,e.return,o)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function wc(e,t,n){Zl=e,bc(e)}function bc(e,t,n){for(var r=0!=(1&e.mode);null!==Zl;){var i=Zl,s=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||Yl;if(!o){var a=i.alternate,l=null!==a&&null!==a.memoizedState||Xl;a=Yl;var c=Xl;if(Yl=o,(Xl=l)&&!c)for(Zl=i;null!==Zl;)l=(o=Zl).child,22===o.tag&&null!==o.memoizedState?Ec(i):null!==l?(l.return=o,Zl=l):Ec(i);for(;null!==s;)Zl=s,bc(s),s=s.sibling;Zl=i,Yl=a,Xl=c}kc(e)}else 0!=(8772&i.subtreeFlags)&&null!==s?(s.return=i,Zl=s):kc(e)}}function kc(e){for(;null!==Zl;){var t=Zl;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Xl||ic(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Xl)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:yo(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&Uo(t,s,r);break;case 3:var o=t.updateQueue;if(null!==o){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Uo(t,o,n)}break;case 5:var a=t.stateNode;if(null===n&&4&t.flags){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var u=c.memoizedState;if(null!==u){var h=u.dehydrated;null!==h&&$n(h)}}}break;default:throw Error(se(163))}Xl||512&t.flags&&sc(t)}catch(d){xu(t,t.return,d)}}if(t===e){Zl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zl=n;break}Zl=t.return}}function _c(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zl=n;break}Zl=t.return}}function Ec(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ic(4,t)}catch(l){xu(t,n,l)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){xu(t,i,l)}}var s=t.return;try{sc(t)}catch(l){xu(t,s,l)}break;case 5:var o=t.return;try{sc(t)}catch(l){xu(t,o,l)}}}catch(l){xu(t,t.return,l)}if(t===e){Zl=null;break}var a=t.sibling;if(null!==a){a.return=t.return,Zl=a;break}Zl=t.return}}var Sc,xc=Math.ceil,Cc=be.ReactCurrentDispatcher,Tc=be.ReactCurrentOwner,Ic=be.ReactCurrentBatchConfig,Ac=0,Pc=null,Nc=null,Rc=0,Oc=0,Dc=Ss(0),Lc=0,Mc=null,jc=0,Fc=0,Uc=0,zc=null,Vc=null,Bc=0,$c=1/0,qc=null,Hc=!1,Kc=null,Wc=null,Gc=!1,Qc=null,Yc=0,Xc=0,Jc=null,Zc=-1,eu=0;function tu(){return 0!=(6&Ac)?Xt():-1!==Zc?Zc:Zc=Xt()}function nu(e){return 0==(1&e.mode)?1:0!=(2&Ac)&&0!==Rc?Rc&-Rc:null!==go.transition?(0===eu&&(eu=gn()),eu):0!==(e=bn)?e:e=void 0===(e=window.event)?16:Xn(e.type)}function ru(e,t,n,r){if(50<Xc)throw Xc=0,Jc=null,Error(se(185));vn(e,n,r),0!=(2&Ac)&&e===Pc||(e===Pc&&(0==(2&Ac)&&(Fc|=n),4===Lc&&lu(e,Rc)),iu(e,r),1===n&&0===Ac&&0==(1&t.mode)&&($c=Xt()+500,Us&&Bs()))}function iu(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-an(s),a=1<<o,l=i[o];-1===l?0!=(a&n)&&0==(a&r)||(i[o]=pn(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}(e,t);var r=fn(e,e===Pc?Rc:0);if(0===r)null!==n&&Gt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Gt(n),1===t)0===e.tag?function(e){Us=!0,Vs(e)}(cu.bind(null,e)):Vs(cu.bind(null,e)),os((function(){0==(6&Ac)&&Bs()})),n=null;else{switch(kn(r)){case 1:n=Zt;break;case 4:n=en;break;case 16:default:n=tn;break;case 536870912:n=rn}n=Pu(n,su.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function su(e,t){if(Zc=-1,eu=0,0!=(6&Ac))throw Error(se(327));var n=e.callbackNode;if(Eu()&&e.callbackNode!==n)return null;var r=fn(e,e===Pc?Rc:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=yu(e,r);else{t=r;var i=Ac;Ac|=2;var s=mu();for(Pc===e&&Rc===t||(qc=null,$c=Xt()+500,fu(e,t));;)try{wu();break}catch(a){pu(e,a)}_o(),Cc.current=s,Ac=i,null!==Nc?t=0:(Pc=null,Rc=0,t=Lc)}if(0!==t){if(2===t&&(0!==(i=mn(e))&&(r=i,t=ou(e,i))),1===t)throw n=Mc,fu(e,0),lu(e,r),iu(e,Xt()),n;if(6===t)lu(e,r);else{if(i=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ai(s(),i))return!1}catch(o){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=yu(e,r))&&(0!==(s=mn(e))&&(r=s,t=ou(e,s))),1===t))throw n=Mc,fu(e,0),lu(e,r),iu(e,Xt()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(se(345));case 2:case 5:_u(e,Vc,qc);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=Bc+500-Xt())){if(0!==fn(e,0))break;if(((i=e.suspendedLanes)&r)!==r){tu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=rs(_u.bind(null,e,Vc,qc),t);break}_u(e,Vc,qc);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-an(r);s=1<<o,(o=t[o])>i&&(i=o),r&=~s}if(r=i,10<(r=(120>(r=Xt()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xc(r/1960))-r)){e.timeoutHandle=rs(_u.bind(null,e,Vc,qc),r);break}_u(e,Vc,qc);break;default:throw Error(se(329))}}}return iu(e,Xt()),e.callbackNode===n?su.bind(null,e):null}function ou(e,t){var n=zc;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=yu(e,t))&&(t=Vc,Vc=n,null!==t&&au(t)),e}function au(e){null===Vc?Vc=e:Vc.push.apply(Vc,e)}function lu(e,t){for(t&=~Uc,t&=~Fc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-an(t),r=1<<n;e[n]=-1,t&=~r}}function cu(e){if(0!=(6&Ac))throw Error(se(327));Eu();var t=fn(e,0);if(0==(1&t))return iu(e,Xt()),null;var n=yu(e,t);if(0!==e.tag&&2===n){var r=mn(e);0!==r&&(t=r,n=ou(e,r))}if(1===n)throw n=Mc,fu(e,0),lu(e,t),iu(e,Xt()),n;if(6===n)throw Error(se(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_u(e,Vc,qc),iu(e,Xt()),null}function uu(e,t){var n=Ac;Ac|=1;try{return e(t)}finally{0===(Ac=n)&&($c=Xt()+500,Us&&Bs())}}function hu(e){null!==Qc&&0===Qc.tag&&0==(6&Ac)&&Eu();var t=Ac;Ac|=1;var n=Ic.transition,r=bn;try{if(Ic.transition=null,bn=1,e)return e()}finally{bn=r,Ic.transition=n,0==(6&(Ac=t))&&Bs()}}function du(){Oc=Dc.current,xs(Dc)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,is(n)),null!==Nc)for(n=Nc.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Os();break;case 3:sa(),xs(As),xs(Is),ha();break;case 5:aa(r);break;case 4:sa();break;case 13:case 19:xs(la);break;case 10:Eo(r.type._context);break;case 22:case 23:du()}n=n.return}if(Pc=e,Nc=e=Du(e.current,null),Rc=Oc=t,Lc=0,Mc=null,Uc=Fc=jc=0,Vc=zc=null,null!==To){for(t=0;t<To.length;t++)if(null!==(r=(n=To[t]).interleaved)){n.interleaved=null;var i=r.next,s=n.pending;if(null!==s){var o=s.next;s.next=i,r.next=o}n.pending=r}To=null}return e}function pu(e,t){for(;;){var n=Nc;try{if(_o(),da.current=ol,va){for(var r=ma.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}va=!1}if(pa=0,ya=ga=ma=null,wa=!1,ba=0,Tc.current=null,null===n||null===n.return){Lc=1,Mc=t,Nc=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Rc,a.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var c=l,u=a,h=u.tag;if(0==(1&u.mode)&&(0===h||11===h||15===h)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var f=yl(o);if(null!==f){f.flags&=-257,vl(f,o,a,0,t),1&f.mode&&gl(s,c,t),l=c;var p=(t=f).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(0==(1&t)){gl(s,c,t),gu();break e}l=Error(se(426))}else if(io&&1&a.mode){var g=yl(o);if(null!==g){0==(65536&g.flags)&&(g.flags|=256),vl(g,o,a,0,t),mo(ul(l,a));break e}}s=l=ul(l,a),4!==Lc&&(Lc=2),null===zc?zc=[s]:zc.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t,jo(s,pl(0,l,t));break e;case 1:a=l;var y=s.type,v=s.stateNode;if(0==(128&s.flags)&&("function"==typeof y.getDerivedStateFromError||null!==v&&"function"==typeof v.componentDidCatch&&(null===Wc||!Wc.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t,jo(s,ml(s,a,t));break e}}s=s.return}while(null!==s)}ku(n)}catch(w){t=w,Nc===n&&null!==n&&(Nc=n=n.return);continue}break}}function mu(){var e=Cc.current;return Cc.current=ol,null===e?ol:e}function gu(){0!==Lc&&3!==Lc&&2!==Lc||(Lc=4),null===Pc||0==(268435455&jc)&&0==(268435455&Fc)||lu(Pc,Rc)}function yu(e,t){var n=Ac;Ac|=2;var r=mu();for(Pc===e&&Rc===t||(qc=null,fu(e,t));;)try{vu();break}catch(i){pu(e,i)}if(_o(),Ac=n,Cc.current=r,null!==Nc)throw Error(se(261));return Pc=null,Rc=0,Lc}function vu(){for(;null!==Nc;)bu(Nc)}function wu(){for(;null!==Nc&&!Qt();)bu(Nc)}function bu(e){var t=Sc(e.alternate,e,Oc);e.memoizedProps=e.pendingProps,null===t?ku(e):Nc=t,Tc.current=null}function ku(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=Gl(n,t,Oc)))return void(Nc=n)}else{if(null!==(n=Ql(n,t)))return n.flags&=32767,void(Nc=n);if(null===e)return Lc=6,void(Nc=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Nc=t);Nc=t=e}while(null!==t);0===Lc&&(Lc=5)}function _u(e,t,n){var r=bn,i=Ic.transition;try{Ic.transition=null,bn=1,function(e,t,n,r){do{Eu()}while(null!==Qc);if(0!=(6&Ac))throw Error(se(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(se(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-an(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}(e,s),e===Pc&&(Nc=Pc=null,Rc=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||Gc||(Gc=!0,Pu(tn,(function(){return Eu(),null}))),s=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||s){s=Ic.transition,Ic.transition=null;var o=bn;bn=1;var a=Ac;Ac|=4,Tc.current=null,function(e,t){if(es=Hn,fi(e=di())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch(b){n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=e,d=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(a=o+i),h!==s||0!==r&&3!==h.nodeType||(l=o+r),3===h.nodeType&&(o+=h.nodeValue.length),null!==(f=h.firstChild);)d=h,h=f;for(;;){if(h===e)break t;if(d===n&&++c===i&&(a=o),d===s&&++u===r&&(l=o),null!==(f=h.nextSibling))break;d=(h=d).parentNode}h=f}n=-1===a||-1===l?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ts={focusedElem:e,selectionRange:n},Hn=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var p=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,y=t.stateNode,v=y.getSnapshotBeforeUpdate(t.elementType===t.type?m:yo(t.type,m),g);y.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(se(163))}}catch(b){xu(t,t.return,b)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}p=nc,nc=!1}(e,n),yc(n,e),pi(ts),Hn=!!es,ts=es=null,e.current=n,wc(n),Yt(),Ac=a,bn=o,Ic.transition=s}else e.current=n;if(Gc&&(Gc=!1,Qc=e,Yc=i),s=e.pendingLanes,0===s&&(Wc=null),function(e){if(on&&"function"==typeof on.onCommitFiberRoot)try{on.onCommitFiberRoot(sn,e,void 0,128==(128&e.current.flags))}catch(t){}}(n.stateNode),iu(e,Xt()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hc)throw Hc=!1,e=Kc,Kc=null,e;0!=(1&Yc)&&0!==e.tag&&Eu(),s=e.pendingLanes,0!=(1&s)?e===Jc?Xc++:(Xc=0,Jc=e):Xc=0,Bs()}(e,t,n,r)}finally{Ic.transition=i,bn=r}return null}function Eu(){if(null!==Qc){var e=kn(Yc),t=Ic.transition,n=bn;try{if(Ic.transition=null,bn=16>e?16:e,null===Qc)var r=!1;else{if(e=Qc,Qc=null,Yc=0,0!=(6&Ac))throw Error(se(331));var i=Ac;for(Ac|=4,Zl=e.current;null!==Zl;){var s=Zl,o=s.child;if(0!=(16&Zl.flags)){var a=s.deletions;if(null!==a){for(var l=0;l<a.length;l++){var c=a[l];for(Zl=c;null!==Zl;){var u=Zl;switch(u.tag){case 0:case 11:case 15:rc(8,u,s)}var h=u.child;if(null!==h)h.return=u,Zl=h;else for(;null!==Zl;){var d=(u=Zl).sibling,f=u.return;if(oc(u),u===c){Zl=null;break}if(null!==d){d.return=f,Zl=d;break}Zl=f}}}var p=s.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}Zl=s}}if(0!=(2064&s.subtreeFlags)&&null!==o)o.return=s,Zl=o;else e:for(;null!==Zl;){if(0!=(2048&(s=Zl).flags))switch(s.tag){case 0:case 11:case 15:rc(9,s,s.return)}var y=s.sibling;if(null!==y){y.return=s.return,Zl=y;break e}Zl=s.return}}var v=e.current;for(Zl=v;null!==Zl;){var w=(o=Zl).child;if(0!=(2064&o.subtreeFlags)&&null!==w)w.return=o,Zl=w;else e:for(o=v;null!==Zl;){if(0!=(2048&(a=Zl).flags))try{switch(a.tag){case 0:case 11:case 15:ic(9,a)}}catch(k){xu(a,a.return,k)}if(a===o){Zl=null;break e}var b=a.sibling;if(null!==b){b.return=a.return,Zl=b;break e}Zl=a.return}}if(Ac=i,Bs(),on&&"function"==typeof on.onPostCommitFiberRoot)try{on.onPostCommitFiberRoot(sn,e)}catch(k){}r=!0}return r}finally{bn=n,Ic.transition=t}}return!1}function Su(e,t,n){e=Lo(e,t=pl(0,t=ul(n,t),1),1),t=tu(),null!==e&&(vn(e,1,t),iu(e,t))}function xu(e,t,n){if(3===e.tag)Su(e,e,n);else for(;null!==t;){if(3===t.tag){Su(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Wc||!Wc.has(r))){t=Lo(t,e=ml(t,e=ul(n,e),1),1),e=tu(),null!==t&&(vn(t,1,e),iu(t,e));break}}t=t.return}}function Cu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=tu(),e.pingedLanes|=e.suspendedLanes&n,Pc===e&&(Rc&n)===n&&(4===Lc||3===Lc&&(130023424&Rc)===Rc&&500>Xt()-Bc?fu(e,0):Uc|=n),iu(e,t)}function Tu(e,t){0===t&&(0==(1&e.mode)?t=1:(t=hn,0==(130023424&(hn<<=1))&&(hn=4194304)));var n=tu();null!==(e=Po(e,t))&&(vn(e,t,n),iu(e,n))}function Iu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Tu(e,n)}function Au(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(se(314))}null!==r&&r.delete(t),Tu(e,n)}function Pu(e,t){return Wt(e,t)}function Nu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ru(e,t,n,r){return new Nu(e,t,n,r)}function Ou(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Du(e,t){var n=e.alternate;return null===n?((n=Ru(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lu(e,t,n,r,i,s){var o=2;if(r=e,"function"==typeof e)Ou(e)&&(o=1);else if("string"==typeof e)o=5;else e:switch(e){case Ee:return Mu(n.children,i,s,t);case Se:o=8,i|=8;break;case xe:return(e=Ru(12,n,t,2|i)).elementType=xe,e.lanes=s,e;case Ae:return(e=Ru(13,n,t,i)).elementType=Ae,e.lanes=s,e;case Pe:return(e=Ru(19,n,t,i)).elementType=Pe,e.lanes=s,e;case Oe:return ju(n,i,s,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case Ce:o=10;break e;case Te:o=9;break e;case Ie:o=11;break e;case Ne:o=14;break e;case Re:o=16,r=null;break e}throw Error(se(130,null==e?e:typeof e,""))}return(t=Ru(o,n,t,i)).elementType=e,t.type=r,t.lanes=s,t}function Mu(e,t,n,r){return(e=Ru(7,e,r,t)).lanes=n,e}function ju(e,t,n,r){return(e=Ru(22,e,r,t)).elementType=Oe,e.lanes=n,e.stateNode={isHidden:!1},e}function Fu(e,t,n){return(e=Ru(6,e,null,t)).lanes=n,e}function Uu(e,t,n){return(t=Ru(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yn(0),this.expirationTimes=yn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yn(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vu(e,t,n,r,i,s,o,a,l){return e=new zu(e,t,n,a,l),1===t?(t=1,!0===s&&(t|=8)):t=0,s=Ru(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ro(s),e}function Bu(e){if(!e)return Ts;e:{if(Bt(e=e._reactInternals)!==e||1!==e.tag)throw Error(se(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Rs(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(se(171))}if(1===e.tag){var n=e.type;if(Rs(n))return Ls(e,n,t)}return t}function $u(e,t,n,r,i,s,o,a,l){return(e=Vu(n,r,!0,e,0,s,0,a,l)).context=Bu(null),n=e.current,(s=Do(r=tu(),i=nu(n))).callback=null!=t?t:null,Lo(n,s,i),e.current.lanes=i,vn(e,i,r),iu(e,r),e}function qu(e,t,n,r){var i=t.current,s=tu(),o=nu(i);return n=Bu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Do(s,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Lo(i,t,o))&&(ru(e,i,o,s),Mo(e,i,o)),o}function Hu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Ku(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Wu(e,t){Ku(e,t),(e=e.alternate)&&Ku(e,t)}Sc=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||As.current)bl=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return bl=!1,function(e,t,n){switch(t.tag){case 3:Pl(t),po();break;case 5:oa(t);break;case 1:Rs(t.type)&&Ms(t);break;case 4:ia(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Cs(vo,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Cs(la,1&la.current),t.flags|=128,null):0!=(n&t.child.childLanes)?Fl(e,t,n):(Cs(la,1&la.current),null!==(e=Hl(e,t,n))?e.sibling:null);Cs(la,1&la.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return $l(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Cs(la,la.current),r)break;return null;case 22:case 23:return t.lanes=0,xl(e,t,n)}return Hl(e,t,n)}(e,t,n);bl=0!=(131072&e.flags)}else bl=!1,io&&0!=(1048576&t.flags)&&Zs(t,Ks,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ql(e,t),e=t.pendingProps;var i=Ns(t,Is.current);xo(t,n),i=Sa(null,t,r,e,i,n);var s=xa();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Rs(r)?(s=!0,Ms(t)):s=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Ro(t),i.updater=Bo,t.stateNode=i,i._reactInternals=t,Ko(t,r,e,n),t=Al(null,t,r,!0,s,n)):(t.tag=0,io&&s&&eo(t),kl(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ql(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return Ou(e)?1:0;if(null!=e){if((e=e.$$typeof)===Ie)return 11;if(e===Ne)return 14}return 2}(r),e=yo(r,e),i){case 0:t=Tl(null,t,r,e,n);break e;case 1:t=Il(null,t,r,e,n);break e;case 11:t=_l(null,t,r,e,n);break e;case 14:t=El(null,t,r,yo(r.type,e),n);break e}throw Error(se(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Tl(e,t,r,i=t.elementType===r?i:yo(r,i),n);case 1:return r=t.type,i=t.pendingProps,Il(e,t,r,i=t.elementType===r?i:yo(r,i),n);case 3:e:{if(Pl(t),null===e)throw Error(se(387));r=t.pendingProps,i=(s=t.memoizedState).element,Oo(e,t),Fo(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated){if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=Nl(e,t,r,n,i=ul(Error(se(423)),t));break e}if(r!==i){t=Nl(e,t,r,n,i=ul(Error(se(424)),t));break e}for(ro=cs(t.stateNode.containerInfo.firstChild),no=t,io=!0,so=null,n=Jo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(po(),r===i){t=Hl(e,t,n);break e}kl(e,t,r,n)}t=t.child}return t;case 5:return oa(t),null===e&&co(t),r=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,o=i.children,ns(r,i)?o=null:null!==s&&ns(r,s)&&(t.flags|=32),Cl(e,t),kl(e,t,o,n),t.child;case 6:return null===e&&co(t),null;case 13:return Fl(e,t,n);case 4:return ia(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Xo(t,null,r,n):kl(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,_l(e,t,r,i=t.elementType===r?i:yo(r,i),n);case 7:return kl(e,t,t.pendingProps,n),t.child;case 8:case 12:return kl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,Cs(vo,r._currentValue),r._currentValue=o,null!==s)if(ai(s.value,o)){if(s.children===i.children&&!As.current){t=Hl(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var a=s.dependencies;if(null!==a){o=s.child;for(var l=a.firstContext;null!==l;){if(l.context===r){if(1===s.tag){(l=Do(-1,n&-n)).tag=2;var c=s.updateQueue;if(null!==c){var u=(c=c.shared).pending;null===u?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),So(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(10===s.tag)o=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(o=s.return))throw Error(se(341));o.lanes|=n,null!==(a=o.alternate)&&(a.lanes|=n),So(o,n,t),o=s.sibling}else o=s.child;if(null!==o)o.return=s;else for(o=s;null!==o;){if(o===t){o=null;break}if(null!==(s=o.sibling)){s.return=o.return,o=s;break}o=o.return}s=o}kl(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xo(t,n),r=r(i=Co(i)),t.flags|=1,kl(e,t,r,n),t.child;case 14:return i=yo(r=t.type,t.pendingProps),El(e,t,r,i=yo(r.type,i),n);case 15:return Sl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yo(r,i),ql(e,t),t.tag=1,Rs(r)?(e=!0,Ms(t)):e=!1,xo(t,n),qo(t,r,i),Ko(t,r,i,n),Al(null,t,r,!0,e,n);case 19:return $l(e,t,n);case 22:return xl(e,t,n)}throw Error(se(156,t.tag))};var Gu="function"==typeof reportError?reportError:function(e){console.error(e)};function Qu(e){this._internalRoot=e}function Yu(e){this._internalRoot=e}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Ju(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zu(){}function eh(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if("function"==typeof i){var a=i;i=function(){var e=Hu(o);a.call(e)}}qu(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"==typeof r){var s=r;r=function(){var e=Hu(o);s.call(e)}}var o=$u(t,r,e,0,null,!1,0,"",Zu);return e._reactRootContainer=o,e[ps]=o.current,Bi(8===e.nodeType?e.parentNode:e),hu(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var a=r;r=function(){var e=Hu(l);a.call(e)}}var l=Vu(e,0,!1,null,0,!1,0,"",Zu);return e._reactRootContainer=l,e[ps]=l.current,Bi(8===e.nodeType?e.parentNode:e),hu((function(){qu(t,l,n,r)})),l}(n,t,e,i,r);return Hu(o)}Yu.prototype.render=Qu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(se(409));qu(e,t,null,null)},Yu.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;hu((function(){qu(null,e,null,null)})),t[ps]=null}},Yu.prototype.unstable_scheduleHydration=function(e){if(e){var t=xn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dn.length&&0!==t&&t<Dn[n].priority;n++);Dn.splice(n,0,e),0===n&&Fn(e)}},_n=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dn(t.pendingLanes);0!==n&&(wn(t,1|n),iu(t,Xt()),0==(6&Ac)&&($c=Xt()+500,Bs()))}break;case 13:hu((function(){var t=Po(e,1);if(null!==t){var n=tu();ru(t,e,1,n)}})),Wu(e,1)}},En=function(e){if(13===e.tag){var t=Po(e,134217728);if(null!==t)ru(t,e,134217728,tu());Wu(e,134217728)}},Sn=function(e){if(13===e.tag){var t=nu(e),n=Po(e,t);if(null!==n)ru(n,e,t,tu());Wu(e,t)}},xn=function(){return bn},Cn=function(e,t){var n=bn;try{return bn=e,t()}finally{bn=n}},_t=function(e,t,n){switch(t){case"input":if(Je(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ks(r);if(!i)throw Error(se(90));We(r),Je(r,i)}}}break;case"textarea":st(e,n);break;case"select":null!=(t=n.value)&&nt(e,!!n.multiple,t,!1)}},It=uu,At=hu;var th={usingClientEntryPoint:!1,Events:[ws,bs,ks,Ct,Tt,uu]},nh={findFiberByHostInstance:vs,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rh={bundleType:nh.bundleType,version:nh.version,rendererPackageName:nh.rendererPackageName,rendererConfig:nh.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ht(e))?null:e.stateNode},findFiberByHostInstance:nh.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ih=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ih.isDisabled&&ih.supportsFiber)try{sn=ih.inject(rh),on=ih}catch(ut){}}Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=th,Z.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Xu(t))throw Error(se(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:_e,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},Z.createRoot=function(e,t){if(!Xu(e))throw Error(se(299));var n=!1,r="",i=Gu;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Vu(e,1,!1,null,0,n,0,r,i),e[ps]=t.current,Bi(8===e.nodeType?e.parentNode:e),new Qu(t)},Z.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(se(188));throw e=Object.keys(e).join(","),Error(se(268,e))}return e=null===(e=Ht(t))?null:e.stateNode},Z.flushSync=function(e){return hu(e)},Z.hydrate=function(e,t,n){if(!Ju(t))throw Error(se(200));return eh(null,e,t,!0,n)},Z.hydrateRoot=function(e,t,n){if(!Xu(e))throw Error(se(405));var r=null!=n&&n.hydratedSources||null,i=!1,s="",o=Gu;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError)),t=$u(t,null,e,1,null!=n?n:null,i,0,s,o),e[ps]=t.current,Bi(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Yu(t)},Z.render=function(e,t,n){if(!Ju(t))throw Error(se(200));return eh(null,e,t,!1,n)},Z.unmountComponentAtNode=function(e){if(!Ju(e))throw Error(se(40));return!!e._reactRootContainer&&(hu((function(){eh(null,null,e,!1,(function(){e._reactRootContainer=null,e[ps]=null}))})),!0)},Z.unstable_batchedUpdates=uu,Z.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ju(n))throw Error(se(200));if(null==e||void 0===e._reactInternals)throw Error(se(38));return eh(e,t,n,!1,r)},Z.version="18.2.0-next-9e3b772b8-20220608",function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),J.exports=Z;var sh,oh=J.exports;sh=X.createRoot=oh.createRoot,X.hydrateRoot=oh.hydrateRoot;var ah=function(){return ah=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ah.apply(this,arguments)};function lh(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function ch(e,t,n){if(n||2===arguments.length)for(var r,i=0,s=t.length;i<s;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var uh="-ms-",hh="-moz-",dh="-webkit-",fh="comm",ph="rule",mh="decl",gh="@import",yh="@keyframes",vh="@layer",wh=Math.abs,bh=String.fromCharCode,kh=Object.assign;function _h(e){return e.trim()}function Eh(e,t){return(e=t.exec(e))?e[0]:e}function Sh(e,t,n){return e.replace(t,n)}function xh(e,t){return e.indexOf(t)}function Ch(e,t){return 0|e.charCodeAt(t)}function Th(e,t,n){return e.slice(t,n)}function Ih(e){return e.length}function Ah(e){return e.length}function Ph(e,t){return t.push(e),e}function Nh(e,t){return e.filter((function(e){return!Eh(e,t)}))}var Rh=1,Oh=1,Dh=0,Lh=0,Mh=0,jh="";function Fh(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Rh,column:Oh,length:o,return:"",siblings:a}}function Uh(e,t){return kh(Fh("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function zh(e){for(;e.root;)e=Uh(e.root,{children:[e]});Ph(e,e.siblings)}function Vh(){return Mh=Lh<Dh?Ch(jh,Lh++):0,Oh++,10===Mh&&(Oh=1,Rh++),Mh}function Bh(){return Ch(jh,Lh)}function $h(){return Lh}function qh(e,t){return Th(jh,e,t)}function Hh(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Kh(e){return _h(qh(Lh-1,Qh(91===e?e+2:40===e?e+1:e)))}function Wh(e){for(;(Mh=Bh())&&Mh<33;)Vh();return Hh(e)>2||Hh(Mh)>3?"":" "}function Gh(e,t){for(;--t&&Vh()&&!(Mh<48||Mh>102||Mh>57&&Mh<65||Mh>70&&Mh<97););return qh(e,$h()+(t<6&&32==Bh()&&32==Vh()))}function Qh(e){for(;Vh();)switch(Mh){case e:return Lh;case 34:case 39:34!==e&&39!==e&&Qh(Mh);break;case 40:41===e&&Qh(e);break;case 92:Vh()}return Lh}function Yh(e,t){for(;Vh()&&e+Mh!==57&&(e+Mh!==84||47!==Bh()););return"/*"+qh(t,Lh-1)+"*"+bh(47===e?e:Vh())}function Xh(e){for(;!Hh(Bh());)Vh();return qh(e,Lh)}function Jh(e){return function(e){return jh="",e}(Zh("",null,null,null,[""],e=function(e){return Rh=Oh=1,Dh=Ih(jh=e),Lh=0,[]}(e),0,[0],e))}function Zh(e,t,n,r,i,s,o,a,l){for(var c=0,u=0,h=o,d=0,f=0,p=0,m=1,g=1,y=1,v=0,w="",b=i,k=s,_=r,E=w;g;)switch(p=v,v=Vh()){case 40:if(108!=p&&58==Ch(E,h-1)){-1!=xh(E+=Sh(Kh(v),"&","&\f"),"&\f")&&(y=-1);break}case 34:case 39:case 91:E+=Kh(v);break;case 9:case 10:case 13:case 32:E+=Wh(p);break;case 92:E+=Gh($h()-1,7);continue;case 47:switch(Bh()){case 42:case 47:Ph(td(Yh(Vh(),$h()),t,n,l),l);break;default:E+="/"}break;case 123*m:a[c++]=Ih(E)*y;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:-1==y&&(E=Sh(E,/\f/g,"")),f>0&&Ih(E)-h&&Ph(f>32?nd(E+";",r,n,h-1,l):nd(Sh(E," ","")+";",r,n,h-2,l),l);break;case 59:E+=";";default:if(Ph(_=ed(E,t,n,c,u,i,a,w,b=[],k=[],h,s),s),123===v)if(0===u)Zh(E,t,_,_,b,s,h,a,k);else switch(99===d&&110===Ch(E,3)?100:d){case 100:case 108:case 109:case 115:Zh(e,_,_,r&&Ph(ed(e,_,_,0,0,i,a,w,i,b=[],h,k),k),i,k,h,a,r?b:k);break;default:Zh(E,_,_,_,[""],k,0,a,k)}}c=u=f=0,m=y=1,w=E="",h=o;break;case 58:h=1+Ih(E),f=p;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==(Mh=Lh>0?Ch(jh,--Lh):0,Oh--,10===Mh&&(Oh=1,Rh--),Mh))continue;switch(E+=bh(v),v*m){case 38:y=u>0?1:(E+="\f",-1);break;case 44:a[c++]=(Ih(E)-1)*y,y=1;break;case 64:45===Bh()&&(E+=Kh(Vh())),d=Bh(),u=h=Ih(w=E+=Xh($h())),v++;break;case 45:45===p&&2==Ih(E)&&(m=0)}}return s}function ed(e,t,n,r,i,s,o,a,l,c,u,h){for(var d=i-1,f=0===i?s:[""],p=Ah(f),m=0,g=0,y=0;m<r;++m)for(var v=0,w=Th(e,d+1,d=wh(g=o[m])),b=e;v<p;++v)(b=_h(g>0?f[v]+" "+w:Sh(w,/&\f/g,f[v])))&&(l[y++]=b);return Fh(e,t,n,0===i?ph:a,l,c,u,h)}function td(e,t,n,r){return Fh(e,t,n,fh,bh(Mh),Th(e,2,-2),0,r)}function nd(e,t,n,r,i){return Fh(e,t,n,mh,Th(e,0,r),Th(e,r+1,-1),r,i)}function rd(e,t,n){switch(function(e,t){return 45^Ch(e,0)?(((t<<2^Ch(e,0))<<2^Ch(e,1))<<2^Ch(e,2))<<2^Ch(e,3):0}(e,t)){case 5103:return dh+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return dh+e+e;case 4789:return hh+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return dh+e+hh+e+uh+e+e;case 5936:switch(Ch(e,t+11)){case 114:return dh+e+uh+Sh(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return dh+e+uh+Sh(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return dh+e+uh+Sh(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return dh+e+uh+e+e;case 6165:return dh+e+uh+"flex-"+e+e;case 5187:return dh+e+Sh(e,/(\w+).+(:[^]+)/,dh+"box-$1$2"+uh+"flex-$1$2")+e;case 5443:return dh+e+uh+"flex-item-"+Sh(e,/flex-|-self/g,"")+(Eh(e,/flex-|baseline/)?"":uh+"grid-row-"+Sh(e,/flex-|-self/g,""))+e;case 4675:return dh+e+uh+"flex-line-pack"+Sh(e,/align-content|flex-|-self/g,"")+e;case 5548:return dh+e+uh+Sh(e,"shrink","negative")+e;case 5292:return dh+e+uh+Sh(e,"basis","preferred-size")+e;case 6060:return dh+"box-"+Sh(e,"-grow","")+dh+e+uh+Sh(e,"grow","positive")+e;case 4554:return dh+Sh(e,/([^-])(transform)/g,"$1"+dh+"$2")+e;case 6187:return Sh(Sh(Sh(e,/(zoom-|grab)/,dh+"$1"),/(image-set)/,dh+"$1"),e,"")+e;case 5495:case 3959:return Sh(e,/(image-set\([^]*)/,dh+"$1$`$1");case 4968:return Sh(Sh(e,/(.+:)(flex-)?(.*)/,dh+"box-pack:$3"+uh+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+dh+e+e;case 4200:if(!Eh(e,/flex-|baseline/))return uh+"grid-column-align"+Th(e,t)+e;break;case 2592:case 3360:return uh+Sh(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,Eh(e.props,/grid-\w+-end/)}))?~xh(e+(n=n[t].value),"span")?e:uh+Sh(e,"-start","")+e+uh+"grid-row-span:"+(~xh(n,"span")?Eh(n,/\d+/):+Eh(n,/\d+/)-+Eh(e,/\d+/))+";":uh+Sh(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return Eh(e.props,/grid-\w+-start/)}))?e:uh+Sh(Sh(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Sh(e,/(.+)-inline(.+)/,dh+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ih(e)-1-t>6)switch(Ch(e,t+1)){case 109:if(45!==Ch(e,t+4))break;case 102:return Sh(e,/(.+:)(.+)-([^]+)/,"$1"+dh+"$2-$3$1"+hh+(108==Ch(e,t+3)?"$3":"$2-$3"))+e;case 115:return~xh(e,"stretch")?rd(Sh(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Sh(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,i,s,o,a){return uh+n+":"+r+a+(i?uh+n+"-span:"+(s?o:+o-+r)+a:"")+e}));case 4949:if(121===Ch(e,t+6))return Sh(e,":",":"+dh)+e;break;case 6444:switch(Ch(e,45===Ch(e,14)?18:11)){case 120:return Sh(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+dh+(45===Ch(e,14)?"inline-":"")+"box$3$1"+dh+"$2$3$1"+uh+"$2box$3")+e;case 100:return Sh(e,":",":"+uh)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Sh(e,"scroll-","scroll-snap-")+e}return e}function id(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function sd(e,t,n,r){switch(e.type){case vh:if(e.children.length)break;case gh:case mh:return e.return=e.return||e.value;case fh:return"";case yh:return e.return=e.value+"{"+id(e.children,r)+"}";case ph:if(!Ih(e.value=e.props.join(",")))return""}return Ih(n=id(e.children,r))?e.return=e.value+"{"+n+"}":""}function od(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case mh:return void(e.return=rd(e.value,e.length,n));case yh:return id([Uh(e,{value:Sh(e.value,"@","@"+dh)})],r);case ph:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(Eh(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zh(Uh(e,{props:[Sh(t,/:(read-\w+)/,":"+hh+"$1")]})),zh(Uh(e,{props:[t]})),kh(e,{props:Nh(n,r)});break;case"::placeholder":zh(Uh(e,{props:[Sh(t,/:(plac\w+)/,":"+dh+"input-$1")]})),zh(Uh(e,{props:[Sh(t,/:(plac\w+)/,":"+hh+"$1")]})),zh(Uh(e,{props:[Sh(t,/:(plac\w+)/,uh+"input-$1")]})),zh(Uh(e,{props:[t]})),kh(e,{props:Nh(n,r)})}return""}))}}var ad={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ld="undefined"!=typeof process&&void 0!==process.env&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",cd="undefined"!=typeof window&&"HTMLElement"in window,ud=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),hd=Object.freeze([]),dd=Object.freeze({});var fd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),pd=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,md=/(^-|-$)/g;function gd(e){return e.replace(pd,"-").replace(md,"")}var yd=/(a)(d)/gi,vd=function(e){return String.fromCharCode(e+(e>25?39:97))};function wd(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=vd(t%52)+n;return(vd(t%52)+n).replace(yd,"$1-$2")}var bd,kd=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},_d=function(e){return kd(5381,e)};function Ed(e){return wd(_d(e)>>>0)}function Sd(e){return"string"==typeof e&&!0}var xd="function"==typeof Symbol&&Symbol.for,Cd=xd?Symbol.for("react.memo"):60115,Td=xd?Symbol.for("react.forward_ref"):60112,Id={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ad={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Nd=((bd={})[Td]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},bd[Cd]=Pd,bd);function Rd(e){return("type"in(t=e)&&t.type.$$typeof)===Cd?Pd:"$$typeof"in e?Nd[e.$$typeof]:Id;var t}var Od=Object.defineProperty,Dd=Object.getOwnPropertyNames,Ld=Object.getOwnPropertySymbols,Md=Object.getOwnPropertyDescriptor,jd=Object.getPrototypeOf,Fd=Object.prototype;function Ud(e,t,n){if("string"!=typeof t){if(Fd){var r=jd(t);r&&r!==Fd&&Ud(e,r,n)}var i=Dd(t);Ld&&(i=i.concat(Ld(t)));for(var s=Rd(e),o=Rd(t),a=0;a<i.length;++a){var l=i[a];if(!(l in Ad||n&&n[l]||o&&l in o||s&&l in s)){var c=Md(t,l);try{Od(e,l,c)}catch(u){}}}}return e}function zd(e){return"function"==typeof e}function Vd(e){return"object"==typeof e&&"styledComponentId"in e}function Bd(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function $d(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function qd(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Hd(e,t,n){if(void 0===n&&(n=!1),!n&&!qd(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Hd(e[r],t[r]);else if(qd(t))for(var r in t)e[r]=Hd(e[r],t[r]);return e}function Kd(e,t){Object.defineProperty(e,"toString",{value:t})}function Wd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Gd=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Wd(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var s=r;s<i;s++)this.groupSizes[s]=0}for(var o=this.indexOfGroup(e+1),a=(s=0,t.length);s<a;s++)this.tag.insertRule(o,t[s])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,s=r;s<i;s++)t+="".concat(this.tag.getRule(s)).concat("/*!sc*/\n");return t},e}(),Qd=new Map,Yd=new Map,Xd=1,Jd=function(e){if(Qd.has(e))return Qd.get(e);for(;Yd.has(Xd);)Xd++;var t=Xd++;return Qd.set(e,t),Yd.set(t,e),t},Zd=function(e,t){Qd.set(e,t),Yd.set(t,e)},ef="style[".concat(ld,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),tf=new RegExp("^".concat(ld,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),nf=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},rf=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split("/*!sc*/\n"),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(tf);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(Zd(u,c),nf(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};var sf=function(e){var t,n,r=document.head,i=e||r,s=document.createElement("style"),o=(t=i,(n=Array.from(t.querySelectorAll("style[".concat(ld,"]"))))[n.length-1]),a=void 0!==o?o.nextSibling:null;s.setAttribute(ld,"active"),s.setAttribute("data-styled-version","6.0.7");var l="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null;return l&&s.setAttribute("nonce",l),i.insertBefore(s,a),s},of=function(){function e(e){this.element=sf(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw Wd(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(n){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),af=function(){function e(e){this.element=sf(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),lf=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),cf=cd,uf={isServer:!cd,useCSSOMInjection:!ud},hf=function(){function e(e,t,n){void 0===e&&(e=dd),void 0===t&&(t={});var r=this;this.options=ah(ah({},uf),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&cd&&cf&&(cf=!1,function(e){for(var t=document.querySelectorAll(ef),n=0,r=t.length;n<r;n++){var i=t[n];i&&"active"!==i.getAttribute(ld)&&(rf(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this)),Kd(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i,s=(i=n,Yd.get(i));if(void 0===s)return"continue";var o=e.names.get(s),a=t.getGroup(n);if(void 0===o||0===a.length)return"continue";var l="".concat(ld,".g").concat(n,'[id="').concat(s,'"]'),c="";void 0!==o&&o.forEach((function(e){e.length>0&&(c+="".concat(e,","))})),r+="".concat(a).concat(l,'{content:"').concat(c,'"}').concat("/*!sc*/\n")},s=0;s<n;s++)i(s);return r}(r)}))}return e.registerId=function(e){return Jd(e)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(ah(ah({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=this.options,t=e.useCSSOMInjection,n=e.target,r=e.isServer?new lf(n):t?new of(n):new af(n),new Gd(r)));var e,t,n,r},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Jd(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Jd(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Jd(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),df=/&/g,ff=/^\s*\/\/.*$/gm;function pf(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=pf(e.children,t)),e}))}var mf=new hf,gf=function(e){var t,n,r,i=void 0===e?dd:e,s=i.options,o=void 0===s?dd:s,a=i.plugins,l=void 0===a?hd:a,c=function(e,r,i){return i===n||i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===ph&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(df,n).replace(r,c))})),o.prefix&&u.push(od),u.push(sd);var h=function(e,i,s,a){void 0===i&&(i=""),void 0===s&&(s=""),void 0===a&&(a="&"),t=a,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(ff,""),c=Jh(s||i?"".concat(s," ").concat(i," { ").concat(l," }"):l);o.namespace&&(c=pf(c,o.namespace));var h,d,f,p=[];return id(c,(h=u.concat((f=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&f(e)})),d=Ah(h),function(e,t,n,r){for(var i="",s=0;s<d;s++)i+=h[s](e,t,n,r)||"";return i})),p};return h.hash=l.length?l.reduce((function(e,t){return t.name||Wd(15),kd(e,t.name)}),5381).toString():"",h}(),yf=V.createContext({shouldForwardProp:void 0,styleSheet:mf,stylis:gf});function vf(){return z.useContext(yf)}yf.Consumer,V.createContext(void 0);var wf=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=gf);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Kd(this,(function(){throw Wd(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=gf),this.name+e.hash},e}(),bf=function(e){return e>="A"&&e<="Z"};function kf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;bf(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var _f=function(e){return null==e||!1===e||""===e},Ef=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!_f(s)&&(Array.isArray(s)&&s.isCss||zd(s)?r.push("".concat(kf(i),":"),s,";"):qd(s)?r.push.apply(r,ch(ch(["".concat(i," {")],Ef(s),!1),["}"],!1)):r.push("".concat(kf(i),": ").concat((t=i,null==(n=s)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ad||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Sf(e,t,n,r){return _f(e)?[]:Vd(e)?[".".concat(e.styledComponentId)]:zd(e)?!zd(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Sf(e(t),t,n,r):e instanceof wf?n?(e.inject(n,r),[e.getName(r)]):[e]:qd(e)?Ef(e):Array.isArray(e)?Array.prototype.concat.apply(hd,e.map((function(e){return Sf(e,t,n,r)}))):[e.toString()];var i}var xf=_d("6.0.7"),Cf=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&function(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(zd(n)&&!Vd(n))return!1}return!0}(e),this.componentId=t,this.baseHash=kd(xf,t),this.baseStyle=n,hf.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Bd(r,this.staticRulesId);else{var i=$d(Sf(this.rules,e,t,n)),s=wd(kd(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,s)){var o=n(i,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,o)}r=Bd(r,s),this.staticRulesId=s}else{for(var a=kd(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var h=$d(Sf(u,e,t,n));a=kd(a,h),l+=h}}if(l){var d=wd(a>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,n(l,".".concat(d),void 0,this.componentId)),r=Bd(r,d)}}return r},e}(),Tf=V.createContext(void 0);Tf.Consumer;var If={};function Af(e,t,n){var r,i=Vd(e),s=e,o=!Sd(e),a=t.attrs,l=void 0===a?hd:a,c=t.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":gd(e);If[n]=(If[n]||0)+1;var r="".concat(n,"-").concat(Ed("6.0.7"+n+If[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):c,h=t.displayName;void 0===h&&(Sd(r=e)?"styled.".concat(r):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(r),")"));var d=t.displayName&&t.componentId?"".concat(gd(t.displayName),"-").concat(t.componentId):t.componentId||u,f=i&&s.attrs?s.attrs.concat(l).filter(Boolean):l,p=t.shouldForwardProp;if(i&&s.shouldForwardProp){var m=s.shouldForwardProp;if(t.shouldForwardProp){var g=t.shouldForwardProp;p=function(e,t){return m(e,t)&&g(e,t)}}else p=m}var y=new Cf(n,d,i?s.componentStyle:void 0);var v=V.forwardRef((function(e,t){return function(e,t,n){var r=e.attrs,i=e.componentStyle,s=e.defaultProps,o=e.foldedComponentIds,a=e.styledComponentId,l=e.target,c=V.useContext(Tf),u=vf(),h=e.shouldForwardProp||u.shouldForwardProp,d=function(e,t,n){for(var r,i=ah(ah({},t),{className:void 0,theme:n}),s=0;s<e.length;s+=1){var o=zd(r=e[s])?r(i):r;for(var a in o)i[a]="className"===a?Bd(i[a],o[a]):"style"===a?ah(ah({},i[a]),o[a]):o[a]}return t.className&&(i.className=Bd(i.className,t.className)),i}(r,t,function(e,t,n){return void 0===n&&(n=dd),e.theme!==n.theme&&e.theme||t||n.theme}(t,c,s)||dd),f=d.as||l,p={};for(var m in d)void 0===d[m]||"$"===m[0]||"as"===m||"theme"===m||("forwardedAs"===m?p.as=d.forwardedAs:h&&!h(m,f)||(p[m]=d[m]));var g,y,v,w=(g=i,y=d,v=vf(),g.generateAndInjectStyles(y,v.styleSheet,v.stylis)),b=Bd(o,a);return w&&(b+=" "+w),d.className&&(b+=" "+d.className),p[Sd(f)&&!fd.has(f)?"class":"className"]=b,p.ref=n,z.createElement(f,p)}(v,e,t)}));return v.attrs=f,v.componentStyle=y,v.shouldForwardProp=p,v.foldedComponentIds=i?Bd(s.foldedComponentIds,s.styledComponentId):"",v.styledComponentId=d,v.target=i?s.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)Hd(e,i[r],!0);return e}({},s.defaultProps,e):e}}),Kd(v,(function(){return".".concat(v.styledComponentId)})),o&&Ud(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Pf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Nf=function(e){return Object.assign(e,{isCss:!0})};function Rf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(zd(e)||qd(e))return Nf(Sf(Pf(hd,ch([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Sf(r):Nf(Sf(Pf(r,t)))}function Of(e,t,n){if(void 0===n&&(n=dd),!t)throw Wd(1,t);var r=function(r){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,Rf.apply(void 0,ch([r],i,!1)))};return r.attrs=function(r){return Of(e,t,ah(ah({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Of(e,t,ah(ah({},n),r))},r}var Df=function(e){return Of(Af,e)},Lf=Df;function Mf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=$d(Rf.apply(void 0,ch([e],t,!1))),i=Ed(r);return new wf(i,r)}function jf(e){return Y.jsx(Ff,{children:Y.jsxs("div",{onClick:e.handleClick,className:"icon nav-icon-5 "+(e.clicked?"open":""),children:[Y.jsx("span",{}),Y.jsx("span",{}),Y.jsx("span",{})]})})}fd.forEach((function(e){Lf[e]=Df(e)}));const Ff=Lf.div`
/* nav-icon-5 */
.nav-icon-5{
  width: 35px;
  height: 30px;
  margin: 10px 10px;
  position: relative;
  cursor: pointer;
  display: inline-block;
}
.nav-icon-5 span{
  background-color:#fff;
  position: absolute;
  border-radius: 2px;
  transition: .3s cubic-bezier(.8, .5, .2, 1.4);
  width:100%;
  height: 4px;
  transition-duration: 500ms
}
.nav-icon-5 span:nth-child(1){
  top:0px;
  left: 0px;
}
.nav-icon-5 span:nth-child(2){
  top:13px;
  left: 0px;
  opacity:1;
}
.nav-icon-5 span:nth-child(3){
  bottom:0px;
  left: 0px;
}
.nav-icon-5:not(.open):hover span:nth-child(1){
  transform: rotate(-3deg) scaleY(1.1);
}
.nav-icon-5:not(.open):hover span:nth-child(2){
  transform: rotate(3deg) scaleY(1.1);
}
.nav-icon-5:not(.open):hover span:nth-child(3){
  transform: rotate(-4deg) scaleY(1.1);
}
.nav-icon-5.open span:nth-child(1){
  transform: rotate(45deg);
  top: 13px;
}
.nav-icon-5.open span:nth-child(2){
  opacity:0;
}
.nav-icon-5.open span:nth-child(3){
  transform: rotate(-45deg);
  top: 13px;
}

`,Uf="/assets/Logo-8da956ea.png";
/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function zf(){return zf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zf.apply(this,arguments)}var Vf,Bf;(Bf=Vf||(Vf={})).Pop="POP",Bf.Push="PUSH",Bf.Replace="REPLACE";const $f="popstate";function qf(e){return void 0===e&&(e={}),function(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Vf.Pop,l=null,c=u();null==c&&(c=0,o.replaceState(zf({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function h(){a=Vf.Pop;let e=u(),t=null==e?null:e-c;c=e,l&&l({action:a,location:m.location,delta:t})}function d(e,t){a=Vf.Push;let r=Gf(m.location,e,t);n&&n(r,e),c=u()+1;let h=Wf(r,c),d=m.createHref(r);try{o.pushState(h,"",d)}catch(f){if(f instanceof DOMException&&"DataCloneError"===f.name)throw f;i.location.assign(d)}s&&l&&l({action:a,location:m.location,delta:1})}function f(e,t){a=Vf.Replace;let r=Gf(m.location,e,t);n&&n(r,e),c=u();let i=Wf(r,c),h=m.createHref(r);o.replaceState(i,"",h),s&&l&&l({action:a,location:m.location,delta:0})}function p(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:Qf(e);return Hf(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}let m={get action(){return a},get location(){return e(i,o)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener($f,h),l=e,()=>{i.removeEventListener($f,h),l=null}},createHref:e=>t(i,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:d,replace:f,go:e=>o.go(e)};return m}((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return Gf("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:Qf(t)}),null,e)}function Hf(e,t){if(!1===e||null==e)throw new Error(t)}function Kf(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function Wf(e,t){return{usr:e.state,key:e.key,idx:t}}function Gf(e,t,n,r){return void 0===n&&(n=null),zf({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?Yf(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function Qf(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function Yf(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var Xf,Jf;function Zf(e,t,n){void 0===n&&(n="/");let r=fp(("string"==typeof t?Yf(t):t).pathname||"/",n);if(null==r)return null;let i=ep(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let s=null;for(let o=0;null==s&&o<i.length;++o)s=up(i[o],dp(r));return s}function ep(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,s)=>{let o={relativePath:void 0===s?e.path||"":s,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};o.relativePath.startsWith("/")&&(Hf(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let a=yp([r,o.relativePath]),l=n.concat(o);e.children&&e.children.length>0&&(Hf(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+a+'".'),ep(e.children,t,l,a)),(null!=e.path||e.index)&&t.push({path:a,score:cp(a,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of tp(e.path))i(e,t,r);else i(e,t)})),t}function tp(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(0===r.length)return i?[s,""]:[s];let o=tp(r.join("/")),a=[];return a.push(...o.map((e=>""===e?s:[s,e].join("/")))),i&&a.push(...o),a.map((t=>e.startsWith("/")&&""===t?"/":t))}(Jf=Xf||(Xf={})).data="data",Jf.deferred="deferred",Jf.redirect="redirect",Jf.error="error";const np=/^:\w+$/,rp=3,ip=2,sp=1,op=10,ap=-2,lp=e=>"*"===e;function cp(e,t){let n=e.split("/"),r=n.length;return n.some(lp)&&(r+=ap),t&&(r+=ip),n.filter((e=>!lp(e))).reduce(((e,t)=>e+(np.test(t)?rp:""===t?sp:op)),r)}function up(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let e=n[o],a=o===n.length-1,l="/"===i?t:t.slice(i.length)||"/",c=hp({path:e.relativePath,caseSensitive:e.caseSensitive,end:a},l);if(!c)return null;Object.assign(r,c.params);let u=e.route;s.push({params:r,pathname:yp([i,c.pathname]),pathnameBase:vp(yp([i,c.pathnameBase])),route:u}),"/"!==c.pathnameBase&&(i=yp([i,c.pathnameBase]))}return s}function hp(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);Kf("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(r.push(t),"/([^\\/]+)")));e.endsWith("*")?(r.push("*"),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let s=new RegExp(i,t?void 0:"i");return[s,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce(((e,t,n)=>{if("*"===t){let e=a[n]||"";o=s.slice(0,s.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return Kf(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(a[n]||"",t),e}),{}),pathname:s,pathnameBase:o,pattern:e}}function dp(e){try{return decodeURI(e)}catch(t){return Kf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function fp(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function pp(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function mp(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function gp(e,t,n,r){let i;void 0===r&&(r=!1),"string"==typeof e?i=Yf(e):(i=zf({},e),Hf(!i.pathname||!i.pathname.includes("?"),pp("?","pathname","search",i)),Hf(!i.pathname||!i.pathname.includes("#"),pp("#","pathname","hash",i)),Hf(!i.search||!i.search.includes("#"),pp("#","search","hash",i)));let s,o=""===e||""===i.pathname,a=o?"/":i.pathname;if(r||null==a)s=n;else{let e=t.length-1;if(a.startsWith("..")){let t=a.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}s=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"==typeof e?Yf(e):e,s=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:s,search:wp(r),hash:bp(i)}}(i,s),c=a&&"/"!==a&&a.endsWith("/"),u=(o||"."===a)&&n.endsWith("/");return l.pathname.endsWith("/")||!c&&!u||(l.pathname+="/"),l}const yp=e=>e.join("/").replace(/\/\/+/g,"/"),vp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),wp=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",bp=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";const kp=["post","put","patch","delete"];new Set(kp);const _p=["get",...kp];
/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ep(){return Ep=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ep.apply(this,arguments)}new Set(_p);const Sp=z.createContext(null),xp=z.createContext(null),Cp=z.createContext(null),Tp=z.createContext(null),Ip=z.createContext({outlet:null,matches:[],isDataRoute:!1}),Ap=z.createContext(null);function Pp(){return null!=z.useContext(Tp)}function Np(){return Pp()||Hf(!1),z.useContext(Tp).location}function Rp(e){z.useContext(Cp).static||z.useLayoutEffect(e)}function Op(){let{isDataRoute:e}=z.useContext(Ip);return e?function(){let{router:e}=function(e){let t=z.useContext(Sp);return t||Hf(!1),t}(Vp.UseNavigateStable),t=$p(Bp.UseNavigateStable),n=z.useRef(!1);return Rp((()=>{n.current=!0})),z.useCallback((function(r,i){void 0===i&&(i={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,Ep({fromRouteId:t},i)))}),[e,t])}():function(){Pp()||Hf(!1);let e=z.useContext(Sp),{basename:t,navigator:n}=z.useContext(Cp),{matches:r}=z.useContext(Ip),{pathname:i}=Np(),s=JSON.stringify(mp(r).map((e=>e.pathnameBase))),o=z.useRef(!1);return Rp((()=>{o.current=!0})),z.useCallback((function(r,a){if(void 0===a&&(a={}),!o.current)return;if("number"==typeof r)return void n.go(r);let l=gp(r,JSON.parse(s),i,"path"===a.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:yp([t,l.pathname])),(a.replace?n.replace:n.push)(l,a.state,a)}),[t,n,s,i,e])}()}function Dp(){let{matches:e}=z.useContext(Ip),t=e[e.length-1];return t?t.params:{}}function Lp(e,t){let{relative:n}=void 0===t?{}:t,{matches:r}=z.useContext(Ip),{pathname:i}=Np(),s=JSON.stringify(mp(r).map((e=>e.pathnameBase)));return z.useMemo((()=>gp(e,JSON.parse(s),i,"path"===n)),[e,s,i,n])}function Mp(e,t){return function(e,t,n){Pp()||Hf(!1);let{navigator:r}=z.useContext(Cp),{matches:i}=z.useContext(Ip),s=i[i.length-1],o=s?s.params:{};!s||s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l,c=Np();if(t){var u;let e="string"==typeof t?Yf(t):t;"/"===a||(null==(u=e.pathname)?void 0:u.startsWith(a))||Hf(!1),l=e}else l=c;let h=l.pathname||"/",d="/"===a?h:h.slice(a.length)||"/",f=Zf(e,{pathname:d}),p=function(e,t,n){var r,i;void 0===t&&(t=[]);void 0===n&&(n=null);if(null==e){if(null==(i=n)||!i.errors)return null;e=n.matches}let s=e,o=null==(r=n)?void 0:r.errors;if(null!=o){let e=s.findIndex((e=>e.route.id&&(null==o?void 0:o[e.route.id])));e>=0||Hf(!1),s=s.slice(0,Math.min(s.length,e+1))}return s.reduceRight(((e,r,i)=>{let a=r.route.id?null==o?void 0:o[r.route.id]:null,l=null;n&&(l=r.route.errorElement||Fp);let c=t.concat(s.slice(0,i+1)),u=()=>{let t;return t=a?l:r.route.Component?z.createElement(r.route.Component,null):r.route.element?r.route.element:e,z.createElement(zp,{match:r,routeContext:{outlet:e,matches:c,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===i)?z.createElement(Up,{location:n.location,revalidation:n.revalidation,component:l,error:a,children:u(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):u()}),null)}(f&&f.map((e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:yp([a,r.encodeLocation?r.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?a:yp([a,r.encodeLocation?r.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),i,n);if(t&&p)return z.createElement(Tp.Provider,{value:{location:Ep({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:Vf.Pop}},p);return p}(e,t)}function jp(){let e=function(){var e;let t=z.useContext(Ap),n=function(e){let t=z.useContext(xp);return t||Hf(!1),t}(Bp.UseRouteError),r=$p(Bp.UseRouteError);if(t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},t),n?z.createElement("pre",{style:r},n):null,null)}const Fp=z.createElement(jp,null);class Up extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?z.createElement(Ip.Provider,{value:this.props.routeContext},z.createElement(Ap.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zp(e){let{routeContext:t,match:n,children:r}=e,i=z.useContext(Sp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(Ip.Provider,{value:t},r)}var Vp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Vp||{}),Bp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Bp||{});function $p(e){let t=function(e){let t=z.useContext(Ip);return t||Hf(!1),t}(),n=t.matches[t.matches.length-1];return n.route.id||Hf(!1),n.route.id}function qp(e){Hf(!1)}function Hp(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Vf.Pop,navigator:s,static:o=!1}=e;Pp()&&Hf(!1);let a=t.replace(/^\/*/,"/"),l=z.useMemo((()=>({basename:a,navigator:s,static:o})),[a,s,o]);"string"==typeof r&&(r=Yf(r));let{pathname:c="/",search:u="",hash:h="",state:d=null,key:f="default"}=r,p=z.useMemo((()=>{let e=fp(c,a);return null==e?null:{location:{pathname:e,search:u,hash:h,state:d,key:f},navigationType:i}}),[a,c,u,h,d,f,i]);return null==p?null:z.createElement(Cp.Provider,{value:l},z.createElement(Tp.Provider,{children:n,value:p}))}function Kp(e){let{children:t,location:n}=e;return Mp(Wp(t),n)}function Wp(e,t){void 0===t&&(t=[]);let n=[];return z.Children.forEach(e,((e,r)=>{if(!z.isValidElement(e))return;let i=[...t,r];if(e.type===z.Fragment)return void n.push.apply(n,Wp(e.props.children,i));e.type!==qp&&Hf(!1),e.props.index&&e.props.children&&Hf(!1);let s={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(s.children=Wp(e.props.children,i)),n.push(s)})),n}
/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gp(){return Gp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gp.apply(this,arguments)}function Qp(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}new Promise((()=>{}));const Yp=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Xp=["aria-current","caseSensitive","className","end","style","to","children"],Jp=B.startTransition;function Zp(e){let{basename:t,children:n,future:r,window:i}=e,s=z.useRef();null==s.current&&(s.current=qf({window:i,v5Compat:!0}));let o=s.current,[a,l]=z.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},u=z.useCallback((e=>{c&&Jp?Jp((()=>l(e))):l(e)}),[l,c]);return z.useLayoutEffect((()=>o.listen(u)),[o,u]),z.createElement(Hp,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const em="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,tm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nm=z.forwardRef((function(e,t){let n,{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u}=e,h=Qp(e,Yp),{basename:d}=z.useContext(Cp),f=!1;if("string"==typeof c&&tm.test(c)&&(n=c,em))try{let e=new URL(window.location.href),t=c.startsWith("//")?new URL(e.protocol+c):new URL(c),n=fp(t.pathname,d);t.origin===e.origin&&null!=n?c=n+t.search+t.hash:f=!0}catch(g){}let p=function(e,t){let{relative:n}=void 0===t?{}:t;Pp()||Hf(!1);let{basename:r,navigator:i}=z.useContext(Cp),{hash:s,pathname:o,search:a}=Lp(e,{relative:n}),l=o;return"/"!==r&&(l="/"===o?r:yp([r,o])),i.createHref({pathname:l,search:a,hash:s})}(c,{relative:i}),m=function(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=void 0===t?{}:t,a=Op(),l=Np(),c=Lp(e,{relative:o});return z.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:Qf(l)===Qf(c);a(e,{replace:n,state:i,preventScrollReset:s,relative:o})}}),[l,a,c,r,i,n,e,s,o])}(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:i});return z.createElement("a",Gp({},h,{href:n||p,onClick:f||s?r:function(e){r&&r(e),e.defaultPrevented||m(e)},ref:t,target:l}))})),rm=z.forwardRef((function(e,t){let{"aria-current":n="page",caseSensitive:r=!1,className:i="",end:s=!1,style:o,to:a,children:l}=e,c=Qp(e,Xp),u=Lp(a,{relative:c.relative}),h=Np(),d=z.useContext(xp),{navigator:f}=z.useContext(Cp),p=f.encodeLocation?f.encodeLocation(u).pathname:u.pathname,m=h.pathname,g=d&&d.navigation&&d.navigation.location?d.navigation.location.pathname:null;r||(m=m.toLowerCase(),g=g?g.toLowerCase():null,p=p.toLowerCase());let y,v=m===p||!s&&m.startsWith(p)&&"/"===m.charAt(p.length),w=null!=g&&(g===p||!s&&g.startsWith(p)&&"/"===g.charAt(p.length)),b=v?n:void 0;y="function"==typeof i?i({isActive:v,isPending:w}):[i,v?"active":null,w?"pending":null].filter(Boolean).join(" ");let k="function"==typeof o?o({isActive:v,isPending:w}):o;return z.createElement(nm,Gp({},c,{"aria-current":b,className:y,ref:t,style:k,to:a}),"function"==typeof l?l({isActive:v,isPending:w}):l)}));var im,sm,om,am;(sm=im||(im={})).UseScrollRestoration="useScrollRestoration",sm.UseSubmit="useSubmit",sm.UseSubmitFetcher="useSubmitFetcher",sm.UseFetcher="useFetcher",(am=om||(om={})).UseFetchers="useFetchers",am.UseScrollRestoration="useScrollRestoration";const lm=z.createContext();function cm({children:e}){const[t,n]=z.useState([]);return Y.jsx(lm.Provider,{value:{addItem:e=>{const r=t.findIndex((t=>t.id===e.id));if(r>=0){const i=[...t];return i[r].quantity+=e.quantity,n(i)}n((t=>[...t,{...e}]))},removeItem:(e,r=0)=>{const i=t.findIndex((t=>t.id===e));if(-1!==i){const e=[...t];r>0&&e[i].quantity>r?e[i].quantity-=r:e.splice(i,1),n(e)}},clear:()=>{n([])},isInCart:e=>t.some((t=>t.id===e)),cartItems:t,getTotalPrice:()=>t.reduce(((e,t)=>e+t.price*t.quantity),0)},children:e})}function um(){const{cartItems:e}=z.useContext(lm),[t,n]=z.useState(0);return z.useEffect((()=>{const t=e.reduce(((e,t)=>e+t.quantity),0);n(t)}),[e]),Y.jsx(nm,{to:"/cart",children:Y.jsxs(hm,{children:[Y.jsxs("div",{className:"animated-container",children:[Y.jsx("div",{className:"cart-wrapper",children:Y.jsx("div",{className:"cart-container"})}),Y.jsx("div",{className:"cart-handle-wrapper",children:Y.jsx("div",{className:"cart-handle"})}),Y.jsx("div",{className:"cart-item"})]}),Y.jsxs("div",{className:"cart",children:[Y.jsx("span",{className:"count",children:t}),Y.jsx("i",{className:"material-icons"})]})]})})}const hm=Lf.div`
  .animated-container {
    position: relative;
    margin: 0;
    transform: scale(0.5);
  }
  .count {
    position: absolute;
    top: -18px;
    left: 12px; 
    background-color: #ffffff; 
    color: #000000; 
    width: 16px;
    height: 16px;
    line-height: 16px;
    border-radius: 50%;
    text-align: center;
    font-size: 11px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  }
  .cart-wrapper {
    width: 55px;
    height: 40px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow: hidden;
  }

  .cart-container {
    width: 59px;
    height: 45px;
    box-sizing: border-box;
    position: relative;
    left: -2px;
    border-bottom: 50px solid red;
    border-left: 6px inset transparent;
    border-right: 6px inset transparent;
    animation: border 1s infinite;
  }

  .cart-handle {
    width: 18px;
    height: 8px;
    border: 4px solid red;
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    animation: handle-border 1s infinite;
  }
  .cart-handle-wrapper {
    position: absolute;
    top: -9px;
    left: 15px;
    height: 9px;
    overflow: hidden;
    transform-origin: bottom center;
    animation: handle 1s infinite;
    transform-style: preserve-3d;
  }
  .cart-item {
    background-color: #000;
    width: 30px;
    height: 30px;
    transform: translate(0px, 0px) rotate(-30deg) scale(0.6);
    border-radius: 3px;
    position: absolute;
    top: -55px;
    left: 12px;
    z-index: -1;
    animation: item 1s infinite linear;
    opacity: 0;
  }
  @keyframes border {
    0% {
      border-left: 10px inset transparent;
      border-right: 10px inset transparent;
    }
    25% {
      border-left: 0px inset transparent;
      border-right: 0px inset transparent;
    }

    75% {
      border-left: 0px inset transparent;
      border-right: 0px inset transparent;
    }
  }
  @keyframes handle {
    0% {
      transform: rotateX(0);
    }
    35% {
      transform: rotateX(-180deg);
    }

    75% {
      transform: rotateX(-180deg);
    }
  }

  @keyframes handle-border {
    0% {
      border-color: red;
    }
    25% {
      border-color: white;
    }

    75% {
      border-color: white;
    }
  }

  @keyframes item {
    0% {
      opacity: 0;
      transform: translate(0px, 0px) rotate(-40deg) scale(1.5);
    }
    20% {
      opacity: 1;
    }
    35% {
      transform: translate(0px, 15px) rotate(0deg) scale(0.6);
      opacity: 1;
    }
    60% {
      transform: translate(0px, 55px) rotate(0deg) scale(0.6);
      opacity: 1;
    }
    100% {
      transform: translate(0px, 55px) rotate(0deg) scale(0.6);
    }
  }

  .count {
    position: absolute;
    top: -18px; /* Ajusta esta distancia según necesites */
    left: 12px; /* Ajusta esta distancia según necesites */
    background-color: #d60b28;
    width: 16px;
    height: 16px;
    line-height: 16px;
    border-radius: 50%;
    text-align: center;
    font-size: 11px;
    font-weight: bold;
    color: white;
    font-family: 'Roboto', sans-serif;
  }
`;function dm(){const[e,t]=z.useState(!1),[n,r]=z.useState(!1);return z.useEffect((()=>{const e=localStorage.getItem("isAuthenticated");r("true"===e)}),[]),Y.jsx(Y.Fragment,{children:Y.jsxs(fm,{children:[Y.jsx(nm,{to:"/",children:Y.jsx(mm,{src:Uf,alt:"Logo"})}),Y.jsx("h2",{children:"Gojo Store"}),Y.jsxs("div",{className:"links "+(e?"active":""),children:[Y.jsx(rm,{to:"/category/manga",children:"Mangas"}),Y.jsx(rm,{to:"/category/funkopop",children:"Funkopop"}),Y.jsx(rm,{to:"/category/hoodie",children:"Hoodies"}),n?Y.jsx(Y.Fragment,{children:Y.jsx(rm,{to:"/login",children:"Profile"})}):Y.jsx(rm,{to:"/login",children:"Login"})]}),Y.jsx(gm,{children:Y.jsx(um,{})}),Y.jsx("div",{className:"burguer",children:Y.jsx(jf,{clicked:e,handleClick:()=>{t(!e)}})}),Y.jsx(pm,{className:"initial "+(e?"active":"")})]})})}const fm=Lf.nav`
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`,pm=Lf.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`,mm=Lf.img`
  max-height: 70px;
`,gm=Lf.div`
  position: relative;
  display: flex;
  align-items: center;
`;function ym({productos:e}){return Y.jsxs(vm,{children:[Y.jsx(wm,{children:Y.jsx(bm,{src:e.image,alt:e.name,loading:"lazy"})}),Y.jsx(_m,{children:e.name}),Y.jsx(km,{to:`/item/${e.id}`,children:"Más detalles"})]})}const vm=Lf.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Efecto de zoom al hacer hover */
  }
`,wm=Lf.div`
  width: 100%;
  max-height: 200px;
  overflow: hidden;
  margin-bottom: 10px;
`,bm=Lf.img`
  max-width: 100%;
  height: auto;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1); /* Efecto de zoom en la imagen al hacer hover */
  }
`,km=Lf(nm)`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  margin-top: 10px;
`,_m=Lf.h2`
  font-size: 1.2rem;
  margin: 0;
`;function Em({productos:e}){return Y.jsx(Sm,{children:e.map((e=>Y.jsxs(xm,{children:[Y.jsx(Cm,{src:e.image,alt:e.name,loading:"lazy"}),Y.jsx(Tm,{children:Y.jsx(ym,{productos:e})})]},e.id)))})}const Sm=Lf.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`,xm=Lf.div`
  background-color: #f7f7f7;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 100%;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.05); /* Escala el contenedor al hacer hover */
  }
`,Cm=Lf.img`
  max-width: 90%;
  height: auto; /* Esto mantendrá la relación de aspecto de la imagen */
  margin-bottom: 10px;
  width: 50%; /* Agrega este atributo width para asegurarte de que la imagen llene su contenedor */
  max-height: 300px; /* Establece una altura máxima para que las imágenes no sean demasiado grandes */
`,Tm=Lf.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: none; /* Oculta la información del producto por defecto */

  ${xm}:hover & {
    display: block; /* Muestra la información del producto al hacer hover */
  }
`
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
 */,Im=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Am={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,l=a?e[i+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Im(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const o=i<e.length?n[e.charAt(i)]:64;++i;const a=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==o||null==a)throw new Pm;const l=t<<2|s>>4;if(r.push(l),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Pm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nm=function(e){return function(e){const t=Im(e);return Am.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Rm=function(e){try{return Am.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
const Om=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Dm=()=>{try{return Om()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&Rm(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Lm=e=>{var t,n;return null===(n=null===(t=Dm())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Mm=e=>{const t=Lm(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},jm=()=>{var e;return null===(e=Dm())||void 0===e?void 0:e.config},Fm=e=>{var t;return null===(t=Dm())||void 0===t?void 0:t[`_${e}`]};
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
class Um{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
function zm(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class Vm extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Vm.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bm.prototype.create)}}class Bm{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace($m,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new Vm(r,o,n)}}const $m=/\{\$([^}]+)}/g;function qm(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(Hm(n)&&Hm(s)){if(!qm(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hm(e){return null!==e&&"object"==typeof e}
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
 */function Km(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Wm(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function Gm(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class Qm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Ym),void 0===r.error&&(r.error=Ym),void 0===r.complete&&(r.complete=Ym);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Ym(){}
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
 */function Xm(e){return e&&e._delegate?e._delegate:e}class Jm{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const Zm="[DEFAULT]";
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
 */class eg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Um;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:Zm})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=Zm){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Zm){return this.instances.has(e)}getOptions(e=Zm){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===Zm?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e=Zm){return this.component?this.component.multipleInstances?e:Zm:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class tg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new eg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */var ng,rg;(rg=ng||(ng={}))[rg.DEBUG=0]="DEBUG",rg[rg.VERBOSE=1]="VERBOSE",rg[rg.INFO=2]="INFO",rg[rg.WARN=3]="WARN",rg[rg.ERROR=4]="ERROR",rg[rg.SILENT=5]="SILENT";const ig={debug:ng.DEBUG,verbose:ng.VERBOSE,info:ng.INFO,warn:ng.WARN,error:ng.ERROR,silent:ng.SILENT},sg=ng.INFO,og={[ng.DEBUG]:"log",[ng.VERBOSE]:"log",[ng.INFO]:"info",[ng.WARN]:"warn",[ng.ERROR]:"error"},ag=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=og[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class lg{constructor(e){this.name=e,this._logLevel=sg,this._logHandler=ag,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ng))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ig[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ng.DEBUG,...e),this._logHandler(this,ng.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ng.VERBOSE,...e),this._logHandler(this,ng.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ng.INFO,...e),this._logHandler(this,ng.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ng.WARN,...e),this._logHandler(this,ng.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ng.ERROR,...e),this._logHandler(this,ng.ERROR,...e)}}const cg=(e,t)=>t.some((t=>e instanceof t));let ug,hg;const dg=new WeakMap,fg=new WeakMap,pg=new WeakMap,mg=new WeakMap,gg=new WeakMap;let yg={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return fg.get(e);if("objectStoreNames"===t)return e.objectStoreNames||pg.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bg(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function vg(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(hg||(hg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(kg(this),t),bg(dg.get(this))}:function(...t){return bg(e.apply(kg(this),t))}:function(t,...n){const r=e.call(kg(this),t,...n);return pg.set(r,t.sort?t.sort():[t]),bg(r)}}function wg(e){return"function"==typeof e?vg(e):(e instanceof IDBTransaction&&function(e){if(fg.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));fg.set(e,t)}(e),cg(e,ug||(ug=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,yg):e)}function bg(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(bg(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&dg.set(t,e)})).catch((()=>{})),gg.set(t,e),t}(e);if(mg.has(e))return mg.get(e);const t=wg(e);return t!==e&&(mg.set(e,t),gg.set(t,e)),t}const kg=e=>gg.get(e);const _g=["get","getKey","getAll","getAllKeys","count"],Eg=["put","add","delete","clear"],Sg=new Map;function xg(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Sg.get(t))return Sg.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Eg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!_g.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Sg.set(t,s),s}yg=(e=>({...e,get:(t,n,r)=>xg(t,n)||e.get(t,n,r),has:(t,n)=>!!xg(t,n)||e.has(t,n)}))(yg);
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
class Cg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Tg="@firebase/app",Ig="0.9.19",Ag=new lg("@firebase/app"),Pg="[DEFAULT]",Ng={[Tg]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Rg=new Map,Og=new Map;function Dg(e,t){try{e.container.addComponent(t)}catch(n){Ag.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Lg(e){const t=e.name;if(Og.has(t))return Ag.debug(`There were multiple attempts to register component ${t}.`),!1;Og.set(t,e);for(const n of Rg.values())Dg(n,e);return!0}function Mg(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
 */const jg=new Bm("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Fg{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Jm("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jg.create("app-deleted",{appName:this._name})}}
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
 */const Ug="10.4.0";function zg(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Pg,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw jg.create("bad-app-name",{appName:String(i)});if(n||(n=jm()),!n)throw jg.create("no-options");const s=Rg.get(i);if(s){if(qm(n,s.options)&&qm(r,s.config))return s;throw jg.create("duplicate-app",{appName:i})}const o=new tg(i);for(const l of Og.values())o.addComponent(l);const a=new Fg(n,r,o);return Rg.set(i,a),a}function Vg(e=Pg){const t=Rg.get(e);if(!t&&e===Pg&&jm())return zg();if(!t)throw jg.create("no-app",{appName:e});return t}function Bg(e,t,n){var r;let i=null!==(r=Ng[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ag.warn(e.join(" "))}Lg(new Jm(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
 */const $g="firebase-heartbeat-database",qg=1,Hg="firebase-heartbeat-store";let Kg=null;function Wg(){return Kg||(Kg=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=bg(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(bg(o.result),e.oldVersion,e.newVersion,bg(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}($g,qg,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Hg)}}).catch((e=>{throw jg.create("idb-open",{originalErrorMessage:e.message})}))),Kg}async function Gg(e,t){try{const n=(await Wg()).transaction(Hg,"readwrite"),r=n.objectStore(Hg);await r.put(t,Qg(e)),await n.done}catch(n){if(n instanceof Vm)Ag.warn(n.message);else{const e=jg.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});Ag.warn(e.message)}}}function Qg(e){return`${e.name}!${e.options.appId}`}
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
 */class Yg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Jg(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Xg();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Xg(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Zg(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Zg(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Nm(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Xg(){return(new Date).toISOString().substring(0,10)}class Jg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await Wg();return await t.transaction(Hg).objectStore(Hg).get(Qg(e))}catch(t){if(t instanceof Vm)Ag.warn(t.message);else{const e=jg.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Ag.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Gg(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Gg(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Zg(e){return Nm(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var ey;ey="",Lg(new Jm("platform-logger",(e=>new Cg(e)),"PRIVATE")),Lg(new Jm("heartbeat",(e=>new Yg(e)),"PRIVATE")),Bg(Tg,Ig,ey),Bg(Tg,Ig,"esm2017"),Bg("fire-js","");var ty,ny="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},ry=ry||{},iy=ny||self;function sy(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function oy(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var ay="closure_uid_"+(1e9*Math.random()>>>0),ly=0;function cy(e,t,n){return e.call.apply(e.bind,arguments)}function uy(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function hy(e,t,n){return(hy=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?cy:uy).apply(null,arguments)}function dy(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function fy(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function py(){this.s=this.s,this.o=this.o}py.prototype.s=!1,py.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),0)&&function(e){Object.prototype.hasOwnProperty.call(e,ay)&&e[ay]||(e[ay]=++ly)}(this)},py.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const my=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function gy(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function yy(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(sy(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function vy(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}vy.prototype.h=function(){this.defaultPrevented=!0};var wy=function(){if(!iy.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{iy.addEventListener("test",(()=>{}),t),iy.removeEventListener("test",(()=>{}),t)}catch(n){}return e}();function by(e){return/^[\s\xa0]*$/.test(e)}function ky(){var e=iy.navigator;return e&&(e=e.userAgent)?e:""}function _y(e){return-1!=ky().indexOf(e)}function Ey(e){return Ey[" "](e),e}Ey[" "]=function(){};var Sy,xy,Cy=_y("Opera"),Ty=_y("Trident")||_y("MSIE"),Iy=_y("Edge"),Ay=Iy||Ty,Py=_y("Gecko")&&!(-1!=ky().toLowerCase().indexOf("webkit")&&!_y("Edge"))&&!(_y("Trident")||_y("MSIE"))&&!_y("Edge"),Ny=-1!=ky().toLowerCase().indexOf("webkit")&&!_y("Edge");function Ry(){var e=iy.document;return e?e.documentMode:void 0}e:{var Oy="",Dy=function(){var e=ky();return Py?/rv:([^\);]+)(\)|;)/.exec(e):Iy?/Edge\/([\d\.]+)/.exec(e):Ty?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):Ny?/WebKit\/(\S+)/.exec(e):Cy?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Dy&&(Oy=Dy?Dy[1]:""),Ty){var Ly=Ry();if(null!=Ly&&Ly>parseFloat(Oy)){Sy=String(Ly);break e}}Sy=Oy}if(iy.document&&Ty){var My=Ry();xy=My||(parseInt(Sy,10)||void 0)}else xy=void 0;var jy=xy;function Fy(e,t){if(vy.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Py){e:{try{Ey(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Uy[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Fy.$.h.call(this)}}fy(Fy,vy);var Uy={2:"touch",3:"pen",4:"mouse"};Fy.prototype.h=function(){Fy.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var zy="closure_listenable_"+(1e6*Math.random()|0),Vy=0;function By(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Vy,this.fa=this.ia=!1}function $y(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function qy(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Hy(e){const t={};for(const n in e)t[n]=e[n];return t}const Ky="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wy(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<Ky.length;t++)n=Ky[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Gy(e){this.src=e,this.g={},this.h=0}function Qy(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=my(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&($y(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Yy(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}Gy.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=Yy(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new By(t,this.src,s,!!r,i)).ia=n,e.push(t)),t};var Xy="closure_lm_"+(1e6*Math.random()|0),Jy={};function Zy(e,t,n,r,i){if(r&&r.once)return tv(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Zy(e,t[s],n,r,i);return null}return n=lv(n),e&&e[zy]?e.O(t,n,oy(r)?!!r.capture:!!r,i):ev(e,t,n,!1,r,i)}function ev(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=oy(i)?!!i.capture:!!i,a=ov(e);if(a||(e[Xy]=a=new Gy(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=sv;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)wy||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(iv(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function tv(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)tv(e,t[s],n,r,i);return null}return n=lv(n),e&&e[zy]?e.P(t,n,oy(r)?!!r.capture:!!r,i):ev(e,t,n,!0,r,i)}function nv(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)nv(e,t[s],n,r,i);else r=oy(r)?!!r.capture:!!r,n=lv(n),e&&e[zy]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Yy(s=e.g[t],n,r,i))&&($y(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=ov(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Yy(t,n,r,i)),(n=-1<e?t[e]:null)&&rv(n))}function rv(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[zy])Qy(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(iv(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ov(t))?(Qy(n,e),0==n.h&&(n.src=null,t[Xy]=null)):$y(e)}}}function iv(e){return e in Jy?Jy[e]:Jy[e]="on"+e}function sv(e,t){if(e.fa)e=!0;else{t=new Fy(t,this);var n=e.listener,r=e.la||e.src;e.ia&&rv(e),e=n.call(r,t)}return e}function ov(e){return(e=e[Xy])instanceof Gy?e:null}var av="__closure_events_fn_"+(1e9*Math.random()>>>0);function lv(e){return"function"==typeof e?e:(e[av]||(e[av]=function(t){return e.handleEvent(t)}),e[av])}function cv(){py.call(this),this.i=new Gy(this),this.S=this,this.J=null}function uv(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new vy(t,e);else if(t instanceof vy)t.target=t.target||e;else{var i=t;Wy(t=new vy(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=hv(o,r,!0,t)&&i}if(i=hv(o=t.g=e,r,!0,t)&&i,i=hv(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=hv(o=t.g=n[s],r,!1,t)&&i}function hv(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Qy(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}fy(cv,py),cv.prototype[zy]=!0,cv.prototype.removeEventListener=function(e,t,n,r){nv(this,e,t,n,r)},cv.prototype.N=function(){if(cv.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)$y(n[r]);delete t.g[e],t.h--}}this.J=null},cv.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},cv.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var dv=iy.JSON.stringify;function fv(){var e=bv;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var pv=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new mv),(e=>e.reset()));class mv{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function gv(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function yv(e){iy.setTimeout((()=>{throw e}),0)}let vv,wv=!1,bv=new class{constructor(){this.h=this.g=null}add(e,t){const n=pv.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},kv=()=>{const e=iy.Promise.resolve(void 0);vv=()=>{e.then(_v)}};var _v=()=>{for(var e;e=fv();){try{e.h.call(e.g)}catch(n){yv(n)}var t=pv;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}wv=!1};function Ev(e,t){cv.call(this),this.h=e||1,this.g=t||iy,this.j=hy(this.qb,this),this.l=Date.now()}function Sv(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function xv(e,t,n){if("function"==typeof e)n&&(e=hy(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=hy(e.handleEvent,e)}return 2147483647<Number(t)?-1:iy.setTimeout(e,t||0)}function Cv(e){e.g=xv((()=>{e.g=null,e.i&&(e.i=!1,Cv(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}fy(Ev,cv),(ty=Ev.prototype).ga=!1,ty.T=null,ty.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),uv(this,"tick"),this.ga&&(Sv(this),this.start()))}},ty.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ty.N=function(){Ev.$.N.call(this),Sv(this),delete this.g};class Tv extends py{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Cv(this)}N(){super.N(),this.g&&(iy.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Iv(e){py.call(this),this.h=e,this.g={}}fy(Iv,py);var Av=[];function Pv(e,t,n,r){Array.isArray(n)||(n&&(Av[0]=n.toString()),n=Av);for(var i=0;i<n.length;i++){var s=Zy(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Nv(e){qy(e.g,(function(e,t){this.g.hasOwnProperty(t)&&rv(e)}),e),e.g={}}function Rv(){this.g=!0}function Ov(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return dv(n)}catch(a){return t}}(e,n)+(r?" "+r:"")}))}Iv.prototype.N=function(){Iv.$.N.call(this),Nv(this)},Iv.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Rv.prototype.Ea=function(){this.g=!1},Rv.prototype.info=function(){};var Dv={},Lv=null;function Mv(){return Lv=Lv||new cv}function jv(e){vy.call(this,Dv.Ta,e)}function Fv(e){const t=Mv();uv(t,new jv(t))}function Uv(e,t){vy.call(this,Dv.STAT_EVENT,e),this.stat=t}function zv(e){const t=Mv();uv(t,new Uv(t,e))}function Vv(e,t){vy.call(this,Dv.Ua,e),this.size=t}function Bv(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return iy.setTimeout((function(){e()}),t)}Dv.Ta="serverreachability",fy(jv,vy),Dv.STAT_EVENT="statevent",fy(Uv,vy),Dv.Ua="timingevent",fy(Vv,vy);var $v={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},qv={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Hv(){}function Kv(e){return e.h||(e.h=e.i())}function Wv(){}Hv.prototype.h=null;var Gv,Qv={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Yv(){vy.call(this,"d")}function Xv(){vy.call(this,"c")}function Jv(){}function Zv(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Iv(this),this.P=tw,e=Ay?125:void 0,this.V=new Ev(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ew}function ew(){this.i=null,this.g="",this.h=!1}fy(Yv,vy),fy(Xv,vy),fy(Jv,Hv),Jv.prototype.g=function(){return new XMLHttpRequest},Jv.prototype.i=function(){return{}},Gv=new Jv;var tw=45e3,nw={},rw={};function iw(e,t,n){e.L=1,e.v=Ew(vw(t)),e.s=n,e.S=!0,sw(e,null)}function sw(e,t){e.G=Date.now(),cw(e),e.A=vw(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Mw(n.i,"t",r),e.C=0,n=e.l.J,e.h=new ew,e.g=Mb(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Tv(hy(e.Pa,e,e.g),e.O)),Pv(e.U,e.g,"readystatechange",e.nb),t=e.I?Hy(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Fv(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function ow(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function aw(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=lw(e,n),r==rw){4==t&&(e.o=4,zv(14),i=!1),Ov(e.j,e.m,null,"[Incomplete Response]");break}if(r==nw){e.o=4,zv(15),Ov(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ov(e.j,e.m,r,null),pw(e,r)}ow(e)&&r!=rw&&r!=nw&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,zv(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ib(t),t.M=!0,zv(11))):(Ov(e.j,e.m,n,"[Invalid Chunked Response]"),fw(e),dw(e))}function lw(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?rw:(n=Number(t.substring(n,r)),isNaN(n)?nw:(r+=1)+n>t.length?rw:(t=t.slice(r,r+n),e.C=r+n,t))}function cw(e){e.Y=Date.now()+e.P,uw(e,e.P)}function uw(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Bv(hy(e.lb,e),t)}function hw(e){e.B&&(iy.clearTimeout(e.B),e.B=null)}function dw(e){0==e.l.H||e.J||Nb(e.l,e)}function fw(e){hw(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Sv(e.V),Nv(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function pw(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||$w(n.i,e)))if(!e.K&&$w(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(c){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;Pb(n),bb(n)}Tb(n),zv(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=Bv(hy(n.ib,n),6e3));if(1>=Bw(n.i)&&n.oa){try{n.oa()}catch(c){}n.oa=void 0}}else Ob(n,11)}else if((e.K||n.g==e)&&Pb(n),!by(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.K=c[1],n.pa=c[2];const t=c[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=c[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(qw(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,_w(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=e;if((r=n).wa=Lb(r,r.J?r.pa:null,r.Y),o.K){Hw(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(hw(a),cw(a)),r.g=o}else Cb(r);0<n.j.length&&_b(n)}else"stop"!=c[0]&&"close"!=c[0]||Ob(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Ob(n,7):wb(n):"noop"!=c[0]&&n.h&&n.h.Aa(c),n.A=0)}Fv()}catch(c){}}function mw(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(sy(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(sy(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(sy(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(ty=Zv.prototype).setTimeout=function(e){this.P=e},ty.nb=function(e){e=e.target;const t=this.M;t&&3==fb(e)?t.l():this.Pa(e)},ty.Pa=function(e){try{if(e==this.g)e:{const u=fb(this.g);var t=this.g.Ia();this.g.da();if(!(3>u)&&(3!=u||Ay||this.g&&(this.h.h||this.g.ja()||pb(this.g)))){this.J||4!=u||7==t||Fv(),hw(this);var n=this.g.da();this.ca=n;t:if(ow(this)){var r=pb(this.g);e="";var i=r.length,s=4==fb(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){fw(this),dw(this);var o="";break t}this.h.i=new iy.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!by(a)){var c=a;break t}}c=null}if(!(n=c)){this.i=!1,this.o=3,zv(12),fw(this),dw(this);break e}Ov(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pw(this,n)}this.S?(aw(this,u,o),Ay&&this.i&&3==u&&(Pv(this.U,this.V,"tick",this.mb),this.V.start())):(Ov(this.j,this.m,o,null),pw(this,o)),4==u&&fw(this),this.i&&!this.J&&(4==u?Nb(this.l,this):(this.i=!1,cw(this)))}else(function(e){const t={};e=(e.g&&2<=fb(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(by(e[r]))continue;var n=gv(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,zv(12)):(this.o=0,zv(13)),fw(this),dw(this)}}}catch(u){}},ty.mb=function(){if(this.g){var e=fb(this.g),t=this.g.ja();this.C<t.length&&(hw(this),aw(this,e,t),this.i&&4!=e&&cw(this))}},ty.cancel=function(){this.J=!0,fw(this)},ty.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(Fv(),zv(17)),fw(this),this.o=2,dw(this)):uw(this,this.Y-e)};var gw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yw(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof yw){this.h=e.h,ww(this,e.j),this.s=e.s,this.g=e.g,bw(this,e.m),this.l=e.l;var t=e.i,n=new Rw;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),kw(this,n),this.o=e.o}else e&&(t=String(e).match(gw))?(this.h=!1,ww(this,t[1]||"",!0),this.s=Sw(t[2]||""),this.g=Sw(t[3]||"",!0),bw(this,t[4]),this.l=Sw(t[5]||"",!0),kw(this,t[6]||"",!0),this.o=Sw(t[7]||"")):(this.h=!1,this.i=new Rw(null,this.h))}function vw(e){return new yw(e)}function ww(e,t,n){e.j=n?Sw(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function bw(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function kw(e,t,n){t instanceof Rw?(e.i=t,function(e,t){t&&!e.j&&(Ow(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Dw(this,t),Mw(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=xw(t,Pw)),e.i=new Rw(t,e.h))}function _w(e,t,n){e.i.set(t,n)}function Ew(e){return _w(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Sw(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function xw(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Cw),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Cw(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}yw.prototype.toString=function(){var e=[],t=this.j;t&&e.push(xw(t,Tw,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(xw(t,Tw,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(xw(n,"/"==n.charAt(0)?Aw:Iw,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",xw(n,Nw)),e.join("")};var Tw=/[#\/\?@]/g,Iw=/[#\?:]/g,Aw=/[#\?]/g,Pw=/[#\?@]/g,Nw=/#/g;function Rw(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ow(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Dw(e,t){Ow(e),t=jw(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Lw(e,t){return Ow(e),t=jw(e,t),e.g.has(t)}function Mw(e,t,n){Dw(e,t),0<n.length&&(e.i=null,e.g.set(jw(e,t),gy(n)),e.h+=n.length)}function jw(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(ty=Rw.prototype).add=function(e,t){Ow(this),this.i=null,e=jw(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},ty.forEach=function(e,t){Ow(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},ty.ta=function(){Ow(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},ty.Z=function(e){Ow(this);let t=[];if("string"==typeof e)Lw(this,e)&&(t=t.concat(this.g.get(jw(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},ty.set=function(e,t){return Ow(this),this.i=null,Lw(this,e=jw(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},ty.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},ty.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var Fw=class{constructor(e,t){this.g=e,this.map=t}};function Uw(e){this.l=e||zw,iy.PerformanceNavigationTiming?e=0<(e=iy.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(iy.g&&iy.g.Ka&&iy.g.Ka()&&iy.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zw=10;function Vw(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Bw(e){return e.h?1:e.g?e.g.size:0}function $w(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function qw(e,t){e.g?e.g.add(t):e.h=t}function Hw(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Kw(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return gy(e.i)}Uw.prototype.cancel=function(){if(this.i=Kw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Ww=class{stringify(e){return iy.JSON.stringify(e,void 0)}parse(e){return iy.JSON.parse(e,void 0)}};function Gw(){this.g=new Ww}function Qw(e,t,n){const r=n||"";try{mw(e,(function(e,n){let i=e;oy(e)&&(i=dv(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Yw(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Xw(e){this.l=e.ec||null,this.j=e.ob||!1}function Jw(e,t){cv.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Zw,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}fy(Xw,Hv),Xw.prototype.g=function(){return new Jw(this.l,this.j)},Xw.prototype.i=function(e){return function(){return e}}({}),fy(Jw,cv);var Zw=0;function eb(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function tb(e){e.readyState=4,e.l=null,e.j=null,e.A=null,nb(e)}function nb(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(ty=Jw.prototype).open=function(e,t){if(this.readyState!=Zw)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,nb(this)},ty.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||iy).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},ty.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tb(this)),this.readyState=Zw},ty.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,nb(this)),this.g&&(this.readyState=3,nb(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==iy.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;eb(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},ty.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tb(this):nb(this),3==this.readyState&&eb(this)}},ty.Za=function(e){this.g&&(this.response=this.responseText=e,tb(this))},ty.Ya=function(e){this.g&&(this.response=e,tb(this))},ty.ka=function(){this.g&&tb(this)},ty.setRequestHeader=function(e,t){this.v.append(e,t)},ty.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},ty.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Jw.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var rb=iy.JSON.parse;function ib(e){cv.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=sb,this.L=this.M=!1}fy(ib,cv);var sb="",ob=/^https?$/i,ab=["POST","PUT"];function lb(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,cb(e),hb(e)}function cb(e){e.F||(e.F=!0,uv(e,"complete"),uv(e,"error"))}function ub(e){if(e.h&&void 0!==ry&&(!e.C[1]||4!=fb(e)||2!=e.da()))if(e.v&&4==fb(e))xv(e.La,0,e);else if(uv(e,"readystatechange"),4==fb(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.I).match(gw)[1]||null;!i&&iy.self&&iy.self.location&&(i=iy.self.location.protocol.slice(0,-1)),r=!ob.test(i?i.toLowerCase():"")}n=r}if(n)uv(e,"complete"),uv(e,"success");else{e.m=6;try{var s=2<fb(e)?e.g.statusText:""}catch(o){s=""}e.j=s+" ["+e.da()+"]",cb(e)}}finally{hb(e)}}}function hb(e,t){if(e.g){db(e);const r=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||uv(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function db(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(iy.clearTimeout(e.A),e.A=null)}function fb(e){return e.g?e.g.readyState:0}function pb(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case sb:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function mb(e){let t="";return qy(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function gb(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=mb(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):_w(e,t,n))}function yb(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function vb(e){this.Ga=0,this.j=[],this.l=new Rv,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=yb("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=yb("baseRetryDelayMs",5e3,e),this.hb=yb("retryDelaySeedMs",1e4,e),this.eb=yb("forwardChannelMaxRetries",2,e),this.xa=yb("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Uw(e&&e.concurrentRequestLimit),this.Ja=new Gw,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function wb(e){if(kb(e),3==e.H){var t=e.W++,n=vw(e.I);if(_w(n,"SID",e.K),_w(n,"RID",t),_w(n,"TYPE","terminate"),Sb(e,n),(t=new Zv(e,e.l,t)).L=2,t.v=Ew(vw(n)),n=!1,iy.navigator&&iy.navigator.sendBeacon)try{n=iy.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&iy.Image&&((new Image).src=t.v,n=!0),n||(t.g=Mb(t.l,null),t.g.ha(t.v)),t.G=Date.now(),cw(t)}Db(e)}function bb(e){e.g&&(Ib(e),e.g.cancel(),e.g=null)}function kb(e){bb(e),e.u&&(iy.clearTimeout(e.u),e.u=null),Pb(e),e.i.cancel(),e.m&&("number"==typeof e.m&&iy.clearTimeout(e.m),e.m=null)}function _b(e){if(!Vw(e.i)&&!e.m){e.m=!0;var t=e.Na;vv||kv(),wv||(vv(),wv=!0),bv.add(t,e),e.C=0}}function Eb(e,t){var n;n=t?t.m:e.W++;const r=vw(e.I);_w(r,"SID",e.K),_w(r,"RID",n),_w(r,"AID",e.V),Sb(e,r),e.o&&e.s&&gb(r,e.o,e.s),n=new Zv(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=xb(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),qw(e.i,n),iw(n,r,t)}function Sb(e,t){e.na&&qy(e.na,(function(e,n){_w(t,n,e)})),e.h&&mw({},(function(e,n){_w(t,n,e)}))}function xb(e,t,n){n=Math.min(e.j.length,n);var r=e.h?hy(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const l=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),o=!1;else try{Qw(l,e,"req"+n+"_")}catch(s){r&&r(l)}}if(o){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Cb(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;vv||kv(),wv||(vv(),wv=!0),bv.add(t,e),e.A=0}}function Tb(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=Bv(hy(e.Ma,e),Rb(e,e.A)),e.A++,!0)}function Ib(e){null!=e.B&&(iy.clearTimeout(e.B),e.B=null)}function Ab(e){e.g=new Zv(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=vw(e.wa);_w(t,"RID","rpc"),_w(t,"SID",e.K),_w(t,"AID",e.V),_w(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&_w(t,"TO",e.qa),_w(t,"TYPE","xmlhttp"),Sb(e,t),e.o&&e.s&&gb(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Ew(vw(t)),n.s=null,n.S=!0,sw(n,e)}function Pb(e){null!=e.v&&(iy.clearTimeout(e.v),e.v=null)}function Nb(e,t){var n=null;if(e.g==t){Pb(e),Ib(e),e.g=null;var r=2}else{if(!$w(e.i,t))return;n=t.F,Hw(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;uv(r=Mv(),new Vv(r,n)),_b(e)}else Cb(e);else if(3==(i=t.o)||0==i&&0<t.ca||!(1==r&&function(e,t){return!(Bw(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.j=t.F.concat(e.j),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=Bv(hy(e.Na,e,t),Rb(e,e.C)),e.C++,0)))}(e,t)||2==r&&Tb(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Ob(e,5);break;case 4:Ob(e,10);break;case 3:Ob(e,6);break;default:Ob(e,2)}}function Rb(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Ob(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=hy(e.pb,e);n||(n=new yw("//www.google.com/images/cleardot.gif"),iy.location&&"http"==iy.location.protocol||ww(n,"https"),Ew(n)),function(e,t){const n=new Rv;if(iy.Image){const r=new Image;r.onload=dy(Yw,n,r,"TestLoadImage: loaded",!0,t),r.onerror=dy(Yw,n,r,"TestLoadImage: error",!1,t),r.onabort=dy(Yw,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=dy(Yw,n,r,"TestLoadImage: timeout",!1,t),iy.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else zv(2);e.H=0,e.h&&e.h.za(t),Db(e),kb(e)}function Db(e){if(e.H=0,e.ma=[],e.h){const t=Kw(e.i);0==t.length&&0==e.j.length||(yy(e.ma,t),yy(e.ma,e.j),e.i.i.length=0,gy(e.j),e.j.length=0),e.h.ya()}}function Lb(e,t,n){var r=n instanceof yw?vw(n):new yw(n);if(""!=r.g)t&&(r.g=t+"."+r.g),bw(r,r.m);else{var i=iy.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new yw(null);r&&ww(s,r),t&&(s.g=t),i&&bw(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&_w(r,n,t),_w(r,"VER",e.ra),Sb(e,r),r}function Mb(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new ib(new Xw({ob:!0})):new ib(e.va)).Oa(e.J),t}function jb(){}function Fb(){if(Ty&&!(10<=Number(jy)))throw Error("Environmental error: no available transport.")}function Ub(e,t){cv.call(this),this.g=new vb(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!by(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!by(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Bb(this)}function zb(e){Yv.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Vb(){Xv.call(this),this.status=1}function Bb(e){this.g=e}function $b(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function qb(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(o<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(t=n+((o=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function Hb(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}(ty=ib.prototype).Oa=function(e){this.M=e},ty.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Gv.g(),this.C=this.u?Kv(this.u):Kv(Gv),this.g.onreadystatechange=hy(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void lb(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=iy.FormData&&e instanceof iy.FormData,!(0<=my(ab,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{db(this),0<this.B&&((this.L=function(e){return Ty&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=hy(this.ua,this)):this.A=xv(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){lb(this,s)}},ty.ua=function(){void 0!==ry&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,uv(this,"timeout"),this.abort(8))},ty.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,uv(this,"complete"),uv(this,"abort"),hb(this))},ty.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hb(this,!0)),ib.$.N.call(this)},ty.La=function(){this.s||(this.G||this.v||this.l?ub(this):this.kb())},ty.kb=function(){ub(this)},ty.isActive=function(){return!!this.g},ty.da=function(){try{return 2<fb(this)?this.g.status:-1}catch(ut){return-1}},ty.ja=function(){try{return this.g?this.g.responseText:""}catch(ut){return""}},ty.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),rb(t)}},ty.Ia=function(){return this.m},ty.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(ty=vb.prototype).ra=8,ty.H=1,ty.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Zv(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Hy(s),Wy(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=xb(this,i,t),_w(n=vw(this.I),"RID",e),_w(n,"CVER",22),this.F&&_w(n,"X-HTTP-Session-Id",this.F),Sb(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(mb(s)))+"&"+t:this.o&&gb(n,this.o,s)),qw(this.i,i),this.bb&&_w(n,"TYPE","init"),this.P?(_w(n,"$req",t),_w(n,"SID","null"),i.aa=!0,iw(i,n,null)):iw(i,n,t),this.H=2}}else 3==this.H&&(e?Eb(this,e):0==this.j.length||Vw(this.i)||Eb(this))},ty.Ma=function(){if(this.u=null,Ab(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Bv(hy(this.jb,this),e)}},ty.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,zv(10),bb(this),Ab(this))},ty.ib=function(){null!=this.v&&(this.v=null,bb(this),Tb(this),zv(19))},ty.pb=function(e){e?(this.l.info("Successfully pinged google.com"),zv(2)):(this.l.info("Failed to ping google.com"),zv(1))},ty.isActive=function(){return!!this.h&&this.h.isActive(this)},(ty=jb.prototype).Ba=function(){},ty.Aa=function(){},ty.za=function(){},ty.ya=function(){},ty.isActive=function(){return!0},ty.Va=function(){},Fb.prototype.g=function(e,t){return new Ub(e,t)},fy(Ub,cv),Ub.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;zv(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Lb(e,null,e.Y),_b(e)},Ub.prototype.close=function(){wb(this.g)},Ub.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=dv(e),e=n);t.j.push(new Fw(t.fb++,e)),3==t.H&&_b(t)},Ub.prototype.N=function(){this.g.h=null,delete this.j,wb(this.g),delete this.g,Ub.$.N.call(this)},fy(zb,Yv),fy(Vb,Xv),fy(Bb,jb),Bb.prototype.Ba=function(){uv(this.g,"a")},Bb.prototype.Aa=function(e){uv(this.g,new zb(e))},Bb.prototype.za=function(e){uv(this.g,new Vb)},Bb.prototype.ya=function(){uv(this.g,"b")},fy($b,(function(){this.blockSize=-1})),$b.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},$b.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)qb(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){qb(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){qb(this,r),i=0;break}}this.h=i,this.i+=t},$b.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var Kb={};function Wb(e){return-128<=e&&128>e?function(e,t){var n=Kb;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new Hb([0|e],0>e?-1:0)})):new Hb([0|e],0>e?-1:0)}function Gb(e){if(isNaN(e)||!isFinite(e))return Yb;if(0>e)return tk(Gb(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Qb;return new Hb(t,0)}var Qb=4294967296,Yb=Wb(0),Xb=Wb(1),Jb=Wb(16777216);function Zb(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function ek(e){return-1==e.h}function tk(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new Hb(n,~e.h).add(Xb)}function nk(e,t){return e.add(tk(t))}function rk(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ik(e,t){this.g=e,this.h=t}function sk(e,t){if(Zb(t))throw Error("division by zero");if(Zb(e))return new ik(Yb,Yb);if(ek(e))return t=sk(tk(e),t),new ik(tk(t.g),tk(t.h));if(ek(t))return t=sk(e,tk(t)),new ik(tk(t.g),t.h);if(30<e.g.length){if(ek(e)||ek(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Xb,r=t;0>=r.X(e);)n=ok(n),r=ok(r);var i=ak(n,1),s=ak(r,1);for(r=ak(r,2),n=ak(n,2);!Zb(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=ak(r,1),n=ak(n,1)}return t=nk(e,i.R(t)),new ik(i,t)}for(i=Yb;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),o=(s=Gb(n)).R(t);ek(o)||0<o.X(e);)o=(s=Gb(n-=r)).R(t);Zb(s)&&(s=Xb),i=i.add(s),e=nk(e,o)}return new ik(i,e)}function ok(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new Hb(n,e.h)}function ak(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new Hb(i,e.h)}(ty=Hb.prototype).ea=function(){if(ek(this))return-tk(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Qb+r)*t,t*=Qb}return e},ty.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(Zb(this))return"0";if(ek(this))return"-"+tk(this).toString(e);for(var t=Gb(Math.pow(e,6)),n=this,r="";;){var i=sk(n,t).g,s=((0<(n=nk(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(Zb(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},ty.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},ty.X=function(e){return ek(e=nk(this,e))?-1:Zb(e)?0:1},ty.abs=function(){return ek(this)?tk(this):this},ty.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Hb(n,-2147483648&n[n.length-1]?-1:0)},ty.R=function(e){if(Zb(this)||Zb(e))return Yb;if(ek(this))return ek(e)?tk(this).R(tk(e)):tk(tk(this).R(e));if(ek(e))return tk(this.R(tk(e)));if(0>this.X(Jb)&&0>e.X(Jb))return Gb(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,l=65535&e.D(i);n[2*r+2*i]+=o*l,rk(n,2*r+2*i),n[2*r+2*i+1]+=s*l,rk(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,rk(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,rk(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new Hb(n,0)},ty.gb=function(e){return sk(this,e).h},ty.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new Hb(n,this.h&e.h)},ty.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new Hb(n,this.h|e.h)},ty.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new Hb(n,this.h^e.h)},Fb.prototype.createWebChannel=Fb.prototype.g,Ub.prototype.send=Ub.prototype.u,Ub.prototype.open=Ub.prototype.m,Ub.prototype.close=Ub.prototype.close,$v.NO_ERROR=0,$v.TIMEOUT=8,$v.HTTP_ERROR=6,qv.COMPLETE="complete",Wv.EventType=Qv,Qv.OPEN="a",Qv.CLOSE="b",Qv.ERROR="c",Qv.MESSAGE="d",cv.prototype.listen=cv.prototype.O,ib.prototype.listenOnce=ib.prototype.P,ib.prototype.getLastError=ib.prototype.Sa,ib.prototype.getLastErrorCode=ib.prototype.Ia,ib.prototype.getStatus=ib.prototype.da,ib.prototype.getResponseJson=ib.prototype.Wa,ib.prototype.getResponseText=ib.prototype.ja,ib.prototype.send=ib.prototype.ha,ib.prototype.setWithCredentials=ib.prototype.Oa,$b.prototype.digest=$b.prototype.l,$b.prototype.reset=$b.prototype.reset,$b.prototype.update=$b.prototype.j,Hb.prototype.add=Hb.prototype.add,Hb.prototype.multiply=Hb.prototype.R,Hb.prototype.modulo=Hb.prototype.gb,Hb.prototype.compare=Hb.prototype.X,Hb.prototype.toNumber=Hb.prototype.ea,Hb.prototype.toString=Hb.prototype.toString,Hb.prototype.getBits=Hb.prototype.D,Hb.fromNumber=Gb,Hb.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return tk(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=Gb(Math.pow(n,8)),i=Yb,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),n);8>o?(o=Gb(Math.pow(n,o)),i=i.R(o).add(Gb(a))):i=(i=i.R(r)).add(Gb(a))}return i};var lk=$v,ck=qv,uk=Dv,hk=10,dk=11,fk=Wv,pk=ib,mk=$b,gk=Hb;const yk="@firebase/firestore";
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
 */class vk{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vk.UNAUTHENTICATED=new vk(null),vk.GOOGLE_CREDENTIALS=new vk("google-credentials-uid"),vk.FIRST_PARTY=new vk("first-party-uid"),vk.MOCK_USER=new vk("mock-user");
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
let wk="10.4.0";
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
 */const bk=new lg("@firebase/firestore");function kk(){return bk.logLevel}function _k(e,...t){if(bk.logLevel<=ng.DEBUG){const n=t.map(xk);bk.debug(`Firestore (${wk}): ${e}`,...n)}}function Ek(e,...t){if(bk.logLevel<=ng.ERROR){const n=t.map(xk);bk.error(`Firestore (${wk}): ${e}`,...n)}}function Sk(e,...t){if(bk.logLevel<=ng.WARN){const n=t.map(xk);bk.warn(`Firestore (${wk}): ${e}`,...n)}}function xk(e){if("string"==typeof e)return e;try{
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
return t=e,JSON.stringify(t)}catch(n){return e}var t}
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
 */function Ck(e="Unexpected state"){const t=`FIRESTORE (${wk}) INTERNAL ASSERTION FAILED: `+e;throw Ek(t),new Error(t)}function Tk(e,t){e||Ck()}function Ik(e,t){return e}
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
 */const Ak={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Pk extends Vm{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Nk{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class Rk{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ok{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(vk.UNAUTHENTICATED)))}shutdown(){}}class Dk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Lk{constructor(e){this.t=e,this.currentUser=vk.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Nk;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nk,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{_k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(_k("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nk)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(_k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Tk("string"==typeof t.accessToken),new Rk(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Tk(null===e||"string"==typeof e),new vk(e)}}class Mk{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=vk.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class jk{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new Mk(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(vk.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Fk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Uk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&_k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,_k("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{_k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):_k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Tk("string"==typeof e.token),this.R=e.token,new Fk(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
 */function zk(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class Vk{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=zk(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function Bk(e,t){return e<t?-1:e>t?1:0}function $k(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
 */class qk{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Pk(Ak.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Pk(Ak.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Pk(Ak.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Pk(Ak.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qk.fromMillis(Date.now())}static fromDate(e){return qk.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new qk(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Bk(this.nanoseconds,e.nanoseconds):Bk(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Hk{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Hk(e)}static min(){return new Hk(new qk(0,0))}static max(){return new Hk(new qk(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class Kk{constructor(e,t,n){void 0===t?t=0:t>e.length&&Ck(),void 0===n?n=e.length-t:n>e.length-t&&Ck(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Kk.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Kk?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Wk extends Kk{construct(e,t,n){return new Wk(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Pk(Ak.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Wk(t)}static emptyPath(){return new Wk([])}}const Gk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qk extends Kk{construct(e,t,n){return new Qk(e,t,n)}static isValidIdentifier(e){return Gk.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qk.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Qk(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Pk(Ak.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Pk(Ak.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Pk(Ak.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Pk(Ak.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qk(t)}static emptyPath(){return new Qk([])}}
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
 */class Yk{constructor(e){this.path=e}static fromPath(e){return new Yk(Wk.fromString(e))}static fromName(e){return new Yk(Wk.fromString(e).popFirst(5))}static empty(){return new Yk(Wk.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Wk.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Wk.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Yk(new Wk(e.slice()))}}function Xk(e){return new Jk(e.readTime,e.key,-1)}class Jk{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Jk(Hk.min(),Yk.empty(),-1)}static max(){return new Jk(Hk.max(),Yk.empty(),-1)}}function Zk(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Yk.comparator(e.documentKey,t.documentKey),0!==n?n:Bk(e.largestBatchId,t.largestBatchId))}
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
 */const e_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class t_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
 */async function n_(e){if(e.code!==Ak.FAILED_PRECONDITION||e.message!==e_)throw e;_k("LocalStore","Unexpectedly lost primary lease")}
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
 */class r_{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ck(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new r_(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof r_?t:r_.resolve(t)}catch(t){return r_.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):r_.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):r_.reject(t)}static resolve(e){return new r_(((t,n)=>{t(e)}))}static reject(e){return new r_(((t,n)=>{n(e)}))}static waitFor(e){return new r_(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=r_.resolve(!1);for(const n of e)t=t.next((e=>e?r_.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new r_(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const l=a;t(e[l]).next((e=>{s[l]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new r_(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}function i_(e){return"IndexedDbTransactionError"===e.name}
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
 */class s_{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}function o_(e){return null==e}function a_(e){return 0===e&&1/e==-1/0}
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
function l_(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function c_(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function u_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */s_.ae=-1;class h_{constructor(e,t){this.comparator=e,this.root=t||f_.EMPTY}insert(e,t){return new h_(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,f_.BLACK,null,null))}remove(e){return new h_(this.comparator,this.root.remove(e,this.comparator).copy(null,null,f_.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new d_(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new d_(this.root,e,this.comparator,!1)}getReverseIterator(){return new d_(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new d_(this.root,e,this.comparator,!0)}}class d_{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class f_{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:f_.RED,this.left=null!=r?r:f_.EMPTY,this.right=null!=i?i:f_.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new f_(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return f_.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return f_.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,f_.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,f_.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ck();if(this.right.isRed())throw Ck();const e=this.left.check();if(e!==this.right.check())throw Ck();return e+(this.isRed()?0:1)}}f_.EMPTY=null,f_.RED=!0,f_.BLACK=!1,f_.EMPTY=new class{constructor(){this.size=0}get key(){throw Ck()}get value(){throw Ck()}get color(){throw Ck()}get left(){throw Ck()}get right(){throw Ck()}copy(e,t,n,r,i){return this}insert(e,t,n){return new f_(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class p_{constructor(e){this.comparator=e,this.data=new h_(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new m_(this.data.getIterator())}getIteratorFrom(e){return new m_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof p_))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new p_(this.comparator);return t.data=e,t}}class m_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */class g_{constructor(e){this.fields=e,e.sort(Qk.comparator)}static empty(){return new g_([])}unionWith(e){let t=new p_(Qk.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new g_(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $k(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
 */class y_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */class v_{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new y_("Invalid base64 string: "+t):t}}(e);return new v_(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new v_(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Bk(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}v_.EMPTY_BYTE_STRING=new v_("");const w_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function b_(e){if(Tk(!!e),"string"==typeof e){let t=0;const n=w_.exec(e);if(Tk(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:k_(e.seconds),nanos:k_(e.nanos)}}function k_(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function __(e){return"string"==typeof e?v_.fromBase64String(e):v_.fromUint8Array(e)}
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
 */function E_(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function S_(e){const t=e.mapValue.fields.__previous_value__;return E_(t)?S_(t):t}function x_(e){const t=b_(e.mapValue.fields.__local_write_time__.timestampValue);return new qk(t.seconds,t.nanos)}
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
 */class C_{constructor(e,t,n,r,i,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class T_{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new T_("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof T_&&e.projectId===this.projectId&&e.database===this.database}}
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
 */const I_={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function A_(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?E_(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
 */(e)?9007199254740991:10:Ck()}function P_(e,t){if(e===t)return!0;const n=A_(e);if(n!==A_(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return x_(e).isEqual(x_(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=b_(e.timestampValue),r=b_(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,__(e.bytesValue).isEqual(__(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return k_(e.geoPointValue.latitude)===k_(t.geoPointValue.latitude)&&k_(e.geoPointValue.longitude)===k_(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return k_(e.integerValue)===k_(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=k_(e.doubleValue),r=k_(t.doubleValue);return n===r?a_(n)===a_(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return $k(e.arrayValue.values||[],t.arrayValue.values||[],P_);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(l_(n)!==l_(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!P_(n[i],r[i])))return!1;return!0}(e,t);default:return Ck()}var r}function N_(e,t){return void 0!==(e.values||[]).find((e=>P_(e,t)))}function R_(e,t){if(e===t)return 0;const n=A_(e),r=A_(t);if(n!==r)return Bk(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Bk(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=k_(e.integerValue||e.doubleValue),r=k_(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return O_(e.timestampValue,t.timestampValue);case 4:return O_(x_(e),x_(t));case 5:return Bk(e.stringValue,t.stringValue);case 6:return function(e,t){const n=__(e),r=__(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Bk(n[i],r[i]);if(0!==e)return e}return Bk(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Bk(k_(e.latitude),k_(t.latitude));return 0!==n?n:Bk(k_(e.longitude),k_(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=R_(n[i],r[i]);if(e)return e}return Bk(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===I_.mapValue&&t===I_.mapValue)return 0;if(e===I_.mapValue)return 1;if(t===I_.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=Bk(r[o],s[o]);if(0!==e)return e;const t=R_(n[r[o]],i[s[o]]);if(0!==t)return t}return Bk(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Ck()}}function O_(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Bk(e,t);const n=b_(e),r=b_(t),i=Bk(n.seconds,r.seconds);return 0!==i?i:Bk(n.nanos,r.nanos)}function D_(e){return L_(e)}function L_(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=b_(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?__(e.bytesValue).toBase64():"referenceValue"in e?function(e){return Yk.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=L_(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${L_(e.fields[i])}`;return n+"}"}(e.mapValue):Ck()}function M_(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function j_(e){return!!e&&"integerValue"in e}function F_(e){return!!e&&"arrayValue"in e}function U_(e){return!!e&&"nullValue"in e}function z_(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function V_(e){return!!e&&"mapValue"in e}function B_(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return c_(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=B_(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=B_(e.arrayValue.values[n]);return t}return Object.assign({},e)}class $_{constructor(e){this.value=e}static empty(){return new $_({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!V_(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=B_(t)}setAll(e){let t=Qk.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=B_(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());V_(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return P_(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];V_(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){c_(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new $_(B_(this.value))}}function q_(e){const t=[];return c_(e.fields,((e,n)=>{const r=new Qk([e]);if(V_(n)){const e=q_(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new g_(t)
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
 */}class H_{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new H_(e,0,Hk.min(),Hk.min(),Hk.min(),$_.empty(),0)}static newFoundDocument(e,t,n,r){return new H_(e,1,t,Hk.min(),n,r,0)}static newNoDocument(e,t){return new H_(e,2,t,Hk.min(),Hk.min(),$_.empty(),0)}static newUnknownDocument(e,t){return new H_(e,3,t,Hk.min(),Hk.min(),$_.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Hk.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$_.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$_.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Hk.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof H_&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new H_(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class K_{constructor(e,t){this.position=e,this.inclusive=t}}function W_(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Yk.comparator(Yk.fromName(o.referenceValue),n.key):R_(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function G_(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!P_(e.position[n],t.position[n]))return!1;return!0}
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
 */class Q_{constructor(e,t="asc"){this.field=e,this.dir=t}}function Y_(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */class X_{}class J_ extends X_{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new sE(e,t,n):"array-contains"===t?new cE(e,n):"in"===t?new uE(e,n):"not-in"===t?new hE(e,n):"array-contains-any"===t?new dE(e,n):new J_(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new oE(e,n):new aE(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(R_(t,this.value)):null!==t&&A_(this.value)===A_(t)&&this.matchesComparison(R_(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ck()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Z_ extends X_{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Z_(e,t)}matches(e){return eE(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le((e=>e.isInequality()));return null!==e?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function eE(e){return"and"===e.op}function tE(e){return function(e){for(const t of e.filters)if(t instanceof Z_)return!1;return!0}(e)&&eE(e)}function nE(e){if(e instanceof J_)return e.field.canonicalString()+e.op.toString()+D_(e.value);if(tE(e))return e.filters.map((e=>nE(e))).join(",");{const t=e.filters.map((e=>nE(e))).join(",");return`${e.op}(${t})`}}function rE(e,t){return e instanceof J_?(n=e,(r=t)instanceof J_&&n.op===r.op&&n.field.isEqual(r.field)&&P_(n.value,r.value)):e instanceof Z_?function(e,t){return t instanceof Z_&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&rE(n,t.filters[r])),!0)}(e,t):void Ck();var n,r}function iE(e){return e instanceof J_?`${(t=e).field.canonicalString()} ${t.op} ${D_(t.value)}`:e instanceof Z_?function(e){return e.op.toString()+" {"+e.getFilters().map(iE).join(" ,")+"}"}(e):"Filter";var t}class sE extends J_{constructor(e,t,n){super(e,t,n),this.key=Yk.fromName(n.referenceValue)}matches(e){const t=Yk.comparator(e.key,this.key);return this.matchesComparison(t)}}class oE extends J_{constructor(e,t){super(e,"in",t),this.keys=lE("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class aE extends J_{constructor(e,t){super(e,"not-in",t),this.keys=lE("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function lE(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Yk.fromName(e.referenceValue)))}class cE extends J_{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return F_(t)&&N_(t.arrayValue,this.value)}}class uE extends J_{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&N_(this.value.arrayValue,t)}}class hE extends J_{constructor(e,t){super(e,"not-in",t)}matches(e){if(N_(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!N_(this.value.arrayValue,t)}}class dE extends J_{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!F_(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>N_(this.value.arrayValue,e)))}}
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
 */class fE{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.he=null}}function pE(e,t=null,n=[],r=[],i=null,s=null,o=null){return new fE(e,t,n,r,i,s,o)}function mE(e){const t=Ik(e);if(null===t.he){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>nE(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),o_(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>D_(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>D_(e))).join(",")),t.he=e}return t.he}function gE(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Y_(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!rE(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!G_(e.startAt,t.startAt)&&G_(e.endAt,t.endAt)}function yE(e){return Yk.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
 */class vE{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function wE(e){return new vE(e)}function bE(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function kE(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function _E(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function EE(e){return null!==e.collectionGroup}function SE(e){const t=Ik(e);if(null===t.Pe){t.Pe=[];const e=_E(t),n=kE(t);if(null!==e&&null===n)e.isKeyField()||t.Pe.push(new Q_(e)),t.Pe.push(new Q_(Qk.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.Pe.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Q_(Qk.keyField(),e))}}}return t.Pe}function xE(e){const t=Ik(e);return t.Ie||(t.Ie=function(e,t){if("F"===e.limitType)return pE(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new Q_(e.field,t)}));const n=e.endAt?new K_(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new K_(e.startAt.position,e.startAt.inclusive):null;return pE(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,SE(e))),t.Ie}function CE(e,t){t.getFirstInequalityField(),_E(e);const n=e.filters.concat([t]);return new vE(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function TE(e,t,n){return new vE(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function IE(e,t){return gE(xE(e),xE(t))&&e.limitType===t.limitType}function AE(e){return`${mE(xE(e))}|lt:${e.limitType}`}function PE(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>iE(e))).join(", ")}]`),o_(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>D_(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>D_(e))).join(",")),`Target(${t})`}(xE(e))}; limitType=${e.limitType})`}function NE(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Yk.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of SE(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=W_(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,SE(n),r)||n.endAt&&!function(e,t,n){const r=W_(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,SE(n),r)));var n,r}function RE(e){return(t,n)=>{let r=!1;for(const i of SE(e)){const e=OE(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function OE(e,t,n){const r=e.field.isKeyField()?Yk.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?R_(r,i):Ck()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Ck()}}
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
 */class DE{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){c_(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return u_(this.inner)}size(){return this.innerSize}}
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
 */const LE=new h_(Yk.comparator);function ME(){return LE}const jE=new h_(Yk.comparator);function FE(...e){let t=jE;for(const n of e)t=t.insert(n.key,n);return t}function UE(e){let t=jE;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function zE(){return BE()}function VE(){return BE()}function BE(){return new DE((e=>e.toString()),((e,t)=>e.isEqual(t)))}const $E=new h_(Yk.comparator),qE=new p_(Yk.comparator);function HE(...e){let t=qE;for(const n of e)t=t.add(n);return t}const KE=new p_(Bk);
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
function WE(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:a_(t)?"-0":t}}function GE(e){return{integerValue:""+e}}function QE(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!a_(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?GE(t):WE(e,t)}
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
 */class YE{constructor(){this._=void 0}}function XE(e,t,n){return e instanceof eS?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&E_(t)&&(t=S_(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof tS?nS(e,t):e instanceof rS?iS(e,t):function(e,t){const n=ZE(e,t),r=oS(n)+oS(e.Te);return j_(n)&&j_(e.Te)?GE(r):WE(e.serializer,r)}(e,t)}function JE(e,t,n){return e instanceof tS?nS(e,t):e instanceof rS?iS(e,t):n}function ZE(e,t){return e instanceof sS?j_(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class eS extends YE{}class tS extends YE{constructor(e){super(),this.elements=e}}function nS(e,t){const n=aS(t);for(const r of e.elements)n.some((e=>P_(e,r)))||n.push(r);return{arrayValue:{values:n}}}class rS extends YE{constructor(e){super(),this.elements=e}}function iS(e,t){let n=aS(t);for(const r of e.elements)n=n.filter((e=>!P_(e,r)));return{arrayValue:{values:n}}}class sS extends YE{constructor(e,t){super(),this.serializer=e,this.Te=t}}function oS(e){return k_(e.integerValue||e.doubleValue)}function aS(e){return F_(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class lS{constructor(e,t){this.version=e,this.transformResults=t}}class cS{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new cS}static exists(e){return new cS(void 0,e)}static updateTime(e){return new cS(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uS(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class hS{}function dS(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new _S(e.key,cS.none()):new yS(e.key,e.data,cS.none());{const n=e.data,r=$_.empty();let i=new p_(Qk.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new vS(e.key,r,new g_(i.toArray()),cS.none())}}function fS(e,t,n){var r;e instanceof yS?function(e,t,n){const r=e.value.clone(),i=bS(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof vS?function(e,t,n){if(!uS(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=bS(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(wS(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function pS(e,t,n,r){return e instanceof yS?function(e,t,n,r){if(!uS(e.precondition,t))return n;const i=e.value.clone(),s=kS(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof vS?function(e,t,n,r){if(!uS(e.precondition,t))return n;const i=kS(e.fieldTransforms,r,t),s=t.data;return s.setAll(wS(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):(i=t,s=n,uS(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function mS(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=ZE(r.transform,e||null);null!=i&&(null===n&&(n=$_.empty()),n.set(r.field,i))}return n||null}function gS(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&$k(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof tS&&r instanceof tS||n instanceof rS&&r instanceof rS?$k(n.elements,r.elements,P_):n instanceof sS&&r instanceof sS?P_(n.Te,r.Te):n instanceof eS&&r instanceof eS);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class yS extends hS{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class vS extends hS{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function wS(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function bS(e,t,n){const r=new Map;Tk(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,JE(o,a,n[i]))}return r}function kS(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,XE(e,s,t))}return r}class _S extends hS{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ES extends hS{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class SS{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&fS(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=pS(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=pS(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=VE();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=dS(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Hk.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),HE())}isEqual(e){return this.batchId===e.batchId&&$k(this.mutations,e.mutations,((e,t)=>gS(e,t)))&&$k(this.baseMutations,e.baseMutations,((e,t)=>gS(e,t)))}}class xS{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Tk(e.mutations.length===n.length);let r=$E;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new xS(e,t,n,r)}}
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
 */class CS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class TS{constructor(e,t){this.count=e,this.unchangedNames=t}}
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
 */var IS,AS;function PS(e){if(void 0===e)return Ek("GRPC error has no .code"),Ak.UNKNOWN;switch(e){case IS.OK:return Ak.OK;case IS.CANCELLED:return Ak.CANCELLED;case IS.UNKNOWN:return Ak.UNKNOWN;case IS.DEADLINE_EXCEEDED:return Ak.DEADLINE_EXCEEDED;case IS.RESOURCE_EXHAUSTED:return Ak.RESOURCE_EXHAUSTED;case IS.INTERNAL:return Ak.INTERNAL;case IS.UNAVAILABLE:return Ak.UNAVAILABLE;case IS.UNAUTHENTICATED:return Ak.UNAUTHENTICATED;case IS.INVALID_ARGUMENT:return Ak.INVALID_ARGUMENT;case IS.NOT_FOUND:return Ak.NOT_FOUND;case IS.ALREADY_EXISTS:return Ak.ALREADY_EXISTS;case IS.PERMISSION_DENIED:return Ak.PERMISSION_DENIED;case IS.FAILED_PRECONDITION:return Ak.FAILED_PRECONDITION;case IS.ABORTED:return Ak.ABORTED;case IS.OUT_OF_RANGE:return Ak.OUT_OF_RANGE;case IS.UNIMPLEMENTED:return Ak.UNIMPLEMENTED;case IS.DATA_LOSS:return Ak.DATA_LOSS;default:return Ck()}}(AS=IS||(IS={}))[AS.OK=0]="OK",AS[AS.CANCELLED=1]="CANCELLED",AS[AS.UNKNOWN=2]="UNKNOWN",AS[AS.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",AS[AS.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",AS[AS.NOT_FOUND=5]="NOT_FOUND",AS[AS.ALREADY_EXISTS=6]="ALREADY_EXISTS",AS[AS.PERMISSION_DENIED=7]="PERMISSION_DENIED",AS[AS.UNAUTHENTICATED=16]="UNAUTHENTICATED",AS[AS.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",AS[AS.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",AS[AS.ABORTED=10]="ABORTED",AS[AS.OUT_OF_RANGE=11]="OUT_OF_RANGE",AS[AS.UNIMPLEMENTED=12]="UNIMPLEMENTED",AS[AS.INTERNAL=13]="INTERNAL",AS[AS.UNAVAILABLE=14]="UNAVAILABLE",AS[AS.DATA_LOSS=15]="DATA_LOSS";
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
const NS=new gk([4294967295,4294967295],0);function RS(e){const t=(new TextEncoder).encode(e),n=new mk;return n.update(t),new Uint8Array(n.digest())}function OS(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new gk([n,r],0),new gk([i,s],0)]}class DS{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new LS(`Invalid padding: ${t}`);if(n<0)throw new LS(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new LS(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new LS(`Invalid padding when bitmap length is 0: ${t}`);this.Ae=8*e.length-t,this.Re=gk.fromNumber(this.Ae)}Ve(e,t,n){let r=e.add(t.multiply(gk.fromNumber(n)));return 1===r.compare(NS)&&(r=new gk([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Re).toNumber()}me(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ae)return!1;const t=RS(e),[n,r]=OS(t);for(let i=0;i<this.hashCount;i++){const e=this.Ve(n,r,i);if(!this.me(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new DS(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Ae)return;const t=RS(e),[n,r]=OS(t);for(let i=0;i<this.hashCount;i++){const e=this.Ve(n,r,i);this.fe(e)}}fe(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class LS extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class MS{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,jS.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new MS(Hk.min(),r,new h_(Bk),ME(),HE())}}class jS{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new jS(n,t,HE(),HE(),HE())}}
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
 */class FS{constructor(e,t,n,r){this.ge=e,this.removedTargetIds=t,this.key=n,this.pe=r}}class US{constructor(e,t){this.targetId=e,this.ye=t}}class zS{constructor(e,t,n=v_.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class VS{constructor(){this.we=0,this.Se=qS(),this.be=v_.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return 0!==this.we}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=HE(),t=HE(),n=HE();return this.Se.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Ck()}})),new jS(this.be,this.De,e,t,n)}Oe(){this.Ce=!1,this.Se=qS()}Ne(e,t){this.Ce=!0,this.Se=this.Se.insert(e,t)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class BS{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=ME(),this.Ue=$S(),this.We=new h_(Bk)}Ge(e){for(const t of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(t,e.pe):this.je(t,e.key,e.pe);for(const t of e.removedTargetIds)this.je(t,e.key,e.pe)}He(e){this.forEachTarget(e,(t=>{const n=this.Je(t);switch(e.state){case 0:this.Ye(t)&&n.Me(e.resumeToken);break;case 1:n.ke(),n.ve||n.Oe(),n.Me(e.resumeToken);break;case 2:n.ke(),n.ve||this.removeTarget(t);break;case 3:this.Ye(t)&&(n.qe(),n.Me(e.resumeToken));break;case 4:this.Ye(t)&&(this.Ze(t),n.Me(e.resumeToken));break;default:Ck()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ke.forEach(((e,n)=>{this.Ye(n)&&t(n)}))}Xe(e){const t=e.targetId,n=e.ye.count,r=this.et(t);if(r){const i=r.target;if(yE(i))if(0===n){const e=new Yk(i.path);this.je(t,e,H_.newNoDocument(e,Hk.min()))}else Tk(1===n);else{const r=this.tt(t);if(r!==n){const n=this.nt(e),i=n?this.rt(n,e,r):1;if(0!==i){this.Ze(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(t,e)}}}}}nt(e){const t=e.ye.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=__(n).toUint8Array()}catch(a){if(a instanceof y_)return Sk("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new DS(s,r,i)}catch(a){return Sk(a instanceof LS?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.Ae?null:o}rt(e,t,n){return t.ye.count===n-this.ot(e,t.targetId)?0:2}ot(e,t){const n=this.Qe.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Qe.st(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.je(t,n,null),r++)})),r}_t(e){const t=new Map;this.Ke.forEach(((n,r)=>{const i=this.et(r);if(i){if(n.current&&yE(i.target)){const t=new Yk(i.target.path);null!==this.$e.get(t)||this.ut(r,t)||this.je(r,t,H_.newNoDocument(t,e))}n.Fe&&(t.set(r,n.xe()),n.Oe())}}));let n=HE();this.Ue.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.et(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.$e.forEach(((t,n)=>n.setReadTime(e)));const r=new MS(e,t,this.We,this.$e,n);return this.$e=ME(),this.Ue=$S(),this.We=new h_(Bk),r}ze(e,t){if(!this.Ye(e))return;const n=this.ut(e,t.key)?2:0;this.Je(e).Ne(t.key,n),this.$e=this.$e.insert(t.key,t),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}je(e,t,n){if(!this.Ye(e))return;const r=this.Je(e);this.ut(e,t)?r.Ne(t,1):r.Be(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),n&&(this.$e=this.$e.insert(t,n))}removeTarget(e){this.Ke.delete(e)}tt(e){const t=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let t=this.Ke.get(e);return t||(t=new VS,this.Ke.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new p_(Bk),this.Ue=this.Ue.insert(e,t)),t}Ye(e){const t=null!==this.et(e);return t||_k("WatchChangeAggregator","Detected inactive target",e),t}et(e){const t=this.Ke.get(e);return t&&t.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new VS),this.Qe.getRemoteKeysForTarget(e).forEach((t=>{this.je(e,t,null)}))}ut(e,t){return this.Qe.getRemoteKeysForTarget(e).has(t)}}function $S(){return new h_(Yk.comparator)}function qS(){return new h_(Yk.comparator)}const HS={asc:"ASCENDING",desc:"DESCENDING"},KS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},WS={and:"AND",or:"OR"};class GS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function QS(e,t){return e.useProto3Json||o_(t)?t:{value:t}}function YS(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function XS(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function JS(e,t){return YS(e,t.toTimestamp())}function ZS(e){return Tk(!!e),Hk.fromTimestamp(function(e){const t=b_(e);return new qk(t.seconds,t.nanos)}(e))}function ex(e,t){return(n=e,new Wk(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function tx(e){const t=Wk.fromString(e);return Tk(wx(t)),t}function nx(e,t){return ex(e.databaseId,t.path)}function rx(e,t){const n=tx(t);if(n.get(1)!==e.databaseId.projectId)throw new Pk(Ak.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Pk(Ak.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Yk(ox(n))}function ix(e,t){return ex(e.databaseId,t)}function sx(e){return new Wk(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ox(e){return Tk(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ax(e,t,n){return{name:nx(e,t),fields:n.value.mapValue.fields}}function lx(e,t){return{documents:[ix(e,t.path)]}}function cx(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=ix(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ix(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return yx(Z_.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>{return{field:mx((t=e).field),direction:dx(t.dir)};var t}))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=QS(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n;var a}function ux(e){let t=function(e){const t=tx(e);return 4===t.length?Wk.emptyPath():ox(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Tk(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=hx(e);return t instanceof Z_&&tE(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new Q_(gx((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,o_(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new K_(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new K_(n,t)}(n.endAt)),function(e,t,n,r,i,s,o,a){return new vE(e,t,n,r,i,s,o,a)}(t,i,o,s,a,"F",l,c)}function hx(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=gx(e.unaryFilter.field);return J_.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=gx(e.unaryFilter.field);return J_.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=gx(e.unaryFilter.field);return J_.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=gx(e.unaryFilter.field);return J_.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ck()}}(e):void 0!==e.fieldFilter?(t=e,J_.create(gx(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ck()}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return Z_.create(e.compositeFilter.filters.map((e=>hx(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Ck()}}(e.compositeFilter.op))}(e):Ck();var t}function dx(e){return HS[e]}function fx(e){return KS[e]}function px(e){return WS[e]}function mx(e){return{fieldPath:e.canonicalString()}}function gx(e){return Qk.fromServerFormat(e.fieldPath)}function yx(e){return e instanceof J_?function(e){if("=="===e.op){if(z_(e.value))return{unaryFilter:{field:mx(e.field),op:"IS_NAN"}};if(U_(e.value))return{unaryFilter:{field:mx(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(z_(e.value))return{unaryFilter:{field:mx(e.field),op:"IS_NOT_NAN"}};if(U_(e.value))return{unaryFilter:{field:mx(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mx(e.field),op:fx(e.op),value:e.value}}}(e):e instanceof Z_?function(e){const t=e.getFilters().map((e=>yx(e)));return 1===t.length?t[0]:{compositeFilter:{op:px(e.op),filters:t}}}(e):Ck()}function vx(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function wx(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */class bx{constructor(e,t,n,r,i=Hk.min(),s=Hk.min(),o=v_.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new bx(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bx(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bx(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bx(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
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
 */class kx{constructor(e){this.ht=e}}function _x(e){const t=ux({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?TE(t,t.limit,"L"):t}
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
 */class Ex{constructor(){this.an=new Sx}addToCollectionParentIndex(e,t){return this.an.add(t),r_.resolve()}getCollectionParents(e,t){return r_.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return r_.resolve()}deleteFieldIndex(e,t){return r_.resolve()}deleteAllFieldIndexes(e){return r_.resolve()}createTargetIndexes(e,t){return r_.resolve()}getDocumentsMatchingTarget(e,t){return r_.resolve(null)}getIndexType(e,t){return r_.resolve(0)}getFieldIndexes(e,t){return r_.resolve([])}getNextCollectionGroupToUpdate(e){return r_.resolve(null)}getMinOffset(e,t){return r_.resolve(Jk.min())}getMinOffsetFromCollectionGroup(e,t){return r_.resolve(Jk.min())}updateCollectionGroup(e,t,n){return r_.resolve()}updateIndexEntries(e,t){return r_.resolve()}}class Sx{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new p_(Wk.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new p_(Wk.comparator)).toArray()}}
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
 */class xx{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new xx(0)}static Ln(){return new xx(-1)}}
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
 */class Cx{constructor(){this.changes=new DE((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,H_.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?r_.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
 */class Tx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class Ix{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&pS(n.mutation,e,g_.empty(),qk.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,HE()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=HE()){const r=zE();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=FE();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=zE();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,HE())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=ME();const s=BE(),o=BE();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof vS)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),pS(o.mutation,t,o.mutation.getFieldMask(),qk.now())):s.set(t.key,g_.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Tx(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=BE();let r=new h_(((e,t)=>e-t)),i=HE();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||g_.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||HE()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,l=r.value,c=VE();l.forEach((e=>{if(!i.has(e)){const r=dS(t.get(e),n.get(e));null!==r&&c.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,c))}return r_.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return i=t,Yk.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):EE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var i}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):r_.resolve(zE());let o=-1,a=i;return s.next((t=>r_.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?r_.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,HE()))).next((e=>({batchId:o,changes:UE(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Yk(t)).next((e=>{let t=FE();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=FE();return this.indexManager.getCollectionParents(e,i).next((o=>r_.forEach(o,(o=>{const a=(l=t,c=o.child(i),new vE(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt));var l,c;return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,H_.newInvalidDocument(r)))}));let n=FE();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&pS(s.mutation,r,g_.empty(),qk.now()),NE(t,r)&&(n=n.insert(e,r))})),n}))}}
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
 */class Ax{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return r_.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,{id:(n=t).id,version:n.version,createTime:ZS(n.createTime)}),r_.resolve();var n}getNamedQuery(e,t){return r_.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,{name:(n=t).name,query:_x(n.bundledQuery),readTime:ZS(n.readTime)}),r_.resolve();var n}}
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
 */class Px{constructor(){this.overlays=new h_(Yk.comparator),this.Pr=new Map}getOverlay(e,t){return r_.resolve(this.overlays.get(t))}getOverlays(e,t){const n=zE();return r_.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.It(e,t,r)})),r_.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Pr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Pr.delete(n)),r_.resolve()}getOverlaysForCollection(e,t,n){const r=zE(),i=t.length+1,s=new Yk(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return r_.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new h_(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=zE(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=zE(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return r_.resolve(o)}It(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Pr.get(r.largestBatchId).delete(n.key);this.Pr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new CS(t,n));let i=this.Pr.get(t);void 0===i&&(i=HE(),this.Pr.set(t,i)),this.Pr.set(t,i.add(n.key))}}
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
 */class Nx{constructor(){this.Ir=new p_(Rx.dr),this.Tr=new p_(Rx.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){const n=new Rx(e,t);this.Ir=this.Ir.add(n),this.Tr=this.Tr.add(n)}Ar(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Rr(new Rx(e,t))}Vr(e,t){e.forEach((e=>this.removeReference(e,t)))}mr(e){const t=new Yk(new Wk([])),n=new Rx(t,e),r=new Rx(t,e+1),i=[];return this.Tr.forEachInRange([n,r],(e=>{this.Rr(e),i.push(e.key)})),i}gr(){this.Ir.forEach((e=>this.Rr(e)))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const t=new Yk(new Wk([])),n=new Rx(t,e),r=new Rx(t,e+1);let i=HE();return this.Tr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Rx(e,0),n=this.Ir.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Rx{constructor(e,t){this.key=e,this.yr=t}static dr(e,t){return Yk.comparator(e.key,t.key)||Bk(e.yr,t.yr)}static Er(e,t){return Bk(e.yr,t.yr)||Yk.comparator(e.key,t.key)}}
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
 */class Ox{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new p_(Rx.dr)}checkEmpty(e){return r_.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new SS(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.Sr=this.Sr.add(new Rx(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return r_.resolve(s)}lookupMutationBatch(e,t){return r_.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Dr(n),i=r<0?0:r;return r_.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return r_.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(e){return r_.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Rx(t,0),r=new Rx(t,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([n,r],(e=>{const t=this.br(e.yr);i.push(t)})),r_.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new p_(Bk);return t.forEach((e=>{const t=new Rx(e,0),r=new Rx(e,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([t,r],(e=>{n=n.add(e.yr)}))})),r_.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Yk.isDocumentKey(i)||(i=i.child(""));const s=new Rx(new Yk(i),0);let o=new p_(Bk);return this.Sr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.yr)),!0)}),s),r_.resolve(this.Cr(o))}Cr(e){const t=[];return e.forEach((e=>{const n=this.br(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Tk(0===this.vr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Sr;return r_.forEach(t.mutations,(r=>{const i=new Rx(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Sr=n}))}xn(e){}containsKey(e,t){const n=new Rx(t,0),r=this.Sr.firstAfterOrEqual(n);return r_.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,r_.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}br(e){const t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class Dx{constructor(e){this.Fr=e,this.docs=new h_(Yk.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Fr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return r_.resolve(n?n.document.mutableCopy():H_.newInvalidDocument(t))}getEntries(e,t){let n=ME();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():H_.newInvalidDocument(e))})),r_.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=ME();const s=t.path,o=new Yk(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Zk(Xk(o),n)<=0||(r.has(o.key)||NE(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return r_.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Ck()}Mr(e,t){return r_.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Lx(this)}getSize(e){return r_.resolve(this.size)}}class Lx extends Cx{constructor(e){super(),this.ur=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.ur.addEntry(e,r)):this.ur.removeEntry(n)})),r_.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}
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
 */class Mx{constructor(e){this.persistence=e,this.Or=new DE((e=>mE(e)),gE),this.lastRemoteSnapshotVersion=Hk.min(),this.highestTargetId=0,this.Nr=0,this.Br=new Nx,this.targetCount=0,this.Lr=xx.Bn()}forEachTarget(e,t){return this.Or.forEach(((e,n)=>t(n))),r_.resolve()}getLastRemoteSnapshotVersion(e){return r_.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return r_.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),r_.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Nr&&(this.Nr=t),r_.resolve()}Qn(e){this.Or.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new xx(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,r_.resolve()}updateTargetData(e,t){return this.Qn(t),r_.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Br.mr(t.targetId),this.targetCount-=1,r_.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Or.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Or.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),r_.waitFor(i).next((()=>r))}getTargetCount(e){return r_.resolve(this.targetCount)}getTargetData(e,t){const n=this.Or.get(t)||null;return r_.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Ar(t,n),r_.resolve()}removeMatchingKeys(e,t,n){this.Br.Vr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),r_.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.mr(t),r_.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.pr(t);return r_.resolve(n)}containsKey(e,t){return r_.resolve(this.Br.containsKey(t))}}
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
 */class jx{constructor(e,t){this.kr={},this.overlays={},this.qr=new s_(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new Mx(this),this.indexManager=new Ex,this.remoteDocumentCache=new Dx((e=>this.referenceDelegate.$r(e))),this.serializer=new kx(t),this.Ur=new Ax(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Px,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.kr[e.toKey()];return n||(n=new Ox(t,this.referenceDelegate),this.kr[e.toKey()]=n),n}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,t,n){_k("MemoryPersistence","Starting transaction:",e);const r=new Fx(this.qr.next());return this.referenceDelegate.Wr(),n(r).next((e=>this.referenceDelegate.Gr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}zr(e,t){return r_.or(Object.values(this.kr).map((n=>()=>n.containsKey(e,t))))}}class Fx extends t_{constructor(e){super(),this.currentSequenceNumber=e}}class Ux{constructor(e){this.persistence=e,this.jr=new Nx,this.Hr=null}static Jr(e){return new Ux(e)}get Yr(){if(this.Hr)return this.Hr;throw Ck()}addReference(e,t,n){return this.jr.addReference(n,t),this.Yr.delete(n.toString()),r_.resolve()}removeReference(e,t,n){return this.jr.removeReference(n,t),this.Yr.add(n.toString()),r_.resolve()}markPotentiallyOrphaned(e,t){return this.Yr.add(t.toString()),r_.resolve()}removeTarget(e,t){this.jr.mr(t.targetId).forEach((e=>this.Yr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Yr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Wr(){this.Hr=new Set}Gr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return r_.forEach(this.Yr,(n=>{const r=Yk.fromPath(n);return this.Zr(e,r).next((e=>{e||t.removeEntry(r,Hk.min())}))})).next((()=>(this.Hr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Zr(e,t).next((e=>{e?this.Yr.delete(t.toString()):this.Yr.add(t.toString())}))}$r(e){return 0}Zr(e,t){return r_.or([()=>r_.resolve(this.jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zr(e,t)])}}
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
 */class zx{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Qi=n,this.Ki=r}static $i(e,t){let n=HE(),r=HE();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new zx(e,t.fromCache,n,r)}}
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
 */class Vx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
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
 */class Bx{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,t){this.ji=e,this.indexManager=t,this.Ui=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.Hi(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.Ji(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new Vx;return this.Yi(e,t,n).next((r=>{if(i.result=r,this.Wi)return this.Zi(e,t,n,r.size)}))})).next((()=>i.result))}Zi(e,t,n,r){return n.documentReadCount<this.Gi?(kk()<=ng.DEBUG&&_k("QueryEngine","SDK will not create cache indexes for query:",PE(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),r_.resolve()):(kk()<=ng.DEBUG&&_k("QueryEngine","Query:",PE(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.zi*r?(kk()<=ng.DEBUG&&_k("QueryEngine","The SDK decides to create cache indexes for query:",PE(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xE(t))):r_.resolve())}Hi(e,t){if(bE(t))return r_.resolve(null);let n=xE(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=TE(t,null,"F"),n=xE(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=HE(...r);return this.ji.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Xi(t,r);return this.es(t,s,i,n.readTime)?this.Hi(e,TE(t,null,"F")):this.ts(e,s,t,n)}))))})))))}Ji(e,t,n,r){return bE(t)||r.isEqual(Hk.min())?r_.resolve(null):this.ji.getDocuments(e,n).next((i=>{const s=this.Xi(t,i);return this.es(t,s,n,r)?r_.resolve(null):(kk()<=ng.DEBUG&&_k("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),PE(t)),this.ts(e,s,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Hk.fromTimestamp(1e9===r?new qk(n+1,0):new qk(n,r));return new Jk(i,Yk.empty(),t)}(r,-1)).next((e=>e)))}))}Xi(e,t){let n=new p_(RE(e));return t.forEach(((t,r)=>{NE(e,r)&&(n=n.add(r))})),n}es(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Yi(e,t,n){return kk()<=ng.DEBUG&&_k("QueryEngine","Using full collection scan to execute query:",PE(t)),this.ji.getDocumentsMatchingQuery(e,t,Jk.min(),n)}ts(e,t,n,r){return this.ji.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
 */class $x{constructor(e,t,n,r){this.persistence=e,this.ns=t,this.serializer=r,this.rs=new h_(Bk),this.ss=new DE((e=>mE(e)),gE),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(n)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ix(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.rs)))}}async function qx(e,t){const n=Ik(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.us(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=HE();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({cs:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Hx(e){const t=Ik(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Kr.getLastRemoteSnapshotVersion(e)))}function Kx(e,t){const n=Ik(e),r=t.snapshotVersion;let i=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n._s.newChangeBuffer({trackRemovals:!0});i=n.rs;const o=[];t.targetChanges.forEach(((s,a)=>{const l=i.get(a);if(!l)return;o.push(n.Kr.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Kr.addMatchingKeys(e,s.addedDocuments,a))));let c=l.withSequenceNumber(e.currentSequenceNumber);var u,h,d;null!==t.targetMismatches.get(a)?c=c.withResumeToken(v_.EMPTY_BYTE_STRING,Hk.min()).withLastLimboFreeSnapshotVersion(Hk.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(a,c),h=c,d=s,(0===(u=l).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Kr.updateTargetData(e,c))}));let a=ME(),l=HE();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(function(e,t,n){let r=HE(),i=HE();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=ME();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Hk.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):_k("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{ls:r,hs:i}}))}(e,s,t.documentUpdates).next((e=>{a=e.ls,l=e.hs}))),!r.isEqual(Hk.min())){const t=n.Kr.getLastRemoteSnapshotVersion(e).next((t=>n.Kr.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return r_.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.rs=i,e)))}function Wx(e,t){const n=Ik(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}async function Gx(e,t,n){const r=Ik(e),i=r.rs.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(o){if(!i_(o))throw o;_k("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.rs=r.rs.remove(t),r.ss.delete(i.target)}function Qx(e,t,n){const r=Ik(e);let i=Hk.min(),s=HE();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=Ik(e),i=r.ss.get(n);return void 0!==i?r_.resolve(r.rs.get(i)):r.Kr.getTargetData(t,n)}(r,e,xE(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.ns.getDocumentsMatchingQuery(e,t,n?i:Hk.min(),n?s:HE()))).next((e=>(function(e,t,n){let r=e.os.get(t)||Hk.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.os.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,Ps:s})))))}class Yx{constructor(){this.activeTargetIds=KE}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xx{constructor(){this.ro=new Yx,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,t,n){this.io[e]=t}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new Yx,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class Jx{so(e){}shutdown(){}}
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
 */class Zx{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){_k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){_k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let eC=null;function tC(){return null===eC?eC=268435456+Math.round(2147483648*Math.random()):eC++,"0x"+eC.toString(16)
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
 */}const nC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class rC{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}
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
 */const iC="WebChannelConnection";class sC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${n}/databases/${r}`,this.wo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get So(){return!1}bo(e,t,n,r,i){const s=tC(),o=this.Do(e,t);_k("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(a,r,i),this.vo(e,o,a,n).then((t=>(_k("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw Sk("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}Fo(e,t,n,r,i,s){return this.bo(e,t,n,r,i)}Co(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+wk,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Do(e,t){const n=nC[e];return`${this.po}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,n,r){const i=tC();return new Promise(((s,o)=>{const a=new pk;a.setWithCredentials(!0),a.listenOnce(ck.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case lk.NO_ERROR:const t=a.getResponseJson();_k(iC,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case lk.TIMEOUT:_k(iC,`RPC '${e}' ${i} timed out`),o(new Pk(Ak.DEADLINE_EXCEEDED,"Request time out"));break;case lk.HTTP_ERROR:const n=a.getStatus();if(_k(iC,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ak).indexOf(t)>=0?t:Ak.UNKNOWN}(t.status);o(new Pk(e,t.message))}else o(new Pk(Ak.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Pk(Ak.UNAVAILABLE,"Connection failed."));break;default:Ck()}}finally{_k(iC,`RPC '${e}' ${i} completed.`)}}));const l=JSON.stringify(r);_k(iC,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",l,n,15)}))}Mo(e,t,n){const r=tC(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=new Fb,o=Mv(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Co(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=i.join("");_k(iC,`Creating RPC '${e}' stream ${r}: ${c}`,a);const u=s.createWebChannel(c,a);let h=!1,d=!1;const f=new rC({ho:t=>{d?_k(iC,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(_k(iC,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),_k(iC,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},Po:()=>u.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(u,fk.EventType.OPEN,(()=>{d||_k(iC,`RPC '${e}' stream ${r} transport opened.`)})),p(u,fk.EventType.CLOSE,(()=>{d||(d=!0,_k(iC,`RPC '${e}' stream ${r} transport closed`),f.mo())})),p(u,fk.EventType.ERROR,(t=>{d||(d=!0,Sk(iC,`RPC '${e}' stream ${r} transport errored:`,t),f.mo(new Pk(Ak.UNAVAILABLE,"The operation could not be completed")))})),p(u,fk.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];Tk(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){_k(iC,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=IS[e];if(void 0!==t)return PS(t)}(t),i=o.message;void 0===n&&(n=Ak.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.mo(new Pk(n,i)),u.close()}else _k(iC,`RPC '${e}' stream ${r} received:`,i),f.fo(i)}})),p(o,uk.STAT_EVENT,(t=>{t.stat===hk?_k(iC,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===dk&&_k(iC,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.Vo()}),0),f}}function oC(){return"undefined"!=typeof document?document:null}
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
 */function aC(e){return new GS(e,!0)}
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
 */class lC{constructor(e,t,n=1e3,r=1.5,i=6e4){this._i=e,this.timerId=t,this.xo=n,this.Oo=r,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const t=Math.floor(this.Bo+this.Ko()),n=Math.max(0,Date.now()-this.ko),r=Math.max(0,t-n);r>0&&_k("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Bo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,r,(()=>(this.ko=Date.now(),e()))),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}
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
 */class cC{constructor(e,t,n,r,i,s,o,a){this._i=e,this.Uo=n,this.Wo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new lC(e,t)}Jo(){return 1===this.state||5===this.state||this.Yo()}Yo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&null===this.zo&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,(()=>this.t_())))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,t){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,4!==e?this.Ho.reset():t&&t.code===Ak.RESOURCE_EXHAUSTED?(Ek(t.toString()),Ek("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):t&&t.code===Ak.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(t)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),t=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Go===t&&this.__(e,n)}),(t=>{e((()=>{const e=new Pk(Ak.UNKNOWN,"Fetching auth token failed: "+t.message);return this.a_(e)}))}))}__(e,t){const n=this.o_(this.Go);this.stream=this.u_(e,t),this.stream.Io((()=>{n((()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,(()=>(this.Yo()&&(this.state=3),Promise.resolve()))),this.listener.Io())))})),this.stream.Eo((e=>{n((()=>this.a_(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Zo(){this.state=5,this.Ho.Qo((async()=>{this.state=0,this.start()}))}a_(e){return _k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return t=>{this._i.enqueueAndForget((()=>this.Go===e?t():(_k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class uC extends cC{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}u_(e,t){return this.connection.Mo("Listen",e,t)}onMessage(e){this.Ho.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Ck(),s=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(Tk(void 0===t||"string"==typeof t),v_.fromBase64String(t||"")):(Tk(void 0===t||t instanceof Uint8Array),v_.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(e){const t=void 0===e.code?Ak.UNKNOWN:PS(e.code);return new Pk(t,e.message||"")}(a);n=new zS(i,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=rx(e,r.document.name),s=ZS(r.document.updateTime),o=r.document.createTime?ZS(r.document.createTime):Hk.min(),a=new $_({mapValue:{fields:r.document.fields}}),l=H_.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new FS(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=rx(e,r.document),s=r.readTime?ZS(r.readTime):Hk.min(),o=H_.newNoDocument(i,s),a=r.removedTargetIds||[];n=new FS([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=rx(e,r.document),s=r.removedTargetIds||[];n=new FS([],s,i,null)}else{if(!("filter"in t))return Ck();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new TS(r,i),o=e.targetId;n=new US(o,s)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Hk.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Hk.min():t.readTime?ZS(t.readTime):Hk.min()}(e);return this.listener.c_(t,n)}l_(e){const t={};t.database=sx(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=yE(r)?{documents:lx(e,r)}:{query:cx(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=XS(e,t.resumeToken);const r=QS(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Hk.min())>0){n.readTime=YS(e,t.snapshotVersion.toTimestamp());const r=QS(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ck()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.n_(t)}h_(e){const t={};t.database=sx(this.serializer),t.removeTarget=e,this.n_(t)}}class hC extends cC{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,t){return this.connection.Mo("Write",e,t)}onMessage(e){if(Tk(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const t=function(e,t){return e&&e.length>0?(Tk(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ZS(e.updateTime):ZS(t);return n.isEqual(Hk.min())&&(n=ZS(t)),new lS(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=ZS(e.commitTime);return this.listener.T_(n,t)}return Tk(!e.writeResults||0===e.writeResults.length),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=sx(this.serializer),this.n_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof yS)n={update:ax(e,t.key,t.value)};else if(t instanceof _S)n={delete:nx(e,t.key)};else if(t instanceof vS)n={update:ax(e,t.key,t.data),updateMask:vx(t.fieldMask)};else{if(!(t instanceof ES))return Ck();n={verify:nx(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof eS)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof tS)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof rS)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof sS)return{fieldPath:t.field.canonicalString(),increment:n.Te};throw Ck()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:JS(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Ck())),n;var r,i}(this.serializer,e)))};this.n_(t)}}
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
 */class dC extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.R_=!1}V_(){if(this.R_)throw new Pk(Ak.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,n){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.bo(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ak.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Pk(Ak.UNKNOWN,e.toString())}))}Fo(e,t,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Fo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ak.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Pk(Ak.UNKNOWN,e.toString())}))}terminate(){this.R_=!0}}class fC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){0===this.f_&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve()))))}b_(e){"Online"===this.state?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,"Online"===e&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(Ek(t),this.p_=!1):_k("OnlineStateTracker",t)}D_(){null!==this.g_&&(this.g_.cancel(),this.g_=null)}}
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
 */class pC{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so((e=>{n.enqueueAndForget((async()=>{EC(this)&&(_k("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Ik(e);t.F_.add(4),await gC(t),t.O_.set("Unknown"),t.F_.delete(4),await mC(t)}(this))}))})),this.O_=new fC(n,r)}}async function mC(e){if(EC(e))for(const t of e.M_)await t(!0)}async function gC(e){for(const t of e.M_)await t(!1)}function yC(e,t){const n=Ik(e);n.v_.has(t.targetId)||(n.v_.set(t.targetId,t),_C(n)?kC(n):zC(n).Yo()&&wC(n,t))}function vC(e,t){const n=Ik(e),r=zC(n);n.v_.delete(t),r.Yo()&&bC(n,t),0===n.v_.size&&(r.Yo()?r.e_():EC(n)&&n.O_.set("Unknown"))}function wC(e,t){if(e.N_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Hk.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}zC(e).l_(t)}function bC(e,t){e.N_.Le(t),zC(e).h_(t)}function kC(e){e.N_=new BS({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.v_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),zC(e).start(),e.O_.y_()}function _C(e){return EC(e)&&!zC(e).Jo()&&e.v_.size>0}function EC(e){return 0===Ik(e).F_.size}function SC(e){e.N_=void 0}async function xC(e){e.v_.forEach(((t,n)=>{wC(e,t)}))}async function CC(e,t){SC(e),_C(e)?(e.O_.b_(t),kC(e)):e.O_.set("Unknown")}async function TC(e,t,n){if(e.O_.set("Online"),t instanceof zS&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.v_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.v_.delete(r),e.N_.removeTarget(r))}(e,t)}catch(r){_k("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await IC(e,r)}else if(t instanceof FS?e.N_.Ge(t):t instanceof US?e.N_.Xe(t):e.N_.He(t),!n.isEqual(Hk.min()))try{const t=await Hx(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.N_._t(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.v_.get(r);i&&e.v_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.v_.get(t);if(!r)return;e.v_.set(t,r.withResumeToken(v_.EMPTY_BYTE_STRING,r.snapshotVersion)),bC(e,t);const i=new bx(r.target,t,n,r.sequenceNumber);wC(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){_k("RemoteStore","Failed to raise snapshot:",i),await IC(e,i)}}async function IC(e,t,n){if(!i_(t))throw t;e.F_.add(1),await gC(e),e.O_.set("Offline"),n||(n=()=>Hx(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{_k("RemoteStore","Retrying IndexedDB access"),await n(),e.F_.delete(1),await mC(e)}))}function AC(e,t){return t().catch((n=>IC(e,n,t)))}async function PC(e){const t=Ik(e),n=VC(t);let r=t.C_.length>0?t.C_[t.C_.length-1].batchId:-1;for(;NC(t);)try{const e=await Wx(t.localStore,r);if(null===e){0===t.C_.length&&n.e_();break}r=e.batchId,RC(t,e)}catch(i){await IC(t,i)}OC(t)&&DC(t)}function NC(e){return EC(e)&&e.C_.length<10}function RC(e,t){e.C_.push(t);const n=VC(e);n.Yo()&&n.I_&&n.d_(t.mutations)}function OC(e){return EC(e)&&!VC(e).Jo()&&e.C_.length>0}function DC(e){VC(e).start()}async function LC(e){VC(e).A_()}async function MC(e){const t=VC(e);for(const n of e.C_)t.d_(n.mutations)}async function jC(e,t,n){const r=e.C_.shift(),i=xS.from(r,t,n);await AC(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await PC(e)}async function FC(e,t){t&&VC(e).I_&&await async function(e,t){if(function(e){switch(e){default:return Ck();case Ak.CANCELLED:case Ak.UNKNOWN:case Ak.DEADLINE_EXCEEDED:case Ak.RESOURCE_EXHAUSTED:case Ak.INTERNAL:case Ak.UNAVAILABLE:case Ak.UNAUTHENTICATED:return!1;case Ak.INVALID_ARGUMENT:case Ak.NOT_FOUND:case Ak.ALREADY_EXISTS:case Ak.PERMISSION_DENIED:case Ak.FAILED_PRECONDITION:case Ak.ABORTED:case Ak.OUT_OF_RANGE:case Ak.UNIMPLEMENTED:case Ak.DATA_LOSS:return!0}}(n=t.code)&&n!==Ak.ABORTED){const n=e.C_.shift();VC(e).Xo(),await AC(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await PC(e)}var n}(e,t),OC(e)&&DC(e)}async function UC(e,t){const n=Ik(e);n.asyncQueue.verifyOperationInProgress(),_k("RemoteStore","RemoteStore received new credentials");const r=EC(n);n.F_.add(3),await gC(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.F_.delete(3),await mC(n)}function zC(e){return e.B_||(e.B_=function(e,t,n){const r=Ik(e);return r.V_(),new uC(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Io:xC.bind(null,e),Eo:CC.bind(null,e),c_:TC.bind(null,e)}),e.M_.push((async t=>{t?(e.B_.Xo(),_C(e)?kC(e):e.O_.set("Unknown")):(await e.B_.stop(),SC(e))}))),e.B_}function VC(e){return e.L_||(e.L_=function(e,t,n){const r=Ik(e);return r.V_(),new hC(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Io:LC.bind(null,e),Eo:FC.bind(null,e),E_:MC.bind(null,e),T_:jC.bind(null,e)}),e.M_.push((async t=>{t?(e.L_.Xo(),await PC(e)):(await e.L_.stop(),e.C_.length>0&&(_k("RemoteStore",`Stopping write stream with ${e.C_.length} pending writes`),e.C_=[]))}))),e.L_
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
 */}class BC{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Nk,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new BC(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Pk(Ak.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $C(e,t){if(Ek("AsyncQueue",`${t}: ${e}`),i_(e))return new Pk(Ak.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class qC{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Yk.comparator(t.key,n.key):(e,t)=>Yk.comparator(e.key,t.key),this.keyedMap=FE(),this.sortedSet=new h_(this.comparator)}static emptySet(e){return new qC(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof qC))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new qC;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class HC{constructor(){this.k_=new h_(Yk.comparator)}track(e){const t=e.doc.key,n=this.k_.get(t);n?0!==e.type&&3===n.type?this.k_=this.k_.insert(t,e):3===e.type&&1!==n.type?this.k_=this.k_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.k_=this.k_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.k_=this.k_.remove(t):1===e.type&&2===n.type?this.k_=this.k_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):Ck():this.k_=this.k_.insert(t,e)}q_(){const e=[];return this.k_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class KC{constructor(e,t,n,r,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new KC(e,t,qC.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&IE(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class WC{constructor(){this.Q_=void 0,this.listeners=[]}}class GC{constructor(){this.queries=new DE((e=>AE(e)),IE),this.onlineState="Unknown",this.K_=new Set}}async function QC(e,t){const n=Ik(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new WC),i)try{s.Q_=await n.onListen(r)}catch(o){const e=$C(o,`Initialization of query '${PE(t.query)}' failed`);return void t.onError(e)}n.queries.set(r,s),s.listeners.push(t),t.U_(n.onlineState),s.Q_&&t.W_(s.Q_)&&ZC(n)}async function YC(e,t){const n=Ik(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function XC(e,t){const n=Ik(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.W_(i)&&(r=!0);t.Q_=i}}r&&ZC(n)}function JC(e,t,n){const r=Ik(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function ZC(e){e.K_.forEach((e=>{e.next()}))}class eT{constructor(e,t,n){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=n||{}}W_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new KC(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Z_||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}H_(e){if(e.docChanges.length>0)return!0;const t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Y_(e){e=KC.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}
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
 */class tT{constructor(e){this.key=e}}class nT{constructor(e){this.key=e}}class rT{constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=HE(),this.mutatedKeys=HE(),this.ua=RE(e),this.ca=new qC(this.ua)}get la(){return this.oa}ha(e,t){const n=t?t.Pa:new HC,r=t?t.ca:this.ca;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const c=r.get(e),u=NE(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Ia(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.ua(u,a)>0||l&&this.ua(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||l)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ca:s,Pa:n,es:o,mutatedKeys:i}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.q_();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ck()}};return n(e)-n(t)}(e.type,t.type)||this.ua(e.doc,t.doc))),this.da(n);const s=t?this.Ta():[],o=0===this.aa.size&&this.current?1:0,a=o!==this._a;return this._a=o,0!==i.length||a?{snapshot:new KC(this.query,e.ca,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ea:s}:{Ea:s}}U_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new HC,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach((e=>this.oa=this.oa.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.oa=this.oa.delete(e))),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=HE(),this.ca.forEach((e=>{this.Aa(e.key)&&(this.aa=this.aa.add(e.key))}));const t=[];return e.forEach((e=>{this.aa.has(e)||t.push(new nT(e))})),this.aa.forEach((n=>{e.has(n)||t.push(new tT(n))})),t}Ra(e){this.oa=e.Ps,this.aa=HE();const t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return KC.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}}class iT{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class sT{constructor(e){this.key=e,this.ma=!1}}class oT{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new DE((e=>AE(e)),IE),this.pa=new Map,this.ya=new Set,this.wa=new h_(Yk.comparator),this.Sa=new Map,this.ba=new Nx,this.Da={},this.Ca=new Map,this.va=xx.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}async function aT(e,t){const n=function(e){const t=Ik(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=uT.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ST.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=dT.bind(null,t),t.fa.c_=XC.bind(null,t.eventManager),t.fa.xa=JC.bind(null,t.eventManager),t}(e);let r,i;const s=n.ga.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const e=await function(e,t){const n=Ik(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Kr.getTargetData(e,t).next((i=>i?(r=i,r_.resolve(r)):n.Kr.allocateTargetId(e).next((i=>(r=new bx(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Kr.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.rs.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.rs=n.rs.insert(e.targetId,e),n.ss.set(t,e.targetId)),e}))}(n.localStore,xE(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await async function(e,t,n,r,i){e.Ma=(t,n,r)=>async function(e,t,n,r){let i=t.view.ha(n);i.es&&(i=await Qx(e.localStore,t.query,!1).then((({documents:e})=>t.view.ha(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return wT(e,t.targetId,o.Ea),o.snapshot}(e,t,n,r);const s=await Qx(e.localStore,t,!0),o=new rT(t,s.Ps),a=o.ha(s.documents),l=jS.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),c=o.applyChanges(a,e.isPrimaryClient,l);wT(e,n,c.Ea);const u=new iT(t,n,o);return e.ga.set(t,u),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),c.snapshot}(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&yC(n.remoteStore,e)}return i}async function lT(e,t){const n=Ik(e),r=n.ga.get(t),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter((e=>!IE(e,t)))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Gx(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),vC(n.remoteStore,r.targetId),yT(n,r.targetId)})).catch(n_)):(yT(n,r.targetId),await Gx(n.localStore,r.targetId,!0))}async function cT(e,t,n){const r=function(e){const t=Ik(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=fT.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=pT.bind(null,t),t}(e);try{const e=await function(e,t){const n=Ik(e),r=qk.now(),i=t.reduce(((e,t)=>e.add(t.key)),HE());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=ME(),l=HE();return n._s.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=mS(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new vS(e.key,t,q_(t.value.mapValue),cS.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:UE(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Da[e.currentUser.toKey()];r||(r=new h_(Bk)),r=r.insert(t,n),e.Da[e.currentUser.toKey()]=r}(r,e.batchId,n),await _T(r,e.changes),await PC(r.remoteStore)}catch(i){const e=$C(i,"Failed to persist write");n.reject(e)}}async function uT(e,t){const n=Ik(e);try{const e=await Kx(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Sa.get(t);r&&(Tk(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.ma=!0:e.modifiedDocuments.size>0?Tk(r.ma):e.removedDocuments.size>0&&(Tk(r.ma),r.ma=!1))})),await _T(n,e,t)}catch(r){await n_(r)}}function hT(e,t,n){const r=Ik(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ga.forEach(((n,r)=>{const i=r.view.U_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Ik(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.U_(t)&&(r=!0)})),r&&ZC(n)}(r.eventManager,t),e.length&&r.fa.c_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function dT(e,t,n){const r=Ik(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Sa.get(t),s=i&&i.key;if(s){let e=new h_(Yk.comparator);e=e.insert(s,H_.newNoDocument(s,Hk.min()));const n=HE().add(s),i=new MS(Hk.min(),new Map,new h_(Bk),e,n);await uT(r,i),r.wa=r.wa.remove(s),r.Sa.delete(t),kT(r)}else await Gx(r.localStore,t,!1).then((()=>yT(r,t,n))).catch(n_)}async function fT(e,t){const n=Ik(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Ik(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=r_.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Tk(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=HE();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);gT(n,r,null),mT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _T(n,e)}catch(i){await n_(i)}}async function pT(e,t,n){const r=Ik(e);try{const e=await function(e,t){const n=Ik(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Tk(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);gT(r,t,n),mT(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await _T(r,e)}catch(i){await n_(i)}}function mT(e,t){(e.Ca.get(t)||[]).forEach((e=>{e.resolve()})),e.Ca.delete(t)}function gT(e,t,n){const r=Ik(e);let i=r.Da[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Da[r.currentUser.toKey()]=i}}function yT(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.mr(t).forEach((t=>{e.ba.containsKey(t)||vT(e,t)}))}function vT(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);null!==n&&(vC(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),kT(e))}function wT(e,t,n){for(const r of n)r instanceof tT?(e.ba.addReference(r.key,t),bT(e,r)):r instanceof nT?(_k("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||vT(e,r.key)):Ck()}function bT(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(_k("SyncEngine","New document in limbo: "+n),e.ya.add(r),kT(e))}function kT(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new Yk(Wk.fromString(t)),r=e.va.next();e.Sa.set(r,new sT(n)),e.wa=e.wa.insert(n,r),yC(e.remoteStore,new bx(xE(wE(n.path)),r,"TargetPurposeLimboResolution",s_.ae))}}async function _T(e,t,n){const r=Ik(e),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach(((e,a)=>{o.push(r.Ma(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=zx.$i(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.fa.c_(i),await async function(e,t){const n=Ik(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>r_.forEach(t,(t=>r_.forEach(t.Qi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>r_.forEach(t.Ki,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!i_(r))throw r;_k("LocalStore","Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.rs.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.rs=n.rs.insert(e,i)}}}(r.localStore,s))}async function ET(e,t){const n=Ik(e);if(!n.currentUser.isEqual(t)){_k("SyncEngine","User change. New user:",t.toKey());const e=await qx(n.localStore,t);n.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).Ca.forEach((e=>{e.forEach((e=>{e.reject(new Pk(Ak.CANCELLED,i))}))})),r.Ca.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await _T(n,e.cs)}var r,i}function ST(e,t){const n=Ik(e),r=n.Sa.get(t);if(r&&r.ma)return HE().add(r.key);{let e=HE();const r=n.pa.get(t);if(!r)return e;for(const t of r){const r=n.ga.get(t);e=e.unionWith(r.view.la)}return e}}class xT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=aC(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return function(e,t,n,r){return new $x(e,t,n,r)}(this.persistence,new Bx,e.initialUser,this.serializer)}createPersistence(e){return new jx(Ux.Jr,this.serializer)}createSharedClientState(e){return new Xx}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class CT{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>hT(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ET.bind(null,this.syncEngine),await async function(e,t){const n=Ik(e);t?(n.F_.delete(2),await mC(n)):t||(n.F_.add(2),await gC(n),n.O_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new GC}createDatastore(e){const t=aC(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new sC(r));var r;return function(e,t,n,r){return new dC(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>hT(this.syncEngine,e,0),s=Zx.C()?new Zx:new Jx,new pC(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new oT(e,t,n,r,i,s);return o&&(a.Fa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Ik(e);_k("RemoteStore","RemoteStore shutting down."),t.F_.add(5),await gC(t),t.x_.shutdown(),t.O_.set("Unknown")}(this.remoteStore)}}
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
 */class TT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Ek("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
 */class IT{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=vk.UNAUTHENTICATED,this.clientId=Vk.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{_k("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(_k("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Pk(Ak.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nk;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=$C(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function AT(e,t){e.asyncQueue.verifyOperationInProgress(),_k("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await qx(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function PT(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){_k("FirestoreClient","Using user provided OfflineComponentProvider");try{await AT(e,e._uninitializedComponentsProvider._offline)}catch(t){const r=t;if(!function(e){return"FirebaseError"===e.name?e.code===Ak.FAILED_PRECONDITION||e.code===Ak.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(r))throw r;Sk("Error using user provided cache. Falling back to memory cache: "+r),await AT(e,new xT)}}else _k("FirestoreClient","Using default OfflineComponentProvider"),await AT(e,new xT);return e._offlineComponents}(e);_k("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>UC(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>UC(t.remoteStore,n))),e._onlineComponents=t}async function NT(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(_k("FirestoreClient","Using user provided OnlineComponentProvider"),await PT(e,e._uninitializedComponentsProvider._online)):(_k("FirestoreClient","Using default OnlineComponentProvider"),await PT(e,new CT))),e._onlineComponents}async function RT(e){const t=await NT(e),n=t.eventManager;return n.onListen=aT.bind(null,t.syncEngine),n.onUnlisten=lT.bind(null,t.syncEngine),n}
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
function OT(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
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
 */}const DT=new Map;
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
 */function LT(e,t,n){if(!n)throw new Pk(Ak.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function MT(e){if(!Yk.isDocumentKey(e))throw new Pk(Ak.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function jT(e){if(Yk.isDocumentKey(e))throw new Pk(Ak.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function FT(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Ck()}function UT(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Pk(Ak.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=FT(e);throw new Pk(Ak.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
 */class zT{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new Pk(Ak.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Pk(Ak.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new Pk(Ak.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=OT(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Pk(Ak.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Pk(Ak.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Pk(Ak.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class VT{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zT({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Pk(Ak.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Pk(Ak.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zT(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Ok;switch(e.type){case"firstParty":return new jk(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Pk(Ak.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=DT.get(e);t&&(_k("ComponentProvider","Removing Datastore"),DT.delete(e),t.terminate())}(this),Promise.resolve()}}function BT(e,t,n,r={}){var i;const s=(e=UT(e,VT))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&Sk("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=vk.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Nm(JSON.stringify({alg:"none",type:"JWT"})),Nm(JSON.stringify(s)),""].join(".")}(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Pk(Ak.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new vk(s)}e._authCredentials=new Dk(new Rk(t,n))}}
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
 */class $T{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new $T(this.firestore,e,this._query)}}class qT{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new HT(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qT(this.firestore,e,this._key)}}class HT extends $T{constructor(e,t,n){super(e,t,wE(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qT(this.firestore,null,new Yk(e))}withConverter(e){return new HT(this.firestore,e,this._path)}}function KT(e,t,...n){if(e=Xm(e),LT("collection","path",t),e instanceof VT){const r=Wk.fromString(t,...n);return jT(r),new HT(e,null,r)}{if(!(e instanceof qT||e instanceof HT))throw new Pk(Ak.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Wk.fromString(t,...n));return jT(r),new HT(e.firestore,null,r)}}function WT(e,t,...n){if(e=Xm(e),1===arguments.length&&(t=Vk.V()),LT("doc","path",t),e instanceof VT){const r=Wk.fromString(t,...n);return MT(r),new qT(e,null,new Yk(r))}{if(!(e instanceof qT||e instanceof HT))throw new Pk(Ak.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Wk.fromString(t,...n));return MT(r),new qT(e.firestore,e instanceof HT?e.converter:null,new Yk(r))}}
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
 */class GT{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new lC(this,"async_queue_retry"),this.ou=()=>{const e=oC();e&&_k("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ho.$o()};const e=oC();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const t=oC();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise((()=>{}));const t=new Nk;return this.au((()=>this.eu&&this.iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xa.push(e),this.uu())))}async uu(){if(0!==this.Xa.length){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!i_(e))throw e;_k("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo((()=>this.uu()))}}au(e){const t=this.Za.then((()=>(this.ru=!0,e().catch((e=>{this.nu=e,this.ru=!1;throw Ek("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.ru=!1,e))))));return this.Za=t,t}enqueueAfterDelay(e,t,n){this._u(),this.su.indexOf(e)>-1&&(t=0);const r=BC.createAndSchedule(this,e,t,n,(e=>this.cu(e)));return this.tu.push(r),r}_u(){this.nu&&Ck()}verifyOperationInProgress(){}async lu(){let e;do{e=this.Za,await e}while(e!==this.Za)}hu(e){for(const t of this.tu)if(t.timerId===e)return!0;return!1}Pu(e){return this.lu().then((()=>{this.tu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.tu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.lu()}))}Iu(e){this.su.push(e)}cu(e){const t=this.tu.indexOf(e);this.tu.splice(t,1)}}class QT extends VT{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new GT,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||JT(this),this._firestoreClient.terminate()}}function YT(e,t){const n="string"==typeof e?e:t||"(default)",r=Mg("object"==typeof e?e:Vg(),"firestore").getImmediate({identifier:n});if(!r._initialized){const e=Mm("firestore");e&&BT(r,...e)}return r}function XT(e){return e._firestoreClient||JT(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function JT(e){var t,n,r;const i=e._freezeSettings(),s=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",l=e._persistenceKey,new C_(o,a,l,(c=i).host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,OT(c.experimentalLongPollingOptions),c.useFetchStreams));var o,a,l,c;e._firestoreClient=new IT(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
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
 */class ZT{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ZT(v_.fromBase64String(e))}catch(t){throw new Pk(Ak.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ZT(v_.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class eI{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Pk(Ak.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qk(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
 */class tI{constructor(e){this._methodName=e}}
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
 */class nI{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Pk(Ak.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Pk(Ak.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Bk(this._lat,e._lat)||Bk(this._long,e._long)}}
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
 */const rI=/^__.*__$/;class iI{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new vS(e,this.data,this.fieldMask,t,this.fieldTransforms):new yS(e,this.data,t,this.fieldTransforms)}}function sI(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ck()}}class oI{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.du(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new oI(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Eu({path:n,Ru:!1});return r.Vu(e),r}mu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Eu({path:n,Ru:!1});return r.du(),r}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return yI(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(0===e.length)throw this.gu("Document fields must not be empty");if(sI(this.Tu)&&rI.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class aI{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||aC(e)}wu(e,t,n,r=!1){return new oI({Tu:e,methodName:t,yu:n,path:Qk.emptyPath(),Ru:!1,pu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lI(e){const t=e._freezeSettings(),n=aC(e._databaseId);return new aI(e._databaseId,!!t.ignoreUndefinedProperties,n)}function cI(e,t,n,r,i,s={}){const o=e.wu(s.merge||s.mergeFields?2:0,t,n,i);fI("Data must be an object, but it was:",o,r);const a=hI(r,o);let l,c;if(s.merge)l=new g_(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=pI(t,r,n);if(!o.contains(i))throw new Pk(Ak.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);vI(e,i)||e.push(i)}l=new g_(e),c=o.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=o.fieldTransforms;return new iI(new $_(a),l,c)}function uI(e,t){if(dI(e=Xm(e)))return fI("Unsupported field value:",t,e),hI(e,t);if(e instanceof tI)return function(e,t){if(!sI(t.Tu))throw t.gu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.gu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Ru&&4!==t.Tu)throw t.gu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=uI(i,t.fu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Xm(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return QE(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=qk.fromDate(e);return{timestampValue:YS(t.serializer,n)}}if(e instanceof qk){const n=new qk(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:YS(t.serializer,n)}}if(e instanceof nI)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ZT)return{bytesValue:XS(t.serializer,e._byteString)};if(e instanceof qT){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.gu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ex(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.gu(`Unsupported field value: ${FT(e)}`)}(e,t)}function hI(e,t){const n={};return u_(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):c_(e,((e,r)=>{const i=uI(r,t.Au(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function dI(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof qk||e instanceof nI||e instanceof ZT||e instanceof qT||e instanceof tI)}function fI(e,t,n){if(!dI(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=FT(n);throw"an object"===r?t.gu(e+" a custom object"):t.gu(e+" "+r)}var r}function pI(e,t,n){if((t=Xm(t))instanceof eI)return t._internalPath;if("string"==typeof t)return gI(e,t);throw yI("Field path arguments must be of type string or ",e,!1,void 0,n)}const mI=new RegExp("[~\\*/\\[\\]]");function gI(e,t,n){if(t.search(mI)>=0)throw yI(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new eI(...t.split("."))._internalPath}catch(r){throw yI(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function yI(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Pk(Ak.INVALID_ARGUMENT,a+e+l)}function vI(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class wI{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qT(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new bI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(kI("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class bI extends wI{data(){return super.data()}}function kI(e,t){return"string"==typeof t?gI(e,t):t instanceof eI?t._internalPath:t._delegate._internalPath}
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
 */class _I{}class EI extends _I{}class SI extends EI{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new SI(e,t,n)}_apply(e){const t=this._parse(e);return II(e._query,t),new $T(e.firestore,e.converter,CE(e._query,t))}_parse(e){const t=lI(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Pk(Ak.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){TI(o,s);const t=[];for(const n of o)t.push(CI(r,e,n));a={arrayValue:{values:t}}}else a=CI(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||TI(o,s),a=function(e,t,n,r=!1){return uI(n,e.wu(r?4:3,t))}(n,t,o,"in"===s||"not-in"===s);return J_.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}class xI extends _I{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new xI(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Z_.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)II(n,i),n=CE(n,i)}(e._query,t),new $T(e.firestore,e.converter,CE(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function CI(e,t,n){if("string"==typeof(n=Xm(n))){if(""===n)throw new Pk(Ak.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!EE(t)&&-1!==n.indexOf("/"))throw new Pk(Ak.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Wk.fromString(n));if(!Yk.isDocumentKey(r))throw new Pk(Ak.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return M_(e,new Yk(r))}if(n instanceof qT)return M_(e,n._key);throw new Pk(Ak.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${FT(n)}.`)}function TI(e,t){if(!Array.isArray(e)||0===e.length)throw new Pk(Ak.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function II(e,t){if(t.isInequality()){const n=_E(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new Pk(Ak.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=kE(e);null!==i&&function(e,t,n){if(!n.isEqual(t))throw new Pk(Ak.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}(0,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Pk(Ak.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Pk(Ak.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class AI{convertValue(e,t="none"){switch(A_(e)){case 0:return null;case 1:return e.booleanValue;case 2:return k_(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(__(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Ck()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return c_(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new nI(k_(e.latitude),k_(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=S_(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(x_(e));default:return null}}convertTimestamp(e){const t=b_(e);return new qk(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Wk.fromString(e);Tk(wx(n));const r=new T_(n.get(1),n.get(3)),i=new Yk(n.popFirst(5));return r.isEqual(t)||Ek(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
class PI{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class NI extends wI{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new RI(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(kI("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class RI extends NI{data(e={}){return super.data(e)}}class OI{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new PI(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new RI(this._firestore,this._userDataWriter,n.key,n,new PI(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Pk(Ak.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new RI(e._firestore,e._userDataWriter,n.doc.key,n.doc,new PI(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new RI(e._firestore,e._userDataWriter,t.doc.key,t.doc,new PI(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:DI(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function DI(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ck()}}
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
 */function LI(e){e=UT(e,qT);const t=UT(e.firestore,QT);return function(e,t,n={}){const r=new Nk;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new TT({next:s=>{t.enqueueAndForget((()=>YC(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Pk(Ak.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Pk(Ak.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new eT(wE(n.path),s,{includeMetadataChanges:!0,Z_:!0});return QC(e,o)}(await RT(e),e.asyncQueue,t,n,r))),r.promise}(XT(t),e._key).then((n=>function(e,t,n){const r=n.docs.get(t._key),i=new MI(e);return new NI(e,i,t._key,r,new PI(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n)))}class MI extends AI{constructor(e){super(),this.firestore=e}convertBytes(e){return new ZT(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qT(this.firestore,null,t)}}function jI(e){e=UT(e,$T);const t=UT(e.firestore,QT),n=XT(t),r=new MI(t);return function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Pk(Ak.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),function(e,t,n={}){const r=new Nk;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new TT({next:n=>{t.enqueueAndForget((()=>YC(e,o))),n.fromCache&&"server"===r.source?i.reject(new Pk(Ak.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new eT(n,s,{includeMetadataChanges:!0,Z_:!0});return QC(e,o)}(await RT(e),e.asyncQueue,t,n,r))),r.promise}(n,e._query).then((n=>new OI(t,r,e,n)))}function FI(e,t){const n=UT(e.firestore,QT),r=WT(e),i=function(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}(e.converter,t);return function(e,t){return function(e,t){const n=new Nk;return e.asyncQueue.enqueueAndForget((async()=>cT(await function(e){return NT(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(XT(e),t)}(n,[cI(lI(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,cS.exists(!1))]).then((()=>r))}function UI(){const[e,t]=z.useState([]),{categoryId:n}=Dp();return z.useEffect((()=>{const e=YT();let r;r=n?function(e,t,...n){let r=[];t instanceof _I&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof xI)).length,n=e.filter((e=>e instanceof SI)).length;if(t>1||t>0&&n>0)throw new Pk(Ak.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}(KT(e,"productos"),function(e,t,n){const r=t,i=kI("where",e);return SI._create(i,r,n)}("category","==",n)):KT(e,"productos"),jI(r).then((e=>{t(e.docs.map((e=>({id:e.id,...e.data()}))))})).catch((e=>{console.error("Error al obtener los datos:",e)}))}),[n]),Y.jsxs(VI,{children:[Y.jsx(BI,{children:"Bienvenido a Gojo Store, la mejor tienda de Funko Pop"}),Y.jsx(Em,{productos:e})]})}!function(e,t=!0){wk=Ug,Lg(new Jm("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new QT(new Lk(e.getProvider("auth-internal")),new Uk(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Pk(Ak.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new T_(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Bg(yk,"4.2.0",e),Bg(yk,"4.2.0","esm2017")}();const zI=Mf`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`,VI=Lf.div`
  margin: auto;
  text-align: center;
  animation: ${zI} 1s ease-in-out;
`,BI=Lf.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-top: 20px;
`;function $I({onAdd:e,quantity:t,setQuantity:n}){const[r,i]=z.useState(t),[s,o]=z.useState(!1);z.useEffect((()=>{i(t)}),[t]);return Y.jsxs(qI,{children:[Y.jsx(HI,{children:"Cantidad:"}),Y.jsxs(KI,{children:[Y.jsx(WI,{onClick:()=>{r>1&&(i((e=>e-1)),o(!1),n(r-1))},children:"-"}),Y.jsx(GI,{children:r}),Y.jsx(WI,{onClick:()=>{i((e=>e+1)),o(!1),n(r+1)},children:"+"})]}),s?Y.jsx(nm,{to:"/cart",children:Y.jsxs(QI,{children:["Terminar mi compra (",r," seleccionado(s))"]})}):Y.jsx(QI,{onClick:()=>{e(r),o(!0)},children:"Agregar al carrito"})]})}const qI=Lf.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`,HI=Lf.span`
  font-size: 1rem;
  margin-bottom: 10px;
`,KI=Lf.div`
  display: flex;
  align-items: center;
`,WI=Lf.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 5px;
`,GI=Lf.span`
  font-size: 1rem;
  font-weight: bold;
  margin: 0 10px;
`,QI=Lf.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  margin-top: 10px;
`;function YI({item:e}){const[t,n]=z.useState(1),{addItem:r,isInCart:i}=z.useContext(lm);return Y.jsx(XI,{children:Y.jsxs(JI,{children:[Y.jsx(ZI,{src:e.image,alt:e.name,loading:"lazy"}),Y.jsxs(eA,{children:[Y.jsx(tA,{children:e.name}),Y.jsx(nA,{children:e.descripcion}),Y.jsxs(rA,{children:["Categoría: ",e.category]}),Y.jsxs(iA,{children:["Precio: $",e.price]}),Y.jsx($I,{onAdd:t=>{e.stock-=t,n(t),r({id:e.id,image:e.image,name:e.name,price:e.price,quantity:t})},quantity:t,setQuantity:n}),i(e.id)?Y.jsx("p",{children:"Este producto está en tu carrito."}):null]})]})})}const XI=Lf.div`
  margin-botton: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f7f7;
`,JI=Lf.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 80%; /* Reducimos el tamaño del contenedor */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`,ZI=Lf.img`
  max-width: 30%;
  height: auto;
  margin-right: 20px;
`,eA=Lf.div`
  flex-grow: 1;
  text-align: left;
`,tA=Lf.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #333;
`,nA=Lf.p`
  font-size: 1rem;
  color: #555;
`,rA=Lf.p`
  font-size: 1rem;
  color: #555;
`,iA=Lf.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #007bff;
  margin-top: 10px;
`;function sA(){const[e,t]=z.useState({}),{itemId:n}=Dp();return z.useEffect((()=>{LI(WT(YT(),"productos",n)).then((e=>{e.exists()&&t({id:e.id,...e.data()})}))}),[n]),Y.jsxs(Y.Fragment,{children:[Y.jsx(aA,{children:Y.jsx("p",{className:"nombre",children:"Bienvenido a Gojo Store, la mejor tienda de funko pop"})}),Y.jsx("div",{children:Y.jsx(YI,{item:e})})]})}const oA=Mf`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`,aA=Lf.div`
  margin: auto;
  text-align: center;
  animation: ${oA} 1s ease-in-out;

  .nombre {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-top: 20px;
  }
`;function lA(){const{cartItems:e,removeItem:t,clear:n,getTotalPrice:r}=z.useContext(lm);return Y.jsxs(cA,{children:[Y.jsx(uA,{children:"Carrito de Compras"}),0===e.length?Y.jsx(hA,{children:"No hay ítems en el carrito."}):Y.jsxs("div",{children:[e.map((e=>Y.jsxs(dA,{children:[Y.jsx("img",{src:e.image,alt:e.name,loading:"lazy"}),Y.jsxs("div",{children:[Y.jsx("p",{children:e.name}),Y.jsxs("p",{children:["Precio: $",e.price]}),Y.jsxs("p",{children:["Cantidad: ",e.quantity]})]}),Y.jsx("button",{onClick:()=>t(e.id),children:"Eliminar"})]},e.id))),Y.jsxs(fA,{children:["Precio Total: $",r()]}),Y.jsx(pA,{onClick:n,children:"Vaciar Carrito"}),Y.jsx(gA,{as:nm,to:"/checkout",children:"Finalizar Compra"})," "]}),Y.jsx(mA,{to:"/",children:"Volver a la tienda"})]})}const cA=Lf.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 20px auto;
  max-width: 600px;
`,uA=Lf.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`,hA=Lf.p`
  font-size: 1rem;
`,dA=Lf.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* Aumenta el espacio entre los elementos del carrito */

  img {
    max-width: 100px;
    height: auto;
    margin-right: 10px;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }

  label {
    font-size: 1rem;
    margin-right: 5px;
  }

  input {
    font-size: 1rem;
    width: 40px;
  }

  button {
    background-color: #ff0000;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 10px;
    margin-left: 30px; 
  }

  button:hover {
    background-color: #ff3333; 
  }
`,fA=Lf.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;
`,pA=Lf.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: #0056b3;
  }
`,mA=Lf(nm)`
  display: block;
  margin-top: 20px;
  font-size: 1rem;
  text-decoration: none;
`,gA=Lf.button`
background-color: #007bff;
color: #fff;
border: none;
border-radius: 5px;
padding: 10px 20px;
font-size: 1rem;
cursor: pointer;
margin-top: 20px;
transition: background-color 0.3s ease; 
margin-bottom: 10px;
margin-left: 20px; 

&:hover {
  background-color: #0056b3;
`;function yA({ordenId:e}){return e?Y.jsxs(vA,{children:[Y.jsx(wA,{children:`Gracias por tu compra, tu orden de compra es: ${e}`}),Y.jsx(bA,{as:nm,to:"/",children:"Seguir Comprando"})]}):null}const vA=Lf.div`
  font-family: "Poppins", sans-serif;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
`,wA=Lf.h1`
  text-align: center;
  margin-bottom: 20px;
`,bA=Lf.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;
  margin-left: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;function kA(){const[e,t]=z.useState(""),[n,r]=z.useState(""),[i,s]=z.useState(""),[o,a]=z.useState(),{cartItems:l,getTotalPrice:c,clear:u}=z.useContext(lm);return o?Y.jsx(yA,{ordenId:o}):Y.jsx(_A,{children:Y.jsxs(EA,{children:[Y.jsxs(SA,{onSubmit:e=>e.preventDefault(),children:[Y.jsxs(xA,{children:[Y.jsx(CA,{children:"Name"}),Y.jsx(TA,{type:"text",value:e,onChange:e=>t(e.target.value)})]}),Y.jsxs(xA,{children:[Y.jsx(CA,{children:"Email"}),Y.jsx(TA,{type:"text",value:n,onChange:e=>r(e.target.value)})]}),Y.jsxs(xA,{children:[Y.jsx(CA,{children:"Phone"}),Y.jsx(TA,{type:"text",value:i,onChange:e=>s(e.target.value)})]})]}),Y.jsx(IA,{onClick:function(){FI(KT(YT(),"ordenes"),{buyer:{name:e,email:n,phone:i},items:l.map((e=>({id:e.id,title:e.name,price:e.price,cant:e.quantity}))),total:c()}).then((e=>{console.log("Orden creada con ID:",e.id),a(e.id)})).catch((e=>{console.error("Error al crear la orden:",e)}))},children:"Finalizar"})]})})}const _A=Lf.div`
  font-family: "Poppins", sans-serif;
  background-image: url("/src/Components/img/bck.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,EA=Lf.div`
  display: flex;
  flex-direction: column; /* Coloca los elementos en una columna */
  align-items: center; /* Centra los elementos horizontalmente */
`,SA=Lf.form`
  background-color: rgba(42, 43, 56, 0.7);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
`,xA=Lf.div`
  margin-bottom: 15px;
`,CA=Lf.label`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`,TA=Lf.input`
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`,IA=Lf.button`
  background-color: #ffeba7;
  color: #102770;
  border: none;
  padding: 15px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  font-size: 18px;
  margin-top: 20px;

  &:hover {
    background-color: #ffdbb7;
  }
`;function AA(e){return void 0!==e&&void 0!==e.enterprise}class PA{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}function NA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RA=NA,OA=new Bm("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),DA=new lg("@firebase/auth");function LA(e,...t){DA.logLevel<=ng.ERROR&&DA.error(`Auth (${Ug}): ${e}`,...t)}
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
 */function MA(e,...t){throw FA(e,...t)}function jA(e,...t){return FA(e,...t)}function FA(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return OA.create(e,...t)}function UA(e,t,...n){if(!e)throw FA(t,...n)}function zA(e){const t="INTERNAL ASSERTION FAILED: "+e;throw LA(t),new Error(t)}function VA(e,t){e||zA(t)}
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
 */function BA(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function $A(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function qA(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==$A()&&"https:"!==$A()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
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
class HA{constructor(e,t){this.shortDelay=e,this.longDelay=t,VA(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zm())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return qA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function KA(e,t){VA(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class WA{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void zA("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void zA("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void zA("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const GA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},QA=new HA(3e4,6e4);
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
 */function YA(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function XA(e,t,n,r,i={}){return JA(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Km(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),WA.fetch()(eP(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function JA(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},GA),t);try{const t=new tP(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw nP(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw nP(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw nP(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw nP(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const r=Object.assign(Object.assign({},RA()),{[t]:n});return new Bm("auth","Firebase",r).create(t,{appName:e.name})}(e,a,o);MA(e,a)}}catch(i){if(i instanceof Vm)throw i;MA(e,"network-request-failed",{message:String(i)})}}async function ZA(e,t,n,r,i={}){const s=await XA(e,t,n,r,i);return"mfaPendingCredential"in s&&MA(e,"multi-factor-auth-required",{_serverResponse:s}),s}function eP(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?KA(e.config,i):`${e.config.apiScheme}://${i}`}class tP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(jA(this.auth,"network-request-failed"))),QA.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function nP(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=jA(e,t,r);return i.customData._tokenResponse=n,i}
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
function rP(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function iP(e){return 1e3*Number(e)}function sP(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return LA("JWT malformed, contained fewer than 3 sections"),null;try{const e=Rm(n);return e?JSON.parse(e):(LA("Failed to decode base64 JWT payload"),null)}catch(i){return LA("Caught error parsing JWT payload as JSON",null==i?void 0:i.toString()),null}}
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
async function oP(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Vm&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class aP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class lP{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=rP(this.lastLoginAt),this.creationTime=rP(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function cP(e){var t;const n=e.auth,r=await e.getIdToken(),i=await oP(e,async function(e,t){return XA(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));UA(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=lh(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new lP(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class uP{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){UA(e.idToken,"internal-error"),UA(void 0!==e.idToken,"internal-error"),UA(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=sP(e);return UA(t,"internal-error"),UA(void 0!==t.exp,"internal-error"),UA(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return UA(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=
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
 */await async function(e,t){const n=await JA(e,{},(async()=>{const n=Km({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=eP(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",WA.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new uP;return n&&(UA("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(UA("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(UA("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new uP,this.toJSON())}_performRefresh(){return zA("not implemented")}}
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
 */function hP(e,t){UA("string"==typeof e||void 0===e,"internal-error",{appName:t})}class dP{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=lh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new lP(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await oP(this,this.stsTokenManager.getToken(this.auth,e));return UA(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Xm(e),r=await n.getIdToken(t),i=sP(r);UA(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:rP(iP(i.auth_time)),issuedAtTime:rP(iP(i.iat)),expirationTime:rP(iP(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Xm(e);await cP(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(UA(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new dP(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){UA(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await cP(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await oP(this,
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
async function(e,t){return XA(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:k,stsTokenManager:_}=t;UA(v&&_,e,"internal-error");const E=uP.fromJSON(this.name,_);UA("string"==typeof v,e,"internal-error"),hP(u,e.name),hP(h,e.name),UA("boolean"==typeof w,e,"internal-error"),UA("boolean"==typeof b,e,"internal-error"),hP(d,e.name),hP(f,e.name),hP(p,e.name),hP(m,e.name),hP(g,e.name),hP(y,e.name);const S=new dP({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return k&&Array.isArray(k)&&(S.providerData=k.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new uP;r.updateFromServerResponse(t);const i=new dP({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await cP(i),i}}
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
 */const fP=new Map;function pP(e){VA(e instanceof Function,"Expected a class definition");let t=fP.get(e);return t?(VA(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,fP.set(e,t),t)}
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
 */class mP{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}mP.type="NONE";const gP=mP;
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
 */function yP(e,t,n){return`firebase:${e}:${t}:${n}`}class vP{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=yP(this.userKey,r.apiKey,i),this.fullPersistenceKey=yP("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dP._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new vP(pP(gP),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||pP(gP);const s=yP(n,e.config.apiKey,e.name);let o=null;for(const c of t)try{const t=await c._get(s);if(t){const n=dP._fromJSON(e,t);c!==i&&(o=n),i=c;break}}catch(l){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(l){}}))),new vP(i,e,n)):new vP(i,e,n)}}
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
 */function wP(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(EP(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(bP(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(xP(t))return"Blackberry";if(CP(t))return"Webos";if(kP(t))return"Safari";if((t.includes("chrome/")||_P(t))&&!t.includes("edge/"))return"Chrome";if(SP(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function bP(e=zm()){return/firefox\//i.test(e)}function kP(e=zm()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _P(e=zm()){return/crios\//i.test(e)}function EP(e=zm()){return/iemobile/i.test(e)}function SP(e=zm()){return/android/i.test(e)}function xP(e=zm()){return/blackberry/i.test(e)}function CP(e=zm()){return/webos/i.test(e)}function TP(e=zm()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function IP(){return function(){const e=zm();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function AP(e=zm()){return TP(e)||SP(e)||CP(e)||xP(e)||/windows phone/i.test(e)||EP(e)}
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
function PP(e,t=[]){let n;switch(e){case"Browser":n=wP(zm());break;case"Worker":n=`${wP(zm())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ug}/${r}`}
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
 */class NP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==n?void 0:n.message})}}}
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
 */class RP{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
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
 */class OP{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new LP(this),this.idTokenSubscription=new LP(this),this.beforeStateQueue=new NP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=OA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pP(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await vP.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return UA(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await cP(e)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Xm(e):null;return t&&UA(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&UA(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(pP(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return XA(e,"GET","/v2/passwordPolicy",YA(e,t))}
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
 */(this),t=new RP(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bm("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pP(e)||this._popupRedirectResolver;UA(t,this,"argument-error"),this.redirectPersistenceManager=await vP.create(this,[pP(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(UA(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return UA(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=PP(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){DA.logLevel<=ng.WARN&&DA.warn(`Auth (${Ug}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function DP(e){return Xm(e)}class LP{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Qm(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return UA(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */function MP(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=jA("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}class jP{constructor(e){this.type="recaptcha-enterprise",this.auth=DP(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{(async function(e,t){return XA(e,"GET","/v2/recaptchaConfig",YA(e,t))})(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new PA(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;AA(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&AA(window.grecaptcha))r(n,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));MP("https://www.google.com/recaptcha/enterprise.js?render="+n).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function FP(e,t,n,r=!1){const i=new jP(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
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
 */function UP(e,t,n){const r=DP(e);UA(r._canInitEmulator,r,"emulator-config-failed"),UA(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=zP(t),{host:o,port:a}=function(e){const t=zP(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:VP(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:VP(t)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function zP(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function VP(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class BP{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return zA("not implemented")}_getIdTokenResponse(e){return zA("not implemented")}_linkToIdToken(e,t){return zA("not implemented")}_getReauthenticationResolver(e){return zA("not implemented")}}
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
async function $P(e,t){return ZA(e,"POST","/v1/accounts:signInWithPassword",YA(e,t))}
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
class qP extends BP{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new qP(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new qP(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await FP(e,n,"signInWithPassword");return $P(e,t)}return $P(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await FP(e,n,"signInWithPassword");return $P(e,t)}return Promise.reject(t)}));case"emailLink":return async function(e,t){return ZA(e,"POST","/v1/accounts:signInWithEmailLink",YA(e,t))}(e,{email:this._email,oobCode:this._password});default:MA(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return XA(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ZA(e,"POST","/v1/accounts:signInWithEmailLink",YA(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:MA(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function HP(e,t){return ZA(e,"POST","/v1/accounts:signInWithIdp",YA(e,t))}
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
 */class KP extends BP{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new KP(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):MA("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=lh(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new KP(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return HP(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,HP(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,HP(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Km(t)}return e}}
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
 */class WP{constructor(e){var t,n,r,i,s,o;const a=Wm(Gm(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);UA(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=Wm(Gm(e)).link,n=t?Wm(Gm(t)).deep_link_id:null,r=Wm(Gm(e)).deep_link_id;return(r?Wm(Gm(r)).link:null)||r||n||t||e}(e);try{return new WP(t)}catch(n){return null}}}
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
 */class GP{constructor(){this.providerId=GP.PROVIDER_ID}static credential(e,t){return qP._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=WP.parseLink(t);return UA(n,"argument-error"),qP._fromEmailAndCode(e,n.code,n.tenantId)}}GP.PROVIDER_ID="password",GP.EMAIL_PASSWORD_SIGN_IN_METHOD="password",GP.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class QP{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class YP extends QP{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
 */class XP extends YP{constructor(){super("facebook.com")}static credential(e){return KP._fromParams({providerId:XP.PROVIDER_ID,signInMethod:XP.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return XP.credentialFromTaggedObject(e)}static credentialFromError(e){return XP.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return XP.credential(e.oauthAccessToken)}catch(t){return null}}}XP.FACEBOOK_SIGN_IN_METHOD="facebook.com",XP.PROVIDER_ID="facebook.com";
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
class JP extends YP{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return KP._fromParams({providerId:JP.PROVIDER_ID,signInMethod:JP.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return JP.credentialFromTaggedObject(e)}static credentialFromError(e){return JP.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return JP.credential(t,n)}catch(r){return null}}}JP.GOOGLE_SIGN_IN_METHOD="google.com",JP.PROVIDER_ID="google.com";
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
class ZP extends YP{constructor(){super("github.com")}static credential(e){return KP._fromParams({providerId:ZP.PROVIDER_ID,signInMethod:ZP.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ZP.credentialFromTaggedObject(e)}static credentialFromError(e){return ZP.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ZP.credential(e.oauthAccessToken)}catch(t){return null}}}ZP.GITHUB_SIGN_IN_METHOD="github.com",ZP.PROVIDER_ID="github.com";
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
class eN extends YP{constructor(){super("twitter.com")}static credential(e,t){return KP._fromParams({providerId:eN.PROVIDER_ID,signInMethod:eN.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return eN.credentialFromTaggedObject(e)}static credentialFromError(e){return eN.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return eN.credential(t,n)}catch(r){return null}}}
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
async function tN(e,t){return ZA(e,"POST","/v1/accounts:signUp",YA(e,t))}
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
 */eN.TWITTER_SIGN_IN_METHOD="twitter.com",eN.PROVIDER_ID="twitter.com";class nN{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await dP._fromIdTokenResponse(e,n,r),s=rN(n);return new nN({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=rN(n);return new nN({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function rN(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class iN extends Vm{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,iN.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new iN(e,t,n,r)}}function sN(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw iN._fromErrorAndOperation(e,n,t,r);throw n}))}
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
async function oN(e,t,n=!1){const r="signIn",i=await sN(e,r,t),s=await nN._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}
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
async function aN(e){const t=DP(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function lN(e,t,n){return async function(e,t){return oN(DP(e),t)}(Xm(e),GP.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&aN(e),t}))}const cN="__sak";
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
 */class uN{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(cN,"1"),this.storage.removeItem(cN),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class hN extends uN{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=zm();return kP(e)||TP(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=AP(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);IP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hN.type="LOCAL";const dN=hN;
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
 */class fN extends uN{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fN.type="SESSION";const pN=fN;
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
class mN{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new mN(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function gN(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */mN.receivers=[];class yN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=gN("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function vN(){return window}
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
function wN(){return void 0!==vN().WorkerGlobalScope&&"function"==typeof vN().importScripts}
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
const bN="firebaseLocalStorageDb",kN="firebaseLocalStorage",_N="fbase_key";class EN{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function SN(e,t){return e.transaction([kN],t?"readwrite":"readonly").objectStore(kN)}function xN(){const e=indexedDB.open(bN,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(kN,{keyPath:_N})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(kN)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(bN);return new EN(e).toPromise()}(),t(await xN()))}))}))}async function CN(e,t,n){const r=SN(e,!0).put({[_N]:t,value:n});return new EN(r).toPromise()}function TN(e,t){const n=SN(e,!0).delete(t);return new EN(n).toPromise()}class IN{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await xN()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wN()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mN._getInstance(wN()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new yN(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xN();return await CN(e,cN,"1"),await TN(e,cN),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>CN(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=SN(e,!1).get(t),r=await new EN(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>TN(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=SN(e,!1).getAll();return new EN(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}IN.type="LOCAL";const AN=IN;new HA(3e4,6e4);
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
class PN extends BP{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return HP(e,this._buildIdpRequest())}_linkToIdToken(e,t){return HP(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return HP(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function NN(e){return oN(e.auth,new PN(e),e.bypassAuthState)}function RN(e){const{auth:t,user:n}=e;return UA(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await oP(e,sN(r,i,t,e),n);UA(s.idToken,r,"internal-error");const o=sP(s.idToken);UA(o,r,"internal-error");const{sub:a}=o;return UA(e.uid===a,r,"user-mismatch"),nN._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&MA(r,"user-mismatch"),s}}(n,new PN(e),e.bypassAuthState)}async function ON(e){const{auth:t,user:n}=e;return UA(n,t,"internal-error"),async function(e,t,n=!1){const r=await oP(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return nN._forOperation(e,"link",r)}(n,new PN(e),e.bypassAuthState)}
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
 */class DN{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NN;case"linkViaPopup":case"linkViaRedirect":return ON;case"reauthViaPopup":case"reauthViaRedirect":return RN;default:MA(this.auth,"internal-error")}}resolve(e){VA(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){VA(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const LN=new HA(2e3,1e4);class MN extends DN{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,MN.currentPopupAction&&MN.currentPopupAction.cancel(),MN.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return UA(e,this.auth,"internal-error"),e}async onExecution(){VA(1===this.filter.length,"Popup operations only handle one event");const e=gN();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(jA(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(jA(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,MN.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(jA(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,LN.get())};e()}}MN.currentPopupAction=null;
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
const jN="pendingRedirect",FN=new Map;class UN extends DN{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=FN.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return yP(jN,e.config.apiKey,e.name)}(t),r=function(e){return pP(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}FN.set(this.auth._key(),e)}return this.bypassAuthState||FN.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function zN(e,t){FN.set(e._key(),t)}async function VN(e,t,n=!1){const r=DP(e),i=
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
function(e,t){return t?pP(t):(UA(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new UN(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
 */class BN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qN(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!qN(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(jA(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has($N(e))}saveEventToCache(e){this.cachedEventUids.add($N(e)),this.lastProcessedEventTime=Date.now()}}function $N(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function qN({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const HN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KN=/^https?/;async function WN(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return XA(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(GN(r))return}catch(n){}MA(e,"unauthorized-domain")}function GN(e){const t=BA(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!KN.test(n))return!1;if(HN.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const QN=new HA(3e4,6e4);function YN(){const e=vN().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function XN(e){return new Promise(((t,n)=>{var r,i,s;function o(){YN(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{YN(),n(jA(e,"network-request-failed"))},timeout:QN.get()})}if(null===(i=null===(r=vN().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=vN().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return vN()[t]=()=>{gapi.load?o():n(jA(e,"network-request-failed"))},MP(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw JN=null,e}))}let JN=null;
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
const ZN=new HA(5e3,15e3),eR="__/auth/iframe",tR="emulator/auth/iframe",nR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iR(e){const t=e.config;UA(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?KA(t,tR):`https://${e.config.authDomain}/${eR}`,r={apiKey:t.apiKey,appName:e.name,v:Ug},i=rR.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Km(r).slice(1)}`}async function sR(e){const t=await function(e){return JN=JN||XN(e),JN}(e),n=vN().gapi;return UA(n,e,"internal-error"),t.open({where:document.body,url:iR(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nR,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=jA(e,"network-request-failed"),s=vN().setTimeout((()=>{r(i)}),ZN.get());function o(){vN().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
 */const oR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class aR{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function lR(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},oR),{width:r.toString(),height:i.toString(),top:s,left:o}),c=zm().toLowerCase();n&&(a=_P(c)?"_blank":n),bP(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=zm()){var t;return TP(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new aR(null);const h=window.open(t||"",a,u);UA(h,e,"popup-blocked");try{h.focus()}catch(d){}return new aR(h)}const cR="__/auth/handler",uR="emulator/auth/handler",hR=encodeURIComponent("fac");async function dR(e,t,n,r,i,s){UA(e.config.authDomain,e,"auth-domain-config-required"),UA(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ug,eventId:i};if(t instanceof QP){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof YP){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))void 0===a[u]&&delete a[u];const l=await e._getAppCheckToken(),c=l?`#${hR}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${cR}`;return KA(e,uR)}
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
 */(e)}?${Km(a).slice(1)}${c}`}const fR="webStorageSupport";const pR=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pN,this._completeRedirectFn=VN,this._overrideRedirectResult=zN}async _openPopup(e,t,n,r){var i;VA(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return lR(e,await dR(e,t,n,BA(),r),gN())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){vN().location.href=e}(await dR(e,t,n,BA(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(VA(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await sR(e),n=new BN(e);return t.register("authEvent",(t=>{UA(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fR,{type:fR},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[fR];void 0!==i&&t(!!i),MA(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=WN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return AP()||kP()||TP()}};var mR="@firebase/auth",gR="1.3.0";
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
class yR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){UA(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const vR=Fm("authIdTokenMaxAge")||300;let wR=null;function bR(e=Vg()){const t=Mg(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Mg(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(qm(n.getOptions(),null!=t?t:{}))return e;MA(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:pR,persistence:[AN,dN,pN]}),r=Fm("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>vR)return;const r=null==t?void 0:t.token;wR!==r&&(wR=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){Xm(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){Xm(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const s=Lm("auth");return s&&UP(n,`http://${s}`),n}var kR;kR="Browser",Lg(new Jm("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;UA(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:kR,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:PP(kR)},l=new OP(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pP);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Lg(new Jm("auth-internal",(e=>{const t=DP(e.getProvider("auth").getImmediate());return new yR(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Bg(mR,gR,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(kR)),Bg(mR,gR,"esm2017");var _R={exports:{}};
/*!
* sweetalert2 v11.6.13
* Released under the MIT License.
*/_R.exports=function(){var e={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const t="swal2-",n=e=>{const n={};for(const r in e)n[e[r]]=t+e[r];return n},r=n(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),i=n(["success","warning","info","question","error"]),s="SweetAlert2:",o=e=>{const t=[];for(let n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t},a=e=>e.charAt(0).toUpperCase()+e.slice(1),l=e=>{console.warn(`${s} ${"object"==typeof e?e.join(" "):e}`)},c=e=>{console.error(`${s} ${e}`)},u=[],h=e=>{u.includes(e)||(u.push(e),l(e))},d=(e,t)=>{h(`"${e}" is deprecated and will be removed in the next major release. Please use "${t}" instead.`)},f=e=>"function"==typeof e?e():e,p=e=>e&&"function"==typeof e.toPromise,m=e=>p(e)?e.toPromise():Promise.resolve(e),g=e=>e&&Promise.resolve(e)===e,y=()=>document.body.querySelector(`.${r.container}`),v=e=>{const t=y();return t?t.querySelector(e):null},w=e=>v(`.${e}`),b=()=>w(r.popup),k=()=>w(r.icon),_=()=>w(r["icon-content"]),E=()=>w(r.title),S=()=>w(r["html-container"]),x=()=>w(r.image),C=()=>w(r["progress-steps"]),T=()=>w(r["validation-message"]),I=()=>v(`.${r.actions} .${r.confirm}`),A=()=>v(`.${r.actions} .${r.deny}`),P=()=>w(r["input-label"]),N=()=>v(`.${r.loader}`),R=()=>v(`.${r.actions} .${r.cancel}`),O=()=>w(r.actions),D=()=>w(r.footer),L=()=>w(r["timer-progress-bar"]),M=()=>w(r.close),j='\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',F=()=>{const e=Array.from(b().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(((e,t)=>{const n=parseInt(e.getAttribute("tabindex")),r=parseInt(t.getAttribute("tabindex"));return n>r?1:n<r?-1:0})),t=Array.from(b().querySelectorAll(j)).filter((e=>"-1"!==e.getAttribute("tabindex")));return o(e.concat(t)).filter((e=>ie(e)))},U=()=>q(document.body,r.shown)&&!q(document.body,r["toast-shown"])&&!q(document.body,r["no-backdrop"]),z=()=>b()&&q(b(),r.toast),V=()=>b().hasAttribute("data-loading"),B={previousBodyPadding:null},$=(e,t)=>{if(e.textContent="",t){const n=(new DOMParser).parseFromString(t,"text/html");Array.from(n.querySelector("head").childNodes).forEach((t=>{e.appendChild(t)})),Array.from(n.querySelector("body").childNodes).forEach((t=>{t instanceof HTMLVideoElement||t instanceof HTMLAudioElement?e.appendChild(t.cloneNode(!0)):e.appendChild(t)}))}},q=(e,t)=>{if(!t)return!1;const n=t.split(/\s+/);for(let r=0;r<n.length;r++)if(!e.classList.contains(n[r]))return!1;return!0},H=(e,t)=>{Array.from(e.classList).forEach((n=>{Object.values(r).includes(n)||Object.values(i).includes(n)||Object.values(t.showClass).includes(n)||e.classList.remove(n)}))},K=(e,t,n)=>{if(H(e,t),t.customClass&&t.customClass[n]){if("string"!=typeof t.customClass[n]&&!t.customClass[n].forEach)return void l(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof t.customClass[n]}"`);Y(e,t.customClass[n])}},W=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(`.${r.popup} > .${r[t]}`);case"checkbox":return e.querySelector(`.${r.popup} > .${r.checkbox} input`);case"radio":return e.querySelector(`.${r.popup} > .${r.radio} input:checked`)||e.querySelector(`.${r.popup} > .${r.radio} input:first-child`);case"range":return e.querySelector(`.${r.popup} > .${r.range} input`);default:return e.querySelector(`.${r.popup} > .${r.input}`)}},G=e=>{if(e.focus(),"file"!==e.type){const t=e.value;e.value="",e.value=t}},Q=(e,t,n)=>{e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach((t=>{Array.isArray(e)?e.forEach((e=>{n?e.classList.add(t):e.classList.remove(t)})):n?e.classList.add(t):e.classList.remove(t)})))},Y=(e,t)=>{Q(e,t,!0)},X=(e,t)=>{Q(e,t,!1)},J=(e,t)=>{const n=Array.from(e.children);for(let r=0;r<n.length;r++){const e=n[r];if(e instanceof HTMLElement&&q(e,t))return e}},Z=(e,t,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||0===parseInt(n)?e.style[t]="number"==typeof n?`${n}px`:n:e.style.removeProperty(t)},ee=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flex";e.style.display=t},te=e=>{e.style.display="none"},ne=(e,t,n,r)=>{const i=e.querySelector(t);i&&(i.style[n]=r)},re=function(e,t){t?ee(e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"flex"):te(e)},ie=e=>!(!e||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),se=()=>!ie(I())&&!ie(A())&&!ie(R()),oe=e=>!!(e.scrollHeight>e.clientHeight),ae=e=>{const t=window.getComputedStyle(e),n=parseFloat(t.getPropertyValue("animation-duration")||"0"),r=parseFloat(t.getPropertyValue("transition-duration")||"0");return n>0||r>0},le=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=L();ie(n)&&(t&&(n.style.transition="none",n.style.width="100%"),setTimeout((()=>{n.style.transition=`width ${e/1e3}s linear`,n.style.width="0%"}),10))},ce=()=>{const e=L(),t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";const n=t/parseInt(window.getComputedStyle(e).width)*100;e.style.removeProperty("transition"),e.style.width=`${n}%`},ue=100,he={},de=()=>{he.previousActiveElement instanceof HTMLElement?(he.previousActiveElement.focus(),he.previousActiveElement=null):document.body&&document.body.focus()},fe=e=>new Promise((t=>{if(!e)return t();const n=window.scrollX,r=window.scrollY;he.restoreFocusTimeout=setTimeout((()=>{de(),t()}),ue),window.scrollTo(n,r)})),pe=()=>"undefined"==typeof window||"undefined"==typeof document,me=`\n <div aria-labelledby="${r.title}" aria-describedby="${r["html-container"]}" class="${r.popup}" tabindex="-1">\n   <button type="button" class="${r.close}"></button>\n   <ul class="${r["progress-steps"]}"></ul>\n   <div class="${r.icon}"></div>\n   <img class="${r.image}" />\n   <h2 class="${r.title}" id="${r.title}"></h2>\n   <div class="${r["html-container"]}" id="${r["html-container"]}"></div>\n   <input class="${r.input}" />\n   <input type="file" class="${r.file}" />\n   <div class="${r.range}">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="${r.select}"></select>\n   <div class="${r.radio}"></div>\n   <label for="${r.checkbox}" class="${r.checkbox}">\n     <input type="checkbox" />\n     <span class="${r.label}"></span>\n   </label>\n   <textarea class="${r.textarea}"></textarea>\n   <div class="${r["validation-message"]}" id="${r["validation-message"]}"></div>\n   <div class="${r.actions}">\n     <div class="${r.loader}"></div>\n     <button type="button" class="${r.confirm}"></button>\n     <button type="button" class="${r.deny}"></button>\n     <button type="button" class="${r.cancel}"></button>\n   </div>\n   <div class="${r.footer}"></div>\n   <div class="${r["timer-progress-bar-container"]}">\n     <div class="${r["timer-progress-bar"]}"></div>\n   </div>\n </div>\n`.replace(/(^|\n)\s*/g,""),ge=()=>{const e=y();return!!e&&(e.remove(),X([document.documentElement,document.body],[r["no-backdrop"],r["toast-shown"],r["has-column"]]),!0)},ye=()=>{he.currentInstance.resetValidationMessage()},ve=()=>{const e=b(),t=J(e,r.input),n=J(e,r.file),i=e.querySelector(`.${r.range} input`),s=e.querySelector(`.${r.range} output`),o=J(e,r.select),a=e.querySelector(`.${r.checkbox} input`),l=J(e,r.textarea);t.oninput=ye,n.onchange=ye,o.onchange=ye,a.onchange=ye,l.oninput=ye,i.oninput=()=>{ye(),s.value=i.value},i.onchange=()=>{ye(),s.value=i.value}},we=e=>"string"==typeof e?document.querySelector(e):e,be=e=>{const t=b();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")},ke=e=>{"rtl"===window.getComputedStyle(e).direction&&Y(y(),r.rtl)},_e=e=>{const t=ge();if(pe())return void c("SweetAlert2 requires document to initialize");const n=document.createElement("div");n.className=r.container,t&&Y(n,r["no-transition"]),$(n,me);const i=we(e.target);i.appendChild(n),be(e),ke(i),ve()},Ee=(e,t)=>{e instanceof HTMLElement?t.appendChild(e):"object"==typeof e?Se(e,t):e&&$(t,e)},Se=(e,t)=>{e.jquery?xe(t,e):$(t,e.toString())},xe=(e,t)=>{if(e.textContent="",0 in t)for(let n=0;n in t;n++)e.appendChild(t[n].cloneNode(!0));else e.appendChild(t.cloneNode(!0))},Ce=(()=>{if(pe())return!1;const e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&void 0!==e.style[n])return t[n];return!1})(),Te=()=>{const e=document.createElement("div");e.className=r["scrollbar-measure"],document.body.appendChild(e);const t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},Ie=(e,t)=>{const n=O(),r=N();t.showConfirmButton||t.showDenyButton||t.showCancelButton?ee(n):te(n),K(n,t,"actions"),Ae(n,r,t),$(r,t.loaderHtml),K(r,t,"loader")};function Ae(e,t,n){const r=I(),i=A(),s=R();Ne(r,"confirm",n),Ne(i,"deny",n),Ne(s,"cancel",n),Pe(r,i,s,n),n.reverseButtons&&(n.toast?(e.insertBefore(s,r),e.insertBefore(i,r)):(e.insertBefore(s,t),e.insertBefore(i,t),e.insertBefore(r,t)))}function Pe(e,t,n,i){i.buttonsStyling?(Y([e,t,n],r.styled),i.confirmButtonColor&&(e.style.backgroundColor=i.confirmButtonColor,Y(e,r["default-outline"])),i.denyButtonColor&&(t.style.backgroundColor=i.denyButtonColor,Y(t,r["default-outline"])),i.cancelButtonColor&&(n.style.backgroundColor=i.cancelButtonColor,Y(n,r["default-outline"]))):X([e,t,n],r.styled)}function Ne(e,t,n){re(e,n[`show${a(t)}Button`],"inline-block"),$(e,n[`${t}ButtonText`]),e.setAttribute("aria-label",n[`${t}ButtonAriaLabel`]),e.className=r[t],K(e,n,`${t}Button`),Y(e,n[`${t}ButtonClass`])}const Re=(e,t)=>{const n=M();$(n,t.closeButtonHtml),K(n,t,"closeButton"),re(n,t.showCloseButton),n.setAttribute("aria-label",t.closeButtonAriaLabel)},Oe=(e,t)=>{const n=y();n&&(De(n,t.backdrop),Le(n,t.position),Me(n,t.grow),K(n,t,"container"))};function De(e,t){"string"==typeof t?e.style.background=t:t||Y([document.documentElement,document.body],r["no-backdrop"])}function Le(e,t){t in r?Y(e,r[t]):(l('The "position" parameter is not valid, defaulting to "center"'),Y(e,r.center))}function Me(e,t){if(t&&"string"==typeof t){const n=`grow-${t}`;n in r&&Y(e,r[n])}}const je=["input","file","range","select","radio","checkbox","textarea"],Fe=(t,n)=>{const i=b(),s=e.innerParams.get(t),o=!s||n.input!==s.input;je.forEach((e=>{const t=J(i,r[e]);Ve(e,n.inputAttributes),t.className=r[e],o&&te(t)})),n.input&&(o&&Ue(n),Be(n))},Ue=e=>{if(!We[e.input])return void c(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${e.input}"`);const t=He(e.input),n=We[e.input](t,e);ee(t),setTimeout((()=>{G(n)}))},ze=e=>{for(let t=0;t<e.attributes.length;t++){const n=e.attributes[t].name;["type","value","style"].includes(n)||e.removeAttribute(n)}},Ve=(e,t)=>{const n=W(b(),e);if(n){ze(n);for(const e in t)n.setAttribute(e,t[e])}},Be=e=>{const t=He(e.input);"object"==typeof e.customClass&&Y(t,e.customClass.input)},$e=(e,t)=>{e.placeholder&&!t.inputPlaceholder||(e.placeholder=t.inputPlaceholder)},qe=(e,t,n)=>{if(n.inputLabel){e.id=r.input;const i=document.createElement("label"),s=r["input-label"];i.setAttribute("for",e.id),i.className=s,"object"==typeof n.customClass&&Y(i,n.customClass.inputLabel),i.innerText=n.inputLabel,t.insertAdjacentElement("beforebegin",i)}},He=e=>J(b(),r[e]||r.input),Ke=(e,t)=>{["string","number"].includes(typeof t)?e.value=`${t}`:g(t)||l(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`)},We={};We.text=We.email=We.password=We.number=We.tel=We.url=(e,t)=>(Ke(e,t.inputValue),qe(e,e,t),$e(e,t),e.type=t.input,e),We.file=(e,t)=>(qe(e,e,t),$e(e,t),e),We.range=(e,t)=>{const n=e.querySelector("input"),r=e.querySelector("output");return Ke(n,t.inputValue),n.type=t.input,Ke(r,t.inputValue),qe(n,e,t),e},We.select=(e,t)=>{if(e.textContent="",t.inputPlaceholder){const n=document.createElement("option");$(n,t.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,e.appendChild(n)}return qe(e,e,t),e},We.radio=e=>(e.textContent="",e),We.checkbox=(e,t)=>{const n=W(b(),"checkbox");n.value="1",n.id=r.checkbox,n.checked=Boolean(t.inputValue);const i=e.querySelector("span");return $(i,t.inputPlaceholder),n},We.textarea=(e,t)=>{Ke(e,t.inputValue),$e(e,t),qe(e,e,t);const n=e=>parseInt(window.getComputedStyle(e).marginLeft)+parseInt(window.getComputedStyle(e).marginRight);return setTimeout((()=>{if("MutationObserver"in window){const t=parseInt(window.getComputedStyle(b()).width);new MutationObserver((()=>{const r=e.offsetWidth+n(e);b().style.width=r>t?`${r}px`:null})).observe(e,{attributes:!0,attributeFilter:["style"]})}})),e};const Ge=(e,t)=>{const n=S();K(n,t,"htmlContainer"),t.html?(Ee(t.html,n),ee(n,"block")):t.text?(n.textContent=t.text,ee(n,"block")):te(n),Fe(e,t)},Qe=(e,t)=>{const n=D();re(n,t.footer),t.footer&&Ee(t.footer,n),K(n,t,"footer")},Ye=(t,n)=>{const r=e.innerParams.get(t),s=k();if(r&&n.icon===r.icon)return tt(s,n),void Xe(s,n);if(n.icon||n.iconHtml){if(n.icon&&-1===Object.keys(i).indexOf(n.icon))return c(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${n.icon}"`),void te(s);ee(s),tt(s,n),Xe(s,n),Y(s,n.showClass.icon)}else te(s)},Xe=(e,t)=>{for(const n in i)t.icon!==n&&X(e,i[n]);Y(e,i[t.icon]),nt(e,t),Je(),K(e,t,"icon")},Je=()=>{const e=b(),t=window.getComputedStyle(e).getPropertyValue("background-color"),n=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let r=0;r<n.length;r++)n[r].style.backgroundColor=t},Ze='\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',et='\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',tt=(e,t)=>{let n,r=e.innerHTML;t.iconHtml?n=rt(t.iconHtml):"success"===t.icon?(n=Ze,r=r.replace(/ style=".*?"/g,"")):n="error"===t.icon?et:rt({question:"?",warning:"!",info:"i"}[t.icon]),r.trim()!==n.trim()&&$(e,n)},nt=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])ne(e,n,"backgroundColor",t.iconColor);ne(e,".swal2-success-ring","borderColor",t.iconColor)}},rt=e=>`<div class="${r["icon-content"]}">${e}</div>`,it=(e,t)=>{const n=x();t.imageUrl?(ee(n,""),n.setAttribute("src",t.imageUrl),n.setAttribute("alt",t.imageAlt),Z(n,"width",t.imageWidth),Z(n,"height",t.imageHeight),n.className=r.image,K(n,t,"image")):te(n)},st=(e,t)=>{const n=y(),r=b();t.toast?(Z(n,"width",t.width),r.style.width="100%",r.insertBefore(N(),k())):Z(r,"width",t.width),Z(r,"padding",t.padding),t.color&&(r.style.color=t.color),t.background&&(r.style.background=t.background),te(T()),ot(r,t)},ot=(e,t)=>{e.className=`${r.popup} ${ie(e)?t.showClass.popup:""}`,t.toast?(Y([document.documentElement,document.body],r["toast-shown"]),Y(e,r.toast)):Y(e,r.modal),K(e,t,"popup"),"string"==typeof t.customClass&&Y(e,t.customClass),t.icon&&Y(e,r[`icon-${t.icon}`])},at=(e,t)=>{const n=C();t.progressSteps&&0!==t.progressSteps.length?(ee(n),n.textContent="",t.currentProgressStep>=t.progressSteps.length&&l("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),t.progressSteps.forEach(((e,i)=>{const s=lt(e);if(n.appendChild(s),i===t.currentProgressStep&&Y(s,r["active-progress-step"]),i!==t.progressSteps.length-1){const e=ct(t);n.appendChild(e)}}))):te(n)},lt=e=>{const t=document.createElement("li");return Y(t,r["progress-step"]),$(t,e),t},ct=e=>{const t=document.createElement("li");return Y(t,r["progress-step-line"]),e.progressStepsDistance&&Z(t,"width",e.progressStepsDistance),t},ut=(e,t)=>{const n=E();re(n,t.title||t.titleText,"block"),t.title&&Ee(t.title,n),t.titleText&&(n.innerText=t.titleText),K(n,t,"title")},ht=(e,t)=>{st(e,t),Oe(e,t),at(e,t),Ye(e,t),it(e,t),ut(e,t),Re(e,t),Ge(e,t),Ie(e,t),Qe(e,t),"function"==typeof t.didRender&&t.didRender(b())};function dt(){const t=e.innerParams.get(this);if(!t)return;const n=e.domCache.get(this);te(n.loader),z()?t.icon&&ee(k()):ft(n),X([n.popup,n.actions],r.loading),n.popup.removeAttribute("aria-busy"),n.popup.removeAttribute("data-loading"),n.confirmButton.disabled=!1,n.denyButton.disabled=!1,n.cancelButton.disabled=!1}const ft=e=>{const t=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));t.length?ee(t[0],"inline-block"):se()&&te(e.actions)};function pt(t){const n=e.innerParams.get(t||this),r=e.domCache.get(t||this);return r?W(r.popup,n.input):null}const mt=()=>ie(b()),gt=()=>I()&&I().click(),yt=()=>A()&&A().click(),vt=()=>R()&&R().click(),wt=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),bt=e=>{e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1)},kt=(e,t,n,r)=>{bt(t),n.toast||(t.keydownHandler=t=>xt(e,t,r),t.keydownTarget=n.keydownListenerCapture?window:b(),t.keydownListenerCapture=n.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},_t=(e,t,n)=>{const r=F();if(r.length)return(t+=n)===r.length?t=0:-1===t&&(t=r.length-1),r[t].focus();b().focus()},Et=["ArrowRight","ArrowDown"],St=["ArrowLeft","ArrowUp"],xt=(t,n,r)=>{const i=e.innerParams.get(t);i&&(n.isComposing||229===n.keyCode||(i.stopKeydownPropagation&&n.stopPropagation(),"Enter"===n.key?Ct(t,n,i):"Tab"===n.key?Tt(n,i):[...Et,...St].includes(n.key)?It(n.key):"Escape"===n.key&&At(n,i,r)))},Ct=(e,t,n)=>{if(f(n.allowEnterKey)&&t.target&&e.getInput()&&t.target instanceof HTMLElement&&t.target.outerHTML===e.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;gt(),t.preventDefault()}},Tt=(e,t)=>{const n=e.target,r=F();let i=-1;for(let s=0;s<r.length;s++)if(n===r[s]){i=s;break}e.shiftKey?_t(t,i,-1):_t(t,i,1),e.stopPropagation(),e.preventDefault()},It=e=>{const t=I(),n=A(),r=R();if(document.activeElement instanceof HTMLElement&&![t,n,r].includes(document.activeElement))return;const i=Et.includes(e)?"nextElementSibling":"previousElementSibling";let s=document.activeElement;for(let o=0;o<O().children.length;o++){if(s=s[i],!s)return;if(s instanceof HTMLButtonElement&&ie(s))break}s instanceof HTMLButtonElement&&s.focus()},At=(e,t,n)=>{f(t.allowEscapeKey)&&(e.preventDefault(),n(wt.esc))};var Pt={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Nt=()=>{Array.from(document.body.children).forEach((e=>{e===y()||e.contains(y())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))}))},Rt=()=>{Array.from(document.body.children).forEach((e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")}))},Ot=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&!q(document.body,r.iosfix)){const e=document.body.scrollTop;document.body.style.top=-1*e+"px",Y(document.body,r.iosfix),Lt(),Dt()}},Dt=()=>{const e=navigator.userAgent,t=!!e.match(/iPad/i)||!!e.match(/iPhone/i),n=!!e.match(/WebKit/i);if(t&&n&&!e.match(/CriOS/i)){const e=44;b().scrollHeight>window.innerHeight-e&&(y().style.paddingBottom=`${e}px`)}},Lt=()=>{const e=y();let t;e.ontouchstart=e=>{t=Mt(e)},e.ontouchmove=e=>{t&&(e.preventDefault(),e.stopPropagation())}},Mt=e=>{const t=e.target,n=y();return!(jt(e)||Ft(e)||t!==n&&(oe(n)||!(t instanceof HTMLElement)||"INPUT"===t.tagName||"TEXTAREA"===t.tagName||oe(S())&&S().contains(t)))},jt=e=>e.touches&&e.touches.length&&"stylus"===e.touches[0].touchType,Ft=e=>e.touches&&e.touches.length>1,Ut=()=>{if(q(document.body,r.iosfix)){const e=parseInt(document.body.style.top,10);X(document.body,r.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}},zt=()=>{null===B.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(B.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${B.previousBodyPadding+Te()}px`)},Vt=()=>{null!==B.previousBodyPadding&&(document.body.style.paddingRight=`${B.previousBodyPadding}px`,B.previousBodyPadding=null)};function Bt(e,t,n,r){z()?Jt(e,r):(fe(n).then((()=>Jt(e,r))),bt(he)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),U()&&(Vt(),Ut(),Rt()),$t()}function $t(){X([document.documentElement,document.body],[r.shown,r["height-auto"],r["no-backdrop"],r["toast-shown"]])}function qt(e){e=Qt(e);const t=Pt.swalPromiseResolve.get(this),n=Kt(this);this.isAwaitingPromise()?e.isDismissed||(Gt(this),t(e)):n&&t(e)}function Ht(){return!!e.awaitingPromise.get(this)}const Kt=t=>{const n=b();if(!n)return!1;const r=e.innerParams.get(t);if(!r||q(n,r.hideClass.popup))return!1;X(n,r.showClass.popup),Y(n,r.hideClass.popup);const i=y();return X(i,r.showClass.backdrop),Y(i,r.hideClass.backdrop),Yt(t,n,r),!0};function Wt(e){const t=Pt.swalPromiseReject.get(this);Gt(this),t&&t(e)}const Gt=t=>{t.isAwaitingPromise()&&(e.awaitingPromise.delete(t),e.innerParams.get(t)||t._destroy())},Qt=e=>void 0===e?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e),Yt=(e,t,n)=>{const r=y(),i=Ce&&ae(t);"function"==typeof n.willClose&&n.willClose(t),i?Xt(e,t,r,n.returnFocus,n.didClose):Bt(e,r,n.returnFocus,n.didClose)},Xt=(e,t,n,r,i)=>{he.swalCloseEventFinishedCallback=Bt.bind(null,e,n,r,i),t.addEventListener(Ce,(function(e){e.target===t&&(he.swalCloseEventFinishedCallback(),delete he.swalCloseEventFinishedCallback)}))},Jt=(e,t)=>{setTimeout((()=>{"function"==typeof t&&t.bind(e.params)(),e._destroy()}))};function Zt(t,n,r){const i=e.domCache.get(t);n.forEach((e=>{i[e].disabled=r}))}function en(e,t){if(e)if("radio"===e.type){const n=e.parentNode.parentNode.querySelectorAll("input");for(let e=0;e<n.length;e++)n[e].disabled=t}else e.disabled=t}function tn(){Zt(this,["confirmButton","denyButton","cancelButton"],!1)}function nn(){Zt(this,["confirmButton","denyButton","cancelButton"],!0)}function rn(){en(this.getInput(),!1)}function sn(){en(this.getInput(),!0)}function on(t){const n=e.domCache.get(this),i=e.innerParams.get(this);$(n.validationMessage,t),n.validationMessage.className=r["validation-message"],i.customClass&&i.customClass.validationMessage&&Y(n.validationMessage,i.customClass.validationMessage),ee(n.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedby",r["validation-message"]),G(s),Y(s,r.inputerror))}function an(){const t=e.domCache.get(this);t.validationMessage&&te(t.validationMessage);const n=this.getInput();n&&(n.removeAttribute("aria-invalid"),n.removeAttribute("aria-describedby"),X(n,r.inputerror))}const ln={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},cn=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],un={},hn=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],dn=e=>Object.prototype.hasOwnProperty.call(ln,e),fn=e=>-1!==cn.indexOf(e),pn=e=>un[e],mn=e=>{dn(e)||l(`Unknown parameter "${e}"`)},gn=e=>{hn.includes(e)&&l(`The parameter "${e}" is incompatible with toasts`)},yn=e=>{pn(e)&&d(e,pn(e))},vn=e=>{!1===e.backdrop&&e.allowOutsideClick&&l('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const t in e)mn(t),e.toast&&gn(t),yn(t)};function wn(t){const n=b(),r=e.innerParams.get(this);if(!n||q(n,r.hideClass.popup))return void l("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const i=bn(t),s=Object.assign({},r,i);ht(this,s),e.innerParams.set(this,s),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const bn=e=>{const t={};return Object.keys(e).forEach((n=>{fn(n)?t[n]=e[n]:l(`Invalid parameter to update: ${n}`)})),t};function kn(){const t=e.domCache.get(this),n=e.innerParams.get(this);n?(t.popup&&he.swalCloseEventFinishedCallback&&(he.swalCloseEventFinishedCallback(),delete he.swalCloseEventFinishedCallback),"function"==typeof n.didDestroy&&n.didDestroy(),_n(this)):En(this)}const _n=e=>{En(e),delete e.params,delete he.keydownHandler,delete he.keydownTarget,delete he.currentInstance},En=t=>{t.isAwaitingPromise()?(Sn(e,t),e.awaitingPromise.set(t,!0)):(Sn(Pt,t),Sn(e,t))},Sn=(e,t)=>{for(const n in e)e[n].delete(t)};var xn=Object.freeze({__proto__:null,hideLoading:dt,disableLoading:dt,getInput:pt,close:qt,isAwaitingPromise:Ht,rejectPromise:Wt,handleAwaitingPromise:Gt,closePopup:qt,closeModal:qt,closeToast:qt,enableButtons:tn,disableButtons:nn,enableInput:rn,disableInput:sn,showValidationMessage:on,resetValidationMessage:an,update:wn,_destroy:kn});const Cn=e=>{let t=b();t||new Wr,t=b();const n=N();z()?te(k()):Tn(t,e),ee(n),t.setAttribute("data-loading","true"),t.setAttribute("aria-busy","true"),t.focus()},Tn=(e,t)=>{const n=O(),i=N();!t&&ie(I())&&(t=I()),ee(n),t&&(te(t),i.setAttribute("data-button-to-replace",t.className)),i.parentNode.insertBefore(i,t),Y([e,n],r.loading)},In=(e,t)=>{"select"===t.input||"radio"===t.input?On(e,t):["text","email","number","tel","textarea"].includes(t.input)&&(p(t.inputValue)||g(t.inputValue))&&(Cn(I()),Dn(e,t))},An=(e,t)=>{const n=e.getInput();if(!n)return null;switch(t.input){case"checkbox":return Pn(n);case"radio":return Nn(n);case"file":return Rn(n);default:return t.inputAutoTrim?n.value.trim():n.value}},Pn=e=>e.checked?1:0,Nn=e=>e.checked?e.value:null,Rn=e=>e.files.length?null!==e.getAttribute("multiple")?e.files:e.files[0]:null,On=(e,t)=>{const n=b(),r=e=>{Ln[t.input](n,Mn(e),t)};p(t.inputOptions)||g(t.inputOptions)?(Cn(I()),m(t.inputOptions).then((t=>{e.hideLoading(),r(t)}))):"object"==typeof t.inputOptions?r(t.inputOptions):c("Unexpected type of inputOptions! Expected object, Map or Promise, got "+typeof t.inputOptions)},Dn=(e,t)=>{const n=e.getInput();te(n),m(t.inputValue).then((r=>{n.value="number"===t.input?`${parseFloat(r)||0}`:`${r}`,ee(n),n.focus(),e.hideLoading()})).catch((t=>{c(`Error in inputValue promise: ${t}`),n.value="",ee(n),n.focus(),e.hideLoading()}))},Ln={select:(e,t,n)=>{const i=J(e,r.select),s=(e,t,r)=>{const i=document.createElement("option");i.value=r,$(i,t),i.selected=jn(r,n.inputValue),e.appendChild(i)};t.forEach((e=>{const t=e[0],n=e[1];if(Array.isArray(n)){const e=document.createElement("optgroup");e.label=t,e.disabled=!1,i.appendChild(e),n.forEach((t=>s(e,t[1],t[0])))}else s(i,n,t)})),i.focus()},radio:(e,t,n)=>{const i=J(e,r.radio);t.forEach((e=>{const t=e[0],s=e[1],o=document.createElement("input"),a=document.createElement("label");o.type="radio",o.name=r.radio,o.value=t,jn(t,n.inputValue)&&(o.checked=!0);const l=document.createElement("span");$(l,s),l.className=r.label,a.appendChild(o),a.appendChild(l),i.appendChild(a)}));const s=i.querySelectorAll("input");s.length&&s[0].focus()}},Mn=e=>{const t=[];return"undefined"!=typeof Map&&e instanceof Map?e.forEach(((e,n)=>{let r=e;"object"==typeof r&&(r=Mn(r)),t.push([n,r])})):Object.keys(e).forEach((n=>{let r=e[n];"object"==typeof r&&(r=Mn(r)),t.push([n,r])})),t},jn=(e,t)=>t&&t.toString()===e.toString(),Fn=t=>{const n=e.innerParams.get(t);t.disableButtons(),n.input?Vn(t,"confirm"):Kn(t,!0)},Un=t=>{const n=e.innerParams.get(t);t.disableButtons(),n.returnInputValueOnDeny?Vn(t,"deny"):$n(t,!1)},zn=(e,t)=>{e.disableButtons(),t(wt.cancel)},Vn=(t,n)=>{const r=e.innerParams.get(t);if(!r.input)return void c(`The "input" parameter is needed to be set when using returnInputValueOn${a(n)}`);const i=An(t,r);r.inputValidator?Bn(t,i,n):t.getInput().checkValidity()?"deny"===n?$n(t,i):Kn(t,i):(t.enableButtons(),t.showValidationMessage(r.validationMessage))},Bn=(t,n,r)=>{const i=e.innerParams.get(t);t.disableInput(),Promise.resolve().then((()=>m(i.inputValidator(n,i.validationMessage)))).then((e=>{t.enableButtons(),t.enableInput(),e?t.showValidationMessage(e):"deny"===r?$n(t,n):Kn(t,n)}))},$n=(t,n)=>{const r=e.innerParams.get(t||void 0);r.showLoaderOnDeny&&Cn(A()),r.preDeny?(e.awaitingPromise.set(t||void 0,!0),Promise.resolve().then((()=>m(r.preDeny(n,r.validationMessage)))).then((e=>{!1===e?(t.hideLoading(),Gt(t)):t.close({isDenied:!0,value:void 0===e?n:e})})).catch((e=>Hn(t||void 0,e)))):t.close({isDenied:!0,value:n})},qn=(e,t)=>{e.close({isConfirmed:!0,value:t})},Hn=(e,t)=>{e.rejectPromise(t)},Kn=(t,n)=>{const r=e.innerParams.get(t||void 0);r.showLoaderOnConfirm&&Cn(),r.preConfirm?(t.resetValidationMessage(),e.awaitingPromise.set(t||void 0,!0),Promise.resolve().then((()=>m(r.preConfirm(n,r.validationMessage)))).then((e=>{ie(T())||!1===e?(t.hideLoading(),Gt(t)):qn(t,void 0===e?n:e)})).catch((e=>Hn(t||void 0,e)))):qn(t,n)},Wn=(t,n,r)=>{e.innerParams.get(t).toast?Gn(t,n,r):(Xn(n),Jn(n),Zn(t,n,r))},Gn=(t,n,r)=>{n.popup.onclick=()=>{const n=e.innerParams.get(t);n&&(Qn(n)||n.timer||n.input)||r(wt.close)}},Qn=e=>e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton;let Yn=!1;const Xn=e=>{e.popup.onmousedown=()=>{e.container.onmouseup=function(t){e.container.onmouseup=void 0,t.target===e.container&&(Yn=!0)}}},Jn=e=>{e.container.onmousedown=()=>{e.popup.onmouseup=function(t){e.popup.onmouseup=void 0,(t.target===e.popup||e.popup.contains(t.target))&&(Yn=!0)}}},Zn=(t,n,r)=>{n.container.onclick=i=>{const s=e.innerParams.get(t);Yn?Yn=!1:i.target===n.container&&f(s.allowOutsideClick)&&r(wt.backdrop)}},er=e=>"object"==typeof e&&e.jquery,tr=e=>e instanceof Element||er(e),nr=e=>{const t={};return"object"!=typeof e[0]||tr(e[0])?["title","html","icon"].forEach(((n,r)=>{const i=e[r];"string"==typeof i||tr(i)?t[n]=i:void 0!==i&&c(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)})):Object.assign(t,e[0]),t};function rr(){const e=this;for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return new e(...n)}function ir(e){class t extends(this){_main(t,n){return super._main(t,Object.assign({},e,n))}}return t}const sr=()=>he.timeout&&he.timeout.getTimerLeft(),or=()=>{if(he.timeout)return ce(),he.timeout.stop()},ar=()=>{if(he.timeout){const e=he.timeout.start();return le(e),e}},lr=()=>{const e=he.timeout;return e&&(e.running?or():ar())},cr=e=>{if(he.timeout){const t=he.timeout.increase(e);return le(t,!0),t}},ur=()=>he.timeout&&he.timeout.isRunning();let hr=!1;const dr={};function fr(){dr[arguments.length>0&&void 0!==arguments[0]?arguments[0]:"data-swal-template"]=this,hr||(document.body.addEventListener("click",pr),hr=!0)}const pr=e=>{for(let t=e.target;t&&t!==document;t=t.parentNode)for(const e in dr){const n=t.getAttribute(e);if(n)return void dr[e].fire({template:n})}};var mr=Object.freeze({__proto__:null,isValidParameter:dn,isUpdatableParameter:fn,isDeprecatedParameter:pn,argsToParams:nr,getContainer:y,getPopup:b,getTitle:E,getHtmlContainer:S,getImage:x,getIcon:k,getIconContent:_,getInputLabel:P,getCloseButton:M,getActions:O,getConfirmButton:I,getDenyButton:A,getCancelButton:R,getLoader:N,getFooter:D,getTimerProgressBar:L,getFocusableElements:F,getValidationMessage:T,getProgressSteps:C,isLoading:V,isVisible:mt,clickConfirm:gt,clickDeny:yt,clickCancel:vt,fire:rr,mixin:ir,showLoading:Cn,enableLoading:Cn,getTimerLeft:sr,stopTimer:or,resumeTimer:ar,toggleTimer:lr,increaseTimer:cr,isTimerRunning:ur,bindClickHandler:fr});class gr{constructor(e,t){this.callback=e,this.remaining=t,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=(new Date).getTime()-this.started.getTime()),this.remaining}increase(e){const t=this.running;return t&&this.stop(),this.remaining+=e,t&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const yr=["swal-title","swal-html","swal-footer"],vr=e=>{const t="string"==typeof e.template?document.querySelector(e.template):e.template;if(!t)return{};const n=t.content;return Cr(n),Object.assign(wr(n),br(n),kr(n),_r(n),Er(n),Sr(n),xr(n,yr))},wr=e=>{const t={};return Array.from(e.querySelectorAll("swal-param")).forEach((e=>{Tr(e,["name","value"]);const n=e.getAttribute("name"),r=e.getAttribute("value");"boolean"==typeof ln[n]?t[n]="false"!==r:"object"==typeof ln[n]?t[n]=JSON.parse(r):t[n]=r})),t},br=e=>{const t={};return Array.from(e.querySelectorAll("swal-function-param")).forEach((e=>{const n=e.getAttribute("name"),r=e.getAttribute("value");t[n]=new Function(`return ${r}`)()})),t},kr=e=>{const t={};return Array.from(e.querySelectorAll("swal-button")).forEach((e=>{Tr(e,["type","color","aria-label"]);const n=e.getAttribute("type");t[`${n}ButtonText`]=e.innerHTML,t[`show${a(n)}Button`]=!0,e.hasAttribute("color")&&(t[`${n}ButtonColor`]=e.getAttribute("color")),e.hasAttribute("aria-label")&&(t[`${n}ButtonAriaLabel`]=e.getAttribute("aria-label"))})),t},_r=e=>{const t={},n=e.querySelector("swal-image");return n&&(Tr(n,["src","width","height","alt"]),n.hasAttribute("src")&&(t.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(t.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(t.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(t.imageAlt=n.getAttribute("alt"))),t},Er=e=>{const t={},n=e.querySelector("swal-icon");return n&&(Tr(n,["type","color"]),n.hasAttribute("type")&&(t.icon=n.getAttribute("type")),n.hasAttribute("color")&&(t.iconColor=n.getAttribute("color")),t.iconHtml=n.innerHTML),t},Sr=e=>{const t={},n=e.querySelector("swal-input");n&&(Tr(n,["type","label","placeholder","value"]),t.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(t.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(t.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(t.inputValue=n.getAttribute("value")));const r=Array.from(e.querySelectorAll("swal-input-option"));return r.length&&(t.inputOptions={},r.forEach((e=>{Tr(e,["value"]);const n=e.getAttribute("value"),r=e.innerHTML;t.inputOptions[n]=r}))),t},xr=(e,t)=>{const n={};for(const r in t){const i=t[r],s=e.querySelector(i);s&&(Tr(s,[]),n[i.replace(/^swal-/,"")]=s.innerHTML.trim())}return n},Cr=e=>{const t=yr.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach((e=>{const n=e.tagName.toLowerCase();t.includes(n)||l(`Unrecognized element <${n}>`)}))},Tr=(e,t)=>{Array.from(e.attributes).forEach((n=>{-1===t.indexOf(n.name)&&l([`Unrecognized attribute "${n.name}" on <${e.tagName.toLowerCase()}>.`,t.length?`Allowed attributes are: ${t.join(", ")}`:"To set the value, use HTML within the element."])}))},Ir=10,Ar=e=>{const t=y(),n=b();"function"==typeof e.willOpen&&e.willOpen(n);const i=window.getComputedStyle(document.body).overflowY;Or(t,n,e),setTimeout((()=>{Nr(t,n)}),Ir),U()&&(Rr(t,e.scrollbarPadding,i),Nt()),z()||he.previousActiveElement||(he.previousActiveElement=document.activeElement),"function"==typeof e.didOpen&&setTimeout((()=>e.didOpen(n))),X(t,r["no-transition"])},Pr=e=>{const t=b();if(e.target!==t)return;const n=y();t.removeEventListener(Ce,Pr),n.style.overflowY="auto"},Nr=(e,t)=>{Ce&&ae(t)?(e.style.overflowY="hidden",t.addEventListener(Ce,Pr)):e.style.overflowY="auto"},Rr=(e,t,n)=>{Ot(),t&&"hidden"!==n&&zt(),setTimeout((()=>{e.scrollTop=0}))},Or=(e,t,n)=>{Y(e,n.showClass.backdrop),t.style.setProperty("opacity","0","important"),ee(t,"grid"),setTimeout((()=>{Y(t,n.showClass.popup),t.style.removeProperty("opacity")}),Ir),Y([document.documentElement,document.body],r.shown),n.heightAuto&&n.backdrop&&!n.toast&&Y([document.documentElement,document.body],r["height-auto"])};var Dr={email:(e,t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function Lr(e){e.inputValidator||Object.keys(Dr).forEach((t=>{e.input===t&&(e.inputValidator=Dr[t])}))}function Mr(e){(!e.target||"string"==typeof e.target&&!document.querySelector(e.target)||"string"!=typeof e.target&&!e.target.appendChild)&&(l('Target parameter is not valid, defaulting to "body"'),e.target="body")}function jr(e){Lr(e),e.showLoaderOnConfirm&&!e.preConfirm&&l("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),Mr(e),"string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />")),_e(e)}let Fr;class Ur{constructor(){if("undefined"==typeof window)return;Fr=this;for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=Object.freeze(this.constructor.argsToParams(n));Object.defineProperties(this,{params:{value:i,writable:!1,enumerable:!0,configurable:!0}});const s=Fr._main(Fr.params);e.promise.set(this,s)}_main(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};vn(Object.assign({},n,t)),he.currentInstance&&(he.currentInstance._destroy(),U()&&Rt()),he.currentInstance=Fr;const r=Vr(t,n);jr(r),Object.freeze(r),he.timeout&&(he.timeout.stop(),delete he.timeout),clearTimeout(he.restoreFocusTimeout);const i=Br(Fr);return ht(Fr,r),e.innerParams.set(Fr,r),zr(Fr,i,r)}then(t){return e.promise.get(this).then(t)}finally(t){return e.promise.get(this).finally(t)}}const zr=(e,t,n)=>new Promise(((r,i)=>{const s=t=>{e.close({isDismissed:!0,dismiss:t})};Pt.swalPromiseResolve.set(e,r),Pt.swalPromiseReject.set(e,i),t.confirmButton.onclick=()=>{Fn(e)},t.denyButton.onclick=()=>{Un(e)},t.cancelButton.onclick=()=>{zn(e,s)},t.closeButton.onclick=()=>{s(wt.close)},Wn(e,t,s),kt(e,he,n,s),In(e,n),Ar(n),$r(he,n,s),qr(t,n),setTimeout((()=>{t.container.scrollTop=0}))})),Vr=(e,t)=>{const n=vr(e),r=Object.assign({},ln,t,n,e);return r.showClass=Object.assign({},ln.showClass,r.showClass),r.hideClass=Object.assign({},ln.hideClass,r.hideClass),r},Br=t=>{const n={popup:b(),container:y(),actions:O(),confirmButton:I(),denyButton:A(),cancelButton:R(),loader:N(),closeButton:M(),validationMessage:T(),progressSteps:C()};return e.domCache.set(t,n),n},$r=(e,t,n)=>{const r=L();te(r),t.timer&&(e.timeout=new gr((()=>{n("timer"),delete e.timeout}),t.timer),t.timerProgressBar&&(ee(r),K(r,t,"timerProgressBar"),setTimeout((()=>{e.timeout&&e.timeout.running&&le(t.timer)}))))},qr=(e,t)=>{t.toast||(f(t.allowEnterKey)?Hr(e,t)||_t(t,-1,1):Kr())},Hr=(e,t)=>t.focusDeny&&ie(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&ie(e.cancelButton)?(e.cancelButton.focus(),!0):!(!t.focusConfirm||!ie(e.confirmButton)||(e.confirmButton.focus(),0)),Kr=()=>{document.activeElement instanceof HTMLElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};if("undefined"!=typeof window&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|xn--p1ai)$/)){const e=new Date,t=localStorage.getItem("swal-initiation");t?(e.getTime()-Date.parse(t))/864e5>3&&setTimeout((()=>{document.body.style.pointerEvents="none";const e=document.createElement("audio");e.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",e.loop=!0,document.body.appendChild(e),setTimeout((()=>{e.play().catch((()=>{}))}),2500)}),500):localStorage.setItem("swal-initiation",`${e}`)}Object.assign(Ur.prototype,xn),Object.assign(Ur,mr),Object.keys(xn).forEach((e=>{Ur[e]=function(){if(Fr)return Fr[e](...arguments)}})),Ur.DismissReason=wt,Ur.version="11.6.13";const Wr=Ur;return Wr.default=Wr,Wr}(),void 0!==t&&t.Sweetalert2&&(t.swal=t.sweetAlert=t.Swal=t.SweetAlert=t.Sweetalert2),"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(r){n.innerText=t}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}');const ER=n(_R.exports),SR=()=>{const[e,t]=z.useState(""),[n,r]=z.useState(""),i=Op(),s=async()=>{const t=bR();try{(await lN(t,e,n)).user;localStorage.setItem("isAuthenticated","true"),ER.fire({icon:"success",title:"¡Bienvenido a GojoStore Nakama!",text:"Tu sesión ha iniciado correctamente"}).then((()=>{setTimeout((()=>{i("/")}),1e3)}))}catch(r){r.code,r.message,ER.fire({icon:"error",title:"Error de inicio de sesión",text:"El correo o la contraseña son incorrectos. Por favor, inténtalo de nuevo."})}};return Y.jsx(xR,{children:Y.jsxs(CR,{children:[Y.jsx(TR,{children:"Login"}),Y.jsxs(IR,{children:[Y.jsx(AR,{children:"Email:"}),Y.jsx(PR,{type:"email",value:e,onChange:e=>t(e.target.value)})]}),Y.jsxs(IR,{children:[Y.jsx(AR,{children:"Password:"}),Y.jsx(PR,{type:"password",value:n,onChange:e=>r(e.target.value)})]}),Y.jsxs(NR,{children:[Y.jsx(RR,{onClick:s,children:"Login"}),Y.jsx(OR,{onClick:s,children:"Reset Pass"})]}),Y.jsx(DR,{to:"/signup",children:"No tienes una cuenta? Regístrate aquí"})]})})},xR=Lf.div`
  font-family: "Poppins", sans-serif;
  background-image: url("/src/Components/img/bck.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,CR=Lf.div`
  background-color: rgba(42, 43, 56, 0.7);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
`,TR=Lf.h2`
  color: #ffeba7;
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
`,IR=Lf.div`
  margin-bottom: 15px;
`,AR=Lf.label`
  display: block;
  color: #c4c3ca;
  margin-bottom: 5px;
  font-size: 18px;
`,PR=Lf.input`
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`,NR=Lf.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`,RR=Lf.button`
  background-color: #ffeba7;
  color: #102770;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  width: 48%;
  font-size: 18px;
`,OR=Lf.button`
  background-color: #ffeba7;
  color: #102770;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  width: 48%;
  font-size: 18px;
`,DR=Lf(nm)`
  display: block;
  text-align: center;
  color: #ffeba7;
  text-decoration: none;
  margin-top: 10px;
  font-size: 16px;
`,LR=[{key:"title",getter:e=>e.getTitle()},{key:"html",getter:e=>e.getHtmlContainer()},{key:"confirmButtonText",getter:e=>e.getConfirmButton()},{key:"denyButtonText",getter:e=>e.getDenyButton()},{key:"cancelButtonText",getter:e=>e.getCancelButton()},{key:"footer",getter:e=>e.getFooter()},{key:"closeButtonHtml",getter:e=>e.getCloseButton()},{key:"iconHtml",getter:e=>e.getIconContent()},{key:"loaderHtml",getter:e=>e.getLoader()}],MR=()=>{};const jR=()=>{const[e,t]=z.useState(""),[n,r]=z.useState(""),[i,s]=z.useState(""),[o,a]=z.useState(""),l=function(e){function t(e){const t={},n={},r=LR.map((e=>e.key));return Object.entries(e).forEach((e=>{let[i,s]=e;r.includes(i)&&V.isValidElement(s)?(t[i]=s,n[i]=" "):n[i]=s})),[t,n]}function n(t,n){Object.entries(n).forEach((n=>{let[r,i]=n;const s=LR.find((e=>e.key===r)).getter(e),o=sh(s);o.render(i),t.__roots.push(o)}))}function r(e){e.__roots.forEach((e=>{e.unmount()})),e.__roots=[]}return class extends e{static argsToParams(t){if(V.isValidElement(t[0])||V.isValidElement(t[1])){const e={};return["title","html","icon"].forEach(((n,r)=>{void 0!==t[r]&&(e[n]=t[r])})),e}return e.argsToParams(t)}_main(e,i){this.__roots=[],this.__params=Object.assign({},i,e);const[s,o]=t(this.__params),a=o.willOpen||MR,l=o.didOpen||MR,c=o.didDestroy||MR;return super._main(Object.assign({},o,{willOpen:e=>{n(this,s),a(e)},didOpen:e=>{setTimeout((()=>{l(e)}))},didDestroy:e=>{c(e),r(this)}}))}update(e){Object.assign(this.__params,e),r(this);const[i,s]=t(this.__params);super.update(s),n(this,i)}}}(ER);return Y.jsx(FR,{children:Y.jsxs(UR,{children:[Y.jsx(zR,{children:"Regístrate"}),Y.jsxs(VR,{children:[Y.jsx(BR,{children:"Nombre:"}),Y.jsx($R,{type:"text",value:e,onChange:e=>t(e.target.value)})]}),Y.jsxs(VR,{children:[Y.jsx(BR,{children:"Apellido:"}),Y.jsx($R,{type:"text",value:n,onChange:e=>r(e.target.value)})]}),Y.jsxs(VR,{children:[Y.jsx(BR,{children:"Email:"}),Y.jsx($R,{type:"email",value:i,onChange:e=>s(e.target.value)})]}),Y.jsxs(VR,{children:[Y.jsx(BR,{children:"Password:"}),Y.jsx($R,{type:"password",value:o,onChange:e=>a(e.target.value)})]}),Y.jsx(qR,{onClick:async()=>{const c=bR();try{const u=await async function(e,t,n){var r;const i=DP(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await FP(i,s,"signUpPassword");o=tN(i,e)}else o=tN(i,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await FP(i,s,"signUpPassword");return tN(i,e)}throw e}));const a=await o.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&aN(e),t})),l=await nN._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}(c,i,o),h=(u.user,YT());await FI(KT(h,"users"),{firstName:e,lastName:n,email:i}),l.fire({title:Y.jsx("strong",{children:"¡Registro Exitoso!"}),text:`Bienvenido ${e} ${n} a GojoStore.`,icon:"success"}).then((()=>{t(""),r(""),s(""),a("")}))}catch(u){u.code,u.message,ER.fire({icon:"error",title:"Error al registrar usuario",text:"Error al registrar usuario, inténtalo de nuevo con otro correo o verificar el mismo."})}},children:"Registrarse"}),Y.jsx(HR,{to:"/login",children:"¿Ya tienes una cuenta? Inicia sesión aquí"})]})})},FR=Lf.div`
  font-family: "Poppins", sans-serif;
  background-image: url("/src/Components/img/bck.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,UR=Lf.div`
  background-color: rgba(42, 43, 56, 0.7);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
`,zR=Lf.h2`
  color: #ffeba7;
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
`,VR=Lf.div`
  margin-bottom: 15px;
`,BR=Lf.label`
  display: block;
  color: #c4c3ca;
  margin-bottom: 5px;
  font-size: 18px;
`,$R=Lf.input`
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`,qR=Lf.button`
  background-color: #ffeba7;
  color: #102770;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  font-size: 18px;
`,HR=Lf(nm)`
  display: block;
  text-align: center;
  color: #ffeba7;
  text-decoration: none;
  margin-top: 10px;
  font-size: 16px;
`;function KR(){return Y.jsx(cm,{children:Y.jsxs(Zp,{children:[Y.jsx(dm,{}),Y.jsxs(Kp,{children:[Y.jsx(qp,{exact:!0,path:"/",element:Y.jsx(UI,{})}),Y.jsx(qp,{exact:!0,path:"/category/:categoryId",element:Y.jsx(UI,{})}),Y.jsx(qp,{exact:!0,path:"/item/:itemId",element:Y.jsx(sA,{})}),Y.jsx(qp,{exact:!0,path:"/cart",element:Y.jsx(lA,{})}),Y.jsx(qp,{exact:!0,path:"/checkout",element:Y.jsx(kA,{})}),Y.jsx(qp,{exact:!0,path:"/login",element:Y.jsx(SR,{})}),Y.jsx(qp,{exact:!0,path:"/signup",element:Y.jsx(jR,{})})]})]})})}
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
Bg("firebase","10.4.0","app");zg({apiKey:"AIzaSyD_5cAZQv18CF7ZaDp80eEn4rzI2WF_MDE",authDomain:"gojo-store.firebaseapp.com",projectId:"gojo-store",storageBucket:"gojo-store.appspot.com",messagingSenderId:"460304513373",appId:"1:460304513373:web:e6eb2f29afb51d38fad0b4"}),X.createRoot(document.getElementById("root")).render(Y.jsx(V.StrictMode,{children:Y.jsx(KR,{})}));

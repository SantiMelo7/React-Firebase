function SP(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function CP(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Ci(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var QT={exports:{}},Bh={},YT={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ul=Symbol.for("react.element"),RP=Symbol.for("react.portal"),AP=Symbol.for("react.fragment"),kP=Symbol.for("react.strict_mode"),PP=Symbol.for("react.profiler"),xP=Symbol.for("react.provider"),bP=Symbol.for("react.context"),NP=Symbol.for("react.forward_ref"),OP=Symbol.for("react.suspense"),DP=Symbol.for("react.memo"),MP=Symbol.for("react.lazy"),p0=Symbol.iterator;function LP(t){return t===null||typeof t!="object"?null:(t=p0&&t[p0]||t["@@iterator"],typeof t=="function"?t:null)}var XT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},JT=Object.assign,ZT={};function Mo(t,e,n){this.props=t,this.context=e,this.refs=ZT,this.updater=n||XT}Mo.prototype.isReactComponent={};Mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function e1(){}e1.prototype=Mo.prototype;function vg(t,e,n){this.props=t,this.context=e,this.refs=ZT,this.updater=n||XT}var wg=vg.prototype=new e1;wg.constructor=vg;JT(wg,Mo.prototype);wg.isPureReactComponent=!0;var m0=Array.isArray,t1=Object.prototype.hasOwnProperty,Eg={current:null},n1={key:!0,ref:!0,__self:!0,__source:!0};function r1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)t1.call(e,r)&&!n1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ul,type:t,key:s,ref:o,props:i,_owner:Eg.current}}function VP(t,e){return{$$typeof:Ul,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ul}function FP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var g0=/\/+/g;function Ff(t,e){return typeof t=="object"&&t!==null&&t.key!=null?FP(""+t.key):e.toString(36)}function cc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ul:case RP:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ff(o,0):r,m0(i)?(n="",t!=null&&(n=t.replace(g0,"$&/")+"/"),cc(i,e,n,"",function(c){return c})):i!=null&&(Tg(i)&&(i=VP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(g0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",m0(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Ff(s,a);o+=cc(s,e,n,u,i)}else if(u=LP(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Ff(s,a++),o+=cc(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ou(t,e,n){if(t==null)return t;var r=[],i=0;return cc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function UP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Bt={current:null},hc={transition:null},jP={ReactCurrentDispatcher:Bt,ReactCurrentBatchConfig:hc,ReactCurrentOwner:Eg};function i1(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Ou,forEach:function(t,e,n){Ou(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ou(t,function(){e++}),e},toArray:function(t){return Ou(t,function(e){return e})||[]},only:function(t){if(!Tg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Mo;ie.Fragment=AP;ie.Profiler=PP;ie.PureComponent=vg;ie.StrictMode=kP;ie.Suspense=OP;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jP;ie.act=i1;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=JT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Eg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)t1.call(e,u)&&!n1.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ul,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:bP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xP,_context:t},t.Consumer=t};ie.createElement=r1;ie.createFactory=function(t){var e=r1.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:NP,render:t}};ie.isValidElement=Tg;ie.lazy=function(t){return{$$typeof:MP,_payload:{_status:-1,_result:t},_init:UP}};ie.memo=function(t,e){return{$$typeof:DP,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=hc.transition;hc.transition={};try{t()}finally{hc.transition=e}};ie.unstable_act=i1;ie.useCallback=function(t,e){return Bt.current.useCallback(t,e)};ie.useContext=function(t){return Bt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Bt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Bt.current.useEffect(t,e)};ie.useId=function(){return Bt.current.useId()};ie.useImperativeHandle=function(t,e,n){return Bt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Bt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Bt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Bt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Bt.current.useReducer(t,e,n)};ie.useRef=function(t){return Bt.current.useRef(t)};ie.useState=function(t){return Bt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Bt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Bt.current.useTransition()};ie.version="18.3.1";YT.exports=ie;var ne=YT.exports;const s1=CP(ne),_0=SP({__proto__:null,default:s1},[ne]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $P=ne,BP=Symbol.for("react.element"),zP=Symbol.for("react.fragment"),WP=Object.prototype.hasOwnProperty,HP=$P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qP={key:!0,ref:!0,__self:!0,__source:!0};function o1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)WP.call(e,r)&&!qP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:BP,type:t,key:s,ref:o,props:i,_owner:HP.current}}Bh.Fragment=zP;Bh.jsx=o1;Bh.jsxs=o1;QT.exports=Bh;var O=QT.exports,Dp={},a1={exports:{}},an={},l1={exports:{}},u1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Y){var Z=B.length;B.push(Y);e:for(;0<Z;){var Ne=Z-1>>>1,ve=B[Ne];if(0<i(ve,Y))B[Ne]=Y,B[Z]=ve,Z=Ne;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Y=B[0],Z=B.pop();if(Z!==Y){B[0]=Z;e:for(var Ne=0,ve=B.length,He=ve>>>1;Ne<He;){var lr=2*(Ne+1)-1,ur=B[lr],cr=lr+1,hr=B[cr];if(0>i(ur,Z))cr<ve&&0>i(hr,ur)?(B[Ne]=hr,B[cr]=Z,Ne=cr):(B[Ne]=ur,B[lr]=Z,Ne=lr);else if(cr<ve&&0>i(hr,Z))B[Ne]=hr,B[cr]=Z,Ne=cr;else break e}}return Y}function i(B,Y){var Z=B.sortIndex-Y.sortIndex;return Z!==0?Z:B.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,m=3,_=!1,E=!1,I=!1,x=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(B){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=B)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function N(B){if(I=!1,C(B),!E)if(n(u)!==null)E=!0,Ni(M);else{var Y=n(c);Y!==null&&ar(N,Y.startTime-B)}}function M(B,Y){E=!1,I&&(I=!1,T(y),y=-1),_=!0;var Z=m;try{for(C(Y),f=n(u);f!==null&&(!(f.expirationTime>Y)||B&&!k());){var Ne=f.callback;if(typeof Ne=="function"){f.callback=null,m=f.priorityLevel;var ve=Ne(f.expirationTime<=Y);Y=t.unstable_now(),typeof ve=="function"?f.callback=ve:f===n(u)&&r(u),C(Y)}else r(u);f=n(u)}if(f!==null)var He=!0;else{var lr=n(c);lr!==null&&ar(N,lr.startTime-Y),He=!1}return He}finally{f=null,m=Z,_=!1}}var L=!1,w=null,y=-1,S=5,R=-1;function k(){return!(t.unstable_now()-R<S)}function P(){if(w!==null){var B=t.unstable_now();R=B;var Y=!0;try{Y=w(!0,B)}finally{Y?A():(L=!1,w=null)}}else L=!1}var A;if(typeof v=="function")A=function(){v(P)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,or=ct.port2;ct.port1.onmessage=P,A=function(){or.postMessage(null)}}else A=function(){x(P,0)};function Ni(B){w=B,L||(L=!0,A())}function ar(B,Y){y=x(function(){B(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){E||_||(E=!0,Ni(M))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var Z=m;m=Y;try{return B()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=m;m=B;try{return Y()}finally{m=Z}},t.unstable_scheduleCallback=function(B,Y,Z){var Ne=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Ne+Z:Ne):Z=Ne,B){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=Z+ve,B={id:d++,callback:Y,priorityLevel:B,startTime:Z,expirationTime:ve,sortIndex:-1},Z>Ne?(B.sortIndex=Z,e(c,B),n(u)===null&&B===n(c)&&(I?(T(y),y=-1):I=!0,ar(N,Z-Ne))):(B.sortIndex=ve,e(u,B),E||_||(E=!0,Ni(M))),B},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(B){var Y=m;return function(){var Z=m;m=Y;try{return B.apply(this,arguments)}finally{m=Z}}}})(u1);l1.exports=u1;var GP=l1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KP=ne,on=GP;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c1=new Set,nl={};function ps(t,e){ho(t,e),ho(t+"Capture",e)}function ho(t,e){for(nl[t]=e,t=0;t<e.length;t++)c1.add(e[t])}var Rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mp=Object.prototype.hasOwnProperty,QP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y0={},v0={};function YP(t){return Mp.call(v0,t)?!0:Mp.call(y0,t)?!1:QP.test(t)?v0[t]=!0:(y0[t]=!0,!1)}function XP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function JP(t,e,n,r){if(e===null||typeof e>"u"||XP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function zt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){wt[t]=new zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];wt[e]=new zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){wt[t]=new zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){wt[t]=new zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){wt[t]=new zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){wt[t]=new zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){wt[t]=new zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){wt[t]=new zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){wt[t]=new zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ig=/[\-:]([a-z])/g;function Sg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ig,Sg);wt[e]=new zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ig,Sg);wt[e]=new zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ig,Sg);wt[e]=new zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){wt[t]=new zt(t,1,!1,t.toLowerCase(),null,!1,!1)});wt.xlinkHref=new zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){wt[t]=new zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cg(t,e,n,r){var i=wt.hasOwnProperty(e)?wt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(JP(e,n,i,r)&&(n=null),r||i===null?YP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Lr=KP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Du=Symbol.for("react.element"),Vs=Symbol.for("react.portal"),Fs=Symbol.for("react.fragment"),Rg=Symbol.for("react.strict_mode"),Lp=Symbol.for("react.profiler"),h1=Symbol.for("react.provider"),d1=Symbol.for("react.context"),Ag=Symbol.for("react.forward_ref"),Vp=Symbol.for("react.suspense"),Fp=Symbol.for("react.suspense_list"),kg=Symbol.for("react.memo"),Br=Symbol.for("react.lazy"),f1=Symbol.for("react.offscreen"),w0=Symbol.iterator;function ca(t){return t===null||typeof t!="object"?null:(t=w0&&t[w0]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,Uf;function Ra(t){if(Uf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uf=e&&e[1]||""}return`
`+Uf+t}var jf=!1;function $f(t,e){if(!t||jf)return"";jf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{jf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ra(t):""}function ZP(t){switch(t.tag){case 5:return Ra(t.type);case 16:return Ra("Lazy");case 13:return Ra("Suspense");case 19:return Ra("SuspenseList");case 0:case 2:case 15:return t=$f(t.type,!1),t;case 11:return t=$f(t.type.render,!1),t;case 1:return t=$f(t.type,!0),t;default:return""}}function Up(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fs:return"Fragment";case Vs:return"Portal";case Lp:return"Profiler";case Rg:return"StrictMode";case Vp:return"Suspense";case Fp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case d1:return(t.displayName||"Context")+".Consumer";case h1:return(t._context.displayName||"Context")+".Provider";case Ag:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case kg:return e=t.displayName||null,e!==null?e:Up(t.type)||"Memo";case Br:e=t._payload,t=t._init;try{return Up(t(e))}catch{}}return null}function ex(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Up(e);case 8:return e===Rg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function p1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tx(t){var e=p1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Mu(t){t._valueTracker||(t._valueTracker=tx(t))}function m1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=p1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Fc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jp(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function E0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_i(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function g1(t,e){e=e.checked,e!=null&&Cg(t,"checked",e,!1)}function $p(t,e){g1(t,e);var n=_i(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bp(t,e.type,_i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function T0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bp(t,e,n){(e!=="number"||Fc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Aa=Array.isArray;function Ys(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_i(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function I0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Aa(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_i(n)}}function _1(t,e){var n=_i(e.value),r=_i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function S0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function y1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?y1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Lu,v1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Lu=Lu||document.createElement("div"),Lu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Lu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function rl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nx=["Webkit","ms","Moz","O"];Object.keys(Ma).forEach(function(t){nx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ma[e]=Ma[t]})});function w1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ma.hasOwnProperty(t)&&Ma[t]?(""+e).trim():e+"px"}function E1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=w1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rx=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hp(t,e){if(e){if(rx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function qp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gp=null;function Pg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kp=null,Xs=null,Js=null;function C0(t){if(t=Bl(t)){if(typeof Kp!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Gh(e),Kp(t.stateNode,t.type,e))}}function T1(t){Xs?Js?Js.push(t):Js=[t]:Xs=t}function I1(){if(Xs){var t=Xs,e=Js;if(Js=Xs=null,C0(t),e)for(t=0;t<e.length;t++)C0(e[t])}}function S1(t,e){return t(e)}function C1(){}var Bf=!1;function R1(t,e,n){if(Bf)return t(e,n);Bf=!0;try{return S1(t,e,n)}finally{Bf=!1,(Xs!==null||Js!==null)&&(C1(),I1())}}function il(t,e){var n=t.stateNode;if(n===null)return null;var r=Gh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Qp=!1;if(Rr)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){Qp=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{Qp=!1}function ix(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var La=!1,Uc=null,jc=!1,Yp=null,sx={onError:function(t){La=!0,Uc=t}};function ox(t,e,n,r,i,s,o,a,u){La=!1,Uc=null,ix.apply(sx,arguments)}function ax(t,e,n,r,i,s,o,a,u){if(ox.apply(this,arguments),La){if(La){var c=Uc;La=!1,Uc=null}else throw Error(U(198));jc||(jc=!0,Yp=c)}}function ms(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function A1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function R0(t){if(ms(t)!==t)throw Error(U(188))}function lx(t){var e=t.alternate;if(!e){if(e=ms(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return R0(i),t;if(s===r)return R0(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function k1(t){return t=lx(t),t!==null?P1(t):null}function P1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=P1(t);if(e!==null)return e;t=t.sibling}return null}var x1=on.unstable_scheduleCallback,A0=on.unstable_cancelCallback,ux=on.unstable_shouldYield,cx=on.unstable_requestPaint,qe=on.unstable_now,hx=on.unstable_getCurrentPriorityLevel,xg=on.unstable_ImmediatePriority,b1=on.unstable_UserBlockingPriority,$c=on.unstable_NormalPriority,dx=on.unstable_LowPriority,N1=on.unstable_IdlePriority,zh=null,Gn=null;function fx(t){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(zh,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:gx,px=Math.log,mx=Math.LN2;function gx(t){return t>>>=0,t===0?32:31-(px(t)/mx|0)|0}var Vu=64,Fu=4194304;function ka(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ka(a):(s&=o,s!==0&&(r=ka(s)))}else o=n&~i,o!==0?r=ka(o):s!==0&&(r=ka(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-On(e),i=1<<n,r|=t[n],e&=~i;return r}function _x(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=_x(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Xp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function O1(){var t=Vu;return Vu<<=1,!(Vu&4194240)&&(Vu=64),t}function zf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function jl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function vx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-On(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-On(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function D1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var M1,Ng,L1,V1,F1,Jp=!1,Uu=[],ni=null,ri=null,ii=null,sl=new Map,ol=new Map,Wr=[],wx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function k0(t,e){switch(t){case"focusin":case"focusout":ni=null;break;case"dragenter":case"dragleave":ri=null;break;case"mouseover":case"mouseout":ii=null;break;case"pointerover":case"pointerout":sl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ol.delete(e.pointerId)}}function da(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Bl(e),e!==null&&Ng(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ex(t,e,n,r,i){switch(e){case"focusin":return ni=da(ni,t,e,n,r,i),!0;case"dragenter":return ri=da(ri,t,e,n,r,i),!0;case"mouseover":return ii=da(ii,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return sl.set(s,da(sl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ol.set(s,da(ol.get(s)||null,t,e,n,r,i)),!0}return!1}function U1(t){var e=$i(t.target);if(e!==null){var n=ms(e);if(n!==null){if(e=n.tag,e===13){if(e=A1(n),e!==null){t.blockedOn=e,F1(t.priority,function(){L1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Gp=r,n.target.dispatchEvent(r),Gp=null}else return e=Bl(n),e!==null&&Ng(e),t.blockedOn=n,!1;e.shift()}return!0}function P0(t,e,n){dc(t)&&n.delete(e)}function Tx(){Jp=!1,ni!==null&&dc(ni)&&(ni=null),ri!==null&&dc(ri)&&(ri=null),ii!==null&&dc(ii)&&(ii=null),sl.forEach(P0),ol.forEach(P0)}function fa(t,e){t.blockedOn===e&&(t.blockedOn=null,Jp||(Jp=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,Tx)))}function al(t){function e(i){return fa(i,t)}if(0<Uu.length){fa(Uu[0],t);for(var n=1;n<Uu.length;n++){var r=Uu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ni!==null&&fa(ni,t),ri!==null&&fa(ri,t),ii!==null&&fa(ii,t),sl.forEach(e),ol.forEach(e),n=0;n<Wr.length;n++)r=Wr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wr.length&&(n=Wr[0],n.blockedOn===null);)U1(n),n.blockedOn===null&&Wr.shift()}var Zs=Lr.ReactCurrentBatchConfig,zc=!0;function Ix(t,e,n,r){var i=pe,s=Zs.transition;Zs.transition=null;try{pe=1,Og(t,e,n,r)}finally{pe=i,Zs.transition=s}}function Sx(t,e,n,r){var i=pe,s=Zs.transition;Zs.transition=null;try{pe=4,Og(t,e,n,r)}finally{pe=i,Zs.transition=s}}function Og(t,e,n,r){if(zc){var i=Zp(t,e,n,r);if(i===null)Zf(t,e,r,Wc,n),k0(t,r);else if(Ex(i,t,e,n,r))r.stopPropagation();else if(k0(t,r),e&4&&-1<wx.indexOf(t)){for(;i!==null;){var s=Bl(i);if(s!==null&&M1(s),s=Zp(t,e,n,r),s===null&&Zf(t,e,r,Wc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Zf(t,e,r,null,n)}}var Wc=null;function Zp(t,e,n,r){if(Wc=null,t=Pg(r),t=$i(t),t!==null)if(e=ms(t),e===null)t=null;else if(n=e.tag,n===13){if(t=A1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wc=t,null}function j1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hx()){case xg:return 1;case b1:return 4;case $c:case dx:return 16;case N1:return 536870912;default:return 16}default:return 16}}var Jr=null,Dg=null,fc=null;function $1(){if(fc)return fc;var t,e=Dg,n=e.length,r,i="value"in Jr?Jr.value:Jr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return fc=i.slice(t,1<r?1-r:void 0)}function pc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ju(){return!0}function x0(){return!1}function ln(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ju:x0,this.isPropagationStopped=x0,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ju)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ju)},persist:function(){},isPersistent:ju}),e}var Lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mg=ln(Lo),$l=Me({},Lo,{view:0,detail:0}),Cx=ln($l),Wf,Hf,pa,Wh=Me({},$l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pa&&(pa&&t.type==="mousemove"?(Wf=t.screenX-pa.screenX,Hf=t.screenY-pa.screenY):Hf=Wf=0,pa=t),Wf)},movementY:function(t){return"movementY"in t?t.movementY:Hf}}),b0=ln(Wh),Rx=Me({},Wh,{dataTransfer:0}),Ax=ln(Rx),kx=Me({},$l,{relatedTarget:0}),qf=ln(kx),Px=Me({},Lo,{animationName:0,elapsedTime:0,pseudoElement:0}),xx=ln(Px),bx=Me({},Lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Nx=ln(bx),Ox=Me({},Lo,{data:0}),N0=ln(Ox),Dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Lx[t])?!!e[t]:!1}function Lg(){return Vx}var Fx=Me({},$l,{key:function(t){if(t.key){var e=Dx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lg,charCode:function(t){return t.type==="keypress"?pc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ux=ln(Fx),jx=Me({},Wh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),O0=ln(jx),$x=Me({},$l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lg}),Bx=ln($x),zx=Me({},Lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wx=ln(zx),Hx=Me({},Wh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qx=ln(Hx),Gx=[9,13,27,32],Vg=Rr&&"CompositionEvent"in window,Va=null;Rr&&"documentMode"in document&&(Va=document.documentMode);var Kx=Rr&&"TextEvent"in window&&!Va,B1=Rr&&(!Vg||Va&&8<Va&&11>=Va),D0=" ",M0=!1;function z1(t,e){switch(t){case"keyup":return Gx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function W1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Us=!1;function Qx(t,e){switch(t){case"compositionend":return W1(e);case"keypress":return e.which!==32?null:(M0=!0,D0);case"textInput":return t=e.data,t===D0&&M0?null:t;default:return null}}function Yx(t,e){if(Us)return t==="compositionend"||!Vg&&z1(t,e)?(t=$1(),fc=Dg=Jr=null,Us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return B1&&e.locale!=="ko"?null:e.data;default:return null}}var Xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function L0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Xx[t.type]:e==="textarea"}function H1(t,e,n,r){T1(r),e=Hc(e,"onChange"),0<e.length&&(n=new Mg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fa=null,ll=null;function Jx(t){nI(t,0)}function Hh(t){var e=Bs(t);if(m1(e))return t}function Zx(t,e){if(t==="change")return e}var q1=!1;if(Rr){var Gf;if(Rr){var Kf="oninput"in document;if(!Kf){var V0=document.createElement("div");V0.setAttribute("oninput","return;"),Kf=typeof V0.oninput=="function"}Gf=Kf}else Gf=!1;q1=Gf&&(!document.documentMode||9<document.documentMode)}function F0(){Fa&&(Fa.detachEvent("onpropertychange",G1),ll=Fa=null)}function G1(t){if(t.propertyName==="value"&&Hh(ll)){var e=[];H1(e,ll,t,Pg(t)),R1(Jx,e)}}function eb(t,e,n){t==="focusin"?(F0(),Fa=e,ll=n,Fa.attachEvent("onpropertychange",G1)):t==="focusout"&&F0()}function tb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hh(ll)}function nb(t,e){if(t==="click")return Hh(e)}function rb(t,e){if(t==="input"||t==="change")return Hh(e)}function ib(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:ib;function ul(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Mp.call(e,i)||!Vn(t[i],e[i]))return!1}return!0}function U0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function j0(t,e){var n=U0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=U0(n)}}function K1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?K1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Q1(){for(var t=window,e=Fc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fc(t.document)}return e}function Fg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sb(t){var e=Q1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&K1(n.ownerDocument.documentElement,n)){if(r!==null&&Fg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=j0(n,s);var o=j0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ob=Rr&&"documentMode"in document&&11>=document.documentMode,js=null,em=null,Ua=null,tm=!1;function $0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tm||js==null||js!==Fc(r)||(r=js,"selectionStart"in r&&Fg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ua&&ul(Ua,r)||(Ua=r,r=Hc(em,"onSelect"),0<r.length&&(e=new Mg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=js)))}function $u(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $s={animationend:$u("Animation","AnimationEnd"),animationiteration:$u("Animation","AnimationIteration"),animationstart:$u("Animation","AnimationStart"),transitionend:$u("Transition","TransitionEnd")},Qf={},Y1={};Rr&&(Y1=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function qh(t){if(Qf[t])return Qf[t];if(!$s[t])return t;var e=$s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Y1)return Qf[t]=e[n];return t}var X1=qh("animationend"),J1=qh("animationiteration"),Z1=qh("animationstart"),eI=qh("transitionend"),tI=new Map,B0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ri(t,e){tI.set(t,e),ps(e,[t])}for(var Yf=0;Yf<B0.length;Yf++){var Xf=B0[Yf],ab=Xf.toLowerCase(),lb=Xf[0].toUpperCase()+Xf.slice(1);Ri(ab,"on"+lb)}Ri(X1,"onAnimationEnd");Ri(J1,"onAnimationIteration");Ri(Z1,"onAnimationStart");Ri("dblclick","onDoubleClick");Ri("focusin","onFocus");Ri("focusout","onBlur");Ri(eI,"onTransitionEnd");ho("onMouseEnter",["mouseout","mouseover"]);ho("onMouseLeave",["mouseout","mouseover"]);ho("onPointerEnter",["pointerout","pointerover"]);ho("onPointerLeave",["pointerout","pointerover"]);ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ub=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pa));function z0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ax(r,e,void 0,t),t.currentTarget=null}function nI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;z0(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;z0(i,a,c),s=u}}}if(jc)throw t=Yp,jc=!1,Yp=null,t}function Re(t,e){var n=e[om];n===void 0&&(n=e[om]=new Set);var r=t+"__bubble";n.has(r)||(rI(e,t,2,!1),n.add(r))}function Jf(t,e,n){var r=0;e&&(r|=4),rI(n,t,r,e)}var Bu="_reactListening"+Math.random().toString(36).slice(2);function cl(t){if(!t[Bu]){t[Bu]=!0,c1.forEach(function(n){n!=="selectionchange"&&(ub.has(n)||Jf(n,!1,t),Jf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bu]||(e[Bu]=!0,Jf("selectionchange",!1,e))}}function rI(t,e,n,r){switch(j1(e)){case 1:var i=Ix;break;case 4:i=Sx;break;default:i=Og}n=i.bind(null,e,n,t),i=void 0,!Qp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Zf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=$i(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}R1(function(){var c=s,d=Pg(n),f=[];e:{var m=tI.get(t);if(m!==void 0){var _=Mg,E=t;switch(t){case"keypress":if(pc(n)===0)break e;case"keydown":case"keyup":_=Ux;break;case"focusin":E="focus",_=qf;break;case"focusout":E="blur",_=qf;break;case"beforeblur":case"afterblur":_=qf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=b0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Bx;break;case X1:case J1:case Z1:_=xx;break;case eI:_=Wx;break;case"scroll":_=Cx;break;case"wheel":_=qx;break;case"copy":case"cut":case"paste":_=Nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=O0}var I=(e&4)!==0,x=!I&&t==="scroll",T=I?m!==null?m+"Capture":null:m;I=[];for(var v=c,C;v!==null;){C=v;var N=C.stateNode;if(C.tag===5&&N!==null&&(C=N,T!==null&&(N=il(v,T),N!=null&&I.push(hl(v,N,C)))),x)break;v=v.return}0<I.length&&(m=new _(m,E,null,n,d),f.push({event:m,listeners:I}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==Gp&&(E=n.relatedTarget||n.fromElement)&&($i(E)||E[Ar]))break e;if((_||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,_?(E=n.relatedTarget||n.toElement,_=c,E=E?$i(E):null,E!==null&&(x=ms(E),E!==x||E.tag!==5&&E.tag!==6)&&(E=null)):(_=null,E=c),_!==E)){if(I=b0,N="onMouseLeave",T="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(I=O0,N="onPointerLeave",T="onPointerEnter",v="pointer"),x=_==null?m:Bs(_),C=E==null?m:Bs(E),m=new I(N,v+"leave",_,n,d),m.target=x,m.relatedTarget=C,N=null,$i(d)===c&&(I=new I(T,v+"enter",E,n,d),I.target=C,I.relatedTarget=x,N=I),x=N,_&&E)t:{for(I=_,T=E,v=0,C=I;C;C=As(C))v++;for(C=0,N=T;N;N=As(N))C++;for(;0<v-C;)I=As(I),v--;for(;0<C-v;)T=As(T),C--;for(;v--;){if(I===T||T!==null&&I===T.alternate)break t;I=As(I),T=As(T)}I=null}else I=null;_!==null&&W0(f,m,_,I,!1),E!==null&&x!==null&&W0(f,x,E,I,!0)}}e:{if(m=c?Bs(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var M=Zx;else if(L0(m))if(q1)M=rb;else{M=tb;var L=eb}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=nb);if(M&&(M=M(t,c))){H1(f,M,n,d);break e}L&&L(t,m,c),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&Bp(m,"number",m.value)}switch(L=c?Bs(c):window,t){case"focusin":(L0(L)||L.contentEditable==="true")&&(js=L,em=c,Ua=null);break;case"focusout":Ua=em=js=null;break;case"mousedown":tm=!0;break;case"contextmenu":case"mouseup":case"dragend":tm=!1,$0(f,n,d);break;case"selectionchange":if(ob)break;case"keydown":case"keyup":$0(f,n,d)}var w;if(Vg)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Us?z1(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(B1&&n.locale!=="ko"&&(Us||y!=="onCompositionStart"?y==="onCompositionEnd"&&Us&&(w=$1()):(Jr=d,Dg="value"in Jr?Jr.value:Jr.textContent,Us=!0)),L=Hc(c,y),0<L.length&&(y=new N0(y,t,null,n,d),f.push({event:y,listeners:L}),w?y.data=w:(w=W1(n),w!==null&&(y.data=w)))),(w=Kx?Qx(t,n):Yx(t,n))&&(c=Hc(c,"onBeforeInput"),0<c.length&&(d=new N0("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=w))}nI(f,e)})}function hl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=il(t,n),s!=null&&r.unshift(hl(t,s,i)),s=il(t,e),s!=null&&r.push(hl(t,s,i))),t=t.return}return r}function As(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function W0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=il(n,s),u!=null&&o.unshift(hl(n,u,a))):i||(u=il(n,s),u!=null&&o.push(hl(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cb=/\r\n?/g,hb=/\u0000|\uFFFD/g;function H0(t){return(typeof t=="string"?t:""+t).replace(cb,`
`).replace(hb,"")}function zu(t,e,n){if(e=H0(e),H0(t)!==e&&n)throw Error(U(425))}function qc(){}var nm=null,rm=null;function im(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sm=typeof setTimeout=="function"?setTimeout:void 0,db=typeof clearTimeout=="function"?clearTimeout:void 0,q0=typeof Promise=="function"?Promise:void 0,fb=typeof queueMicrotask=="function"?queueMicrotask:typeof q0<"u"?function(t){return q0.resolve(null).then(t).catch(pb)}:sm;function pb(t){setTimeout(function(){throw t})}function ep(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),al(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);al(e)}function si(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function G0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Vo=Math.random().toString(36).slice(2),zn="__reactFiber$"+Vo,dl="__reactProps$"+Vo,Ar="__reactContainer$"+Vo,om="__reactEvents$"+Vo,mb="__reactListeners$"+Vo,gb="__reactHandles$"+Vo;function $i(t){var e=t[zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ar]||n[zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=G0(t);t!==null;){if(n=t[zn])return n;t=G0(t)}return e}t=n,n=t.parentNode}return null}function Bl(t){return t=t[zn]||t[Ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Gh(t){return t[dl]||null}var am=[],zs=-1;function Ai(t){return{current:t}}function Ae(t){0>zs||(t.current=am[zs],am[zs]=null,zs--)}function Ie(t,e){zs++,am[zs]=t.current,t.current=e}var yi={},Ot=Ai(yi),Gt=Ai(!1),Xi=yi;function fo(t,e){var n=t.type.contextTypes;if(!n)return yi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Kt(t){return t=t.childContextTypes,t!=null}function Gc(){Ae(Gt),Ae(Ot)}function K0(t,e,n){if(Ot.current!==yi)throw Error(U(168));Ie(Ot,e),Ie(Gt,n)}function iI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,ex(t)||"Unknown",i));return Me({},n,r)}function Kc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yi,Xi=Ot.current,Ie(Ot,t),Ie(Gt,Gt.current),!0}function Q0(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=iI(t,e,Xi),r.__reactInternalMemoizedMergedChildContext=t,Ae(Gt),Ae(Ot),Ie(Ot,t)):Ae(Gt),Ie(Gt,n)}var mr=null,Kh=!1,tp=!1;function sI(t){mr===null?mr=[t]:mr.push(t)}function _b(t){Kh=!0,sI(t)}function ki(){if(!tp&&mr!==null){tp=!0;var t=0,e=pe;try{var n=mr;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mr=null,Kh=!1}catch(i){throw mr!==null&&(mr=mr.slice(t+1)),x1(xg,ki),i}finally{pe=e,tp=!1}}return null}var Ws=[],Hs=0,Qc=null,Yc=0,hn=[],dn=0,Ji=null,_r=1,yr="";function Vi(t,e){Ws[Hs++]=Yc,Ws[Hs++]=Qc,Qc=t,Yc=e}function oI(t,e,n){hn[dn++]=_r,hn[dn++]=yr,hn[dn++]=Ji,Ji=t;var r=_r;t=yr;var i=32-On(r)-1;r&=~(1<<i),n+=1;var s=32-On(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_r=1<<32-On(e)+i|n<<i|r,yr=s+t}else _r=1<<s|n<<i|r,yr=t}function Ug(t){t.return!==null&&(Vi(t,1),oI(t,1,0))}function jg(t){for(;t===Qc;)Qc=Ws[--Hs],Ws[Hs]=null,Yc=Ws[--Hs],Ws[Hs]=null;for(;t===Ji;)Ji=hn[--dn],hn[dn]=null,yr=hn[--dn],hn[dn]=null,_r=hn[--dn],hn[dn]=null}var nn=null,tn=null,Pe=!1,Pn=null;function aI(t,e){var n=mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Y0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nn=t,tn=si(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nn=t,tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ji!==null?{id:_r,overflow:yr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nn=t,tn=null,!0):!1;default:return!1}}function lm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function um(t){if(Pe){var e=tn;if(e){var n=e;if(!Y0(t,e)){if(lm(t))throw Error(U(418));e=si(n.nextSibling);var r=nn;e&&Y0(t,e)?aI(r,n):(t.flags=t.flags&-4097|2,Pe=!1,nn=t)}}else{if(lm(t))throw Error(U(418));t.flags=t.flags&-4097|2,Pe=!1,nn=t}}}function X0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nn=t}function Wu(t){if(t!==nn)return!1;if(!Pe)return X0(t),Pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!im(t.type,t.memoizedProps)),e&&(e=tn)){if(lm(t))throw lI(),Error(U(418));for(;e;)aI(t,e),e=si(e.nextSibling)}if(X0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tn=si(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tn=null}}else tn=nn?si(t.stateNode.nextSibling):null;return!0}function lI(){for(var t=tn;t;)t=si(t.nextSibling)}function po(){tn=nn=null,Pe=!1}function $g(t){Pn===null?Pn=[t]:Pn.push(t)}var yb=Lr.ReactCurrentBatchConfig;function ma(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Hu(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function J0(t){var e=t._init;return e(t._payload)}function uI(t){function e(T,v){if(t){var C=T.deletions;C===null?(T.deletions=[v],T.flags|=16):C.push(v)}}function n(T,v){if(!t)return null;for(;v!==null;)e(T,v),v=v.sibling;return null}function r(T,v){for(T=new Map;v!==null;)v.key!==null?T.set(v.key,v):T.set(v.index,v),v=v.sibling;return T}function i(T,v){return T=ui(T,v),T.index=0,T.sibling=null,T}function s(T,v,C){return T.index=C,t?(C=T.alternate,C!==null?(C=C.index,C<v?(T.flags|=2,v):C):(T.flags|=2,v)):(T.flags|=1048576,v)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,v,C,N){return v===null||v.tag!==6?(v=lp(C,T.mode,N),v.return=T,v):(v=i(v,C),v.return=T,v)}function u(T,v,C,N){var M=C.type;return M===Fs?d(T,v,C.props.children,N,C.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Br&&J0(M)===v.type)?(N=i(v,C.props),N.ref=ma(T,v,C),N.return=T,N):(N=Ec(C.type,C.key,C.props,null,T.mode,N),N.ref=ma(T,v,C),N.return=T,N)}function c(T,v,C,N){return v===null||v.tag!==4||v.stateNode.containerInfo!==C.containerInfo||v.stateNode.implementation!==C.implementation?(v=up(C,T.mode,N),v.return=T,v):(v=i(v,C.children||[]),v.return=T,v)}function d(T,v,C,N,M){return v===null||v.tag!==7?(v=Ki(C,T.mode,N,M),v.return=T,v):(v=i(v,C),v.return=T,v)}function f(T,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return v=lp(""+v,T.mode,C),v.return=T,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Du:return C=Ec(v.type,v.key,v.props,null,T.mode,C),C.ref=ma(T,null,v),C.return=T,C;case Vs:return v=up(v,T.mode,C),v.return=T,v;case Br:var N=v._init;return f(T,N(v._payload),C)}if(Aa(v)||ca(v))return v=Ki(v,T.mode,C,null),v.return=T,v;Hu(T,v)}return null}function m(T,v,C,N){var M=v!==null?v.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return M!==null?null:a(T,v,""+C,N);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Du:return C.key===M?u(T,v,C,N):null;case Vs:return C.key===M?c(T,v,C,N):null;case Br:return M=C._init,m(T,v,M(C._payload),N)}if(Aa(C)||ca(C))return M!==null?null:d(T,v,C,N,null);Hu(T,C)}return null}function _(T,v,C,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return T=T.get(C)||null,a(v,T,""+N,M);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Du:return T=T.get(N.key===null?C:N.key)||null,u(v,T,N,M);case Vs:return T=T.get(N.key===null?C:N.key)||null,c(v,T,N,M);case Br:var L=N._init;return _(T,v,C,L(N._payload),M)}if(Aa(N)||ca(N))return T=T.get(C)||null,d(v,T,N,M,null);Hu(v,N)}return null}function E(T,v,C,N){for(var M=null,L=null,w=v,y=v=0,S=null;w!==null&&y<C.length;y++){w.index>y?(S=w,w=null):S=w.sibling;var R=m(T,w,C[y],N);if(R===null){w===null&&(w=S);break}t&&w&&R.alternate===null&&e(T,w),v=s(R,v,y),L===null?M=R:L.sibling=R,L=R,w=S}if(y===C.length)return n(T,w),Pe&&Vi(T,y),M;if(w===null){for(;y<C.length;y++)w=f(T,C[y],N),w!==null&&(v=s(w,v,y),L===null?M=w:L.sibling=w,L=w);return Pe&&Vi(T,y),M}for(w=r(T,w);y<C.length;y++)S=_(w,T,y,C[y],N),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?y:S.key),v=s(S,v,y),L===null?M=S:L.sibling=S,L=S);return t&&w.forEach(function(k){return e(T,k)}),Pe&&Vi(T,y),M}function I(T,v,C,N){var M=ca(C);if(typeof M!="function")throw Error(U(150));if(C=M.call(C),C==null)throw Error(U(151));for(var L=M=null,w=v,y=v=0,S=null,R=C.next();w!==null&&!R.done;y++,R=C.next()){w.index>y?(S=w,w=null):S=w.sibling;var k=m(T,w,R.value,N);if(k===null){w===null&&(w=S);break}t&&w&&k.alternate===null&&e(T,w),v=s(k,v,y),L===null?M=k:L.sibling=k,L=k,w=S}if(R.done)return n(T,w),Pe&&Vi(T,y),M;if(w===null){for(;!R.done;y++,R=C.next())R=f(T,R.value,N),R!==null&&(v=s(R,v,y),L===null?M=R:L.sibling=R,L=R);return Pe&&Vi(T,y),M}for(w=r(T,w);!R.done;y++,R=C.next())R=_(w,T,y,R.value,N),R!==null&&(t&&R.alternate!==null&&w.delete(R.key===null?y:R.key),v=s(R,v,y),L===null?M=R:L.sibling=R,L=R);return t&&w.forEach(function(P){return e(T,P)}),Pe&&Vi(T,y),M}function x(T,v,C,N){if(typeof C=="object"&&C!==null&&C.type===Fs&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Du:e:{for(var M=C.key,L=v;L!==null;){if(L.key===M){if(M=C.type,M===Fs){if(L.tag===7){n(T,L.sibling),v=i(L,C.props.children),v.return=T,T=v;break e}}else if(L.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Br&&J0(M)===L.type){n(T,L.sibling),v=i(L,C.props),v.ref=ma(T,L,C),v.return=T,T=v;break e}n(T,L);break}else e(T,L);L=L.sibling}C.type===Fs?(v=Ki(C.props.children,T.mode,N,C.key),v.return=T,T=v):(N=Ec(C.type,C.key,C.props,null,T.mode,N),N.ref=ma(T,v,C),N.return=T,T=N)}return o(T);case Vs:e:{for(L=C.key;v!==null;){if(v.key===L)if(v.tag===4&&v.stateNode.containerInfo===C.containerInfo&&v.stateNode.implementation===C.implementation){n(T,v.sibling),v=i(v,C.children||[]),v.return=T,T=v;break e}else{n(T,v);break}else e(T,v);v=v.sibling}v=up(C,T.mode,N),v.return=T,T=v}return o(T);case Br:return L=C._init,x(T,v,L(C._payload),N)}if(Aa(C))return E(T,v,C,N);if(ca(C))return I(T,v,C,N);Hu(T,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,v!==null&&v.tag===6?(n(T,v.sibling),v=i(v,C),v.return=T,T=v):(n(T,v),v=lp(C,T.mode,N),v.return=T,T=v),o(T)):n(T,v)}return x}var mo=uI(!0),cI=uI(!1),Xc=Ai(null),Jc=null,qs=null,Bg=null;function zg(){Bg=qs=Jc=null}function Wg(t){var e=Xc.current;Ae(Xc),t._currentValue=e}function cm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function eo(t,e){Jc=t,Bg=qs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ht=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(Bg!==t)if(t={context:t,memoizedValue:e,next:null},qs===null){if(Jc===null)throw Error(U(308));qs=t,Jc.dependencies={lanes:0,firstContext:t}}else qs=qs.next=t;return e}var Bi=null;function Hg(t){Bi===null?Bi=[t]:Bi.push(t)}function hI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Hg(e)):(n.next=i.next,i.next=n),e.interleaved=n,kr(t,r)}function kr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zr=!1;function qg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ir(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function oi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kr(t,n)}return i=r.interleaved,i===null?(e.next=e,Hg(r)):(e.next=i.next,i.next=e),r.interleaved=e,kr(t,n)}function mc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bg(t,n)}}function Z0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zc(t,e,n,r){var i=t.updateQueue;zr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,_=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,I=a;switch(m=e,_=n,I.tag){case 1:if(E=I.payload,typeof E=="function"){f=E.call(_,f,m);break e}f=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=I.payload,m=typeof E=="function"?E.call(_,f,m):E,m==null)break e;f=Me({},f,m);break e;case 2:zr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=_,u=f):d=d.next=_,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);es|=o,t.lanes=o,t.memoizedState=f}}function ew(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var zl={},Kn=Ai(zl),fl=Ai(zl),pl=Ai(zl);function zi(t){if(t===zl)throw Error(U(174));return t}function Gg(t,e){switch(Ie(pl,e),Ie(fl,t),Ie(Kn,zl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wp(e,t)}Ae(Kn),Ie(Kn,e)}function go(){Ae(Kn),Ae(fl),Ae(pl)}function fI(t){zi(pl.current);var e=zi(Kn.current),n=Wp(e,t.type);e!==n&&(Ie(fl,t),Ie(Kn,n))}function Kg(t){fl.current===t&&(Ae(Kn),Ae(fl))}var Oe=Ai(0);function eh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var np=[];function Qg(){for(var t=0;t<np.length;t++)np[t]._workInProgressVersionPrimary=null;np.length=0}var gc=Lr.ReactCurrentDispatcher,rp=Lr.ReactCurrentBatchConfig,Zi=0,De=null,Ze=null,st=null,th=!1,ja=!1,ml=0,vb=0;function Rt(){throw Error(U(321))}function Yg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function Xg(t,e,n,r,i,s){if(Zi=s,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gc.current=t===null||t.memoizedState===null?Ib:Sb,t=n(r,i),ja){s=0;do{if(ja=!1,ml=0,25<=s)throw Error(U(301));s+=1,st=Ze=null,e.updateQueue=null,gc.current=Cb,t=n(r,i)}while(ja)}if(gc.current=nh,e=Ze!==null&&Ze.next!==null,Zi=0,st=Ze=De=null,th=!1,e)throw Error(U(300));return t}function Jg(){var t=ml!==0;return ml=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?De.memoizedState=st=t:st=st.next=t,st}function En(){if(Ze===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var e=st===null?De.memoizedState:st.next;if(e!==null)st=e,Ze=t;else{if(t===null)throw Error(U(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},st===null?De.memoizedState=st=t:st=st.next=t}return st}function gl(t,e){return typeof e=="function"?e(t):e}function ip(t){var e=En(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ze,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((Zi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,De.lanes|=d,es|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Vn(r,e.memoizedState)||(Ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,De.lanes|=s,es|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sp(t){var e=En(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Vn(s,e.memoizedState)||(Ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function pI(){}function mI(t,e){var n=De,r=En(),i=e(),s=!Vn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ht=!0),r=r.queue,Zg(yI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,_l(9,_I.bind(null,n,r,i,e),void 0,null),lt===null)throw Error(U(349));Zi&30||gI(n,e,i)}return i}function gI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _I(t,e,n,r){e.value=n,e.getSnapshot=r,vI(e)&&wI(t)}function yI(t,e,n){return n(function(){vI(e)&&wI(t)})}function vI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function wI(t){var e=kr(t,1);e!==null&&Dn(e,t,1,-1)}function tw(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gl,lastRenderedState:t},e.queue=t,t=t.dispatch=Tb.bind(null,De,t),[e.memoizedState,t]}function _l(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function EI(){return En().memoizedState}function _c(t,e,n,r){var i=jn();De.flags|=t,i.memoizedState=_l(1|e,n,void 0,r===void 0?null:r)}function Qh(t,e,n,r){var i=En();r=r===void 0?null:r;var s=void 0;if(Ze!==null){var o=Ze.memoizedState;if(s=o.destroy,r!==null&&Yg(r,o.deps)){i.memoizedState=_l(e,n,s,r);return}}De.flags|=t,i.memoizedState=_l(1|e,n,s,r)}function nw(t,e){return _c(8390656,8,t,e)}function Zg(t,e){return Qh(2048,8,t,e)}function TI(t,e){return Qh(4,2,t,e)}function II(t,e){return Qh(4,4,t,e)}function SI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function CI(t,e,n){return n=n!=null?n.concat([t]):null,Qh(4,4,SI.bind(null,e,t),n)}function e_(){}function RI(t,e){var n=En();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function AI(t,e){var n=En();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function kI(t,e,n){return Zi&21?(Vn(n,e)||(n=O1(),De.lanes|=n,es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ht=!0),t.memoizedState=n)}function wb(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=rp.transition;rp.transition={};try{t(!1),e()}finally{pe=n,rp.transition=r}}function PI(){return En().memoizedState}function Eb(t,e,n){var r=li(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xI(t))bI(e,n);else if(n=hI(t,e,n,r),n!==null){var i=jt();Dn(n,t,r,i),NI(n,e,r)}}function Tb(t,e,n){var r=li(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xI(t))bI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Vn(a,o)){var u=e.interleaved;u===null?(i.next=i,Hg(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=hI(t,e,i,r),n!==null&&(i=jt(),Dn(n,t,r,i),NI(n,e,r))}}function xI(t){var e=t.alternate;return t===De||e!==null&&e===De}function bI(t,e){ja=th=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function NI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bg(t,n)}}var nh={readContext:wn,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useInsertionEffect:Rt,useLayoutEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useMutableSource:Rt,useSyncExternalStore:Rt,useId:Rt,unstable_isNewReconciler:!1},Ib={readContext:wn,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:nw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_c(4194308,4,SI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _c(4194308,4,t,e)},useInsertionEffect:function(t,e){return _c(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=jn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Eb.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:tw,useDebugValue:e_,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=tw(!1),e=t[0];return t=wb.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=De,i=jn();if(Pe){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),lt===null)throw Error(U(349));Zi&30||gI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,nw(yI.bind(null,r,s,t),[t]),r.flags|=2048,_l(9,_I.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=jn(),e=lt.identifierPrefix;if(Pe){var n=yr,r=_r;n=(r&~(1<<32-On(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ml++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Sb={readContext:wn,useCallback:RI,useContext:wn,useEffect:Zg,useImperativeHandle:CI,useInsertionEffect:TI,useLayoutEffect:II,useMemo:AI,useReducer:ip,useRef:EI,useState:function(){return ip(gl)},useDebugValue:e_,useDeferredValue:function(t){var e=En();return kI(e,Ze.memoizedState,t)},useTransition:function(){var t=ip(gl)[0],e=En().memoizedState;return[t,e]},useMutableSource:pI,useSyncExternalStore:mI,useId:PI,unstable_isNewReconciler:!1},Cb={readContext:wn,useCallback:RI,useContext:wn,useEffect:Zg,useImperativeHandle:CI,useInsertionEffect:TI,useLayoutEffect:II,useMemo:AI,useReducer:sp,useRef:EI,useState:function(){return sp(gl)},useDebugValue:e_,useDeferredValue:function(t){var e=En();return Ze===null?e.memoizedState=t:kI(e,Ze.memoizedState,t)},useTransition:function(){var t=sp(gl)[0],e=En().memoizedState;return[t,e]},useMutableSource:pI,useSyncExternalStore:mI,useId:PI,unstable_isNewReconciler:!1};function An(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yh={isMounted:function(t){return(t=t._reactInternals)?ms(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),i=li(t),s=Ir(r,i);s.payload=e,n!=null&&(s.callback=n),e=oi(t,s,i),e!==null&&(Dn(e,t,i,r),mc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),i=li(t),s=Ir(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=oi(t,s,i),e!==null&&(Dn(e,t,i,r),mc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=li(t),i=Ir(n,r);i.tag=2,e!=null&&(i.callback=e),e=oi(t,i,r),e!==null&&(Dn(e,t,r,n),mc(e,t,r))}};function rw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ul(n,r)||!ul(i,s):!0}function OI(t,e,n){var r=!1,i=yi,s=e.contextType;return typeof s=="object"&&s!==null?s=wn(s):(i=Kt(e)?Xi:Ot.current,r=e.contextTypes,s=(r=r!=null)?fo(t,i):yi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function iw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yh.enqueueReplaceState(e,e.state,null)}function dm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},qg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=wn(s):(s=Kt(e)?Xi:Ot.current,i.context=fo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Yh.enqueueReplaceState(i,i.state,null),Zc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function _o(t,e){try{var n="",r=e;do n+=ZP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function op(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Rb=typeof WeakMap=="function"?WeakMap:Map;function DI(t,e,n){n=Ir(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ih||(ih=!0,Im=r),fm(t,e)},n}function MI(t,e,n){n=Ir(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){fm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fm(t,e),typeof r!="function"&&(ai===null?ai=new Set([this]):ai.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Rb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=jb.bind(null,t,e,n),e.then(t,t))}function ow(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function aw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ir(-1,1),e.tag=2,oi(n,e,1))),n.lanes|=1),t)}var Ab=Lr.ReactCurrentOwner,Ht=!1;function Ft(t,e,n,r){e.child=t===null?cI(e,null,n,r):mo(e,t.child,n,r)}function lw(t,e,n,r,i){n=n.render;var s=e.ref;return eo(e,i),r=Xg(t,e,n,r,s,i),n=Jg(),t!==null&&!Ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pr(t,e,i)):(Pe&&n&&Ug(e),e.flags|=1,Ft(t,e,r,i),e.child)}function uw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!l_(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,LI(t,e,s,r,i)):(t=Ec(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ul,n(o,r)&&t.ref===e.ref)return Pr(t,e,i)}return e.flags|=1,t=ui(s,r),t.ref=e.ref,t.return=e,e.child=t}function LI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ul(s,r)&&t.ref===e.ref)if(Ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ht=!0);else return e.lanes=t.lanes,Pr(t,e,i)}return pm(t,e,n,r,i)}function VI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Ks,Jt),Jt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(Ks,Jt),Jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(Ks,Jt),Jt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(Ks,Jt),Jt|=r;return Ft(t,e,i,n),e.child}function FI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pm(t,e,n,r,i){var s=Kt(n)?Xi:Ot.current;return s=fo(e,s),eo(e,i),n=Xg(t,e,n,r,s,i),r=Jg(),t!==null&&!Ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pr(t,e,i)):(Pe&&r&&Ug(e),e.flags|=1,Ft(t,e,n,i),e.child)}function cw(t,e,n,r,i){if(Kt(n)){var s=!0;Kc(e)}else s=!1;if(eo(e,i),e.stateNode===null)yc(t,e),OI(e,n,r),dm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=wn(c):(c=Kt(n)?Xi:Ot.current,c=fo(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&iw(e,o,r,c),zr=!1;var m=e.memoizedState;o.state=m,Zc(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Gt.current||zr?(typeof d=="function"&&(hm(e,n,d,r),u=e.memoizedState),(a=zr||rw(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,dI(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:An(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=wn(u):(u=Kt(n)?Xi:Ot.current,u=fo(e,u));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&iw(e,o,r,u),zr=!1,m=e.memoizedState,o.state=m,Zc(e,r,o,i);var E=e.memoizedState;a!==f||m!==E||Gt.current||zr?(typeof _=="function"&&(hm(e,n,_,r),E=e.memoizedState),(c=zr||rw(e,n,c,r,m,E,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return mm(t,e,n,r,s,i)}function mm(t,e,n,r,i,s){FI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Q0(e,n,!1),Pr(t,e,s);r=e.stateNode,Ab.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=mo(e,t.child,null,s),e.child=mo(e,null,a,s)):Ft(t,e,a,s),e.memoizedState=r.state,i&&Q0(e,n,!0),e.child}function UI(t){var e=t.stateNode;e.pendingContext?K0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&K0(t,e.context,!1),Gg(t,e.containerInfo)}function hw(t,e,n,r,i){return po(),$g(i),e.flags|=256,Ft(t,e,n,r),e.child}var gm={dehydrated:null,treeContext:null,retryLane:0};function _m(t){return{baseLanes:t,cachePool:null,transitions:null}}function jI(t,e,n){var r=e.pendingProps,i=Oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(Oe,i&1),t===null)return um(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zh(o,r,0,null),t=Ki(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_m(n),e.memoizedState=gm,t):t_(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return kb(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ui(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ui(a,s):(s=Ki(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_m(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=gm,r}return s=t.child,t=s.sibling,r=ui(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function t_(t,e){return e=Zh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qu(t,e,n,r){return r!==null&&$g(r),mo(e,t.child,null,n),t=t_(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kb(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=op(Error(U(422))),qu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Zh({mode:"visible",children:r.children},i,0,null),s=Ki(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&mo(e,t.child,null,o),e.child.memoizedState=_m(o),e.memoizedState=gm,s);if(!(e.mode&1))return qu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(U(419)),r=op(s,r,void 0),qu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ht||a){if(r=lt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kr(t,i),Dn(r,t,i,-1))}return a_(),r=op(Error(U(421))),qu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=$b.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,tn=si(i.nextSibling),nn=e,Pe=!0,Pn=null,t!==null&&(hn[dn++]=_r,hn[dn++]=yr,hn[dn++]=Ji,_r=t.id,yr=t.overflow,Ji=e),e=t_(e,r.children),e.flags|=4096,e)}function dw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cm(t.return,e,n)}function ap(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function $I(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ft(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dw(t,n,e);else if(t.tag===19)dw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&eh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ap(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&eh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ap(e,!0,n,null,s);break;case"together":ap(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=ui(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ui(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Pb(t,e,n){switch(e.tag){case 3:UI(e),po();break;case 5:fI(e);break;case 1:Kt(e.type)&&Kc(e);break;case 4:Gg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(Xc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?jI(t,e,n):(Ie(Oe,Oe.current&1),t=Pr(t,e,n),t!==null?t.sibling:null);Ie(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return $I(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,VI(t,e,n)}return Pr(t,e,n)}var BI,ym,zI,WI;BI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ym=function(){};zI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,zi(Kn.current);var s=null;switch(n){case"input":i=jp(t,i),r=jp(t,r),s=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":i=zp(t,i),r=zp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qc)}Hp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(nl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(nl.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Re("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};WI=function(t,e,n,r){n!==r&&(e.flags|=4)};function ga(t,e){if(!Pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function At(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function xb(t,e,n){var r=e.pendingProps;switch(jg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(e),null;case 1:return Kt(e.type)&&Gc(),At(e),null;case 3:return r=e.stateNode,go(),Ae(Gt),Ae(Ot),Qg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Wu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Pn!==null&&(Rm(Pn),Pn=null))),ym(t,e),At(e),null;case 5:Kg(e);var i=zi(pl.current);if(n=e.type,t!==null&&e.stateNode!=null)zI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return At(e),null}if(t=zi(Kn.current),Wu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[zn]=e,r[dl]=s,t=(e.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(i=0;i<Pa.length;i++)Re(Pa[i],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":E0(r,s),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Re("invalid",r);break;case"textarea":I0(r,s),Re("invalid",r)}Hp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&zu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&zu(r.textContent,a,t),i=["children",""+a]):nl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Re("scroll",r)}switch(n){case"input":Mu(r),T0(r,s,!0);break;case"textarea":Mu(r),S0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=qc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=y1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[zn]=e,t[dl]=r,BI(t,e,!1,!1),e.stateNode=t;e:{switch(o=qp(n,r),n){case"dialog":Re("cancel",t),Re("close",t),i=r;break;case"iframe":case"object":case"embed":Re("load",t),i=r;break;case"video":case"audio":for(i=0;i<Pa.length;i++)Re(Pa[i],t);i=r;break;case"source":Re("error",t),i=r;break;case"img":case"image":case"link":Re("error",t),Re("load",t),i=r;break;case"details":Re("toggle",t),i=r;break;case"input":E0(t,r),i=jp(t,r),Re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),Re("invalid",t);break;case"textarea":I0(t,r),i=zp(t,r),Re("invalid",t);break;default:i=r}Hp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?E1(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&v1(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&rl(t,u):typeof u=="number"&&rl(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(nl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Re("scroll",t):u!=null&&Cg(t,s,u,o))}switch(n){case"input":Mu(t),T0(t,r,!1);break;case"textarea":Mu(t),S0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_i(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ys(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ys(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=qc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return At(e),null;case 6:if(t&&e.stateNode!=null)WI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=zi(pl.current),zi(Kn.current),Wu(e)){if(r=e.stateNode,n=e.memoizedProps,r[zn]=e,(s=r.nodeValue!==n)&&(t=nn,t!==null))switch(t.tag){case 3:zu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zn]=e,e.stateNode=r}return At(e),null;case 13:if(Ae(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pe&&tn!==null&&e.mode&1&&!(e.flags&128))lI(),po(),e.flags|=98560,s=!1;else if(s=Wu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[zn]=e}else po(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;At(e),s=!1}else Pn!==null&&(Rm(Pn),Pn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?tt===0&&(tt=3):a_())),e.updateQueue!==null&&(e.flags|=4),At(e),null);case 4:return go(),ym(t,e),t===null&&cl(e.stateNode.containerInfo),At(e),null;case 10:return Wg(e.type._context),At(e),null;case 17:return Kt(e.type)&&Gc(),At(e),null;case 19:if(Ae(Oe),s=e.memoizedState,s===null)return At(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ga(s,!1);else{if(tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=eh(t),o!==null){for(e.flags|=128,ga(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Oe,Oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&qe()>yo&&(e.flags|=128,r=!0,ga(s,!1),e.lanes=4194304)}else{if(!r)if(t=eh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ga(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Pe)return At(e),null}else 2*qe()-s.renderingStartTime>yo&&n!==1073741824&&(e.flags|=128,r=!0,ga(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qe(),e.sibling=null,n=Oe.current,Ie(Oe,r?n&1|2:n&1),e):(At(e),null);case 22:case 23:return o_(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Jt&1073741824&&(At(e),e.subtreeFlags&6&&(e.flags|=8192)):At(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function bb(t,e){switch(jg(e),e.tag){case 1:return Kt(e.type)&&Gc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return go(),Ae(Gt),Ae(Ot),Qg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kg(e),null;case 13:if(Ae(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));po()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(Oe),null;case 4:return go(),null;case 10:return Wg(e.type._context),null;case 22:case 23:return o_(),null;case 24:return null;default:return null}}var Gu=!1,bt=!1,Nb=typeof WeakSet=="function"?WeakSet:Set,z=null;function Gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function vm(t,e,n){try{n()}catch(r){je(t,e,r)}}var fw=!1;function Ob(t,e){if(nm=zc,t=Q1(),Fg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var _;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)m=f,f=_;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(_=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(rm={focusedElem:t,selectionRange:n},zc=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var I=E.memoizedProps,x=E.memoizedState,T=e.stateNode,v=T.getSnapshotBeforeUpdate(e.elementType===e.type?I:An(e.type,I),x);T.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(N){je(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return E=fw,fw=!1,E}function $a(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vm(e,n,s)}i=i.next}while(i!==r)}}function Xh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function HI(t){var e=t.alternate;e!==null&&(t.alternate=null,HI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zn],delete e[dl],delete e[om],delete e[mb],delete e[gb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qI(t){return t.tag===5||t.tag===3||t.tag===4}function pw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Em(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qc));else if(r!==4&&(t=t.child,t!==null))for(Em(t,e,n),t=t.sibling;t!==null;)Em(t,e,n),t=t.sibling}function Tm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Tm(t,e,n),t=t.sibling;t!==null;)Tm(t,e,n),t=t.sibling}var ft=null,kn=!1;function jr(t,e,n){for(n=n.child;n!==null;)GI(t,e,n),n=n.sibling}function GI(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(zh,n)}catch{}switch(n.tag){case 5:bt||Gs(n,e);case 6:var r=ft,i=kn;ft=null,jr(t,e,n),ft=r,kn=i,ft!==null&&(kn?(t=ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ft.removeChild(n.stateNode));break;case 18:ft!==null&&(kn?(t=ft,n=n.stateNode,t.nodeType===8?ep(t.parentNode,n):t.nodeType===1&&ep(t,n),al(t)):ep(ft,n.stateNode));break;case 4:r=ft,i=kn,ft=n.stateNode.containerInfo,kn=!0,jr(t,e,n),ft=r,kn=i;break;case 0:case 11:case 14:case 15:if(!bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vm(n,e,o),i=i.next}while(i!==r)}jr(t,e,n);break;case 1:if(!bt&&(Gs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,e,a)}jr(t,e,n);break;case 21:jr(t,e,n);break;case 22:n.mode&1?(bt=(r=bt)||n.memoizedState!==null,jr(t,e,n),bt=r):jr(t,e,n);break;default:jr(t,e,n)}}function mw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Nb),e.forEach(function(r){var i=Bb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Rn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ft=a.stateNode,kn=!1;break e;case 3:ft=a.stateNode.containerInfo,kn=!0;break e;case 4:ft=a.stateNode.containerInfo,kn=!0;break e}a=a.return}if(ft===null)throw Error(U(160));GI(s,o,i),ft=null,kn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){je(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)KI(e,t),e=e.sibling}function KI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rn(e,t),Un(t),r&4){try{$a(3,t,t.return),Xh(3,t)}catch(I){je(t,t.return,I)}try{$a(5,t,t.return)}catch(I){je(t,t.return,I)}}break;case 1:Rn(e,t),Un(t),r&512&&n!==null&&Gs(n,n.return);break;case 5:if(Rn(e,t),Un(t),r&512&&n!==null&&Gs(n,n.return),t.flags&32){var i=t.stateNode;try{rl(i,"")}catch(I){je(t,t.return,I)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&g1(i,s),qp(a,o);var c=qp(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?E1(i,f):d==="dangerouslySetInnerHTML"?v1(i,f):d==="children"?rl(i,f):Cg(i,d,f,c)}switch(a){case"input":$p(i,s);break;case"textarea":_1(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Ys(i,!!s.multiple,_,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ys(i,!!s.multiple,s.defaultValue,!0):Ys(i,!!s.multiple,s.multiple?[]:"",!1))}i[dl]=s}catch(I){je(t,t.return,I)}}break;case 6:if(Rn(e,t),Un(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(I){je(t,t.return,I)}}break;case 3:if(Rn(e,t),Un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{al(e.containerInfo)}catch(I){je(t,t.return,I)}break;case 4:Rn(e,t),Un(t);break;case 13:Rn(e,t),Un(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(i_=qe())),r&4&&mw(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(bt=(c=bt)||d,Rn(e,t),bt=c):Rn(e,t),Un(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(z=t,d=t.child;d!==null;){for(f=z=d;z!==null;){switch(m=z,_=m.child,m.tag){case 0:case 11:case 14:case 15:$a(4,m,m.return);break;case 1:Gs(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(I){je(r,n,I)}}break;case 5:Gs(m,m.return);break;case 22:if(m.memoizedState!==null){_w(f);continue}}_!==null?(_.return=m,z=_):_w(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=w1("display",o))}catch(I){je(t,t.return,I)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(I){je(t,t.return,I)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Rn(e,t),Un(t),r&4&&mw(t);break;case 21:break;default:Rn(e,t),Un(t)}}function Un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(qI(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(rl(i,""),r.flags&=-33);var s=pw(t);Tm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=pw(t);Em(t,a,o);break;default:throw Error(U(161))}}catch(u){je(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Db(t,e,n){z=t,QI(t)}function QI(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Gu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||bt;a=Gu;var c=bt;if(Gu=o,(bt=u)&&!c)for(z=i;z!==null;)o=z,u=o.child,o.tag===22&&o.memoizedState!==null?yw(i):u!==null?(u.return=o,z=u):yw(i);for(;s!==null;)z=s,QI(s),s=s.sibling;z=i,Gu=a,bt=c}gw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):gw(t)}}function gw(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:bt||Xh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!bt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:An(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ew(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ew(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&al(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}bt||e.flags&512&&wm(e)}catch(m){je(e,e.return,m)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function _w(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function yw(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xh(4,e)}catch(u){je(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){je(e,i,u)}}var s=e.return;try{wm(e)}catch(u){je(e,s,u)}break;case 5:var o=e.return;try{wm(e)}catch(u){je(e,o,u)}}}catch(u){je(e,e.return,u)}if(e===t){z=null;break}var a=e.sibling;if(a!==null){a.return=e.return,z=a;break}z=e.return}}var Mb=Math.ceil,rh=Lr.ReactCurrentDispatcher,n_=Lr.ReactCurrentOwner,_n=Lr.ReactCurrentBatchConfig,le=0,lt=null,Je=null,yt=0,Jt=0,Ks=Ai(0),tt=0,yl=null,es=0,Jh=0,r_=0,Ba=null,Wt=null,i_=0,yo=1/0,pr=null,ih=!1,Im=null,ai=null,Ku=!1,Zr=null,sh=0,za=0,Sm=null,vc=-1,wc=0;function jt(){return le&6?qe():vc!==-1?vc:vc=qe()}function li(t){return t.mode&1?le&2&&yt!==0?yt&-yt:yb.transition!==null?(wc===0&&(wc=O1()),wc):(t=pe,t!==0||(t=window.event,t=t===void 0?16:j1(t.type)),t):1}function Dn(t,e,n,r){if(50<za)throw za=0,Sm=null,Error(U(185));jl(t,n,r),(!(le&2)||t!==lt)&&(t===lt&&(!(le&2)&&(Jh|=n),tt===4&&Hr(t,yt)),Qt(t,r),n===1&&le===0&&!(e.mode&1)&&(yo=qe()+500,Kh&&ki()))}function Qt(t,e){var n=t.callbackNode;yx(t,e);var r=Bc(t,t===lt?yt:0);if(r===0)n!==null&&A0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&A0(n),e===1)t.tag===0?_b(vw.bind(null,t)):sI(vw.bind(null,t)),fb(function(){!(le&6)&&ki()}),n=null;else{switch(D1(r)){case 1:n=xg;break;case 4:n=b1;break;case 16:n=$c;break;case 536870912:n=N1;break;default:n=$c}n=rS(n,YI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function YI(t,e){if(vc=-1,wc=0,le&6)throw Error(U(327));var n=t.callbackNode;if(to()&&t.callbackNode!==n)return null;var r=Bc(t,t===lt?yt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=oh(t,r);else{e=r;var i=le;le|=2;var s=JI();(lt!==t||yt!==e)&&(pr=null,yo=qe()+500,Gi(t,e));do try{Fb();break}catch(a){XI(t,a)}while(!0);zg(),rh.current=s,le=i,Je!==null?e=0:(lt=null,yt=0,e=tt)}if(e!==0){if(e===2&&(i=Xp(t),i!==0&&(r=i,e=Cm(t,i))),e===1)throw n=yl,Gi(t,0),Hr(t,r),Qt(t,qe()),n;if(e===6)Hr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Lb(i)&&(e=oh(t,r),e===2&&(s=Xp(t),s!==0&&(r=s,e=Cm(t,s))),e===1))throw n=yl,Gi(t,0),Hr(t,r),Qt(t,qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Fi(t,Wt,pr);break;case 3:if(Hr(t,r),(r&130023424)===r&&(e=i_+500-qe(),10<e)){if(Bc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=sm(Fi.bind(null,t,Wt,pr),e);break}Fi(t,Wt,pr);break;case 4:if(Hr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-On(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mb(r/1960))-r,10<r){t.timeoutHandle=sm(Fi.bind(null,t,Wt,pr),r);break}Fi(t,Wt,pr);break;case 5:Fi(t,Wt,pr);break;default:throw Error(U(329))}}}return Qt(t,qe()),t.callbackNode===n?YI.bind(null,t):null}function Cm(t,e){var n=Ba;return t.current.memoizedState.isDehydrated&&(Gi(t,e).flags|=256),t=oh(t,e),t!==2&&(e=Wt,Wt=n,e!==null&&Rm(e)),t}function Rm(t){Wt===null?Wt=t:Wt.push.apply(Wt,t)}function Lb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Vn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hr(t,e){for(e&=~r_,e&=~Jh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),r=1<<n;t[n]=-1,e&=~r}}function vw(t){if(le&6)throw Error(U(327));to();var e=Bc(t,0);if(!(e&1))return Qt(t,qe()),null;var n=oh(t,e);if(t.tag!==0&&n===2){var r=Xp(t);r!==0&&(e=r,n=Cm(t,r))}if(n===1)throw n=yl,Gi(t,0),Hr(t,e),Qt(t,qe()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fi(t,Wt,pr),Qt(t,qe()),null}function s_(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(yo=qe()+500,Kh&&ki())}}function ts(t){Zr!==null&&Zr.tag===0&&!(le&6)&&to();var e=le;le|=1;var n=_n.transition,r=pe;try{if(_n.transition=null,pe=1,t)return t()}finally{pe=r,_n.transition=n,le=e,!(le&6)&&ki()}}function o_(){Jt=Ks.current,Ae(Ks)}function Gi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,db(n)),Je!==null)for(n=Je.return;n!==null;){var r=n;switch(jg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gc();break;case 3:go(),Ae(Gt),Ae(Ot),Qg();break;case 5:Kg(r);break;case 4:go();break;case 13:Ae(Oe);break;case 19:Ae(Oe);break;case 10:Wg(r.type._context);break;case 22:case 23:o_()}n=n.return}if(lt=t,Je=t=ui(t.current,null),yt=Jt=e,tt=0,yl=null,r_=Jh=es=0,Wt=Ba=null,Bi!==null){for(e=0;e<Bi.length;e++)if(n=Bi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Bi=null}return t}function XI(t,e){do{var n=Je;try{if(zg(),gc.current=nh,th){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}th=!1}if(Zi=0,st=Ze=De=null,ja=!1,ml=0,n_.current=null,n===null||n.return===null){tt=1,yl=e,Je=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=yt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=ow(o);if(_!==null){_.flags&=-257,aw(_,o,a,s,e),_.mode&1&&sw(s,c,e),e=_,u=c;var E=e.updateQueue;if(E===null){var I=new Set;I.add(u),e.updateQueue=I}else E.add(u);break e}else{if(!(e&1)){sw(s,c,e),a_();break e}u=Error(U(426))}}else if(Pe&&a.mode&1){var x=ow(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),aw(x,o,a,s,e),$g(_o(u,a));break e}}s=u=_o(u,a),tt!==4&&(tt=2),Ba===null?Ba=[s]:Ba.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=DI(s,u,e);Z0(s,T);break e;case 1:a=u;var v=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(ai===null||!ai.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=MI(s,a,e);Z0(s,N);break e}}s=s.return}while(s!==null)}eS(n)}catch(M){e=M,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(!0)}function JI(){var t=rh.current;return rh.current=nh,t===null?nh:t}function a_(){(tt===0||tt===3||tt===2)&&(tt=4),lt===null||!(es&268435455)&&!(Jh&268435455)||Hr(lt,yt)}function oh(t,e){var n=le;le|=2;var r=JI();(lt!==t||yt!==e)&&(pr=null,Gi(t,e));do try{Vb();break}catch(i){XI(t,i)}while(!0);if(zg(),le=n,rh.current=r,Je!==null)throw Error(U(261));return lt=null,yt=0,tt}function Vb(){for(;Je!==null;)ZI(Je)}function Fb(){for(;Je!==null&&!ux();)ZI(Je)}function ZI(t){var e=nS(t.alternate,t,Jt);t.memoizedProps=t.pendingProps,e===null?eS(t):Je=e,n_.current=null}function eS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bb(n,e),n!==null){n.flags&=32767,Je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tt=6,Je=null;return}}else if(n=xb(n,e,Jt),n!==null){Je=n;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);tt===0&&(tt=5)}function Fi(t,e,n){var r=pe,i=_n.transition;try{_n.transition=null,pe=1,Ub(t,e,n,r)}finally{_n.transition=i,pe=r}return null}function Ub(t,e,n,r){do to();while(Zr!==null);if(le&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(vx(t,s),t===lt&&(Je=lt=null,yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ku||(Ku=!0,rS($c,function(){return to(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=_n.transition,_n.transition=null;var o=pe;pe=1;var a=le;le|=4,n_.current=null,Ob(t,n),KI(n,t),sb(rm),zc=!!nm,rm=nm=null,t.current=n,Db(n),cx(),le=a,pe=o,_n.transition=s}else t.current=n;if(Ku&&(Ku=!1,Zr=t,sh=i),s=t.pendingLanes,s===0&&(ai=null),fx(n.stateNode),Qt(t,qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ih)throw ih=!1,t=Im,Im=null,t;return sh&1&&t.tag!==0&&to(),s=t.pendingLanes,s&1?t===Sm?za++:(za=0,Sm=t):za=0,ki(),null}function to(){if(Zr!==null){var t=D1(sh),e=_n.transition,n=pe;try{if(_n.transition=null,pe=16>t?16:t,Zr===null)var r=!1;else{if(t=Zr,Zr=null,sh=0,le&6)throw Error(U(331));var i=le;for(le|=4,z=t.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(z=c;z!==null;){var d=z;switch(d.tag){case 0:case 11:case 15:$a(8,d,s)}var f=d.child;if(f!==null)f.return=d,z=f;else for(;z!==null;){d=z;var m=d.sibling,_=d.return;if(HI(d),d===c){z=null;break}if(m!==null){m.return=_,z=m;break}z=_}}}var E=s.alternate;if(E!==null){var I=E.child;if(I!==null){E.child=null;do{var x=I.sibling;I.sibling=null,I=x}while(I!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$a(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,z=T;break e}z=s.return}}var v=t.current;for(z=v;z!==null;){o=z;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,z=C;else e:for(o=v;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xh(9,a)}}catch(M){je(a,a.return,M)}if(a===o){z=null;break e}var N=a.sibling;if(N!==null){N.return=a.return,z=N;break e}z=a.return}}if(le=i,ki(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(zh,t)}catch{}r=!0}return r}finally{pe=n,_n.transition=e}}return!1}function ww(t,e,n){e=_o(n,e),e=DI(t,e,1),t=oi(t,e,1),e=jt(),t!==null&&(jl(t,1,e),Qt(t,e))}function je(t,e,n){if(t.tag===3)ww(t,t,n);else for(;e!==null;){if(e.tag===3){ww(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ai===null||!ai.has(r))){t=_o(n,t),t=MI(e,t,1),e=oi(e,t,1),t=jt(),e!==null&&(jl(e,1,t),Qt(e,t));break}}e=e.return}}function jb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,lt===t&&(yt&n)===n&&(tt===4||tt===3&&(yt&130023424)===yt&&500>qe()-i_?Gi(t,0):r_|=n),Qt(t,e)}function tS(t,e){e===0&&(t.mode&1?(e=Fu,Fu<<=1,!(Fu&130023424)&&(Fu=4194304)):e=1);var n=jt();t=kr(t,e),t!==null&&(jl(t,e,n),Qt(t,n))}function $b(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tS(t,n)}function Bb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),tS(t,n)}var nS;nS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gt.current)Ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ht=!1,Pb(t,e,n);Ht=!!(t.flags&131072)}else Ht=!1,Pe&&e.flags&1048576&&oI(e,Yc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;yc(t,e),t=e.pendingProps;var i=fo(e,Ot.current);eo(e,n),i=Xg(null,e,r,t,i,n);var s=Jg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kt(r)?(s=!0,Kc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qg(e),i.updater=Yh,e.stateNode=i,i._reactInternals=e,dm(e,r,t,n),e=mm(null,e,r,!0,s,n)):(e.tag=0,Pe&&s&&Ug(e),Ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(yc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Wb(r),t=An(r,t),i){case 0:e=pm(null,e,r,t,n);break e;case 1:e=cw(null,e,r,t,n);break e;case 11:e=lw(null,e,r,t,n);break e;case 14:e=uw(null,e,r,An(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),pm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),cw(t,e,r,i,n);case 3:e:{if(UI(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,dI(t,e),Zc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=_o(Error(U(423)),e),e=hw(t,e,r,n,i);break e}else if(r!==i){i=_o(Error(U(424)),e),e=hw(t,e,r,n,i);break e}else for(tn=si(e.stateNode.containerInfo.firstChild),nn=e,Pe=!0,Pn=null,n=cI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(po(),r===i){e=Pr(t,e,n);break e}Ft(t,e,r,n)}e=e.child}return e;case 5:return fI(e),t===null&&um(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,im(r,i)?o=null:s!==null&&im(r,s)&&(e.flags|=32),FI(t,e),Ft(t,e,o,n),e.child;case 6:return t===null&&um(e),null;case 13:return jI(t,e,n);case 4:return Gg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=mo(e,null,r,n):Ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),lw(t,e,r,i,n);case 7:return Ft(t,e,e.pendingProps,n),e.child;case 8:return Ft(t,e,e.pendingProps.children,n),e.child;case 12:return Ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(Xc,r._currentValue),r._currentValue=o,s!==null)if(Vn(s.value,o)){if(s.children===i.children&&!Gt.current){e=Pr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Ir(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),cm(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),cm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,eo(e,n),i=wn(i),r=r(i),e.flags|=1,Ft(t,e,r,n),e.child;case 14:return r=e.type,i=An(r,e.pendingProps),i=An(r.type,i),uw(t,e,r,i,n);case 15:return LI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),yc(t,e),e.tag=1,Kt(r)?(t=!0,Kc(e)):t=!1,eo(e,n),OI(e,r,i),dm(e,r,i,n),mm(null,e,r,!0,t,n);case 19:return $I(t,e,n);case 22:return VI(t,e,n)}throw Error(U(156,e.tag))};function rS(t,e){return x1(t,e)}function zb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,e,n,r){return new zb(t,e,n,r)}function l_(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wb(t){if(typeof t=="function")return l_(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ag)return 11;if(t===kg)return 14}return 2}function ui(t,e){var n=t.alternate;return n===null?(n=mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ec(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")l_(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fs:return Ki(n.children,i,s,e);case Rg:o=8,i|=8;break;case Lp:return t=mn(12,n,e,i|2),t.elementType=Lp,t.lanes=s,t;case Vp:return t=mn(13,n,e,i),t.elementType=Vp,t.lanes=s,t;case Fp:return t=mn(19,n,e,i),t.elementType=Fp,t.lanes=s,t;case f1:return Zh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case h1:o=10;break e;case d1:o=9;break e;case Ag:o=11;break e;case kg:o=14;break e;case Br:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=mn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ki(t,e,n,r){return t=mn(7,t,r,e),t.lanes=n,t}function Zh(t,e,n,r){return t=mn(22,t,r,e),t.elementType=f1,t.lanes=n,t.stateNode={isHidden:!1},t}function lp(t,e,n){return t=mn(6,t,null,e),t.lanes=n,t}function up(t,e,n){return e=mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Hb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zf(0),this.expirationTimes=zf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function u_(t,e,n,r,i,s,o,a,u){return t=new Hb(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qg(s),t}function qb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function iS(t){if(!t)return yi;t=t._reactInternals;e:{if(ms(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Kt(n))return iI(t,n,e)}return e}function sS(t,e,n,r,i,s,o,a,u){return t=u_(n,r,!0,t,i,s,o,a,u),t.context=iS(null),n=t.current,r=jt(),i=li(n),s=Ir(r,i),s.callback=e??null,oi(n,s,i),t.current.lanes=i,jl(t,i,r),Qt(t,r),t}function ed(t,e,n,r){var i=e.current,s=jt(),o=li(i);return n=iS(n),e.context===null?e.context=n:e.pendingContext=n,e=Ir(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=oi(i,e,o),t!==null&&(Dn(t,i,o,s),mc(t,i,o)),o}function ah(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ew(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function c_(t,e){Ew(t,e),(t=t.alternate)&&Ew(t,e)}function Gb(){return null}var oS=typeof reportError=="function"?reportError:function(t){console.error(t)};function h_(t){this._internalRoot=t}td.prototype.render=h_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));ed(t,e,null,null)};td.prototype.unmount=h_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ts(function(){ed(null,t,null,null)}),e[Ar]=null}};function td(t){this._internalRoot=t}td.prototype.unstable_scheduleHydration=function(t){if(t){var e=V1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wr.length&&e!==0&&e<Wr[n].priority;n++);Wr.splice(n,0,t),n===0&&U1(t)}};function d_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tw(){}function Kb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ah(o);s.call(c)}}var o=sS(e,r,t,0,null,!1,!1,"",Tw);return t._reactRootContainer=o,t[Ar]=o.current,cl(t.nodeType===8?t.parentNode:t),ts(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ah(u);a.call(c)}}var u=u_(t,0,!1,null,null,!1,!1,"",Tw);return t._reactRootContainer=u,t[Ar]=u.current,cl(t.nodeType===8?t.parentNode:t),ts(function(){ed(e,u,n,r)}),u}function rd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=ah(o);a.call(u)}}ed(e,o,t,i)}else o=Kb(n,e,t,i,r);return ah(o)}M1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ka(e.pendingLanes);n!==0&&(bg(e,n|1),Qt(e,qe()),!(le&6)&&(yo=qe()+500,ki()))}break;case 13:ts(function(){var r=kr(t,1);if(r!==null){var i=jt();Dn(r,t,1,i)}}),c_(t,1)}};Ng=function(t){if(t.tag===13){var e=kr(t,134217728);if(e!==null){var n=jt();Dn(e,t,134217728,n)}c_(t,134217728)}};L1=function(t){if(t.tag===13){var e=li(t),n=kr(t,e);if(n!==null){var r=jt();Dn(n,t,e,r)}c_(t,e)}};V1=function(){return pe};F1=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Kp=function(t,e,n){switch(e){case"input":if($p(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Gh(r);if(!i)throw Error(U(90));m1(r),$p(r,i)}}}break;case"textarea":_1(t,n);break;case"select":e=n.value,e!=null&&Ys(t,!!n.multiple,e,!1)}};S1=s_;C1=ts;var Qb={usingClientEntryPoint:!1,Events:[Bl,Bs,Gh,T1,I1,s_]},_a={findFiberByHostInstance:$i,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yb={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=k1(t),t===null?null:t.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||Gb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{zh=Qu.inject(Yb),Gn=Qu}catch{}}an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qb;an.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d_(e))throw Error(U(200));return qb(t,e,null,n)};an.createRoot=function(t,e){if(!d_(t))throw Error(U(299));var n=!1,r="",i=oS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=u_(t,1,!1,null,null,n,!1,r,i),t[Ar]=e.current,cl(t.nodeType===8?t.parentNode:t),new h_(e)};an.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=k1(e),t=t===null?null:t.stateNode,t};an.flushSync=function(t){return ts(t)};an.hydrate=function(t,e,n){if(!nd(e))throw Error(U(200));return rd(null,t,e,!0,n)};an.hydrateRoot=function(t,e,n){if(!d_(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=oS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=sS(e,null,t,1,n??null,i,!1,s,o),t[Ar]=e.current,cl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new td(e)};an.render=function(t,e,n){if(!nd(e))throw Error(U(200));return rd(null,t,e,!1,n)};an.unmountComponentAtNode=function(t){if(!nd(t))throw Error(U(40));return t._reactRootContainer?(ts(function(){rd(null,null,t,!1,function(){t._reactRootContainer=null,t[Ar]=null})}),!0):!1};an.unstable_batchedUpdates=s_;an.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nd(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return rd(t,e,n,!1,r)};an.version="18.3.1-next-f1338f8080-20240426";function aS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(aS)}catch(t){console.error(t)}}aS(),a1.exports=an;var Xb=a1.exports,Iw=Xb;Dp.createRoot=Iw.createRoot,Dp.hydrateRoot=Iw.hydrateRoot;function Sr({label:t,placeholder:e,id:n,name:r,value:i,onChange:s,type:o="text"}){return O.jsx(O.Fragment,{children:O.jsxs("label",{className:"flex flex-col gap-y-3",children:[t,O.jsx("input",{type:o,placeholder:e,id:n,name:r,value:i,onChange:s})]})})}function Wl(){return O.jsx("div",{className:"border-[0.5px] border-blue-500 mt-3 w-full"})}function Hl({text:t}){return O.jsx("h1",{className:"text-3xl font-extrabold mt-4 uppercase",children:t})}var Sw={};/**
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
 */const lS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const j=function(t,e){if(!t)throw Fo(e)},Fo=function(t){return new Error("Firebase Database ("+lS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const uS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},f_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,_=c&63;u||(_=64,o||(m=64)),r.push(n[d],n[f],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Zb;const m=s<<2|a>>4;if(r.push(m),c!==64){const _=a<<4&240|c>>2;if(r.push(_),f!==64){const E=c<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Zb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cS=function(t){const e=uS(t);return f_.encodeByteArray(e,!0)},lh=function(t){return cS(t).replace(/\./g,"")},uh=function(t){try{return f_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function eN(t){return hS(void 0,t)}function hS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!tN(n)||(t[n]=hS(t[n],e[n]));return t}function tN(t){return t!=="__proto__"}/**
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
 */function nN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rN=()=>nN().__FIREBASE_DEFAULTS__,iN=()=>{if(typeof process>"u"||typeof Sw>"u")return;const t=Sw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uh(t[1]);return e&&JSON.parse(e)},id=()=>{try{return rN()||iN()||sN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dS=t=>{var e,n;return(n=(e=id())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},p_=t=>{const e=dS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fS=()=>{var t;return(t=id())===null||t===void 0?void 0:t.config},pS=t=>{var e;return(e=id())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ql{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function m_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[lh(JSON.stringify(n)),lh(JSON.stringify(o)),""].join(".")}/**
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
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function g_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function oN(){var t;const e=(t=id())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function aN(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lN(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gS(){return lS.NODE_ADMIN===!0}function uN(){return!oN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cN(){try{return typeof indexedDB=="object"}catch{return!1}}function hN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const dN="FirebaseError";class ir extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dN,Object.setPrototypeOf(this,ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gl.prototype.create)}}class Gl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?fN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ir(i,a,r)}}function fN(t,e){return t.replace(pN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const pN=/\{\$([^}]+)}/g;/**
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
 */function vl(t){return JSON.parse(t)}function at(t){return JSON.stringify(t)}/**
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
 */const _S=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=vl(uh(s[0])||""),n=vl(uh(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},mN=function(t){const e=_S(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},gN=function(t){const e=_S(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function sr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Am(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ch(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function hh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Cw(s)&&Cw(o)){if(!hh(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cw(t){return t!==null&&typeof t=="object"}/**
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
 */function Uo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class _N{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):f<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const m=(i<<5|i>>>27)+c+u+d+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function yN(t,e){const n=new vN(t,e);return n.subscribe.bind(n)}class vN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=cp),i.error===void 0&&(i.error=cp),i.complete===void 0&&(i.complete=cp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cp(){}function sd(t,e){return`${t} failed: ${e} argument `}/**
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
 */const EN=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,j(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},od=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function be(t){return t&&t._delegate?t._delegate:t}class xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ui="[DEFAULT]";/**
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
 */class TN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ql;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SN(e))try{this.getOrInitializeService({instanceIdentifier:Ui})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ui){return this.instances.has(e)}getOptions(e=Ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:IN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ui){return this.component?this.component.multipleInstances?e:Ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function IN(t){return t===Ui?void 0:t}function SN(t){return t.instantiationMode==="EAGER"}/**
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
 */class CN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const RN={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},AN=se.INFO,kN={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},PN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=kN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ad{constructor(e){this.name=e,this._logLevel=AN,this._logHandler=PN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const xN=(t,e)=>e.some(n=>t instanceof n);let Rw,Aw;function bN(){return Rw||(Rw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NN(){return Aw||(Aw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yS=new WeakMap,km=new WeakMap,vS=new WeakMap,hp=new WeakMap,__=new WeakMap;function ON(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ci(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yS.set(n,t)}).catch(()=>{}),__.set(e,t),e}function DN(t){if(km.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});km.set(t,e)}let Pm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return km.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ci(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MN(t){Pm=t(Pm)}function LN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dp(this),e,...n);return vS.set(r,e.sort?e.sort():[e]),ci(r)}:NN().includes(t)?function(...e){return t.apply(dp(this),e),ci(yS.get(this))}:function(...e){return ci(t.apply(dp(this),e))}}function VN(t){return typeof t=="function"?LN(t):(t instanceof IDBTransaction&&DN(t),xN(t,bN())?new Proxy(t,Pm):t)}function ci(t){if(t instanceof IDBRequest)return ON(t);if(hp.has(t))return hp.get(t);const e=VN(t);return e!==t&&(hp.set(t,e),__.set(e,t)),e}const dp=t=>__.get(t);function FN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ci(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ci(o.result),u.oldVersion,u.newVersion,ci(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const UN=["get","getKey","getAll","getAllKeys","count"],jN=["put","add","delete","clear"],fp=new Map;function kw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fp.get(e))return fp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||UN.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return fp.set(e,s),s}MN(t=>({...t,get:(e,n,r)=>kw(e,n)||t.get(e,n,r),has:(e,n)=>!!kw(e,n)||t.has(e,n)}));/**
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
 */class $N{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(BN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function BN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xm="@firebase/app",Pw="0.10.4";/**
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
 */const ns=new ad("@firebase/app"),zN="@firebase/app-compat",WN="@firebase/analytics-compat",HN="@firebase/analytics",qN="@firebase/app-check-compat",GN="@firebase/app-check",KN="@firebase/auth",QN="@firebase/auth-compat",YN="@firebase/database",XN="@firebase/database-compat",JN="@firebase/functions",ZN="@firebase/functions-compat",eO="@firebase/installations",tO="@firebase/installations-compat",nO="@firebase/messaging",rO="@firebase/messaging-compat",iO="@firebase/performance",sO="@firebase/performance-compat",oO="@firebase/remote-config",aO="@firebase/remote-config-compat",lO="@firebase/storage",uO="@firebase/storage-compat",cO="@firebase/firestore",hO="@firebase/vertexai-preview",dO="@firebase/firestore-compat",fO="firebase",pO="10.12.1";/**
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
 */const bm="[DEFAULT]",mO={[xm]:"fire-core",[zN]:"fire-core-compat",[HN]:"fire-analytics",[WN]:"fire-analytics-compat",[GN]:"fire-app-check",[qN]:"fire-app-check-compat",[KN]:"fire-auth",[QN]:"fire-auth-compat",[YN]:"fire-rtdb",[XN]:"fire-rtdb-compat",[JN]:"fire-fn",[ZN]:"fire-fn-compat",[eO]:"fire-iid",[tO]:"fire-iid-compat",[nO]:"fire-fcm",[rO]:"fire-fcm-compat",[iO]:"fire-perf",[sO]:"fire-perf-compat",[oO]:"fire-rc",[aO]:"fire-rc-compat",[lO]:"fire-gcs",[uO]:"fire-gcs-compat",[cO]:"fire-fst",[dO]:"fire-fst-compat",[hO]:"fire-vertex","fire-js":"fire-js",[fO]:"fire-js-all"};/**
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
 */const dh=new Map,gO=new Map,Nm=new Map;function xw(t,e){try{t.container.addComponent(e)}catch(n){ns.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vi(t){const e=t.name;if(Nm.has(e))return ns.debug(`There were multiple attempts to register component ${e}.`),!1;Nm.set(e,t);for(const n of dh.values())xw(n,t);for(const n of gO.values())xw(n,t);return!0}function Kl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Wn(t){return t.settings!==void 0}/**
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
 */const _O={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hi=new Gl("app","Firebase",_O);/**
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
 */class yO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hi.create("app-deleted",{appName:this._name})}}/**
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
 */const Pi=pO;function wS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw hi.create("bad-app-name",{appName:String(i)});if(n||(n=fS()),!n)throw hi.create("no-options");const s=dh.get(i);if(s){if(hh(n,s.options)&&hh(r,s.config))return s;throw hi.create("duplicate-app",{appName:i})}const o=new CN(i);for(const u of Nm.values())o.addComponent(u);const a=new yO(n,r,o);return dh.set(i,a),a}function ld(t=bm){const e=dh.get(t);if(!e&&t===bm&&fS())return wS();if(!e)throw hi.create("no-app",{appName:t});return e}function yn(t,e,n){var r;let i=(r=mO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ns.warn(a.join(" "));return}vi(new xr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const vO="firebase-heartbeat-database",wO=1,wl="firebase-heartbeat-store";let pp=null;function ES(){return pp||(pp=FN(vO,wO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wl)}catch(n){console.warn(n)}}}}).catch(t=>{throw hi.create("idb-open",{originalErrorMessage:t.message})})),pp}async function EO(t){try{const n=(await ES()).transaction(wl),r=await n.objectStore(wl).get(TS(t));return await n.done,r}catch(e){if(e instanceof ir)ns.warn(e.message);else{const n=hi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ns.warn(n.message)}}}async function bw(t,e){try{const r=(await ES()).transaction(wl,"readwrite");await r.objectStore(wl).put(e,TS(t)),await r.done}catch(n){if(n instanceof ir)ns.warn(n.message);else{const r=hi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ns.warn(r.message)}}}function TS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const TO=1024,IO=30*24*60*60*1e3;class SO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nw();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=IO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nw(),{heartbeatsToSend:r,unsentEntries:i}=CO(this._heartbeatsCache.heartbeats),s=lh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Nw(){return new Date().toISOString().substring(0,10)}function CO(t,e=TO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ow(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ow(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cN()?hN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await EO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ow(t){return lh(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function AO(t){vi(new xr("platform-logger",e=>new $N(e),"PRIVATE")),vi(new xr("heartbeat",e=>new SO(e),"PRIVATE")),yn(xm,Pw,t),yn(xm,Pw,"esm2017"),yn("fire-js","")}AO("");function y_(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function IS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kO=IS,SS=new Gl("auth","Firebase",IS());/**
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
 */const fh=new ad("@firebase/auth");function PO(t,...e){fh.logLevel<=se.WARN&&fh.warn(`Auth (${Pi}): ${t}`,...e)}function Tc(t,...e){fh.logLevel<=se.ERROR&&fh.error(`Auth (${Pi}): ${t}`,...e)}/**
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
 */function tr(t,...e){throw w_(t,...e)}function Mn(t,...e){return w_(t,...e)}function v_(t,e,n){const r=Object.assign(Object.assign({},kO()),{[e]:n});return new Gl("auth","Firebase",r).create(e,{appName:t.name})}function di(t){return v_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xO(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&tr(t,"argument-error"),v_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function w_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return SS.create(t,...e)}function K(t,e,...n){if(!t)throw w_(e,...n)}function vr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Tc(e),new Error(e)}function br(t,e){t||vr(e)}/**
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
 */function Om(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bO(){return Dw()==="http:"||Dw()==="https:"}function Dw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function NO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bO()||aN()||"connection"in navigator)?navigator.onLine:!0}function OO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ql{constructor(e,n){this.shortDelay=e,this.longDelay=n,br(n>e,"Short delay should be less than long delay!"),this.isMobile=g_()||mS()}get(){return NO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function E_(t,e){br(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class CS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const DO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const MO=new Ql(3e4,6e4);function Yl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gs(t,e,n,r,i={}){return RS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Uo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),CS.fetch()(kS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function RS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},DO),e);try{const i=new VO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Yu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Yu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Yu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw v_(t,d,c);tr(t,d)}}catch(i){if(i instanceof ir)throw i;tr(t,"network-request-failed",{message:String(i)})}}async function AS(t,e,n,r,i={}){const s=await gs(t,e,n,r,i);return"mfaPendingCredential"in s&&tr(t,"multi-factor-auth-required",{_serverResponse:s}),s}function kS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?E_(t.config,i):`${t.config.apiScheme}://${i}`}function LO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class VO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mn(this.auth,"network-request-failed")),MO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Mn(t,e,r);return i.customData._tokenResponse=n,i}function Mw(t){return t!==void 0&&t.enterprise!==void 0}class FO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return LO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function UO(t,e){return gs(t,"GET","/v2/recaptchaConfig",Yl(t,e))}/**
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
 */async function jO(t,e){return gs(t,"POST","/v1/accounts:delete",e)}async function PS(t,e){return gs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $O(t,e=!1){const n=be(t),r=await n.getIdToken(e),i=T_(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Wa(mp(i.auth_time)),issuedAtTime:Wa(mp(i.iat)),expirationTime:Wa(mp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function mp(t){return Number(t)*1e3}function T_(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Tc("JWT malformed, contained fewer than 3 sections"),null;try{const i=uh(n);return i?JSON.parse(i):(Tc("Failed to decode base64 JWT payload"),null)}catch(i){return Tc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Lw(t){const e=T_(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function El(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ir&&BO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function BO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class zO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Dm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wa(this.lastLoginAt),this.creationTime=Wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ph(t){var e;const n=t.auth,r=await t.getIdToken(),i=await El(t,PS(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?xS(s.providerUserInfo):[],a=HO(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Dm(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function WO(t){const e=be(t);await ph(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function xS(t){return t.map(e=>{var{providerId:n}=e,r=y_(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function qO(t,e){const n=await RS(t,{},async()=>{const r=Uo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=kS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",CS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GO(t,e){return gs(t,"POST","/v2/accounts:revokeToken",Yl(t,e))}/**
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
 */class no{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Lw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await qO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new no;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new no,this.toJSON())}_performRefresh(){return vr("not implemented")}}/**
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
 */function $r(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=y_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Dm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await El(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $O(this,e)}reload(){return WO(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ph(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wn(this.auth.app))return Promise.reject(di(this.auth));const e=await this.getIdToken();return await El(this,jO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:C,emailVerified:N,isAnonymous:M,providerData:L,stsTokenManager:w}=n;K(C&&w,e,"internal-error");const y=no.fromJSON(this.name,w);K(typeof C=="string",e,"internal-error"),$r(f,e.name),$r(m,e.name),K(typeof N=="boolean",e,"internal-error"),K(typeof M=="boolean",e,"internal-error"),$r(_,e.name),$r(E,e.name),$r(I,e.name),$r(x,e.name),$r(T,e.name),$r(v,e.name);const S=new wr({uid:C,auth:e,email:m,emailVerified:N,displayName:f,isAnonymous:M,photoURL:E,phoneNumber:_,tenantId:I,stsTokenManager:y,createdAt:T,lastLoginAt:v});return L&&Array.isArray(L)&&(S.providerData=L.map(R=>Object.assign({},R))),x&&(S._redirectEventId=x),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new no;i.updateFromServerResponse(n);const s=new wr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ph(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?xS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new no;a.updateFromIdToken(r);const u=new wr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Dm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Vw=new Map;function Er(t){br(t instanceof Function,"Expected a class definition");let e=Vw.get(t);return e?(br(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vw.set(t,e),e)}/**
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
 */class bS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bS.type="NONE";const Fw=bS;/**
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
 */function Ic(t,e,n){return`firebase:${t}:${e}:${n}`}class ro{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ic(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ic("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ro(Er(Fw),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Er(Fw);const o=Ic(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=wr._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ro(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ro(s,e,r))}}/**
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
 */function Uw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(DS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(NS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(LS(e))return"Blackberry";if(VS(e))return"Webos";if(I_(e))return"Safari";if((e.includes("chrome/")||OS(e))&&!e.includes("edge/"))return"Chrome";if(MS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function NS(t=Et()){return/firefox\//i.test(t)}function I_(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function OS(t=Et()){return/crios\//i.test(t)}function DS(t=Et()){return/iemobile/i.test(t)}function MS(t=Et()){return/android/i.test(t)}function LS(t=Et()){return/blackberry/i.test(t)}function VS(t=Et()){return/webos/i.test(t)}function ud(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KO(t=Et()){var e;return ud(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QO(){return lN()&&document.documentMode===10}function FS(t=Et()){return ud(t)||MS(t)||VS(t)||LS(t)||/windows phone/i.test(t)||DS(t)}function YO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function US(t,e=[]){let n;switch(t){case"Browser":n=Uw(Et());break;case"Worker":n=`${Uw(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pi}/${r}`}/**
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
 */class XO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function JO(t,e={}){return gs(t,"GET","/v2/passwordPolicy",Yl(t,e))}/**
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
 */const ZO=6;class e2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ZO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class t2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jw(this),this.idTokenSubscription=new jw(this),this.beforeStateQueue=new XO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=SS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Er(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ro.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await PS(this,{idToken:e}),r=await wr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Wn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ph(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wn(this.app))return Promise.reject(di(this));const n=e?be(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wn(this.app)?Promise.reject(di(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wn(this.app)?Promise.reject(di(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JO(this),n=new e2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await GO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Er(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await ro.create(this,[Er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=US(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&PO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _s(t){return be(t)}class jw{constructor(e){this.auth=e,this.observer=null,this.addObserver=yN(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let cd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function n2(t){cd=t}function jS(t){return cd.loadJS(t)}function r2(){return cd.recaptchaEnterpriseScript}function i2(){return cd.gapiScript}function s2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const o2="recaptcha-enterprise",a2="NO_RECAPTCHA";class l2{constructor(e){this.type=o2,this.auth=_s(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{UO(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new FO(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;Mw(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(a2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Mw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=r2();u.length!==0&&(u+=a),jS(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function $w(t,e,n,r=!1){const i=new l2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function u2(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await $w(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $w(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function c2(t,e){const n=Kl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(hh(s,e??{}))return i;tr(i,"already-initialized")}return n.initialize({options:e})}function h2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function d2(t,e,n){const r=_s(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=$S(e),{host:o,port:a}=f2(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),p2()}function $S(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function f2(t){const e=$S(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Bw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Bw(o)}}}function Bw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function p2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class BS{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vr("not implemented")}_getIdTokenResponse(e){return vr("not implemented")}_linkToIdToken(e,n){return vr("not implemented")}_getReauthenticationResolver(e){return vr("not implemented")}}/**
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
 */async function io(t,e){return AS(t,"POST","/v1/accounts:signInWithIdp",Yl(t,e))}/**
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
 */const m2="http://localhost";class rs extends BS{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=y_(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new rs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return io(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,io(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,io(e,n)}buildRequest(){const e={requestUri:m2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Uo(n)}return e}}/**
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
 */class S_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xl extends S_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qr extends Xl{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";qr.PROVIDER_ID="facebook.com";/**
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
 */class gr extends Xl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rs._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.GOOGLE_SIGN_IN_METHOD="google.com";gr.PROVIDER_ID="google.com";/**
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
 */class Gr extends Xl{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.GITHUB_SIGN_IN_METHOD="github.com";Gr.PROVIDER_ID="github.com";/**
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
 */class Kr extends Xl{constructor(){super("twitter.com")}static credential(e,n){return rs._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kr.credential(n,r)}catch{return null}}}Kr.TWITTER_SIGN_IN_METHOD="twitter.com";Kr.PROVIDER_ID="twitter.com";/**
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
 */async function g2(t,e){return AS(t,"POST","/v1/accounts:signUp",Yl(t,e))}/**
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
 */class is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await wr._fromIdTokenResponse(e,r,i),o=zw(r);return new is({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=zw(r);return new is({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function zw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class mh extends ir{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,mh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new mh(e,n,r,i)}}function zS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?mh._fromErrorAndOperation(t,s,e,r):s})}async function _2(t,e,n=!1){const r=await El(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return is._forOperation(t,"link",r)}/**
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
 */async function y2(t,e,n=!1){const{auth:r}=t;if(Wn(r.app))return Promise.reject(di(r));const i="reauthenticate";try{const s=await El(t,zS(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=T_(s.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),is._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tr(r,"user-mismatch"),s}}/**
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
 */async function v2(t,e,n=!1){if(Wn(t.app))return Promise.reject(di(t));const r="signIn",i=await zS(t,r,e),s=await is._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
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
 */async function w2(t){const e=_s(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function E2(t,e,n){if(Wn(t.app))return Promise.reject(di(t));const r=_s(t),o=await u2(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",g2).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&w2(t),u}),a=await is._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function T2(t,e,n,r){return be(t).onIdTokenChanged(e,n,r)}function I2(t,e,n){return be(t).beforeAuthStateChanged(e,n)}function S2(t,e,n,r){return be(t).onAuthStateChanged(e,n,r)}function C2(t){return be(t).signOut()}const gh="__sak";/**
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
 */class WS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gh,"1"),this.storage.removeItem(gh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function R2(){const t=Et();return I_(t)||ud(t)}const A2=1e3,k2=10;class HS extends WS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=R2()&&YO(),this.fallbackToPolling=FS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);QO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,k2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},A2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}HS.type="LOCAL";const P2=HS;/**
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
 */class qS extends WS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qS.type="SESSION";const GS=qS;/**
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
 */function x2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new hd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await x2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hd.receivers=[];/**
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
 */function C_(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class b2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=C_("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qn(){return window}function N2(t){Qn().location.href=t}/**
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
 */function KS(){return typeof Qn().WorkerGlobalScope<"u"&&typeof Qn().importScripts=="function"}async function O2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function D2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function M2(){return KS()?self:null}/**
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
 */const QS="firebaseLocalStorageDb",L2=1,_h="firebaseLocalStorage",YS="fbase_key";class Jl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dd(t,e){return t.transaction([_h],e?"readwrite":"readonly").objectStore(_h)}function V2(){const t=indexedDB.deleteDatabase(QS);return new Jl(t).toPromise()}function Mm(){const t=indexedDB.open(QS,L2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_h,{keyPath:YS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_h)?e(r):(r.close(),await V2(),e(await Mm()))})})}async function Ww(t,e,n){const r=dd(t,!0).put({[YS]:e,value:n});return new Jl(r).toPromise()}async function F2(t,e){const n=dd(t,!1).get(e),r=await new Jl(n).toPromise();return r===void 0?null:r.value}function Hw(t,e){const n=dd(t,!0).delete(e);return new Jl(n).toPromise()}const U2=800,j2=3;class XS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>j2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return KS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hd._getInstance(M2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await O2(),!this.activeServiceWorker)return;this.sender=new b2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||D2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mm();return await Ww(e,gh,"1"),await Hw(e,gh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ww(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>F2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=dd(i,!1).getAll();return new Jl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),U2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}XS.type="LOCAL";const $2=XS;new Ql(3e4,6e4);/**
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
 */function JS(t,e){return e?Er(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class R_ extends BS{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return io(e,this._buildIdpRequest())}_linkToIdToken(e,n){return io(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return io(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function B2(t){return v2(t.auth,new R_(t),t.bypassAuthState)}function z2(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),y2(n,new R_(t),t.bypassAuthState)}async function W2(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),_2(n,new R_(t),t.bypassAuthState)}/**
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
 */class ZS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return B2;case"linkViaPopup":case"linkViaRedirect":return W2;case"reauthViaPopup":case"reauthViaRedirect":return z2;default:tr(this.auth,"internal-error")}}resolve(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const H2=new Ql(2e3,1e4);async function q2(t,e,n){if(Wn(t.app))return Promise.reject(Mn(t,"operation-not-supported-in-this-environment"));const r=_s(t);xO(t,e,S_);const i=JS(r,n);return new Wi(r,"signInViaPopup",e,i).executeNotNull()}class Wi extends ZS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Wi.currentPopupAction&&Wi.currentPopupAction.cancel(),Wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){br(this.filter.length===1,"Popup operations only handle one event");const e=C_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,H2.get())};e()}}Wi.currentPopupAction=null;/**
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
 */const G2="pendingRedirect",Sc=new Map;class K2 extends ZS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Sc.get(this.auth._key());if(!e){try{const r=await Q2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Sc.set(this.auth._key(),e)}return this.bypassAuthState||Sc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Q2(t,e){const n=J2(e),r=X2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Y2(t,e){Sc.set(t._key(),e)}function X2(t){return Er(t._redirectPersistence)}function J2(t){return Ic(G2,t.config.apiKey,t.name)}async function Z2(t,e,n=!1){if(Wn(t.app))return Promise.reject(di(t));const r=_s(t),i=JS(r,e),o=await new K2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const eD=10*60*1e3;class tD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!eC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eD&&this.cachedEventUids.clear(),this.cachedEventUids.has(qw(e))}saveEventToCache(e){this.cachedEventUids.add(qw(e)),this.lastProcessedEventTime=Date.now()}}function qw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function eC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eC(t);default:return!1}}/**
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
 */async function rD(t,e={}){return gs(t,"GET","/v1/projects",e)}/**
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
 */const iD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sD=/^https?/;async function oD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rD(t);for(const n of e)try{if(aD(n))return}catch{}tr(t,"unauthorized-domain")}function aD(t){const e=Om(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sD.test(n))return!1;if(iD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const lD=new Ql(3e4,6e4);function Gw(){const t=Qn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uD(t){return new Promise((e,n)=>{var r,i,s;function o(){Gw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gw(),n(Mn(t,"network-request-failed"))},timeout:lD.get()})}if(!((i=(r=Qn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qn().gapi)===null||s===void 0)&&s.load)o();else{const a=s2("iframefcb");return Qn()[a]=()=>{gapi.load?o():n(Mn(t,"network-request-failed"))},jS(`${i2()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Cc=null,e})}let Cc=null;function cD(t){return Cc=Cc||uD(t),Cc}/**
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
 */const hD=new Ql(5e3,15e3),dD="__/auth/iframe",fD="emulator/auth/iframe",pD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gD(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?E_(e,fD):`https://${t.config.authDomain}/${dD}`,r={apiKey:e.apiKey,appName:t.name,v:Pi},i=mD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Uo(r).slice(1)}`}async function _D(t){const e=await cD(t),n=Qn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:gD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Mn(t,"network-request-failed"),a=Qn().setTimeout(()=>{s(o)},hD.get());function u(){Qn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const yD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vD=500,wD=600,ED="_blank",TD="http://localhost";class Kw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ID(t,e,n,r=vD,i=wD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},yD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Et().toLowerCase();n&&(a=OS(c)?ED:n),NS(c)&&(e=e||TD,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[_,E])=>`${m}${_}=${E},`,"");if(KO(c)&&a!=="_self")return SD(e||"",a),new Kw(null);const f=window.open(e||"",a,d);K(f,t,"popup-blocked");try{f.focus()}catch{}return new Kw(f)}function SD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const CD="__/auth/handler",RD="emulator/auth/handler",AD=encodeURIComponent("fac");async function Qw(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Pi,eventId:i};if(e instanceof S_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Am(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Xl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${AD}=${encodeURIComponent(u)}`:"";return`${kD(t)}?${Uo(a).slice(1)}${c}`}function kD({config:t}){return t.emulator?E_(t,RD):`https://${t.authDomain}/${CD}`}/**
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
 */const gp="webStorageSupport";class PD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=GS,this._completeRedirectFn=Z2,this._overrideRedirectResult=Y2}async _openPopup(e,n,r,i){var s;br((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Qw(e,n,r,Om(),i);return ID(e,o,C_())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Qw(e,n,r,Om(),i);return N2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(br(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _D(e),r=new tD(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gp,{type:gp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[gp];o!==void 0&&n(!!o),tr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return FS()||I_()||ud()}}const xD=PD;var Yw="@firebase/auth",Xw="1.7.3";/**
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
 */class bD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ND(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function OD(t){vi(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:US(t)},c=new t2(r,i,s,u);return h2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vi(new xr("auth-internal",e=>{const n=_s(e.getProvider("auth").getImmediate());return(r=>new bD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(Yw,Xw,ND(t)),yn(Yw,Xw,"esm2017")}/**
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
 */const DD=5*60,MD=pS("authIdTokenMaxAge")||DD;let Jw=null;const LD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>MD)return;const i=n==null?void 0:n.token;Jw!==i&&(Jw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function VD(t=ld()){const e=Kl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=c2(t,{popupRedirectResolver:xD,persistence:[$2,P2,GS]}),r=pS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=LD(s.toString());I2(n,o,()=>o(n.currentUser)),T2(n,a=>o(a))}}const i=dS("auth");return i&&d2(n,`http://${i}`),n}function FD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}n2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Mn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",FD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});OD("Browser");var UD="firebase",jD="10.12.1";/**
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
 */yn(UD,jD,"app");var Zw={};const eE="@firebase/database",tE="1.0.5";/**
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
 */let tC="";function $D(t){tC=t}/**
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
 */class BD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),at(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:vl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class zD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return sr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const nC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new BD(e)}}catch{}return new zD},Hi=nC("localStorage"),WD=nC("sessionStorage");/**
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
 */const so=new ad("@firebase/database"),HD=function(){let t=1;return function(){return t++}}(),rC=function(t){const e=EN(t),n=new _N;n.update(e);const r=n.digest();return f_.encodeByteArray(r)},Zl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Zl.apply(null,r):typeof r=="object"?e+=at(r):e+=r,e+=" "}return e};let Ha=null,nE=!0;const qD=function(t,e){j(!e,"Can't turn on custom loggers persistently."),so.logLevel=se.VERBOSE,Ha=so.log.bind(so)},gt=function(...t){if(nE===!0&&(nE=!1,Ha===null&&WD.get("logging_enabled")===!0&&qD()),Ha){const e=Zl.apply(null,t);Ha(e)}},eu=function(t){return function(...e){gt(t,...e)}},Lm=function(...t){const e="FIREBASE INTERNAL ERROR: "+Zl(...t);so.error(e)},Nr=function(...t){const e=`FIREBASE FATAL ERROR: ${Zl(...t)}`;throw so.error(e),new Error(e)},$t=function(...t){const e="FIREBASE WARNING: "+Zl(...t);so.warn(e)},GD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&$t("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},A_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},KD=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},wo="[MIN_NAME]",ss="[MAX_NAME]",ys=function(t,e){if(t===e)return 0;if(t===wo||e===ss)return-1;if(e===wo||t===ss)return 1;{const n=rE(t),r=rE(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},QD=function(t,e){return t===e?0:t<e?-1:1},ya=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+at(e))},k_=function(t){if(typeof t!="object"||t===null)return at(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=at(e[r]),n+=":",n+=k_(t[e[r]]);return n+="}",n},iC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Tt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const sC=function(t){j(!A_(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let f="";for(u=0;u<64;u+=8){let m=parseInt(d.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},YD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},XD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function JD(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const ZD=new RegExp("^-?(0*)\\d{1,10}$"),eM=-2147483648,tM=2147483647,rE=function(t){if(ZD.test(t)){const e=Number(t);if(e>=eM&&e<=tM)return e}return null},jo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw $t("Exception was thrown by user callback.",n),e},Math.floor(0))}},nM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},qa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class rM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){$t(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class iM{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(gt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$t(e)}}class Rc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Rc.OWNER="owner";/**
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
 */const P_="5",oC="v",aC="s",lC="r",uC="f",cC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hC="ls",dC="p",Vm="ac",fC="websocket",pC="long_polling";/**
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
 */class mC{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Hi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Hi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function sM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function gC(t,e,n){j(typeof e=="string","typeof type must == string"),j(typeof n=="object","typeof params must == object");let r;if(e===fC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===pC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sM(t)&&(n.ns=t.namespace);const i=[];return Tt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class oM{constructor(){this.counters_={}}incrementCounter(e,n=1){sr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return eN(this.counters_)}}/**
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
 */const _p={},yp={};function x_(t){const e=t.toString();return _p[e]||(_p[e]=new oM),_p[e]}function aM(t,e){const n=t.toString();return yp[n]||(yp[n]=e()),yp[n]}/**
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
 */class lM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&jo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const iE="start",uM="close",cM="pLPCommand",hM="pRTLPCB",_C="id",yC="pw",vC="ser",dM="cb",fM="seg",pM="ts",mM="d",gM="dframe",wC=1870,EC=30,_M=wC-EC,yM=25e3,vM=3e4;class Qs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=eu(e),this.stats_=x_(n),this.urlFn=u=>(this.appCheckToken&&(u[Vm]=this.appCheckToken),gC(n,pC,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new lM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(vM)),KD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new b_((...s)=>{const[o,a,u,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===iE)this.id=a,this.password=u;else if(o===uM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[iE]="t",r[vC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[dM]=this.scriptTagHolder.uniqueCallbackIdentifier),r[oC]=P_,this.transportSessionId&&(r[aC]=this.transportSessionId),this.lastSessionId&&(r[hC]=this.lastSessionId),this.applicationId&&(r[dC]=this.applicationId),this.appCheckToken&&(r[Vm]=this.appCheckToken),typeof location<"u"&&location.hostname&&cC.test(location.hostname)&&(r[lC]=uC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Qs.forceAllow_=!0}static forceDisallow(){Qs.forceDisallow_=!0}static isAvailable(){return Qs.forceAllow_?!0:!Qs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!YD()&&!XD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=at(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=cS(n),i=iC(r,_M);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[gM]="t",r[_C]=e,r[yC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=at(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class b_{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=HD(),window[cM+this.uniqueCallbackIdentifier]=e,window[hM+this.uniqueCallbackIdentifier]=n,this.myIFrame=b_.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){gt("frame writing exception"),a.stack&&gt(a.stack),gt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||gt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_C]=this.myID,e[yC]=this.myPW,e[vC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+EC+r.length<=wC;){const o=this.pendingSegs.shift();r=r+"&"+fM+i+"="+o.seg+"&"+pM+i+"="+o.ts+"&"+mM+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(yM)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{gt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const wM=16384,EM=45e3;let yh=null;typeof MozWebSocket<"u"?yh=MozWebSocket:typeof WebSocket<"u"&&(yh=WebSocket);class xn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=eu(this.connId),this.stats_=x_(n),this.connURL=xn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[oC]=P_,typeof location<"u"&&location.hostname&&cC.test(location.hostname)&&(o[lC]=uC),n&&(o[aC]=n),r&&(o[hC]=r),i&&(o[Vm]=i),s&&(o[dC]=s),gC(e,fC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Hi.set("previous_websocket_failure",!0);try{let r;gS(),this.mySock=new yh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){xn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&yh!==null&&!xn.forceDisallow_}static previouslyFailed(){return Hi.isInMemoryStorage||Hi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Hi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=vl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=at(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=iC(n,wM);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(EM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xn.responsesRequiredToBeHealthy=2;xn.healthyTimeout=3e4;/**
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
 */class Tl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Qs,xn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=xn&&xn.isAvailable();let r=n&&!xn.previouslyFailed();if(e.webSocketOnly&&(n||$t("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[xn];else{const i=this.transports_=[];for(const s of Tl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Tl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Tl.globalTransportInitialized_=!1;/**
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
 */const TM=6e4,IM=5e3,SM=10*1024,CM=100*1024,vp="t",sE="d",RM="s",oE="r",AM="e",aE="o",lE="a",uE="n",cE="p",kM="h";class PM{constructor(e,n,r,i,s,o,a,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=eu("c:"+this.id+":"),this.transportManager_=new Tl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=qa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>CM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>SM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(vp in e){const n=e[vp];n===lE?this.upgradeIfSecondaryHealthy_():n===oE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===aE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ya("t",e),r=ya("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:cE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:lE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:uE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ya("t",e),r=ya("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ya(vp,e);if(sE in e){const r=e[sE];if(n===kM){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===uE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===RM?this.onConnectionShutdown_(r):n===oE?this.onReset_(r):n===AM?Lm("Server Error: "+r):n===aE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Lm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),P_!==r&&$t("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),qa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(TM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):qa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(IM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:cE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Hi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class TC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class IC{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){j(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class vh extends IC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!g_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new vh}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const hE=32,dE=768;class ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function fe(){return new ye("")}function ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function wi(t){return t.pieces_.length-t.pieceNum_}function Te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ye(t.pieces_,e)}function N_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function xM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Il(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function SC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ye(e,0)}function $e(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ye)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ye(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function qt(t,e){const n=ee(t),r=ee(e);if(n===null)return e;if(n===r)return qt(Te(t),Te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function bM(t,e){const n=Il(t,0),r=Il(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=ys(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function O_(t,e){if(wi(t)!==wi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function gn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(wi(t)>wi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class NM{constructor(e,n){this.errorPrefix_=n,this.parts_=Il(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=od(this.parts_[r]);CC(this)}}function OM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=od(e),CC(t)}function DM(t){const e=t.parts_.pop();t.byteLength_-=od(e),t.parts_.length>0&&(t.byteLength_-=1)}function CC(t){if(t.byteLength_>dE)throw new Error(t.errorPrefix_+"has a key path longer than "+dE+" bytes ("+t.byteLength_+").");if(t.parts_.length>hE)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+hE+") or object contains a cycle "+ji(t))}function ji(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class D_ extends IC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new D_}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const va=1e3,MM=60*5*1e3,fE=30*1e3,LM=1.3,VM=3e4,FM="server_kill",pE=3;class Cr extends TC{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Cr.nextPersistentConnectionId_++,this.log_=eu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=va,this.maxReconnectDelay_=MM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!gS())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");D_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&vh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(at(s)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ql,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;Cr.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&sr(e,"w")){const r=vo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();$t(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||gN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=fE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=mN(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+at(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Lm("Unrecognized action received from server: "+at(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=va,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=va,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>VM&&(this.reconnectDelay_=va),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*LM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Cr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){j(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?gt("getToken() completed but was canceled"):(gt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new PM(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{$t(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(FM)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&$t(f),u())}}}interrupt(e){gt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){gt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Am(this.interruptReasons_)&&(this.reconnectDelay_=va,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>k_(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ye(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){gt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=pE&&(this.reconnectDelay_=fE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){gt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=pE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+tC.replace(/\./g,"-")]=1,g_()?e["framework.cordova"]=1:mS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=vh.getInstance().currentlyOnline();return Am(this.interruptReasons_)&&e}}Cr.nextPersistentConnectionId_=0;Cr.nextConnectionId_=0;/**
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
 */class te{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new te(e,n)}}/**
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
 */class fd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new te(wo,e),i=new te(wo,n);return this.compare(r,i)!==0}minPost(){return te.MIN}}/**
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
 */let Xu;class RC extends fd{static get __EMPTY_NODE(){return Xu}static set __EMPTY_NODE(e){Xu=e}compare(e,n){return ys(e.name,n.name)}isDefinedOn(e){throw Fo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return te.MIN}maxPost(){return new te(ss,Xu)}makePost(e,n){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,Xu)}toString(){return".key"}}const oo=new RC;/**
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
 */let Ju=class{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Zt=class xa{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??xa.RED,this.left=i??Hn.EMPTY_NODE,this.right=s??Hn.EMPTY_NODE}copy(e,n,r,i,s){return new xa(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Hn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Hn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xa.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xa.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Zt.RED=!0;Zt.BLACK=!1;class UM{copy(e,n,r,i,s){return this}insert(e,n,r){return new Zt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Hn=class Ac{constructor(e,n=Ac.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ac(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Zt.BLACK,null,null))}remove(e){return new Ac(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Zt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ju(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ju(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ju(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ju(this.root_,null,this.comparator_,!0,e)}};Hn.EMPTY_NODE=new UM;/**
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
 */function jM(t,e){return ys(t.name,e.name)}function M_(t,e){return ys(t,e)}/**
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
 */let Fm;function $M(t){Fm=t}const AC=function(t){return typeof t=="number"?"number:"+sC(t):"string:"+t},kC=function(t){if(t.isLeafNode()){const e=t.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&sr(e,".sv"),"Priority must be a string or number.")}else j(t===Fm||t.isEmpty(),"priority of unexpected type.");j(t===Fm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let mE;class rt{constructor(e,n=rt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),kC(this.priorityNode_)}static set __childrenNodeConstructor(e){mE=e}static get __childrenNodeConstructor(){return mE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:rt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:ee(e)===".priority"?this.priorityNode_:rt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:rt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ee(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(j(r!==".priority"||wi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,rt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+AC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=sC(this.value_):e+=this.value_,this.lazyHash_=rC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rt.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=rt.VALUE_TYPE_ORDER.indexOf(n),s=rt.VALUE_TYPE_ORDER.indexOf(r);return j(i>=0,"Unknown leaf type: "+n),j(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}rt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let PC,xC;function BM(t){PC=t}function zM(t){xC=t}class WM extends fd{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ys(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return te.MIN}maxPost(){return new te(ss,new rt("[PRIORITY-POST]",xC))}makePost(e,n){const r=PC(e);return new te(n,new rt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Be=new WM;/**
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
 */const HM=Math.log(2);class qM{constructor(e){const n=s=>parseInt(Math.log(s)/HM,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wh=function(t,e,n,r){t.sort(e);const i=function(u,c){const d=c-u;let f,m;if(d===0)return null;if(d===1)return f=t[u],m=n?n(f):f,new Zt(m,f.node,Zt.BLACK,null,null);{const _=parseInt(d/2,10)+u,E=i(u,_),I=i(_+1,c);return f=t[_],m=n?n(f):f,new Zt(m,f.node,Zt.BLACK,E,I)}},s=function(u){let c=null,d=null,f=t.length;const m=function(E,I){const x=f-E,T=f;f-=E;const v=i(x+1,T),C=t[x],N=n?n(C):C;_(new Zt(N,C.node,I,null,v))},_=function(E){c?(c.left=E,c=E):(d=E,c=E)};for(let E=0;E<u.count;++E){const I=u.nextBitIsOne(),x=Math.pow(2,u.count-(E+1));I?m(x,Zt.BLACK):(m(x,Zt.BLACK),m(x,Zt.RED))}return d},o=new qM(t.length),a=s(o);return new Hn(r||e,a)};/**
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
 */let wp;const ks={};class Tr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return j(ks&&Be,"ChildrenNode.ts has not been loaded"),wp=wp||new Tr({".priority":ks},{".priority":Be}),wp}get(e){const n=vo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Hn?n:null}hasIndex(e){return sr(this.indexSet_,e.toString())}addIndex(e,n){j(e!==oo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(te.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=wh(r,e.getCompare()):a=ks;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const d=Object.assign({},this.indexes_);return d[u]=a,new Tr(d,c)}addToIndexes(e,n){const r=ch(this.indexes_,(i,s)=>{const o=vo(this.indexSet_,s);if(j(o,"Missing index implementation for "+s),i===ks)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(te.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),wh(a,o.getCompare())}else return ks;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new te(e.name,a))),u.insert(e,e.node)}});return new Tr(r,this.indexSet_)}removeFromIndexes(e,n){const r=ch(this.indexes_,i=>{if(i===ks)return i;{const s=n.get(e.name);return s?i.remove(new te(e.name,s)):i}});return new Tr(r,this.indexSet_)}}/**
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
 */let wa;class G{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&kC(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return wa||(wa=new G(new Hn(M_),null,Tr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wa}updatePriority(e){return this.children_.isEmpty()?this:new G(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?wa:n}}getChild(e){const n=ee(e);return n===null?this:this.getImmediateChild(n).getChild(Te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(j(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new te(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?wa:this.priorityNode_;return new G(i,o,s)}}updateChild(e,n){const r=ee(e);if(r===null)return n;{j(ee(e)!==".priority"||wi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Te(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Be,(o,a)=>{n[o]=a.val(e),r++,s&&G.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+AC(this.getPriority().val())+":"),this.forEachChild(Be,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":rC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new te(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new te(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===tu?-1:0}withIndex(e){if(e===oo||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new G(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===oo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Be),i=n.getIterator(Be);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===oo?null:this.indexMap_.get(e.toString())}}G.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class GM extends G{constructor(){super(new Hn(M_),G.EMPTY_NODE,Tr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return G.EMPTY_NODE}isEmpty(){return!1}}const tu=new GM;Object.defineProperties(te,{MIN:{value:new te(wo,G.EMPTY_NODE)},MAX:{value:new te(ss,tu)}});RC.__EMPTY_NODE=G.EMPTY_NODE;rt.__childrenNodeConstructor=G;$M(tu);zM(tu);/**
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
 */const KM=!0;function ot(t,e=null){if(t===null)return G.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new rt(n,ot(e))}if(!(t instanceof Array)&&KM){const n=[];let r=!1;if(Tt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=ot(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new te(o,u)))}}),n.length===0)return G.EMPTY_NODE;const s=wh(n,jM,o=>o.name,M_);if(r){const o=wh(n,Be.getCompare());return new G(s,ot(e),new Tr({".priority":o},{".priority":Be}))}else return new G(s,ot(e),Tr.Default)}else{let n=G.EMPTY_NODE;return Tt(t,(r,i)=>{if(sr(t,r)&&r.substring(0,1)!=="."){const s=ot(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ot(e))}}BM(ot);/**
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
 */class QM extends fd{constructor(e){super(),this.indexPath_=e,j(!re(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ys(e.name,n.name):s}makePost(e,n){const r=ot(e),i=G.EMPTY_NODE.updateChild(this.indexPath_,r);return new te(n,i)}maxPost(){const e=G.EMPTY_NODE.updateChild(this.indexPath_,tu);return new te(ss,e)}toString(){return Il(this.indexPath_,0).join("/")}}/**
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
 */class YM extends fd{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ys(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,n){const r=ot(e);return new te(n,r)}toString(){return".value"}}const XM=new YM;/**
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
 */function bC(t){return{type:"value",snapshotNode:t}}function Eo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Sl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Cl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function JM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class L_{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){j(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Sl(n,a)):j(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Eo(n,r)):o.trackChildChange(Cl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Be,(i,s)=>{n.hasChild(i)||r.trackChildChange(Sl(i,s))}),n.isLeafNode()||n.forEachChild(Be,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Cl(i,s,o))}else r.trackChildChange(Eo(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?G.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Rl{constructor(e){this.indexedFilter_=new L_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Rl.getStartPost_(e),this.endPost_=Rl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new te(n,r))||(r=G.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=G.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(G.EMPTY_NODE);const s=this;return n.forEachChild(Be,(o,a)=>{s.matches(new te(o,a))||(i=i.updateImmediateChild(o,G.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class ZM{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Rl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new te(n,r))||(r=G.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=G.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=G.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(G.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,G.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,_)=>f(_,m)}else o=this.index_.getCompare();const a=e;j(a.numChildren()===this.limit_,"");const u=new te(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=i.getChildAfterChild(this.index_,c,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const _=m==null?1:o(m,u);if(d&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(Cl(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Sl(n,f));const I=a.updateImmediateChild(n,G.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(Eo(m.name,m.node)),I.updateImmediateChild(m.name,m.node)):I}}else return r.isEmpty()?e:d&&o(c,u)>=0?(s!=null&&(s.trackChildChange(Sl(c.name,c.node)),s.trackChildChange(Eo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,G.EMPTY_NODE)):e}}/**
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
 */class V_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wo}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ss}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Be}copy(){const e=new V_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function eL(t){return t.loadsAllData()?new L_(t.getIndex()):t.hasLimit()?new ZM(t):new Rl(t)}function gE(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Be?n="$priority":t.index_===XM?n="$value":t.index_===oo?n="$key":(j(t.index_ instanceof QM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=at(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=at(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+at(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=at(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+at(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function _E(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Be&&(e.i=t.index_.toString()),e}/**
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
 */class Eh extends TC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=eu("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Eh.getListenId_(e,r),a={};this.listens_[o]=a;const u=gE(e._queryParams);this.restRequest_(s+".json",u,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),vo(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=Eh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=gE(e._queryParams),r=e._path.toString(),i=new ql;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Uo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=vl(a.responseText)}catch{$t("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&$t("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class tL{constructor(){this.rootNode_=G.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Th(){return{value:null,children:new Map}}function NC(t,e,n){if(re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ee(e);t.children.has(r)||t.children.set(r,Th());const i=t.children.get(r);e=Te(e),NC(i,e,n)}}function Um(t,e,n){t.value!==null?n(e,t.value):nL(t,(r,i)=>{const s=new ye(e.toString()+"/"+r);Um(i,s,n)})}function nL(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class rL{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Tt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const yE=10*1e3,iL=30*1e3,sL=5*60*1e3;class oL{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new rL(e);const r=yE+(iL-yE)*Math.random();qa(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Tt(e,(i,s)=>{s>0&&sr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),qa(this.reportStats_.bind(this),Math.floor(Math.random()*2*sL))}}/**
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
 */var bn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(bn||(bn={}));function F_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function U_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function j_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ih{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=bn.ACK_USER_WRITE,this.source=F_()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ye(e));return new Ih(fe(),n,this.revert)}}else return j(ee(this.path)===e,"operationForChild called for unrelated child."),new Ih(Te(this.path),this.affectedTree,this.revert)}}/**
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
 */class Al{constructor(e,n){this.source=e,this.path=n,this.type=bn.LISTEN_COMPLETE}operationForChild(e){return re(this.path)?new Al(this.source,fe()):new Al(this.source,Te(this.path))}}/**
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
 */class os{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=bn.OVERWRITE}operationForChild(e){return re(this.path)?new os(this.source,fe(),this.snap.getImmediateChild(e)):new os(this.source,Te(this.path),this.snap)}}/**
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
 */class To{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=bn.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new ye(e));return n.isEmpty()?null:n.value?new os(this.source,fe(),n.value):new To(this.source,fe(),n)}else return j(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new To(this.source,Te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class as{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class aL{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function lL(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(JM(o.childName,o.snapshotNode))}),Ea(t,i,"child_removed",e,r,n),Ea(t,i,"child_added",e,r,n),Ea(t,i,"child_moved",s,r,n),Ea(t,i,"child_changed",e,r,n),Ea(t,i,"value",e,r,n),i}function Ea(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>cL(t,a,u)),o.forEach(a=>{const u=uL(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function uL(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function cL(t,e,n){if(e.childName==null||n.childName==null)throw Fo("Should only compare child_ events.");const r=new te(e.childName,e.snapshotNode),i=new te(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function pd(t,e){return{eventCache:t,serverCache:e}}function Ga(t,e,n,r){return pd(new as(e,n,r),t.serverCache)}function OC(t,e,n,r){return pd(t.eventCache,new as(e,n,r))}function jm(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ls(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ep;const hL=()=>(Ep||(Ep=new Hn(QD)),Ep);class Ee{constructor(e,n=hL()){this.value=e,this.children=n}static fromObject(e){let n=new Ee(null);return Tt(e,(r,i)=>{n=n.set(new ye(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:fe(),value:this.value};if(re(e))return null;{const r=ee(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Te(e),n);return s!=null?{path:$e(new ye(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=ee(e),r=this.children.get(n);return r!==null?r.subtree(Te(e)):new Ee(null)}}set(e,n){if(re(e))return new Ee(n,this.children);{const r=ee(e),s=(this.children.get(r)||new Ee(null)).set(Te(e),n),o=this.children.insert(r,s);return new Ee(this.value,o)}}remove(e){if(re(e))return this.children.isEmpty()?new Ee(null):new Ee(null,this.children);{const n=ee(e),r=this.children.get(n);if(r){const i=r.remove(Te(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ee(null):new Ee(this.value,s)}else return this}}get(e){if(re(e))return this.value;{const n=ee(e),r=this.children.get(n);return r?r.get(Te(e)):null}}setTree(e,n){if(re(e))return n;{const r=ee(e),s=(this.children.get(r)||new Ee(null)).setTree(Te(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ee(this.value,o)}}fold(e){return this.fold_(fe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_($e(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,fe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(re(e))return null;{const s=ee(e),o=this.children.get(s);return o?o.findOnPath_(Te(e),$e(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,fe(),n)}foreachOnPath_(e,n,r){if(re(e))return this;{this.value&&r(n,this.value);const i=ee(e),s=this.children.get(i);return s?s.foreachOnPath_(Te(e),$e(n,i),r):new Ee(null)}}foreach(e){this.foreach_(fe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_($e(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Ln{constructor(e){this.writeTree_=e}static empty(){return new Ln(new Ee(null))}}function Ka(t,e,n){if(re(e))return new Ln(new Ee(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=qt(i,e);return s=s.updateChild(o,n),new Ln(t.writeTree_.set(i,s))}else{const i=new Ee(n),s=t.writeTree_.setTree(e,i);return new Ln(s)}}}function $m(t,e,n){let r=t;return Tt(n,(i,s)=>{r=Ka(r,$e(e,i),s)}),r}function vE(t,e){if(re(e))return Ln.empty();{const n=t.writeTree_.setTree(e,new Ee(null));return new Ln(n)}}function Bm(t,e){return vs(t,e)!=null}function vs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(qt(n.path,e)):null}function wE(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Be,(r,i)=>{e.push(new te(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new te(r,i.value))}),e}function fi(t,e){if(re(e))return t;{const n=vs(t,e);return n!=null?new Ln(new Ee(n)):new Ln(t.writeTree_.subtree(e))}}function zm(t){return t.writeTree_.isEmpty()}function Io(t,e){return DC(fe(),t.writeTree_,e)}function DC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(j(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=DC($e(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild($e(t,".priority"),r)),n}}/**
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
 */function $_(t,e){return FC(e,t)}function dL(t,e,n,r,i){j(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ka(t.visibleWrites,e,n)),t.lastWriteId=r}function fL(t,e,n,r){j(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=$m(t.visibleWrites,e,n),t.lastWriteId=r}function pL(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function mL(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);j(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&gL(a,r.path)?i=!1:gn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return _L(t),!0;if(r.snap)t.visibleWrites=vE(t.visibleWrites,r.path);else{const a=r.children;Tt(a,u=>{t.visibleWrites=vE(t.visibleWrites,$e(r.path,u))})}return!0}else return!1}function gL(t,e){if(t.snap)return gn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gn($e(t.path,n),e))return!0;return!1}function _L(t){t.visibleWrites=MC(t.allWrites,yL,fe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function yL(t){return t.visible}function MC(t,e,n){let r=Ln.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)gn(n,o)?(a=qt(n,o),r=Ka(r,a,s.snap)):gn(o,n)&&(a=qt(o,n),r=Ka(r,fe(),s.snap.getChild(a)));else if(s.children){if(gn(n,o))a=qt(n,o),r=$m(r,a,s.children);else if(gn(o,n))if(a=qt(o,n),re(a))r=$m(r,fe(),s.children);else{const u=vo(s.children,ee(a));if(u){const c=u.getChild(Te(a));r=Ka(r,fe(),c)}}}else throw Fo("WriteRecord should have .snap or .children")}}return r}function LC(t,e,n,r,i){if(!r&&!i){const s=vs(t.visibleWrites,e);if(s!=null)return s;{const o=fi(t.visibleWrites,e);if(zm(o))return n;if(n==null&&!Bm(o,fe()))return null;{const a=n||G.EMPTY_NODE;return Io(o,a)}}}else{const s=fi(t.visibleWrites,e);if(!i&&zm(s))return n;if(!i&&n==null&&!Bm(s,fe()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(gn(c.path,e)||gn(e,c.path))},a=MC(t.allWrites,o,e),u=n||G.EMPTY_NODE;return Io(a,u)}}}function vL(t,e,n){let r=G.EMPTY_NODE;const i=vs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Be,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=fi(t.visibleWrites,e);return n.forEachChild(Be,(o,a)=>{const u=Io(fi(s,new ye(o)),a);r=r.updateImmediateChild(o,u)}),wE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=fi(t.visibleWrites,e);return wE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function wL(t,e,n,r,i){j(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=$e(e,n);if(Bm(t.visibleWrites,s))return null;{const o=fi(t.visibleWrites,s);return zm(o)?i.getChild(n):Io(o,i.getChild(n))}}function EL(t,e,n,r){const i=$e(e,n),s=vs(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=fi(t.visibleWrites,i);return Io(o,r.getNode().getImmediateChild(n))}else return null}function TL(t,e){return vs(t.visibleWrites,e)}function IL(t,e,n,r,i,s,o){let a;const u=fi(t.visibleWrites,e),c=vs(u,fe());if(c!=null)a=c;else if(n!=null)a=Io(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=m.getNext();for(;_&&d.length<i;)f(_,r)!==0&&d.push(_),_=m.getNext();return d}else return[]}function SL(){return{visibleWrites:Ln.empty(),allWrites:[],lastWriteId:-1}}function Sh(t,e,n,r){return LC(t.writeTree,t.treePath,e,n,r)}function B_(t,e){return vL(t.writeTree,t.treePath,e)}function EE(t,e,n,r){return wL(t.writeTree,t.treePath,e,n,r)}function Ch(t,e){return TL(t.writeTree,$e(t.treePath,e))}function CL(t,e,n,r,i,s){return IL(t.writeTree,t.treePath,e,n,r,i,s)}function z_(t,e,n){return EL(t.writeTree,t.treePath,e,n)}function VC(t,e){return FC($e(t.treePath,e),t.writeTree)}function FC(t,e){return{treePath:t,writeTree:e}}/**
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
 */class RL{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;j(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),j(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Cl(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Sl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Eo(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Cl(r,e.snapshotNode,i.oldSnap));else throw Fo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class AL{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const UC=new AL;class W_{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new as(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return z_(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ls(this.viewCache_),s=CL(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function kL(t){return{filter:t}}function PL(t,e){j(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function xL(t,e,n,r,i){const s=new RL;let o,a;if(n.type===bn.OVERWRITE){const c=n;c.source.fromUser?o=Wm(t,e,c.path,c.snap,r,i,s):(j(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!re(c.path),o=Rh(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===bn.MERGE){const c=n;c.source.fromUser?o=NL(t,e,c.path,c.children,r,i,s):(j(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Hm(t,e,c.path,c.children,r,i,a,s))}else if(n.type===bn.ACK_USER_WRITE){const c=n;c.revert?o=ML(t,e,c.path,r,i,s):o=OL(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===bn.LISTEN_COMPLETE)o=DL(t,e,n.path,r,s);else throw Fo("Unknown operation type: "+n.type);const u=s.getChanges();return bL(e,o,u),{viewCache:o,changes:u}}function bL(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=jm(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(bC(jm(e)))}}function jC(t,e,n,r,i,s){const o=e.eventCache;if(Ch(r,n)!=null)return e;{let a,u;if(re(n))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ls(e),d=c instanceof G?c:G.EMPTY_NODE,f=B_(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Sh(r,ls(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ee(n);if(c===".priority"){j(wi(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const f=EE(r,n,d,u);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=Te(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=EE(r,n,o.getNode(),u);m!=null?f=o.getNode().getImmediateChild(c).updateChild(d,m):f=o.getNode().getImmediateChild(c)}else f=z_(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,d,i,s):a=o.getNode()}}return Ga(e,a,o.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function Rh(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(re(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const _=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),_,null)}else{const _=ee(n);if(!u.isCompleteForPath(n)&&wi(n)>1)return e;const E=Te(n),x=u.getNode().getImmediateChild(_).updateChild(E,r);_===".priority"?c=d.updatePriority(u.getNode(),x):c=d.updateChild(u.getNode(),_,x,E,UC,null)}const f=OC(e,c,u.isFullyInitialized()||re(n),d.filtersNodes()),m=new W_(i,f,s);return jC(t,f,n,i,m,a)}function Wm(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const d=new W_(i,e,s);if(re(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Ga(e,c,!0,t.filter.filtersNodes());else{const f=ee(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=Ga(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=Te(n),_=a.getNode().getImmediateChild(f);let E;if(re(m))E=r;else{const I=d.getCompleteChild(f);I!=null?N_(m)===".priority"&&I.getChild(SC(m)).isEmpty()?E=I:E=I.updateChild(m,r):E=G.EMPTY_NODE}if(_.equals(E))u=e;else{const I=t.filter.updateChild(a.getNode(),f,E,m,d,o);u=Ga(e,I,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function TE(t,e){return t.eventCache.isCompleteForChild(e)}function NL(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const d=$e(n,u);TE(e,ee(d))&&(a=Wm(t,a,d,c,i,s,o))}),r.foreach((u,c)=>{const d=$e(n,u);TE(e,ee(d))||(a=Wm(t,a,d,c,i,s,o))}),a}function IE(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Hm(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;re(n)?c=r:c=new Ee(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),E=IE(t,_,m);u=Rh(t,u,new ye(f),E,i,s,o,a)}}),c.children.inorderTraversal((f,m)=>{const _=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!_){const E=e.serverCache.getNode().getImmediateChild(f),I=IE(t,E,m);u=Rh(t,u,new ye(f),I,i,s,o,a)}}),u}function OL(t,e,n,r,i,s,o){if(Ch(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(re(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Rh(t,e,n,u.getNode().getChild(n),i,s,a,o);if(re(n)){let c=new Ee(null);return u.getNode().forEachChild(oo,(d,f)=>{c=c.set(new ye(d),f)}),Hm(t,e,n,c,i,s,a,o)}else return e}else{let c=new Ee(null);return r.foreach((d,f)=>{const m=$e(n,d);u.isCompleteForPath(m)&&(c=c.set(d,u.getNode().getChild(m)))}),Hm(t,e,n,c,i,s,a,o)}}function DL(t,e,n,r,i){const s=e.serverCache,o=OC(e,s.getNode(),s.isFullyInitialized()||re(n),s.isFiltered());return jC(t,o,n,r,UC,i)}function ML(t,e,n,r,i,s){let o;if(Ch(r,n)!=null)return e;{const a=new W_(r,e,i),u=e.eventCache.getNode();let c;if(re(n)||ee(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Sh(r,ls(e));else{const f=e.serverCache.getNode();j(f instanceof G,"serverChildren would be complete if leaf node"),d=B_(r,f)}d=d,c=t.filter.updateFullNode(u,d,s)}else{const d=ee(n);let f=z_(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=u.getImmediateChild(d)),f!=null?c=t.filter.updateChild(u,d,f,Te(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,G.EMPTY_NODE,Te(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Sh(r,ls(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Ch(r,fe())!=null,Ga(e,c,o,t.filter.filtersNodes())}}/**
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
 */class LL{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new L_(r.getIndex()),s=eL(r);this.processor_=kL(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(G.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(G.EMPTY_NODE,a.getNode(),null),d=new as(u,o.isFullyInitialized(),i.filtersNodes()),f=new as(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=pd(f,d),this.eventGenerator_=new aL(this.query_)}get query(){return this.query_}}function VL(t){return t.viewCache_.serverCache.getNode()}function FL(t,e){const n=ls(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(ee(e)).isEmpty())?n.getChild(e):null}function SE(t){return t.eventRegistrations_.length===0}function UL(t,e){t.eventRegistrations_.push(e)}function CE(t,e,n){const r=[];if(n){j(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function RE(t,e,n,r){e.type===bn.MERGE&&e.source.queryId!==null&&(j(ls(t.viewCache_),"We should always have a full cache before handling merges"),j(jm(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=xL(t.processor_,i,e,n,r);return PL(t.processor_,s.viewCache),j(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,$C(t,s.changes,s.viewCache.eventCache.getNode(),null)}function jL(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Be,(s,o)=>{r.push(Eo(s,o))}),n.isFullyInitialized()&&r.push(bC(n.getNode())),$C(t,r,n.getNode(),e)}function $C(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return lL(t.eventGenerator_,e,n,i)}/**
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
 */let Ah;class $L{constructor(){this.views=new Map}}function BL(t){j(!Ah,"__referenceConstructor has already been defined"),Ah=t}function zL(){return j(Ah,"Reference.ts has not been loaded"),Ah}function WL(t){return t.views.size===0}function H_(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return j(s!=null,"SyncTree gave us an op for an invalid query."),RE(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(RE(o,e,n,r));return s}}function HL(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Sh(n,i?r:null),u=!1;a?u=!0:r instanceof G?(a=B_(n,r),u=!1):(a=G.EMPTY_NODE,u=!1);const c=pd(new as(a,u,!1),new as(r,i,!1));return new LL(e,c)}return o}function qL(t,e,n,r,i,s){const o=HL(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),UL(o,n),jL(o,n)}function GL(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Ei(t);if(i==="default")for(const[u,c]of t.views.entries())o=o.concat(CE(c,n,r)),SE(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||s.push(c.query));else{const u=t.views.get(i);u&&(o=o.concat(CE(u,n,r)),SE(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!Ei(t)&&s.push(new(zL())(e._repo,e._path)),{removed:s,events:o}}function BC(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ao(t,e){let n=null;for(const r of t.views.values())n=n||FL(r,e);return n}function zC(t,e){if(e._queryParams.loadsAllData())return md(t);{const r=e._queryIdentifier;return t.views.get(r)}}function WC(t,e){return zC(t,e)!=null}function Ei(t){return md(t)!=null}function md(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let kh;function KL(t){j(!kh,"__referenceConstructor has already been defined"),kh=t}function QL(){return j(kh,"Reference.ts has not been loaded"),kh}let YL=1;class AE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ee(null),this.pendingWriteTree_=SL(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function HC(t,e,n,r,i){return dL(t.pendingWriteTree_,e,n,r,i),i?$o(t,new os(F_(),e,n)):[]}function XL(t,e,n,r){fL(t.pendingWriteTree_,e,n,r);const i=Ee.fromObject(n);return $o(t,new To(F_(),e,i))}function ei(t,e,n=!1){const r=pL(t.pendingWriteTree_,e);if(mL(t.pendingWriteTree_,e)){let s=new Ee(null);return r.snap!=null?s=s.set(fe(),!0):Tt(r.children,o=>{s=s.set(new ye(o),!0)}),$o(t,new Ih(r.path,s,n))}else return[]}function gd(t,e,n){return $o(t,new os(U_(),e,n))}function JL(t,e,n){const r=Ee.fromObject(n);return $o(t,new To(U_(),e,r))}function ZL(t,e){return $o(t,new Al(U_(),e))}function e4(t,e,n){const r=G_(t,n);if(r){const i=K_(r),s=i.path,o=i.queryId,a=qt(s,e),u=new Al(j_(o),a);return Q_(t,s,u)}else return[]}function qm(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||WC(o,e))){const u=GL(o,e,n,r);WL(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=u.removed;if(a=u.events,!i){const d=c.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(m,_)=>Ei(_));if(d&&!f){const m=t.syncPointTree_.subtree(s);if(!m.isEmpty()){const _=r4(m);for(let E=0;E<_.length;++E){const I=_[E],x=I.query,T=KC(t,I);t.listenProvider_.startListening(Qa(x),Ph(t,x),T.hashFn,T.onComplete)}}}!f&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Qa(e),null):c.forEach(m=>{const _=t.queryToTagMap.get(_d(m));t.listenProvider_.stopListening(Qa(m),_)}))}i4(t,c)}return a}function t4(t,e,n,r){const i=G_(t,r);if(i!=null){const s=K_(i),o=s.path,a=s.queryId,u=qt(o,e),c=new os(j_(a),u,n);return Q_(t,o,c)}else return[]}function n4(t,e,n,r){const i=G_(t,r);if(i){const s=K_(i),o=s.path,a=s.queryId,u=qt(o,e),c=Ee.fromObject(n),d=new To(j_(a),u,c);return Q_(t,o,d)}else return[]}function kE(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(m,_)=>{const E=qt(m,i);s=s||ao(_,E),o=o||Ei(_)});let a=t.syncPointTree_.get(i);a?(o=o||Ei(a),s=s||ao(a,fe())):(a=new $L,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=G.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,E)=>{const I=ao(E,fe());I&&(s=s.updateImmediateChild(_,I))}));const c=WC(a,e);if(!c&&!e._queryParams.loadsAllData()){const m=_d(e);j(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const _=s4();t.queryToTagMap.set(m,_),t.tagToQueryMap.set(_,m)}const d=$_(t.pendingWriteTree_,i);let f=qL(a,e,n,d,s,u);if(!c&&!o&&!r){const m=zC(a,e);f=f.concat(o4(t,e,m))}return f}function q_(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=qt(o,e),c=ao(a,u);if(c)return c});return LC(i,e,s,n,!0)}function $o(t,e){return qC(e,t.syncPointTree_,null,$_(t.pendingWriteTree_,fe()))}function qC(t,e,n,r){if(re(t.path))return GC(t,e,n,r);{const i=e.get(fe());n==null&&i!=null&&(n=ao(i,fe()));let s=[];const o=ee(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,d=VC(r,o);s=s.concat(qC(a,u,c,d))}return i&&(s=s.concat(H_(i,t,r,n))),s}}function GC(t,e,n,r){const i=e.get(fe());n==null&&i!=null&&(n=ao(i,fe()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=VC(r,o),d=t.operationForChild(o);d&&(s=s.concat(GC(d,a,u,c)))}),i&&(s=s.concat(H_(i,t,r,n))),s}function KC(t,e){const n=e.query,r=Ph(t,n);return{hashFn:()=>(VL(e)||G.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?e4(t,n._path,r):ZL(t,n._path);{const s=JD(i,n);return qm(t,n,null,s)}}}}function Ph(t,e){const n=_d(e);return t.queryToTagMap.get(n)}function _d(t){return t._path.toString()+"$"+t._queryIdentifier}function G_(t,e){return t.tagToQueryMap.get(e)}function K_(t){const e=t.indexOf("$");return j(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ye(t.substr(0,e))}}function Q_(t,e,n){const r=t.syncPointTree_.get(e);j(r,"Missing sync point for query tag that we're tracking");const i=$_(t.pendingWriteTree_,e);return H_(r,n,i,null)}function r4(t){return t.fold((e,n,r)=>{if(n&&Ei(n))return[md(n)];{let i=[];return n&&(i=BC(n)),Tt(r,(s,o)=>{i=i.concat(o)}),i}})}function Qa(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(QL())(t._repo,t._path):t}function i4(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=_d(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function s4(){return YL++}function o4(t,e,n){const r=e._path,i=Ph(t,e),s=KC(t,n),o=t.listenProvider_.startListening(Qa(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)j(!Ei(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,d,f)=>{if(!re(c)&&d&&Ei(d))return[md(d).query];{let m=[];return d&&(m=m.concat(BC(d).map(_=>_.query))),Tt(f,(_,E)=>{m=m.concat(E)}),m}});for(let c=0;c<u.length;++c){const d=u[c];t.listenProvider_.stopListening(Qa(d),Ph(t,d))}}return o}/**
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
 */class Y_{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Y_(n)}node(){return this.node_}}class X_{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=$e(this.path_,e);return new X_(this.syncTree_,n)}node(){return q_(this.syncTree_,this.path_)}}const a4=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},PE=function(t,e,n){if(!t||typeof t!="object")return t;if(j(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return l4(t[".sv"],e,n);if(typeof t[".sv"]=="object")return u4(t[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},l4=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:j(!1,"Unexpected server value: "+t)}},u4=function(t,e,n){t.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&j(!1,"Unexpected increment value: "+r);const i=e.node();if(j(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},QC=function(t,e,n,r){return J_(e,new X_(n,t),r)},YC=function(t,e,n){return J_(t,new Y_(e),n)};function J_(t,e,n){const r=t.getPriority().val(),i=PE(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=PE(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new rt(a,ot(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new rt(i))),o.forEachChild(Be,(a,u)=>{const c=J_(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Z_{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ey(t,e){let n=e instanceof ye?e:new ye(e),r=t,i=ee(n);for(;i!==null;){const s=vo(r.node.children,i)||{children:{},childCount:0};r=new Z_(i,r,s),n=Te(n),i=ee(n)}return r}function Bo(t){return t.node.value}function XC(t,e){t.node.value=e,Gm(t)}function JC(t){return t.node.childCount>0}function c4(t){return Bo(t)===void 0&&!JC(t)}function yd(t,e){Tt(t.node.children,(n,r)=>{e(new Z_(n,t,r))})}function ZC(t,e,n,r){n&&!r&&e(t),yd(t,i=>{ZC(i,e,!0,r)}),n&&r&&e(t)}function h4(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function nu(t){return new ye(t.parent===null?t.name:nu(t.parent)+"/"+t.name)}function Gm(t){t.parent!==null&&d4(t.parent,t.name,t)}function d4(t,e,n){const r=c4(n),i=sr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Gm(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Gm(t))}/**
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
 */const f4=/[\[\].#$\/\u0000-\u001F\u007F]/,p4=/[\[\].#$\u0000-\u001F\u007F]/,Tp=10*1024*1024,ty=function(t){return typeof t=="string"&&t.length!==0&&!f4.test(t)},eR=function(t){return typeof t=="string"&&t.length!==0&&!p4.test(t)},m4=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),eR(t)},g4=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!A_(t)||t&&typeof t=="object"&&sr(t,".sv")},_4=function(t,e,n,r){vd(sd(t,"value"),e,n)},vd=function(t,e,n){const r=n instanceof ye?new NM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ji(r));if(typeof e=="function")throw new Error(t+"contains a function "+ji(r)+" with contents = "+e.toString());if(A_(e))throw new Error(t+"contains "+e.toString()+" "+ji(r));if(typeof e=="string"&&e.length>Tp/3&&od(e)>Tp)throw new Error(t+"contains a string greater than "+Tp+" utf8 bytes "+ji(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Tt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ty(o)))throw new Error(t+" contains an invalid key ("+o+") "+ji(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);OM(r,o),vd(t,a,r),DM(r)}),i&&s)throw new Error(t+' contains ".value" child '+ji(r)+" in addition to actual children.")}},y4=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Il(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!ty(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(bM);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&gn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},v4=function(t,e,n,r){const i=sd(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Tt(e,(o,a)=>{const u=new ye(o);if(vd(i,a,$e(n,u)),N_(u)===".priority"&&!g4(a))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(u)}),y4(i,s)},tR=function(t,e,n,r){if(!eR(n))throw new Error(sd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},w4=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),tR(t,e,n)},nR=function(t,e){if(ee(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},E4=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ty(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!m4(n))throw new Error(sd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class T4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!O_(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function rR(t,e,n){wd(t,n),iR(t,r=>O_(r,e))}function Fn(t,e,n){wd(t,n),iR(t,r=>gn(r,e)||gn(e,r))}function iR(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(I4(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function I4(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ha&&gt("event: "+n.toString()),jo(r)}}}/**
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
 */const S4="repo_interrupt",C4=25;class R4{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new T4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Th(),this.transactionQueueTree_=new Z_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function A4(t,e,n){if(t.stats_=x_(t.repoInfo_),t.forceRestClient_||nM())t.server_=new Eh(t.repoInfo_,(r,i,s,o)=>{xE(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>bE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{at(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Cr(t.repoInfo_,e,(r,i,s,o)=>{xE(t,r,i,s,o)},r=>{bE(t,r)},r=>{P4(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=aM(t.repoInfo_,()=>new oL(t.stats_,t.server_)),t.infoData_=new tL,t.infoSyncTree_=new AE({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=gd(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ny(t,"connected",!1),t.serverSyncTree_=new AE({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);Fn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function k4(t){const n=t.infoData_.getNode(new ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ed(t){return a4({timestamp:k4(t)})}function xE(t,e,n,r,i){t.dataUpdateCount++;const s=new ye(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=ch(n,c=>ot(c));o=n4(t.serverSyncTree_,s,u,i)}else{const u=ot(n);o=t4(t.serverSyncTree_,s,u,i)}else if(r){const u=ch(n,c=>ot(c));o=JL(t.serverSyncTree_,s,u)}else{const u=ot(n);o=gd(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=So(t,s)),Fn(t.eventQueue_,a,o)}function bE(t,e){ny(t,"connected",e),e===!1&&N4(t)}function P4(t,e){Tt(e,(n,r)=>{ny(t,n,r)})}function ny(t,e,n){const r=new ye("/.info/"+e),i=ot(n);t.infoData_.updateSnapshot(r,i);const s=gd(t.infoSyncTree_,r,i);Fn(t.eventQueue_,r,s)}function ry(t){return t.nextWriteId_++}function x4(t,e,n,r,i){Td(t,"set",{path:e.toString(),value:n,priority:r});const s=Ed(t),o=ot(n,r),a=q_(t.serverSyncTree_,e),u=YC(o,a,s),c=ry(t),d=HC(t.serverSyncTree_,e,u,c,!0);wd(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(m,_)=>{const E=m==="ok";E||$t("set at "+e+" failed: "+m);const I=ei(t.serverSyncTree_,c,!E);Fn(t.eventQueue_,e,I),Km(t,i,m,_)});const f=sy(t,e);So(t,f),Fn(t.eventQueue_,f,[])}function b4(t,e,n,r){Td(t,"update",{path:e.toString(),value:n});let i=!0;const s=Ed(t),o={};if(Tt(n,(a,u)=>{i=!1,o[a]=QC($e(e,a),ot(u),t.serverSyncTree_,s)}),i)gt("update() called with empty data.  Don't do anything."),Km(t,r,"ok",void 0);else{const a=ry(t),u=XL(t.serverSyncTree_,e,o,a);wd(t.eventQueue_,u),t.server_.merge(e.toString(),n,(c,d)=>{const f=c==="ok";f||$t("update at "+e+" failed: "+c);const m=ei(t.serverSyncTree_,a,!f),_=m.length>0?So(t,e):e;Fn(t.eventQueue_,_,m),Km(t,r,c,d)}),Tt(n,c=>{const d=sy(t,$e(e,c));So(t,d)}),Fn(t.eventQueue_,e,[])}}function N4(t){Td(t,"onDisconnectEvents");const e=Ed(t),n=Th();Um(t.onDisconnect_,fe(),(i,s)=>{const o=QC(i,s,t.serverSyncTree_,e);NC(n,i,o)});let r=[];Um(n,fe(),(i,s)=>{r=r.concat(gd(t.serverSyncTree_,i,s));const o=sy(t,i);So(t,o)}),t.onDisconnect_=Th(),Fn(t.eventQueue_,fe(),r)}function O4(t,e,n){let r;ee(e._path)===".info"?r=kE(t.infoSyncTree_,e,n):r=kE(t.serverSyncTree_,e,n),rR(t.eventQueue_,e._path,r)}function D4(t,e,n){let r;ee(e._path)===".info"?r=qm(t.infoSyncTree_,e,n):r=qm(t.serverSyncTree_,e,n),rR(t.eventQueue_,e._path,r)}function M4(t){t.persistentConnection_&&t.persistentConnection_.interrupt(S4)}function Td(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),gt(n,...e)}function Km(t,e,n,r){e&&jo(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function sR(t,e,n){return q_(t.serverSyncTree_,e,n)||G.EMPTY_NODE}function iy(t,e=t.transactionQueueTree_){if(e||Id(t,e),Bo(e)){const n=aR(t,e);j(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&L4(t,nu(e),n)}else JC(e)&&yd(e,n=>{iy(t,n)})}function L4(t,e,n){const r=n.map(c=>c.currentWriteId),i=sR(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];j(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=qt(e,d.path);s=s.updateChild(f,d.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{Td(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(ei(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Id(t,ey(t.transactionQueueTree_,e)),iy(t,t.transactionQueueTree_),Fn(t.eventQueue_,e,d);for(let m=0;m<f.length;m++)jo(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{$t("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}So(t,e)}},o)}function So(t,e){const n=oR(t,e),r=nu(n),i=aR(t,n);return V4(t,i,r),r}function V4(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=qt(n,u.path);let d=!1,f;if(j(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,f=u.abortReason,i=i.concat(ei(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=C4)d=!0,f="maxretry",i=i.concat(ei(t.serverSyncTree_,u.currentWriteId,!0));else{const m=sR(t,u.path,o);u.currentInputSnapshot=m;const _=e[a].update(m.val());if(_!==void 0){vd("transaction failed: Data returned ",_,u.path);let E=ot(_);typeof _=="object"&&_!=null&&sr(_,".priority")||(E=E.updatePriority(m.getPriority()));const x=u.currentWriteId,T=Ed(t),v=YC(E,m,T);u.currentOutputSnapshotRaw=E,u.currentOutputSnapshotResolved=v,u.currentWriteId=ry(t),o.splice(o.indexOf(x),1),i=i.concat(HC(t.serverSyncTree_,u.path,v,u.currentWriteId,u.applyLocally)),i=i.concat(ei(t.serverSyncTree_,x,!0))}else d=!0,f="nodata",i=i.concat(ei(t.serverSyncTree_,u.currentWriteId,!0))}Fn(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Id(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)jo(r[a]);iy(t,t.transactionQueueTree_)}function oR(t,e){let n,r=t.transactionQueueTree_;for(n=ee(e);n!==null&&Bo(r)===void 0;)r=ey(r,n),e=Te(e),n=ee(e);return r}function aR(t,e){const n=[];return lR(t,e,n),n.sort((r,i)=>r.order-i.order),n}function lR(t,e,n){const r=Bo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);yd(e,i=>{lR(t,i,n)})}function Id(t,e){const n=Bo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,XC(e,n.length>0?n:void 0)}yd(e,r=>{Id(t,r)})}function sy(t,e){const n=nu(oR(t,e)),r=ey(t.transactionQueueTree_,e);return h4(r,i=>{Ip(t,i)}),Ip(t,r),ZC(r,i=>{Ip(t,i)}),n}function Ip(t,e){const n=Bo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(j(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(j(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ei(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?XC(e,void 0):n.length=s+1,Fn(t.eventQueue_,nu(e),i);for(let o=0;o<r.length;o++)jo(r[o])}}/**
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
 */function F4(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function U4(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):$t(`Invalid query segment '${n}' in query '${t}'`)}return e}const NE=function(t,e){const n=j4(t),r=n.namespace;n.domain==="firebase.com"&&Nr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Nr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||GD();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new mC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ye(n.pathString)}},j4=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(i=F4(t.substring(d,f)));const m=U4(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const E=e.indexOf(".");r=e.substring(0,E).toLowerCase(),n=e.substring(E+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class $4{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+at(this.snapshot.exportVal())}}class B4{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class z4{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return j(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class oy{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return re(this._path)?null:N_(this._path)}get ref(){return new xi(this._repo,this._path)}get _queryIdentifier(){const e=_E(this._queryParams),n=k_(e);return n==="{}"?"default":n}get _queryObject(){return _E(this._queryParams)}isEqual(e){if(e=be(e),!(e instanceof oy))return!1;const n=this._repo===e._repo,r=O_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+xM(this._path)}}class xi extends oy{constructor(e,n){super(e,n,new V_,!1)}get parent(){const e=SC(this._path);return e===null?null:new xi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class xh{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ye(e),r=Qm(this.ref,e);return new xh(this._node.getChild(n),r,Be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new xh(i,Qm(this.ref,r),Be)))}hasChild(e){const n=new ye(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Zu(t,e){return t=be(t),t._checkNotDeleted("ref"),e!==void 0?Qm(t._root,e):t._root}function Qm(t,e){return t=be(t),ee(t._path)===null?w4("child","path",e):tR("child","path",e),new xi(t._repo,$e(t._path,e))}function W4(t){return nR("remove",t._path),uR(t,null)}function uR(t,e){t=be(t),nR("set",t._path),_4("set",e,t._path);const n=new ql;return x4(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function H4(t,e){v4("update",e,t._path);const n=new ql;return b4(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class ay{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new $4("value",this,new xh(e.snapshotNode,new xi(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new B4(this,e,n):null}matches(e){return e instanceof ay?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function q4(t,e,n,r,i){const s=new z4(n,void 0),o=new ay(s);return O4(t._repo,t,o),()=>D4(t._repo,t,o)}function G4(t,e,n,r){return q4(t,"value",e)}BL(xi);KL(xi);/**
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
 */const K4="FIREBASE_DATABASE_EMULATOR_HOST",Ym={};let Q4=!1;function Y4(t,e,n,r){t.repoInfo_=new mC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function X4(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Nr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),gt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=NE(s,i),a=o.repoInfo,u;typeof process<"u"&&Zw&&(u=Zw[K4]),u?(s=`http://${u}?ns=${a.namespace}`,o=NE(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new iM(t.name,t.options,e);E4("Invalid Firebase Database URL",o),re(o.path)||Nr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Z4(a,t,c,new rM(t.name,n));return new eV(d,t)}function J4(t,e){const n=Ym[e];(!n||n[t.key]!==t)&&Nr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),M4(t),delete n[t.key]}function Z4(t,e,n,r){let i=Ym[e.name];i||(i={},Ym[e.name]=i);let s=i[t.toURLString()];return s&&Nr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new R4(t,Q4,n,r),i[t.toURLString()]=s,s}class eV{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(A4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xi(this._repo,fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(J4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Nr("Cannot call "+e+" on a deleted database.")}}function tV(t=ld(),e){const n=Kl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=p_("database");r&&nV(n,...r)}return n}function nV(t,e,n,r={}){t=be(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Nr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Nr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Rc(Rc.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:m_(r.mockUserToken,t.app.options.projectId);s=new Rc(o)}Y4(i,e,n,s)}/**
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
 */function rV(t){$D(Pi),vi(new xr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return X4(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),yn(eE,tE,t),yn(eE,tE,"esm2017")}Cr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Cr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};rV();var OE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qi,cR;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function S(){}S.prototype=y.prototype,w.D=y.prototype,w.prototype=new S,w.prototype.constructor=w,w.C=function(R,k,P){for(var A=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)A[ct-2]=arguments[ct];return y.prototype[k].apply(R,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,S){S||(S=0);var R=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)R[k]=y.charCodeAt(S++)|y.charCodeAt(S++)<<8|y.charCodeAt(S++)<<16|y.charCodeAt(S++)<<24;else for(k=0;16>k;++k)R[k]=y[S++]|y[S++]<<8|y[S++]<<16|y[S++]<<24;y=w.g[0],S=w.g[1],k=w.g[2];var P=w.g[3],A=y+(P^S&(k^P))+R[0]+3614090360&4294967295;y=S+(A<<7&4294967295|A>>>25),A=P+(k^y&(S^k))+R[1]+3905402710&4294967295,P=y+(A<<12&4294967295|A>>>20),A=k+(S^P&(y^S))+R[2]+606105819&4294967295,k=P+(A<<17&4294967295|A>>>15),A=S+(y^k&(P^y))+R[3]+3250441966&4294967295,S=k+(A<<22&4294967295|A>>>10),A=y+(P^S&(k^P))+R[4]+4118548399&4294967295,y=S+(A<<7&4294967295|A>>>25),A=P+(k^y&(S^k))+R[5]+1200080426&4294967295,P=y+(A<<12&4294967295|A>>>20),A=k+(S^P&(y^S))+R[6]+2821735955&4294967295,k=P+(A<<17&4294967295|A>>>15),A=S+(y^k&(P^y))+R[7]+4249261313&4294967295,S=k+(A<<22&4294967295|A>>>10),A=y+(P^S&(k^P))+R[8]+1770035416&4294967295,y=S+(A<<7&4294967295|A>>>25),A=P+(k^y&(S^k))+R[9]+2336552879&4294967295,P=y+(A<<12&4294967295|A>>>20),A=k+(S^P&(y^S))+R[10]+4294925233&4294967295,k=P+(A<<17&4294967295|A>>>15),A=S+(y^k&(P^y))+R[11]+2304563134&4294967295,S=k+(A<<22&4294967295|A>>>10),A=y+(P^S&(k^P))+R[12]+1804603682&4294967295,y=S+(A<<7&4294967295|A>>>25),A=P+(k^y&(S^k))+R[13]+4254626195&4294967295,P=y+(A<<12&4294967295|A>>>20),A=k+(S^P&(y^S))+R[14]+2792965006&4294967295,k=P+(A<<17&4294967295|A>>>15),A=S+(y^k&(P^y))+R[15]+1236535329&4294967295,S=k+(A<<22&4294967295|A>>>10),A=y+(k^P&(S^k))+R[1]+4129170786&4294967295,y=S+(A<<5&4294967295|A>>>27),A=P+(S^k&(y^S))+R[6]+3225465664&4294967295,P=y+(A<<9&4294967295|A>>>23),A=k+(y^S&(P^y))+R[11]+643717713&4294967295,k=P+(A<<14&4294967295|A>>>18),A=S+(P^y&(k^P))+R[0]+3921069994&4294967295,S=k+(A<<20&4294967295|A>>>12),A=y+(k^P&(S^k))+R[5]+3593408605&4294967295,y=S+(A<<5&4294967295|A>>>27),A=P+(S^k&(y^S))+R[10]+38016083&4294967295,P=y+(A<<9&4294967295|A>>>23),A=k+(y^S&(P^y))+R[15]+3634488961&4294967295,k=P+(A<<14&4294967295|A>>>18),A=S+(P^y&(k^P))+R[4]+3889429448&4294967295,S=k+(A<<20&4294967295|A>>>12),A=y+(k^P&(S^k))+R[9]+568446438&4294967295,y=S+(A<<5&4294967295|A>>>27),A=P+(S^k&(y^S))+R[14]+3275163606&4294967295,P=y+(A<<9&4294967295|A>>>23),A=k+(y^S&(P^y))+R[3]+4107603335&4294967295,k=P+(A<<14&4294967295|A>>>18),A=S+(P^y&(k^P))+R[8]+1163531501&4294967295,S=k+(A<<20&4294967295|A>>>12),A=y+(k^P&(S^k))+R[13]+2850285829&4294967295,y=S+(A<<5&4294967295|A>>>27),A=P+(S^k&(y^S))+R[2]+4243563512&4294967295,P=y+(A<<9&4294967295|A>>>23),A=k+(y^S&(P^y))+R[7]+1735328473&4294967295,k=P+(A<<14&4294967295|A>>>18),A=S+(P^y&(k^P))+R[12]+2368359562&4294967295,S=k+(A<<20&4294967295|A>>>12),A=y+(S^k^P)+R[5]+4294588738&4294967295,y=S+(A<<4&4294967295|A>>>28),A=P+(y^S^k)+R[8]+2272392833&4294967295,P=y+(A<<11&4294967295|A>>>21),A=k+(P^y^S)+R[11]+1839030562&4294967295,k=P+(A<<16&4294967295|A>>>16),A=S+(k^P^y)+R[14]+4259657740&4294967295,S=k+(A<<23&4294967295|A>>>9),A=y+(S^k^P)+R[1]+2763975236&4294967295,y=S+(A<<4&4294967295|A>>>28),A=P+(y^S^k)+R[4]+1272893353&4294967295,P=y+(A<<11&4294967295|A>>>21),A=k+(P^y^S)+R[7]+4139469664&4294967295,k=P+(A<<16&4294967295|A>>>16),A=S+(k^P^y)+R[10]+3200236656&4294967295,S=k+(A<<23&4294967295|A>>>9),A=y+(S^k^P)+R[13]+681279174&4294967295,y=S+(A<<4&4294967295|A>>>28),A=P+(y^S^k)+R[0]+3936430074&4294967295,P=y+(A<<11&4294967295|A>>>21),A=k+(P^y^S)+R[3]+3572445317&4294967295,k=P+(A<<16&4294967295|A>>>16),A=S+(k^P^y)+R[6]+76029189&4294967295,S=k+(A<<23&4294967295|A>>>9),A=y+(S^k^P)+R[9]+3654602809&4294967295,y=S+(A<<4&4294967295|A>>>28),A=P+(y^S^k)+R[12]+3873151461&4294967295,P=y+(A<<11&4294967295|A>>>21),A=k+(P^y^S)+R[15]+530742520&4294967295,k=P+(A<<16&4294967295|A>>>16),A=S+(k^P^y)+R[2]+3299628645&4294967295,S=k+(A<<23&4294967295|A>>>9),A=y+(k^(S|~P))+R[0]+4096336452&4294967295,y=S+(A<<6&4294967295|A>>>26),A=P+(S^(y|~k))+R[7]+1126891415&4294967295,P=y+(A<<10&4294967295|A>>>22),A=k+(y^(P|~S))+R[14]+2878612391&4294967295,k=P+(A<<15&4294967295|A>>>17),A=S+(P^(k|~y))+R[5]+4237533241&4294967295,S=k+(A<<21&4294967295|A>>>11),A=y+(k^(S|~P))+R[12]+1700485571&4294967295,y=S+(A<<6&4294967295|A>>>26),A=P+(S^(y|~k))+R[3]+2399980690&4294967295,P=y+(A<<10&4294967295|A>>>22),A=k+(y^(P|~S))+R[10]+4293915773&4294967295,k=P+(A<<15&4294967295|A>>>17),A=S+(P^(k|~y))+R[1]+2240044497&4294967295,S=k+(A<<21&4294967295|A>>>11),A=y+(k^(S|~P))+R[8]+1873313359&4294967295,y=S+(A<<6&4294967295|A>>>26),A=P+(S^(y|~k))+R[15]+4264355552&4294967295,P=y+(A<<10&4294967295|A>>>22),A=k+(y^(P|~S))+R[6]+2734768916&4294967295,k=P+(A<<15&4294967295|A>>>17),A=S+(P^(k|~y))+R[13]+1309151649&4294967295,S=k+(A<<21&4294967295|A>>>11),A=y+(k^(S|~P))+R[4]+4149444226&4294967295,y=S+(A<<6&4294967295|A>>>26),A=P+(S^(y|~k))+R[11]+3174756917&4294967295,P=y+(A<<10&4294967295|A>>>22),A=k+(y^(P|~S))+R[2]+718787259&4294967295,k=P+(A<<15&4294967295|A>>>17),A=S+(P^(k|~y))+R[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(k+(A<<21&4294967295|A>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+P&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var S=y-this.blockSize,R=this.B,k=this.h,P=0;P<y;){if(k==0)for(;P<=S;)i(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<y;)if(R[k++]=w.charCodeAt(P++),k==this.blockSize){i(this,R),k=0;break}}else for(;P<y;)if(R[k++]=w[P++],k==this.blockSize){i(this,R),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var S=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=S&255,S/=256;for(this.u(w),w=Array(16),y=S=0;4>y;++y)for(var R=0;32>R;R+=8)w[S++]=this.g[y]>>>R&255;return w};function s(w,y){var S=a;return Object.prototype.hasOwnProperty.call(S,w)?S[w]:S[w]=y(w)}function o(w,y){this.h=y;for(var S=[],R=!0,k=w.length-1;0<=k;k--){var P=w[k]|0;R&&P==y||(S[k]=P,R=!1)}this.g=S}var a={};function u(w){return-128<=w&&128>w?s(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return f;if(0>w)return x(c(-w));for(var y=[],S=1,R=0;w>=S;R++)y[R]=w/S|0,S*=4294967296;return new o(y,0)}function d(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return x(d(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(y,8)),R=f,k=0;k<w.length;k+=8){var P=Math.min(8,w.length-k),A=parseInt(w.substring(k,k+P),y);8>P?(P=c(Math.pow(y,P)),R=R.j(P).add(c(A))):(R=R.j(S),R=R.add(c(A)))}return R}var f=u(0),m=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(I(this))return-x(this).m();for(var w=0,y=1,S=0;S<this.g.length;S++){var R=this.i(S);w+=(0<=R?R:4294967296+R)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(E(this))return"0";if(I(this))return"-"+x(this).toString(w);for(var y=c(Math.pow(w,6)),S=this,R="";;){var k=N(S,y).g;S=T(S,k.j(y));var P=((0<S.g.length?S.g[0]:S.h)>>>0).toString(w);if(S=k,E(S))return P+R;for(;6>P.length;)P="0"+P;R=P+R}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function E(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function I(w){return w.h==-1}t.l=function(w){return w=T(this,w),I(w)?-1:E(w)?0:1};function x(w){for(var y=w.g.length,S=[],R=0;R<y;R++)S[R]=~w.g[R];return new o(S,~w.h).add(m)}t.abs=function(){return I(this)?x(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),S=[],R=0,k=0;k<=y;k++){var P=R+(this.i(k)&65535)+(w.i(k)&65535),A=(P>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);R=A>>>16,P&=65535,A&=65535,S[k]=A<<16|P}return new o(S,S[S.length-1]&-2147483648?-1:0)};function T(w,y){return w.add(x(y))}t.j=function(w){if(E(this)||E(w))return f;if(I(this))return I(w)?x(this).j(x(w)):x(x(this).j(w));if(I(w))return x(this.j(x(w)));if(0>this.l(_)&&0>w.l(_))return c(this.m()*w.m());for(var y=this.g.length+w.g.length,S=[],R=0;R<2*y;R++)S[R]=0;for(R=0;R<this.g.length;R++)for(var k=0;k<w.g.length;k++){var P=this.i(R)>>>16,A=this.i(R)&65535,ct=w.i(k)>>>16,or=w.i(k)&65535;S[2*R+2*k]+=A*or,v(S,2*R+2*k),S[2*R+2*k+1]+=P*or,v(S,2*R+2*k+1),S[2*R+2*k+1]+=A*ct,v(S,2*R+2*k+1),S[2*R+2*k+2]+=P*ct,v(S,2*R+2*k+2)}for(R=0;R<y;R++)S[R]=S[2*R+1]<<16|S[2*R];for(R=y;R<2*y;R++)S[R]=0;return new o(S,0)};function v(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function C(w,y){this.g=w,this.h=y}function N(w,y){if(E(y))throw Error("division by zero");if(E(w))return new C(f,f);if(I(w))return y=N(x(w),y),new C(x(y.g),x(y.h));if(I(y))return y=N(w,x(y)),new C(x(y.g),y.h);if(30<w.g.length){if(I(w)||I(y))throw Error("slowDivide_ only works with positive integers.");for(var S=m,R=y;0>=R.l(w);)S=M(S),R=M(R);var k=L(S,1),P=L(R,1);for(R=L(R,2),S=L(S,2);!E(R);){var A=P.add(R);0>=A.l(w)&&(k=k.add(S),P=A),R=L(R,1),S=L(S,1)}return y=T(w,k.j(y)),new C(k,y)}for(k=f;0<=w.l(y);){for(S=Math.max(1,Math.floor(w.m()/y.m())),R=Math.ceil(Math.log(S)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),P=c(S),A=P.j(y);I(A)||0<A.l(w);)S-=R,P=c(S),A=P.j(y);E(P)&&(P=m),k=k.add(P),w=T(w,A)}return new C(k,w)}t.A=function(w){return N(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),S=[],R=0;R<y;R++)S[R]=this.i(R)&w.i(R);return new o(S,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),S=[],R=0;R<y;R++)S[R]=this.i(R)|w.i(R);return new o(S,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),S=[],R=0;R<y;R++)S[R]=this.i(R)^w.i(R);return new o(S,this.h^w.h)};function M(w){for(var y=w.g.length+1,S=[],R=0;R<y;R++)S[R]=w.i(R)<<1|w.i(R-1)>>>31;return new o(S,w.h)}function L(w,y){var S=y>>5;y%=32;for(var R=w.g.length-S,k=[],P=0;P<R;P++)k[P]=0<y?w.i(P+S)>>>y|w.i(P+S+1)<<32-y:w.i(P+S);return new o(k,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,cR=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Qi=o}).apply(typeof OE<"u"?OE:typeof self<"u"?self:typeof window<"u"?window:{});var ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hR,dR,ba,fR,kc,Xm,pR,mR,gR;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ec=="object"&&ec];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var g=0;g<l.length-1;g++){var b=l[g];if(!(b in p))break e;p=p[b]}l=l[l.length-1],g=p[l],h=h(g),h!=g&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,g=!1,b={next:function(){if(!g&&p<l.length){var D=p++;return{value:h(D,l[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,g),l.apply(h,b)}}return function(){return l.apply(h,arguments)}}function m(l,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function _(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function E(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(g,b,D){for(var $=Array(arguments.length-2),we=2;we<arguments.length;we++)$[we-2]=arguments[we];return h.prototype[b].apply(g,$)}}function I(l){const h=l.length;if(0<h){const p=Array(h);for(let g=0;g<h;g++)p[g]=l[g];return p}return[]}function x(l,h){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(u(g)){const b=l.length||0,D=g.length||0;l.length=b+D;for(let $=0;$<D;$++)l[b+$]=g[$]}else l.push(g)}}class T{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(l){return/^[\s\xa0]*$/.test(l)}function C(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function N(l){return N[" "](l),l}N[" "]=function(){};var M=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function L(l,h,p){for(const g in l)h.call(p,l[g],g,l)}function w(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function y(l){const h={};for(const p in l)h[p]=l[p];return h}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,h){let p,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(p in g)l[p]=g[p];for(let D=0;D<S.length;D++)p=S[D],Object.prototype.hasOwnProperty.call(g,p)&&(l[p]=g[p])}}function k(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function P(l){a.setTimeout(()=>{throw l},0)}function A(){var l=Y;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class ct{constructor(){this.h=this.g=null}add(h,p){const g=or.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var or=new T(()=>new Ni,l=>l.reset());class Ni{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ar,B=!1,Y=new ct,Z=()=>{const l=a.Promise.resolve(void 0);ar=()=>{l.then(Ne)}};var Ne=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(p){P(p)}var h=or;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}B=!1};function ve(){this.s=this.s,this.C=this.C}ve.prototype.s=!1,ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function He(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}He.prototype.h=function(){this.defaultPrevented=!0};var lr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function ur(l,h){if(He.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(M){e:{try{N(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:cr[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&ur.aa.h.call(this)}}E(ur,He);var cr={2:"touch",3:"pen",4:"mouse"};ur.prototype.h=function(){ur.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var hr="closure_listenable_"+(1e6*Math.random()|0),Gk=0;function Kk(l,h,p,g,b){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=b,this.key=++Gk,this.da=this.fa=!1}function gu(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function _u(l){this.src=l,this.g={},this.h=0}_u.prototype.add=function(l,h,p,g,b){var D=l.toString();l=this.g[D],l||(l=this.g[D]=[],this.h++);var $=gf(l,h,g,b);return-1<$?(h=l[$],p||(h.fa=!1)):(h=new Kk(h,this.src,D,!!g,b),h.fa=p,l.push(h)),h};function mf(l,h){var p=h.type;if(p in l.g){var g=l.g[p],b=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=b)&&Array.prototype.splice.call(g,b,1),D&&(gu(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function gf(l,h,p,g){for(var b=0;b<l.length;++b){var D=l[b];if(!D.da&&D.listener==h&&D.capture==!!p&&D.ha==g)return b}return-1}var _f="closure_lm_"+(1e6*Math.random()|0),yf={};function mv(l,h,p,g,b){if(Array.isArray(h)){for(var D=0;D<h.length;D++)mv(l,h[D],p,g,b);return null}return p=yv(p),l&&l[hr]?l.K(h,p,c(g)?!!g.capture:!!g,b):Qk(l,h,p,!1,g,b)}function Qk(l,h,p,g,b,D){if(!h)throw Error("Invalid event type");var $=c(b)?!!b.capture:!!b,we=wf(l);if(we||(l[_f]=we=new _u(l)),p=we.add(h,p,g,$,D),p.proxy)return p;if(g=Yk(),p.proxy=g,g.src=l,g.listener=p,l.addEventListener)lr||(b=$),b===void 0&&(b=!1),l.addEventListener(h.toString(),g,b);else if(l.attachEvent)l.attachEvent(_v(h.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Yk(){function l(p){return h.call(l.src,l.listener,p)}const h=Xk;return l}function gv(l,h,p,g,b){if(Array.isArray(h))for(var D=0;D<h.length;D++)gv(l,h[D],p,g,b);else g=c(g)?!!g.capture:!!g,p=yv(p),l&&l[hr]?(l=l.i,h=String(h).toString(),h in l.g&&(D=l.g[h],p=gf(D,p,g,b),-1<p&&(gu(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete l.g[h],l.h--)))):l&&(l=wf(l))&&(h=l.g[h.toString()],l=-1,h&&(l=gf(h,p,g,b)),(p=-1<l?h[l]:null)&&vf(p))}function vf(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[hr])mf(h.i,l);else{var p=l.type,g=l.proxy;h.removeEventListener?h.removeEventListener(p,g,l.capture):h.detachEvent?h.detachEvent(_v(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=wf(h))?(mf(p,l),p.h==0&&(p.src=null,h[_f]=null)):gu(l)}}}function _v(l){return l in yf?yf[l]:yf[l]="on"+l}function Xk(l,h){if(l.da)l=!0;else{h=new ur(h,this);var p=l.listener,g=l.ha||l.src;l.fa&&vf(l),l=p.call(g,h)}return l}function wf(l){return l=l[_f],l instanceof _u?l:null}var Ef="__closure_events_fn_"+(1e9*Math.random()>>>0);function yv(l){return typeof l=="function"?l:(l[Ef]||(l[Ef]=function(h){return l.handleEvent(h)}),l[Ef])}function It(){ve.call(this),this.i=new _u(this),this.M=this,this.F=null}E(It,ve),It.prototype[hr]=!0,It.prototype.removeEventListener=function(l,h,p,g){gv(this,l,h,p,g)};function Mt(l,h){var p,g=l.F;if(g)for(p=[];g;g=g.F)p.push(g);if(l=l.M,g=h.type||h,typeof h=="string")h=new He(h,l);else if(h instanceof He)h.target=h.target||l;else{var b=h;h=new He(g,l),R(h,b)}if(b=!0,p)for(var D=p.length-1;0<=D;D--){var $=h.g=p[D];b=yu($,g,!0,h)&&b}if($=h.g=l,b=yu($,g,!0,h)&&b,b=yu($,g,!1,h)&&b,p)for(D=0;D<p.length;D++)$=h.g=p[D],b=yu($,g,!1,h)&&b}It.prototype.N=function(){if(It.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],g=0;g<p.length;g++)gu(p[g]);delete l.g[h],l.h--}}this.F=null},It.prototype.K=function(l,h,p,g){return this.i.add(String(l),h,!1,p,g)},It.prototype.L=function(l,h,p,g){return this.i.add(String(l),h,!0,p,g)};function yu(l,h,p,g){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,D=0;D<h.length;++D){var $=h[D];if($&&!$.da&&$.capture==p){var we=$.listener,ht=$.ha||$.src;$.fa&&mf(l.i,$),b=we.call(ht,g)!==!1&&b}}return b&&!g.defaultPrevented}function vv(l,h,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function wv(l){l.g=vv(()=>{l.g=null,l.i&&(l.i=!1,wv(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class Jk extends ve{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:wv(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yo(l){ve.call(this),this.h=l,this.g={}}E(Yo,ve);var Ev=[];function Tv(l){L(l.g,function(h,p){this.g.hasOwnProperty(p)&&vf(h)},l),l.g={}}Yo.prototype.N=function(){Yo.aa.N.call(this),Tv(this)},Yo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tf=a.JSON.stringify,Zk=a.JSON.parse,eP=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function If(){}If.prototype.h=null;function Iv(l){return l.h||(l.h=l.i())}function Sv(){}var Xo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sf(){He.call(this,"d")}E(Sf,He);function Cf(){He.call(this,"c")}E(Cf,He);var Oi={},Cv=null;function vu(){return Cv=Cv||new It}Oi.La="serverreachability";function Rv(l){He.call(this,Oi.La,l)}E(Rv,He);function Jo(l){const h=vu();Mt(h,new Rv(h))}Oi.STAT_EVENT="statevent";function Av(l,h){He.call(this,Oi.STAT_EVENT,l),this.stat=h}E(Av,He);function Lt(l){const h=vu();Mt(h,new Av(h,l))}Oi.Ma="timingevent";function kv(l,h){He.call(this,Oi.Ma,l),this.size=h}E(kv,He);function Zo(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function ea(){this.g=!0}ea.prototype.xa=function(){this.g=!1};function tP(l,h,p,g,b,D){l.info(function(){if(l.g)if(D)for(var $="",we=D.split("&"),ht=0;ht<we.length;ht++){var ue=we[ht].split("=");if(1<ue.length){var St=ue[0];ue=ue[1];var Ct=St.split("_");$=2<=Ct.length&&Ct[1]=="type"?$+(St+"="+ue+"&"):$+(St+"=redacted&")}}else $=null;else $=D;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+h+`
`+p+`
`+$})}function nP(l,h,p,g,b,D,$){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+h+`
`+p+`
`+D+" "+$})}function Is(l,h,p,g){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+iP(l,p)+(g?" "+g:"")})}function rP(l,h){l.info(function(){return"TIMEOUT: "+h})}ea.prototype.info=function(){};function iP(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var g=p[l];if(!(2>g.length)){var b=g[1];if(Array.isArray(b)&&!(1>b.length)){var D=b[0];if(D!="noop"&&D!="stop"&&D!="close")for(var $=1;$<b.length;$++)b[$]=""}}}}return Tf(p)}catch{return h}}var wu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pv={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Rf;function Eu(){}E(Eu,If),Eu.prototype.g=function(){return new XMLHttpRequest},Eu.prototype.i=function(){return{}},Rf=new Eu;function Vr(l,h,p,g){this.j=l,this.i=h,this.l=p,this.R=g||1,this.U=new Yo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xv}function xv(){this.i=null,this.g="",this.h=!1}var bv={},Af={};function kf(l,h,p){l.L=1,l.v=Cu(dr(h)),l.m=p,l.P=!0,Nv(l,null)}function Nv(l,h){l.F=Date.now(),Tu(l),l.A=dr(l.v);var p=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),qv(p.i,"t",g),l.C=0,p=l.j.J,l.h=new xv,l.g=c0(l.j,p?h:null,!l.m),0<l.O&&(l.M=new Jk(m(l.Y,l,l.g),l.O)),h=l.U,p=l.g,g=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(Ev[0]=b.toString()),b=Ev);for(var D=0;D<b.length;D++){var $=mv(p,b[D],g||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Jo(),tP(l.i,l.u,l.A,l.l,l.R,l.m)}Vr.prototype.ca=function(l){l=l.target;const h=this.M;h&&fr(l)==3?h.j():this.Y(l)},Vr.prototype.Y=function(l){try{if(l==this.g)e:{const Ct=fr(this.g);var h=this.g.Ba();const Rs=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||Zv(this.g)))){this.J||Ct!=4||h==7||(h==8||0>=Rs?Jo(3):Jo(2)),Pf(this);var p=this.g.Z();this.X=p;t:if(Ov(this)){var g=Zv(this.g);l="";var b=g.length,D=fr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Di(this),ta(this);var $="";break t}this.h.i=new a.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,l+=this.h.i.decode(g[h],{stream:!(D&&h==b-1)});g.length=0,this.h.g+=l,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=p==200,nP(this.i,this.u,this.A,this.l,this.R,Ct,p),this.o){if(this.T&&!this.K){t:{if(this.g){var we,ht=this.g;if((we=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(we)){var ue=we;break t}}ue=null}if(p=ue)Is(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xf(this,p);else{this.o=!1,this.s=3,Lt(12),Di(this),ta(this);break e}}if(this.P){p=!0;let Cn;for(;!this.J&&this.C<$.length;)if(Cn=sP(this,$),Cn==Af){Ct==4&&(this.s=4,Lt(14),p=!1),Is(this.i,this.l,null,"[Incomplete Response]");break}else if(Cn==bv){this.s=4,Lt(15),Is(this.i,this.l,$,"[Invalid Chunk]"),p=!1;break}else Is(this.i,this.l,Cn,null),xf(this,Cn);if(Ov(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||$.length!=0||this.h.h||(this.s=1,Lt(16),p=!1),this.o=this.o&&p,!p)Is(this.i,this.l,$,"[Invalid Chunked Response]"),Di(this),ta(this);else if(0<$.length&&!this.W){this.W=!0;var St=this.j;St.g==this&&St.ba&&!St.M&&(St.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Lf(St),St.M=!0,Lt(11))}}else Is(this.i,this.l,$,null),xf(this,$);Ct==4&&Di(this),this.o&&!this.J&&(Ct==4?o0(this.j,this):(this.o=!1,Tu(this)))}else TP(this.g),p==400&&0<$.indexOf("Unknown SID")?(this.s=3,Lt(12)):(this.s=0,Lt(13)),Di(this),ta(this)}}}catch{}finally{}};function Ov(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function sP(l,h){var p=l.C,g=h.indexOf(`
`,p);return g==-1?Af:(p=Number(h.substring(p,g)),isNaN(p)?bv:(g+=1,g+p>h.length?Af:(h=h.slice(g,g+p),l.C=g+p,h)))}Vr.prototype.cancel=function(){this.J=!0,Di(this)};function Tu(l){l.S=Date.now()+l.I,Dv(l,l.I)}function Dv(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Zo(m(l.ba,l),h)}function Pf(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Vr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(rP(this.i,this.A),this.L!=2&&(Jo(),Lt(17)),Di(this),this.s=2,ta(this)):Dv(this,this.S-l)};function ta(l){l.j.G==0||l.J||o0(l.j,l)}function Di(l){Pf(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,Tv(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function xf(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||bf(p.h,l))){if(!l.K&&bf(p.h,l)&&p.G==3){try{var g=p.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)xu(p),ku(p);else break e;Mf(p),Lt(18)}}else p.za=b[1],0<p.za-p.T&&37500>b[2]&&p.F&&p.v==0&&!p.C&&(p.C=Zo(m(p.Za,p),6e3));if(1>=Vv(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Li(p,11)}else if((l.K||p.g==l)&&xu(p),!v(h))for(b=p.Da.g.parse(h),h=0;h<b.length;h++){let ue=b[h];if(p.T=ue[0],ue=ue[1],p.G==2)if(ue[0]=="c"){p.K=ue[1],p.ia=ue[2];const St=ue[3];St!=null&&(p.la=St,p.j.info("VER="+p.la));const Ct=ue[4];Ct!=null&&(p.Aa=Ct,p.j.info("SVER="+p.Aa));const Rs=ue[5];Rs!=null&&typeof Rs=="number"&&0<Rs&&(g=1.5*Rs,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const Cn=l.g;if(Cn){const Nu=Cn.g?Cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Nu){var D=g.h;D.g||Nu.indexOf("spdy")==-1&&Nu.indexOf("quic")==-1&&Nu.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Nf(D,D.h),D.h=null))}if(g.D){const Vf=Cn.g?Cn.g.getResponseHeader("X-HTTP-Session-Id"):null;Vf&&(g.ya=Vf,Ce(g.I,g.D,Vf))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var $=l;if(g.qa=u0(g,g.J?g.ia:null,g.W),$.K){Fv(g.h,$);var we=$,ht=g.L;ht&&(we.I=ht),we.B&&(Pf(we),Tu(we)),g.g=$}else i0(g);0<p.i.length&&Pu(p)}else ue[0]!="stop"&&ue[0]!="close"||Li(p,7);else p.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Li(p,7):Df(p):ue[0]!="noop"&&p.l&&p.l.ta(ue),p.v=0)}}Jo(4)}catch{}}var oP=class{constructor(l,h){this.g=l,this.map=h}};function Mv(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Lv(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Vv(l){return l.h?1:l.g?l.g.size:0}function bf(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Nf(l,h){l.g?l.g.add(h):l.h=h}function Fv(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}Mv.prototype.cancel=function(){if(this.i=Uv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Uv(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return I(l.i)}function aP(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,g=0;g<p;g++)h.push(l[g]);return h}h=[],p=0;for(g in l)h[p++]=l[g];return h}function lP(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const g in l)h[p++]=g;return h}}}function jv(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=lP(l),g=aP(l),b=g.length,D=0;D<b;D++)h.call(void 0,g[D],p&&p[D],l)}var $v=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uP(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var g=l[p].indexOf("="),b=null;if(0<=g){var D=l[p].substring(0,g);b=l[p].substring(g+1)}else D=l[p];h(D,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Mi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Mi){this.h=l.h,Iu(this,l.j),this.o=l.o,this.g=l.g,Su(this,l.s),this.l=l.l;var h=l.i,p=new ia;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Bv(this,p),this.m=l.m}else l&&(h=String(l).match($v))?(this.h=!1,Iu(this,h[1]||"",!0),this.o=na(h[2]||""),this.g=na(h[3]||"",!0),Su(this,h[4]),this.l=na(h[5]||"",!0),Bv(this,h[6]||"",!0),this.m=na(h[7]||"")):(this.h=!1,this.i=new ia(null,this.h))}Mi.prototype.toString=function(){var l=[],h=this.j;h&&l.push(ra(h,zv,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(ra(h,zv,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(ra(p,p.charAt(0)=="/"?dP:hP,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",ra(p,pP)),l.join("")};function dr(l){return new Mi(l)}function Iu(l,h,p){l.j=p?na(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Su(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function Bv(l,h,p){h instanceof ia?(l.i=h,mP(l.i,l.h)):(p||(h=ra(h,fP)),l.i=new ia(h,l.h))}function Ce(l,h,p){l.i.set(h,p)}function Cu(l){return Ce(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function na(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ra(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,cP),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function cP(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var zv=/[#\/\?@]/g,hP=/[#\?:]/g,dP=/[#\?]/g,fP=/[#\?@]/g,pP=/#/g;function ia(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function Fr(l){l.g||(l.g=new Map,l.h=0,l.i&&uP(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ia.prototype,t.add=function(l,h){Fr(this),this.i=null,l=Ss(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function Wv(l,h){Fr(l),h=Ss(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Hv(l,h){return Fr(l),h=Ss(l,h),l.g.has(h)}t.forEach=function(l,h){Fr(this),this.g.forEach(function(p,g){p.forEach(function(b){l.call(h,b,g,this)},this)},this)},t.na=function(){Fr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let g=0;g<h.length;g++){const b=l[g];for(let D=0;D<b.length;D++)p.push(h[g])}return p},t.V=function(l){Fr(this);let h=[];if(typeof l=="string")Hv(this,l)&&(h=h.concat(this.g.get(Ss(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return Fr(this),this.i=null,l=Ss(this,l),Hv(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function qv(l,h,p){Wv(l,h),0<p.length&&(l.i=null,l.g.set(Ss(l,h),I(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var g=h[p];const D=encodeURIComponent(String(g)),$=this.V(g);for(g=0;g<$.length;g++){var b=D;$[g]!==""&&(b+="="+encodeURIComponent(String($[g]))),l.push(b)}}return this.i=l.join("&")};function Ss(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function mP(l,h){h&&!l.j&&(Fr(l),l.i=null,l.g.forEach(function(p,g){var b=g.toLowerCase();g!=b&&(Wv(this,g),qv(this,b,p))},l)),l.j=h}function gP(l,h){const p=new ea;if(a.Image){const g=new Image;g.onload=_(Ur,p,"TestLoadImage: loaded",!0,h,g),g.onerror=_(Ur,p,"TestLoadImage: error",!1,h,g),g.onabort=_(Ur,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(Ur,p,"TestLoadImage: timeout",!1,h,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else h(!1)}function _P(l,h){const p=new ea,g=new AbortController,b=setTimeout(()=>{g.abort(),Ur(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:g.signal}).then(D=>{clearTimeout(b),D.ok?Ur(p,"TestPingServer: ok",!0,h):Ur(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),Ur(p,"TestPingServer: error",!1,h)})}function Ur(l,h,p,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(p)}catch{}}function yP(){this.g=new eP}function vP(l,h,p){const g=p||"";try{jv(l,function(b,D){let $=b;c(b)&&($=Tf(b)),h.push(g+D+"="+encodeURIComponent($))})}catch(b){throw h.push(g+"type="+encodeURIComponent("_badmap")),b}}function sa(l){this.l=l.Ub||null,this.j=l.eb||!1}E(sa,If),sa.prototype.g=function(){return new Ru(this.l,this.j)},sa.prototype.i=function(l){return function(){return l}}({});function Ru(l,h){It.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Ru,It),t=Ru.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,aa(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oa(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,aa(this)),this.g&&(this.readyState=3,aa(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gv(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gv(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?oa(this):aa(this),this.readyState==3&&Gv(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,oa(this))},t.Qa=function(l){this.g&&(this.response=l,oa(this))},t.ga=function(){this.g&&oa(this)};function oa(l){l.readyState=4,l.l=null,l.j=null,l.v=null,aa(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function aa(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ru.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Kv(l){let h="";return L(l,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function Of(l,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Kv(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Ce(l,h,p))}function Ve(l){It.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(Ve,It);var wP=/^https?$/i,EP=["POST","PUT"];t=Ve.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Rf.g(),this.v=this.o?Iv(this.o):Iv(Rf),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(D){Qv(this,D);return}if(l=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)p.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())p.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),b=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(EP,h,void 0))||g||b||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,$]of p)this.g.setRequestHeader(D,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Jv(this),this.u=!0,this.g.send(l),this.u=!1}catch(D){Qv(this,D)}};function Qv(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,Yv(l),Au(l)}function Yv(l){l.A||(l.A=!0,Mt(l,"complete"),Mt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Mt(this,"complete"),Mt(this,"abort"),Au(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Au(this,!0)),Ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Xv(this):this.bb())},t.bb=function(){Xv(this)};function Xv(l){if(l.h&&typeof o<"u"&&(!l.v[1]||fr(l)!=4||l.Z()!=2)){if(l.u&&fr(l)==4)vv(l.Ea,0,l);else if(Mt(l,"readystatechange"),fr(l)==4){l.h=!1;try{const $=l.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=$===0){var b=String(l.D).match($v)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),g=!wP.test(b?b.toLowerCase():"")}p=g}if(p)Mt(l,"complete"),Mt(l,"success");else{l.m=6;try{var D=2<fr(l)?l.g.statusText:""}catch{D=""}l.l=D+" ["+l.Z()+"]",Yv(l)}}finally{Au(l)}}}}function Au(l,h){if(l.g){Jv(l);const p=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Mt(l,"ready");try{p.onreadystatechange=g}catch{}}}function Jv(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function fr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<fr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),Zk(h)}};function Zv(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function TP(l){const h={};l=(l.g&&2<=fr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(v(l[g]))continue;var p=k(l[g]);const b=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=h[b]||[];h[b]=D,D.push(p)}w(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function la(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function e0(l){this.Aa=0,this.i=[],this.j=new ea,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=la("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=la("baseRetryDelayMs",5e3,l),this.cb=la("retryDelaySeedMs",1e4,l),this.Wa=la("forwardChannelMaxRetries",2,l),this.wa=la("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Mv(l&&l.concurrentRequestLimit),this.Da=new yP,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=e0.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,g){Lt(0),this.W=l,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=u0(this,null,this.W),Pu(this)};function Df(l){if(t0(l),l.G==3){var h=l.U++,p=dr(l.I);if(Ce(p,"SID",l.K),Ce(p,"RID",h),Ce(p,"TYPE","terminate"),ua(l,p),h=new Vr(l,l.j,h),h.L=2,h.v=Cu(dr(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=c0(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Tu(h)}l0(l)}function ku(l){l.g&&(Lf(l),l.g.cancel(),l.g=null)}function t0(l){ku(l),l.u&&(a.clearTimeout(l.u),l.u=null),xu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Pu(l){if(!Lv(l.h)&&!l.s){l.s=!0;var h=l.Ga;ar||Z(),B||(ar(),B=!0),Y.add(h,l),l.B=0}}function IP(l,h){return Vv(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Zo(m(l.Ga,l,h),a0(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new Vr(this,this.j,l);let D=this.o;if(this.S&&(D?(D=y(D),R(D,this.S)):D=this.S),this.m!==null||this.O||(b.H=D,D=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=r0(this,b,h),p=dr(this.I),Ce(p,"RID",l),Ce(p,"CVER",22),this.D&&Ce(p,"X-HTTP-Session-Id",this.D),ua(this,p),D&&(this.O?h="headers="+encodeURIComponent(String(Kv(D)))+"&"+h:this.m&&Of(p,this.m,D)),Nf(this.h,b),this.Ua&&Ce(p,"TYPE","init"),this.P?(Ce(p,"$req",h),Ce(p,"SID","null"),b.T=!0,kf(b,p,null)):kf(b,p,h),this.G=2}}else this.G==3&&(l?n0(this,l):this.i.length==0||Lv(this.h)||n0(this))};function n0(l,h){var p;h?p=h.l:p=l.U++;const g=dr(l.I);Ce(g,"SID",l.K),Ce(g,"RID",p),Ce(g,"AID",l.T),ua(l,g),l.m&&l.o&&Of(g,l.m,l.o),p=new Vr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=r0(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Nf(l.h,p),kf(p,g,h)}function ua(l,h){l.H&&L(l.H,function(p,g){Ce(h,g,p)}),l.l&&jv({},function(p,g){Ce(h,g,p)})}function r0(l,h,p){p=Math.min(l.i.length,p);var g=l.l?m(l.l.Na,l.l,l):null;e:{var b=l.i;let D=-1;for(;;){const $=["count="+p];D==-1?0<p?(D=b[0].g,$.push("ofs="+D)):D=0:$.push("ofs="+D);let we=!0;for(let ht=0;ht<p;ht++){let ue=b[ht].g;const St=b[ht].map;if(ue-=D,0>ue)D=Math.max(0,b[ht].g-100),we=!1;else try{vP(St,$,"req"+ue+"_")}catch{g&&g(St)}}if(we){g=$.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,g}function i0(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;ar||Z(),B||(ar(),B=!0),Y.add(h,l),l.v=0}}function Mf(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Zo(m(l.Fa,l),a0(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,s0(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Zo(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Lt(10),ku(this),s0(this))};function Lf(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function s0(l){l.g=new Vr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=dr(l.qa);Ce(h,"RID","rpc"),Ce(h,"SID",l.K),Ce(h,"AID",l.T),Ce(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ce(h,"TO",l.ja),Ce(h,"TYPE","xmlhttp"),ua(l,h),l.m&&l.o&&Of(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Cu(dr(h)),p.m=null,p.P=!0,Nv(p,l)}t.Za=function(){this.C!=null&&(this.C=null,ku(this),Mf(this),Lt(19))};function xu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function o0(l,h){var p=null;if(l.g==h){xu(l),Lf(l),l.g=null;var g=2}else if(bf(l.h,h))p=h.D,Fv(l.h,h),g=1;else return;if(l.G!=0){if(h.o)if(g==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var b=l.B;g=vu(),Mt(g,new kv(g,p)),Pu(l)}else i0(l);else if(b=h.s,b==3||b==0&&0<h.X||!(g==1&&IP(l,h)||g==2&&Mf(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),b){case 1:Li(l,5);break;case 4:Li(l,10);break;case 3:Li(l,6);break;default:Li(l,2)}}}function a0(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function Li(l,h){if(l.j.info("Error code "+h),h==2){var p=m(l.fb,l),g=l.Xa;const b=!g;g=new Mi(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Iu(g,"https"),Cu(g),b?gP(g.toString(),p):_P(g.toString(),p)}else Lt(2);l.G=0,l.l&&l.l.sa(h),l0(l),t0(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function l0(l){if(l.G=0,l.ka=[],l.l){const h=Uv(l.h);(h.length!=0||l.i.length!=0)&&(x(l.ka,h),x(l.ka,l.i),l.h.i.length=0,I(l.i),l.i.length=0),l.l.ra()}}function u0(l,h,p){var g=p instanceof Mi?dr(p):new Mi(p);if(g.g!="")h&&(g.g=h+"."+g.g),Su(g,g.s);else{var b=a.location;g=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var D=new Mi(null);g&&Iu(D,g),h&&(D.g=h),b&&Su(D,b),p&&(D.l=p),g=D}return p=l.D,h=l.ya,p&&h&&Ce(g,p,h),Ce(g,"VER",l.la),ua(l,g),g}function c0(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Ve(new sa({eb:p})):new Ve(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function h0(){}t=h0.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function bu(){}bu.prototype.g=function(l,h){return new Xt(l,h)};function Xt(l,h){It.call(this),this.g=new e0(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!v(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Cs(this)}E(Xt,It),Xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){Df(this.g)},Xt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Tf(l),l=p);h.i.push(new oP(h.Ya++,l)),h.G==3&&Pu(h)},Xt.prototype.N=function(){this.g.l=null,delete this.j,Df(this.g),delete this.g,Xt.aa.N.call(this)};function d0(l){Sf.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}E(d0,Sf);function f0(){Cf.call(this),this.status=1}E(f0,Cf);function Cs(l){this.g=l}E(Cs,h0),Cs.prototype.ua=function(){Mt(this.g,"a")},Cs.prototype.ta=function(l){Mt(this.g,new d0(l))},Cs.prototype.sa=function(l){Mt(this.g,new f0)},Cs.prototype.ra=function(){Mt(this.g,"b")},bu.prototype.createWebChannel=bu.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,gR=function(){return new bu},mR=function(){return vu()},pR=Oi,Xm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wu.NO_ERROR=0,wu.TIMEOUT=8,wu.HTTP_ERROR=6,kc=wu,Pv.COMPLETE="complete",fR=Pv,Sv.EventType=Xo,Xo.OPEN="a",Xo.CLOSE="b",Xo.ERROR="c",Xo.MESSAGE="d",It.prototype.listen=It.prototype.K,ba=Sv,dR=sa,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,hR=Ve}).apply(typeof ec<"u"?ec:typeof self<"u"?self:typeof window<"u"?window:{});const DE="@firebase/firestore";/**
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
 */class xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xt.UNAUTHENTICATED=new xt(null),xt.GOOGLE_CREDENTIALS=new xt("google-credentials-uid"),xt.FIRST_PARTY=new xt("first-party-uid"),xt.MOCK_USER=new xt("mock-user");/**
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
 */let zo="10.12.1";/**
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
 */const us=new ad("@firebase/firestore");function Ta(){return us.logLevel}function W(t,...e){if(us.logLevel<=se.DEBUG){const n=e.map(ly);us.debug(`Firestore (${zo}): ${t}`,...n)}}function Or(t,...e){if(us.logLevel<=se.ERROR){const n=e.map(ly);us.error(`Firestore (${zo}): ${t}`,...n)}}function Co(t,...e){if(us.logLevel<=se.WARN){const n=e.map(ly);us.warn(`Firestore (${zo}): ${t}`,...n)}}function ly(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${zo}) INTERNAL ASSERTION FAILED: `+t;throw Or(e),new Error(e)}function Se(t,e){t||Q()}function J(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends ir{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class _R{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xt.UNAUTHENTICATED))}shutdown(){}}class sV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class oV{constructor(e){this.t=e,this.currentUser=xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new pi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new _R(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new xt(e)}}class aV{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=xt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lV{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new aV(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cV{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new uV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function hV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class yR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=hV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function Ro(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class nt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new nt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new nt(0,0))}static max(){return new X(new nt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class kl{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return kl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends kl{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const dV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends kl{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return dV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new H(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new H(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(xe.fromString(e))}static fromName(e){return new q(xe.fromString(e).popFirst(5))}static empty(){return new q(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new xe(e.slice()))}}function fV(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new Ti(i,q.empty(),e)}function pV(t){return new Ti(t.readTime,t.key,-1)}class Ti{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ti(X.min(),q.empty(),-1)}static max(){return new Ti(X.max(),q.empty(),-1)}}function mV(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
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
 */const gV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _V{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ru(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==gV)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function yV(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function iu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class uy{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}uy.oe=-1;function Sd(t){return t==null}function bh(t){return t===0&&1/t==-1/0}function vV(t){return typeof t=="number"&&Number.isInteger(t)&&!bh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function ME(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Le{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tc(this.root,e,this.comparator,!1)}getReverseIterator(){return new tc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tc(this.root,e,this.comparator,!0)}}class tc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pt.RED,this.left=i??pt.EMPTY,this.right=s??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new pt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return pt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class vt{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new LE(this.data.getIterator())}getIteratorFrom(e){return new LE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new vt(this.comparator);return n.data=e,n}}class LE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nn{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new Nn([])}unionWith(e){let n=new vt(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ro(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class wR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new wR("Invalid base64 string: "+s):s}}(e);return new Dt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const wV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ii(t){if(Se(!!t),typeof t=="string"){let e=0;const n=wV.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function cs(t){return typeof t=="string"?Dt.fromBase64String(t):Dt.fromUint8Array(t)}/**
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
 */function cy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hy(t){const e=t.mapValue.fields.__previous_value__;return cy(e)?hy(e):e}function Pl(t){const e=Ii(t.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
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
 */class EV{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class xl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const nc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cy(t)?4:TV(t)?9007199254740991:10:Q()}function nr(t,e){if(t===e)return!0;const n=hs(t);if(n!==hs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pl(t).isEqual(Pl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ii(i.timestampValue),a=Ii(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return cs(i.bytesValue).isEqual(cs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ye(i.geoPointValue.latitude)===Ye(s.geoPointValue.latitude)&&Ye(i.geoPointValue.longitude)===Ye(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ye(i.integerValue)===Ye(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ye(i.doubleValue),a=Ye(s.doubleValue);return o===a?bh(o)===bh(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ro(t.arrayValue.values||[],e.arrayValue.values||[],nr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(ME(o)!==ME(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!nr(o[u],a[u])))return!1;return!0}(t,e);default:return Q()}}function bl(t,e){return(t.values||[]).find(n=>nr(n,e))!==void 0}function Ao(t,e){if(t===e)return 0;const n=hs(t),r=hs(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ye(s.integerValue||s.doubleValue),u=Ye(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return VE(t.timestampValue,e.timestampValue);case 4:return VE(Pl(t),Pl(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(s,o){const a=cs(s),u=cs(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=de(a[c],u[c]);if(d!==0)return d}return de(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=de(Ye(s.latitude),Ye(o.latitude));return a!==0?a:de(Ye(s.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const d=Ao(a[c],u[c]);if(d)return d}return de(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===nc.mapValue&&o===nc.mapValue)return 0;if(s===nc.mapValue)return 1;if(o===nc.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=de(u[f],d[f]);if(m!==0)return m;const _=Ao(a[u[f]],c[d[f]]);if(_!==0)return _}return de(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Q()}}function VE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Ii(t),r=Ii(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function ko(t){return Jm(t)}function Jm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ii(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return cs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Jm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Jm(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function Zm(t){return!!t&&"integerValue"in t}function dy(t){return!!t&&"arrayValue"in t}function FE(t){return!!t&&"nullValue"in t}function UE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pc(t){return!!t&&"mapValue"in t}function Ya(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ya(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ya(t.arrayValue.values[n]);return e}return Object.assign({},t)}function TV(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class pn{constructor(e){this.value=e}static empty(){return new pn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ya(n)}setAll(e){let n=_t.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ya(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Pc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Pc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Wo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pn(Ya(this.value))}}function ER(t){const e=[];return Wo(t.fields,(n,r)=>{const i=new _t([n]);if(Pc(r)){const s=ER(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Nn(e)}/**
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
 */class Nt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Nt(e,0,X.min(),X.min(),X.min(),pn.empty(),0)}static newFoundDocument(e,n,r,i){return new Nt(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new Nt(e,2,n,X.min(),X.min(),pn.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,X.min(),X.min(),pn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nh{constructor(e,n){this.position=e,this.inclusive=n}}function jE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Ao(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function $E(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Oh{constructor(e,n="asc"){this.field=e,this.dir=n}}function IV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class TR{}class et extends TR{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new CV(e,n,r):n==="array-contains"?new kV(e,r):n==="in"?new PV(e,r):n==="not-in"?new xV(e,r):n==="array-contains-any"?new bV(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new RV(e,r):new AV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ao(n,this.value)):n!==null&&hs(this.value)===hs(n)&&this.matchesComparison(Ao(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rr extends TR{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new rr(e,n)}matches(e){return IR(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function IR(t){return t.op==="and"}function SR(t){return SV(t)&&IR(t)}function SV(t){for(const e of t.filters)if(e instanceof rr)return!1;return!0}function eg(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+ko(t.value);if(SR(t))return t.filters.map(e=>eg(e)).join(",");{const e=t.filters.map(n=>eg(n)).join(",");return`${t.op}(${e})`}}function CR(t,e){return t instanceof et?function(r,i){return i instanceof et&&r.op===i.op&&r.field.isEqual(i.field)&&nr(r.value,i.value)}(t,e):t instanceof rr?function(r,i){return i instanceof rr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&CR(o,i.filters[a]),!0):!1}(t,e):void Q()}function RR(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${ko(n.value)}`}(t):t instanceof rr?function(n){return n.op.toString()+" {"+n.getFilters().map(RR).join(" ,")+"}"}(t):"Filter"}class CV extends et{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class RV extends et{constructor(e,n){super(e,"in",n),this.keys=AR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class AV extends et{constructor(e,n){super(e,"not-in",n),this.keys=AR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function AR(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class kV extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dy(n)&&bl(n.arrayValue,this.value)}}class PV extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bl(this.value.arrayValue,n)}}class xV extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(bl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bl(this.value.arrayValue,n)}}class bV extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>bl(this.value.arrayValue,r))}}/**
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
 */class NV{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function BE(t,e=null,n=[],r=[],i=null,s=null,o=null){return new NV(t,e,n,r,i,s,o)}function fy(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>eg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Sd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ko(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ko(r)).join(",")),e.ue=n}return e.ue}function py(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!IV(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!CR(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$E(t.startAt,e.startAt)&&$E(t.endAt,e.endAt)}function tg(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Cd{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function OV(t,e,n,r,i,s,o,a){return new Cd(t,e,n,r,i,s,o,a)}function my(t){return new Cd(t)}function zE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function DV(t){return t.collectionGroup!==null}function Xa(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new vt(_t.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Oh(s,r))}),n.has(_t.keyField().canonicalString())||e.ce.push(new Oh(_t.keyField(),r))}return e.ce}function Yn(t){const e=J(t);return e.le||(e.le=MV(e,Xa(t))),e.le}function MV(t,e){if(t.limitType==="F")return BE(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Oh(i.field,s)});const n=t.endAt?new Nh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Nh(t.startAt.position,t.startAt.inclusive):null;return BE(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ng(t,e,n){return new Cd(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rd(t,e){return py(Yn(t),Yn(e))&&t.limitType===e.limitType}function kR(t){return`${fy(Yn(t))}|lt:${t.limitType}`}function Ds(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>RR(i)).join(", ")}]`),Sd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ko(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ko(i)).join(",")),`Target(${r})`}(Yn(t))}; limitType=${t.limitType})`}function Ad(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Xa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=jE(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Xa(r),i)||r.endAt&&!function(o,a,u){const c=jE(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Xa(r),i))}(t,e)}function LV(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function PR(t){return(e,n)=>{let r=!1;for(const i of Xa(t)){const s=VV(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function VV(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Ao(u,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class Ho{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return vR(this.inner)}size(){return this.innerSize}}/**
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
 */const FV=new Le(q.comparator);function Dr(){return FV}const xR=new Le(q.comparator);function Na(...t){let e=xR;for(const n of t)e=e.insert(n.key,n);return e}function bR(t){let e=xR;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function qi(){return Ja()}function NR(){return Ja()}function Ja(){return new Ho(t=>t.toString(),(t,e)=>t.isEqual(e))}const UV=new Le(q.comparator),jV=new vt(q.comparator);function oe(...t){let e=jV;for(const n of t)e=e.add(n);return e}const $V=new vt(de);function BV(){return $V}/**
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
 */function OR(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bh(e)?"-0":e}}function DR(t){return{integerValue:""+t}}function zV(t,e){return vV(e)?DR(e):OR(t,e)}/**
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
 */class kd{constructor(){this._=void 0}}function WV(t,e,n){return t instanceof Dh?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&cy(s)&&(s=hy(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Nl?LR(t,e):t instanceof Ol?VR(t,e):function(i,s){const o=MR(i,s),a=WE(o)+WE(i.Pe);return Zm(o)&&Zm(i.Pe)?DR(a):OR(i.serializer,a)}(t,e)}function HV(t,e,n){return t instanceof Nl?LR(t,e):t instanceof Ol?VR(t,e):n}function MR(t,e){return t instanceof Mh?function(r){return Zm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Dh extends kd{}class Nl extends kd{constructor(e){super(),this.elements=e}}function LR(t,e){const n=FR(e);for(const r of t.elements)n.some(i=>nr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ol extends kd{constructor(e){super(),this.elements=e}}function VR(t,e){let n=FR(e);for(const r of t.elements)n=n.filter(i=>!nr(i,r));return{arrayValue:{values:n}}}class Mh extends kd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function WE(t){return Ye(t.integerValue||t.doubleValue)}function FR(t){return dy(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qV(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Nl&&i instanceof Nl||r instanceof Ol&&i instanceof Ol?Ro(r.elements,i.elements,nr):r instanceof Mh&&i instanceof Mh?nr(r.Pe,i.Pe):r instanceof Dh&&i instanceof Dh}(t.transform,e.transform)}class GV{constructor(e,n){this.version=e,this.transformResults=n}}class Xn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xn}static exists(e){return new Xn(void 0,e)}static updateTime(e){return new Xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pd{}function UR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gy(t.key,Xn.none()):new su(t.key,t.data,Xn.none());{const n=t.data,r=pn.empty();let i=new vt(_t.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ws(t.key,r,new Nn(i.toArray()),Xn.none())}}function KV(t,e,n){t instanceof su?function(i,s,o){const a=i.value.clone(),u=qE(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ws?function(i,s,o){if(!xc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=qE(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(jR(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Za(t,e,n,r){return t instanceof su?function(s,o,a,u){if(!xc(s.precondition,o))return a;const c=s.value.clone(),d=GE(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ws?function(s,o,a,u){if(!xc(s.precondition,o))return a;const c=GE(s.fieldTransforms,u,o),d=o.data;return d.setAll(jR(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return xc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function QV(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=MR(r.transform,i||null);s!=null&&(n===null&&(n=pn.empty()),n.set(r.field,s))}return n||null}function HE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ro(r,i,(s,o)=>qV(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class su extends Pd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ws extends Pd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function jR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function qE(t,e,n){const r=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,HV(o,a,n[i]))}return r}function GE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,WV(s,o,e))}return r}class gy extends Pd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YV extends Pd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class XV{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&KV(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Za(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Za(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=NR();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=UR(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&Ro(this.mutations,e.mutations,(n,r)=>HE(n,r))&&Ro(this.baseMutations,e.baseMutations,(n,r)=>HE(n,r))}}class _y{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length);let i=function(){return UV}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new _y(e,n,r,i)}}/**
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
 */class JV{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class ZV{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Qe,ae;function eF(t){switch(t){default:return Q();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function $R(t){if(t===void 0)return Or("GRPC error has no .code"),F.UNKNOWN;switch(t){case Qe.OK:return F.OK;case Qe.CANCELLED:return F.CANCELLED;case Qe.UNKNOWN:return F.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return F.INTERNAL;case Qe.UNAVAILABLE:return F.UNAVAILABLE;case Qe.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Qe.NOT_FOUND:return F.NOT_FOUND;case Qe.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Qe.ABORTED:return F.ABORTED;case Qe.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Qe.DATA_LOSS:return F.DATA_LOSS;default:return Q()}}(ae=Qe||(Qe={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function tF(){return new TextEncoder}/**
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
 */const nF=new Qi([4294967295,4294967295],0);function KE(t){const e=tF().encode(t),n=new cR;return n.update(e),new Uint8Array(n.digest())}function QE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Qi([n,r],0),new Qi([i,s],0)]}class yy{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Oa(`Invalid padding: ${n}`);if(r<0)throw new Oa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Oa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Oa(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Qi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Qi.fromNumber(r)));return i.compare(nF)===1&&(i=new Qi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=KE(e),[r,i]=QE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new yy(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=KE(e),[r,i]=QE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Oa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class xd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ou.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xd(X.min(),i,new Le(de),Dr(),oe())}}class ou{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ou(r,n,oe(),oe(),oe())}}/**
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
 */class bc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class BR{constructor(e,n){this.targetId=e,this.me=n}}class zR{constructor(e,n,r=Dt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class YE{constructor(){this.fe=0,this.ge=JE(),this.pe=Dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new ou(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=JE()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class rF{constructor(e){this.Le=e,this.Be=new Map,this.ke=Dr(),this.qe=XE(),this.Qe=new Le(de)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(tg(s))if(r===0){const o=new q(s.path);this.Ue(n,o,Nt.newNoDocument(o,X.min()))}else Se(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=cs(r).toUint8Array()}catch(u){if(u instanceof wR)return Co("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new yy(o,i,s)}catch(u){return Co(u instanceof Oa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&tg(a.target)){const u=new q(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Nt.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=oe();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new xd(e,n,this.Qe,this.ke,r);return this.ke=Dr(),this.qe=XE(),this.Qe=new Le(de),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new YE,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new vt(de),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new YE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function XE(){return new Le(q.comparator)}function JE(){return new Le(q.comparator)}const iF={asc:"ASCENDING",desc:"DESCENDING"},sF={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oF={and:"AND",or:"OR"};class aF{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function rg(t,e){return t.useProto3Json||Sd(e)?e:{value:e}}function Lh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function WR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lF(t,e){return Lh(t,e.toTimestamp())}function Jn(t){return Se(!!t),X.fromTimestamp(function(n){const r=Ii(n);return new nt(r.seconds,r.nanos)}(t))}function vy(t,e){return ig(t,e).canonicalString()}function ig(t,e){const n=function(i){return new xe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function HR(t){const e=xe.fromString(t);return Se(YR(e)),e}function sg(t,e){return vy(t.databaseId,e.path)}function Sp(t,e){const n=HR(e);if(n.get(1)!==t.databaseId.projectId)throw new H(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(GR(n))}function qR(t,e){return vy(t.databaseId,e)}function uF(t){const e=HR(t);return e.length===4?xe.emptyPath():GR(e)}function og(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function GR(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ZE(t,e,n){return{name:sg(t,e),fields:n.value.mapValue.fields}}function cF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Se(d===void 0||typeof d=="string"),Dt.fromBase64String(d||"")):(Se(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Dt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?F.UNKNOWN:$R(c.code);return new H(d,c.message||"")}(o);n=new zR(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Sp(t,r.document.name),s=Jn(r.document.updateTime),o=r.document.createTime?Jn(r.document.createTime):X.min(),a=new pn({mapValue:{fields:r.document.fields}}),u=Nt.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new bc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Sp(t,r.document),s=r.readTime?Jn(r.readTime):X.min(),o=Nt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new bc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Sp(t,r.document),s=r.removedTargetIds||[];n=new bc([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ZV(i,s),a=r.targetId;n=new BR(a,o)}}return n}function hF(t,e){let n;if(e instanceof su)n={update:ZE(t,e.key,e.value)};else if(e instanceof gy)n={delete:sg(t,e.key)};else if(e instanceof ws)n={update:ZE(t,e.key,e.data),updateMask:wF(e.fieldMask)};else{if(!(e instanceof YV))return Q();n={verify:sg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Dh)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Nl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ol)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Mh)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:lF(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function dF(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Jn(i.updateTime):Jn(s);return o.isEqual(X.min())&&(o=Jn(s)),new GV(o,i.transformResults||[])}(n,e))):[]}function fF(t,e){return{documents:[qR(t,e.path)]}}function pF(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=qR(t,i);const s=function(c){if(c.length!==0)return QR(rr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ms(m.field),direction:_F(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=rg(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function mF(t){let e=uF(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=KR(f);return m instanceof rr&&SR(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(E){return new Oh(Ls(E.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Sd(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,_=f.values||[];return new Nh(_,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,_=f.values||[];return new Nh(_,m)}(n.endAt)),OV(e,i,o,s,a,"F",u,c)}function gF(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function KR(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ls(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ls(n.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ls(n.unaryFilter.field);return et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ls(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return et.create(Ls(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rr.create(n.compositeFilter.filters.map(r=>KR(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function _F(t){return iF[t]}function yF(t){return sF[t]}function vF(t){return oF[t]}function Ms(t){return{fieldPath:t.canonicalString()}}function Ls(t){return _t.fromServerFormat(t.fieldPath)}function QR(t){return t instanceof et?function(n){if(n.op==="=="){if(UE(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NAN"}};if(FE(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(UE(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NOT_NAN"}};if(FE(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ms(n.field),op:yF(n.op),value:n.value}}}(t):t instanceof rr?function(n){const r=n.getFilters().map(i=>QR(i));return r.length===1?r[0]:{compositeFilter:{op:vF(n.op),filters:r}}}(t):Q()}function wF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function YR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ti{constructor(e,n,r,i,s=X.min(),o=X.min(),a=Dt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new ti(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class EF{constructor(e){this.ct=e}}function TF(t){const e=mF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ng(e,e.limit,"L"):e}/**
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
 */class IF{constructor(){this._n=new SF}addToCollectionParentIndex(e,n){return this._n.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Ti.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Ti.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class SF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new vt(xe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new vt(xe.comparator)).toArray()}}/**
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
 */class Po{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Po(0)}static Ln(){return new Po(-1)}}/**
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
 */class CF{constructor(){this.changes=new Ho(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class RF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class AF{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Za(r.mutation,i,Nn.empty(),nt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=qi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Na();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=qi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Dr();const o=Ja(),a=function(){return Ja()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof ws)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Za(d.mutation,c,d.mutation.getFieldMask(),nt.now())):o.set(c.key,Nn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new RF(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ja();let i=new Le((o,a)=>o-a),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Nn.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||oe()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=NR();d.forEach(m=>{if(!s.has(m)){const _=UR(n.get(m),r.get(m));_!==null&&f.set(m,_),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):DV(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(qi());let a=-1,u=s;return o.next(c=>V.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,oe())).next(d=>({batchId:a,changes:bR(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Na();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Na();return this.indexManager.getCollectionParents(e,s).next(a=>V.forEach(a,u=>{const c=function(f,m){return new Cd(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Nt.newInvalidDocument(d)))});let a=Na();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Za(d.mutation,c,Nn.empty(),nt.now()),Ad(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class kF{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return V.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Jn(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:TF(i.bundledQuery),readTime:Jn(i.readTime)}}(n)),V.resolve()}}/**
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
 */class PF{constructor(){this.overlays=new Le(q.comparator),this.hr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=qi();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=qi(),s=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Le((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=qi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=qi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return V.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new JV(n,r));let s=this.hr.get(n);s===void 0&&(s=oe(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class wy{constructor(){this.Pr=new vt(it.Ir),this.Tr=new vt(it.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new it(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new it(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new q(new xe([])),r=new it(n,e),i=new it(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new q(new xe([])),r=new it(n,e),i=new it(n,e+1);let s=oe();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new it(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return q.comparator(e.key,n.key)||de(e.pr,n.pr)}static Er(e,n){return de(e.pr,n.pr)||q.comparator(e.key,n.key)}}/**
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
 */class xF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new vt(it.Ir)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XV(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new it(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),i=new it(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new vt(de);return n.forEach(i=>{const s=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),V.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new it(new q(s),0);let a=new vt(de);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),V.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return V.forEach(n.mutations,i=>{const s=new it(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new it(n,0),i=this.wr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class bF{constructor(e){this.vr=e,this.docs=function(){return new Le(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let r=Dr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Nt.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Dr();const o=n.path,a=new q(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||mV(pV(d),r)<=0||(i.has(d.key)||Ad(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Fr(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new NF(this)}getSize(e){return V.resolve(this.size)}}class NF extends CF{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class OF{constructor(e){this.persistence=e,this.Mr=new Ho(n=>fy(n),py),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Or=0,this.Nr=new wy,this.targetCount=0,this.Lr=Po.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),V.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Po(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.qn(n),V.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Nr.containsKey(n))}}/**
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
 */class DF{constructor(e,n){this.Br={},this.overlays={},this.kr=new uy(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new OF(this),this.indexManager=new IF,this.remoteDocumentCache=function(i){return new bF(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new EF(n),this.$r=new kF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new xF(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new MF(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return V.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class MF extends _V{constructor(e){super(),this.currentSequenceNumber=e}}class Ey{constructor(e){this.persistence=e,this.zr=new wy,this.jr=null}static Hr(e){return new Ey(e)}get Jr(){if(this.jr)return this.jr;throw Q()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),V.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Jr,r=>{const i=q.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return V.or([()=>V.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Ty{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ty(e,n.fromCache,r,i)}}/**
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
 */class LF{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class VF{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return uN()?8:yV(Et())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new LF;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Ta()<=se.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Ds(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),V.resolve()):(Ta()<=se.DEBUG&&W("QueryEngine","Query:",Ds(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Ta()<=se.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Ds(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(n))):V.resolve())}ji(e,n){if(zE(n))return V.resolve(null);let r=Yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ng(n,null,"F"),r=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,ng(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return zE(n)||i.isEqual(X.min())?V.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?V.resolve(null):(Ta()<=se.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ds(n)),this.es(e,o,n,fV(i,-1)).next(a=>a))})}Zi(e,n){let r=new vt(PR(e));return n.forEach((i,s)=>{Ad(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Ta()<=se.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Ds(n)),this.zi.getDocumentsMatchingQuery(e,n,Ti.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class FF{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Le(de),this.rs=new Ho(s=>fy(s),py),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AF(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function UF(t,e,n,r){return new FF(t,e,n,r)}async function XR(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=oe();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function jF(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,m=f.keys();let _=V.resolve();return m.forEach(E=>{_=_.next(()=>d.getEntry(u,E)).next(I=>{const x=c.docVersions.get(E);Se(x!==null),I.version.compareTo(x)<0&&(f.applyToRemoteDocument(I,c),I.isValidDocument()&&(I.setReadTime(c.commitVersion),d.addEntry(I)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=oe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function JR(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function $F(t,e){const n=J(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,f)));let _=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(Dt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(f,_),function(I,x,T){return I.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,_,d)&&a.push(n.Qr.updateTargetData(s,_))});let u=Dr(),c=oe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(BF(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(X.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return V.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function BF(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Dr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function zF(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function WF(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new ti(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function ag(t,e,n){const r=J(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!iu(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function eT(t,e,n){const r=J(t);let i=X.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=J(u),m=f.rs.get(d);return m!==void 0?V.resolve(f.ns.get(m)):f.Qr.getTargetData(c,d)}(r,o,Yn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:oe())).next(a=>(HF(r,LV(e),a),{documents:a,hs:s})))}function HF(t,e,n){let r=t.ss.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class tT{constructor(){this.activeTargetIds=BV()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qF{constructor(){this.no=new tT,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new tT,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class GF{io(e){}shutdown(){}}/**
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
 */class nT{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let rc=null;function Cp(){return rc===null?rc=function(){return 268435456+Math.round(2147483648*Math.random())}():rc++,"0x"+rc.toString(16)}/**
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
 */const KF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class QF{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const kt="WebChannelConnection";class YF extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Cp(),u=this.vo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>(W("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Co("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=KF[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Cp();return new Promise((o,a)=>{const u=new hR;u.setWithCredentials(!0),u.listenOnce(fR.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case kc.NO_ERROR:const d=u.getResponseJson();W(kt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case kc.TIMEOUT:W(kt,`RPC '${e}' ${s} timed out`),a(new H(F.DEADLINE_EXCEEDED,"Request time out"));break;case kc.HTTP_ERROR:const f=u.getStatus();if(W(kt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const E=function(x){const T=x.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(T)>=0?T:F.UNKNOWN}(_.status);a(new H(E,_.message))}else a(new H(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new H(F.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{W(kt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);W(kt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Cp(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=gR(),a=mR(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new dR({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");W(kt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,_=!1;const E=new QF({lo:x=>{_?W(kt,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(W(kt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),W(kt,`RPC '${e}' stream ${i} sending:`,x),f.send(x))},ho:()=>f.close()}),I=(x,T,v)=>{x.listen(T,C=>{try{v(C)}catch(N){setTimeout(()=>{throw N},0)}})};return I(f,ba.EventType.OPEN,()=>{_||(W(kt,`RPC '${e}' stream ${i} transport opened.`),E.mo())}),I(f,ba.EventType.CLOSE,()=>{_||(_=!0,W(kt,`RPC '${e}' stream ${i} transport closed`),E.po())}),I(f,ba.EventType.ERROR,x=>{_||(_=!0,Co(kt,`RPC '${e}' stream ${i} transport errored:`,x),E.po(new H(F.UNAVAILABLE,"The operation could not be completed")))}),I(f,ba.EventType.MESSAGE,x=>{var T;if(!_){const v=x.data[0];Se(!!v);const C=v,N=C.error||((T=C[0])===null||T===void 0?void 0:T.error);if(N){W(kt,`RPC '${e}' stream ${i} received error:`,N);const M=N.status;let L=function(S){const R=Qe[S];if(R!==void 0)return $R(R)}(M),w=N.message;L===void 0&&(L=F.INTERNAL,w="Unknown error status: "+M+" with message "+N.message),_=!0,E.po(new H(L,w)),f.close()}else W(kt,`RPC '${e}' stream ${i} received:`,v),E.yo(v)}}),I(a,pR.STAT_EVENT,x=>{x.stat===Xm.PROXY?W(kt,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===Xm.NOPROXY&&W(kt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.fo()},0),E}}function Rp(){return typeof document<"u"?document:null}/**
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
 */function bd(t){return new aF(t,!0)}/**
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
 */class ZR{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class eA{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new ZR(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Or(n.toString()),Or("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new H(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XF extends eA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=cF(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Jn(o.readTime):X.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=og(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=tg(u)?{documents:fF(s,u)}:{query:pF(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=WR(s,o.resumeToken);const c=rg(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Lh(s,o.snapshotVersion.toTimestamp());const c=rg(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=gF(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=og(this.serializer),n.removeTarget=e,this.i_(n)}}class JF extends eA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=dF(e.writeResults,e.commitTime),r=Jn(e.commitTime);return this.listener.A_(r,n)}return Se(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=og(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>hF(this.serializer,r))};this.i_(n)}}/**
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
 */class ZF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new H(F.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,ig(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(F.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,ig(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(F.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class eU{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Or(n),this.y_=!1):W("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class tU{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Es(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=J(u);c.M_.add(4),await au(c),c.N_.set("Unknown"),c.M_.delete(4),await Nd(c)}(this))})}),this.N_=new eU(r,i)}}async function Nd(t){if(Es(t))for(const e of t.x_)await e(!0)}async function au(t){for(const e of t.x_)await e(!1)}function tA(t,e){const n=J(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Ry(n)?Cy(n):qo(n).Xo()&&Sy(n,e))}function Iy(t,e){const n=J(t),r=qo(n);n.F_.delete(e),r.Xo()&&nA(n,e),n.F_.size===0&&(r.Xo()?r.n_():Es(n)&&n.N_.set("Unknown"))}function Sy(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qo(t).P_(e)}function nA(t,e){t.L_.xe(e),qo(t).I_(e)}function Cy(t){t.L_=new rF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),qo(t).start(),t.N_.w_()}function Ry(t){return Es(t)&&!qo(t).Zo()&&t.F_.size>0}function Es(t){return J(t).M_.size===0}function rA(t){t.L_=void 0}async function nU(t){t.N_.set("Online")}async function rU(t){t.F_.forEach((e,n)=>{Sy(t,e)})}async function iU(t,e){rA(t),Ry(t)?(t.N_.D_(e),Cy(t)):t.N_.set("Unknown")}async function sU(t,e,n){if(t.N_.set("Online"),e instanceof zR&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vh(t,r)}else if(e instanceof bc?t.L_.Ke(e):e instanceof BR?t.L_.He(e):t.L_.We(e),!n.isEqual(X.min()))try{const r=await JR(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(Dt.EMPTY_BYTE_STRING,d.snapshotVersion)),nA(s,u);const f=new ti(d.target,u,c,d.sequenceNumber);Sy(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Vh(t,r)}}async function Vh(t,e,n){if(!iu(e))throw e;t.M_.add(1),await au(t),t.N_.set("Offline"),n||(n=()=>JR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Nd(t)})}function iA(t,e){return e().catch(n=>Vh(t,n,e))}async function Od(t){const e=J(t),n=Si(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;oU(e);)try{const i=await zF(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,aU(e,i)}catch(i){await Vh(e,i)}sA(e)&&oA(e)}function oU(t){return Es(t)&&t.v_.length<10}function aU(t,e){t.v_.push(e);const n=Si(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function sA(t){return Es(t)&&!Si(t).Zo()&&t.v_.length>0}function oA(t){Si(t).start()}async function lU(t){Si(t).V_()}async function uU(t){const e=Si(t);for(const n of t.v_)e.d_(n.mutations)}async function cU(t,e,n){const r=t.v_.shift(),i=_y.from(r,e,n);await iA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Od(t)}async function hU(t,e){e&&Si(t).E_&&await async function(r,i){if(function(o){return eF(o)&&o!==F.ABORTED}(i.code)){const s=r.v_.shift();Si(r).t_(),await iA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Od(r)}}(t,e),sA(t)&&oA(t)}async function rT(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Es(n);n.M_.add(3),await au(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Nd(n)}async function dU(t,e){const n=J(t);e?(n.M_.delete(2),await Nd(n)):e||(n.M_.add(2),await au(n),n.N_.set("Unknown"))}function qo(t){return t.B_||(t.B_=function(n,r,i){const s=J(n);return s.f_(),new XF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:nU.bind(null,t),To:rU.bind(null,t),Ao:iU.bind(null,t),h_:sU.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Ry(t)?Cy(t):t.N_.set("Unknown")):(await t.B_.stop(),rA(t))})),t.B_}function Si(t){return t.k_||(t.k_=function(n,r,i){const s=J(n);return s.f_(),new JF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:lU.bind(null,t),Ao:hU.bind(null,t),R_:uU.bind(null,t),A_:cU.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Od(t)):(await t.k_.stop(),t.v_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class Ay{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new pi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ay(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ky(t,e){if(Or("AsyncQueue",`${e}: ${t}`),iu(t))return new H(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class lo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Na(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new lo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof lo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new lo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class iT{constructor(){this.q_=new Le(q.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):Q():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class xo{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xo(e,n,lo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class fU{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class pU{constructor(){this.queries=new Ho(e=>kR(e),Rd),this.onlineState="Unknown",this.z_=new Set}}async function aA(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new fU,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=ky(o,`Initialization of query '${Ds(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&Py(n)}async function lA(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function mU(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&Py(n)}function gU(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function Py(t){t.z_.forEach(e=>{e.next()})}var lg,sT;(sT=lg||(lg={})).J_="default",sT.Cache="cache";class uA{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new xo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==lg.Cache}}/**
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
 */class cA{constructor(e){this.key=e}}class hA{constructor(e){this.key=e}}class _U{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=oe(),this.mutatedKeys=oe(),this.Ia=PR(e),this.Ta=new lo(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new iT,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),_=Ad(this.query,f)?f:null,E=!!m&&this.mutatedKeys.has(m.key),I=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let x=!1;m&&_?m.data.isEqual(_.data)?E!==I&&(r.track({type:3,doc:_}),x=!0):this.Ra(m,_)||(r.track({type:2,doc:_}),x=!0,(u&&this.Ia(_,u)>0||c&&this.Ia(_,c)<0)&&(a=!0)):!m&&_?(r.track({type:0,doc:_}),x=!0):m&&!_&&(r.track({type:1,doc:m}),x=!0,(u||c)&&(a=!0)),x&&(_?(o=o.add(_),s=I?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,f)=>function(_,E){const I=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return I(_)-I(E)}(d.type,f.type)||this.Ia(d.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new xo(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new iT,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=oe(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new hA(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new cA(r))}),n}pa(e){this.la=e.hs,this.Pa=oe();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return xo.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class yU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class vU{constructor(e){this.key=e,this.wa=!1}}class wU{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Ho(a=>kR(a),Rd),this.Da=new Map,this.Ca=new Set,this.va=new Le(q.comparator),this.Fa=new Map,this.Ma=new wy,this.xa={},this.Oa=new Map,this.Na=Po.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function EU(t,e,n=!0){const r=_A(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await dA(r,e,n,!0),i}async function TU(t,e){const n=_A(t);await dA(n,e,!0,!1)}async function dA(t,e,n,r){const i=await WF(t.localStore,Yn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await IU(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&tA(t.remoteStore,i),a}async function IU(t,e,n,r,i){t.Ba=(f,m,_)=>async function(I,x,T,v){let C=x.view.da(T);C.Xi&&(C=await eT(I.localStore,x.query,!1).then(({documents:w})=>x.view.da(w,C)));const N=v&&v.targetChanges.get(x.targetId),M=v&&v.targetMismatches.get(x.targetId)!=null,L=x.view.applyChanges(C,I.isPrimaryClient,N,M);return aT(I,x.targetId,L.fa),L.snapshot}(t,f,m,_);const s=await eT(t.localStore,e,!0),o=new _U(e,s.hs),a=o.da(s.documents),u=ou.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);aT(t,n,c.fa);const d=new yU(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function SU(t,e,n){const r=J(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Rd(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ag(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Iy(r.remoteStore,i.targetId),ug(r,i.targetId)}).catch(ru)):(ug(r,i.targetId),await ag(r.localStore,i.targetId,!0))}async function CU(t,e){const n=J(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Iy(n.remoteStore,r.targetId))}async function RU(t,e,n){const r=OU(t);try{const i=await function(o,a){const u=J(o),c=nt.now(),d=a.reduce((_,E)=>_.add(E.key),oe());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let E=Dr(),I=oe();return u.os.getEntries(_,d).next(x=>{E=x,E.forEach((T,v)=>{v.isValidDocument()||(I=I.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,E)).next(x=>{f=x;const T=[];for(const v of a){const C=QV(v,f.get(v.key).overlayedDocument);C!=null&&T.push(new ws(v.key,C,ER(C.value.mapValue),Xn.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,T,a)}).next(x=>{m=x;const T=x.applyToLocalDocumentSet(f,I);return u.documentOverlayCache.saveOverlays(_,x.batchId,T)})}).then(()=>({batchId:m.batchId,changes:bR(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.xa[o.currentUser.toKey()];c||(c=new Le(de)),c=c.insert(a,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await lu(r,i.changes),await Od(r.remoteStore)}catch(i){const s=ky(i,"Failed to persist write");n.reject(s)}}async function fA(t,e){const n=J(t);try{const r=await $F(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Se(o.wa):i.removedDocuments.size>0&&(Se(o.wa),o.wa=!1))}),await lu(n,r,e)}catch(r){await ru(r)}}function oT(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=J(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.U_)m.j_(a)&&(c=!0)}),c&&Py(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function AU(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Le(q.comparator);o=o.insert(s,Nt.newNoDocument(s,X.min()));const a=oe().add(s),u=new xd(X.min(),new Map,new Le(de),o,a);await fA(r,u),r.va=r.va.remove(s),r.Fa.delete(e),xy(r)}else await ag(r.localStore,e,!1).then(()=>ug(r,e,n)).catch(ru)}async function kU(t,e){const n=J(t),r=e.batch.batchId;try{const i=await jF(n.localStore,e);mA(n,r,null),pA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await lu(n,i)}catch(i){await ru(i)}}async function PU(t,e,n){const r=J(t);try{const i=await function(o,a){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(Se(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);mA(r,e,n),pA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await lu(r,i)}catch(i){await ru(i)}}function pA(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function mA(t,e,n){const r=J(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function ug(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||gA(t,r)})}function gA(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Iy(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),xy(t))}function aT(t,e,n){for(const r of n)r instanceof cA?(t.Ma.addReference(r.key,e),xU(t,r)):r instanceof hA?(W("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||gA(t,r.key)):Q()}function xU(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(W("SyncEngine","New document in limbo: "+n),t.Ca.add(r),xy(t))}function xy(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new q(xe.fromString(e)),r=t.Na.next();t.Fa.set(r,new vU(n)),t.va=t.va.insert(n,r),tA(t.remoteStore,new ti(Yn(my(n.path)),r,"TargetPurposeLimboResolution",uy.oe))}}async function lu(t,e,n){const r=J(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const d=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(c){i.push(c);const d=Ty.Ki(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=J(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>V.forEach(c,m=>V.forEach(m.qi,_=>d.persistence.referenceDelegate.addReference(f,m.targetId,_)).next(()=>V.forEach(m.Qi,_=>d.persistence.referenceDelegate.removeReference(f,m.targetId,_)))))}catch(f){if(!iu(f))throw f;W("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const _=d.ns.get(m),E=_.snapshotVersion,I=_.withLastLimboFreeSnapshotVersion(E);d.ns=d.ns.insert(m,I)}}}(r.localStore,s))}async function bU(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await XR(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new H(F.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lu(n,r.us)}}function NU(t,e){const n=J(t),r=n.Fa.get(e);if(r&&r.wa)return oe().add(r.key);{let i=oe();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function _A(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AU.bind(null,e),e.Sa.h_=mU.bind(null,e.eventManager),e.Sa.ka=gU.bind(null,e.eventManager),e}function OU(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PU.bind(null,e),e}class lT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=bd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return UF(this.persistence,new VF,e.initialUser,this.serializer)}createPersistence(e){return new DF(Ey.Hr,this.serializer)}createSharedClientState(e){return new qF}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class DU{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>oT(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bU.bind(null,this.syncEngine),await dU(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new pU}()}createDatastore(e){const n=bd(e.databaseInfo.databaseId),r=function(s){return new YF(s)}(e.databaseInfo);return function(s,o,a,u){return new ZF(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new tU(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>oT(this.syncEngine,n,0),function(){return nT.D()?new nT:new GF}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new wU(i,s,o,a,u,c);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=J(r);W("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await au(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 *//**
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
 */class yA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Or("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class MU{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=xt.UNAUTHENTICATED,this.clientId=yR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{W("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(W("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(F.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ky(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ap(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await XR(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function uT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await VU(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>rT(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>rT(e.remoteStore,i)),t._onlineComponents=e}function LU(t){return t.name==="FirebaseError"?t.code===F.FAILED_PRECONDITION||t.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function VU(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ap(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!LU(n))throw n;Co("Error using user provided cache. Falling back to memory cache: "+n),await Ap(t,new lT)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Ap(t,new lT);return t._offlineComponents}async function vA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await uT(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await uT(t,new DU))),t._onlineComponents}function FU(t){return vA(t).then(e=>e.syncEngine)}async function cg(t){const e=await vA(t),n=e.eventManager;return n.onListen=EU.bind(null,e.syncEngine),n.onUnlisten=SU.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=TU.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=CU.bind(null,e.syncEngine),n}function UU(t,e,n={}){const r=new pi;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new yA({next:m=>{o.enqueueAndForget(()=>lA(s,f)),m.fromCache&&u.source==="server"?c.reject(new H(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new uA(a,d,{includeMetadataChanges:!0,ra:!0});return aA(s,f)}(await cg(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function wA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const cT=new Map;/**
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
 */function EA(t,e,n){if(!n)throw new H(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jU(t,e,n,r){if(e===!0&&r===!0)throw new H(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hT(t){if(!q.isDocumentKey(t))throw new H(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dT(t){if(q.isDocumentKey(t))throw new H(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function by(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function mi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=by(t);throw new H(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class fT{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jU("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fT({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fT(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iV;switch(r.type){case"firstParty":return new lV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=cT.get(n);r&&(W("ComponentProvider","Removing Datastore"),cT.delete(n),r.terminate())}(this),Promise.resolve()}}function $U(t,e,n,r={}){var i;const s=(t=mi(t,Dd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=xt.MOCK_USER;else{a=m_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new H(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new xt(c)}t._authCredentials=new sV(new _R(a,u))}}/**
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
 */class uu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new uu(this.firestore,e,this._query)}}class vn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vn(this.firestore,e,this._key)}}class gi extends uu{constructor(e,n,r){super(e,n,my(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vn(this.firestore,null,new q(e))}withConverter(e){return new gi(this.firestore,e,this._path)}}function Ny(t,e,...n){if(t=be(t),EA("collection","path",e),t instanceof Dd){const r=xe.fromString(e,...n);return dT(r),new gi(t,null,r)}{if(!(t instanceof vn||t instanceof gi))throw new H(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return dT(r),new gi(t.firestore,null,r)}}function Oy(t,e,...n){if(t=be(t),arguments.length===1&&(e=yR.newId()),EA("doc","path",e),t instanceof Dd){const r=xe.fromString(e,...n);return hT(r),new vn(t,null,new q(r))}{if(!(t instanceof vn||t instanceof gi))throw new H(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return hT(r),new vn(t.firestore,t instanceof gi?t.converter:null,new q(r))}}/**
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
 */class BU{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new ZR(this,"async_queue_retry"),this.hu=()=>{const n=Rp();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Rp();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Rp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new pi;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!iu(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Or("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Ay.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Q()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function pT(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class bo extends Dd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new BU}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||TA(this),this._firestoreClient.terminate()}}function zU(t,e){const n=typeof t=="object"?t:ld(),r=typeof t=="string"?t:"(default)",i=Kl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=p_("firestore");s&&$U(i,...s)}return i}function Dy(t){return t._firestoreClient||TA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function TA(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new EV(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,wA(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new MU(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class No{constructor(e){this._byteString=e}static fromBase64String(e){try{return new No(Dt.fromBase64String(e))}catch(n){throw new H(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new No(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class My{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class IA{constructor(e){this._methodName=e}}/**
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
 */class Ly{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
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
 */const WU=/^__.*__$/;class HU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ws(e,this.data,this.fieldMask,n,this.fieldTransforms):new su(e,this.data,n,this.fieldTransforms)}}function SA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Vy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Vy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Fh(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(SA(this.fu)&&WU.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class qU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||bd(e)}Fu(e,n,r,i=!1){return new Vy({fu:e,methodName:n,vu:r,path:_t.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function GU(t){const e=t._freezeSettings(),n=bd(t._databaseId);return new qU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function KU(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);kA("Data must be an object, but it was:",o,r);const a=RA(r,o);let u,c;if(s.merge)u=new Nn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=QU(e,f,n);if(!o.contains(m))throw new H(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);XU(d,m)||d.push(m)}u=new Nn(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new HU(new pn(a),u,c)}function CA(t,e){if(AA(t=be(t)))return kA("Unsupported field value:",e,t),RA(t,e);if(t instanceof IA)return function(r,i){if(!SA(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=CA(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zV(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=nt.fromDate(r);return{timestampValue:Lh(i.serializer,s)}}if(r instanceof nt){const s=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Lh(i.serializer,s)}}if(r instanceof Ly)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof No)return{bytesValue:WR(i.serializer,r._byteString)};if(r instanceof vn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:vy(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${by(r)}`)}(t,e)}function RA(t,e){const n={};return vR(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wo(t,(r,i)=>{const s=CA(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function AA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof Ly||t instanceof No||t instanceof vn||t instanceof IA)}function kA(t,e,n){if(!AA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=by(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function QU(t,e,n){if((e=be(e))instanceof My)return e._internalPath;if(typeof e=="string")return PA(t,e);throw Fh("Field path arguments must be of type string or ",t,!1,void 0,n)}const YU=new RegExp("[~\\*/\\[\\]]");function PA(t,e,n){if(e.search(YU)>=0)throw Fh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new My(...e.split("."))._internalPath}catch{throw Fh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(F.INVALID_ARGUMENT,a+t+u)}function XU(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class xA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new vn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class JU extends xA{data(){return super.data()}}function bA(t,e){return typeof e=="string"?PA(t,e):e instanceof My?e._internalPath:e._delegate._internalPath}/**
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
 */function NA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ZU{convertValue(e,n="none"){switch(hs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Wo(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Ly(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=hy(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Pl(e));default:return null}}convertTimestamp(e){const n=Ii(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);Se(YR(r));const i=new xl(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Or(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function e5(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Da{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class OA extends xA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Nc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bA("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Nc extends OA{data(e={}){return super.data(e)}}class DA{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Da(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Nc(this._firestore,this._userDataWriter,r.key,r,new Da(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Nc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Da(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Nc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Da(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:t5(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function t5(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class Fy extends ZU{constructor(e){super(),this.firestore=e}convertBytes(e){return new No(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vn(this.firestore,null,n)}}function n5(t){t=mi(t,uu);const e=mi(t.firestore,bo),n=Dy(e),r=new Fy(e);return NA(t._query),UU(n,t._query).then(i=>new DA(e,r,t,i))}function MA(t){return LA(mi(t.firestore,bo),[new gy(t._key,Xn.none())])}function Uy(t,e){const n=mi(t.firestore,bo),r=Oy(t),i=e5(t.converter,e);return LA(n,[KU(GU(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Xn.exists(!1))]).then(()=>r)}function r5(t,...e){var n,r,i;t=be(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||pT(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(pT(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(t instanceof vn)c=mi(t.firestore,bo),d=my(t._key.path),u={next:f=>{e[o]&&e[o](i5(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=mi(t,uu);c=mi(f.firestore,bo),d=f._query;const m=new Fy(c);u={next:_=>{e[o]&&e[o](new DA(c,m,f,_))},error:e[o+1],complete:e[o+2]},NA(t._query)}return function(m,_,E,I){const x=new yA(I),T=new uA(_,x,E);return m.asyncQueue.enqueueAndForget(async()=>aA(await cg(m),T)),()=>{x.$a(),m.asyncQueue.enqueueAndForget(async()=>lA(await cg(m),T))}}(Dy(c),d,a,u)}function LA(t,e){return function(r,i){const s=new pi;return r.asyncQueue.enqueueAndForget(async()=>RU(await FU(r),i,s)),s.promise}(Dy(t),e)}function i5(t,e,n){const r=n.docs.get(e._key),i=new Fy(t);return new OA(t,i,e._key,r,new Da(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){zo=i})(Pi),vi(new xr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new bo(new oV(r.getProvider("auth-internal")),new cV(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xl(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),yn(DE,"4.6.3",e),yn(DE,"4.6.3","esm2017")})();/**
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
 */const VA="firebasestorage.googleapis.com",FA="storageBucket",s5=2*60*1e3,o5=10*60*1e3;/**
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
 */class We extends ir{constructor(e,n,r=0){super(kp(e),`Firebase Storage: ${n} (${kp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,We.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return kp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ze;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ze||(ze={}));function kp(t){return"storage/"+t}function jy(){const t="An unknown error occurred, please check the error payload for server response.";return new We(ze.UNKNOWN,t)}function a5(t){return new We(ze.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function l5(t){return new We(ze.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function u5(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new We(ze.UNAUTHENTICATED,t)}function c5(){return new We(ze.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function h5(t){return new We(ze.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function d5(){return new We(ze.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function f5(){return new We(ze.CANCELED,"User canceled the upload/download.")}function p5(t){return new We(ze.INVALID_URL,"Invalid URL '"+t+"'.")}function m5(t){return new We(ze.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function g5(){return new We(ze.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+FA+"' property when initializing the app?")}function _5(){return new We(ze.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function y5(){return new We(ze.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function v5(t){return new We(ze.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function hg(t){return new We(ze.INVALID_ARGUMENT,t)}function UA(){return new We(ze.APP_DELETED,"The Firebase app was deleted.")}function w5(t){return new We(ze.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function el(t,e){return new We(ze.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ia(t){throw new We(ze.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ut{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ut.makeFromUrl(e,n)}catch{return new Ut(e,"")}if(r.path==="")return r;throw m5(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),E={bucket:1,path:3},I=n===VA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",T=new RegExp(`^https?://${I}/${i}/${x}`,"i"),C=[{regex:a,indices:u,postModify:s},{regex:_,indices:E,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<C.length;N++){const M=C[N],L=M.regex.exec(e);if(L){const w=L[M.indices.bucket];let y=L[M.indices.path];y||(y=""),r=new Ut(w,y),M.postModify(r);break}}if(r==null)throw p5(e);return r}}class E5{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function T5(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...x){c||(c=!0,e.apply(null,x))}function f(x){i=setTimeout(()=>{i=null,t(_,u())},x)}function m(){s&&clearTimeout(s)}function _(x,...T){if(c){m();return}if(x){m(),d.call(null,x,...T);return}if(u()||o){m(),d.call(null,x,...T);return}r<64&&(r*=2);let C;a===1?(a=2,C=0):C=(r+Math.random())*1e3,f(C)}let E=!1;function I(x){E||(E=!0,m(),!c&&(i!==null?(x||(a=2),clearTimeout(i),f(0)):x||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,I(!0)},n),I}function I5(t){t(!1)}/**
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
 */function S5(t){return t!==void 0}function C5(t){return typeof t=="object"&&!Array.isArray(t)}function $y(t){return typeof t=="string"||t instanceof String}function mT(t){return By()&&t instanceof Blob}function By(){return typeof Blob<"u"}function dg(t,e,n,r){if(r<e)throw hg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw hg(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Md(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function jA(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Yi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Yi||(Yi={}));/**
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
 */function R5(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class A5{constructor(e,n,r,i,s,o,a,u,c,d,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,E)=>{this.resolve_=_,this.reject_=E,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ic(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Yi.NO_ERROR,u=s.getStatus();if(!a||R5(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Yi.ABORT;r(!1,new ic(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new ic(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());S5(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=jy();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?UA():f5();o(u)}else{const u=d5();o(u)}};this.canceled_?n(!1,new ic(!1,null,!0)):this.backoffId_=T5(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&I5(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ic{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function k5(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function P5(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function x5(t,e){e&&(t["X-Firebase-GMPID"]=e)}function b5(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function N5(t,e,n,r,i,s,o=!0){const a=jA(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return x5(c,e),k5(c,n),P5(c,s),b5(c,r),new A5(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function O5(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function D5(...t){const e=O5();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(By())return new Blob(t);throw new We(ze.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function M5(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function L5(t){if(typeof atob>"u")throw v5("base-64");return atob(t)}/**
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
 */const qn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Pp{constructor(e,n){this.data=e,this.contentType=n||null}}function V5(t,e){switch(t){case qn.RAW:return new Pp($A(e));case qn.BASE64:case qn.BASE64URL:return new Pp(BA(t,e));case qn.DATA_URL:return new Pp(U5(e),j5(e))}throw jy()}function $A(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function F5(t){let e;try{e=decodeURIComponent(t)}catch{throw el(qn.DATA_URL,"Malformed data URL.")}return $A(e)}function BA(t,e){switch(t){case qn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw el(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case qn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw el(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=L5(e)}catch(i){throw i.message.includes("polyfill")?i:el(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class zA{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw el(qn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=$5(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function U5(t){const e=new zA(t);return e.base64?BA(qn.BASE64,e.rest):F5(e.rest)}function j5(t){return new zA(t).contentType}function $5(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Qr{constructor(e,n){let r=0,i="";mT(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(mT(this.data_)){const r=this.data_,i=M5(r,e,n);return i===null?null:new Qr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Qr(r,!0)}}static getBlob(...e){if(By()){const n=e.map(r=>r instanceof Qr?r.data_:r);return new Qr(D5.apply(null,n))}else{const n=e.map(o=>$y(o)?V5(qn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Qr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function zy(t){let e;try{e=JSON.parse(t)}catch{return null}return C5(e)?e:null}/**
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
 */function B5(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function z5(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function WA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function W5(t,e){return e}class Vt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||W5}}let sc=null;function H5(t){return!$y(t)||t.length<2?t:WA(t)}function HA(){if(sc)return sc;const t=[];t.push(new Vt("bucket")),t.push(new Vt("generation")),t.push(new Vt("metageneration")),t.push(new Vt("name","fullPath",!0));function e(s,o){return H5(o)}const n=new Vt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Vt("size");return i.xform=r,t.push(i),t.push(new Vt("timeCreated")),t.push(new Vt("updated")),t.push(new Vt("md5Hash",null,!0)),t.push(new Vt("cacheControl",null,!0)),t.push(new Vt("contentDisposition",null,!0)),t.push(new Vt("contentEncoding",null,!0)),t.push(new Vt("contentLanguage",null,!0)),t.push(new Vt("contentType",null,!0)),t.push(new Vt("metadata","customMetadata",!0)),sc=t,sc}function q5(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Ut(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function G5(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return q5(r,t),r}function qA(t,e,n){const r=zy(e);return r===null?null:G5(t,r,n)}function K5(t,e,n,r){const i=zy(e);if(i===null||!$y(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),_=Md(m,n,r),E=jA({alt:"media",token:c});return _+E})[0]}function Q5(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const gT="prefixes",_T="items";function Y5(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[gT])for(const i of n[gT]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new Ut(e,s));r.prefixes.push(o)}if(n[_T])for(const i of n[_T]){const s=t._makeStorageReference(new Ut(e,i.name));r.items.push(s)}return r}function X5(t,e,n){const r=zy(n);return r===null?null:Y5(t,e,r)}class Wy{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Hy(t){if(!t)throw jy()}function J5(t,e){function n(r,i){const s=qA(t,i,e);return Hy(s!==null),s}return n}function Z5(t,e){function n(r,i){const s=X5(t,e,i);return Hy(s!==null),s}return n}function e3(t,e){function n(r,i){const s=qA(t,i,e);return Hy(s!==null),K5(s,i,t.host,t._protocol)}return n}function qy(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=c5():i=u5():n.getStatus()===402?i=l5(t.bucket):n.getStatus()===403?i=h5(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function t3(t){const e=qy(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=a5(t.path)),s.serverResponse=i.serverResponse,s}return n}function n3(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Md(o,t.host,t._protocol),u="GET",c=t.maxOperationRetryTime,d=new Wy(a,u,Z5(t,e.bucket),c);return d.urlParams=s,d.errorHandler=qy(e),d}function r3(t,e,n){const r=e.fullServerUrl(),i=Md(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Wy(i,s,e3(t,n),o);return a.errorHandler=t3(e),a}function i3(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function s3(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=i3(null,e)),r}function o3(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let N=0;N<2;N++)C=C+Math.random().toString().slice(2);return C}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=s3(e,r,i),d=Q5(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",_=Qr.getBlob(f,r,m);if(_===null)throw _5();const E={name:c.fullPath},I=Md(s,t.host,t._protocol),x="POST",T=t.maxUploadRetryTime,v=new Wy(I,x,J5(t,n),T);return v.urlParams=E,v.headers=o,v.body=_.uploadData(),v.errorHandler=qy(e),v}class a3{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Yi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Yi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Yi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ia("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ia("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ia("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ia("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ia("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class l3 extends a3{initXhr(){this.xhr_.responseType="text"}}function Gy(){return new l3}/**
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
 */class ds{constructor(e,n){this._service=e,n instanceof Ut?this._location=n:this._location=Ut.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ds(e,n)}get root(){const e=new Ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return WA(this._location.path)}get storage(){return this._service}get parent(){const e=B5(this._location.path);if(e===null)return null;const n=new Ut(this._location.bucket,e);return new ds(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw w5(e)}}function u3(t,e,n){t._throwIfRoot("uploadBytes");const r=o3(t.storage,t._location,HA(),new Qr(e,!0),n);return t.storage.makeRequestWithTokens(r,Gy).then(i=>({metadata:i,ref:t}))}function c3(t){const e={prefixes:[],items:[]};return GA(t,e).then(()=>e)}async function GA(t,e,n){const i=await h3(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await GA(t,e,i.nextPageToken)}function h3(t,e){e!=null&&typeof e.maxResults=="number"&&dg("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=n3(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,Gy)}function d3(t){t._throwIfRoot("getDownloadURL");const e=r3(t.storage,t._location,HA());return t.storage.makeRequestWithTokens(e,Gy).then(n=>{if(n===null)throw y5();return n})}function f3(t,e){const n=z5(t._location.path,e),r=new Ut(t._location.bucket,n);return new ds(t.storage,r)}/**
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
 */function p3(t){return/^[A-Za-z]+:\/\//.test(t)}function m3(t,e){return new ds(t,e)}function KA(t,e){if(t instanceof Ky){const n=t;if(n._bucket==null)throw g5();const r=new ds(n,n._bucket);return e!=null?KA(r,e):r}else return e!==void 0?f3(t,e):t}function g3(t,e){if(e&&p3(e)){if(t instanceof Ky)return m3(t,e);throw hg("To use ref(service, url), the first argument must be a Storage instance.")}else return KA(t,e)}function yT(t,e){const n=e==null?void 0:e[FA];return n==null?null:Ut.makeFromBucketSpec(n,t)}function _3(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:m_(i,t.app.options.projectId))}class Ky{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=VA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=s5,this._maxUploadRetryTime=o5,this._requests=new Set,i!=null?this._bucket=Ut.makeFromBucketSpec(i,this._host):this._bucket=yT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ut.makeFromBucketSpec(this._url,e):this._bucket=yT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){dg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){dg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ds(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new E5(UA());{const o=N5(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const vT="@firebase/storage",wT="0.12.5";/**
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
 */const QA="storage";function y3(t,e,n){return t=be(t),u3(t,e,n)}function v3(t){return t=be(t),c3(t)}function w3(t){return t=be(t),d3(t)}function ET(t,e){return t=be(t),g3(t,e)}function E3(t=ld(),e){t=be(t);const r=Kl(t,QA).getImmediate({identifier:e}),i=p_("storage");return i&&T3(r,...i),r}function T3(t,e,n,r={}){_3(t,e,n,r)}function I3(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Ky(n,r,i,e,Pi)}function S3(){vi(new xr(QA,I3,"PUBLIC").setMultipleInstances(!0)),yn(vT,wT,""),yn(vT,wT,"esm2017")}S3();const C3={apiKey:"AIzaSyBbJ4iyMCwjnk6U2jbGMWY-i5WJrrPWAbk",authDomain:"aprendiendo-firebase-56013.firebaseapp.com",projectId:"aprendiendo-firebase-56013",storageBucket:"aprendiendo-firebase-56013.appspot.com",messagingSenderId:"8002690116",appId:"1:8002690116:web:e3d984ba660ffd9bb27011",measurementId:"G-FV4QM1X52H"},Ld=wS(C3),Yr=VD(Ld),R3=new gr,cu=zU(Ld),TT=E3(Ld),oc=tV(Ld);function Qy(){const[t,e]=ne.useState({email:"",password:""}),n=Yr,r=(c,d)=>{e(f=>({...f,[c]:d}))},[i,s]=ne.useState(null);ne.useEffect(()=>{const c=S2(Yr,d=>{s(d)});return()=>{c()}},[]);const o=async c=>{c.preventDefault();try{await E2(Yr,t.email,t.password),console.log(response)}catch(d){console.log(d)}};async function a(){try{const c=await q2(Yr,R3);console.log(c),await Uy(Ny(cu,"users"),{uid:c.user.uid,name:c.user.displayName,email:c.user.email,creationDate:c.user.metadata.creationTime})}catch(c){console.log(c)}}async function u(){try{await C2(Yr)}catch(c){console.log(c)}}return{auhtentication:n,user:i,handleChange:r,formData:t,singIn:o,handleSingInWithGoogle:a,logout:u}}function A3(){var n,r,i;const{user:t,auhtentication:e}=Qy();return O.jsx(O.Fragment,{children:t&&O.jsxs("div",{className:"mt-5 flex flex-col gap-y-4 justify-center items-center",children:[O.jsx("img",{src:(n=e==null?void 0:e.currentUser)==null?void 0:n.photoURL,width:100,height:100}),O.jsx("h1",{children:(r=e==null?void 0:e.currentUser)==null?void 0:r.email}),O.jsxs("span",{children:[" ",(i=t==null?void 0:t.currentUser)==null?void 0:i.displayName]})]})})}function Oo({icon:t,text:e}){return O.jsxs("div",{className:"flex justify-center items-center gap-x-4",children:[t,e]})}function rn({title:t,onClick:e,className:n,children:r,type:i}){return O.jsxs("button",{type:i,onClick:e,className:n,children:[t,r]})}function me(){return me=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},me.apply(this,arguments)}function Xr(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function YA(t){if(!Xr(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=YA(t[n])}),e}function Zn(t,e,n={clone:!0}){const r=n.clone?me({},t):t;return Xr(t)&&Xr(e)&&Object.keys(e).forEach(i=>{i!=="__proto__"&&(Xr(e[i])&&i in t&&Xr(t[i])?r[i]=Zn(t[i],e[i],n):n.clone?r[i]=Xr(e[i])?YA(e[i]):e[i]:r[i]=e[i])}),r}const k3=Object.freeze(Object.defineProperty({__proto__:null,default:Zn,isPlainObject:Xr},Symbol.toStringTag,{value:"Module"}));function Dl(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}const P3=Object.freeze(Object.defineProperty({__proto__:null,default:Dl},Symbol.toStringTag,{value:"Module"}));var XA={exports:{}},ge={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yy=Symbol.for("react.element"),Xy=Symbol.for("react.portal"),Vd=Symbol.for("react.fragment"),Fd=Symbol.for("react.strict_mode"),Ud=Symbol.for("react.profiler"),jd=Symbol.for("react.provider"),$d=Symbol.for("react.context"),x3=Symbol.for("react.server_context"),Bd=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Wd=Symbol.for("react.suspense_list"),Hd=Symbol.for("react.memo"),qd=Symbol.for("react.lazy"),b3=Symbol.for("react.offscreen"),JA;JA=Symbol.for("react.module.reference");function In(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Yy:switch(t=t.type,t){case Vd:case Ud:case Fd:case zd:case Wd:return t;default:switch(t=t&&t.$$typeof,t){case x3:case $d:case Bd:case qd:case Hd:case jd:return t;default:return e}}case Xy:return e}}}ge.ContextConsumer=$d;ge.ContextProvider=jd;ge.Element=Yy;ge.ForwardRef=Bd;ge.Fragment=Vd;ge.Lazy=qd;ge.Memo=Hd;ge.Portal=Xy;ge.Profiler=Ud;ge.StrictMode=Fd;ge.Suspense=zd;ge.SuspenseList=Wd;ge.isAsyncMode=function(){return!1};ge.isConcurrentMode=function(){return!1};ge.isContextConsumer=function(t){return In(t)===$d};ge.isContextProvider=function(t){return In(t)===jd};ge.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yy};ge.isForwardRef=function(t){return In(t)===Bd};ge.isFragment=function(t){return In(t)===Vd};ge.isLazy=function(t){return In(t)===qd};ge.isMemo=function(t){return In(t)===Hd};ge.isPortal=function(t){return In(t)===Xy};ge.isProfiler=function(t){return In(t)===Ud};ge.isStrictMode=function(t){return In(t)===Fd};ge.isSuspense=function(t){return In(t)===zd};ge.isSuspenseList=function(t){return In(t)===Wd};ge.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Vd||t===Ud||t===Fd||t===zd||t===Wd||t===b3||typeof t=="object"&&t!==null&&(t.$$typeof===qd||t.$$typeof===Hd||t.$$typeof===jd||t.$$typeof===$d||t.$$typeof===Bd||t.$$typeof===JA||t.getModuleId!==void 0)};ge.typeOf=In;XA.exports=ge;var IT=XA.exports;const N3=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function ZA(t){const e=`${t}`.match(N3);return e&&e[1]||""}function ek(t,e=""){return t.displayName||t.name||ZA(t)||e}function ST(t,e,n){const r=ek(e);return t.displayName||(r!==""?`${n}(${r})`:n)}function O3(t){if(t!=null){if(typeof t=="string")return t;if(typeof t=="function")return ek(t,"Component");if(typeof t=="object")switch(t.$$typeof){case IT.ForwardRef:return ST(t,t.render,"ForwardRef");case IT.Memo:return ST(t,t.type,"memo");default:return}}}const D3=Object.freeze(Object.defineProperty({__proto__:null,default:O3,getFunctionName:ZA},Symbol.toStringTag,{value:"Module"}));function fs(t){if(typeof t!="string")throw new Error(Dl(7));return t.charAt(0).toUpperCase()+t.slice(1)}const M3=Object.freeze(Object.defineProperty({__proto__:null,default:fs},Symbol.toStringTag,{value:"Module"}));function tk(t,e){const n=me({},e);return Object.keys(t).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=me({},t[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=t[r]||{},s=e[r];n[r]={},!s||!Object.keys(s)?n[r]=i:!i||!Object.keys(i)?n[r]=s:(n[r]=me({},s),Object.keys(i).forEach(o=>{n[r][o]=tk(i[o],s[o])}))}else n[r]===void 0&&(n[r]=t[r])}),n}function L3(t,e,n=void 0){const r={};return Object.keys(t).forEach(i=>{r[i]=t[i].reduce((s,o)=>{if(o){const a=e(o);a!==""&&s.push(a),n&&n[o]&&s.push(n[o])}return s},[]).join(" ")}),r}const CT=t=>t,V3=()=>{let t=CT;return{configure(e){t=e},generate(e){return t(e)},reset(){t=CT}}},F3=V3(),U3={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function nk(t,e,n="Mui"){const r=U3[e];return r?`${n}-${r}`:`${F3.generate(t)}-${e}`}function j3(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=nk(t,i,n)}),r}function $3(t,e=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(t,n))}const B3=Object.freeze(Object.defineProperty({__proto__:null,default:$3},Symbol.toStringTag,{value:"Module"}));function bi(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function rk(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=rk(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function z3(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=rk(t))&&(r&&(r+=" "),r+=e);return r}function W3(t){const{theme:e,name:n,props:r}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:tk(e.components[n].defaultProps,r)}const H3=["values","unit","step"],q3=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>me({},n,{[r.key]:r.val}),{})};function ik(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=t,i=bi(t,H3),s=q3(e),o=Object.keys(s);function a(m){return`@media (min-width:${typeof e[m]=="number"?e[m]:m}${n})`}function u(m){return`@media (max-width:${(typeof e[m]=="number"?e[m]:m)-r/100}${n})`}function c(m,_){const E=o.indexOf(_);return`@media (min-width:${typeof e[m]=="number"?e[m]:m}${n}) and (max-width:${(E!==-1&&typeof e[o[E]]=="number"?e[o[E]]:_)-r/100}${n})`}function d(m){return o.indexOf(m)+1<o.length?c(m,o[o.indexOf(m)+1]):a(m)}function f(m){const _=o.indexOf(m);return _===0?a(o[1]):_===o.length-1?u(o[_]):c(m,o[o.indexOf(m)+1]).replace("@media","@media not all and")}return me({keys:o,values:s,up:a,down:u,between:c,only:d,not:f,unit:n},i)}const G3={borderRadius:4};function tl(t,e){return e?Zn(t,e,{clone:!1}):t}const Jy={xs:0,sm:600,md:900,lg:1200,xl:1536},RT={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${Jy[t]}px)`};function Mr(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const s=r.breakpoints||RT;return e.reduce((o,a,u)=>(o[s.up(s.keys[u])]=n(e[u]),o),{})}if(typeof e=="object"){const s=r.breakpoints||RT;return Object.keys(e).reduce((o,a)=>{if(Object.keys(s.values||Jy).indexOf(a)!==-1){const u=s.up(a);o[u]=n(e[a],a)}else{const u=a;o[u]=e[u]}return o},{})}return n(e)}function K3(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((r,i)=>{const s=t.up(i);return r[s]={},r},{}))||{}}function Q3(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function Gd(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,s)=>i&&i[s]?i[s]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function Uh(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=Gd(t,n)||r,e&&(i=e(i,r,t)),i}function Ge(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,s=o=>{if(o[e]==null)return null;const a=o[e],u=o.theme,c=Gd(u,r)||{};return Mr(o,a,f=>{let m=Uh(c,i,f);return f===m&&typeof f=="string"&&(m=Uh(c,i,`${e}${f==="default"?"":fs(f)}`,f)),n===!1?m:{[n]:m}})};return s.propTypes={},s.filterProps=[e],s}function Y3(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const X3={m:"margin",p:"padding"},J3={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},AT={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Z3=Y3(t=>{if(t.length>2)if(AT[t])t=AT[t];else return[t];const[e,n]=t.split(""),r=X3[e],i=J3[n]||"";return Array.isArray(i)?i.map(s=>r+s):[r+i]}),Zy=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],ev=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Zy,...ev];function hu(t,e,n,r){var i;const s=(i=Gd(t,e,!1))!=null?i:n;return typeof s=="number"?o=>typeof o=="string"?o:s*o:Array.isArray(s)?o=>typeof o=="string"?o:s[o]:typeof s=="function"?s:()=>{}}function sk(t){return hu(t,"spacing",8)}function du(t,e){if(typeof e=="string"||e==null)return e;const n=Math.abs(e),r=t(n);return e>=0?r:typeof r=="number"?-r:`-${r}`}function e9(t,e){return n=>t.reduce((r,i)=>(r[i]=du(e,n),r),{})}function t9(t,e,n,r){if(e.indexOf(n)===-1)return null;const i=Z3(n),s=e9(i,r),o=t[n];return Mr(t,o,s)}function ok(t,e){const n=sk(t.theme);return Object.keys(t).map(r=>t9(t,e,r,n)).reduce(tl,{})}function Fe(t){return ok(t,Zy)}Fe.propTypes={};Fe.filterProps=Zy;function Ue(t){return ok(t,ev)}Ue.propTypes={};Ue.filterProps=ev;function n9(t=8){if(t.mui)return t;const e=sk({spacing:t}),n=(...r)=>(r.length===0?[1]:r).map(s=>{const o=e(s);return typeof o=="number"?`${o}px`:o}).join(" ");return n.mui=!0,n}function Kd(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(s=>{r[s]=i}),r),{}),n=r=>Object.keys(r).reduce((i,s)=>e[s]?tl(i,e[s](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function fn(t){return typeof t!="number"?t:`${t}px solid`}function Sn(t,e){return Ge({prop:t,themeKey:"borders",transform:e})}const r9=Sn("border",fn),i9=Sn("borderTop",fn),s9=Sn("borderRight",fn),o9=Sn("borderBottom",fn),a9=Sn("borderLeft",fn),l9=Sn("borderColor"),u9=Sn("borderTopColor"),c9=Sn("borderRightColor"),h9=Sn("borderBottomColor"),d9=Sn("borderLeftColor"),f9=Sn("outline",fn),p9=Sn("outlineColor"),Qd=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=hu(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:du(e,r)});return Mr(t,t.borderRadius,n)}return null};Qd.propTypes={};Qd.filterProps=["borderRadius"];Kd(r9,i9,s9,o9,a9,l9,u9,c9,h9,d9,Qd,f9,p9);const Yd=t=>{if(t.gap!==void 0&&t.gap!==null){const e=hu(t.theme,"spacing",8),n=r=>({gap:du(e,r)});return Mr(t,t.gap,n)}return null};Yd.propTypes={};Yd.filterProps=["gap"];const Xd=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=hu(t.theme,"spacing",8),n=r=>({columnGap:du(e,r)});return Mr(t,t.columnGap,n)}return null};Xd.propTypes={};Xd.filterProps=["columnGap"];const Jd=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=hu(t.theme,"spacing",8),n=r=>({rowGap:du(e,r)});return Mr(t,t.rowGap,n)}return null};Jd.propTypes={};Jd.filterProps=["rowGap"];const m9=Ge({prop:"gridColumn"}),g9=Ge({prop:"gridRow"}),_9=Ge({prop:"gridAutoFlow"}),y9=Ge({prop:"gridAutoColumns"}),v9=Ge({prop:"gridAutoRows"}),w9=Ge({prop:"gridTemplateColumns"}),E9=Ge({prop:"gridTemplateRows"}),T9=Ge({prop:"gridTemplateAreas"}),I9=Ge({prop:"gridArea"});Kd(Yd,Xd,Jd,m9,g9,_9,y9,v9,w9,E9,T9,I9);function uo(t,e){return e==="grey"?e:t}const S9=Ge({prop:"color",themeKey:"palette",transform:uo}),C9=Ge({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:uo}),R9=Ge({prop:"backgroundColor",themeKey:"palette",transform:uo});Kd(S9,C9,R9);function en(t){return t<=1&&t!==0?`${t*100}%`:t}const A9=Ge({prop:"width",transform:en}),tv=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var r,i;const s=((r=t.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||Jy[n];return s?((i=t.theme)==null||(i=i.breakpoints)==null?void 0:i.unit)!=="px"?{maxWidth:`${s}${t.theme.breakpoints.unit}`}:{maxWidth:s}:{maxWidth:en(n)}};return Mr(t,t.maxWidth,e)}return null};tv.filterProps=["maxWidth"];const k9=Ge({prop:"minWidth",transform:en}),P9=Ge({prop:"height",transform:en}),x9=Ge({prop:"maxHeight",transform:en}),b9=Ge({prop:"minHeight",transform:en});Ge({prop:"size",cssProperty:"width",transform:en});Ge({prop:"size",cssProperty:"height",transform:en});const N9=Ge({prop:"boxSizing"});Kd(A9,tv,k9,P9,x9,b9,N9);const fu={border:{themeKey:"borders",transform:fn},borderTop:{themeKey:"borders",transform:fn},borderRight:{themeKey:"borders",transform:fn},borderBottom:{themeKey:"borders",transform:fn},borderLeft:{themeKey:"borders",transform:fn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:fn},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Qd},color:{themeKey:"palette",transform:uo},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:uo},backgroundColor:{themeKey:"palette",transform:uo},p:{style:Ue},pt:{style:Ue},pr:{style:Ue},pb:{style:Ue},pl:{style:Ue},px:{style:Ue},py:{style:Ue},padding:{style:Ue},paddingTop:{style:Ue},paddingRight:{style:Ue},paddingBottom:{style:Ue},paddingLeft:{style:Ue},paddingX:{style:Ue},paddingY:{style:Ue},paddingInline:{style:Ue},paddingInlineStart:{style:Ue},paddingInlineEnd:{style:Ue},paddingBlock:{style:Ue},paddingBlockStart:{style:Ue},paddingBlockEnd:{style:Ue},m:{style:Fe},mt:{style:Fe},mr:{style:Fe},mb:{style:Fe},ml:{style:Fe},mx:{style:Fe},my:{style:Fe},margin:{style:Fe},marginTop:{style:Fe},marginRight:{style:Fe},marginBottom:{style:Fe},marginLeft:{style:Fe},marginX:{style:Fe},marginY:{style:Fe},marginInline:{style:Fe},marginInlineStart:{style:Fe},marginInlineEnd:{style:Fe},marginBlock:{style:Fe},marginBlockStart:{style:Fe},marginBlockEnd:{style:Fe},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Yd},rowGap:{style:Jd},columnGap:{style:Xd},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:en},maxWidth:{style:tv},minWidth:{transform:en},height:{transform:en},maxHeight:{transform:en},minHeight:{transform:en},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function O9(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function D9(t,e){return typeof t=="function"?t(e):t}function ak(){function t(n,r,i,s){const o={[n]:r,theme:i},a=s[n];if(!a)return{[n]:r};const{cssProperty:u=n,themeKey:c,transform:d,style:f}=a;if(r==null)return null;if(c==="typography"&&r==="inherit")return{[n]:r};const m=Gd(i,c)||{};return f?f(o):Mr(o,r,E=>{let I=Uh(m,d,E);return E===I&&typeof E=="string"&&(I=Uh(m,d,`${n}${E==="default"?"":fs(E)}`,E)),u===!1?I:{[u]:I}})}function e(n){var r;const{sx:i,theme:s={}}=n||{};if(!i)return null;const o=(r=s.unstable_sxConfig)!=null?r:fu;function a(u){let c=u;if(typeof u=="function")c=u(s);else if(typeof u!="object")return u;if(!c)return null;const d=K3(s.breakpoints),f=Object.keys(d);let m=d;return Object.keys(c).forEach(_=>{const E=D9(c[_],s);if(E!=null)if(typeof E=="object")if(o[_])m=tl(m,t(_,E,s,o));else{const I=Mr({theme:s},E,x=>({[_]:x}));O9(I,E)?m[_]=e({sx:E,theme:s}):m=tl(m,I)}else m=tl(m,t(_,E,s,o))}),Q3(f,m)}return Array.isArray(i)?i.map(a):a(i)}return e}const Zd=ak();Zd.filterProps=["sx"];function lk(t,e){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(t).replace(/(\[[^\]]+\])/,"*:where($1)")]:e}:n.palette.mode===t?e:{}}const M9=["breakpoints","palette","spacing","shape"];function nv(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:s={}}=t,o=bi(t,M9),a=ik(n),u=n9(i);let c=Zn({breakpoints:a,direction:"ltr",components:{},palette:me({mode:"light"},r),spacing:u,shape:me({},G3,s)},o);return c.applyStyles=lk,c=e.reduce((d,f)=>Zn(d,f),c),c.unstable_sxConfig=me({},fu,o==null?void 0:o.unstable_sxConfig),c.unstable_sx=function(f){return Zd({sx:f,theme:this})},c}const L9=Object.freeze(Object.defineProperty({__proto__:null,default:nv,private_createBreakpoints:ik,unstable_applyStyles:lk},Symbol.toStringTag,{value:"Module"}));function uk(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var V9=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,F9=uk(function(t){return V9.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function U9(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function j9(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var $9=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(j9(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=U9(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Pt="-ms-",jh="-moz-",ce="-webkit-",ck="comm",rv="rule",iv="decl",B9="@import",hk="@keyframes",z9="@layer",W9=Math.abs,ef=String.fromCharCode,H9=Object.assign;function q9(t,e){return mt(t,0)^45?(((e<<2^mt(t,0))<<2^mt(t,1))<<2^mt(t,2))<<2^mt(t,3):0}function dk(t){return t.trim()}function G9(t,e){return(t=e.exec(t))?t[0]:t}function he(t,e,n){return t.replace(e,n)}function fg(t,e){return t.indexOf(e)}function mt(t,e){return t.charCodeAt(e)|0}function Ml(t,e,n){return t.slice(e,n)}function $n(t){return t.length}function sv(t){return t.length}function ac(t,e){return e.push(t),t}function K9(t,e){return t.map(e).join("")}var tf=1,Do=1,fk=0,Yt=0,Xe=0,Go="";function nf(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:tf,column:Do,length:o,return:""}}function Sa(t,e){return H9(nf("",null,null,"",null,null,0),t,{length:-t.length},e)}function Q9(){return Xe}function Y9(){return Xe=Yt>0?mt(Go,--Yt):0,Do--,Xe===10&&(Do=1,tf--),Xe}function sn(){return Xe=Yt<fk?mt(Go,Yt++):0,Do++,Xe===10&&(Do=1,tf++),Xe}function er(){return mt(Go,Yt)}function Oc(){return Yt}function pu(t,e){return Ml(Go,t,e)}function Ll(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pk(t){return tf=Do=1,fk=$n(Go=t),Yt=0,[]}function mk(t){return Go="",t}function Dc(t){return dk(pu(Yt-1,pg(t===91?t+2:t===40?t+1:t)))}function X9(t){for(;(Xe=er())&&Xe<33;)sn();return Ll(t)>2||Ll(Xe)>3?"":" "}function J9(t,e){for(;--e&&sn()&&!(Xe<48||Xe>102||Xe>57&&Xe<65||Xe>70&&Xe<97););return pu(t,Oc()+(e<6&&er()==32&&sn()==32))}function pg(t){for(;sn();)switch(Xe){case t:return Yt;case 34:case 39:t!==34&&t!==39&&pg(Xe);break;case 40:t===41&&pg(t);break;case 92:sn();break}return Yt}function Z9(t,e){for(;sn()&&t+Xe!==57;)if(t+Xe===84&&er()===47)break;return"/*"+pu(e,Yt-1)+"*"+ef(t===47?t:sn())}function e6(t){for(;!Ll(er());)sn();return pu(t,Yt)}function t6(t){return mk(Mc("",null,null,null,[""],t=pk(t),0,[0],t))}function Mc(t,e,n,r,i,s,o,a,u){for(var c=0,d=0,f=o,m=0,_=0,E=0,I=1,x=1,T=1,v=0,C="",N=i,M=s,L=r,w=C;x;)switch(E=v,v=sn()){case 40:if(E!=108&&mt(w,f-1)==58){fg(w+=he(Dc(v),"&","&\f"),"&\f")!=-1&&(T=-1);break}case 34:case 39:case 91:w+=Dc(v);break;case 9:case 10:case 13:case 32:w+=X9(E);break;case 92:w+=J9(Oc()-1,7);continue;case 47:switch(er()){case 42:case 47:ac(n6(Z9(sn(),Oc()),e,n),u);break;default:w+="/"}break;case 123*I:a[c++]=$n(w)*T;case 125*I:case 59:case 0:switch(v){case 0:case 125:x=0;case 59+d:T==-1&&(w=he(w,/\f/g,"")),_>0&&$n(w)-f&&ac(_>32?PT(w+";",r,n,f-1):PT(he(w," ","")+";",r,n,f-2),u);break;case 59:w+=";";default:if(ac(L=kT(w,e,n,c,d,i,a,C,N=[],M=[],f),s),v===123)if(d===0)Mc(w,e,L,L,N,s,f,a,M);else switch(m===99&&mt(w,3)===110?100:m){case 100:case 108:case 109:case 115:Mc(t,L,L,r&&ac(kT(t,L,L,0,0,i,a,C,i,N=[],f),M),i,M,f,a,r?N:M);break;default:Mc(w,L,L,L,[""],M,0,a,M)}}c=d=_=0,I=T=1,C=w="",f=o;break;case 58:f=1+$n(w),_=E;default:if(I<1){if(v==123)--I;else if(v==125&&I++==0&&Y9()==125)continue}switch(w+=ef(v),v*I){case 38:T=d>0?1:(w+="\f",-1);break;case 44:a[c++]=($n(w)-1)*T,T=1;break;case 64:er()===45&&(w+=Dc(sn())),m=er(),d=f=$n(C=w+=e6(Oc())),v++;break;case 45:E===45&&$n(w)==2&&(I=0)}}return s}function kT(t,e,n,r,i,s,o,a,u,c,d){for(var f=i-1,m=i===0?s:[""],_=sv(m),E=0,I=0,x=0;E<r;++E)for(var T=0,v=Ml(t,f+1,f=W9(I=o[E])),C=t;T<_;++T)(C=dk(I>0?m[T]+" "+v:he(v,/&\f/g,m[T])))&&(u[x++]=C);return nf(t,e,n,i===0?rv:a,u,c,d)}function n6(t,e,n){return nf(t,e,n,ck,ef(Q9()),Ml(t,2,-2),0)}function PT(t,e,n,r){return nf(t,e,n,iv,Ml(t,0,r),Ml(t,r+1,-1),r)}function co(t,e){for(var n="",r=sv(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function r6(t,e,n,r){switch(t.type){case z9:if(t.children.length)break;case B9:case iv:return t.return=t.return||t.value;case ck:return"";case hk:return t.return=t.value+"{"+co(t.children,r)+"}";case rv:t.value=t.props.join(",")}return $n(n=co(t.children,r))?t.return=t.value+"{"+n+"}":""}function i6(t){var e=sv(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function s6(t){return function(e){e.root||(e=e.return)&&t(e)}}var o6=function(e,n,r){for(var i=0,s=0;i=s,s=er(),i===38&&s===12&&(n[r]=1),!Ll(s);)sn();return pu(e,Yt)},a6=function(e,n){var r=-1,i=44;do switch(Ll(i)){case 0:i===38&&er()===12&&(n[r]=1),e[r]+=o6(Yt-1,n,r);break;case 2:e[r]+=Dc(i);break;case 4:if(i===44){e[++r]=er()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=ef(i)}while(i=sn());return e},l6=function(e,n){return mk(a6(pk(e),n))},xT=new WeakMap,u6=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!xT.get(r))&&!i){xT.set(e,!0);for(var s=[],o=l6(n,s),a=r.props,u=0,c=0;u<o.length;u++)for(var d=0;d<a.length;d++,c++)e.props[c]=s[u]?o[u].replace(/&\f/g,a[d]):a[d]+" "+o[u]}}},c6=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function gk(t,e){switch(q9(t,e)){case 5103:return ce+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+t+jh+t+Pt+t+t;case 6828:case 4268:return ce+t+Pt+t+t;case 6165:return ce+t+Pt+"flex-"+t+t;case 5187:return ce+t+he(t,/(\w+).+(:[^]+)/,ce+"box-$1$2"+Pt+"flex-$1$2")+t;case 5443:return ce+t+Pt+"flex-item-"+he(t,/flex-|-self/,"")+t;case 4675:return ce+t+Pt+"flex-line-pack"+he(t,/align-content|flex-|-self/,"")+t;case 5548:return ce+t+Pt+he(t,"shrink","negative")+t;case 5292:return ce+t+Pt+he(t,"basis","preferred-size")+t;case 6060:return ce+"box-"+he(t,"-grow","")+ce+t+Pt+he(t,"grow","positive")+t;case 4554:return ce+he(t,/([^-])(transform)/g,"$1"+ce+"$2")+t;case 6187:return he(he(he(t,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),t,"")+t;case 5495:case 3959:return he(t,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return he(he(t,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+Pt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+t+t;case 4095:case 3583:case 4068:case 2532:return he(t,/(.+)-inline(.+)/,ce+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($n(t)-1-e>6)switch(mt(t,e+1)){case 109:if(mt(t,e+4)!==45)break;case 102:return he(t,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+jh+(mt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~fg(t,"stretch")?gk(he(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(mt(t,e+1)!==115)break;case 6444:switch(mt(t,$n(t)-3-(~fg(t,"!important")&&10))){case 107:return he(t,":",":"+ce)+t;case 101:return he(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ce+(mt(t,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+Pt+"$2box$3")+t}break;case 5936:switch(mt(t,e+11)){case 114:return ce+t+Pt+he(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ce+t+Pt+he(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ce+t+Pt+he(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return ce+t+Pt+t+t}return t}var h6=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case iv:e.return=gk(e.value,e.length);break;case hk:return co([Sa(e,{value:he(e.value,"@","@"+ce)})],i);case rv:if(e.length)return K9(e.props,function(s){switch(G9(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return co([Sa(e,{props:[he(s,/:(read-\w+)/,":"+jh+"$1")]})],i);case"::placeholder":return co([Sa(e,{props:[he(s,/:(plac\w+)/,":"+ce+"input-$1")]}),Sa(e,{props:[he(s,/:(plac\w+)/,":"+jh+"$1")]}),Sa(e,{props:[he(s,/:(plac\w+)/,Pt+"input-$1")]})],i)}return""})}},d6=[h6],_k=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(I){var x=I.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(I),I.setAttribute("data-s",""))})}var i=e.stylisPlugins||d6,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(I){for(var x=I.getAttribute("data-emotion").split(" "),T=1;T<x.length;T++)s[x[T]]=!0;a.push(I)});var u,c=[u6,c6];{var d,f=[r6,s6(function(I){d.insert(I)})],m=i6(c.concat(i,f)),_=function(x){return co(t6(x),m)};u=function(x,T,v,C){d=v,_(x?x+"{"+T.styles+"}":T.styles),C&&(E.inserted[T.name]=!0)}}var E={key:n,sheet:new $9({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:u};return E.sheet.hydrate(a),E},yk={exports:{}},_e={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ut=typeof Symbol=="function"&&Symbol.for,ov=ut?Symbol.for("react.element"):60103,av=ut?Symbol.for("react.portal"):60106,rf=ut?Symbol.for("react.fragment"):60107,sf=ut?Symbol.for("react.strict_mode"):60108,of=ut?Symbol.for("react.profiler"):60114,af=ut?Symbol.for("react.provider"):60109,lf=ut?Symbol.for("react.context"):60110,lv=ut?Symbol.for("react.async_mode"):60111,uf=ut?Symbol.for("react.concurrent_mode"):60111,cf=ut?Symbol.for("react.forward_ref"):60112,hf=ut?Symbol.for("react.suspense"):60113,f6=ut?Symbol.for("react.suspense_list"):60120,df=ut?Symbol.for("react.memo"):60115,ff=ut?Symbol.for("react.lazy"):60116,p6=ut?Symbol.for("react.block"):60121,m6=ut?Symbol.for("react.fundamental"):60117,g6=ut?Symbol.for("react.responder"):60118,_6=ut?Symbol.for("react.scope"):60119;function un(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case ov:switch(t=t.type,t){case lv:case uf:case rf:case of:case sf:case hf:return t;default:switch(t=t&&t.$$typeof,t){case lf:case cf:case ff:case df:case af:return t;default:return e}}case av:return e}}}function vk(t){return un(t)===uf}_e.AsyncMode=lv;_e.ConcurrentMode=uf;_e.ContextConsumer=lf;_e.ContextProvider=af;_e.Element=ov;_e.ForwardRef=cf;_e.Fragment=rf;_e.Lazy=ff;_e.Memo=df;_e.Portal=av;_e.Profiler=of;_e.StrictMode=sf;_e.Suspense=hf;_e.isAsyncMode=function(t){return vk(t)||un(t)===lv};_e.isConcurrentMode=vk;_e.isContextConsumer=function(t){return un(t)===lf};_e.isContextProvider=function(t){return un(t)===af};_e.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===ov};_e.isForwardRef=function(t){return un(t)===cf};_e.isFragment=function(t){return un(t)===rf};_e.isLazy=function(t){return un(t)===ff};_e.isMemo=function(t){return un(t)===df};_e.isPortal=function(t){return un(t)===av};_e.isProfiler=function(t){return un(t)===of};_e.isStrictMode=function(t){return un(t)===sf};_e.isSuspense=function(t){return un(t)===hf};_e.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===rf||t===uf||t===of||t===sf||t===hf||t===f6||typeof t=="object"&&t!==null&&(t.$$typeof===ff||t.$$typeof===df||t.$$typeof===af||t.$$typeof===lf||t.$$typeof===cf||t.$$typeof===m6||t.$$typeof===g6||t.$$typeof===_6||t.$$typeof===p6)};_e.typeOf=un;yk.exports=_e;var y6=yk.exports,wk=y6,v6={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},w6={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ek={};Ek[wk.ForwardRef]=v6;Ek[wk.Memo]=w6;var E6=!0;function T6(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var Tk=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||E6===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},Ik=function(e,n,r){Tk(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function I6(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var S6={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},C6=/[A-Z]|^ms/g,R6=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Sk=function(e){return e.charCodeAt(1)===45},bT=function(e){return e!=null&&typeof e!="boolean"},xp=uk(function(t){return Sk(t)?t:t.replace(C6,"-$&").toLowerCase()}),NT=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(R6,function(r,i,s){return Bn={name:i,styles:s,next:Bn},i})}return S6[e]!==1&&!Sk(e)&&typeof n=="number"&&n!==0?n+"px":n};function Vl(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Bn={name:n.name,styles:n.styles,next:Bn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Bn={name:r.name,styles:r.styles,next:Bn},r=r.next;var i=n.styles+";";return i}return A6(t,e,n)}case"function":{if(t!==void 0){var s=Bn,o=n(t);return Bn=s,Vl(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function A6(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Vl(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":bT(o)&&(r+=xp(s)+":"+NT(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)bT(o[a])&&(r+=xp(s)+":"+NT(s,o[a])+";");else{var u=Vl(t,e,o);switch(s){case"animation":case"animationName":{r+=xp(s)+":"+u+";";break}default:r+=s+"{"+u+"}"}}}return r}var OT=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Bn,uv=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";Bn=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=Vl(r,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=Vl(r,n,e[a]),i&&(s+=o[a]);OT.lastIndex=0;for(var u="",c;(c=OT.exec(s))!==null;)u+="-"+c[1];var d=I6(s)+u;return{name:d,styles:s,next:Bn}},k6=function(e){return e()},Ck=_0.useInsertionEffect?_0.useInsertionEffect:!1,P6=Ck||k6,DT=Ck||ne.useLayoutEffect,Rk=ne.createContext(typeof HTMLElement<"u"?_k({key:"css"}):null),x6=Rk.Provider,Ak=function(e){return ne.forwardRef(function(n,r){var i=ne.useContext(Rk);return e(n,i,r)})},pf=ne.createContext({}),bp={exports:{}},MT;function kk(){return MT||(MT=1,function(t){function e(){return t.exports=e=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])}return n},t.exports.__esModule=!0,t.exports.default=t.exports,e.apply(this,arguments)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}(bp)),bp.exports}kk();var b6=Ak(function(t,e){var n=t.styles,r=uv([n],void 0,ne.useContext(pf)),i=ne.useRef();return DT(function(){var s=e.key+"-global",o=new e.sheet.constructor({key:s,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),a=!1,u=document.querySelector('style[data-emotion="'+s+" "+r.name+'"]');return e.sheet.tags.length&&(o.before=e.sheet.tags[0]),u!==null&&(a=!0,u.setAttribute("data-emotion",s),o.hydrate([u])),i.current=[o,a],function(){o.flush()}},[e]),DT(function(){var s=i.current,o=s[0],a=s[1];if(a){s[1]=!1;return}if(r.next!==void 0&&Ik(e,r.next,!0),o.tags.length){var u=o.tags[o.tags.length-1].nextElementSibling;o.before=u,o.flush()}e.insert("",r,o,!1)},[e,r.name]),null});function Pk(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return uv(e)}var N6=function(){var e=Pk.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},O6=F9,D6=function(e){return e!=="theme"},LT=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?O6:D6},VT=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},M6=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return Tk(n,r,i),P6(function(){return Ik(n,r,i)}),null},L6=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=VT(e,n,r),u=a||LT(i),c=!u("as");return function(){var d=arguments,f=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&f.push("label:"+s+";"),d[0]==null||d[0].raw===void 0)f.push.apply(f,d);else{f.push(d[0][0]);for(var m=d.length,_=1;_<m;_++)f.push(d[_],d[0][_])}var E=Ak(function(I,x,T){var v=c&&I.as||i,C="",N=[],M=I;if(I.theme==null){M={};for(var L in I)M[L]=I[L];M.theme=ne.useContext(pf)}typeof I.className=="string"?C=T6(x.registered,N,I.className):I.className!=null&&(C=I.className+" ");var w=uv(f.concat(N),x.registered,M);C+=x.key+"-"+w.name,o!==void 0&&(C+=" "+o);var y=c&&a===void 0?LT(v):u,S={};for(var R in I)c&&R==="as"||y(R)&&(S[R]=I[R]);return S.className=C,S.ref=T,ne.createElement(ne.Fragment,null,ne.createElement(M6,{cache:x,serialized:w,isStringTag:typeof v=="string"}),ne.createElement(v,S))});return E.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",E.defaultProps=e.defaultProps,E.__emotion_real=E,E.__emotion_base=i,E.__emotion_styles=f,E.__emotion_forwardProp=a,Object.defineProperty(E,"toString",{value:function(){return"."+o}}),E.withComponent=function(I,x){return t(I,me({},n,x,{shouldForwardProp:VT(E,x,!0)})).apply(void 0,f)},E}},V6=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],mg=L6.bind();V6.forEach(function(t){mg[t]=mg(t)});let gg;typeof document=="object"&&(gg=_k({key:"css",prepend:!0}));function F6(t){const{injectFirst:e,children:n}=t;return e&&gg?O.jsx(x6,{value:gg,children:n}):n}function U6(t){return t==null||Object.keys(t).length===0}function j6(t){const{styles:e,defaultTheme:n={}}=t,r=typeof e=="function"?i=>e(U6(i)?n:i):e;return O.jsx(b6,{styles:r})}function $6(t,e){return mg(t,e)}const B6=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))},z6=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:j6,StyledEngineProvider:F6,ThemeContext:pf,css:Pk,default:$6,internal_processStyles:B6,keyframes:N6},Symbol.toStringTag,{value:"Module"}));function W6(t){return Object.keys(t).length===0}function H6(t=null){const e=ne.useContext(pf);return!e||W6(e)?t:e}const q6=nv();function G6(t=q6){return H6(t)}function K6({props:t,name:e,defaultTheme:n,themeId:r}){let i=G6(n);return r&&(i=i[r]||i),W3({theme:i,name:e,props:t})}const Q6=["sx"],Y6=t=>{var e,n;const r={systemProps:{},otherProps:{}},i=(e=t==null||(n=t.theme)==null?void 0:n.unstable_sxConfig)!=null?e:fu;return Object.keys(t).forEach(s=>{i[s]?r.systemProps[s]=t[s]:r.otherProps[s]=t[s]}),r};function X6(t){const{sx:e}=t,n=bi(t,Q6),{systemProps:r,otherProps:i}=Y6(n);let s;return Array.isArray(e)?s=[r,...e]:typeof e=="function"?s=(...o)=>{const a=e(...o);return Xr(a)?me({},r,a):r}:s=me({},r,e),me({},i,{sx:s})}const J6=Object.freeze(Object.defineProperty({__proto__:null,default:Zd,extendSxProp:X6,unstable_createStyleFunctionSx:ak,unstable_defaultSxConfig:fu},Symbol.toStringTag,{value:"Module"}));function Z6(t,e){return me({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}var Ke={},xk={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(xk);var bk=xk.exports;const ej=Ci(P3),tj=Ci(B3);var Nk=bk;Object.defineProperty(Ke,"__esModule",{value:!0});Ke.alpha=Lk;Ke.blend=pj;Ke.colorChannel=void 0;var nj=Ke.darken=hv;Ke.decomposeColor=Tn;Ke.emphasize=Vk;var rj=Ke.getContrastRatio=uj;Ke.getLuminance=$h;Ke.hexToRgb=Ok;Ke.hslToRgb=Mk;var ij=Ke.lighten=dv;Ke.private_safeAlpha=cj;Ke.private_safeColorChannel=void 0;Ke.private_safeDarken=hj;Ke.private_safeEmphasize=fj;Ke.private_safeLighten=dj;Ke.recomposeColor=Ko;Ke.rgbToHex=lj;var FT=Nk(ej),sj=Nk(tj);function cv(t,e=0,n=1){return(0,sj.default)(t,e,n)}function Ok(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function oj(t){const e=t.toString(16);return e.length===1?`0${e}`:e}function Tn(t){if(t.type)return t;if(t.charAt(0)==="#")return Tn(Ok(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error((0,FT.default)(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error((0,FT.default)(10,i))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:n,values:r,colorSpace:i}}const Dk=t=>{const e=Tn(t);return e.values.slice(0,3).map((n,r)=>e.type.indexOf("hsl")!==-1&&r!==0?`${n}%`:n).join(" ")};Ke.colorChannel=Dk;const aj=(t,e)=>{try{return Dk(t)}catch{return t}};Ke.private_safeColorChannel=aj;function Ko(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.indexOf("rgb")!==-1?r=r.map((i,s)=>s<3?parseInt(i,10):i):e.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function lj(t){if(t.indexOf("#")===0)return t;const{values:e}=Tn(t);return`#${e.map((n,r)=>oj(r===3?Math.round(255*n):n)).join("")}`}function Mk(t){t=Tn(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,s=r*Math.min(i,1-i),o=(c,d=(c+n/30)%12)=>i-s*Math.max(Math.min(d-3,9-d,1),-1);let a="rgb";const u=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return t.type==="hsla"&&(a+="a",u.push(e[3])),Ko({type:a,values:u})}function $h(t){t=Tn(t);let e=t.type==="hsl"||t.type==="hsla"?Tn(Mk(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function uj(t,e){const n=$h(t),r=$h(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Lk(t,e){return t=Tn(t),e=cv(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,Ko(t)}function cj(t,e,n){try{return Lk(t,e)}catch{return t}}function hv(t,e){if(t=Tn(t),e=cv(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]*=1-e;return Ko(t)}function hj(t,e,n){try{return hv(t,e)}catch{return t}}function dv(t,e){if(t=Tn(t),e=cv(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return Ko(t)}function dj(t,e,n){try{return dv(t,e)}catch{return t}}function Vk(t,e=.15){return $h(t)>.5?hv(t,e):dv(t,e)}function fj(t,e,n){try{return Vk(t,e)}catch{return t}}function pj(t,e,n,r=1){const i=(u,c)=>Math.round((u**(1/r)*(1-n)+c**(1/r)*n)**r),s=Tn(t),o=Tn(e),a=[i(s.values[0],o.values[0]),i(s.values[1],o.values[1]),i(s.values[2],o.values[2])];return Ko({type:"rgb",values:a})}const Fl={black:"#000",white:"#fff"},mj={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Ps={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},xs={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Ca={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},bs={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Ns={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Os={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},gj=["mode","contrastThreshold","tonalOffset"],UT={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Fl.white,default:Fl.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Np={text:{primary:Fl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Fl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function jT(t,e,n,r){const i=r.light||r,s=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=ij(t.main,i):e==="dark"&&(t.dark=nj(t.main,s)))}function _j(t="light"){return t==="dark"?{main:bs[200],light:bs[50],dark:bs[400]}:{main:bs[700],light:bs[400],dark:bs[800]}}function yj(t="light"){return t==="dark"?{main:Ps[200],light:Ps[50],dark:Ps[400]}:{main:Ps[500],light:Ps[300],dark:Ps[700]}}function vj(t="light"){return t==="dark"?{main:xs[500],light:xs[300],dark:xs[700]}:{main:xs[700],light:xs[400],dark:xs[800]}}function wj(t="light"){return t==="dark"?{main:Ns[400],light:Ns[300],dark:Ns[700]}:{main:Ns[700],light:Ns[500],dark:Ns[900]}}function Ej(t="light"){return t==="dark"?{main:Os[400],light:Os[300],dark:Os[700]}:{main:Os[800],light:Os[500],dark:Os[900]}}function Tj(t="light"){return t==="dark"?{main:Ca[400],light:Ca[300],dark:Ca[700]}:{main:"#ed6c02",light:Ca[500],dark:Ca[900]}}function Ij(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2}=t,i=bi(t,gj),s=t.primary||_j(e),o=t.secondary||yj(e),a=t.error||vj(e),u=t.info||wj(e),c=t.success||Ej(e),d=t.warning||Tj(e);function f(I){return rj(I,Np.text.primary)>=n?Np.text.primary:UT.text.primary}const m=({color:I,name:x,mainShade:T=500,lightShade:v=300,darkShade:C=700})=>{if(I=me({},I),!I.main&&I[T]&&(I.main=I[T]),!I.hasOwnProperty("main"))throw new Error(Dl(11,x?` (${x})`:"",T));if(typeof I.main!="string")throw new Error(Dl(12,x?` (${x})`:"",JSON.stringify(I.main)));return jT(I,"light",v,r),jT(I,"dark",C,r),I.contrastText||(I.contrastText=f(I.main)),I},_={dark:Np,light:UT};return Zn(me({common:me({},Fl),mode:e,primary:m({color:s,name:"primary"}),secondary:m({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:m({color:a,name:"error"}),warning:m({color:d,name:"warning"}),info:m({color:u,name:"info"}),success:m({color:c,name:"success"}),grey:mj,contrastThreshold:n,getContrastText:f,augmentColor:m,tonalOffset:r},_[e]),i)}const Sj=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function Cj(t){return Math.round(t*1e5)/1e5}const $T={textTransform:"uppercase"},BT='"Roboto", "Helvetica", "Arial", sans-serif';function Rj(t,e){const n=typeof e=="function"?e(t):e,{fontFamily:r=BT,fontSize:i=14,fontWeightLight:s=300,fontWeightRegular:o=400,fontWeightMedium:a=500,fontWeightBold:u=700,htmlFontSize:c=16,allVariants:d,pxToRem:f}=n,m=bi(n,Sj),_=i/14,E=f||(T=>`${T/c*_}rem`),I=(T,v,C,N,M)=>me({fontFamily:r,fontWeight:T,fontSize:E(v),lineHeight:C},r===BT?{letterSpacing:`${Cj(N/v)}em`}:{},M,d),x={h1:I(s,96,1.167,-1.5),h2:I(s,60,1.2,-.5),h3:I(o,48,1.167,0),h4:I(o,34,1.235,.25),h5:I(o,24,1.334,0),h6:I(a,20,1.6,.15),subtitle1:I(o,16,1.75,.15),subtitle2:I(a,14,1.57,.1),body1:I(o,16,1.5,.15),body2:I(o,14,1.43,.15),button:I(a,14,1.75,.4,$T),caption:I(o,12,1.66,.4),overline:I(o,12,2.66,1,$T),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Zn(me({htmlFontSize:c,pxToRem:E,fontFamily:r,fontSize:i,fontWeightLight:s,fontWeightRegular:o,fontWeightMedium:a,fontWeightBold:u},x),m,{clone:!1})}const Aj=.2,kj=.14,Pj=.12;function ke(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${Aj})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${kj})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${Pj})`].join(",")}const xj=["none",ke(0,2,1,-1,0,1,1,0,0,1,3,0),ke(0,3,1,-2,0,2,2,0,0,1,5,0),ke(0,3,3,-2,0,3,4,0,0,1,8,0),ke(0,2,4,-1,0,4,5,0,0,1,10,0),ke(0,3,5,-1,0,5,8,0,0,1,14,0),ke(0,3,5,-1,0,6,10,0,0,1,18,0),ke(0,4,5,-2,0,7,10,1,0,2,16,1),ke(0,5,5,-3,0,8,10,1,0,3,14,2),ke(0,5,6,-3,0,9,12,1,0,3,16,2),ke(0,6,6,-3,0,10,14,1,0,4,18,3),ke(0,6,7,-4,0,11,15,1,0,4,20,3),ke(0,7,8,-4,0,12,17,2,0,5,22,4),ke(0,7,8,-4,0,13,19,2,0,5,24,4),ke(0,7,9,-4,0,14,21,2,0,5,26,4),ke(0,8,9,-5,0,15,22,2,0,6,28,5),ke(0,8,10,-5,0,16,24,2,0,6,30,5),ke(0,8,11,-5,0,17,26,2,0,6,32,5),ke(0,9,11,-5,0,18,28,2,0,7,34,6),ke(0,9,12,-6,0,19,29,2,0,7,36,6),ke(0,10,13,-6,0,20,31,3,0,8,38,7),ke(0,10,13,-6,0,21,33,3,0,8,40,7),ke(0,10,14,-6,0,22,35,3,0,8,42,7),ke(0,11,14,-7,0,23,36,3,0,9,44,8),ke(0,11,15,-7,0,24,38,3,0,9,46,8)],bj=["duration","easing","delay"],Nj={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Oj={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function zT(t){return`${Math.round(t)}ms`}function Dj(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function Mj(t){const e=me({},Nj,t.easing),n=me({},Oj,t.duration);return me({getAutoHeightDuration:Dj,create:(i=["all"],s={})=>{const{duration:o=n.standard,easing:a=e.easeInOut,delay:u=0}=s;return bi(s,bj),(Array.isArray(i)?i:[i]).map(c=>`${c} ${typeof o=="string"?o:zT(o)} ${a} ${typeof u=="string"?u:zT(u)}`).join(",")}},t,{easing:e,duration:n})}const Lj={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Vj=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Fj(t={},...e){const{mixins:n={},palette:r={},transitions:i={},typography:s={}}=t,o=bi(t,Vj);if(t.vars)throw new Error(Dl(18));const a=Ij(r),u=nv(t);let c=Zn(u,{mixins:Z6(u.breakpoints,n),palette:a,shadows:xj.slice(),typography:Rj(a,s),transitions:Mj(i),zIndex:me({},Lj)});return c=Zn(c,o),c=e.reduce((d,f)=>Zn(d,f),c),c.unstable_sxConfig=me({},fu,o==null?void 0:o.unstable_sxConfig),c.unstable_sx=function(f){return Zd({sx:f,theme:this})},c}const Fk=Fj(),Uk="$$material";function Uj({props:t,name:e}){return K6({props:t,name:e,defaultTheme:Fk,themeId:Uk})}var mu={},Op={exports:{}},WT;function jj(){return WT||(WT=1,function(t){function e(n,r){if(n==null)return{};var i={};for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){if(r.indexOf(s)>=0)continue;i[s]=n[s]}return i}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}(Op)),Op.exports}const $j=Ci(z6),Bj=Ci(k3),zj=Ci(M3),Wj=Ci(D3),Hj=Ci(L9),qj=Ci(J6);var Qo=bk;Object.defineProperty(mu,"__esModule",{value:!0});var Gj=mu.default=o$;mu.shouldForwardProp=Lc;mu.systemDefaultTheme=void 0;var cn=Qo(kk()),_g=Qo(jj()),HT=e$($j),Kj=Bj;Qo(zj);Qo(Wj);var Qj=Qo(Hj),Yj=Qo(qj);const Xj=["ownerState"],Jj=["variants"],Zj=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function jk(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(jk=function(r){return r?n:e})(t)}function e$(t,e){if(t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=jk(e);if(n&&n.has(t))return n.get(t);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=i?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function t$(t){return Object.keys(t).length===0}function n$(t){return typeof t=="string"&&t.charCodeAt(0)>96}function Lc(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const r$=mu.systemDefaultTheme=(0,Qj.default)(),i$=t=>t&&t.charAt(0).toLowerCase()+t.slice(1);function lc({defaultTheme:t,theme:e,themeId:n}){return t$(e)?t:e[n]||e}function s$(t){return t?(e,n)=>n[t]:null}function Vc(t,e){let{ownerState:n}=e,r=(0,_g.default)(e,Xj);const i=typeof t=="function"?t((0,cn.default)({ownerState:n},r)):t;if(Array.isArray(i))return i.flatMap(s=>Vc(s,(0,cn.default)({ownerState:n},r)));if(i&&typeof i=="object"&&Array.isArray(i.variants)){const{variants:s=[]}=i;let a=(0,_g.default)(i,Jj);return s.forEach(u=>{let c=!0;typeof u.props=="function"?c=u.props((0,cn.default)({ownerState:n},r,n)):Object.keys(u.props).forEach(d=>{(n==null?void 0:n[d])!==u.props[d]&&r[d]!==u.props[d]&&(c=!1)}),c&&(Array.isArray(a)||(a=[a]),a.push(typeof u.style=="function"?u.style((0,cn.default)({ownerState:n},r,n)):u.style))}),a}return i}function o$(t={}){const{themeId:e,defaultTheme:n=r$,rootShouldForwardProp:r=Lc,slotShouldForwardProp:i=Lc}=t,s=o=>(0,Yj.default)((0,cn.default)({},o,{theme:lc((0,cn.default)({},o,{defaultTheme:n,themeId:e}))}));return s.__mui_systemSx=!0,(o,a={})=>{(0,HT.internal_processStyles)(o,M=>M.filter(L=>!(L!=null&&L.__mui_systemSx)));const{name:u,slot:c,skipVariantsResolver:d,skipSx:f,overridesResolver:m=s$(i$(c))}=a,_=(0,_g.default)(a,Zj),E=d!==void 0?d:c&&c!=="Root"&&c!=="root"||!1,I=f||!1;let x,T=Lc;c==="Root"||c==="root"?T=r:c?T=i:n$(o)&&(T=void 0);const v=(0,HT.default)(o,(0,cn.default)({shouldForwardProp:T,label:x},_)),C=M=>typeof M=="function"&&M.__emotion_real!==M||(0,Kj.isPlainObject)(M)?L=>Vc(M,(0,cn.default)({},L,{theme:lc({theme:L.theme,defaultTheme:n,themeId:e})})):M,N=(M,...L)=>{let w=C(M);const y=L?L.map(C):[];u&&m&&y.push(k=>{const P=lc((0,cn.default)({},k,{defaultTheme:n,themeId:e}));if(!P.components||!P.components[u]||!P.components[u].styleOverrides)return null;const A=P.components[u].styleOverrides,ct={};return Object.entries(A).forEach(([or,Ni])=>{ct[or]=Vc(Ni,(0,cn.default)({},k,{theme:P}))}),m(k,ct)}),u&&!E&&y.push(k=>{var P;const A=lc((0,cn.default)({},k,{defaultTheme:n,themeId:e})),ct=A==null||(P=A.components)==null||(P=P[u])==null?void 0:P.variants;return Vc({variants:ct},(0,cn.default)({},k,{theme:A}))}),I||y.push(s);const S=y.length-L.length;if(Array.isArray(M)&&S>0){const k=new Array(S).fill("");w=[...M,...k],w.raw=[...M.raw,...k]}const R=v(w,...y);return o.muiName&&(R.muiName=o.muiName),R};return v.withConfig&&(N.withConfig=v.withConfig),N}}function a$(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const l$=t=>a$(t)&&t!=="classes",u$=Gj({themeId:Uk,defaultTheme:Fk,rootShouldForwardProp:l$});function c$(t){return nk("MuiSvgIcon",t)}j3("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const h$=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],d$=t=>{const{color:e,fontSize:n,classes:r}=t,i={root:["root",e!=="inherit"&&`color${fs(e)}`,`fontSize${fs(n)}`]};return L3(i,c$,r)},f$=u$("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${fs(n.color)}`],e[`fontSize${fs(n.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var n,r,i,s,o,a,u,c,d,f,m,_,E;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=t.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=t.transitions)==null||(i=i.duration)==null?void 0:i.shorter}),fontSize:{inherit:"inherit",small:((s=t.typography)==null||(o=s.pxToRem)==null?void 0:o.call(s,20))||"1.25rem",medium:((a=t.typography)==null||(u=a.pxToRem)==null?void 0:u.call(a,24))||"1.5rem",large:((c=t.typography)==null||(d=c.pxToRem)==null?void 0:d.call(c,35))||"2.1875rem"}[e.fontSize],color:(f=(m=(t.vars||t).palette)==null||(m=m[e.color])==null?void 0:m.main)!=null?f:{action:(_=(t.vars||t).palette)==null||(_=_.action)==null?void 0:_.active,disabled:(E=(t.vars||t).palette)==null||(E=E.action)==null?void 0:E.disabled,inherit:void 0}[e.color]}}),yg=ne.forwardRef(function(e,n){const r=Uj({props:e,name:"MuiSvgIcon"}),{children:i,className:s,color:o="inherit",component:a="svg",fontSize:u="medium",htmlColor:c,inheritViewBox:d=!1,titleAccess:f,viewBox:m="0 0 24 24"}=r,_=bi(r,h$),E=ne.isValidElement(i)&&i.type==="svg",I=me({},r,{color:o,component:a,fontSize:u,instanceFontSize:e.fontSize,inheritViewBox:d,viewBox:m,hasSvgAsChild:E}),x={};d||(x.viewBox=m);const T=d$(I);return O.jsxs(f$,me({as:a,className:z3(T.root,s),focusable:"false",color:c,"aria-hidden":f?void 0:!0,role:f?"img":void 0,ref:n},x,_,E&&i.props,{ownerState:I,children:[E?i.props.children:i,f?O.jsx("title",{children:f}):null]}))});yg.muiName="SvgIcon";function Ts(t,e){function n(r,i){return O.jsx(yg,me({"data-testid":`${e}Icon`,ref:i},r,{children:t}))}return n.muiName=yg.muiName,ne.memo(ne.forwardRef(n))}const fv=Ts(O.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"}),"Cancel"),$k=Ts(O.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckCircle"),p$=Ts(O.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),Bk=Ts(O.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever"),m$=Ts(O.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),g$=Ts(O.jsx("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"}),"Google"),_$=Ts(O.jsx("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"}),"Logout");function y$(){const{user:t,handleSingInWithGoogle:e,logout:n,singIn:r}=Qy();return O.jsx(O.Fragment,{children:t?O.jsx(rn,{type:"button",onClick:n,className:"logout",children:O.jsx(Oo,{text:"Logout",icon:O.jsx(_$,{})})}):O.jsxs(O.Fragment,{children:[O.jsx(rn,{onClick:r,title:"Sing In",className:"generic"}),O.jsx(rn,{type:"submit",onClick:e,className:"google",children:O.jsx(Oo,{text:"Sign In With Google",icon:O.jsx(g$,{})})})]})})}function v$(){const{formData:t,singIn:e,handleChange:n}=Qy();return O.jsxs(O.Fragment,{children:[O.jsx(Hl,{text:"Authenticacion"}),O.jsxs("form",{onSubmit:e,className:"mt-10 flex flex-col justify-start items-start gap-y-10",children:[O.jsx(Sr,{label:"Email",placeholder:"Ingresa tu email",id:"email",name:"email",value:t.email,onChange:r=>n("email",r.target.value)}),O.jsx(Sr,{label:"Contraseña",placeholder:"Ingresa tu contraseña",id:"password",name:"password",value:t.password,onChange:r=>n("password",r.target.value)}),O.jsx(y$,{})]}),O.jsx(A3,{}),O.jsx(Wl,{})]})}const qT=Ny(cu,"movies"),GT=Ny(cu,"music");function zk(){const[t,e]=ne.useState([]),[n,r]=ne.useState({title:"",releaseDate:"",receivedAndOscar:!1}),i=(u,c)=>{r(d=>({...d,[u]:c}))},s=async()=>{try{const c=(await n5(qT)).docs.map(d=>({...d.data(),id:d.id}));e(c),r("")}catch(u){console.log(u)}};ne.useEffect(()=>{s()},[]);async function o(u){var c;u.preventDefault();try{const d=await Uy(qT,{title:n.title,releaseDate:n.releaseDate,receivedAndOscar:n.receivedAndOscar,userIdAuth:(c=Yr==null?void 0:Yr.currentUser)==null?void 0:c.uid});s()}catch(d){console.log(d)}}async function a(u){const c=Oy(cu,"movies",u);try{await MA(c),s()}catch(d){console.log(d)}}return{movieList:t,formMovies:n,handleChange:i,handleSubmit:o,handleDeleteMovie:a}}function w$(){const{movieList:t,handleDeleteMovie:e}=zk();return O.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 sm:mt-7 md:mt-0 gap-x-10",children:t.map(n=>O.jsxs("div",{className:"mb-10 flex flex-col justify-center items-center",children:[O.jsx("h1",{className:"text-xl font-extrabold text-purple-700",children:n.title}),O.jsxs("span",{className:"text-lg font-bold text-amber-500",children:["Year: ",n.releaseDate]}),O.jsx("div",{children:n.receivedAndOscar?O.jsx($k,{style:{color:"green"}}):O.jsx(fv,{style:{color:"red"}})}),O.jsx("div",{className:"flex flex-col justify-center items-center gap-y-4",children:O.jsx(rn,{onClick:()=>e(n.id),className:"removeMovie",children:O.jsx(Oo,{text:"Remove",icon:O.jsx(Bk,{})})})})]},n.id))})}function E$(){const{formMovies:t,handleChange:e,handleSubmit:n}=zk();return O.jsxs(O.Fragment,{children:[O.jsx(Hl,{text:"Firestore Database"}),O.jsxs("div",{className:"grid lg:grid-cols-2 sm:grid-cols-1 gap-x-20 mt-10",children:[O.jsxs("form",{onSubmit:n,className:"flex flex-col justify-center items-center gap-y-4",children:[O.jsx(Sr,{label:"Title",placeholder:"Ingresa el título de la película",id:"title",name:"tite",value:t.title,onChange:r=>e("title",r.target.value)}),O.jsx(Sr,{label:"ReleaseDate",placeholder:"Ingresa la fecha de estreno",id:"releaseDate",name:"releaseDate",value:t.releaseDate,onChange:r=>e("releaseDate",r.target.value)}),O.jsx(Sr,{label:"Received And Oscar",id:"receivedAndOscar",type:"checkbox",name:"receivedAndOscar",checked:t.receivedAndOscar,onChange:r=>e("receivedAndOscar",r.target.checked)}),O.jsx(rn,{title:"Submit",className:"generic"})]}),O.jsx(w$,{})]}),O.jsx(Wl,{})]})}function Wk(){const[t,e]=ne.useState({title:"",album:"",receivedAndBillboard:!1}),[n,r]=ne.useState([]),i=(a,u)=>{e(c=>({...c,[a]:u}))};ne.useEffect(()=>{const a=r5(GT,u=>{r(u.docs.map(c=>({id:c.id,data:c.data()})))});return()=>{a()}},[]);async function s(a){a.preventDefault();try{const u=await Uy(GT,{title:t.title,album:t.album,receivedAndBillboard:t.receivedAndBillboard})}catch(u){console.log(u)}}async function o(a){const u=Oy(cu,"music",a);try{await MA(u)}catch(c){console.log(c)}}return{formMusic:t,handleChange:i,musicList:n,handleSubmit:s,handleDeleteMusic:o}}function T$(){const{musicList:t,handleDeleteMusic:e}=Wk();return O.jsx("div",{className:"flex justify-center items-center max-w-screen-lg mx-auto",children:O.jsx("div",{className:"grid md:grid-cols-5 sm:grid-cols-1 mt-10",children:t.map(n=>O.jsxs("div",{className:"mb-10 bg-emerald-200 w-72 mx-auto rounded-md p-3 flex flex-col justify-center items-center",children:[O.jsx("h1",{className:"text-gray-800 text-xl font-extrabold",children:n.data.title}),O.jsxs("span",{className:"text-amber-500 text-lg font-bold",children:["Album: ",n.data.album]}),O.jsx("div",{children:n.receivedAndOscar?O.jsx($k,{style:{color:"green"}}):O.jsx(fv,{style:{color:"red"}})}),O.jsx("div",{className:"flex flex-col gap-y-4",children:O.jsx(rn,{onClick:()=>e(n.id),className:"removeMovie",children:O.jsx(Oo,{text:"Remove",icon:O.jsx(Bk,{})})})})]},n.id))})})}function I$(){const{formMusic:t,handleChange:e,handleSubmit:n}=Wk();return O.jsxs(O.Fragment,{children:[O.jsx("div",{className:"text-center",children:O.jsx(Hl,{text:"Firestore Database Real Time"})}),O.jsxs("div",{children:[O.jsxs("form",{className:"flex flex-col justify-center items-center gap-y-4 mt-5",onSubmit:n,children:[O.jsx(Sr,{label:"Title",placeholder:"Ingresa el título de la película",id:"title",name:"title",value:t.title,onChange:r=>e("title",r.target.value)}),O.jsx(Sr,{label:"Album",placeholder:"Ingresa el album donde pertenece",id:"album",name:"album",value:t.album,onChange:r=>e("album",r.target.value)}),O.jsx(Sr,{label:"Received And Billboard",id:"receivedAndBillboard",type:"checkbox",name:"receivedAndBillboard",checked:t.receivedAndBillboard,onChange:r=>e("receivedAndBillboard",r.target.checked)}),O.jsx(rn,{title:"Submit",className:"generic"})]}),O.jsx(T$,{})]}),O.jsx(Wl,{})]})}let uc;const S$=new Uint8Array(16);function C$(){if(!uc&&(uc=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!uc))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return uc(S$)}const dt=[];for(let t=0;t<256;++t)dt.push((t+256).toString(16).slice(1));function R$(t,e=0){return dt[t[e+0]]+dt[t[e+1]]+dt[t[e+2]]+dt[t[e+3]]+"-"+dt[t[e+4]]+dt[t[e+5]]+"-"+dt[t[e+6]]+dt[t[e+7]]+"-"+dt[t[e+8]]+dt[t[e+9]]+"-"+dt[t[e+10]]+dt[t[e+11]]+dt[t[e+12]]+dt[t[e+13]]+dt[t[e+14]]+dt[t[e+15]]}const A$=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),KT={randomUUID:A$};function Hk(t,e,n){if(KT.randomUUID&&!e&&!t)return KT.randomUUID();t=t||{};const r=t.random||(t.rng||C$)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,R$(r)}function pv(){const[t,e]=ne.useState(""),[n,r]=ne.useState([]),[i,s]=ne.useState(!1),[o,a]=ne.useState(""),u=_=>{e(_.target.value)};return ne.useEffect(()=>{G4(Zu(oc),_=>{r([]);const E=_.val();E!==null&&Object.values(E).map(I=>{r(x=>[...x,I])})})},[]),{tools:t,toolsContent:n,isEdit:i,editTool:o,handleChange:u,writeToDB:()=>{const _=Hk();uR(Zu(oc,`/${_}`),{todo:t,uid:_}),e("")},handleDelete:_=>{W4(Zu(oc,`/${_.uid}`))},handleEditSub:_=>{s(!0),a(_.uid),e(_.todo)},handleEdit:_=>{H4(Zu(oc,`/${o}`),{todo:_,uid:o}),a(!0),e("")}}}function k$(){const{handleEdit:t,handleEditDeleteComplete:e}=pv();return O.jsx(O.Fragment,{children:O.jsxs("div",{className:"flex gap-x-5",children:[O.jsx(rn,{className:"google",onClick:()=>t(tools),title:"Edit"}),O.jsx(rn,{className:"google",onClick:e,children:O.jsx(Oo,{icon:O.jsx(fv,{})})})]})})}function P$(){const{toolsContent:t,handleDelete:e,handleEditSub:n}=pv();return O.jsx(O.Fragment,{children:t.map(r=>O.jsxs("div",{className:"bg-blue-200 p-4 mb-4 flex flex-col justify-center items-center rounded-md w-72",children:[O.jsx("h1",{className:"text-2xl font-extrabold",children:r.todo}),O.jsxs("div",{className:"flex flex-row mt-3 gap-x-5",children:[O.jsx(rn,{onClick:()=>e(r),children:O.jsx(Oo,{icon:O.jsx(p$,{className:"text-red-500",style:{width:"30px",height:"30px"}})})}),O.jsx("button",{onClick:()=>{console.log(n(r)),n(r)},children:O.jsx(m$,{className:"text-green-500",style:{width:"30px",height:"30px"}})})]})]},r.uid))})}const x$=()=>{const{tools:t,isEdit:e,handleChange:n,writeToDB:r}=pv();return O.jsxs(O.Fragment,{children:[O.jsx(Hl,{text:"Real Time DataBase"}),O.jsxs("div",{className:"mt-10 mb-10 flex gap-y-5 flex-col",children:[O.jsx(Sr,{label:"Tarea",type:"text",placeholder:"Agrega una tarea",value:t,onChange:n}),e?O.jsx(k$,{}):O.jsx(rn,{onClick:r,className:"google",title:"Add"})]}),O.jsx("div",{className:"grid md:grid-cols-4 sm:grid-cols-1 gap-x-10",children:O.jsx(P$,{})}),O.jsx(Wl,{})]})};function qk(){const[t,e]=ne.useState(null),[n,r]=ne.useState([]);async function i(o){const a=ET(TT,`cristiano-ronaldo/${Hk()}`);return await y3(a,o)}const s=async o=>{o.preventDefault();try{const a=await i(t);console.log({result:a})}catch{alert("Lo sentimos fallo")}};return ne.useEffect(()=>{v3(ET(TT,"cristiano-ronaldo")).then(o=>{r([]),o.items.map(a=>{w3(a).then(u=>{r(c=>[...c,u])})})})},[]),{setFiles:e,handleSubmit:s,imgsContent:n}}function b$(){const{imgsContent:t}=qk();return O.jsx("div",{className:"grid md:grid-cols-6 sm:grid-cols-2 gap-x-5 gap-y-5 md:p-0 sm:p-3",children:t.map(e=>O.jsx("div",{className:"bg-amber-300 p-3 rounded-md",children:O.jsx("img",{className:"rounded-lg w-[200px] h-[200px]",src:e})},e.id))})}const N$=()=>{const{setFiles:t,handleSubmit:e}=qk();return O.jsxs(O.Fragment,{children:[O.jsx(Hl,{text:"Storage"}),O.jsxs("div",{className:"mt-3 mb-10 flex flex-col gap-y-4",children:[O.jsxs(rn,{type:"button",className:`w-72 p-1 rounded-md border-[1px] text-white bg-pink-300
          text-xl text-center mx-auto h-10 font-bold hover:scale-110 hover:transition-all hover:bg-red-300 hover:text-white`,children:[O.jsx("label",{htmlFor:"storage",className:"mx-auto text-center",children:"Añade"}),O.jsx("input",{id:"storage",type:"file",name:"storage",onChange:n=>t(n.target.files[0])})]}),O.jsx(rn,{type:"submit",onClick:e,className:"generic",title:"Upload"}),O.jsx(b$,{})]}),O.jsx(Wl,{})]})};function O$(){return O.jsxs("div",{className:"flex flex-col justify-center items-center mt-5",children:[O.jsx("h1",{className:" text-4xl font-extrabold",children:"Aprendiendo Firebase"}),O.jsx("div",{className:"border-[0.5px] border-blue-500 mt-3 w-full"}),O.jsx(v$,{}),O.jsx(E$,{}),O.jsx(N$,{}),O.jsx(x$,{}),O.jsx(I$,{})]})}Dp.createRoot(document.getElementById("root")).render(O.jsx(s1.StrictMode,{children:O.jsx(O$,{})}));

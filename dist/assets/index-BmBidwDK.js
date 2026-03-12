function GI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function KI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var h_={exports:{}},cu={},d_={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ko=Symbol.for("react.element"),QI=Symbol.for("react.portal"),YI=Symbol.for("react.fragment"),JI=Symbol.for("react.strict_mode"),XI=Symbol.for("react.profiler"),ZI=Symbol.for("react.provider"),e0=Symbol.for("react.context"),t0=Symbol.for("react.forward_ref"),n0=Symbol.for("react.suspense"),r0=Symbol.for("react.memo"),i0=Symbol.for("react.lazy"),mm=Symbol.iterator;function s0(t){return t===null||typeof t!="object"?null:(t=mm&&t[mm]||t["@@iterator"],typeof t=="function"?t:null)}var f_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p_=Object.assign,m_={};function ss(t,e,n){this.props=t,this.context=e,this.refs=m_,this.updater=n||f_}ss.prototype.isReactComponent={};ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function g_(){}g_.prototype=ss.prototype;function Id(t,e,n){this.props=t,this.context=e,this.refs=m_,this.updater=n||f_}var Sd=Id.prototype=new g_;Sd.constructor=Id;p_(Sd,ss.prototype);Sd.isPureReactComponent=!0;var gm=Array.isArray,y_=Object.prototype.hasOwnProperty,Ad={current:null},__={key:!0,ref:!0,__self:!0,__source:!0};function v_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)y_.call(e,r)&&!__.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ko,type:t,key:s,ref:o,props:i,_owner:Ad.current}}function o0(t,e){return{$$typeof:Ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ko}function a0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ym=/\/+/g;function vc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?a0(""+t.key):e.toString(36)}function Ja(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ko:case QI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+vc(o,0):r,gm(i)?(n="",t!=null&&(n=t.replace(ym,"$&/")+"/"),Ja(i,e,n,"",function(c){return c})):i!=null&&(Rd(i)&&(i=o0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ym,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",gm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+vc(s,l);o+=Ja(s,e,n,u,i)}else if(u=s0(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+vc(s,l++),o+=Ja(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pa(t,e,n){if(t==null)return t;var r=[],i=0;return Ja(t,r,"","",function(s){return e.call(n,s,i++)}),r}function l0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},Xa={transition:null},u0={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:Xa,ReactCurrentOwner:Ad};function E_(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Pa,forEach:function(t,e,n){Pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pa(t,function(){e++}),e},toArray:function(t){return Pa(t,function(e){return e})||[]},only:function(t){if(!Rd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=ss;ee.Fragment=YI;ee.Profiler=XI;ee.PureComponent=Id;ee.StrictMode=JI;ee.Suspense=n0;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u0;ee.act=E_;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=p_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ad.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)y_.call(e,u)&&!__.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ko,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:e0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ZI,_context:t},t.Consumer=t};ee.createElement=v_;ee.createFactory=function(t){var e=v_.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:t0,render:t}};ee.isValidElement=Rd;ee.lazy=function(t){return{$$typeof:i0,_payload:{_status:-1,_result:t},_init:l0}};ee.memo=function(t,e){return{$$typeof:r0,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Xa.transition;Xa.transition={};try{t()}finally{Xa.transition=e}};ee.unstable_act=E_;ee.useCallback=function(t,e){return ut.current.useCallback(t,e)};ee.useContext=function(t){return ut.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ut.current.useEffect(t,e)};ee.useId=function(){return ut.current.useId()};ee.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ut.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};ee.useRef=function(t){return ut.current.useRef(t)};ee.useState=function(t){return ut.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ut.current.useTransition()};ee.version="18.3.1";d_.exports=ee;var U=d_.exports;const w_=KI(U),c0=GI({__proto__:null,default:w_},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0=U,d0=Symbol.for("react.element"),f0=Symbol.for("react.fragment"),p0=Object.prototype.hasOwnProperty,m0=h0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g0={key:!0,ref:!0,__self:!0,__source:!0};function T_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)p0.call(e,r)&&!g0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:d0,type:t,key:s,ref:o,props:i,_owner:m0.current}}cu.Fragment=f0;cu.jsx=T_;cu.jsxs=T_;h_.exports=cu;var N=h_.exports,rh={},I_={exports:{}},Rt={},S_={exports:{}},A_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Y){var X=$.length;$.push(Y);e:for(;0<X;){var ge=X-1>>>1,Se=$[ge];if(0<i(Se,Y))$[ge]=Y,$[X]=Se,X=ge;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Y=$[0],X=$.pop();if(X!==Y){$[0]=X;e:for(var ge=0,Se=$.length,Nr=Se>>>1;ge<Nr;){var Pt=2*(ge+1)-1,xr=$[Pt],Mt=Pt+1,kn=$[Mt];if(0>i(xr,X))Mt<Se&&0>i(kn,xr)?($[ge]=kn,$[Mt]=X,ge=Mt):($[ge]=xr,$[Pt]=X,ge=Pt);else if(Mt<Se&&0>i(kn,X))$[ge]=kn,$[Mt]=X,ge=Mt;else break e}}return Y}function i($,Y){var X=$.sortIndex-Y.sortIndex;return X!==0?X:$.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,m=3,T=!1,P=!1,x=!1,V=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A($){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=$)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function L($){if(x=!1,A($),!P)if(n(u)!==null)P=!0,kr(b);else{var Y=n(c);Y!==null&&_s(L,Y.startTime-$)}}function b($,Y){P=!1,x&&(x=!1,I(y),y=-1),T=!0;var X=m;try{for(A(Y),p=n(u);p!==null&&(!(p.expirationTime>Y)||$&&!R());){var ge=p.callback;if(typeof ge=="function"){p.callback=null,m=p.priorityLevel;var Se=ge(p.expirationTime<=Y);Y=t.unstable_now(),typeof Se=="function"?p.callback=Se:p===n(u)&&r(u),A(Y)}else r(u);p=n(u)}if(p!==null)var Nr=!0;else{var Pt=n(c);Pt!==null&&_s(L,Pt.startTime-Y),Nr=!1}return Nr}finally{p=null,m=X,T=!1}}var z=!1,E=null,y=-1,w=5,S=-1;function R(){return!(t.unstable_now()-S<w)}function C(){if(E!==null){var $=t.unstable_now();S=$;var Y=!0;try{Y=E(!0,$)}finally{Y?v():(z=!1,E=null)}}else z=!1}var v;if(typeof _=="function")v=function(){_(C)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,yt=ue.port2;ue.port1.onmessage=C,v=function(){yt.postMessage(null)}}else v=function(){V(C,0)};function kr($){E=$,z||(z=!0,v())}function _s($,Y){y=V(function(){$(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){P||T||(P=!0,kr(b))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var X=m;m=Y;try{return $()}finally{m=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var X=m;m=$;try{return Y()}finally{m=X}},t.unstable_scheduleCallback=function($,Y,X){var ge=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ge+X:ge):X=ge,$){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=X+Se,$={id:f++,callback:Y,priorityLevel:$,startTime:X,expirationTime:Se,sortIndex:-1},X>ge?($.sortIndex=X,e(c,$),n(u)===null&&$===n(c)&&(x?(I(y),y=-1):x=!0,_s(L,X-ge))):($.sortIndex=Se,e(u,$),P||T||(P=!0,kr(b))),$},t.unstable_shouldYield=R,t.unstable_wrapCallback=function($){var Y=m;return function(){var X=m;m=Y;try{return $.apply(this,arguments)}finally{m=X}}}})(A_);S_.exports=A_;var y0=S_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0=U,At=y0;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R_=new Set,yo={};function oi(t,e){Wi(t,e),Wi(t+"Capture",e)}function Wi(t,e){for(yo[t]=e,t=0;t<e.length;t++)R_.add(e[t])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ih=Object.prototype.hasOwnProperty,v0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_m={},vm={};function E0(t){return ih.call(vm,t)?!0:ih.call(_m,t)?!1:v0.test(t)?vm[t]=!0:(_m[t]=!0,!1)}function w0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T0(t,e,n,r){if(e===null||typeof e>"u"||w0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cd=/[\-:]([a-z])/g;function Pd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cd,Pd);Ke[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cd,Pd);Ke[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cd,Pd);Ke[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function kd(t,e,n,r){var i=Ke.hasOwnProperty(e)?Ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(T0(e,n,i,r)&&(n=null),r||i===null?E0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Cn=_0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ka=Symbol.for("react.element"),vi=Symbol.for("react.portal"),Ei=Symbol.for("react.fragment"),Nd=Symbol.for("react.strict_mode"),sh=Symbol.for("react.profiler"),C_=Symbol.for("react.provider"),P_=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),oh=Symbol.for("react.suspense"),ah=Symbol.for("react.suspense_list"),Dd=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),k_=Symbol.for("react.offscreen"),Em=Symbol.iterator;function Ls(t){return t===null||typeof t!="object"?null:(t=Em&&t[Em]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Ec;function Ws(t){if(Ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||""}return`
`+Ec+t}var wc=!1;function Tc(t,e){if(!t||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ws(t):""}function I0(t){switch(t.tag){case 5:return Ws(t.type);case 16:return Ws("Lazy");case 13:return Ws("Suspense");case 19:return Ws("SuspenseList");case 0:case 2:case 15:return t=Tc(t.type,!1),t;case 11:return t=Tc(t.type.render,!1),t;case 1:return t=Tc(t.type,!0),t;default:return""}}function lh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ei:return"Fragment";case vi:return"Portal";case sh:return"Profiler";case Nd:return"StrictMode";case oh:return"Suspense";case ah:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case P_:return(t.displayName||"Context")+".Consumer";case C_:return(t._context.displayName||"Context")+".Provider";case xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dd:return e=t.displayName||null,e!==null?e:lh(t.type)||"Memo";case Fn:e=t._payload,t=t._init;try{return lh(t(e))}catch{}}return null}function S0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lh(e);case 8:return e===Nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function N_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function A0(t){var e=N_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Na(t){t._valueTracker||(t._valueTracker=A0(t))}function x_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=N_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function uh(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function D_(t,e){e=e.checked,e!=null&&kd(t,"checked",e,!1)}function ch(t,e){D_(t,e);var n=hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hh(t,e.type,n):e.hasOwnProperty("defaultValue")&&hh(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hh(t,e,n){(e!=="number"||vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hs=Array.isArray;function Vi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function dh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Im(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Hs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function V_(t,e){var n=hr(e.value),r=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Sm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function O_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?O_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xa,L_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _o(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R0=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(t){R0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),eo[e]=eo[t]})});function M_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||eo.hasOwnProperty(t)&&eo[t]?(""+e).trim():e+"px"}function b_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=M_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var C0=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ph(t,e){if(e){if(C0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function mh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gh=null;function Vd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yh=null,Oi=null,Li=null;function Am(t){if(t=Jo(t)){if(typeof yh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=mu(e),yh(t.stateNode,t.type,e))}}function F_(t){Oi?Li?Li.push(t):Li=[t]:Oi=t}function U_(){if(Oi){var t=Oi,e=Li;if(Li=Oi=null,Am(t),e)for(t=0;t<e.length;t++)Am(e[t])}}function j_(t,e){return t(e)}function B_(){}var Ic=!1;function z_(t,e,n){if(Ic)return t(e,n);Ic=!0;try{return j_(t,e,n)}finally{Ic=!1,(Oi!==null||Li!==null)&&(B_(),U_())}}function vo(t,e){var n=t.stateNode;if(n===null)return null;var r=mu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var _h=!1;if(vn)try{var Ms={};Object.defineProperty(Ms,"passive",{get:function(){_h=!0}}),window.addEventListener("test",Ms,Ms),window.removeEventListener("test",Ms,Ms)}catch{_h=!1}function P0(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var to=!1,El=null,wl=!1,vh=null,k0={onError:function(t){to=!0,El=t}};function N0(t,e,n,r,i,s,o,l,u){to=!1,El=null,P0.apply(k0,arguments)}function x0(t,e,n,r,i,s,o,l,u){if(N0.apply(this,arguments),to){if(to){var c=El;to=!1,El=null}else throw Error(F(198));wl||(wl=!0,vh=c)}}function ai(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rm(t){if(ai(t)!==t)throw Error(F(188))}function D0(t){var e=t.alternate;if(!e){if(e=ai(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Rm(i),t;if(s===r)return Rm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function W_(t){return t=D0(t),t!==null?H_(t):null}function H_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=H_(t);if(e!==null)return e;t=t.sibling}return null}var q_=At.unstable_scheduleCallback,Cm=At.unstable_cancelCallback,V0=At.unstable_shouldYield,O0=At.unstable_requestPaint,Re=At.unstable_now,L0=At.unstable_getCurrentPriorityLevel,Od=At.unstable_ImmediatePriority,G_=At.unstable_UserBlockingPriority,Tl=At.unstable_NormalPriority,M0=At.unstable_LowPriority,K_=At.unstable_IdlePriority,hu=null,tn=null;function b0(t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(hu,t,void 0,(t.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:j0,F0=Math.log,U0=Math.LN2;function j0(t){return t>>>=0,t===0?32:31-(F0(t)/U0|0)|0}var Da=64,Va=4194304;function qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Il(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=qs(l):(s&=o,s!==0&&(r=qs(s)))}else o=n&~i,o!==0?r=qs(o):s!==0&&(r=qs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-zt(e),i=1<<n,r|=t[n],e&=~i;return r}function B0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function z0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=B0(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Eh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Q_(){var t=Da;return Da<<=1,!(Da&4194240)&&(Da=64),t}function Sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zt(e),t[e]=n}function $0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-zt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ld(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-zt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function Y_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var J_,Md,X_,Z_,ev,wh=!1,Oa=[],Jn=null,Xn=null,Zn=null,Eo=new Map,wo=new Map,jn=[],W0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pm(t,e){switch(t){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":Eo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(e.pointerId)}}function bs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Jo(e),e!==null&&Md(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function H0(t,e,n,r,i){switch(e){case"focusin":return Jn=bs(Jn,t,e,n,r,i),!0;case"dragenter":return Xn=bs(Xn,t,e,n,r,i),!0;case"mouseover":return Zn=bs(Zn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Eo.set(s,bs(Eo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,wo.set(s,bs(wo.get(s)||null,t,e,n,r,i)),!0}return!1}function tv(t){var e=jr(t.target);if(e!==null){var n=ai(e);if(n!==null){if(e=n.tag,e===13){if(e=$_(n),e!==null){t.blockedOn=e,ev(t.priority,function(){X_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Th(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);gh=r,n.target.dispatchEvent(r),gh=null}else return e=Jo(n),e!==null&&Md(e),t.blockedOn=n,!1;e.shift()}return!0}function km(t,e,n){Za(t)&&n.delete(e)}function q0(){wh=!1,Jn!==null&&Za(Jn)&&(Jn=null),Xn!==null&&Za(Xn)&&(Xn=null),Zn!==null&&Za(Zn)&&(Zn=null),Eo.forEach(km),wo.forEach(km)}function Fs(t,e){t.blockedOn===e&&(t.blockedOn=null,wh||(wh=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,q0)))}function To(t){function e(i){return Fs(i,t)}if(0<Oa.length){Fs(Oa[0],t);for(var n=1;n<Oa.length;n++){var r=Oa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jn!==null&&Fs(Jn,t),Xn!==null&&Fs(Xn,t),Zn!==null&&Fs(Zn,t),Eo.forEach(e),wo.forEach(e),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)tv(n),n.blockedOn===null&&jn.shift()}var Mi=Cn.ReactCurrentBatchConfig,Sl=!0;function G0(t,e,n,r){var i=ae,s=Mi.transition;Mi.transition=null;try{ae=1,bd(t,e,n,r)}finally{ae=i,Mi.transition=s}}function K0(t,e,n,r){var i=ae,s=Mi.transition;Mi.transition=null;try{ae=4,bd(t,e,n,r)}finally{ae=i,Mi.transition=s}}function bd(t,e,n,r){if(Sl){var i=Th(t,e,n,r);if(i===null)Oc(t,e,r,Al,n),Pm(t,r);else if(H0(i,t,e,n,r))r.stopPropagation();else if(Pm(t,r),e&4&&-1<W0.indexOf(t)){for(;i!==null;){var s=Jo(i);if(s!==null&&J_(s),s=Th(t,e,n,r),s===null&&Oc(t,e,r,Al,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Oc(t,e,r,null,n)}}var Al=null;function Th(t,e,n,r){if(Al=null,t=Vd(r),t=jr(t),t!==null)if(e=ai(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Al=t,null}function nv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(L0()){case Od:return 1;case G_:return 4;case Tl:case M0:return 16;case K_:return 536870912;default:return 16}default:return 16}}var qn=null,Fd=null,el=null;function rv(){if(el)return el;var t,e=Fd,n=e.length,r,i="value"in qn?qn.value:qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return el=i.slice(t,1<r?1-r:void 0)}function tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function La(){return!0}function Nm(){return!1}function Ct(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?La:Nm,this.isPropagationStopped=Nm,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=La)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=La)},persist:function(){},isPersistent:La}),e}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ud=Ct(os),Yo=Ee({},os,{view:0,detail:0}),Q0=Ct(Yo),Ac,Rc,Us,du=Ee({},Yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Us&&(Us&&t.type==="mousemove"?(Ac=t.screenX-Us.screenX,Rc=t.screenY-Us.screenY):Rc=Ac=0,Us=t),Ac)},movementY:function(t){return"movementY"in t?t.movementY:Rc}}),xm=Ct(du),Y0=Ee({},du,{dataTransfer:0}),J0=Ct(Y0),X0=Ee({},Yo,{relatedTarget:0}),Cc=Ct(X0),Z0=Ee({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),eS=Ct(Z0),tS=Ee({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nS=Ct(tS),rS=Ee({},os,{data:0}),Dm=Ct(rS),iS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=oS[t])?!!e[t]:!1}function jd(){return aS}var lS=Ee({},Yo,{key:function(t){if(t.key){var e=iS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jd,charCode:function(t){return t.type==="keypress"?tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uS=Ct(lS),cS=Ee({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vm=Ct(cS),hS=Ee({},Yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jd}),dS=Ct(hS),fS=Ee({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),pS=Ct(fS),mS=Ee({},du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gS=Ct(mS),yS=[9,13,27,32],Bd=vn&&"CompositionEvent"in window,no=null;vn&&"documentMode"in document&&(no=document.documentMode);var _S=vn&&"TextEvent"in window&&!no,iv=vn&&(!Bd||no&&8<no&&11>=no),Om=" ",Lm=!1;function sv(t,e){switch(t){case"keyup":return yS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ov(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wi=!1;function vS(t,e){switch(t){case"compositionend":return ov(e);case"keypress":return e.which!==32?null:(Lm=!0,Om);case"textInput":return t=e.data,t===Om&&Lm?null:t;default:return null}}function ES(t,e){if(wi)return t==="compositionend"||!Bd&&sv(t,e)?(t=rv(),el=Fd=qn=null,wi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iv&&e.locale!=="ko"?null:e.data;default:return null}}var wS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wS[t.type]:e==="textarea"}function av(t,e,n,r){F_(r),e=Rl(e,"onChange"),0<e.length&&(n=new Ud("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ro=null,Io=null;function TS(t){_v(t,0)}function fu(t){var e=Si(t);if(x_(e))return t}function IS(t,e){if(t==="change")return e}var lv=!1;if(vn){var Pc;if(vn){var kc="oninput"in document;if(!kc){var bm=document.createElement("div");bm.setAttribute("oninput","return;"),kc=typeof bm.oninput=="function"}Pc=kc}else Pc=!1;lv=Pc&&(!document.documentMode||9<document.documentMode)}function Fm(){ro&&(ro.detachEvent("onpropertychange",uv),Io=ro=null)}function uv(t){if(t.propertyName==="value"&&fu(Io)){var e=[];av(e,Io,t,Vd(t)),z_(TS,e)}}function SS(t,e,n){t==="focusin"?(Fm(),ro=e,Io=n,ro.attachEvent("onpropertychange",uv)):t==="focusout"&&Fm()}function AS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fu(Io)}function RS(t,e){if(t==="click")return fu(e)}function CS(t,e){if(t==="input"||t==="change")return fu(e)}function PS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qt=typeof Object.is=="function"?Object.is:PS;function So(t,e){if(qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ih.call(e,i)||!qt(t[i],e[i]))return!1}return!0}function Um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jm(t,e){var n=Um(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Um(n)}}function cv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hv(){for(var t=window,e=vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vl(t.document)}return e}function zd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kS(t){var e=hv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cv(n.ownerDocument.documentElement,n)){if(r!==null&&zd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=jm(n,s);var o=jm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var NS=vn&&"documentMode"in document&&11>=document.documentMode,Ti=null,Ih=null,io=null,Sh=!1;function Bm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sh||Ti==null||Ti!==vl(r)||(r=Ti,"selectionStart"in r&&zd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),io&&So(io,r)||(io=r,r=Rl(Ih,"onSelect"),0<r.length&&(e=new Ud("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ti)))}function Ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ii={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},Nc={},dv={};vn&&(dv=document.createElement("div").style,"AnimationEvent"in window||(delete Ii.animationend.animation,delete Ii.animationiteration.animation,delete Ii.animationstart.animation),"TransitionEvent"in window||delete Ii.transitionend.transition);function pu(t){if(Nc[t])return Nc[t];if(!Ii[t])return t;var e=Ii[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dv)return Nc[t]=e[n];return t}var fv=pu("animationend"),pv=pu("animationiteration"),mv=pu("animationstart"),gv=pu("transitionend"),yv=new Map,zm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(t,e){yv.set(t,e),oi(e,[t])}for(var xc=0;xc<zm.length;xc++){var Dc=zm[xc],xS=Dc.toLowerCase(),DS=Dc[0].toUpperCase()+Dc.slice(1);Er(xS,"on"+DS)}Er(fv,"onAnimationEnd");Er(pv,"onAnimationIteration");Er(mv,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(gv,"onTransitionEnd");Wi("onMouseEnter",["mouseout","mouseover"]);Wi("onMouseLeave",["mouseout","mouseover"]);Wi("onPointerEnter",["pointerout","pointerover"]);Wi("onPointerLeave",["pointerout","pointerover"]);oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gs));function $m(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,x0(r,e,void 0,t),t.currentTarget=null}function _v(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;$m(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;$m(i,l,c),s=u}}}if(wl)throw t=vh,wl=!1,vh=null,t}function fe(t,e){var n=e[kh];n===void 0&&(n=e[kh]=new Set);var r=t+"__bubble";n.has(r)||(vv(e,t,2,!1),n.add(r))}function Vc(t,e,n){var r=0;e&&(r|=4),vv(n,t,r,e)}var ba="_reactListening"+Math.random().toString(36).slice(2);function Ao(t){if(!t[ba]){t[ba]=!0,R_.forEach(function(n){n!=="selectionchange"&&(VS.has(n)||Vc(n,!1,t),Vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ba]||(e[ba]=!0,Vc("selectionchange",!1,e))}}function vv(t,e,n,r){switch(nv(e)){case 1:var i=G0;break;case 4:i=K0;break;default:i=bd}n=i.bind(null,e,n,t),i=void 0,!_h||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Oc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=jr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}z_(function(){var c=s,f=Vd(n),p=[];e:{var m=yv.get(t);if(m!==void 0){var T=Ud,P=t;switch(t){case"keypress":if(tl(n)===0)break e;case"keydown":case"keyup":T=uS;break;case"focusin":P="focus",T=Cc;break;case"focusout":P="blur",T=Cc;break;case"beforeblur":case"afterblur":T=Cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=J0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=dS;break;case fv:case pv:case mv:T=eS;break;case gv:T=pS;break;case"scroll":T=Q0;break;case"wheel":T=gS;break;case"copy":case"cut":case"paste":T=nS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Vm}var x=(e&4)!==0,V=!x&&t==="scroll",I=x?m!==null?m+"Capture":null:m;x=[];for(var _=c,A;_!==null;){A=_;var L=A.stateNode;if(A.tag===5&&L!==null&&(A=L,I!==null&&(L=vo(_,I),L!=null&&x.push(Ro(_,L,A)))),V)break;_=_.return}0<x.length&&(m=new T(m,P,null,n,f),p.push({event:m,listeners:x}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",m&&n!==gh&&(P=n.relatedTarget||n.fromElement)&&(jr(P)||P[En]))break e;if((T||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,T?(P=n.relatedTarget||n.toElement,T=c,P=P?jr(P):null,P!==null&&(V=ai(P),P!==V||P.tag!==5&&P.tag!==6)&&(P=null)):(T=null,P=c),T!==P)){if(x=xm,L="onMouseLeave",I="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Vm,L="onPointerLeave",I="onPointerEnter",_="pointer"),V=T==null?m:Si(T),A=P==null?m:Si(P),m=new x(L,_+"leave",T,n,f),m.target=V,m.relatedTarget=A,L=null,jr(f)===c&&(x=new x(I,_+"enter",P,n,f),x.target=A,x.relatedTarget=V,L=x),V=L,T&&P)t:{for(x=T,I=P,_=0,A=x;A;A=pi(A))_++;for(A=0,L=I;L;L=pi(L))A++;for(;0<_-A;)x=pi(x),_--;for(;0<A-_;)I=pi(I),A--;for(;_--;){if(x===I||I!==null&&x===I.alternate)break t;x=pi(x),I=pi(I)}x=null}else x=null;T!==null&&Wm(p,m,T,x,!1),P!==null&&V!==null&&Wm(p,V,P,x,!0)}}e:{if(m=c?Si(c):window,T=m.nodeName&&m.nodeName.toLowerCase(),T==="select"||T==="input"&&m.type==="file")var b=IS;else if(Mm(m))if(lv)b=CS;else{b=AS;var z=SS}else(T=m.nodeName)&&T.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=RS);if(b&&(b=b(t,c))){av(p,b,n,f);break e}z&&z(t,m,c),t==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&hh(m,"number",m.value)}switch(z=c?Si(c):window,t){case"focusin":(Mm(z)||z.contentEditable==="true")&&(Ti=z,Ih=c,io=null);break;case"focusout":io=Ih=Ti=null;break;case"mousedown":Sh=!0;break;case"contextmenu":case"mouseup":case"dragend":Sh=!1,Bm(p,n,f);break;case"selectionchange":if(NS)break;case"keydown":case"keyup":Bm(p,n,f)}var E;if(Bd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else wi?sv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(iv&&n.locale!=="ko"&&(wi||y!=="onCompositionStart"?y==="onCompositionEnd"&&wi&&(E=rv()):(qn=f,Fd="value"in qn?qn.value:qn.textContent,wi=!0)),z=Rl(c,y),0<z.length&&(y=new Dm(y,t,null,n,f),p.push({event:y,listeners:z}),E?y.data=E:(E=ov(n),E!==null&&(y.data=E)))),(E=_S?vS(t,n):ES(t,n))&&(c=Rl(c,"onBeforeInput"),0<c.length&&(f=new Dm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=E))}_v(p,e)})}function Ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=vo(t,n),s!=null&&r.unshift(Ro(t,s,i)),s=vo(t,e),s!=null&&r.push(Ro(t,s,i))),t=t.return}return r}function pi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=vo(n,s),u!=null&&o.unshift(Ro(n,u,l))):i||(u=vo(n,s),u!=null&&o.push(Ro(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OS=/\r\n?/g,LS=/\u0000|\uFFFD/g;function Hm(t){return(typeof t=="string"?t:""+t).replace(OS,`
`).replace(LS,"")}function Fa(t,e,n){if(e=Hm(e),Hm(t)!==e&&n)throw Error(F(425))}function Cl(){}var Ah=null,Rh=null;function Ch(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ph=typeof setTimeout=="function"?setTimeout:void 0,MS=typeof clearTimeout=="function"?clearTimeout:void 0,qm=typeof Promise=="function"?Promise:void 0,bS=typeof queueMicrotask=="function"?queueMicrotask:typeof qm<"u"?function(t){return qm.resolve(null).then(t).catch(FS)}:Ph;function FS(t){setTimeout(function(){throw t})}function Lc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),To(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);To(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var as=Math.random().toString(36).slice(2),en="__reactFiber$"+as,Co="__reactProps$"+as,En="__reactContainer$"+as,kh="__reactEvents$"+as,US="__reactListeners$"+as,jS="__reactHandles$"+as;function jr(t){var e=t[en];if(e)return e;for(var n=t.parentNode;n;){if(e=n[En]||n[en]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gm(t);t!==null;){if(n=t[en])return n;t=Gm(t)}return e}t=n,n=t.parentNode}return null}function Jo(t){return t=t[en]||t[En],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Si(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function mu(t){return t[Co]||null}var Nh=[],Ai=-1;function wr(t){return{current:t}}function me(t){0>Ai||(t.current=Nh[Ai],Nh[Ai]=null,Ai--)}function he(t,e){Ai++,Nh[Ai]=t.current,t.current=e}var dr={},nt=wr(dr),pt=wr(!1),Kr=dr;function Hi(t,e){var n=t.type.contextTypes;if(!n)return dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function mt(t){return t=t.childContextTypes,t!=null}function Pl(){me(pt),me(nt)}function Km(t,e,n){if(nt.current!==dr)throw Error(F(168));he(nt,e),he(pt,n)}function Ev(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,S0(t)||"Unknown",i));return Ee({},n,r)}function kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Kr=nt.current,he(nt,t),he(pt,pt.current),!0}function Qm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Ev(t,e,Kr),r.__reactInternalMemoizedMergedChildContext=t,me(pt),me(nt),he(nt,t)):me(pt),he(pt,n)}var hn=null,gu=!1,Mc=!1;function wv(t){hn===null?hn=[t]:hn.push(t)}function BS(t){gu=!0,wv(t)}function Tr(){if(!Mc&&hn!==null){Mc=!0;var t=0,e=ae;try{var n=hn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}hn=null,gu=!1}catch(i){throw hn!==null&&(hn=hn.slice(t+1)),q_(Od,Tr),i}finally{ae=e,Mc=!1}}return null}var Ri=[],Ci=0,Nl=null,xl=0,kt=[],Nt=0,Qr=null,dn=1,fn="";function br(t,e){Ri[Ci++]=xl,Ri[Ci++]=Nl,Nl=t,xl=e}function Tv(t,e,n){kt[Nt++]=dn,kt[Nt++]=fn,kt[Nt++]=Qr,Qr=t;var r=dn;t=fn;var i=32-zt(r)-1;r&=~(1<<i),n+=1;var s=32-zt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dn=1<<32-zt(e)+i|n<<i|r,fn=s+t}else dn=1<<s|n<<i|r,fn=t}function $d(t){t.return!==null&&(br(t,1),Tv(t,1,0))}function Wd(t){for(;t===Nl;)Nl=Ri[--Ci],Ri[Ci]=null,xl=Ri[--Ci],Ri[Ci]=null;for(;t===Qr;)Qr=kt[--Nt],kt[Nt]=null,fn=kt[--Nt],kt[Nt]=null,dn=kt[--Nt],kt[Nt]=null}var It=null,wt=null,ye=!1,jt=null;function Iv(t,e){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ym(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,It=t,wt=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,It=t,wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:dn,overflow:fn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,It=t,wt=null,!0):!1;default:return!1}}function xh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Dh(t){if(ye){var e=wt;if(e){var n=e;if(!Ym(t,e)){if(xh(t))throw Error(F(418));e=er(n.nextSibling);var r=It;e&&Ym(t,e)?Iv(r,n):(t.flags=t.flags&-4097|2,ye=!1,It=t)}}else{if(xh(t))throw Error(F(418));t.flags=t.flags&-4097|2,ye=!1,It=t}}}function Jm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;It=t}function Ua(t){if(t!==It)return!1;if(!ye)return Jm(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ch(t.type,t.memoizedProps)),e&&(e=wt)){if(xh(t))throw Sv(),Error(F(418));for(;e;)Iv(t,e),e=er(e.nextSibling)}if(Jm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wt=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wt=null}}else wt=It?er(t.stateNode.nextSibling):null;return!0}function Sv(){for(var t=wt;t;)t=er(t.nextSibling)}function qi(){wt=It=null,ye=!1}function Hd(t){jt===null?jt=[t]:jt.push(t)}var zS=Cn.ReactCurrentBatchConfig;function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ja(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xm(t){var e=t._init;return e(t._payload)}function Av(t){function e(I,_){if(t){var A=I.deletions;A===null?(I.deletions=[_],I.flags|=16):A.push(_)}}function n(I,_){if(!t)return null;for(;_!==null;)e(I,_),_=_.sibling;return null}function r(I,_){for(I=new Map;_!==null;)_.key!==null?I.set(_.key,_):I.set(_.index,_),_=_.sibling;return I}function i(I,_){return I=ir(I,_),I.index=0,I.sibling=null,I}function s(I,_,A){return I.index=A,t?(A=I.alternate,A!==null?(A=A.index,A<_?(I.flags|=2,_):A):(I.flags|=2,_)):(I.flags|=1048576,_)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,_,A,L){return _===null||_.tag!==6?(_=$c(A,I.mode,L),_.return=I,_):(_=i(_,A),_.return=I,_)}function u(I,_,A,L){var b=A.type;return b===Ei?f(I,_,A.props.children,L,A.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Fn&&Xm(b)===_.type)?(L=i(_,A.props),L.ref=js(I,_,A),L.return=I,L):(L=ll(A.type,A.key,A.props,null,I.mode,L),L.ref=js(I,_,A),L.return=I,L)}function c(I,_,A,L){return _===null||_.tag!==4||_.stateNode.containerInfo!==A.containerInfo||_.stateNode.implementation!==A.implementation?(_=Wc(A,I.mode,L),_.return=I,_):(_=i(_,A.children||[]),_.return=I,_)}function f(I,_,A,L,b){return _===null||_.tag!==7?(_=Hr(A,I.mode,L,b),_.return=I,_):(_=i(_,A),_.return=I,_)}function p(I,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return _=$c(""+_,I.mode,A),_.return=I,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ka:return A=ll(_.type,_.key,_.props,null,I.mode,A),A.ref=js(I,null,_),A.return=I,A;case vi:return _=Wc(_,I.mode,A),_.return=I,_;case Fn:var L=_._init;return p(I,L(_._payload),A)}if(Hs(_)||Ls(_))return _=Hr(_,I.mode,A,null),_.return=I,_;ja(I,_)}return null}function m(I,_,A,L){var b=_!==null?_.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return b!==null?null:l(I,_,""+A,L);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ka:return A.key===b?u(I,_,A,L):null;case vi:return A.key===b?c(I,_,A,L):null;case Fn:return b=A._init,m(I,_,b(A._payload),L)}if(Hs(A)||Ls(A))return b!==null?null:f(I,_,A,L,null);ja(I,A)}return null}function T(I,_,A,L,b){if(typeof L=="string"&&L!==""||typeof L=="number")return I=I.get(A)||null,l(_,I,""+L,b);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ka:return I=I.get(L.key===null?A:L.key)||null,u(_,I,L,b);case vi:return I=I.get(L.key===null?A:L.key)||null,c(_,I,L,b);case Fn:var z=L._init;return T(I,_,A,z(L._payload),b)}if(Hs(L)||Ls(L))return I=I.get(A)||null,f(_,I,L,b,null);ja(_,L)}return null}function P(I,_,A,L){for(var b=null,z=null,E=_,y=_=0,w=null;E!==null&&y<A.length;y++){E.index>y?(w=E,E=null):w=E.sibling;var S=m(I,E,A[y],L);if(S===null){E===null&&(E=w);break}t&&E&&S.alternate===null&&e(I,E),_=s(S,_,y),z===null?b=S:z.sibling=S,z=S,E=w}if(y===A.length)return n(I,E),ye&&br(I,y),b;if(E===null){for(;y<A.length;y++)E=p(I,A[y],L),E!==null&&(_=s(E,_,y),z===null?b=E:z.sibling=E,z=E);return ye&&br(I,y),b}for(E=r(I,E);y<A.length;y++)w=T(E,I,y,A[y],L),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?y:w.key),_=s(w,_,y),z===null?b=w:z.sibling=w,z=w);return t&&E.forEach(function(R){return e(I,R)}),ye&&br(I,y),b}function x(I,_,A,L){var b=Ls(A);if(typeof b!="function")throw Error(F(150));if(A=b.call(A),A==null)throw Error(F(151));for(var z=b=null,E=_,y=_=0,w=null,S=A.next();E!==null&&!S.done;y++,S=A.next()){E.index>y?(w=E,E=null):w=E.sibling;var R=m(I,E,S.value,L);if(R===null){E===null&&(E=w);break}t&&E&&R.alternate===null&&e(I,E),_=s(R,_,y),z===null?b=R:z.sibling=R,z=R,E=w}if(S.done)return n(I,E),ye&&br(I,y),b;if(E===null){for(;!S.done;y++,S=A.next())S=p(I,S.value,L),S!==null&&(_=s(S,_,y),z===null?b=S:z.sibling=S,z=S);return ye&&br(I,y),b}for(E=r(I,E);!S.done;y++,S=A.next())S=T(E,I,y,S.value,L),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?y:S.key),_=s(S,_,y),z===null?b=S:z.sibling=S,z=S);return t&&E.forEach(function(C){return e(I,C)}),ye&&br(I,y),b}function V(I,_,A,L){if(typeof A=="object"&&A!==null&&A.type===Ei&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case ka:e:{for(var b=A.key,z=_;z!==null;){if(z.key===b){if(b=A.type,b===Ei){if(z.tag===7){n(I,z.sibling),_=i(z,A.props.children),_.return=I,I=_;break e}}else if(z.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Fn&&Xm(b)===z.type){n(I,z.sibling),_=i(z,A.props),_.ref=js(I,z,A),_.return=I,I=_;break e}n(I,z);break}else e(I,z);z=z.sibling}A.type===Ei?(_=Hr(A.props.children,I.mode,L,A.key),_.return=I,I=_):(L=ll(A.type,A.key,A.props,null,I.mode,L),L.ref=js(I,_,A),L.return=I,I=L)}return o(I);case vi:e:{for(z=A.key;_!==null;){if(_.key===z)if(_.tag===4&&_.stateNode.containerInfo===A.containerInfo&&_.stateNode.implementation===A.implementation){n(I,_.sibling),_=i(_,A.children||[]),_.return=I,I=_;break e}else{n(I,_);break}else e(I,_);_=_.sibling}_=Wc(A,I.mode,L),_.return=I,I=_}return o(I);case Fn:return z=A._init,V(I,_,z(A._payload),L)}if(Hs(A))return P(I,_,A,L);if(Ls(A))return x(I,_,A,L);ja(I,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,_!==null&&_.tag===6?(n(I,_.sibling),_=i(_,A),_.return=I,I=_):(n(I,_),_=$c(A,I.mode,L),_.return=I,I=_),o(I)):n(I,_)}return V}var Gi=Av(!0),Rv=Av(!1),Dl=wr(null),Vl=null,Pi=null,qd=null;function Gd(){qd=Pi=Vl=null}function Kd(t){var e=Dl.current;me(Dl),t._currentValue=e}function Vh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function bi(t,e){Vl=t,qd=Pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ft=!0),t.firstContext=null)}function Ot(t){var e=t._currentValue;if(qd!==t)if(t={context:t,memoizedValue:e,next:null},Pi===null){if(Vl===null)throw Error(F(308));Pi=t,Vl.dependencies={lanes:0,firstContext:t}}else Pi=Pi.next=t;return e}var Br=null;function Qd(t){Br===null?Br=[t]:Br.push(t)}function Cv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qd(e)):(n.next=i.next,i.next=n),e.interleaved=n,wn(t,r)}function wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Un=!1;function Yd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,wn(t,n)}return i=r.interleaved,i===null?(e.next=e,Qd(r)):(e.next=i.next,i.next=e),r.interleaved=e,wn(t,n)}function nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ld(t,n)}}function Zm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ol(t,e,n,r){var i=t.updateQueue;Un=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var m=l.lane,T=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,x=l;switch(m=e,T=n,x.tag){case 1:if(P=x.payload,typeof P=="function"){p=P.call(T,p,m);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=x.payload,m=typeof P=="function"?P.call(T,p,m):P,m==null)break e;p=Ee({},p,m);break e;case 2:Un=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else T={eventTime:T,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=T,u=p):f=f.next=T,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=p}}function eg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Xo={},nn=wr(Xo),Po=wr(Xo),ko=wr(Xo);function zr(t){if(t===Xo)throw Error(F(174));return t}function Jd(t,e){switch(he(ko,e),he(Po,t),he(nn,Xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fh(e,t)}me(nn),he(nn,e)}function Ki(){me(nn),me(Po),me(ko)}function kv(t){zr(ko.current);var e=zr(nn.current),n=fh(e,t.type);e!==n&&(he(Po,t),he(nn,n))}function Xd(t){Po.current===t&&(me(nn),me(Po))}var _e=wr(0);function Ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bc=[];function Zd(){for(var t=0;t<bc.length;t++)bc[t]._workInProgressVersionPrimary=null;bc.length=0}var rl=Cn.ReactCurrentDispatcher,Fc=Cn.ReactCurrentBatchConfig,Yr=0,ve=null,Le=null,je=null,Ml=!1,so=!1,No=0,$S=0;function Je(){throw Error(F(321))}function ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qt(t[n],e[n]))return!1;return!0}function tf(t,e,n,r,i,s){if(Yr=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rl.current=t===null||t.memoizedState===null?GS:KS,t=n(r,i),so){s=0;do{if(so=!1,No=0,25<=s)throw Error(F(301));s+=1,je=Le=null,e.updateQueue=null,rl.current=QS,t=n(r,i)}while(so)}if(rl.current=bl,e=Le!==null&&Le.next!==null,Yr=0,je=Le=ve=null,Ml=!1,e)throw Error(F(300));return t}function nf(){var t=No!==0;return No=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?ve.memoizedState=je=t:je=je.next=t,je}function Lt(){if(Le===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=je===null?ve.memoizedState:je.next;if(e!==null)je=e,Le=t;else{if(t===null)throw Error(F(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},je===null?ve.memoizedState=je=t:je=je.next=t}return je}function xo(t,e){return typeof e=="function"?e(t):e}function Uc(t){var e=Lt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((Yr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ve.lanes|=f,Jr|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,qt(r,e.memoizedState)||(ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,Jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function jc(t){var e=Lt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);qt(s,e.memoizedState)||(ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Nv(){}function xv(t,e){var n=ve,r=Lt(),i=e(),s=!qt(r.memoizedState,i);if(s&&(r.memoizedState=i,ft=!0),r=r.queue,rf(Ov.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Do(9,Vv.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(F(349));Yr&30||Dv(n,e,i)}return i}function Dv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vv(t,e,n,r){e.value=n,e.getSnapshot=r,Lv(e)&&Mv(t)}function Ov(t,e,n){return n(function(){Lv(e)&&Mv(t)})}function Lv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qt(t,n)}catch{return!0}}function Mv(t){var e=wn(t,1);e!==null&&$t(e,t,1,-1)}function tg(t){var e=Xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},e.queue=t,t=t.dispatch=qS.bind(null,ve,t),[e.memoizedState,t]}function Do(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bv(){return Lt().memoizedState}function il(t,e,n,r){var i=Xt();ve.flags|=t,i.memoizedState=Do(1|e,n,void 0,r===void 0?null:r)}function yu(t,e,n,r){var i=Lt();r=r===void 0?null:r;var s=void 0;if(Le!==null){var o=Le.memoizedState;if(s=o.destroy,r!==null&&ef(r,o.deps)){i.memoizedState=Do(e,n,s,r);return}}ve.flags|=t,i.memoizedState=Do(1|e,n,s,r)}function ng(t,e){return il(8390656,8,t,e)}function rf(t,e){return yu(2048,8,t,e)}function Fv(t,e){return yu(4,2,t,e)}function Uv(t,e){return yu(4,4,t,e)}function jv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Bv(t,e,n){return n=n!=null?n.concat([t]):null,yu(4,4,jv.bind(null,e,t),n)}function sf(){}function zv(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ef(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $v(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ef(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Wv(t,e,n){return Yr&21?(qt(n,e)||(n=Q_(),ve.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=n)}function WS(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Fc.transition;Fc.transition={};try{t(!1),e()}finally{ae=n,Fc.transition=r}}function Hv(){return Lt().memoizedState}function HS(t,e,n){var r=rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qv(t))Gv(e,n);else if(n=Cv(t,e,n,r),n!==null){var i=lt();$t(n,t,r,i),Kv(n,e,r)}}function qS(t,e,n){var r=rr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qv(t))Gv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,qt(l,o)){var u=e.interleaved;u===null?(i.next=i,Qd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Cv(t,e,i,r),n!==null&&(i=lt(),$t(n,t,r,i),Kv(n,e,r))}}function qv(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function Gv(t,e){so=Ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Kv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ld(t,n)}}var bl={readContext:Ot,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},GS={readContext:Ot,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:ng,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,il(4194308,4,jv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return il(4194308,4,t,e)},useInsertionEffect:function(t,e){return il(4,2,t,e)},useMemo:function(t,e){var n=Xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=HS.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:tg,useDebugValue:sf,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=tg(!1),e=t[0];return t=WS.bind(null,t[1]),Xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=Xt();if(ye){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),ze===null)throw Error(F(349));Yr&30||Dv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ng(Ov.bind(null,r,s,t),[t]),r.flags|=2048,Do(9,Vv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xt(),e=ze.identifierPrefix;if(ye){var n=fn,r=dn;n=(r&~(1<<32-zt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=No++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$S++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},KS={readContext:Ot,useCallback:zv,useContext:Ot,useEffect:rf,useImperativeHandle:Bv,useInsertionEffect:Fv,useLayoutEffect:Uv,useMemo:$v,useReducer:Uc,useRef:bv,useState:function(){return Uc(xo)},useDebugValue:sf,useDeferredValue:function(t){var e=Lt();return Wv(e,Le.memoizedState,t)},useTransition:function(){var t=Uc(xo)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:Nv,useSyncExternalStore:xv,useId:Hv,unstable_isNewReconciler:!1},QS={readContext:Ot,useCallback:zv,useContext:Ot,useEffect:rf,useImperativeHandle:Bv,useInsertionEffect:Fv,useLayoutEffect:Uv,useMemo:$v,useReducer:jc,useRef:bv,useState:function(){return jc(xo)},useDebugValue:sf,useDeferredValue:function(t){var e=Lt();return Le===null?e.memoizedState=t:Wv(e,Le.memoizedState,t)},useTransition:function(){var t=jc(xo)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:Nv,useSyncExternalStore:xv,useId:Hv,unstable_isNewReconciler:!1};function Ft(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Oh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _u={isMounted:function(t){return(t=t._reactInternals)?ai(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=rr(t),s=gn(r,i);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&($t(e,t,i,r),nl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=rr(t),s=gn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&($t(e,t,i,r),nl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=rr(t),i=gn(n,r);i.tag=2,e!=null&&(i.callback=e),e=tr(t,i,r),e!==null&&($t(e,t,r,n),nl(e,t,r))}};function rg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!So(n,r)||!So(i,s):!0}function Qv(t,e,n){var r=!1,i=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ot(s):(i=mt(e)?Kr:nt.current,r=e.contextTypes,s=(r=r!=null)?Hi(t,i):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_u,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ig(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_u.enqueueReplaceState(e,e.state,null)}function Lh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Yd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ot(s):(s=mt(e)?Kr:nt.current,i.context=Hi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Oh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_u.enqueueReplaceState(i,i.state,null),Ol(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Qi(t,e){try{var n="",r=e;do n+=I0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var YS=typeof WeakMap=="function"?WeakMap:Map;function Yv(t,e,n){n=gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ul||(Ul=!0,qh=r),Mh(t,e)},n}function Jv(t,e,n){n=gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Mh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mh(t,e),typeof r!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new YS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=cA.bind(null,t,e,n),e.then(t,t))}function og(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ag(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gn(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var JS=Cn.ReactCurrentOwner,ft=!1;function ot(t,e,n,r){e.child=t===null?Rv(e,null,n,r):Gi(e,t.child,n,r)}function lg(t,e,n,r,i){n=n.render;var s=e.ref;return bi(e,i),r=tf(t,e,n,r,s,i),n=nf(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tn(t,e,i)):(ye&&n&&$d(e),e.flags|=1,ot(t,e,r,i),e.child)}function ug(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ff(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Xv(t,e,s,r,i)):(t=ll(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:So,n(o,r)&&t.ref===e.ref)return Tn(t,e,i)}return e.flags|=1,t=ir(s,r),t.ref=e.ref,t.return=e,e.child=t}function Xv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(So(s,r)&&t.ref===e.ref)if(ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ft=!0);else return e.lanes=t.lanes,Tn(t,e,i)}return bh(t,e,n,r,i)}function Zv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Ni,vt),vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(Ni,vt),vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(Ni,vt),vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(Ni,vt),vt|=r;return ot(t,e,i,n),e.child}function eE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bh(t,e,n,r,i){var s=mt(n)?Kr:nt.current;return s=Hi(e,s),bi(e,i),n=tf(t,e,n,r,s,i),r=nf(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tn(t,e,i)):(ye&&r&&$d(e),e.flags|=1,ot(t,e,n,i),e.child)}function cg(t,e,n,r,i){if(mt(n)){var s=!0;kl(e)}else s=!1;if(bi(e,i),e.stateNode===null)sl(t,e),Qv(e,n,r),Lh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ot(c):(c=mt(n)?Kr:nt.current,c=Hi(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&ig(e,o,r,c),Un=!1;var m=e.memoizedState;o.state=m,Ol(e,r,o,i),u=e.memoizedState,l!==r||m!==u||pt.current||Un?(typeof f=="function"&&(Oh(e,n,f,r),u=e.memoizedState),(l=Un||rg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Pv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Ft(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ot(u):(u=mt(n)?Kr:nt.current,u=Hi(e,u));var T=n.getDerivedStateFromProps;(f=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&ig(e,o,r,u),Un=!1,m=e.memoizedState,o.state=m,Ol(e,r,o,i);var P=e.memoizedState;l!==p||m!==P||pt.current||Un?(typeof T=="function"&&(Oh(e,n,T,r),P=e.memoizedState),(c=Un||rg(e,n,c,r,m,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Fh(t,e,n,r,s,i)}function Fh(t,e,n,r,i,s){eE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Qm(e,n,!1),Tn(t,e,s);r=e.stateNode,JS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gi(e,t.child,null,s),e.child=Gi(e,null,l,s)):ot(t,e,l,s),e.memoizedState=r.state,i&&Qm(e,n,!0),e.child}function tE(t){var e=t.stateNode;e.pendingContext?Km(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Km(t,e.context,!1),Jd(t,e.containerInfo)}function hg(t,e,n,r,i){return qi(),Hd(i),e.flags|=256,ot(t,e,n,r),e.child}var Uh={dehydrated:null,treeContext:null,retryLane:0};function jh(t){return{baseLanes:t,cachePool:null,transitions:null}}function nE(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(_e,i&1),t===null)return Dh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wu(o,r,0,null),t=Hr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=jh(n),e.memoizedState=Uh,t):of(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return XS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ir(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ir(l,s):(s=Hr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?jh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Uh,r}return s=t.child,t=s.sibling,r=ir(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function of(t,e){return e=wu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ba(t,e,n,r){return r!==null&&Hd(r),Gi(e,t.child,null,n),t=of(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function XS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bc(Error(F(422))),Ba(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=wu({mode:"visible",children:r.children},i,0,null),s=Hr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Gi(e,t.child,null,o),e.child.memoizedState=jh(o),e.memoizedState=Uh,s);if(!(e.mode&1))return Ba(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Bc(s,r,void 0),Ba(t,e,o,r)}if(l=(o&t.childLanes)!==0,ft||l){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,wn(t,i),$t(r,t,i,-1))}return df(),r=Bc(Error(F(421))),Ba(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=hA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,wt=er(i.nextSibling),It=e,ye=!0,jt=null,t!==null&&(kt[Nt++]=dn,kt[Nt++]=fn,kt[Nt++]=Qr,dn=t.id,fn=t.overflow,Qr=e),e=of(e,r.children),e.flags|=4096,e)}function dg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Vh(t.return,e,n)}function zc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function rE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dg(t,n,e);else if(t.tag===19)dg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ll(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),zc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ll(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}zc(e,!0,n,null,s);break;case"together":zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ZS(t,e,n){switch(e.tag){case 3:tE(e),qi();break;case 5:kv(e);break;case 1:mt(e.type)&&kl(e);break;case 4:Jd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(Dl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?nE(t,e,n):(he(_e,_e.current&1),t=Tn(t,e,n),t!==null?t.sibling:null);he(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return rE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,Zv(t,e,n)}return Tn(t,e,n)}var iE,Bh,sE,oE;iE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bh=function(){};sE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,zr(nn.current);var s=null;switch(n){case"input":i=uh(t,i),r=uh(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=dh(t,i),r=dh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Cl)}ph(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(yo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(yo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&fe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};oE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Bs(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function eA(t,e,n){var r=e.pendingProps;switch(Wd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return mt(e.type)&&Pl(),Xe(e),null;case 3:return r=e.stateNode,Ki(),me(pt),me(nt),Zd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ua(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&(Qh(jt),jt=null))),Bh(t,e),Xe(e),null;case 5:Xd(e);var i=zr(ko.current);if(n=e.type,t!==null&&e.stateNode!=null)sE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Xe(e),null}if(t=zr(nn.current),Ua(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[en]=e,r[Co]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<Gs.length;i++)fe(Gs[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":wm(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":Im(r,s),fe("invalid",r)}ph(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Fa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Fa(r.textContent,l,t),i=["children",""+l]):yo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":Na(r),Tm(r,s,!0);break;case"textarea":Na(r),Sm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Cl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=O_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[en]=e,t[Co]=r,iE(t,e,!1,!1),e.stateNode=t;e:{switch(o=mh(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Gs.length;i++)fe(Gs[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":wm(t,r),i=uh(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),fe("invalid",t);break;case"textarea":Im(t,r),i=dh(t,r),fe("invalid",t);break;default:i=r}ph(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?b_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&L_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&_o(t,u):typeof u=="number"&&_o(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(yo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&fe("scroll",t):u!=null&&kd(t,s,u,o))}switch(n){case"input":Na(t),Tm(t,r,!1);break;case"textarea":Na(t),Sm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Vi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Vi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)oE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=zr(ko.current),zr(nn.current),Ua(e)){if(r=e.stateNode,n=e.memoizedProps,r[en]=e,(s=r.nodeValue!==n)&&(t=It,t!==null))switch(t.tag){case 3:Fa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=e,e.stateNode=r}return Xe(e),null;case 13:if(me(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&wt!==null&&e.mode&1&&!(e.flags&128))Sv(),qi(),e.flags|=98560,s=!1;else if(s=Ua(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[en]=e}else qi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),s=!1}else jt!==null&&(Qh(jt),jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Me===0&&(Me=3):df())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return Ki(),Bh(t,e),t===null&&Ao(e.stateNode.containerInfo),Xe(e),null;case 10:return Kd(e.type._context),Xe(e),null;case 17:return mt(e.type)&&Pl(),Xe(e),null;case 19:if(me(_e),s=e.memoizedState,s===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Bs(s,!1);else{if(Me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ll(t),o!==null){for(e.flags|=128,Bs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>Yi&&(e.flags|=128,r=!0,Bs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ll(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Xe(e),null}else 2*Re()-s.renderingStartTime>Yi&&n!==1073741824&&(e.flags|=128,r=!0,Bs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=_e.current,he(_e,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return hf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?vt&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function tA(t,e){switch(Wd(e),e.tag){case 1:return mt(e.type)&&Pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ki(),me(pt),me(nt),Zd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xd(e),null;case 13:if(me(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(_e),null;case 4:return Ki(),null;case 10:return Kd(e.type._context),null;case 22:case 23:return hf(),null;case 24:return null;default:return null}}var za=!1,tt=!1,nA=typeof WeakSet=="function"?WeakSet:Set,H=null;function ki(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function zh(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var fg=!1;function rA(t,e){if(Ah=Sl,t=hv(),zd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,m=null;t:for(;;){for(var T;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(T=p.firstChild)!==null;)m=p,p=T;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++f===r&&(u=o),(T=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rh={focusedElem:t,selectionRange:n},Sl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var x=P.memoizedProps,V=P.memoizedState,I=e.stateNode,_=I.getSnapshotBeforeUpdate(e.elementType===e.type?x:Ft(e.type,x),V);I.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(L){Ie(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return P=fg,fg=!1,P}function oo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&zh(e,n,s)}i=i.next}while(i!==r)}}function vu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $h(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function aE(t){var e=t.alternate;e!==null&&(t.alternate=null,aE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[en],delete e[Co],delete e[kh],delete e[US],delete e[jS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lE(t){return t.tag===5||t.tag===3||t.tag===4}function pg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cl));else if(r!==4&&(t=t.child,t!==null))for(Wh(t,e,n),t=t.sibling;t!==null;)Wh(t,e,n),t=t.sibling}function Hh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Hh(t,e,n),t=t.sibling;t!==null;)Hh(t,e,n),t=t.sibling}var $e=null,Ut=!1;function Mn(t,e,n){for(n=n.child;n!==null;)uE(t,e,n),n=n.sibling}function uE(t,e,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(hu,n)}catch{}switch(n.tag){case 5:tt||ki(n,e);case 6:var r=$e,i=Ut;$e=null,Mn(t,e,n),$e=r,Ut=i,$e!==null&&(Ut?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Ut?(t=$e,n=n.stateNode,t.nodeType===8?Lc(t.parentNode,n):t.nodeType===1&&Lc(t,n),To(t)):Lc($e,n.stateNode));break;case 4:r=$e,i=Ut,$e=n.stateNode.containerInfo,Ut=!0,Mn(t,e,n),$e=r,Ut=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zh(n,e,o),i=i.next}while(i!==r)}Mn(t,e,n);break;case 1:if(!tt&&(ki(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,e,l)}Mn(t,e,n);break;case 21:Mn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Mn(t,e,n),tt=r):Mn(t,e,n);break;default:Mn(t,e,n)}}function mg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nA),e.forEach(function(r){var i=dA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,Ut=!1;break e;case 3:$e=l.stateNode.containerInfo,Ut=!0;break e;case 4:$e=l.stateNode.containerInfo,Ut=!0;break e}l=l.return}if($e===null)throw Error(F(160));uE(s,o,i),$e=null,Ut=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ie(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cE(e,t),e=e.sibling}function cE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bt(e,t),Jt(t),r&4){try{oo(3,t,t.return),vu(3,t)}catch(x){Ie(t,t.return,x)}try{oo(5,t,t.return)}catch(x){Ie(t,t.return,x)}}break;case 1:bt(e,t),Jt(t),r&512&&n!==null&&ki(n,n.return);break;case 5:if(bt(e,t),Jt(t),r&512&&n!==null&&ki(n,n.return),t.flags&32){var i=t.stateNode;try{_o(i,"")}catch(x){Ie(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&D_(i,s),mh(l,o);var c=mh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?b_(i,p):f==="dangerouslySetInnerHTML"?L_(i,p):f==="children"?_o(i,p):kd(i,f,p,c)}switch(l){case"input":ch(i,s);break;case"textarea":V_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?Vi(i,!!s.multiple,T,!1):m!==!!s.multiple&&(s.defaultValue!=null?Vi(i,!!s.multiple,s.defaultValue,!0):Vi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Co]=s}catch(x){Ie(t,t.return,x)}}break;case 6:if(bt(e,t),Jt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Ie(t,t.return,x)}}break;case 3:if(bt(e,t),Jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{To(e.containerInfo)}catch(x){Ie(t,t.return,x)}break;case 4:bt(e,t),Jt(t);break;case 13:bt(e,t),Jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(uf=Re())),r&4&&mg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(c=tt)||f,bt(e,t),tt=c):bt(e,t),Jt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(p=H=f;H!==null;){switch(m=H,T=m.child,m.tag){case 0:case 11:case 14:case 15:oo(4,m,m.return);break;case 1:ki(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(x){Ie(r,n,x)}}break;case 5:ki(m,m.return);break;case 22:if(m.memoizedState!==null){yg(p);continue}}T!==null?(T.return=m,H=T):yg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=M_("display",o))}catch(x){Ie(t,t.return,x)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){Ie(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:bt(e,t),Jt(t),r&4&&mg(t);break;case 21:break;default:bt(e,t),Jt(t)}}function Jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(lE(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_o(i,""),r.flags&=-33);var s=pg(t);Hh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=pg(t);Wh(t,l,o);break;default:throw Error(F(161))}}catch(u){Ie(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iA(t,e,n){H=t,hE(t)}function hE(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||za;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||tt;l=za;var c=tt;if(za=o,(tt=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?_g(i):u!==null?(u.return=o,H=u):_g(i);for(;s!==null;)H=s,hE(s),s=s.sibling;H=i,za=l,tt=c}gg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):gg(t)}}function gg(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||vu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ft(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&eg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}eg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&To(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}tt||e.flags&512&&$h(e)}catch(m){Ie(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function yg(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function _g(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vu(4,e)}catch(u){Ie(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ie(e,i,u)}}var s=e.return;try{$h(e)}catch(u){Ie(e,s,u)}break;case 5:var o=e.return;try{$h(e)}catch(u){Ie(e,o,u)}}}catch(u){Ie(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var sA=Math.ceil,Fl=Cn.ReactCurrentDispatcher,af=Cn.ReactCurrentOwner,Vt=Cn.ReactCurrentBatchConfig,oe=0,ze=null,Ne=null,Ge=0,vt=0,Ni=wr(0),Me=0,Vo=null,Jr=0,Eu=0,lf=0,ao=null,dt=null,uf=0,Yi=1/0,cn=null,Ul=!1,qh=null,nr=null,$a=!1,Gn=null,jl=0,lo=0,Gh=null,ol=-1,al=0;function lt(){return oe&6?Re():ol!==-1?ol:ol=Re()}function rr(t){return t.mode&1?oe&2&&Ge!==0?Ge&-Ge:zS.transition!==null?(al===0&&(al=Q_()),al):(t=ae,t!==0||(t=window.event,t=t===void 0?16:nv(t.type)),t):1}function $t(t,e,n,r){if(50<lo)throw lo=0,Gh=null,Error(F(185));Qo(t,n,r),(!(oe&2)||t!==ze)&&(t===ze&&(!(oe&2)&&(Eu|=n),Me===4&&Bn(t,Ge)),gt(t,r),n===1&&oe===0&&!(e.mode&1)&&(Yi=Re()+500,gu&&Tr()))}function gt(t,e){var n=t.callbackNode;z0(t,e);var r=Il(t,t===ze?Ge:0);if(r===0)n!==null&&Cm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cm(n),e===1)t.tag===0?BS(vg.bind(null,t)):wv(vg.bind(null,t)),bS(function(){!(oe&6)&&Tr()}),n=null;else{switch(Y_(r)){case 1:n=Od;break;case 4:n=G_;break;case 16:n=Tl;break;case 536870912:n=K_;break;default:n=Tl}n=vE(n,dE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dE(t,e){if(ol=-1,al=0,oe&6)throw Error(F(327));var n=t.callbackNode;if(Fi()&&t.callbackNode!==n)return null;var r=Il(t,t===ze?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Bl(t,r);else{e=r;var i=oe;oe|=2;var s=pE();(ze!==t||Ge!==e)&&(cn=null,Yi=Re()+500,Wr(t,e));do try{lA();break}catch(l){fE(t,l)}while(!0);Gd(),Fl.current=s,oe=i,Ne!==null?e=0:(ze=null,Ge=0,e=Me)}if(e!==0){if(e===2&&(i=Eh(t),i!==0&&(r=i,e=Kh(t,i))),e===1)throw n=Vo,Wr(t,0),Bn(t,r),gt(t,Re()),n;if(e===6)Bn(t,r);else{if(i=t.current.alternate,!(r&30)&&!oA(i)&&(e=Bl(t,r),e===2&&(s=Eh(t),s!==0&&(r=s,e=Kh(t,s))),e===1))throw n=Vo,Wr(t,0),Bn(t,r),gt(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Fr(t,dt,cn);break;case 3:if(Bn(t,r),(r&130023424)===r&&(e=uf+500-Re(),10<e)){if(Il(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ph(Fr.bind(null,t,dt,cn),e);break}Fr(t,dt,cn);break;case 4:if(Bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-zt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sA(r/1960))-r,10<r){t.timeoutHandle=Ph(Fr.bind(null,t,dt,cn),r);break}Fr(t,dt,cn);break;case 5:Fr(t,dt,cn);break;default:throw Error(F(329))}}}return gt(t,Re()),t.callbackNode===n?dE.bind(null,t):null}function Kh(t,e){var n=ao;return t.current.memoizedState.isDehydrated&&(Wr(t,e).flags|=256),t=Bl(t,e),t!==2&&(e=dt,dt=n,e!==null&&Qh(e)),t}function Qh(t){dt===null?dt=t:dt.push.apply(dt,t)}function oA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bn(t,e){for(e&=~lf,e&=~Eu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zt(e),r=1<<n;t[n]=-1,e&=~r}}function vg(t){if(oe&6)throw Error(F(327));Fi();var e=Il(t,0);if(!(e&1))return gt(t,Re()),null;var n=Bl(t,e);if(t.tag!==0&&n===2){var r=Eh(t);r!==0&&(e=r,n=Kh(t,r))}if(n===1)throw n=Vo,Wr(t,0),Bn(t,e),gt(t,Re()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,dt,cn),gt(t,Re()),null}function cf(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Yi=Re()+500,gu&&Tr())}}function Xr(t){Gn!==null&&Gn.tag===0&&!(oe&6)&&Fi();var e=oe;oe|=1;var n=Vt.transition,r=ae;try{if(Vt.transition=null,ae=1,t)return t()}finally{ae=r,Vt.transition=n,oe=e,!(oe&6)&&Tr()}}function hf(){vt=Ni.current,me(Ni)}function Wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MS(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Wd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pl();break;case 3:Ki(),me(pt),me(nt),Zd();break;case 5:Xd(r);break;case 4:Ki();break;case 13:me(_e);break;case 19:me(_e);break;case 10:Kd(r.type._context);break;case 22:case 23:hf()}n=n.return}if(ze=t,Ne=t=ir(t.current,null),Ge=vt=e,Me=0,Vo=null,lf=Eu=Jr=0,dt=ao=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Br=null}return t}function fE(t,e){do{var n=Ne;try{if(Gd(),rl.current=bl,Ml){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ml=!1}if(Yr=0,je=Le=ve=null,so=!1,No=0,af.current=null,n===null||n.return===null){Me=1,Vo=e,Ne=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ge,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var T=og(o);if(T!==null){T.flags&=-257,ag(T,o,l,s,e),T.mode&1&&sg(s,c,e),e=T,u=c;var P=e.updateQueue;if(P===null){var x=new Set;x.add(u),e.updateQueue=x}else P.add(u);break e}else{if(!(e&1)){sg(s,c,e),df();break e}u=Error(F(426))}}else if(ye&&l.mode&1){var V=og(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),ag(V,o,l,s,e),Hd(Qi(u,l));break e}}s=u=Qi(u,l),Me!==4&&(Me=2),ao===null?ao=[s]:ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=Yv(s,u,e);Zm(s,I);break e;case 1:l=u;var _=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(nr===null||!nr.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=Jv(s,l,e);Zm(s,L);break e}}s=s.return}while(s!==null)}gE(n)}catch(b){e=b,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function pE(){var t=Fl.current;return Fl.current=bl,t===null?bl:t}function df(){(Me===0||Me===3||Me===2)&&(Me=4),ze===null||!(Jr&268435455)&&!(Eu&268435455)||Bn(ze,Ge)}function Bl(t,e){var n=oe;oe|=2;var r=pE();(ze!==t||Ge!==e)&&(cn=null,Wr(t,e));do try{aA();break}catch(i){fE(t,i)}while(!0);if(Gd(),oe=n,Fl.current=r,Ne!==null)throw Error(F(261));return ze=null,Ge=0,Me}function aA(){for(;Ne!==null;)mE(Ne)}function lA(){for(;Ne!==null&&!V0();)mE(Ne)}function mE(t){var e=_E(t.alternate,t,vt);t.memoizedProps=t.pendingProps,e===null?gE(t):Ne=e,af.current=null}function gE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tA(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Me=6,Ne=null;return}}else if(n=eA(n,e,vt),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Me===0&&(Me=5)}function Fr(t,e,n){var r=ae,i=Vt.transition;try{Vt.transition=null,ae=1,uA(t,e,n,r)}finally{Vt.transition=i,ae=r}return null}function uA(t,e,n,r){do Fi();while(Gn!==null);if(oe&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($0(t,s),t===ze&&(Ne=ze=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$a||($a=!0,vE(Tl,function(){return Fi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vt.transition,Vt.transition=null;var o=ae;ae=1;var l=oe;oe|=4,af.current=null,rA(t,n),cE(n,t),kS(Rh),Sl=!!Ah,Rh=Ah=null,t.current=n,iA(n),O0(),oe=l,ae=o,Vt.transition=s}else t.current=n;if($a&&($a=!1,Gn=t,jl=i),s=t.pendingLanes,s===0&&(nr=null),b0(n.stateNode),gt(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ul)throw Ul=!1,t=qh,qh=null,t;return jl&1&&t.tag!==0&&Fi(),s=t.pendingLanes,s&1?t===Gh?lo++:(lo=0,Gh=t):lo=0,Tr(),null}function Fi(){if(Gn!==null){var t=Y_(jl),e=Vt.transition,n=ae;try{if(Vt.transition=null,ae=16>t?16:t,Gn===null)var r=!1;else{if(t=Gn,Gn=null,jl=0,oe&6)throw Error(F(331));var i=oe;for(oe|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:oo(8,f,s)}var p=f.child;if(p!==null)p.return=f,H=p;else for(;H!==null;){f=H;var m=f.sibling,T=f.return;if(aE(f),f===c){H=null;break}if(m!==null){m.return=T,H=m;break}H=T}}}var P=s.alternate;if(P!==null){var x=P.child;if(x!==null){P.child=null;do{var V=x.sibling;x.sibling=null,x=V}while(x!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oo(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,H=I;break e}H=s.return}}var _=t.current;for(H=_;H!==null;){o=H;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,H=A;else e:for(o=_;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:vu(9,l)}}catch(b){Ie(l,l.return,b)}if(l===o){H=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,H=L;break e}H=l.return}}if(oe=i,Tr(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(hu,t)}catch{}r=!0}return r}finally{ae=n,Vt.transition=e}}return!1}function Eg(t,e,n){e=Qi(n,e),e=Yv(t,e,1),t=tr(t,e,1),e=lt(),t!==null&&(Qo(t,1,e),gt(t,e))}function Ie(t,e,n){if(t.tag===3)Eg(t,t,n);else for(;e!==null;){if(e.tag===3){Eg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nr===null||!nr.has(r))){t=Qi(n,t),t=Jv(e,t,1),e=tr(e,t,1),t=lt(),e!==null&&(Qo(e,1,t),gt(e,t));break}}e=e.return}}function cA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(Ge&n)===n&&(Me===4||Me===3&&(Ge&130023424)===Ge&&500>Re()-uf?Wr(t,0):lf|=n),gt(t,e)}function yE(t,e){e===0&&(t.mode&1?(e=Va,Va<<=1,!(Va&130023424)&&(Va=4194304)):e=1);var n=lt();t=wn(t,e),t!==null&&(Qo(t,e,n),gt(t,n))}function hA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yE(t,n)}function dA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),yE(t,n)}var _E;_E=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pt.current)ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ft=!1,ZS(t,e,n);ft=!!(t.flags&131072)}else ft=!1,ye&&e.flags&1048576&&Tv(e,xl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;sl(t,e),t=e.pendingProps;var i=Hi(e,nt.current);bi(e,n),i=tf(null,e,r,t,i,n);var s=nf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mt(r)?(s=!0,kl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yd(e),i.updater=_u,e.stateNode=i,i._reactInternals=e,Lh(e,r,t,n),e=Fh(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&$d(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(sl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=pA(r),t=Ft(r,t),i){case 0:e=bh(null,e,r,t,n);break e;case 1:e=cg(null,e,r,t,n);break e;case 11:e=lg(null,e,r,t,n);break e;case 14:e=ug(null,e,r,Ft(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),bh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),cg(t,e,r,i,n);case 3:e:{if(tE(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Pv(t,e),Ol(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Qi(Error(F(423)),e),e=hg(t,e,r,n,i);break e}else if(r!==i){i=Qi(Error(F(424)),e),e=hg(t,e,r,n,i);break e}else for(wt=er(e.stateNode.containerInfo.firstChild),It=e,ye=!0,jt=null,n=Rv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qi(),r===i){e=Tn(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return kv(e),t===null&&Dh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ch(r,i)?o=null:s!==null&&Ch(r,s)&&(e.flags|=32),eE(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&Dh(e),null;case 13:return nE(t,e,n);case 4:return Jd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gi(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),lg(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(Dl,r._currentValue),r._currentValue=o,s!==null)if(qt(s.value,o)){if(s.children===i.children&&!pt.current){e=Tn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=gn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Vh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Vh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,bi(e,n),i=Ot(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=Ft(r,e.pendingProps),i=Ft(r.type,i),ug(t,e,r,i,n);case 15:return Xv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),sl(t,e),e.tag=1,mt(r)?(t=!0,kl(e)):t=!1,bi(e,n),Qv(e,r,i),Lh(e,r,i,n),Fh(null,e,r,!0,t,n);case 19:return rE(t,e,n);case 22:return Zv(t,e,n)}throw Error(F(156,e.tag))};function vE(t,e){return q_(t,e)}function fA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(t,e,n,r){return new fA(t,e,n,r)}function ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pA(t){if(typeof t=="function")return ff(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xd)return 11;if(t===Dd)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ll(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ff(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ei:return Hr(n.children,i,s,e);case Nd:o=8,i|=8;break;case sh:return t=Dt(12,n,e,i|2),t.elementType=sh,t.lanes=s,t;case oh:return t=Dt(13,n,e,i),t.elementType=oh,t.lanes=s,t;case ah:return t=Dt(19,n,e,i),t.elementType=ah,t.lanes=s,t;case k_:return wu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C_:o=10;break e;case P_:o=9;break e;case xd:o=11;break e;case Dd:o=14;break e;case Fn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Dt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Hr(t,e,n,r){return t=Dt(7,t,r,e),t.lanes=n,t}function wu(t,e,n,r){return t=Dt(22,t,r,e),t.elementType=k_,t.lanes=n,t.stateNode={isHidden:!1},t}function $c(t,e,n){return t=Dt(6,t,null,e),t.lanes=n,t}function Wc(t,e,n){return e=Dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sc(0),this.expirationTimes=Sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pf(t,e,n,r,i,s,o,l,u){return t=new mA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yd(s),t}function gA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function EE(t){if(!t)return dr;t=t._reactInternals;e:{if(ai(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(mt(n))return Ev(t,n,e)}return e}function wE(t,e,n,r,i,s,o,l,u){return t=pf(n,r,!0,t,i,s,o,l,u),t.context=EE(null),n=t.current,r=lt(),i=rr(n),s=gn(r,i),s.callback=e??null,tr(n,s,i),t.current.lanes=i,Qo(t,i,r),gt(t,r),t}function Tu(t,e,n,r){var i=e.current,s=lt(),o=rr(i);return n=EE(n),e.context===null?e.context=n:e.pendingContext=n,e=gn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=tr(i,e,o),t!==null&&($t(t,i,o,s),nl(t,i,o)),o}function zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mf(t,e){wg(t,e),(t=t.alternate)&&wg(t,e)}function yA(){return null}var TE=typeof reportError=="function"?reportError:function(t){console.error(t)};function gf(t){this._internalRoot=t}Iu.prototype.render=gf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Tu(t,e,null,null)};Iu.prototype.unmount=gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xr(function(){Tu(null,t,null,null)}),e[En]=null}};function Iu(t){this._internalRoot=t}Iu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Z_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jn.length&&e!==0&&e<jn[n].priority;n++);jn.splice(n,0,t),n===0&&tv(t)}};function yf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tg(){}function _A(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=zl(o);s.call(c)}}var o=wE(e,r,t,0,null,!1,!1,"",Tg);return t._reactRootContainer=o,t[En]=o.current,Ao(t.nodeType===8?t.parentNode:t),Xr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=zl(u);l.call(c)}}var u=pf(t,0,!1,null,null,!1,!1,"",Tg);return t._reactRootContainer=u,t[En]=u.current,Ao(t.nodeType===8?t.parentNode:t),Xr(function(){Tu(e,u,n,r)}),u}function Au(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=zl(o);l.call(u)}}Tu(e,o,t,i)}else o=_A(n,e,t,i,r);return zl(o)}J_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qs(e.pendingLanes);n!==0&&(Ld(e,n|1),gt(e,Re()),!(oe&6)&&(Yi=Re()+500,Tr()))}break;case 13:Xr(function(){var r=wn(t,1);if(r!==null){var i=lt();$t(r,t,1,i)}}),mf(t,1)}};Md=function(t){if(t.tag===13){var e=wn(t,134217728);if(e!==null){var n=lt();$t(e,t,134217728,n)}mf(t,134217728)}};X_=function(t){if(t.tag===13){var e=rr(t),n=wn(t,e);if(n!==null){var r=lt();$t(n,t,e,r)}mf(t,e)}};Z_=function(){return ae};ev=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};yh=function(t,e,n){switch(e){case"input":if(ch(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=mu(r);if(!i)throw Error(F(90));x_(r),ch(r,i)}}}break;case"textarea":V_(t,n);break;case"select":e=n.value,e!=null&&Vi(t,!!n.multiple,e,!1)}};j_=cf;B_=Xr;var vA={usingClientEntryPoint:!1,Events:[Jo,Si,mu,F_,U_,cf]},zs={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},EA={bundleType:zs.bundleType,version:zs.version,rendererPackageName:zs.rendererPackageName,rendererConfig:zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=W_(t),t===null?null:t.stateNode},findFiberByHostInstance:zs.findFiberByHostInstance||yA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{hu=Wa.inject(EA),tn=Wa}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vA;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yf(e))throw Error(F(200));return gA(t,e,null,n)};Rt.createRoot=function(t,e){if(!yf(t))throw Error(F(299));var n=!1,r="",i=TE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=pf(t,1,!1,null,null,n,!1,r,i),t[En]=e.current,Ao(t.nodeType===8?t.parentNode:t),new gf(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=W_(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return Xr(t)};Rt.hydrate=function(t,e,n){if(!Su(e))throw Error(F(200));return Au(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!yf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=TE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=wE(e,null,t,1,n??null,i,!1,s,o),t[En]=e.current,Ao(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Iu(e)};Rt.render=function(t,e,n){if(!Su(e))throw Error(F(200));return Au(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!Su(t))throw Error(F(40));return t._reactRootContainer?(Xr(function(){Au(null,null,t,!1,function(){t._reactRootContainer=null,t[En]=null})}),!0):!1};Rt.unstable_batchedUpdates=cf;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Su(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Au(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function IE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(IE)}catch(t){console.error(t)}}IE(),I_.exports=Rt;var wA=I_.exports,Ig=wA;rh.createRoot=Ig.createRoot,rh.hydrateRoot=Ig.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oo(){return Oo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oo.apply(this,arguments)}var Kn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Kn||(Kn={}));const Sg="popstate";function TA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Yh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:SE(i)}return SA(e,n,null,t)}function Ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function _f(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function IA(){return Math.random().toString(36).substr(2,8)}function Ag(t,e){return{usr:t.state,key:t.key,idx:e}}function Yh(t,e,n,r){return n===void 0&&(n=null),Oo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ls(e):e,{state:n,key:e&&e.key||r||IA()})}function SE(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ls(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function SA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Kn.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(Oo({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=Kn.Pop;let V=f(),I=V==null?null:V-c;c=V,u&&u({action:l,location:x.location,delta:I})}function m(V,I){l=Kn.Push;let _=Yh(x.location,V,I);c=f()+1;let A=Ag(_,c),L=x.createHref(_);try{o.pushState(A,"",L)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(L)}s&&u&&u({action:l,location:x.location,delta:1})}function T(V,I){l=Kn.Replace;let _=Yh(x.location,V,I);c=f();let A=Ag(_,c),L=x.createHref(_);o.replaceState(A,"",L),s&&u&&u({action:l,location:x.location,delta:0})}function P(V){let I=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof V=="string"?V:SE(V);return _=_.replace(/ $/,"%20"),Ve(I,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,I)}let x={get action(){return l},get location(){return t(i,o)},listen(V){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Sg,p),u=V,()=>{i.removeEventListener(Sg,p),u=null}},createHref(V){return e(i,V)},createURL:P,encodeLocation(V){let I=P(V);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:m,replace:T,go(V){return o.go(V)}};return x}var Rg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Rg||(Rg={}));function AA(t,e,n){return n===void 0&&(n="/"),RA(t,e,n)}function RA(t,e,n,r){let i=typeof e=="string"?ls(e):e,s=CE(i.pathname||"/",n);if(s==null)return null;let o=AE(t);CA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=UA(s);l=MA(o[u],c)}return l}function AE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ve(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=qr([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Ve(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),AE(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:OA(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of RE(s.path))i(s,o,u)}),e}function RE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=RE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function CA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:LA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const PA=/^:[\w-]+$/,kA=3,NA=2,xA=1,DA=10,VA=-2,Cg=t=>t==="*";function OA(t,e){let n=t.split("/"),r=n.length;return n.some(Cg)&&(r+=VA),e&&(r+=NA),n.filter(i=>!Cg(i)).reduce((i,s)=>i+(PA.test(s)?kA:s===""?xA:DA),r)}function LA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function MA(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=bA({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),m=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:qr([s,p.pathname]),pathnameBase:WA(qr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=qr([s,p.pathnameBase]))}return o}function bA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=FA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,p)=>{let{paramName:m,isOptional:T}=f;if(m==="*"){let x=l[p]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const P=l[p];return T&&!P?c[m]=void 0:c[m]=(P||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function FA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),_f(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function UA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return _f(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function CE(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const jA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,BA=t=>jA.test(t);function zA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ls(t):t,s;if(n)if(BA(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),_f(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Pg(n.substring(1),"/"):s=Pg(n,e)}else s=e;return{pathname:s,search:HA(r),hash:qA(i)}}function Pg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Hc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $A(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function PE(t,e){let n=$A(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function kE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ls(t):(i=Oo({},t),Ve(!i.pathname||!i.pathname.includes("?"),Hc("?","pathname","search",i)),Ve(!i.pathname||!i.pathname.includes("#"),Hc("#","pathname","hash",i)),Ve(!i.search||!i.search.includes("#"),Hc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=zA(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const qr=t=>t.join("/").replace(/\/\/+/g,"/"),WA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),HA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function GA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const NE=["post","put","patch","delete"];new Set(NE);const KA=["get",...NE];new Set(KA);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lo(){return Lo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lo.apply(this,arguments)}const vf=U.createContext(null),QA=U.createContext(null),Zo=U.createContext(null),Ru=U.createContext(null),Ir=U.createContext({outlet:null,matches:[],isDataRoute:!1}),xE=U.createContext(null);function ea(){return U.useContext(Ru)!=null}function ta(){return ea()||Ve(!1),U.useContext(Ru).location}function DE(t){U.useContext(Zo).static||U.useLayoutEffect(t)}function na(){let{isDataRoute:t}=U.useContext(Ir);return t?u1():YA()}function YA(){ea()||Ve(!1);let t=U.useContext(vf),{basename:e,future:n,navigator:r}=U.useContext(Zo),{matches:i}=U.useContext(Ir),{pathname:s}=ta(),o=JSON.stringify(PE(i,n.v7_relativeSplatPath)),l=U.useRef(!1);return DE(()=>{l.current=!0}),U.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=kE(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:qr([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}function JA(){let{matches:t}=U.useContext(Ir),e=t[t.length-1];return e?e.params:{}}function XA(t,e){return ZA(t,e)}function ZA(t,e,n,r){ea()||Ve(!1);let{navigator:i}=U.useContext(Zo),{matches:s}=U.useContext(Ir),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ta(),f;if(e){var p;let V=typeof e=="string"?ls(e):e;u==="/"||(p=V.pathname)!=null&&p.startsWith(u)||Ve(!1),f=V}else f=c;let m=f.pathname||"/",T=m;if(u!=="/"){let V=u.replace(/^\//,"").split("/");T="/"+m.replace(/^\//,"").split("/").slice(V.length).join("/")}let P=AA(t,{pathname:T}),x=i1(P&&P.map(V=>Object.assign({},V,{params:Object.assign({},l,V.params),pathname:qr([u,i.encodeLocation?i.encodeLocation(V.pathname).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?u:qr([u,i.encodeLocation?i.encodeLocation(V.pathnameBase).pathname:V.pathnameBase])})),s,n,r);return e&&x?U.createElement(Ru.Provider,{value:{location:Lo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Kn.Pop}},x):x}function e1(){let t=l1(),e=GA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const t1=U.createElement(e1,null);class n1 extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(Ir.Provider,{value:this.props.routeContext},U.createElement(xE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function r1(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(vf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(Ir.Provider,{value:e},r)}function i1(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||Ve(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=f),p.route.id){let{loaderData:m,errors:T}=n,P=p.route.loader&&m[p.route.id]===void 0&&(!T||T[p.route.id]===void 0);if(p.route.lazy||P){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,p,m)=>{let T,P=!1,x=null,V=null;n&&(T=l&&p.route.id?l[p.route.id]:void 0,x=p.route.errorElement||t1,u&&(c<0&&m===0?(c1("route-fallback"),P=!0,V=null):c===m&&(P=!0,V=p.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,m+1)),_=()=>{let A;return T?A=x:P?A=V:p.route.Component?A=U.createElement(p.route.Component,null):p.route.element?A=p.route.element:A=f,U.createElement(r1,{match:p,routeContext:{outlet:f,matches:I,isDataRoute:n!=null},children:A})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?U.createElement(n1,{location:n.location,revalidation:n.revalidation,component:x,error:T,children:_(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):_()},null)}var VE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(VE||{}),OE=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(OE||{});function s1(t){let e=U.useContext(vf);return e||Ve(!1),e}function o1(t){let e=U.useContext(QA);return e||Ve(!1),e}function a1(t){let e=U.useContext(Ir);return e||Ve(!1),e}function LE(t){let e=a1(),n=e.matches[e.matches.length-1];return n.route.id||Ve(!1),n.route.id}function l1(){var t;let e=U.useContext(xE),n=o1(),r=LE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function u1(){let{router:t}=s1(VE.UseNavigateStable),e=LE(OE.UseNavigateStable),n=U.useRef(!1);return DE(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Lo({fromRouteId:e},s)))},[t,e])}const kg={};function c1(t,e,n){kg[t]||(kg[t]=!0)}function h1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function ME(t){let{to:e,replace:n,state:r,relative:i}=t;ea()||Ve(!1);let{future:s,static:o}=U.useContext(Zo),{matches:l}=U.useContext(Ir),{pathname:u}=ta(),c=na(),f=kE(e,PE(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(f);return U.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function Ks(t){Ve(!1)}function d1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Kn.Pop,navigator:s,static:o=!1,future:l}=t;ea()&&Ve(!1);let u=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:u,navigator:s,static:o,future:Lo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=ls(r));let{pathname:f="/",search:p="",hash:m="",state:T=null,key:P="default"}=r,x=U.useMemo(()=>{let V=CE(f,u);return V==null?null:{location:{pathname:V,search:p,hash:m,state:T,key:P},navigationType:i}},[u,f,p,m,T,P,i]);return x==null?null:U.createElement(Zo.Provider,{value:c},U.createElement(Ru.Provider,{children:n,value:x}))}function f1(t){let{children:e,location:n}=t;return XA(Jh(e),n)}new Promise(()=>{});function Jh(t,e){e===void 0&&(e=[]);let n=[];return U.Children.forEach(t,(r,i)=>{if(!U.isValidElement(r))return;let s=[...e,i];if(r.type===U.Fragment){n.push.apply(n,Jh(r.props.children,s));return}r.type!==Ks&&Ve(!1),!r.props.index||!r.props.children||Ve(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Jh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const p1="6";try{window.__reactRouterVersion=p1}catch{}const m1="startTransition",Ng=c0[m1];function g1(t){let{basename:e,children:n,future:r,window:i}=t,s=U.useRef();s.current==null&&(s.current=TA({window:i,v5Compat:!0}));let o=s.current,[l,u]=U.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=U.useCallback(p=>{c&&Ng?Ng(()=>u(p)):u(p)},[u,c]);return U.useLayoutEffect(()=>o.listen(f),[o,f]),U.useEffect(()=>h1(r),[r]),U.createElement(d1,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var xg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(xg||(xg={}));var Dg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dg||(Dg={}));const y1=()=>{};var Vg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},FE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,T=c&63;u||(T=64,o||(m=64)),r.push(n[f],n[p],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new v1;const m=s<<2|l>>4;if(r.push(m),c!==64){const T=l<<4&240|c>>2;if(r.push(T),p!==64){const P=c<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class v1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const E1=function(t){const e=bE(t);return FE.encodeByteArray(e,!0)},$l=function(t){return E1(t).replace(/\./g,"")},UE=function(t){try{return FE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function w1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const T1=()=>w1().__FIREBASE_DEFAULTS__,I1=()=>{if(typeof process>"u"||typeof Vg>"u")return;const t=Vg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},S1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&UE(t[1]);return e&&JSON.parse(e)},Cu=()=>{try{return y1()||T1()||I1()||S1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jE=t=>{var e,n;return(n=(e=Cu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},A1=t=>{const e=jE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},BE=()=>{var t;return(t=Cu())==null?void 0:t.config},zE=t=>{var e;return(e=Cu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $E(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function C1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[$l(JSON.stringify(n)),$l(JSON.stringify(o)),""].join(".")}const uo={};function P1(){const t={prod:[],emulator:[]};for(const e of Object.keys(uo))uo[e]?t.emulator.push(e):t.prod.push(e);return t}function k1(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Og=!1;function WE(t,e){if(typeof window>"u"||typeof document>"u"||!us(window.location.host)||uo[t]===e||uo[t]||Og)return;uo[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=P1().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,T){m.setAttribute("width","24"),m.setAttribute("id",T),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Og=!0,o()},m}function f(m,T){m.setAttribute("id",T),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=k1(r),T=n("text"),P=document.getElementById(T)||document.createElement("span"),x=n("learnmore"),V=document.getElementById(x)||document.createElement("a"),I=n("preprendIcon"),_=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const A=m.element;l(A),f(V,x);const L=c();u(_,I),A.append(_,P,V,L),document.body.appendChild(A)}s?(P.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function N1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function x1(){var e;const t=(e=Cu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function D1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function V1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function O1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function L1(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function M1(){return!x1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function b1(){try{return typeof indexedDB=="object"}catch{return!1}}function F1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=U1,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ra.prototype.create)}}class ra{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?j1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Pn(i,l,r)}}function j1(t,e){return t.replace(B1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const B1=/\{\$([^}]+)}/g;function z1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Lg(s)&&Lg(o)){if(!Zr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Lg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ys(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $1(t,e){const n=new W1(t,e);return n.subscribe.bind(n)}class W1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");H1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qc),i.error===void 0&&(i.error=qc),i.complete===void 0&&(i.complete=qc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function H1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qc(){}/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class ei{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ur="[DEFAULT]";/**
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
 */class q1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new R1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(K1(e))try{this.getOrInitializeService({instanceIdentifier:Ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ur){return this.instances.has(e)}getOptions(e=Ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:G1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ur){return this.component?this.component.multipleInstances?e:Ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function G1(t){return t===Ur?void 0:t}function K1(t){return t.instantiationMode==="EAGER"}/**
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
 */class Q1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new q1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Y1={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},J1=te.INFO,X1={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Z1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=X1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ef{constructor(e){this.name=e,this._logLevel=J1,this._logHandler=Z1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Y1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const eR=(t,e)=>e.some(n=>t instanceof n);let Mg,bg;function tR(){return Mg||(Mg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nR(){return bg||(bg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const HE=new WeakMap,Xh=new WeakMap,qE=new WeakMap,Gc=new WeakMap,wf=new WeakMap;function rR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&HE.set(n,t)}).catch(()=>{}),wf.set(e,t),e}function iR(t){if(Xh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xh.set(t,e)}let Zh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sR(t){Zh=t(Zh)}function oR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kc(this),e,...n);return qE.set(r,e.sort?e.sort():[e]),sr(r)}:nR().includes(t)?function(...e){return t.apply(Kc(this),e),sr(HE.get(this))}:function(...e){return sr(t.apply(Kc(this),e))}}function aR(t){return typeof t=="function"?oR(t):(t instanceof IDBTransaction&&iR(t),eR(t,tR())?new Proxy(t,Zh):t)}function sr(t){if(t instanceof IDBRequest)return rR(t);if(Gc.has(t))return Gc.get(t);const e=aR(t);return e!==t&&(Gc.set(t,e),wf.set(e,t)),e}const Kc=t=>wf.get(t);function lR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=sr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(sr(o.result),u.oldVersion,u.newVersion,sr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const uR=["get","getKey","getAll","getAllKeys","count"],cR=["put","add","delete","clear"],Qc=new Map;function Fg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qc.get(e))return Qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Qc.set(e,s),s}sR(t=>({...t,get:(e,n,r)=>Fg(e,n)||t.get(e,n,r),has:(e,n)=>!!Fg(e,n)||t.has(e,n)}));/**
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
 */class hR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ed="@firebase/app",Ug="0.14.9";/**
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
 */const In=new Ef("@firebase/app"),fR="@firebase/app-compat",pR="@firebase/analytics-compat",mR="@firebase/analytics",gR="@firebase/app-check-compat",yR="@firebase/app-check",_R="@firebase/auth",vR="@firebase/auth-compat",ER="@firebase/database",wR="@firebase/data-connect",TR="@firebase/database-compat",IR="@firebase/functions",SR="@firebase/functions-compat",AR="@firebase/installations",RR="@firebase/installations-compat",CR="@firebase/messaging",PR="@firebase/messaging-compat",kR="@firebase/performance",NR="@firebase/performance-compat",xR="@firebase/remote-config",DR="@firebase/remote-config-compat",VR="@firebase/storage",OR="@firebase/storage-compat",LR="@firebase/firestore",MR="@firebase/ai",bR="@firebase/firestore-compat",FR="firebase",UR="12.10.0";/**
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
 */const td="[DEFAULT]",jR={[ed]:"fire-core",[fR]:"fire-core-compat",[mR]:"fire-analytics",[pR]:"fire-analytics-compat",[yR]:"fire-app-check",[gR]:"fire-app-check-compat",[_R]:"fire-auth",[vR]:"fire-auth-compat",[ER]:"fire-rtdb",[wR]:"fire-data-connect",[TR]:"fire-rtdb-compat",[IR]:"fire-fn",[SR]:"fire-fn-compat",[AR]:"fire-iid",[RR]:"fire-iid-compat",[CR]:"fire-fcm",[PR]:"fire-fcm-compat",[kR]:"fire-perf",[NR]:"fire-perf-compat",[xR]:"fire-rc",[DR]:"fire-rc-compat",[VR]:"fire-gcs",[OR]:"fire-gcs-compat",[LR]:"fire-fst",[bR]:"fire-fst-compat",[MR]:"fire-vertex","fire-js":"fire-js",[FR]:"fire-js-all"};/**
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
 */const Wl=new Map,BR=new Map,nd=new Map;function jg(t,e){try{t.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ji(t){const e=t.name;if(nd.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;nd.set(e,t);for(const n of Wl.values())jg(n,t);for(const n of BR.values())jg(n,t);return!0}function Tf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const zR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},or=new ra("app","Firebase",zR);/**
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
 */class $R{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ei("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
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
 */const cs=UR;function GE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:td,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw or.create("bad-app-name",{appName:String(i)});if(n||(n=BE()),!n)throw or.create("no-options");const s=Wl.get(i);if(s){if(Zr(n,s.options)&&Zr(r,s.config))return s;throw or.create("duplicate-app",{appName:i})}const o=new Q1(i);for(const u of nd.values())o.addComponent(u);const l=new $R(n,r,o);return Wl.set(i,l),l}function KE(t=td){const e=Wl.get(t);if(!e&&t===td&&BE())return GE();if(!e)throw or.create("no-app",{appName:t});return e}function ar(t,e,n){let r=jR[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(o.join(" "));return}Ji(new ei(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const WR="firebase-heartbeat-database",HR=1,Mo="firebase-heartbeat-store";let Yc=null;function QE(){return Yc||(Yc=lR(WR,HR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Mo)}catch(n){console.warn(n)}}}}).catch(t=>{throw or.create("idb-open",{originalErrorMessage:t.message})})),Yc}async function qR(t){try{const n=(await QE()).transaction(Mo),r=await n.objectStore(Mo).get(YE(t));return await n.done,r}catch(e){if(e instanceof Pn)In.warn(e.message);else{const n=or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(n.message)}}}async function Bg(t,e){try{const r=(await QE()).transaction(Mo,"readwrite");await r.objectStore(Mo).put(e,YE(t)),await r.done}catch(n){if(n instanceof Pn)In.warn(n.message);else{const r=or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});In.warn(r.message)}}}function YE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const GR=1024,KR=30;class QR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>KR){const o=XR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){In.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zg(),{heartbeatsToSend:r,unsentEntries:i}=YR(this._heartbeatsCache.heartbeats),s=$l(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return In.warn(n),""}}}function zg(){return new Date().toISOString().substring(0,10)}function YR(t,e=GR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$g(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$g(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class JR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return b1()?F1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Bg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Bg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function $g(t){return $l(JSON.stringify({version:2,heartbeats:t})).length}function XR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function ZR(t){Ji(new ei("platform-logger",e=>new hR(e),"PRIVATE")),Ji(new ei("heartbeat",e=>new QR(e),"PRIVATE")),ar(ed,Ug,t),ar(ed,Ug,"esm2020"),ar("fire-js","")}ZR("");function JE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eC=JE,XE=new ra("auth","Firebase",JE());/**
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
 */const Hl=new Ef("@firebase/auth");function tC(t,...e){Hl.logLevel<=te.WARN&&Hl.warn(`Auth (${cs}): ${t}`,...e)}function ul(t,...e){Hl.logLevel<=te.ERROR&&Hl.error(`Auth (${cs}): ${t}`,...e)}/**
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
 */function Gt(t,...e){throw If(t,...e)}function rn(t,...e){return If(t,...e)}function ZE(t,e,n){const r={...eC(),[e]:n};return new ra("auth","Firebase",r).create(e,{appName:t.name})}function yn(t){return ZE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function If(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return XE.create(t,...e)}function Q(t,e,...n){if(!t)throw If(e,...n)}function pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ul(e),new Error(e)}function Sn(t,e){t||pn(e)}/**
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
 */function rd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function nC(){return Wg()==="http:"||Wg()==="https:"}function Wg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function rC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nC()||V1()||"connection"in navigator)?navigator.onLine:!0}function iC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class sa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sn(n>e,"Short delay should be less than long delay!"),this.isMobile=N1()||O1()}get(){return rC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sf(t,e){Sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ew{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const oC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],aC=new sa(3e4,6e4);function Sr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ar(t,e,n,r,i={}){return tw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ia({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return D1()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&us(t.emulatorConfig.host)&&(c.credentials="include"),ew.fetch()(await nw(t,t.config.apiHost,n,l),c)})}async function tw(t,e,n){t._canInitEmulator=!1;const r={...sC,...e};try{const i=new uC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ha(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ha(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ha(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ha(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ZE(t,f,c);Gt(t,f)}}catch(i){if(i instanceof Pn)throw i;Gt(t,"network-request-failed",{message:String(i)})}}async function oa(t,e,n,r,i={}){const s=await Ar(t,e,n,r,i);return"mfaPendingCredential"in s&&Gt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function nw(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Sf(t.config,i):`${t.config.apiScheme}://${i}`;return oC.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function lC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),aC.get())})}}function Ha(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=rn(t,e,r);return i.customData._tokenResponse=n,i}function Hg(t){return t!==void 0&&t.enterprise!==void 0}class cC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return lC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function hC(t,e){return Ar(t,"GET","/v2/recaptchaConfig",Sr(t,e))}/**
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
 */async function dC(t,e){return Ar(t,"POST","/v1/accounts:delete",e)}async function ql(t,e){return Ar(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function co(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fC(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=Af(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:co(Jc(i.auth_time)),issuedAtTime:co(Jc(i.iat)),expirationTime:co(Jc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Jc(t){return Number(t)*1e3}function Af(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ul("JWT malformed, contained fewer than 3 sections"),null;try{const i=UE(n);return i?JSON.parse(i):(ul("Failed to decode base64 JWT payload"),null)}catch(i){return ul("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qg(t){const e=Af(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function bo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pn&&pC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function pC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class mC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class id{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=co(this.lastLoginAt),this.creationTime=co(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gl(t){var p;const e=t.auth,n=await t.getIdToken(),r=await bo(t,ql(e,{idToken:n}));Q(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?rw(i.providerUserInfo):[],o=yC(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new id(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function gC(t){const e=Pe(t);await Gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function rw(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function _C(t,e){const n=await tw(t,{},async()=>{const r=ia({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await nw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&us(t.emulatorConfig.host)&&(u.credentials="include"),ew.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vC(t,e){return Ar(t,"POST","/v2/accounts:revokeToken",Sr(t,e))}/**
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
 */class Ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=qg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _C(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ui;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ui,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
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
 */function bn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new mC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new id(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await bo(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fC(this,e)}reload(){return gC(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Gl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(yn(this.auth));const e=await this.getIdToken();return await bo(this,dC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:T,providerData:P,stsTokenManager:x}=n;Q(p&&x,e,"internal-error");const V=Ui.fromJSON(this.name,x);Q(typeof p=="string",e,"internal-error"),bn(r,e.name),bn(i,e.name),Q(typeof m=="boolean",e,"internal-error"),Q(typeof T=="boolean",e,"internal-error"),bn(s,e.name),bn(o,e.name),bn(l,e.name),bn(u,e.name),bn(c,e.name),bn(f,e.name);const I=new Bt({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:T,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:V,createdAt:c,lastLoginAt:f});return P&&Array.isArray(P)&&(I.providerData=P.map(_=>({..._}))),u&&(I._redirectEventId=u),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ui;i.updateFromServerResponse(n);const s=new Bt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Gl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?rw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ui;l.updateFromIdToken(r);const u=new Bt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new id(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Gg=new Map;function mn(t){Sn(t instanceof Function,"Expected a class definition");let e=Gg.get(t);return e?(Sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gg.set(t,e),e)}/**
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
 */class iw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iw.type="NONE";const Kg=iw;/**
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
 */function cl(t,e,n){return`firebase:${t}:${e}:${n}`}class ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=cl(this.userKey,i.apiKey,s),this.fullPersistenceKey=cl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ql(this.auth,{idToken:e}).catch(()=>{});return n?Bt._fromGetAccountInfoResponse(this.auth,n,e):null}return Bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ji(mn(Kg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||mn(Kg);const o=cl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let p;if(typeof f=="string"){const m=await ql(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Bt._fromGetAccountInfoResponse(e,m,f)}else p=Bt._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ji(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ji(s,e,r))}}/**
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
 */function Qg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cw(e))return"Blackberry";if(hw(e))return"Webos";if(ow(e))return"Safari";if((e.includes("chrome/")||aw(e))&&!e.includes("edge/"))return"Chrome";if(uw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sw(t=rt()){return/firefox\//i.test(t)}function ow(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function aw(t=rt()){return/crios\//i.test(t)}function lw(t=rt()){return/iemobile/i.test(t)}function uw(t=rt()){return/android/i.test(t)}function cw(t=rt()){return/blackberry/i.test(t)}function hw(t=rt()){return/webos/i.test(t)}function Rf(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function EC(t=rt()){var e;return Rf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function wC(){return L1()&&document.documentMode===10}function dw(t=rt()){return Rf(t)||uw(t)||hw(t)||cw(t)||/windows phone/i.test(t)||lw(t)}/**
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
 */function fw(t,e=[]){let n;switch(t){case"Browser":n=Qg(rt());break;case"Worker":n=`${Qg(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cs}/${r}`}/**
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
 */class TC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function IC(t,e={}){return Ar(t,"GET","/v2/passwordPolicy",Sr(t,e))}/**
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
 */const SC=6;class AC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??SC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class RC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yg(this),this.idTokenSubscription=new Yg(this),this.beforeStateQueue=new TC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=XE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ql(this,{idToken:e}),r=await Bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xt(this.app))return Promise.reject(yn(this));const n=e?Pe(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xt(this.app)?Promise.reject(yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await IC(this),n=new AC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ra("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await vC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&tC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function li(t){return Pe(t)}class Yg{constructor(e){this.auth=e,this.observer=null,this.addObserver=$1(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Pu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CC(t){Pu=t}function pw(t){return Pu.loadJS(t)}function PC(){return Pu.recaptchaEnterpriseScript}function kC(){return Pu.gapiScript}function NC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class xC{constructor(){this.enterprise=new DC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class DC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const VC="recaptcha-enterprise",mw="NO_RECAPTCHA";class OC{constructor(e){this.type=VC,this.auth=li(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{hC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new cC(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Hg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(mw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new xC().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Hg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=PC();u.length!==0&&(u+=l),pw(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Jg(t,e,n,r=!1,i=!1){const s=new OC(t);let o;if(i)o=mw;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function sd(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Jg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Jg(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function LC(t,e){const n=Tf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Zr(s,e??{}))return i;Gt(i,"already-initialized")}return n.initialize({options:e})}function MC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bC(t,e,n){const r=li(t);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=gw(e),{host:o,port:l}=FC(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(Zr(c,r.config.emulator)&&Zr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,us(o)?($E(`${s}//${o}${u}`),WE("Auth",!0)):UC()}function gw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function FC(t){const e=gw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xg(o)}}}function Xg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function UC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Cf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}async function jC(t,e){return Ar(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function BC(t,e){return oa(t,"POST","/v1/accounts:signInWithPassword",Sr(t,e))}/**
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
 */async function zC(t,e){return oa(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}async function $C(t,e){return oa(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}/**
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
 */class Fo extends Cf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Fo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sd(e,n,"signInWithPassword",BC);case"emailLink":return zC(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sd(e,r,"signUpPassword",jC);case"emailLink":return $C(e,{idToken:n,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Bi(t,e){return oa(t,"POST","/v1/accounts:signInWithIdp",Sr(t,e))}/**
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
 */const WC="http://localhost";class ti extends Cf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ti(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new ti(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bi(e,n)}buildRequest(){const e={requestUri:WC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ia(n)}return e}}/**
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
 */function HC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qC(t){const e=Qs(Ys(t)).link,n=e?Qs(Ys(e)).deep_link_id:null,r=Qs(Ys(t)).deep_link_id;return(r?Qs(Ys(r)).link:null)||r||n||e||t}class Pf{constructor(e){const n=Qs(Ys(e)),r=n.apiKey??null,i=n.oobCode??null,s=HC(n.mode??null);Q(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=qC(e);try{return new Pf(n)}catch{return null}}}/**
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
 */class hs{constructor(){this.providerId=hs.PROVIDER_ID}static credential(e,n){return Fo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Pf.parseLink(n);return Q(r,"argument-error"),Fo._fromEmailAndCode(e,r.code,r.tenantId)}}hs.PROVIDER_ID="password";hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class yw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class aa extends yw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zn extends aa{constructor(){super("facebook.com")}static credential(e){return ti._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
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
 */class $n extends aa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ti._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
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
 */class Wn extends aa{constructor(){super("github.com")}static credential(e){return ti._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
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
 */class Hn extends aa{constructor(){super("twitter.com")}static credential(e,n){return ti._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
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
 */async function GC(t,e){return oa(t,"POST","/v1/accounts:signUp",Sr(t,e))}/**
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
 */class ni{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Bt._fromIdTokenResponse(e,r,i),o=Zg(r);return new ni({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Zg(r);return new ni({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Zg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Kl extends Pn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Kl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Kl(e,n,r,i)}}function _w(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Kl._fromErrorAndOperation(t,s,e,r):s})}async function KC(t,e,n=!1){const r=await bo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ni._forOperation(t,"link",r)}/**
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
 */async function QC(t,e,n=!1){const{auth:r}=t;if(xt(r.app))return Promise.reject(yn(r));const i="reauthenticate";try{const s=await bo(t,_w(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=Af(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),ni._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Gt(r,"user-mismatch"),s}}/**
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
 */async function vw(t,e,n=!1){if(xt(t.app))return Promise.reject(yn(t));const r="signIn",i=await _w(t,r,e),s=await ni._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function YC(t,e){return vw(li(t),e)}/**
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
 */async function Ew(t){const e=li(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function JC(t,e,n){if(xt(t.app))return Promise.reject(yn(t));const r=li(t),o=await sd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",GC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Ew(t),u}),l=await ni._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function XC(t,e,n){return xt(t.app)?Promise.reject(yn(t)):YC(Pe(t),hs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ew(t),r})}function ZC(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function eP(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function tP(t,e,n,r){return Pe(t).onAuthStateChanged(e,n,r)}function nP(t){return Pe(t).signOut()}const Ql="__sak";/**
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
 */class ww{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ql,"1"),this.storage.removeItem(Ql),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const rP=1e3,iP=10;class Tw extends ww{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);wC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,iP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tw.type="LOCAL";const sP=Tw;/**
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
 */class Iw extends ww{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Iw.type="SESSION";const Sw=Iw;/**
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
 */function oP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ku{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ku(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await oP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ku.receivers=[];/**
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
 */function kf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class aP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=kf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function sn(){return window}function lP(t){sn().location.href=t}/**
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
 */function Aw(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function uP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function hP(){return Aw()?self:null}/**
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
 */const Rw="firebaseLocalStorageDb",dP=1,Yl="firebaseLocalStorage",Cw="fbase_key";class la{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nu(t,e){return t.transaction([Yl],e?"readwrite":"readonly").objectStore(Yl)}function fP(){const t=indexedDB.deleteDatabase(Rw);return new la(t).toPromise()}function od(){const t=indexedDB.open(Rw,dP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yl,{keyPath:Cw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yl)?e(r):(r.close(),await fP(),e(await od()))})})}async function ey(t,e,n){const r=Nu(t,!0).put({[Cw]:e,value:n});return new la(r).toPromise()}async function pP(t,e){const n=Nu(t,!1).get(e),r=await new la(n).toPromise();return r===void 0?null:r.value}function ty(t,e){const n=Nu(t,!0).delete(e);return new la(n).toPromise()}const mP=800,gP=3;class Pw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await od(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Aw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ku._getInstance(hP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await uP(),!this.activeServiceWorker)return;this.sender=new aP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await od();return await ey(e,Ql,"1"),await ty(e,Ql),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ey(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ty(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Nu(i,!1).getAll();return new la(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pw.type="LOCAL";const yP=Pw;new sa(3e4,6e4);/**
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
 */function _P(t,e){return e?mn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Nf extends Cf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vP(t){return vw(t.auth,new Nf(t),t.bypassAuthState)}function EP(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),QC(n,new Nf(t),t.bypassAuthState)}async function wP(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),KC(n,new Nf(t),t.bypassAuthState)}/**
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
 */class kw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vP;case"linkViaPopup":case"linkViaRedirect":return wP;case"reauthViaPopup":case"reauthViaRedirect":return EP;default:Gt(this.auth,"internal-error")}}resolve(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TP=new sa(2e3,1e4);class xi extends kw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xi.currentPopupAction&&xi.currentPopupAction.cancel(),xi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Sn(this.filter.length===1,"Popup operations only handle one event");const e=kf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TP.get())};e()}}xi.currentPopupAction=null;/**
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
 */const IP="pendingRedirect",hl=new Map;class SP extends kw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hl.get(this.auth._key());if(!e){try{const r=await AP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hl.set(this.auth._key(),e)}return this.bypassAuthState||hl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AP(t,e){const n=PP(e),r=CP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function RP(t,e){hl.set(t._key(),e)}function CP(t){return mn(t._redirectPersistence)}function PP(t){return cl(IP,t.config.apiKey,t.name)}async function kP(t,e,n=!1){if(xt(t.app))return Promise.reject(yn(t));const r=li(t),i=_P(r,e),o=await new SP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const NP=10*60*1e3;class xP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Nw(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NP&&this.cachedEventUids.clear(),this.cachedEventUids.has(ny(e))}saveEventToCache(e){this.cachedEventUids.add(ny(e)),this.lastProcessedEventTime=Date.now()}}function ny(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nw(t);default:return!1}}/**
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
 */async function VP(t,e={}){return Ar(t,"GET","/v1/projects",e)}/**
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
 */const OP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LP=/^https?/;async function MP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VP(t);for(const n of e)try{if(bP(n))return}catch{}Gt(t,"unauthorized-domain")}function bP(t){const e=rd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!LP.test(n))return!1;if(OP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const FP=new sa(3e4,6e4);function ry(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UP(t){return new Promise((e,n)=>{var i,s,o;function r(){ry(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ry(),n(rn(t,"network-request-failed"))},timeout:FP.get()})}if((s=(i=sn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=sn().gapi)!=null&&o.load)r();else{const l=NC("iframefcb");return sn()[l]=()=>{gapi.load?r():n(rn(t,"network-request-failed"))},pw(`${kC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw dl=null,e})}let dl=null;function jP(t){return dl=dl||UP(t),dl}/**
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
 */const BP=new sa(5e3,15e3),zP="__/auth/iframe",$P="emulator/auth/iframe",WP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qP(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sf(e,$P):`https://${t.config.authDomain}/${zP}`,r={apiKey:e.apiKey,appName:t.name,v:cs},i=HP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ia(r).slice(1)}`}async function GP(t){const e=await jP(t),n=sn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:qP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),l=sn().setTimeout(()=>{s(o)},BP.get());function u(){sn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const KP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QP=500,YP=600,JP="_blank",XP="http://localhost";class iy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZP(t,e,n,r=QP,i=YP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...KP,width:r.toString(),height:i.toString(),top:s,left:o},c=rt().toLowerCase();n&&(l=aw(c)?JP:n),sw(c)&&(e=e||XP,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[T,P])=>`${m}${T}=${P},`,"");if(EC(c)&&l!=="_self")return ek(e||"",l),new iy(null);const p=window.open(e||"",l,f);Q(p,t,"popup-blocked");try{p.focus()}catch{}return new iy(p)}function ek(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const tk="__/auth/handler",nk="emulator/auth/handler",rk=encodeURIComponent("fac");async function sy(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:cs,eventId:i};if(e instanceof yw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",z1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof aa){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${rk}=${encodeURIComponent(u)}`:"";return`${ik(t)}?${ia(l).slice(1)}${c}`}function ik({config:t}){return t.emulator?Sf(t,nk):`https://${t.authDomain}/${tk}`}/**
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
 */const Xc="webStorageSupport";class sk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sw,this._completeRedirectFn=kP,this._overrideRedirectResult=RP}async _openPopup(e,n,r,i){var o;Sn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await sy(e,n,r,rd(),i);return ZP(e,s,kf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await sy(e,n,r,rd(),i);return lP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GP(e),r=new xP(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xc,{type:Xc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Xc];s!==void 0&&n(!!s),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dw()||ow()||Rf()}}const ok=sk;var oy="@firebase/auth",ay="1.12.1";/**
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
 */class ak{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uk(t){Ji(new ei("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fw(t)},c=new RC(r,i,s,u);return MC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ji(new ei("auth-internal",e=>{const n=li(e.getProvider("auth").getImmediate());return(r=>new ak(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ar(oy,ay,lk(t)),ar(oy,ay,"esm2020")}/**
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
 */const ck=5*60,hk=zE("authIdTokenMaxAge")||ck;let ly=null;const dk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hk)return;const i=n==null?void 0:n.token;ly!==i&&(ly=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fk(t=KE()){const e=Tf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LC(t,{popupRedirectResolver:ok,persistence:[yP,sP,Sw]}),r=zE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=dk(s.toString());eP(n,o,()=>o(n.currentUser)),ZC(n,l=>o(l))}}const i=jE("auth");return i&&bC(n,`http://${i}`),n}function pk(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}CC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",pk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uk("Browser");var uy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lr,xw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function w(){}w.prototype=y.prototype,E.F=y.prototype,E.prototype=new w,E.prototype.constructor=E,E.D=function(S,R,C){for(var v=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)v[ue-2]=arguments[ue];return y.prototype[R].apply(S,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,w){w||(w=0);const S=Array(16);if(typeof y=="string")for(var R=0;R<16;++R)S[R]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(R=0;R<16;++R)S[R]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=E.g[0],w=E.g[1],R=E.g[2];let C=E.g[3],v;v=y+(C^w&(R^C))+S[0]+3614090360&4294967295,y=w+(v<<7&4294967295|v>>>25),v=C+(R^y&(w^R))+S[1]+3905402710&4294967295,C=y+(v<<12&4294967295|v>>>20),v=R+(w^C&(y^w))+S[2]+606105819&4294967295,R=C+(v<<17&4294967295|v>>>15),v=w+(y^R&(C^y))+S[3]+3250441966&4294967295,w=R+(v<<22&4294967295|v>>>10),v=y+(C^w&(R^C))+S[4]+4118548399&4294967295,y=w+(v<<7&4294967295|v>>>25),v=C+(R^y&(w^R))+S[5]+1200080426&4294967295,C=y+(v<<12&4294967295|v>>>20),v=R+(w^C&(y^w))+S[6]+2821735955&4294967295,R=C+(v<<17&4294967295|v>>>15),v=w+(y^R&(C^y))+S[7]+4249261313&4294967295,w=R+(v<<22&4294967295|v>>>10),v=y+(C^w&(R^C))+S[8]+1770035416&4294967295,y=w+(v<<7&4294967295|v>>>25),v=C+(R^y&(w^R))+S[9]+2336552879&4294967295,C=y+(v<<12&4294967295|v>>>20),v=R+(w^C&(y^w))+S[10]+4294925233&4294967295,R=C+(v<<17&4294967295|v>>>15),v=w+(y^R&(C^y))+S[11]+2304563134&4294967295,w=R+(v<<22&4294967295|v>>>10),v=y+(C^w&(R^C))+S[12]+1804603682&4294967295,y=w+(v<<7&4294967295|v>>>25),v=C+(R^y&(w^R))+S[13]+4254626195&4294967295,C=y+(v<<12&4294967295|v>>>20),v=R+(w^C&(y^w))+S[14]+2792965006&4294967295,R=C+(v<<17&4294967295|v>>>15),v=w+(y^R&(C^y))+S[15]+1236535329&4294967295,w=R+(v<<22&4294967295|v>>>10),v=y+(R^C&(w^R))+S[1]+4129170786&4294967295,y=w+(v<<5&4294967295|v>>>27),v=C+(w^R&(y^w))+S[6]+3225465664&4294967295,C=y+(v<<9&4294967295|v>>>23),v=R+(y^w&(C^y))+S[11]+643717713&4294967295,R=C+(v<<14&4294967295|v>>>18),v=w+(C^y&(R^C))+S[0]+3921069994&4294967295,w=R+(v<<20&4294967295|v>>>12),v=y+(R^C&(w^R))+S[5]+3593408605&4294967295,y=w+(v<<5&4294967295|v>>>27),v=C+(w^R&(y^w))+S[10]+38016083&4294967295,C=y+(v<<9&4294967295|v>>>23),v=R+(y^w&(C^y))+S[15]+3634488961&4294967295,R=C+(v<<14&4294967295|v>>>18),v=w+(C^y&(R^C))+S[4]+3889429448&4294967295,w=R+(v<<20&4294967295|v>>>12),v=y+(R^C&(w^R))+S[9]+568446438&4294967295,y=w+(v<<5&4294967295|v>>>27),v=C+(w^R&(y^w))+S[14]+3275163606&4294967295,C=y+(v<<9&4294967295|v>>>23),v=R+(y^w&(C^y))+S[3]+4107603335&4294967295,R=C+(v<<14&4294967295|v>>>18),v=w+(C^y&(R^C))+S[8]+1163531501&4294967295,w=R+(v<<20&4294967295|v>>>12),v=y+(R^C&(w^R))+S[13]+2850285829&4294967295,y=w+(v<<5&4294967295|v>>>27),v=C+(w^R&(y^w))+S[2]+4243563512&4294967295,C=y+(v<<9&4294967295|v>>>23),v=R+(y^w&(C^y))+S[7]+1735328473&4294967295,R=C+(v<<14&4294967295|v>>>18),v=w+(C^y&(R^C))+S[12]+2368359562&4294967295,w=R+(v<<20&4294967295|v>>>12),v=y+(w^R^C)+S[5]+4294588738&4294967295,y=w+(v<<4&4294967295|v>>>28),v=C+(y^w^R)+S[8]+2272392833&4294967295,C=y+(v<<11&4294967295|v>>>21),v=R+(C^y^w)+S[11]+1839030562&4294967295,R=C+(v<<16&4294967295|v>>>16),v=w+(R^C^y)+S[14]+4259657740&4294967295,w=R+(v<<23&4294967295|v>>>9),v=y+(w^R^C)+S[1]+2763975236&4294967295,y=w+(v<<4&4294967295|v>>>28),v=C+(y^w^R)+S[4]+1272893353&4294967295,C=y+(v<<11&4294967295|v>>>21),v=R+(C^y^w)+S[7]+4139469664&4294967295,R=C+(v<<16&4294967295|v>>>16),v=w+(R^C^y)+S[10]+3200236656&4294967295,w=R+(v<<23&4294967295|v>>>9),v=y+(w^R^C)+S[13]+681279174&4294967295,y=w+(v<<4&4294967295|v>>>28),v=C+(y^w^R)+S[0]+3936430074&4294967295,C=y+(v<<11&4294967295|v>>>21),v=R+(C^y^w)+S[3]+3572445317&4294967295,R=C+(v<<16&4294967295|v>>>16),v=w+(R^C^y)+S[6]+76029189&4294967295,w=R+(v<<23&4294967295|v>>>9),v=y+(w^R^C)+S[9]+3654602809&4294967295,y=w+(v<<4&4294967295|v>>>28),v=C+(y^w^R)+S[12]+3873151461&4294967295,C=y+(v<<11&4294967295|v>>>21),v=R+(C^y^w)+S[15]+530742520&4294967295,R=C+(v<<16&4294967295|v>>>16),v=w+(R^C^y)+S[2]+3299628645&4294967295,w=R+(v<<23&4294967295|v>>>9),v=y+(R^(w|~C))+S[0]+4096336452&4294967295,y=w+(v<<6&4294967295|v>>>26),v=C+(w^(y|~R))+S[7]+1126891415&4294967295,C=y+(v<<10&4294967295|v>>>22),v=R+(y^(C|~w))+S[14]+2878612391&4294967295,R=C+(v<<15&4294967295|v>>>17),v=w+(C^(R|~y))+S[5]+4237533241&4294967295,w=R+(v<<21&4294967295|v>>>11),v=y+(R^(w|~C))+S[12]+1700485571&4294967295,y=w+(v<<6&4294967295|v>>>26),v=C+(w^(y|~R))+S[3]+2399980690&4294967295,C=y+(v<<10&4294967295|v>>>22),v=R+(y^(C|~w))+S[10]+4293915773&4294967295,R=C+(v<<15&4294967295|v>>>17),v=w+(C^(R|~y))+S[1]+2240044497&4294967295,w=R+(v<<21&4294967295|v>>>11),v=y+(R^(w|~C))+S[8]+1873313359&4294967295,y=w+(v<<6&4294967295|v>>>26),v=C+(w^(y|~R))+S[15]+4264355552&4294967295,C=y+(v<<10&4294967295|v>>>22),v=R+(y^(C|~w))+S[6]+2734768916&4294967295,R=C+(v<<15&4294967295|v>>>17),v=w+(C^(R|~y))+S[13]+1309151649&4294967295,w=R+(v<<21&4294967295|v>>>11),v=y+(R^(w|~C))+S[4]+4149444226&4294967295,y=w+(v<<6&4294967295|v>>>26),v=C+(w^(y|~R))+S[11]+3174756917&4294967295,C=y+(v<<10&4294967295|v>>>22),v=R+(y^(C|~w))+S[2]+718787259&4294967295,R=C+(v<<15&4294967295|v>>>17),v=w+(C^(R|~y))+S[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(R+(v<<21&4294967295|v>>>11))&4294967295,E.g[2]=E.g[2]+R&4294967295,E.g[3]=E.g[3]+C&4294967295}r.prototype.v=function(E,y){y===void 0&&(y=E.length);const w=y-this.blockSize,S=this.C;let R=this.h,C=0;for(;C<y;){if(R==0)for(;C<=w;)i(this,E,C),C+=this.blockSize;if(typeof E=="string"){for(;C<y;)if(S[R++]=E.charCodeAt(C++),R==this.blockSize){i(this,S),R=0;break}}else for(;C<y;)if(S[R++]=E[C++],R==this.blockSize){i(this,S),R=0;break}}this.h=R,this.o+=y},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;y=this.o*8;for(var w=E.length-8;w<E.length;++w)E[w]=y&255,y/=256;for(this.v(E),E=Array(16),y=0,w=0;w<4;++w)for(let S=0;S<32;S+=8)E[y++]=this.g[w]>>>S&255;return E};function s(E,y){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=y(E)}function o(E,y){this.h=y;const w=[];let S=!0;for(let R=E.length-1;R>=0;R--){const C=E[R]|0;S&&C==y||(w[R]=C,S=!1)}this.g=w}var l={};function u(E){return-128<=E&&E<128?s(E,function(y){return new o([y|0],y<0?-1:0)}):new o([E|0],E<0?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(E<0)return V(c(-E));const y=[];let w=1;for(let S=0;E>=w;S++)y[S]=E/w|0,w*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return V(f(E.substring(1),y));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=c(Math.pow(y,8));let S=p;for(let C=0;C<E.length;C+=8){var R=Math.min(8,E.length-C);const v=parseInt(E.substring(C,C+R),y);R<8?(R=c(Math.pow(y,R)),S=S.j(R).add(c(v))):(S=S.j(w),S=S.add(c(v)))}return S}var p=u(0),m=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-V(this).m();let E=0,y=1;for(let w=0;w<this.g.length;w++){const S=this.i(w);E+=(S>=0?S:4294967296+S)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(x(this))return"-"+V(this).toString(E);const y=c(Math.pow(E,6));var w=this;let S="";for(;;){const R=L(w,y).g;w=I(w,R.j(y));let C=((w.g.length>0?w.g[0]:w.h)>>>0).toString(E);if(w=R,P(w))return C+S;for(;C.length<6;)C="0"+C;S=C+S}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(let y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function x(E){return E.h==-1}t.l=function(E){return E=I(this,E),x(E)?-1:P(E)?0:1};function V(E){const y=E.g.length,w=[];for(let S=0;S<y;S++)w[S]=~E.g[S];return new o(w,~E.h).add(m)}t.abs=function(){return x(this)?V(this):this},t.add=function(E){const y=Math.max(this.g.length,E.g.length),w=[];let S=0;for(let R=0;R<=y;R++){let C=S+(this.i(R)&65535)+(E.i(R)&65535),v=(C>>>16)+(this.i(R)>>>16)+(E.i(R)>>>16);S=v>>>16,C&=65535,v&=65535,w[R]=v<<16|C}return new o(w,w[w.length-1]&-2147483648?-1:0)};function I(E,y){return E.add(V(y))}t.j=function(E){if(P(this)||P(E))return p;if(x(this))return x(E)?V(this).j(V(E)):V(V(this).j(E));if(x(E))return V(this.j(V(E)));if(this.l(T)<0&&E.l(T)<0)return c(this.m()*E.m());const y=this.g.length+E.g.length,w=[];for(var S=0;S<2*y;S++)w[S]=0;for(S=0;S<this.g.length;S++)for(let R=0;R<E.g.length;R++){const C=this.i(S)>>>16,v=this.i(S)&65535,ue=E.i(R)>>>16,yt=E.i(R)&65535;w[2*S+2*R]+=v*yt,_(w,2*S+2*R),w[2*S+2*R+1]+=C*yt,_(w,2*S+2*R+1),w[2*S+2*R+1]+=v*ue,_(w,2*S+2*R+1),w[2*S+2*R+2]+=C*ue,_(w,2*S+2*R+2)}for(E=0;E<y;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=y;E<2*y;E++)w[E]=0;return new o(w,0)};function _(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function A(E,y){this.g=E,this.h=y}function L(E,y){if(P(y))throw Error("division by zero");if(P(E))return new A(p,p);if(x(E))return y=L(V(E),y),new A(V(y.g),V(y.h));if(x(y))return y=L(E,V(y)),new A(V(y.g),y.h);if(E.g.length>30){if(x(E)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var w=m,S=y;S.l(E)<=0;)w=b(w),S=b(S);var R=z(w,1),C=z(S,1);for(S=z(S,2),w=z(w,2);!P(S);){var v=C.add(S);v.l(E)<=0&&(R=R.add(w),C=v),S=z(S,1),w=z(w,1)}return y=I(E,R.j(y)),new A(R,y)}for(R=p;E.l(y)>=0;){for(w=Math.max(1,Math.floor(E.m()/y.m())),S=Math.ceil(Math.log(w)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),C=c(w),v=C.j(y);x(v)||v.l(E)>0;)w-=S,C=c(w),v=C.j(y);P(C)&&(C=m),R=R.add(C),E=I(E,v)}return new A(R,E)}t.B=function(E){return L(this,E).h},t.and=function(E){const y=Math.max(this.g.length,E.g.length),w=[];for(let S=0;S<y;S++)w[S]=this.i(S)&E.i(S);return new o(w,this.h&E.h)},t.or=function(E){const y=Math.max(this.g.length,E.g.length),w=[];for(let S=0;S<y;S++)w[S]=this.i(S)|E.i(S);return new o(w,this.h|E.h)},t.xor=function(E){const y=Math.max(this.g.length,E.g.length),w=[];for(let S=0;S<y;S++)w[S]=this.i(S)^E.i(S);return new o(w,this.h^E.h)};function b(E){const y=E.g.length+1,w=[];for(let S=0;S<y;S++)w[S]=E.i(S)<<1|E.i(S-1)>>>31;return new o(w,E.h)}function z(E,y){const w=y>>5;y%=32;const S=E.g.length-w,R=[];for(let C=0;C<S;C++)R[C]=y>0?E.i(C+w)>>>y|E.i(C+w+1)<<32-y:E.i(C+w);return new o(R,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,xw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,lr=o}).apply(typeof uy<"u"?uy:typeof self<"u"?self:typeof window<"u"?window:{});var qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dw,Js,Vw,fl,ad,Ow,Lw,Mw;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof qa=="object"&&qa];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in d))break e;d=d[k]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,k,D){for(var j=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)j[Z-2]=arguments[Z];return h.prototype[k].apply(g,j)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function T(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function P(a,h){for(let g=1;g<arguments.length;g++){const k=arguments[g];var d=typeof k;if(d=d!="object"?d:k?Array.isArray(k)?"array":d:"null",d=="array"||d=="object"&&typeof k.length=="number"){d=a.length||0;const D=k.length||0;a.length=d+D;for(let j=0;j<D;j++)a[d+j]=k[j]}else a.push(k)}}class x{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(a){o.setTimeout(()=>{throw a},0)}function I(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,d){const g=A.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var A=new x(()=>new L,a=>a.reset());class L{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let b,z=!1,E=new _,y=()=>{const a=Promise.resolve(void 0);b=()=>{a.then(w)}};function w(){for(var a;a=I();){try{a.h.call(a.g)}catch(d){V(d)}var h=A;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}z=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function v(a){return/^[\s\xa0]*$/.test(a)}function ue(a,h){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(ue,R),ue.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ue.Z.h.call(this)},ue.prototype.h=function(){ue.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var yt="closure_listenable_"+(Math.random()*1e6|0),kr=0;function _s(a,h,d,g,k){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=k,this.key=++kr,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Y(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function X(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function ge(a){const h={};for(const d in a)h[d]=a[d];return h}const Se="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nr(a,h){let d,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(d in g)a[d]=g[d];for(let D=0;D<Se.length;D++)d=Se[D],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Pt(a){this.src=a,this.g={},this.h=0}Pt.prototype.add=function(a,h,d,g,k){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const j=Mt(a,h,g,k);return j>-1?(h=a[j],d||(h.fa=!1)):(h=new _s(h,this.src,D,!!g,k),h.fa=d,a.push(h)),h};function xr(a,h){const d=h.type;if(d in a.g){var g=a.g[d],k=Array.prototype.indexOf.call(g,h,void 0),D;(D=k>=0)&&Array.prototype.splice.call(g,k,1),D&&($(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Mt(a,h,d,g){for(let k=0;k<a.length;++k){const D=a[k];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==g)return k}return-1}var kn="closure_lm_"+(Math.random()*1e6|0),Xu={};function yp(a,h,d,g,k){if(Array.isArray(h)){for(let D=0;D<h.length;D++)yp(a,h[D],d,g,k);return null}return d=Ep(d),a&&a[yt]?a.J(h,d,l(g)?!!g.capture:!1,k):_I(a,h,d,!1,g,k)}function _I(a,h,d,g,k,D){if(!h)throw Error("Invalid event type");const j=l(k)?!!k.capture:!!k;let Z=ec(a);if(Z||(a[kn]=Z=new Pt(a)),d=Z.add(h,d,g,j,D),d.proxy)return d;if(g=vI(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)C||(k=j),k===void 0&&(k=!1),a.addEventListener(h.toString(),g,k);else if(a.attachEvent)a.attachEvent(vp(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function vI(){function a(d){return h.call(a.src,a.listener,d)}const h=EI;return a}function _p(a,h,d,g,k){if(Array.isArray(h))for(var D=0;D<h.length;D++)_p(a,h[D],d,g,k);else g=l(g)?!!g.capture:!!g,d=Ep(d),a&&a[yt]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],d=Mt(h,d,g,k),d>-1&&($(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=ec(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Mt(h,d,g,k)),(d=a>-1?h[a]:null)&&Zu(d))}function Zu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[yt])xr(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(vp(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=ec(h))?(xr(d,a),d.h==0&&(d.src=null,h[kn]=null)):$(a)}}}function vp(a){return a in Xu?Xu[a]:Xu[a]="on"+a}function EI(a,h){if(a.da)a=!0;else{h=new ue(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&Zu(a),a=d.call(g,h)}return a}function ec(a){return a=a[kn],a instanceof Pt?a:null}var tc="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ep(a){return typeof a=="function"?a:(a[tc]||(a[tc]=function(h){return a.handleEvent(h)}),a[tc])}function Ye(){S.call(this),this.i=new Pt(this),this.M=this,this.G=null}p(Ye,S),Ye.prototype[yt]=!0,Ye.prototype.removeEventListener=function(a,h,d,g){_p(this,a,h,d,g)};function it(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new R(h,a);else if(h instanceof R)h.target=h.target||a;else{var k=h;h=new R(g,a),Nr(h,k)}k=!0;let D,j;if(d)for(j=d.length-1;j>=0;j--)D=h.g=d[j],k=ga(D,g,!0,h)&&k;if(D=h.g=a,k=ga(D,g,!0,h)&&k,k=ga(D,g,!1,h)&&k,d)for(j=0;j<d.length;j++)D=h.g=d[j],k=ga(D,g,!1,h)&&k}Ye.prototype.N=function(){if(Ye.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)$(d[g]);delete a.g[h],a.h--}}this.G=null},Ye.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},Ye.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function ga(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let k=!0;for(let D=0;D<h.length;++D){const j=h[D];if(j&&!j.da&&j.capture==d){const Z=j.listener,Oe=j.ha||j.src;j.fa&&xr(a.i,j),k=Z.call(Oe,g)!==!1&&k}}return k&&!g.defaultPrevented}function wI(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function wp(a){a.g=wI(()=>{a.g=null,a.i&&(a.i=!1,wp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class TI extends S{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:wp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vs(a){S.call(this),this.h=a,this.g={}}p(vs,S);var Tp=[];function Ip(a){Y(a.g,function(h,d){this.g.hasOwnProperty(d)&&Zu(h)},a),a.g={}}vs.prototype.N=function(){vs.Z.N.call(this),Ip(this)},vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nc=o.JSON.stringify,II=o.JSON.parse,SI=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Sp(){}function Ap(){}var Es={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function rc(){R.call(this,"d")}p(rc,R);function ic(){R.call(this,"c")}p(ic,R);var Dr={},Rp=null;function ya(){return Rp=Rp||new Ye}Dr.Ia="serverreachability";function Cp(a){R.call(this,Dr.Ia,a)}p(Cp,R);function ws(a){const h=ya();it(h,new Cp(h))}Dr.STAT_EVENT="statevent";function Pp(a,h){R.call(this,Dr.STAT_EVENT,a),this.stat=h}p(Pp,R);function st(a){const h=ya();it(h,new Pp(h,a))}Dr.Ja="timingevent";function kp(a,h){R.call(this,Dr.Ja,a),this.size=h}p(kp,R);function Ts(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Is(){this.g=!0}Is.prototype.ua=function(){this.g=!1};function AI(a,h,d,g,k,D){a.info(function(){if(a.g)if(D){var j="",Z=D.split("&");for(let ce=0;ce<Z.length;ce++){var Oe=Z[ce].split("=");if(Oe.length>1){const Fe=Oe[0];Oe=Oe[1];const Yt=Fe.split("_");j=Yt.length>=2&&Yt[1]=="type"?j+(Fe+"="+Oe+"&"):j+(Fe+"=redacted&")}}}else j=null;else j=D;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+h+`
`+d+`
`+j})}function RI(a,h,d,g,k,D,j){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+h+`
`+d+`
`+D+" "+j})}function hi(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+PI(a,d)+(g?" "+g:"")})}function CI(a,h){a.info(function(){return"TIMEOUT: "+h})}Is.prototype.info=function(){};function PI(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var d=D[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var k=g[0];if(k!="noop"&&k!="stop"&&k!="close")for(let j=1;j<g.length;j++)g[j]=""}}}}return nc(D)}catch{return h}}var _a={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Np={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},xp;function sc(){}p(sc,Sp),sc.prototype.g=function(){return new XMLHttpRequest},xp=new sc;function Ss(a){return encodeURIComponent(String(a))}function kI(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Nn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new vs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Dp}function Dp(){this.i=null,this.g="",this.h=!1}var Vp={},oc={};function ac(a,h,d){a.M=1,a.A=Ea(Qt(h)),a.u=d,a.R=!0,Op(a,null)}function Op(a,h){a.F=Date.now(),va(a),a.B=Qt(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Gp(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Dp,a.g=hm(a.j,d?h:null,!a.u),a.P>0&&(a.O=new TI(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var k="readystatechange";Array.isArray(k)||(k&&(Tp[0]=k.toString()),k=Tp);for(let D=0;D<k.length;D++){const j=yp(d,k[D],g||h.handleEvent,!1,h.h||h);if(!j)break;h.g[j.key]=j}h=a.J?ge(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),ws(),AI(a.i,a.v,a.B,a.l,a.S,a.u)}Nn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Vn(a)==3?h.j():this.Y(a)},Nn.prototype.Y=function(a){try{if(a==this.g)e:{const Z=Vn(this.g),Oe=this.g.ya(),ce=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||em(this.g)))){this.K||Z!=4||Oe==7||(Oe==8||ce<=0?ws(3):ws(2)),lc(this);var h=this.g.ca();this.X=h;var d=NI(this);if(this.o=h==200,RI(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,k=this.g;if((g=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(g)){var D=g;break t}}D=null}if(a=D)hi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,uc(this,a);else{this.o=!1,this.m=3,st(12),Vr(this),As(this);break e}}if(this.R){a=!0;let Fe;for(;!this.K&&this.C<d.length;)if(Fe=xI(this,d),Fe==oc){Z==4&&(this.m=4,st(14),a=!1),hi(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==Vp){this.m=4,st(15),hi(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else hi(this.i,this.l,Fe,null),uc(this,Fe);if(Lp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||d.length!=0||this.h.h||(this.m=1,st(16),a=!1),this.o=this.o&&a,!a)hi(this.i,this.l,d,"[Invalid Chunked Response]"),Vr(this),As(this);else if(d.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),yc(j),j.P=!0,st(11))}}else hi(this.i,this.l,d,null),uc(this,d);Z==4&&Vr(this),this.o&&!this.K&&(Z==4?am(this.j,this):(this.o=!1,va(this)))}else HI(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,st(12)):(this.m=0,st(13)),Vr(this),As(this)}}}catch{}finally{}};function NI(a){if(!Lp(a))return a.g.la();const h=em(a.g);if(h==="")return"";let d="";const g=h.length,k=Vn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Vr(a),As(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<g;D++)a.h.h=!0,d+=a.h.i.decode(h[D],{stream:!(k&&D==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Lp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function xI(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?oc:(d=Number(h.substring(d,g)),isNaN(d)?Vp:(g+=1,g+d>h.length?oc:(h=h.slice(g,g+d),a.C=g+d,h)))}Nn.prototype.cancel=function(){this.K=!0,Vr(this)};function va(a){a.T=Date.now()+a.H,Mp(a,a.H)}function Mp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ts(c(a.aa,a),h)}function lc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Nn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(CI(this.i,this.B),this.M!=2&&(ws(),st(17)),Vr(this),this.m=2,As(this)):Mp(this,this.T-a)};function As(a){a.j.I==0||a.K||am(a.j,a)}function Vr(a){lc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Ip(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function uc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||cc(d.h,a))){if(!a.L&&cc(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Aa(d),Ia(d);else break e;gc(d),st(18)}}else d.xa=k[1],0<d.xa-d.K&&k[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ts(c(d.Va,d),6e3));Up(d.h)<=1&&d.ta&&(d.ta=void 0)}else Lr(d,11)}else if((a.L||d.g==a)&&Aa(d),!v(h))for(k=d.Ba.g.parse(h),h=0;h<k.length;h++){let ce=k[h];const Fe=ce[0];if(!(Fe<=d.K))if(d.K=Fe,ce=ce[1],d.I==2)if(ce[0]=="c"){d.M=ce[1],d.ba=ce[2];const Yt=ce[3];Yt!=null&&(d.ka=Yt,d.j.info("VER="+d.ka));const Mr=ce[4];Mr!=null&&(d.za=Mr,d.j.info("SVER="+d.za));const On=ce[5];On!=null&&typeof On=="number"&&On>0&&(g=1.5*On,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Ln=a.g;if(Ln){const Ca=Ln.g?Ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ca){var D=g.h;D.g||Ca.indexOf("spdy")==-1&&Ca.indexOf("quic")==-1&&Ca.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(hc(D,D.h),D.h=null))}if(g.G){const _c=Ln.g?Ln.g.getResponseHeader("X-HTTP-Session-Id"):null;_c&&(g.wa=_c,de(g.J,g.G,_c))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var j=a;if(g.na=cm(g,g.L?g.ba:null,g.W),j.L){jp(g.h,j);var Z=j,Oe=g.O;Oe&&(Z.H=Oe),Z.D&&(lc(Z),va(Z)),g.g=j}else sm(g);d.i.length>0&&Sa(d)}else ce[0]!="stop"&&ce[0]!="close"||Lr(d,7);else d.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Lr(d,7):mc(d):ce[0]!="noop"&&d.l&&d.l.qa(ce),d.A=0)}}ws(4)}catch{}}var DI=class{constructor(a,h){this.g=a,this.map=h}};function bp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Fp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Up(a){return a.h?1:a.g?a.g.size:0}function cc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function hc(a,h){a.g?a.g.add(h):a.h=h}function jp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}bp.prototype.cancel=function(){if(this.i=Bp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Bp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return T(a.i)}var zp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function VI(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let k,D=null;g>=0?(k=a[d].substring(0,g),D=a[d].substring(g+1)):k=a[d],h(k,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function xn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof xn?(this.l=a.l,Rs(this,a.j),this.o=a.o,this.g=a.g,Cs(this,a.u),this.h=a.h,dc(this,Kp(a.i)),this.m=a.m):a&&(h=String(a).match(zp))?(this.l=!1,Rs(this,h[1]||"",!0),this.o=Ps(h[2]||""),this.g=Ps(h[3]||"",!0),Cs(this,h[4]),this.h=Ps(h[5]||"",!0),dc(this,h[6]||"",!0),this.m=Ps(h[7]||"")):(this.l=!1,this.i=new Ns(null,this.l))}xn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(ks(h,$p,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ks(h,$p,!0),"@"),a.push(Ss(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ks(d,d.charAt(0)=="/"?MI:LI,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ks(d,FI)),a.join("")},xn.prototype.resolve=function(a){const h=Qt(this);let d=!!a.j;d?Rs(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)Cs(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var k=h.h.lastIndexOf("/");k!=-1&&(g=h.h.slice(0,k+1)+g)}if(k=g,k==".."||k==".")g="";else if(k.indexOf("./")!=-1||k.indexOf("/.")!=-1){g=k.lastIndexOf("/",0)==0,k=k.split("/");const D=[];for(let j=0;j<k.length;){const Z=k[j++];Z=="."?g&&j==k.length&&D.push(""):Z==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),g&&j==k.length&&D.push("")):(D.push(Z),g=!0)}g=D.join("/")}else g=k}return d?h.h=g:d=a.i.toString()!=="",d?dc(h,Kp(a.i)):d=!!a.m,d&&(h.m=a.m),h};function Qt(a){return new xn(a)}function Rs(a,h,d){a.j=d?Ps(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Cs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function dc(a,h,d){h instanceof Ns?(a.i=h,UI(a.i,a.l)):(d||(h=ks(h,bI)),a.i=new Ns(h,a.l))}function de(a,h,d){a.i.set(h,d)}function Ea(a){return de(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ps(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ks(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,OI),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function OI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var $p=/[#\/\?@]/g,LI=/[#\?:]/g,MI=/[#\?]/g,bI=/[#\?@]/g,FI=/#/g;function Ns(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Or(a){a.g||(a.g=new Map,a.h=0,a.i&&VI(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Ns.prototype,t.add=function(a,h){Or(this),this.i=null,a=di(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Wp(a,h){Or(a),h=di(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Hp(a,h){return Or(a),h=di(a,h),a.g.has(h)}t.forEach=function(a,h){Or(this),this.g.forEach(function(d,g){d.forEach(function(k){a.call(h,k,g,this)},this)},this)};function qp(a,h){Or(a);let d=[];if(typeof h=="string")Hp(a,h)&&(d=d.concat(a.g.get(di(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Or(this),this.i=null,a=di(this,a),Hp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=qp(this,a),a.length>0?String(a[0]):h):h};function Gp(a,h,d){Wp(a,h),d.length>0&&(a.i=null,a.g.set(di(a,h),T(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const k=Ss(d);d=qp(this,d);for(let D=0;D<d.length;D++){let j=k;d[D]!==""&&(j+="="+Ss(d[D])),a.push(j)}}return this.i=a.join("&")};function Kp(a){const h=new Ns;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function di(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function UI(a,h){h&&!a.j&&(Or(a),a.i=null,a.g.forEach(function(d,g){const k=g.toLowerCase();g!=k&&(Wp(this,g),Gp(this,k,d))},a)),a.j=h}function jI(a,h){const d=new Is;if(o.Image){const g=new Image;g.onload=f(Dn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(Dn,d,"TestLoadImage: error",!1,h,g),g.onabort=f(Dn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(Dn,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function BI(a,h){const d=new Is,g=new AbortController,k=setTimeout(()=>{g.abort(),Dn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(k),D.ok?Dn(d,"TestPingServer: ok",!0,h):Dn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),Dn(d,"TestPingServer: error",!1,h)})}function Dn(a,h,d,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(d)}catch{}}function zI(){this.g=new SI}function fc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(fc,Sp),fc.prototype.g=function(){return new wa(this.i,this.h)};function wa(a,h){Ye.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(wa,Ye),t=wa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ds(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,xs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ds(this)),this.g&&(this.readyState=3,Ds(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Qp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Qp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?xs(this):Ds(this),this.readyState==3&&Qp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,xs(this))},t.Na=function(a){this.g&&(this.response=a,xs(this))},t.ga=function(){this.g&&xs(this)};function xs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ds(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ds(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(wa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Yp(a){let h="";return Y(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function pc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Yp(d),typeof a=="string"?d!=null&&Ss(d):de(a,h,d))}function Te(a){Ye.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Te,Ye);var $I=/^https?$/i,WI=["POST","PUT"];t=Te.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():xp.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Jp(this,D);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)d.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),k=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(WI,h,void 0)>=0)||g||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,j]of d)this.g.setRequestHeader(D,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){Jp(this,D)}};function Jp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Xp(a),Ta(a)}function Xp(a){a.A||(a.A=!0,it(a,"complete"),it(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,it(this,"complete"),it(this,"abort"),Ta(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ta(this,!0)),Te.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Zp(this):this.Xa())},t.Xa=function(){Zp(this)};function Zp(a){if(a.h&&typeof s<"u"){if(a.v&&Vn(a)==4)setTimeout(a.Ca.bind(a),0);else if(it(a,"readystatechange"),Vn(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=D===0){let j=String(a.D).match(zp)[1]||null;!j&&o.self&&o.self.location&&(j=o.self.location.protocol.slice(0,-1)),g=!$I.test(j?j.toLowerCase():"")}d=g}if(d)it(a,"complete"),it(a,"success");else{a.o=6;try{var k=Vn(a)>2?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.ca()+"]",Xp(a)}}finally{Ta(a)}}}}function Ta(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||it(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Vn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Vn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),II(h)}};function em(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function HI(a){const h={};a=(a.g&&Vn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var d=kI(a[g]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[k]||[];h[k]=D,D.push(d)}X(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function tm(a){this.za=0,this.i=[],this.j=new Is,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Vs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Vs("baseRetryDelayMs",5e3,a),this.Za=Vs("retryDelaySeedMs",1e4,a),this.Ta=Vs("forwardChannelMaxRetries",2,a),this.va=Vs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new bp(a&&a.concurrentRequestLimit),this.Ba=new zI,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=tm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){st(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=cm(this,null,this.W),Sa(this)};function mc(a){if(nm(a),a.I==3){var h=a.V++,d=Qt(a.J);if(de(d,"SID",a.M),de(d,"RID",h),de(d,"TYPE","terminate"),Os(a,d),h=new Nn(a,a.j,h),h.M=2,h.A=Ea(Qt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=hm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),va(h)}um(a)}function Ia(a){a.g&&(yc(a),a.g.cancel(),a.g=null)}function nm(a){Ia(a),a.v&&(o.clearTimeout(a.v),a.v=null),Aa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Sa(a){if(!Fp(a.h)&&!a.m){a.m=!0;var h=a.Ea;b||y(),z||(b(),z=!0),E.add(h,a),a.D=0}}function qI(a,h){return Up(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ts(c(a.Ea,a,h),lm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const k=new Nn(this,this.j,a);let D=this.o;if(this.U&&(D?(D=ge(D),Nr(D,this.U)):D=this.U),this.u!==null||this.R||(k.J=D,D=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=im(this,k,h),d=Qt(this.J),de(d,"RID",a),de(d,"CVER",22),this.G&&de(d,"X-HTTP-Session-Id",this.G),Os(this,d),D&&(this.R?h="headers="+Ss(Yp(D))+"&"+h:this.u&&pc(d,this.u,D)),hc(this.h,k),this.Ra&&de(d,"TYPE","init"),this.S?(de(d,"$req",h),de(d,"SID","null"),k.U=!0,ac(k,d,null)):ac(k,d,h),this.I=2}}else this.I==3&&(a?rm(this,a):this.i.length==0||Fp(this.h)||rm(this))};function rm(a,h){var d;h?d=h.l:d=a.V++;const g=Qt(a.J);de(g,"SID",a.M),de(g,"RID",d),de(g,"AID",a.K),Os(a,g),a.u&&a.o&&pc(g,a.u,a.o),d=new Nn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=im(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),hc(a.h,d),ac(d,g,h)}function Os(a,h){a.H&&Y(a.H,function(d,g){de(h,g,d)}),a.l&&Y({},function(d,g){de(h,g,d)})}function im(a,h,d){d=Math.min(a.i.length,d);const g=a.l?c(a.l.Ka,a.l,a):null;e:{var k=a.i;let Z=-1;for(;;){const Oe=["count="+d];Z==-1?d>0?(Z=k[0].g,Oe.push("ofs="+Z)):Z=0:Oe.push("ofs="+Z);let ce=!0;for(let Fe=0;Fe<d;Fe++){var D=k[Fe].g;const Yt=k[Fe].map;if(D-=Z,D<0)Z=Math.max(0,k[Fe].g-100),ce=!1;else try{D="req"+D+"_"||"";try{var j=Yt instanceof Map?Yt:Object.entries(Yt);for(const[Mr,On]of j){let Ln=On;l(On)&&(Ln=nc(On)),Oe.push(D+Mr+"="+encodeURIComponent(Ln))}}catch(Mr){throw Oe.push(D+"type="+encodeURIComponent("_badmap")),Mr}}catch{g&&g(Yt)}}if(ce){j=Oe.join("&");break e}}j=void 0}return a=a.i.splice(0,d),h.G=a,j}function sm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;b||y(),z||(b(),z=!0),E.add(h,a),a.A=0}}function gc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ts(c(a.Da,a),lm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,om(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ts(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,st(10),Ia(this),om(this))};function yc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function om(a){a.g=new Nn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Qt(a.na);de(h,"RID","rpc"),de(h,"SID",a.M),de(h,"AID",a.K),de(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&de(h,"TO",a.ia),de(h,"TYPE","xmlhttp"),Os(a,h),a.u&&a.o&&pc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Ea(Qt(h)),d.u=null,d.R=!0,Op(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Ia(this),gc(this),st(19))};function Aa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function am(a,h){var d=null;if(a.g==h){Aa(a),yc(a),a.g=null;var g=2}else if(cc(a.h,h))d=h.G,jp(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var k=a.D;g=ya(),it(g,new kp(g,d)),Sa(a)}else sm(a);else if(k=h.m,k==3||k==0&&h.X>0||!(g==1&&qI(a,h)||g==2&&gc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),k){case 1:Lr(a,5);break;case 4:Lr(a,10);break;case 3:Lr(a,6);break;default:Lr(a,2)}}}function lm(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Lr(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),g=a.Ua;const k=!g;g=new xn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Rs(g,"https"),Ea(g),k?jI(g.toString(),d):BI(g.toString(),d)}else st(2);a.I=0,a.l&&a.l.pa(h),um(a),nm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function um(a){if(a.I=0,a.ja=[],a.l){const h=Bp(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ja,h),P(a.ja,a.i),a.h.i.length=0,T(a.i),a.i.length=0),a.l.oa()}}function cm(a,h,d){var g=d instanceof xn?Qt(d):new xn(d);if(g.g!="")h&&(g.g=h+"."+g.g),Cs(g,g.u);else{var k=o.location;g=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;const D=new xn(null);g&&Rs(D,g),h&&(D.g=h),k&&Cs(D,k),d&&(D.h=d),g=D}return d=a.G,h=a.wa,d&&h&&de(g,d,h),de(g,"VER",a.ka),Os(a,g),g}function hm(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Te(new fc({ab:d})):new Te(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function dm(){}t=dm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ra(){}Ra.prototype.g=function(a,h){return new _t(a,h)};function _t(a,h){Ye.call(this),this.g=new tm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!v(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new fi(this)}p(_t,Ye),_t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){mc(this.g)},_t.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=nc(a),a=d);h.i.push(new DI(h.Ya++,a)),h.I==3&&Sa(h)},_t.prototype.N=function(){this.g.l=null,delete this.j,mc(this.g),delete this.g,_t.Z.N.call(this)};function fm(a){rc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(fm,rc);function pm(){ic.call(this),this.status=1}p(pm,ic);function fi(a){this.g=a}p(fi,dm),fi.prototype.ra=function(){it(this.g,"a")},fi.prototype.qa=function(a){it(this.g,new fm(a))},fi.prototype.pa=function(a){it(this.g,new pm)},fi.prototype.oa=function(){it(this.g,"b")},Ra.prototype.createWebChannel=Ra.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,Mw=function(){return new Ra},Lw=function(){return ya()},Ow=Dr,ad={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_a.NO_ERROR=0,_a.TIMEOUT=8,_a.HTTP_ERROR=6,fl=_a,Np.COMPLETE="complete",Vw=Np,Ap.EventType=Es,Es.OPEN="a",Es.CLOSE="b",Es.ERROR="c",Es.MESSAGE="d",Ye.prototype.listen=Ye.prototype.J,Js=Ap,Te.prototype.listenOnce=Te.prototype.K,Te.prototype.getLastError=Te.prototype.Ha,Te.prototype.getLastErrorCode=Te.prototype.ya,Te.prototype.getStatus=Te.prototype.ca,Te.prototype.getResponseJson=Te.prototype.La,Te.prototype.getResponseText=Te.prototype.la,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Fa,Dw=Te}).apply(typeof qa<"u"?qa:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds="12.10.0";function mk(t){ds=t}/**
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
 */const ri=new Ef("@firebase/firestore");function mi(){return ri.logLevel}function W(t,...e){if(ri.logLevel<=te.DEBUG){const n=e.map(xf);ri.debug(`Firestore (${ds}): ${t}`,...n)}}function An(t,...e){if(ri.logLevel<=te.ERROR){const n=e.map(xf);ri.error(`Firestore (${ds}): ${t}`,...n)}}function ii(t,...e){if(ri.logLevel<=te.WARN){const n=e.map(xf);ri.warn(`Firestore (${ds}): ${t}`,...n)}}function xf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,bw(t,r,n)}function bw(t,e,n){let r=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw An(r),new Error(r)}function se(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||bw(e,i,r)}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class yk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _k{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){se(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new on;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new on,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new on)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string",31837,{l:r}),new Fw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string",2055,{h:e}),new et(e)}}class vk{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Ek{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new vk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wk{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){se(this.o===void 0,3512);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new cy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new cy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Tk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Tk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function ld(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Zc(i)===Zc(s)?ne(i,s):Zc(i)?1:-1}return ne(t.length,e.length)}const Ik=55296,Sk=57343;function Zc(t){const e=t.charCodeAt(0);return e>=Ik&&e<=Sk}function Xi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="__name__";class Zt{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&G(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Zt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=Zt.isNumericId(e),i=Zt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Zt.extractNumericId(e).compare(Zt.extractNumericId(n)):ld(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return lr.fromString(e.substring(4,e.length-2))}}class le extends Zt{construct(e,n,r){return new le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new le(n)}static emptyPath(){return new le([])}}const Ak=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends Zt{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return Ak.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hy}static keyField(){return new He([hy])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new B(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(le.fromString(e))}static fromName(e){return new q(le.fromString(e).popFirst(5))}static empty(){return new q(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new le(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(t,e,n){if(!n)throw new B(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Rk(t,e,n,r){if(e===!0&&r===!0)throw new B(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function dy(t){if(!q.isDocumentKey(t))throw new B(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fy(t){if(q.isDocumentKey(t))throw new B(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function xu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G(12329,{type:typeof t})}function Wt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xu(t);throw new B(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t,e){const n={typeString:t};return e&&(n.value=e),n}function ua(t,e){if(!jw(t))throw new B(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new B(O.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=-62135596800,my=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*my);return new pe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<py)throw new B(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/my}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ua(e,pe._jsonSchema))return new pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-py;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pe._jsonSchemaVersion="firestore/timestamp/1.0",pe._jsonSchema={type:De("string",pe._jsonSchemaVersion),seconds:De("number"),nanoseconds:De("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{static fromTimestamp(e){return new K(e)}static min(){return new K(new pe(0,0))}static max(){return new K(new pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Uo=-1;function Ck(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=K.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new fr(i,q.empty(),e)}function Pk(t){return new fr(t.readTime,t.key,Uo)}class fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new fr(K.min(),q.empty(),Uo)}static max(){return new fr(K.max(),q.empty(),Uo)}}function kk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const Nk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==Nk)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Dk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ps(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Du{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Du.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=-1;function ca(t){return t==null}function Jl(t){return t===0&&1/t==-1/0}function Vk(t){return typeof t=="number"&&Number.isInteger(t)&&!Jl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw="";function Ok(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=gy(e)),e=Lk(t.get(n),e);return gy(e)}function Lk(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Bw:n+="";break;default:n+=s}}return n}function gy(t){return t+Bw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ga(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ga(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ga(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ga(this.root,e,this.comparator,!0)}}class Ga{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _y(this.data.getIterator())}getIteratorFrom(e){return new _y(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new be(this.comparator);return n.data=e,n}}class _y{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Tt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new Tt([])}unionWith(e){let n=new be(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class $w extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new $w("Invalid base64 string: "+s):s}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const Mk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(se(!!t,39018),typeof t=="string"){let e=0;const n=Mk.exec(t);if(se(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mr(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
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
 */const Ww="server_timestamp",Hw="__type__",qw="__previous_value__",Gw="__local_write_time__";function Of(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Hw])==null?void 0:r.stringValue)===Ww}function Vu(t){const e=t.mapValue.fields[qw];return Of(e)?Vu(e):e}function jo(t){const e=pr(t.mapValue.fields[Gw].timestampValue);return new pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,n,r,i,s,o,l,u,c,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=p}}const Xl="(default)";class Bo{constructor(e,n){this.projectId=e,this.database=n||Xl}static empty(){return new Bo("","")}get isDefaultDatabase(){return this.database===Xl}isEqual(e){return e instanceof Bo&&e.projectId===this.projectId&&e.database===this.database}}function Fk(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new B(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bo(t.options.projectId,e)}/**
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
 */const Kw="__type__",Uk="__max__",Ka={mapValue:{}},Qw="__vector__",Zl="value";function gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Of(t)?4:Bk(t)?9007199254740991:jk(t)?10:11:G(28295,{value:t})}function un(t,e){if(t===e)return!0;const n=gr(t);if(n!==gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return jo(t).isEqual(jo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=pr(i.timestampValue),l=pr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return mr(i.bytesValue).isEqual(mr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),l=Ae(s.doubleValue);return o===l?Jl(o)===Jl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Xi(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(yy(o)!==yy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!un(o[u],l[u])))return!1;return!0}(t,e);default:return G(52216,{left:t})}}function zo(t,e){return(t.values||[]).find(n=>un(n,e))!==void 0}function Zi(t,e){if(t===e)return 0;const n=gr(t),r=gr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return vy(t.timestampValue,e.timestampValue);case 4:return vy(jo(t),jo(e));case 5:return ld(t.stringValue,e.stringValue);case 6:return function(s,o){const l=mr(s),u=mr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ne(l[c],u[c]);if(f!==0)return f}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(Ae(s.latitude),Ae(o.latitude));return l!==0?l:ne(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ey(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,T,P,x;const l=s.fields||{},u=o.fields||{},c=(m=l[Zl])==null?void 0:m.arrayValue,f=(T=u[Zl])==null?void 0:T.arrayValue,p=ne(((P=c==null?void 0:c.values)==null?void 0:P.length)||0,((x=f==null?void 0:f.values)==null?void 0:x.length)||0);return p!==0?p:Ey(c,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ka.mapValue&&o===Ka.mapValue)return 0;if(s===Ka.mapValue)return 1;if(o===Ka.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=ld(u[p],f[p]);if(m!==0)return m;const T=Zi(l[u[p]],c[f[p]]);if(T!==0)return T}return ne(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G(23264,{he:n})}}function vy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=pr(t),r=pr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function Ey(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Zi(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function es(t){return ud(t)}function ud(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ud(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ud(n.fields[o])}`;return i+"}"}(t.mapValue):G(61005,{value:t})}function pl(t){switch(gr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vu(t);return e?16+pl(e):16;case 5:return 2*t.stringValue.length;case 6:return mr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+pl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Rr(r.fields,(s,o)=>{i+=s.length+pl(o)}),i}(t.mapValue);default:throw G(13486,{value:t})}}function wy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function cd(t){return!!t&&"integerValue"in t}function Lf(t){return!!t&&"arrayValue"in t}function Ty(t){return!!t&&"nullValue"in t}function Iy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ml(t){return!!t&&"mapValue"in t}function jk(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Kw])==null?void 0:r.stringValue)===Qw}function ho(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Rr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ho(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ho(t.arrayValue.values[n]);return e}return{...t}}function Bk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Uk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.value=e}static empty(){return new at({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ml(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ho(n)}setAll(e){let n=He.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ho(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ml(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ml(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Rr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new at(ho(this.value))}}function Yw(t){const e=[];return Rr(t.fields,(n,r)=>{const i=new He([n]);if(ml(r)){const s=Yw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Tt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Be(e,0,K.min(),K.min(),K.min(),at.empty(),0)}static newFoundDocument(e,n,r,i){return new Be(e,1,n,K.min(),r,i,0)}static newNoDocument(e,n){return new Be(e,2,n,K.min(),K.min(),at.empty(),0)}static newUnknownDocument(e,n){return new Be(e,3,n,K.min(),K.min(),at.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class eu{constructor(e,n){this.position=e,this.inclusive=n}}function Sy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Zi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ay(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class $o{constructor(e,n="asc"){this.field=e,this.dir=n}}function zk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Jw{}class xe extends Jw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Wk(e,n,r):n==="array-contains"?new Gk(e,r):n==="in"?new Kk(e,r):n==="not-in"?new Qk(e,r):n==="array-contains-any"?new Yk(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Hk(e,r):new qk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Zi(n,this.value)):n!==null&&gr(this.value)===gr(n)&&this.matchesComparison(Zi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends Jw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Kt(e,n)}matches(e){return Xw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Xw(t){return t.op==="and"}function Zw(t){return $k(t)&&Xw(t)}function $k(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function hd(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+es(t.value);if(Zw(t))return t.filters.map(e=>hd(e)).join(",");{const e=t.filters.map(n=>hd(n)).join(",");return`${t.op}(${e})`}}function eT(t,e){return t instanceof xe?function(r,i){return i instanceof xe&&r.op===i.op&&r.field.isEqual(i.field)&&un(r.value,i.value)}(t,e):t instanceof Kt?function(r,i){return i instanceof Kt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&eT(o,i.filters[l]),!0):!1}(t,e):void G(19439)}function tT(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${es(n.value)}`}(t):t instanceof Kt?function(n){return n.op.toString()+" {"+n.getFilters().map(tT).join(" ,")+"}"}(t):"Filter"}class Wk extends xe{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class Hk extends xe{constructor(e,n){super(e,"in",n),this.keys=nT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qk extends xe{constructor(e,n){super(e,"not-in",n),this.keys=nT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nT(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class Gk extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Lf(n)&&zo(n.arrayValue,this.value)}}class Kk extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&zo(this.value.arrayValue,n)}}class Qk extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(zo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!zo(this.value.arrayValue,n)}}class Yk extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Lf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>zo(this.value.arrayValue,r))}}/**
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
 */class Jk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Ry(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Jk(t,e,n,r,i,s,o)}function Mf(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ca(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>es(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>es(r)).join(",")),e.Te=n}return e.Te}function bf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!eT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ay(t.startAt,e.startAt)&&Ay(t.endAt,e.endAt)}function dd(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Xk(t,e,n,r,i,s,o,l){return new ms(t,e,n,r,i,s,o,l)}function Ou(t){return new ms(t)}function Cy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Zk(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function rT(t){return t.collectionGroup!==null}function fo(t){const e=J(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new be(He.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new $o(s,r))}),n.has(He.keyField().canonicalString())||e.Ie.push(new $o(He.keyField(),r))}return e.Ie}function an(t){const e=J(t);return e.Ee||(e.Ee=eN(e,fo(t))),e.Ee}function eN(t,e){if(t.limitType==="F")return Ry(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new $o(i.field,s)});const n=t.endAt?new eu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new eu(t.startAt.position,t.startAt.inclusive):null;return Ry(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function fd(t,e){const n=t.filters.concat([e]);return new ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function tN(t,e){const n=t.explicitOrderBy.concat([e]);return new ms(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function pd(t,e,n){return new ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lu(t,e){return bf(an(t),an(e))&&t.limitType===e.limitType}function iT(t){return`${Mf(an(t))}|lt:${t.limitType}`}function gi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>tT(i)).join(", ")}]`),ca(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>es(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>es(i)).join(",")),`Target(${r})`}(an(t))}; limitType=${t.limitType})`}function Mu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of fo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Sy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,fo(r),i)||r.endAt&&!function(o,l,u){const c=Sy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,fo(r),i))}(t,e)}function nN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sT(t){return(e,n)=>{let r=!1;for(const i of fo(t)){const s=rN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rN(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Zi(u,c):G(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return zw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN=new we(q.comparator);function Rn(){return iN}const oT=new we(q.comparator);function Xs(...t){let e=oT;for(const n of t)e=e.insert(n.key,n);return e}function aT(t){let e=oT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $r(){return po()}function lT(){return po()}function po(){return new ui(t=>t.toString(),(t,e)=>t.isEqual(e))}const sN=new we(q.comparator),oN=new be(q.comparator);function re(...t){let e=oN;for(const n of t)e=e.add(n);return e}const aN=new be(ne);function lN(){return aN}/**
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
 */function Ff(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jl(e)?"-0":e}}function uT(t){return{integerValue:""+t}}function uN(t,e){return Vk(e)?uT(e):Ff(t,e)}/**
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
 */class bu{constructor(){this._=void 0}}function cN(t,e,n){return t instanceof Wo?function(i,s){const o={fields:{[Hw]:{stringValue:Ww},[Gw]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Of(s)&&(s=Vu(s)),s&&(o.fields[qw]=s),{mapValue:o}}(n,e):t instanceof Ho?hT(t,e):t instanceof qo?dT(t,e):function(i,s){const o=cT(i,s),l=Py(o)+Py(i.Ae);return cd(o)&&cd(i.Ae)?uT(l):Ff(i.serializer,l)}(t,e)}function hN(t,e,n){return t instanceof Ho?hT(t,e):t instanceof qo?dT(t,e):n}function cT(t,e){return t instanceof tu?function(r){return cd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Wo extends bu{}class Ho extends bu{constructor(e){super(),this.elements=e}}function hT(t,e){const n=fT(e);for(const r of t.elements)n.some(i=>un(i,r))||n.push(r);return{arrayValue:{values:n}}}class qo extends bu{constructor(e){super(),this.elements=e}}function dT(t,e){let n=fT(e);for(const r of t.elements)n=n.filter(i=>!un(i,r));return{arrayValue:{values:n}}}class tu extends bu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Py(t){return Ae(t.integerValue||t.doubleValue)}function fT(t){return Lf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e,n){this.field=e,this.transform=n}}function fN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ho&&i instanceof Ho||r instanceof qo&&i instanceof qo?Xi(r.elements,i.elements,un):r instanceof tu&&i instanceof tu?un(r.Ae,i.Ae):r instanceof Wo&&i instanceof Wo}(t.transform,e.transform)}class pN{constructor(e,n){this.version=e,this.transformResults=n}}class qe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qe}static exists(e){return new qe(void 0,e)}static updateTime(e){return new qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fu{}function pT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Uu(t.key,qe.none()):new ha(t.key,t.data,qe.none());{const n=t.data,r=at.empty();let i=new be(He.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Cr(t.key,r,new Tt(i.toArray()),qe.none())}}function mN(t,e,n){t instanceof ha?function(i,s,o){const l=i.value.clone(),u=Ny(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Cr?function(i,s,o){if(!gl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Ny(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(mT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function mo(t,e,n,r){return t instanceof ha?function(s,o,l,u){if(!gl(s.precondition,o))return l;const c=s.value.clone(),f=xy(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cr?function(s,o,l,u){if(!gl(s.precondition,o))return l;const c=xy(s.fieldTransforms,u,o),f=o.data;return f.setAll(mT(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return gl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function gN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=cT(r.transform,i||null);s!=null&&(n===null&&(n=at.empty()),n.set(r.field,s))}return n||null}function ky(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Xi(r,i,(s,o)=>fN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ha extends Fu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Cr extends Fu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ny(t,e,n){const r=new Map;se(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,hN(o,l,n[i]))}return r}function xy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,cN(s,o,e))}return r}class Uu extends Fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gT extends Fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&mN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=mo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=mo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=lT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=pT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Xi(this.mutations,e.mutations,(n,r)=>ky(n,r))&&Xi(this.baseMutations,e.baseMutations,(n,r)=>ky(n,r))}}class Uf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){se(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return sN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Uf(e,n,r,i)}}/**
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
 */class _N{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class vN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,ie;function yT(t){switch(t){case O.OK:return G(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return G(15467,{code:t})}}function _T(t){if(t===void 0)return An("GRPC error has no .code"),O.UNKNOWN;switch(t){case ke.OK:return O.OK;case ke.CANCELLED:return O.CANCELLED;case ke.UNKNOWN:return O.UNKNOWN;case ke.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case ke.INTERNAL:return O.INTERNAL;case ke.UNAVAILABLE:return O.UNAVAILABLE;case ke.UNAUTHENTICATED:return O.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case ke.NOT_FOUND:return O.NOT_FOUND;case ke.ALREADY_EXISTS:return O.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return O.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case ke.ABORTED:return O.ABORTED;case ke.OUT_OF_RANGE:return O.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return O.UNIMPLEMENTED;case ke.DATA_LOSS:return O.DATA_LOSS;default:return G(39323,{code:t})}}(ie=ke||(ke={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function EN(){return new TextEncoder}/**
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
 */const wN=new lr([4294967295,4294967295],0);function Dy(t){const e=EN().encode(t),n=new xw;return n.update(e),new Uint8Array(n.digest())}function Vy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new lr([n,r],0),new lr([i,s],0)]}class jf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Zs(`Invalid padding: ${n}`);if(r<0)throw new Zs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Zs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=lr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(lr.fromNumber(r)));return i.compare(wN)===1&&(i=new lr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Dy(e),[r,i]=Vy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new jf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Dy(e),[r,i]=Vy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Zs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,da.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ju(K.min(),i,new we(ne),Rn(),re())}}class da{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new da(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=i}}class vT{constructor(e,n){this.targetId=e,this.Ce=n}}class ET{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Oy{constructor(){this.ve=0,this.Fe=Ly(),this.Me=Qe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G(38017,{changeType:s})}}),new da(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Ly()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,se(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class TN{constructor(e){this.Ge=e,this.ze=new Map,this.je=Rn(),this.He=Qa(),this.Je=Qa(),this.Ze=new we(ne)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(dd(s))if(r===0){const o=new q(s.path);this.et(n,o,Be.newNoDocument(o,K.min()))}else se(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=mr(r).toUint8Array()}catch(u){if(u instanceof $w)return ii("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new jf(o,i,s)}catch(u){return ii(u instanceof Zs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&dd(l.target)){const u=new q(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Be.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=re();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new ju(e,n,this.Ze,this.je,r);return this.je=Rn(),this.He=Qa(),this.Je=Qa(),this.Ze=new we(ne),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Oy,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new be(ne),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new be(ne),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Oy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Qa(){return new we(q.comparator)}function Ly(){return new we(q.comparator)}const IN={asc:"ASCENDING",desc:"DESCENDING"},SN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},AN={and:"AND",or:"OR"};class RN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function md(t,e){return t.useProto3Json||ca(e)?e:{value:e}}function nu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function CN(t,e){return nu(t,e.toTimestamp())}function St(t){return se(!!t,49232),K.fromTimestamp(function(n){const r=pr(n);return new pe(r.seconds,r.nanos)}(t))}function Bf(t,e){return gd(t,e).canonicalString()}function gd(t,e){const n=function(i){return new le(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function TT(t){const e=le.fromString(t);return se(PT(e),10190,{key:e.toString()}),e}function ru(t,e){return Bf(t.databaseId,e.path)}function go(t,e){const n=TT(e);if(n.get(1)!==t.databaseId.projectId)throw new B(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(ST(n))}function IT(t,e){return Bf(t.databaseId,e)}function PN(t){const e=TT(t);return e.length===4?le.emptyPath():ST(e)}function yd(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ST(t){return se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function My(t,e,n){return{name:ru(t,e),fields:n.value.mapValue.fields}}function kN(t,e){return"found"in e?function(r,i){se(!!i.found,43571),i.found.name,i.found.updateTime;const s=go(r,i.found.name),o=St(i.found.updateTime),l=i.found.createTime?St(i.found.createTime):K.min(),u=new at({mapValue:{fields:i.found.fields}});return Be.newFoundDocument(s,o,l,u)}(t,e):"missing"in e?function(r,i){se(!!i.missing,3894),se(!!i.readTime,22933);const s=go(r,i.missing),o=St(i.readTime);return Be.newNoDocument(s,o)}(t,e):G(7234,{result:e})}function NN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(se(f===void 0||typeof f=="string",58123),Qe.fromBase64String(f||"")):(se(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Qe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?O.UNKNOWN:_T(c.code);return new B(f,c.message||"")}(o);n=new ET(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=go(t,r.document.name),s=St(r.document.updateTime),o=r.document.createTime?St(r.document.createTime):K.min(),l=new at({mapValue:{fields:r.document.fields}}),u=Be.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new yl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=go(t,r.document),s=r.readTime?St(r.readTime):K.min(),o=Be.newNoDocument(i,s),l=r.removedTargetIds||[];n=new yl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=go(t,r.document),s=r.removedTargetIds||[];n=new yl([],s,i,null)}else{if(!("filter"in e))return G(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new vN(i,s),l=r.targetId;n=new vT(l,o)}}return n}function AT(t,e){let n;if(e instanceof ha)n={update:My(t,e.key,e.value)};else if(e instanceof Uu)n={delete:ru(t,e.key)};else if(e instanceof Cr)n={update:My(t,e.key,e.data),updateMask:UN(e.fieldMask)};else{if(!(e instanceof gT))return G(16599,{dt:e.type});n={verify:ru(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Wo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ho)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof qo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof tu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw G(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:CN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G(27497)}(t,e.precondition)),n}function xN(t,e){return t&&t.length>0?(se(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?St(i.updateTime):St(s);return o.isEqual(K.min())&&(o=St(s)),new pN(o,i.transformResults||[])}(n,e))):[]}function DN(t,e){return{documents:[IT(t,e.path)]}}function VN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=IT(t,i);const s=function(c){if(c.length!==0)return CT(Kt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:yi(m.field),direction:MN(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=md(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function ON(t){let e=PN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){se(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=RT(p);return m instanceof Kt&&Zw(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new $o(_i(P.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,ca(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,T=p.values||[];return new eu(T,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,T=p.values||[];return new eu(T,m)}(n.endAt)),Xk(e,i,o,s,l,"F",u,c)}function LN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function RT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_i(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_i(n.unaryFilter.field);return xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_i(n.unaryFilter.field);return xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_i(n.unaryFilter.field);return xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(t):t.fieldFilter!==void 0?function(n){return xe.create(_i(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kt.create(n.compositeFilter.filters.map(r=>RT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(n.compositeFilter.op))}(t):G(30097,{filter:t})}function MN(t){return IN[t]}function bN(t){return SN[t]}function FN(t){return AN[t]}function yi(t){return{fieldPath:t.canonicalString()}}function _i(t){return He.fromServerFormat(t.fieldPath)}function CT(t){return t instanceof xe?function(n){if(n.op==="=="){if(Iy(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NAN"}};if(Ty(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Iy(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NOT_NAN"}};if(Ty(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yi(n.field),op:bN(n.op),value:n.value}}}(t):t instanceof Kt?function(n){const r=n.getFilters().map(i=>CT(i));return r.length===1?r[0]:{compositeFilter:{op:FN(n.op),filters:r}}}(t):G(54877,{filter:t})}function UN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function PT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function kT(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n,r,i,s=K.min(),o=K.min(),l=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e){this.yt=e}}function BN(t){const e=ON({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pd(e,e.limit,"L"):e}/**
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
 */class zN{constructor(){this.Sn=new $N}addToCollectionParentIndex(e,n){return this.Sn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(fr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(fr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class $N{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new be(le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new be(le.comparator)).toArray()}}/**
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
 */const by={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},NT=41943040;class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(NT,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ts(0)}static ar(){return new ts(-1)}}/**
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
 */const Fy="LruGarbageCollector",WN=1048576;function Uy([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class HN{constructor(e){this.Pr=e,this.buffer=new be(Uy),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Uy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class qN{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){W(Fy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ps(n)?W(Fy,"Ignoring IndexedDB error during garbage collection: ",n):await fs(n)}await this.Ar(3e5)})}}class GN{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Du.ce);const r=new HN(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(by)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),by):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),mi()<=te.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function KN(t,e){return new GN(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(){this.changes=new ui(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class YN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&mo(r.mutation,i,Tt.empty(),pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=$r();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Rn();const o=po(),l=function(){return po()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Cr)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),mo(f.mutation,c,f.mutation.getFieldMask(),pe.now())):o.set(c.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new YN(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=po();let i=new we((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Tt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=lT();f.forEach(m=>{if(!s.has(m)){const T=pT(n.get(m),r.get(m));T!==null&&p.set(m,T),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return Zk(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve($r());let l=Uo,u=s;return o.next(c=>M.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(f=>({batchId:l,changes:aT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Xs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Xs();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(p,m){return new ms(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,Be.newInvalidDocument(f)))});let l=Xs();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&mo(f.mutation,c,Tt.empty(),pe.now()),Mu(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class XN{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:St(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:BN(i.bundledQuery),readTime:St(i.readTime)}}(n)),M.resolve()}}/**
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
 */class ZN{constructor(){this.overlays=new we(q.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$r();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.bt(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=$r(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=$r(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=$r(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return M.resolve(l)}bt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _N(n,r));let s=this.Lr.get(n);s===void 0&&(s=re(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class ex{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.kr=new be(Ue.Kr),this.qr=new be(Ue.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ue(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new q(new le([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new q(new le([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=re();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return q.comparator(e.key,n.key)||ne(e.Hr,n.Hr)}static Ur(e,n){return ne(e.Hr,n.Hr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new be(Ue.Kr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Jr=this.Jr.add(new Ue(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Vf:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new be(ne);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new q(s),0);let l=new be(ne);return this.Jr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Hr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){se(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return M.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new Ue(n,0),i=this.Jr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e){this.ti=e,this.docs=function(){return new we(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Be.newInvalidDocument(n))}getEntries(e,n){let r=Rn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Be.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Rn();const o=n.path,l=new q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||kk(Pk(f),r)<=0||(i.has(f.key)||Mu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new rx(this)}getSize(e){return M.resolve(this.size)}}class rx extends QN{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e){this.persistence=e,this.ri=new ui(n=>Mf(n),bf),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.ii=0,this.si=new zf,this.targetCount=0,this.oi=ts._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ts(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n){this._i={},this.overlays={},this.ai=new Du(0),this.ui=!1,this.ui=!0,this.ci=new ex,this.referenceDelegate=e(this),this.li=new ix(this),this.indexManager=new zN,this.remoteDocumentCache=function(i){return new nx(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new jN(n),this.Pi=new XN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ZN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new tx(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new sx(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class sx extends xk{constructor(e){super(),this.currentSequenceNumber=e}}class $f{constructor(e){this.persistence=e,this.Ri=new zf,this.Ai=null}static Vi(e){return new $f(e)}get di(){if(this.Ai)return this.Ai;throw G(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const i=q.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,K.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class iu{constructor(e,n){this.persistence=e,this.fi=new ui(r=>Ok(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=KN(this,n)}static Vi(e,n){return new iu(e,n)}Ti(){}Ii(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,K.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=pl(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Wf(e,n.fromCache,r,i)}}/**
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
 */class ox{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ax{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return M1()?8:Dk(rt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new ox;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(mi()<=te.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",gi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(mi()<=te.DEBUG&&W("QueryEngine","Query:",gi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(mi()<=te.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",gi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,an(n))):M.resolve())}gs(e,n){if(Cy(n))return M.resolve(null);let r=an(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=pd(n,null,"F"),r=an(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ss(n,c,o,u.readTime)?this.gs(e,pd(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return Cy(n)||i.isEqual(K.min())?M.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ss(n,o,r,i)?M.resolve(null):(mi()<=te.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),gi(n)),this.Ds(e,o,n,Ck(i,Uo)).next(l=>l))})}bs(e,n){let r=new be(sT(e));return n.forEach((i,s)=>{Mu(e,s)&&(r=r.add(s))}),r}Ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return mi()<=te.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",gi(n)),this.fs.getDocumentsMatchingQuery(e,n,fr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const Hf="LocalStore",lx=3e8;class ux{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new we(ne),this.Fs=new ui(s=>Mf(s),bf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JN(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function cx(t,e,n,r){return new ux(t,e,n,r)}async function DT(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function hx(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,m=p.keys();let T=M.resolve();return m.forEach(P=>{T=T.next(()=>f.getEntry(u,P)).next(x=>{const V=c.docVersions.get(P);se(V!==null,48541),x.version.compareTo(V)<0&&(p.applyToRemoteDocument(x,c),x.isValidDocument()&&(x.setReadTime(c.commitVersion),f.addEntry(x)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function VT(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function dx(t,e){const n=J(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.li.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(s,f.addedDocuments,p)));let T=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(Qe.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),i=i.insert(p,T),function(x,V,I){return x.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=lx?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,T,f)&&l.push(n.li.updateTargetData(s,T))});let u=Rn(),c=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(fx(s,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(K.min())){const f=n.li.getLastRemoteSnapshotVersion(s).next(p=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function fx(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Rn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(K.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(Hf,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function px(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Vf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function mx(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function _d(t,e,n){const r=J(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ps(o))throw o;W(Hf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function jy(t,e,n){const r=J(t);let i=K.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=J(u),m=p.Fs.get(f);return m!==void 0?M.resolve(p.vs.get(m)):p.li.getTargetData(c,f)}(r,o,an(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:K.min(),n?s:re())).next(l=>(gx(r,nN(e),l),{documents:l,ks:s})))}function gx(t,e,n){let r=t.Ms.get(e)||K.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class By{constructor(){this.activeTargetIds=lN()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yx{constructor(){this.vo=new By,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new By,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _x{Mo(e){}shutdown(){}}/**
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
 */const zy="ConnectivityMonitor";class $y{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){W(zy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){W(zy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ya=null;function vd(){return Ya===null?Ya=function(){return 268435456+Math.round(2147483648*Math.random())}():Ya++,"0x"+Ya.toString(16)}/**
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
 */const eh="RestConnection",vx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Ex{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Xl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=vd(),l=this.Qo(e,n.toUriEncodedString());W(eh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),f=us(c);return this.zo(e,l,u,r,f).then(p=>(W(eh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ii(eh,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ds}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=vx[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection",$s=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class zi extends Ex{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!zi.c_){const e=Lw();$s(e,Ow.STAT_EVENT,n=>{n.stat===ad.PROXY?W(Ze,"STAT_EVENT: detected buffering proxy"):n.stat===ad.NOPROXY&&W(Ze,"STAT_EVENT: detected no buffering proxy")}),zi.c_=!0}}zo(e,n,r,i,s){const o=vd();return new Promise((l,u)=>{const c=new Dw;c.setWithCredentials(!0),c.listenOnce(Vw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case fl.NO_ERROR:const p=c.getResponseJson();W(Ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case fl.TIMEOUT:W(Ze,`RPC '${e}' ${o} timed out`),u(new B(O.DEADLINE_EXCEEDED,"Request time out"));break;case fl.HTTP_ERROR:const m=c.getStatus();if(W(Ze,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let T=c.getResponseJson();Array.isArray(T)&&(T=T[0]);const P=T==null?void 0:T.error;if(P&&P.status&&P.message){const x=function(I){const _=I.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(_)>=0?_:O.UNKNOWN}(P.status);u(new B(x,P.message))}else u(new B(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new B(O.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{W(Ze,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);W(Ze,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",f,r,15)})}T_(e,n,r){const i=vd(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");W(Ze,`Creating RPC '${e}' stream ${i}: ${c}`,l);const f=o.createWebChannel(c,l);this.I_(f);let p=!1,m=!1;const T=new wx({Ho:P=>{m?W(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(p||(W(Ze,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),W(Ze,`RPC '${e}' stream ${i} sending:`,P),f.send(P))},Jo:()=>f.close()});return $s(f,Js.EventType.OPEN,()=>{m||(W(Ze,`RPC '${e}' stream ${i} transport opened.`),T.i_())}),$s(f,Js.EventType.CLOSE,()=>{m||(m=!0,W(Ze,`RPC '${e}' stream ${i} transport closed`),T.o_(),this.E_(f))}),$s(f,Js.EventType.ERROR,P=>{m||(m=!0,ii(Ze,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),T.o_(new B(O.UNAVAILABLE,"The operation could not be completed")))}),$s(f,Js.EventType.MESSAGE,P=>{var x;if(!m){const V=P.data[0];se(!!V,16349);const I=V,_=(I==null?void 0:I.error)||((x=I[0])==null?void 0:x.error);if(_){W(Ze,`RPC '${e}' stream ${i} received error:`,_);const A=_.status;let L=function(E){const y=ke[E];if(y!==void 0)return _T(y)}(A),b=_.message;A==="NOT_FOUND"&&b.includes("database")&&b.includes("does not exist")&&b.includes(this.databaseId.database)&&ii(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),L===void 0&&(L=O.INTERNAL,b="Unknown error status: "+A+" with message "+_.message),m=!0,T.o_(new B(L,b)),f.close()}else W(Ze,`RPC '${e}' stream ${i} received:`,V),T.__(V)}}),zi.u_(),setTimeout(()=>{T.s_()},0),T}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Mw()}}/**
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
 */function Tx(t){return new zi(t)}function th(){return typeof document<"u"?document:null}/**
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
 */function Bu(t){return new RN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zi.c_=!1;class qf{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="PersistentStream";class OT{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.b_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new qf(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new B(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.H_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(Wy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(W(Wy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ix extends OT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=NN(this.serializer,e),r=function(s){if(!("targetChange"in s))return K.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?K.min():o.readTime?St(o.readTime):K.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=yd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=dd(u)?{documents:DN(s,u)}:{query:VN(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=wT(s,o.resumeToken);const c=md(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(K.min())>0){l.readTime=nu(s,o.snapshotVersion.toTimestamp());const c=md(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=LN(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=yd(this.serializer),n.removeTarget=e,this.K_(n)}}class Sx extends OT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=xN(e.writeResults,e.commitTime),r=St(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=yd(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>AT(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{}class Rx extends Ax{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new B(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,gd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(O.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,gd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(O.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Cx(t,e,n,r){return new Rx(t,e,n,r)}class Px{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(An(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="RemoteStore";class kx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ci(this)&&(W(si,"Restarting streams for network reachability change."),await async function(u){const c=J(u);c.Ea.add(4),await fa(c),c.Va.set("Unknown"),c.Ea.delete(4),await zu(c)}(this))})}),this.Va=new Px(r,i)}}async function zu(t){if(ci(t))for(const e of t.Ra)await e(!0)}async function fa(t){for(const e of t.Ra)await e(!1)}function LT(t,e){const n=J(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Yf(n)?Qf(n):gs(n).O_()&&Kf(n,e))}function Gf(t,e){const n=J(t),r=gs(n);n.Ia.delete(e),r.O_()&&MT(n,e),n.Ia.size===0&&(r.O_()?r.L_():ci(n)&&n.Va.set("Unknown"))}function Kf(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}gs(t).Z_(e)}function MT(t,e){t.da.$e(e),gs(t).X_(e)}function Qf(t){t.da=new TN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),gs(t).start(),t.Va.ua()}function Yf(t){return ci(t)&&!gs(t).x_()&&t.Ia.size>0}function ci(t){return J(t).Ea.size===0}function bT(t){t.da=void 0}async function Nx(t){t.Va.set("Online")}async function xx(t){t.Ia.forEach((e,n)=>{Kf(t,e)})}async function Dx(t,e){bT(t),Yf(t)?(t.Va.ha(e),Qf(t)):t.Va.set("Unknown")}async function Vx(t,e,n){if(t.Va.set("Online"),e instanceof ET&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){W(si,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await su(t,r)}else if(e instanceof yl?t.da.Xe(e):e instanceof vT?t.da.st(e):t.da.tt(e),!n.isEqual(K.min()))try{const r=await VT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ia.get(c);f&&s.Ia.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.Ia.get(u);if(!f)return;s.Ia.set(u,f.withResumeToken(Qe.EMPTY_BYTE_STRING,f.snapshotVersion)),MT(s,u);const p=new Qn(f.target,u,c,f.sequenceNumber);Kf(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W(si,"Failed to raise snapshot:",r),await su(t,r)}}async function su(t,e,n){if(!ps(e))throw e;t.Ea.add(1),await fa(t),t.Va.set("Offline"),n||(n=()=>VT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(si,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await zu(t)})}function FT(t,e){return e().catch(n=>su(t,n,e))}async function $u(t){const e=J(t),n=yr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Vf;for(;Ox(e);)try{const i=await px(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,Lx(e,i)}catch(i){await su(e,i)}UT(e)&&jT(e)}function Ox(t){return ci(t)&&t.Ta.length<10}function Lx(t,e){t.Ta.push(e);const n=yr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function UT(t){return ci(t)&&!yr(t).x_()&&t.Ta.length>0}function jT(t){yr(t).start()}async function Mx(t){yr(t).ra()}async function bx(t){const e=yr(t);for(const n of t.Ta)e.ea(n.mutations)}async function Fx(t,e,n){const r=t.Ta.shift(),i=Uf.from(r,e,n);await FT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await $u(t)}async function Ux(t,e){e&&yr(t).Y_&&await async function(r,i){if(function(o){return yT(o)&&o!==O.ABORTED}(i.code)){const s=r.Ta.shift();yr(r).B_(),await FT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await $u(r)}}(t,e),UT(t)&&jT(t)}async function Hy(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),W(si,"RemoteStore received new credentials");const r=ci(n);n.Ea.add(3),await fa(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await zu(n)}async function jx(t,e){const n=J(t);e?(n.Ea.delete(2),await zu(n)):e||(n.Ea.add(2),await fa(n),n.Va.set("Unknown"))}function gs(t){return t.ma||(t.ma=function(n,r,i){const s=J(n);return s.sa(),new Ix(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:Nx.bind(null,t),Yo:xx.bind(null,t),t_:Dx.bind(null,t),J_:Vx.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Yf(t)?Qf(t):t.Va.set("Unknown")):(await t.ma.stop(),bT(t))})),t.ma}function yr(t){return t.fa||(t.fa=function(n,r,i){const s=J(n);return s.sa(),new Sx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Mx.bind(null,t),t_:Ux.bind(null,t),ta:bx.bind(null,t),na:Fx.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await $u(t)):(await t.fa.stop(),t.Ta.length>0&&(W(si,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new on,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Jf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xf(t,e){if(An("AsyncQueue",`${e}: ${t}`),ps(t))return new B(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{static emptySet(e){return new $i(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Xs(),this.sortedSet=new we(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $i)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $i;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.ga=new we(q.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):G(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class ns{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ns(e,n,$i.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class zx{constructor(){this.queries=Gy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=Gy(),s.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new B(O.ABORTED,"Firestore shutting down"))}}function Gy(){return new ui(t=>iT(t),Lu)}async function Zf(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.Da()&&(r=2):(s=new Bx,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Xf(o,`Initialization of query '${gi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.ba.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&tp(n)}async function ep(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ba.indexOf(e);o>=0&&(s.ba.splice(o,1),s.ba.length===0?i=e.Da()?0:1:!s.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function $x(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.ba)l.Fa(i)&&(r=!0);o.wa=i}}r&&tp(n)}function Wx(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.ba)s.onError(n);r.queries.delete(e)}function tp(t){t.Ca.forEach(e=>{e.next()})}var Ed,Ky;(Ky=Ed||(Ed={})).Ma="default",Ky.Cache="cache";class np{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ed.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.key=e}}class zT{constructor(e){this.key=e}}class Hx{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=re(),this.mutatedKeys=re(),this.eu=sT(e),this.tu=new $i(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new qy,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),T=Mu(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),x=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let V=!1;m&&T?m.data.isEqual(T.data)?P!==x&&(r.track({type:3,doc:T}),V=!0):this.su(m,T)||(r.track({type:2,doc:T}),V=!0,(u&&this.eu(T,u)>0||c&&this.eu(T,c)<0)&&(l=!0)):!m&&T?(r.track({type:0,doc:T}),V=!0):m&&!T&&(r.track({type:1,doc:m}),V=!0,(u||c)&&(l=!0)),V&&(T?(o=o.add(T),s=x?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(T,P){const x=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:V})}};return x(T)-x(P)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new ns(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new qy,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new zT(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new BT(r))}),n}cu(e){this.Za=e.ks,this.Ya=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ns.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const rp="SyncEngine";class qx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Gx{constructor(e){this.key=e,this.hu=!1}}class Kx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ui(l=>iT(l),Lu),this.Iu=new Map,this.Eu=new Set,this.Ru=new we(q.comparator),this.Au=new Map,this.Vu=new zf,this.du={},this.mu=new Map,this.fu=ts.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Qx(t,e,n=!0){const r=KT(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await $T(r,e,n,!0),i}async function Yx(t,e){const n=KT(t);await $T(n,e,!0,!1)}async function $T(t,e,n,r){const i=await mx(t.localStore,an(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Jx(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&LT(t.remoteStore,i),l}async function Jx(t,e,n,r,i){t.pu=(p,m,T)=>async function(x,V,I,_){let A=V.view.ru(I);A.Ss&&(A=await jy(x.localStore,V.query,!1).then(({documents:E})=>V.view.ru(E,A)));const L=_&&_.targetChanges.get(V.targetId),b=_&&_.targetMismatches.get(V.targetId)!=null,z=V.view.applyChanges(A,x.isPrimaryClient,L,b);return Yy(x,V.targetId,z.au),z.snapshot}(t,p,m,T);const s=await jy(t.localStore,e,!0),o=new Hx(e,s.ks),l=o.ru(s.documents),u=da.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Yy(t,n,c.au);const f=new qx(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function Xx(t,e,n){const r=J(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Lu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await _d(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Gf(r.remoteStore,i.targetId),wd(r,i.targetId)}).catch(fs)):(wd(r,i.targetId),await _d(r.localStore,i.targetId,!0))}async function Zx(t,e){const n=J(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Gf(n.remoteStore,r.targetId))}async function eD(t,e,n){const r=aD(t);try{const i=await function(o,l){const u=J(o),c=pe.now(),f=l.reduce((T,P)=>T.add(P.key),re());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let P=Rn(),x=re();return u.xs.getEntries(T,f).next(V=>{P=V,P.forEach((I,_)=>{_.isValidDocument()||(x=x.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,P)).next(V=>{p=V;const I=[];for(const _ of l){const A=gN(_,p.get(_.key).overlayedDocument);A!=null&&I.push(new Cr(_.key,A,Yw(A.value.mapValue),qe.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,I,l)}).next(V=>{m=V;const I=V.applyToLocalDocumentSet(p,x);return u.documentOverlayCache.saveOverlays(T,V.batchId,I)})}).then(()=>({batchId:m.batchId,changes:aT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new we(ne)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,i.batchId,n),await pa(r,i.changes),await $u(r.remoteStore)}catch(i){const s=Xf(i,"Failed to persist write");n.reject(s)}}async function WT(t,e){const n=J(t);try{const r=await dx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?se(o.hu,14607):i.removedDocuments.size>0&&(se(o.hu,42227),o.hu=!1))}),await pa(n,r,e)}catch(r){await fs(r)}}function Qy(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const m of p.ba)m.va(l)&&(c=!0)}),c&&tp(u)}(r.eventManager,e),i.length&&r.Pu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tD(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new we(q.comparator);o=o.insert(s,Be.newNoDocument(s,K.min()));const l=re().add(s),u=new ju(K.min(),new Map,new we(ne),o,l);await WT(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),ip(r)}else await _d(r.localStore,e,!1).then(()=>wd(r,e,n)).catch(fs)}async function nD(t,e){const n=J(t),r=e.batch.batchId;try{const i=await hx(n.localStore,e);qT(n,r,null),HT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pa(n,i)}catch(i){await fs(i)}}async function rD(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(se(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);qT(r,e,n),HT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pa(r,i)}catch(i){await fs(i)}}function HT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function qT(t,e,n){const r=J(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function wd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||GT(t,r)})}function GT(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Gf(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),ip(t))}function Yy(t,e,n){for(const r of n)r instanceof BT?(t.Vu.addReference(r.key,e),iD(t,r)):r instanceof zT?(W(rp,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||GT(t,r.key)):G(19791,{wu:r})}function iD(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(W(rp,"New document in limbo: "+n),t.Eu.add(r),ip(t))}function ip(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new q(le.fromString(e)),r=t.fu.next();t.Au.set(r,new Gx(n)),t.Ru=t.Ru.insert(n,r),LT(t.remoteStore,new Qn(an(Ou(n.path)),r,"TargetPurposeLimboResolution",Du.ce))}}async function pa(t,e,n){const r=J(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Wf.Es(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Pu.J_(i),await async function(u,c){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(c,m=>M.forEach(m.Ts,T=>f.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>M.forEach(m.Is,T=>f.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!ps(p))throw p;W(Hf,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const T=f.vs.get(m),P=T.snapshotVersion,x=T.withLastLimboFreeSnapshotVersion(P);f.vs=f.vs.insert(m,x)}}}(r.localStore,s))}async function sD(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){W(rp,"User change. New user:",e.toKey());const r=await DT(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new B(O.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pa(n,r.Ns)}}function oD(t,e){const n=J(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let i=re();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function KT(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=WT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tD.bind(null,e),e.Pu.J_=$x.bind(null,e.eventManager),e.Pu.yu=Wx.bind(null,e.eventManager),e}function aD(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rD.bind(null,e),e}class ou{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return cx(this.persistence,new ax,e.initialUser,this.serializer)}Cu(e){return new xT($f.Vi,this.serializer)}Du(e){return new yx}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ou.provider={build:()=>new ou};class lD extends ou{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){se(this.persistence.referenceDelegate instanceof iu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new qN(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new xT(r=>iu.Vi(r,n),this.serializer)}}class Td{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sD.bind(null,this.syncEngine),await jx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zx}()}createDatastore(e){const n=Bu(e.databaseInfo.databaseId),r=Tx(e.databaseInfo);return Cx(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new kx(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Qy(this.syncEngine,n,0),function(){return $y.v()?new $y:new _x}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new Kx(i,s,o,l,u,c);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);W(si,"RemoteStore shutting down."),s.Ea.add(5),await fa(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Td.provider={build:()=>new Td};/**
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
 */class sp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uD=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new B(O.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=J(i),l={documents:s.map(p=>ru(o.serializer,p))},u=await o.jo("BatchGetDocuments",o.serializer.databaseId,le.emptyPath(),l,s.length),c=new Map;u.forEach(p=>{const m=kN(o.serializer,p);c.set(m.key.toString(),m)});const f=[];return s.forEach(p=>{const m=c.get(p.toString());se(!!m,55234,{key:p}),f.push(m)}),f}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Uu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=q.fromPath(r);this.mutations.push(new gT(i,this.precondition(i)))}),await async function(r,i){const s=J(r),o={writes:i.map(l=>AT(s.serializer,l))};await s.Wo("Commit",s.serializer.databaseId,le.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw G(50498,{Gu:e.constructor.name});n=K.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new B(O.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(K.min())?qe.exists(!1):qe.updateTime(n):qe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(K.min()))throw new B(O.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return qe.updateTime(n)}return qe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
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
 */class cD{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.zu=r.maxAttempts,this.M_=new qf(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Hu()}Hu(){this.M_.p_(async()=>{const e=new uD(this.datastore),n=this.Ju(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Zu(i)}))}).catch(r=>{this.Zu(r)})})}Ju(e){try{const n=this.updateFunction(e);return!ca(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Zu(e){this.zu>0&&this.Xu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Hu(),Promise.resolve()))):this.deferred.reject(e)}Xu(e){if((e==null?void 0:e.name)==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!yT(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="FirestoreClient";class hD{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=Df.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W(_r,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(_r,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new on;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function nh(t,e){t.asyncQueue.verifyOperationInProgress(),W(_r,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await DT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Jy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dD(t);W(_r,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Hy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Hy(e.remoteStore,i)),t._onlineComponents=e}async function dD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(_r,"Using user provided OfflineComponentProvider");try{await nh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ii("Error using user provided cache. Falling back to memory cache: "+n),await nh(t,new ou)}}else W(_r,"Using default OfflineComponentProvider"),await nh(t,new lD(void 0));return t._offlineComponents}async function op(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(_r,"Using user provided OnlineComponentProvider"),await Jy(t,t._uninitializedComponentsProvider._online)):(W(_r,"Using default OnlineComponentProvider"),await Jy(t,new Td))),t._onlineComponents}function fD(t){return op(t).then(e=>e.syncEngine)}function pD(t){return op(t).then(e=>e.datastore)}async function au(t){const e=await op(t),n=e.eventManager;return n.onListen=Qx.bind(null,e.syncEngine),n.onUnlisten=Xx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Yx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Zx.bind(null,e.syncEngine),n}function mD(t,e,n,r){const i=new sp(r),s=new np(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>Zf(await au(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>ep(await au(t),s))}}function gD(t,e,n={}){const r=new on;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new sp({next:m=>{f.Nu(),o.enqueueAndForget(()=>ep(s,p));const T=m.docs.has(l);!T&&m.fromCache?c.reject(new B(O.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&u&&u.source==="server"?c.reject(new B(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new np(Ou(l.path),f,{includeMetadataChanges:!0,Ka:!0});return Zf(s,p)}(await au(t),t.asyncQueue,e,n,r)),r.promise}function yD(t,e,n={}){const r=new on;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new sp({next:m=>{f.Nu(),o.enqueueAndForget(()=>ep(s,p)),m.fromCache&&u.source==="server"?c.reject(new B(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new np(l,f,{includeMetadataChanges:!0,Ka:!0});return Zf(s,p)}(await au(t),t.asyncQueue,e,n,r)),r.promise}function _D(t,e){const n=new on;return t.asyncQueue.enqueueAndForget(async()=>eD(await fD(t),e,n)),n.promise}function vD(t,e,n){const r=new on;return t.asyncQueue.enqueueAndForget(async()=>{const i=await pD(t);new cD(t.asyncQueue,i,n,e,r).ju()}),r.promise}/**
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
 */function QT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const ED="ComponentProvider",Xy=new Map;function wD(t,e,n,r,i){return new bk(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,QT(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const YT="firestore.googleapis.com",Zy=!0;class e_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=YT,this.ssl=Zy}else this.host=e.host,this.ssl=e.ssl??Zy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=NT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<WN)throw new B(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Rk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=QT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new e_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new e_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gk;switch(r.type){case"firstParty":return new Ek(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Xy.get(n);r&&(W(ED,"Removing Datastore"),Xy.delete(n),r.terminate())}(this),Promise.resolve()}}function TD(t,e,n,r={}){var c;t=Wt(t,Wu);const i=us(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&($E(`https://${l}`),WE("Firestore",!0)),s.host!==YT&&s.host!==l&&ii("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Zr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=et.MOCK_USER;else{f=C1(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new B(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new et(m)}t._authCredentials=new yk(new Fw(f,p))}}/**
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
 */class Pr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pr(this.firestore,e,this._query)}}class Ce{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ce(this.firestore,e,this._key)}toJSON(){return{type:Ce._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ua(n,Ce._jsonSchema))return new Ce(e,r||null,new q(le.fromString(n.referencePath)))}}Ce._jsonSchemaVersion="firestore/documentReference/1.0",Ce._jsonSchema={type:De("string",Ce._jsonSchemaVersion),referencePath:De("string")};class ur extends Pr{constructor(e,n,r){super(e,n,Ou(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ce(this.firestore,null,new q(e))}withConverter(e){return new ur(this.firestore,e,this._path)}}function JT(t,e,...n){if(t=Pe(t),Uw("collection","path",e),t instanceof Wu){const r=le.fromString(e,...n);return fy(r),new ur(t,null,r)}{if(!(t instanceof Ce||t instanceof ur))throw new B(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return fy(r),new ur(t.firestore,null,r)}}function rs(t,e,...n){if(t=Pe(t),arguments.length===1&&(e=Df.newId()),Uw("doc","path",e),t instanceof Wu){const r=le.fromString(e,...n);return dy(r),new Ce(t,null,new q(r))}{if(!(t instanceof Ce||t instanceof ur))throw new B(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return dy(r),new Ce(t.firestore,t instanceof ur?t.converter:null,new q(r))}}/**
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
 */const t_="AsyncQueue";class n_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new qf(this,"async_queue_retry"),this._c=()=>{const r=th();r&&W(t_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=th();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=th();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new on;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ps(e))throw e;W(t_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,An("INTERNAL UNHANDLED ERROR: ",r_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Jf.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&G(47125,{Pc:r_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function r_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class vr extends Wu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new n_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new n_(e),this._firestoreClient=void 0,await e}}}function ID(t,e){const n=typeof t=="object"?t:KE(),r=typeof t=="string"?t:Xl,i=Tf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=A1("firestore");s&&TD(i,...s)}return i}function ys(t){if(t._terminated)throw new B(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||SD(t),t._firestoreClient}function SD(t){var r,i,s,o;const e=t._freezeSettings(),n=wD(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new hD(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Et{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Et(Qe.fromBase64String(e))}catch(n){throw new B(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Et(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Et._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ua(e,Et._jsonSchema))return Et.fromBase64String(e.bytes)}}Et._jsonSchemaVersion="firestore/bytes/1.0",Et._jsonSchema={type:De("string",Et._jsonSchemaVersion),bytes:De("string")};/**
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
 */class Hu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ln._jsonSchemaVersion}}static fromJSON(e){if(ua(e,ln._jsonSchema))return new ln(e.latitude,e.longitude)}}ln._jsonSchemaVersion="firestore/geoPoint/1.0",ln._jsonSchema={type:De("string",ln._jsonSchemaVersion),latitude:De("number"),longitude:De("number")};/**
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
 */class Ht{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ht._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ua(e,Ht._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ht(e.vectorValues);throw new B(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ht._jsonSchemaVersion="firestore/vectorValue/1.0",Ht._jsonSchema={type:De("string",Ht._jsonSchemaVersion),vectorValues:De("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=/^__.*__$/;class RD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ha(e,this.data,n,this.fieldTransforms)}}class XT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ZT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:t})}}class ap{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new ap({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return lu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(ZT(this.dataSource)&&AD.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class CD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bu(e)}createContext(e,n,r,i=!1){return new ap({dataSource:e,methodName:n,targetDoc:r,path:He.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gu(t){const e=t._freezeSettings(),n=Bu(t._databaseId);return new CD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lp(t,e,n,r,i,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,i);cp("Data must be an object, but it was:",o,r);const l=nI(r,o);let u,c;if(s.merge)u=new Tt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=is(e,p,n);if(!o.contains(m))throw new B(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);sI(f,m)||f.push(m)}u=new Tt(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new RD(new at(l),u,c)}class Ku extends qu{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ku}}class up extends qu{_toFieldTransform(e){return new dN(e.path,new Wo)}isEqual(e){return e instanceof up}}function eI(t,e,n,r){const i=t.createContext(1,e,n);cp("Data must be an object, but it was:",i,r);const s=[],o=at.empty();Rr(r,(u,c)=>{const f=iI(e,u,n);c=Pe(c);const p=i.childContextForFieldPath(f);if(c instanceof Ku)s.push(f);else{const m=ma(c,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new Tt(s);return new XT(o,l,i.fieldTransforms)}function tI(t,e,n,r,i,s){const o=t.createContext(1,e,n),l=[is(e,r,n)],u=[i];if(s.length%2!=0)throw new B(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(is(e,s[m])),u.push(s[m+1]);const c=[],f=at.empty();for(let m=l.length-1;m>=0;--m)if(!sI(c,l[m])){const T=l[m];let P=u[m];P=Pe(P);const x=o.childContextForFieldPath(T);if(P instanceof Ku)c.push(T);else{const V=ma(P,x);V!=null&&(c.push(T),f.set(T,V))}}const p=new Tt(c);return new XT(f,p,o.fieldTransforms)}function PD(t,e,n,r=!1){return ma(n,t.createContext(r?4:3,e))}function ma(t,e){if(rI(t=Pe(t)))return cp("Unsupported field value:",e,t),nI(t,e);if(t instanceof qu)return function(r,i){if(!ZT(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ma(l,i.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pe.fromDate(r);return{timestampValue:nu(i.serializer,s)}}if(r instanceof pe){const s=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:nu(i.serializer,s)}}if(r instanceof ln)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Et)return{bytesValue:wT(i.serializer,r._byteString)};if(r instanceof Ce){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Bf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ht)return function(o,l){const u=o instanceof Ht?o.toArray():o;return{mapValue:{fields:{[Kw]:{stringValue:Qw},[Zl]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return Ff(l.serializer,f)})}}}}}}(r,i);if(kT(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${xu(r)}`)}(t,e)}function nI(t,e){const n={};return zw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(t,(r,i)=>{const s=ma(i,e.childContextForField(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function rI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof ln||t instanceof Et||t instanceof Ce||t instanceof qu||t instanceof Ht||kT(t))}function cp(t,e,n){if(!rI(n)||!jw(n)){const r=xu(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function is(t,e,n){if((e=Pe(e))instanceof Hu)return e._internalPath;if(typeof e=="string")return iI(t,e);throw lu("Field path arguments must be of type string or ",t,!1,void 0,n)}const kD=new RegExp("[~\\*/\\[\\]]");function iI(t,e,n){if(e.search(kD)>=0)throw lu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hu(...e.split("."))._internalPath}catch{throw lu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function lu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new B(O.INVALID_ARGUMENT,l+t+u)}function sI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class oI{convertValue(e,n="none"){switch(gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Zl].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ae(o.doubleValue));return new Ht(n)}convertGeoPoint(e){return new ln(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Vu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(jo(e));default:return null}}convertTimestamp(e){const n=pr(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=le.fromString(e);se(PT(r),9688,{name:e});const i=new Bo(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||An(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class Qu extends oI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Et(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ce(this.firestore,null,n)}}function Go(){return new up("serverTimestamp")}const i_="@firebase/firestore",s_="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class uu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ND(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(is("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ND extends uu{data(){return super.data()}}/**
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
 */function aI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hp{}class lI extends hp{}function xD(t,e,...n){let r=[];e instanceof hp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof fp).length,l=s.filter(u=>u instanceof dp).length;if(o>1||o>0&&l>0)throw new B(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class dp extends lI{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new dp(e,n,r)}_apply(e){const n=this._parse(e);return uI(e._query,n),new Pr(e.firestore,e.converter,fd(e._query,n))}_parse(e){const n=Gu(e.firestore);return function(s,o,l,u,c,f,p){let m;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){l_(p,f);const P=[];for(const x of p)P.push(a_(u,s,x));m={arrayValue:{values:P}}}else m=a_(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||l_(p,f),m=PD(l,o,p,f==="in"||f==="not-in");return xe.create(c,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class fp extends hp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new fp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)uI(o,u),o=fd(o,u)}(e._query,n),new Pr(e.firestore,e.converter,fd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class pp extends lI{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new pp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new $o(s,o)}(e._query,this._field,this._direction);return new Pr(e.firestore,e.converter,tN(e._query,n))}}function DD(t,e="asc"){const n=e,r=is("orderBy",t);return pp._create(r,n)}function a_(t,e,n){if(typeof(n=Pe(n))=="string"){if(n==="")throw new B(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rT(e)&&n.indexOf("/")!==-1)throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(le.fromString(n));if(!q.isDocumentKey(r))throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wy(t,new q(r))}if(n instanceof Ce)return wy(t,n._key);throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xu(n)}.`)}function l_(t,e){if(!Array.isArray(t)||t.length===0)throw new B(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function uI(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function mp(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class VD extends oI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Et(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ce(this.firestore,null,n)}}class Di{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cr extends uu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(is("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=cr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}cr._jsonSchemaVersion="firestore/documentSnapshot/1.0",cr._jsonSchema={type:De("string",cr._jsonSchemaVersion),bundleSource:De("string","DocumentSnapshot"),bundleName:De("string"),bundle:De("string")};class _l extends cr{data(e={}){return super.data(e)}}class Gr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Di(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new _l(this._firestore,this._userDataWriter,r.key,r,new Di(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new _l(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Di(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new _l(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Di(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:OD(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Gr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Df.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function OD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:t})}}/**
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
 */Gr._jsonSchemaVersion="firestore/querySnapshot/1.0",Gr._jsonSchema={type:De("string",Gr._jsonSchemaVersion),bundleSource:De("string","QuerySnapshot"),bundleName:De("string"),bundle:De("string")};const LD={maxAttempts:5};/**
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
 */class MD{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Gu(e)}set(e,n,r){this._verifyNotCommitted();const i=Yn(e,this._firestore),s=mp(i.converter,n,r),o=lp(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,qe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Yn(e,this._firestore);let o;return o=typeof(n=Pe(n))=="string"||n instanceof Hu?tI(this._dataReader,"WriteBatch.update",s._key,n,r,i):eI(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,qe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Yn(e,this._firestore);return this._mutations=this._mutations.concat(new Uu(n._key,qe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Yn(t,e){if((t=Pe(t)).firestore!==e)throw new B(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class bD{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Gu(e)}get(e){const n=Yn(e,this._firestore),r=new VD(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return G(24041);const s=i[0];if(s.isFoundDocument())return new uu(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new uu(this._firestore,r,n._key,null,n.converter);throw G(18433,{doc:s})})}set(e,n,r){const i=Yn(e,this._firestore),s=mp(i.converter,n,r),o=lp(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Yn(e,this._firestore);let o;return o=typeof(n=Pe(n))=="string"||n instanceof Hu?tI(this._dataReader,"Transaction.update",s._key,n,r,i):eI(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Yn(e,this._firestore);return this._transaction.delete(n._key),this}}/**
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
 */class FD extends bD{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Yn(e,this._firestore),r=new Qu(this._firestore);return super.get(e).then(i=>new cr(this._firestore,r,n._key,i._document,new Di(!1,!1),n.converter))}}function UD(t,e,n){t=Wt(t,vr);const r={...LD,...n};(function(o){if(o.maxAttempts<1)throw new B(O.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r);const i=ys(t);return vD(i,s=>e(new FD(t,s)),r)}/**
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
 */function cI(t){t=Wt(t,Ce);const e=Wt(t.firestore,vr),n=ys(e);return gD(n,t._key).then(r=>dI(e,t,r))}function jD(t){t=Wt(t,Pr);const e=Wt(t.firestore,vr),n=ys(e),r=new Qu(e);return aI(t._query),yD(n,t._query).then(i=>new Gr(e,r,t,i))}function BD(t,e){const n=Wt(t.firestore,vr),r=rs(t),i=mp(t.converter,e),s=Gu(t.firestore);return hI(n,[lp(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,qe.exists(!1))]).then(()=>r)}function zD(t,...e){var c,f,p;t=Pe(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||o_(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(o_(e[r])){const m=e[r];e[r]=(c=m.next)==null?void 0:c.bind(m),e[r+1]=(f=m.error)==null?void 0:f.bind(m),e[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let s,o,l;if(t instanceof Ce)o=Wt(t.firestore,vr),l=Ou(t._key.path),s={next:m=>{e[r]&&e[r](dI(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Wt(t,Pr);o=Wt(m.firestore,vr),l=m._query;const T=new Qu(o);s={next:P=>{e[r]&&e[r](new Gr(o,T,m,P))},error:e[r+1],complete:e[r+2]},aI(t._query)}const u=ys(o);return mD(u,l,i,s)}function hI(t,e){const n=ys(t);return _D(n,e)}function dI(t,e,n){const r=n.docs.get(e._key),i=new Qu(t);return new cr(t,i,e._key,r,new Di(n.hasPendingWrites,n.fromCache),e.converter)}function $D(t){return t=Wt(t,vr),ys(t),new MD(t,e=>hI(t,e))}(function(e,n=!0){mk(cs),Ji(new ei("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new vr(new _k(r.getProvider("auth-internal")),new wk(o,r.getProvider("app-check-internal")),Fk(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),ar(i_,s_,e),ar(i_,s_,"esm2020")})();var WD="firebase",HD="12.10.0";/**
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
 */ar(WD,HD,"app");const qD={apiKey:"AIzaSyD59Zzg3H1W2Z-KbqKzrQKRFS7Gk-fR6xs",authDomain:"draftnow-84fe2.firebaseapp.com",projectId:"draftnow-84fe2",storageBucket:"draftnow-84fe2.firebasestorage.app",messagingSenderId:"196289377815",appId:"1:196289377815:web:2fbc7878b2b35e772c0e52"},fI=GE(qD),Yu=fk(fI),_n=ID(fI),pI=U.createContext(null);function GD({children:t}){const[e,n]=U.useState(null),[r,i]=U.useState(null),[s,o]=U.useState(!0);U.useEffect(()=>tP(Yu,async c=>{if(n(c),c){const f=rs(_n,"users",c.uid),p=await cI(f);i(p.exists()?p.data():null)}else i(null);o(!1)}),[]);const l=U.useMemo(()=>({user:e,profile:r,loading:s,setProfile:i}),[e,r,s]);return N.jsx(pI.Provider,{value:l,children:t})}function Ju(){const t=U.useContext(pI);if(!t)throw new Error("useAuth must be used inside AuthProvider");return t}function u_({children:t}){const{user:e,loading:n}=Ju(),r=ta();return n?N.jsx("div",{className:"loading-screen",children:"Loading your draft room..."}):e?t:N.jsx(ME,{to:"/login",replace:!0,state:{from:r}})}function gp(t){return t.trim().toLowerCase().replace(/[^a-z0-9_]/g,"")}function mI(t){return`${gp(t)}@mockdraft.local`}async function KD(t,e){const n=gp(t);if(n.length<3)throw new Error("Username must be at least 3 valid characters.");const r=rs(_n,"usernames",n);if((await cI(r)).exists())throw new Error("That username is already taken.");const s=mI(t),o=await JC(Yu,s,e),l=rs(_n,"users",o.user.uid),u=$D(_n);return u.set(l,{uid:o.user.uid,username:t.trim(),usernameLower:n,email:s,createdAt:Go()}),u.set(r,{uid:o.user.uid,username:t.trim(),usernameLower:n,email:s,createdAt:Go()}),await u.commit(),o.user}async function QD(t,e){if(!gp(t))throw new Error("Enter a valid username.");const r=mI(t);return(await XC(Yu,r,e)).user}async function YD(){await nP(Yu)}function JD(){const t=na(),e=ta(),{user:n}=Ju(),[r,i]=U.useState("login"),[s,o]=U.useState({username:"",password:""}),[l,u]=U.useState(""),[c,f]=U.useState(!1);U.useEffect(()=>{var T,P;if(n){const x=((P=(T=e.state)==null?void 0:T.from)==null?void 0:P.pathname)||"/";t(x,{replace:!0})}},[n,t,e.state]);function p(T){o(P=>({...P,[T.target.name]:T.target.value}))}async function m(T){T.preventDefault(),u(""),f(!0);try{r==="signup"?await KD(s.username,s.password):await QD(s.username,s.password),t("/",{replace:!0})}catch(P){u(P.message||"Something went wrong.")}finally{f(!1)}}return N.jsx("div",{className:"auth-page",children:N.jsxs("div",{className:"auth-card",children:[N.jsx("h1",{children:"NFL Mock Draft HQ"}),N.jsx("p",{className:"subtle",children:"Sign in to build mock drafts, track picks, and save draft boards."}),N.jsxs("form",{className:"form-grid",onSubmit:m,children:[N.jsxs("div",{className:"field",children:[N.jsx("label",{htmlFor:"username",children:"Username"}),N.jsx("input",{id:"username",name:"username",autoComplete:"username",value:s.username,onChange:p,placeholder:"Choose a GM username",required:!0})]}),N.jsxs("div",{className:"field",children:[N.jsx("label",{htmlFor:"password",children:"Password"}),N.jsx("input",{id:"password",name:"password",type:"password",autoComplete:r==="login"?"current-password":"new-password",value:s.password,onChange:p,placeholder:"Enter your password",minLength:6,required:!0})]}),l&&N.jsx("p",{className:"error-text",children:l}),N.jsx("button",{className:"primary-btn",type:"submit",disabled:c,children:c?"Working...":r==="signup"?"Create account":"Log in"})]}),N.jsxs("div",{className:"inline-row",style:{marginTop:"16px"},children:[N.jsx("span",{className:"subtle",children:r==="signup"?"Already have an account?":"Need an account?"}),N.jsx("button",{type:"button",className:"ghost-btn",onClick:()=>{i(T=>T==="login"?"signup":"login"),u("")},children:r==="signup"?"Switch to login":"Switch to sign up"})]})]})})}function gI(){const t=na(),{profile:e}=Ju();async function n(){await YD(),t("/login")}return N.jsxs("div",{className:"top-nav",children:[N.jsxs("div",{className:"brand-block",children:[N.jsx("div",{className:"brand-title",children:"NFL Mock Draft HQ"}),N.jsxs("div",{className:"brand-subtitle",children:["Signed in as ",N.jsx("strong",{children:(e==null?void 0:e.username)??"GM"})]})]}),N.jsxs("div",{className:"nav-actions",children:[N.jsx("button",{className:"ghost-btn",onClick:()=>t("/"),children:"Home"}),N.jsx("button",{className:"secondary-btn",onClick:n,children:"Log out"})]})]})}const c_={value:"ALL",label:"All Teams"},yI=[{abbr:"ARI",city:"Arizona",name:"Cardinals"},{abbr:"ATL",city:"Atlanta",name:"Falcons"},{abbr:"BAL",city:"Baltimore",name:"Ravens"},{abbr:"BUF",city:"Buffalo",name:"Bills"},{abbr:"CAR",city:"Carolina",name:"Panthers"},{abbr:"CHI",city:"Chicago",name:"Bears"},{abbr:"CIN",city:"Cincinnati",name:"Bengals"},{abbr:"CLE",city:"Cleveland",name:"Browns"},{abbr:"DAL",city:"Dallas",name:"Cowboys"},{abbr:"DEN",city:"Denver",name:"Broncos"},{abbr:"DET",city:"Detroit",name:"Lions"},{abbr:"GB",city:"Green Bay",name:"Packers"},{abbr:"HOU",city:"Houston",name:"Texans"},{abbr:"IND",city:"Indianapolis",name:"Colts"},{abbr:"JAX",city:"Jacksonville",name:"Jaguars"},{abbr:"KC",city:"Kansas City",name:"Chiefs"},{abbr:"LV",city:"Las Vegas",name:"Raiders"},{abbr:"LAC",city:"Los Angeles",name:"Chargers"},{abbr:"LAR",city:"Los Angeles",name:"Rams"},{abbr:"MIA",city:"Miami",name:"Dolphins"},{abbr:"MIN",city:"Minnesota",name:"Vikings"},{abbr:"NE",city:"New England",name:"Patriots"},{abbr:"NO",city:"New Orleans",name:"Saints"},{abbr:"NYG",city:"New York",name:"Giants"},{abbr:"NYJ",city:"New York",name:"Jets"},{abbr:"PHI",city:"Philadelphia",name:"Eagles"},{abbr:"PIT",city:"Pittsburgh",name:"Steelers"},{abbr:"SEA",city:"Seattle",name:"Seahawks"},{abbr:"SF",city:"San Francisco",name:"49ers"},{abbr:"TB",city:"Tampa Bay",name:"Buccaneers"},{abbr:"TEN",city:"Tennessee",name:"Titans"},{abbr:"WSH",city:"Washington",name:"Commanders"}],XD=[{id:"cam-ward",fullName:"Cam Ward",position:"QB",school:"Miami",overallRank:1,teamRank:1,source:"sample"},{id:"travis-hunter",fullName:"Travis Hunter",position:"WR",school:"Colorado",overallRank:2,teamRank:1,source:"sample"},{id:"abdul-carter",fullName:"Abdul Carter",position:"EDGE",school:"Penn State",overallRank:3,teamRank:1,source:"sample"},{id:"will-johnson",fullName:"Will Johnson",position:"CB",school:"Michigan",overallRank:4,teamRank:1,source:"sample"},{id:"tetairoa-mcmillan",fullName:"Tetairoa McMillan",position:"WR",school:"Arizona",overallRank:5,teamRank:2,source:"sample"},{id:"mason-graham",fullName:"Mason Graham",position:"DT",school:"Michigan",overallRank:6,teamRank:1,source:"sample"},{id:"malaki-starks",fullName:"Malaki Starks",position:"S",school:"Georgia",overallRank:7,teamRank:1,source:"sample"},{id:"emeka-egbuka",fullName:"Emeka Egbuka",position:"WR",school:"Ohio State",overallRank:8,teamRank:3,source:"sample"},{id:"mykel-williams",fullName:"Mykel Williams",position:"EDGE",school:"Georgia",overallRank:9,teamRank:2,source:"sample"},{id:"kelvin-banks-jr",fullName:"Kelvin Banks Jr.",position:"OT",school:"Texas",overallRank:10,teamRank:1,source:"sample"},{id:"ashton-jeanty",fullName:"Ashton Jeanty",position:"RB",school:"Boise State",overallRank:11,teamRank:1,source:"sample"},{id:"colston-loveland",fullName:"Colston Loveland",position:"TE",school:"Michigan",overallRank:12,teamRank:1,source:"sample"},{id:"shedeur-sanders",fullName:"Shedeur Sanders",position:"QB",school:"Colorado",overallRank:13,teamRank:2,source:"sample"},{id:"nic-scordella",fullName:"Nic Scordella",position:"C",school:"Sample State",overallRank:14,teamRank:1,source:"sample"},{id:"jalen-milroe",fullName:"Jalen Milroe",position:"QB",school:"Alabama",overallRank:15,teamRank:3,source:"sample"},{id:"harold-perkins-jr",fullName:"Harold Perkins Jr.",position:"LB",school:"LSU",overallRank:16,teamRank:1,source:"sample"},{id:"deone-walker",fullName:"Deone Walker",position:"DT",school:"Kentucky",overallRank:17,teamRank:2,source:"sample"},{id:"james-pearce-jr",fullName:"James Pearce Jr.",position:"EDGE",school:"Tennessee",overallRank:18,teamRank:3,source:"sample"},{id:"benjamin-morrison",fullName:"Benjamin Morrison",position:"CB",school:"Notre Dame",overallRank:19,teamRank:2,source:"sample"},{id:"ollie-gordon-ii",fullName:"Ollie Gordon II",position:"RB",school:"Oklahoma State",overallRank:20,teamRank:2,source:"sample"}];async function ZD({ownerUid:t,username:e,selectedTeam:n,rounds:r,year:i}){return(await BD(JT(_n,"mocks"),{ownerUid:t,username:e,selectedTeam:n,rounds:r,year:i,currentPickIndex:0,status:"active",picks:[],createdAt:Go(),updatedAt:Go()})).id}function e2(t,e){const n=rs(_n,"mocks",t);return zD(n,r=>{if(!r.exists()){e(null);return}e({id:r.id,...r.data()})})}async function t2(t){const e=JT(_n,"draftClasses",t,"players"),n=xD(e,DD("overallRank","asc")),r=await jD(n);return r.empty?XD:r.docs.map(i=>({id:i.id,...i.data()}))}async function n2(t,e,n,r=!1){const i=rs(_n,"mocks",t);await UD(_n,async s=>{const o=await s.get(i);if(!o.exists())throw new Error("Mock draft not found.");const u=o.data().picks??[];if(new Set(u.map(m=>m.playerId)).has(n.id))throw new Error("That player has already been drafted.");const f=u.length+1;if(e.overall!==f)throw new Error("Draft state is out of sync. Refresh and try again.");const p={overallPick:e.overall,round:e.round,pickInRound:e.pickInRound,team:e.team,playerId:n.id,playerName:n.fullName,position:n.position,school:n.school,overallRank:n.overallRank,isAuto:r,draftedAt:new Date().toISOString()};s.update(i,{picks:[...u,p],currentPickIndex:f,updatedAt:Go(),status:"active"})})}function r2(){const t=na(),{user:e,profile:n}=Ju(),[r,i]=U.useState("ALL"),[s,o]=U.useState("7"),[l,u]=U.useState(!1),[c,f]=U.useState(""),p=U.useMemo(()=>s==="ALL"?"1-7":`1-${s}`,[s]);async function m(){u(!0),f("");try{const T=await ZD({ownerUid:e.uid,username:(n==null?void 0:n.username)??"GM",selectedTeam:r,rounds:s==="ALL"?7:Number(s),year:"2026"});t(`/draft/${T}`)}catch(T){f(T.message||"Could not start draft.")}finally{u(!1)}}return N.jsx("div",{className:"app-shell",children:N.jsxs("div",{className:"page",children:[N.jsx(gI,{}),N.jsxs("div",{className:"home-grid",children:[N.jsxs("div",{className:"hero-panel panel",children:[N.jsx("h1",{children:"Start a new mock draft"}),N.jsx("p",{className:"subtle",children:"Choose one franchise or run the entire board. This starter saves drafts to Firestore and auto-picks for non-user teams when you draft for a single club."}),N.jsxs("div",{className:"selection-grid",style:{marginTop:"18px"},children:[N.jsxs("div",{className:"field",children:[N.jsx("label",{htmlFor:"team-select",children:"Team selection"}),N.jsxs("select",{id:"team-select",value:r,onChange:T=>i(T.target.value),children:[N.jsx("option",{value:c_.value,children:c_.label}),yI.map(T=>N.jsxs("option",{value:T.abbr,children:[T.city," ",T.name]},T.abbr))]})]}),N.jsxs("div",{className:"field",children:[N.jsx("label",{htmlFor:"round-select",children:"Round selection"}),N.jsxs("select",{id:"round-select",value:s,onChange:T=>o(T.target.value),children:[N.jsx("option",{value:"1",children:"Round 1"}),N.jsx("option",{value:"2",children:"Rounds 1-2"}),N.jsx("option",{value:"3",children:"Rounds 1-3"}),N.jsx("option",{value:"4",children:"Rounds 1-4"}),N.jsx("option",{value:"5",children:"Rounds 1-5"}),N.jsx("option",{value:"6",children:"Rounds 1-6"}),N.jsx("option",{value:"7",children:"Rounds 1-7"}),N.jsx("option",{value:"ALL",children:"All rounds"})]})]}),N.jsxs("div",{className:"inline-row",children:[N.jsx("button",{className:"primary-btn",onClick:m,disabled:l,children:l?"Starting...":"Start Draft"}),c&&N.jsx("span",{className:"error-text",children:c})]})]}),N.jsxs("div",{className:"quick-stats",children:[N.jsxs("div",{className:"stat-card",children:[N.jsx("div",{className:"stat-label",children:"Mode"}),N.jsx("div",{className:"stat-value",children:r==="ALL"?"League-wide":`${r} focus`})]}),N.jsxs("div",{className:"stat-card",children:[N.jsx("div",{className:"stat-label",children:"Rounds loaded"}),N.jsx("div",{className:"stat-value",children:p})]}),N.jsxs("div",{className:"stat-card",children:[N.jsx("div",{className:"stat-label",children:"Picks in run"}),N.jsx("div",{className:"stat-value",children:(s==="ALL"?7:Number(s))*32})]}),N.jsxs("div",{className:"stat-card",children:[N.jsx("div",{className:"stat-label",children:"Draft year"}),N.jsx("div",{className:"stat-value",children:"2026"})]})]})]}),N.jsxs("div",{className:"side-panel panel",children:[N.jsx("h2",{children:"Starter notes"}),N.jsx("p",{className:"subtle",children:"This first version is built to give you a stable shell in VSCode: auth, routing, draft board, player list, and Firestore persistence."}),N.jsxs("ul",{className:"subtle",style:{paddingLeft:"20px"},children:[N.jsx("li",{children:"Username/password style auth"}),N.jsx("li",{children:"Draft board stays visible while you pick"}),N.jsx("li",{children:"All teams or one team mode"}),N.jsx("li",{children:"Sample player fallback before live imports"}),N.jsx("li",{children:"Ready for GitHub + Firebase Hosting"})]})]})]})]})})}function i2({slot:t,pick:e}){return N.jsxs("div",{className:"pick-card",children:[N.jsxs("div",{className:"pick-header",children:[N.jsxs("span",{className:"pick-number",children:["#",t.overall]}),N.jsx("span",{className:"team-pill",children:t.team})]}),N.jsx("h4",{children:e?e.playerName:"Pick pending"}),N.jsxs("div",{className:"subtle",children:["Round ",t.round,", Pick ",t.pickInRound]}),N.jsxs("div",{className:"inline-row",style:{marginTop:"10px"},children:[N.jsx("span",{className:"position-pill",children:e?e.position:"—"}),N.jsx("span",{className:"badge",children:e?e.school:"Waiting"}),(e==null?void 0:e.isAuto)&&N.jsx("span",{className:"badge",children:"Auto"})]})]})}function s2({board:t,picks:e}){const n=new Map(e.map(r=>[r.overallPick,r]));return N.jsxs("div",{className:"panel scroll-panel",children:[N.jsx("h3",{children:"Draft Board"}),N.jsx("p",{className:"subtle",children:"Every pick stays on the board as the draft moves forward."}),N.jsx("div",{className:"pick-list",children:t.map(r=>N.jsx(i2,{slot:r,pick:n.get(r.overall)},r.overall))})]})}function o2({players:t,currentSlot:e,canUserPick:n,onPick:r,loading:i}){return N.jsxs("div",{className:"panel scroll-panel",children:[N.jsxs("div",{className:"toolbar-top",children:[N.jsxs("div",{children:[N.jsx("h3",{children:"Available Players"}),N.jsx("p",{className:"subtle",children:e?`On the clock: ${e.team} at #${e.overall}`:"Draft complete"})]}),N.jsxs("div",{className:"inline-row",children:[e&&N.jsxs("span",{className:"round-pill",children:["Round ",e.round]}),e&&N.jsx("span",{className:"team-pill",children:e.team})]})]}),i?N.jsx("div",{className:"empty-state",children:"Loading prospects..."}):t.length===0?N.jsx("div",{className:"empty-state",children:"No available players match the current filters."}):N.jsx("div",{className:"player-list",children:t.map(s=>N.jsxs("div",{className:"player-card",children:[N.jsxs("div",{className:"player-meta",children:[N.jsxs("div",{children:[N.jsx("h4",{children:s.fullName}),N.jsx("div",{className:"subtle",children:s.school})]}),N.jsxs("div",{className:"inline-row",children:[N.jsx("span",{className:"position-pill",children:s.position}),N.jsxs("span",{className:"badge",children:["Rank #",s.overallRank]})]})]}),N.jsxs("div",{className:"inline-row",style:{marginTop:"10px"},children:[N.jsxs("span",{className:"badge",children:["Team Rank #",s.teamRank??s.overallRank]}),N.jsxs("span",{className:"badge",children:["Source: ",s.source??"manual"]})]}),N.jsx("div",{className:"player-actions",children:N.jsx("button",{className:"primary-btn",disabled:!n||!e,onClick:()=>r(s),children:"Draft Player"})})]},s.id))})]})}const a2=yI.map(t=>t.abbr);function l2(t=7){const e=[];let n=1;for(let r=1;r<=t;r+=1)a2.forEach((i,s)=>{e.push({overall:n,round:r,pickInRound:s+1,team:i}),n+=1});return e}function u2(){var R;const{mockId:t}=JA(),e=na(),[n,r]=U.useState(null),[i,s]=U.useState([]),[o,l]=U.useState(!0),[u,c]=U.useState("ALL"),[f,p]=U.useState(""),[m,T]=U.useState(!1),[P,x]=U.useState(!1),[V,I]=U.useState("");U.useEffect(()=>e2(t,v=>{if(!v){e("/");return}r(v)}),[t,e]),U.useEffect(()=>{let C=!1;async function v(){l(!0);try{const ue=await t2("2026");C||s(ue)}catch(ue){C||I(ue.message||"Failed to load players.")}finally{C||l(!1)}}return v(),()=>{C=!0}},[]);const _=U.useMemo(()=>n?l2(n.rounds):[],[n]),A=U.useMemo(()=>new Set(((n==null?void 0:n.picks)??[]).map(C=>C.playerId)),[n]),L=U.useMemo(()=>{const C=f.trim().toLowerCase();return i.filter(v=>!A.has(v.id)).filter(v=>u==="ALL"||v.position===u).filter(v=>C?v.fullName.toLowerCase().includes(C)||v.school.toLowerCase().includes(C)||v.position.toLowerCase().includes(C):!0).sort((v,ue)=>v.overallRank-ue.overallRank)},[i,A,u,f]),b=_[(n==null?void 0:n.currentPickIndex)??0]??null,z=U.useMemo(()=>!n||!b?!1:n.selectedTeam==="ALL"||n.selectedTeam===b.team,[n,b]);async function E(C,{isAuto:v=!1}={}){if(!(!n||!b)){T(!0),I("");try{await n2(t,b,C,v)}catch(ue){I(ue.message||"Could not save pick.")}finally{T(!1)}}}if(U.useEffect(()=>{if(!n||!b||n.selectedTeam==="ALL"||b.team===n.selectedTeam||m||P)return;const C=i.filter(yt=>!A.has(yt.id)).sort((yt,kr)=>yt.overallRank-kr.overallRank)[0];if(!C)return;let v=!1;async function ue(){x(!0);try{v||await E(C,{isAuto:!0})}finally{v||x(!1)}}return ue(),()=>{v=!0}},[n,b,i,A,m,P]),!n)return N.jsx("div",{className:"loading-screen",children:"Loading draft..."});const y=((R=n.picks)==null?void 0:R.length)??0,w=_.length,S=["ALL",...new Set(i.map(C=>C.position))].sort();return N.jsx("div",{className:"app-shell",children:N.jsxs("div",{className:"page",children:[N.jsx(gI,{}),N.jsx("div",{className:"panel",style:{marginBottom:"18px"},children:N.jsxs("div",{className:"draft-summary-grid",children:[N.jsxs("div",{children:[N.jsx("h2",{style:{marginBottom:"8px"},children:"Live Mock Draft"}),N.jsx("div",{className:"subtle",children:n.selectedTeam==="ALL"?"You are controlling every franchise.":`You are drafting for ${n.selectedTeam}. Other teams auto-pick BPA.`})]}),N.jsxs("div",{className:"inline-row",children:[N.jsxs("span",{className:"badge",children:["Completed: ",y]}),N.jsxs("span",{className:"badge",children:["Remaining: ",Math.max(w-y,0)]}),N.jsxs("span",{className:"badge",children:["Rounds: ",n.rounds]})]})]})}),N.jsxs("div",{className:"draft-layout",children:[N.jsx(s2,{board:_,picks:n.picks??[]}),N.jsxs("div",{children:[N.jsx("div",{className:"panel",style:{marginBottom:"18px"},children:N.jsxs("div",{className:"toolbar",children:[N.jsx("div",{className:"toolbar-top",children:N.jsx("input",{className:"search-input",placeholder:"Search player, school, or position",value:f,onChange:C=>p(C.target.value)})}),N.jsxs("div",{className:"filter-row",children:[N.jsxs("div",{className:"field",style:{minWidth:"200px",margin:0},children:[N.jsx("label",{htmlFor:"position-filter",children:"Position"}),N.jsx("select",{id:"position-filter",value:u,onChange:C=>c(C.target.value),children:S.map(C=>N.jsx("option",{value:C,children:C==="ALL"?"All positions":C},C))})]}),N.jsxs("div",{className:"inline-row",children:[m&&N.jsx("span",{className:"subtle",children:"Saving pick..."}),P&&N.jsx("span",{className:"subtle",children:"Auto-picking for CPU team..."})]})]}),V&&N.jsx("div",{className:"error-text",children:V})]})}),N.jsx(o2,{players:L,currentSlot:b,canUserPick:z&&!m&&!P,onPick:E,loading:o})]})]})]})})}function c2(){return N.jsxs(f1,{children:[N.jsx(Ks,{path:"/login",element:N.jsx(JD,{})}),N.jsx(Ks,{path:"/",element:N.jsx(u_,{children:N.jsx(r2,{})})}),N.jsx(Ks,{path:"/draft/:mockId",element:N.jsx(u_,{children:N.jsx(u2,{})})}),N.jsx(Ks,{path:"*",element:N.jsx(ME,{to:"/",replace:!0})})]})}rh.createRoot(document.getElementById("root")).render(N.jsx(w_.StrictMode,{children:N.jsx(g1,{children:N.jsx(GD,{children:N.jsx(c2,{})})})}));

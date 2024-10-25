"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[547],{85859:function(e,t,n){n.d(t,{Ry:function(){return l}});var r=new WeakMap,o=new WeakMap,u={},i=0,a=function(e){return e&&(e.host||a(e.parentNode))},c=function(e,t,n,c){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=a(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});u[n]||(u[n]=new WeakMap);var s=u[n],d=[],f=new Set,v=new Set(l),p=function(e){!e||f.has(e)||(f.add(e),p(e.parentNode))};l.forEach(p);var m=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))m(e);else{var t=e.getAttribute(c),u=null!==t&&"false"!==t,i=(r.get(e)||0)+1,a=(s.get(e)||0)+1;r.set(e,i),s.set(e,a),d.push(e),1===i&&u&&o.set(e,!0),1===a&&e.setAttribute(n,"true"),u||e.setAttribute(c,"true")}})};return m(t),f.clear(),i++,function(){d.forEach(function(e){var t=r.get(e)-1,u=s.get(e)-1;r.set(e,t),s.set(e,u),t||(o.has(e)||e.removeAttribute(c),o.delete(e)),u||e.removeAttribute(n)}),--i||(r=new WeakMap,r=new WeakMap,o=new WeakMap,u={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),c(r,o,n,"aria-hidden")):function(){return null}}},62898:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(2265),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=(e,t)=>{let n=(0,r.forwardRef)(({color:n="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:c,children:l,...s},d)=>(0,r.createElement)("svg",{ref:d,...o,width:i,height:i,stroke:n,strokeWidth:c?24*Number(a)/Number(i):a,className:`lucide lucide-${u(e)}`,...s},[...t.map(([e,t])=>(0,r.createElement)(e,t)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${e}`,n}},55322:function(e,t,n){n.d(t,{Av:function(){return i},pF:function(){return r},xv:function(){return u},zi:function(){return o}});var r="right-scroll-bar-position",o="width-before-scroll-bar",u="with-scroll-bars-hidden",i="--removed-body-scroll-bar-size"},92776:function(e,t,n){n.d(t,{jp:function(){return f}});var r=n(2265),o=n(98662),u=n(55322),i={left:0,top:0,right:0,gap:0},a=function(e){return parseInt(e||"",10)||0},c=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[a(n),a(r),a(o)]},l=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return i;var t=c(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},s=(0,o.Ws)(),d=function(e,t,n,r){var o=e.left,i=e.top,a=e.right,c=e.gap;return void 0===n&&(n="margin"),"\n  .".concat(u.xv," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(c,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(u.pF," {\n    right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(u.zi," {\n    margin-right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(u.pF," .").concat(u.pF," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(u.zi," .").concat(u.zi," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat(u.Av,": ").concat(c,"px;\n  }\n")},f=function(e){var t=e.noRelative,n=e.noImportant,o=e.gapMode,u=void 0===o?"margin":o,i=r.useMemo(function(){return l(u)},[u]);return r.createElement(s,{styles:d(i,!t,u,n?"":"!important")})}},32098:function(e,t,n){n.d(t,{Z:function(){return P}});var r=n(50044),o=n(2265),u=n(55322),i=n(55835),a=(0,n(18427)._)(),c=function(){},l=o.forwardRef(function(e,t){var n=o.useRef(null),u=o.useState({onScrollCapture:c,onWheelCapture:c,onTouchMoveCapture:c}),l=u[0],s=u[1],d=e.forwardProps,f=e.children,v=e.className,p=e.removeScrollBar,m=e.enabled,h=e.shards,y=e.sideCar,g=e.noIsolation,E=e.inert,b=e.allowPinchZoom,w=e.as,C=void 0===w?"div":w,N=(0,r._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),T=(0,i.q)([n,t]),S=(0,r.pi)((0,r.pi)({},N),l);return o.createElement(o.Fragment,null,m&&o.createElement(y,{sideCar:a,removeScrollBar:p,shards:h,noIsolation:g,inert:E,setCallbacks:s,allowPinchZoom:!!b,lockRef:n}),d?o.cloneElement(o.Children.only(f),(0,r.pi)((0,r.pi)({},S),{ref:T})):o.createElement(C,(0,r.pi)({},S,{className:v,ref:T}),f))});l.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},l.classNames={fullWidth:u.zi,zeroRight:u.pF};var s=n(26898),d=n(92776),f=n(98662),v=!1;if("undefined"!=typeof window)try{var p=Object.defineProperty({},"passive",{get:function(){return v=!0,!0}});window.addEventListener("test",p,p),window.removeEventListener("test",p,p)}catch(e){v=!1}var m=!!v&&{passive:!1},h=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},y=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),g(e,n)){var r=E(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},g=function(e,t){return"v"===e?h(t,"overflowY"):h(t,"overflowX")},E=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},b=function(e,t,n,r,o){var u,i=(u=window.getComputedStyle(t).direction,"h"===e&&"rtl"===u?-1:1),a=i*r,c=n.target,l=t.contains(c),s=!1,d=a>0,f=0,v=0;do{var p=E(e,c),m=p[0],h=p[1]-p[2]-i*m;(m||h)&&g(e,c)&&(f+=h,v+=m),c=c.parentNode}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return d&&(o&&0===f||!o&&a>f)?s=!0:!d&&(o&&0===v||!o&&-a>v)&&(s=!0),s},w=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},C=function(e){return[e.deltaX,e.deltaY]},N=function(e){return e&&"current"in e?e.current:e},T=0,S=[],L=(0,s.L)(a,function(e){var t=o.useRef([]),n=o.useRef([0,0]),u=o.useRef(),i=o.useState(T++)[0],a=o.useState(function(){return(0,f.Ws)()})[0],c=o.useRef(e);o.useEffect(function(){c.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var t=(0,r.ev)([e.lockRef.current],(e.shards||[]).map(N),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var l=o.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!c.current.allowPinchZoom;var r,o=w(e),i=n.current,a="deltaX"in e?e.deltaX:i[0]-o[0],l="deltaY"in e?e.deltaY:i[1]-o[1],s=e.target,d=Math.abs(a)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=y(d,s);if(!f)return!0;if(f?r=d:(r="v"===d?"h":"v",f=y(d,s)),!f)return!1;if(!u.current&&"changedTouches"in e&&(a||l)&&(u.current=r),!r)return!0;var v=u.current||r;return b(v,t,e,"h"===v?a:l,!0)},[]),s=o.useCallback(function(e){if(S.length&&S[S.length-1]===a){var n="deltaY"in e?C(e):w(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(c.current.shards||[]).map(N).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!c.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),v=o.useCallback(function(e,n,r,o){var u={name:e,delta:n,target:r,should:o};t.current.push(u),setTimeout(function(){t.current=t.current.filter(function(e){return e!==u})},1)},[]),p=o.useCallback(function(e){n.current=w(e),u.current=void 0},[]),h=o.useCallback(function(t){v(t.type,C(t),t.target,l(t,e.lockRef.current))},[]),g=o.useCallback(function(t){v(t.type,w(t),t.target,l(t,e.lockRef.current))},[]);o.useEffect(function(){return S.push(a),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:g}),document.addEventListener("wheel",s,m),document.addEventListener("touchmove",s,m),document.addEventListener("touchstart",p,m),function(){S=S.filter(function(e){return e!==a}),document.removeEventListener("wheel",s,m),document.removeEventListener("touchmove",s,m),document.removeEventListener("touchstart",p,m)}},[]);var E=e.removeScrollBar,L=e.inert;return o.createElement(o.Fragment,null,L?o.createElement(a,{styles:"\n  .block-interactivity-".concat(i," {pointer-events: none;}\n  .allow-interactivity-").concat(i," {pointer-events: all;}\n")}):null,E?o.createElement(d.jp,{gapMode:"margin"}):null)}),k=o.forwardRef(function(e,t){return o.createElement(l,(0,r.pi)({},e,{ref:t,sideCar:L}))});k.classNames=l.classNames;var P=k},98662:function(e,t,n){n.d(t,{Ws:function(){return a}});var r,o=n(2265),u=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}())){var u,i;(u=t).styleSheet?u.styleSheet.cssText=o:u.appendChild(document.createTextNode(o)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},i=function(){var e=u();return function(t,n){o.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},a=function(){var e=i();return function(t){return e(t.styles,t.dynamic),null}}},55835:function(e,t,n){n.d(t,{q:function(){return o}});var r=n(2265);function o(e,t){var n,o,u;return n=t||null,o=function(t){return e.forEach(function(e){return"function"==typeof e?e(t):e&&(e.current=t),e})},(u=(0,r.useState)(function(){return{value:n,callback:o,facade:{get current(){return u.value},set current(value){var e=u.value;e!==value&&(u.value=value,u.callback(value,e))}}}})[0]).callback=o,u.facade}},26898:function(e,t,n){n.d(t,{L:function(){return i}});var r=n(50044),o=n(2265),u=function(e){var t=e.sideCar,n=(0,r._T)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var u=t.read();if(!u)throw Error("Sidecar medium not found");return o.createElement(u,(0,r.pi)({},n))};function i(e,t){return e.useMedium(t),u}u.isSideCarExport=!0},18427:function(e,t,n){n.d(t,{_:function(){return u}});var r=n(50044);function o(e){return e}function u(e){void 0===e&&(e={});var t,n,u,i=(void 0===t&&(t=o),n=[],u=!1,{read:function(){if(u)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var r=t(e,u);return n.push(r),function(){n=n.filter(function(e){return e!==r})}},assignSyncMedium:function(e){for(u=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){u=!0;var t=[];if(n.length){var r=n;n=[],r.forEach(e),t=n}var o=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(o)};i(),n={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),n}}}});return i.options=(0,r.pi)({async:!0,ssr:!1},e),i}},85744:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}},56989:function(e,t,n){n.d(t,{b:function(){return u},k:function(){return o}});var r=n(2265);function o(e,t){let n=(0,r.createContext)(t);function o(e){let{children:t,...o}=e,u=(0,r.useMemo)(()=>o,Object.values(o));return(0,r.createElement)(n.Provider,{value:u},t)}return o.displayName=e+"Provider",[o,function(o){let u=(0,r.useContext)(n);if(u)return u;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function u(e,t=[]){let n=[],o=()=>{let t=n.map(e=>(0,r.createContext)(e));return function(n){let o=(null==n?void 0:n[e])||t;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return o.scopeName=e,[function(t,o){let u=(0,r.createContext)(o),i=n.length;function a(t){let{scope:n,children:o,...a}=t,c=(null==n?void 0:n[e][i])||u,l=(0,r.useMemo)(()=>a,Object.values(a));return(0,r.createElement)(c.Provider,{value:l},o)}return n=[...n,o],a.displayName=t+"Provider",[a,function(n,a){let c=(null==a?void 0:a[e][i])||u,l=(0,r.useContext)(c);if(l)return l;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e),u=o[`__scope${r}`];return{...t,...u}},{});return(0,r.useMemo)(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(o,...t)]}},79249:function(e,t,n){let r;n.d(t,{XB:function(){return f}});var o=n(13428),u=n(2265),i=n(85744),a=n(9381),c=n(42210),l=n(16459);let s="dismissableLayer.update",d=(0,u.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=(0,u.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:m,onPointerDownOutside:h,onFocusOutside:y,onInteractOutside:g,onDismiss:E,...b}=e,w=(0,u.useContext)(d),[C,N]=(0,u.useState)(null),T=null!==(n=null==C?void 0:C.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,S]=(0,u.useState)({}),L=(0,c.e)(t,e=>N(e)),k=Array.from(w.layers),[P]=[...w.layersWithOutsidePointerEventsDisabled].slice(-1),O=k.indexOf(P),x=C?k.indexOf(C):-1,M=w.layersWithOutsidePointerEventsDisabled.size>0,A=x>=O,R=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,l.W)(e),r=(0,u.useRef)(!1),o=(0,u.useRef)(()=>{});return(0,u.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function u(){p("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=u,t.addEventListener("click",o.current,{once:!0})):u()}r.current=!1},u=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(u),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...w.branches].some(e=>e.contains(t));!A||n||(null==h||h(e),null==g||g(e),e.defaultPrevented||null==E||E())},T),W=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,l.W)(e),r=(0,u.useRef)(!1);return(0,u.useEffect)(()=>{let e=e=>{e.target&&!r.current&&p("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target,n=[...w.branches].some(e=>e.contains(t));n||(null==y||y(e),null==g||g(e),e.defaultPrevented||null==E||E())},T);return!function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,l.W)(e);(0,u.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{let t=x===w.layers.size-1;t&&(null==m||m(e),!e.defaultPrevented&&E&&(e.preventDefault(),E()))},T),(0,u.useEffect)(()=>{if(C)return f&&(0===w.layersWithOutsidePointerEventsDisabled.size&&(r=T.body.style.pointerEvents,T.body.style.pointerEvents="none"),w.layersWithOutsidePointerEventsDisabled.add(C)),w.layers.add(C),v(),()=>{f&&1===w.layersWithOutsidePointerEventsDisabled.size&&(T.body.style.pointerEvents=r)}},[C,T,f,w]),(0,u.useEffect)(()=>()=>{C&&(w.layers.delete(C),w.layersWithOutsidePointerEventsDisabled.delete(C),v())},[C,w]),(0,u.useEffect)(()=>{let e=()=>S({});return document.addEventListener(s,e),()=>document.removeEventListener(s,e)},[]),(0,u.createElement)(a.WV.div,(0,o.Z)({},b,{ref:L,style:{pointerEvents:M?A?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.M)(e.onFocusCapture,W.onFocusCapture),onBlurCapture:(0,i.M)(e.onBlurCapture,W.onBlurCapture),onPointerDownCapture:(0,i.M)(e.onPointerDownCapture,R.onPointerDownCapture)}))});function v(){let e=new CustomEvent(s);document.dispatchEvent(e)}function p(e,t,n,{discrete:r}){let o=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,a.jH)(o,u):o.dispatchEvent(u)}},31244:function(e,t,n){n.d(t,{EW:function(){return u}});var r=n(2265);let o=0;function u(){(0,r.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:i()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:i()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function i(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},52759:function(e,t,n){let r;n.d(t,{M:function(){return f}});var o=n(13428),u=n(2265),i=n(42210),a=n(9381),c=n(16459);let l="focusScope.autoFocusOnMount",s="focusScope.autoFocusOnUnmount",d={bubbles:!1,cancelable:!0},f=(0,u.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:y,...g}=e,[E,b]=(0,u.useState)(null),w=(0,c.W)(f),C=(0,c.W)(y),N=(0,u.useRef)(null),T=(0,i.e)(t,e=>b(e)),S=(0,u.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,u.useEffect)(()=>{if(r){function e(e){if(S.paused||!E)return;let t=e.target;E.contains(t)?N.current=t:m(N.current,{select:!0})}function t(e){if(S.paused||!E)return;let t=e.relatedTarget;null===t||E.contains(t)||m(N.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){let t=document.activeElement;for(let n of e)n.removedNodes.length>0&&!(null!=E&&E.contains(t))&&m(E)});return E&&n.observe(E,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,E,S.paused]),(0,u.useEffect)(()=>{if(E){h.add(S);let e=document.activeElement,t=E.contains(e);if(!t){let t=new CustomEvent(l,d);E.addEventListener(l,w),E.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(m(r,{select:t}),document.activeElement!==n)return}(v(E).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&m(E))}return()=>{E.removeEventListener(l,w),setTimeout(()=>{let t=new CustomEvent(s,d);E.addEventListener(s,C),E.dispatchEvent(t),t.defaultPrevented||m(null!=e?e:document.body,{select:!0}),E.removeEventListener(s,C),h.remove(S)},0)}}},[E,w,C,S]);let L=(0,u.useCallback)(e=>{if(!n&&!r||S.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,u]=function(e){let t=v(e),n=p(t,e),r=p(t.reverse(),e);return[n,r]}(t),i=r&&u;i?e.shiftKey||o!==u?e.shiftKey&&o===r&&(e.preventDefault(),n&&m(u,{select:!0})):(e.preventDefault(),n&&m(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,S.paused]);return(0,u.createElement)(a.WV.div,(0,o.Z)({tabIndex:-1},g,{ref:T,onKeyDown:L}))});function v(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function p(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function m(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let h=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=y(r,e)).unshift(e)},remove(e){var t;null===(t=(r=y(r,e))[0])||void 0===t||t.resume()}});function y(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},20966:function(e,t,n){n.d(t,{M:function(){return c}});var r,o=n(2265),u=n(51030);let i=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),a=0;function c(e){let[t,n]=o.useState(i());return(0,u.b)(()=>{e||n(e=>null!=e?e:String(a++))},[e]),e||(t?`radix-${t}`:"")}},52730:function(e,t,n){n.d(t,{h:function(){return a}});var r=n(13428),o=n(2265),u=n(54887),i=n(9381);let a=(0,o.forwardRef)((e,t)=>{var n;let{container:a=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...c}=e;return a?u.createPortal((0,o.createElement)(i.WV.div,(0,r.Z)({},c,{ref:t})),a):null})},85606:function(e,t,n){n.d(t,{z:function(){return a}});var r=n(2265),o=n(54887),u=n(42210),i=n(51030);let a=e=>{let{present:t,children:n}=e,a=function(e){var t;let[n,u]=(0,r.useState)(),a=(0,r.useRef)({}),l=(0,r.useRef)(e),s=(0,r.useRef)("none"),d=e?"mounted":"unmounted",[f,v]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},d));return(0,r.useEffect)(()=>{let e=c(a.current);s.current="mounted"===f?e:"none"},[f]),(0,i.b)(()=>{let t=a.current,n=l.current,r=n!==e;if(r){let r=s.current,o=c(t);e?v("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?v("UNMOUNT"):n&&r!==o?v("ANIMATION_OUT"):v("UNMOUNT"),l.current=e}},[e,v]),(0,i.b)(()=>{if(n){let e=e=>{let t=c(a.current),r=t.includes(e.animationName);e.target===n&&r&&(0,o.flushSync)(()=>v("ANIMATION_END"))},t=e=>{e.target===n&&(s.current=c(a.current))};return n.addEventListener("animationstart",t),n.addEventListener("animationcancel",e),n.addEventListener("animationend",e),()=>{n.removeEventListener("animationstart",t),n.removeEventListener("animationcancel",e),n.removeEventListener("animationend",e)}}v("ANIMATION_END")},[n,v]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:(0,r.useCallback)(e=>{e&&(a.current=getComputedStyle(e)),u(e)},[])}}(t),l="function"==typeof n?n({present:a.isPresent}):r.Children.only(n),s=(0,u.e)(a.ref,l.ref),d="function"==typeof n;return d||a.isPresent?(0,r.cloneElement)(l,{ref:s}):null};function c(e){return(null==e?void 0:e.animationName)||"none"}a.displayName="Presence"},16459:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(2265);function o(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),(0,r.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}},73763:function(e,t,n){n.d(t,{T:function(){return u}});var r=n(2265),o=n(16459);function u({prop:e,defaultProp:t,onChange:n=()=>{}}){let[u,i]=function({defaultProp:e,onChange:t}){let n=(0,r.useState)(e),[u]=n,i=(0,r.useRef)(u),a=(0,o.W)(t);return(0,r.useEffect)(()=>{i.current!==u&&(a(u),i.current=u)},[u,i,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,c=a?e:u,l=(0,o.W)(n),s=(0,r.useCallback)(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else i(t)},[a,e,i,l]);return[c,s]}},51030:function(e,t,n){n.d(t,{b:function(){return o}});var r=n(2265);let o=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}},50044:function(e,t,n){n.d(t,{CR:function(){return a},Jh:function(){return i},_T:function(){return o},ev:function(){return c},mG:function(){return u},pi:function(){return r}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function u(e,t,n,r){return new(n||(n=Promise))(function(o,u){function i(e){try{c(r.next(e))}catch(e){u(e)}}function a(e){try{c(r.throw(e))}catch(e){u(e)}}function c(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(i,a)}c((r=r.apply(e,t||[])).next())})}function i(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(a){return function(c){return function(a){if(n)throw TypeError("Generator is already executing.");for(;u&&(u=0,a[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}function a(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,u=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=u.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=u.return)&&n.call(u)}finally{if(o)throw o.error}}return i}function c(e,t,n){if(n||2==arguments.length)for(var r,o=0,u=t.length;o<u;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError}}]);
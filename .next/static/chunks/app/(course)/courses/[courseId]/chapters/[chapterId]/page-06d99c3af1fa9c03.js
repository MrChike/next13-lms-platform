(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[632],{62898:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(2265),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=(e,t)=>{let r=(0,n.forwardRef)(({color:r="currentColor",size:s=24,strokeWidth:l=2,absoluteStrokeWidth:u,children:a,...c},d)=>(0,n.createElement)("svg",{ref:d,...o,width:s,height:s,stroke:r,strokeWidth:u?24*Number(l)/Number(s):l,className:`lucide lucide-${i(e)}`,...c},[...t.map(([e,t])=>(0,n.createElement)(e,t)),...(Array.isArray(a)?a:[a])||[]]));return r.displayName=`${e}`,r}},13008:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(62898);let o=(0,n.Z)("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]])},86264:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(62898);let o=(0,n.Z)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},5589:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(62898);let o=(0,n.Z)("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]])},88249:function(e,t,r){Promise.resolve().then(r.t.bind(r,56656,23)),Promise.resolve().then(r.t.bind(r,26208,23)),Promise.resolve().then(r.t.bind(r,8169,23)),Promise.resolve().then(r.t.bind(r,33699,23)),Promise.resolve().then(r.bind(r,63530)),Promise.resolve().then(r.bind(r,61726)),Promise.resolve().then(r.bind(r,11507)),Promise.resolve().then(r.bind(r,67303)),Promise.resolve().then(r.bind(r,81835)),Promise.resolve().then(r.bind(r,61958)),Promise.resolve().then(r.bind(r,26937)),Promise.resolve().then(r.bind(r,84570)),Promise.resolve().then(r.bind(r,61156))},26937:function(e,t,r){"use strict";r.r(t),r.d(t,{CourseEnrollButton:function(){return a}});var n=r(57437),o=r(29222),i=r(2265),s=r(5925),l=r(3762),u=r(36840);let a=e=>{let{price:t,courseId:r}=e,[a,c]=(0,i.useState)(!1),d=async()=>{try{c(!0);let e=await o.Z.post("/api/courses/".concat(r,"/checkout"));window.location.assign(e.data.url)}catch(e){s.ZP.error("Something went wrong")}finally{c(!1)}};return(0,n.jsxs)(l.z,{onClick:d,disabled:a,size:"sm",className:"w-full md:w-auto",children:["Enroll for ",(0,u.T)(t)]})}},84570:function(e,t,r){"use strict";r.r(t),r.d(t,{CourseProgressButton:function(){return h}});var n=r(57437),o=r(29222),i=r(62898);let s=(0,i.Z)("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);var l=r(13008),u=r(24033),a=r(2265),c=r(5925),d=r(3762),f=r(57645);let h=e=>{let{chapterId:t,courseId:r,isCompleted:i,nextChapterId:h}=e,v=(0,u.useRouter)(),m=(0,f.m)(),[p,b]=(0,a.useState)(!1),y=async()=>{try{b(!0),await o.Z.put("/api/courses/".concat(r,"/chapters/").concat(t,"/progress"),{isCompleted:!i}),i||h||m.onOpen(),!i&&h&&v.push("/courses/".concat(r,"/chapters/").concat(h)),c.ZP.success("Progress updated"),v.refresh()}catch(e){c.ZP.error("Something went wrong")}finally{b(!1)}},g=i?s:l.Z;return(0,n.jsxs)(d.z,{onClick:y,disabled:p,type:"button",variant:i?"outline":"success",className:"w-full md:w-auto",children:[i?"Not completed":"Mark as complete",(0,n.jsx)(g,{className:"h-4 w-4 ml-2"})]})}},61958:function(e,t,r){"use strict";r.r(t),r.d(t,{VideoPlayer:function(){return h}});var n=r(57437),o=r(29222),i=r(358),s=r(2265),l=r(5925),u=r(24033),a=r(86264),c=r(5589),d=r(70306),f=r(57645);let h=e=>{let{playbackId:t,courseId:r,chapterId:h,nextChapterId:v,isLocked:m,completeOnEnd:p,title:b}=e,[y,g]=(0,s.useState)(!1),w=(0,u.useRouter)(),x=(0,f.m)(),E=async()=>{try{p&&(await o.Z.put("/api/courses/".concat(r,"/chapters/").concat(h,"/progress"),{isCompleted:!0}),v||x.onOpen(),l.Am.success("Progress updated"),w.refresh(),v&&w.push("/courses/".concat(r,"/chapters/").concat(v)))}catch(e){l.Am.error("Something went wrong")}};return(0,n.jsxs)("div",{className:"relative aspect-video",children:[!y&&!m&&(0,n.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-slate-800",children:(0,n.jsx)(a.Z,{className:"h-8 w-8 animate-spin text-secondary"})}),m&&(0,n.jsxs)("div",{className:"absolute inset-0 flex items-center justify-center bg-slate-800 flex-col gap-y-2 text-secondary",children:[(0,n.jsx)(c.Z,{className:"h-8 w-8"}),(0,n.jsx)("p",{className:"text-sm",children:"This chapter is locked"})]}),!m&&(0,n.jsx)(i.Z,{title:b,className:(0,d.cn)(!y&&"hidden"),onCanPlay:()=>g(!0),onEnded:E,autoPlay:!0,playbackId:t})]})}},81835:function(e,t,r){"use strict";r.r(t),r.d(t,{Preview:function(){return l}});var n=r(57437),o=r(98864),i=r.n(o),s=r(2265);r(64659);let l=e=>{let{value:t}=e,o=(0,s.useMemo)(()=>i()(()=>Promise.all([r.e(70),r.e(77),r.e(233)]).then(r.t.bind(r,6233,23)),{loadableGenerated:{webpack:()=>[6233]},ssr:!1}),[]);return(0,n.jsx)(o,{theme:"bubble",value:t,readOnly:!0})}},3762:function(e,t,r){"use strict";r.d(t,{d:function(){return u},z:function(){return a}});var n=r(57437),o=r(2265),i=r(67256),s=r(96061),l=r(70306);let u=(0,s.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",success:"bg-emerald-600 text-white hover:bg-emerald-600/80"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),a=o.forwardRef((e,t)=>{let{className:r,variant:o,size:s,asChild:a=!1,...c}=e,d=a?i.g7:"button";return(0,n.jsx)(d,{className:(0,l.cn)(u({variant:o,size:s,className:r})),ref:t,...c})});a.displayName="Button"},61156:function(e,t,r){"use strict";r.r(t),r.d(t,{Separator:function(){return f}});var n=r(57437),o=r(2265),i=r(13428),s=r(9381);let l="horizontal",u=["horizontal","vertical"],a=(0,o.forwardRef)((e,t)=>{let{decorative:r,orientation:n=l,...u}=e,a=c(n)?n:l;return(0,o.createElement)(s.WV.div,(0,i.Z)({"data-orientation":a},r?{role:"none"}:{"aria-orientation":"vertical"===a?a:void 0,role:"separator"},u,{ref:t}))});function c(e){return u.includes(e)}a.propTypes={orientation(e,t,r){let n=e[t],o=String(n);return n&&!c(n)?Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${r}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${l}\`.`):null}};var d=r(70306);let f=o.forwardRef((e,t)=>{let{className:r,orientation:o="horizontal",decorative:i=!0,...s}=e;return(0,n.jsx)(a,{ref:t,decorative:i,orientation:o,className:(0,d.cn)("shrink-0 bg-border","horizontal"===o?"h-[1px] w-full":"h-full w-[1px]",r),...s})});f.displayName=a.displayName},57645:function(e,t,r){"use strict";r.d(t,{m:function(){return o}});var n=r(94660);let o=(0,n.Ue)(e=>({isOpen:!1,onOpen:()=>e({isOpen:!0}),onClose:()=>e({isOpen:!1})}))},36840:function(e,t,r){"use strict";r.d(t,{T:function(){return n}});let n=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)},70306:function(e,t,r){"use strict";r.d(t,{cn:function(){return i}});var n=r(57042),o=r(23986);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.m)((0,n.W)(t))}},78704:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),o=r(26272),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=o.useSyncExternalStore,l=n.useRef,u=n.useEffect,a=n.useMemo,c=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var d=l(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=a(function(){function e(e){if(!u){if(u=!0,s=e,e=n(e),void 0!==o&&f.hasValue){var t=f.value;if(o(t,e))return l=t}return l=e}if(t=l,i(s,e))return t;var r=n(e);return void 0!==o&&o(t,r)?t:(s=e,l=r)}var s,l,u=!1,a=void 0===r?null:r;return[function(){return e(t())},null===a?void 0:function(){return e(a())}]},[t,r,n,o]);var h=s(e,d[0],d[1]);return u(function(){f.hasValue=!0,f.value=h},[h]),c(h),h}},65401:function(e,t,r){"use strict";e.exports=r(78704)},13428:function(e,t,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},42210:function(e,t,r){"use strict";r.d(t,{F:function(){return o},e:function(){return i}});var n=r(2265);function o(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function i(...e){return(0,n.useCallback)(o(...e),e)}},9381:function(e,t,r){"use strict";r.d(t,{WV:function(){return l},jH:function(){return u}});var n=r(13428),o=r(2265),i=r(54887),s=r(67256);let l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,o.forwardRef)((e,r)=>{let{asChild:i,...l}=e,u=i?s.g7:t;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(u,(0,n.Z)({},l,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function u(e,t){e&&(0,i.flushSync)(()=>e.dispatchEvent(t))}},67256:function(e,t,r){"use strict";r.d(t,{A4:function(){return u},g7:function(){return s}});var n=r(13428),o=r(2265),i=r(42210);let s=(0,o.forwardRef)((e,t)=>{let{children:r,...i}=e,s=o.Children.toArray(r),u=s.find(a);if(u){let e=u.props.children,r=s.map(t=>t!==u?t:o.Children.count(e)>1?o.Children.only(null):(0,o.isValidElement)(e)?e.props.children:null);return(0,o.createElement)(l,(0,n.Z)({},i,{ref:t}),(0,o.isValidElement)(e)?(0,o.cloneElement)(e,void 0,r):null)}return(0,o.createElement)(l,(0,n.Z)({},i,{ref:t}),r)});s.displayName="Slot";let l=(0,o.forwardRef)((e,t)=>{let{children:r,...n}=e;return(0,o.isValidElement)(r)?(0,o.cloneElement)(r,{...function(e,t){let r={...t};for(let n in t){let o=e[n],i=t[n],s=/^on[A-Z]/.test(n);s?o&&i?r[n]=(...e)=>{i(...e),o(...e)}:o&&(r[n]=o):"style"===n?r[n]={...o,...i}:"className"===n&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:t?(0,i.F)(t,r.ref):r.ref}):o.Children.count(r)>1?o.Children.only(null):null});l.displayName="SlotClone";let u=({children:e})=>(0,o.createElement)(o.Fragment,null,e);function a(e){return(0,o.isValidElement)(e)&&e.type===u}},96061:function(e,t,r){"use strict";r.d(t,{j:function(){return s}});var n=r(57042);let o=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=n.W,s=(e,t)=>r=>{var n;if((null==t?void 0:t.variants)==null)return i(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:s,defaultVariants:l}=t,u=Object.keys(s).map(e=>{let t=null==r?void 0:r[e],n=null==l?void 0:l[e];if(null===t)return null;let i=o(t)||o(n);return s[e][i]}),a=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{}),c=null==t?void 0:null===(n=t.compoundVariants)||void 0===n?void 0:n.reduce((e,t)=>{let{class:r,className:n,...o}=t;return Object.entries(o).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...l,...a}[t]):({...l,...a})[t]===r})?[...e,r,n]:e},[]);return i(e,u,c,null==r?void 0:r.class,null==r?void 0:r.className)}},94660:function(e,t,r){"use strict";r.d(t,{Ue:function(){return c}});let n=e=>{let t;let r=new Set,n=(e,n)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=n?n:"object"!=typeof o)?o:Object.assign({},t,o),r.forEach(r=>r(t,e))}},o=()=>t,i={setState:n,getState:o,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(n,o,i),i},o=e=>e?n(e):n;var i=r(2265),s=r(65401);let{useSyncExternalStoreWithSelector:l}=s,u=!1,a=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?o(e):e,r=(e,r)=>(function(e,t=e.getState,r){r&&!u&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),u=!0);let n=l(e.subscribe,e.getState,e.getServerState||e.getState,t,r);return(0,i.useDebugValue)(n),n})(t,e,r);return Object.assign(r,t),r},c=e=>e?a(e):a}},function(e){e.O(0,[404,263,677,128,331,971,596,744],function(){return e(e.s=88249)}),_N_E=e.O()}]);
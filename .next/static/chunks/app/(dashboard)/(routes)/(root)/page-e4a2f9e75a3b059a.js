(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[352],{67303:function(e,n,r){"use strict";r.r(n),r.d(n,{ClientClerkProvider:function(){return l}});var t=r(97431),u=r(24033),i=r(2265),o=r(85791);let a="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,s=()=>{let{push:e}=(0,u.useRouter)(),n=(0,u.usePathname)(),r=(0,u.useSearchParams)(),t=n+r.toString();return(0,i.useEffect)(()=>{window.__clerk_nav_ref=n=>n===window.location.href.replace(window.location.origin,"")?(e(n),Promise.resolve()):new Promise(r=>{window.__clerk_nav_resolves_ref?window.__clerk_nav_resolves_ref.push(r):window.__clerk_nav_resolves_ref=[r],e(n)})},[t]),(0,i.useEffect)(()=>{window.__clerk_nav_resolves_ref&&window.__clerk_nav_resolves_ref.length&&window.__clerk_nav_resolves_ref.forEach(e=>e()),window.__clerk_nav_resolves_ref=[]}),(0,i.useCallback)(e=>window.__clerk_nav_ref(e),[])},l=e=>{let{__unstable_invokeMiddlewareOnAuthStateChange:n=!0}=e,r=(0,u.useRouter)(),l=s();a(()=>{window.__unstable__onBeforeSetActive=()=>{n&&(r.refresh(),r.push(window.location.href))},window.__unstable__onAfterSetActive=()=>{r.refresh()}},[]);let c={...e,navigate:l};return i.createElement(o.f,{options:c},i.createElement(t.El,{...c}))}},85791:function(e,n,r){"use strict";r.d(n,{f:function(){return o},k:function(){return i}});var t=r(2265);let u=t.createContext(void 0);u.displayName="ClerkNextOptionsCtx";let i=()=>{let e=t.useContext(u);return e.value},o=e=>{let{children:n,options:r}=e;return t.createElement(u.Provider,{value:{value:r}},n)}},63530:function(e,n,r){"use strict";r.r(n),r.d(n,{AuthenticateWithRedirectCallback:function(){return t.vn},ClerkLoaded:function(){return t.a7},ClerkLoading:function(){return t.qI},MultisessionAppSupport:function(){return t.KM},RedirectToCreateOrganization:function(){return t.gM},RedirectToOrganizationProfile:function(){return t.yB},RedirectToSignIn:function(){return t.N1},RedirectToSignUp:function(){return t.C2},RedirectToUserProfile:function(){return t.sO},SignedIn:function(){return t.CH},SignedOut:function(){return t.tj}});var t=r(97431)},11507:function(e,n,r){"use strict";r.r(n),r.d(n,{MagicLinkErrorCode:function(){return t.X1},WithClerk:function(){return t._E},WithSession:function(){return t.CJ},WithUser:function(){return t.Gi},isClerkAPIResponseError:function(){return t.kD},isKnownError:function(){return t.sZ},isMagicLinkError:function(){return t.V9},isMetamaskError:function(){return t.ZC},useAuth:function(){return t.aC},useClerk:function(){return t.ll},useMagicLink:function(){return t.jS},useOrganization:function(){return t.o8},useOrganizationList:function(){return t.eW},useOrganizations:function(){return t.qi},useSession:function(){return t.kP},useSessionList:function(){return t.xo},useSignIn:function(){return t.zq},useSignUp:function(){return t.QS},useUser:function(){return t.aF},withClerk:function(){return t.r0},withSession:function(){return t.NA},withUser:function(){return t.ns}});var t=r(97431)},61726:function(e,n,r){"use strict";r.r(n),r.d(n,{CreateOrganization:function(){return t.Gp},OrganizationProfile:function(){return t.A},OrganizationSwitcher:function(){return t.Li},SignIn:function(){return o},SignInButton:function(){return t.$d},SignOutButton:function(){return t.AM},SignUp:function(){return a},SignUpButton:function(){return t.gX},UserButton:function(){return t.l8},UserProfile:function(){return t.Iw}});var t=r(97431),u=r(2265),i=r(85791);let o=e=>{let{signInUrl:n}=(0,i.k)();return n?u.createElement(t.cL,{routing:"path",path:n,...e}):u.createElement(t.cL,{...e})},a=e=>{let{signUpUrl:n}=(0,i.k)();return n?u.createElement(t.Mo,{routing:"path",path:n,...e}):u.createElement(t.Mo,{...e})}},29810:function(e,n,r){Promise.resolve().then(r.t.bind(r,56656,23)),Promise.resolve().then(r.t.bind(r,26208,23)),Promise.resolve().then(r.t.bind(r,8169,23)),Promise.resolve().then(r.t.bind(r,33699,23)),Promise.resolve().then(r.bind(r,63530)),Promise.resolve().then(r.bind(r,61726)),Promise.resolve().then(r.bind(r,11507)),Promise.resolve().then(r.bind(r,67303)),Promise.resolve().then(r.t.bind(r,63222,23)),Promise.resolve().then(r.t.bind(r,46685,23)),Promise.resolve().then(r.bind(r,4645))},4645:function(e,n,r){"use strict";r.r(n),r.d(n,{Progress:function(){return P}});var t=r(57437),u=r(2265),i=r(13428),o=r(56989),a=r(9381);let s="Progress",[l,c]=(0,o.b)(s),[f,d]=l(s),v=(0,u.forwardRef)((e,n)=>{let{__scopeProgress:r,value:t,max:o,getValueLabel:s=m,...l}=e,c=g(o)?o:100,d=w(t,c)?t:null,v=h(d)?s(d,c):void 0;return(0,u.createElement)(f,{scope:r,value:d,max:c},(0,u.createElement)(a.WV.div,(0,i.Z)({"aria-valuemax":c,"aria-valuemin":0,"aria-valuenow":h(d)?d:void 0,"aria-valuetext":v,role:"progressbar","data-state":p(d,c),"data-value":null!=d?d:void 0,"data-max":c},l,{ref:n})))});v.propTypes={max(e,n,r){let t=e[n],u=String(t);return t&&!g(t)?Error(`Invalid prop \`max\` of value \`${u}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`):null},value(e,n,r){let t=e[n],u=String(t),i=g(e.max)?e.max:100;return null==t||w(t,i)?null:Error(`Invalid prop \`value\` of value \`${u}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`)}};let _=(0,u.forwardRef)((e,n)=>{var r;let{__scopeProgress:t,...o}=e,s=d("ProgressIndicator",t);return(0,u.createElement)(a.WV.div,(0,i.Z)({"data-state":p(s.value,s.max),"data-value":null!==(r=s.value)&&void 0!==r?r:void 0,"data-max":s.max},o,{ref:n}))});function m(e,n){return`${Math.round(e/n*100)}%`}function p(e,n){return null==e?"indeterminate":e===n?"complete":"loading"}function h(e){return"number"==typeof e}function g(e){return h(e)&&!isNaN(e)&&e>0}function w(e,n){return h(e)&&!isNaN(e)&&e<=n&&e>=0}var b=r(96061),E=r(70306);let k=(0,b.j)("h-full w-full flex-1 bg-primary transition-all",{variants:{variant:{default:"bg-sky-600",success:"bg-emerald-700"}},defaultVariants:{variant:"default"}}),P=u.forwardRef((e,n)=>{let{className:r,value:u,variant:i,...o}=e;return(0,t.jsx)(v,{ref:n,className:(0,E.cn)("relative h-4 w-full overflow-hidden rounded-full bg-secondary",r),...o,children:(0,t.jsx)(_,{className:(0,E.cn)(k({variant:i})),style:{transform:"translateX(-".concat(100-(u||0),"%)")}})})});P.displayName=v.displayName},70306:function(e,n,r){"use strict";r.d(n,{cn:function(){return i}});var t=r(57042),u=r(23986);function i(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0,u.m)((0,t.W)(n))}},33699:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{suspense:function(){return u},NoSSR:function(){return i}}),r(21024),r(2265);let t=r(37669);function u(){let e=Error(t.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=t.NEXT_DYNAMIC_NO_SSR_CODE,e}function i(e){let{children:n}=e;return n}},56989:function(e,n,r){"use strict";r.d(n,{b:function(){return i},k:function(){return u}});var t=r(2265);function u(e,n){let r=(0,t.createContext)(n);function u(e){let{children:n,...u}=e,i=(0,t.useMemo)(()=>u,Object.values(u));return(0,t.createElement)(r.Provider,{value:i},n)}return u.displayName=e+"Provider",[u,function(u){let i=(0,t.useContext)(r);if(i)return i;if(void 0!==n)return n;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function i(e,n=[]){let r=[],u=()=>{let n=r.map(e=>(0,t.createContext)(e));return function(r){let u=(null==r?void 0:r[e])||n;return(0,t.useMemo)(()=>({[`__scope${e}`]:{...r,[e]:u}}),[r,u])}};return u.scopeName=e,[function(n,u){let i=(0,t.createContext)(u),o=r.length;function a(n){let{scope:r,children:u,...a}=n,s=(null==r?void 0:r[e][o])||i,l=(0,t.useMemo)(()=>a,Object.values(a));return(0,t.createElement)(s.Provider,{value:l},u)}return r=[...r,u],a.displayName=n+"Provider",[a,function(r,a){let s=(null==a?void 0:a[e][o])||i,l=(0,t.useContext)(s);if(l)return l;if(void 0!==u)return u;throw Error(`\`${r}\` must be used within \`${n}\``)}]},function(...e){let n=e[0];if(1===e.length)return n;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=r.reduce((n,{useScope:r,scopeName:t})=>{let u=r(e),i=u[`__scope${t}`];return{...n,...i}},{});return(0,t.useMemo)(()=>({[`__scope${n.scopeName}`]:u}),[u])}};return r.scopeName=n.scopeName,r}(u,...n)]}}},function(e){e.O(0,[263,677,316,222,971,596,744],function(){return e(e.s=29810)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[824,658],{67303:function(n,e,r){"use strict";r.r(e),r.d(e,{ClientClerkProvider:function(){return f}});var t=r(97431),i=r(24033),u=r(2265),o=r(85791);let c="undefined"!=typeof window?u.useLayoutEffect:u.useEffect,s=()=>{let{push:n}=(0,i.useRouter)(),e=(0,i.usePathname)(),r=(0,i.useSearchParams)(),t=e+r.toString();return(0,u.useEffect)(()=>{window.__clerk_nav_ref=e=>e===window.location.href.replace(window.location.origin,"")?(n(e),Promise.resolve()):new Promise(r=>{window.__clerk_nav_resolves_ref?window.__clerk_nav_resolves_ref.push(r):window.__clerk_nav_resolves_ref=[r],n(e)})},[t]),(0,u.useEffect)(()=>{window.__clerk_nav_resolves_ref&&window.__clerk_nav_resolves_ref.length&&window.__clerk_nav_resolves_ref.forEach(n=>n()),window.__clerk_nav_resolves_ref=[]}),(0,u.useCallback)(n=>window.__clerk_nav_ref(n),[])},f=n=>{let{__unstable_invokeMiddlewareOnAuthStateChange:e=!0}=n,r=(0,i.useRouter)(),f=s();c(()=>{window.__unstable__onBeforeSetActive=()=>{e&&(r.refresh(),r.push(window.location.href))},window.__unstable__onAfterSetActive=()=>{r.refresh()}},[]);let a={...n,navigate:f};return u.createElement(o.f,{options:a},u.createElement(t.El,{...a}))}},85791:function(n,e,r){"use strict";r.d(e,{f:function(){return o},k:function(){return u}});var t=r(2265);let i=t.createContext(void 0);i.displayName="ClerkNextOptionsCtx";let u=()=>{let n=t.useContext(i);return n.value},o=n=>{let{children:e,options:r}=n;return t.createElement(i.Provider,{value:{value:r}},e)}},63530:function(n,e,r){"use strict";r.r(e),r.d(e,{AuthenticateWithRedirectCallback:function(){return t.vn},ClerkLoaded:function(){return t.a7},ClerkLoading:function(){return t.qI},MultisessionAppSupport:function(){return t.KM},RedirectToCreateOrganization:function(){return t.gM},RedirectToOrganizationProfile:function(){return t.yB},RedirectToSignIn:function(){return t.N1},RedirectToSignUp:function(){return t.C2},RedirectToUserProfile:function(){return t.sO},SignedIn:function(){return t.CH},SignedOut:function(){return t.tj}});var t=r(97431)},11507:function(n,e,r){"use strict";r.r(e),r.d(e,{MagicLinkErrorCode:function(){return t.X1},WithClerk:function(){return t._E},WithSession:function(){return t.CJ},WithUser:function(){return t.Gi},isClerkAPIResponseError:function(){return t.kD},isKnownError:function(){return t.sZ},isMagicLinkError:function(){return t.V9},isMetamaskError:function(){return t.ZC},useAuth:function(){return t.aC},useClerk:function(){return t.ll},useMagicLink:function(){return t.jS},useOrganization:function(){return t.o8},useOrganizationList:function(){return t.eW},useOrganizations:function(){return t.qi},useSession:function(){return t.kP},useSessionList:function(){return t.xo},useSignIn:function(){return t.zq},useSignUp:function(){return t.QS},useUser:function(){return t.aF},withClerk:function(){return t.r0},withSession:function(){return t.NA},withUser:function(){return t.ns}});var t=r(97431)},61726:function(n,e,r){"use strict";r.r(e),r.d(e,{CreateOrganization:function(){return t.Gp},OrganizationProfile:function(){return t.A},OrganizationSwitcher:function(){return t.Li},SignIn:function(){return o},SignInButton:function(){return t.$d},SignOutButton:function(){return t.AM},SignUp:function(){return c},SignUpButton:function(){return t.gX},UserButton:function(){return t.l8},UserProfile:function(){return t.Iw}});var t=r(97431),i=r(2265),u=r(85791);let o=n=>{let{signInUrl:e}=(0,u.k)();return e?i.createElement(t.cL,{routing:"path",path:e,...n}):i.createElement(t.cL,{...n})},c=n=>{let{signUpUrl:e}=(0,u.k)();return e?i.createElement(t.Mo,{routing:"path",path:e,...n}):i.createElement(t.Mo,{...n})}},90659:function(n,e,r){Promise.resolve().then(r.bind(r,63530)),Promise.resolve().then(r.bind(r,61726)),Promise.resolve().then(r.bind(r,11507)),Promise.resolve().then(r.bind(r,67303))}},function(n){n.O(0,[263,971,596,744],function(){return n(n.s=90659)}),_N_E=n.O()}]);
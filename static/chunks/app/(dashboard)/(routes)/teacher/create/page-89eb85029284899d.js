(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{5948:function(e,t,r){Promise.resolve().then(r.bind(r,38674))},38674:function(e,t,r){"use strict";r.r(t);var n=r(57437),s=r(74578),i=r(29222),o=r(38110),a=r(61865),l=r(24033),c=r(61396),d=r.n(c),u=r(5925),f=r(66737),m=r(3762),x=r(43904);let h=s.Ry({title:s.Z_().min(1,{message:"Title is required"})});t.default=()=>{let e=(0,l.useRouter)(),t=(0,a.cI)({resolver:(0,o.F)(h),defaultValues:{title:""}}),{isSubmitting:r,isValid:s}=t.formState,c=async t=>{try{let r=await i.Z.post("/api/courses",t);e.push("/teacher/courses/".concat(r.data.id)),u.ZP.success("Course created")}catch(e){u.ZP.error("Something went wrong")}};return(0,n.jsx)("div",{className:"max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{className:"text-2xl",children:"Name your course"}),(0,n.jsx)("p",{className:"text-sm text-slate-600",children:"What would you like to name your course? Don't worry, you can change this later."}),(0,n.jsx)(f.l0,{...t,children:(0,n.jsxs)("form",{onSubmit:t.handleSubmit(c),className:"space-y-8 mt-8",children:[(0,n.jsx)(f.Wi,{control:t.control,name:"title",render:e=>{let{field:t}=e;return(0,n.jsxs)(f.xJ,{children:[(0,n.jsx)(f.lX,{children:"Course title"}),(0,n.jsx)(f.NI,{children:(0,n.jsx)(x.I,{disabled:r,placeholder:"e.g. 'Advanced web development'",...t})}),(0,n.jsx)(f.pf,{children:"What will you teach in this course?"}),(0,n.jsx)(f.zG,{})]})}}),(0,n.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,n.jsx)(d(),{href:"/",children:(0,n.jsx)(m.z,{type:"button",variant:"ghost",children:"Cancel"})}),(0,n.jsx)(m.z,{type:"submit",disabled:!s||r,children:"Continue"})]})]})})]})})}},3762:function(e,t,r){"use strict";r.d(t,{d:function(){return l},z:function(){return c}});var n=r(57437),s=r(2265),i=r(67256),o=r(96061),a=r(70306);let l=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",success:"bg-emerald-600 text-white hover:bg-emerald-600/80"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:r,variant:s,size:o,asChild:c=!1,...d}=e,u=c?i.g7:"button";return(0,n.jsx)(u,{className:(0,a.cn)(l({variant:s,size:o,className:r})),ref:t,...d})});c.displayName="Button"},66737:function(e,t,r){"use strict";r.d(t,{l0:function(){return f},NI:function(){return v},pf:function(){return y},Wi:function(){return x},xJ:function(){return g},lX:function(){return b},zG:function(){return j}});var n=r(57437),s=r(2265),i=r(67256),o=r(61865),a=r(70306),l=r(36743),c=r(96061);let d=(0,c.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(l.f,{ref:t,className:(0,a.cn)(d(),r),...s})});u.displayName=l.f.displayName;let f=o.RV,m=s.createContext({}),x=e=>{let{...t}=e;return(0,n.jsx)(m.Provider,{value:{name:t.name},children:(0,n.jsx)(o.Qr,{...t})})},h=()=>{let e=s.useContext(m),t=s.useContext(p),{getFieldState:r,formState:n}=(0,o.Gc)(),i=r(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:a}=t;return{id:a,name:e.name,formItemId:"".concat(a,"-form-item"),formDescriptionId:"".concat(a,"-form-item-description"),formMessageId:"".concat(a,"-form-item-message"),...i}},p=s.createContext({}),g=s.forwardRef((e,t)=>{let{className:r,...i}=e,o=s.useId();return(0,n.jsx)(p.Provider,{value:{id:o},children:(0,n.jsx)("div",{ref:t,className:(0,a.cn)("space-y-2",r),...i})})});g.displayName="FormItem";let b=s.forwardRef((e,t)=>{let{className:r,...s}=e,{error:i,formItemId:o}=h();return(0,n.jsx)(u,{ref:t,className:(0,a.cn)(i&&"text-destructive",r),htmlFor:o,...s})});b.displayName="FormLabel";let v=s.forwardRef((e,t)=>{let{...r}=e,{error:s,formItemId:o,formDescriptionId:a,formMessageId:l}=h();return(0,n.jsx)(i.g7,{ref:t,id:o,"aria-describedby":s?"".concat(a," ").concat(l):"".concat(a),"aria-invalid":!!s,...r})});v.displayName="FormControl";let y=s.forwardRef((e,t)=>{let{className:r,...s}=e,{formDescriptionId:i}=h();return(0,n.jsx)("p",{ref:t,id:i,className:(0,a.cn)("text-sm text-muted-foreground",r),...s})});y.displayName="FormDescription";let j=s.forwardRef((e,t)=>{let{className:r,children:s,...i}=e,{error:o,formMessageId:l}=h(),c=o?String(null==o?void 0:o.message):s;return c?(0,n.jsx)("p",{ref:t,id:l,className:(0,a.cn)("text-sm font-medium text-destructive",r),...i,children:c}):null});j.displayName="FormMessage"},43904:function(e,t,r){"use strict";r.d(t,{I:function(){return o}});var n=r(57437),s=r(2265),i=r(70306);let o=s.forwardRef((e,t)=>{let{className:r,type:s,...o}=e;return(0,n.jsx)("input",{type:s,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...o})});o.displayName="Input"},70306:function(e,t,r){"use strict";r.d(t,{cn:function(){return i}});var n=r(57042),s=r(23986);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m)((0,n.W)(t))}},61396:function(e,t,r){e.exports=r(46685)},24033:function(e,t,r){e.exports=r(68165)}},function(e){e.O(0,[677,316,128,569,971,596,744],function(){return e(e.s=5948)}),_N_E=e.O()}]);
"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[522],{2419:function(l,t,n){n.d(t,{Z:function(){return h}});var e=n(6252),o=n(2262),u=n(3577),i=n(2119),a=n(5317),r=n(3239),c=n(744),s={class:"flex items-center justify-center flex-col md:flex-row text-2xl text-gray-500 dark:text-gray-400 mb-12"},d=(0,e._)("span",{class:"md:mr-3"},"Please star this project on",-1),m={href:"https://github.com/jackalstar88/vue_canvas_demo",class:"inline-flex items-center justify-center text-blue-600",target:"_blank"},f=(0,e._)("span",null,"GitHub",-1),U={class:"text-2xl text-gray-500 dark:text-gray-400 mb-12"},b=(0,e.Uk)(" Check out other components and layouts at"),S=(0,e._)("br",null,null,-1),p=(0,e.Uk)(" , "),_=(0,e._)("br",null,null,-1),w=(0,e.Uk)(" screen samples "),g=(0,e._)("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"},[(0,e.Uk)(" Get more with "),(0,e._)("a",{href:"https://justboil.me/tailwind-admin-templates/vue-dashboard/",target:"_blank",class:"text-blue-600"},"Premium version")],-1),x={__name:"BottomOtherPagesSection",setup:function(l){var t=(0,i.tv)(),n=t.getRoutes(),x=[];for(var W in n){var h=n[W].path,Z=n[W].meta&&n[W].meta.title?n[W].meta.title:null;Z&&x.push({path:h,title:Z})}return function(l,t){var n=(0,e.up)("router-link");return(0,e.wg)(),(0,e.j4)(r.Z,{last:""},{default:(0,e.w5)((function(){return[(0,e._)("h1",s,[d,(0,e._)("a",m,[(0,e.Wm)(c.Z,{path:(0,o.SU)(a.LcO),size:"36",class:"mr-1"},null,8,["path"]),f])]),(0,e._)("h1",U,[b,S,((0,e.wg)(),(0,e.iD)(e.HY,null,(0,e.Ko)(x,(function(l,t){return(0,e.wg)(),(0,e.iD)(e.HY,{key:l.path},[(0,e.Wm)(n,{to:l.path,class:"text-blue-600"},{default:(0,e.w5)((function(){return[(0,e.Uk)((0,u.zw)(l.title),1)]})),_:2},1032,["to"]),t+1<x.length?((0,e.wg)(),(0,e.iD)(e.HY,{key:0},[p],64)):(0,e.kq)("",!0)],64)})),64)),_,w]),g]})),_:1})}}};const W=x;var h=W},2618:function(l,t,n){n.d(t,{Z:function(){return m}});n(9653),n(8309);var e=n(6252),o=n(3577),u=n(2262),i=n(9963),a=["type","name","value"],r=(0,e._)("span",{class:"check"},null,-1),c={class:"control-label"},s={__name:"CheckRadioPicker",props:{options:{type:Object,default:function(){}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:{type:[Object,Array,String,Number],default:null}},emits:["update:modelValue"],setup:function(l,t){var n=t.emit,s=l,d=(0,e.Fl)({get:function(){return s.modelValue},set:function(l){n("update:modelValue",l)}}),m=(0,e.Fl)((function(){return"radio"===s.type?"radio":"checkbox"}));return function(t,n){return(0,e.wg)(),(0,e.iD)("div",{class:(0,o.C_)(["flex justify-start flex-wrap -mb-3",{"flex-col":l.column}])},[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(l.options,(function(t,s){return(0,e.wg)(),(0,e.iD)("label",{key:s,class:(0,o.C_)([l.type,"mr-6 mb-3 last:mr-0"])},[(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":n[0]||(n[0]=function(l){return(0,u.dq)(d)?d.value=l:null}),type:(0,u.SU)(m),name:l.name,value:s},null,8,a),[[i.YZ,(0,u.SU)(d)]]),r,(0,e._)("span",c,(0,o.zw)(t),1)],2)})),128))],2)}}};const d=s;var m=d},5690:function(l,t,n){n.d(t,{Z:function(){return d}});var e=n(6252),o=n(3577),u=n(2262),i={class:"mb-6 last:mb-0"},a=["for"],r={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"},c={__name:"Field",props:{label:{type:String,default:null},labelFor:{type:String,default:null},help:{type:String,default:null}},setup:function(l){var t=(0,e.Rr)(),n=(0,e.Fl)((function(){var l=[],n=t.default().length;return n>1&&l.push("grid grid-cols-1 gap-3"),2===n&&l.push("md:grid-cols-2"),l}));return function(t,c){return(0,e.wg)(),(0,e.iD)("div",i,[l.label?((0,e.wg)(),(0,e.iD)("label",{key:0,for:l.labelFor,class:"block font-bold mb-2"},(0,o.zw)(l.label),9,a)):(0,e.kq)("",!0),(0,e._)("div",{class:(0,o.C_)((0,u.SU)(n))},[(0,e.WI)(t.$slots,"default")],2),l.help?((0,e.wg)(),(0,e.iD)("div",r,(0,o.zw)(l.help),1)):(0,e.kq)("",!0)])}}};const s=c;var d=s},3239:function(l,t,n){n.d(t,{Z:function(){return r}});var e=n(6252),o=n(3577),u={key:1,class:"text-2xl text-gray-500 dark:text-gray-400"},i={__name:"TitledSection",props:{custom:Boolean,first:Boolean,last:Boolean},setup:function(l){return function(t,n){return(0,e.wg)(),(0,e.iD)("section",{class:(0,o.C_)(["py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center",{"-mb-6":l.first,"-mt-6":l.last,"-my-6":!l.first&&!l.last}])},[l.custom?(0,e.WI)(t.$slots,"default",{key:0}):((0,e.wg)(),(0,e.iD)("h1",u,[(0,e.WI)(t.$slots,"default")]))],2)}}};const a=i;var r=a},349:function(l,t,n){n.r(t),n.d(t,{default:function(){return X}});var e=n(6252),o=n(2262),u=n(2355),i=n(5317),a=n(7315),r=n(3899),c=n(6501),s=n(9890),d=n(6373),m=n(1388),f=n(736),U=n(5693),b=n(7841),S=n(3239),p=n(5690),_=n(2618),w=n(2419),g=n(6878),x=(0,e._)("p",null,"This is sample modal",-1),W=(0,e._)("p",null,"This is sample modal",-1),h=(0,e._)("p",null,"This is sample modal",-1),Z=(0,e.Uk)("UI Components"),k=(0,e.Uk)(" Dark mode "),v={class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"},y=(0,e.Uk)(" Modal examples "),O={class:"space-y-12"},B=(0,e._)("div",{class:"space-y-3"},[(0,e._)("p",null,"Click to see in action")],-1),C=(0,e._)("div",{class:"space-y-3"},[(0,e._)("h1",{class:"text-2xl"}," Unhandled exception "),(0,e._)("p",null,"Click to see in action")],-1),V=(0,e._)("div",{class:"space-y-3"},[(0,e._)("h1",{class:"text-2xl"}," Success "),(0,e._)("p",null,"Click to see in action")],-1),D=(0,e._)("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"}," Notifications ",-1),H={class:"flex items-center justify-center mt-6"},j=(0,e._)("b",null,"Info state",-1),F=(0,e.Uk)(". Notification "),N=(0,e._)("b",null,"Success state",-1),I=(0,e.Uk)(". Notification "),T=(0,e._)("b",null,"Warning state",-1),q=(0,e.Uk)(". Notification "),z=(0,e._)("b",null,"Danger state",-1),Y=(0,e.Uk)(". Notification "),M=(0,e._)("b",null,"White",-1),P=(0,e.Uk)(". Notification "),A=(0,e._)("b",null,"Light",-1),R=(0,e.Uk)(". Notification "),$=(0,e.Uk)("Buttons"),E=(0,e.Uk)("Cards"),G={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},K=(0,e._)("div",{class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"}," With title ",-1),L=(0,e._)("div",{class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"}," With title & icons ",-1),Q={__name:"Ui",setup:function(l){var t=(0,o.iH)(["Admin","UI Components"]),n=(0,o.iH)(!1),Q=(0,o.iH)(!1),J=(0,o.iH)(!1),X=(0,o.iH)([]),ll=(0,e.Fl)((function(){return X.value.indexOf("outline")>-1})),tl=(0,o.iH)([]),nl=(0,e.Fl)((function(){return tl.value.indexOf("outline")>-1})),el=(0,e.Fl)((function(){return tl.value.indexOf("small")>-1})),ol=(0,e.Fl)((function(){return tl.value.indexOf("disabled")>-1})),ul=(0,u.h)(),il=function(){ul.setDarkMode()};return function(l,u){return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(b.Z,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=function(l){return n.value=l}),title:"Please confirm action","button-label":"Confirm","has-cancel":""},{default:(0,e.w5)((function(){return[x]})),_:1},8,["modelValue"]),(0,e.Wm)(b.Z,{modelValue:Q.value,"onUpdate:modelValue":u[1]||(u[1]=function(l){return Q.value=l}),"large-title":"Unhandled exception",button:"danger",shake:""},{default:(0,e.w5)((function(){return[W]})),_:1},8,["modelValue"]),(0,e.Wm)(b.Z,{modelValue:J.value,"onUpdate:modelValue":u[2]||(u[2]=function(l){return J.value=l}),"large-title":"Success",button:"success"},{default:(0,e.w5)((function(){return[h]})),_:1},8,["modelValue"]),(0,e.Wm)(c.Z,{"title-stack":t.value},null,8,["title-stack"]),(0,e.Wm)(r.Z,null,{default:(0,e.w5)((function(){return[Z]})),_:1}),(0,e.Wm)(S.Z,{first:""},{default:(0,e.w5)((function(){return[k]})),_:1}),(0,e.Wm)(a.Z,null,{default:(0,e.w5)((function(){return[(0,e.Wm)(s.Z,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"},{default:(0,e.w5)((function(){return[(0,e._)("div",v,[(0,e.Wm)(m.Z,{label:"Toggle",outline:"",onClick:il})])]})),_:1})]})),_:1}),(0,e.Wm)(S.Z,null,{default:(0,e.w5)((function(){return[y]})),_:1}),(0,e.Wm)(a.Z,null,{default:(0,e.w5)((function(){return[(0,e._)("div",O,[(0,e.Wm)(s.Z,{title:"Confirm modal","header-icon":(0,o.SU)(i.r5M),class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:u[3]||(u[3]=function(l){return n.value=!0})},{default:(0,e.w5)((function(){return[B,(0,e.Wm)(U.Z),(0,e.Wm)(d.Z,null,{default:(0,e.w5)((function(){return[(0,e.Wm)(m.Z,{label:"Confirm",color:"info"}),(0,e.Wm)(m.Z,{label:"Cancel",color:"info",outline:""})]})),_:1})]})),_:1},8,["header-icon"]),(0,e.Wm)(s.Z,{class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:u[4]||(u[4]=function(l){return Q.value=!0})},{default:(0,e.w5)((function(){return[C,(0,e.Wm)(U.Z),(0,e.Wm)(d.Z,null,{default:(0,e.w5)((function(){return[(0,e.Wm)(m.Z,{label:"Done",color:"danger"})]})),_:1})]})),_:1}),(0,e.Wm)(s.Z,{class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:u[5]||(u[5]=function(l){return J.value=!0})},{default:(0,e.w5)((function(){return[V,(0,e.Wm)(U.Z),(0,e.Wm)(m.Z,{label:"Done",color:"success"})]})),_:1})])]})),_:1}),(0,e.Wm)(S.Z,{custom:""},{default:(0,e.w5)((function(){return[D,(0,e._)("div",H,[(0,e.Wm)(_.Z,{modelValue:X.value,"onUpdate:modelValue":u[6]||(u[6]=function(l){return X.value=l}),type:"switch",name:"notifications-switch",options:{outline:"Outline"}},null,8,["modelValue"])])]})),_:1}),(0,e.Wm)(a.Z,null,{default:(0,e.w5)((function(){return[(0,e.Wm)(f.Z,{color:"info",icon:(0,o.SU)(i.EaN),outline:(0,o.SU)(ll)},{right:(0,e.w5)((function(){return[(0,e.Wm)(m.Z,{icon:(0,o.SU)(i.fOx),label:"Button",color:"info",outline:(0,o.SU)(ll),small:""},null,8,["icon","outline"])]})),default:(0,e.w5)((function(){return[j,F]})),_:1},8,["icon","outline"]),(0,e.Wm)(f.Z,{color:"success",icon:(0,o.SU)(i.k6A),outline:(0,o.SU)(ll)},{right:(0,e.w5)((function(){return[(0,e.Wm)(m.Z,{icon:(0,o.SU)(i.fOx),label:"Button",color:"success",outline:(0,o.SU)(ll),small:""},null,8,["icon","outline"])]})),default:(0,e.w5)((function(){return[N,I]})),_:1},8,["icon","outline"]),(0,e.Wm)(f.Z,{color:"warning",icon:(0,o.SU)(i._gM),outline:(0,o.SU)(ll)},{right:(0,e.w5)((function(){return[(0,e.Wm)(m.Z,{icon:(0,o.SU)(i.fOx),label:"Button",color:"warning",outline:(0,o.SU)(ll),small:""},null,8,["icon","outline"])]})),default:(0,e.w5)((function(){return[T,q]})),_:1},8,["icon","outline"]),(0,e.Wm)(f.Z,{color:"danger",icon:(0,o.SU)(i.fr4),outline:(0,o.SU)(ll)},{right:(0,e.w5)((function(){return[(0,e.Wm)(m.Z,{icon:(0,o.SU)(i.fOx),label:"Button",color:"danger",outline:(0,o.SU)(ll),small:""},null,8,["icon","outline"])]})),default:(0,e.w5)((function(){return[z,Y]})),_:1},8,["icon","outline"]),(0,e.Wm)(f.Z,{color:"white",icon:(0,o.SU)(i.ghH),outline:(0,o.SU)(ll)},{default:(0,e.w5)((function(){return[M,P]})),_:1},8,["icon","outline"]),(0,e.Wm)(f.Z,{color:"light",icon:(0,o.SU)(i.zuO),outline:(0,o.SU)(ll)},{default:(0,e.w5)((function(){return[A,R]})),_:1},8,["icon","outline"])]})),_:1}),(0,e.Wm)(S.Z,null,{default:(0,e.w5)((function(){return[$]})),_:1}),(0,e.Wm)(a.Z,null,{default:(0,e.w5)((function(){return[(0,e.Wm)(s.Z,null,{default:(0,e.w5)((function(){return[(0,e.Wm)(p.Z,{label:"Settings"},{default:(0,e.w5)((function(){return[(0,e.Wm)(_.Z,{modelValue:tl.value,"onUpdate:modelValue":u[7]||(u[7]=function(l){return tl.value=l}),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",disabled:"Disabled"}},null,8,["modelValue"])]})),_:1}),(0,e.Wm)(U.Z),(0,e.Wm)(d.Z,null,{default:(0,e.w5)((function(){return[(0,e.Wm)(m.Z,{color:"white",label:"Button",small:(0,o.SU)(el),outline:(0,o.SU)(nl),disabled:(0,o.SU)(ol)},null,8,["small","outline","disabled"]),(0,e.Wm)(m.Z,{color:"light",label:"Button",small:(0,o.SU)(el),outline:(0,o.SU)(nl),disabled:(0,o.SU)(ol)},null,8,["small","outline","disabled"]),(0,e.Wm)(m.Z,{color:"info",label:"Button",small:(0,o.SU)(el),outline:(0,o.SU)(nl),disabled:(0,o.SU)(ol)},null,8,["small","outline","disabled"]),(0,e.Wm)(m.Z,{color:"success",label:"Button",small:(0,o.SU)(el),outline:(0,o.SU)(nl),disabled:(0,o.SU)(ol)},null,8,["small","outline","disabled"]),(0,e.Wm)(m.Z,{color:"warning",label:"Button",small:(0,o.SU)(el),outline:(0,o.SU)(nl),disabled:(0,o.SU)(ol)},null,8,["small","outline","disabled"]),(0,e.Wm)(m.Z,{color:"danger",label:"Button",small:(0,o.SU)(el),outline:(0,o.SU)(nl),disabled:(0,o.SU)(ol)},null,8,["small","outline","disabled"])]})),_:1}),(0,e.Wm)(U.Z),(0,e.Wm)(d.Z,null,{default:(0,e.w5)((function(){return[(0,e.Wm)(m.Z,{color:"white",label:"Button",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(el),outline:(0,o.SU)(nl),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"]),(0,e.Wm)(m.Z,{color:"light",label:"Button",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(el),outline:(0,o.SU)(nl),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"]),(0,e.Wm)(m.Z,{color:"info",label:"Button",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(el),outline:(0,o.SU)(nl),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"]),(0,e.Wm)(m.Z,{color:"success",label:"Button",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(el),outline:(0,o.SU)(nl),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"]),(0,e.Wm)(m.Z,{color:"warning",label:"Button",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(el),outline:(0,o.SU)(nl),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"]),(0,e.Wm)(m.Z,{color:"danger",label:"Button",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(el),outline:(0,o.SU)(nl),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"])]})),_:1}),(0,e.Wm)(U.Z),(0,e.Wm)(d.Z,null,{default:(0,e.w5)((function(){return[(0,e.Wm)(m.Z,{color:"white",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(el),outline:(0,o.SU)(nl),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"]),(0,e.Wm)(m.Z,{color:"light",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(el),outline:(0,o.SU)(nl),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"]),(0,e.Wm)(m.Z,{color:"info",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(el),outline:(0,o.SU)(nl),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"]),(0,e.Wm)(m.Z,{color:"success",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(el),outline:(0,o.SU)(nl),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"]),(0,e.Wm)(m.Z,{color:"warning",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(el),outline:(0,o.SU)(nl),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"]),(0,e.Wm)(m.Z,{color:"danger",icon:(0,o.SU)(i.fOx),small:(0,o.SU)(el),outline:(0,o.SU)(nl),disabled:(0,o.SU)(ol)},null,8,["icon","small","outline","disabled"])]})),_:1})]})),_:1})]})),_:1}),(0,e.Wm)(S.Z,null,{default:(0,e.w5)((function(){return[E]})),_:1}),(0,e.Wm)(a.Z,null,{default:(0,e.w5)((function(){return[(0,e._)("div",G,[(0,e.Wm)(s.Z,{title:"With Title",mb:""},{default:(0,e.w5)((function(){return[K]})),_:1}),(0,e.Wm)(s.Z,{title:"Title & Icons",icon:(0,o.SU)(i.qOQ),"header-icon":(0,o.SU)(i.r5M),mb:""},{default:(0,e.w5)((function(){return[L]})),_:1},8,["icon","header-icon"])]),(0,e.Wm)(g.Z,{icon:(0,o.SU)(i.fr4),title:"Empty variation"},null,8,["icon"]),(0,e.Wm)(s.Z,{empty:""})]})),_:1}),(0,e.Wm)(w.Z)],64)}}};const J=Q;var X=J}}]);
//# sourceMappingURL=ui-legacy.33f7023b.js.map
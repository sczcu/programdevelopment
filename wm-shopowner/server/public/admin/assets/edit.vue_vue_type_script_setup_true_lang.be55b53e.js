import{Z as P,$ as S,G as $,H,D as K,C as W,v as Z,F as j}from"./element-plus.47dbc6c1.js";import{_ as z}from"./picker.vue_vue_type_script_setup_true_lang.0b57573a.js";import{a as J,b as Q,c as X,d as Y}from"./menu.5f5ae112.js";import{n as uu,M as n,o as eu,t as lu}from"./index.b44a590f.js";import{P as ou}from"./index.0d3b3a96.js";import{d as au,s as y,r as C,b as tu,a0 as su,o as i,c as du,W as o,O as a,u,T as m,M as F,S as c,a as s}from"./@vue.c3e77981.js";const nu={class:"edit-popup"},ru={class:"flex-1"},pu=s("div",{class:"form-tips"}," \u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`user`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934 ",-1),iu={class:"flex-1"},mu=s("div",{class:"form-tips"}," \u8BBF\u95EE\u7684\u7EC4\u4EF6\u8DEF\u5F84\uFF0C\u5982\uFF1A`user/setting`\uFF0C\u9ED8\u8BA4\u5728`views`\u76EE\u5F55\u4E0B ",-1),Fu={class:"flex-1"},cu=s("div",{class:"form-tips"}," \u8BBF\u95EE\u8BE6\u60C5\u9875\u9762\uFF0C\u7F16\u8F91\u9875\u9762\u65F6\uFF0C\u83DC\u5355\u9AD8\u4EAE\u663E\u793A\uFF0C\u5982`/consumer/lists` ",-1),Eu={class:"flex-1"},_u=s("div",{class:"form-tips"}," \u5C06\u4F5C\u4E3Aserver\u7AEFAPI\u9A8C\u6743\u4F7F\u7528\uFF0C\u5982`auth.admin/user`\uFF0C\u8BF7\u8C28\u614E\u4FEE\u6539 ",-1),fu={class:"flex-1"},Bu=s("div",{class:"form-tips"},' \u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A`{"id": 1, "name": "admin"}`\u6216`id=1&name=admin` ',-1),Cu=s("div",{class:"form-tips"},"\u9009\u62E9\u7F13\u5B58\u5219\u4F1A\u88AB`keep-alive`\u7F13\u5B58",-1),Du=s("div",{class:"form-tips"}," \u9009\u62E9\u9690\u85CF\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE ",-1),bu=s("div",{class:"form-tips"},"\u9009\u62E9\u505C\u7528\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4E5F\u4E0D\u80FD\u88AB\u8BBF\u95EE",-1),Vu=s("div",{class:"form-tips"},"\u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D",-1),ku=au({__name:"edit",emits:["success","close"],setup(Au,{expose:U,emit:h}){const D=h,b=y(),f=y(),B=C("add"),T=tu(()=>B.value=="edit"?"\u7F16\u8F91\u83DC\u5355":"\u65B0\u589E\u83DC\u5355"),V=C(uu()),g=(d,e)=>{const r=d?V.value.filter(E=>E.toLowerCase().includes(d.toLowerCase())):V.value;e(r.map(E=>({value:E})))},l=su({id:"",pid:0,type:n.CATALOGUE,icon:"",name:"",sort:0,paths:"",perms:"",component:"",selected:"",params:"",is_cache:0,is_show:1,is_disable:0}),k={pid:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355",trigger:["blur","change"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",trigger:"blur"}],paths:[{required:!0,message:"\u8BF7\u8F93\u5165\u8DEF\u7531\u5730\u5740",trigger:"blur"}],component:[{required:!0,message:"\u8BF7\u8F93\u5165\u7EC4\u4EF6\u5730\u5740",trigger:"blur"}]},A=C([]),w=async()=>{const d=await J({page_type:0}),e={id:0,name:"\u9876\u7EA7",children:[]};e.children=eu(lu(d.lists).filter(r=>r.type!=n.BUTTON)),A.value.push(e)},x=async()=>{var d,e;await((d=b.value)==null?void 0:d.validate()),B.value=="edit"?await Q(l):await X(l),(e=f.value)==null||e.close(),D("success")},N=(d="add")=>{var e;B.value=d,(e=f.value)==null||e.open()},v=d=>{for(const e in l)d[e]!=null&&d[e]!=null&&(l[e]=d[e])},O=async d=>{const e=await Y({id:d.id});v(e)},M=()=>{D("close")};return w(),U({open:N,setFormData:v,getDetail:O}),(d,e)=>{const r=$,E=H,p=K,q=P,_=W,R=z,L=S,G=Z,I=j;return i(),du("div",nu,[o(ou,{ref_key:"popupRef",ref:f,title:u(T),async:!0,width:"550px",onConfirm:x,onClose:M},{default:a(()=>[o(I,{ref_key:"formRef",ref:b,model:u(l),"label-width":"80px",rules:k},{default:a(()=>[o(p,{label:"\u83DC\u5355\u7C7B\u578B",prop:"type",required:""},{default:a(()=>[o(E,{modelValue:u(l).type,"onUpdate:modelValue":e[0]||(e[0]=t=>u(l).type=t)},{default:a(()=>[o(r,{label:u(n).CATALOGUE},{default:a(()=>[m("\u76EE\u5F55")]),_:1},8,["label"]),o(r,{label:u(n).MENU},{default:a(()=>[m("\u83DC\u5355")]),_:1},8,["label"]),o(r,{label:u(n).BUTTON},{default:a(()=>[m("\u6309\u94AE")]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1}),o(p,{label:"\u7236\u7EA7\u83DC\u5355",prop:"pid"},{default:a(()=>[o(q,{class:"flex-1",modelValue:u(l).pid,"onUpdate:modelValue":e[1]||(e[1]=t=>u(l).pid=t),data:u(A),clearable:"","node-key":"id",props:{label:"name"},"default-expand-all":!0,placeholder:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355","check-strictly":""},null,8,["modelValue","data"])]),_:1}),o(p,{label:"\u83DC\u5355\u540D\u79F0",prop:"name"},{default:a(()=>[o(_,{modelValue:u(l).name,"onUpdate:modelValue":e[2]||(e[2]=t=>u(l).name=t),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),u(l).type!=u(n).BUTTON?(i(),F(p,{key:0,label:"\u83DC\u5355\u56FE\u6807",prop:"icon"},{default:a(()=>[o(R,{class:"flex-1",modelValue:u(l).icon,"onUpdate:modelValue":e[3]||(e[3]=t=>u(l).icon=t)},null,8,["modelValue"])]),_:1})):c("",!0),u(l).type!=u(n).BUTTON?(i(),F(p,{key:1,label:"\u8DEF\u7531\u8DEF\u5F84",prop:"paths"},{default:a(()=>[s("div",ru,[o(_,{modelValue:u(l).paths,"onUpdate:modelValue":e[4]||(e[4]=t=>u(l).paths=t),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u8DEF\u5F84",clearable:""},null,8,["modelValue"]),pu])]),_:1})):c("",!0),u(l).type==u(n).MENU?(i(),F(p,{key:2,label:"\u7EC4\u4EF6\u8DEF\u5F84",prop:"component"},{default:a(()=>[s("div",iu,[o(L,{class:"w-full",modelValue:u(l).component,"onUpdate:modelValue":e[5]||(e[5]=t=>u(l).component=t),"fetch-suggestions":g,clearable:"",placeholder:"\u8BF7\u8F93\u5165\u7EC4\u4EF6\u8DEF\u5F84"},null,8,["modelValue"]),mu])]),_:1})):c("",!0),u(l).type==u(n).MENU?(i(),F(p,{key:3,label:"\u9009\u4E2D\u83DC\u5355",prop:"selected"},{default:a(()=>[s("div",Fu,[o(_,{modelValue:u(l).selected,"onUpdate:modelValue":e[6]||(e[6]=t=>u(l).selected=t),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u8DEF\u5F84",clearable:""},null,8,["modelValue"]),cu])]),_:1})):c("",!0),u(l).type!=u(n).CATALOGUE?(i(),F(p,{key:4,label:"\u6743\u9650\u5B57\u7B26",prop:"perms"},{default:a(()=>[s("div",Eu,[o(_,{modelValue:u(l).perms,"onUpdate:modelValue":e[7]||(e[7]=t=>u(l).perms=t),placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u5B57\u7B26",clearable:""},null,8,["modelValue"]),_u])]),_:1})):c("",!0),u(l).type==u(n).MENU?(i(),F(p,{key:5,label:"\u8DEF\u7531\u53C2\u6570",prop:"params"},{default:a(()=>[s("div",null,[s("div",fu,[o(_,{modelValue:u(l).params,"onUpdate:modelValue":e[8]||(e[8]=t=>u(l).params=t),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u53C2\u6570",clearable:""},null,8,["modelValue"])]),Bu])]),_:1})):c("",!0),u(l).type==u(n).MENU?(i(),F(p,{key:6,label:"\u662F\u5426\u7F13\u5B58",prop:"is_cache",required:""},{default:a(()=>[s("div",null,[o(E,{modelValue:u(l).is_cache,"onUpdate:modelValue":e[9]||(e[9]=t=>u(l).is_cache=t)},{default:a(()=>[o(r,{label:1},{default:a(()=>[m("\u7F13\u5B58")]),_:1}),o(r,{label:0},{default:a(()=>[m("\u4E0D\u7F13\u5B58")]),_:1})]),_:1},8,["modelValue"]),Cu])]),_:1})):c("",!0),u(l).type!=u(n).BUTTON?(i(),F(p,{key:7,label:"\u662F\u5426\u663E\u793A",prop:"is_show",required:""},{default:a(()=>[s("div",null,[o(E,{modelValue:u(l).is_show,"onUpdate:modelValue":e[10]||(e[10]=t=>u(l).is_show=t)},{default:a(()=>[o(r,{label:1},{default:a(()=>[m("\u663E\u793A")]),_:1}),o(r,{label:0},{default:a(()=>[m("\u9690\u85CF")]),_:1})]),_:1},8,["modelValue"]),Du])]),_:1})):c("",!0),u(l).type!=u(n).BUTTON?(i(),F(p,{key:8,label:"\u83DC\u5355\u72B6\u6001",prop:"is_disable",required:""},{default:a(()=>[s("div",null,[o(E,{modelValue:u(l).is_disable,"onUpdate:modelValue":e[11]||(e[11]=t=>u(l).is_disable=t)},{default:a(()=>[o(r,{label:0},{default:a(()=>[m("\u6B63\u5E38")]),_:1}),o(r,{label:1},{default:a(()=>[m("\u505C\u7528")]),_:1})]),_:1},8,["modelValue"]),bu])]),_:1})):c("",!0),o(p,{label:"\u83DC\u5355\u6392\u5E8F",prop:"sort"},{default:a(()=>[s("div",null,[o(G,{modelValue:u(l).sort,"onUpdate:modelValue":e[12]||(e[12]=t=>u(l).sort=t),min:0,max:9999},null,8,["modelValue"]),Vu])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{ku as _};

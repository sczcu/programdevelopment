import{C as q,D as N,G as I,H as S,v as T,t as G,F as O}from"./element-plus.47dbc6c1.js";import{f as P,h as z,i as H}from"./wx_oa.89ab5284.js";import{P as M}from"./index.0d3b3a96.js";import{d as W,s as C,r as j,b as J,a0 as K,o as p,c as L,W as l,O as o,u as t,a as s,M as F,S as B,T as m}from"./@vue.c3e77981.js";const Q={class:"edit-popup"},X={class:"flex-1"},Y=s("div",{class:"form-tips"},"\u65B9\u4FBF\u901A\u8FC7\u540D\u79F0\u7BA1\u7406\u5173\u6CE8\u56DE\u590D\u5185\u5BB9",-1),Z={class:"flex-1"},$=s("div",{class:"form-tips"},"\u65B9\u4FBF\u901A\u8FC7\u540D\u79F0\u7BA1\u7406\u5173\u6CE8\u56DE\u590D\u5185\u5BB9",-1),ee={class:"flex-1"},ue=s("div",{class:"form-tips"},"\u6A21\u7CCA\u5339\u914D\u65F6\uFF0C\u5173\u952E\u8BCD\u90E8\u5206\u5339\u914D\u7528\u6237\u8F93\u5165\u7684\u5185\u5BB9\u5373\u53EF",-1),te={class:"flex-1"},le=s("div",{class:"form-tips"},"\u6682\u65F6\u53EA\u652F\u6301\u6587\u672C\u7C7B\u578B",-1),oe={class:"flex-1"},ae={class:"flex-1"},se={class:"flex-1"},ne=s("div",{class:"form-tips"}," \u8BBE\u7F6E\u5173\u952E\u8BCD\u5339\u914D\u591A\u6761\u65F6\u56DE\u590D\u7684\u6570\u91CF\uFF0C\u6682\u65F6\u652F\u6301\u56DE\u590D\u4E00\u6761\u5185\u5BB9 ",-1),_e=W({__name:"edit",emits:["success","close"],setup(de,{expose:V,emit:v}){const D=v,y=C(),_=C(),c=j("add"),g=J(()=>c.value=="edit"?"\u7F16\u8F91":"\u65B0\u589E"),u=K({id:"",name:"",reply_type:0,content_type:1,keyword:"",content:"",matching_type:1,status:1,sort:0,reply_num:1}),b={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u89C4\u5219\u540D\u79F0",trigger:["blur"]}],keyword:[{required:!0,message:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD",trigger:["blur"]}],matching_type:[{required:!0,message:"\u8BF7\u9009\u62E9\u5339\u914D\u65B9\u5F0F",trigger:["blur"]}],content_type:[{required:!0,message:"\u8BF7\u9009\u62E9\u56DE\u590D\u7C7B\u578B",trigger:["blur"]}],content:[{required:!0,message:"\u8BF7\u8F93\u5165\u56DE\u590D\u5185\u5BB9",trigger:["blur"]}]},w=async()=>{var n,e;await((n=y.value)==null?void 0:n.validate()),c.value=="edit"?await P(u):await z(u),(e=_.value)==null||e.close(),D("success")},x=(n="add",e=0)=>{var r;c.value=n,u.reply_type=e,(r=_.value)==null||r.open()},E=n=>{for(const e in u)n[e]!=null&&n[e]!=null&&(u[e]=n[e])},h=async n=>{const e=await H({id:n.id});E(e)},k=()=>{D("close")};return V({open:x,setFormData:E,getDetail:h}),(n,e)=>{const r=q,d=N,i=I,f=S,R=T,A=G,U=O;return p(),L("div",Q,[l(M,{ref_key:"popupRef",ref:_,title:t(g),async:!0,width:"500px",onConfirm:w,onClose:k},{default:o(()=>[l(U,{ref_key:"formRef",ref:y,model:t(u),"label-width":"84px",rules:b,class:"pr-10"},{default:o(()=>[l(d,{label:"\u89C4\u5219\u540D\u79F0",prop:"name"},{default:o(()=>[s("div",X,[l(r,{modelValue:t(u).name,"onUpdate:modelValue":e[0]||(e[0]=a=>t(u).name=a),placeholder:"\u8BF7\u8F93\u5165\u89C4\u5219\u540D\u79F0"},null,8,["modelValue"]),Y])]),_:1}),t(u).reply_type==2?(p(),F(d,{key:0,label:"\u5173\u952E\u8BCD",prop:"keyword"},{default:o(()=>[s("div",Z,[l(r,{modelValue:t(u).keyword,"onUpdate:modelValue":e[1]||(e[1]=a=>t(u).keyword=a),placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD"},null,8,["modelValue"]),$])]),_:1})):B("",!0),t(u).reply_type==2?(p(),F(d,{key:1,label:"\u5339\u914D\u65B9\u5F0F",prop:"matching_type"},{default:o(()=>[s("div",ee,[l(f,{modelValue:t(u).matching_type,"onUpdate:modelValue":e[2]||(e[2]=a=>t(u).matching_type=a)},{default:o(()=>[l(i,{label:1},{default:o(()=>[m("\u5168\u5339\u914D")]),_:1}),l(i,{label:2},{default:o(()=>[m("\u6A21\u7CCA\u5339\u914D")]),_:1})]),_:1},8,["modelValue"]),ue])]),_:1})):B("",!0),l(d,{label:"\u56DE\u590D\u7C7B\u578B",prop:"content_type",min:0},{default:o(()=>[s("div",te,[l(f,{modelValue:t(u).content_type,"onUpdate:modelValue":e[3]||(e[3]=a=>t(u).content_type=a)},{default:o(()=>[l(i,{label:1},{default:o(()=>[m("\u6587\u672C")]),_:1})]),_:1},8,["modelValue"]),le])]),_:1}),l(d,{label:"\u56DE\u590D\u5185\u5BB9",prop:"content"},{default:o(()=>[s("div",oe,[l(r,{modelValue:t(u).content,"onUpdate:modelValue":e[4]||(e[4]=a=>t(u).content=a),autosize:{minRows:4,maxRows:4},type:"textarea",maxlength:"200","show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165\u56DE\u590D\u5185\u5BB9"},null,8,["modelValue"])])]),_:1}),l(d,{label:"\u6392\u5E8F"},{default:o(()=>[s("div",ae,[l(R,{modelValue:t(u).sort,"onUpdate:modelValue":e[5]||(e[5]=a=>t(u).sort=a),min:0,max:9999},null,8,["modelValue"])])]),_:1}),t(u).reply_type==2?(p(),F(d,{key:2,label:"\u56DE\u590D\u6570\u91CF",prop:"reply_num",required:""},{default:o(()=>[s("div",se,[l(f,{modelValue:t(u).reply_num,"onUpdate:modelValue":e[6]||(e[6]=a=>t(u).reply_num=a)},{default:o(()=>[l(i,{label:1},{default:o(()=>[m("\u56DE\u590D\u5339\u914D\u9996\u8BCD\u6761")]),_:1})]),_:1},8,["modelValue"]),ne])]),_:1})):B("",!0),l(d,{label:"\u542F\u7528\u72B6\u6001"},{default:o(()=>[l(A,{modelValue:t(u).status,"onUpdate:modelValue":e[7]||(e[7]=a=>t(u).status=a),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{_e as _};

import{C as k,D as y,v as R,G as g,H as U,F as h}from"./element-plus.47dbc6c1.js";import{P as N}from"./index.0d3b3a96.js";import{a as q,b as A}from"./dict.101c3afb.js";import{d as I,s as _,r as T,b as G,a0 as P,o as z,c as H,W as l,O as o,u as a,a as v,T as f}from"./@vue.c3e77981.js";const O={class:"edit-popup"},S=v("div",{class:"form-tips"},"\u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D",-1),X=I({__name:"edit",emits:["success","close"],setup(W,{expose:F,emit:b}){const p=b,i=_(),d=_(),m=T("add"),E=G(()=>m.value=="edit"?"\u7F16\u8F91\u5B57\u5178\u6570\u636E":"\u65B0\u589E\u5B57\u5178\u6570\u636E"),u=P({id:"",type_value:"",name:"",value:"",sort:0,status:1,remark:"",type_id:0}),B={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E\u540D\u79F0",trigger:["blur"]}],value:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E\u503C",trigger:["blur"]}]},V=async()=>{var t,e;await((t=i.value)==null?void 0:t.validate()),m.value=="edit"?await q(u):await A(u),(e=d.value)==null||e.close(),p("success")},C=()=>{p("close")};return F({open:(t="add")=>{var e;m.value=t,(e=d.value)==null||e.open()},setFormData:t=>{for(const e in u)t[e]!=null&&t[e]!=null&&(u[e]=t[e])}}),(t,e)=>{const n=k,r=y,D=R,c=g,w=U,x=h;return z(),H("div",O,[l(N,{ref_key:"popupRef",ref:d,title:a(E),async:!0,width:"550px",onConfirm:V,onClose:C},{default:o(()=>[l(x,{class:"ls-form",ref_key:"formRef",ref:i,rules:B,model:a(u),"label-width":"84px"},{default:o(()=>[l(r,{label:"\u5B57\u5178\u7C7B\u578B"},{default:o(()=>[l(n,{"model-value":a(u).type_value,placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u7C7B\u578B",disabled:""},null,8,["model-value"])]),_:1}),l(r,{label:"\u6570\u636E\u540D\u79F0",prop:"name"},{default:o(()=>[l(n,{modelValue:a(u).name,"onUpdate:modelValue":e[0]||(e[0]=s=>a(u).name=s),placeholder:"\u8BF7\u8F93\u5165\u6570\u636E\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),l(r,{label:"\u6570\u636E\u503C",prop:"value"},{default:o(()=>[l(n,{modelValue:a(u).value,"onUpdate:modelValue":e[1]||(e[1]=s=>a(u).value=s),placeholder:"\u8BF7\u8F93\u5165\u6570\u636E\u503C",clearable:""},null,8,["modelValue"])]),_:1}),l(r,{label:"\u6392\u5E8F",prop:"sort"},{default:o(()=>[v("div",null,[l(D,{modelValue:a(u).sort,"onUpdate:modelValue":e[2]||(e[2]=s=>a(u).sort=s),min:0,max:9999},null,8,["modelValue"]),S])]),_:1}),l(r,{label:"\u72B6\u6001",required:"",prop:"status"},{default:o(()=>[l(w,{modelValue:a(u).status,"onUpdate:modelValue":e[3]||(e[3]=s=>a(u).status=s)},{default:o(()=>[l(c,{label:1},{default:o(()=>[f("\u6B63\u5E38")]),_:1}),l(c,{label:0},{default:o(()=>[f("\u505C\u7528")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(r,{label:"\u5907\u6CE8",prop:"remark"},{default:o(()=>[l(n,{modelValue:a(u).remark,"onUpdate:modelValue":e[4]||(e[4]=s=>a(u).remark=s),type:"textarea",autosize:{minRows:4,maxRows:6},clearable:"",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{X as _};

import{P,I as $,o as R,w as q,D as M,F as N}from"./element-plus.47dbc6c1.js";import{_ as U}from"./index.vue_vue_type_script_setup_true_lang.f14c18ae.js";import{l as V,b as I}from"./index.b44a590f.js";import{u as O}from"./vue-router.995b143f.js";import{g as S,u as T,a as z}from"./consumer.f8689100.js";import{_ as H}from"./account-adjust.vue_vue_type_script_setup_true_lang.5b5b349a.js";import{d as D,a0 as w,s as W,am as G,o as d,c as J,W as e,O as t,u as a,a as p,T as l,U as u,P as f,M as F}from"./@vue.c3e77981.js";import"./@vueuse.a48d0173.js";import"./@element-plus.12c58ce2.js";import"./lodash-es.2b4cc642.js";import"./dayjs.f6b311c4.js";import"./axios.0043c060.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.4558177f.js";import"./pinia.b5130627.js";import"./css-color-function.4c79dc15.js";import"./color.a28dd44c.js";import"./clone.238ad270.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.6fbc6031.js";import"./vue-clipboard3.f565fd84.js";import"./clipboard.a7169b77.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.b8b719e9.js";import"./index.0d3b3a96.js";const K={class:"bg-page flex py-5 mb-10 items-center"},L={class:"basis-40 flex flex-col justify-center items-center"},Q=p("div",{class:"mb-2 text-tx-regular"},"\u7528\u6237\u5934\u50CF",-1),X={class:"basis-40 flex flex-col justify-center items-center"},Y=p("div",{class:"text-tx-regular"},"\u8D26\u6237\u4F59\u989D",-1),Z={class:"mt-2 flex items-center"},ee=D({name:"consumerDetail"}),Ve=D({...ee,setup(te){const x=O(),s=w({avatar:"",channel:"",create_time:"",login_time:"",mobile:"",nickname:"",real_name:0,sex:0,sn:"",account:"",user_money:""}),m=w({show:!1,value:""}),h=W(),E=async()=>{const n=await S({id:x.query.id});Object.keys(s).forEach(o=>{s[o]=n[o]})},y=async(n,o)=>{V(n)||(await T({id:x.query.id,field:o,value:n}),E())},k=n=>{m.show=!0,m.value=n},A=async n=>{await z({user_id:x.query.id,...n}),m.show=!1,E()};return E(),(n,o)=>{const g=P,C=$,B=R,c=q,i=M,v=I,b=U,j=N,_=G("perms");return d(),J("div",null,[e(C,{class:"!border-none",shadow:"never"},{default:t(()=>[e(g,{content:"\u7528\u6237\u8BE6\u60C5",onBack:o[0]||(o[0]=r=>n.$router.back())})]),_:1}),e(C,{class:"mt-4 !border-none",header:"\u57FA\u672C\u8D44\u6599",shadow:"never"},{default:t(()=>[e(j,{ref_key:"formRef",ref:h,class:"ls-form",model:a(s),"label-width":"120px"},{default:t(()=>[p("div",K,[p("div",L,[Q,e(B,{src:a(s).avatar,size:58},null,8,["src"])]),p("div",X,[Y,p("div",Z,[l(" \xA5"+u(a(s).user_money)+" ",1),f((d(),F(c,{type:"primary",link:"",onClick:o[1]||(o[1]=r=>k(a(s).user_money))},{default:t(()=>[l(" \u8C03\u6574 ")]),_:1})),[[_,["user.user/adjustMoney"]]])])])]),e(i,{label:"\u7528\u6237\u6635\u79F0\uFF1A"},{default:t(()=>[l(u(a(s).nickname),1)]),_:1}),e(i,{label:"\u8D26\u53F7\uFF1A"},{default:t(()=>[l(u(a(s).account)+" ",1),f((d(),F(b,{class:"ml-[10px]",onConfirm:o[2]||(o[2]=r=>y(r,"account")),limit:32},{default:t(()=>[e(c,{type:"primary",link:""},{default:t(()=>[e(v,{name:"el-icon-EditPen"})]),_:1})]),_:1})),[[_,["user.user/edit"]]])]),_:1}),e(i,{label:"\u771F\u5B9E\u59D3\u540D\uFF1A"},{default:t(()=>[l(u(a(s).real_name||"-")+" ",1),f((d(),F(b,{class:"ml-[10px]",onConfirm:o[3]||(o[3]=r=>y(r,"real_name")),limit:32},{default:t(()=>[e(c,{type:"primary",link:""},{default:t(()=>[e(v,{name:"el-icon-EditPen"})]),_:1})]),_:1})),[[_,["user.user/edit"]]])]),_:1}),e(i,{label:"\u6027\u522B\uFF1A"},{default:t(()=>[l(u(a(s).sex)+" ",1),f((d(),F(b,{class:"ml-[10px]",type:"select",options:[{label:"\u672A\u77E5",value:0},{label:"\u7537",value:1},{label:"\u5973",value:2}],onConfirm:o[4]||(o[4]=r=>y(r,"sex"))},{default:t(()=>[e(c,{type:"primary",link:""},{default:t(()=>[e(v,{name:"el-icon-EditPen"})]),_:1})]),_:1})),[[_,["user.user/edit"]]])]),_:1}),e(i,{label:"\u8054\u7CFB\u7535\u8BDD\uFF1A"},{default:t(()=>[l(u(a(s).mobile||"-")+" ",1),f((d(),F(b,{class:"ml-[10px]",type:"number",onConfirm:o[5]||(o[5]=r=>y(r,"mobile"))},{default:t(()=>[e(c,{type:"primary",link:""},{default:t(()=>[e(v,{name:"el-icon-EditPen"})]),_:1})]),_:1})),[[_,["user.user/edit"]]])]),_:1}),e(i,{label:"\u6CE8\u518C\u6765\u6E90\uFF1A"},{default:t(()=>[l(u(a(s).channel),1)]),_:1}),e(i,{label:"\u6CE8\u518C\u65F6\u95F4\uFF1A"},{default:t(()=>[l(u(a(s).create_time),1)]),_:1}),e(i,{label:"\u6700\u8FD1\u767B\u5F55\u65F6\u95F4\uFF1A"},{default:t(()=>[l(u(a(s).login_time),1)]),_:1})]),_:1},8,["model"])]),_:1}),e(H,{show:a(m).show,"onUpdate:show":o[6]||(o[6]=r=>a(m).show=r),value:a(m).value,onConfirm:A},null,8,["show","value"])])}}});export{Ve as default};

import{_ as D}from"./index.cb93648f.js";import{D as v,C as b,F as h,I as U,w as y}from"./element-plus.47dbc6c1.js";import{_ as k}from"./picker.68d2d782.js";import{a as I,f as a,F as x}from"./index.b44a590f.js";import{d as f,r as S,a0 as _,o as M,c as N,W as u,O as t,u as e,a as n,T as q}from"./@vue.c3e77981.js";import"./@vueuse.a48d0173.js";import"./@element-plus.12c58ce2.js";import"./lodash-es.2b4cc642.js";import"./dayjs.f6b311c4.js";import"./axios.0043c060.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.0d3b3a96.js";import"./index.9e75a7e5.js";import"./index.vue_vue_type_script_setup_true_lang.888f77b2.js";import"./index.2af4968f.js";import"./index.a29cc25f.js";import"./index.vue_vue_type_script_setup_true_lang.f14c18ae.js";import"./usePaging.d25ebf19.js";import"./vue3-video-play.4813c60b.js";import"./vuedraggable.f5d349cf.js";import"./vue.5e78aba2.js";import"./sortablejs.f52b587b.js";import"./lodash.4558177f.js";import"./vue-router.995b143f.js";import"./pinia.b5130627.js";import"./css-color-function.4c79dc15.js";import"./color.a28dd44c.js";import"./clone.238ad270.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.6fbc6031.js";import"./vue-clipboard3.f565fd84.js";import"./clipboard.a7169b77.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.b8b719e9.js";const R={class:"user-setting"},T={class:"w-80"},O={class:"w-80"},W={class:"w-80"},j={class:"w-80"},z={class:"w-80"},G=f({name:"userSetting"}),Ro=f({...G,setup(H){const d=S(),i=I(),o=_({avatar:"",account:"",name:"",password_old:"",password:"",password_confirm:""}),c=_({avatar:[{required:!0,message:"\u5934\u50CF\u4E0D\u80FD\u4E3A\u7A7A",trigger:["change"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}]}),F=async()=>{const p=i.userInfo;for(const r in o)o[r]=p[r]},w=async()=>{if(o.password_old||o.password||o.password_confirm){if(!o.password_old)return a.msgError("\u8BF7\u8F93\u5165\u5F53\u524D\u5BC6\u7801");if(!o.password)return a.msgError("\u8BF7\u8F93\u5165\u65B0\u7684\u5BC6\u7801");if(!o.password_confirm)return a.msgError("\u8BF7\u8F93\u5165\u786E\u5B9A\u5BC6\u7801");if(o.password_confirm!=o.password)return a.msgError("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u6837")}if(o.password_old&&o.password&&o.password_confirm){if(o.password_old.length<6||o.password_old.length>32)return a.msgError("\u5BC6\u7801\u957F\u5EA6\u57286\u523032\u4E4B\u95F4");if(o.password.length<6||o.password.length>32)return a.msgError("\u5BC6\u7801\u957F\u5EA6\u57286\u523032\u4E4B\u95F4");if(o.password_confirm.length<6||o.password_confirm.length>32)return a.msgError("\u5BC6\u7801\u957F\u5EA6\u57286\u523032\u4E4B\u95F4")}await x(o),i.getUserInfo()},E=async()=>{var p;await((p=d.value)==null?void 0:p.validate()),w()};return F(),(p,r)=>{const B=k,l=v,m=b,g=h,C=U,V=y,A=D;return M(),N("div",R,[u(C,{class:"!border-none",shadow:"never"},{default:t(()=>[u(g,{ref_key:"formRef",ref:d,class:"ls-form",model:e(o),rules:e(c),"label-width":"100px"},{default:t(()=>[u(l,{label:"\u5934\u50CF\uFF1A",prop:"avatar"},{default:t(()=>[u(B,{modelValue:e(o).avatar,"onUpdate:modelValue":r[0]||(r[0]=s=>e(o).avatar=s),limit:1},null,8,["modelValue"])]),_:1}),u(l,{label:"\u8D26\u53F7\uFF1A",prop:"account"},{default:t(()=>[n("div",T,[u(m,{modelValue:e(o).account,"onUpdate:modelValue":r[1]||(r[1]=s=>e(o).account=s),disabled:""},null,8,["modelValue"])])]),_:1}),u(l,{label:"\u540D\u79F0\uFF1A",prop:"name"},{default:t(()=>[n("div",O,[u(m,{modelValue:e(o).name,"onUpdate:modelValue":r[2]||(r[2]=s=>e(o).name=s),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])])]),_:1}),u(l,{label:"\u5F53\u524D\u5BC6\u7801\uFF1A",prop:"password_old"},{default:t(()=>[n("div",W,[u(m,{modelValue:e(o).password_old,"onUpdate:modelValue":r[3]||(r[3]=s=>e(o).password_old=s),modelModifiers:{trim:!0},placeholder:"\u4FEE\u6539\u5BC6\u7801\u65F6\u5FC5\u586B, \u4E0D\u4FEE\u6539\u5BC6\u7801\u65F6\u7559\u7A7A",type:"password","show-password":""},null,8,["modelValue"])])]),_:1}),u(l,{label:"\u65B0\u7684\u5BC6\u7801\uFF1A",prop:"password"},{default:t(()=>[n("div",j,[u(m,{modelValue:e(o).password,"onUpdate:modelValue":r[4]||(r[4]=s=>e(o).password=s),modelModifiers:{trim:!0},placeholder:"\u4FEE\u6539\u5BC6\u7801\u65F6\u5FC5\u586B, \u4E0D\u4FEE\u6539\u5BC6\u7801\u65F6\u7559\u7A7A",type:"password","show-password":""},null,8,["modelValue"])])]),_:1}),u(l,{label:"\u786E\u5B9A\u5BC6\u7801\uFF1A",prop:"password_confirm"},{default:t(()=>[n("div",z,[u(m,{modelValue:e(o).password_confirm,"onUpdate:modelValue":r[5]||(r[5]=s=>e(o).password_confirm=s),modelModifiers:{trim:!0},placeholder:"\u4FEE\u6539\u5BC6\u7801\u65F6\u5FC5\u586B, \u4E0D\u4FEE\u6539\u5BC6\u7801\u65F6\u7559\u7A7A",type:"password","show-password":""},null,8,["modelValue"])])]),_:1})]),_:1},8,["model","rules"])]),_:1}),u(A,null,{default:t(()=>[u(V,{type:"primary",onClick:E},{default:t(()=>[q("\u4FDD\u5B58")]),_:1})]),_:1})])}}});export{Ro as default};

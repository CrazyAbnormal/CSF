import{B as D,i as _,x as $,d as V,j as t,o as E,c as M,w as o,b as e,a as b,t as R,g as x,O as y}from"./app-BIvC4yYZ.js";const T={class:"text-h5"},z={style:{"text-align":"end"}},G=D({__name:"Modal",props:{account:{type:Object,default:null},value:{type:Boolean,default:!1},regions:{type:Object,default:null},action:{type:String}},emits:["reloadAccounts","input"],setup(p,{emit:k}){const s=k,d=p;_(()=>d.account,l=>{l&&(n.id=l.id,n.name=l.name,n.email=l.email,n.selected_region=l.region)});const n=$({id:null,name:null,email:null,selected_region:[]}),i=V(!1);_(()=>d.value,l=>{i.value=l});const m=V("");_(()=>d.action,l=>{m.value=l});const w=async()=>{m.value=="Add"?y.post("/accounts/add",n):m.value=="Update"&&y.post("/accounts/update",n),s("input",!1),s("reloadAccounts")},A=l=>{s("input",l),s("reloadAccounts")};return(l,a)=>{const C=t("v-card-title"),v=t("v-text-field"),u=t("v-col"),r=t("v-row"),B=t("v-select"),U=t("v-card-text"),N=t("v-spacer"),O=t("v-divider"),f=t("v-icon"),g=t("v-btn"),j=t("v-card-action"),S=t("v-card"),q=t("v-dialog");return E(),M(q,{modelValue:i.value,"onUpdate:modelValue":a[5]||(a[5]=c=>i.value=c),width:"600",scrollable:"",persistent:""},{default:o(()=>[e(S,null,{default:o(()=>[e(C,{class:"bg-indigo"},{default:o(()=>[b("span",T,R(d.action)+" Account",1)]),_:1}),e(U,null,{default:o(()=>[e(r,{style:{"margin-bottom":"-30px"}},{default:o(()=>[e(u,{cols:"12"},{default:o(()=>[e(v,{"prepend-icon":"mdi-account",label:"Name*",modelValue:n.name,"onUpdate:modelValue":a[0]||(a[0]=c=>n.name=c),variant:"solo"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{style:{"margin-bottom":"-30px"}},{default:o(()=>[e(u,{cols:"12"},{default:o(()=>[e(v,{"prepend-icon":"mdi-email",label:"Email*",modelValue:n.email,"onUpdate:modelValue":a[1]||(a[1]=c=>n.email=c),variant:"solo",type:"email",required:""},null,8,["modelValue"])]),_:1})]),_:1}),e(r,null,{default:o(()=>[e(u,{cols:"12"},{default:o(()=>[e(B,{"prepend-icon":"mdi-map-marker",label:"Region*",modelValue:n.selected_region,"onUpdate:modelValue":a[2]||(a[2]=c=>n.selected_region=c),variant:"solo",items:p.regions,"item-title":"name","item-value":"id",required:""},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),e(N),e(j,null,{default:o(()=>[e(O),b("div",z,[e(g,{class:"ma-2",color:"blue-grey-lighten-2",onClick:a[3]||(a[3]=c=>A(!1))},{default:o(()=>[e(f,{start:"",icon:"mdi-cancel"}),x(" Cancel ")]),_:1}),e(g,{class:"ma-2",color:"green-darken-1",type:"button",onClick:a[4]||(a[4]=c=>w())},{default:o(()=>[x(" Save "),e(f,{end:"",icon:"mdi-check"})]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}});export{G as default};

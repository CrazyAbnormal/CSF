import{A as j}from"./AppLayout-CA4bO9ee.js";import"./index-CT-or7Ql.js";import{_ as B}from"./Modal.vue_vue_type_script_setup_true_lang-Dt-hsm1f.js";import"./vue-multiselect.css_vue_type_style_index_0_src_true_lang-DrZzqGDY.js";import{d,i as N,j as u,o as r,c as D,w as a,a as t,b as l,g,t as c,u as _,k as T,e as m,h as F,F as y,O as k}from"./app-BIvC4yYZ.js";import"./sweetalert2.all-B41_pD4N.js";import"./dost-logo-B4Huuyod.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const L=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," SubUnit PSTOs ",-1),P={class:"py-12"},R={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},$={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},z={class:"w-full m-5 text-right"},E=t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",{class:"text-left"}," SubUnit "),t("th",{class:"text-center"}," Actions ")])],-1),M={class:"text-center"},q={key:1,span:""},G={class:"m-2"},H={style:{color:"gray"}},J={class:"text-center"},ot={__name:"Index",props:{sub_units:Object,sub_unit_pstos:Object,pstos:Object},setup(i){const h=d(!1),f=d(null);d({});const p=d({}),v=d("");N(()=>v.value,s=>{k.get("/unit-pstos",{search:s},{preserveState:!0})});const x=async(s,o,b)=>{h.value=s,f.value=o,p.value=b},w=async()=>{p.value={}};let n=1;const S=async s=>{k.visit("/sub-unit-pstos?page="+s,{preserveState:!0}),n=s};return(s,o)=>{const b=u("v-text-field"),V=u("v-col"),C=u("v-row"),U=u("v-btn"),O=u("v-pagination"),A=u("v-table"),I=u("v-card");return r(),D(j,{title:"Dashboard"},{header:a(()=>[L]),default:a(()=>[t("div",P,[t("div",R,[t("div",$,[l(C,{style:{"margin-bottom":"-30px"}},{default:a(()=>[l(V,{cols:"6"},{default:a(()=>[t("div",z,[l(b,{loading:s.loading,"append-inner-icon":"mdi-magnify",density:"compact",label:"Search",variant:"solo","hide-details":"","single-line":"",modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=e=>v.value=e),"onClick:appendInner":s.onClick},null,8,["loading","modelValue","onClick:appendInner"])])]),_:1})]),_:1}),l(I,{class:"m-3"},{default:a(()=>[l(A,null,{bottom:a(()=>[t("div",G,[t("span",H,[g(" Showing "+c(i.sub_units.from)+" to "+c(i.sub_units.to)+" out of ",1),t("b",null,c(i.sub_units.total)+" records",1),g(" "+c(_(n)),1)]),t("div",J,[l(O,{modelValue:_(n),"onUpdate:modelValue":o[1]||(o[1]=e=>T(n)?n.value=e:n=e),length:i.sub_units.last_page,circle:"",onClick:o[2]||(o[2]=e=>S(_(n)))},null,8,["modelValue","length"])])])]),default:a(()=>[E,t("tbody",null,[(r(!0),m(y,null,F(i.sub_units.data,(e,K)=>(r(),m("tr",{key:e.id,class:"hover:bg-gray-200"},[e?(r(),m(y,{key:0},[t("td",null,c(e.id),1),t("td",null,c(e.sub_unit_name),1),t("td",M,[l(U,{onClick:Q=>x(!0,"Assign",e),size:"small","prepend-icon":"mdi-update",color:"primary"},{default:a(()=>[g(" Assign ")]),_:2},1032,["onClick"])])],64)):(r(),m("td",q," No data at the moment"))]))),128))])]),_:1})]),_:1})])])]),l(B,{value:h.value,sub_unit:p.value,sub_unit_pstos:i.sub_unit_pstos,pstos:i.pstos,action:f.value,page_number:_(n),onInput:x,onReloadSubUnits:w},null,8,["value","sub_unit","sub_unit_pstos","pstos","action","page_number"])]),_:1})}}};export{ot as default};

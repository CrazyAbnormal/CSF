import{_ as k}from"./dost-logo-B4Huuyod.js";import{j as n,o as l,e as m,b as e,u as b,a,g as i,t as g,f as N,w as t,F as f,Z as O,h as C,c as S,m as x,O as j}from"./app-BIvC4yYZ.js";import{A as B}from"./aos-CUTzrmPj.js";const T={"data-aos":"fade-down","data-aos-duration":"500","data-aos-delay":"500",style:{"backdrop-filter":"blur(2px)"},class:"bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"},V={class:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"},D={href:"/",class:"flex items-center space-x-3 rtl:space-x-reverse"},z=a("img",{src:k,class:"h-8",alt:"DOST Logo"},null,-1),A={class:"self-center text-2xl font-semibold whitespace-nowrap"},F={key:0},L={class:"w-full border bg-blue"},U={style:{height:"150px"},class:"mx-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"},$={class:"mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"},q={__name:"SubUnitTypes",props:{region_id:Number,region:Object,service_id:Number,unit_id:Number,sub_unit_id:Number,sub_unit:Object,types:Object},setup(s){B.init();const p=async(d,r,_,c,o)=>{j.get("/services/csf?region_id="+d+"&service_id="+r+"&unit_id="+_+"&sub_unit_id="+c+"&sub_unit_type="+o)},h=async d=>{window.history.back()};return(d,r)=>{const _=n("v-card-title"),c=n("v-col"),o=n("v-row"),v=n("v-icon"),y=n("v-btn"),w=n("v-container");return l(),m(f,null,[e(b(O),{title:"Service Units"}),a("nav",T,[a("div",V,[a("a",D,[z,a("span",A,[i("DOST "),s.region?(l(),m("span",F,g(s.region.code),1)):N("",!0),i(" Customer Relation Management System")])])])]),e(w,{"fill-height":""},{default:t(()=>[e(o,{class:"mx-15",style:{"margin-top":"100px"}},{default:t(()=>[e(c,null,{default:t(()=>[a("div",L,[e(_,{class:"text-center text-uppercase"},{default:t(()=>[i(g(s.sub_unit.sub_unit_name),1)]),_:1})])]),_:1})]),_:1}),e(o,{class:"mx-15 mt-5",align:"center",justify:"center"},{default:t(()=>[(l(!0),m(f,null,C(s.types,u=>(l(),S(c,{cols:"12",sm:"4",md:"4",lg:"4"},{default:t(()=>[e(b(x),{onClick:E=>p(s.region_id,s.service_id,s.unit_id,s.sub_unit_id,u.type_name)},{default:t(()=>[a("div",U,[e(v,{color:"blue",size:"x-large",class:"p-3"},{default:t(()=>[i("mdi-check-circle")]),_:1}),a("h5",$,g(u.type_name),1)])]),_:2},1032,["onClick"])]),_:2},1024))),256))]),_:1}),e(o,null,{default:t(()=>[e(b(x),{onClick:r[0]||(r[0]=u=>h())},{default:t(()=>[e(y,{"prepend-icon":"mdi-arrow-left",style:{"margin-left":"120px"}},{default:t(()=>[i("Back")]),_:1})]),_:1})]),_:1})]),_:1})],64)}}};export{q as default};

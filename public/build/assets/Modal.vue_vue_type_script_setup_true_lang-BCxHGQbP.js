import{B as M,i as s,x as T,d as b,j as l,o as i,c as v,w as a,b as e,e as g,f as _,a as h,g as w,O as x}from"./app-BIvC4yYZ.js";const q={key:0,class:"text-h5"},z={key:1,class:"text-h5"},F={style:{"text-align":"center"}},H=M({__name:"Modal",props:{data:{type:Object,default:null},value:{type:Boolean,default:!1},action_clicked:{type:String,default:null},selected_service:{type:Object,default:null}},emits:["input"],setup(y,{emit:N}){const p=N,c=y;s(()=>c.account,n=>{n&&(t.id=n.id,t.name=n.name,t.email=n.email,t.selected_region=n.region)});const t=T({service_id:null,service_name:null,unit_name:null}),r=b(!1);s(()=>c.value,n=>{r.value=n});const C=b("");s(()=>c.action,n=>{C.value=n}),s(()=>t.selected_service,n=>{t.selected_unit=null});const B=n=>{p("input",n)},S=()=>{c.actioned_clicked=="add_new_service"?x.post("/services/add",t):(t.service_id=c.selected_service.id,x.post("/services/unit/add",t)),p("input",!1)};return(n,o)=>{const U=l("v-card-title"),u=l("v-text-field"),m=l("v-col"),f=l("v-row"),O=l("v-card-text"),j=l("v-spacer"),A=l("v-divider"),k=l("v-icon"),V=l("v-btn"),$=l("v-card-action"),D=l("v-card"),E=l("v-dialog");return i(),v(E,{modelValue:r.value,"onUpdate:modelValue":o[5]||(o[5]=d=>r.value=d),width:"600",scrollable:"",persistent:""},{default:a(()=>[e(D,null,{default:a(()=>[e(U,{class:"bg-indigo mb-5"},{default:a(()=>[c.action_clicked=="add_new_service"?(i(),g("span",q,"Add New Service")):_("",!0),c.action_clicked=="add_new_unit"?(i(),g("span",z,"Add New Unit")):_("",!0)]),_:1}),e(O,null,{default:a(()=>[c.action_clicked=="add_new_service"?(i(),v(f,{key:0,style:{"margin-bottom":"-30px"}},{default:a(()=>[e(m,{cols:"12"},{default:a(()=>[e(u,{"prepend-icon":"mdi-account",label:"Service Name",modelValue:t.service_name,"onUpdate:modelValue":o[0]||(o[0]=d=>t.service_name=d),variant:"outlined"},null,8,["modelValue"])]),_:1})]),_:1})):_("",!0),c.action_clicked=="add_new_unit"?(i(),v(f,{key:1,style:{"margin-bottom":"-30px"}},{default:a(()=>[e(m,{cols:"12"},{default:a(()=>[e(u,{"prepend-icon":"mdi-account",label:"Service",modelValue:c.selected_service.services_name,"onUpdate:modelValue":o[1]||(o[1]=d=>c.selected_service.services_name=d),variant:"outlined"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:a(()=>[e(u,{"prepend-icon":"mdi-account",label:"Unit Name",modelValue:t.unit_name,"onUpdate:modelValue":o[2]||(o[2]=d=>t.unit_name=d),variant:"outlined"},null,8,["modelValue"])]),_:1})]),_:1})):_("",!0)]),_:1}),e(j),e($,null,{default:a(()=>[e(A),h("div",F,[e(V,{class:"ma-2",color:"blue-grey-lighten-2",onClick:o[3]||(o[3]=d=>B(!1))},{default:a(()=>[e(k,{start:"",icon:"mdi-cancel"}),w(" Cancel ")]),_:1}),e(V,{class:"ma-2",color:"green-darken-1",type:"button",onClick:o[4]||(o[4]=d=>S())},{default:a(()=>[w(" Save "),e(k,{end:"",icon:"mdi-check"})]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}});export{H as _};

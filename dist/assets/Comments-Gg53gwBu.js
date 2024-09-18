import{d as L,g as V,r as p,p as S,c as P,f as l,e as y,t as k,u as s,b as a,w as n,i as F,a as _,o as Q,q as U,h as W,j as X,E as M}from"./index-BmD5viJS.js";import{D as b,C as v}from"./index-BQ4MH4yd.js";import{U as c}from"./index-DYHTdi6t.js";/* empty css                   */const Z={class:"mb-4"},h={class:"mt-2 text-0.9rem text-text-secondary"},ee={class:"text-green"},te={class:"text-text-primary"},le={class:"text-red"},oe={class:"mb-4 f-c-e"},ae={class:"f-c-b flex-gap-1 flex-wrap"},se={class:"f-c-b"},ne={class:"text-red"},ie={class:"f-c-c"},re={class:"f-c-c"},fe=L({__name:"Comments",async setup(ue){let r,x;const C=([r,x]=V(()=>b.create()),r=await r,x(),r),d=p(([r,x]=V(()=>b.get(C,v.DB_COMMENTS,v.DB_KEY_COMMENTS)),r=await r,x(),r)),B=p(([r,x]=V(()=>b.get(C,v.DB_CONFIG,v.DB_KEY_CONFIG)),r=await r,x(),r)),g=p(),f=p(!1),E=p("新增"),u=p(!1),w=p(),q=p({text:[{required:!0,message:"输入备注！",trigger:"change"},{required:!0,message:"输入备注！",trigger:"blur"}],cost:[{required:!0,validator:c.Forms.validateMoney,trigger:"change"},{required:!0,validator:c.Forms.validateMoney,trigger:"blur"}]}),t=p({text:"",cost:100,type:"支"});function K(){c.Forms.formValidator(w.value,()=>{const o=d.value.items.filter(c.createFilter(t.value.text));!o||o.length==0&&t.value.text?(d.value.items.push({value:t.value.text,cost:t.value.cost,type:t.value.type}),b.put(C,v.DB_COMMENTS,c.Objects.raw(d.value),v.DB_KEY_COMMENTS),u.value=!u.value):M.error("重复添加！")},()=>{M.error("检查输入的值是否正确")})}function R(){var e;const o=(e=d.value.items)==null?void 0:e.findIndex(m=>m.value===g.value.value);o>=0?c.Forms.formValidator(w.value,()=>{d.value.items[o]={value:t.value.text,cost:t.value.cost,type:t.value.type},b.put(C,v.DB_COMMENTS,c.Objects.raw(d.value),v.DB_KEY_COMMENTS),u.value=!u.value,t.value.value="",t.value.cost=100,t.value.type="支"},()=>{M.error("检查输入的值是否正确")}):M.error("更新失败")}function Y(){var e;const o=(e=d.value.items)==null?void 0:e.findIndex(m=>m.value===g.value.value);o>=0?(d.value.items.splice(o,1),b.put(C,v.DB_COMMENTS,c.Objects.raw(d.value),v.DB_KEY_COMMENTS),f.value=!f.value):M.error("删除失败")}function $(o){g.value=o,f.value=!f.value}function j(o){E.value="更新",g.value=o,t.value.text=o.value,t.value.cost=o.cost,t.value.type=o.type,u.value=!u.value}function z(){E.value="新增",t.value.text="",t.value.cost=100,t.value.type="支",u.value=!u.value}const N=S(()=>d.value.items.reduce((o,e)=>o+e.cost,0)),G=S(()=>B.value.budget-N.value);return(o,e)=>{const m=_("el-button"),D=_("el-table-column"),A=_("el-table"),O=_("el-dialog"),T=_("el-input"),I=_("el-form-item"),H=_("el-form");return Q(),P("div",null,[l("div",Z,[e[10]||(e[10]=l("div",null,"快捷备注",-1)),e[11]||(e[11]=l("div",{class:"text-0.8rem text-text-secondary"},"快捷备注便于快速填写计划项。",-1)),l("div",h,[e[7]||(e[7]=y(" 总预算：")),l("span",ee,k(s(B).budget),1),e[8]||(e[8]=y("，已计划：")),l("span",te,k(s(N)),1),e[9]||(e[9]=y("，剩余：")),l("span",le,k(s(G)),1)])]),l("div",oe,[a(m,{plain:"",round:"",size:"small",type:"primary",onClick:z},{icon:n(()=>e[12]||(e[12]=[l("div",{class:"i-tabler-plus"},null,-1)])),_:1})]),l("div",ae,[a(A,{data:s(d).items,border:"",stripe:""},{default:n(()=>[a(D,{fixed:"left",label:"备注",prop:"value"}),a(D,{label:"金额",prop:"cost",sortable:""}),a(D,{fixed:"right",label:"操作",width:"90"},{default:n(i=>[l("div",se,[a(m,{link:"",size:"small",type:"danger",onClick:U(J=>$(i.row),["prevent"])},{icon:n(()=>e[13]||(e[13]=[l("div",{class:"i-tabler-trash"},null,-1)])),_:2},1032,["onClick"]),a(m,{link:"",size:"small",type:"success",onClick:U(J=>j(i.row),["prevent"])},{icon:n(()=>e[14]||(e[14]=[l("div",{class:"i-tabler-edit"},null,-1)])),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["data"])]),a(O,{modelValue:s(f),"onUpdate:modelValue":e[1]||(e[1]=i=>F(f)?f.value=i:null),"append-to-body":"",title:"消息提示",width:"90%"},{footer:n(()=>[l("div",ie,[a(m,{class:"mr-4",plain:"",round:"",type:"danger",onClick:Y},{icon:n(()=>e[17]||(e[17]=[l("div",{class:"i-tabler-trash"},null,-1)])),_:1}),a(m,{plain:"",round:"",type:"primary",onClick:e[0]||(e[0]=i=>f.value=!1)},{icon:n(()=>e[18]||(e[18]=[l("div",{class:"i-tabler-x"},null,-1)])),_:1})])]),default:n(()=>[l("div",null,[e[15]||(e[15]=y(" 是否要删除 ")),l("span",ne,k(s(g).value),1),e[16]||(e[16]=y(" 备注？ "))])]),_:1},8,["modelValue"]),a(O,{modelValue:s(u),"onUpdate:modelValue":e[6]||(e[6]=i=>F(u)?u.value=i:null),title:s(E)=="新增"?"新建备注":"修改备注",width:"90%"},{footer:n(()=>[l("div",re,[a(m,{class:"mr-4",plain:"",round:"",onClick:e[4]||(e[4]=i=>u.value=!1)},{icon:n(()=>e[19]||(e[19]=[l("div",{class:"i-tabler-x"},null,-1)])),_:1}),a(m,{plain:"",round:"",type:"primary",onClick:e[5]||(e[5]=i=>s(E)=="新增"?K():R())},{icon:n(()=>e[20]||(e[20]=[l("div",{class:"i-tabler-check"},null,-1)])),_:1})])]),default:n(()=>[a(H,{ref_key:"formInst",ref:w,model:s(t),rules:s(q),"hide-required-asterisk":"","label-position":"left","status-icon":""},{default:n(()=>[a(I,{label:"备注",prop:"text"},{default:n(()=>[a(T,{modelValue:s(t).text,"onUpdate:modelValue":e[2]||(e[2]=i=>s(t).text=i),"prefix-icon":s(W),placeholder:"请输入备注"},null,8,["modelValue","prefix-icon"])]),_:1}),a(I,{label:"金额",prop:"cost"},{default:n(()=>[a(T,{modelValue:s(t).cost,"onUpdate:modelValue":e[3]||(e[3]=i=>s(t).cost=i),"prefix-icon":s(X),placeholder:"请输入金额"},null,8,["modelValue","prefix-icon"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});export{fe as default};

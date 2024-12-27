import{g as $,a7 as D,r as N,K as P,L as A,j as l,o as B,p as Q,D as a,l as n,u as U,W as o,R as L,ab as H,v as g}from"./vendor-a4bc150f.js";import{u as O,g as j}from"./index-f6df17aa.js";import{u as z}from"./useTablePage-d9ea2bdf.js";const E={class:"mock-list"},G={class:"flexBetween"},_="mock-demo3",X=$({__name:"list",setup(K){const{t:p}=D(),{$app:m,proxy:b,$router:h}=O(),{query:s,queryItems:d,searchQuery:f,selectedIds:V,handleSelectionChange:v}=z(_),w=()=>{s.value.selectValue="name"};s.value={selectValue:"name"},d.value={type:{modelValue:"",type:"el-select",label:"类型",width:"160px",options:[{value:1,label:"黑名单"},{value:2,label:"白名单"}],attrs:{placeholder:"单选按钮"}},custom:{label:"插槽自定义",modelValue:"",type:"slot",slotName:"custom"}};const x=N([{prop:"name",label:"名称",minWidth:180},{prop:"appId",label:"APPID",minWidth:180},{prop:"type",label:"类型",minWidth:150,custom:"tag-status",customRender:{options:{1:{type:"danger",name:"黑名单"},2:{type:"primary",name:"白名单"}}}},{prop:"status",label:"状态",minWidth:150,custom:"status",customRender:{options:{1:{type:"success",name:"已发布"},2:{type:"info",name:"未发布"},3:{type:"danger",name:"已驳回"},4:{type:"warning",name:"上线审核中"},5:{type:"primary",name:"下线审核中"}}}},{prop:"date",label:"更新时间",minWidth:180},{prop:"operation",label:"操作",width:180,fixed:"right"}]),T=e=>e.map(t=>t),q=[{type:"detail",label:p("btn.detail")},{type:"delete",label:p("btn.delete"),btnType:"danger",disabled:e=>e.status===3}],C=e=>{const{type:t,record:r}=e;i[t](r)},i=P({toggleQuery(){A(()=>{b.$refs.myTableRef.mediaHeight()})},detail:e=>{h.push({name:`${_}::detail`,query:{id:e.id}})},delete:e=>{m.$deleteConfirm({title:p("tip.deleteConfirmTitle",{t:"模版名称",n:e.name})}).then(()=>{console.log("删除",e),m.$message.warning("接口待提供！")})}});return(e,t)=>{const r=l("el-option"),I=l("el-select"),R=l("el-input"),k=l("tu-query"),c=l("tu-button"),S=l("my-operation"),W=l("table-page");return B(),Q("div",E,[a(W,{ref:"myTableRef",query:o(s),columns:x.value,operations:q,tableAttrs:{"row-key":"id"},"with-order":!1,draggable:"","draggable-option":{show:!0,width:"80",align:"center"},loadDataApi:o(j),transformListData:T,onHandleOperation:C,onSelectionChange:o(v)},{query:n(()=>[U("div",G,[a(k,{queryItems:o(d),"search-btn":{show:!0},onReset:w,onSearch:o(f),onToggle:i.toggleQuery},{custom:n(({item:y})=>[a(R,{modelValue:y.modelValue,"onUpdate:modelValue":u=>y.modelValue=u,style:{width:"320px"},placeholder:"请输入内容"},{prepend:n(()=>[a(I,{modelValue:o(s).selectValue,"onUpdate:modelValue":t[0]||(t[0]=u=>o(s).selectValue=u),placeholder:"Select",style:{width:"80px"}},{default:n(()=>[a(r,{label:"名称",value:"name"}),a(r,{label:"创建人",value:"createUser"})]),_:1},8,["modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1},8,["queryItems","onSearch","onToggle"]),a(S,L(H({selectedTotal:o(V).length})),{buttonGroup:n(()=>[a(c,{type:"add"},{default:n(()=>t[1]||(t[1]=[g("新建")])),_:1}),a(c,{type:"import"},{default:n(()=>t[2]||(t[2]=[g("导入")])),_:1})]),_:1},16)])]),_:1},8,["query","columns","loadDataApi","onSelectionChange"])])}}});export{X as default};

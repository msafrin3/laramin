import{r as u,c as _,a as i,u as t,w as l,F as p,o as f,X as b,b as e,d as g,e as v,v as h,n as k,g as x,O as N}from"./app-9291b4cf.js";import{_ as S}from"./AuthenticatedLayout-36b6ef2c.js";import w from"./ContentHeader-8ebd4524.js";import{S as y}from"./sweetalert2.all-3aee3028.js";const B={class:"row justify-content-center"},K={class:"col-md-4"},V={class:"card"},j=e("div",{class:"card-header"},[e("h3",{class:"card-title mb-0"},"Kemaskini Negeri")],-1),M={class:"card-body"},O={class:"form-group"},E=e("label",null,"Negeri",-1),F={class:"card-footer d-grid gap-2"},T=e("button",{type:"submit",class:"btn btn-success"},"Simpan",-1),X={__name:"Edit",props:{state:Object},setup(d){const r=d,m=[{title:"Settings",active:!0},{title:"State Management",active:!1,link:route("setting.state.index")},{title:"Kemaskini",active:!0}];let o=u({name:r.state.name}),c=()=>{N.put(route("setting.state.update",r.state),o,{onSuccess:s=>{s.props.response.success&&y.fire("Berjaya!",s.props.response.success,"success")}})};return(s,a)=>(f(),_(p,null,[i(t(b),{title:"Kemaskini Negeri"}),i(S,null,{default:l(()=>[i(w,{title:"Kemaskini Negeri",breadcrumbs:m}),e("div",B,[e("div",K,[e("div",V,[j,e("form",{onSubmit:a[1]||(a[1]=g((...n)=>t(c)&&t(c)(...n),["prevent"]))},[e("div",M,[e("div",O,[E,v(e("input",{type:"text",class:"form-control","onUpdate:modelValue":a[0]||(a[0]=n=>t(o).name=n)},null,512),[[h,t(o).name]])])]),e("div",F,[T,i(t(k),{href:s.route("setting.state.index"),class:"btn btn-light"},{default:l(()=>[x("Batal")]),_:1},8,["href"])])],32)])])])]),_:1})],64))}};export{X as default};
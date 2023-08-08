import{r as T,c as n,a as y,u as a,w as j,b as t,d as K,e as u,j as g,F as b,i as v,t as i,f as w,v as h,g as m,h as E,o as r,X as I,n as X,O as M}from"./app-5ddeb4cf.js";import{_ as Z}from"./AuthenticatedLayout-738a20d3.js";import q from"./ContentHeader-b774e2bd.js";import"./leaflet-a9308030.js";import"./choices-7f0ec532.js";import{S as J}from"./sweetalert2.all-9a6cc583.js";import{f as x}from"./index-a664f95c.js";const G={class:"card"},Q={class:"card-body"},R={class:"nav nav-tabs nav-border-top nav-border-top-primary mb-3",role:"tablist"},W=t("li",{class:"nav-item",role:"presentation"},[t("a",{class:"nav-link active","data-bs-toggle":"tab",href:"#tab1",role:"tab","aria-selected":"true"},[t("i",{class:"ri-thunderstorms-fill align-middle me-1"}),m(" Maklumat Bencana ")])],-1),Y=t("li",{class:"nav-item",role:"presentation"},[t("a",{class:"nav-link","data-bs-toggle":"tab",href:"#tab2",role:"tab","aria-selected":"false",tabindex:"-1"},[t("i",{class:"ri-home-heart-line me-1 align-middle"}),m(" Pusat Pemindahan ")])],-1),tt={class:"nav-item",role:"presentation"},st=t("i",{class:"ri-map-pin-fill me-1 align-middle"},null,-1),at={class:"tab-content text-muted"},lt={class:"tab-pane active show",id:"tab1",role:"tabpanel"},et={class:"row"},ot={class:"col-md-6"},it={class:"table table-sm table-borderless"},dt=t("th",{width:"30%"},"Tajuk",-1),nt=t("td",null,":",-1),rt=t("th",null,"Keterangan",-1),ct=t("td",null,":",-1),ut=t("th",null,"Jenis Bencana",-1),mt=t("td",null,":",-1),_t=t("th",null,"Level",-1),bt=t("td",null,":",-1),ht=t("th",null,"Negeri",-1),pt=t("td",null,":",-1),vt=t("th",null,"Daerah",-1),gt=t("td",null,":",-1),ft=t("th",null,"Mukim",-1),kt=t("td",null,":",-1),yt=t("th",null,"Tarikh Mula",-1),wt=t("td",null,":",-1),Pt=t("th",null,"Status",-1),Mt=t("td",null,":",-1),xt={class:"col-md-6"},St={class:"text-end"},Vt=t("i",{class:"ri-edit-2-fill align-bottom me-1"},null,-1),Dt={class:"tab-pane",id:"tab2",role:"tabpanel"},Ut=t("div",{class:"text-end"},[t("button",{type:"button",class:"btn btn-success","data-bs-toggle":"modal","data-bs-target":"#addPPSModal"},[t("i",{class:"ri-add-circle-fill align-bottom me-1"}),m(" Daftar Baru ")])],-1),Ct={class:"table table-bordered mt-3"},Bt=t("thead",null,[t("tr",null,[t("th",null,"#"),t("th",null,"Daerah"),t("th",null,"Pusat Pemindahan"),t("th",null,"Jumlah Keluarga"),t("th",null,"Jumlah Mangsa"),t("th",null,"Jumlah Kematian"),t("th",null,"Dibuka Pada"),t("th",null,"Ditutup Pada"),t("th",null,"Tindakan")])],-1),Tt={class:"text-center"},$t={class:"text-center"},Lt={class:"text-center"},jt={class:"d-flex gap-2"},Kt=["onClick"],Jt=t("i",{class:"ri-edit-2-fill align-bottom me-1"},null,-1),Ot=t("button",{type:"button",class:"btn btn-danger btn-sm"},[t("i",{class:"ri-delete-bin-line align-bottom me-1"}),m(" Delete ")],-1),Nt=t("div",{class:"tab-pane",id:"tab3",role:"tabpanel"},[t("div",{id:"map",style:{width:"100%",height:"600px"}})],-1),Ht={id:"addPPSModal",class:"modal fade","aria-labelledby":"myModalLabel","aria-modal":"true",role:"dialog"},Ft={class:"modal-dialog modal-lg"},zt={class:"modal-content"},At=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"myModalLabel"},"Daftar Maklumat PPS"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Et={class:"modal-body"},It={class:"row mb-3"},Xt=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},"Negeri")],-1),Zt={class:"col-md-9"},qt=t("option",{value:""},"-- Pilih Negeri --",-1),Gt=["value"],Qt={class:"row mb-3"},Rt=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},"Daerah")],-1),Wt={class:"col-md-9"},Yt=t("option",{value:""},"-- Pilih Daerah --",-1),ts=["value"],ss={class:"row mb-3"},as=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},"Mukim")],-1),ls={class:"col-md-9"},es=t("option",{value:""},"-- Pilih Mukim --",-1),os=["value"],is={class:"row mb-3"},ds=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},[m("Pusat Pemindahan "),t("span",{class:"text-danger"},"*")])],-1),ns={class:"col-md-9"},rs=["value"],cs={key:0,class:"text-danger"},us={class:"row mb-3"},ms=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},"Jumlah Keluarga")],-1),_s={class:"col-md-4"},bs={class:"row mb-3"},hs=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},"Jumlah Mangsa")],-1),ps={class:"col-md-4"},vs={class:"row mb-3"},gs=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},"Jumlah Kematian")],-1),fs={class:"col-md-4"},ks={class:"row mb-3"},ys=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},[m("Tarikh Dibuka "),t("span",{class:"text-danger"},"*")])],-1),ws={class:"col-md-4"},Ps={key:0,class:"text-danger"},Ms={class:"row mb-3"},xs=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},"Tarikh Ditutup")],-1),Ss={class:"col-md-4"},Vs=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-light","data-bs-dismiss":"modal"},"Batal"),t("button",{type:"submit",class:"btn btn-primary"},"Simpan")],-1),Ds={id:"editPPSModal",class:"modal fade","aria-labelledby":"myModalLabel","aria-modal":"true",role:"dialog"},Us={class:"modal-dialog modal-lg"},Cs={class:"modal-content"},Bs=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"myModalLabel"},"Kemaskini Maklumat PPS"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ts={class:"modal-body"},$s={class:"row mb-3"},Ls=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},"Negeri")],-1),js={class:"col-md-9"},Ks=t("option",{value:""},"-- Pilih Negeri --",-1),Js=["value"],Os={class:"row mb-3"},Ns=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},"Daerah")],-1),Hs={class:"col-md-9"},Fs=t("option",{value:""},"-- Pilih Daerah --",-1),zs=["value"],As={class:"row mb-3"},Es=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},"Mukim")],-1),Is={class:"col-md-9"},Xs=t("option",{value:""},"-- Pilih Mukim --",-1),Zs=["value"],qs={class:"row mb-3"},Gs=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},[m("Pusat Pemindahan "),t("span",{class:"text-danger"},"*")])],-1),Qs={class:"col-md-9"},Rs=["value"],Ws={key:0,class:"text-danger"},Ys={class:"row mb-3"},ta=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},"Jumlah Keluarga")],-1),sa={class:"col-md-4"},aa={class:"row mb-3"},la=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},"Jumlah Mangsa")],-1),ea={class:"col-md-4"},oa={class:"row mb-3"},ia=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},"Jumlah Kematian")],-1),da={class:"col-md-4"},na={class:"row mb-3"},ra=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},[m("Tarikh Dibuka "),t("span",{class:"text-danger"},"*")])],-1),ca={class:"col-md-4"},ua={key:0,class:"text-danger"},ma={class:"row mb-3"},_a=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},"Tarikh Ditutup")],-1),ba={class:"col-md-4"},ha=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-light","data-bs-dismiss":"modal"},"Batal"),t("button",{type:"submit",class:"btn btn-success"},"Kemaskini")],-1),Ma={__name:"Show",props:{disaster:Object,tabActive:String,states:Object,districts:Object,parishes:Object,shelters:Object,disaster_shelters:Object,errors:Object},setup(e){const p=e,S=E(),O=S.appContext.config.globalProperties.$iteration,P=S.appContext.config.globalProperties.$number_format,N=[{title:"Pengurusan Bencana",active:!1,link:route("disaster.index")},{title:"Maklumat Terperinci Bencana",active:!0}];let _={},f=()=>{M.get(route("disaster.show",p.disaster),_,{preserveState:!0,replace:!0})},c=T({state_id:null,district_id:null,parish_id:null,shelter_id:null,total_keluarga:0,total_mangsa:0,total_kematian:0,dibuka_pada:null,ditutup_pada:null}),V=()=>{M.post(route("disaster.shelter.store",p.disaster),c,{onSuccess:d=>{d.props.response.success&&(J.fire("Berjaya!",d.props.response.success,"success"),$("#addPPSModal").modal("toggle"))}})},o=T({state_id:null,district_id:null,parish_id:null,shelter_id:null,total_keluarga:0,total_mangsa:0,total_kematian:0,dibuka_pada:null,ditutup_pada:null}),D,H=d=>{D=d,o.state_id=d.shelter.state_id,o.district_id=d.shelter.district_id,o.parish_id=d.shelter.parish_id,o.shelter_id=d.shelter_id,o.total_keluarga=d.total_keluarga,o.total_mangsa=d.total_mangsa,o.total_kematian=d.total_kematian,o.dibuka_pada=d.dibuka_pada,o.ditutup_pada=d.ditutup_pada,_.state_id=d.shelter.state_id,_.district_id=d.shelter.district_id,_.parish_id=d.shelter.parish_id,f()},U=()=>{M.put(route("disaster.shelter.update",[p.disaster,D]),o,{onSuccess:d=>{d.props.response.success&&(J.fire("Berjaya!",d.props.response.success,"success"),$("#editPPSModal").modal("toggle"))}})},k,C=p.disaster.latitude==null?4.4594095:p.disaster.latitude,B=p.disaster.longitude==null?102.2309874:p.disaster.longitude,F=p.disaster.latitude==null?8:18,z=()=>{setTimeout(function(){if(k!=null&&k.remove(),k=L.map("map").setView([C,B],F),L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(k),p.disaster.latitude!=null){var d=L.icon({iconUrl:"/images/marker-icon.png",shadowUrl:"/images/marker-shadow.png"});L.marker([C,B],{icon:d}).addTo(k)}},500)};return(d,l)=>(r(),n(b,null,[y(a(I),{title:"Maklumat Terperinci Bencana"}),y(Z,null,{default:j(()=>[y(q,{title:e.disaster.name,breadcrumbs:N},null,8,["title"]),t("div",G,[t("div",Q,[t("ul",R,[W,Y,t("li",tt,[t("a",{class:"nav-link","data-bs-toggle":"tab",href:"#tab3",role:"tab","aria-selected":"false",tabindex:"-1",onClick:l[0]||(l[0]=s=>a(z)())},[st,m(" Peta Lokasi ")])])]),t("div",at,[t("div",lt,[t("div",et,[t("div",ot,[t("table",it,[t("tbody",null,[t("tr",null,[dt,nt,t("td",null,i(e.disaster.name),1)]),t("tr",null,[rt,ct,t("td",null,i(e.disaster.description),1)]),t("tr",null,[ut,mt,t("td",null,i(e.disaster.kategori.name),1)]),t("tr",null,[_t,bt,t("td",null,i(e.disaster.level.name),1)]),t("tr",null,[ht,pt,t("td",null,i(e.disaster.state.name),1)]),t("tr",null,[vt,gt,t("td",null,i(e.disaster.district.name),1)]),t("tr",null,[ft,kt,t("td",null,i(e.disaster.parish_id==null?"-":e.disaster.parish.name),1)]),t("tr",null,[yt,wt,t("td",null,i(a(x)(new Date(e.disaster.datetime_start),"yyyy-MM-dd HH:mm:ss")),1)]),t("tr",null,[Pt,Mt,t("td",null,i(e.disaster.status),1)])])])]),t("div",xt,[t("div",St,[y(a(X),{href:d.route("disaster.edit",e.disaster),class:"btn btn-success"},{default:j(()=>[Vt,m(" Kemaskini Bencana ")]),_:1},8,["href"])])])])]),t("div",Dt,[Ut,t("table",Ct,[Bt,t("tbody",null,[(r(!0),n(b,null,v(e.disaster_shelters,(s,A)=>(r(),n("tr",{key:s.id},[t("td",null,i(a(O)(e.disaster_shelters,A)),1),t("td",null,i(s.shelter.district.name),1),t("td",null,i(s.shelter.name),1),t("td",Tt,i(a(P)(s.total_keluarga)),1),t("td",$t,i(a(P)(s.total_mangsa)),1),t("td",Lt,i(a(P)(s.total_kematian)),1),t("td",null,i(a(x)(new Date(s.dibuka_pada),"yyyy-MM-dd HH:mm:ss")),1),t("td",null,i(s.ditutup_pada==null?"-":a(x)(new Date(s.ditutup_pada),"yyyy-MM-dd HH:mm:ss")),1),t("td",null,[t("div",jt,[t("button",{type:"button",class:"btn btn-info btn-sm","data-bs-toggle":"modal","data-bs-target":"#editPPSModal",onClick:pa=>a(H)(s)},[Jt,m(" Kemaskini ")],8,Kt),Ot])])]))),128))])])]),Nt])])])]),_:1}),t("div",Ht,[t("div",Ft,[t("div",zt,[At,t("form",{onSubmit:l[13]||(l[13]=K((...s)=>a(V)&&a(V)(...s),["prevent"]))},[t("div",Et,[t("div",It,[Xt,t("div",Zt,[u(t("select",{class:"form-control","onUpdate:modelValue":l[1]||(l[1]=s=>a(c).state_id=s),onChange:l[2]||(l[2]=s=>{a(_).state_id=a(c).state_id,a(f)()})},[qt,(r(!0),n(b,null,v(e.states,s=>(r(),n("option",{key:s.id,value:s.id},i(s.name),9,Gt))),128))],544),[[g,a(c).state_id]])])]),t("div",Qt,[Rt,t("div",Wt,[u(t("select",{class:"form-control","onUpdate:modelValue":l[3]||(l[3]=s=>a(c).district_id=s),onChange:l[4]||(l[4]=s=>{a(_).district_id=a(c).district_id,a(f)()})},[Yt,(r(!0),n(b,null,v(e.districts,s=>(r(),n("option",{key:s.id,value:s.id},i(s.name),9,ts))),128))],544),[[g,a(c).district_id]])])]),t("div",ss,[as,t("div",ls,[u(t("select",{class:"form-control","onUpdate:modelValue":l[5]||(l[5]=s=>a(c).parish_id=s),onChange:l[6]||(l[6]=s=>{a(_).parish_id=a(c).parish_id,a(f)()})},[es,(r(!0),n(b,null,v(e.parishes,s=>(r(),n("option",{key:s.id,value:s.id},i(s.name),9,os))),128))],544),[[g,a(c).parish_id]])])]),t("div",is,[ds,t("div",ns,[u(t("select",{class:"form-control","onUpdate:modelValue":l[7]||(l[7]=s=>a(c).shelter_id=s)},[(r(!0),n(b,null,v(e.shelters,s=>(r(),n("option",{key:s.id,value:s.id},i(s.name),9,rs))),128))],512),[[g,a(c).shelter_id]]),e.errors.shelter_id?(r(),n("span",cs,i(e.errors.shelter_id),1)):w("",!0)])]),t("div",us,[ms,t("div",_s,[u(t("input",{type:"number",class:"form-control","onUpdate:modelValue":l[8]||(l[8]=s=>a(c).total_keluarga=s)},null,512),[[h,a(c).total_keluarga]])])]),t("div",bs,[hs,t("div",ps,[u(t("input",{type:"number",class:"form-control","onUpdate:modelValue":l[9]||(l[9]=s=>a(c).total_mangsa=s)},null,512),[[h,a(c).total_mangsa]])])]),t("div",vs,[gs,t("div",fs,[u(t("input",{type:"number",class:"form-control","onUpdate:modelValue":l[10]||(l[10]=s=>a(c).total_kematian=s)},null,512),[[h,a(c).total_kematian]])])]),t("div",ks,[ys,t("div",ws,[u(t("input",{type:"datetime-local",step:"any",class:"form-control","onUpdate:modelValue":l[11]||(l[11]=s=>a(c).dibuka_pada=s)},null,512),[[h,a(c).dibuka_pada]]),e.errors.dibuka_pada?(r(),n("span",Ps,i(e.errors.dibuka_pada),1)):w("",!0)])]),t("div",Ms,[xs,t("div",Ss,[u(t("input",{type:"datetime-local",step:"any",class:"form-control","onUpdate:modelValue":l[12]||(l[12]=s=>a(c).ditutup_pada=s)},null,512),[[h,a(c).ditutup_pada]])])])]),Vs],32)])])]),t("div",Ds,[t("div",Us,[t("div",Cs,[Bs,t("form",{onSubmit:l[26]||(l[26]=K((...s)=>a(U)&&a(U)(...s),["prevent"]))},[t("div",Ts,[t("div",$s,[Ls,t("div",js,[u(t("select",{class:"form-control","onUpdate:modelValue":l[14]||(l[14]=s=>a(o).state_id=s),onChange:l[15]||(l[15]=s=>{a(_).state_id=a(o).state_id,a(f)()})},[Ks,(r(!0),n(b,null,v(e.states,s=>(r(),n("option",{key:s.id,value:s.id},i(s.name),9,Js))),128))],544),[[g,a(o).state_id]])])]),t("div",Os,[Ns,t("div",Hs,[u(t("select",{class:"form-control","onUpdate:modelValue":l[16]||(l[16]=s=>a(o).district_id=s),onChange:l[17]||(l[17]=s=>{a(_).district_id=a(o).district_id,a(f)()})},[Fs,(r(!0),n(b,null,v(e.districts,s=>(r(),n("option",{key:s.id,value:s.id},i(s.name),9,zs))),128))],544),[[g,a(o).district_id]])])]),t("div",As,[Es,t("div",Is,[u(t("select",{class:"form-control","onUpdate:modelValue":l[18]||(l[18]=s=>a(o).parish_id=s),onChange:l[19]||(l[19]=s=>{a(_).parish_id=a(o).parish_id,a(f)()})},[Xs,(r(!0),n(b,null,v(e.parishes,s=>(r(),n("option",{key:s.id,value:s.id},i(s.name),9,Zs))),128))],544),[[g,a(o).parish_id]])])]),t("div",qs,[Gs,t("div",Qs,[u(t("select",{class:"form-control","onUpdate:modelValue":l[20]||(l[20]=s=>a(o).shelter_id=s)},[(r(!0),n(b,null,v(e.shelters,s=>(r(),n("option",{key:s.id,value:s.id},i(s.name),9,Rs))),128))],512),[[g,a(o).shelter_id]]),e.errors.shelter_id?(r(),n("span",Ws,i(e.errors.shelter_id),1)):w("",!0)])]),t("div",Ys,[ta,t("div",sa,[u(t("input",{type:"number",class:"form-control","onUpdate:modelValue":l[21]||(l[21]=s=>a(o).total_keluarga=s)},null,512),[[h,a(o).total_keluarga]])])]),t("div",aa,[la,t("div",ea,[u(t("input",{type:"number",class:"form-control","onUpdate:modelValue":l[22]||(l[22]=s=>a(o).total_mangsa=s)},null,512),[[h,a(o).total_mangsa]])])]),t("div",oa,[ia,t("div",da,[u(t("input",{type:"number",class:"form-control","onUpdate:modelValue":l[23]||(l[23]=s=>a(o).total_kematian=s)},null,512),[[h,a(o).total_kematian]])])]),t("div",na,[ra,t("div",ca,[u(t("input",{type:"datetime-local",step:"any",class:"form-control","onUpdate:modelValue":l[24]||(l[24]=s=>a(o).dibuka_pada=s)},null,512),[[h,a(o).dibuka_pada]]),e.errors.dibuka_pada?(r(),n("span",ua,i(e.errors.dibuka_pada),1)):w("",!0)])]),t("div",ma,[_a,t("div",ba,[u(t("input",{type:"datetime-local",step:"any",class:"form-control","onUpdate:modelValue":l[25]||(l[25]=s=>a(o).ditutup_pada=s)},null,512),[[h,a(o).ditutup_pada]])])])]),ha],32)])])])],64))}};export{Ma as default};
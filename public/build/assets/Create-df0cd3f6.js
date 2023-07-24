import{r as O,c as i,a as h,u as s,w as N,F as u,q as D,o as d,X as $,b as t,d as F,e as r,v as p,t as c,f as v,j as g,i as f,n as E,g as _,O as T}from"./app-a78d849f.js";import{_ as q}from"./AuthenticatedLayout-c9c7c268.js";import z from"./ContentHeader-777d0e8b.js";import"./leaflet-466fcd32.js";import{S as A}from"./sweetalert2.all-3a9002d3.js";const H={class:"row justify-content-center"},I={class:"col-md-8"},J={class:"card"},R=t("div",{class:"card-header"},[t("h3",{class:"card-title mb-0"},"Tambah Pusat Pemindahan")],-1),X={class:"card-body"},Z={class:"row mb-3"},G=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},[_("Nama Pusat "),t("span",{class:"text-danger"},"*")])],-1),K={class:"col-md-9"},Q={key:0,class:"text-danger"},W={class:"row mb-3"},Y=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},[_("Jenis Pusat "),t("span",{class:"text-danger"},"*")])],-1),tt={class:"col-md-7"},et=["value"],st={key:0,class:"text-danger"},ot={class:"row mb-3"},at=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},[_("Negeri "),t("span",{class:"text-danger"},"*")])],-1),lt={class:"col-md-6"},it=t("option",{value:""},"-- Pilih Negeri --",-1),dt=["value"],nt={key:0,class:"text-danger"},rt={class:"row mb-3"},ct=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},[_("Daerah "),t("span",{class:"text-danger"},"*")])],-1),mt={class:"col-md-6"},ut=t("option",{value:""},"-- Pilih Daerah --",-1),pt=["value"],_t={key:0,class:"text-danger"},bt={class:"row mb-3"},ht=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},"Mukim")],-1),vt={class:"col-md-6"},gt=["value"],ft={class:"row mb-3"},yt=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},"Lokasi")],-1),xt={class:"col-md-9"},wt={class:"input-group"},kt=t("i",{class:"ri-map-pin-fill fs-17"},null,-1),Pt=[kt],Lt=t("hr",null,null,-1),Vt={class:"row mb-3"},St=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},"Nama Pengurus PPS")],-1),Mt={class:"col-md-6"},Nt={class:"row mb-3"},Tt=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},"No Telefon")],-1),jt={class:"col-md-4"},Ut={class:"card-footer"},Bt={class:"d-flex gap-2 justify-content-end"},Ct=t("button",{type:"submit",class:"btn btn-success"},"Simpan",-1),Ot=D('<div id="mapModal" class="modal fade"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="myModalLabel">Modal Heading</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body" style="position:relative;"><div class="form-group mb-3"><input id="searchbox" type="text" class="form-control" placeholder="Carian tempat" style="width:40%;"></div><div id="map" style="width:100%;height:600px;"></div></div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Batal</button><button type="button" class="btn btn-primary" data-bs-dismiss="modal">Set Lokasi</button></div></div></div></div>',1),zt={__name:"Create",props:{errors:Object,types:Object,states:Object,districts:Object,parishes:Object},setup(l){const j=l,U=[{title:"Pusat Pemindahan",active:!1,link:route("shelter.index")},{title:"Tambah Baru",active:!0}];let a=O({name:null,shelter_type_id:j.types[0].id,state_id:null,district_id:null,parish_id:null,latitude:null,longitude:null,pic_name:null,pic_notel1:null}),m={},w=()=>{T.get(route("shelter.create"),m,{preserveState:!0,replace:!0})},k=()=>{setTimeout(function(){const n=L.map("map").setView([4.4594095,102.2309874],8);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(n);const o=document.getElementById("searchbox"),e={types:["geocode"],componentRestrictions:{country:"my"}},V=new google.maps.places.Autocomplete(o,e);var b;V.addListener("place_changed",()=>{b!=null&&n.removeLayer(b);const S=V.getPlace();var y=S.geometry.location.lat(),x=S.geometry.location.lng();a.latitude=y,a.longitude=x,n.setView([y,x],18),b=L.marker([y,x],{draggable:!0}).addTo(n),b.on("dragend",function(M){var B=M.target.getLatLng().lat,C=M.target.getLatLng().lng;a.latitude=B,a.longitude=C})})},500)},P=()=>{T.post(route("shelter.store"),a,{onSuccess:n=>{n.props.response.success&&A.fire("Berjaya!",n.props.response.success,"success")}})};return(n,o)=>(d(),i(u,null,[h(s($),{title:"Tambah Puast Pemindahan"}),h(q,null,{default:N(()=>[h(z,{title:"Tambah Puast Pemindahan",breadcrumbs:U}),t("div",H,[t("div",I,[t("form",{onSubmit:o[12]||(o[12]=F((...e)=>s(P)&&s(P)(...e),["prevent"]))},[t("div",J,[R,t("div",X,[t("div",Z,[G,t("div",K,[r(t("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Pusat Pemindahan","onUpdate:modelValue":o[0]||(o[0]=e=>s(a).name=e)},null,512),[[p,s(a).name]]),l.errors.name?(d(),i("span",Q,c(l.errors.name),1)):v("",!0)])]),t("div",W,[Y,t("div",tt,[r(t("select",{class:"form-control","onUpdate:modelValue":o[1]||(o[1]=e=>s(a).shelter_type_id=e)},[(d(!0),i(u,null,f(l.types,e=>(d(),i("option",{key:e.id,value:e.id},c(e.name),9,et))),128))],512),[[g,s(a).shelter_type_id]]),l.errors.shelter_type_id?(d(),i("span",st,c(l.errors.shelter_type_id),1)):v("",!0)])]),t("div",ot,[at,t("div",lt,[r(t("select",{class:"form-control","onUpdate:modelValue":o[2]||(o[2]=e=>s(a).state_id=e),onChange:o[3]||(o[3]=e=>{s(m).state_id=s(a).state_id,s(m).district_id=null,s(m).parish_id=null,s(w)()})},[it,(d(!0),i(u,null,f(l.states,e=>(d(),i("option",{key:e.id,value:e.id},c(e.name),9,dt))),128))],544),[[g,s(a).state_id]]),l.errors.state_id?(d(),i("span",nt,c(l.errors.state_id),1)):v("",!0)])]),t("div",rt,[ct,t("div",mt,[r(t("select",{class:"form-control","onUpdate:modelValue":o[4]||(o[4]=e=>s(a).district_id=e),onChange:o[5]||(o[5]=e=>{s(m).district_id=s(a).district_id,s(w)()})},[ut,(d(!0),i(u,null,f(l.districts,e=>(d(),i("option",{key:e.id,value:e.id},c(e.name),9,pt))),128))],544),[[g,s(a).district_id]]),l.errors.district_id?(d(),i("span",_t,c(l.errors.district_id),1)):v("",!0)])]),t("div",bt,[ht,t("div",vt,[r(t("select",{class:"form-control","onUpdate:modelValue":o[6]||(o[6]=e=>s(a).parish_id=e)},[(d(!0),i(u,null,f(l.parishes,e=>(d(),i("option",{key:e.id,value:e.id},c(e.name),9,gt))),128))],512),[[g,s(a).parish_id]])])]),t("div",ft,[yt,t("div",xt,[t("div",wt,[r(t("input",{type:"text",class:"form-control",placeholder:"Latitude","onUpdate:modelValue":o[7]||(o[7]=e=>s(a).latitude=e)},null,512),[[p,s(a).latitude]]),r(t("input",{type:"text",class:"form-control",placeholder:"Longitude","onUpdate:modelValue":o[8]||(o[8]=e=>s(a).longitude=e)},null,512),[[p,s(a).longitude]]),t("button",{class:"btn btn-info",type:"button","data-bs-toggle":"modal","data-bs-target":"#mapModal",onClick:o[9]||(o[9]=(...e)=>s(k)&&s(k)(...e))},Pt)])])]),Lt,t("div",Vt,[St,t("div",Mt,[r(t("input",{type:"text",class:"form-control","onUpdate:modelValue":o[10]||(o[10]=e=>s(a).pic_name=e)},null,512),[[p,s(a).pic_name]])])]),t("div",Nt,[Tt,t("div",jt,[r(t("input",{type:"text",class:"form-control","onUpdate:modelValue":o[11]||(o[11]=e=>s(a).pic_notel1=e)},null,512),[[p,s(a).pic_notel1]])])])]),t("div",Ut,[t("div",Bt,[h(s(E),{href:n.route("shelter.index"),class:"btn btn-light"},{default:N(()=>[_("Batal")]),_:1},8,["href"]),Ct])])])],32)])])]),_:1}),Ot],64))}};export{zt as default};
import{n as s,c as e,b as a,F as c,i as l,o as t,l as i,m as u,M as p}from"./app-a78d849f.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";const m={components:{Link:s},props:{links:Array},data(){return{currentProtocol:""}},mounted(){this.currentProtocol=window.location.protocol}},_={class:"btn-group"};function f(h,b,o,v,n,L){return t(),e("div",null,[a("div",_,[(t(!0),e(c,null,l(o.links,r=>(t(),i(p(r.url?"Link":"span"),{key:r.id,href:r.url?n.currentProtocol=="https:"?r.url.replace("http:","https:"):r.url:null,innerHTML:r.label,class:u(["btn",{disabled:!r.url,"btn-primary":r.active,"btn-light":!r.active}])},null,8,["href","innerHTML","class"]))),128))])])}const B=d(m,[["render",f]]);export{B as default};
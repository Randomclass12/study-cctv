import{_ as w,u as C,j as e,D as $,I as L,s as H,r as g,i as F,a as I,o as t,c as i,b as l,F as R,k as S,t as D,l as u,w as p,d as r,J as N,K as T,L as V,p as z,g as E,M as K,N as j,O as A}from"./index-d9871d9d.js";import{H as B}from"./HomeTheme-f5c171ef.js";import{t as J}from"./index-47d41d8e.js";const O=a=>(z("data-v-8df3feca"),a=a(),E(),a),P={class:"header-wrapper"},W={class:"header-box"},X={class:"container",id:"ul-container"},q=["onClick"],G=O(()=>l("div",{class:"line"},null,-1)),Q={__name:"Header",setup(a){C(c=>({"9049d7b4":_.value,"9277d47a":e(h),"1eaf6da7":y.value}));const f=$(),k=L(),m=B(),{theme:n,color:b,bgc:M,lineColor:h}=H(m),_=g(""),y=g("");F(()=>{x()});const x=(c=0,o)=>{let s=document.getElementById("ul-container").children[c].getBoundingClientRect().width.toFixed(2),d=c===0?"0px":c*s+"px";_.value=s+"px",y.value=`translateX(${d})`,o&&k.fullPath!==o.path&&f.push(o.path)};return(c,o)=>{const v=I("el-icon");return t(),i("div",P,[l("div",W,[l("ul",X,[(t(!0),i(R,null,S(e(J),(s,d)=>(t(),i("li",{key:d,onClick:te=>x(d,s)},D(s.title),9,q))),128))]),G]),l("div",{class:"drak-box",onClick:o[0]||(o[0]=V(s=>n.value=e(n)==="dark"?"light":"dark",["stop","prevent"]))},[e(n)==="dark"?(t(),u(v,{key:0,color:"aliceblue",size:30},{default:p(()=>[r(e(N))]),_:1})):(t(),u(v,{key:1,color:"#0F2027",size:30},{default:p(()=>[r(e(T))]),_:1}))])])}}},U=w(Q,[["__scopeId","data-v-8df3feca"]]);const Y={class:"home-box"},Z={class:"main-container"},ee={__name:"MyHome",setup(a){C(b=>({"21b9ad6b":e(n),cbd42e60:e(m)}));const f=B(),{theme:k,color:m,bgc:n}=H(f);return(b,M)=>{const h=I("router-view");return t(),i("div",Y,[r(U),l("div",Z,[r(h,null,{default:p(({Component:_})=>[(t(),u(A,null,[r(K,{name:"fade",mode:"out-in"},{default:p(()=>[(t(),u(j(_)))]),_:2},1024)],1024))]),_:1})])])}}},ne=w(ee,[["__scopeId","data-v-c11cfdba"]]);export{ne as default};
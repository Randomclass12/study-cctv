import{_ as D,u as H,r,h as s,i as T,o as f,c as _,b as d,n as h,j as o,F as C,k as $,t as j}from"./index-d9871d9d.js";const w={class:"out-container"},E={__name:"ScrollBar",setup(F){H(a=>({"50c8e33c":n.value}));const n=r(200),c=r([]),m=r(0),g=s(()=>`transform: translateY(${m.value}px)`),u=r(0),i=s(()=>Math.ceil(S.value/n.value)),x=s(()=>u.value+i.value),y=s(()=>{const a=Math.max(0,u.value-i.value),e=Math.min(x.value+i.value,c.value.length);return c.value.slice(a,e)}),v=r(),S=s(()=>v.value?v.value.offsetHeight:0),B=s(()=>n.value*c.value.length),p=k(a=>{const e=a[0].target;if(!e)return;const{scrollTop:t}=e;u.value=Math.floor(t/n.value);let l=Math.max(0,u.value-i.value);m.value=l*n.value},300);T(()=>{b()});function M(){return new Promise((a,e)=>{const t=[];for(let l=0;l<100;l++)t.push(`数据${l}`);setTimeout(()=>{a(t)},300)})}async function b(){c.value=await M()}function k(a,e){let t=null;return function(){t||(t=setTimeout(()=>{a.call(this,arguments),t=null},e))}}return(a,e)=>(f(),_("div",w,[d("div",{class:"scroll-container",ref_key:"scrollRef",ref:v,onScroll:e[0]||(e[0]=(...t)=>o(p)&&o(p)(...t))},[d("div",{class:"pillar",style:h({height:`${o(B)}px`})},null,4),d("div",{class:"content-list",style:h(o(g))},[(f(!0),_(C,null,$(o(y),(t,l)=>(f(),_("div",{class:"item",key:t},j(t),1))),128))],4)],544)]))}},L=D(E,[["__scopeId","data-v-fb6d1ba2"]]);export{L as default};
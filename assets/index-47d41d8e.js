const n=""+new URL("llk-e03c9a93.png",import.meta.url).href,o=""+new URL("music-37a35188.png",import.meta.url).href,a=function(s){let l="vol-preview",e=document.getElementById(l);if(!e){e=document.createElement("div"),e.setAttribute("id","vol-preview");let i=document.createElement("div");i.style.position="absolute",i.style.width="100%",i.style.height="100%",i.style.background="black",i.style.opacity="0.6",e.appendChild(i),e.style.position="fixed",e.style.width="100%",e.style.height="100%",e.style.top=0,e.style["z-index"]=9999999;let t=document.createElement("img");t.setAttribute("class","vol-preview-img"),t.classList.add("vol-preview-img-my"),t.style.position="absolute",t.style.top="50%",t.style.left="50%",t.style["max-width"]="90%",t.style["max-height"]="90%",t.style.transform="translate(-50%,-50%)",t.setAttribute("src",s),e.appendChild(t),e.addEventListener("click",function(){this.style.display="none"}),document.body.appendChild(e);return}document.body.appendChild(e).querySelector(".vol-preview-img").setAttribute("src",s),e.style.display="block"},m=[{title:"详情",path:"/Detail"},{title:"官网",path:"/Website"},{title:"测试",path:"/Interest"}],p=[{name:"Music",routerLink:"Music",src:o},{name:"连连看",routerLink:"LianLianKan",src:n},{name:"iframe",routerLink:"Embedded",src:n},{name:"vue.js",link:"https://cn.vuejs.org/guide/introduction.html",src:"https://v2.cn.vuejs.org/images/logo.svg"},{name:"vue-router",link:"https://router.vuejs.org/zh/introduction.html",src:"https://v2.cn.vuejs.org/images/logo.svg"},{name:"pinia",link:"https://pinia.vuejs.org/zh/introduction.html",src:"https://pinia.vuejs.org/logo.svg"},{name:"element-plus",link:"https://element-plus.gitee.io/zh-CN/component/button.html",src:"https://element-plus.gitee.io/images/element-plus-logo.svg"},{name:"梦三国2",routerLink:"MengSan",src:"https://www.m3guo.com/v2/images/logo.png"}];export{p as L,a as p,m as t};
import{r as s,a as u,o as m,c,b as d,m as g,d as t,w as a,F as k,f as p}from"./index-d9871d9d.js";const C={key:0},b={class:"dialog-footer"},x={__name:"MengSan",setup(N){const o=s(!1),n=s(""),r=s(!1),_=()=>{o.value=!0},f=()=>{Number(n.value)===10086111&&(r.value=!0,o.value=!1)};return(h,e)=>{const v=u("el-input"),i=u("el-button"),V=u("el-dialog");return m(),c(k,null,[d("h1",null,[d("span",{onClick:_},"啥也没有")]),r.value?(m(),c("h1",C,"梦三国 70091538 zhang123123")):g("",!0),t(V,{modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=l=>o.value=l),title:"Tips",width:"30%"},{footer:a(()=>[d("span",b,[t(i,{onClick:e[1]||(e[1]=l=>o.value=!1)},{default:a(()=>[p("关闭")]),_:1}),t(i,{onClick:f},{default:a(()=>[p("确认")]),_:1})])]),default:a(()=>[t(v,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=l=>n.value=l),placeholder:"请输入密码"},null,8,["modelValue"])]),_:1},8,["modelValue"])],64)}}};export{x as default};

import{d as l,s as u,r as g,o as c,c as a,b as h,F as x,n as f,a as o,t as r,e as v,_ as y,f as b}from"./index.03eacde5.js";const k=["onClick"],C={class:"shoppingInfo"},I={class:"shoppingImgWrap"},P=["src"],w={class:"goodsInfo"},L={style:{"text-align":"right",color:"#666",margin:"right"}},S=l({__name:"TheProductList",setup(d){const t=u(),n=g(t.list);n.border="0 0 100px 2px green",n.isSelect=!1;function p(_,s){s.border=="0 0 10px 2px yellow"?(s.border="0 0 10px 2px rgba(0, 0, 0, 0.05)",t.removeProdcut(s.price*s.count,s.id)):(s.border="0 0 10px 2px yellow",s.isSelect=!0,t.addProduct(s.price*s.count,s.id))}return(_,s)=>(c(!0),a(x,null,h(n,(e,i)=>(c(),a("div",{class:"contentWrap",key:e.id,onClick:B=>p(i,e),style:f({"box-shadow":e.border})},[o("div",C,[o("div",I,[o("img",{class:"shoppingImg",src:e.imgUrl,alt:""},null,8,P)]),o("div",w,[o("p",null,r(e.title),1),o("p",null,r(e.description),1),o("p",null,[v(" $ "+r(e.price)+" ",1),o("span",L," \u5269\u9918\u6578\u91CF "+r(e.count),1)])])])],12,k))),128))}});const V=y(S,[["__scopeId","data-v-e30464d9"]]),N=l({__name:"ProductListView",setup(d){return(t,n)=>(c(),a("main",null,[b(V)]))}});export{N as default};

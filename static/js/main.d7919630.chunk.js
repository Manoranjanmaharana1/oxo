(this.webpackJsonpoxo=this.webpackJsonpoxo||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t(1),r=t.n(i),s=t(7),d=t.n(s),O=(t(13),t(14),t(6)),o=t(2),j=function(e){var n=e.obj,t=e.setCurr,r=e.ckey,s=Object(i.useState)("./rec.svg"),d=Object(o.a)(s,2),O=d[0],j=d[1];return Object(c.jsx)("div",{className:"cell-container",onClick:function(){j(n?"./rec.svg":"./delete.svg"),document.querySelector(".cell-"+r).classList.add("elementToAnimate"),document.querySelector("#cell-container"+r).classList.add("disable"),t(!n,r)},id:"cell-container"+r,children:Object(c.jsx)("img",{src:O,alt:"",width:"0%",className:"cell-"+r})})},l=function(){var e=Object(i.useState)(!0),n=Object(o.a)(e,2),t=n[0],r=n[1],s=Object(i.useState)([]),d=Object(o.a)(s,2),l=d[0],x=d[1],a=Object(i.useState)([]),f=Object(o.a)(a,2),u=f[0],b=f[1],m=Object(i.useState)(Object(c.jsx)(c.Fragment,{})),h=Object(o.a)(m,2),g=h[0],v=h[1],y=Object(i.useState)(!1),S=Object(o.a)(y,2),C=S[0],k=S[1],p=function(){for(var e=1;e<=9;++e)document.querySelector("#cell-container"+e.toString()).classList.remove("disable"),document.querySelector(".cell-"+e.toString()).classList.remove("elementToAnimate");r(!0),x([]),b([]),v(Object(c.jsx)(c.Fragment,{})),k(!1)};Object(i.useEffect)((function(){C||(-1!==l.indexOf("1")&&-1!==l.indexOf("2")&&-1!==l.indexOf("3")||-1!==l.indexOf("4")&&-1!==l.indexOf("5")&&-1!==l.indexOf("6")||-1!==l.indexOf("7")&&-1!==l.indexOf("8")&&-1!==l.indexOf("9")||-1!==l.indexOf("1")&&-1!==l.indexOf("4")&&-1!==l.indexOf("7")||-1!==l.indexOf("2")&&-1!==l.indexOf("5")&&-1!==l.indexOf("8")||-1!==l.indexOf("3")&&-1!==l.indexOf("6")&&-1!==l.indexOf("9")||-1!==l.indexOf("1")&&-1!==l.indexOf("5")&&-1!==l.indexOf("9")||-1!==l.indexOf("3")&&-1!==l.indexOf("5")&&-1!==l.indexOf("7")?(console.log("o"),k(!0),v(Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"result",children:Object(c.jsx)("h1",{children:"O Won!!"})}),Object(c.jsx)("div",{className:"reload",onClick:p,children:"Replay"})]})),F()):-1!==u.indexOf("1")&&-1!==u.indexOf("2")&&-1!==u.indexOf("3")||-1!==u.indexOf("4")&&-1!==u.indexOf("5")&&-1!==u.indexOf("6")||-1!==u.indexOf("7")&&-1!==u.indexOf("8")&&-1!==u.indexOf("9")||-1!==u.indexOf("1")&&-1!==u.indexOf("4")&&-1!==u.indexOf("7")||-1!==u.indexOf("2")&&-1!==u.indexOf("5")&&-1!==u.indexOf("8")||-1!==u.indexOf("3")&&-1!==u.indexOf("6")&&-1!==u.indexOf("9")||-1!==u.indexOf("1")&&-1!==u.indexOf("5")&&-1!==u.indexOf("9")||-1!==u.indexOf("3")&&-1!==u.indexOf("5")&&-1!==u.indexOf("7")?(console.log("x"),v(Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"result",children:Object(c.jsx)("h1",{children:"X Won!!"})}),Object(c.jsx)("div",{className:"reload",onClick:p,children:"Replay"})]})),k(!0),F()):l.length+u.length===9&&(v(Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"result",children:Object(c.jsx)("h1",{children:"TIED!!"})}),Object(c.jsx)("div",{className:"reload",onClick:p,children:"Replay"})]})),k(!0)))}),[l,u,C]);var F=function(){for(var e=1;e<=9;++e)document.querySelector("#cell-container"+e.toString()).classList.add("disable")},N=function(e,n){r(e),e?b([].concat(Object(O.a)(u),[n.toString()])):x([].concat(Object(O.a)(l),[n.toString()]))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(j,{obj:t,setCurr:function(e,n){return N(e,n)},ckey:"1"}),Object(c.jsx)(j,{obj:t,setCurr:function(e,n){return N(e,n)},ckey:"2"}),Object(c.jsx)(j,{obj:t,setCurr:function(e,n){return N(e,n)},ckey:"3"}),Object(c.jsx)(j,{obj:t,setCurr:function(e,n){return N(e,n)},ckey:"4"}),Object(c.jsx)(j,{obj:t,setCurr:function(e,n){return N(e,n)},ckey:"5"}),Object(c.jsx)(j,{obj:t,setCurr:function(e,n){return N(e,n)},ckey:"6"}),Object(c.jsx)(j,{obj:t,setCurr:function(e,n){return N(e,n)},ckey:"7"}),Object(c.jsx)(j,{obj:t,setCurr:function(e,n){return N(e,n)},ckey:"8"}),Object(c.jsx)(j,{obj:t,setCurr:function(e,n){return N(e,n)},ckey:"9"})]}),g]})};var x=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(l,{})})},a=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),c(e),i(e),r(e),s(e)}))};d.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),a()}},[[15,1,2]]]);
//# sourceMappingURL=main.d7919630.chunk.js.map
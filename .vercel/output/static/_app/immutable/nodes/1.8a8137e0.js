import{s as y,n as g,l as E}from"../chunks/scheduler.5e0162ec.js";import{S,i as x,g as b,m as _,h as f,j as v,n as d,f as m,k as j,a as k,B as u,o as $}from"../chunks/index.2f4ef827.js";import{d as q}from"../chunks/singletons.0a6f8093.js";const B=()=>{const e=q;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},C={subscribe(e){return B().page.subscribe(e)}};function D(e){var h;let s,t,r=e[0].status+"",i,p,l=((h=e[0].error)==null?void 0:h.message)+"",c;return{c(){s=b("div"),t=b("h1"),i=_(r),p=_(": "),c=_(l),this.h()},l(a){s=f(a,"DIV",{class:!0});var o=v(s);t=f(o,"H1",{});var n=v(t);i=d(n,r),p=d(n,": "),c=d(n,l),n.forEach(m),o.forEach(m),this.h()},h(){j(s,"class","error svelte-y2d72l")},m(a,o){k(a,s,o),u(s,t),u(t,i),u(t,p),u(t,c)},p(a,[o]){var n;o&1&&r!==(r=a[0].status+"")&&$(i,r),o&1&&l!==(l=((n=a[0].error)==null?void 0:n.message)+"")&&$(c,l)},i:g,o:g,d(a){a&&m(s)}}}function H(e,s,t){let r;return E(e,C,i=>t(0,r=i)),[r]}let z=class extends S{constructor(s){super(),x(this,s,H,D,y,{})}};export{z as component};

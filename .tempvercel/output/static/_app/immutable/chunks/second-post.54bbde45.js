import{s as I,C as O,n as b,h as y,k as P}from"./scheduler.5e0162ec.js";import{S as U,i as z,g as $,h,k as _,a as f,f as o,m as J,j as K,n as Q,B as R,D as V,o as W,r as L,u as w,v as j,d as q,t as B,w as E,s as g,E as C,c as x}from"./index.2f4ef827.js";import{g as X,a as A}from"./spread.8a54911c.js";import{M as Y}from"./mdsvex.18d9d873.js";function Z(i){let t,l;return{c(){t=$("img"),this.h()},l(s){t=h(s,"IMG",{src:!0,alt:!0,loading:!0}),this.h()},h(){O(t.src,l=i[0])||_(t,"src",l),_(t,"alt",i[1]),_(t,"loading","lazy")},m(s,a){f(s,t,a)},p(s,[a]){a&1&&!O(t.src,l=s[0])&&_(t,"src",l),a&2&&_(t,"alt",s[1])},i:b,o:b,d(s){s&&o(t)}}}function tt(i,t,l){let{src:s=""}=t,{alt:a=""}=t;return i.$$set=n=>{"src"in n&&l(0,s=n.src),"alt"in n&&l(1,a=n.alt)},[s,a]}class et extends U{constructor(t){super(),z(this,t,tt,Z,I,{src:0,alt:1})}}function nt(i){let t,l,s,a;return{c(){t=$("button"),l=J(i[0])},l(n){t=h(n,"BUTTON",{});var r=K(t);l=Q(r,i[0]),r.forEach(o)},m(n,r){f(n,t,r),R(t,l),s||(a=V(t,"click",i[1]),s=!0)},p(n,[r]){r&1&&W(l,n[0])},i:b,o:b,d(n){n&&o(t),s=!1,a()}}}function st(i,t,l){let s=0;return[s,()=>l(0,s+=1)]}class lt extends U{constructor(t){super(),z(this,t,st,nt,I,{})}}function at(i){let t,l="Table of Contents",s,a,n='<li><a href="#svelte">Svelte</a></li> <li><a href="#counter">Counter</a></li>',r,c,D="Svelte",M,d,G="Media inside the <strong>static</strong> folder is served from ’/‘.",S,p,H,m,N="Counter",T,v,k;return p=new et({props:{src:"favicon.png",alt:"Svelte"}}),v=new lt({}),{c(){t=$("h2"),t.textContent=l,s=g(),a=$("ul"),a.innerHTML=n,r=g(),c=$("h2"),c.textContent=D,M=g(),d=$("p"),d.innerHTML=G,S=g(),L(p.$$.fragment),H=g(),m=$("h2"),m.textContent=N,T=g(),L(v.$$.fragment),this.h()},l(e){t=h(e,"H2",{id:!0,"data-svelte-h":!0}),C(t)!=="svelte-ki5nsa"&&(t.textContent=l),s=x(e),a=h(e,"UL",{"data-svelte-h":!0}),C(a)!=="svelte-1evjhic"&&(a.innerHTML=n),r=x(e),c=h(e,"H2",{id:!0,"data-svelte-h":!0}),C(c)!=="svelte-em4gby"&&(c.textContent=D),M=x(e),d=h(e,"P",{"data-svelte-h":!0}),C(d)!=="svelte-38unb"&&(d.innerHTML=G),S=x(e),w(p.$$.fragment,e),H=x(e),m=h(e,"H2",{id:!0,"data-svelte-h":!0}),C(m)!=="svelte-7fd3by"&&(m.textContent=N),T=x(e),w(v.$$.fragment,e),this.h()},h(){_(t,"id","table-of-contents"),_(c,"id","svelte"),_(m,"id","counter")},m(e,u){f(e,t,u),f(e,s,u),f(e,a,u),f(e,r,u),f(e,c,u),f(e,M,u),f(e,d,u),f(e,S,u),j(p,e,u),f(e,H,u),f(e,m,u),f(e,T,u),j(v,e,u),k=!0},p:b,i(e){k||(q(p.$$.fragment,e),q(v.$$.fragment,e),k=!0)},o(e){B(p.$$.fragment,e),B(v.$$.fragment,e),k=!1},d(e){e&&(o(t),o(s),o(a),o(r),o(c),o(M),o(d),o(S),o(H),o(m),o(T)),E(p,e),E(v,e)}}}function rt(i){let t,l;const s=[i[0],F];let a={$$slots:{default:[at]},$$scope:{ctx:i}};for(let n=0;n<s.length;n+=1)a=y(a,s[n]);return t=new Y({props:a}),{c(){L(t.$$.fragment)},l(n){w(t.$$.fragment,n)},m(n,r){j(t,n,r),l=!0},p(n,[r]){const c=r&1?X(s,[r&1&&A(n[0]),r&0&&A(F)]):{};r&2&&(c.$$scope={dirty:r,ctx:n}),t.$set(c)},i(n){l||(q(t.$$.fragment,n),l=!0)},o(n){B(t.$$.fragment,n),l=!1},d(n){E(t,n)}}}const F={title:"Second post",description:"Second post",date:"2023-10-22",categories:["sveltekit","svelte"],published:!0};function it(i,t,l){return i.$$set=s=>{l(0,t=y(y({},t),P(s)))},t=P(t),[t]}class mt extends U{constructor(t){super(),z(this,t,it,rt,I,{})}}export{mt as default,F as metadata};
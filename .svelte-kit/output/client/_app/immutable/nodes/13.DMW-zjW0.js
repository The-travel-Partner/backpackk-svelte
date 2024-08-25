import{s as se,e as a,a as y,t as R,c as l,b as F,d as I,u as Y,f as h,g as Z,x as $,h as t,i as ae,j as e,p as ee,v as H,n as te,r as le,w as re}from"../chunks/scheduler.Bt1ZmQP3.js";import{S as oe,i as ne}from"../chunks/index.BTw-nfef.js";import"../chunks/history.MX8oQUlL.js";import{g as C}from"../chunks/entry.C5NOW2QF.js";function ie(r){let o,n,s,d,T,j,i,c,u,f,p,k,S,P,v,E,J,q,g,D,z,G,N,x,K="Reset Password",U,w,L="Sign Out",A,Q;return{c(){o=a("body"),n=a("div"),s=a("div"),d=a("img"),j=y(),i=a("div"),c=a("div"),u=a("img"),p=y(),k=a("p"),S=R(r[0]),P=y(),v=a("div"),E=a("img"),q=y(),g=a("p"),D=R(r[1]),z=y(),G=R(r[2]),N=y(),x=a("button"),x.textContent=K,U=y(),w=a("button"),w.textContent=L,this.h()},l(m){o=l(m,"BODY",{class:!0});var _=F(o);n=l(_,"DIV",{class:!0});var W=F(n);s=l(W,"DIV",{class:!0});var b=F(s);d=l(b,"IMG",{src:!0,class:!0}),j=I(b),i=l(b,"DIV",{class:!0});var O=F(i);c=l(O,"DIV",{class:!0});var V=F(c);u=l(V,"IMG",{src:!0,class:!0}),p=I(V),k=l(V,"P",{class:!0});var X=F(k);S=Y(X,r[0]),X.forEach(h),V.forEach(h),P=I(O),v=l(O,"DIV",{class:!0});var B=F(v);E=l(B,"IMG",{src:!0,class:!0}),q=I(B),g=l(B,"P",{class:!0});var M=F(g);D=Y(M,r[1]),z=I(M),G=Y(M,r[2]),M.forEach(h),B.forEach(h),O.forEach(h),N=I(b),x=l(b,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(x)!=="svelte-gzd2k9"&&(x.textContent=K),U=I(b),w=l(b,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(w)!=="svelte-1ycj7cv"&&(w.textContent=L),b.forEach(h),W.forEach(h),_.forEach(h),this.h()},h(){$(d.src,T="../Group.png")||t(d,"src",T),t(d,"class","w-2/12"),$(u.src,f="../email.png")||t(u,"src",f),t(u,"class","w-8"),t(k,"class","text-white text-lg"),t(c,"class","flex flex-row space-x-4 w-full justify-center"),$(E.src,J="../name.png")||t(E,"src",J),t(E,"class","w-8"),t(g,"class","text-white text-lg space-x-1"),t(v,"class","flex flex-row space-x-4 w-full justify-start"),t(i,"class","flex flex-col h-max w-max justify-start space-y-10"),t(x,"class","w-3/4 sm:w-3/4 md:w-1/2 h-10 mt-8 p-2 rounded-xl text-xs: sm:text-xs md:text-base text-[#FF830F] bg-transparent outline outline-[#FF830F] hover:text-white hover:bg-[#FF830F] hover:border-transparent hover:scale-105 active:bg-transparent active:scale-95 transition duration-300 ease-in-out"),t(w,"class","w-3/4 sm:w-3/4 md:w-1/2 h-10 mt-5 p-2 rounded-xl text-white bg-[#FF830F] hover:bg-[#FF9900] hover:scale-105 active:bg-[#FF6600] active:scale-95 transition duration-300 ease-in-out"),t(s,"class","flex flex-col items-center justify-center sm:w-full md:w-full lg:w-8/12 xl:w-6/12 h-max p-8 rounded-lg bg-[#2C3036] space-y-10"),t(n,"class","flex flex-col w-full items-center justify-center h-full "),t(o,"class","w-full flex-col pl-2 pr-2 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 bg-[#1b1b1b] h-screen mb-24 justify-center")},m(m,_){ae(m,o,_),e(o,n),e(n,s),e(s,d),e(s,j),e(s,i),e(i,c),e(c,u),e(c,p),e(c,k),e(k,S),e(i,P),e(i,v),e(v,E),e(v,q),e(v,g),e(g,D),e(g,z),e(g,G),e(s,N),e(s,x),e(s,U),e(s,w),A||(Q=[ee(x,"click",r[3]),ee(w,"click",r[4])],A=!0)},p(m,[_]){_&1&&H(S,m[0]),_&2&&H(D,m[1]),_&4&&H(G,m[2])},i:te,o:te,d(m){m&&h(o),A=!1,le(Q)}}}function ce(r,o,n){re(()=>{function u(){return localStorage.getItem("authToken")}const f=u();f?j(f):C("/login")});let s="",d="",T="";async function j(u){try{const f=await fetch("http://127.0.0.1:8000/users/me",{method:"GET",headers:{Authorization:`Bearer ${u}`}});if(f.ok){const p=await f.json();console.log(p),n(0,s=p.email),n(1,d=p.first_name),n(2,T=p.last_name)}else throw C("/login"),new Error("Token validation failed")}catch(f){console.error("Invalid token",f),C("/login")}}function i(){C("/forgotpassword")}function c(){localStorage.removeItem("authToken"),localStorage.removeItem("name"),C("/login")}return[s,d,T,i,c]}class he extends oe{constructor(o){super(),ne(this,o,ce,ie,se,{})}}export{he as component};

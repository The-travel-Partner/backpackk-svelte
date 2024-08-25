import{s as _e,e as v,t as U,a as I,c as _,b as E,u as q,f as y,d as S,g as se,h,i as ee,j as o,p as B,a2 as ke,v as re,n as ce,o as fe,r as xe,w as je,k as Ce}from"../chunks/scheduler.Bt1ZmQP3.js";import{S as be,i as ye,c as A,a as J,m as Y,t as K,d as Q,e as W}from"../chunks/index.BTw-nfef.js";import{e as ue}from"../chunks/each.D6YF6ztN.js";import"../chunks/history.MX8oQUlL.js";import{g as N}from"../chunks/entry.C5NOW2QF.js";import{f as X,e as he}from"../chunks/param.vmeDhrWI.js";function Ie(r){let e,n,t,l,a,s='<img class="align-middle w-2 extra:size-1/12 md:w-3 sm:w-2 " src="../vector.png"/>',f,c,d;return{c(){e=v("div"),n=v("p"),t=U(r[0]),l=I(),a=v("div"),a.innerHTML=s,this.h()},l(w){e=_(w,"DIV",{class:!0});var u=E(e);n=_(u,"P",{class:!0});var x=E(n);t=q(x,r[0]),x.forEach(y),l=S(u),a=_(u,"DIV",{class:!0,"data-svelte-h":!0}),se(a)!=="svelte-1bbrtjk"&&(a.innerHTML=s),u.forEach(y),this.h()},h(){h(n,"class","text-white text-sm sm:text-xs"),h(a,"class","h-5/6 flex flex-col items-start justify-end "),h(e,"class",f="bg-[#242424] ml-"+r[1]+" w-28 h-28 sm:w-24 sm:h-24 md:w-32 md:h-32 flex-col p-4 rounded-xl cursor-pointer hover:bg-[#333] hover:scale-105 transition duration-300 ease-in-out active:bg-[#444] active:scale-95")},m(w,u){ee(w,e,u),o(e,n),o(n,t),o(e,l),o(e,a),c||(d=B(e,"click",function(){ke(r[2])&&r[2].apply(this,arguments)}),c=!0)},p(w,[u]){r=w,u&1&&re(t,r[0]),u&2&&f!==(f="bg-[#242424] ml-"+r[1]+" w-28 h-28 sm:w-24 sm:h-24 md:w-32 md:h-32 flex-col p-4 rounded-xl cursor-pointer hover:bg-[#333] hover:scale-105 transition duration-300 ease-in-out active:bg-[#444] active:scale-95")&&h(e,"class",f)},i:ce,o:ce,d(w){w&&y(e),c=!1,d()}}}function Se(r,e,n){let{city:t="Delhi"}=e,{ml:l="0"}=e,{handleclick:a}=e;return r.$$set=s=>{"city"in s&&n(0,t=s.city),"ml"in s&&n(1,l=s.ml),"handleclick"in s&&n(2,a=s.handleclick)},[t,l,a]}class Z extends be{constructor(e){super(),ye(this,e,Se,Ie,_e,{city:0,ml:1,handleclick:2})}}var Ee=typeof X=="object"&&X&&X.Object===Object&&X,Te=Ee,De=Te,Fe=typeof self=="object"&&self&&self.Object===Object&&self,Ve=De||Fe||Function("return this")(),$e=Ve,He=$e,Oe=He.Symbol,we=Oe,de=we;de&&de.toStringTag;var me=we;me&&me.toStringTag;function pe(r,e,n){const t=r.slice();return t[19]=e[n],t}function ge(r){let e,n=ue(r[3]),t=[];for(let l=0;l<n.length;l+=1)t[l]=ve(pe(r,n,l));return{c(){e=v("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=_(l,"DIV",{class:!0});var a=E(e);for(let s=0;s<t.length;s+=1)t[s].l(a);a.forEach(y),this.h()},h(){h(e,"class","absolute w-full mt-1 bg-[#2C3036] rounded-3xl z-10")},m(l,a){ee(l,e,a);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(l,a){if(a&72){n=ue(l[3]);let s;for(s=0;s<n.length;s+=1){const f=pe(l,n,s);t[s]?t[s].p(f,a):(t[s]=ve(f),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},d(l){l&&y(e),Ce(t,l)}}}function ve(r){let e,n=r[19]+"",t,l,a,s;function f(){return r[14](r[19])}return{c(){e=v("div"),t=U(n),l=I(),this.h()},l(c){e=_(c,"DIV",{class:!0});var d=E(e);t=q(d,n),l=S(d),d.forEach(y),this.h()},h(){h(e,"class","p-4 text-white cursor-pointer hover:bg-gray-700 rounded-3xl")},m(c,d){ee(c,e,d),o(e,t),o(e,l),a||(s=B(e,"click",f),a=!0)},p(c,d){r=c,d&8&&n!==(n=r[19]+"")&&re(t,n)},d(c){c&&y(e),a=!1,s()}}}function Ge(r){let e,n,t,l,a,s,f,c,d,w,u,x="Popular destinations",M,b,T,P,D,R,F,p,g,j,C,k,te,V,ae="Next",ne,z,le,oe;T=new Z({props:{city:"Delhi",handleclick:r[8]}}),D=new Z({props:{city:"Mumbai",handleclick:r[9]}}),F=new Z({props:{city:"Jaipur",handleclick:r[10]}}),g=new Z({props:{city:"Varanasi",handleclick:r[11]}});let m=r[2]&&r[3].length>0&&ge(r);return{c(){e=v("body"),n=v("div"),t=v("div"),l=v("h1"),a=U("Hi there, "),s=U(r[0]),f=I(),c=v("br"),d=U("Lets create your dream itinerary"),w=I(),u=v("h1"),u.textContent=x,M=I(),b=v("div"),A(T.$$.fragment),P=I(),A(D.$$.fragment),R=I(),A(F.$$.fragment),p=I(),A(g.$$.fragment),j=I(),C=v("div"),k=v("input"),te=I(),V=v("button"),V.textContent=ae,ne=I(),m&&m.c(),this.h()},l(i){e=_(i,"BODY",{class:!0});var $=E(e);n=_($,"DIV",{class:!0});var ie=E(n);t=_(ie,"DIV",{class:!0});var H=E(t);l=_(H,"H1",{class:!0});var G=E(l);a=q(G,"Hi there, "),s=q(G,r[0]),f=S(G),c=_(G,"BR",{}),d=q(G,"Lets create your dream itinerary"),G.forEach(y),w=S(H),u=_(H,"H1",{class:!0,"data-svelte-h":!0}),se(u)!=="svelte-qv2klr"&&(u.textContent=x),M=S(H),b=_(H,"DIV",{class:!0});var O=E(b);J(T.$$.fragment,O),P=S(O),J(D.$$.fragment,O),R=S(O),J(F.$$.fragment,O),p=S(O),J(g.$$.fragment,O),O.forEach(y),j=S(H),C=_(H,"DIV",{class:!0});var L=E(C);k=_(L,"INPUT",{class:!0,type:!0,placeholder:!0}),te=S(L),V=_(L,"BUTTON",{class:!0,"data-svelte-h":!0}),se(V)!=="svelte-1u2irht"&&(V.textContent=ae),ne=S(L),m&&m.l(L),L.forEach(y),H.forEach(y),ie.forEach(y),$.forEach(y),this.h()},h(){h(l,"class","gradient-text  svelte-237i3n"),h(u,"class","text-[#949494]"),h(b,"class","mt-5 grid snap-x gap-x-32 xs:gap-x-32 sm:gap-x-3 md:gap-x-4 grid-cols-4 justify-center items-center overflow-x-auto no-scrollbar p-2 svelte-237i3n"),h(k,"class","bg-transparent border-transparent focus:border-transparent focus:outline-none focus-within:ring-0 w-3/4 md:w-5/6 sm:w-3/4 h-16 rounded-3xl p-4 text-white text-sm"),h(k,"type","text"),h(k,"placeholder","Search for a city"),h(V,"class","w-16 h-10 bg-[#FF830F] text-xs rounded-xl hover:bg-[#FF9900] hover:scale-105 active:bg-[#FF6600] active:scale-95 transition duration-300 ease-in-out"),h(C,"class","mt-8 bg-[#2C3036] w-full rounded-3xl relative"),h(t,"class","flex flex-col"),h(n,"class","flex-col mt-4 h-4/6 flex w-full items-center justify-center "),h(e,"class","w-full flex-col pl-5 pr-5 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 bg-[#1b1b1b] h-screen mb-24")},m(i,$){ee(i,e,$),o(e,n),o(n,t),o(t,l),o(l,a),o(l,s),o(l,f),o(l,c),o(l,d),o(t,w),o(t,u),o(t,M),o(t,b),Y(T,b,null),o(b,P),Y(D,b,null),o(b,R),Y(F,b,null),o(b,p),Y(g,b,null),o(t,j),o(t,C),o(C,k),fe(k,r[1]),o(C,te),o(C,V),o(C,ne),m&&m.m(C,null),z=!0,le||(oe=[B(k,"input",r[12]),B(k,"input",r[5]),B(k,"focus",r[13]),B(V,"click",r[4])],le=!0)},p(i,[$]){(!z||$&1)&&re(s,i[0]),$&2&&k.value!==i[1]&&fe(k,i[1]),i[2]&&i[3].length>0?m?m.p(i,$):(m=ge(i),m.c(),m.m(C,null)):m&&(m.d(1),m=null)},i(i){z||(K(T.$$.fragment,i),K(D.$$.fragment,i),K(F.$$.fragment,i),K(g.$$.fragment,i),z=!0)},o(i){Q(T.$$.fragment,i),Q(D.$$.fragment,i),Q(F.$$.fragment,i),Q(g.$$.fragment,i),z=!1},d(i){i&&y(e),W(T),W(D),W(F),W(g),m&&m.d(),le=!1,xe(oe)}}}function Le(r,e,n){let t="";je(()=>{function p(){return localStorage.getItem("authToken")}function g(){return localStorage.getItem("name")}n(0,t=g()),p();const j=p();j?l(j):N("/login")});async function l(p){try{if(!(await fetch("http://127.0.0.1:8000/users/me",{method:"GET",headers:{Authorization:`Bearer ${p}`}})).ok)throw N("/login"),new Error("Token validation failed")}catch(g){console.error("Invalid token",g),N("/login")}}let a="";function s(){a==""||(he(a),N("/parameters/dates"))}let f=!1,c=[];const d=async function(g){if(g.length>0)try{const j=await fetch(`http://127.0.0.1:8000/autocomplete?query=${encodeURIComponent(g)}`);j.ok?(n(3,c=await j.json()),n(2,f=c.length>0)):console.error("Failed to fetch autocomplete results")}catch(j){console.error("Error fetching autocomplete results:",j)}else n(3,c=[]),n(2,f=!1)};async function w(){a.length>0?await d(a):(n(3,c=[]),n(2,f=!1))}async function u(p){n(1,a=p),console.log(a),n(2,f=!1)}function x(p){n(1,a=p),he(a),N("/parameters/dates")}const M=()=>x("delhi"),b=()=>x("mumbai"),T=()=>x("jaipur"),P=()=>x("varanasi");function D(){a=this.value,n(1,a)}return[t,a,f,c,s,w,u,x,M,b,T,P,D,()=>n(2,f=!0),p=>u(p)]}class qe extends be{constructor(e){super(),ye(this,e,Le,Ge,_e,{})}}export{qe as component};

import{S as N,I as $,J as G,K as I,L as V,M as h,U as g,N as w,O,t as z,P as J,Q,F as W,R as X,r as K,h as k,T as ee,H as re,V as ne,W as te,c as se,s as M,X as U,o as j,Y as x,d as ie,Z as E,_ as Z,y as B,$ as ae,a0 as fe,a1 as C,a2 as ue,a3 as le,a4 as ce,a5 as oe,a6 as _e,a7 as ve,x as de,a8 as be,a9 as ge}from"./fY7zGoy0.js";function S(e,n=null,u){if(typeof e!="object"||e===null||N in e)return e;const t=Q(e);if(t!==$&&t!==G)return e;var s=new Map,o=W(e),v=I(0);o&&s.set("length",I(e.length));var P;return new Proxy(e,{defineProperty(l,r,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&J();var f=s.get(r);return f===void 0?(f=I(i.value),s.set(r,f)):w(f,S(i.value,P)),!0},deleteProperty(l,r){var i=s.get(r);if(i===void 0)r in l&&s.set(r,I(g));else{if(o&&typeof r=="string"){var f=s.get("length"),a=Number(r);Number.isInteger(a)&&a<f.v&&w(f,a)}w(i,g),F(v)}return!0},get(l,r,i){var d;if(r===N)return e;var f=s.get(r),a=r in l;if(f===void 0&&(!a||(d=O(l,r))!=null&&d.writable)&&(f=I(S(a?l[r]:g,P)),s.set(r,f)),f!==void 0){var c=h(f);return c===g?void 0:c}return Reflect.get(l,r,i)},getOwnPropertyDescriptor(l,r){var i=Reflect.getOwnPropertyDescriptor(l,r);if(i&&"value"in i){var f=s.get(r);f&&(i.value=h(f))}else if(i===void 0){var a=s.get(r),c=a==null?void 0:a.v;if(a!==void 0&&c!==g)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return i},has(l,r){var c;if(r===N)return!0;var i=s.get(r),f=i!==void 0&&i.v!==g||Reflect.has(l,r);if(i!==void 0||z!==null&&(!f||(c=O(l,r))!=null&&c.writable)){i===void 0&&(i=I(f?S(l[r],P):g),s.set(r,i));var a=h(i);if(a===g)return!1}return f},set(l,r,i,f){var m;var a=s.get(r),c=r in l;if(o&&r==="length")for(var d=i;d<a.v;d+=1){var y=s.get(d+"");y!==void 0?w(y,g):d in l&&(y=I(g),s.set(d+"",y))}a===void 0?(!c||(m=O(l,r))!=null&&m.writable)&&(a=I(void 0),w(a,S(i,P)),s.set(r,a)):(c=a.v!==g,w(a,S(i,P)));var b=Reflect.getOwnPropertyDescriptor(l,r);if(b!=null&&b.set&&b.set.call(f,i),!c){if(o&&typeof r=="string"){var T=s.get("length"),A=Number(r);Number.isInteger(A)&&A>=T.v&&w(T,A+1)}F(v)}return!0},ownKeys(l){h(v);var r=Reflect.ownKeys(l).filter(a=>{var c=s.get(a);return c===void 0||c.v!==g});for(var[i,f]of s)f.v!==g&&!(i in l)&&r.push(i);return r},setPrototypeOf(){V()}})}function F(e,n=1){w(e,e.v+n)}function we(e,n,[u,t]=[0,0]){K&&u===0&&k();var s=e,o=null,v=null,P=g,l=u>0?ee:0,r=!1;const i=(a,c=!0)=>{r=!0,f(c,a)},f=(a,c)=>{if(P===(P=a))return;let d=!1;if(K&&t!==-1){if(u===0){const b=s.data;b===re?t=0:b===ne?t=1/0:(t=parseInt(b.substring(1)),t!==t&&(t=P?1/0:-1))}const y=t>u;!!P===y&&(s=te(),se(s),M(!1),d=!0,t=-1)}P?(o?U(o):c&&(o=j(()=>c(s))),v&&x(v,()=>{v=null})):(v?U(v):c&&(v=j(()=>c(s,[u+1,t]))),o&&x(o,()=>{o=null})),d&&M(!0)};X(()=>{r=!1,n(i),r||f(null,null)},l),K&&(s=ie)}let D=!1;function Pe(e){var n=D;try{return D=!1,[e(),D]}finally{D=n}}const he={get(e,n){if(!e.exclude.includes(n))return e.props[n]},set(e,n){return!1},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Ie(e,n,u){return new Proxy({props:e,exclude:n},he)}const ye={get(e,n){let u=e.props.length;for(;u--;){let t=e.props[u];if(E(t)&&(t=t()),typeof t=="object"&&t!==null&&n in t)return t[n]}},set(e,n,u){let t=e.props.length;for(;t--;){let s=e.props[t];E(s)&&(s=s());const o=O(s,n);if(o&&o.set)return o.set(u),!0}return!1},getOwnPropertyDescriptor(e,n){let u=e.props.length;for(;u--;){let t=e.props[u];if(E(t)&&(t=t()),typeof t=="object"&&t!==null&&n in t){const s=O(t,n);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,n){if(n===N||n===Z)return!1;for(let u of e.props)if(E(u)&&(u=u()),u!=null&&n in u)return!0;return!1},ownKeys(e){const n=[];for(let u of e.props){E(u)&&(u=u());for(const t in u)n.includes(t)||n.push(t)}return n}};function me(...e){return new Proxy({props:e},ye)}function H(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Re(e,n,u,t){var q;var s=(u&ge)!==0,o=!de||(u&be)!==0,v=(u&_e)!==0,P=(u&ve)!==0,l=!1,r;v?[r,l]=Pe(()=>e[n]):r=e[n];var i=N in e||Z in e,f=v&&(((q=O(e,n))==null?void 0:q.set)??(i&&n in e&&(_=>e[n]=_)))||void 0,a=t,c=!0,d=!1,y=()=>(d=!0,c&&(c=!1,P?a=B(t):a=t),a);r===void 0&&t!==void 0&&(f&&o&&ae(),r=y(),f&&f(r));var b;if(o)b=()=>{var _=e[n];return _===void 0?y():(c=!0,d=!1,_)};else{var T=(s?C:ue)(()=>e[n]);T.f|=fe,b=()=>{var _=h(T);return _!==void 0&&(a=void 0),_===void 0?a:_}}if((u&le)===0)return b;if(f){var A=e.$$legacy;return function(_,R){return arguments.length>0?((!o||!R||A||l)&&f(R?b():_),_):b()}}var m=!1,L=oe(r),p=C(()=>{var _=b(),R=h(L);return m?(m=!1,R):L.v=_});return v&&h(p),s||(p.equals=ce),function(_,R){if(arguments.length>0){const Y=R?h(p):o&&v?S(_):_;if(!p.equals(Y)){if(m=!0,w(L,Y),d&&a!==void 0&&(a=Y),H(p))return _;B(()=>h(p))}return _}return H(p)?p.v:h(p)}}export{S as a,we as i,Re as p,Ie as r,me as s};

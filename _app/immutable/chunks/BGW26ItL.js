var bn=Array.isArray,Kt=Array.prototype.indexOf,Fn=Array.from,Mn=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,Zt=Object.getOwnPropertyDescriptors,Ln=Object.prototype,qn=Array.prototype,$t=Object.getPrototypeOf;function Yn(t){return typeof t=="function"}const jn=()=>{};function Bn(t){return t()}function yt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,gt=4,X=8,ft=16,R=32,P=64,G=128,w=256,K=512,d=1024,D=2048,b=4096,C=8192,Q=16384,zt=32768,mt=65536,Hn=1<<17,Jt=1<<19,Tt=1<<20,pt=Symbol("$state"),Un=Symbol("legacy props"),Vn=Symbol("");function At(t){return t===this.v}function Wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function xt(t){return!Wt(t,this.v)}function Xt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function tn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function nn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Gn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Kn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Zn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function $n(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function rn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function zn(){tt=!0}const Jn=1,Wn=2,Xn=16,Qn=1,tr=2,nr=4,rr=8,er=16,ar=4,lr=1,sr=2,an="[",ln="[!",sn="]",Rt={},ur=Symbol(),or="http://www.w3.org/1999/xhtml",fr="http://www.w3.org/2000/svg";function St(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function un(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let o=null;function ht(t){o=t}function ir(t){return Dt().get(t)}function _r(t,n){return Dt().set(t,n),n}function cr(t,n=!1,r){var e=o={p:o,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};tt&&!n&&(o.l={s:null,u:null,r1:[],r2:it(!1)}),dn(()=>{e.d=!0})}function vr(t){const n=o;if(n!==null){const s=n.e;if(s!==null){var r=f,e=u;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];z(a.effect),$(a.reaction),Ft(a.fn)}}finally{z(r),$(e)}}o=n.p,n.m=!0}return{}}function nt(){return!tt||o!==null&&o.l===null}function Dt(t){return o===null&&un(),o.c??(o.c=new Map(on(o)||void 0))}function on(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}const L=new Map;function it(t,n){var r={f:0,v:t,reactions:null,equals:At,rv:0,wv:0};return r}function pr(t){return fn(it(t))}function hr(t,n=!1){var e;const r=it(t);return n||(r.equals=xt),tt&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function fn(t){return u!==null&&!E&&(u.f&y)!==0&&(T===null?An([t]):T.push(t)),t}function dr(t,n){return u!==null&&!E&&nt()&&(u.f&(y|ft))!==0&&(T===null||!T.includes(t))&&en(),_n(t,n)}function _n(t,n){if(!t.equals(n)){var r=t.v;B?L.set(t,n):L.set(t,r),t.v=n,t.wv=Ut(),It(t,D),nt()&&f!==null&&(f.f&d)!==0&&(f.f&(R|P))===0&&(x===null?xn([t]):x.push(t))}return n}function It(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),l=r.length,a=0;a<l;a++){var s=r[a],i=s.f;(i&D)===0&&(!e&&s===f||(A(s,n),(i&(d|w))!==0&&((i&y)!==0?It(s,b):et(s))))}}let O=!1;function wr(t){O=t}let g;function q(t){if(t===null)throw St(),Rt;return g=t}function Er(){return q(N(g))}function yr(t){if(O){if(N(g)!==null)throw St(),Rt;g=t}}function gr(t=1){if(O){for(var n=t,r=g;n--;)r=N(r);g=r}}function mr(){for(var t=0,n=g;;){if(n.nodeType===8){var r=n.data;if(r===sn){if(t===0)return n;t-=1}else(r===an||r===ln)&&(t+=1)}var e=N(n);n.remove(),n=e}}var dt,cn,Ot,kt;function Tr(){if(dt===void 0){dt=window,cn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Ot=vt(n,"firstChild").get,kt=vt(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0,Text.prototype.__t=void 0}}function at(t=""){return document.createTextNode(t)}function lt(t){return Ot.call(t)}function N(t){return kt.call(t)}function Ar(t,n){if(!O)return lt(t);var r=lt(g);if(r===null)r=g.appendChild(at());else if(n&&r.nodeType!==3){var e=at();return r==null||r.before(e),q(e),e}return q(r),r}function xr(t,n){if(!O){var r=lt(t);return r instanceof Comment&&r.data===""?N(r):r}return g}function Rr(t,n=1,r=!1){let e=O?g:t;for(var l;n--;)l=e,e=N(e);if(!O)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=at();return e===null?l==null||l.after(s):e.before(s),q(s),s}return q(e),e}function Sr(t){t.textContent=""}function Nt(t){var n=y|D,r=u!==null&&(u.f&y)!==0?u:null;return f===null||r!==null&&(r.f&w)!==0?n|=w:f.f|=Tt,{ctx:o,deps:null,effects:null,equals:At,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function Dr(t){const n=Nt(t);return n.equals=xt,n}function Ct(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)k(n[r])}}function vn(t){for(var n=t.parent;n!==null;){if((n.f&y)===0)return n;n=n.parent}return null}function pn(t){var n,r=f;z(vn(t));try{Ct(t),n=Gt(t)}finally{z(r)}return n}function Pt(t){var n=pn(t),r=(S||(t.f&w)!==0)&&t.deps!==null?b:d;A(t,r),t.equals(n)||(t.v=n,t.wv=Ut())}function bt(t){f===null&&u===null&&tn(),u!==null&&(u.f&w)!==0&&f===null&&Qt(),B&&Xt()}function hn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var l=f,a={ctx:o,deps:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(r)try{_t(a),a.f|=zt}catch(_){throw k(a),_}else n!==null&&et(a);var s=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Tt|G))===0;if(!s&&e&&(l!==null&&hn(a,l),u!==null&&(u.f&y)!==0)){var i=u;(i.effects??(i.effects=[])).push(a)}return a}function dn(t){const n=F(X,null,!1);return A(n,d),n.teardown=t,n}function Ir(t){bt();var n=f!==null&&(f.f&R)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Ft(t);return e}}function Or(t){return bt(),wn(t)}function kr(t){const n=F(P,t,!0);return(r={})=>new Promise(e=>{r.outro?gn(n,()=>{k(n),e(void 0)}):(k(n),e(void 0))})}function Ft(t){return F(gt,t,!1)}function wn(t){return F(X,t,!0)}function Nr(t,n=[],r=Nt){const e=n.map(r);return En(()=>t(...e.map(Cn)))}function En(t,n=0){return F(X|ft|n,t,!0)}function Cr(t,n=!0){return F(X|R,t,!0,n)}function Mt(t){var n=t.teardown;if(n!==null){const r=B,e=u;Et(!0),$(null);try{n.call(null)}finally{Et(r),$(e)}}}function Lt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;(r.f&P)!==0?r.parent=null:k(r,n),r=e}}function yn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&R)===0&&k(n),n=r}}function k(t,n=!0){var r=!1;if((n||(t.f&Jt)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:N(e);e.remove(),e=a}r=!0}Lt(t,n&&!r),W(t,0),A(t,Q);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Mt(t);var i=t.parent;i!==null&&i.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function gn(t,n){var r=[];Yt(t,r,!0),mn(r,()=>{k(t),n&&n()})}function mn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Yt(t,n,r){if((t.f&C)===0){if(t.f^=C,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&mt)!==0||(e.f&R)!==0;Yt(e,n,a?r:!1),e=l}}}function Pr(t){jt(t,!0)}function jt(t,n){if((t.f&C)!==0){t.f^=C,(t.f&d)===0&&(t.f^=d),H(t)&&(A(t,D),et(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&mt)!==0||(r.f&R)!==0;jt(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let Y=[],st=[];function Bt(){var t=Y;Y=[],yt(t)}function Tn(){var t=st;st=[],yt(t)}function br(t){Y.length===0&&queueMicrotask(Bt),Y.push(t)}function wt(){Y.length>0&&Bt(),st.length>0&&Tn()}let V=!1,j=!1,Z=null,I=!1,B=!1;function Et(t){B=t}let M=[];let u=null,E=!1;function $(t){u=t}let f=null;function z(t){f=t}let T=null;function An(t){T=t}let c=null,h=0,x=null;function xn(t){x=t}let Ht=1,J=0,S=!1;function Ut(){return++Ht}function H(t){var v;var n=t.f;if((n&D)!==0)return!0;if((n&b)!==0){var r=t.deps,e=(n&w)!==0;if(r!==null){var l,a,s=(n&K)!==0,i=e&&f!==null&&!S,_=r.length;if(s||i){var m=t,U=m.parent;for(l=0;l<_;l++)a=r[l],(s||!((v=a==null?void 0:a.reactions)!=null&&v.includes(m)))&&(a.reactions??(a.reactions=[])).push(m);s&&(m.f^=K),i&&U!==null&&(U.f&w)===0&&(m.f^=w)}for(l=0;l<_;l++)if(a=r[l],H(a)&&Pt(a),a.wv>t.wv)return!0}(!e||f!==null&&!S)&&A(t,d)}return!1}function Rn(t,n){for(var r=n;r!==null;){if((r.f&G)!==0)try{r.fn(t);return}catch{r.f^=G}r=r.parent}throw V=!1,t}function Sn(t){return(t.f&Q)===0&&(t.parent===null||(t.parent.f&G)===0)}function rt(t,n,r,e){if(V){if(r===null&&(V=!1),Sn(n))throw t;return}r!==null&&(V=!0);{Rn(t,n);return}}function Vt(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];(a.f&y)!==0?Vt(a,n,!1):n===a&&(r?A(a,D):(a.f&d)!==0&&A(a,b),et(a))}}function Gt(t){var ct;var n=c,r=h,e=x,l=u,a=S,s=T,i=o,_=E,m=t.f;c=null,h=0,x=null,S=(m&w)!==0&&(E||!I||u===null),u=(m&(R|P))===0?t:null,T=null,ht(t.ctx),E=!1,J++;try{var U=(0,t.fn)(),v=t.deps;if(c!==null){var p;if(W(t,h),v!==null&&h>0)for(v.length=h+c.length,p=0;p<c.length;p++)v[h+p]=c[p];else t.deps=v=c;if(!S)for(p=h;p<v.length;p++)((ct=v[p]).reactions??(ct.reactions=[])).push(t)}else v!==null&&h<v.length&&(W(t,h),v.length=h);if(nt()&&x!==null&&!E&&v!==null&&(t.f&(y|b|D))===0)for(p=0;p<x.length;p++)Vt(x[p],t);return l!==null&&J++,U}finally{c=n,h=r,x=e,u=l,S=a,T=s,ht(i),E=_}}function Dn(t,n){let r=n.reactions;if(r!==null){var e=Kt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&(n.f&y)!==0&&(c===null||!c.includes(n))&&(A(n,b),(n.f&(w|K))===0&&(n.f^=K),Ct(n),W(n,0))}function W(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Dn(t,r[e])}function _t(t){var n=t.f;if((n&Q)===0){A(t,d);var r=f,e=o,l=I;f=t,I=!0;try{(n&ft)!==0?yn(t):Lt(t),Mt(t);var a=Gt(t);t.teardown=typeof a=="function"?a:null,t.wv=Ht;var s=t.deps,i}catch(_){rt(_,t,r,e||t.ctx)}finally{I=l,f=r}}}function In(){try{nn()}catch(t){if(Z!==null)rt(t,Z,null);else throw t}}function ut(){var t=I;try{var n=0;for(I=!0;M.length>0;){n++>1e3&&In();var r=M,e=r.length;M=[];for(var l=0;l<e;l++){var a=kn(r[l]);On(a)}}}finally{j=!1,I=t,Z=null,L.clear()}}function On(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(Q|C))===0)try{H(e)&&(_t(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}catch(l){rt(l,e,null,e.ctx)}}}function et(t){j||(j=!0,queueMicrotask(ut));for(var n=Z=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(P|R))!==0){if((r&d)===0)return;n.f^=d}}M.push(n)}function kn(t){for(var n=[],r=t;r!==null;){var e=r.f,l=(e&(R|P))!==0,a=l&&(e&d)!==0;if(!a&&(e&C)===0){if((e&gt)!==0)n.push(r);else if(l)r.f^=d;else{var s=u;try{u=r,H(r)&&_t(r)}catch(m){rt(m,r,null,r.ctx)}finally{u=s}}var i=r.first;if(i!==null){r=i;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Nn(t){var n;for(t&&(j=!0,ut(),n=t()),wt();M.length>0;)j=!0,ut(),wt();return n}async function Fr(){await Promise.resolve(),Nn()}function Cn(t){var n=t.f,r=(n&y)!==0;if(u!==null&&!E){T!==null&&T.includes(t)&&rn();var e=u.deps;t.rv<J&&(t.rv=J,c===null&&e!==null&&e[h]===t?h++:c===null?c=[t]:(!S||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&w)===0&&(l.f^=w)}return r&&(l=t,H(l)&&Pt(l)),B&&L.has(t)?L.get(t):t.v}function Mr(t){var n=E;try{return E=!0,t()}finally{E=n}}const Pn=-7169;function A(t,n){t.f=t.f&Pn|n}function Lr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)ot(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&ot(r)}}}function ot(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ot(t[e],n)}catch{}const r=$t(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Zt(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{Or as $,$t as A,bn as B,Kn as C,Nt as D,mt as E,Dr as F,xt as G,an as H,rr as I,Un as J,tr as K,Hn as L,Qn as M,hr as N,Yn as O,nr as P,er as Q,cr as R,pt as S,vr as T,ur as U,xr as V,jn as W,Ar as X,yr as Y,Rr as Z,gr as _,tt as a,yt as a0,Bn as a1,Lr as a2,Nr as a3,$ as a4,z as a5,u as a6,dn as a7,br as a8,Mn as a9,Xn as aA,fr as aB,or as aC,Vn as aD,Zt as aE,_r as aF,ir as aG,ft as aH,zt as aI,ar as aJ,Wt as aK,Tr as aa,lt as ab,N as ac,Rt as ad,sn as ae,St as af,Gn as ag,Sr as ah,Fn as ai,kr as aj,at as ak,cn as al,lr as am,sr as an,Ft as ao,wn as ap,Nn as aq,pr as ar,Fr as as,C as at,_n as au,Wn as av,Yt as aw,mn as ax,k as ay,Jn as az,Mr as b,o as c,En as d,zn as e,Er as f,ln as g,O as h,wr as i,Pr as j,Cr as k,un as l,g as m,qn as n,Ln as o,gn as p,it as q,mr as r,q as s,$n as t,Ir as u,Cn as v,dr as w,vt as x,f as y,Zn as z};

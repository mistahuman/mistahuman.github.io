import{aa as k,ab as N,ac as W,y as E,ad as H,a5 as F,a7 as U,B as Y,h as p,ae as g,af as G,ag as X,ah as z,ai as A,m as i,f as P,s as R,aj as M,H as J,ak as K,al as S,i as T,am as Q,an as Z,ao as ee,ap as te,aq as re,ar as ae,k as ne,X as oe,c as ie,_ as se}from"./DbgX8nlu.js";function me(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ue=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function we(e){return ue.includes(e)}const le={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ge(e){return e=e.toLowerCase(),le[e]??e}const ce=["touchstart","touchmove"];function fe(e){return ce.includes(e)}const de=["textarea","script","style","title"];function Ee(e){return de.includes(e)}function _e(e){var t=W,r=E;k(null),N(null);try{return e()}finally{k(t),N(r)}}const x=new Set,I=new Set;function be(e){if(!p)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const t=e.__e;t!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(t)}))}function pe(e,t,r,s={}){function n(a){if(s.capture||w.call(t,a),!a.cancelBubble)return _e(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?F(()=>{t.addEventListener(e,n,s)}):t.addEventListener(e,n,s),n}function Te(e,t,r,s,n){var a={capture:s,passive:n},o=pe(e,t,r,a);(t===document.body||t===window||t===document)&&H(()=>{t.removeEventListener(e,o,a)})}function ke(e){for(var t=0;t<e.length;t++)x.add(e[t]);for(var r of I)r(e)}function w(e){var D;var t=this,r=t.ownerDocument,s=e.type,n=((D=e.composedPath)==null?void 0:D.call(e))||[],a=n[0]||e.target,o=0,f=e.__root;if(f){var c=n.indexOf(f);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var y=n.indexOf(t);if(y===-1)return;c<=y&&(o=c)}if(a=n[o]||e.target,a!==t){U(e,"currentTarget",{configurable:!0,get(){return a||r}});var L=W,d=E;k(null),N(null);try{for(var u,l=[];a!==null;){var v=a.assignedSlot||a.parentNode||a.host||null;try{var h=a["__"+s];if(h!=null&&(!a.disabled||e.target===a))if(Y(h)){var[q,...B]=h;q.apply(a,[e,...B])}else h.call(a,e)}catch(b){u?l.push(b):u=b}if(e.cancelBubble||v===t||v===null)break;a=v}if(u){for(let b of l)queueMicrotask(()=>{throw b});throw u}}finally{e.__root=t,delete e.currentTarget,k(L),N(d)}}}function $(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function _(e,t){var r=E;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function Ne(e,t){var r=(t&X)!==0,s=(t&z)!==0,n,a=!e.startsWith("<!>");return()=>{if(p)return _(i,null),i;n===void 0&&(n=$(a?e:"<!>"+e),r||(n=g(n)));var o=s||G?document.importNode(n,!0):n.cloneNode(!0);if(r){var f=g(o),c=o.lastChild;_(f,c)}else _(o,o);return o}}function Ae(e,t,r="svg"){var s=!e.startsWith("<!>"),n=`<${r}>${s?e:"<!>"+e}</${r}>`,a;return()=>{if(p)return _(i,null),i;if(!a){var o=$(n),f=g(o);a=g(f)}var c=a.cloneNode(!0);return _(c,c),c}}function Le(e=""){if(!p){var t=A(e+"");return _(t,t),t}var r=i;return r.nodeType!==3&&(r.before(r=A()),R(r)),_(r,r),r}function Se(){if(p)return _(i,null),i;var e=document.createDocumentFragment(),t=document.createComment(""),r=A();return e.append(t,r),_(t,r),e}function Re(e,t){if(p){E.nodes_end=i,P();return}e!==null&&e.before(t)}function Me(){var e,t;if(p&&i&&i.nodeType===8&&((e=i.textContent)!=null&&e.startsWith("#"))){const r=i.textContent.substring(1);return P(),r}return(t=window.__svelte??(window.__svelte={})).uid??(t.uid=1),`c${window.__svelte.uid++}`}let O=!0;function Ie(e){O=e}function Oe(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r+"")}function ve(e,t){return j(e,t)}function Ce(e,t){M(),t.intro=t.intro??!1;const r=t.target,s=p,n=i;try{for(var a=g(r);a&&(a.nodeType!==8||a.data!==J);)a=K(a);if(!a)throw S;T(!0),R(a),P();const o=j(e,{...t,anchor:a});if(i===null||i.nodeType!==8||i.data!==Q)throw Z(),S;return T(!1),o}catch(o){if(o===S)return t.recover===!1&&ee(),M(),te(r),T(!1),ve(e,t);throw o}finally{T(s),R(n)}}const m=new Map;function j(e,{target:t,anchor:r,props:s={},events:n,context:a,intro:o=!0}){M();var f=new Set,c=d=>{for(var u=0;u<d.length;u++){var l=d[u];if(!f.has(l)){f.add(l);var v=fe(l);t.addEventListener(l,w,{passive:v});var h=m.get(l);h===void 0?(document.addEventListener(l,w,{passive:v}),m.set(l,1)):m.set(l,h+1)}}};c(re(x)),I.add(c);var y=void 0,L=ae(()=>{var d=r??t.appendChild(A());return ne(()=>{if(a){oe({});var u=ie;u.c=a}n&&(s.$$events=n),p&&_(d,null),O=o,y=e(d,s)||{},O=!0,p&&(E.nodes_end=i),a&&se()}),()=>{var v;for(var u of f){t.removeEventListener(u,w);var l=m.get(u);--l===0?(document.removeEventListener(u,w),m.delete(u)):m.set(u,l)}I.delete(c),d!==r&&((v=d.parentNode)==null||v.removeChild(d))}});return C.set(y,L),y}let C=new WeakMap;function Pe(e,t){const r=C.get(e);return r?(C.delete(e),r(t)):Promise.resolve()}const he="5";var V;typeof window<"u"&&((V=window.__svelte??(window.__svelte={})).v??(V.v=new Set)).add(he);export{Re as a,Le as b,Se as c,_ as d,Te as e,Ie as f,me as g,Ce as h,Ee as i,pe as j,ke as k,we as l,ve as m,ge as n,Ae as o,O as p,Me as q,be as r,Oe as s,Ne as t,Pe as u,_e as w};

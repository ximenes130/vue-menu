import{c as u,K as O,g as P,L as S,b as E,M as w,N as K,O as T,P as I}from"./index.53350809.js";import{d as M}from"./QIcon.7e62cf20.js";function j(t){return t.appContext.config.globalProperties.$router!==void 0}function _(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function b(t,r){return(t.aliasOf||t)===(r.aliasOf||r)}function N(t,r){for(const e in r){const a=r[e],o=t[e];if(typeof a=="string"){if(a!==o)return!1}else if(Array.isArray(o)===!1||o.length!==a.length||a.some((i,l)=>i!==o[l]))return!1}return!0}function C(t,r){return Array.isArray(r)===!0?t.length===r.length&&t.every((e,a)=>e===r[a]):t.length===1&&t[0]===r}function B(t,r){return Array.isArray(t)===!0?C(t,r):Array.isArray(r)===!0?C(r,t):t===r}function V(t,r){if(Object.keys(t).length!==Object.keys(r).length)return!1;for(const e in t)if(B(t[e],r[e])===!1)return!1;return!0}const Y={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function z(t){const r=P(),{props:e,proxy:a}=r,o=j(r),i=u(()=>e.disable!==!0&&e.href!==void 0),l=u(()=>o===!0&&e.disable!==!0&&i.value!==!0&&e.to!==void 0&&e.to!==null&&e.to!==""),s=u(()=>{if(l.value===!0)try{return a.$router.resolve(e.to)}catch{}return null}),c=u(()=>s.value!==null),g=u(()=>i.value===!0||c.value===!0),$=u(()=>e.type==="a"||g.value===!0?"a":e.tag||t||"div"),y=u(()=>i.value===!0?{href:e.href,target:e.target}:c.value===!0?{href:s.value.href,target:e.target}:{}),v=u(()=>{if(c.value===!1)return null;const{matched:n}=s.value,{length:d}=n,m=n[d-1];if(m===void 0)return-1;const f=a.$route.matched;if(f.length===0)return-1;const R=f.findIndex(b.bind(null,m));if(R>-1)return R;const q=_(n[d-2]);return d>1&&_(m)===q&&f[f.length-1].path!==q?f.findIndex(b.bind(null,n[d-2])):R}),p=u(()=>c.value===!0&&v.value>-1&&N(a.$route.params,s.value.params)),h=u(()=>p.value===!0&&v.value===a.$route.matched.length-1&&V(a.$route.params,s.value.params)),k=u(()=>c.value===!0?h.value===!0?` ${e.exactActiveClass} ${e.activeClass}`:e.exact===!0?"":p.value===!0?` ${e.activeClass}`:"":"");function x(n){return e.disable===!0||n.metaKey||n.altKey||n.ctrlKey||n.shiftKey||n.__qNavigate!==!0&&n.defaultPrevented===!0||n.button!==void 0&&n.button!==0||e.target==="_blank"?!1:(O(n),a.$router[e.replace===!0?"replace":"push"](e.to).catch(d=>d))}return{hasRouterLink:c,hasHrefLink:i,hasLink:g,linkTag:$,linkRoute:s,linkIsActive:p,linkIsExactActive:h,linkClass:k,linkProps:y,navigateToRouterLink:x}}function H(t,r){const e=t.style;for(const a in r)e[a]=r[a]}function F(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const r=S(t)===!0?t.value:t;if(r)return r.$el||r}function D(t,r=250){let e=!1,a;return function(){return e===!1&&(e=!0,setTimeout(()=>{e=!1},r),a=t.apply(this,arguments)),a}}function A(t,r,e,a){e.modifiers.stop===!0&&T(t);const o=e.modifiers.color;let i=e.modifiers.center;i=i===!0||a===!0;const l=document.createElement("span"),s=document.createElement("span"),c=I(t),{left:g,top:$,width:y,height:v}=r.getBoundingClientRect(),p=Math.sqrt(y*y+v*v),h=p/2,k=`${(y-p)/2}px`,x=i?k:`${c.left-g-h}px`,n=`${(v-p)/2}px`,d=i?n:`${c.top-$-h}px`;s.className="q-ripple__inner",H(s,{height:`${p}px`,width:`${p}px`,transform:`translate3d(${x},${d},0) scale3d(.2,.2,1)`,opacity:0}),l.className=`q-ripple${o?" text-"+o:""}`,l.setAttribute("dir","ltr"),l.appendChild(s),r.appendChild(l);const m=()=>{l.remove(),clearTimeout(f)};e.abort.push(m);let f=setTimeout(()=>{s.classList.add("q-ripple__inner--enter"),s.style.transform=`translate3d(${k},${n},0) scale3d(1,1,1)`,s.style.opacity=.2,f=setTimeout(()=>{s.classList.remove("q-ripple__inner--enter"),s.classList.add("q-ripple__inner--leave"),s.style.opacity=0,f=setTimeout(()=>{l.remove(),e.abort.splice(e.abort.indexOf(m),1)},275)},250)},50)}function L(t,{modifiers:r,value:e,arg:a}){const o=Object.assign({},t.cfg.ripple,r,e);t.modifiers={early:o.early===!0,stop:o.stop===!0,center:o.center===!0,color:o.color||a,keyCodes:[].concat(o.keyCodes||13)}}var G=M({name:"ripple",beforeMount(t,r){const e={cfg:r.instance.$.appContext.config.globalProperties.$q.config,enabled:r.value!==!1,modifiers:{},abort:[],start(a){e.enabled===!0&&a.qSkipRipple!==!0&&a.type===(e.modifiers.early===!0?"pointerdown":"click")&&A(a,t,e,a.qKeyEvent===!0)},keystart:D(a=>{e.enabled===!0&&a.qSkipRipple!==!0&&E(a,e.modifiers.keyCodes)===!0&&a.type===`key${e.modifiers.early===!0?"down":"up"}`&&A(a,t,e,!0)},300)};L(e,r),t.__qripple=e,w(e,"main",[[t,"pointerdown","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},updated(t,r){if(r.oldValue!==r.value){const e=t.__qripple;e.enabled=r.value!==!1,e.enabled===!0&&Object(r.value)===r.value&&L(e,r)}},beforeUnmount(t){const r=t.__qripple;r.abort.forEach(e=>{e()}),K(r,"main"),delete t._qripple}});export{G as R,z as a,H as c,F as g,Y as u};

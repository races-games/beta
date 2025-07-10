const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/app.element-BoWJT0zS.js","assets/app-Cr9-IYFX.css"])))=>i.map(i=>d[i]);
var LT=Object.defineProperty;var Qm=ft=>{throw TypeError(ft)};var NT=(ft,vt,Mt)=>vt in ft?LT(ft,vt,{enumerable:!0,configurable:!0,writable:!0,value:Mt}):ft[vt]=Mt;var ne=(ft,vt,Mt)=>NT(ft,typeof vt!="symbol"?vt+"":vt,Mt),Cu=(ft,vt,Mt)=>vt.has(ft)||Qm("Cannot "+Mt);var et=(ft,vt,Mt)=>(Cu(ft,vt,"read from private field"),Mt?Mt.call(ft):vt.get(ft)),At=(ft,vt,Mt)=>vt.has(ft)?Qm("Cannot add the same private member more than once"):vt instanceof WeakSet?vt.add(ft):vt.set(ft,Mt),It=(ft,vt,Mt,Ia)=>(Cu(ft,vt,"write to private field"),Ia?Ia.call(ft,Mt):vt.set(ft,Mt),Mt),Zi=(ft,vt,Mt)=>(Cu(ft,vt,"access private method"),Mt);let eg,ze,Pu,Lu,Ss,$l,Ql,kt,Aa,Nu,li,tg,ec,Ra,U,Ht,Ca,He,Di,ig,Du,tc,Uu,Pa,Iu,Ou,ic,sc,Ki,La,nc,rc,ac,oc,lc,cc,hc,Na,uc,mi,DT=(async()=>{var Mr,Mn,Da,wr,Gm,Sr,Wm,wn,wa,ql,sg,jm,Eu,Er,Xl,Tu,bs,zs,Yl,Zl,Bs,Sn,Yi,Ms,En,Ua,Sa,Ea;(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const ft="modulepreload",vt=function(s){return"/"+s},Mt={},Ia=function(s,e,t){let i=Promise.resolve();if(e&&e.length>0){let r=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=r(e.map(l=>{if(l=vt(l),l in Mt)return;Mt[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":ft,c||(d.as="script"),d.crossOrigin="",d.href=l,o&&d.setAttribute("nonce",o),document.head.appendChild(d),c)return new Promise((u,p)=>{d.addEventListener("load",u),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function n(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return i.then(r=>{for(const a of r||[])a.status==="rejected"&&n(a.reason);return s().catch(n)})};let Oa,Fu,dc,zu,pc,fc,Ui,Ii,Zt,gi,jt,ks,Fa,mc,gc,vc,Oi,Bu,ku,Hu,Vu,za,Gu,Wu,ju,Ba,ka,xc,qu,_c,Xu,Yu,Zu,Ku,Ju,$u,Ha,Va,Ga,Hs,Wa,ja,qa,Xa,yc,Qu,ed,Ji,bc,Mc,wc,Ya,Sc,Ec,Tc,Ac,td,Rc,Vs,Gs,Za,Ar,$i,vi,Rr,Ot,Cc,Cn,Rt,Cr,xi,_i,Pc,Lc,Pn,Ka,Es,qt,Vt,Ja,$a,Ws,Nc,Dc,Uc,si,Ln,js,Pr,Qa,Ic,eo,to,Lr,Nr,Dr,Ur,io,so,no,ro,ao,oo,lo,co,ho,uo,po,fo,mo,go,vo,xo,_o,yo,bo,Mo,wo,Ir,So,Eo,Oc,To,Ao,Ro,Nn,Dn,Co,Fc,zc,Bc,id,sd,kc,Po,nd,rd,Lo,ad,Qi,Ct,Or,ot,qs,Hc,od,ld,cd,Vc,hd,ud,dd,pd,No,Gc,Fi,Fr;Oa="177",Fu=0,dc=1,zu=2,pc=1,fc=2,Ui=3,Ii=0,Zt=1,gi=2,jt=0,ks=1,Fa=2,mc=3,gc=4,vc=5,Oi=100,Bu=101,ku=102,Hu=103,Vu=104,za=200,Gu=201,Wu=202,ju=203,Ba=204,ka=205,xc=206,qu=207,_c=208,Xu=209,Yu=210,Zu=211,Ku=212,Ju=213,$u=214,Ha=0,Va=1,Ga=2,Hs=3,Wa=4,ja=5,qa=6,Xa=7,yc=0,Qu=1,ed=2,Ji=0,bc=1,Mc=2,wc=3,Ya=4,Sc=5,Ec=6,Tc=7,Ac="attached",td="detached",Rc=300,Vs=301,Gs=302,La=303,Za=304,Ar=306,$i=1e3,vi=1001,Rr=1002,Ot=1003,Cc=1004,Cn=1005,Rt=1006,Cr=1007,xi=1008,_i=1009,Pc=1010,Lc=1011,Pn=1012,Ka=1013,Es=1014,qt=1015,Vt=1016,Ja=1017,$a=1018,Ws=1020,Nc=35902,Dc=1021,Uc=1022,si=1023,Ln=1026,js=1027,Pr=1028,Qa=1029,Ic=1030,eo=1031,to=1033,Lr=33776,Nr=33777,Dr=33778,Ur=33779,io=35840,so=35841,no=35842,ro=35843,ao=36196,oo=37492,lo=37496,co=37808,ho=37809,uo=37810,po=37811,fo=37812,mo=37813,go=37814,vo=37815,xo=37816,_o=37817,yo=37818,bo=37819,Mo=37820,wo=37821,Ir=36492,So=36494,Eo=36495,Oc=36283,To=36284,Ao=36285,Ro=36286,Nn=2300,Dn=2301,Co=2302,Fc=2400,zc=2401,Bc=2402,id=2500,sd=0,kc=1,Po=2,nd=3200,rd=3201,Lo=0,ad=1,Qi="",Ct="srgb",kt="srgb-linear",Or="linear",ot="srgb",qs=7680,Hc=519,od=512,ld=513,cd=514,Vc=515,hd=516,ud=517,dd=518,pd=519,No=35044,Gc="300 es",Fi=2e3,Fr=2001;class Un{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fd=1234567;const zr=Math.PI/180,In=180/Math.PI;function ci(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[s&255]+Xt[s>>8&255]+Xt[s>>16&255]+Xt[s>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Ke(s,e,t){return Math.max(e,Math.min(t,s))}function Wc(s,e){return(s%e+e)%e}function ng(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function rg(s,e,t){return s!==e?(t-s)/(e-s):0}function Br(s,e,t){return(1-t)*s+t*e}function ag(s,e,t,i){return Br(s,e,1-Math.exp(-t*i))}function og(s,e=1){return e-Math.abs(Wc(s,e*2)-e)}function lg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function cg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function hg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ug(s,e){return s+Math.random()*(e-s)}function dg(s){return s*(.5-Math.random())}function pg(s){s!==void 0&&(fd=s);let e=fd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fg(s){return s*zr}function mg(s){return s*In}function gg(s){return(s&s-1)===0&&s!==0}function vg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function xg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _g(s,e,t,i,n){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),d=r((e-i)/2),u=a((e-i)/2),p=r((i-e)/2),g=a((i-e)/2);switch(n){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function yi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const md={DEG2RAD:zr,RAD2DEG:In,generateUUID:ci,clamp:Ke,euclideanModulo:Wc,mapLinear:ng,inverseLerp:rg,lerp:Br,damp:ag,pingpong:og,smoothstep:lg,smootherstep:cg,randInt:hg,randFloat:ug,randFloatSpread:dg,seededRandom:pg,degToRad:fg,radToDeg:mg,isPowerOfTwo:gg,ceilPowerOfTwo:vg,floorPowerOfTwo:xg,setQuaternionFromProperEuler:_g,normalize:lt,denormalize:yi};class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}li=class{constructor(s=0,e=0,t=0,i=1){this.isQuaternion=!0,this._x=s,this._y=e,this._z=t,this._w=i}static slerpFlat(s,e,t,i,n,r,a){let o=t[i+0],l=t[i+1],c=t[i+2],h=t[i+3];const d=n[r+0],u=n[r+1],p=n[r+2],g=n[r+3];if(a===0){s[e+0]=o,s[e+1]=l,s[e+2]=c,s[e+3]=h;return}if(a===1){s[e+0]=d,s[e+1]=u,s[e+2]=p,s[e+3]=g;return}if(h!==g||o!==d||l!==u||c!==p){let v=1-a;const m=o*d+l*u+c*p+h*g,f=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const _=Math.sqrt(x),R=Math.atan2(_,m*f);v=Math.sin(v*R)/_,a=Math.sin(a*R)/_}const y=a*f;if(o=o*v+d*y,l=l*v+u*y,c=c*v+p*y,h=h*v+g*y,v===1-a){const _=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=_,l*=_,c*=_,h*=_}}s[e]=o,s[e+1]=l,s[e+2]=c,s[e+3]=h}static multiplyQuaternionsFlat(s,e,t,i,n,r){const a=t[i],o=t[i+1],l=t[i+2],c=t[i+3],h=n[r],d=n[r+1],u=n[r+2],p=n[r+3];return s[e]=a*p+c*h+o*u-l*d,s[e+1]=o*p+c*d+l*h-a*u,s[e+2]=l*p+c*u+a*d-o*h,s[e+3]=c*p-a*h-o*d-l*u,s}get x(){return this._x}set x(s){this._x=s,this._onChangeCallback()}get y(){return this._y}set y(s){this._y=s,this._onChangeCallback()}get z(){return this._z}set z(s){this._z=s,this._onChangeCallback()}get w(){return this._w}set w(s){this._w=s,this._onChangeCallback()}set(s,e,t,i){return this._x=s,this._y=e,this._z=t,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(s){return this._x=s.x,this._y=s.y,this._z=s.z,this._w=s.w,this._onChangeCallback(),this}setFromEuler(s,e=!0){const t=s._x,i=s._y,n=s._z,r=s._order,a=Math.cos,o=Math.sin,l=a(t/2),c=a(i/2),h=a(n/2),d=o(t/2),u=o(i/2),p=o(n/2);switch(r){case"XYZ":this._x=d*c*h+l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h-d*u*p;break;case"YXZ":this._x=d*c*h+l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h+d*u*p;break;case"ZXY":this._x=d*c*h-l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h-d*u*p;break;case"ZYX":this._x=d*c*h-l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h+d*u*p;break;case"YZX":this._x=d*c*h+l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h-d*u*p;break;case"XZY":this._x=d*c*h-l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h+d*u*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(s,e){const t=e/2,i=Math.sin(t);return this._x=s.x*i,this._y=s.y*i,this._z=s.z*i,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(s){const e=s.elements,t=e[0],i=e[4],n=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],d=t+a+h;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(c-o)*u,this._y=(n-l)*u,this._z=(r-i)*u}else if(t>a&&t>h){const u=2*Math.sqrt(1+t-a-h);this._w=(c-o)/u,this._x=.25*u,this._y=(i+r)/u,this._z=(n+l)/u}else if(a>h){const u=2*Math.sqrt(1+a-t-h);this._w=(n-l)/u,this._x=(i+r)/u,this._y=.25*u,this._z=(o+c)/u}else{const u=2*Math.sqrt(1+h-t-a);this._w=(r-i)/u,this._x=(n+l)/u,this._y=(o+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(s,e){let t=s.dot(e)+1;return t<Number.EPSILON?(t=0,Math.abs(s.x)>Math.abs(s.z)?(this._x=-s.y,this._y=s.x,this._z=0,this._w=t):(this._x=0,this._y=-s.z,this._z=s.y,this._w=t)):(this._x=s.y*e.z-s.z*e.y,this._y=s.z*e.x-s.x*e.z,this._z=s.x*e.y-s.y*e.x,this._w=t),this.normalize()}angleTo(s){return 2*Math.acos(Math.abs(Ke(this.dot(s),-1,1)))}rotateTowards(s,e){const t=this.angleTo(s);if(t===0)return this;const i=Math.min(1,e/t);return this.slerp(s,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(s){return this._x*s._x+this._y*s._y+this._z*s._z+this._w*s._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let s=this.length();return s===0?(this._x=0,this._y=0,this._z=0,this._w=1):(s=1/s,this._x=this._x*s,this._y=this._y*s,this._z=this._z*s,this._w=this._w*s),this._onChangeCallback(),this}multiply(s){return this.multiplyQuaternions(this,s)}premultiply(s){return this.multiplyQuaternions(s,this)}multiplyQuaternions(s,e){const t=s._x,i=s._y,n=s._z,r=s._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=t*c+r*a+i*l-n*o,this._y=i*c+r*o+n*a-t*l,this._z=n*c+r*l+t*o-i*a,this._w=r*c-t*a-i*o-n*l,this._onChangeCallback(),this}slerp(s,e){if(e===0)return this;if(e===1)return this.copy(s);const t=this._x,i=this._y,n=this._z,r=this._w;let a=r*s._w+t*s._x+i*s._y+n*s._z;if(a<0?(this._w=-s._w,this._x=-s._x,this._y=-s._y,this._z=-s._z,a=-a):this.copy(s),a>=1)return this._w=r,this._x=t,this._y=i,this._z=n,this;const o=1-a*a;if(o<=Number.EPSILON){const u=1-e;return this._w=u*r+e*this._w,this._x=u*t+e*this._x,this._y=u*i+e*this._y,this._z=u*n+e*this._z,this.normalize(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-e)*c)/l,d=Math.sin(e*c)/l;return this._w=r*h+this._w*d,this._x=t*h+this._x*d,this._y=i*h+this._y*d,this._z=n*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(s,e,t){return this.copy(s).slerp(e,t)}random(){const s=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),t=Math.random(),i=Math.sqrt(1-t),n=Math.sqrt(t);return this.set(i*Math.sin(s),i*Math.cos(s),n*Math.sin(e),n*Math.cos(e))}equals(s){return s._x===this._x&&s._y===this._y&&s._z===this._z&&s._w===this._w}fromArray(s,e=0){return this._x=s[e],this._y=s[e+1],this._z=s[e+2],this._w=s[e+3],this._onChangeCallback(),this}toArray(s=[],e=0){return s[e]=this._x,s[e+1]=this._y,s[e+2]=this._z,s[e+3]=this._w,s}fromBufferAttribute(s,e){return this._x=s.getX(e),this._y=s.getY(e),this._z=s.getZ(e),this._w=s.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(s){return this._onChangeCallback=s,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{constructor(s=0,e=0,t=0){U.prototype.isVector3=!0,this.x=s,this.y=e,this.z=t}set(s,e,t){return t===void 0&&(t=this.z),this.x=s,this.y=e,this.z=t,this}setScalar(s){return this.x=s,this.y=s,this.z=s,this}setX(s){return this.x=s,this}setY(s){return this.y=s,this}setZ(s){return this.z=s,this}setComponent(s,e){switch(s){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+s)}return this}getComponent(s){switch(s){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+s)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(s){return this.x=s.x,this.y=s.y,this.z=s.z,this}add(s){return this.x+=s.x,this.y+=s.y,this.z+=s.z,this}addScalar(s){return this.x+=s,this.y+=s,this.z+=s,this}addVectors(s,e){return this.x=s.x+e.x,this.y=s.y+e.y,this.z=s.z+e.z,this}addScaledVector(s,e){return this.x+=s.x*e,this.y+=s.y*e,this.z+=s.z*e,this}sub(s){return this.x-=s.x,this.y-=s.y,this.z-=s.z,this}subScalar(s){return this.x-=s,this.y-=s,this.z-=s,this}subVectors(s,e){return this.x=s.x-e.x,this.y=s.y-e.y,this.z=s.z-e.z,this}multiply(s){return this.x*=s.x,this.y*=s.y,this.z*=s.z,this}multiplyScalar(s){return this.x*=s,this.y*=s,this.z*=s,this}multiplyVectors(s,e){return this.x=s.x*e.x,this.y=s.y*e.y,this.z=s.z*e.z,this}applyEuler(s){return this.applyQuaternion(gd.setFromEuler(s))}applyAxisAngle(s,e){return this.applyQuaternion(gd.setFromAxisAngle(s,e))}applyMatrix3(s){const e=this.x,t=this.y,i=this.z,n=s.elements;return this.x=n[0]*e+n[3]*t+n[6]*i,this.y=n[1]*e+n[4]*t+n[7]*i,this.z=n[2]*e+n[5]*t+n[8]*i,this}applyNormalMatrix(s){return this.applyMatrix3(s).normalize()}applyMatrix4(s){const e=this.x,t=this.y,i=this.z,n=s.elements,r=1/(n[3]*e+n[7]*t+n[11]*i+n[15]);return this.x=(n[0]*e+n[4]*t+n[8]*i+n[12])*r,this.y=(n[1]*e+n[5]*t+n[9]*i+n[13])*r,this.z=(n[2]*e+n[6]*t+n[10]*i+n[14])*r,this}applyQuaternion(s){const e=this.x,t=this.y,i=this.z,n=s.x,r=s.y,a=s.z,o=s.w,l=2*(r*i-a*t),c=2*(a*e-n*i),h=2*(n*t-r*e);return this.x=e+o*l+r*h-a*c,this.y=t+o*c+a*l-n*h,this.z=i+o*h+n*c-r*l,this}project(s){return this.applyMatrix4(s.matrixWorldInverse).applyMatrix4(s.projectionMatrix)}unproject(s){return this.applyMatrix4(s.projectionMatrixInverse).applyMatrix4(s.matrixWorld)}transformDirection(s){const e=this.x,t=this.y,i=this.z,n=s.elements;return this.x=n[0]*e+n[4]*t+n[8]*i,this.y=n[1]*e+n[5]*t+n[9]*i,this.z=n[2]*e+n[6]*t+n[10]*i,this.normalize()}divide(s){return this.x/=s.x,this.y/=s.y,this.z/=s.z,this}divideScalar(s){return this.multiplyScalar(1/s)}min(s){return this.x=Math.min(this.x,s.x),this.y=Math.min(this.y,s.y),this.z=Math.min(this.z,s.z),this}max(s){return this.x=Math.max(this.x,s.x),this.y=Math.max(this.y,s.y),this.z=Math.max(this.z,s.z),this}clamp(s,e){return this.x=Ke(this.x,s.x,e.x),this.y=Ke(this.y,s.y,e.y),this.z=Ke(this.z,s.z,e.z),this}clampScalar(s,e){return this.x=Ke(this.x,s,e),this.y=Ke(this.y,s,e),this.z=Ke(this.z,s,e),this}clampLength(s,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Ke(t,s,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(s){return this.x*s.x+this.y*s.y+this.z*s.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(s){return this.normalize().multiplyScalar(s)}lerp(s,e){return this.x+=(s.x-this.x)*e,this.y+=(s.y-this.y)*e,this.z+=(s.z-this.z)*e,this}lerpVectors(s,e,t){return this.x=s.x+(e.x-s.x)*t,this.y=s.y+(e.y-s.y)*t,this.z=s.z+(e.z-s.z)*t,this}cross(s){return this.crossVectors(this,s)}crossVectors(s,e){const t=s.x,i=s.y,n=s.z,r=e.x,a=e.y,o=e.z;return this.x=i*o-n*a,this.y=n*r-t*o,this.z=t*a-i*r,this}projectOnVector(s){const e=s.lengthSq();if(e===0)return this.set(0,0,0);const t=s.dot(this)/e;return this.copy(s).multiplyScalar(t)}projectOnPlane(s){return jc.copy(this).projectOnVector(s),this.sub(jc)}reflect(s){return this.sub(jc.copy(s).multiplyScalar(2*this.dot(s)))}angleTo(s){const e=Math.sqrt(this.lengthSq()*s.lengthSq());if(e===0)return Math.PI/2;const t=this.dot(s)/e;return Math.acos(Ke(t,-1,1))}distanceTo(s){return Math.sqrt(this.distanceToSquared(s))}distanceToSquared(s){const e=this.x-s.x,t=this.y-s.y,i=this.z-s.z;return e*e+t*t+i*i}manhattanDistanceTo(s){return Math.abs(this.x-s.x)+Math.abs(this.y-s.y)+Math.abs(this.z-s.z)}setFromSpherical(s){return this.setFromSphericalCoords(s.radius,s.phi,s.theta)}setFromSphericalCoords(s,e,t){const i=Math.sin(e)*s;return this.x=i*Math.sin(t),this.y=Math.cos(e)*s,this.z=i*Math.cos(t),this}setFromCylindrical(s){return this.setFromCylindricalCoords(s.radius,s.theta,s.y)}setFromCylindricalCoords(s,e,t){return this.x=s*Math.sin(e),this.y=t,this.z=s*Math.cos(e),this}setFromMatrixPosition(s){const e=s.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(s){const e=this.setFromMatrixColumn(s,0).length(),t=this.setFromMatrixColumn(s,1).length(),i=this.setFromMatrixColumn(s,2).length();return this.x=e,this.y=t,this.z=i,this}setFromMatrixColumn(s,e){return this.fromArray(s.elements,e*4)}setFromMatrix3Column(s,e){return this.fromArray(s.elements,e*3)}setFromEuler(s){return this.x=s._x,this.y=s._y,this.z=s._z,this}setFromColor(s){return this.x=s.r,this.y=s.g,this.z=s.b,this}equals(s){return s.x===this.x&&s.y===this.y&&s.z===this.z}fromArray(s,e=0){return this.x=s[e],this.y=s[e+1],this.z=s[e+2],this}toArray(s=[],e=0){return s[e]=this.x,s[e+1]=this.y,s[e+2]=this.z,s}fromBufferAttribute(s,e){return this.x=s.getX(e),this.y=s.getY(e),this.z=s.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const s=Math.random()*Math.PI*2,e=Math.random()*2-1,t=Math.sqrt(1-e*e);return this.x=t*Math.cos(s),this.y=e,this.z=t*Math.sin(s),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const jc=new U,gd=new li;class Je{constructor(e,t,i,n,r,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],v=n[0],m=n[3],f=n[6],x=n[1],y=n[4],_=n[7],R=n[2],T=n[5],E=n[8];return r[0]=a*v+o*x+l*R,r[3]=a*m+o*y+l*T,r[6]=a*f+o*_+l*E,r[1]=c*v+h*x+d*R,r[4]=c*m+h*y+d*T,r[7]=c*f+h*_+d*E,r[2]=u*v+p*x+g*R,r[5]=u*m+p*y+g*T,r[8]=u*f+p*_+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=t*d+i*u+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(n*c-h*i)*v,e[2]=(o*i-n*a)*v,e[3]=u*v,e[4]=(h*t-n*l)*v,e[5]=(n*r-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qc.makeScale(e,t)),this}rotate(e){return this.premultiply(qc.makeRotation(-e)),this}translate(e,t){return this.premultiply(qc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qc=new Je;function vd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function kr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yg(){const s=kr("canvas");return s.style.display="block",s}const xd={};function On(s){s in xd||(xd[s]=!0,console.warn(s))}function bg(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Mg(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wg(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _d=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yd=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sg(){const s={enabled:!0,workingColorSpace:kt,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(n.r=es(n.r),n.g=es(n.g),n.b=es(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(n.r=Fn(n.r),n.g=Fn(n.g),n.b=Fn(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Qi?Or:this.spaces[n].transfer},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return On("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return On("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[kt]:{primaries:e,whitePoint:i,transfer:Or,toXYZ:_d,fromXYZ:yd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:_d,fromXYZ:yd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),s}const st=Sg();function es(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let zn;class Eg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zn===void 0&&(zn=kr("canvas")),zn.width=e.width,zn.height=e.height;const n=zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=zn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=es(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(es(t[i]/255)*255):t[i]=es(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tg=0;class Xc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Yc(n[a].image)):r.push(Yc(n[a]))}else r=Yc(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function Yc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Eg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ag=0;const Zc=new U;class Ft extends Un{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=vi,n=vi,r=Rt,a=xi,o=si,l=_i,c=Ft.DEFAULT_ANISOTROPY,h=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=ci(),this.name="",this.source=new Xc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zc).x}get height(){return this.source.getSize(Zc).y}get depth(){return this.source.getSize(Zc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $i:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case Rr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $i:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case Rr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null,Ft.DEFAULT_MAPPING=Rc,Ft.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,n=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const a=e.elements,o=a[0],l=a[4],c=a[8],h=a[1],d=a[5],u=a[9],p=a[2],g=a[6],v=a[10];if(Math.abs(l-h)<.01&&Math.abs(c-p)<.01&&Math.abs(u-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+p)<.1&&Math.abs(u+g)<.1&&Math.abs(o+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const f=(o+1)/2,x=(d+1)/2,y=(v+1)/2,_=(l+h)/4,R=(c+p)/4,T=(u+g)/4;return f>x&&f>y?f<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(f),n=_/i,r=R/i):x>y?x<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),i=_/n,r=T/n):y<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(y),i=R/r,n=T/r),this.set(i,n,r,t),this}let m=Math.sqrt((g-u)*(g-u)+(c-p)*(c-p)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(g-u)/m,this.y=(c-p)/m,this.z=(h-l)/m,this.w=Math.acos((o+d+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rg extends Un{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const n={width:e,height:t,depth:i.depth},r=new Ft(n);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new Xc(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Rg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class bd extends Ft{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cg extends Ft{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bi):bi.fromBufferAttribute(r,a),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Do.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Do.copy(i.boundingBox)),Do.applyMatrix4(e.matrixWorld),this.union(Do)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),Uo.subVectors(this.max,Hr),Bn.subVectors(e.a,Hr),kn.subVectors(e.b,Hr),Hn.subVectors(e.c,Hr),Ts.subVectors(kn,Bn),As.subVectors(Hn,kn),Xs.subVectors(Bn,Hn);let t=[0,-Ts.z,Ts.y,0,-As.z,As.y,0,-Xs.z,Xs.y,Ts.z,0,-Ts.x,As.z,0,-As.x,Xs.z,0,-Xs.x,-Ts.y,Ts.x,0,-As.y,As.x,0,-Xs.y,Xs.x,0];return!Kc(t,Bn,kn,Hn,Uo)||(t=[1,0,0,0,1,0,0,0,1],!Kc(t,Bn,kn,Hn,Uo))?!1:(Io.crossVectors(Ts,As),t=[Io.x,Io.y,Io.z],Kc(t,Bn,kn,Hn,Uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(is),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const is=[new U,new U,new U,new U,new U,new U,new U,new U],bi=new U,Do=new ts,Bn=new U,kn=new U,Hn=new U,Ts=new U,As=new U,Xs=new U,Hr=new U,Uo=new U,Io=new U,Ys=new U;function Kc(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Ys.fromArray(s,r);const o=n.x*Math.abs(Ys.x)+n.y*Math.abs(Ys.y)+n.z*Math.abs(Ys.z),l=e.dot(Ys),c=t.dot(Ys),h=i.dot(Ys);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Pg=new ts,Vr=new U,Jc=new U;class zi{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Pg.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Vr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Jc)),this.expandByPoint(Vr.copy(e.center).sub(Jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ss=new U,$c=new U,Oo=new U,Rs=new U,Qc=new U,Fo=new U,eh=new U;let Gr=class{constructor(s=new U,e=new U(0,0,-1)){this.origin=s,this.direction=e}set(s,e){return this.origin.copy(s),this.direction.copy(e),this}copy(s){return this.origin.copy(s.origin),this.direction.copy(s.direction),this}at(s,e){return e.copy(this.origin).addScaledVector(this.direction,s)}lookAt(s){return this.direction.copy(s).sub(this.origin).normalize(),this}recast(s){return this.origin.copy(this.at(s,ss)),this}closestPointToPoint(s,e){e.subVectors(s,this.origin);const t=e.dot(this.direction);return t<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(s){return Math.sqrt(this.distanceSqToPoint(s))}distanceSqToPoint(s){const e=ss.subVectors(s,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(s):(ss.copy(this.origin).addScaledVector(this.direction,e),ss.distanceToSquared(s))}distanceSqToSegment(s,e,t,i){$c.copy(s).add(e).multiplyScalar(.5),Oo.copy(e).sub(s).normalize(),Rs.copy(this.origin).sub($c);const n=s.distanceTo(e)*.5,r=-this.direction.dot(Oo),a=Rs.dot(this.direction),o=-Rs.dot(Oo),l=Rs.lengthSq(),c=Math.abs(1-r*r);let h,d,u,p;if(c>0)if(h=r*o-a,d=r*a-o,p=n*c,h>=0)if(d>=-p)if(d<=p){const g=1/c;h*=g,d*=g,u=h*(h+r*d+2*a)+d*(r*h+d+2*o)+l}else d=n,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;else d=-n,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;else d<=-p?(h=Math.max(0,-(-r*n+a)),d=h>0?-n:Math.min(Math.max(-n,-o),n),u=-h*h+d*(d+2*o)+l):d<=p?(h=0,d=Math.min(Math.max(-n,-o),n),u=d*(d+2*o)+l):(h=Math.max(0,-(r*n+a)),d=h>0?n:Math.min(Math.max(-n,-o),n),u=-h*h+d*(d+2*o)+l);else d=r>0?-n:n,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;return t&&t.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy($c).addScaledVector(Oo,d),u}intersectSphere(s,e){ss.subVectors(s.center,this.origin);const t=ss.dot(this.direction),i=ss.dot(ss)-t*t,n=s.radius*s.radius;if(i>n)return null;const r=Math.sqrt(n-i),a=t-r,o=t+r;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(s){return s.radius<0?!1:this.distanceSqToPoint(s.center)<=s.radius*s.radius}distanceToPlane(s){const e=s.normal.dot(this.direction);if(e===0)return s.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(s.normal)+s.constant)/e;return t>=0?t:null}intersectPlane(s,e){const t=this.distanceToPlane(s);return t===null?null:this.at(t,e)}intersectsPlane(s){const e=s.distanceToPoint(this.origin);return e===0||s.normal.dot(this.direction)*e<0}intersectBox(s,e){let t,i,n,r,a,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(t=(s.min.x-d.x)*l,i=(s.max.x-d.x)*l):(t=(s.max.x-d.x)*l,i=(s.min.x-d.x)*l),c>=0?(n=(s.min.y-d.y)*c,r=(s.max.y-d.y)*c):(n=(s.max.y-d.y)*c,r=(s.min.y-d.y)*c),t>r||n>i||((n>t||isNaN(t))&&(t=n),(r<i||isNaN(i))&&(i=r),h>=0?(a=(s.min.z-d.z)*h,o=(s.max.z-d.z)*h):(a=(s.max.z-d.z)*h,o=(s.min.z-d.z)*h),t>o||a>i)||((a>t||t!==t)&&(t=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(t>=0?t:i,e)}intersectsBox(s){return this.intersectBox(s,ss)!==null}intersectTriangle(s,e,t,i,n){Qc.subVectors(e,s),Fo.subVectors(t,s),eh.crossVectors(Qc,Fo);let r=this.direction.dot(eh),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Rs.subVectors(this.origin,s);const o=a*this.direction.dot(Fo.crossVectors(Rs,Fo));if(o<0)return null;const l=a*this.direction.dot(Qc.cross(Rs));if(l<0||o+l>r)return null;const c=-a*Rs.dot(eh);return c<0?null:this.at(c/r,n)}applyMatrix4(s){return this.origin.applyMatrix4(s),this.direction.transformDirection(s),this}equals(s){return s.origin.equals(this.origin)&&s.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Xe{constructor(e,t,i,n,r,a,o,l,c,h,d,u,p,g,v,m){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,h,d,u,p,g,v,m)}set(e,t,i,n,r,a,o,l,c,h,d,u,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Vn.setFromMatrixColumn(e,0).length(),r=1/Vn.setFromMatrixColumn(e,1).length(),a=1/Vn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,p=a*d,g=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,g=c*h,v=c*d;t[0]=u+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,g=c*h,v=c*d;t[0]=u-v*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*d,g=o*h,v=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-v*d}else if(e.order==="XZY"){const u=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lg,e,Ng)}lookAt(e,t,i){const n=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Cs.crossVectors(i,ri),Cs.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Cs.crossVectors(i,ri)),Cs.normalize(),zo.crossVectors(ri,Cs),n[0]=Cs.x,n[4]=zo.x,n[8]=ri.x,n[1]=Cs.y,n[5]=zo.y,n[9]=ri.y,n[2]=Cs.z,n[6]=zo.z,n[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],x=i[3],y=i[7],_=i[11],R=i[15],T=n[0],E=n[4],P=n[8],M=n[12],b=n[1],L=n[5],I=n[9],D=n[13],O=n[2],B=n[6],z=n[10],X=n[14],G=n[3],W=n[7],de=n[11],_e=n[15];return r[0]=a*T+o*b+l*O+c*G,r[4]=a*E+o*L+l*B+c*W,r[8]=a*P+o*I+l*z+c*de,r[12]=a*M+o*D+l*X+c*_e,r[1]=h*T+d*b+u*O+p*G,r[5]=h*E+d*L+u*B+p*W,r[9]=h*P+d*I+u*z+p*de,r[13]=h*M+d*D+u*X+p*_e,r[2]=g*T+v*b+m*O+f*G,r[6]=g*E+v*L+m*B+f*W,r[10]=g*P+v*I+m*z+f*de,r[14]=g*M+v*D+m*X+f*_e,r[3]=x*T+y*b+_*O+R*G,r[7]=x*E+y*L+_*B+R*W,r[11]=x*P+y*I+_*z+R*de,r[15]=x*M+y*D+_*X+R*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*d-n*c*d-r*o*u+i*c*u+n*o*p-i*l*p)+v*(+t*l*p-t*c*u+r*a*u-n*a*p+n*c*h-r*l*h)+m*(+t*c*d-t*o*p-r*a*d+i*a*p+r*o*h-i*c*h)+f*(-n*o*h-t*l*d+t*o*u+n*a*d-i*a*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],x=d*m*c-v*u*c+v*l*p-o*m*p-d*l*f+o*u*f,y=g*u*c-h*m*c-g*l*p+a*m*p+h*l*f-a*u*f,_=h*v*c-g*d*c+g*o*p-a*v*p-h*o*f+a*d*f,R=g*d*l-h*v*l-g*o*u+a*v*u+h*o*m-a*d*m,T=t*x+i*y+n*_+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=x*E,e[1]=(v*u*r-d*m*r-v*n*p+i*m*p+d*n*f-i*u*f)*E,e[2]=(o*m*r-v*l*r+v*n*c-i*m*c-o*n*f+i*l*f)*E,e[3]=(d*l*r-o*u*r-d*n*c+i*u*c+o*n*p-i*l*p)*E,e[4]=y*E,e[5]=(h*m*r-g*u*r+g*n*p-t*m*p-h*n*f+t*u*f)*E,e[6]=(g*l*r-a*m*r-g*n*c+t*m*c+a*n*f-t*l*f)*E,e[7]=(a*u*r-h*l*r+h*n*c-t*u*c-a*n*p+t*l*p)*E,e[8]=_*E,e[9]=(g*d*r-h*v*r-g*i*p+t*v*p+h*i*f-t*d*f)*E,e[10]=(a*v*r-g*o*r+g*i*c-t*v*c-a*i*f+t*o*f)*E,e[11]=(h*o*r-a*d*r-h*i*c+t*d*c+a*i*p-t*o*p)*E,e[12]=R*E,e[13]=(h*v*n-g*d*n+g*i*u-t*v*u-h*i*m+t*d*m)*E,e[14]=(g*o*n-a*v*n-g*i*l+t*v*l+a*i*m-t*o*m)*E,e[15]=(a*d*n-h*o*n+h*i*l-t*d*l-a*i*u+t*o*u)*E,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,g=r*d,v=a*h,m=a*d,f=o*d,x=l*c,y=l*h,_=l*d,R=i.x,T=i.y,E=i.z;return n[0]=(1-(v+f))*R,n[1]=(p+_)*R,n[2]=(g-y)*R,n[3]=0,n[4]=(p-_)*T,n[5]=(1-(u+f))*T,n[6]=(m+x)*T,n[7]=0,n[8]=(g+y)*E,n[9]=(m-x)*E,n[10]=(1-(u+v))*E,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=Vn.set(n[0],n[1],n[2]).length();const a=Vn.set(n[4],n[5],n[6]).length(),o=Vn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],Mi.copy(this);const l=1/r,c=1/a,h=1/o;return Mi.elements[0]*=l,Mi.elements[1]*=l,Mi.elements[2]*=l,Mi.elements[4]*=c,Mi.elements[5]*=c,Mi.elements[6]*=c,Mi.elements[8]*=h,Mi.elements[9]*=h,Mi.elements[10]*=h,t.setFromRotationMatrix(Mi),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=Fi){const l=this.elements,c=2*r/(t-e),h=2*r/(i-n),d=(t+e)/(t-e),u=(i+n)/(i-n);let p,g;if(o===Fi)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Fr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=Fi){const l=this.elements,c=1/(t-e),h=1/(i-n),d=1/(a-r),u=(t+e)*c,p=(i+n)*h;let g,v;if(o===Fi)g=(a+r)*d,v=-2*d;else if(o===Fr)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Vn=new U,Mi=new Xe,Lg=new U(0,0,0),Ng=new U(1,1,1),Cs=new U,zo=new U,ri=new U,Md=new Xe,wd=new li;class Bi{constructor(e=0,t=0,i=0,n=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Md.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Md,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wd.setFromEuler(this),this.setFromQuaternion(wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dg=0;const Sd=new U,Gn=new li,ns=new Xe,Bo=new U,Wr=new U,Ug=new U,Ig=new li,Ed=new U(1,0,0),Td=new U(0,1,0),Ad=new U(0,0,1),Rd={type:"added"},Og={type:"removed"},Wn={type:"childadded",child:null},ih={type:"childremoved",child:null};class mt extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new U,t=new Bi,i=new li,n=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Je}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.premultiply(Gn),this}rotateX(e){return this.rotateOnAxis(Ed,e)}rotateY(e){return this.rotateOnAxis(Td,e)}rotateZ(e){return this.rotateOnAxis(Ad,e)}translateOnAxis(e,t){return Sd.copy(e).applyQuaternion(this.quaternion),this.position.add(Sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ed,e)}translateY(e){return this.translateOnAxis(Td,e)}translateZ(e){return this.translateOnAxis(Ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ns.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bo.copy(e):Bo.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ns.lookAt(Wr,Bo,this.up):ns.lookAt(Bo,Wr,this.up),this.quaternion.setFromRotationMatrix(ns),n&&(ns.extractRotation(n.matrixWorld),Gn.setFromRotationMatrix(ns),this.quaternion.premultiply(Gn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rd),Wn.child=e,this.dispatchEvent(Wn),Wn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Og),ih.child=e,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ns.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ns.multiply(e.parent.matrixWorld)),e.applyMatrix4(ns),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rd),Wn.child=e,this.dispatchEvent(Wn),Wn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,Ug),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Ig,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}mt.DEFAULT_UP=new U(0,1,0),mt.DEFAULT_MATRIX_AUTO_UPDATE=!0,mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new U,rs=new U,sh=new U,as=new U,jn=new U,qn=new U,Cd=new U,nh=new U,rh=new U,ah=new U,oh=new at,lh=new at,ch=new at;class hi{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),wi.subVectors(e,t),n.cross(wi);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){wi.subVectors(n,t),rs.subVectors(i,t),sh.subVectors(e,t);const a=wi.dot(wi),o=wi.dot(rs),l=wi.dot(sh),c=rs.dot(rs),h=rs.dot(sh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,as)===null?!1:as.x>=0&&as.y>=0&&as.x+as.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,as)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,as.x),l.addScaledVector(a,as.y),l.addScaledVector(o,as.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return oh.setScalar(0),lh.setScalar(0),ch.setScalar(0),oh.fromBufferAttribute(e,t),lh.fromBufferAttribute(e,i),ch.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(oh,r.x),a.addScaledVector(lh,r.y),a.addScaledVector(ch,r.z),a}static isFrontFacing(e,t,i,n){return wi.subVectors(i,t),rs.subVectors(e,t),wi.cross(rs).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),rs.subVectors(this.a,this.b),wi.cross(rs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return hi.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let a,o;jn.subVectors(n,i),qn.subVectors(r,i),nh.subVectors(e,i);const l=jn.dot(nh),c=qn.dot(nh);if(l<=0&&c<=0)return t.copy(i);rh.subVectors(e,n);const h=jn.dot(rh),d=qn.dot(rh);if(h>=0&&d<=h)return t.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(jn,a);ah.subVectors(e,r);const p=jn.dot(ah),g=qn.dot(ah);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(qn,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Cd.subVectors(r,n),o=(d-h)/(d-h+(p-g)),t.copy(n).addScaledVector(Cd,o);const f=1/(m+v+u);return a=v*f,o=u*f,t.copy(i).addScaledVector(jn,a).addScaledVector(qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ps={h:0,s:0,l:0},ko={h:0,s:0,l:0};function hh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<.16666666666666666?s+(e-s)*6*t:t<.5?e:t<.6666666666666666?s+(e-s)*6*(.6666666666666666-t):s}ze=class{constructor(s,e,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(s,e,t)}set(s,e,t){if(e===void 0&&t===void 0){const i=s;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(s,e,t);return this}setScalar(s){return this.r=s,this.g=s,this.b=s,this}setHex(s,e=Ct){return s=Math.floor(s),this.r=(s>>16&255)/255,this.g=(s>>8&255)/255,this.b=(s&255)/255,st.colorSpaceToWorking(this,e),this}setRGB(s,e,t,i=st.workingColorSpace){return this.r=s,this.g=e,this.b=t,st.colorSpaceToWorking(this,i),this}setHSL(s,e,t,i=st.workingColorSpace){if(s=Wc(s,1),e=Ke(e,0,1),t=Ke(t,0,1),e===0)this.r=this.g=this.b=t;else{const n=t<=.5?t*(1+e):t+e-t*e,r=2*t-n;this.r=hh(r,n,s+.3333333333333333),this.g=hh(r,n,s),this.b=hh(r,n,s-.3333333333333333)}return st.colorSpaceToWorking(this,i),this}setStyle(s,e=Ct){function t(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+s+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(s)){let n;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,e);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,e);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+s)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(s)){const n=i[1],r=n.length;if(r===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(n,16),e);console.warn("THREE.Color: Invalid hex color "+s)}else if(s&&s.length>0)return this.setColorName(s,e);return this}setColorName(s,e=Ct){const t=Pd[s.toLowerCase()];return t!==void 0?this.setHex(t,e):console.warn("THREE.Color: Unknown color "+s),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(s){return this.r=s.r,this.g=s.g,this.b=s.b,this}copySRGBToLinear(s){return this.r=es(s.r),this.g=es(s.g),this.b=es(s.b),this}copyLinearToSRGB(s){return this.r=Fn(s.r),this.g=Fn(s.g),this.b=Fn(s.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(s=Ct){return st.workingToColorSpace(Yt.copy(this),s),Math.round(Ke(Yt.r*255,0,255))*65536+Math.round(Ke(Yt.g*255,0,255))*256+Math.round(Ke(Yt.b*255,0,255))}getHexString(s=Ct){return("000000"+this.getHex(s).toString(16)).slice(-6)}getHSL(s,e=st.workingColorSpace){st.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,n=Yt.b,r=Math.max(t,i,n),a=Math.min(t,i,n);let o,l;const c=(a+r)/2;if(a===r)o=0,l=0;else{const h=r-a;switch(l=c<=.5?h/(r+a):h/(2-r-a),r){case t:o=(i-n)/h+(i<n?6:0);break;case i:o=(n-t)/h+2;break;case n:o=(t-i)/h+4;break}o/=6}return s.h=o,s.s=l,s.l=c,s}getRGB(s,e=st.workingColorSpace){return st.workingToColorSpace(Yt.copy(this),e),s.r=Yt.r,s.g=Yt.g,s.b=Yt.b,s}getStyle(s=Ct){st.workingToColorSpace(Yt.copy(this),s);const e=Yt.r,t=Yt.g,i=Yt.b;return s!==Ct?`color(${s} ${e.toFixed(3)} ${t.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(t*255)},${Math.round(i*255)})`}offsetHSL(s,e,t){return this.getHSL(Ps),this.setHSL(Ps.h+s,Ps.s+e,Ps.l+t)}add(s){return this.r+=s.r,this.g+=s.g,this.b+=s.b,this}addColors(s,e){return this.r=s.r+e.r,this.g=s.g+e.g,this.b=s.b+e.b,this}addScalar(s){return this.r+=s,this.g+=s,this.b+=s,this}sub(s){return this.r=Math.max(0,this.r-s.r),this.g=Math.max(0,this.g-s.g),this.b=Math.max(0,this.b-s.b),this}multiply(s){return this.r*=s.r,this.g*=s.g,this.b*=s.b,this}multiplyScalar(s){return this.r*=s,this.g*=s,this.b*=s,this}lerp(s,e){return this.r+=(s.r-this.r)*e,this.g+=(s.g-this.g)*e,this.b+=(s.b-this.b)*e,this}lerpColors(s,e,t){return this.r=s.r+(e.r-s.r)*t,this.g=s.g+(e.g-s.g)*t,this.b=s.b+(e.b-s.b)*t,this}lerpHSL(s,e){this.getHSL(Ps),s.getHSL(ko);const t=Br(Ps.h,ko.h,e),i=Br(Ps.s,ko.s,e),n=Br(Ps.l,ko.l,e);return this.setHSL(t,i,n),this}setFromVector3(s){return this.r=s.x,this.g=s.y,this.b=s.z,this}applyMatrix3(s){const e=this.r,t=this.g,i=this.b,n=s.elements;return this.r=n[0]*e+n[3]*t+n[6]*i,this.g=n[1]*e+n[4]*t+n[7]*i,this.b=n[2]*e+n[5]*t+n[8]*i,this}equals(s){return s.r===this.r&&s.g===this.g&&s.b===this.b}fromArray(s,e=0){return this.r=s[e],this.g=s[e+1],this.b=s[e+2],this}toArray(s=[],e=0){return s[e]=this.r,s[e+1]=this.g,s[e+2]=this.b,s}fromBufferAttribute(s,e){return this.r=s.getX(e),this.g=s.getY(e),this.b=s.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Yt=new ze;ze.NAMES=Pd;let Fg=0,Si=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=ks,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=ka,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(s){this._alphaTest>0!=s>0&&this.version++,this._alphaTest=s}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(s){if(s!==void 0)for(const e in s){const t=s[e];if(t===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}}toJSON(s){const e=s===void 0||typeof s=="string";e&&(s={textures:{},images:{}});const t={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(s).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(s).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(s).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(t.dispersion=this.dispersion),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(s).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(s).uuid),this.anisotropy!==void 0&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(s).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(s).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(s).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(s).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(s).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(s).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(s).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(s).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(s).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(s).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(s).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(s).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(s).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(s).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(s).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(s).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapRotation!==void 0&&(t.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(s).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(s).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(s).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(t.blending=this.blending),this.side!==Ii&&(t.side=this.side),this.vertexColors===!0&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=!0),this.blendSrc!==Ba&&(t.blendSrc=this.blendSrc),this.blendDst!==ka&&(t.blendDst=this.blendDst),this.blendEquation!==Oi&&(t.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(t.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(t.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(t.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(t.depthFunc=this.depthFunc),this.depthTest===!1&&(t.depthTest=this.depthTest),this.depthWrite===!1&&(t.depthWrite=this.depthWrite),this.colorWrite===!1&&(t.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(t.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hc&&(t.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(t.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(t.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(t.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(t.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=!0),this.alphaToCoverage===!0&&(t.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=!0),this.forceSinglePass===!0&&(t.forceSinglePass=!0),this.wireframe===!0&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function i(n){const r=[];for(const a in n){const o=n[a];delete o.metadata,r.push(o)}return r}if(e){const n=i(s.textures),r=i(s.images);n.length>0&&(t.textures=n),r.length>0&&(t.images=r)}return t}clone(){return new this.constructor().copy(this)}copy(s){this.name=s.name,this.blending=s.blending,this.side=s.side,this.vertexColors=s.vertexColors,this.opacity=s.opacity,this.transparent=s.transparent,this.blendSrc=s.blendSrc,this.blendDst=s.blendDst,this.blendEquation=s.blendEquation,this.blendSrcAlpha=s.blendSrcAlpha,this.blendDstAlpha=s.blendDstAlpha,this.blendEquationAlpha=s.blendEquationAlpha,this.blendColor.copy(s.blendColor),this.blendAlpha=s.blendAlpha,this.depthFunc=s.depthFunc,this.depthTest=s.depthTest,this.depthWrite=s.depthWrite,this.stencilWriteMask=s.stencilWriteMask,this.stencilFunc=s.stencilFunc,this.stencilRef=s.stencilRef,this.stencilFuncMask=s.stencilFuncMask,this.stencilFail=s.stencilFail,this.stencilZFail=s.stencilZFail,this.stencilZPass=s.stencilZPass,this.stencilWrite=s.stencilWrite;const e=s.clippingPlanes;let t=null;if(e!==null){const i=e.length;t=new Array(i);for(let n=0;n!==i;++n)t[n]=e[n].clone()}return this.clippingPlanes=t,this.clipIntersection=s.clipIntersection,this.clipShadows=s.clipShadows,this.shadowSide=s.shadowSide,this.colorWrite=s.colorWrite,this.precision=s.precision,this.polygonOffset=s.polygonOffset,this.polygonOffsetFactor=s.polygonOffsetFactor,this.polygonOffsetUnits=s.polygonOffsetUnits,this.dithering=s.dithering,this.alphaTest=s.alphaTest,this.alphaHash=s.alphaHash,this.alphaToCoverage=s.alphaToCoverage,this.premultipliedAlpha=s.premultipliedAlpha,this.forceSinglePass=s.forceSinglePass,this.visible=s.visible,this.toneMapped=s.toneMapped,this.userData=JSON.parse(JSON.stringify(s.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(s){s===!0&&this.version++}};class Ls extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const os=zg();function zg(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:r,exponentTable:a,offsetTable:o}}function Bg(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Ke(s,-65504,65504),os.floatView[0]=s;const e=os.uint32View[0],t=e>>23&511;return os.baseTable[t]+((e&8388607)>>os.shiftTable[t])}function kg(s){const e=s>>10;return os.uint32View[0]=os.mantissaTable[os.offsetTable[e]+(s&1023)]+os.exponentTable[e],os.floatView[0]}class Ho{static toHalfFloat(e){return Bg(e)}static fromHalfFloat(e){return kg(e)}}const wt=new U,Vo=new ce;let Hg=0;class Gt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=No,this.updateRanges=[],this.gpuType=qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vo.fromBufferAttribute(this,t),Vo.applyMatrix3(e),this.setXY(t,Vo.x,Vo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),n=lt(n,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==No&&(e.usage=this.usage),e}}class Ld extends Gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Nd extends Gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Kt extends Gt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Vg=0;const ui=new Xe,uh=new mt,Xn=new U,ai=new ts,jr=new ts,zt=new U;class Jt extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vd(e)?Nd:Ld)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,i){return ui.makeTranslation(e,t,i),this.applyMatrix4(ui),this}scale(e,t,i){return ui.makeScale(e,t,i),this.applyMatrix4(ui),this}lookAt(e){return uh.lookAt(e),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kt(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];ai.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];jr.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(ai.min,jr.min),ai.expandByPoint(zt),zt.addVectors(ai.max,jr.max),ai.expandByPoint(zt)):(ai.expandByPoint(jr.min),ai.expandByPoint(jr.max))}ai.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)zt.fromBufferAttribute(o,c),l&&(Xn.fromBufferAttribute(e,c),zt.add(Xn)),n=Math.max(n,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new U,l[P]=new U;const c=new U,h=new U,d=new U,u=new ce,p=new ce,g=new ce,v=new U,m=new U;function f(P,M,b){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,M),d.fromBufferAttribute(i,b),u.fromBufferAttribute(r,P),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,b),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[P].add(v),o[M].add(v),o[b].add(v),l[P].add(m),l[M].add(m),l[b].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,M=x.length;P<M;++P){const b=x[P],L=b.start,I=b.count;for(let D=L,O=L+I;D<O;D+=3)f(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const y=new U,_=new U,R=new U,T=new U;function E(P){R.fromBufferAttribute(n,P),T.copy(R);const M=o[P];y.copy(M),y.sub(R.multiplyScalar(R.dot(M))).normalize(),_.crossVectors(T,M);const b=_.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,b)}for(let P=0,M=x.length;P<M;++P){const b=x[P],L=b.start,I=b.count;for(let D=L,O=L+I;D<O;D+=3)E(e.getX(D+0)),E(e.getX(D+1)),E(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const n=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,d=new U;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)n.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Gt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dd=new Xe,Zs=new Gr,Go=new zi,Ud=new U,Wo=new U,jo=new U,qo=new U,dh=new U,Xo=new U,Id=new U,Yo=new U;Ht=class extends mt{constructor(s=new Jt,e=new Ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=s,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(s,e){return super.copy(s,e),s.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=s.morphTargetInfluences.slice()),s.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},s.morphTargetDictionary)),this.material=Array.isArray(s.material)?s.material.slice():s.material,this.geometry=s.geometry,this}updateMorphTargets(){const s=this.geometry.morphAttributes,e=Object.keys(s);if(e.length>0){const t=s[e[0]];if(t!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++){const r=t[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=i}}}}getVertexPosition(s,e){const t=this.geometry,i=t.attributes.position,n=t.morphAttributes.position,r=t.morphTargetsRelative;e.fromBufferAttribute(i,s);const a=this.morphTargetInfluences;if(n&&a){Xo.set(0,0,0);for(let o=0,l=n.length;o<l;o++){const c=a[o],h=n[o];c!==0&&(dh.fromBufferAttribute(h,s),r?Xo.addScaledVector(dh,c):Xo.addScaledVector(dh.sub(e),c))}e.add(Xo)}return e}raycast(s,e){const t=this.geometry,i=this.material,n=this.matrixWorld;i!==void 0&&(t.boundingSphere===null&&t.computeBoundingSphere(),Go.copy(t.boundingSphere),Go.applyMatrix4(n),Zs.copy(s.ray).recast(s.near),!(Go.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(Go,Ud)===null||Zs.origin.distanceToSquared(Ud)>(s.far-s.near)**2))&&(Dd.copy(n).invert(),Zs.copy(s.ray).applyMatrix4(Dd),!(t.boundingBox!==null&&Zs.intersectsBox(t.boundingBox)===!1)&&this._computeIntersections(s,e,Zs)))}_computeIntersections(s,e,t){let i;const n=this.geometry,r=this.material,a=n.index,o=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv1,h=n.attributes.normal,d=n.groups,u=n.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,g=d.length;p<g;p++){const v=d[p],m=r[v.materialIndex],f=Math.max(v.start,u.start),x=Math.min(a.count,Math.min(v.start+v.count,u.start+u.count));for(let y=f,_=x;y<_;y+=3){const R=a.getX(y),T=a.getX(y+1),E=a.getX(y+2);i=Zo(this,m,s,t,l,c,h,R,T,E),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=v.materialIndex,e.push(i))}}else{const p=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let v=p,m=g;v<m;v+=3){const f=a.getX(v),x=a.getX(v+1),y=a.getX(v+2);i=Zo(this,r,s,t,l,c,h,f,x,y),i&&(i.faceIndex=Math.floor(v/3),e.push(i))}}else if(o!==void 0)if(Array.isArray(r))for(let p=0,g=d.length;p<g;p++){const v=d[p],m=r[v.materialIndex],f=Math.max(v.start,u.start),x=Math.min(o.count,Math.min(v.start+v.count,u.start+u.count));for(let y=f,_=x;y<_;y+=3){const R=y,T=y+1,E=y+2;i=Zo(this,m,s,t,l,c,h,R,T,E),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=v.materialIndex,e.push(i))}}else{const p=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let v=p,m=g;v<m;v+=3){const f=v,x=v+1,y=v+2;i=Zo(this,r,s,t,l,c,h,f,x,y),i&&(i.faceIndex=Math.floor(v/3),e.push(i))}}}};function Gg(s,e,t,i,n,r,a,o){let l;if(e.side===Zt?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===Ii,o),l===null)return null;Yo.copy(o),Yo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Yo);return c<t.near||c>t.far?null:{distance:c,point:Yo.clone(),object:s}}function Zo(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,Wo),s.getVertexPosition(l,jo),s.getVertexPosition(c,qo);const h=Gg(s,e,t,i,Wo,jo,qo,Id);if(h){const d=new U;hi.getBarycoord(Id,Wo,jo,qo,d),n&&(h.uv=hi.getInterpolatedAttribute(n,o,l,c,d,new ce)),r&&(h.uv1=hi.getInterpolatedAttribute(r,o,l,c,d,new ce)),a&&(h.normal=hi.getInterpolatedAttribute(a,o,l,c,d,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new U,materialIndex:0};hi.getNormal(Wo,jo,qo,u.normal),h.face=u,h.barycoord=d}return h}class qr extends Jt{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(d,2));function g(v,m,f,x,y,_,R,T,E,P,M){const b=_/E,L=R/P,I=_/2,D=R/2,O=T/2,B=E+1,z=P+1;let X=0,G=0;const W=new U;for(let de=0;de<z;de++){const _e=de*L-D;for(let re=0;re<B;re++){const Ze=re*b-I;W[v]=Ze*x,W[m]=_e*y,W[f]=O,c.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[f]=T>0?1:-1,h.push(W.x,W.y,W.z),d.push(re/E),d.push(1-de/P),X+=1}}for(let de=0;de<P;de++)for(let _e=0;_e<E;_e++){const re=u+_e+B*de,Ze=u+_e+B*(de+1),Y=u+(_e+1)+B*(de+1),ae=u+(_e+1)+B*de;l.push(re,Ze,ae),l.push(Ze,Y,ae),G+=6}o.addGroup(p,G,M),p+=G,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yn(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function $t(s){const e={};for(let t=0;t<s.length;t++){const i=Yn(s[t]);for(const n in i)e[n]=i[n]}return e}function Wg(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Od(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const ls={clone:Yn,merge:$t};var jg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pt extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jg,this.fragmentShader=qg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yn(e.uniforms),this.uniformsGroups=Wg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ph extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ns=new U,Fd=new ce,zd=new ce;class ti extends ph{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=In*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return In*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z)}getViewSize(e,t){return this.getViewBounds(e,Fd,zd),t.subVectors(zd,Fd)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zr*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zn=-90,Kn=1;class Xg extends mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new ti(Zn,Kn,e,t);n.layers=this.layers,this.add(n);const r=new ti(Zn,Kn,e,t);r.layers=this.layers,this.add(r);const a=new ti(Zn,Kn,e,t);a.layers=this.layers,this.add(a);const o=new ti(Zn,Kn,e,t);o.layers=this.layers,this.add(o);const l=new ti(Zn,Kn,e,t);l.layers=this.layers,this.add(l);const c=new ti(Zn,Kn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Bd extends Ft{constructor(e=[],t=Vs,i,n,r,a,o,l,c,h){super(e,t,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yg extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Bd(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new qr(5,5,5),r=new Pt({name:"CubemapFromEquirect",uniforms:Yn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:jt});r.uniforms.tEquirect.value=t;const a=new Ht(n,r),o=t.minFilter;return t.minFilter===xi&&(t.minFilter=Rt),new Xg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}}Ss=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Zg={type:"move"};class fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zg)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ss;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Kg extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Jg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=No,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new U;class mh{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),n=lt(n,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const kd=new U,Hd=new at,Vd=new at,$g=new U,Gd=new Xe,Ko=new U,gh=new zi,Wd=new Xe,vh=new Gr;class Qg extends Ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ac,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ts),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ko),this.boundingBox.expandByPoint(Ko)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ko),this.boundingSphere.expandByPoint(Ko)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gh.copy(this.boundingSphere),gh.applyMatrix4(n),e.ray.intersectsSphere(gh)!==!1&&(Wd.copy(n).invert(),vh.copy(e.ray).applyMatrix4(Wd),!(this.boundingBox!==null&&vh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ac?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===td?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;Hd.fromBufferAttribute(n.attributes.skinIndex,e),Vd.fromBufferAttribute(n.attributes.skinWeight,e),kd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Vd.getComponent(r);if(a!==0){const o=Hd.getComponent(r);Gd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector($g.copy(kd).applyMatrix4(Gd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class jd extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Jo extends Ft{constructor(e=null,t=1,i=1,n,r,a,o,l,c=Ot,h=Ot,d,u){super(null,a,o,l,c,h,n,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qd=new Xe,e0=new Xe;class xh{constructor(e=[],t=[]){this.uuid=ci(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Xe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:e0;qd.multiplyMatrices(o,t[r]),qd.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new xh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Jo(t,e,e,si,qt);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const r=e.bones[i];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new jd),this.bones.push(a),this.boneInverses.push(new Xe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){const a=t[n];e.bones.push(a.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class _h extends Gt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Jn=new Xe,Xd=new Xe,$o=[],Yd=new ts,t0=new Xe,Xr=new Ht,Yr=new zi;class i0 extends Ht{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _h(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,t0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ts),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Jn),Yd.copy(e.boundingBox).applyMatrix4(Jn),this.boundingBox.union(Yd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Jn),Yr.copy(e.boundingSphere).applyMatrix4(Jn),this.boundingSphere.union(Yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(i),e.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Jn),Xd.multiplyMatrices(i,Jn),Xr.matrixWorld=Xd,Xr.raycast(e,$o);for(let a=0,o=$o.length;a<o;a++){const l=$o[a];l.instanceId=r,l.object=this,t.push(l)}$o.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _h(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Jo(new Float32Array(n*this.count),n,this.count,Pr,qt));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const yh=new U,s0=new U,n0=new Je;class Ds{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=yh.subVectors(i,t).cross(s0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(yh),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||n0.getNormalMatrix(e),n=this.coplanarPoint(yh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ks=new zi,Qo=new U;class bh{constructor(e=new Ds,t=new Ds,i=new Ds,n=new Ds,r=new Ds,a=new Ds){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fi){const i=this.planes,n=e.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],d=n[6],u=n[7],p=n[8],g=n[9],v=n[10],m=n[11],f=n[12],x=n[13],y=n[14],_=n[15];if(i[0].setComponents(l-r,u-c,m-p,_-f).normalize(),i[1].setComponents(l+r,u+c,m+p,_+f).normalize(),i[2].setComponents(l+a,u+h,m+g,_+x).normalize(),i[3].setComponents(l-a,u-h,m-g,_-x).normalize(),i[4].setComponents(l-o,u-d,m-v,_-y).normalize(),t===Fi)i[5].setComponents(l+o,u+d,m+v,_+y).normalize();else if(t===Fr)i[5].setComponents(o,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ks)}intersectsSprite(e){return Ks.center.set(0,0,0),Ks.radius=.7071067811865476,Ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Qo.x=n.normal.x>0?e.max.x:e.min.x,Qo.y=n.normal.y>0?e.max.y:e.min.y,Qo.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mh extends Si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const el=new U,tl=new U,Zd=new Xe,Zr=new Gr,il=new zi,wh=new U,Kd=new U;class Sh extends mt{constructor(e=new Jt,t=new Mh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)el.fromBufferAttribute(t,n-1),tl.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=el.distanceTo(tl);e.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(n),il.radius+=r,e.ray.intersectsSphere(il)===!1)return;Zd.copy(n).invert(),Zr.copy(e.ray).applyMatrix4(Zd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=u,v=p-1;g<v;g+=c){const m=h.getX(g),f=h.getX(g+1),x=sl(this,e,Zr,l,m,f,g);x&&t.push(x)}if(this.isLineLoop){const g=h.getX(p-1),v=h.getX(u),m=sl(this,e,Zr,l,g,v,p-1);m&&t.push(m)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,v=p-1;g<v;g+=c){const m=sl(this,e,Zr,l,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){const g=sl(this,e,Zr,l,p-1,u,p-1);g&&t.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function sl(s,e,t,i,n,r,a){const o=s.geometry.attributes.position;if(el.fromBufferAttribute(o,n),tl.fromBufferAttribute(o,r),t.distanceSqToSegment(el,tl,wh,Kd)>i)return;wh.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(wh);if(!(l<e.near||l>e.far))return{distance:l,point:Kd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Jd=new U,$d=new U;class Qd extends Sh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Jd.fromBufferAttribute(t,n),$d.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Jd.distanceTo($d);e.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class r0 extends Sh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ep extends Si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tp=new Xe,Eh=new Gr,nl=new zi,rl=new U;class a0 extends mt{constructor(e=new Jt,t=new ep){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(n),nl.radius+=r,e.ray.intersectsSphere(nl)===!1)return;tp.copy(n).invert(),Eh.copy(e.ray).applyMatrix4(tp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let p=d,g=u;p<g;p++){const v=c.getX(p);rl.fromBufferAttribute(h,v),ip(rl,v,l,n,e,t,this)}}else{const d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);for(let p=d,g=u;p<g;p++)rl.fromBufferAttribute(h,p),ip(rl,p,l,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function ip(s,e,t,i,n,r,a){const o=Eh.distanceSqToPoint(s);if(o<t){const l=new U;Eh.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Th extends Ft{constructor(e,t,i=Es,n,r,a,o=Ot,l=Ot,c,h=Ln,d=1){if(h!==Ln&&h!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ki{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let n=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);const h=i[n],d=i[n+1]-h,u=(a-h)/d;return(n+u)/(r-1)}getTangent(e,t){let i=e-1e-4,n=e+1e-4;i<0&&(i=0),n>1&&(n=1);const r=this.getPoint(i),a=this.getPoint(n),o=t||(r.isVector2?new ce:new U);return o.copy(a).sub(r).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new U,n=[],r=[],a=[],o=new U,l=new Xe;for(let p=0;p<=e;p++){const g=p/e;n[p]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ke(n[p-1].dot(n[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(n[p],r[p])}if(t===!0){let p=Math.acos(Ke(r[0].dot(r[e]),-1,1));p/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],p*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ah extends ki{constructor(e=0,t=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ce){const i=t,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class o0 extends Ah{constructor(e,t,i,n,r,a){super(e,t,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Rh(){let s=0,e=0,t=0,i=0;function n(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,n(a,o,u,p)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+i*o}}}const al=new U,Ch=new Rh,Ph=new Rh,Lh=new Rh;class l0 extends ki{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new U){const i=t,n=this.points,r=n.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(al.subVectors(n[0],n[1]).add(n[0]),c=al);const d=n[o%r],u=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(al.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=al),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ch.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,m),Ph.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,m),Lh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Ch.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ph.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Lh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Ch.calc(l),Ph.calc(l),Lh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new U().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function sp(s,e,t,i,n){const r=(i-e)*.5,a=(n-t)*.5,o=s*s,l=s*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*s+t}function c0(s,e){const t=1-s;return t*t*e}function h0(s,e){return 2*(1-s)*s*e}function u0(s,e){return s*s*e}function Kr(s,e,t,i){return c0(s,e)+h0(s,t)+u0(s,i)}function d0(s,e){const t=1-s;return t*t*t*e}function p0(s,e){const t=1-s;return 3*t*t*s*e}function f0(s,e){return 3*(1-s)*s*s*e}function m0(s,e){return s*s*s*e}function Jr(s,e,t,i,n){return d0(s,e)+p0(s,t)+f0(s,i)+m0(s,n)}class np extends ki{constructor(e=new ce,t=new ce,i=new ce,n=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ce){const i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Jr(e,n.x,r.x,a.x,o.x),Jr(e,n.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class g0 extends ki{constructor(e=new U,t=new U,i=new U,n=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new U){const i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Jr(e,n.x,r.x,a.x,o.x),Jr(e,n.y,r.y,a.y,o.y),Jr(e,n.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rp extends ki{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class v0 extends ki{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ap extends ki{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){const i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(Kr(e,n.x,r.x,a.x),Kr(e,n.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class x0 extends ki{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){const i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(Kr(e,n.x,r.x,a.x),Kr(e,n.y,r.y,a.y),Kr(e,n.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class op extends ki{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const i=t,n=this.points,r=(n.length-1)*e,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(sp(o,l.x,c.x,h.x,d.x),sp(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new ce().fromArray(n))}return this}}var Nh=Object.freeze({__proto__:null,ArcCurve:o0,CatmullRomCurve3:l0,CubicBezierCurve:np,CubicBezierCurve3:g0,EllipseCurve:Ah,LineCurve:rp,LineCurve3:v0,QuadraticBezierCurve:ap,QuadraticBezierCurve3:x0,SplineCurve:op});class _0 extends ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nh[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const a=r[n],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new Nh[n.type]().fromJSON(n))}return this}}class Dh extends _0{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new rp(this.currentPoint.clone(),new ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const r=new ap(this.currentPoint.clone(),new ce(e,t),new ce(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,a){const o=new np(this.currentPoint.clone(),new ce(e,t),new ce(i,n),new ce(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new op(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,r,a),this}absarc(e,t,i,n,r,a){return this.absellipse(e,t,i,i,n,r,a),this}ellipse(e,t,i,n,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,r,a,o,l),this}absellipse(e,t,i,n,r,a,o,l){const c=new Ah(e,t,i,n,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}let ol=class extends Dh{constructor(s){super(s),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(s){const e=[];for(let t=0,i=this.holes.length;t<i;t++)e[t]=this.holes[t].getPoints(s);return e}extractPoints(s){return{shape:this.getPoints(s),holes:this.getPointsHoles(s)}}copy(s){super.copy(s),this.holes=[];for(let e=0,t=s.holes.length;e<t;e++){const i=s.holes[e];this.holes.push(i.clone())}return this}toJSON(){const s=super.toJSON();s.uuid=this.uuid,s.holes=[];for(let e=0,t=this.holes.length;e<t;e++){const i=this.holes[e];s.holes.push(i.toJSON())}return s}fromJSON(s){super.fromJSON(s),this.uuid=s.uuid,this.holes=[];for(let e=0,t=s.holes.length;e<t;e++){const i=s.holes[e];this.holes.push(new Dh().fromJSON(i))}return this}};function y0(s,e,t=2){const i=e&&e.length,n=i?e[0]*t:s.length;let r=lp(s,0,n,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=E0(s,e,r,t)),s.length>80*t){o=1/0,l=1/0;let h=-1/0,d=-1/0;for(let u=t;u<n;u+=t){const p=s[u],g=s[u+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return $r(r,a,t,o,l,c,0),a}function lp(s,e,t,i,n){let r;if(n===O0(s,e,t,i)>0)for(let a=e;a<t;a+=i)r=dp(a/i|0,s[a],s[a+1],r);else for(let a=t-i;a>=e;a-=i)r=dp(a/i|0,s[a],s[a+1],r);return r&&$n(r,r.next)&&(ta(r),r=r.next),r}function Js(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&($n(t,t.next)||yt(t.prev,t,t.next)===0)){if(ta(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function $r(s,e,t,i,n,r,a){if(!s)return;!a&&r&&P0(s,i,n,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?M0(s,i,n,r):b0(s)){e.push(l.i,s.i,c.i),ta(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=w0(Js(s),e),$r(s,e,t,i,n,r,2)):a===2&&S0(s,e,t,i,n,r):$r(Js(s),e,t,i,n,r,1);break}}}function b0(s){const e=s.prev,t=s,i=s.next;if(yt(e,t,i)>=0)return!1;const n=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(n,r,a),d=Math.min(o,l,c),u=Math.max(n,r,a),p=Math.max(o,l,c);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&Qr(n,o,r,l,a,c,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function M0(s,e,t,i){const n=s.prev,r=s,a=s.next;if(yt(n,r,a)>=0)return!1;const o=n.x,l=r.x,c=a.x,h=n.y,d=r.y,u=a.y,p=Math.min(o,l,c),g=Math.min(h,d,u),v=Math.max(o,l,c),m=Math.max(h,d,u),f=Uh(p,g,e,t,i),x=Uh(v,m,e,t,i);let y=s.prevZ,_=s.nextZ;for(;y&&y.z>=f&&_&&_.z<=x;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==n&&y!==a&&Qr(o,h,l,d,c,u,y.x,y.y)&&yt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==n&&_!==a&&Qr(o,h,l,d,c,u,_.x,_.y)&&yt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==n&&y!==a&&Qr(o,h,l,d,c,u,y.x,y.y)&&yt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=x;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==n&&_!==a&&Qr(o,h,l,d,c,u,_.x,_.y)&&yt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function w0(s,e){let t=s;do{const i=t.prev,n=t.next.next;!$n(i,n)&&hp(i,t,t.next,n)&&ea(i,n)&&ea(n,i)&&(e.push(i.i,t.i,n.i),ta(t),ta(t.next),t=s=n),t=t.next}while(t!==s);return Js(t)}function S0(s,e,t,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&D0(a,o)){let l=up(a,o);a=Js(a,a.next),l=Js(l,l.next),$r(a,e,t,i,n,r,0),$r(l,e,t,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function E0(s,e,t,i){const n=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*i,l=r<a-1?e[r+1]*i:s.length,c=lp(s,o,l,i,!1);c===c.next&&(c.steiner=!0),n.push(N0(c))}n.sort(T0);for(let r=0;r<n.length;r++)t=A0(n[r],t);return t}function T0(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const i=(s.next.y-s.y)/(s.next.x-s.x),n=(e.next.y-e.y)/(e.next.x-e.x);t=i-n}return t}function A0(s,e){const t=R0(s,e);if(!t)return e;const i=up(t,s);return Js(i,i.next),Js(t,t.next)}function R0(s,e){let t=e;const i=s.x,n=s.y;let r=-1/0,a;if($n(s,t))return t;do{if($n(s,t.next))return t.next;if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){const d=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&cp(n<c?i:r,n,l,c,n<c?r:i,n,t.x,t.y)){const d=Math.abs(n-t.y)/(i-t.x);ea(t,s)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&C0(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function C0(s,e){return yt(s.prev,s,e.prev)<0&&yt(e.next,s,s.next)<0}function P0(s,e,t,i){let n=s;do n.z===0&&(n.z=Uh(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,L0(n)}function L0(s){let e,t=1;do{let i=s,n;s=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=a}r.nextZ=null,t*=2}while(e>1);return s}function Uh(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function N0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function cp(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function Qr(s,e,t,i,n,r,a,o){return!(s===a&&e===o)&&cp(s,e,t,i,n,r,a,o)}function D0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!U0(s,e)&&(ea(s,e)&&ea(e,s)&&I0(s,e)&&(yt(s.prev,s,e.prev)||yt(s,e.prev,e))||$n(s,e)&&yt(s.prev,s,s.next)>0&&yt(e.prev,e,e.next)>0)}function yt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function $n(s,e){return s.x===e.x&&s.y===e.y}function hp(s,e,t,i){const n=cl(yt(s,e,t)),r=cl(yt(s,e,i)),a=cl(yt(t,i,s)),o=cl(yt(t,i,e));return!!(n!==r&&a!==o||n===0&&ll(s,t,e)||r===0&&ll(s,i,e)||a===0&&ll(t,s,i)||o===0&&ll(t,e,i))}function ll(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function cl(s){return s>0?1:s<0?-1:0}function U0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&hp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ea(s,e){return yt(s.prev,s,s.next)<0?yt(s,e,s.next)>=0&&yt(s,s.prev,e)>=0:yt(s,e,s.prev)<0||yt(s,s.next,e)<0}function I0(s,e){let t=s,i=!1;const n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function up(s,e){const t=Ih(s.i,s.x,s.y),i=Ih(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function dp(s,e,t,i){const n=Ih(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ta(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ih(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function O0(s,e,t,i){let n=0;for(let r=e,a=t-i;r<t;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}class F0{static triangulate(e,t,i=2){return y0(e,t,i)}}class $s{static area(e){const t=e.length;let i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*.5}static isClockWise(e){return $s.area(e)<0}static triangulateShape(e,t){const i=[],n=[],r=[];pp(e),fp(i,e);let a=e.length;t.forEach(pp);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,fp(i,t[l]);const o=F0.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function pp(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function fp(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}Lu=class extends Jt{constructor(s=new ol([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:s,options:e},s=Array.isArray(s)?s:[s];const t=this,i=[],n=[];for(let a=0,o=s.length;a<o;a++){const l=s[a];r(l)}this.setAttribute("position",new Kt(i,3)),this.setAttribute("uv",new Kt(n,2)),this.computeVertexNormals();function r(a){const o=[],l=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:u-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,v=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,f=e.UVGenerator!==void 0?e.UVGenerator:z0;let x,y=!1,_,R,T,E;m&&(x=m.getSpacedPoints(c),y=!0,d=!1,_=m.computeFrenetFrames(c,!1),R=new U,T=new U,E=new U),d||(v=0,u=0,p=0,g=0);const P=a.extractPoints(l);let M=P.shape;const b=P.holes;if(!$s.isClockWise(M)){M=M.reverse();for(let $=0,ue=b.length;$<ue;$++){const C=b[$];$s.isClockWise(C)&&(b[$]=C.reverse())}}function L($){let C=$[0];for(let xe=1;xe<=$.length;xe++){const he=xe%$.length,Se=$[he],ie=Se.x-C.x,Le=Se.y-C.y,me=ie*ie+Le*Le,Ae=Math.max(Math.abs(Se.x),Math.abs(Se.y),Math.abs(C.x),Math.abs(C.y)),it=1e-20*Ae*Ae;if(me<=it){$.splice(he,1),xe--;continue}C=Se}}L(M),b.forEach(L);const I=b.length,D=M;for(let $=0;$<I;$++){const ue=b[$];M=M.concat(ue)}function O($,ue,C){return ue||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(ue,C)}const B=M.length;function z($,ue,C){let xe,he,Se;const ie=$.x-ue.x,Le=$.y-ue.y,me=C.x-$.x,Ae=C.y-$.y,it=ie*ie+Le*Le,N=ie*Ae-Le*me;if(Math.abs(N)>Number.EPSILON){const w=Math.sqrt(it),V=Math.sqrt(me*me+Ae*Ae),Z=ue.x-Le/w,J=ue.y+ie/w,K=C.x-Ae/V,Ne=C.y+me/V,pe=((K-Z)*Ae-(Ne-J)*me)/(ie*Ae-Le*me);xe=Z+ie*pe-$.x,he=J+Le*pe-$.y;const Ee=xe*xe+he*he;if(Ee<=2)return new ce(xe,he);Se=Math.sqrt(Ee/2)}else{let w=!1;ie>Number.EPSILON?me>Number.EPSILON&&(w=!0):ie<-Number.EPSILON?me<-Number.EPSILON&&(w=!0):Math.sign(Le)===Math.sign(Ae)&&(w=!0),w?(xe=-Le,he=ie,Se=Math.sqrt(it)):(xe=ie,he=Le,Se=Math.sqrt(it/2))}return new ce(xe/Se,he/Se)}const X=[];for(let $=0,ue=D.length,C=ue-1,xe=$+1;$<ue;$++,C++,xe++)C===ue&&(C=0),xe===ue&&(xe=0),X[$]=z(D[$],D[C],D[xe]);const G=[];let W,de=X.concat();for(let $=0,ue=I;$<ue;$++){const C=b[$];W=[];for(let xe=0,he=C.length,Se=he-1,ie=xe+1;xe<he;xe++,Se++,ie++)Se===he&&(Se=0),ie===he&&(ie=0),W[xe]=z(C[xe],C[Se],C[ie]);G.push(W),de=de.concat(W)}let _e;if(v===0)_e=$s.triangulateShape(D,b);else{const $=[],ue=[];for(let C=0;C<v;C++){const xe=C/v,he=u*Math.cos(xe*Math.PI/2),Se=p*Math.sin(xe*Math.PI/2)+g;for(let ie=0,Le=D.length;ie<Le;ie++){const me=O(D[ie],X[ie],Se);oe(me.x,me.y,-he),xe===0&&$.push(me)}for(let ie=0,Le=I;ie<Le;ie++){const me=b[ie];W=G[ie];const Ae=[];for(let it=0,N=me.length;it<N;it++){const w=O(me[it],W[it],Se);oe(w.x,w.y,-he),xe===0&&Ae.push(w)}xe===0&&ue.push(Ae)}}_e=$s.triangulateShape($,ue)}const re=_e.length,Ze=p+g;for(let $=0;$<B;$++){const ue=d?O(M[$],de[$],Ze):M[$];y?(T.copy(_.normals[0]).multiplyScalar(ue.x),R.copy(_.binormals[0]).multiplyScalar(ue.y),E.copy(x[0]).add(T).add(R),oe(E.x,E.y,E.z)):oe(ue.x,ue.y,0)}for(let $=1;$<=c;$++)for(let ue=0;ue<B;ue++){const C=d?O(M[ue],de[ue],Ze):M[ue];y?(T.copy(_.normals[$]).multiplyScalar(C.x),R.copy(_.binormals[$]).multiplyScalar(C.y),E.copy(x[$]).add(T).add(R),oe(E.x,E.y,E.z)):oe(C.x,C.y,h/c*$)}for(let $=v-1;$>=0;$--){const ue=$/v,C=u*Math.cos(ue*Math.PI/2),xe=p*Math.sin(ue*Math.PI/2)+g;for(let he=0,Se=D.length;he<Se;he++){const ie=O(D[he],X[he],xe);oe(ie.x,ie.y,h+C)}for(let he=0,Se=b.length;he<Se;he++){const ie=b[he];W=G[he];for(let Le=0,me=ie.length;Le<me;Le++){const Ae=O(ie[Le],W[Le],xe);y?oe(Ae.x,Ae.y+x[c-1].y,x[c-1].x+C):oe(Ae.x,Ae.y,h+C)}}}Y(),ae();function Y(){const $=i.length/3;if(d){let ue=0,C=B*ue;for(let xe=0;xe<re;xe++){const he=_e[xe];Me(he[2]+C,he[1]+C,he[0]+C)}ue=c+v*2,C=B*ue;for(let xe=0;xe<re;xe++){const he=_e[xe];Me(he[0]+C,he[1]+C,he[2]+C)}}else{for(let ue=0;ue<re;ue++){const C=_e[ue];Me(C[2],C[1],C[0])}for(let ue=0;ue<re;ue++){const C=_e[ue];Me(C[0]+B*c,C[1]+B*c,C[2]+B*c)}}t.addGroup($,i.length/3-$,0)}function ae(){const $=i.length/3;let ue=0;ye(D,ue),ue+=D.length;for(let C=0,xe=b.length;C<xe;C++){const he=b[C];ye(he,ue),ue+=he.length}t.addGroup($,i.length/3-$,1)}function ye($,ue){let C=$.length;for(;--C>=0;){const xe=C;let he=C-1;he<0&&(he=$.length-1);for(let Se=0,ie=c+v*2;Se<ie;Se++){const Le=B*Se,me=B*(Se+1),Ae=ue+xe+Le,it=ue+he+Le,N=ue+he+me,w=ue+xe+me;Oe(Ae,it,N,w)}}}function oe($,ue,C){o.push($),o.push(ue),o.push(C)}function Me($,ue,C){Be($),Be(ue),Be(C);const xe=i.length/3,he=f.generateTopUV(t,i,xe-3,xe-2,xe-1);Qe(he[0]),Qe(he[1]),Qe(he[2])}function Oe($,ue,C,xe){Be($),Be(ue),Be(xe),Be(ue),Be(C),Be(xe);const he=i.length/3,Se=f.generateSideWallUV(t,i,he-6,he-3,he-2,he-1);Qe(Se[0]),Qe(Se[1]),Qe(Se[3]),Qe(Se[1]),Qe(Se[2]),Qe(Se[3])}function Be($){i.push(o[$*3+0]),i.push(o[$*3+1]),i.push(o[$*3+2])}function Qe($){n.push($.x),n.push($.y)}}}copy(s){return super.copy(s),this.parameters=Object.assign({},s.parameters),this}toJSON(){const s=super.toJSON(),e=this.parameters.shapes,t=this.parameters.options;return B0(e,t,s)}static fromJSON(s,e){const t=[];for(let n=0,r=s.shapes.length;n<r;n++){const a=e[s.shapes[n]];t.push(a)}const i=s.options.extrudePath;return i!==void 0&&(s.options.extrudePath=new Nh[i.type]().fromJSON(i)),new Lu(t,s.options)}};const z0={generateTopUV:function(s,e,t,i,n){const r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[n*3],h=e[n*3+1];return[new ce(r,a),new ce(o,l),new ce(c,h)]},generateSideWallUV:function(s,e,t,i,n,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[n*3],p=e[n*3+1],g=e[n*3+2],v=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ce(a,1-l),new ce(c,1-d),new ce(u,1-g),new ce(v,1-f)]:[new ce(o,1-l),new ce(h,1-d),new ce(p,1-g),new ce(m,1-f)]}};function B0(s,e,t){if(t.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){const r=s[i];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class hl extends Jt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const x=f*u-a;for(let y=0;y<c;y++){const _=y*d-r;g.push(_,-x,0),v.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const y=x+c*f,_=x+c*(f+1),R=x+1+c*(f+1),T=x+1+c*f;p.push(y,_,T),p.push(_,R,T)}this.setIndex(p),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.width,e.height,e.widthSegments,e.heightSegments)}}class k0 extends Pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}Aa=class extends Si{constructor(s){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(s)}copy(s){return super.copy(s),this.defines={STANDARD:""},this.color.copy(s.color),this.roughness=s.roughness,this.metalness=s.metalness,this.map=s.map,this.lightMap=s.lightMap,this.lightMapIntensity=s.lightMapIntensity,this.aoMap=s.aoMap,this.aoMapIntensity=s.aoMapIntensity,this.emissive.copy(s.emissive),this.emissiveMap=s.emissiveMap,this.emissiveIntensity=s.emissiveIntensity,this.bumpMap=s.bumpMap,this.bumpScale=s.bumpScale,this.normalMap=s.normalMap,this.normalMapType=s.normalMapType,this.normalScale.copy(s.normalScale),this.displacementMap=s.displacementMap,this.displacementScale=s.displacementScale,this.displacementBias=s.displacementBias,this.roughnessMap=s.roughnessMap,this.metalnessMap=s.metalnessMap,this.alphaMap=s.alphaMap,this.envMap=s.envMap,this.envMapRotation.copy(s.envMapRotation),this.envMapIntensity=s.envMapIntensity,this.wireframe=s.wireframe,this.wireframeLinewidth=s.wireframeLinewidth,this.wireframeLinecap=s.wireframeLinecap,this.wireframeLinejoin=s.wireframeLinejoin,this.flatShading=s.flatShading,this.fog=s.fog,this}};class Hi extends Aa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class H0 extends Si{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class V0 extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class G0 extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ul(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function W0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function j0(s){function e(n,r){return s[n]-s[r]}const t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function mp(s,e,t){const i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)n[a++]=s[o+l]}return n}function gp(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=s[n++];while(r!==void 0)}class ia{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let a;t:{s:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break s;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class q0 extends ia{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fc,endingEnd:Fc}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case zc:r=e,o=2*t-i;break;case Bc:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case zc:a=e,l=2*i-t;break;case Bc:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-t)/(n-t),v=g*g,m=v*g,f=-u*m+2*u*v-u*g,x=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,y=(-1-p)*m+(1.5+p)*v+.5*g,_=p*m-p*v;for(let R=0;R!==o;++R)r[R]=f*a[h+R]+x*a[c+R]+y*a[l+R]+_*a[d+R];return r}}class X0 extends ia{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}}class Y0 extends ia{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ei{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ul(t,this.TimeBufferType),this.values=ul(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ul(e.times,Array),values:ul(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Y0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new X0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new q0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Nn:t=this.InterpolantFactoryMethodDiscrete;break;case Dn:t=this.InterpolantFactoryMethodLinear;break;case Co:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nn;case this.InterpolantFactoryMethodLinear:return Dn;case this.InterpolantFactoryMethodSmooth:return Co}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&W0(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Co,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{const d=o*i,u=d-i,p=d+i;for(let g=0;g!==i;++g){const v=t[d+g];if(v!==t[u+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*i,u=a*i;for(let p=0;p!==i;++p)t[u+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Ei.prototype.ValueTypeName="",Ei.prototype.TimeBufferType=Float32Array,Ei.prototype.ValueBufferType=Float32Array,Ei.prototype.DefaultInterpolation=Dn;class Qn extends Ei{constructor(e,t,i){super(e,t,i)}}Qn.prototype.ValueTypeName="bool",Qn.prototype.ValueBufferType=Array,Qn.prototype.DefaultInterpolation=Nn,Qn.prototype.InterpolantFactoryMethodLinear=void 0,Qn.prototype.InterpolantFactoryMethodSmooth=void 0;class vp extends Ei{constructor(e,t,i,n){super(e,t,i,n)}}vp.prototype.ValueTypeName="color";class er extends Ei{constructor(e,t,i,n){super(e,t,i,n)}}er.prototype.ValueTypeName="number";class Z0 extends ia{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let h=c+o;c!==h;c+=4)li.slerpFlat(r,0,a,c-o,a,c,l);return r}}class tr extends Ei{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Z0(this.times,this.values,this.getValueSize(),e)}}tr.prototype.ValueTypeName="quaternion",tr.prototype.InterpolantFactoryMethodSmooth=void 0;class ir extends Ei{constructor(e,t,i){super(e,t,i)}}ir.prototype.ValueTypeName="string",ir.prototype.ValueBufferType=Array,ir.prototype.DefaultInterpolation=Nn,ir.prototype.InterpolantFactoryMethodLinear=void 0,ir.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends Ei{constructor(e,t,i,n){super(e,t,i,n)}}sr.prototype.ValueTypeName="vector";class K0{constructor(e="",t=-1,i=[],n=id){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=ci(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push($0(i[a]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(Ei.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=j0(l);l=mp(l,1,h),c=mp(c,1,h),!n&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new er(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=n[d];u||(n[d]=u=[]),u.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,u,p,g){if(u.length!==0){const v=[],m=[];gp(u,v,m,p),v.length!==0&&g.push(new h(d,v,m))}},n=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const u={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let g=0;g<d[p].morphTargets.length;g++)u[d[p].morphTargets[g]]=-1;for(const g in u){const v=[],m=[];for(let f=0;f!==d[p].morphTargets.length;++f){const x=d[p];v.push(x.time),m.push(x.morphTarget===g?1:0)}n.push(new er(".morphTargetInfluence["+g+"]",v,m))}l=u.length*a}else{const u=".bones["+t[h].name+"]";i(sr,u+".position",d,"pos",n),i(tr,u+".quaternion",d,"rot",n),i(sr,u+".scale",d,"scl",n)}}return n.length===0?null:new this(r,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function J0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return er;case"vector":case"vector2":case"vector3":case"vector4":return sr;case"color":return vp;case"quaternion":return tr;case"bool":case"boolean":return Qn;case"string":return ir}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function $0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=J0(s.type);if(s.times===void 0){const t=[],i=[];gp(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Us={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Q0{constructor(e,t,i){const n=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const ev=new Q0;class cs{constructor(e){this.manager=e!==void 0?e:ev,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}cs.DEFAULT_MATERIAL_NAME="__DEFAULT";const hs={};class tv extends Error{constructor(e,t){super(e),this.response=t}}class sa extends cs{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Us.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(hs[e]!==void 0){hs[e].push({onLoad:t,onProgress:i,onError:n});return}hs[e]=[],hs[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=hs[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=u?parseInt(u):0,g=p!==0;let v=0;const m=new ReadableStream({start(f){x();function x(){d.read().then(({done:y,value:_})=>{if(y)f.close();else{v+=_.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let T=0,E=h.length;T<E;T++){const P=h[T];P.onProgress&&P.onProgress(R)}f.enqueue(_),x()}},y=>{f.error(y)})}}});return new Response(m)}else throw new tv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,u=new TextDecoder(d);return c.arrayBuffer().then(p=>u.decode(p))}}}).then(c=>{Us.add(e,c);const h=hs[e];delete hs[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=hs[e];if(h===void 0)throw this.manager.itemError(e),c;delete hs[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class iv extends cs{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Us.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=kr("img");function l(){h(),Us.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){h(),n&&n(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class sv extends cs{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new Jo,o=new sa(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(n!==void 0)n(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:vi,a.wrapT=c.wrapT!==void 0?c.wrapT:vi,a.magFilter=c.magFilter!==void 0?c.magFilter:Rt,a.minFilter=c.minFilter!==void 0?c.minFilter:Rt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=xi),c.mipmapCount===1&&(a.minFilter=Rt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},i,n),a}}class xp extends cs{constructor(e){super(e)}load(e,t,i,n){const r=new Ft,a=new iv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class dl extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Oh=new Xe,_p=new U,yp=new U;class Fh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bh,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;_p.setFromMatrixPosition(e.matrixWorld),t.position.copy(_p),yp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yp),t.updateMatrixWorld(),Oh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Oh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class nv extends Fh{constructor(){super(new ti(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=In*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rv extends dl{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new nv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const bp=new Xe,na=new U,zh=new U;class av extends Fh{constructor(){super(new ti(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),na.setFromMatrixPosition(e.matrixWorld),i.position.copy(na),zh.copy(i.position),zh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(zh),i.updateMatrixWorld(),n.makeTranslation(-na.x,-na.y,-na.z),bp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bp)}}Nu=class extends dl{constructor(s,e,t=0,i=2){super(s,e),this.isPointLight=!0,this.type="PointLight",this.distance=t,this.decay=i,this.shadow=new av}get power(){return this.intensity*4*Math.PI}set power(s){this.intensity=s/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(s,e){return super.copy(s,e),this.distance=s.distance,this.decay=s.decay,this.shadow=s.shadow.clone(),this}};class pl extends ph{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ov extends Fh{constructor(){super(new pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}Pu=class extends dl{constructor(s,e){super(s,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new ov}dispose(){this.shadow.dispose()}copy(s){return super.copy(s),this.target=s.target.clone(),this.shadow=s.shadow.clone(),this}},eg=class extends dl{constructor(s,e){super(s,e),this.isAmbientLight=!0,this.type="AmbientLight"}};class ra{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Bh=new WeakMap;class lv extends cs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Us.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(Bh.has(a)===!0)n&&n(Bh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Us.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),Bh.set(l,c),Us.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Us.add(e,l),r.manager.itemStart(e)}}let fl;class Mp{static getContext(){return fl===void 0&&(fl=new(window.AudioContext||window.webkitAudioContext)),fl}static setContext(e){fl=e}}class cv extends cs{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new sa(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);Mp.getContext().decodeAudioData(c,function(h){t(h)}).catch(o)}catch(c){o(c)}},i,n);function o(l){n?n(l):console.error(l),r.manager.itemError(e)}}}class hv extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class kh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=wp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function wp(){return performance.now()}const Qs=new U,Hh=new li,uv=new U,en=new U,tn=new U;class dv extends mt{constructor(){super(),this.type="AudioListener",this.context=Mp.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new kh}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Qs,Hh,uv),en.set(0,0,-1).applyQuaternion(Hh),tn.set(0,1,0).applyQuaternion(Hh),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Qs.x,i),t.positionY.linearRampToValueAtTime(Qs.y,i),t.positionZ.linearRampToValueAtTime(Qs.z,i),t.forwardX.linearRampToValueAtTime(en.x,i),t.forwardY.linearRampToValueAtTime(en.y,i),t.forwardZ.linearRampToValueAtTime(en.z,i),t.upX.linearRampToValueAtTime(tn.x,i),t.upY.linearRampToValueAtTime(tn.y,i),t.upZ.linearRampToValueAtTime(tn.z,i)}else t.setPosition(Qs.x,Qs.y,Qs.z),t.setOrientation(en.x,en.y,en.z,tn.x,tn.y,tn.z)}}class Sp extends mt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const sn=new U,Ep=new li,pv=new U,nn=new U;class fv extends Sp{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(sn,Ep,pv),nn.set(0,0,1).applyQuaternion(Ep);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(sn.x,i),t.positionY.linearRampToValueAtTime(sn.y,i),t.positionZ.linearRampToValueAtTime(sn.z,i),t.orientationX.linearRampToValueAtTime(nn.x,i),t.orientationY.linearRampToValueAtTime(nn.y,i),t.orientationZ.linearRampToValueAtTime(nn.z,i)}else t.setPosition(sn.x,sn.y,sn.z),t.setOrientation(nn.x,nn.y,nn.z)}}const Vh="\\[\\]\\.:\\/",mv=new RegExp("["+Vh+"]","g"),Gh="[^"+Vh+"]",gv="[^"+Vh.replace("\\.","")+"]",vv=/((?:WC+[\/:])*)/.source.replace("WC",Gh),xv=/(WCOD+)?/.source.replace("WCOD",gv),_v=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gh),yv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gh),bv=new RegExp("^"+vv+xv+_v+yv+"$"),Mv=["material","materials","bones","map"];class wv{constructor(e,t,i){const n=i||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ct{constructor(e,t,i){this.path=t,this.parsedPath=i||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,i):new ct(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mv,"")}static parseTrackName(e){const t=bv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);Mv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let r=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[n];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=wv,ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray],ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Tp=new Xe;tg=class{constructor(s,e,t=0,i=1/0){this.ray=new Gr(s,e),this.near=t,this.far=i,this.camera=null,this.layers=new th,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(s,e){this.ray.set(s,e)}setFromCamera(s,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(s.x,s.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(s.x,s.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(s){return Tp.identity().extractRotation(s.matrixWorld),this.ray.origin.setFromMatrixPosition(s.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tp),this}intersectObject(s,e=!0,t=[]){return Wh(s,this,t,e),t.sort(Ap),t}intersectObjects(s,e=!0,t=[]){for(let i=0,n=s.length;i<n;i++)Wh(s[i],this,t,e);return t.sort(Ap),t}};function Ap(s,e){return s.distance-e.distance}function Wh(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Wh(r[a],e,t,!0)}}const Rp=new U,ml=new U;class Sv{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Rp.subVectors(e,this.start),ml.subVectors(this.end,this.start);const i=ml.dot(ml);let n=ml.dot(Rp)/i;return t&&(n=Ke(n,0,1)),n}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}ig=class extends Qd{constructor(s=1){const e=[0,0,0,s,0,0,0,0,0,0,s,0,0,0,0,0,0,s],t=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Jt;i.setAttribute("position",new Kt(e,3)),i.setAttribute("color",new Kt(t,3));const n=new Mh({vertexColors:!0,toneMapped:!1});super(i,n),this.type="AxesHelper"}setColors(s,e,t){const i=new ze,n=this.geometry.attributes.color.array;return i.set(s),i.toArray(n,0),i.toArray(n,3),i.set(e),i.toArray(n,6),i.toArray(n,9),i.set(t),i.toArray(n,12),i.toArray(n,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};class Ev{constructor(){this.type="ShapePath",this.color=new ze,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Dh,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,n){return this.currentPath.quadraticCurveTo(e,t,i,n),this}bezierCurveTo(e,t,i,n,r,a){return this.currentPath.bezierCurveTo(e,t,i,n,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){const x=[];for(let y=0,_=f.length;y<_;y++){const R=f[y],T=new ol;T.curves=R.curves,x.push(T)}return x}function i(f,x){const y=x.length;let _=!1;for(let R=y-1,T=0;T<y;R=T++){let E=x[R],P=x[T],M=P.x-E.x,b=P.y-E.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(E=x[T],M=-M,P=x[R],b=-b),f.y<E.y||f.y>P.y)continue;if(f.y===E.y){if(f.x===E.x)return!0}else{const L=b*(f.x-E.x)-M*(f.y-E.y);if(L===0)return!0;if(L<0)continue;_=!_}}else{if(f.y!==E.y)continue;if(P.x<=f.x&&f.x<=E.x||E.x<=f.x&&f.x<=P.x)return!0}}return _}const n=$s.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new ol,l.curves=o.curves,c.push(l),c;let h=!n(r[0].getPoints());h=e?!h:h;const d=[],u=[];let p=[],g=0,v;u[g]=void 0,p[g]=[];for(let f=0,x=r.length;f<x;f++)o=r[f],v=o.getPoints(),a=n(v),a=e?!a:a,a?(!h&&u[g]&&g++,u[g]={s:new ol,p:v},u[g].s.curves=o.curves,h&&g++,p[g]=[]):p[g].push({h:o,p:v[0]});if(!u[0])return t(r);if(u.length>1){let f=!1,x=0;for(let y=0,_=u.length;y<_;y++)d[y]=[];for(let y=0,_=u.length;y<_;y++){const R=p[y];for(let T=0;T<R.length;T++){const E=R[T];let P=!0;for(let M=0;M<u.length;M++)i(E.p,u[M].p)&&(y!==M&&x++,P?(P=!1,d[M].push(E)):f=!0);P&&d[y].push(E)}}x>0&&f===!1&&(p=d)}let m;for(let f=0,x=u.length;f<x;f++){l=u[f].s,c.push(l),m=p[f];for(let y=0,_=m.length;y<_;y++)l.holes.push(m[y].h)}return c}}function Cp(s,e,t,i){const n=Tv(i);switch(t){case Dc:return s*e;case Pr:return s*e/n.components*n.byteLength;case Qa:return s*e/n.components*n.byteLength;case Ic:return s*e*2/n.components*n.byteLength;case eo:return s*e*2/n.components*n.byteLength;case Uc:return s*e*3/n.components*n.byteLength;case si:return s*e*4/n.components*n.byteLength;case to:return s*e*4/n.components*n.byteLength;case Lr:case Nr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Dr:case Ur:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case so:case ro:return Math.max(s,16)*Math.max(e,8)/4;case io:case no:return Math.max(s,8)*Math.max(e,8)/2;case ao:case oo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case lo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ho:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case uo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case po:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case fo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case mo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case go:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case vo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case xo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case _o:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case yo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case bo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case wo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ir:case So:case Eo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Oc:case To:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ao:case Ro:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tv(s){switch(s){case _i:case Pc:return{byteLength:1,components:1};case Pn:case Lc:case Vt:return{byteLength:2,components:1};case Ja:case $a:return{byteLength:2,components:4};case Es:case Ka:case qt:return{byteLength:4,components:1};case Nc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oa}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oa);function Pp(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Av(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Rv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Iv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ov=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$v=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",rx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ax=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_x=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ex=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ax=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Px=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,s_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,h_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,d_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,p_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,m_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,v_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,__=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,b_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,M_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,T_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,U_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,I_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,O_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,V_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,q_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Y_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ny=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ry=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Rv,alphahash_pars_fragment:Cv,alphamap_fragment:Pv,alphamap_pars_fragment:Lv,alphatest_fragment:Nv,alphatest_pars_fragment:Dv,aomap_fragment:Uv,aomap_pars_fragment:Iv,batching_pars_vertex:Ov,batching_vertex:Fv,begin_vertex:zv,beginnormal_vertex:Bv,bsdfs:kv,iridescence_fragment:Hv,bumpmap_pars_fragment:Vv,clipping_planes_fragment:Gv,clipping_planes_pars_fragment:Wv,clipping_planes_pars_vertex:jv,clipping_planes_vertex:qv,color_fragment:Xv,color_pars_fragment:Yv,color_pars_vertex:Zv,color_vertex:Kv,common:Jv,cube_uv_reflection_fragment:$v,defaultnormal_vertex:Qv,displacementmap_pars_vertex:ex,displacementmap_vertex:tx,emissivemap_fragment:ix,emissivemap_pars_fragment:sx,colorspace_fragment:nx,colorspace_pars_fragment:rx,envmap_fragment:ax,envmap_common_pars_fragment:ox,envmap_pars_fragment:lx,envmap_pars_vertex:cx,envmap_physical_pars_fragment:yx,envmap_vertex:hx,fog_vertex:ux,fog_pars_vertex:dx,fog_fragment:px,fog_pars_fragment:fx,gradientmap_pars_fragment:mx,lightmap_pars_fragment:gx,lights_lambert_fragment:vx,lights_lambert_pars_fragment:xx,lights_pars_begin:_x,lights_toon_fragment:bx,lights_toon_pars_fragment:Mx,lights_phong_fragment:wx,lights_phong_pars_fragment:Sx,lights_physical_fragment:Ex,lights_physical_pars_fragment:Tx,lights_fragment_begin:Ax,lights_fragment_maps:Rx,lights_fragment_end:Cx,logdepthbuf_fragment:Px,logdepthbuf_pars_fragment:Lx,logdepthbuf_pars_vertex:Nx,logdepthbuf_vertex:Dx,map_fragment:Ux,map_pars_fragment:Ix,map_particle_fragment:Ox,map_particle_pars_fragment:Fx,metalnessmap_fragment:zx,metalnessmap_pars_fragment:Bx,morphinstance_vertex:kx,morphcolor_vertex:Hx,morphnormal_vertex:Vx,morphtarget_pars_vertex:Gx,morphtarget_vertex:Wx,normal_fragment_begin:jx,normal_fragment_maps:qx,normal_pars_fragment:Xx,normal_pars_vertex:Yx,normal_vertex:Zx,normalmap_pars_fragment:Kx,clearcoat_normal_fragment_begin:Jx,clearcoat_normal_fragment_maps:$x,clearcoat_pars_fragment:Qx,iridescence_pars_fragment:e_,opaque_fragment:t_,packing:i_,premultiplied_alpha_fragment:s_,project_vertex:n_,dithering_fragment:r_,dithering_pars_fragment:a_,roughnessmap_fragment:o_,roughnessmap_pars_fragment:l_,shadowmap_pars_fragment:c_,shadowmap_pars_vertex:h_,shadowmap_vertex:u_,shadowmask_pars_fragment:d_,skinbase_vertex:p_,skinning_pars_vertex:f_,skinning_vertex:m_,skinnormal_vertex:g_,specularmap_fragment:v_,specularmap_pars_fragment:x_,tonemapping_fragment:__,tonemapping_pars_fragment:y_,transmission_fragment:b_,transmission_pars_fragment:M_,uv_pars_fragment:w_,uv_pars_vertex:S_,uv_vertex:E_,worldpos_vertex:T_,background_vert:A_,background_frag:R_,backgroundCube_vert:C_,backgroundCube_frag:P_,cube_vert:L_,cube_frag:N_,depth_vert:D_,depth_frag:U_,distanceRGBA_vert:I_,distanceRGBA_frag:O_,equirect_vert:F_,equirect_frag:z_,linedashed_vert:B_,linedashed_frag:k_,meshbasic_vert:H_,meshbasic_frag:V_,meshlambert_vert:G_,meshlambert_frag:W_,meshmatcap_vert:j_,meshmatcap_frag:q_,meshnormal_vert:X_,meshnormal_frag:Y_,meshphong_vert:Z_,meshphong_frag:K_,meshphysical_vert:J_,meshphysical_frag:$_,meshtoon_vert:Q_,meshtoon_frag:ey,points_vert:ty,points_frag:iy,shadow_vert:sy,shadow_frag:ny,sprite_vert:ry,sprite_frag:ay},ve={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Vi={basic:{uniforms:$t([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:$t([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ze(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:$t([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:$t([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:$t([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ze(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:$t([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:$t([ve.points,ve.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:$t([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:$t([ve.common,ve.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:$t([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:$t([ve.sprite,ve.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:$t([ve.common,ve.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:$t([ve.lights,ve.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Vi.physical={uniforms:$t([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const gl={r:0,b:0,g:0},rn=new Bi,oy=new Xe;function ly(s,e,t,i,n,r,a){const o=new ze(0);let l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1;const R=g(y);R===null?f(o,l):R&&R.isColor&&(f(R,1),_=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,_){const R=g(_);R&&(R.isCubeTexture||R.mapping===Ar)?(h===void 0&&(h=new Ht(new qr(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:Yn(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),rn.copy(_.backgroundRotation),rn.x*=-1,rn.y*=-1,rn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(rn.y*=-1,rn.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(oy.makeRotationFromEuler(rn)),h.material.toneMapped=st.getTransfer(R.colorSpace)!==ot,(d!==R||u!==R.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=R,u=R.version,p=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Ht(new hl(2,2),new Pt({name:"BackgroundMaterial",uniforms:Yn(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=st.getTransfer(R.colorSpace)!==ot,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||u!==R.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=R,u=R.version,p=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,_){y.getRGB(gl,Od(s)),i.buffers.color.setClear(gl.r,gl.g,gl.b,_,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:v,addToRenderList:m,dispose:x}}function cy(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null);let r=n,a=!1;function o(b,L,I,D,O){let B=!1;const z=d(D,I,L);r!==z&&(r=z,c(r.object)),B=p(b,D,I,O),B&&g(b,D,I,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,_(b,L,I,D),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function d(b,L,I){const D=I.wireframe===!0;let O=i[b.id];O===void 0&&(O={},i[b.id]=O);let B=O[L.id];B===void 0&&(B={},O[L.id]=B);let z=B[D];return z===void 0&&(z=u(l()),B[D]=z),z}function u(b){const L=[],I=[],D=[];for(let O=0;O<t;O++)L[O]=0,I[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:D,object:b,attributes:{},index:null}}function p(b,L,I,D){const O=r.attributes,B=L.attributes;let z=0;const X=I.getAttributes();for(const G in X)if(X[G].location>=0){const W=O[G];let de=B[G];if(de===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(de=b.instanceColor)),W===void 0||W.attribute!==de||de&&W.data!==de.data)return!0;z++}return r.attributesNum!==z||r.index!==D}function g(b,L,I,D){const O={},B=L.attributes;let z=0;const X=I.getAttributes();for(const G in X)if(X[G].location>=0){let W=B[G];W===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(W=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(W=b.instanceColor));const de={};de.attribute=W,W&&W.data&&(de.data=W.data),O[G]=de,z++}r.attributes=O,r.attributesNum=z,r.index=D}function v(){const b=r.newAttributes;for(let L=0,I=b.length;L<I;L++)b[L]=0}function m(b){f(b,0)}function f(b,L){const I=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;I[b]=1,D[b]===0&&(s.enableVertexAttribArray(b),D[b]=1),O[b]!==L&&(s.vertexAttribDivisor(b,L),O[b]=L)}function x(){const b=r.newAttributes,L=r.enabledAttributes;for(let I=0,D=L.length;I<D;I++)L[I]!==b[I]&&(s.disableVertexAttribArray(I),L[I]=0)}function y(b,L,I,D,O,B,z){z===!0?s.vertexAttribIPointer(b,L,I,O,B):s.vertexAttribPointer(b,L,I,D,O,B)}function _(b,L,I,D){v();const O=D.attributes,B=I.getAttributes(),z=L.defaultAttributeValues;for(const X in B){const G=B[X];if(G.location>=0){let W=O[X];if(W===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(W=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(W=b.instanceColor)),W!==void 0){const de=W.normalized,_e=W.itemSize,re=e.get(W);if(re===void 0)continue;const Ze=re.buffer,Y=re.type,ae=re.bytesPerElement,ye=Y===s.INT||Y===s.UNSIGNED_INT||W.gpuType===Ka;if(W.isInterleavedBufferAttribute){const oe=W.data,Me=oe.stride,Oe=W.offset;if(oe.isInstancedInterleavedBuffer){for(let Be=0;Be<G.locationSize;Be++)f(G.location+Be,oe.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Be=0;Be<G.locationSize;Be++)m(G.location+Be);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let Be=0;Be<G.locationSize;Be++)y(G.location+Be,_e/G.locationSize,Y,de,Me*ae,(Oe+_e/G.locationSize*Be)*ae,ye)}else{if(W.isInstancedBufferAttribute){for(let oe=0;oe<G.locationSize;oe++)f(G.location+oe,W.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let oe=0;oe<G.locationSize;oe++)m(G.location+oe);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let oe=0;oe<G.locationSize;oe++)y(G.location+oe,_e/G.locationSize,Y,de,_e*ae,_e/G.locationSize*oe*ae,ye)}}else if(z!==void 0){const de=z[X];if(de!==void 0)switch(de.length){case 2:s.vertexAttrib2fv(G.location,de);break;case 3:s.vertexAttrib3fv(G.location,de);break;case 4:s.vertexAttrib4fv(G.location,de);break;default:s.vertexAttrib1fv(G.location,de)}}}}x()}function R(){P();for(const b in i){const L=i[b];for(const I in L){const D=L[I];for(const O in D)h(D[O].object),delete D[O];delete L[I]}delete i[b]}}function T(b){if(i[b.id]===void 0)return;const L=i[b.id];for(const I in L){const D=L[I];for(const O in D)h(D[O].object),delete D[O];delete L[I]}delete i[b.id]}function E(b){for(const L in i){const I=i[L];if(I[b.id]===void 0)continue;const D=I[b.id];for(const O in D)h(D[O].object),delete D[O];delete I[b.id]}}function P(){M(),a=!0,r!==n&&(r=n,c(r.object))}function M(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function hy(s,e,t){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(s.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let u=0;for(let p=0;p<d;p++)u+=h[p];t.update(u,i,1)}function l(c,h,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*u[v];t.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function uy(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(E){return!(E!==si&&i.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const P=E===Vt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==_i&&i.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==qt&&!P)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:R,maxSamples:T}}function dy(s){const e=this;let t=null,i=0,n=!1,r=!1;const a=new Ds,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||n;return n=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:i,y=x*4;let _=f.clippingState||null;l.value=_,_=h(g,u,y,p);for(let R=0;R!==y;++R)_[R]=t[R];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,_=p;y!==v;++y,_+=4)a.copy(d[y]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function py(s){let e=new WeakMap;function t(a,o){return o===La?a.mapping=Vs:o===Za&&(a.mapping=Gs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===La||o===Za)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Yg(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const nr=4,Lp=[.125,.215,.35,.446,.526,.582],an=20,jh=new pl,Np=new ze;let qh=null,Xh=0,Yh=0,Zh=!1;const on=(1+Math.sqrt(5))/2,rr=1/on,Dp=[new U(-on,rr,0),new U(on,rr,0),new U(-rr,0,on),new U(rr,0,on),new U(0,on,-rr),new U(0,on,rr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],fy=new U;class Up{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100,r={}){const{size:a=256,position:o=fy}=r;qh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qh,Xh,Yh),this._renderer.xr.enabled=Zh,e.scissorTest=!1,vl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Vt,format:si,colorSpace:kt,depthBuffer:!1},n=Ip(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ip(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=my(r)),this._blurMaterial=gy(r,e,t)}return n}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,jh)}_sceneToCubeUV(e,t,i,n,r){const a=new ti(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(Np),c.toneMapping=Ji,c.autoClear=!1;const u=new Ls({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),p=new Ht(new qr,u);let g=!1;const v=e.background;v?v.isColor&&(u.color.copy(v),e.background=null,g=!0):(u.color.copy(Np),g=!0);for(let m=0;m<6;m++){const f=m%3;f===0?(a.up.set(0,o[m],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x+l[m],r.y,r.z)):f===1?(a.up.set(0,0,o[m]),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y+l[m],r.z)):(a.up.set(0,o[m],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y,r.z+l[m]));const x=this._cubeSize;vl(n,f*x,m>2?x:0,x,x),c.setRenderTarget(n),g&&c.render(p,a),c.render(e,a)}p.geometry.dispose(),p.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Vs||e.mapping===Gs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Op());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new Ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;vl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,jh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Dp[(n-r-1)%Dp.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ht(this._lodPlanes[n],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*an-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):an;m>an&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${an}`);const f=[];let x=0;for(let E=0;E<an;++E){const P=E/v,M=Math.exp(-P*P/2);f.push(M),E===0?x+=M:E<m&&(x+=2*M)}for(let E=0;E<f.length;E++)f[E]=f[E]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-i;const _=this._sizeLods[n],R=3*_*(n>y-nr?n-y+nr:0),T=4*(this._cubeSize-_);vl(t,R,T,3*_,2*_),l.setRenderTarget(t),l.render(d,jh)}}function my(s){const e=[],t=[],i=[];let n=s;const r=s-nr+1+Lp.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>s-nr?l=Lp[a-s+nr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,v=3,m=2,f=1,x=new Float32Array(v*g*p),y=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let T=0;T<p;T++){const E=T%3*2/3-1,P=T>2?0:-1,M=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];x.set(M,v*g*T),y.set(u,m*g*T);const b=[T,T,T,T,T,T];_.set(b,f*g*T)}const R=new Jt;R.setAttribute("position",new Gt(x,v)),R.setAttribute("uv",new Gt(y,m)),R.setAttribute("faceIndex",new Gt(_,f)),e.push(R),n>nr&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ip(s,e,t){const i=new ni(s,e,t);return i.texture.mapping=Ar,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vl(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function gy(s,e,t){const i=new Float32Array(an),n=new U(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:an,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Op(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Fp(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Kh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vy(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===La||l===Za,h=l===Vs||l===Gs;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Up(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&n(p)?(t===null&&(t=new Up(s)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function xy(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&On("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function _y(s,e,t,i){const n={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete n[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)e.update(u[p],s.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let y=0,_=x.length;y<_;y+=3){const R=x[y+0],T=x[y+1],E=x[y+2];u.push(R,T,T,E,E,R)}}else if(g!==void 0){const x=g.array;v=g.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const R=y+0,T=y+1,E=y+2;u.push(R,T,T,E,E,R)}}else return;const m=new(vd(u)?Nd:Ld)(u,1);m.version=v;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function yy(s,e,t){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){s.drawElements(i,p,r,u*a),t.update(p,i,1)}function c(u,p,g){g!==0&&(s.drawElementsInstanced(i,p,r,u*a,g),t.update(p,i,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,g);let v=0;for(let m=0;m<g;m++)v+=p[m];t.update(v,i,1)}function d(u,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,v,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x]*v[x];t.update(f,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function by(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function My(s,e,t){const i=new WeakMap,n=new at;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let p=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",p)};u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let R=o.attributes.position.count*_,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const E=new Float32Array(R*T*4*d),P=new bd(E,R,T,d);P.type=qt,P.needsUpdate=!0;const M=_*4;for(let b=0;b<d;b++){const L=f[b],I=x[b],D=y[b],O=R*T*4*b;for(let B=0;B<L.count;B++){const z=B*M;g===!0&&(n.fromBufferAttribute(L,B),E[O+z+0]=n.x,E[O+z+1]=n.y,E[O+z+2]=n.z,E[O+z+3]=0),v===!0&&(n.fromBufferAttribute(I,B),E[O+z+4]=n.x,E[O+z+5]=n.y,E[O+z+6]=n.z,E[O+z+7]=0),m===!0&&(n.fromBufferAttribute(D,B),E[O+z+8]=n.x,E[O+z+9]=n.y,E[O+z+10]=n.z,E[O+z+11]=D.itemSize===4?n.w:1)}}u={count:d,texture:P,size:new ce(R,T)},i.set(o,u),o.addEventListener("dispose",p)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function wy(s,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(n.get(d)!==c&&(e.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return d}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const zp=new Ft,Bp=new Th(1,1),kp=new bd,Hp=new Cg,Vp=new Bd,Gp=[],Wp=[],jp=new Float32Array(16),qp=new Float32Array(9),Xp=new Float32Array(4);function ar(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=Gp[n];if(r===void 0&&(r=new Float32Array(n),Gp[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Lt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Nt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function xl(s,e){let t=Wp[e];t===void 0&&(t=new Int32Array(e),Wp[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Sy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ey(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2fv(this.addr,e),Nt(t,e)}}function Ty(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;s.uniform3fv(this.addr,e),Nt(t,e)}}function Ay(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4fv(this.addr,e),Nt(t,e)}}function Ry(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Lt(t,i))return;Xp.set(i),s.uniformMatrix2fv(this.addr,!1,Xp),Nt(t,i)}}function Cy(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Lt(t,i))return;qp.set(i),s.uniformMatrix3fv(this.addr,!1,qp),Nt(t,i)}}function Py(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Lt(t,i))return;jp.set(i),s.uniformMatrix4fv(this.addr,!1,jp),Nt(t,i)}}function Ly(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ny(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2iv(this.addr,e),Nt(t,e)}}function Dy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;s.uniform3iv(this.addr,e),Nt(t,e)}}function Uy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4iv(this.addr,e),Nt(t,e)}}function Iy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Oy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2uiv(this.addr,e),Nt(t,e)}}function Fy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;s.uniform3uiv(this.addr,e),Nt(t,e)}}function zy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4uiv(this.addr,e),Nt(t,e)}}function By(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Bp.compareFunction=Vc,r=Bp):r=zp,t.setTexture2D(e||r,n)}function ky(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Hp,n)}function Hy(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Vp,n)}function Vy(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||kp,n)}function Gy(s){switch(s){case 5126:return Sy;case 35664:return Ey;case 35665:return Ty;case 35666:return Ay;case 35674:return Ry;case 35675:return Cy;case 35676:return Py;case 5124:case 35670:return Ly;case 35667:case 35671:return Ny;case 35668:case 35672:return Dy;case 35669:case 35673:return Uy;case 5125:return Iy;case 36294:return Oy;case 36295:return Fy;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return ky;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Vy}}function Wy(s,e){s.uniform1fv(this.addr,e)}function jy(s,e){const t=ar(e,this.size,2);s.uniform2fv(this.addr,t)}function qy(s,e){const t=ar(e,this.size,3);s.uniform3fv(this.addr,t)}function Xy(s,e){const t=ar(e,this.size,4);s.uniform4fv(this.addr,t)}function Yy(s,e){const t=ar(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Zy(s,e){const t=ar(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ky(s,e){const t=ar(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Jy(s,e){s.uniform1iv(this.addr,e)}function $y(s,e){s.uniform2iv(this.addr,e)}function Qy(s,e){s.uniform3iv(this.addr,e)}function eb(s,e){s.uniform4iv(this.addr,e)}function tb(s,e){s.uniform1uiv(this.addr,e)}function ib(s,e){s.uniform2uiv(this.addr,e)}function sb(s,e){s.uniform3uiv(this.addr,e)}function nb(s,e){s.uniform4uiv(this.addr,e)}function rb(s,e,t){const i=this.cache,n=e.length,r=xl(t,n);Lt(i,r)||(s.uniform1iv(this.addr,r),Nt(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||zp,r[a])}function ab(s,e,t){const i=this.cache,n=e.length,r=xl(t,n);Lt(i,r)||(s.uniform1iv(this.addr,r),Nt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Hp,r[a])}function ob(s,e,t){const i=this.cache,n=e.length,r=xl(t,n);Lt(i,r)||(s.uniform1iv(this.addr,r),Nt(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Vp,r[a])}function lb(s,e,t){const i=this.cache,n=e.length,r=xl(t,n);Lt(i,r)||(s.uniform1iv(this.addr,r),Nt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||kp,r[a])}function cb(s){switch(s){case 5126:return Wy;case 35664:return jy;case 35665:return qy;case 35666:return Xy;case 35674:return Yy;case 35675:return Zy;case 35676:return Ky;case 5124:case 35670:return Jy;case 35667:case 35671:return $y;case 35668:case 35672:return Qy;case 35669:case 35673:return eb;case 5125:return tb;case 36294:return ib;case 36295:return sb;case 36296:return nb;case 35678:case 36198:case 36298:case 36306:case 35682:return rb;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return lb}}class hb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Gy(t.type)}}class ub{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cb(t.type)}}class db{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(e,t[o.id],i)}}}const Jh=/(\w+)(\])?(\[|\.)?/g;function Yp(s,e){s.seq.push(e),s.map[e.id]=e}function pb(s,e,t){const i=s.name,n=i.length;for(Jh.lastIndex=0;;){const r=Jh.exec(i),a=Jh.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Yp(t,c===void 0?new hb(o,s,e):new ub(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new db(o),Yp(t,h)),t=h}}}class _l{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),a=e.getUniformLocation(t,r.name);pb(r,a,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function Zp(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const fb=37297;let mb=0;function gb(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Kp=new Je;function vb(s){st._getMatrix(Kp,st.workingColorSpace,s);const e=`mat3( ${Kp.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(s)){case Or:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Jp(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+gb(s.getShaderSource(e),a)}else return n}function xb(s,e){const t=vb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _b(s,e){let t;switch(e){case bc:t="Linear";break;case Mc:t="Reinhard";break;case wc:t="Cineon";break;case Ya:t="ACESFilmic";break;case Ec:t="AgX";break;case Tc:t="Neutral";break;case Sc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yl=new U;function yb(){st.getLuminanceCoefficients(yl);const s=yl.x.toFixed(4),e=yl.y.toFixed(4),t=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function Mb(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wb(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function aa(s){return s!==""}function $p(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(s){return s.replace(Sb,Tb)}const Eb=new Map;function Tb(s,e){let t=$e[e];if(t===void 0){const i=Eb.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $h(t)}const Ab=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ef(s){return s.replace(Ab,Rb)}function Rb(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function tf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===fc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function Pb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case Ar:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lb(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function Nb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case yc:e="ENVMAP_BLENDING_MULTIPLY";break;case Qu:e="ENVMAP_BLENDING_MIX";break;case ed:e="ENVMAP_BLENDING_ADD";break}return e}function Db(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ub(s,e,t,i){const n=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Cb(t),c=Pb(t),h=Lb(t),d=Nb(t),u=Db(t),p=bb(t),g=Mb(r),v=n.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(aa).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(aa).join(`
`),f.length>0&&(f+=`
`)):(m=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),f=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?$e.tonemapping_pars_fragment:"",t.toneMapping!==Ji?_b("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,xb("linearToOutputTexel",t.outputColorSpace),yb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),a=$h(a),a=$p(a,t),a=Qp(a,t),o=$h(o),o=$p(o,t),o=Qp(o,t),a=ef(a),o=ef(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=x+m+a,_=x+f+o,R=Zp(n,n.VERTEX_SHADER,y),T=Zp(n,n.FRAGMENT_SHADER,_);n.attachShader(v,R),n.attachShader(v,T),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function E(L){if(s.debug.checkShaderErrors){const I=n.getProgramInfoLog(v).trim(),D=n.getShaderInfoLog(R).trim(),O=n.getShaderInfoLog(T).trim();let B=!0,z=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,R,T);else{const X=Jp(n,R,"vertex"),G=Jp(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+I+`
`+X+`
`+G)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(D===""||O==="")&&(z=!1);z&&(L.diagnostics={runnable:B,programLog:I,vertexShader:{log:D,prefix:m},fragmentShader:{log:O,prefix:f}})}n.deleteShader(R),n.deleteShader(T),P=new _l(n,v),M=wb(n,v)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(v,fb)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}let Ib=0;class Ob{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Fb(e),t.set(e,i)),i}}class Fb{constructor(e){this.id=Ib++,this.code=e,this.usedTimes=0}}function zb(s,e,t,i,n,r,a){const o=new th,l=new Ob,c=new Set,h=[],d=n.logarithmicDepthBuffer,u=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,L,I,D){const O=I.fog,B=D.geometry,z=M.isMeshStandardMaterial?I.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),G=X&&X.mapping===Ar?X.image.height:null,W=g[M.type];M.precision!==null&&(p=n.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const de=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_e=de!==void 0?de.length:0;let re=0;B.morphAttributes.position!==void 0&&(re=1),B.morphAttributes.normal!==void 0&&(re=2),B.morphAttributes.color!==void 0&&(re=3);let Ze,Y,ae,ye;if(W){const ht=Vi[W];Ze=ht.vertexShader,Y=ht.fragmentShader}else Ze=M.vertexShader,Y=M.fragmentShader,l.update(M),ae=l.getVertexShaderID(M),ye=l.getFragmentShaderID(M);const oe=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Oe=D.isInstancedMesh===!0,Be=D.isBatchedMesh===!0,Qe=!!M.map,$=!!M.matcap,ue=!!X,C=!!M.aoMap,xe=!!M.lightMap,he=!!M.bumpMap,Se=!!M.normalMap,ie=!!M.displacementMap,Le=!!M.emissiveMap,me=!!M.metalnessMap,Ae=!!M.roughnessMap,it=M.anisotropy>0,N=M.clearcoat>0,w=M.dispersion>0,V=M.iridescence>0,Z=M.sheen>0,J=M.transmission>0,K=it&&!!M.anisotropyMap,Ne=N&&!!M.clearcoatMap,pe=N&&!!M.clearcoatNormalMap,Ee=N&&!!M.clearcoatRoughnessMap,Te=V&&!!M.iridescenceMap,te=V&&!!M.iridescenceThicknessMap,we=Z&&!!M.sheenColorMap,Ye=Z&&!!M.sheenRoughnessMap,Fe=!!M.specularMap,fe=!!M.specularColorMap,Ge=!!M.specularIntensityMap,F=J&&!!M.transmissionMap,ge=J&&!!M.thicknessMap,ee=!!M.gradientMap,Ie=!!M.alphaMap,le=M.alphaTest>0,Q=!!M.alphaHash,De=!!M.extensions;let Ve=Ji;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ve=s.toneMapping);const Bt={shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:Ze,fragmentShader:Y,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:ye,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Be,batchingColor:Be&&D._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:kt,alphaToCoverage:!!M.alphaToCoverage,map:Qe,matcap:$,envMap:ue,envMapMode:ue&&X.mapping,envMapCubeUVHeight:G,aoMap:C,lightMap:xe,bumpMap:he,normalMap:Se,displacementMap:u&&ie,emissiveMap:Le,normalMapObjectSpace:Se&&M.normalMapType===ad,normalMapTangentSpace:Se&&M.normalMapType===Lo,metalnessMap:me,roughnessMap:Ae,anisotropy:it,anisotropyMap:K,clearcoat:N,clearcoatMap:Ne,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ee,dispersion:w,iridescence:V,iridescenceMap:Te,iridescenceThicknessMap:te,sheen:Z,sheenColorMap:we,sheenRoughnessMap:Ye,specularMap:Fe,specularColorMap:fe,specularIntensityMap:Ge,transmission:J,transmissionMap:F,thicknessMap:ge,gradientMap:ee,opaque:M.transparent===!1&&M.blending===ks&&M.alphaToCoverage===!1,alphaMap:Ie,alphaTest:le,alphaHash:Q,combine:M.combine,mapUv:Qe&&v(M.map.channel),aoMapUv:C&&v(M.aoMap.channel),lightMapUv:xe&&v(M.lightMap.channel),bumpMapUv:he&&v(M.bumpMap.channel),normalMapUv:Se&&v(M.normalMap.channel),displacementMapUv:ie&&v(M.displacementMap.channel),emissiveMapUv:Le&&v(M.emissiveMap.channel),metalnessMapUv:me&&v(M.metalnessMap.channel),roughnessMapUv:Ae&&v(M.roughnessMap.channel),anisotropyMapUv:K&&v(M.anisotropyMap.channel),clearcoatMapUv:Ne&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:we&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&v(M.sheenRoughnessMap.channel),specularMapUv:Fe&&v(M.specularMap.channel),specularColorMapUv:fe&&v(M.specularColorMap.channel),specularIntensityMapUv:Ge&&v(M.specularIntensityMap.channel),transmissionMapUv:F&&v(M.transmissionMap.channel),thicknessMapUv:ge&&v(M.thicknessMap.channel),alphaMapUv:Ie&&v(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Se||it),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(Qe||Ie),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Me,skinning:D.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:re,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Qe&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===ot,decodeVideoTextureEmissive:Le&&M.emissiveMap.isVideoTexture===!0&&st.getTransfer(M.emissiveMap.colorSpace)===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gi,flipSided:M.side===Zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:De&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&M.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function f(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)b.push(L),b.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(x(b,M),y(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function x(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function y(M,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),M.push(o.mask)}function _(M){const b=g[M.type];let L;if(b){const I=Vi[b];L=ls.clone(I.uniforms)}else L=M.uniforms;return L}function R(M,b){let L;for(let I=0,D=h.length;I<D;I++){const O=h[I];if(O.cacheKey===b){L=O,++L.usedTimes;break}}return L===void 0&&(L=new Ub(s,b,M,r),h.push(L)),L}function T(M){if(--M.usedTimes===0){const b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function E(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:R,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:P}}function Bb(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function kb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function sf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function nf(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(d,u,p,g,v,m){let f=s[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},s[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function o(d,u,p,g,v,m){const f=a(d,u,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):t.push(f)}function l(d,u,p,g,v,m){const f=a(d,u,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||kb),i.length>1&&i.sort(u||sf),n.length>1&&n.sort(u||sf)}function h(){for(let d=e,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:h,sort:c}}function Hb(){let s=new WeakMap;function e(i,n){const r=s.get(i);let a;return r===void 0?(a=new nf,s.set(i,[a])):n>=r.length?(a=new nf,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Vb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ze};break;case"SpotLight":t={position:new U,direction:new U,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function Gb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Wb=0;function jb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function qb(s){const e=new Vb,t=Gb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const n=new U,r=new Xe,a=new Xe;function o(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,x=0,y=0,_=0,R=0,T=0,E=0;c.sort(jb);for(let M=0,b=c.length;M<b;M++){const L=c[M],I=L.color,D=L.intensity,O=L.distance,B=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=I.r*D,d+=I.g*D,u+=I.b*D;else if(L.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(L.sh.coefficients[z],D);E++}else if(L.isDirectionalLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,G=t.get(L);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=L.shadow.matrix,x++}i.directional[p]=z,p++}else if(L.isSpotLight){const z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(I).multiplyScalar(D),z.distance=O,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,i.spot[v]=z;const X=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,X.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[v]=X.matrix,L.castShadow){const G=t.get(L);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=B,_++}v++}else if(L.isRectAreaLight){const z=e.get(L);z.color.copy(I).multiplyScalar(D),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=z,m++}else if(L.isPointLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){const X=L.shadow,G=t.get(L);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=z,g++}else if(L.isHemisphereLight){const z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(D),z.groundColor.copy(L.groundColor).multiplyScalar(D),i.hemi[f]=z,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==x||P.numPointShadows!==y||P.numSpotShadows!==_||P.numSpotMaps!==R||P.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=x,P.numPointShadows=y,P.numSpotShadows=_,P.numSpotMaps=R,P.numLightProbes=E,i.version=Wb++)}function l(c,h){let d=0,u=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const y=c[f];if(y.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),d++}else if(y.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const _=i.point[u];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function rf(s){const e=new qb(s),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Xb(s){let e=new WeakMap;function t(n,r=0){const a=e.get(n);let o;return a===void 0?(o=new rf(s),e.set(n,[o])):r>=a.length?(o=new rf(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kb(s,e,t){let i=new bh;const n=new ce,r=new ce,a=new at,o=new V0({depthPacking:rd}),l=new G0,c={},h=t.maxTextureSize,d={[Ii]:Zt,[Zt]:Ii,[gi]:gi},u=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Yb,fragmentShader:Zb}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Jt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ht(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let f=this.type;this.render=function(T,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=s.getRenderTarget(),b=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),I=s.state;I.setBlending(jt),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const D=f!==Ui&&this.type===Ui,O=f===Ui&&this.type!==Ui;for(let B=0,z=T.length;B<z;B++){const X=T[B],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);const W=G.getFrameExtents();if(n.multiply(W),r.copy(G.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/W.x),n.x=r.x*W.x,G.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/W.y),n.y=r.y*W.y,G.mapSize.y=r.y)),G.map===null||D===!0||O===!0){const _e=this.type!==Ui?{minFilter:Ot,magFilter:Ot}:{};G.map!==null&&G.map.dispose(),G.map=new ni(n.x,n.y,_e),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const de=G.getViewportCount();for(let _e=0;_e<de;_e++){const re=G.getViewport(_e);a.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),I.viewport(a),G.updateMatrices(X,_e),i=G.getFrustum(),_(E,P,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===Ui&&x(G,P),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,b,L)};function x(T,E){const P=e.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ni(n.x,n.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(E,null,P,u,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(E,null,P,p,v,null)}function y(T,E,P,M){let b=null;const L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)b=L;else if(b=P.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const I=b.uuid,D=E.uuid;let O=c[I];O===void 0&&(O={},c[I]=O);let B=O[D];B===void 0&&(B=b.clone(),O[D]=B,E.addEventListener("dispose",R)),b=B}if(b.visible=E.visible,b.wireframe=E.wireframe,M===Ui?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:d[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const I=s.properties.get(b);I.light=P}return b}function _(T,E,P,M,b){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Ui)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const I=e.update(T),D=T.material;if(Array.isArray(D)){const O=I.groups;for(let B=0,z=O.length;B<z;B++){const X=O[B],G=D[X.materialIndex];if(G&&G.visible){const W=y(T,G,M,b);T.onBeforeShadow(s,T,E,P,I,W,X),s.renderBufferDirect(P,null,I,W,T,X),T.onAfterShadow(s,T,E,P,I,W,X)}}}else if(D.visible){const O=y(T,D,M,b);T.onBeforeShadow(s,T,E,P,I,O,null),s.renderBufferDirect(P,null,I,O,T,null),T.onAfterShadow(s,T,E,P,I,O,null)}}const L=T.children;for(let I=0,D=L.length;I<D;I++)_(L[I],E,P,M,b)}function R(T){T.target.removeEventListener("dispose",R);for(const E in c){const P=c[E],M=T.target.uuid;M in P&&(P[M].dispose(),delete P[M])}}}const Jb={[Ha]:Va,[Ga]:qa,[Wa]:Xa,[Hs]:ja,[Va]:Ha,[qa]:Ga,[Xa]:Wa,[ja]:Hs};function $b(s,e){function t(){let F=!1;const ge=new at;let ee=null;const Ie=new at(0,0,0,0);return{setMask:function(le){ee!==le&&!F&&(s.colorMask(le,le,le,le),ee=le)},setLocked:function(le){F=le},setClear:function(le,Q,De,Ve,Bt){Bt===!0&&(le*=Ve,Q*=Ve,De*=Ve),ge.set(le,Q,De,Ve),Ie.equals(ge)===!1&&(s.clearColor(le,Q,De,Ve),Ie.copy(ge))},reset:function(){F=!1,ee=null,Ie.set(-1,0,0,0)}}}function i(){let F=!1,ge=!1,ee=null,Ie=null,le=null;return{setReversed:function(Q){if(ge!==Q){const De=e.get("EXT_clip_control");Q?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),ge=Q;const Ve=le;le=null,this.setClear(Ve)}},getReversed:function(){return ge},setTest:function(Q){Q?oe(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(Q){ee!==Q&&!F&&(s.depthMask(Q),ee=Q)},setFunc:function(Q){if(ge&&(Q=Jb[Q]),Ie!==Q){switch(Q){case Ha:s.depthFunc(s.NEVER);break;case Va:s.depthFunc(s.ALWAYS);break;case Ga:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case Wa:s.depthFunc(s.EQUAL);break;case ja:s.depthFunc(s.GEQUAL);break;case qa:s.depthFunc(s.GREATER);break;case Xa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=Q}},setLocked:function(Q){F=Q},setClear:function(Q){le!==Q&&(ge&&(Q=1-Q),s.clearDepth(Q),le=Q)},reset:function(){F=!1,ee=null,Ie=null,le=null,ge=!1}}}function n(){let F=!1,ge=null,ee=null,Ie=null,le=null,Q=null,De=null,Ve=null,Bt=null;return{setTest:function(ht){F||(ht?oe(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(ht){ge!==ht&&!F&&(s.stencilMask(ht),ge=ht)},setFunc:function(ht,Pi,ws){(ee!==ht||Ie!==Pi||le!==ws)&&(s.stencilFunc(ht,Pi,ws),ee=ht,Ie=Pi,le=ws)},setOp:function(ht,Pi,ws){(Q!==ht||De!==Pi||Ve!==ws)&&(s.stencilOp(ht,Pi,ws),Q=ht,De=Pi,Ve=ws)},setLocked:function(ht){F=ht},setClear:function(ht){Bt!==ht&&(s.clearStencil(ht),Bt=ht)},reset:function(){F=!1,ge=null,ee=null,Ie=null,le=null,Q=null,De=null,Ve=null,Bt=null}}}const r=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,v=!1,m=null,f=null,x=null,y=null,_=null,R=null,T=null,E=new ze(0,0,0),P=0,M=!1,b=null,L=null,I=null,D=null,O=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,X=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=X>=1):G.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=X>=2);let W=null,de={};const _e=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Ze=new at().fromArray(_e),Y=new at().fromArray(re);function ae(F,ge,ee,Ie){const le=new Uint8Array(4),Q=s.createTexture();s.bindTexture(F,Q),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let De=0;De<ee;De++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ge,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,le):s.texImage2D(ge+De,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,le);return Q}const ye={};ye[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(s.DEPTH_TEST),a.setFunc(Hs),he(!1),Se(dc),oe(s.CULL_FACE),C(jt);function oe(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function Me(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Oe(F,ge){return d[F]!==ge?(s.bindFramebuffer(F,ge),d[F]=ge,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ge),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ge),!0):!1}function Be(F,ge){let ee=p,Ie=!1;if(F){ee=u.get(ge),ee===void 0&&(ee=[],u.set(ge,ee));const le=F.textures;if(ee.length!==le.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let Q=0,De=le.length;Q<De;Q++)ee[Q]=s.COLOR_ATTACHMENT0+Q;ee.length=le.length,Ie=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(ee)}function Qe(F){return g!==F?(s.useProgram(F),g=F,!0):!1}const $={[Oi]:s.FUNC_ADD,[Bu]:s.FUNC_SUBTRACT,[ku]:s.FUNC_REVERSE_SUBTRACT};$[Hu]=s.MIN,$[Vu]=s.MAX;const ue={[za]:s.ZERO,[Gu]:s.ONE,[Wu]:s.SRC_COLOR,[Ba]:s.SRC_ALPHA,[Yu]:s.SRC_ALPHA_SATURATE,[_c]:s.DST_COLOR,[xc]:s.DST_ALPHA,[ju]:s.ONE_MINUS_SRC_COLOR,[ka]:s.ONE_MINUS_SRC_ALPHA,[Xu]:s.ONE_MINUS_DST_COLOR,[qu]:s.ONE_MINUS_DST_ALPHA,[Zu]:s.CONSTANT_COLOR,[Ku]:s.ONE_MINUS_CONSTANT_COLOR,[Ju]:s.CONSTANT_ALPHA,[$u]:s.ONE_MINUS_CONSTANT_ALPHA};function C(F,ge,ee,Ie,le,Q,De,Ve,Bt,ht){if(F===jt){v===!0&&(Me(s.BLEND),v=!1);return}if(v===!1&&(oe(s.BLEND),v=!0),F!==vc){if(F!==m||ht!==M){if((f!==Oi||_!==Oi)&&(s.blendEquation(s.FUNC_ADD),f=Oi,_=Oi),ht)switch(F){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fa:s.blendFunc(s.ONE,s.ONE);break;case mc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case mc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,y=null,R=null,T=null,E.set(0,0,0),P=0,m=F,M=ht}return}le=le||ge,Q=Q||ee,De=De||Ie,(ge!==f||le!==_)&&(s.blendEquationSeparate($[ge],$[le]),f=ge,_=le),(ee!==x||Ie!==y||Q!==R||De!==T)&&(s.blendFuncSeparate(ue[ee],ue[Ie],ue[Q],ue[De]),x=ee,y=Ie,R=Q,T=De),(Ve.equals(E)===!1||Bt!==P)&&(s.blendColor(Ve.r,Ve.g,Ve.b,Bt),E.copy(Ve),P=Bt),m=F,M=!1}function xe(F,ge){F.side===gi?Me(s.CULL_FACE):oe(s.CULL_FACE);let ee=F.side===Zt;ge&&(ee=!ee),he(ee),F.blending===ks&&F.transparent===!1?C(jt):C(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const Ie=F.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Le(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function he(F){b!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),b=F)}function Se(F){F!==Fu?(oe(s.CULL_FACE),F!==L&&(F===dc?s.cullFace(s.BACK):F===zu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),L=F}function ie(F){F!==I&&(z&&s.lineWidth(F),I=F)}function Le(F,ge,ee){F?(oe(s.POLYGON_OFFSET_FILL),(D!==ge||O!==ee)&&(s.polygonOffset(ge,ee),D=ge,O=ee)):Me(s.POLYGON_OFFSET_FILL)}function me(F){F?oe(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function Ae(F){F===void 0&&(F=s.TEXTURE0+B-1),W!==F&&(s.activeTexture(F),W=F)}function it(F,ge,ee){ee===void 0&&(W===null?ee=s.TEXTURE0+B-1:ee=W);let Ie=de[ee];Ie===void 0&&(Ie={type:void 0,texture:void 0},de[ee]=Ie),(Ie.type!==F||Ie.texture!==ge)&&(W!==ee&&(s.activeTexture(ee),W=ee),s.bindTexture(F,ge||ye[F]),Ie.type=F,Ie.texture=ge)}function N(){const F=de[W];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{s.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{s.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{s.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{s.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{s.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{s.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{s.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{s.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{s.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(F){Ze.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Ze.copy(F))}function Ye(F){Y.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function Fe(F,ge){let ee=c.get(ge);ee===void 0&&(ee=new WeakMap,c.set(ge,ee));let Ie=ee.get(F);Ie===void 0&&(Ie=s.getUniformBlockIndex(ge,F.name),ee.set(F,Ie))}function fe(F,ge){const ee=c.get(ge).get(F);l.get(ge)!==ee&&(s.uniformBlockBinding(ge,ee,F.__bindingPointIndex),l.set(ge,ee))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},W=null,de={},d={},u=new WeakMap,p=[],g=null,v=!1,m=null,f=null,x=null,y=null,_=null,R=null,T=null,E=new ze(0,0,0),P=0,M=!1,b=null,L=null,I=null,D=null,O=null,Ze.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:Me,bindFramebuffer:Oe,drawBuffers:Be,useProgram:Qe,setBlending:C,setMaterial:xe,setFlipSided:he,setCullFace:Se,setLineWidth:ie,setPolygonOffset:Le,setScissorTest:me,activeTexture:Ae,bindTexture:it,unbindTexture:N,compressedTexImage2D:w,compressedTexImage3D:V,texImage2D:Te,texImage3D:te,updateUBOMapping:Fe,uniformBlockBinding:fe,texStorage2D:pe,texStorage3D:Ee,texSubImage2D:Z,texSubImage3D:J,compressedTexSubImage2D:K,compressedTexSubImage3D:Ne,scissor:we,viewport:Ye,reset:Ge}}function Qb(s,e,t,i,n,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,w){return p?new OffscreenCanvas(N,w):kr("canvas")}function v(N,w,V){let Z=1;const J=it(N);if((J.width>V||J.height>V)&&(Z=V/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const K=Math.floor(Z*J.width),Ne=Math.floor(Z*J.height);d===void 0&&(d=g(K,Ne));const pe=w?g(K,Ne):d;return pe.width=K,pe.height=Ne,pe.getContext("2d").drawImage(N,0,0,K,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+Ne+")."),pe}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),N;return N}function m(N){return N.generateMipmaps}function f(N){s.generateMipmap(N)}function x(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(N,w,V,Z,J=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let K=w;if(w===s.RED&&(V===s.FLOAT&&(K=s.R32F),V===s.HALF_FLOAT&&(K=s.R16F),V===s.UNSIGNED_BYTE&&(K=s.R8)),w===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(K=s.R8UI),V===s.UNSIGNED_SHORT&&(K=s.R16UI),V===s.UNSIGNED_INT&&(K=s.R32UI),V===s.BYTE&&(K=s.R8I),V===s.SHORT&&(K=s.R16I),V===s.INT&&(K=s.R32I)),w===s.RG&&(V===s.FLOAT&&(K=s.RG32F),V===s.HALF_FLOAT&&(K=s.RG16F),V===s.UNSIGNED_BYTE&&(K=s.RG8)),w===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(K=s.RG8UI),V===s.UNSIGNED_SHORT&&(K=s.RG16UI),V===s.UNSIGNED_INT&&(K=s.RG32UI),V===s.BYTE&&(K=s.RG8I),V===s.SHORT&&(K=s.RG16I),V===s.INT&&(K=s.RG32I)),w===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(K=s.RGB8UI),V===s.UNSIGNED_SHORT&&(K=s.RGB16UI),V===s.UNSIGNED_INT&&(K=s.RGB32UI),V===s.BYTE&&(K=s.RGB8I),V===s.SHORT&&(K=s.RGB16I),V===s.INT&&(K=s.RGB32I)),w===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),V===s.UNSIGNED_INT&&(K=s.RGBA32UI),V===s.BYTE&&(K=s.RGBA8I),V===s.SHORT&&(K=s.RGBA16I),V===s.INT&&(K=s.RGBA32I)),w===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),w===s.RGBA){const Ne=J?Or:st.getTransfer(Z);V===s.FLOAT&&(K=s.RGBA32F),V===s.HALF_FLOAT&&(K=s.RGBA16F),V===s.UNSIGNED_BYTE&&(K=Ne===ot?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(N,w){let V;return N?w===null||w===Es||w===Ws?V=s.DEPTH24_STENCIL8:w===qt?V=s.DEPTH32F_STENCIL8:w===Pn&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Es||w===Ws?V=s.DEPTH_COMPONENT24:w===qt?V=s.DEPTH_COMPONENT32F:w===Pn&&(V=s.DEPTH_COMPONENT16),V}function R(N,w){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ot&&N.minFilter!==Rt?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function T(N){const w=N.target;w.removeEventListener("dispose",T),P(w),w.isVideoTexture&&h.delete(w)}function E(N){const w=N.target;w.removeEventListener("dispose",E),b(w)}function P(N){const w=i.get(N);if(w.__webglInit===void 0)return;const V=N.source,Z=u.get(V);if(Z){const J=Z[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(N),Object.keys(Z).length===0&&u.delete(V)}i.remove(N)}function M(N){const w=i.get(N);s.deleteTexture(w.__webglTexture);const V=N.source,Z=u.get(V);delete Z[w.__cacheKey],a.memory.textures--}function b(N){const w=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let J=0;J<w.__webglFramebuffer[Z].length;J++)s.deleteFramebuffer(w.__webglFramebuffer[Z][J]);else s.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)s.deleteFramebuffer(w.__webglFramebuffer[Z]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const V=N.textures;for(let Z=0,J=V.length;Z<J;Z++){const K=i.get(V[Z]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(V[Z])}i.remove(N)}let L=0;function I(){L=0}function D(){const N=L;return N>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+n.maxTextures),L+=1,N}function O(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function B(N,w){const V=i.get(N);if(N.isVideoTexture&&me(N),N.isRenderTargetTexture===!1&&N.version>0&&V.__version!==N.version){const Z=N.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(V,N,w);return}}t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+w)}function z(N,w){const V=i.get(N);if(N.version>0&&V.__version!==N.version){ye(V,N,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+w)}function X(N,w){const V=i.get(N);if(N.version>0&&V.__version!==N.version){ye(V,N,w);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+w)}function G(N,w){const V=i.get(N);if(N.version>0&&V.__version!==N.version){oe(V,N,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+w)}const W={[$i]:s.REPEAT,[vi]:s.CLAMP_TO_EDGE,[Rr]:s.MIRRORED_REPEAT},de={[Ot]:s.NEAREST,[Cc]:s.NEAREST_MIPMAP_NEAREST,[Cn]:s.NEAREST_MIPMAP_LINEAR,[Rt]:s.LINEAR,[Cr]:s.LINEAR_MIPMAP_NEAREST,[xi]:s.LINEAR_MIPMAP_LINEAR},_e={[od]:s.NEVER,[pd]:s.ALWAYS,[ld]:s.LESS,[Vc]:s.LEQUAL,[cd]:s.EQUAL,[dd]:s.GEQUAL,[hd]:s.GREATER,[ud]:s.NOTEQUAL};function re(N,w){if(w.type===qt&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Rt||w.magFilter===Cr||w.magFilter===Cn||w.magFilter===xi||w.minFilter===Rt||w.minFilter===Cr||w.minFilter===Cn||w.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,W[w.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,W[w.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,W[w.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,de[w.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,de[w.minFilter]),w.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,_e[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ot||w.minFilter!==Cn&&w.minFilter!==xi||w.type===qt&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ze(N,w){let V=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",T));const Z=w.source;let J=u.get(Z);J===void 0&&(J={},u.set(Z,J));const K=O(w);if(K!==N.__cacheKey){J[K]===void 0&&(J[K]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),J[K].usedTimes++;const Ne=J[N.__cacheKey];Ne!==void 0&&(J[N.__cacheKey].usedTimes--,Ne.usedTimes===0&&M(w)),N.__cacheKey=K,N.__webglTexture=J[K].texture}return V}function Y(N,w,V){return Math.floor(Math.floor(N/V)/w)}function ae(N,w,V,Z){const J=N.updateRanges;if(J.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,V,Z,w.data);else{J.sort((Te,te)=>Te.start-te.start);let K=0;for(let Te=1;Te<J.length;Te++){const te=J[K],we=J[Te],Ye=te.start+te.count,Fe=Y(we.start,w.width,4),fe=Y(te.start,w.width,4);we.start<=Ye+1&&Fe===fe&&Y(we.start+we.count-1,w.width,4)===Fe?te.count=Math.max(te.count,we.start+we.count-te.start):(++K,J[K]=we)}J.length=K+1;const Ne=s.getParameter(s.UNPACK_ROW_LENGTH),pe=s.getParameter(s.UNPACK_SKIP_PIXELS),Ee=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Te=0,te=J.length;Te<te;Te++){const we=J[Te],Ye=Math.floor(we.start/4),Fe=Math.ceil(we.count/4),fe=Ye%w.width,Ge=Math.floor(Ye/w.width),F=Fe;s.pixelStorei(s.UNPACK_SKIP_PIXELS,fe),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(s.TEXTURE_2D,0,fe,Ge,F,1,V,Z,w.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ne),s.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ee)}}function ye(N,w,V){let Z=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=s.TEXTURE_3D);const J=Ze(N,w),K=w.source;t.bindTexture(Z,N.__webglTexture,s.TEXTURE0+V);const Ne=i.get(K);if(K.version!==Ne.__version||J===!0){t.activeTexture(s.TEXTURE0+V);const pe=st.getPrimaries(st.workingColorSpace),Ee=w.colorSpace===Qi?null:st.getPrimaries(w.colorSpace),Te=w.colorSpace===Qi||pe===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let te=v(w.image,!1,n.maxTextureSize);te=Ae(w,te);const we=r.convert(w.format,w.colorSpace),Ye=r.convert(w.type);let Fe=y(w.internalFormat,we,Ye,w.colorSpace,w.isVideoTexture);re(Z,w);let fe;const Ge=w.mipmaps,F=w.isVideoTexture!==!0,ge=Ne.__version===void 0||J===!0,ee=K.dataReady,Ie=R(w,te);if(w.isDepthTexture)Fe=_(w.format===js,w.type),ge&&(F?t.texStorage2D(s.TEXTURE_2D,1,Fe,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Fe,te.width,te.height,0,we,Ye,null));else if(w.isDataTexture)if(Ge.length>0){F&&ge&&t.texStorage2D(s.TEXTURE_2D,Ie,Fe,Ge[0].width,Ge[0].height);for(let le=0,Q=Ge.length;le<Q;le++)fe=Ge[le],F?ee&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,fe.width,fe.height,we,Ye,fe.data):t.texImage2D(s.TEXTURE_2D,le,Fe,fe.width,fe.height,0,we,Ye,fe.data);w.generateMipmaps=!1}else F?(ge&&t.texStorage2D(s.TEXTURE_2D,Ie,Fe,te.width,te.height),ee&&ae(w,te,we,Ye)):t.texImage2D(s.TEXTURE_2D,0,Fe,te.width,te.height,0,we,Ye,te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){F&&ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Fe,Ge[0].width,Ge[0].height,te.depth);for(let le=0,Q=Ge.length;le<Q;le++)if(fe=Ge[le],w.format!==si)if(we!==null)if(F){if(ee)if(w.layerUpdates.size>0){const De=Cp(fe.width,fe.height,w.format,w.type);for(const Ve of w.layerUpdates){const Bt=fe.data.subarray(Ve*De/fe.data.BYTES_PER_ELEMENT,(Ve+1)*De/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,Ve,fe.width,fe.height,1,we,Bt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,fe.width,fe.height,te.depth,we,fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,le,Fe,fe.width,fe.height,te.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ee&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,fe.width,fe.height,te.depth,we,Ye,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,le,Fe,fe.width,fe.height,te.depth,0,we,Ye,fe.data)}else{F&&ge&&t.texStorage2D(s.TEXTURE_2D,Ie,Fe,Ge[0].width,Ge[0].height);for(let le=0,Q=Ge.length;le<Q;le++)fe=Ge[le],w.format!==si?we!==null?F?ee&&t.compressedTexSubImage2D(s.TEXTURE_2D,le,0,0,fe.width,fe.height,we,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,le,Fe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ee&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,fe.width,fe.height,we,Ye,fe.data):t.texImage2D(s.TEXTURE_2D,le,Fe,fe.width,fe.height,0,we,Ye,fe.data)}else if(w.isDataArrayTexture)if(F){if(ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Fe,te.width,te.height,te.depth),ee)if(w.layerUpdates.size>0){const le=Cp(te.width,te.height,w.format,w.type);for(const Q of w.layerUpdates){const De=te.data.subarray(Q*le/te.data.BYTES_PER_ELEMENT,(Q+1)*le/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,te.width,te.height,1,we,Ye,De)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,we,Ye,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,te.width,te.height,te.depth,0,we,Ye,te.data);else if(w.isData3DTexture)F?(ge&&t.texStorage3D(s.TEXTURE_3D,Ie,Fe,te.width,te.height,te.depth),ee&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,we,Ye,te.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,te.width,te.height,te.depth,0,we,Ye,te.data);else if(w.isFramebufferTexture){if(ge)if(F)t.texStorage2D(s.TEXTURE_2D,Ie,Fe,te.width,te.height);else{let le=te.width,Q=te.height;for(let De=0;De<Ie;De++)t.texImage2D(s.TEXTURE_2D,De,Fe,le,Q,0,we,Ye,null),le>>=1,Q>>=1}}else if(Ge.length>0){if(F&&ge){const le=it(Ge[0]);t.texStorage2D(s.TEXTURE_2D,Ie,Fe,le.width,le.height)}for(let le=0,Q=Ge.length;le<Q;le++)fe=Ge[le],F?ee&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,we,Ye,fe):t.texImage2D(s.TEXTURE_2D,le,Fe,we,Ye,fe);w.generateMipmaps=!1}else if(F){if(ge){const le=it(te);t.texStorage2D(s.TEXTURE_2D,Ie,Fe,le.width,le.height)}ee&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we,Ye,te)}else t.texImage2D(s.TEXTURE_2D,0,Fe,we,Ye,te);m(w)&&f(Z),Ne.__version=K.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function oe(N,w,V){if(w.image.length!==6)return;const Z=Ze(N,w),J=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+V);const K=i.get(J);if(J.version!==K.__version||Z===!0){t.activeTexture(s.TEXTURE0+V);const Ne=st.getPrimaries(st.workingColorSpace),pe=w.colorSpace===Qi?null:st.getPrimaries(w.colorSpace),Ee=w.colorSpace===Qi||Ne===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Te=w.isCompressedTexture||w.image[0].isCompressedTexture,te=w.image[0]&&w.image[0].isDataTexture,we=[];for(let Q=0;Q<6;Q++)!Te&&!te?we[Q]=v(w.image[Q],!0,n.maxCubemapSize):we[Q]=te?w.image[Q].image:w.image[Q],we[Q]=Ae(w,we[Q]);const Ye=we[0],Fe=r.convert(w.format,w.colorSpace),fe=r.convert(w.type),Ge=y(w.internalFormat,Fe,fe,w.colorSpace),F=w.isVideoTexture!==!0,ge=K.__version===void 0||Z===!0,ee=J.dataReady;let Ie=R(w,Ye);re(s.TEXTURE_CUBE_MAP,w);let le;if(Te){F&&ge&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,Ge,Ye.width,Ye.height);for(let Q=0;Q<6;Q++){le=we[Q].mipmaps;for(let De=0;De<le.length;De++){const Ve=le[De];w.format!==si?Fe!==null?F?ee&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,De,0,0,Ve.width,Ve.height,Fe,Ve.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,De,Ge,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,De,0,0,Ve.width,Ve.height,Fe,fe,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,De,Ge,Ve.width,Ve.height,0,Fe,fe,Ve.data)}}}else{if(le=w.mipmaps,F&&ge){le.length>0&&Ie++;const Q=it(we[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,Ge,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(te){F?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,we[Q].width,we[Q].height,Fe,fe,we[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,we[Q].width,we[Q].height,0,Fe,fe,we[Q].data);for(let De=0;De<le.length;De++){const Ve=le[De].image[Q].image;F?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,De+1,0,0,Ve.width,Ve.height,Fe,fe,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,De+1,Ge,Ve.width,Ve.height,0,Fe,fe,Ve.data)}}else{F?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Fe,fe,we[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,Fe,fe,we[Q]);for(let De=0;De<le.length;De++){const Ve=le[De];F?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,De+1,0,0,Fe,fe,Ve.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,De+1,Ge,Fe,fe,Ve.image[Q])}}}m(w)&&f(s.TEXTURE_CUBE_MAP),K.__version=J.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function Me(N,w,V,Z,J,K){const Ne=r.convert(V.format,V.colorSpace),pe=r.convert(V.type),Ee=y(V.internalFormat,Ne,pe,V.colorSpace),Te=i.get(w),te=i.get(V);if(te.__renderTarget=w,!Te.__hasExternalTextures){const we=Math.max(1,w.width>>K),Ye=Math.max(1,w.height>>K);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,K,Ee,we,Ye,w.depth,0,Ne,pe,null):t.texImage2D(J,K,Ee,we,Ye,0,Ne,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),Le(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,J,te.__webglTexture,0,ie(w)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,J,te.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(N,w,V){if(s.bindRenderbuffer(s.RENDERBUFFER,N),w.depthBuffer){const Z=w.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,K=_(w.stencilBuffer,J),Ne=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=ie(w);Le(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,K,w.width,w.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,K,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,K,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ne,s.RENDERBUFFER,N)}else{const Z=w.textures;for(let J=0;J<Z.length;J++){const K=Z[J],Ne=r.convert(K.format,K.colorSpace),pe=r.convert(K.type),Ee=y(K.internalFormat,Ne,pe,K.colorSpace),Te=ie(w);V&&Le(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,Ee,w.width,w.height):Le(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,Ee,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Be(N,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(w.depthTexture);V.__renderTarget=w,(!V.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),B(w.depthTexture,0);const Z=V.__webglTexture,J=ie(w);if(w.depthTexture.format===Ln)Le(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(w.depthTexture.format===js)Le(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Qe(N){const w=i.get(N),V=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){const Z=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){const J=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),w.__depthDisposeCallback=J}w.__boundDepthTexture=Z}if(N.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const Z=N.texture.mipmaps;Z&&Z.length>0?Be(w.__webglFramebuffer[0],N):Be(w.__webglFramebuffer,N)}else if(V){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=s.createRenderbuffer(),Oe(w.__webglDepthbuffer[Z],N,!1);else{const J=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,K)}}else{const Z=N.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Oe(w.__webglDepthbuffer,N,!1);else{const J=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,K)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function $(N,w,V){const Z=i.get(N);w!==void 0&&Me(Z.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Qe(N)}function ue(N){const w=N.texture,V=i.get(N),Z=i.get(w);N.addEventListener("dispose",E);const J=N.textures,K=N.isWebGLCubeRenderTarget===!0,Ne=J.length>1;if(Ne||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=w.version,a.memory.textures++),K){V.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[pe]=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)V.__webglFramebuffer[pe][Ee]=s.createFramebuffer()}else V.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)V.__webglFramebuffer[pe]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Ne)for(let pe=0,Ee=J.length;pe<Ee;pe++){const Te=i.get(J[pe]);Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture(),a.memory.textures++)}if(N.samples>0&&Le(N)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pe=0;pe<J.length;pe++){const Ee=J[pe];V.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[pe]);const Te=r.convert(Ee.format,Ee.colorSpace),te=r.convert(Ee.type),we=y(Ee.internalFormat,Te,te,Ee.colorSpace,N.isXRRenderTarget===!0),Ye=ie(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,we,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,V.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Oe(V.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),re(s.TEXTURE_CUBE_MAP,w);for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)Me(V.__webglFramebuffer[pe][Ee],N,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee);else Me(V.__webglFramebuffer[pe],N,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(w)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let pe=0,Ee=J.length;pe<Ee;pe++){const Te=J[pe],te=i.get(Te);t.bindTexture(s.TEXTURE_2D,te.__webglTexture),re(s.TEXTURE_2D,Te),Me(V.__webglFramebuffer,N,Te,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,0),m(Te)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(pe=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,Z.__webglTexture),re(pe,w),w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)Me(V.__webglFramebuffer[Ee],N,w,s.COLOR_ATTACHMENT0,pe,Ee);else Me(V.__webglFramebuffer,N,w,s.COLOR_ATTACHMENT0,pe,0);m(w)&&f(pe),t.unbindTexture()}N.depthBuffer&&Qe(N)}function C(N){const w=N.textures;for(let V=0,Z=w.length;V<Z;V++){const J=w[V];if(m(J)){const K=x(N),Ne=i.get(J).__webglTexture;t.bindTexture(K,Ne),f(K),t.unbindTexture()}}}const xe=[],he=[];function Se(N){if(N.samples>0){if(Le(N)===!1){const w=N.textures,V=N.width,Z=N.height;let J=s.COLOR_BUFFER_BIT;const K=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=i.get(N),pe=w.length>1;if(pe)for(let Te=0;Te<w.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const Ee=N.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Te=0;Te<w.length;Te++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[Te]);const te=i.get(w[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,V,Z,0,0,V,Z,J,s.NEAREST),l===!0&&(xe.length=0,he.length=0,xe.push(s.COLOR_ATTACHMENT0+Te),N.depthBuffer&&N.resolveDepthBuffer===!1&&(xe.push(K),he.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,he)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Te=0;Te<w.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[Te]);const te=i.get(w[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const w=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function ie(N){return Math.min(n.maxSamples,N.samples)}function Le(N){const w=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function me(N){const w=a.render.frame;h.get(N)!==w&&(h.set(N,w),N.update())}function Ae(N,w){const V=N.colorSpace,Z=N.format,J=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||V!==kt&&V!==Qi&&(st.getTransfer(V)===ot?(Z!==si||J!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function it(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=X,this.setTextureCube=G,this.rebindTextures=$,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Le}function eM(s,e){function t(i,n=Qi){let r;const a=st.getTransfer(n);if(i===_i)return s.UNSIGNED_BYTE;if(i===Ja)return s.UNSIGNED_SHORT_4_4_4_4;if(i===$a)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Nc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Pc)return s.BYTE;if(i===Lc)return s.SHORT;if(i===Pn)return s.UNSIGNED_SHORT;if(i===Ka)return s.INT;if(i===Es)return s.UNSIGNED_INT;if(i===qt)return s.FLOAT;if(i===Vt)return s.HALF_FLOAT;if(i===Dc)return s.ALPHA;if(i===Uc)return s.RGB;if(i===si)return s.RGBA;if(i===Ln)return s.DEPTH_COMPONENT;if(i===js)return s.DEPTH_STENCIL;if(i===Pr)return s.RED;if(i===Qa)return s.RED_INTEGER;if(i===Ic)return s.RG;if(i===eo)return s.RG_INTEGER;if(i===to)return s.RGBA_INTEGER;if(i===Lr||i===Nr||i===Dr||i===Ur)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===io||i===so||i===no||i===ro)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===so)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===no)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ao||i===oo||i===lo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ao||i===oo)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===lo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===co||i===ho||i===uo||i===po||i===fo||i===mo||i===go||i===vo||i===xo||i===_o||i===yo||i===bo||i===Mo||i===wo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===co)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ho)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===po)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===go)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_o)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ir||i===So||i===Eo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ir)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===So)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Oc||i===To||i===Ao||i===Ro)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ir)return r.COMPRESSED_RED_RGTC1_EXT;if(i===To)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const tM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Ft,r=e.properties.get(n);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Pt({vertexShader:tM,fragmentShader:iM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new hl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nM extends Un{constructor(e,t){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const v=new sM,m=t.getContextAttributes();let f=null,x=null;const y=[],_=[],R=new ce;let T=null;const E=new ti;E.viewport=new at;const P=new ti;P.viewport=new at;const M=[E,P],b=new hv;let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ae=y[Y];return ae===void 0&&(ae=new fh,y[Y]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Y){let ae=y[Y];return ae===void 0&&(ae=new fh,y[Y]=ae),ae.getGripSpace()},this.getHand=function(Y){let ae=y[Y];return ae===void 0&&(ae=new fh,y[Y]=ae),ae.getHandSpace()};function D(Y){const ae=_.indexOf(Y.inputSource);if(ae===-1)return;const ye=y[ae];ye!==void 0&&(ye.update(Y.inputSource,Y.frame,c||a),ye.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){n.removeEventListener("select",D),n.removeEventListener("selectstart",D),n.removeEventListener("selectend",D),n.removeEventListener("squeeze",D),n.removeEventListener("squeezestart",D),n.removeEventListener("squeezeend",D),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",B);for(let Y=0;Y<y.length;Y++){const ae=_[Y];ae!==null&&(_[Y]=null,y[Y].disconnect(ae))}L=null,I=null,v.reset(),e.setRenderTarget(f),p=null,u=null,d=null,n=null,x=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",D),n.addEventListener("selectstart",D),n.addEventListener("selectend",D),n.addEventListener("squeeze",D),n.addEventListener("squeezestart",D),n.addEventListener("squeezeend",D),n.addEventListener("end",O),n.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,ye=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?js:Ln,ye=m.stencil?Ws:Es);const Me={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(Me),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new ni(u.textureWidth,u.textureHeight,{format:si,type:_i,depthTexture:new Th(u.textureWidth,u.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,t,ae),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ni(p.framebufferWidth,p.framebufferHeight,{format:si,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Ze.setContext(n),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function B(Y){for(let ae=0;ae<Y.removed.length;ae++){const ye=Y.removed[ae],oe=_.indexOf(ye);oe>=0&&(_[oe]=null,y[oe].disconnect(ye))}for(let ae=0;ae<Y.added.length;ae++){const ye=Y.added[ae];let oe=_.indexOf(ye);if(oe===-1){for(let Oe=0;Oe<y.length;Oe++)if(Oe>=_.length){_.push(ye),oe=Oe;break}else if(_[Oe]===null){_[Oe]=ye,oe=Oe;break}if(oe===-1)break}const Me=y[oe];Me&&Me.connect(ye)}}const z=new U,X=new U;function G(Y,ae,ye){z.setFromMatrixPosition(ae.matrixWorld),X.setFromMatrixPosition(ye.matrixWorld);const oe=z.distanceTo(X),Me=ae.projectionMatrix.elements,Oe=ye.projectionMatrix.elements,Be=Me[14]/(Me[10]-1),Qe=Me[14]/(Me[10]+1),$=(Me[9]+1)/Me[5],ue=(Me[9]-1)/Me[5],C=(Me[8]-1)/Me[0],xe=(Oe[8]+1)/Oe[0],he=Be*C,Se=Be*xe,ie=oe/(-C+xe),Le=ie*-C;if(ae.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Le),Y.translateZ(ie),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Me[10]===-1)Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const me=Be+ie,Ae=Qe+ie,it=he-Le,N=Se+(oe-Le),w=$*Qe/Ae*me,V=ue*Qe/Ae*me;Y.projectionMatrix.makePerspective(it,N,w,V,me,Ae),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function W(Y,ae){ae===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ae.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let ae=Y.near,ye=Y.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(ye=v.depthFar)),b.near=P.near=E.near=ae,b.far=P.far=E.far=ye,(L!==b.near||I!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,I=b.far),E.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,b.layers.mask=E.layers.mask|P.layers.mask;const oe=Y.parent,Me=b.cameras;W(b,oe);for(let Oe=0;Oe<Me.length;Oe++)W(Me[Oe],oe);Me.length===2?G(b,E,P):b.projectionMatrix.copy(E.projectionMatrix),de(Y,b,oe)};function de(Y,ae,ye){ye===null?Y.matrix.copy(ae.matrixWorld):(Y.matrix.copy(ye.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ae.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=In*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let _e=null;function re(Y,ae){if(h=ae.getViewerPose(c||a),g=ae,h!==null){const ye=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let oe=!1;ye.length!==b.cameras.length&&(b.cameras.length=0,oe=!0);for(let Oe=0;Oe<ye.length;Oe++){const Be=ye[Oe];let Qe=null;if(p!==null)Qe=p.getViewport(Be);else{const ue=d.getViewSubImage(u,Be);Qe=ue.viewport,Oe===0&&(e.setRenderTargetTextures(x,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(x))}let $=M[Oe];$===void 0&&($=new ti,$.layers.enable(Oe),$.viewport=new at,M[Oe]=$),$.matrix.fromArray(Be.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Be.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Oe===0&&(b.matrix.copy($.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),oe===!0&&b.cameras.push($)}const Me=n.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&d){const Oe=d.getDepthInformation(ye[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(e,Oe,n.renderState)}}for(let ye=0;ye<y.length;ye++){const oe=_[ye],Me=y[ye];oe!==null&&Me!==void 0&&Me.update(oe,ae,c||a)}_e&&_e(Y,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const Ze=new Pp;Ze.setAnimationLoop(re),this.setAnimationLoop=function(Y){_e=Y},this.dispose=function(){}}}const ln=new Bi,rM=new Xe;function aM(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Od(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,x,y,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Zt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Zt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),y=x.envMap,_=x.envMapRotation;y&&(m.envMap.value=y,ln.copy(_),ln.x*=-1,ln.y*=-1,ln.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ln.y*=-1,ln.z*=-1),m.envMapRotation.value.setFromMatrix4(rM.makeRotationFromEuler(ln)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Zt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function oM(s,e,t,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const _=y.program;i.uniformBlockBinding(x,_)}function c(x,y){let _=n[x.id];_===void 0&&(g(x),_=h(x),n[x.id]=_,x.addEventListener("dispose",m));const R=y.program;i.updateUBOMapping(x,R);const T=e.render.frame;r[x.id]!==T&&(u(x),r[x.id]=T)}function h(x){const y=d();x.__bindingPointIndex=y;const _=s.createBuffer(),R=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,_),_}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const y=n[x.id],_=x.uniforms,R=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let T=0,E=_.length;T<E;T++){const P=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,b=P.length;M<b;M++){const L=P[M];if(p(L,T,M,R)===!0){const I=L.__offset,D=Array.isArray(L.value)?L.value:[L.value];let O=0;for(let B=0;B<D.length;B++){const z=D[B],X=v(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,I+O,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,O),O+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,y,_,R){const T=x.value,E=y+"_"+_;if(R[E]===void 0)return typeof T=="number"||typeof T=="boolean"?R[E]=T:R[E]=T.clone(),!0;{const P=R[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(x){const y=x.uniforms;let _=0;const R=16;for(let E=0,P=y.length;E<P;E++){const M=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,L=M.length;b<L;b++){const I=M[b],D=Array.isArray(I.value)?I.value:[I.value];for(let O=0,B=D.length;O<B;O++){const z=D[O],X=v(z),G=_%R,W=G%X.boundary,de=G+W;_+=W,de!==0&&R-de<X.storage&&(_+=R-de),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=X.storage}}}const T=_%R;return T>0&&(_+=R-T),x.__size=_,x.__cache={},this}function v(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(n[y.id]),delete n[y.id],delete r[y.id]}function f(){for(const x in n)s.deleteBuffer(n[x]);a=[],n={},r={}}return{bind:l,update:c,dispose:f}}class lM{constructor(e={}){const{canvas:t=yg(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let R=!1;this._outputColorSpace=Ct;let T=0,E=0,P=null,M=-1,b=null;const L=new at,I=new at;let D=null;const O=new ze(0);let B=0,z=t.width,X=t.height,G=1,W=null,de=null;const _e=new at(0,0,z,X),re=new at(0,0,z,X);let Ze=!1;const Y=new bh;let ae=!1,ye=!1;const oe=new Xe,Me=new Xe,Oe=new U,Be=new at,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function ue(){return P===null?G:1}let C=i;function xe(A,H){return t.getContext(A,H)}try{const A={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oa}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",Q,!1),C===null){const H="webgl2";if(C=xe(H,A),C===null)throw xe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let he,Se,ie,Le,me,Ae,it,N,w,V,Z,J,K,Ne,pe,Ee,Te,te,we,Ye,Fe,fe,Ge,F;function ge(){he=new xy(C),he.init(),fe=new eM(C,he),Se=new uy(C,he,e,fe),ie=new $b(C,he),Se.reverseDepthBuffer&&u&&ie.buffers.depth.setReversed(!0),Le=new by(C),me=new Bb,Ae=new Qb(C,he,ie,me,Se,fe,Le),it=new py(_),N=new vy(_),w=new Av(C),Ge=new cy(C,w),V=new _y(C,w,Le,Ge),Z=new wy(C,V,w,Le),we=new My(C,Se,Ae),Ee=new dy(me),J=new zb(_,it,N,he,Se,Ge,Ee),K=new aM(_,me),Ne=new Hb,pe=new Xb(he),te=new ly(_,it,N,ie,Z,p,l),Te=new Kb(_,Z,Se),F=new oM(C,Le,Se,ie),Ye=new hy(C,he,Le),Fe=new yy(C,he,Le),Le.programs=J.programs,_.capabilities=Se,_.extensions=he,_.properties=me,_.renderLists=Ne,_.shadowMap=Te,_.state=ie,_.info=Le}ge();const ee=new nM(_,C);this.xr=ee,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const A=he.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=he.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(z,X,!1))},this.getSize=function(A){return A.set(z,X)},this.setSize=function(A,H,j=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,X=H,t.width=Math.floor(A*G),t.height=Math.floor(H*G),j===!0&&(t.style.width=A+"px",t.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(z*G,X*G).floor()},this.setDrawingBufferSize=function(A,H,j){z=A,X=H,G=j,t.width=Math.floor(A*j),t.height=Math.floor(H*j),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(_e)},this.setViewport=function(A,H,j,q){A.isVector4?_e.set(A.x,A.y,A.z,A.w):_e.set(A,H,j,q),ie.viewport(L.copy(_e).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,H,j,q){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,H,j,q),ie.scissor(I.copy(re).multiplyScalar(G).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(A){ie.setScissorTest(Ze=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){de=A},this.getClearColor=function(A){return A.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,j=!0){let q=0;if(A){let k=!1;if(P!==null){const se=P.texture.format;k=se===to||se===eo||se===Qa}if(k){const se=P.texture.type,be=se===_i||se===Es||se===Pn||se===Ws||se===Ja||se===$a,Pe=te.getClearColor(),Ue=te.getClearAlpha(),je=Pe.r,We=Pe.g,qe=Pe.b;be?(g[0]=je,g[1]=We,g[2]=qe,g[3]=Ue,C.clearBufferuiv(C.COLOR,0,g)):(v[0]=je,v[1]=We,v[2]=qe,v[3]=Ue,C.clearBufferiv(C.COLOR,0,v))}else q|=C.COLOR_BUFFER_BIT}H&&(q|=C.DEPTH_BUFFER_BIT),j&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),te.dispose(),Ne.dispose(),pe.dispose(),me.dispose(),it.dispose(),N.dispose(),Z.dispose(),Ge.dispose(),F.dispose(),J.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",qm),ee.removeEventListener("sessionend",Xm),Tn.stop()};function Ie(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const A=Le.autoReset,H=Te.enabled,j=Te.autoUpdate,q=Te.needsUpdate,k=Te.type;ge(),Le.autoReset=A,Te.enabled=H,Te.autoUpdate=j,Te.needsUpdate=q,Te.type=k}function Q(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function De(A){const H=A.target;H.removeEventListener("dispose",De),Ve(H)}function Ve(A){Bt(A),me.remove(A)}function Bt(A){const H=me.get(A).programs;H!==void 0&&(H.forEach(function(j){J.releaseProgram(j)}),A.isShaderMaterial&&J.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,j,q,k,se){H===null&&(H=Qe);const be=k.isMesh&&k.matrixWorld.determinant()<0,Pe=ET(A,H,j,q,k);ie.setMaterial(q,be);let Ue=j.index,je=1;if(q.wireframe===!0){if(Ue=V.getWireframeAttribute(j),Ue===void 0)return;je=2}const We=j.drawRange,qe=j.attributes.position;let nt=We.start*je,dt=(We.start+We.count)*je;se!==null&&(nt=Math.max(nt,se.start*je),dt=Math.min(dt,(se.start+se.count)*je)),Ue!==null?(nt=Math.max(nt,0),dt=Math.min(dt,Ue.count)):qe!=null&&(nt=Math.max(nt,0),dt=Math.min(dt,qe.count));const bt=dt-nt;if(bt<0||bt===1/0)return;Ge.setup(k,q,Pe,j,Ue);let ut,pt=Ye;if(Ue!==null&&(ut=w.get(Ue),pt=Fe,pt.setIndex(ut)),k.isMesh)q.wireframe===!0?(ie.setLineWidth(q.wireframeLinewidth*ue()),pt.setMode(C.LINES)):pt.setMode(C.TRIANGLES);else if(k.isLine){let ke=q.linewidth;ke===void 0&&(ke=1),ie.setLineWidth(ke*ue()),k.isLineSegments?pt.setMode(C.LINES):k.isLineLoop?pt.setMode(C.LINE_LOOP):pt.setMode(C.LINE_STRIP)}else k.isPoints?pt.setMode(C.POINTS):k.isSprite&&pt.setMode(C.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)On("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))pt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ke=k._multiDrawStarts,ei=k._multiDrawCounts,An=k._multiDrawCount,Li=Ue?w.get(Ue).bytesPerElement:1,Tr=me.get(q).currentProgram.getUniforms();for(let oi=0;oi<An;oi++)Tr.setValue(C,"_gl_DrawID",oi),pt.render(ke[oi]/Li,ei[oi])}else if(k.isInstancedMesh)pt.renderInstances(nt,bt,k.count);else if(j.isInstancedBufferGeometry){const ke=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ei=Math.min(j.instanceCount,ke);pt.renderInstances(nt,bt,ei)}else pt.render(nt,bt)};function ht(A,H,j){A.transparent===!0&&A.side===gi&&A.forceSinglePass===!1?(A.side=Zt,A.needsUpdate=!0,Jl(A,H,j),A.side=Ii,A.needsUpdate=!0,Jl(A,H,j),A.side=gi):Jl(A,H,j)}this.compile=function(A,H,j=null){j===null&&(j=A),f=pe.get(j),f.init(H),y.push(f),j.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),A!==j&&A.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();const q=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const se=k.material;if(se)if(Array.isArray(se))for(let be=0;be<se.length;be++){const Pe=se[be];ht(Pe,j,k),q.add(Pe)}else ht(se,j,k),q.add(se)}),f=y.pop(),q},this.compileAsync=function(A,H,j=null){const q=this.compile(A,H,j);return new Promise(k=>{function se(){if(q.forEach(function(be){me.get(be).currentProgram.isReady()&&q.delete(be)}),q.size===0){k(A);return}setTimeout(se,10)}he.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Pi=null;function ws(A){Pi&&Pi(A)}function qm(){Tn.stop()}function Xm(){Tn.start()}const Tn=new Pp;Tn.setAnimationLoop(ws),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(A){Pi=A,ee.setAnimationLoop(A),A===null?Tn.stop():Tn.start()},ee.addEventListener("sessionstart",qm),ee.addEventListener("sessionend",Xm),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(H),H=ee.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,H,P),f=pe.get(A,y.length),f.init(H),y.push(f),Me.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Y.setFromProjectionMatrix(Me),ye=this.localClippingEnabled,ae=Ee.init(this.clippingPlanes,ye),m=Ne.get(A,x.length),m.init(),x.push(m),ee.enabled===!0&&ee.isPresenting===!0){const se=_.xr.getDepthSensingMesh();se!==null&&Au(se,H,-1/0,_.sortObjects)}Au(A,H,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(W,de),$=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,$&&te.addToRenderList(m,A),this.info.render.frame++,ae===!0&&Ee.beginShadows();const j=f.state.shadowsArray;Te.render(j,A,H),ae===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,k=m.transmissive;if(f.setupLights(),H.isArrayCamera){const se=H.cameras;if(k.length>0)for(let be=0,Pe=se.length;be<Pe;be++){const Ue=se[be];Zm(q,k,A,Ue)}$&&te.render(A);for(let be=0,Pe=se.length;be<Pe;be++){const Ue=se[be];Ym(m,A,Ue,Ue.viewport)}}else k.length>0&&Zm(q,k,A,H),$&&te.render(A),Ym(m,A,H);P!==null&&E===0&&(Ae.updateMultisampleRenderTarget(P),Ae.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(_,A,H),Ge.resetDefaultState(),M=-1,b=null,y.pop(),y.length>0?(f=y[y.length-1],ae===!0&&Ee.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Au(A,H,j,q){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){q&&Be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Me);const se=Z.update(A),be=A.material;be.visible&&m.push(A,se,be,j,Be.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const se=Z.update(A),be=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Be.copy(A.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Be.copy(se.boundingSphere.center)),Be.applyMatrix4(A.matrixWorld).applyMatrix4(Me)),Array.isArray(be)){const Pe=se.groups;for(let Ue=0,je=Pe.length;Ue<je;Ue++){const We=Pe[Ue],qe=be[We.materialIndex];qe&&qe.visible&&m.push(A,se,qe,j,Be.z,We)}}else be.visible&&m.push(A,se,be,j,Be.z,null)}}const k=A.children;for(let se=0,be=k.length;se<be;se++)Au(k[se],H,j,q)}function Ym(A,H,j,q){const k=A.opaque,se=A.transmissive,be=A.transparent;f.setupLightsView(j),ae===!0&&Ee.setGlobalState(_.clippingPlanes,j),q&&ie.viewport(L.copy(q)),k.length>0&&Kl(k,H,j),se.length>0&&Kl(se,H,j),be.length>0&&Kl(be,H,j),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Zm(A,H,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new ni(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?Vt:_i,minFilter:xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const k=f.state.transmissionRenderTarget[q.id],se=q.viewport||L;k.setSize(se.z*_.transmissionResolutionScale,se.w*_.transmissionResolutionScale);const be=_.getRenderTarget();_.setRenderTarget(k),_.getClearColor(O),B=_.getClearAlpha(),B<1&&_.setClearColor(16777215,.5),_.clear(),$&&te.render(j);const Pe=_.toneMapping;_.toneMapping=Ji;const Ue=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),ae===!0&&Ee.setGlobalState(_.clippingPlanes,q),Kl(A,j,q),Ae.updateMultisampleRenderTarget(k),Ae.updateRenderTargetMipmap(k),he.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let We=0,qe=H.length;We<qe;We++){const nt=H[We],dt=nt.object,bt=nt.geometry,ut=nt.material,pt=nt.group;if(ut.side===gi&&dt.layers.test(q.layers)){const ke=ut.side;ut.side=Zt,ut.needsUpdate=!0,Km(dt,j,q,bt,ut,pt),ut.side=ke,ut.needsUpdate=!0,je=!0}}je===!0&&(Ae.updateMultisampleRenderTarget(k),Ae.updateRenderTargetMipmap(k))}_.setRenderTarget(be),_.setClearColor(O,B),Ue!==void 0&&(q.viewport=Ue),_.toneMapping=Pe}function Kl(A,H,j){const q=H.isScene===!0?H.overrideMaterial:null;for(let k=0,se=A.length;k<se;k++){const be=A[k],Pe=be.object,Ue=be.geometry,je=be.group;let We=be.material;We.allowOverride===!0&&q!==null&&(We=q),Pe.layers.test(j.layers)&&Km(Pe,H,j,Ue,We,je)}}function Km(A,H,j,q,k,se){A.onBeforeRender(_,H,j,q,k,se),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(_,H,j,q,A,se),k.transparent===!0&&k.side===gi&&k.forceSinglePass===!1?(k.side=Zt,k.needsUpdate=!0,_.renderBufferDirect(j,H,q,k,A,se),k.side=Ii,k.needsUpdate=!0,_.renderBufferDirect(j,H,q,k,A,se),k.side=gi):_.renderBufferDirect(j,H,q,k,A,se),A.onAfterRender(_,H,j,q,k,se)}function Jl(A,H,j){H.isScene!==!0&&(H=Qe);const q=me.get(A),k=f.state.lights,se=f.state.shadowsArray,be=k.state.version,Pe=J.getParameters(A,k.state,se,H,j),Ue=J.getProgramCacheKey(Pe);let je=q.programs;q.environment=A.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(A.isMeshStandardMaterial?N:it).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,je===void 0&&(A.addEventListener("dispose",De),je=new Map,q.programs=je);let We=je.get(Ue);if(We!==void 0){if(q.currentProgram===We&&q.lightsStateVersion===be)return $m(A,Pe),We}else Pe.uniforms=J.getUniforms(A),A.onBeforeCompile(Pe,_),We=J.acquireProgram(Pe,Ue),je.set(Ue,We),q.uniforms=Pe.uniforms;const qe=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=Ee.uniform),$m(A,Pe),q.needsLights=AT(A),q.lightsStateVersion=be,q.needsLights&&(qe.ambientLightColor.value=k.state.ambient,qe.lightProbe.value=k.state.probe,qe.directionalLights.value=k.state.directional,qe.directionalLightShadows.value=k.state.directionalShadow,qe.spotLights.value=k.state.spot,qe.spotLightShadows.value=k.state.spotShadow,qe.rectAreaLights.value=k.state.rectArea,qe.ltc_1.value=k.state.rectAreaLTC1,qe.ltc_2.value=k.state.rectAreaLTC2,qe.pointLights.value=k.state.point,qe.pointLightShadows.value=k.state.pointShadow,qe.hemisphereLights.value=k.state.hemi,qe.directionalShadowMap.value=k.state.directionalShadowMap,qe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,qe.spotShadowMap.value=k.state.spotShadowMap,qe.spotLightMatrix.value=k.state.spotLightMatrix,qe.spotLightMap.value=k.state.spotLightMap,qe.pointShadowMap.value=k.state.pointShadowMap,qe.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=We,q.uniformsList=null,We}function Jm(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=_l.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function $m(A,H){const j=me.get(A);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function ET(A,H,j,q,k){H.isScene!==!0&&(H=Qe),Ae.resetTextureUnits();const se=H.fog,be=q.isMeshStandardMaterial?H.environment:null,Pe=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:kt,Ue=(q.isMeshStandardMaterial?N:it).get(q.envMap||be),je=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,We=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),qe=!!j.morphAttributes.position,nt=!!j.morphAttributes.normal,dt=!!j.morphAttributes.color;let bt=Ji;q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(bt=_.toneMapping);const ut=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,pt=ut!==void 0?ut.length:0,ke=me.get(q),ei=f.state.lights;if(ae===!0&&(ye===!0||A!==b)){const Wt=A===b&&q.id===M;Ee.setState(q,A,Wt)}let An=!1;q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ei.state.version||ke.outputColorSpace!==Pe||k.isBatchedMesh&&ke.batching===!1||!k.isBatchedMesh&&ke.batching===!0||k.isBatchedMesh&&ke.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ke.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ke.instancing===!1||!k.isInstancedMesh&&ke.instancing===!0||k.isSkinnedMesh&&ke.skinning===!1||!k.isSkinnedMesh&&ke.skinning===!0||k.isInstancedMesh&&ke.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ke.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ke.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ke.instancingMorph===!1&&k.morphTexture!==null||ke.envMap!==Ue||q.fog===!0&&ke.fog!==se||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ee.numPlanes||ke.numIntersection!==Ee.numIntersection)||ke.vertexAlphas!==je||ke.vertexTangents!==We||ke.morphTargets!==qe||ke.morphNormals!==nt||ke.morphColors!==dt||ke.toneMapping!==bt||ke.morphTargetsCount!==pt)&&(An=!0):(An=!0,ke.__version=q.version);let Li=ke.currentProgram;An===!0&&(Li=Jl(q,H,k));let Tr=!1,oi=!1,Ta=!1;const _t=Li.getUniforms(),pi=ke.uniforms;if(ie.useProgram(Li.program)&&(Tr=!0,oi=!0,Ta=!0),q.id!==M&&(M=q.id,oi=!0),Tr||b!==A){ie.buffers.depth.getReversed()?(oe.copy(A.projectionMatrix),Mg(oe),wg(oe),_t.setValue(C,"projectionMatrix",oe)):_t.setValue(C,"projectionMatrix",A.projectionMatrix),_t.setValue(C,"viewMatrix",A.matrixWorldInverse);const Wt=_t.map.cameraPosition;Wt!==void 0&&Wt.setValue(C,Oe.setFromMatrixPosition(A.matrixWorld)),Se.logarithmicDepthBuffer&&_t.setValue(C,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&_t.setValue(C,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,oi=!0,Ta=!0)}if(k.isSkinnedMesh){_t.setOptional(C,k,"bindMatrix"),_t.setOptional(C,k,"bindMatrixInverse");const Wt=k.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),_t.setValue(C,"boneTexture",Wt.boneTexture,Ae))}k.isBatchedMesh&&(_t.setOptional(C,k,"batchingTexture"),_t.setValue(C,"batchingTexture",k._matricesTexture,Ae),_t.setOptional(C,k,"batchingIdTexture"),_t.setValue(C,"batchingIdTexture",k._indirectTexture,Ae),_t.setOptional(C,k,"batchingColorTexture"),k._colorsTexture!==null&&_t.setValue(C,"batchingColorTexture",k._colorsTexture,Ae));const fi=j.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&we.update(k,j,Li),(oi||ke.receiveShadow!==k.receiveShadow)&&(ke.receiveShadow=k.receiveShadow,_t.setValue(C,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(pi.envMap.value=Ue,pi.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&H.environment!==null&&(pi.envMapIntensity.value=H.environmentIntensity),oi&&(_t.setValue(C,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&TT(pi,Ta),se&&q.fog===!0&&K.refreshFogUniforms(pi,se),K.refreshMaterialUniforms(pi,q,G,X,f.state.transmissionRenderTarget[A.id]),_l.upload(C,Jm(ke),pi,Ae)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(_l.upload(C,Jm(ke),pi,Ae),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&_t.setValue(C,"center",k.center),_t.setValue(C,"modelViewMatrix",k.modelViewMatrix),_t.setValue(C,"normalMatrix",k.normalMatrix),_t.setValue(C,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Wt=q.uniformsGroups;for(let Ni=0,Ru=Wt.length;Ni<Ru;Ni++){const Rn=Wt[Ni];F.update(Rn,Li),F.bind(Rn,Li)}}return Li}function TT(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function AT(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,H,j){const q=me.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),me.get(A.texture).__webglTexture=H,me.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:j,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const j=me.get(A);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0};const RT=C.createFramebuffer();this.setRenderTarget=function(A,H=0,j=0){P=A,T=H,E=j;let q=!0,k=null,se=!1,be=!1;if(A){const Pe=me.get(A);if(Pe.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(C.FRAMEBUFFER,null),q=!1;else if(Pe.__webglFramebuffer===void 0)Ae.setupRenderTarget(A);else if(Pe.__hasExternalTextures)Ae.rebindTextures(A,me.get(A.texture).__webglTexture,me.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(Pe.__boundDepthTexture!==We){if(We!==null&&me.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ae.setupDepthRenderbuffer(A)}}const Ue=A.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(be=!0);const je=me.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(je[H])?k=je[H][j]:k=je[H],se=!0):A.samples>0&&Ae.useMultisampledRTT(A)===!1?k=me.get(A).__webglMultisampledFramebuffer:Array.isArray(je)?k=je[j]:k=je,L.copy(A.viewport),I.copy(A.scissor),D=A.scissorTest}else L.copy(_e).multiplyScalar(G).floor(),I.copy(re).multiplyScalar(G).floor(),D=Ze;if(j!==0&&(k=RT),ie.bindFramebuffer(C.FRAMEBUFFER,k)&&q&&ie.drawBuffers(A,k),ie.viewport(L),ie.scissor(I),ie.setScissorTest(D),se){const Pe=me.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pe.__webglTexture,j)}else if(be){const Pe=me.get(A.texture),Ue=H;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pe.__webglTexture,j,Ue)}else if(A!==null&&j!==0){const Pe=me.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Pe.__webglTexture,j)}M=-1},this.readRenderTargetPixels=function(A,H,j,q,k,se,be,Pe=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue){ie.bindFramebuffer(C.FRAMEBUFFER,Ue);try{const je=A.textures[Pe],We=je.format,qe=je.type;if(!Se.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-q&&j>=0&&j<=A.height-k&&(A.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Pe),C.readPixels(H,j,q,k,fe.convert(We),fe.convert(qe),se))}finally{const je=P!==null?me.get(P).__webglFramebuffer:null;ie.bindFramebuffer(C.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(A,H,j,q,k,se,be,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue)if(H>=0&&H<=A.width-q&&j>=0&&j<=A.height-k){ie.bindFramebuffer(C.FRAMEBUFFER,Ue);const je=A.textures[Pe],We=je.format,qe=je.type;if(!Se.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,nt),C.bufferData(C.PIXEL_PACK_BUFFER,se.byteLength,C.STREAM_READ),A.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Pe),C.readPixels(H,j,q,k,fe.convert(We),fe.convert(qe),0);const dt=P!==null?me.get(P).__webglFramebuffer:null;ie.bindFramebuffer(C.FRAMEBUFFER,dt);const bt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await bg(C,bt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,nt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,se),C.deleteBuffer(nt),C.deleteSync(bt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,j=0){const q=Math.pow(2,-j),k=Math.floor(A.image.width*q),se=Math.floor(A.image.height*q),be=H!==null?H.x:0,Pe=H!==null?H.y:0;Ae.setTexture2D(A,0),C.copyTexSubImage2D(C.TEXTURE_2D,j,0,0,be,Pe,k,se),ie.unbindTexture()};const CT=C.createFramebuffer(),PT=C.createFramebuffer();this.copyTextureToTexture=function(A,H,j=null,q=null,k=0,se=null){se===null&&(k!==0?(On("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=k,k=0):se=0);let be,Pe,Ue,je,We,qe,nt,dt,bt;const ut=A.isCompressedTexture?A.mipmaps[se]:A.image;if(j!==null)be=j.max.x-j.min.x,Pe=j.max.y-j.min.y,Ue=j.isBox3?j.max.z-j.min.z:1,je=j.min.x,We=j.min.y,qe=j.isBox3?j.min.z:0;else{const fi=Math.pow(2,-k);be=Math.floor(ut.width*fi),Pe=Math.floor(ut.height*fi),A.isDataArrayTexture?Ue=ut.depth:A.isData3DTexture?Ue=Math.floor(ut.depth*fi):Ue=1,je=0,We=0,qe=0}q!==null?(nt=q.x,dt=q.y,bt=q.z):(nt=0,dt=0,bt=0);const pt=fe.convert(H.format),ke=fe.convert(H.type);let ei;H.isData3DTexture?(Ae.setTexture3D(H,0),ei=C.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Ae.setTexture2DArray(H,0),ei=C.TEXTURE_2D_ARRAY):(Ae.setTexture2D(H,0),ei=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);const An=C.getParameter(C.UNPACK_ROW_LENGTH),Li=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Tr=C.getParameter(C.UNPACK_SKIP_PIXELS),oi=C.getParameter(C.UNPACK_SKIP_ROWS),Ta=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ut.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ut.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,je),C.pixelStorei(C.UNPACK_SKIP_ROWS,We),C.pixelStorei(C.UNPACK_SKIP_IMAGES,qe);const _t=A.isDataArrayTexture||A.isData3DTexture,pi=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const fi=me.get(A),Wt=me.get(H),Ni=me.get(fi.__renderTarget),Ru=me.get(Wt.__renderTarget);ie.bindFramebuffer(C.READ_FRAMEBUFFER,Ni.__webglFramebuffer),ie.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ru.__webglFramebuffer);for(let Rn=0;Rn<Ue;Rn++)_t&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,me.get(A).__webglTexture,k,qe+Rn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,me.get(H).__webglTexture,se,bt+Rn)),C.blitFramebuffer(je,We,be,Pe,nt,dt,be,Pe,C.DEPTH_BUFFER_BIT,C.NEAREST);ie.bindFramebuffer(C.READ_FRAMEBUFFER,null),ie.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(k!==0||A.isRenderTargetTexture||me.has(A)){const fi=me.get(A),Wt=me.get(H);ie.bindFramebuffer(C.READ_FRAMEBUFFER,CT),ie.bindFramebuffer(C.DRAW_FRAMEBUFFER,PT);for(let Ni=0;Ni<Ue;Ni++)_t?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,fi.__webglTexture,k,qe+Ni):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,fi.__webglTexture,k),pi?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Wt.__webglTexture,se,bt+Ni):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Wt.__webglTexture,se),k!==0?C.blitFramebuffer(je,We,be,Pe,nt,dt,be,Pe,C.COLOR_BUFFER_BIT,C.NEAREST):pi?C.copyTexSubImage3D(ei,se,nt,dt,bt+Ni,je,We,be,Pe):C.copyTexSubImage2D(ei,se,nt,dt,je,We,be,Pe);ie.bindFramebuffer(C.READ_FRAMEBUFFER,null),ie.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else pi?A.isDataTexture||A.isData3DTexture?C.texSubImage3D(ei,se,nt,dt,bt,be,Pe,Ue,pt,ke,ut.data):H.isCompressedArrayTexture?C.compressedTexSubImage3D(ei,se,nt,dt,bt,be,Pe,Ue,pt,ut.data):C.texSubImage3D(ei,se,nt,dt,bt,be,Pe,Ue,pt,ke,ut):A.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,se,nt,dt,be,Pe,pt,ke,ut.data):A.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,se,nt,dt,ut.width,ut.height,pt,ut.data):C.texSubImage2D(C.TEXTURE_2D,se,nt,dt,be,Pe,pt,ke,ut);C.pixelStorei(C.UNPACK_ROW_LENGTH,An),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Li),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Tr),C.pixelStorei(C.UNPACK_SKIP_ROWS,oi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ta),se===0&&H.generateMipmaps&&C.generateMipmap(ei),ie.unbindTexture()},this.copyTextureToTexture3D=function(A,H,j=null,q=null,k=0){return On('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,H,j,q,k)},this.initRenderTarget=function(A){me.get(A).__webglFramebuffer===void 0&&Ae.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ae.setTextureCube(A,0):A.isData3DTexture?Ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ae.setTexture2DArray(A,0):Ae.setTexture2D(A,0),ie.unbindTexture()},this.resetState=function(){T=0,E=0,P=null,ie.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}class cn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const cM=new pl(-1,1,1,-1,0,1);class hM extends Jt{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}}const uM=new hM;class bl{constructor(e){this._mesh=new Ht(uM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const Ml=0,dM=1,pM=new U,af=new Sv,Qh=new Ds,of=new U,wl=new hi;class fM{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new lf,this.unassigned=new lf,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new mM(e[t]));this._compute()}return this}setFromObject(e){const t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){const n=i.geometry;if(n!==void 0){const r=n.attributes.position;if(r!==void 0)for(let a=0,o=r.count;a<o;a++){const l=new U;l.fromBufferAttribute(r,a).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){const t=this.faces;for(let i=0,n=t.length;i<n;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){const i=this.faces;let n=-1/0,r=1/0;for(let a=0,o=i.length;a<o;a++){const l=i[a],c=l.distanceToPoint(e.origin),h=l.normal.dot(e.direction);if(c>0&&h>=0)return null;const d=h!==0?-c/h:0;if(!(d<=0)&&(h>0?r=Math.min(d,r):n=Math.max(d,n),n>r))return null}return n!==-1/0?e.at(n,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,pM)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){const t=e.outside;let i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){const i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let n=i;do{const r=n.next;t.distanceToPoint(n.point)>this.tolerance?this._addVertexToFace(n,t):this.unassigned.append(n),n=r}while(n!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{const i=t.next;let n=this.tolerance,r=null;for(let a=0;a<e.length;a++){const o=e[a];if(o.mark===Ml){const l=o.distanceToPoint(t.point);if(l>n&&(n=l,r=o),n>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=i}while(t!==null)}return this}_computeExtremes(){const e=new U,t=new U,i=[],n=[];for(let r=0;r<3;r++)i[r]=n[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,a=this.vertices.length;r<a;r++){const o=this.vertices[r],l=o.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=o);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),n[c]=o)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:n}}_computeInitialHull(){const e=this.vertices,t=this._computeExtremes(),i=t.min,n=t.max;let r=0,a=0;for(let u=0;u<3;u++){const p=n[u].point.getComponent(u)-i[u].point.getComponent(u);p>r&&(r=p,a=u)}const o=i[a],l=n[a];let c,h;r=0,af.set(o.point,l.point);for(let u=0,p=this.vertices.length;u<p;u++){const g=e[u];if(g!==o&&g!==l){af.closestPointToPoint(g.point,!0,of);const v=of.distanceToSquared(g.point);v>r&&(r=v,c=g)}}r=-1,Qh.setFromCoplanarPoints(o.point,l.point,c.point);for(let u=0,p=this.vertices.length;u<p;u++){const g=e[u];if(g!==o&&g!==l&&g!==c){const v=Math.abs(Qh.distanceToPoint(g.point));v>r&&(r=v,h=g)}}const d=[];if(Qh.distanceToPoint(h.point)<0){d.push(Ti.create(o,l,c),Ti.create(h,l,o),Ti.create(h,c,l),Ti.create(h,o,c));for(let u=0;u<3;u++){const p=(u+1)%3;d[u+1].getEdge(2).setTwin(d[0].getEdge(p)),d[u+1].getEdge(1).setTwin(d[p+1].getEdge(0))}}else{d.push(Ti.create(o,c,l),Ti.create(h,o,l),Ti.create(h,l,c),Ti.create(h,c,o));for(let u=0;u<3;u++){const p=(u+1)%3;d[u+1].getEdge(2).setTwin(d[0].getEdge((3-u)%3)),d[u+1].getEdge(0).setTwin(d[p+1].getEdge(1))}}for(let u=0;u<4;u++)this.faces.push(d[u]);for(let u=0,p=e.length;u<p;u++){const g=e[u];if(g!==o&&g!==l&&g!==c&&g!==h){r=this.tolerance;let v=null;for(let m=0;m<4;m++){const f=this.faces[m].distanceToPoint(g.point);f>r&&(r=f,v=this.faces[m])}v!==null&&this._addVertexToFace(g,v)}}return this}_reindexFaces(){const e=[];for(let t=0;t<this.faces.length;t++){const i=this.faces[t];i.mark===Ml&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0;const i=this.assigned.first().face;let n=i.outside;do{const r=i.distanceToPoint(n.point);r>t&&(t=r,e=n),n=n.next}while(n!==null&&n.face===i);return e}}_computeHorizon(e,t,i,n){this._deleteFaceVertices(i),i.mark=dM;let r;t===null?r=t=i.getEdge(0):r=t.next;do{const a=r.twin,o=a.face;o.mark===Ml&&(o.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,a,o,n):n.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){const i=Ti.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,n=null;for(let r=0;r<t.length;r++){const a=t[r],o=this._addAdjoiningFace(e,a);i===null?i=o:o.next.setTwin(n),this.newFaces.push(o.face),n=o}return i.next.setTwin(n),this}_addVertexToHull(e){const t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}}class Ti{constructor(){this.normal=new U,this.midpoint=new U,this.area=0,this.constant=0,this.outside=null,this.mark=Ml,this.edge=null}static create(e,t,i){const n=new Ti,r=new eu(e,n),a=new eu(t,n),o=new eu(i,n);return r.next=o.prev=a,a.next=r.prev=o,o.next=a.prev=r,n.edge=r,n.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){const e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return wl.set(e.point,t.point,i.point),wl.getNormal(this.normal),wl.getMidpoint(this.midpoint),this.area=wl.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}}class eu{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}}class mM{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}}class lf{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}}function cf(s,e){if(e===sd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Po||e===kc){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=t.count-2,n=[];if(e===Po)for(let a=1;a<=i;a++)n.push(t.getX(0)),n.push(t.getX(a)),n.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(t.getX(a)),n.push(t.getX(a+1)),n.push(t.getX(a+2))):(n.push(t.getX(a+2)),n.push(t.getX(a+1)),n.push(t.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class gM extends cs{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new sa(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){const l=r.parse(JSON.parse(o));t&&t(l)},i,n)}parse(e){return new vM(e)}}class vM{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],n=xM(e,t,this.data);for(let r=0,a=n.length;r<a;r++)i.push(...n[r].toShapes());return i}}function xM(s,e,t){const i=Array.from(s),n=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*n,a=[];let o=0,l=0;for(let c=0;c<i.length;c++){const h=i[c];if(h===`
`)o=0,l-=r;else{const d=_M(h,n,o,l,t);o+=d.offsetX,a.push(d.path)}}return a}function _M(s,e,t,i,n){const r=n.glyphs[s]||n.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+n.familyName+".");return}const a=new Ev;let o,l,c,h,d,u,p,g;if(r.o){const v=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,f=v.length;m<f;)switch(v[m++]){case"m":o=v[m++]*e+t,l=v[m++]*e+i,a.moveTo(o,l);break;case"l":o=v[m++]*e+t,l=v[m++]*e+i,a.lineTo(o,l);break;case"q":c=v[m++]*e+t,h=v[m++]*e+i,d=v[m++]*e+t,u=v[m++]*e+i,a.quadraticCurveTo(d,u,c,h);break;case"b":c=v[m++]*e+t,h=v[m++]*e+i,d=v[m++]*e+t,u=v[m++]*e+i,p=v[m++]*e+t,g=v[m++]*e+i,a.bezierCurveTo(d,u,p,g,c,h);break}}return{offsetX:r.ha*e,path:a}}class yM extends cs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new EM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new IM(t)}),this.register(function(t){return new OM(t)}),this.register(function(t){return new FM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new NM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new UM(t)}),this.register(function(t){return new DM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new zM(t)}),this.register(function(t){return new BM(t)})}load(e,t,i,n){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=ra.extractUrlBase(e);a=ra.resolveURL(c,this.path)}else a=ra.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new sa(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===hf){try{a[tt.KHR_BINARY_GLTF]=new kM(e)}catch(h){n&&n(h);return}r=JSON.parse(a[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new QM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case tt.KHR_MATERIALS_UNLIT:a[d]=new wM;break;case tt.KHR_DRACO_MESH_COMPRESSION:a[d]=new HM(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:a[d]=new VM;break;case tt.KHR_MESH_QUANTIZATION:a[d]=new GM;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}}function bM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class MM{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const r=t.json,a=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let o;const l=new ze(16777215);a.color!==void 0&&l.setRGB(a.color[0],a.color[1],a.color[2],kt);const c=a.range!==void 0?a.range:0;switch(a.type){case"directional":o=new Pu(l),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new Nu(l),o.distance=c;break;case"spot":o=new rv(l),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return o.position.set(0,0,0),us(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||"light_"+e),n=Promise.resolve(o),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,n=i.json.nodes[e],r=(n.extensions&&n.extensions[this.name]||{}).light;return r===void 0?null:this._loadLight(r).then(function(a){return i._getNodeRef(t.cache,r,a)})}}class wM{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ls}extendParams(e,t,i){const n=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],kt),e.opacity=a[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,Ct))}return Promise.all(n)}}class SM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=i.extensions[this.name].emissiveStrength;return n!==void 0&&(t.emissiveIntensity=n),Promise.resolve()}}class EM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(o,o)}return Promise.all(r)}}class TM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=i.extensions[this.name];return t.dispersion=n.dispersion!==void 0?n.dispersion:0,Promise.resolve()}}class AM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class RM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=n.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],kt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ct)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class CM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class PM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(o[0],o[1],o[2],kt),Promise.all(r)}}class LM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=i.extensions[this.name];return t.ior=n.ior!==void 0?n.ior:1.5,Promise.resolve()}}class NM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(o[0],o[1],o[2],kt),a.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,Ct)),Promise.all(r)}}class DM{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class UM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class IM{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const r=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class OM{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class FM{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class zM{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,d=n.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,n.mode,n.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(p),h,d,u,n.mode,n.filter),p})})}else return null}}class BM{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const l of n.primitives)if(l.mode!==di.TRIANGLES&&l.mode!==di.TRIANGLE_STRIP&&l.mode!==di.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=i.extensions[this.name].attributes,a=[],o={};for(const l in r)a.push(this.parser.getDependency("accessor",r[l]).then(c=>(o[l]=c,o[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const c=l.pop(),h=c.isGroup?c.children:[c],d=l[0].count,u=[];for(const p of h){const g=new Xe,v=new U,m=new li,f=new U(1,1,1),x=new i0(p.geometry,p.material,d);for(let y=0;y<d;y++)o.TRANSLATION&&v.fromBufferAttribute(o.TRANSLATION,y),o.ROTATION&&m.fromBufferAttribute(o.ROTATION,y),o.SCALE&&f.fromBufferAttribute(o.SCALE,y),x.setMatrixAt(y,g.compose(v,m,f));for(const y in o)if(y==="_COLOR_0"){const _=o[y];x.instanceColor=new _h(_.array,_.itemSize,_.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&p.geometry.setAttribute(y,o[y]);mt.prototype.copy.call(x,p),this.parser.assignFinalMaterial(x),u.push(x)}return c.isGroup?(c.clear(),c.add(...u),c):u[0]}))}}const hf="glTF",oa=12,uf={JSON:1313821514,BIN:5130562};class kM{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,oa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-oa,r=new DataView(e,oa);let a=0;for(;a<n;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===uf.JSON){const c=new Uint8Array(e,oa+a,o);this.content=i.decode(c)}else if(l===uf.BIN){const c=oa+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class HM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const d=iu[h]||h.toLowerCase();o[d]=a[h]}for(const h in e.attributes){const d=iu[h]||h.toLowerCase();if(a[h]!==void 0){const u=i.accessors[e.attributes[h]],p=or[u.componentType];c[d]=p.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){n.decodeDracoFile(h,function(p){for(const g in p.attributes){const v=p.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}d(p)},o,c,kt,u)})})}}class VM{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class GM{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}}class df extends ia{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,d=(i-t)/h,u=d*d,p=u*d,g=e*c,v=g-c,m=-2*p+3*u,f=p-u,x=1-m,y=f-u+d;for(let _=0;_!==o;_++){const R=a[v+_+o],T=a[v+_+l]*h,E=a[g+_+o],P=a[g+_]*h;r[_]=x*R+y*T+m*E+f*P}return r}}const WM=new li;class jM extends df{interpolate_(e,t,i,n){const r=super.interpolate_(e,t,i,n);return WM.fromArray(r).normalize().toArray(r),r}}const di={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pf={9728:Ot,9729:Rt,9984:Cc,9985:Cr,9986:Cn,9987:xi},ff={33071:vi,33648:Rr,10497:$i},tu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},iu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qM={CUBICSPLINE:void 0,LINEAR:Dn,STEP:Nn},su={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function XM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Aa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ii})),s.DefaultMaterial}function hn(s,e,t){for(const i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function us(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function YM(s,e,t){let i=!1,n=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(n=!0),d.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(i){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(u)}if(n){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(r){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return i&&(s.morphAttributes.position=h),n&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function ZM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function KM(s){let e;const t=s.extensions&&s.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+nu(t.attributes):e=s.indices+":"+nu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)e+=":"+nu(s.targets[i]);return e}function nu(s){let e="";const t=Object.keys(s).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+s[t[i]]+";";return e}function ru(s){switch(s){case Int8Array:return .007874015748031496;case Uint8Array:return .00392156862745098;case Int16Array:return 3051850947599719e-20;case Uint16Array:return 15259021896696422e-21;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function JM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const $M=new Xe;class QM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||r&&a<98?this.textureLoader=new xp(this.options.manager):this.textureLoader=new lv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return hn(r,o,n),us(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){const a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){const a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(r,a){i.load(ra.resolveURL(t.uri,n.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const a=tu[n.type],o=or[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new Gt(c,a,l))}const r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=tu[n.type],c=or[n.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=n.byteOffset||0,p=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0;let v,m;if(p&&p!==d){const f=Math.floor(u/p),x="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+f+":"+n.count;let y=t.cache.get(x);y||(v=new c(o,f*p,n.count*p/h),y=new Jg(v,p/h),t.cache.add(x,y)),m=new mh(y,l,u%p/h,g)}else o===null?v=new c(n.count*l):v=new c(o,u,n.count*l),m=new Gt(v,l,g);if(n.sparse!==void 0){const f=tu.SCALAR,x=or[n.sparse.indices.componentType],y=n.sparse.indices.byteOffset||0,_=n.sparse.values.byteOffset||0,R=new x(a[1],y,n.sparse.count*f),T=new c(a[2],_,n.sparse.count*l);o!==null&&(m=new Gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,P=R.length;E<P;E++){const M=R[E];if(m.setX(M,T[E*l]),l>=2&&m.setY(M,T[E*l+1]),l>=3&&m.setZ(M,T[E*l+2]),l>=4&&m.setW(M,T[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,n=t.textures[e].source,r=t.images[n];let a=this.textureLoader;if(r.uri){const o=i.manager.getHandler(r.uri);o!==null&&(a=o)}return this.loadTextureImage(e,n,a)}loadTextureImage(e,t,i){const n=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=pf[d.magFilter]||Rt,h.minFilter=pf[d.minFilter]||xi,h.wrapS=ff[d.wrapS]||$i,h.wrapT=ff[d.wrapT]||$i,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ot&&h.minFilter!==Rt,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=n.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(u,p){let g=u;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Ft(v);m.needsUpdate=!0,u(m)}),t.load(ra.resolveURL(d,r.path),g,void 0,p)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),us(d,a),d.userData.mimeType=a.mimeType||JM(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new ep,Si.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Mh,Si.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||r||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Aa}loadMaterial(e){const t=this,i=this.json,n=this.extensions,r=i.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){const d=n[tt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new ze(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],kt),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,Ct)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=gi);const h=r.alphaMode||su.OPAQUE;if(h===su.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===su.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ls&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Ls&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ls){const d=r.emissiveFactor;o.emissive=new ze().setRGB(d[0],d[1],d[2],kt)}return r.emissiveTexture!==void 0&&a!==Ls&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ct)),Promise.all(c).then(function(){const d=new a(o);return r.name&&(d.name=r.name),us(d,r),t.associations.set(d,{materials:e}),r.extensions&&hn(n,d,r),d})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return mf(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=KM(c),d=n[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=mf(new Jt,c,t),n[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,n=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?XM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let p=0,g=h.length;p<g;p++){const v=h[p],m=a[p];let f;const x=c[p];if(m.mode===di.TRIANGLES||m.mode===di.TRIANGLE_STRIP||m.mode===di.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new Qg(v,x):new Ht(v,x),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===di.TRIANGLE_STRIP?f.geometry=cf(f.geometry,kc):m.mode===di.TRIANGLE_FAN&&(f.geometry=cf(f.geometry,Po));else if(m.mode===di.LINES)f=new Qd(v,x);else if(m.mode===di.LINE_STRIP)f=new Sh(v,x);else if(m.mode===di.LINE_LOOP)f=new r0(v,x);else if(m.mode===di.POINTS)f=new a0(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&ZM(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),us(f,r),m.extensions&&hn(n,f,m),t.assignFinalMaterial(f),d.push(f)}for(let p=0,g=d.length;p<g;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return r.extensions&&hn(n,d[0],r),d[0];const u=new Ss;r.extensions&&hn(n,u,r),t.associations.set(u,{meshes:e});for(let p=0,g=d.length;p<g;p++)u.add(d[p]);return u})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new ti(md.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new pl(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),us(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const r=n.pop(),a=n,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const d=a[c];if(d){o.push(d);const u=new Xe;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new xh(o,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=n.channels.length;d<u;d++){const p=n.channels[d],g=n.samplers[p.sampler],v=p.target,m=v.node,f=n.parameters!==void 0?n.parameters[g.input]:g.input,x=n.parameters!==void 0?n.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",x)),c.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const u=d[0],p=d[1],g=d[2],v=d[3],m=d[4],f=[];for(let x=0,y=u.length;x<y;x++){const _=u[x],R=p[x],T=g[x],E=v[x],P=m[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const M=i._createAnimationTracks(_,R,T,E,P);if(M)for(let b=0;b<M.length;b++)f.push(M[b])}return new K0(r,void 0,f)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){const a=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(u,$M)});for(let p=0,g=d.length;p<g;p++)h.add(d[p]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?n.createUniqueName(r.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new jd:c.length>1?h=new Ss:c.length===1?h=c[0]:h=new mt,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=a),us(h,r),r.extensions&&hn(i,h,r),r.matrix!==void 0){const d=new Xe;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(r.mesh!==void 0&&n.meshCache.refs[r.mesh]>1){const d=n.associations.get(h);n.associations.set(h,{...d})}return n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,r=new Ss;i.name&&(r.name=n.createUniqueName(i.name)),us(r,i),i.extensions&&hn(t,r,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++)r.add(l[h]);const c=h=>{const d=new Map;for(const[u,p]of n.associations)(u instanceof Si||u instanceof Ft)&&d.set(u,p);return h.traverse(u=>{const p=n.associations.get(u);p!=null&&d.set(u,p)}),d};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){const a=[],o=e.name?e.name:e.uuid,l=[];Is[r.path]===Is.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(o);let c;switch(Is[r.path]){case Is.weights:c=er;break;case Is.rotation:c=tr;break;case Is.translation:case Is.scale:c=sr;break;default:switch(i.itemSize){case 1:c=er;break;case 2:case 3:default:c=sr;break}break}const h=n.interpolation!==void 0?qM[n.interpolation]:Dn,d=this._getArrayFromAccessor(i);for(let u=0,p=l.length;u<p;u++){const g=new c(l[u]+"."+Is[r.path],t.array,d,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=ru(t.constructor),n=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){const i=this instanceof tr?jM:df;return new i(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ew(s,e,t){const i=e.attributes,n=new ts;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),o.normalized){const h=ru(or[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new U,l=new U;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],p=u.min,g=u.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),u.normalized){const v=ru(or[u.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}s.boundingBox=n;const a=new zi;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=a}function mf(s,e,t){const i=e.attributes,n=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in i){const o=iu[a]||a.toLowerCase();o in s.attributes||n.push(r(i[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});n.push(a)}return st.workingColorSpace!==kt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),us(s,e),ew(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?YM(s,e.targets,t):s})}class tw extends sv{constructor(e){super(e),this.type=Vt}parse(e){const t=function(f,x){switch(f){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(x||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(x||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(x||""))}},i=`
`,n=function(f,x,y){x=x||1024;let _=f.pos,R=-1,T=0,E="",P=String.fromCharCode.apply(null,new Uint16Array(f.subarray(_,_+128)));for(;0>(R=P.indexOf(i))&&T<x&&_<f.byteLength;)E+=P,T+=P.length,_+=128,P+=String.fromCharCode.apply(null,new Uint16Array(f.subarray(_,_+128)));return-1<R?(f.pos+=T+R+1,E+P.slice(0,R)):!1},r=function(f){const x=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,_=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*FORMAT=(\S+)\s*$/,T=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,E={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let P,M;for((f.pos>=f.byteLength||!(P=n(f)))&&t(1,"no header found"),(M=P.match(x))||t(3,"bad initial token"),E.valid|=1,E.programtype=M[1],E.string+=P+`
`;P=n(f),P!==!1;){if(E.string+=P+`
`,P.charAt(0)==="#"){E.comments+=P+`
`;continue}if((M=P.match(y))&&(E.gamma=parseFloat(M[1])),(M=P.match(_))&&(E.exposure=parseFloat(M[1])),(M=P.match(R))&&(E.valid|=2,E.format=M[1]),(M=P.match(T))&&(E.valid|=4,E.height=parseInt(M[1],10),E.width=parseInt(M[2],10)),E.valid&2&&E.valid&4)break}return E.valid&2||t(3,"missing format specifier"),E.valid&4||t(3,"missing image size specifier"),E},a=function(f,x,y){const _=x;if(_<8||_>32767||f[0]!==2||f[1]!==2||f[2]&128)return new Uint8Array(f);_!==(f[2]<<8|f[3])&&t(3,"wrong scanline width");const R=new Uint8Array(4*x*y);R.length||t(4,"unable to allocate buffer space");let T=0,E=0;const P=4*_,M=new Uint8Array(4),b=new Uint8Array(P);let L=y;for(;L>0&&E<f.byteLength;){E+4>f.byteLength&&t(1),M[0]=f[E++],M[1]=f[E++],M[2]=f[E++],M[3]=f[E++],(M[0]!=2||M[1]!=2||(M[2]<<8|M[3])!=_)&&t(3,"bad rgbe scanline format");let I=0,D;for(;I<P&&E<f.byteLength;){D=f[E++];const B=D>128;if(B&&(D-=128),(D===0||I+D>P)&&t(3,"bad scanline data"),B){const z=f[E++];for(let X=0;X<D;X++)b[I++]=z}else b.set(f.subarray(E,E+D),I),I+=D,E+=D}const O=_;for(let B=0;B<O;B++){let z=0;R[T]=b[B+z],z+=_,R[T+1]=b[B+z],z+=_,R[T+2]=b[B+z],z+=_,R[T+3]=b[B+z],T+=4}L--}return R},o=function(f,x,y,_){const R=f[x+3],T=Math.pow(2,R-128)/255;y[_+0]=f[x+0]*T,y[_+1]=f[x+1]*T,y[_+2]=f[x+2]*T,y[_+3]=1},l=function(f,x,y,_){const R=f[x+3],T=Math.pow(2,R-128)/255;y[_+0]=Ho.toHalfFloat(Math.min(f[x+0]*T,65504)),y[_+1]=Ho.toHalfFloat(Math.min(f[x+1]*T,65504)),y[_+2]=Ho.toHalfFloat(Math.min(f[x+2]*T,65504)),y[_+3]=Ho.toHalfFloat(1)},c=new Uint8Array(e);c.pos=0;const h=r(c),d=h.width,u=h.height,p=a(c.subarray(c.pos),d,u);let g,v,m;switch(this.type){case qt:m=p.length/4;const f=new Float32Array(m*4);for(let y=0;y<m;y++)o(p,y*4,f,y*4);g=f,v=qt;break;case Vt:m=p.length/4;const x=new Uint16Array(m*4);for(let y=0;y<m;y++)l(p,y*4,x,y*4);g=x,v=Vt;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:d,height:u,data:g,header:h.string,gamma:h.gamma,exposure:h.exposure,type:v}}setDataType(e){return this.type=e,this}load(e,t,i,n){function r(a,o){switch(a.type){case qt:case Vt:a.colorSpace=kt,a.minFilter=Rt,a.magFilter=Rt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,i,n)}}class iw{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let i,n,r;const a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,p=c-d,g=e-u,v=t-p;let m,f;g>v?(m=1,f=0):(m=0,f=1);const x=g-m+h,y=v-f+h,_=g-1+2*h,R=v-1+2*h,T=l&255,E=c&255,P=this.perm[T+this.perm[E]]%12,M=this.perm[T+m+this.perm[E+f]]%12,b=this.perm[T+1+this.perm[E+1]]%12;let L=.5-g*g-v*v;L<0?i=0:(L*=L,i=L*L*this._dot(this.grad3[P],g,v));let I=.5-x*x-y*y;I<0?n=0:(I*=I,n=I*I*this._dot(this.grad3[M],x,y));let D=.5-_*_-R*R;return D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[b],_,R)),70*(i+n+r)}noise3d(e,t,i){let n,r,a,o;const l=(e+t+i)*.3333333333333333,c=Math.floor(e+l),h=Math.floor(t+l),d=Math.floor(i+l),u=1/6,p=(c+h+d)*u,g=c-p,v=h-p,m=d-p,f=e-g,x=t-v,y=i-m;let _,R,T,E,P,M;f>=x?x>=y?(_=1,R=0,T=0,E=1,P=1,M=0):f>=y?(_=1,R=0,T=0,E=1,P=0,M=1):(_=0,R=0,T=1,E=1,P=0,M=1):x<y?(_=0,R=0,T=1,E=0,P=1,M=1):f<y?(_=0,R=1,T=0,E=0,P=1,M=1):(_=0,R=1,T=0,E=1,P=1,M=0);const b=f-_+u,L=x-R+u,I=y-T+u,D=f-E+2*u,O=x-P+2*u,B=y-M+2*u,z=f-1+3*u,X=x-1+3*u,G=y-1+3*u,W=c&255,de=h&255,_e=d&255,re=this.perm[W+this.perm[de+this.perm[_e]]]%12,Ze=this.perm[W+_+this.perm[de+R+this.perm[_e+T]]]%12,Y=this.perm[W+E+this.perm[de+P+this.perm[_e+M]]]%12,ae=this.perm[W+1+this.perm[de+1+this.perm[_e+1]]]%12;let ye=.6-f*f-x*x-y*y;ye<0?n=0:(ye*=ye,n=ye*ye*this._dot3(this.grad3[re],f,x,y));let oe=.6-b*b-L*L-I*I;oe<0?r=0:(oe*=oe,r=oe*oe*this._dot3(this.grad3[Ze],b,L,I));let Me=.6-D*D-O*O-B*B;Me<0?a=0:(Me*=Me,a=Me*Me*this._dot3(this.grad3[Y],D,O,B));let Oe=.6-z*z-X*X-G*G;return Oe<0?o=0:(Oe*=Oe,o=Oe*Oe*this._dot3(this.grad3[ae],z,X,G)),32*(n+r+a+o)}noise4d(e,t,i,n){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,d,u,p,g;const v=(e+t+i+n)*l,m=Math.floor(e+v),f=Math.floor(t+v),x=Math.floor(i+v),y=Math.floor(n+v),_=(m+f+x+y)*c,R=m-_,T=f-_,E=x-_,P=y-_,M=e-R,b=t-T,L=i-E,I=n-P,D=M>b?32:0,O=M>L?16:0,B=b>L?8:0,z=M>I?4:0,X=b>I?2:0,G=L>I?1:0,W=D+O+B+z+X+G,de=a[W][0]>=3?1:0,_e=a[W][1]>=3?1:0,re=a[W][2]>=3?1:0,Ze=a[W][3]>=3?1:0,Y=a[W][0]>=2?1:0,ae=a[W][1]>=2?1:0,ye=a[W][2]>=2?1:0,oe=a[W][3]>=2?1:0,Me=a[W][0]>=1?1:0,Oe=a[W][1]>=1?1:0,Be=a[W][2]>=1?1:0,Qe=a[W][3]>=1?1:0,$=M-de+c,ue=b-_e+c,C=L-re+c,xe=I-Ze+c,he=M-Y+2*c,Se=b-ae+2*c,ie=L-ye+2*c,Le=I-oe+2*c,me=M-Me+3*c,Ae=b-Oe+3*c,it=L-Be+3*c,N=I-Qe+3*c,w=M-1+4*c,V=b-1+4*c,Z=L-1+4*c,J=I-1+4*c,K=m&255,Ne=f&255,pe=x&255,Ee=y&255,Te=o[K+o[Ne+o[pe+o[Ee]]]]%32,te=o[K+de+o[Ne+_e+o[pe+re+o[Ee+Ze]]]]%32,we=o[K+Y+o[Ne+ae+o[pe+ye+o[Ee+oe]]]]%32,Ye=o[K+Me+o[Ne+Oe+o[pe+Be+o[Ee+Qe]]]]%32,Fe=o[K+1+o[Ne+1+o[pe+1+o[Ee+1]]]]%32;let fe=.6-M*M-b*b-L*L-I*I;fe<0?h=0:(fe*=fe,h=fe*fe*this._dot4(r[Te],M,b,L,I));let Ge=.6-$*$-ue*ue-C*C-xe*xe;Ge<0?d=0:(Ge*=Ge,d=Ge*Ge*this._dot4(r[te],$,ue,C,xe));let F=.6-he*he-Se*Se-ie*ie-Le*Le;F<0?u=0:(F*=F,u=F*F*this._dot4(r[we],he,Se,ie,Le));let ge=.6-me*me-Ae*Ae-it*it-N*N;ge<0?p=0:(ge*=ge,p=ge*ge*this._dot4(r[Ye],me,Ae,it,N));let ee=.6-w*w-V*V-Z*Z-J*J;return ee<0?g=0:(ee*=ee,g=ee*ee*this._dot4(r[Fe],w,V,Z,J)),27*(h+d+u+p+g)}_dot(e,t,i){return e[0]*t+e[1]*i}_dot3(e,t,i,n){return e[0]*t+e[1]*i+e[2]*n}_dot4(e,t,i,n,r){return e[0]*t+e[1]*i+e[2]*n+e[3]*r}}const un={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class gf extends cn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ls.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new bl(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class vf extends cn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class sw extends cn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class nw{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ce);this._width=i.width,this._height=i.height,t=new ni(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gf(un),this.copyPass.material.blending=jt,this.clock=new kh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}vf!==void 0&&(a instanceof vf?i=!0:a instanceof sw&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const Sl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class xf extends cn{constructor(){super(),this.uniforms=ls.clone(Sl.uniforms),this.material=new k0({name:Sl.name,uniforms:this.uniforms,vertexShader:Sl.vertexShader,fragmentShader:Sl.fragmentShader}),this._fsQuad=new bl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Mc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ya?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ec?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Tc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Sc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class au extends cn{constructor(e,t,i=null,n=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ze}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}}const El={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new ce},cameraProjectionMatrix:{value:new Xe},cameraInverseProjectionMatrix:{value:new Xe},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background

			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},Tl={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Al={uniforms:{tDiffuse:{value:null},resolution:{value:new ce}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class ds extends cn{constructor(e,t,i=512,n=512,r=32){super(),this.width=i,this.height=n,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this._generateSampleKernel(r),this._generateRandomKernelRotations();const a=new Th;a.format=js,a.type=Ws,this.normalRenderTarget=new ni(this.width,this.height,{minFilter:Ot,magFilter:Ot,type:Vt,depthTexture:a}),this.ssaoRenderTarget=new ni(this.width,this.height,{type:Vt}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new Pt({defines:Object.assign({},El.defines),uniforms:ls.clone(El.uniforms),vertexShader:El.vertexShader,fragmentShader:El.fragmentShader,blending:jt}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new H0,this.normalMaterial.blending=jt,this.blurMaterial=new Pt({defines:Object.assign({},Al.defines),uniforms:ls.clone(Al.uniforms),vertexShader:Al.vertexShader,fragmentShader:Al.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new Pt({defines:Object.assign({},Tl.defines),uniforms:ls.clone(Tl.uniforms),vertexShader:Tl.vertexShader,fragmentShader:Tl.fragmentShader,blending:jt}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Pt({uniforms:ls.clone(un.uniforms),vertexShader:un.vertexShader,fragmentShader:un.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:_c,blendDst:za,blendEquation:Oi,blendSrcAlpha:xc,blendDstAlpha:za,blendEquationAlpha:Oi}),this._fsQuad=new bl(null),this._originalClearColor=new ze}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(e,t,i){switch(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case ds.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case ds.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case ds.OUTPUT.Depth:this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:i);break;case ds.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case ds.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=vc,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}_renderPass(e,t,i,n,r){e.getClearColor(this._originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,n!=null&&(e.setClearColor(n),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,i,n,r){e.getClearColor(this._originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,n=t.clearColor||n,r=t.clearAlpha||r,n!=null&&(e.setClearColor(n),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_generateSampleKernel(e){const t=this.kernel;for(let i=0;i<e;i++){const n=new U;n.x=Math.random()*2-1,n.y=Math.random()*2-1,n.z=Math.random(),n.normalize();let r=i/e;r=md.lerp(.1,1,r*r),n.multiplyScalar(r),t.push(n)}}_generateRandomKernelRotations(){const e=new iw,t=4*4,i=new Float32Array(t);for(let n=0;n<t;n++){const r=Math.random()*2-1,a=Math.random()*2-1,o=0;i[n]=e.noise3d(r,a,o)}this.noiseTexture=new Jo(i,4,4,Pr,qt),this.noiseTexture.wrapS=$i,this.noiseTexture.wrapT=$i,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}_restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){const n=t.get(i);i.visible=n}),t.clear()}}ds.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const rw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ze(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class dn extends cn{constructor(e,t=1,i,n){super(),this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new ze(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ni(r,a,{type:Vt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new ni(r,a,{type:Vt});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new ni(r,a,{type:Vt});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}const o=rw;this.highPassUniforms=ls.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ce(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ls.clone(un.uniforms),this.blendMaterial=new Pt({uniforms:this.copyUniforms,vertexShader:un.vertexShader,fragmentShader:un.fragmentShader,blending:Fa,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ze,this._oldClearAlpha=1,this._basic=new Ls,this._fsQuad=new bl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=dn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=dn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Pt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new Pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}dn.BlurDirectionX=new ce(1,0),dn.BlurDirectionY=new ce(0,1);let la,lr,ca,pn,fn,_f,ou,yf,bf,Os;la=new Map,lr={has(s){return la.has(s)},get(s){return la.get(s)},set(s,e){la.set(s,e)},entries(){return la.entries()}},ca=new Map,pn={has(s){return ca.has(s)},get(s){return ca.get(s)},set(s,e){ca.set(s,e)},entries(){return ca.entries()}},fn={object(s){return typeof s=="object"},factory(s){return typeof s=="function"},asyncFactory(s){return this.factory(s)&&s.constructor.name==="AsyncFunction"},constructor(s){return this.factory(s)&&typeof s.prototype=="object"}},cc=s=>{const e=pn.get(s);if(e&&e.scope&&e.scope==="transient")return _f(s);const t=lr.get(s);if(!t)throw`${s.name} not registered`;return t},_f=s=>{const e=pn.get(s),t=e.use??e.ref;if(fn.asyncFactory(t))throw"Provider with 'transient' scope cannot use async factories";const i=(e.dep??[]).map(cc);return fn.constructor(t)?new t(...i):fn.factory(t)?t(...i):t},ou=async s=>{const e=pn.get(s),t=e.use??e.ref,i=(e.dep??[]).map(cc);return yf(t,i)},yf=async(s,e)=>fn.constructor(s)?new s(...e):fn.asyncFactory(s)?await s(...e):fn.factory(s)?s(...e):s,bf=async()=>{for(const[s,e]of pn.entries()){if((e.scope??"singleton")==="transient")continue;const t=e.dep??[];if(!lr.has(s)){for(const i of t)if(!lr.has(i)){if(!pn.has(i))throw`${i.name} not registered`;lr.set(i,await ou(i))}lr.set(s,await ou(s))}}},Os=s=>{pn.set(s.ref,s)};function mn(s=[],e){return t=>(e??(e=t),s??(s=[]),Os({ref:e,use:t,dep:s,scope:"singleton"}))}class Mf{constructor(e){ne(this,"name");return this.name=e,this}}var aw=Object.getOwnPropertyDescriptor,wf=s=>{throw TypeError(s)},ow=(s,e,t,i)=>{for(var n=i>1?void 0:i?aw(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=a(n)||n);return n},Sf=(s,e,t)=>e.has(s)||wf("Cannot "+t),cr=(s,e,t)=>(Sf(s,e,"read from private field"),t?t.call(s):e.get(s)),lw=(s,e,t)=>e.has(s)?wf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),cw=(s,e,t,i)=>(Sf(s,e,"write to private field"),e.set(s,t),t),ps;rc=class{constructor(s=localStorage){lw(this,ps),cw(this,ps,s)}setObject(s,e){cr(this,ps).setItem(s,JSON.stringify(e))}getObject(s){return JSON.parse(cr(this,ps).getItem(s)??"null")}setDate(s,e){cr(this,ps).setItem(s,e.toISOString())}getDate(s){const e=cr(this,ps).getItem(s);return e?new Date(e):null}setString(s,e){cr(this,ps).setItem(s,e)}getString(s){return cr(this,ps).getItem(s)}},ps=new WeakMap,rc=ow([mn()],rc);function hw(s){return Object.keys(s)}nc=s=>Promise.all(s);class uw extends Set{remove(e){return this.delete(e),this}}class dw{constructor(){At(this,Mn);At(this,Mr,new Map)}dispatch(e,t){for(const i of Zi(this,Mn,Da).call(this,e))i(t)}add(e,t){et(this,Mr).set(e,Zi(this,Mn,Da).call(this,e).add(t))}remove(e,t){et(this,Mr).set(e,Zi(this,Mn,Da).call(this,e).remove(t))}clear(e){Zi(this,Mn,Da).call(this,e).clear()}}Mr=new WeakMap,Mn=new WeakSet,Da=function(e){return et(this,Mr).get(e)??new uw},tc=(Gm=class{constructor(){At(this,wr,new dw)}on(s,e){return et(this,wr).add(s,e),()=>et(this,wr).remove(s,e)}emit(s,e){et(this,wr).dispatch(s,e)}},wr=new WeakMap,Gm);var pw=Object.getOwnPropertyDescriptor,Ef=s=>{throw TypeError(s)},fw=(s,e,t,i)=>{for(var n=i>1?void 0:i?pw(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=a(n)||n);return n},mw=(s,e,t)=>e.has(s)||Ef("Cannot "+t),fs=(s,e,t)=>(mw(s,e,"read from private field"),t?t.call(s):e.get(s)),Rl=(s,e,t)=>e.has(s)?Ef("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),hr,Cl,lu,Tf,Pl;ec=class extends tc{constructor(){super(...arguments),Rl(this,lu),Rl(this,hr,new Set),Rl(this,Cl,({code:s})=>{const e=s;this.emit(e,void 0),fs(this,hr).add(e),fs(this,hr).size>1&&this.emit(fs(this,lu,Tf),void 0)}),Rl(this,Pl,({code:s})=>{fs(this,hr).delete(s)})}enable(){addEventListener("keydown",fs(this,Cl)),addEventListener("keyup",fs(this,Pl))}disable(){removeEventListener("keydown",fs(this,Cl)),removeEventListener("keyup",fs(this,Pl))}},hr=new WeakMap,Cl=new WeakMap,lu=new WeakSet,Tf=function(){return Array.from(fs(this,hr)).join(" + ")},Pl=new WeakMap,ec=fw([mn()],ec);var gw=Object.getOwnPropertyDescriptor,vw=(s,e,t,i)=>{for(var n=i>1?void 0:i?gw(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=a(n)||n);return n};$l=class{async get(s,{params:e,headers:t}={}){const i=new URLSearchParams(Object.entries(e??{}));return fetch(`${s}?${i}`,{headers:t}).then(n=>n.json())}},$l=vw([mn()],$l);let Af,Rf;Ki=(s,e={},...t)=>{const i=document.createElement(s);return i.append(...t),Object.assign(i,e)},Af=s=>Ki("template",{innerHTML:s}).content,Rf=s=>Ki("style",{innerHTML:s});class gn extends HTMLElement{constructor(t,i){super();ne(this,"shadow");ne(this,"internals");this.shadow=this.attachShadow({mode:"open"}),i&&this.shadow.appendChild(Rf(i)),this.shadow.appendChild(Af(t).cloneNode(!0)),this.internals=this.attachInternals()}static isStateSyntaxSupported(t){return CSS.supports(`selector(:state(${t}))`)}}let Cf,ha;mi=(s,e)=>t=>{e?customElements.define(s,t,{extends:e}):customElements.define(s,t)},Cf=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","script","search","section","select","slot","small","source","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],ha=Cf.reduce((s,e)=>{const t=(i={})=>{const n=document.createElement(e);return Object.assign(n,i)};return{...s,[e]:t}},{});function cu(s,e){const t=s.shadowRoot?s.shadowRoot:s;return e??(e=NodeFilter.SHOW_ELEMENT),document.createTreeWalker(t,e)}function ua(s){return function(){const e=cu(this);for(;e.nextNode();){const t=e.currentNode;if(typeof s=="string"){if(s.startsWith("#")){if(t.id===s.slice(1))return t}else if(t.nodeName.toLowerCase()===s)return t}else if(t instanceof s)return t}}}function xw(s){return function(){const e=cu(this);let t;for(;e.nextNode();)e.currentNode instanceof s&&(t=e.currentNode);return t}}function _w(s){return function(){const e=cu(this),t=[];for(;e.nextNode();)e.currentNode instanceof s&&t.push(e.currentNode);return t}}function yw(s){return function(){const e={};return hw(s).forEach(t=>{const i=`[data-prop="${String(t)}"]`;e[t]=(this.shadowRoot||this).querySelector(i)}),new Proxy(s,{set(t,i,n){return t[i]=n,e[i].textContent=String(n),!0}})}}const bw=`:host {
  display: grid;
  font-size: 80px;
  font-weight: 600;
  text-transform: uppercase;
  color: #ffffff;
}

:host p {
  grid-area: 1/1/-1/-1;
}

:host p:nth-of-type(1) {
  clip-path: polygon(0% 0%, 100% 0%, 100% 48%, 0% 58%);
}

:host p:nth-of-type(2) {
  clip-path: polygon(0% 60%, 100% 50%, 100% 100%, 0% 100%);
  color: transparent;
  background: -webkit-linear-gradient(177deg, black 53%, white 65%);
  background: linear-gradient(177deg, black 53%, white 65%);
  background-clip: text;
  -webkit-background-clip: text;
  transform: translateX(-0.02em);
}
`;var Mw=Object.defineProperty,ww=Object.getOwnPropertyDescriptor,Pf=s=>{throw TypeError(s)},Sw=(s,e,t)=>e in s?Mw(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Ew=(s,e,t,i)=>{for(var n=i>1?void 0:i?ww(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=a(n)||n);return n},Lf=(s,e,t)=>Sw(s,typeof e!="symbol"?e+"":e,t),Tw=(s,e,t)=>e.has(s)||Pf("Cannot "+t),Aw=(s,e,t)=>e.has(s)?Pf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),Rw=(s,e,t)=>(Tw(s,e,"access private method"),t),hu,Nf;let Df=class extends gn{constructor(s){super("",bw),Aw(this,hu),Lf(this,"text"),Lf(this,"texts"),this.text=new Text(s),this.texts=[Ki("p",{},this.text),Ki("p",{},this.text.cloneNode())]}static get observedAttributes(){return["content"]}connectedCallback(){this.shadow.append(...this.texts)}attributeChangedCallback(s,e,t){s==="content"&&t&&Rw(this,hu,Nf).call(this,t)}};hu=new WeakSet,Nf=function(s){this.texts.forEach(e=>{e.textContent=s})},Df=Ew([mi("text-split")],Df);const Cw=`:host {
  --gold: #ffb338;
  --light-shadow: #77571d;
  --dark-shadow: #3e2904;
}

:host {
  background: radial-gradient(#272727, #1b1b1b);
  display: grid;
  grid-template-areas: 'overlap';
  place-content: center;
  text-transform: uppercase;
  height: 100vh;
  width: 100vw;
}

:host > div {
  background-clip: text;
  -webkit-background-clip: text;
  color: #363833;
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  font-size: clamp(3em, 18vw, 15rem);
  grid-area: overlap;
  letter-spacing: 1px;
  -webkit-text-stroke: 4px transparent;
}

:host div.bg {
  background-image: repeating-linear-gradient(
    105deg,
    var(--gold) 0%,
    var(--dark-shadow) 5%,
    var(--gold) 12%
  );
  color: transparent;
  filter: drop-shadow(5px 15px 15px black);
  transform: scaleY(1.05);
  transform-origin: top;
}

:host div.fg {
  background-image: repeating-linear-gradient(
    5deg,
    var(--gold) 0%,
    var(--light-shadow) 23%,
    var(--gold) 31%
  );
  color: #1e2127;
  transform: scale(1);
}
`;var Pw=Object.defineProperty,Lw=Object.getOwnPropertyDescriptor,Uf=s=>{throw TypeError(s)},Nw=(s,e,t)=>e in s?Pw(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Dw=(s,e,t,i)=>{for(var n=i>1?void 0:i?Lw(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=a(n)||n);return n},uu=(s,e,t)=>Nw(s,typeof e!="symbol"?e+"":e,t),Uw=(s,e,t)=>e.has(s)||Uf("Cannot "+t),Iw=(s,e,t)=>e.has(s)?Uf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),Ow=(s,e,t)=>(Uw(s,e,"access private method"),t),du,If;let Of=class extends gn{constructor(s){super("",Cw),Iw(this,du),uu(this,"text"),uu(this,"bg"),uu(this,"fg"),this.text=new Text(s),this.bg=Ki("div",{className:"bg"},this.text),this.fg=Ki("div",{className:"fg"},this.text.cloneNode())}static get observedAttributes(){return["data"]}connectedCallback(){this.shadow.append(this.bg,this.fg)}attributeChangedCallback(s,e,t){s==="data"&&t&&Ow(this,du,If).call(this,t)}};du=new WeakSet,If=function(s){this.bg.textContent=s,this.fg.textContent=s},Of=Dw([mi("text-gold")],Of);const Fw=`:host {
  flex: 1;
  width: 100%;
  height: 190%;
  display: flex;
  flex-direction: column;
  position: fixed;
  box-shadow: 0 0 10vw rgba(0,0,0,0.9) inset;
  top: 0;
}

:host img {
  object-fit: cover;
  animation: kenburns-bottom 10s cubic-bezier(0.55, 0.055, 0.675, 0.19) 2s both;
}

@keyframes kenburns-bottom {
  0% {
    transform: scale(1) translateY(0);
    transform-origin: 50% 84%;
  }
  100% {
    transform: scale(1.25) translateY(15px);
    transform-origin: bottom;
  }
}
`;var zw=Object.getOwnPropertyDescriptor,Bw=(s,e,t,i)=>{for(var n=i>1?void 0:i?zw(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=a(n)||n);return n};Ql=class extends gn{constructor(e,t=1e4,i=2e3){super("",Fw);ne(this,"image");ne(this,"resize",()=>{this.image.width=innerWidth,this.image.height=innerHeight});this.image=new Image(innerWidth,innerHeight),this.image.src=e,this.image.style.animation=`kenburns-bottom ${t}ms cubic-bezier(.55,.055,.675,.19) ${i}ms both`,this.shadow.appendChild(this.image),addEventListener("resize",this.resize)}},Ql=Bw([mi("image-cover")],Ql);class Ff extends HTMLElement{constructor(t){super();ne(this,"progress",Ki("progress",{max:100}));ne(this,"text");ne(this,"callback",({total:t,loaded:i})=>{const n=Math.round(i/t*100);this.progress.value=n,n>99&&this.remove()});this.text=new Text(t);const i=this.attachShadow({mode:"open"});this.style.display="flex",this.style.flexDirection="column",this.style.alignItems="flex-end",this.progress.style.width="300px",this.style.color="#666666",i.append(this.progress,this.text)}}customElements.define("progress-elm",Ff);var kw=Object.getOwnPropertyDescriptor,Hw=(s,e,t,i)=>{for(var n=i>1?void 0:i?kw(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=a(n)||n);return n};sc=class extends HTMLElement{constructor(e,t=2e3){super();ne(this,"text");this.text=new Text(e),this.style.lineHeight="1",this.style.display="block",this.style.fontSize="100px",this.style.fontWeight="bold",this.style.color="#fbf4e8",this.style.opacity=".9",this.style.animation=`text-pop-up ${t}ms cubic-bezier(.25,.46,.45,.94) both`}connectedCallback(){this.appendChild(this.text)}pulse(){this.style.animation+=", heartbeat 1.32s ease-in-out infinite both"}},sc=Hw([mi("text-pop-up-elm")],sc),Pa=(Wm=class{constructor(s){At(this,Sr,new Set);ne(this,"subscribe",s=>(et(this,Sr).add(s),{unsubscribe:()=>{et(this,Sr).delete(s)}}));ne(this,"emit",s=>{et(this,Sr).forEach(e=>e(s))});s&&this.emit(s)}asObserver(){const s=this.subscribe,e=this.pipe;return{get subscribe(){return s},get pipe(){return e}}}pipe(...s){return s.reduce((e,t)=>t(e),this)}},Sr=new WeakMap,Wm);var Vw=Object.getOwnPropertyDescriptor,Gw=(s,e,t,i)=>{for(var n=i>1?void 0:i?Vw(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=a(n)||n);return n};Na=class extends dv{},Na=Gw([mn()],Na);class Ww extends Sp{}class zf extends fv{}var jw=Object.getOwnPropertyDescriptor,qw=(s,e,t,i)=>{for(var n=i>1?void 0:i?jw(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=a(n)||n);return n};let Bf=class extends kh{};Bf=qw([mn()],Bf);class Xw extends ce{}var Yw=Object.getOwnPropertyDescriptor,Zw=(s,e,t,i)=>{for(var n=i>1?void 0:i?Yw(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=a(n)||n);return n};let kf=class extends HTMLCanvasElement{constructor(){super();ne(this,"offscreen");this.offscreen=this.transferControlToOffscreen()}};kf=Zw([mi("graphic-canvas","canvas")],kf);class Kw extends ph{}lc=(jm=class extends nw{constructor(e,t,i){super(e);At(this,ql);At(this,wn);At(this,wa);It(this,wn,new au(t,i)),this.addPass(et(this,wn));const n=new Xw(innerWidth,innerHeight),r=new dn(n,.06,.2,.4);this.addPass(r),It(this,wa,new ds(t,i,innerWidth,innerHeight)),this.addPass(et(this,wa)),this.addPass(new xf)}get scene(){return et(this,wn).scene}get camera(){return et(this,wn).camera}setCamera(e){this.passes.forEach(t=>{t instanceof au&&(t.camera=e),t instanceof ds&&(t.camera=e)})}resize(){Zi(this,ql,sg).call(this,this.camera)&&(this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix()),this.renderer.setSize(innerWidth,innerHeight),this.setSize(innerWidth,innerHeight),this.passes.forEach(e=>{var t;e instanceof au&&e.setSize(innerWidth,innerHeight),e instanceof gf&&((t=e.uniforms.resolution)==null||t.value.set(innerWidth,innerHeight)),e instanceof dn&&e.setSize(innerWidth,innerHeight),e instanceof xf&&e.setSize(innerWidth,innerHeight)})}},wn=new WeakMap,wa=new WeakMap,ql=new WeakSet,sg=function(e){return e.type==="PerspectiveCamera"},jm);class pu extends lM{}class Jw extends Kg{}Uu=s=>{if(s.computeBoundingSphere(),!s.boundingSphere)throw"Bounding sphere is null";return s.boundingSphere};var $w=Object.defineProperty,Qw=Object.getOwnPropertyDescriptor,Hf=s=>{throw TypeError(s)},eS=(s,e,t)=>e in s?$w(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,tS=(s,e,t,i)=>{for(var n=i>1?void 0:i?Qw(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=a(n)||n);return n},iS=(s,e,t)=>eS(s,e+"",t),Vf=(s,e,t)=>e.has(s)||Hf("Cannot "+t),St=(s,e,t)=>(Vf(s,e,"read from private field"),t?t.call(s):e.get(s)),vn=(s,e,t)=>e.has(s)?Hf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),ur=(s,e,t,i)=>(Vf(s,e,"write to private field"),e.set(s,t),t),da,dr,Ll,pa,Nl,pr,Gi;ac=class{constructor(s){vn(this,da),vn(this,dr),vn(this,Ll),vn(this,pa),vn(this,Nl),vn(this,pr),iS(this,"progress"),vn(this,Gi,e=>{const t=e.split(".").slice(0,-1).join(""),i=new Ff(t);return this.progress.emit(i),i.callback}),ur(this,pr,s),this.progress=new Pa,ur(this,da,new yM),ur(this,dr,new cv),ur(this,Ll,new xp),ur(this,pa,new tw),St(this,pa).setDataType(Vt),ur(this,Nl,new gM)}loadModel(s){return St(this,da).loadAsync(s,St(this,Gi).call(this,s))}loadModels(s){return nc(s.map(e=>{const t=St(this,Gi).call(this,e);return St(this,da).loadAsync(e,t)}))}loadTexture(s){return St(this,Ll).loadAsync(s,St(this,Gi).call(this,s))}loadEnv(s){return St(this,pa).loadAsync(s,St(this,Gi).call(this,s))}loadFont(s){return St(this,Nl).loadAsync(s,St(this,Gi).call(this,s))}async loadAudio(s){const e=t=>new Ww(St(this,pr)).setBuffer(t);return St(this,dr).loadAsync(s,St(this,Gi).call(this,s)).then(e)}async loadPositionalAudio(s){const e=t=>new zf(St(this,pr)).setBuffer(t);return St(this,dr).loadAsync(s,St(this,Gi).call(this,s)).then(e)}async loadPositionalAudios(s){const e=t=>new zf(St(this,pr)).setBuffer(t);return nc(s.map(async t=>{const i=St(this,Gi).call(this,t);return St(this,dr).loadAsync(t,i).then(e)}))}},da=new WeakMap,dr=new WeakMap,Ll=new WeakMap,pa=new WeakMap,Nl=new WeakMap,pr=new WeakMap,Gi=new WeakMap,ac=tS([mn([Na])],ac);class Ai{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new S);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new S);const i=this.elements,n=e.x,r=e.y,a=e.z;return t.x=i[0]*n+i[1]*r+i[2]*a,t.y=i[3]*n+i[4]*r+i[5]*a,t.z=i[6]*n+i[7]*r+i[8]*a,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Ai);const i=this.elements,n=e.elements,r=t.elements,a=i[0],o=i[1],l=i[2],c=i[3],h=i[4],d=i[5],u=i[6],p=i[7],g=i[8],v=n[0],m=n[1],f=n[2],x=n[3],y=n[4],_=n[5],R=n[6],T=n[7],E=n[8];return r[0]=a*v+o*x+l*R,r[1]=a*m+o*y+l*T,r[2]=a*f+o*_+l*E,r[3]=c*v+h*x+d*R,r[4]=c*m+h*y+d*T,r[5]=c*f+h*_+d*E,r[6]=u*v+p*x+g*R,r[7]=u*m+p*y+g*T,r[8]=u*f+p*_+g*E,t}scale(e,t){t===void 0&&(t=new Ai);const i=this.elements,n=t.elements;for(let r=0;r!==3;r++)n[3*r+0]=e.x*i[3*r+0],n[3*r+1]=e.y*i[3*r+1],n[3*r+2]=e.z*i[3*r+2];return t}solve(e,t){t===void 0&&(t=new S);const i=3,n=4,r=[];let a,o;for(a=0;a<i*n;a++)r.push(0);for(a=0;a<3;a++)for(o=0;o<3;o++)r[a+n*o]=this.elements[a+3*o];r[3]=e.x,r[7]=e.y,r[11]=e.z;let l=3;const c=l;let h;const d=4;let u;do{if(a=c-l,r[a+n*a]===0){for(o=a+1;o<c;o++)if(r[a+n*o]!==0){h=d;do u=d-h,r[u+n*a]+=r[u+n*o];while(--h);break}}if(r[a+n*a]!==0)for(o=a+1;o<c;o++){const p=r[a+n*o]/r[a+n*a];h=d;do u=d-h,r[u+n*o]=u<=a?0:r[u+n*o]-r[u+n*a]*p;while(--h)}}while(--l);if(t.z=r[2*n+3]/r[2*n+2],t.y=(r[1*n+3]-r[1*n+2]*t.z)/r[1*n+1],t.x=(r[0*n+3]-r[0*n+2]*t.z-r[0*n+1]*t.y)/r[0*n+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,i){if(i===void 0)return this.elements[t+3*e];this.elements[t+3*e]=i}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let i=0;i<9;i++)e+=this.elements[i]+t;return e}reverse(e){e===void 0&&(e=new Ai);const t=3,i=6,n=sS;let r,a;for(r=0;r<3;r++)for(a=0;a<3;a++)n[r+i*a]=this.elements[r+3*a];n[3]=1,n[9]=0,n[15]=0,n[4]=0,n[10]=1,n[16]=0,n[5]=0,n[11]=0,n[17]=1;let o=3;const l=o;let c;const h=i;let d;do{if(r=l-o,n[r+i*r]===0){for(a=r+1;a<l;a++)if(n[r+i*a]!==0){c=h;do d=h-c,n[d+i*r]+=n[d+i*a];while(--c);break}}if(n[r+i*r]!==0)for(a=r+1;a<l;a++){const u=n[r+i*a]/n[r+i*r];c=h;do d=h-c,n[d+i*a]=d<=r?0:n[d+i*a]-n[d+i*r]*u;while(--c)}}while(--o);r=2;do{a=r-1;do{const u=n[r+i*a]/n[r+i*r];c=i;do d=i-c,n[d+i*a]=n[d+i*a]-n[d+i*r]*u;while(--c)}while(a--)}while(--r);r=2;do{const u=1/n[r+i*r];c=i;do d=i-c,n[d+i*r]=n[d+i*r]*u;while(--c)}while(r--);r=2;do{a=2;do{if(d=n[t+a+i*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,a,d)}while(a--)}while(r--);return e}setRotationFromQuaternion(e){const t=e.x,i=e.y,n=e.z,r=e.w,a=t+t,o=i+i,l=n+n,c=t*a,h=t*o,d=t*l,u=i*o,p=i*l,g=n*l,v=r*a,m=r*o,f=r*l,x=this.elements;return x[0]=1-(u+g),x[1]=h-f,x[2]=d+m,x[3]=h+f,x[4]=1-(c+g),x[5]=p-v,x[6]=d-m,x[7]=p+v,x[8]=1-(c+u),this}transpose(e){e===void 0&&(e=new Ai);const t=this.elements,i=e.elements;let n;return i[0]=t[0],i[4]=t[4],i[8]=t[8],n=t[1],i[1]=t[3],i[3]=n,n=t[2],i[2]=t[6],i[6]=n,n=t[5],i[5]=t[7],i[7]=n,e}}const sS=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class S{constructor(e,t,i){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),this.x=e,this.y=t,this.z=i}cross(e,t){t===void 0&&(t=new S);const i=e.x,n=e.y,r=e.z,a=this.x,o=this.y,l=this.z;return t.x=o*r-l*n,t.y=l*i-a*r,t.z=a*n-o*i,t}set(e,t,i){return this.x=e,this.y=t,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new S(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new S(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Ai([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,i=this.z,n=Math.sqrt(e*e+t*t+i*i);if(n>0){const r=1/n;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return n}unit(e){e===void 0&&(e=new S);const t=this.x,i=this.y,n=this.z;let r=Math.sqrt(t*t+i*i+n*n);return r>0?(r=1/r,e.x=t*r,e.y=i*r,e.z=n*r):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,i=this.z;return Math.sqrt(e*e+t*t+i*i)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z;return Math.sqrt((r-t)*(r-t)+(a-i)*(a-i)+(o-n)*(o-n))}distanceSquared(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z;return(r-t)*(r-t)+(a-i)*(a-i)+(o-n)*(o-n)}scale(e,t){t===void 0&&(t=new S);const i=this.x,n=this.y,r=this.z;return t.x=e*i,t.y=e*n,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new S),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,i){return i===void 0&&(i=new S),i.x=this.x+e*t.x,i.y=this.y+e*t.y,i.z=this.z+e*t.z,i}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new S),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const i=this.length();if(i>0){const n=nS,r=1/i;n.set(this.x*r,this.y*r,this.z*r);const a=rS;Math.abs(n.x)<.9?(a.set(1,0,0),n.cross(a,e)):(a.set(0,1,0),n.cross(a,e)),n.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,i){const n=this.x,r=this.y,a=this.z;i.x=n+(e.x-n)*t,i.y=r+(e.y-r)*t,i.z=a+(e.z-a)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Gf),Gf.almostEquals(e,t)}clone(){return new S(this.x,this.y,this.z)}}S.ZERO=new S(0,0,0),S.UNIT_X=new S(1,0,0),S.UNIT_Y=new S(0,1,0),S.UNIT_Z=new S(0,0,1);const nS=new S,rS=new S,Gf=new S;class xt{constructor(e){e===void 0&&(e={}),this.lowerBound=new S,this.upperBound=new S,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,i,n){const r=this.lowerBound,a=this.upperBound,o=i;r.copy(e[0]),o&&o.vmult(r,r),a.copy(r);for(let l=1;l<e.length;l++){let c=e[l];o&&(o.vmult(c,Wf),c=Wf),c.x>a.x&&(a.x=c.x),c.x<r.x&&(r.x=c.x),c.y>a.y&&(a.y=c.y),c.y<r.y&&(r.y=c.y),c.z>a.z&&(a.z=c.z),c.z<r.z&&(r.z=c.z)}return t&&(t.vadd(r,r),t.vadd(a,a)),n&&(r.x-=n,r.y-=n,r.z-=n,a.x+=n,a.y+=n,a.z+=n),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new xt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,i=this.upperBound,n=e.lowerBound,r=e.upperBound,a=n.x<=i.x&&i.x<=r.x||t.x<=r.x&&r.x<=i.x,o=n.y<=i.y&&i.y<=r.y||t.y<=r.y&&r.y<=i.y,l=n.z<=i.z&&i.z<=r.z||t.z<=r.z&&r.z<=i.z;return a&&o&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,i=this.upperBound,n=e.lowerBound,r=e.upperBound;return t.x<=n.x&&i.x>=r.x&&t.y<=n.y&&i.y>=r.y&&t.z<=n.z&&i.z>=r.z}getCorners(e,t,i,n,r,a,o,l){const c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),i.set(h.x,h.y,c.z),n.set(c.x,h.y,h.z),r.set(h.x,c.y,h.z),a.set(c.x,h.y,c.z),o.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(e,t){const i=jf,n=i[0],r=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],d=i[7];this.getCorners(n,r,a,o,l,c,h,d);for(let u=0;u!==8;u++){const p=i[u];e.pointToLocal(p,p)}return t.setFromPoints(i)}toWorldFrame(e,t){const i=jf,n=i[0],r=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],d=i[7];this.getCorners(n,r,a,o,l,c,h,d);for(let u=0;u!==8;u++){const p=i[u];e.pointToWorld(p,p)}return t.setFromPoints(i)}overlapsRay(e){const{direction:t,from:i}=e,n=1/t.x,r=1/t.y,a=1/t.z,o=(this.lowerBound.x-i.x)*n,l=(this.upperBound.x-i.x)*n,c=(this.lowerBound.y-i.y)*r,h=(this.upperBound.y-i.y)*r,d=(this.lowerBound.z-i.z)*a,u=(this.upperBound.z-i.z)*a,p=Math.max(Math.max(Math.min(o,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(o,l),Math.max(c,h)),Math.max(d,u));return!(g<0||p>g)}}const Wf=new S,jf=[new S,new S,new S,new S,new S,new S,new S,new S];class qf{constructor(){this.matrix=[]}get(e,t){let{index:i}=e,{index:n}=t;if(n>i){const r=n;n=i,i=r}return this.matrix[(i*(i+1)>>1)+n-1]}set(e,t,i){let{index:n}=e,{index:r}=t;if(r>n){const a=r;r=n,n=a}this.matrix[(n*(n+1)>>1)+r-1]=i?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Xf{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;return i[e]===void 0&&(i[e]=[]),i[e].includes(t)||i[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return!!(i[e]!==void 0&&i[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const i=this._listeners;if(i[e]===void 0)return this;const n=i[e].indexOf(t);return n!==-1&&i[e].splice(n,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const t=this._listeners[e.type];if(t!==void 0){e.target=this;for(let i=0,n=t.length;i<n;i++)t[i].call(this,e)}return this}}class Et{constructor(e,t,i,n){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=1),this.x=e,this.y=t,this.z=i,this.w=n}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const i=Math.sin(t*.5);return this.x=e.x*i,this.y=e.y*i,this.z=e.z*i,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new S),this.normalize();const t=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/i,e.y=this.y/i,e.z=this.z/i),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const i=aS,n=oS;e.tangents(i,n),this.setFromAxisAngle(i,Math.PI)}else{const i=e.cross(t);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Et);const i=this.x,n=this.y,r=this.z,a=this.w,o=e.x,l=e.y,c=e.z,h=e.w;return t.x=i*h+a*o+n*c-r*l,t.y=n*h+a*l+r*o-i*c,t.z=r*h+a*c+i*l-n*o,t.w=a*h-i*o-n*l-r*c,t}inverse(e){e===void 0&&(e=new Et);const t=this.x,i=this.y,n=this.z,r=this.w;this.conjugate(e);const a=1/(t*t+i*i+n*n+r*r);return e.x*=a,e.y*=a,e.z*=a,e.w*=a,e}conjugate(e){return e===void 0&&(e=new Et),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new S);const i=e.x,n=e.y,r=e.z,a=this.x,o=this.y,l=this.z,c=this.w,h=c*i+o*r-l*n,d=c*n+l*i-a*r,u=c*r+a*n-o*i,p=-a*i-o*n-l*r;return t.x=h*c+p*-a+d*-l-u*-o,t.y=d*c+p*-o+u*-a-h*-l,t.z=u*c+p*-l+h*-o-d*-a,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let i,n,r;const a=this.x,o=this.y,l=this.z,c=this.w;switch(t){case"YZX":const h=a*o+l*c;if(h>.499&&(i=2*Math.atan2(a,c),n=Math.PI/2,r=0),h<-.499&&(i=-2*Math.atan2(a,c),n=-Math.PI/2,r=0),i===void 0){const d=a*a,u=o*o,p=l*l;i=Math.atan2(2*o*c-2*a*l,1-2*u-2*p),n=Math.asin(2*h),r=Math.atan2(2*a*c-2*o*l,1-2*d-2*p)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=i,e.z=n,e.x=r}setFromEuler(e,t,i,n){n===void 0&&(n="XYZ");const r=Math.cos(e/2),a=Math.cos(t/2),o=Math.cos(i/2),l=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(i/2);return n==="XYZ"?(this.x=l*a*o+r*c*h,this.y=r*c*o-l*a*h,this.z=r*a*h+l*c*o,this.w=r*a*o-l*c*h):n==="YXZ"?(this.x=l*a*o+r*c*h,this.y=r*c*o-l*a*h,this.z=r*a*h-l*c*o,this.w=r*a*o+l*c*h):n==="ZXY"?(this.x=l*a*o-r*c*h,this.y=r*c*o+l*a*h,this.z=r*a*h+l*c*o,this.w=r*a*o-l*c*h):n==="ZYX"?(this.x=l*a*o-r*c*h,this.y=r*c*o+l*a*h,this.z=r*a*h-l*c*o,this.w=r*a*o+l*c*h):n==="YZX"?(this.x=l*a*o+r*c*h,this.y=r*c*o+l*a*h,this.z=r*a*h-l*c*o,this.w=r*a*o-l*c*h):n==="XZY"&&(this.x=l*a*o-r*c*h,this.y=r*c*o-l*a*h,this.z=r*a*h+l*c*o,this.w=r*a*o+l*c*h),this}clone(){return new Et(this.x,this.y,this.z,this.w)}slerp(e,t,i){i===void 0&&(i=new Et);const n=this.x,r=this.y,a=this.z,o=this.w;let l=e.x,c=e.y,h=e.z,d=e.w,u,p,g,v,m;return p=n*l+r*c+a*h+o*d,p<0&&(p=-p,l=-l,c=-c,h=-h,d=-d),1-p>1e-6?(u=Math.acos(p),g=Math.sin(u),v=Math.sin((1-t)*u)/g,m=Math.sin(t*u)/g):(v=1-t,m=t),i.x=v*n+m*l,i.y=v*r+m*c,i.z=v*a+m*h,i.w=v*o+m*d,i}integrate(e,t,i,n){n===void 0&&(n=new Et);const r=e.x*i.x,a=e.y*i.y,o=e.z*i.z,l=this.x,c=this.y,h=this.z,d=this.w,u=t*.5;return n.x+=u*(r*d+a*h-o*c),n.y+=u*(a*d+o*l-r*h),n.z+=u*(o*d+r*c-a*l),n.w+=u*(-r*l-a*c-o*h),n}}const aS=new S,oS=new S,lS={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Re{constructor(e){e===void 0&&(e={}),this.id=Re.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,i,n){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Re.idCounter=0,Re.types=lS;class rt{constructor(e){e===void 0&&(e={}),this.position=new S,this.quaternion=new Et,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return rt.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return rt.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new S),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,i,n){return n===void 0&&(n=new S),i.vsub(e,n),t.conjugate(Yf),Yf.vmult(n,n),n}static pointToWorldFrame(e,t,i,n){return n===void 0&&(n=new S),t.vmult(i,n),n.vadd(e,n),n}static vectorToWorldFrame(e,t,i){return i===void 0&&(i=new S),e.vmult(t,i),i}static vectorToLocalFrame(e,t,i,n){return n===void 0&&(n=new S),t.w*=-1,t.vmult(i,n),t.w*=-1,n}}const Yf=new Et;class fr extends Re{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:i=[],normals:n=[],axes:r,boundingSphereRadius:a}=e;super({type:Re.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=i,this.faceNormals=n,this.faceNormals.length===0&&this.computeNormals(),a?this.boundingSphereRadius=a:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,i=this.uniqueEdges;i.length=0;const n=new S;for(let r=0;r!==e.length;r++){const a=e[r],o=a.length;for(let l=0;l!==o;l++){const c=(l+1)%o;t[a[l]].vsub(t[a[c]],n),n.normalize();let h=!1;for(let d=0;d!==i.length;d++)if(i[d].almostEquals(n)||i[d].almostEquals(n)){h=!0;break}h||i.push(n.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let n=0;n<this.faces[e].length;n++)if(!this.vertices[this.faces[e][n]])throw new Error(`Vertex ${this.faces[e][n]} not found!`);const t=this.faceNormals[e]||new S;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const i=this.vertices[this.faces[e][0]];if(t.dot(i)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let n=0;n<this.faces[e].length;n++)console.warn(`.vertices[${this.faces[e][n]}] = Vec3(${this.vertices[this.faces[e][n]].toString()})`)}}}getFaceNormal(e,t){const i=this.faces[e],n=this.vertices[i[0]],r=this.vertices[i[1]],a=this.vertices[i[2]];fr.computeNormal(n,r,a,t)}static computeNormal(e,t,i,n){const r=new S,a=new S;t.vsub(e,a),i.vsub(t,r),r.cross(a,n),n.isZero()||n.normalize()}clipAgainstHull(e,t,i,n,r,a,o,l,c){const h=new S;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<i.faces.length;g++){h.copy(i.faceNormals[g]),r.vmult(h,h);const v=h.dot(a);v>u&&(u=v,d=g)}const p=[];for(let g=0;g<i.faces[d].length;g++){const v=i.vertices[i.faces[d][g]],m=new S;m.copy(v),r.vmult(m,m),n.vadd(m,m),p.push(m)}d>=0&&this.clipFaceAgainstHull(a,e,t,p,o,l,c)}findSeparatingAxis(e,t,i,n,r,a,o,l){const c=new S,h=new S,d=new S,u=new S,p=new S,g=new S;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let f=0;f!==m.uniqueAxes.length;f++){i.vmult(m.uniqueAxes[f],c);const x=m.testSepAxis(c,e,t,i,n,r);if(x===!1)return!1;x<v&&(v=x,a.copy(c))}else{const f=o?o.length:m.faces.length;for(let x=0;x<f;x++){const y=o?o[x]:x;c.copy(m.faceNormals[y]),i.vmult(c,c);const _=m.testSepAxis(c,e,t,i,n,r);if(_===!1)return!1;_<v&&(v=_,a.copy(c))}}if(e.uniqueAxes)for(let f=0;f!==e.uniqueAxes.length;f++){r.vmult(e.uniqueAxes[f],h);const x=m.testSepAxis(h,e,t,i,n,r);if(x===!1)return!1;x<v&&(v=x,a.copy(h))}else{const f=l?l.length:e.faces.length;for(let x=0;x<f;x++){const y=l?l[x]:x;h.copy(e.faceNormals[y]),r.vmult(h,h);const _=m.testSepAxis(h,e,t,i,n,r);if(_===!1)return!1;_<v&&(v=_,a.copy(h))}}for(let f=0;f!==m.uniqueEdges.length;f++){i.vmult(m.uniqueEdges[f],u);for(let x=0;x!==e.uniqueEdges.length;x++)if(r.vmult(e.uniqueEdges[x],p),u.cross(p,g),!g.almostZero()){g.normalize();const y=m.testSepAxis(g,e,t,i,n,r);if(y===!1)return!1;y<v&&(v=y,a.copy(g))}}return n.vsub(t,d),d.dot(a)>0&&a.negate(a),!0}testSepAxis(e,t,i,n,r,a){const o=this;fr.project(o,e,i,n,fu),fr.project(t,e,r,a,mu);const l=fu[0],c=fu[1],h=mu[0],d=mu[1];if(l<d||h<c)return!1;const u=l-d,p=h-c;return u<p?u:p}calculateLocalInertia(e,t){const i=new S,n=new S;this.computeLocalAABB(n,i);const r=i.x-n.x,a=i.y-n.y,o=i.z-n.z;t.x=.08333333333333333*e*(2*a*2*a+2*o*2*o),t.y=.08333333333333333*e*(2*r*2*r+2*o*2*o),t.z=.08333333333333333*e*(2*a*2*a+2*r*2*r)}getPlaneConstantOfFace(e){const t=this.faces[e],i=this.faceNormals[e],n=this.vertices[t[0]];return-i.dot(n)}clipFaceAgainstHull(e,t,i,n,r,a,o){const l=new S,c=new S,h=new S,d=new S,u=new S,p=new S,g=new S,v=new S,m=this,f=[],x=n,y=f;let _=-1,R=Number.MAX_VALUE;for(let b=0;b<m.faces.length;b++){l.copy(m.faceNormals[b]),i.vmult(l,l);const L=l.dot(e);L<R&&(R=L,_=b)}if(_<0)return;const T=m.faces[_];T.connectedFaces=[];for(let b=0;b<m.faces.length;b++)for(let L=0;L<m.faces[b].length;L++)T.indexOf(m.faces[b][L])!==-1&&b!==_&&T.connectedFaces.indexOf(b)===-1&&T.connectedFaces.push(b);const E=T.length;for(let b=0;b<E;b++){const L=m.vertices[T[b]],I=m.vertices[T[(b+1)%E]];L.vsub(I,c),h.copy(c),i.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[_]),i.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),p.copy(L),i.vmult(p,p),t.vadd(p,p);const D=T.connectedFaces[b];g.copy(this.faceNormals[D]);const O=this.getPlaneConstantOfFace(D);v.copy(g),i.vmult(v,v);const B=O-v.dot(t);for(this.clipFaceAgainstPlane(x,y,v,B);x.length;)x.shift();for(;y.length;)x.push(y.shift())}g.copy(this.faceNormals[_]);const P=this.getPlaneConstantOfFace(_);v.copy(g),i.vmult(v,v);const M=P-v.dot(t);for(let b=0;b<x.length;b++){let L=v.dot(x[b])+M;if(L<=r&&(console.log(`clamped: depth=${L} to minDist=${r}`),L=r),L<=a){const I=x[b];if(L<=1e-6){const D={point:I,normal:v,depth:L};o.push(D)}}}}clipFaceAgainstPlane(e,t,i,n){let r,a;const o=e.length;if(o<2)return t;let l=e[e.length-1],c=e[0];r=i.dot(l)+n;for(let h=0;h<o;h++){if(c=e[h],a=i.dot(c)+n,r<0)if(a<0){const d=new S;d.copy(c),t.push(d)}else{const d=new S;l.lerp(c,r/(r-a),d),t.push(d)}else if(a<0){const d=new S;l.lerp(c,r/(r-a),d),t.push(d),t.push(c)}l=c,r=a}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new S);const i=this.vertices,n=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(i[r],n[r]),e.vadd(n[r],n[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const i=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let n=0;n<this.vertices.length;n++){const r=i[n];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new S);const i=this.faceNormals,n=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(i[r],n[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let i=0;i!==t.length;i++){const n=t[i].lengthSquared();n>e&&(e=n)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,i,n){const r=this.vertices;let a,o,l,c,h,d,u=new S;for(let p=0;p<r.length;p++){u.copy(r[p]),t.vmult(u,u),e.vadd(u,u);const g=u;(a===void 0||g.x<a)&&(a=g.x),(c===void 0||g.x>c)&&(c=g.x),(o===void 0||g.y<o)&&(o=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}i.set(a,o,l),n.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new S);const t=this.vertices;for(let i=0;i<t.length;i++)e.vadd(t[i],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const i=this.vertices.length,n=this.vertices;if(t){for(let r=0;r<i;r++){const a=n[r];t.vmult(a,a)}for(let r=0;r<this.faceNormals.length;r++){const a=this.faceNormals[r];t.vmult(a,a)}}if(e)for(let r=0;r<i;r++){const a=n[r];a.vadd(e,a)}}pointIsInside(e){const t=this.vertices,i=this.faces,n=this.faceNormals,r=new S;this.getAveragePointLocal(r);for(let a=0;a<this.faces.length;a++){let o=n[a];const l=t[i[a][0]],c=new S;e.vsub(l,c);const h=o.dot(c),d=new S;r.vsub(l,d);const u=o.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(e,t,i,n,r){const a=e.vertices.length,o=cS;let l=0,c=0;const h=hS,d=e.vertices;h.setZero(),rt.vectorToLocalFrame(i,n,t,o),rt.pointToLocalFrame(i,n,h,h);const u=h.dot(o);c=l=d[0].dot(o);for(let p=1;p<a;p++){const g=d[p].dot(o);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const p=c;c=l,l=p}r[0]=l,r[1]=c}}const fu=[],mu=[];new S;const cS=new S,hS=new S;class gu extends Re{constructor(e){super({type:Re.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,i=this.halfExtents.z,n=S,r=[new n(-e,-t,-i),new n(e,-t,-i),new n(e,t,-i),new n(-e,t,-i),new n(-e,-t,i),new n(e,-t,i),new n(e,t,i),new n(-e,t,i)],a=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new n(0,0,1),new n(0,1,0),new n(1,0,0)],l=new fr({vertices:r,faces:a,axes:o});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new S),gu.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,i){const n=e;i.x=.08333333333333333*t*(2*n.y*2*n.y+2*n.z*2*n.z),i.y=.08333333333333333*t*(2*n.x*2*n.x+2*n.z*2*n.z),i.z=.08333333333333333*t*(2*n.y*2*n.y+2*n.x*2*n.x)}getSideNormals(e,t){const i=e,n=this.halfExtents;if(i[0].set(n.x,0,0),i[1].set(0,n.y,0),i[2].set(0,0,n.z),i[3].set(-n.x,0,0),i[4].set(0,-n.y,0),i[5].set(0,0,-n.z),t!==void 0)for(let r=0;r!==i.length;r++)t.vmult(i[r],i[r]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,i){const n=this.halfExtents,r=[[n.x,n.y,n.z],[-n.x,n.y,n.z],[-n.x,-n.y,n.z],[-n.x,-n.y,-n.z],[n.x,-n.y,-n.z],[n.x,n.y,-n.z],[-n.x,n.y,-n.z],[n.x,-n.y,n.z]];for(let a=0;a<r.length;a++)Fs.set(r[a][0],r[a][1],r[a][2]),t.vmult(Fs,Fs),e.vadd(Fs,Fs),i(Fs.x,Fs.y,Fs.z)}calculateWorldAABB(e,t,i,n){const r=this.halfExtents;Wi[0].set(r.x,r.y,r.z),Wi[1].set(-r.x,r.y,r.z),Wi[2].set(-r.x,-r.y,r.z),Wi[3].set(-r.x,-r.y,-r.z),Wi[4].set(r.x,-r.y,-r.z),Wi[5].set(r.x,r.y,-r.z),Wi[6].set(-r.x,r.y,-r.z),Wi[7].set(r.x,-r.y,r.z);const a=Wi[0];t.vmult(a,a),e.vadd(a,a),n.copy(a),i.copy(a);for(let o=1;o<8;o++){const l=Wi[o];t.vmult(l,l),e.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>n.x&&(n.x=c),h>n.y&&(n.y=h),d>n.z&&(n.z=d),c<i.x&&(i.x=c),h<i.y&&(i.y=h),d<i.z&&(i.z=d)}}}const Fs=new S,Wi=[new S,new S,new S,new S,new S,new S,new S,new S],vu={DYNAMIC:1,STATIC:2,KINEMATIC:4},xu={AWAKE:0,SLEEPY:1,SLEEPING:2};class Ce extends Xf{constructor(e){e===void 0&&(e={}),super(),this.id=Ce.idCounter++,this.index=-1,this.world=null,this.vlambda=new S,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new S,this.previousPosition=new S,this.interpolatedPosition=new S,this.initPosition=new S,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new S,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new S,this.force=new S;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?Ce.STATIC:Ce.DYNAMIC,typeof e.type==typeof Ce.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=Ce.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new S,this.quaternion=new Et,this.initQuaternion=new Et,this.previousQuaternion=new Et,this.interpolatedQuaternion=new Et,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new S,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new S,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new S,this.invInertia=new S,this.invInertiaWorld=new Ai,this.invMassSolve=0,this.invInertiaSolve=new S,this.invInertiaWorldSolve=new Ai,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new S(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new S(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new xt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new S,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=Ce.AWAKE,this.wakeUpAfterNarrowphase=!1,e===Ce.SLEEPING&&this.dispatchEvent(Ce.wakeupEvent)}sleep(){this.sleepState=Ce.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),n=this.sleepSpeedLimit**2;t===Ce.AWAKE&&i<n?(this.sleepState=Ce.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(Ce.sleepyEvent)):t===Ce.SLEEPY&&i>n?this.wakeUp():t===Ce.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Ce.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Ce.SLEEPING||this.type===Ce.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new S),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new S),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new S),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new S),this.quaternion.vmult(e,t),t}addShape(e,t,i){const n=new S,r=new Et;return t&&n.copy(t),i&&r.copy(i),this.shapes.push(e),this.shapeOffsets.push(n),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,i=e.length;let n=0;for(let r=0;r!==i;r++){const a=e[r];a.updateBoundingSphereRadius();const o=t[r].length(),l=a.boundingSphereRadius;o+l>n&&(n=o+l)}this.boundingRadius=n}updateAABB(){const e=this.shapes,t=this.shapeOffsets,i=this.shapeOrientations,n=e.length,r=uS,a=dS,o=this.quaternion,l=this.aabb,c=pS;for(let h=0;h!==n;h++){const d=e[h];o.vmult(t[h],r),r.vadd(this.position,r),o.mult(i[h],a),d.calculateWorldAABB(r,a,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const i=fS,n=mS;i.setRotationFromQuaternion(this.quaternion),i.transpose(n),i.scale(t,i),i.mmult(n,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new S),this.type!==Ce.DYNAMIC)return;this.sleepState===Ce.SLEEPING&&this.wakeUp();const i=gS;t.cross(e,i),this.force.vadd(e,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new S),this.type!==Ce.DYNAMIC)return;const i=vS,n=xS;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,n),this.applyForce(i,n)}applyTorque(e){this.type===Ce.DYNAMIC&&(this.sleepState===Ce.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new S),this.type!==Ce.DYNAMIC)return;this.sleepState===Ce.SLEEPING&&this.wakeUp();const i=t,n=_S;n.copy(e),n.scale(this.invMass,n),this.velocity.vadd(n,this.velocity);const r=yS;i.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new S),this.type!==Ce.DYNAMIC)return;const i=bS,n=MS;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,n),this.applyImpulse(i,n)}updateMassProperties(){const e=wS;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,i=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),gu.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!i?1/t.x:0,t.y>0&&!i?1/t.y:0,t.z>0&&!i?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const i=new S;return e.vsub(this.position,i),this.angularVelocity.cross(i,t),this.velocity.vadd(t,t),t}integrate(e,t,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Ce.DYNAMIC||this.type===Ce.KINEMATIC)||this.sleepState===Ce.SLEEPING)return;const n=this.velocity,r=this.angularVelocity,a=this.position,o=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,p=h*e;n.x+=o.x*p*u.x,n.y+=o.y*p*u.y,n.z+=o.z*p*u.z;const g=d.elements,v=this.angularFactor,m=l.x*v.x,f=l.y*v.y,x=l.z*v.z;r.x+=e*(g[0]*m+g[1]*f+g[2]*x),r.y+=e*(g[3]*m+g[4]*f+g[5]*x),r.z+=e*(g[6]*m+g[7]*f+g[8]*x),a.x+=n.x*e,a.y+=n.y*e,a.z+=n.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(i?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Ce.idCounter=0,Ce.COLLIDE_EVENT_NAME="collide",Ce.DYNAMIC=vu.DYNAMIC,Ce.STATIC=vu.STATIC,Ce.KINEMATIC=vu.KINEMATIC,Ce.AWAKE=xu.AWAKE,Ce.SLEEPY=xu.SLEEPY,Ce.SLEEPING=xu.SLEEPING,Ce.wakeupEvent={type:"wakeup"},Ce.sleepyEvent={type:"sleepy"},Ce.sleepEvent={type:"sleep"};const uS=new S,dS=new Et,pS=new xt,fS=new Ai,mS=new Ai;new Ai;const gS=new S,vS=new S,xS=new S,_S=new S,yS=new S,bS=new S,MS=new S,wS=new S;class Zf{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&Ce.STATIC)!==0||e.sleepState===Ce.SLEEPING)&&((t.type&Ce.STATIC)!==0||t.sleepState===Ce.SLEEPING))}intersectionTest(e,t,i,n){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,i,n):this.doBoundingSphereBroadphase(e,t,i,n)}doBoundingSphereBroadphase(e,t,i,n){const r=SS;t.position.vsub(e.position,r);const a=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<a&&(i.push(e),n.push(t))}doBoundingBoxBroadphase(e,t,i,n){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(i.push(e),n.push(t))}makePairsUnique(e,t){const i=ES,n=TS,r=AS,a=e.length;for(let o=0;o!==a;o++)n[o]=e[o],r[o]=t[o];e.length=0,t.length=0;for(let o=0;o!==a;o++){const l=n[o].id,c=r[o].id,h=l<c?`${l},${c}`:`${c},${l}`;i[h]=o,i.keys.push(h)}for(let o=0;o!==i.keys.length;o++){const l=i.keys.pop(),c=i[l];e.push(n[c]),t.push(r[c]),delete i[l]}}setWorld(e){}static boundingSphereCheck(e,t){const i=new S;e.position.vsub(t.position,i);const n=e.shapes[0],r=t.shapes[0];return Math.pow(n.boundingSphereRadius+r.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(e,t,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const SS=new S;new S,new Et,new S;const ES={keys:[]},TS=[],AS=[];new S,new S,new S;class RS extends Zf{constructor(){super()}collisionPairs(e,t,i){const n=e.bodies,r=n.length;let a,o;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)a=n[l],o=n[c],this.needBroadphaseCollision(a,o)&&this.intersectionTest(a,o,t,i)}aabbQuery(e,t,i){i===void 0&&(i=[]);for(let n=0;n<e.bodies.length;n++){const r=e.bodies[n];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&i.push(r)}return i}}class fa{constructor(){this.rayFromWorld=new S,this.rayToWorld=new S,this.hitNormalWorld=new S,this.hitPointWorld=new S,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,i,n,r,a,o){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(n),this.shape=r,this.body=a,this.distance=o}}let Kf,Jf,$f,Qf,em,tm,im;const _u={CLOSEST:1,ANY:2,ALL:4};Kf=Re.types.SPHERE,Jf=Re.types.PLANE,$f=Re.types.BOX,Qf=Re.types.CYLINDER,em=Re.types.CONVEXPOLYHEDRON,tm=Re.types.HEIGHTFIELD,im=Re.types.TRIMESH;class Tt{get[Kf](){return this._intersectSphere}get[Jf](){return this._intersectPlane}get[$f](){return this._intersectBox}get[Qf](){return this._intersectConvex}get[em](){return this._intersectConvex}get[tm](){return this._intersectHeightfield}get[im](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new S),t===void 0&&(t=new S),this.from=e.clone(),this.to=t.clone(),this.direction=new S,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Tt.ANY,this.result=new fa,this.hasHit=!1,this.callback=i=>{}}intersectWorld(e,t){return this.mode=t.mode||Tt.ANY,this.result=t.result||new fa,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(sm),yu.length=0,e.broadphase.aabbQuery(e,sm,yu),this.intersectBodies(yu),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const i=this.checkCollisionResponse;if(i&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const n=CS,r=PS;for(let a=0,o=e.shapes.length;a<o;a++){const l=e.shapes[a];if(!(i&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[a],r),e.quaternion.vmult(e.shapeOffsets[a],n),n.vadd(e.position,n),this.intersectShape(l,r,n,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let i=0,n=e.length;!this.result.shouldStop&&i<n;i++)this.intersectBody(e[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,i,n){const r=this.from;if(WS(r,this.direction,i)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,i,n,e)}_intersectBox(e,t,i,n,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,i,n,r)}_intersectPlane(e,t,i,n,r){const a=this.from,o=this.to,l=this.direction,c=new S(0,0,1);t.vmult(c,c);const h=new S;a.vsub(i,h);const d=h.dot(c);o.vsub(i,h);const u=h.dot(c);if(d*u>0||a.distanceTo(o)<d)return;const p=c.dot(l);if(Math.abs(p)<this.precision)return;const g=new S,v=new S,m=new S;a.vsub(i,g);const f=-c.dot(g)/p;l.scale(f,v),a.vadd(v,m),this.reportIntersection(c,m,r,n,-1)}getAABB(e){const{lowerBound:t,upperBound:i}=e,n=this.to,r=this.from;t.x=Math.min(n.x,r.x),t.y=Math.min(n.y,r.y),t.z=Math.min(n.z,r.z),i.x=Math.max(n.x,r.x),i.y=Math.max(n.y,r.y),i.z=Math.max(n.z,r.z)}_intersectHeightfield(e,t,i,n,r){e.data,e.elementSize;const a=LS;a.from.copy(this.from),a.to.copy(this.to),rt.pointToLocalFrame(i,t,a.from,a.from),rt.pointToLocalFrame(i,t,a.to,a.to),a.updateDirection();const o=NS;let l,c,h,d;l=c=0,h=d=e.data.length-1;const u=new xt;a.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,o,!0),l=Math.max(l,o[0]),c=Math.max(c,o[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,o,!0),h=Math.min(h,o[0]+1),d=Math.min(d,o[1]+1);for(let p=l;p<h;p++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(p,g,u),!!u.overlapsRay(a)){if(e.getConvexTrianglePillar(p,g,!1),rt.pointToWorldFrame(i,t,e.pillarOffset,Dl),this._intersectConvex(e.pillarConvex,t,Dl,n,r,nm),this.result.shouldStop)return;e.getConvexTrianglePillar(p,g,!0),rt.pointToWorldFrame(i,t,e.pillarOffset,Dl),this._intersectConvex(e.pillarConvex,t,Dl,n,r,nm)}}}_intersectSphere(e,t,i,n,r){const a=this.from,o=this.to,l=e.radius,c=(o.x-a.x)**2+(o.y-a.y)**2+(o.z-a.z)**2,h=2*((o.x-a.x)*(a.x-i.x)+(o.y-a.y)*(a.y-i.y)+(o.z-a.z)*(a.z-i.z)),d=(a.x-i.x)**2+(a.y-i.y)**2+(a.z-i.z)**2-l**2,u=h**2-4*c*d,p=DS,g=US;if(!(u<0))if(u===0)a.lerp(o,u,p),p.vsub(i,g),g.normalize(),this.reportIntersection(g,p,r,n,-1);else{const v=(-h-Math.sqrt(u))/(2*c),m=(-h+Math.sqrt(u))/(2*c);if(v>=0&&v<=1&&(a.lerp(o,v,p),p.vsub(i,g),g.normalize(),this.reportIntersection(g,p,r,n,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(a.lerp(o,m,p),p.vsub(i,g),g.normalize(),this.reportIntersection(g,p,r,n,-1))}}_intersectConvex(e,t,i,n,r,a){const o=IS,l=rm,c=a&&a.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,p=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),f=c?c.length:h.length,x=this.result;for(let y=0;!x.shouldStop&&y<f;y++){const _=c?c[y]:y,R=h[_],T=u[_],E=t,P=i;l.copy(d[R[0]]),E.vmult(l,l),l.vadd(P,l),l.vsub(g,l),E.vmult(T,o);const M=p.dot(o);if(Math.abs(M)<this.precision)continue;const b=o.dot(l)/M;if(!(b<0)){p.scale(b,ii),ii.vadd(g,ii),Ri.copy(d[R[0]]),E.vmult(Ri,Ri),P.vadd(Ri,Ri);for(let L=1;!x.shouldStop&&L<R.length-1;L++){ji.copy(d[R[L]]),qi.copy(d[R[L+1]]),E.vmult(ji,ji),E.vmult(qi,qi),P.vadd(ji,ji),P.vadd(qi,qi);const I=ii.distanceTo(g);!(Tt.pointInTriangle(ii,Ri,ji,qi)||Tt.pointInTriangle(ii,ji,Ri,qi))||I>m||this.reportIntersection(o,ii,r,n,_)}}}}_intersectTrimesh(e,t,i,n,r,a){const o=OS,l=VS,c=GS,h=rm,d=FS,u=zS,p=BS,g=HS,v=kS,m=e.indices;e.vertices;const f=this.from,x=this.to,y=this.direction;c.position.copy(i),c.quaternion.copy(t),rt.vectorToLocalFrame(i,t,y,d),rt.pointToLocalFrame(i,t,f,u),rt.pointToLocalFrame(i,t,x,p),p.x*=e.scale.x,p.y*=e.scale.y,p.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,p.vsub(u,d),d.normalize();const _=u.distanceSquared(p);e.tree.rayQuery(this,c,l);for(let R=0,T=l.length;!this.result.shouldStop&&R!==T;R++){const E=l[R];e.getNormal(E,o),e.getVertex(m[E*3],Ri),Ri.vsub(u,h);const P=d.dot(o),M=o.dot(h)/P;if(M<0)continue;d.scale(M,ii),ii.vadd(u,ii),e.getVertex(m[E*3+1],ji),e.getVertex(m[E*3+2],qi);const b=ii.distanceSquared(u);!(Tt.pointInTriangle(ii,ji,Ri,qi)||Tt.pointInTriangle(ii,Ri,ji,qi))||b>_||(rt.vectorToWorldFrame(t,o,v),rt.pointToWorldFrame(i,t,ii,g),this.reportIntersection(v,g,r,n,E))}l.length=0}reportIntersection(e,t,i,n,r){const a=this.from,o=this.to,l=a.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Tt.ALL:this.hasHit=!0,c.set(a,o,e,t,i,n,l),c.hasHit=!0,this.callback(c);break;case Tt.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(a,o,e,t,i,n,l));break;case Tt.ANY:this.hasHit=!0,c.hasHit=!0,c.set(a,o,e,t,i,n,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,i,n){n.vsub(t,xn),i.vsub(t,ma),e.vsub(t,bu);const r=xn.dot(xn),a=xn.dot(ma),o=xn.dot(bu),l=ma.dot(ma),c=ma.dot(bu);let h,d;return(h=l*o-a*c)>=0&&(d=r*c-a*o)>=0&&h+d<r*l-a*a}}Tt.CLOSEST=_u.CLOSEST,Tt.ANY=_u.ANY,Tt.ALL=_u.ALL;const sm=new xt,yu=[],ma=new S,bu=new S,CS=new S,PS=new Et,ii=new S,Ri=new S,ji=new S,qi=new S;new S,new fa;const nm={faceList:[0]},Dl=new S,LS=new Tt,NS=[],DS=new S,US=new S,IS=new S;new S,new S;const rm=new S,OS=new S,FS=new S,zS=new S,BS=new S,kS=new S,HS=new S;new xt;const VS=[],GS=new rt,xn=new S,Ul=new S;function WS(s,e,t){t.vsub(s,xn);const i=xn.dot(e);return e.scale(i,Ul),Ul.vadd(s,Ul),t.distanceTo(Ul)}class mr extends Zf{static checkBounds(e,t,i){let n,r;i===0?(n=e.position.x,r=t.position.x):i===1?(n=e.position.y,r=t.position.y):i===2&&(n=e.position.z,r=t.position.z);const a=e.boundingRadius,o=t.boundingRadius,l=n+a;return r-o<l}static insertionSortX(e){for(let t=1,i=e.length;t<i;t++){const n=e[t];let r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.x<=n.aabb.lowerBound.x);r--)e[r+1]=e[r];e[r+1]=n}return e}static insertionSortY(e){for(let t=1,i=e.length;t<i;t++){const n=e[t];let r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.y<=n.aabb.lowerBound.y);r--)e[r+1]=e[r];e[r+1]=n}return e}static insertionSortZ(e){for(let t=1,i=e.length;t<i;t++){const n=e[t];let r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.z<=n.aabb.lowerBound.z);r--)e[r+1]=e[r];e[r+1]=n}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;const t=this.axisList;this._addBodyHandler=i=>{t.push(i.body)},this._removeBodyHandler=i=>{const n=t.indexOf(i.body);n!==-1&&t.splice(n,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,i){const n=this.axisList,r=n.length,a=this.axisIndex;let o,l;for(this.dirty&&(this.sortList(),this.dirty=!1),o=0;o!==r;o++){const c=n[o];for(l=o+1;l<r;l++){const h=n[l];if(this.needBroadphaseCollision(c,h)){if(!mr.checkBounds(c,h,a))break;this.intersectionTest(c,h,t,i)}}}}sortList(){const e=this.axisList,t=this.axisIndex,i=e.length;for(let n=0;n!==i;n++){const r=e[n];r.aabbNeedsUpdate&&r.updateAABB()}t===0?mr.insertionSortX(e):t===1?mr.insertionSortY(e):t===2&&mr.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,i=0,n=0,r=0,a=0;const o=this.axisList,l=o.length,c=1/l;for(let p=0;p!==l;p++){const g=o[p],v=g.position.x;e+=v,t+=v*v;const m=g.position.y;i+=m,n+=m*m;const f=g.position.z;r+=f,a+=f*f}const h=t-e*e*c,d=n-i*i*c,u=a-r*r*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,i){i===void 0&&(i=[]),this.dirty&&(this.sortList(),this.dirty=!1);const n=this.axisIndex;let r="x";n===1&&(r="y"),n===2&&(r="z");const a=this.axisList;t.lowerBound[r],t.upperBound[r];for(let o=0;o<a.length;o++){const l=a[o];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(t)&&i.push(l)}return i}}class jS{static defaults(e,t){e===void 0&&(e={});for(let i in t)i in e||(e[i]=t[i]);return e}}class am{constructor(){this.spatial=new S,this.rotational=new S}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class ga{constructor(e,t,i,n){i===void 0&&(i=-1e6),n===void 0&&(n=1e6),this.id=ga.idCounter++,this.minForce=i,this.maxForce=n,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new am,this.jacobianElementB=new am,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,.016666666666666666)}setSpookParams(e,t,i){const n=t,r=e,a=i;this.a=4/(a*(1+4*n)),this.b=4*n/(1+4*n),this.eps=4/(a*a*r*(1+4*n))}computeB(e,t,i){const n=this.computeGW(),r=this.computeGq(),a=this.computeGiMf();return-r*e-n*t-a*i}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,r=i.position,a=n.position;return e.spatial.dot(r)+t.spatial.dot(a)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,r=i.velocity,a=n.velocity,o=i.angularVelocity,l=n.angularVelocity;return e.multiplyVectors(r,o)+t.multiplyVectors(a,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,r=i.vlambda,a=n.vlambda,o=i.wlambda,l=n.wlambda;return e.multiplyVectors(r,o)+t.multiplyVectors(a,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,r=i.force,a=i.torque,o=n.force,l=n.torque,c=i.invMassSolve,h=n.invMassSolve;return r.scale(c,om),o.scale(h,lm),i.invInertiaWorldSolve.vmult(a,cm),n.invInertiaWorldSolve.vmult(l,hm),e.multiplyVectors(om,cm)+t.multiplyVectors(lm,hm)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,r=i.invMassSolve,a=n.invMassSolve,o=i.invInertiaWorldSolve,l=n.invInertiaWorldSolve;let c=r+a;return o.vmult(e.rotational,Il),c+=Il.dot(e.rotational),l.vmult(t.rotational,Il),c+=Il.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,i=this.jacobianElementB,n=this.bi,r=this.bj,a=qS;n.vlambda.addScaledVector(n.invMassSolve*e,t.spatial,n.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,i.spatial,r.vlambda),n.invInertiaWorldSolve.vmult(t.rotational,a),n.wlambda.addScaledVector(e,a,n.wlambda),r.invInertiaWorldSolve.vmult(i.rotational,a),r.wlambda.addScaledVector(e,a,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}ga.idCounter=0;const om=new S,lm=new S,cm=new S,hm=new S,Il=new S,qS=new S;class XS extends ga{constructor(e,t,i){i===void 0&&(i=1e6),super(e,t,0,i),this.restitution=0,this.ri=new S,this.rj=new S,this.ni=new S}computeB(e){const t=this.a,i=this.b,n=this.bi,r=this.bj,a=this.ri,o=this.rj,l=YS,c=ZS,h=n.velocity,d=n.angularVelocity;n.force,n.torque;const u=r.velocity,p=r.angularVelocity;r.force,r.torque;const g=KS,v=this.jacobianElementA,m=this.jacobianElementB,f=this.ni;a.cross(f,l),o.cross(f,c),f.negate(v.spatial),l.negate(v.rotational),m.spatial.copy(f),m.rotational.copy(c),g.copy(r.position),g.vadd(o,g),g.vsub(n.position,g),g.vsub(a,g);const x=f.dot(g),y=this.restitution+1,_=y*u.dot(f)-y*h.dot(f)+p.dot(c)-d.dot(l),R=this.computeGiMf();return-x*t-_*i-e*R}getImpactVelocityAlongNormal(){const e=JS,t=$S,i=QS,n=eE,r=tE;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,n),this.bi.getVelocityAtWorldPoint(i,e),this.bj.getVelocityAtWorldPoint(n,t),e.vsub(t,r),this.ni.dot(r)}}const YS=new S,ZS=new S,KS=new S,JS=new S,$S=new S,QS=new S,eE=new S,tE=new S;new S,new S,new S,new S,new S,new S,new S,new S,new S,new S;class um extends ga{constructor(e,t,i){super(e,t,-i,i),this.ri=new S,this.rj=new S,this.t=new S}computeB(e){this.a;const t=this.b;this.bi,this.bj;const i=this.ri,n=this.rj,r=iE,a=sE,o=this.t;i.cross(o,r),n.cross(o,a);const l=this.jacobianElementA,c=this.jacobianElementB;o.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(o),c.rotational.copy(a);const h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}}const iE=new S,sE=new S;Ca=class{constructor(s,e,t){t=jS.defaults(t,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Ca.idCounter++,this.materials=[s,e],this.friction=t.friction,this.restitution=t.restitution,this.contactEquationStiffness=t.contactEquationStiffness,this.contactEquationRelaxation=t.contactEquationRelaxation,this.frictionEquationStiffness=t.frictionEquationStiffness,this.frictionEquationRelaxation=t.frictionEquationRelaxation}},Ca.idCounter=0;class Ol{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Ol.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Ol.idCounter=0,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new Tt,new S,new S,new S,new S(1,0,0),new S(0,1,0),new S(0,0,1),new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S,new S;class Xi{constructor(e){e===void 0&&(e={}),this.root=e.root||null,this.aabb=e.aabb?e.aabb.clone():new xt,this.data=[],this.children=[]}reset(){this.children.length=this.data.length=0}insert(e,t,i){i===void 0&&(i=0);const n=this.data;if(!this.aabb.contains(e))return!1;const r=this.children,a=this.maxDepth||this.root.maxDepth;if(i<a){let o=!1;r.length||(this.subdivide(),o=!0);for(let l=0;l!==8;l++)if(r[l].insert(e,t,i+1))return!0;o&&(r.length=0)}return n.push(t),!0}subdivide(){const e=this.aabb,t=e.lowerBound,i=e.upperBound,n=this.children;n.push(new Xi({aabb:new xt({lowerBound:new S(0,0,0)})}),new Xi({aabb:new xt({lowerBound:new S(1,0,0)})}),new Xi({aabb:new xt({lowerBound:new S(1,1,0)})}),new Xi({aabb:new xt({lowerBound:new S(1,1,1)})}),new Xi({aabb:new xt({lowerBound:new S(0,1,1)})}),new Xi({aabb:new xt({lowerBound:new S(0,0,1)})}),new Xi({aabb:new xt({lowerBound:new S(1,0,1)})}),new Xi({aabb:new xt({lowerBound:new S(0,1,0)})})),i.vsub(t,_n),_n.scale(.5,_n);const r=this.root||this;for(let a=0;a!==8;a++){const o=n[a];o.root=r;const l=o.aabb.lowerBound;l.x*=_n.x,l.y*=_n.y,l.z*=_n.z,l.vadd(t,l),l.vadd(_n,o.aabb.upperBound)}}aabbQuery(e,t){this.data,this.children;const i=[this];for(;i.length;){const n=i.pop();n.aabb.overlaps(e)&&Array.prototype.push.apply(t,n.data),Array.prototype.push.apply(i,n.children)}return t}rayQuery(e,t,i){return e.getAABB(Fl),Fl.toLocalFrame(t,Fl),this.aabbQuery(Fl,i),i}removeEmptyNodes(){for(let e=this.children.length-1;e>=0;e--)this.children[e].removeEmptyNodes(),!this.children[e].children.length&&!this.children[e].data.length&&this.children.splice(e,1)}}class nE extends Xi{constructor(e,t){t===void 0&&(t={}),super({root:null,aabb:e}),this.maxDepth=typeof t.maxDepth<"u"?t.maxDepth:8}}const _n=new S,Fl=new xt;Ra=class extends Re{constructor(s,e){super({type:Re.types.TRIMESH}),this.vertices=new Float32Array(s),this.indices=new Int16Array(e),this.normals=new Float32Array(e.length),this.aabb=new xt,this.edges=null,this.scale=new S(1,1,1),this.tree=new nE,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}updateTree(){const s=this.tree;s.reset(),s.aabb.copy(this.aabb);const e=this.scale;s.aabb.lowerBound.x*=1/e.x,s.aabb.lowerBound.y*=1/e.y,s.aabb.lowerBound.z*=1/e.z,s.aabb.upperBound.x*=1/e.x,s.aabb.upperBound.y*=1/e.y,s.aabb.upperBound.z*=1/e.z;const t=new xt,i=new S,n=new S,r=new S,a=[i,n,r];for(let o=0;o<this.indices.length/3;o++){const l=o*3;this._getUnscaledVertex(this.indices[l],i),this._getUnscaledVertex(this.indices[l+1],n),this._getUnscaledVertex(this.indices[l+2],r),t.setFromPoints(a),s.insert(t,o)}s.removeEmptyNodes()}getTrianglesInAABB(s,e){zl.copy(s);const t=this.scale,i=t.x,n=t.y,r=t.z,a=zl.lowerBound,o=zl.upperBound;return a.x/=i,a.y/=n,a.z/=r,o.x/=i,o.y/=n,o.z/=r,this.tree.aabbQuery(zl,e)}setScale(s){const e=this.scale.x===this.scale.y&&this.scale.y===this.scale.z,t=s.x===s.y&&s.y===s.z;e&&t||this.updateNormals(),this.scale.copy(s),this.updateAABB(),this.updateBoundingSphereRadius()}updateNormals(){const s=rE,e=this.normals;for(let t=0;t<this.indices.length/3;t++){const i=t*3,n=this.indices[i],r=this.indices[i+1],a=this.indices[i+2];this.getVertex(n,fm),this.getVertex(r,mm),this.getVertex(a,gm),Ra.computeNormal(mm,fm,gm,s),e[i]=s.x,e[i+1]=s.y,e[i+2]=s.z}}updateEdges(){const s={},e=(i,n)=>{const r=i<n?`${i}_${n}`:`${n}_${i}`;s[r]=!0};for(let i=0;i<this.indices.length/3;i++){const n=i*3,r=this.indices[n],a=this.indices[n+1],o=this.indices[n+2];e(r,a),e(a,o),e(o,r)}const t=Object.keys(s);this.edges=new Int16Array(t.length*2);for(let i=0;i<t.length;i++){const n=t[i].split("_");this.edges[2*i]=parseInt(n[0],10),this.edges[2*i+1]=parseInt(n[1],10)}}getEdgeVertex(s,e,t){const i=this.edges[s*2+(e?1:0)];this.getVertex(i,t)}getEdgeVector(s,e){const t=aE,i=oE;this.getEdgeVertex(s,0,t),this.getEdgeVertex(s,1,i),i.vsub(t,e)}static computeNormal(s,e,t,i){e.vsub(s,pm),t.vsub(e,dm),dm.cross(pm,i),i.isZero()||i.normalize()}getVertex(s,e){const t=this.scale;return this._getUnscaledVertex(s,e),e.x*=t.x,e.y*=t.y,e.z*=t.z,e}_getUnscaledVertex(s,e){const t=s*3,i=this.vertices;return e.set(i[t],i[t+1],i[t+2])}getWorldVertex(s,e,t,i){return this.getVertex(s,i),rt.pointToWorldFrame(e,t,i,i),i}getTriangleVertices(s,e,t,i){const n=s*3;this.getVertex(this.indices[n],e),this.getVertex(this.indices[n+1],t),this.getVertex(this.indices[n+2],i)}getNormal(s,e){const t=s*3;return e.set(this.normals[t],this.normals[t+1],this.normals[t+2])}calculateLocalInertia(s,e){this.computeLocalAABB(yn);const t=yn.upperBound.x-yn.lowerBound.x,i=yn.upperBound.y-yn.lowerBound.y,n=yn.upperBound.z-yn.lowerBound.z;return e.set(.08333333333333333*s*(2*i*2*i+2*n*2*n),.08333333333333333*s*(2*t*2*t+2*n*2*n),.08333333333333333*s*(2*i*2*i+2*t*2*t))}computeLocalAABB(s){const e=s.lowerBound,t=s.upperBound,i=this.vertices.length;this.vertices;const n=lE;this.getVertex(0,n),e.copy(n),t.copy(n);for(let r=0;r!==i;r++)this.getVertex(r,n),n.x<e.x?e.x=n.x:n.x>t.x&&(t.x=n.x),n.y<e.y?e.y=n.y:n.y>t.y&&(t.y=n.y),n.z<e.z?e.z=n.z:n.z>t.z&&(t.z=n.z)}updateAABB(){this.computeLocalAABB(this.aabb)}updateBoundingSphereRadius(){let s=0;const e=this.vertices,t=new S;for(let i=0,n=e.length/3;i!==n;i++){this.getVertex(i,t);const r=t.lengthSquared();r>s&&(s=r)}this.boundingSphereRadius=Math.sqrt(s)}calculateWorldAABB(s,e,t,i){const n=cE,r=hE;n.position=s,n.quaternion=e,this.aabb.toWorldFrame(n,r),t.copy(r.lowerBound),i.copy(r.upperBound)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}static createTorus(s,e,t,i,n){s===void 0&&(s=1),e===void 0&&(e=.5),t===void 0&&(t=8),i===void 0&&(i=6),n===void 0&&(n=Math.PI*2);const r=[],a=[];for(let o=0;o<=t;o++)for(let l=0;l<=i;l++){const c=l/i*n,h=o/t*Math.PI*2,d=(s+e*Math.cos(h))*Math.cos(c),u=(s+e*Math.cos(h))*Math.sin(c),p=e*Math.sin(h);r.push(d,u,p)}for(let o=1;o<=t;o++)for(let l=1;l<=i;l++){const c=(i+1)*o+l-1,h=(i+1)*(o-1)+l-1,d=(i+1)*(o-1)+l,u=(i+1)*o+l;a.push(c,h,u),a.push(h,d,u)}return new Ra(r,a)}};const rE=new S,zl=new xt,aE=new S,oE=new S,dm=new S,pm=new S,fm=new S,mm=new S,gm=new S,yn=new xt,lE=new S,cE=new rt,hE=new xt;class uE{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,i=t.indexOf(e);i!==-1&&t.splice(i,1)}removeAllEquations(){this.equations.length=0}}class vm extends uE{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let i=0;const n=this.iterations,r=this.tolerance*this.tolerance,a=this.equations,o=a.length,l=t.bodies,c=l.length,h=e;let d,u,p,g,v,m;if(o!==0)for(let _=0;_!==c;_++)l[_].updateSolveMassProperties();const f=pE,x=fE,y=dE;f.length=o,x.length=o,y.length=o;for(let _=0;_!==o;_++){const R=a[_];y[_]=0,x[_]=R.computeB(h),f[_]=1/R.computeC()}if(o!==0){for(let T=0;T!==c;T++){const E=l[T],P=E.vlambda,M=E.wlambda;P.set(0,0,0),M.set(0,0,0)}for(i=0;i!==n;i++){g=0;for(let T=0;T!==o;T++){const E=a[T];d=x[T],u=f[T],m=y[T],v=E.computeGWlambda(),p=u*(d-v-E.eps*m),m+p<E.minForce?p=E.minForce-m:m+p>E.maxForce&&(p=E.maxForce-m),y[T]+=p,g+=p>0?p:-p,E.addToWlambda(p)}if(g*g<r)break}for(let T=0;T!==c;T++){const E=l[T],P=E.velocity,M=E.angularVelocity;E.vlambda.vmul(E.linearFactor,E.vlambda),P.vadd(E.vlambda,P),E.wlambda.vmul(E.angularFactor,E.wlambda),M.vadd(E.wlambda,M)}let _=a.length;const R=1/h;for(;_--;)a[_].multiplier=y[_]*R}return i}}const dE=[],pE=[],fE=[];class mE{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class gE extends mE{constructor(){super(...arguments),this.type=S}constructObject(){return new S}}const gt={sphereSphere:Re.types.SPHERE,spherePlane:Re.types.SPHERE|Re.types.PLANE,boxBox:Re.types.BOX|Re.types.BOX,sphereBox:Re.types.SPHERE|Re.types.BOX,planeBox:Re.types.PLANE|Re.types.BOX,convexConvex:Re.types.CONVEXPOLYHEDRON,sphereConvex:Re.types.SPHERE|Re.types.CONVEXPOLYHEDRON,planeConvex:Re.types.PLANE|Re.types.CONVEXPOLYHEDRON,boxConvex:Re.types.BOX|Re.types.CONVEXPOLYHEDRON,sphereHeightfield:Re.types.SPHERE|Re.types.HEIGHTFIELD,boxHeightfield:Re.types.BOX|Re.types.HEIGHTFIELD,convexHeightfield:Re.types.CONVEXPOLYHEDRON|Re.types.HEIGHTFIELD,sphereParticle:Re.types.PARTICLE|Re.types.SPHERE,planeParticle:Re.types.PLANE|Re.types.PARTICLE,boxParticle:Re.types.BOX|Re.types.PARTICLE,convexParticle:Re.types.PARTICLE|Re.types.CONVEXPOLYHEDRON,cylinderCylinder:Re.types.CYLINDER,sphereCylinder:Re.types.SPHERE|Re.types.CYLINDER,planeCylinder:Re.types.PLANE|Re.types.CYLINDER,boxCylinder:Re.types.BOX|Re.types.CYLINDER,convexCylinder:Re.types.CONVEXPOLYHEDRON|Re.types.CYLINDER,heightfieldCylinder:Re.types.HEIGHTFIELD|Re.types.CYLINDER,particleCylinder:Re.types.PARTICLE|Re.types.CYLINDER,sphereTrimesh:Re.types.SPHERE|Re.types.TRIMESH,planeTrimesh:Re.types.PLANE|Re.types.TRIMESH};class vE{get[gt.sphereSphere](){return this.sphereSphere}get[gt.spherePlane](){return this.spherePlane}get[gt.boxBox](){return this.boxBox}get[gt.sphereBox](){return this.sphereBox}get[gt.planeBox](){return this.planeBox}get[gt.convexConvex](){return this.convexConvex}get[gt.sphereConvex](){return this.sphereConvex}get[gt.planeConvex](){return this.planeConvex}get[gt.boxConvex](){return this.boxConvex}get[gt.sphereHeightfield](){return this.sphereHeightfield}get[gt.boxHeightfield](){return this.boxHeightfield}get[gt.convexHeightfield](){return this.convexHeightfield}get[gt.sphereParticle](){return this.sphereParticle}get[gt.planeParticle](){return this.planeParticle}get[gt.boxParticle](){return this.boxParticle}get[gt.convexParticle](){return this.convexParticle}get[gt.cylinderCylinder](){return this.convexConvex}get[gt.sphereCylinder](){return this.sphereConvex}get[gt.planeCylinder](){return this.planeConvex}get[gt.boxCylinder](){return this.boxConvex}get[gt.convexCylinder](){return this.convexConvex}get[gt.heightfieldCylinder](){return this.heightfieldCylinder}get[gt.particleCylinder](){return this.particleCylinder}get[gt.sphereTrimesh](){return this.sphereTrimesh}get[gt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new gE,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,i,n,r,a){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=e,o.bj=t):o=new XS(e,t),o.enabled=e.collisionResponse&&t.collisionResponse&&i.collisionResponse&&n.collisionResponse;const l=this.currentContactMaterial;o.restitution=l.restitution,o.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=i.material||e.material,h=n.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(o.restitution=c.restitution*h.restitution),o.si=r||i,o.sj=a||n,o}createFrictionEquationsFromContact(e,t){const i=e.bi,n=e.bj,r=e.si,a=e.sj,o=this.world,l=this.currentContactMaterial;let c=l.friction;const h=r.material||i.material,d=a.material||n.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(o.frictionGravity||o.gravity).length();let p=i.invMass+n.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,v=g.length?g.pop():new um(i,n,u*p),m=g.length?g.pop():new um(i,n,u*p);return v.bi=m.bi=i,v.bj=m.bj=n,v.minForce=m.minForce=-u*p,v.maxForce=m.maxForce=u*p,v.ri.copy(e.ri),v.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(v.t,m.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),v.enabled=m.enabled=e.enabled,t.push(v,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const i=this.frictionResult[this.frictionResult.length-2],n=this.frictionResult[this.frictionResult.length-1];bn.setZero(),gr.setZero(),vr.setZero();const r=t.bi;t.bj;for(let o=0;o!==e;o++)t=this.result[this.result.length-1-o],t.bi!==r?(bn.vadd(t.ni,bn),gr.vadd(t.ri,gr),vr.vadd(t.rj,vr)):(bn.vsub(t.ni,bn),gr.vadd(t.rj,gr),vr.vadd(t.ri,vr));const a=1/e;gr.scale(a,i.ri),vr.scale(a,i.rj),n.ri.copy(i.ri),n.rj.copy(i.rj),bn.normalize(),bn.tangents(i.t,n.t)}getContacts(e,t,i,n,r,a,o){this.contactPointPool=r,this.frictionEquationPool=o,this.result=n,this.frictionResult=a;const l=yE,c=bE,h=xE,d=_E;for(let u=0,p=e.length;u!==p;u++){const g=e[u],v=t[u];let m=null;g.material&&v.material&&(m=i.getContactMaterial(g.material,v.material)||null);const f=g.type&Ce.KINEMATIC&&v.type&Ce.STATIC||g.type&Ce.STATIC&&v.type&Ce.KINEMATIC||g.type&Ce.KINEMATIC&&v.type&Ce.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],l),g.quaternion.vmult(g.shapeOffsets[x],h),h.vadd(g.position,h);const y=g.shapes[x];for(let _=0;_<v.shapes.length;_++){v.quaternion.mult(v.shapeOrientations[_],c),v.quaternion.vmult(v.shapeOffsets[_],d),d.vadd(v.position,d);const R=v.shapes[_];if(!(y.collisionFilterMask&R.collisionFilterGroup&&R.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(d)>y.boundingSphereRadius+R.boundingSphereRadius)continue;let T=null;y.material&&R.material&&(T=i.getContactMaterial(y.material,R.material)||null),this.currentContactMaterial=T||m||i.defaultContactMaterial;const E=y.type|R.type,P=this[E];if(P){let M=!1;y.type<R.type?M=P.call(this,y,R,h,d,l,c,g,v,y,R,f):M=P.call(this,R,y,d,h,c,l,v,g,y,R,f),M&&f&&(i.shapeOverlapKeeper.set(y.id,R.id),i.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(e,t,i,n,r,a,o,l,c,h,d){if(d)return i.distanceSquared(n)<(e.radius+t.radius)**2;const u=this.createContactEquation(o,l,e,t,c,h);n.vsub(i,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(i,u.ri),u.ri.vsub(o.position,u.ri),u.rj.vadd(n,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,i,n,r,a,o,l,c,h,d){const u=this.createContactEquation(o,l,e,t,c,h);if(u.ni.set(0,0,1),a.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),i.vsub(n,Bl),u.ni.scale(u.ni.dot(Bl),xm),Bl.vsub(xm,u.rj),-Bl.dot(u.ni)<=e.radius){if(d)return!0;const p=u.ri,g=u.rj;p.vadd(i,p),p.vsub(o.position,p),g.vadd(n,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,i,n,r,a,o,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,i,n,r,a,o,l,e,t,d)}sphereBox(e,t,i,n,r,a,o,l,c,h,d){const u=this.v3pool,p=XE;i.vsub(n,kl),t.getSideNormals(p,a);const g=e.radius;let v=!1;const m=ZE,f=KE,x=JE;let y=null,_=0,R=0,T=0,E=null;for(let z=0,X=p.length;z!==X&&v===!1;z++){const G=WE;G.copy(p[z]);const W=G.length();G.normalize();const de=kl.dot(G);if(de<W+g&&de>0){const _e=jE,re=qE;_e.copy(p[(z+1)%3]),re.copy(p[(z+2)%3]);const Ze=_e.length(),Y=re.length();_e.normalize(),re.normalize();const ae=kl.dot(_e),ye=kl.dot(re);if(ae<Ze&&ae>-Ze&&ye<Y&&ye>-Y){const oe=Math.abs(de-W-g);if((E===null||oe<E)&&(E=oe,R=ae,T=ye,y=W,m.copy(G),f.copy(_e),x.copy(re),_++,d))return!0}}}if(_){v=!0;const z=this.createContactEquation(o,l,e,t,c,h);m.scale(-g,z.ri),z.ni.copy(m),z.ni.negate(z.ni),m.scale(y,m),f.scale(R,f),m.vadd(f,m),x.scale(T,x),m.vadd(x,z.rj),z.ri.vadd(i,z.ri),z.ri.vsub(o.position,z.ri),z.rj.vadd(n,z.rj),z.rj.vsub(l.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}let P=u.get();const M=YE;for(let z=0;z!==2&&!v;z++)for(let X=0;X!==2&&!v;X++)for(let G=0;G!==2&&!v;G++)if(P.set(0,0,0),z?P.vadd(p[0],P):P.vsub(p[0],P),X?P.vadd(p[1],P):P.vsub(p[1],P),G?P.vadd(p[2],P):P.vsub(p[2],P),n.vadd(P,M),M.vsub(i,M),M.lengthSquared()<g*g){if(d)return!0;v=!0;const W=this.createContactEquation(o,l,e,t,c,h);W.ri.copy(M),W.ri.normalize(),W.ni.copy(W.ri),W.ri.scale(g,W.ri),W.rj.copy(P),W.ri.vadd(i,W.ri),W.ri.vsub(o.position,W.ri),W.rj.vadd(n,W.rj),W.rj.vsub(l.position,W.rj),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}u.release(P),P=null;const b=u.get(),L=u.get(),I=u.get(),D=u.get(),O=u.get(),B=p.length;for(let z=0;z!==B&&!v;z++)for(let X=0;X!==B&&!v;X++)if(z%3!==X%3){p[X].cross(p[z],b),b.normalize(),p[z].vadd(p[X],L),I.copy(i),I.vsub(L,I),I.vsub(n,I);const G=I.dot(b);b.scale(G,D);let W=0;for(;W===z%3||W===X%3;)W++;O.copy(i),O.vsub(D,O),O.vsub(L,O),O.vsub(n,O);const de=Math.abs(G),_e=O.length();if(de<p[W].length()&&_e<g){if(d)return!0;v=!0;const re=this.createContactEquation(o,l,e,t,c,h);L.vadd(D,re.rj),re.rj.copy(re.rj),O.negate(re.ni),re.ni.normalize(),re.ri.copy(re.rj),re.ri.vadd(n,re.ri),re.ri.vsub(i,re.ri),re.ri.normalize(),re.ri.scale(g,re.ri),re.ri.vadd(i,re.ri),re.ri.vsub(o.position,re.ri),re.rj.vadd(n,re.rj),re.rj.vsub(l.position,re.rj),this.result.push(re),this.createFrictionEquationsFromContact(re,this.frictionResult)}}u.release(b,L,I,D,O)}planeBox(e,t,i,n,r,a,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,i,n,r,a,o,l,e,t,d)}convexConvex(e,t,i,n,r,a,o,l,c,h,d,u,p){const g=d1;if(!(i.distanceTo(n)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,i,r,n,a,g,u,p)){const v=[],m=p1;e.clipAgainstHull(i,r,t,n,a,g,-100,100,v);let f=0;for(let x=0;x!==v.length;x++){if(d)return!0;const y=this.createContactEquation(o,l,e,t,c,h),_=y.ri,R=y.rj;g.negate(y.ni),v[x].normal.negate(m),m.scale(v[x].depth,m),v[x].point.vadd(m,_),R.copy(v[x].point),_.vsub(i,_),R.vsub(n,R),_.vadd(i,_),_.vsub(o.position,_),R.vadd(n,R),R.vsub(l.position,R),this.result.push(y),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(e,t,i,n,r,a,o,l,c,h,d){const u=this.v3pool;i.vsub(n,$E);const p=t.faceNormals,g=t.faces,v=t.vertices,m=e.radius;let f=!1;for(let x=0;x!==v.length;x++){const y=v[x],_=i1;a.vmult(y,_),n.vadd(_,_);const R=t1;if(_.vsub(i,R),R.lengthSquared()<m*m){if(d)return!0;f=!0;const T=this.createContactEquation(o,l,e,t,c,h);T.ri.copy(R),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(m,T.ri),_.vsub(n,T.rj),T.ri.vadd(i,T.ri),T.ri.vsub(o.position,T.ri),T.rj.vadd(n,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let x=0,y=g.length;x!==y&&f===!1;x++){const _=p[x],R=g[x],T=s1;a.vmult(_,T);const E=n1;a.vmult(v[R[0]],E),E.vadd(n,E);const P=r1;T.scale(-m,P),i.vadd(P,P);const M=a1;P.vsub(E,M);const b=M.dot(T),L=o1;if(i.vsub(E,L),b<0&&L.dot(T)>0){const I=[];for(let D=0,O=R.length;D!==O;D++){const B=u.get();a.vmult(v[R[D]],B),n.vadd(B,B),I.push(B)}if(GE(I,T,i)){if(d)return!0;f=!0;const D=this.createContactEquation(o,l,e,t,c,h);T.scale(-m,D.ri),T.negate(D.ni);const O=u.get();T.scale(-b,O);const B=u.get();T.scale(-m,B),i.vsub(n,D.rj),D.rj.vadd(B,D.rj),D.rj.vadd(O,D.rj),D.rj.vadd(n,D.rj),D.rj.vsub(l.position,D.rj),D.ri.vadd(i,D.ri),D.ri.vsub(o.position,D.ri),u.release(O),u.release(B),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult);for(let z=0,X=I.length;z!==X;z++)u.release(I[z]);return}else for(let D=0;D!==R.length;D++){const O=u.get(),B=u.get();a.vmult(v[R[(D+1)%R.length]],O),a.vmult(v[R[(D+2)%R.length]],B),n.vadd(O,O),n.vadd(B,B);const z=QE;B.vsub(O,z);const X=e1;z.unit(X);const G=u.get(),W=u.get();i.vsub(O,W);const de=W.dot(X);X.scale(de,G),G.vadd(O,G);const _e=u.get();if(G.vsub(i,_e),de>0&&de*de<z.lengthSquared()&&_e.lengthSquared()<m*m){if(d)return!0;const re=this.createContactEquation(o,l,e,t,c,h);G.vsub(n,re.rj),G.vsub(i,re.ni),re.ni.normalize(),re.ni.scale(m,re.ri),re.rj.vadd(n,re.rj),re.rj.vsub(l.position,re.rj),re.ri.vadd(i,re.ri),re.ri.vsub(o.position,re.ri),this.result.push(re),this.createFrictionEquationsFromContact(re,this.frictionResult);for(let Ze=0,Y=I.length;Ze!==Y;Ze++)u.release(I[Ze]);u.release(O),u.release(B),u.release(G),u.release(_e),u.release(W);return}u.release(O),u.release(B),u.release(G),u.release(_e),u.release(W)}for(let D=0,O=I.length;D!==O;D++)u.release(I[D])}}}planeConvex(e,t,i,n,r,a,o,l,c,h,d){const u=l1,p=c1;p.set(0,0,1),r.vmult(p,p);let g=0;const v=h1;for(let m=0;m!==t.vertices.length;m++)if(u.copy(t.vertices[m]),a.vmult(u,u),n.vadd(u,u),u.vsub(i,v),p.dot(v)<=0){if(d)return!0;const f=this.createContactEquation(o,l,e,t,c,h),x=u1;p.scale(p.dot(v),x),u.vsub(x,x),x.vsub(i,f.ri),f.ni.copy(p),u.vsub(n,f.rj),f.ri.vadd(i,f.ri),f.ri.vsub(o.position,f.ri),f.rj.vadd(n,f.rj),f.rj.vsub(l.position,f.rj),this.result.push(f),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(f,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,i,n,r,a,o,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,i,n,r,a,o,l,e,t,d)}sphereHeightfield(e,t,i,n,r,a,o,l,c,h,d){const u=t.data,p=e.radius,g=t.elementSize,v=E1,m=S1;rt.pointToLocalFrame(n,a,i,m);let f=Math.floor((m.x-p)/g)-1,x=Math.ceil((m.x+p)/g)+1,y=Math.floor((m.y-p)/g)-1,_=Math.ceil((m.y+p)/g)+1;if(x<0||_<0||f>u.length||y>u[0].length)return;f<0&&(f=0),x<0&&(x=0),y<0&&(y=0),_<0&&(_=0),f>=u.length&&(f=u.length-1),x>=u.length&&(x=u.length-1),_>=u[0].length&&(_=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const R=[];t.getRectMinMax(f,y,x,_,R);const T=R[0],E=R[1];if(m.z-p>E||m.z+p<T)return;const P=this.result;for(let M=f;M<x;M++)for(let b=y;b<_;b++){const L=P.length;let I=!1;if(t.getConvexTrianglePillar(M,b,!1),rt.pointToWorldFrame(n,a,t.pillarOffset,v),i.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.sphereConvex(e,t.pillarConvex,i,v,r,a,o,l,e,t,d)),d&&I||(t.getConvexTrianglePillar(M,b,!0),rt.pointToWorldFrame(n,a,t.pillarOffset,v),i.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.sphereConvex(e,t.pillarConvex,i,v,r,a,o,l,e,t,d)),d&&I))return!0;if(P.length-L>2)return}}boxHeightfield(e,t,i,n,r,a,o,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,i,n,r,a,o,l,e,t,d)}convexHeightfield(e,t,i,n,r,a,o,l,c,h,d){const u=t.data,p=t.elementSize,g=e.boundingSphereRadius,v=M1,m=w1,f=b1;rt.pointToLocalFrame(n,a,i,f);let x=Math.floor((f.x-g)/p)-1,y=Math.ceil((f.x+g)/p)+1,_=Math.floor((f.y-g)/p)-1,R=Math.ceil((f.y+g)/p)+1;if(y<0||R<0||x>u.length||_>u[0].length)return;x<0&&(x=0),y<0&&(y=0),_<0&&(_=0),R<0&&(R=0),x>=u.length&&(x=u.length-1),y>=u.length&&(y=u.length-1),R>=u[0].length&&(R=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);const T=[];t.getRectMinMax(x,_,y,R,T);const E=T[0],P=T[1];if(!(f.z-g>P||f.z+g<E))for(let M=x;M<y;M++)for(let b=_;b<R;b++){let L=!1;if(t.getConvexTrianglePillar(M,b,!1),rt.pointToWorldFrame(n,a,t.pillarOffset,v),i.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(L=this.convexConvex(e,t.pillarConvex,i,v,r,a,o,l,null,null,d,m,null)),d&&L||(t.getConvexTrianglePillar(M,b,!0),rt.pointToWorldFrame(n,a,t.pillarOffset,v),i.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(L=this.convexConvex(e,t.pillarConvex,i,v,r,a,o,l,null,null,d,m,null)),d&&L))return!0}}sphereParticle(e,t,i,n,r,a,o,l,c,h,d){const u=v1;if(u.set(0,0,1),n.vsub(i,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;const p=this.createContactEquation(l,o,t,e,c,h);u.normalize(),p.rj.copy(u),p.rj.scale(e.radius,p.rj),p.ni.copy(u),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(e,t,i,n,r,a,o,l,c,h,d){const u=f1;u.set(0,0,1),o.quaternion.vmult(u,u);const p=m1;if(n.vsub(o.position,p),u.dot(p)<=0){if(d)return!0;const g=this.createContactEquation(l,o,t,e,c,h);g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0);const v=g1;u.scale(u.dot(n),v),n.vsub(v,v),g.rj.copy(v),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}boxParticle(e,t,i,n,r,a,o,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,i,n,r,a,o,l,e,t,d)}convexParticle(e,t,i,n,r,a,o,l,c,h,d){let u=-1;const p=_1,g=y1;let v=null;const m=x1;if(m.copy(n),m.vsub(i,m),r.conjugate(_m),_m.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(i,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let f=0,x=e.faces.length;f!==x;f++){const y=[e.worldVertices[e.faces[f][0]]],_=e.worldFaceNormals[f];n.vsub(y[0],ym);const R=-_.dot(ym);if(v===null||Math.abs(R)<Math.abs(v)){if(d)return!0;v=R,u=f,p.copy(_)}}if(u!==-1){const f=this.createContactEquation(l,o,t,e,c,h);p.scale(v,g),g.vadd(n,g),g.vsub(i,g),f.rj.copy(g),p.negate(f.ni),f.ri.set(0,0,0);const x=f.ri,y=f.rj;x.vadd(n,x),x.vsub(l.position,x),y.vadd(i,y),y.vsub(o.position,y),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,i,n,r,a,o,l,c,h,d){return this.convexHeightfield(t,e,n,i,a,r,l,o,c,h,d)}particleCylinder(e,t,i,n,r,a,o,l,c,h,d){return this.convexParticle(t,e,n,i,a,r,l,o,c,h,d)}sphereTrimesh(e,t,i,n,r,a,o,l,c,h,d){const u=CE,p=PE,g=LE,v=NE,m=DE,f=UE,x=zE,y=RE,_=TE,R=BE;rt.pointToLocalFrame(n,a,i,m);const T=e.radius;x.lowerBound.set(m.x-T,m.y-T,m.z-T),x.upperBound.set(m.x+T,m.y+T,m.z+T),t.getTrianglesInAABB(x,R);const E=AE,P=e.radius*e.radius;for(let D=0;D<R.length;D++)for(let O=0;O<3;O++)if(t.getVertex(t.indices[R[D]*3+O],E),E.vsub(m,_),_.lengthSquared()<=P){if(y.copy(E),rt.pointToWorldFrame(n,a,y,E),E.vsub(i,_),d)return!0;let B=this.createContactEquation(o,l,e,t,c,h);B.ni.copy(_),B.ni.normalize(),B.ri.copy(B.ni),B.ri.scale(e.radius,B.ri),B.ri.vadd(i,B.ri),B.ri.vsub(o.position,B.ri),B.rj.copy(E),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}for(let D=0;D<R.length;D++)for(let O=0;O<3;O++){t.getVertex(t.indices[R[D]*3+O],u),t.getVertex(t.indices[R[D]*3+(O+1)%3],p),p.vsub(u,g),m.vsub(p,f);const B=f.dot(g);m.vsub(u,f);let z=f.dot(g);if(z>0&&B<0&&(m.vsub(u,f),v.copy(g),v.normalize(),z=f.dot(v),v.scale(z,f),f.vadd(u,f),f.distanceTo(m)<e.radius)){if(d)return!0;const X=this.createContactEquation(o,l,e,t,c,h);f.vsub(m,X.ni),X.ni.normalize(),X.ni.scale(e.radius,X.ri),X.ri.vadd(i,X.ri),X.ri.vsub(o.position,X.ri),rt.pointToWorldFrame(n,a,f,f),f.vsub(l.position,X.rj),rt.vectorToWorldFrame(a,X.ni,X.ni),rt.vectorToWorldFrame(a,X.ri,X.ri),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}}const M=IE,b=OE,L=FE,I=EE;for(let D=0,O=R.length;D!==O;D++){t.getTriangleVertices(R[D],M,b,L),t.getNormal(R[D],I),m.vsub(M,f);let B=f.dot(I);if(I.scale(B,f),m.vsub(f,f),B=f.distanceTo(m),Tt.pointInTriangle(f,M,b,L)&&B<e.radius){if(d)return!0;let z=this.createContactEquation(o,l,e,t,c,h);f.vsub(m,z.ni),z.ni.normalize(),z.ni.scale(e.radius,z.ri),z.ri.vadd(i,z.ri),z.ri.vsub(o.position,z.ri),rt.pointToWorldFrame(n,a,f,f),f.vsub(l.position,z.rj),rt.vectorToWorldFrame(a,z.ni,z.ni),rt.vectorToWorldFrame(a,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}R.length=0}planeTrimesh(e,t,i,n,r,a,o,l,c,h,d){const u=new S,p=ME;p.set(0,0,1),r.vmult(p,p);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,u);const v=new S;v.copy(u),rt.pointToWorldFrame(n,a,v,u);const m=wE;if(u.vsub(i,m),p.dot(m)<=0){if(d)return!0;const f=this.createContactEquation(o,l,e,t,c,h);f.ni.copy(p);const x=SE;p.scale(m.dot(p),x),u.vsub(x,x),f.ri.copy(x),f.ri.vsub(o.position,f.ri),f.rj.copy(u),f.rj.vsub(l.position,f.rj),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}}}const bn=new S,gr=new S,vr=new S,xE=new S,_E=new S,yE=new Et,bE=new Et,ME=new S,wE=new S,SE=new S,EE=new S,TE=new S;new S;const AE=new S,RE=new S,CE=new S,PE=new S,LE=new S,NE=new S,DE=new S,UE=new S,IE=new S,OE=new S,FE=new S,zE=new xt,BE=[],Bl=new S,xm=new S,kE=new S,HE=new S,VE=new S;function GE(s,e,t){let i=null;const n=s.length;for(let r=0;r!==n;r++){const a=s[r],o=kE;s[(r+1)%n].vsub(a,o);const l=HE;o.cross(e,l);const c=VE;t.vsub(a,c);const h=l.dot(c);if(i===null||h>0&&i===!0||h<=0&&i===!1){i===null&&(i=h>0);continue}else return!1}return!0}const kl=new S,WE=new S,jE=new S,qE=new S,XE=[new S,new S,new S,new S,new S,new S],YE=new S,ZE=new S,KE=new S,JE=new S,$E=new S,QE=new S,e1=new S,t1=new S,i1=new S,s1=new S,n1=new S,r1=new S,a1=new S,o1=new S;new S,new S;const l1=new S,c1=new S,h1=new S,u1=new S,d1=new S,p1=new S,f1=new S,m1=new S,g1=new S,v1=new S,_m=new Et,x1=new S;new S;const _1=new S,ym=new S,y1=new S,b1=new S,M1=new S,w1=[0],S1=new S,E1=new S;class bm{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const i=t;t=e,e=i}return e<<16|t}set(e,t){const i=this.getKey(e,t),n=this.current;let r=0;for(;i>n[r];)r++;if(i!==n[r]){for(let a=n.length-1;a>=r;a--)n[a+1]=n[a];n[r]=i}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const i=this.current,n=this.previous,r=i.length,a=n.length;let o=0;for(let l=0;l<r;l++){let c=!1;const h=i[l];for(;h>n[o];)o++;c=h===n[o],c||Mm(e,h)}o=0;for(let l=0;l<a;l++){let c=!1;const h=n[l];for(;h>i[o];)o++;c=i[o]===h,c||Mm(t,h)}}}function Mm(s,e){s.push((e&4294901760)>>16,e&65535)}const Mu=(s,e)=>s<e?`${s}-${e}`:`${e}-${s}`;class T1{constructor(){this.data={keys:[]}}get(e,t){const i=Mu(e,t);return this.data[i]}set(e,t,i){const n=Mu(e,t);this.get(e,t)||this.data.keys.push(n),this.data[n]=i}delete(e,t){const i=Mu(e,t),n=this.data.keys.indexOf(i);n!==-1&&this.data.keys.splice(n,1),delete this.data[i]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const i=t.pop();delete e[i]}}}class A1 extends Xf{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=.016666666666666666,this.nextId=0,this.gravity=new S,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new S,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new RS,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new vm,this.constraints=[],this.narrowphase=new vE(this),this.collisionMatrix=new qf,this.collisionMatrixPrevious=new qf,this.bodyOverlapKeeper=new bm,this.shapeOverlapKeeper=new bm,this.contactmaterials=[],this.contactMaterialTable=new T1,this.defaultMaterial=new Ol("default"),this.defaultContactMaterial=new Ca(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,i){i instanceof fa?this.raycastClosest(e,t,{skipBackfaces:!0},i):this.raycastAll(e,t,{skipBackfaces:!0},i)}raycastAll(e,t,i,n){return i===void 0&&(i={}),i.mode=Tt.ALL,i.from=e,i.to=t,i.callback=n,wu.intersectWorld(this,i)}raycastAny(e,t,i,n){return i===void 0&&(i={}),i.mode=Tt.ANY,i.from=e,i.to=t,i.result=n,wu.intersectWorld(this,i)}raycastClosest(e,t,i,n){return i===void 0&&(i={}),i.mode=Tt.CLOSEST,i.from=e,i.to=t,i.result=n,wu.intersectWorld(this,i)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof Ce&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,i=this.bodies,n=i.indexOf(e);if(n!==-1){i.splice(n,1);for(let r=0;r!==i.length;r++)i[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let i=0;i<t.length;i++){const n=t[i].shapes;for(let r=0;r<n.length;r++){const a=n[r];if(a.id===e)return a}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=.016666666666666666),t===void 0&&(t=10);const i=Dt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const n=i-this.lastCallTime;this.step(e,n,t)}this.lastCallTime=i}step(e,t,i){if(i===void 0&&(i=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const n=Dt.now();let r=0;for(;this.accumulator>=e&&r<i&&(this.internalStep(e),this.accumulator-=e,r++,!(Dt.now()-n>e*1e3)););this.accumulator=this.accumulator%e;const a=this.accumulator/e;for(let o=0;o!==this.bodies.length;o++){const l=this.bodies[o];l.previousPosition.lerp(l.position,a,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,a,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,i=N1,n=D1,r=this.bodies.length,a=this.bodies,o=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=Ce.DYNAMIC;let u=-1/0;const p=this.constraints,g=L1;l.length();const v=l.x,m=l.y,f=l.z;let x=0;for(c&&(u=Dt.now()),x=0;x!==r;x++){const I=a[x];if(I.type===d){const D=I.force,O=I.mass;D.x+=O*v,D.y+=O*m,D.z+=O*f}}for(let I=0,D=this.subsystems.length;I!==D;I++)this.subsystems[I].update();c&&(u=Dt.now()),i.length=0,n.length=0,this.broadphase.collisionPairs(this,i,n),c&&(h.broadphase=Dt.now()-u);let y=p.length;for(x=0;x!==y;x++){const I=p[x];if(!I.collideConnected)for(let D=i.length-1;D>=0;D-=1)(I.bodyA===i[D]&&I.bodyB===n[D]||I.bodyB===i[D]&&I.bodyA===n[D])&&(i.splice(D,1),n.splice(D,1))}this.collisionMatrixTick(),c&&(u=Dt.now());const _=P1,R=t.length;for(x=0;x!==R;x++)_.push(t[x]);t.length=0;const T=this.frictionEquations.length;for(x=0;x!==T;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,n,this,t,_,this.frictionEquations,g),c&&(h.narrowphase=Dt.now()-u),c&&(u=Dt.now()),x=0;x<this.frictionEquations.length;x++)o.addEquation(this.frictionEquations[x]);const E=t.length;for(let I=0;I!==E;I++){const D=t[I],O=D.bi,B=D.bj,z=D.si,X=D.sj;let G;if(O.material&&B.material?G=this.getContactMaterial(O.material,B.material)||this.defaultContactMaterial:G=this.defaultContactMaterial,G.friction,O.material&&B.material&&(O.material.friction>=0&&B.material.friction>=0&&O.material.friction*B.material.friction,O.material.restitution>=0&&B.material.restitution>=0&&(D.restitution=O.material.restitution*B.material.restitution)),o.addEquation(D),O.allowSleep&&O.type===Ce.DYNAMIC&&O.sleepState===Ce.SLEEPING&&B.sleepState===Ce.AWAKE&&B.type!==Ce.STATIC){const W=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),de=B.sleepSpeedLimit**2;W>=de*2&&(O.wakeUpAfterNarrowphase=!0)}if(B.allowSleep&&B.type===Ce.DYNAMIC&&B.sleepState===Ce.SLEEPING&&O.sleepState===Ce.AWAKE&&O.type!==Ce.STATIC){const W=O.velocity.lengthSquared()+O.angularVelocity.lengthSquared(),de=O.sleepSpeedLimit**2;W>=de*2&&(B.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(O,B,!0),this.collisionMatrixPrevious.get(O,B)||(va.body=B,va.contact=D,O.dispatchEvent(va),va.body=O,B.dispatchEvent(va)),this.bodyOverlapKeeper.set(O.id,B.id),this.shapeOverlapKeeper.set(z.id,X.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Dt.now()-u,u=Dt.now()),x=0;x!==r;x++){const I=a[x];I.wakeUpAfterNarrowphase&&(I.wakeUp(),I.wakeUpAfterNarrowphase=!1)}for(y=p.length,x=0;x!==y;x++){const I=p[x];I.update();for(let D=0,O=I.equations.length;D!==O;D++){const B=I.equations[D];o.addEquation(B)}}o.solve(e,this),c&&(h.solve=Dt.now()-u),o.removeAllEquations();const P=Math.pow;for(x=0;x!==r;x++){const I=a[x];if(I.type&d){const D=P(1-I.linearDamping,e),O=I.velocity;O.scale(D,O);const B=I.angularVelocity;if(B){const z=P(1-I.angularDamping,e);B.scale(z,B)}}}this.dispatchEvent(C1),c&&(u=Dt.now());const M=this.stepnumber%(this.quatNormalizeSkip+1)===0,b=this.quatNormalizeFast;for(x=0;x!==r;x++)a[x].integrate(e,M,b);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Dt.now()-u),this.stepnumber+=1,this.dispatchEvent(R1);let L=!0;if(this.allowSleep)for(L=!1,x=0;x!==r;x++){const I=a[x];I.sleepTick(this.time),I.sleepState!==Ce.SLEEPING&&(L=!0)}this.hasActiveBodies=L}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(ms,gs),e){for(let r=0,a=ms.length;r<a;r+=2)xa.bodyA=this.getBodyById(ms[r]),xa.bodyB=this.getBodyById(ms[r+1]),this.dispatchEvent(xa);xa.bodyA=xa.bodyB=null}if(t){for(let r=0,a=gs.length;r<a;r+=2)_a.bodyA=this.getBodyById(gs[r]),_a.bodyB=this.getBodyById(gs[r+1]),this.dispatchEvent(_a);_a.bodyA=_a.bodyB=null}ms.length=gs.length=0;const i=this.hasAnyEventListener("beginShapeContact"),n=this.hasAnyEventListener("endShapeContact");if((i||n)&&this.shapeOverlapKeeper.getDiff(ms,gs),i){for(let r=0,a=ms.length;r<a;r+=2){const o=this.getShapeById(ms[r]),l=this.getShapeById(ms[r+1]);vs.shapeA=o,vs.shapeB=l,o&&(vs.bodyA=o.body),l&&(vs.bodyB=l.body),this.dispatchEvent(vs)}vs.bodyA=vs.bodyB=vs.shapeA=vs.shapeB=null}if(n){for(let r=0,a=gs.length;r<a;r+=2){const o=this.getShapeById(gs[r]),l=this.getShapeById(gs[r+1]);xs.shapeA=o,xs.shapeB=l,o&&(xs.bodyA=o.body),l&&(xs.bodyB=l.body),this.dispatchEvent(xs)}xs.bodyA=xs.bodyB=xs.shapeA=xs.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let i=0;i!==t;i++){const n=e[i];n.force,n.torque,n.force.set(0,0,0),n.torque.set(0,0,0)}}}new xt;const wu=new Tt,Dt=globalThis.performance||{};if(!Dt.now){let s=Date.now();Dt.timing&&Dt.timing.navigationStart&&(s=Dt.timing.navigationStart),Dt.now=()=>Date.now()-s}new S;const R1={type:"postStep"},C1={type:"preStep"},va={type:Ce.COLLIDE_EVENT_NAME,body:null,contact:null},P1=[],L1=[],N1=[],D1=[],ms=[],gs=[],xa={type:"beginContact",bodyA:null,bodyB:null},_a={type:"endContact",bodyA:null,bodyB:null},vs={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},xs={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};ic=(Eu=class{constructor(s){ne(this,"id");ne(this,"name");ne(this,"friction");ne(this,"restitution");let e="";const t=Object.assign({friction:-1,restitution:-1},s);this.id=ic.idCounter++,typeof s=="string"&&(e=s),this.name=e,this.friction=t.friction,this.restitution=t.restitution}},ne(Eu,"idCounter",0),Eu),He=(Er=class{constructor(s=0,e=0,t=0){ne(this,"x");ne(this,"y");ne(this,"z");this.x=s,this.y=e,this.z=t}static fromVector3(s){return new He(s.x,s.y,s.z)}cross(s,e=new He){const t=s.x,i=s.y,n=s.z,r=this.x,a=this.y,o=this.z;return e.x=a*n-o*i,e.y=o*t-r*n,e.z=r*i-a*t,e}set(s,e,t){return this.x=s,this.y=e,this.z=t,this}setZero(){this.x=this.y=this.z=0}vadd(s,e){if(e)e.x=s.x+this.x,e.y=s.y+this.y,e.z=s.z+this.z;else return new He(this.x+s.x,this.y+s.y,this.z+s.z)}vsub(s,e){if(e)e.x=this.x-s.x,e.y=this.y-s.y,e.z=this.z-s.z;else return new He(this.x-s.x,this.y-s.y,this.z-s.z)}crossmat(){return new xr([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const s=this.x,e=this.y,t=this.z,i=Math.sqrt(s*s+e*e+t*t);if(i>0){const n=1/i;this.x*=n,this.y*=n,this.z*=n}else this.x=0,this.y=0,this.z=0;return i}unit(s=new He){const e=this.x,t=this.y,i=this.z;let n=Math.sqrt(e*e+t*t+i*i);return n>0?(n=1/n,s.x=e*n,s.y=t*n,s.z=i*n):(s.x=1,s.y=0,s.z=0),s}length(){const s=this.x,e=this.y,t=this.z;return Math.sqrt(s*s+e*e+t*t)}lengthSquared(){return this.dot(this)}distanceTo(s){const e=this.x,t=this.y,i=this.z,n=s.x,r=s.y,a=s.z;return Math.sqrt((n-e)*(n-e)+(r-t)*(r-t)+(a-i)*(a-i))}distanceSquared(s){const e=this.x,t=this.y,i=this.z,n=s.x,r=s.y,a=s.z;return(n-e)*(n-e)+(r-t)*(r-t)+(a-i)*(a-i)}scale(s,e=new He){const t=this.x,i=this.y,n=this.z;return e.x=s*t,e.y=s*i,e.z=s*n,e}vmul(s,e=new He){return e.x=s.x*this.x,e.y=s.y*this.y,e.z=s.z*this.z,e}addScaledVector(s,e,t=new He){return t.x=this.x+s*e.x,t.y=this.y+s*e.y,t.z=this.z+s*e.z,t}dot(s){return this.x*s.x+this.y*s.y+this.z*s.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(s=new He){return s.x=-this.x,s.y=-this.y,s.z=-this.z,s}tangents(s,e){const t=this.length();if(t>0){const i=U1,n=1/t;i.set(this.x*n,this.y*n,this.z*n);const r=I1;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,s)):(r.set(0,1,0),i.cross(r,s)),i.cross(s,e)}else s.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(s){return this.x=s.x,this.y=s.y,this.z=s.z,this}lerp(s,e,t){const i=this.x,n=this.y,r=this.z;t.x=i+(s.x-i)*e,t.y=n+(s.y-n)*e,t.z=r+(s.z-r)*e}almostEquals(s,e=1e-6){return!(Math.abs(this.x-s.x)>e||Math.abs(this.y-s.y)>e||Math.abs(this.z-s.z)>e)}almostZero(s=1e-6){return!(Math.abs(this.x)>s||Math.abs(this.y)>s||Math.abs(this.z)>s)}isAntiparallelTo(s,e){return this.negate(wm),wm.almostEquals(s,e)}clone(){return new He(this.x,this.y,this.z)}},ne(Er,"ZERO"),ne(Er,"UNIT_X"),ne(Er,"UNIT_Y"),ne(Er,"UNIT_Z"),Er),He.ZERO=new He(0,0,0),He.UNIT_X=new He(1,0,0),He.UNIT_Y=new He(0,1,0),He.UNIT_Z=new He(0,0,1);const U1=new He,I1=new He,wm=new He;class xr{constructor(e=[0,0,0,0,0,0,0,0,0]){ne(this,"elements");this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e=new He){const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t=new He){const i=this.elements,n=e.x,r=e.y,a=e.z;return t.x=i[0]*n+i[1]*r+i[2]*a,t.y=i[3]*n+i[4]*r+i[5]*a,t.z=i[6]*n+i[7]*r+i[8]*a,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t=new xr){const i=this.elements,n=e.elements,r=t.elements,a=i[0],o=i[1],l=i[2],c=i[3],h=i[4],d=i[5],u=i[6],p=i[7],g=i[8],v=n[0],m=n[1],f=n[2],x=n[3],y=n[4],_=n[5],R=n[6],T=n[7],E=n[8];return r[0]=a*v+o*x+l*R,r[1]=a*m+o*y+l*T,r[2]=a*f+o*_+l*E,r[3]=c*v+h*x+d*R,r[4]=c*m+h*y+d*T,r[5]=c*f+h*_+d*E,r[6]=u*v+p*x+g*R,r[7]=u*m+p*y+g*T,r[8]=u*f+p*_+g*E,t}scale(e,t=new xr){const i=this.elements,n=t.elements;for(let r=0;r!==3;r++)n[3*r+0]=e.x*i[3*r+0],n[3*r+1]=e.y*i[3*r+1],n[3*r+2]=e.z*i[3*r+2];return t}solve(e,t=new He){const i=[];let n,r;for(n=0;n<12;n++)i.push(0);for(n=0;n<3;n++)for(r=0;r<3;r++)i[n+4*r]=this.elements[n+3*r];i[3]=e.x,i[7]=e.y,i[11]=e.z;let a=3;const o=a;let l;const c=4;let h;do{if(n=o-a,i[n+4*n]===0){for(r=n+1;r<o;r++)if(i[n+4*r]!==0){l=c;do h=c-l,i[h+4*n]+=i[h+4*r];while(--l);break}}if(i[n+4*n]!==0)for(r=n+1;r<o;r++){const d=i[n+4*r]/i[n+4*n];l=c;do h=c-l,i[h+4*r]=h<=n?0:i[h+4*r]-i[h+4*n]*d;while(--l)}}while(--a);if(t.z=i[11]/i[10],t.y=(i[7]-i[6]*t.z)/i[5],t.x=(i[3]-i[2]*t.z-i[1]*t.y)/i[0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,i){if(i===void 0)return this.elements[t+3*e];this.elements[t+3*e]=i}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let i=0;i<9;i++)e+=this.elements[i]+t;return e}reverse(e=new xr){const t=O1;let i,n;for(i=0;i<3;i++)for(n=0;n<3;n++)t[i+6*n]=this.elements[i+3*n];t[3]=1,t[9]=0,t[15]=0,t[4]=0,t[10]=1,t[16]=0,t[5]=0,t[11]=0,t[17]=1;let r=3;const a=r;let o;const l=6;let c;do{if(i=a-r,t[i+6*i]===0){for(n=i+1;n<a;n++)if(t[i+6*n]!==0){o=l;do c=l-o,t[c+6*i]+=t[c+6*n];while(--o);break}}if(t[i+6*i]!==0)for(n=i+1;n<a;n++){const h=t[i+6*n]/t[i+6*i];o=l;do c=l-o,t[c+6*n]=c<=i?0:t[c+6*n]-t[c+6*i]*h;while(--o)}}while(--r);i=2;do{n=i-1;do{const h=t[i+6*n]/t[i+6*i];o=6;do c=6-o,t[c+6*n]=t[c+6*n]-t[c+6*i]*h;while(--o)}while(n--)}while(--i);i=2;do{const h=1/t[i+6*i];o=6;do c=6-o,t[c+6*i]=t[c+6*i]*h;while(--o)}while(i--);i=2;do{n=2;do{if(c=t[3+n+6*i],isNaN(c)||c===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(i,n,c)}while(n--)}while(i--);return e}setRotationFromQuaternion(e){const t=e.x,i=e.y,n=e.z,r=e.w,a=t+t,o=i+i,l=n+n,c=t*a,h=t*o,d=t*l,u=i*o,p=i*l,g=n*l,v=r*a,m=r*o,f=r*l,x=this.elements;return x[0]=1-(u+g),x[1]=h-f,x[2]=d+m,x[3]=h+f,x[4]=1-(c+g),x[5]=p-v,x[6]=d-m,x[7]=p+v,x[8]=1-(c+u),this}transpose(e=new xr){const t=this.elements,i=e.elements;let n;return i[0]=t[0],i[4]=t[4],i[8]=t[8],n=t[1],i[1]=t[3],i[3]=n,n=t[2],i[2]=t[6],i[6]=n,n=t[5],i[5]=t[7],i[7]=n,e}}const O1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Di=class{constructor(s=0,e=0,t=0,i=1){ne(this,"x");ne(this,"y");ne(this,"z");ne(this,"w");this.x=s,this.y=e,this.z=t,this.w=i}static fromQuaternion(s){return new Di(s.x,s.y,s.z,s.w)}set(s,e,t,i){return this.x=s,this.y=e,this.z=t,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(s,e){const t=Math.sin(e*.5);return this.x=s.x*t,this.y=s.y*t,this.z=s.z*t,this.w=Math.cos(e*.5),this}toAxisAngle(s=new He){this.normalize();const e=2*Math.acos(this.w),t=Math.sqrt(1-this.w*this.w);return t<.001?(s.x=this.x,s.y=this.y,s.z=this.z):(s.x=this.x/t,s.y=this.y/t,s.z=this.z/t),[s,e]}setFromVectors(s,e){if(s.isAntiparallelTo(e)){const t=F1,i=z1;s.tangents(t,i),this.setFromAxisAngle(t,Math.PI)}else{const t=s.cross(e);this.x=t.x,this.y=t.y,this.z=t.z,this.w=Math.sqrt(s.length()**2*e.length()**2)+s.dot(e),this.normalize()}return this}mult(s,e=new Di){const t=this.x,i=this.y,n=this.z,r=this.w,a=s.x,o=s.y,l=s.z,c=s.w;return e.x=t*c+r*a+i*l-n*o,e.y=i*c+r*o+n*a-t*l,e.z=n*c+r*l+t*o-i*a,e.w=r*c-t*a-i*o-n*l,e}inverse(s=new Di){const e=this.x,t=this.y,i=this.z,n=this.w;this.conjugate(s);const r=1/(e*e+t*t+i*i+n*n);return s.x*=r,s.y*=r,s.z*=r,s.w*=r,s}conjugate(s=new Di){return s.x=-this.x,s.y=-this.y,s.z=-this.z,s.w=this.w,s}normalize(){let s=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return s===0?(this.x=0,this.y=0,this.z=0,this.w=0):(s=1/s,this.x*=s,this.y*=s,this.z*=s,this.w*=s),this}normalizeFast(){const s=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return s===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=s,this.y*=s,this.z*=s,this.w*=s),this}vmult(s,e=new He){const t=s.x,i=s.y,n=s.z,r=this.x,a=this.y,o=this.z,l=this.w,c=l*t+a*n-o*i,h=l*i+o*t-r*n,d=l*n+r*i-a*t,u=-r*t-a*i-o*n;return e.x=c*l+u*-r+h*-o-d*-a,e.y=h*l+u*-a+d*-r-c*-o,e.z=d*l+u*-o+c*-a-h*-r,e}copy(s){return this.x=s.x,this.y=s.y,this.z=s.z,this.w=s.w,this}toEuler(s,e="YZX"){let t,i,n;const r=this.x,a=this.y,o=this.z,l=this.w;switch(e){case"YZX":{const c=r*a+o*l;if(c>.499&&(t=2*Math.atan2(r,l),i=Math.PI/2,n=0),c<-.499&&(t=-2*Math.atan2(r,l),i=-Math.PI/2,n=0),t===void 0){const h=r*r,d=a*a,u=o*o;t=Math.atan2(2*a*l-2*r*o,1-2*d-2*u),i=Math.asin(2*c),n=Math.atan2(2*r*l-2*a*o,1-2*h-2*u)}break}default:throw new Error(`Euler order ${e} not supported yet.`)}s.y=t,s.z=i,s.x=n}setFromEuler(s,e,t,i="XYZ"){const n=Math.cos(s/2),r=Math.cos(e/2),a=Math.cos(t/2),o=Math.sin(s/2),l=Math.sin(e/2),c=Math.sin(t/2);return i==="XYZ"?(this.x=o*r*a+n*l*c,this.y=n*l*a-o*r*c,this.z=n*r*c+o*l*a,this.w=n*r*a-o*l*c):i==="YXZ"?(this.x=o*r*a+n*l*c,this.y=n*l*a-o*r*c,this.z=n*r*c-o*l*a,this.w=n*r*a+o*l*c):i==="ZXY"?(this.x=o*r*a-n*l*c,this.y=n*l*a+o*r*c,this.z=n*r*c+o*l*a,this.w=n*r*a-o*l*c):i==="ZYX"?(this.x=o*r*a-n*l*c,this.y=n*l*a+o*r*c,this.z=n*r*c-o*l*a,this.w=n*r*a+o*l*c):i==="YZX"?(this.x=o*r*a+n*l*c,this.y=n*l*a+o*r*c,this.z=n*r*c-o*l*a,this.w=n*r*a-o*l*c):i==="XZY"&&(this.x=o*r*a-n*l*c,this.y=n*l*a-o*r*c,this.z=n*r*c+o*l*a,this.w=n*r*a+o*l*c),this}clone(){return new Di(this.x,this.y,this.z,this.w)}slerp(s,e,t=new Di){const i=this.x,n=this.y,r=this.z,a=this.w;let o=s.x,l=s.y,c=s.z,h=s.w,d,u,p,g,v;return u=i*o+n*l+r*c+a*h,u<0&&(u=-u,o=-o,l=-l,c=-c,h=-h),1-u>1e-6?(d=Math.acos(u),p=Math.sin(d),g=Math.sin((1-e)*d)/p,v=Math.sin(e*d)/p):(g=1-e,v=e),t.x=g*i+v*o,t.y=g*n+v*l,t.z=g*r+v*c,t.w=g*a+v*h,t}integrate(s,e,t,i=new Di){const n=s.x*t.x,r=s.y*t.y,a=s.z*t.z,o=this.x,l=this.y,c=this.z,h=this.w,d=e*.5;return i.x+=d*(n*h+r*c-a*l),i.y+=d*(r*h+a*o-n*c),i.z+=d*(a*h+n*l-r*o),i.w+=d*(-n*o-r*l-a*c),i}};const F1=new He,z1=new He;class Hl{constructor(e={}){ne(this,"position");ne(this,"quaternion");this.position=new He,this.quaternion=new Di,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Hl.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Hl.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t=new He){return this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,i,n=new He){return i.vsub(e,n),t.conjugate(Sm),Sm.vmult(n,n),n}static pointToWorldFrame(e,t,i,n=new He){return t.vmult(i,n),n.vadd(e,n),n}static vectorToWorldFrame(e,t,i=new He){return e.vmult(t,i),i}static vectorToLocalFrame(e,t,i,n=new He){return t.w*=-1,t.vmult(i,n),t.w*=-1,n}}const Sm=new Di;Ou=class extends Ce{};class B1 extends Ra{}class Em extends fr{static fromMesh(e){return K1.createPhysicConvexPolyhedron(e)}}function k1(s){const e=[];return s.traverse(t=>{t instanceof Ht&&e.push(t)}),e}const H1=new U,Vl=new U,V1=new li;function Tm(s){const e=s.geometry.clone();return s.updateMatrixWorld(),s.matrixWorld.decompose(H1,V1,Vl),e.scale(Vl.x,Vl.y,Vl.z),e}function G1(s,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=s.getIndex(),n=s.getAttribute("position"),r=i?i.count:n.count;let a=0;const o=[],l=[],c=Math.log10(1/e),h=Math.pow(10,c);for(let p=0;p<r;p++){const g=i?i.getX(p):p;let v="";v+=`${~~(n.getX(g)*h)},`,v+=`${~~(n.getY(g)*h)},`,v+=`${~~(n.getZ(g)*h)},`,v in t?o.push(t[v]):(l.push(n.getX(g)),l.push(n.getY(g)),l.push(n.getZ(g)),t[v]=a,o.push(a),a++)}const d=new Gt(new Float32Array(l),n.itemSize,n.normalized),u=new Jt;return u.setAttribute("position",d),u.setIndex(o),u}function W1(s){let e=0;for(let n=0;n<s.length;n++){const r=s[n].attributes.position;r&&r.itemSize===3&&(e+=r.count)}const t=new Float32Array(e*3);let i=0;for(let n=0;n<s.length;n++){const r=s[n].attributes.position;if(r&&r.itemSize===3)for(let a=0;a<r.count;a++)t[i++]=r.getX(a),t[i++]=r.getY(a),t[i++]=r.getZ(a)}return new Jt().setAttribute("position",new Gt(t,3))}function Am(s){const e=k1(s);if(!e.length)return null;if(e.length===1)return Tm(e[0]);let t;const i=[];for(;t=e.pop();)i.push(G1(Tm(t)));return W1(i)}function j1(s){const e=Am(s);if(!e)throw"Geometry error";const t=1e-4;for(let l=0;l<e.attributes.position.count;l++)e.attributes.position.setXYZ(l,e.attributes.position.getX(l)+(Math.random()-.5)*t,e.attributes.position.getY(l)+(Math.random()-.5)*t,e.attributes.position.getZ(l)+(Math.random()-.5)*t);const i=new fM().setFromObject(new Ht(e)),n=new Map,r=i.vertices.map(({point:l})=>new S(l.x,l.y,l.z));i.vertices.forEach((l,c)=>n.set(l,c));const a=i.faces.map(l=>{const c=[];let h=l.edge;do{const d=n.get(h.vertex);c.push(d),h=h.next}while(h!==l.edge);return c}),o=i.faces.map(({normal:l})=>new S(l.x,l.y,l.z));return{faces:a,normals:o,vertices:r}}function q1(s){return new Em(j1(s))}function X1(s){const e=s.attributes.position,t=new Float32Array(e.count*3);for(let i=0;i<e.count;i++)t[i*3]=e.getX(i),t[i*3+1]=e.getY(i),t[i*3+2]=e.getZ(i);return t}function Y1(s){const e=X1(s);if(!e.length)throw`Vertices length ${e.length}`;const t=new Uint32Array(e.length);for(let i=0;i<e.length;i++)t[i]=i;return{vertices:e,indices:t}}function Z1(s){const{vertices:e,indices:t}=Y1(s.geometry);return new B1(e,t)}const K1={getGeometry:Am,createPhysicTrimesh:Z1,createPhysicConvexPolyhedron:q1};class J1 extends fa{constructor(){super();ne(this,"suspensionLength");ne(this,"directionWorld");ne(this,"groundObject");ne(this,"hitNormalWorld");ne(this,"hitPointWorld");ne(this,"body");this.rayFromWorld=new He,this.rayToWorld=new He,this.hitNormalWorld=new He,this.hitPointWorld=new He,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}}const Rm=new He,Cm=new He;class $1{constructor(e={}){ne(this,"sliding");ne(this,"connectionLocal");ne(this,"connectionWorld");ne(this,"directionLocal");ne(this,"directionWorld");ne(this,"axleLocal");ne(this,"axleWorld");ne(this,"radius");ne(this,"suspensionStiffness");ne(this,"frictionSlip");ne(this,"forwardAcceleration");ne(this,"sideAcceleration");ne(this,"steering");ne(this,"rotation");ne(this,"deltaRotation");ne(this,"maxSuspensionForce");ne(this,"suspensionForce");ne(this,"maxSuspensionTravel");ne(this,"rollInfluence");ne(this,"engineForce");ne(this,"brake");ne(this,"isFrontWheel");ne(this,"slipInfo");ne(this,"skidInfo");ne(this,"suspensionLength");ne(this,"sideImpulse");ne(this,"forwardImpulse");ne(this,"dampingCompression");ne(this,"dampingRelaxation");ne(this,"worldTransform");ne(this,"isInContact");ne(this,"raycastResult");ne(this,"suspensionRestLength");ne(this,"suspensionRelativeVelocity");ne(this,"clippedInvContactDotSuspension");ne(this,"customSlidingRotationalSpeed");const t=Object.assign({sliding:!1,connectionLocal:new He,directionLocal:new He,axleLocal:new He,radius:1,suspensionStiffness:100,frictionSlip:10.5,forwardAcceleration:1,sideAcceleration:1,maxSuspensionForce:Number.MAX_VALUE,suspensionForce:0,dampingCompression:10,dampingRelaxation:10,maxSuspensionTravel:1,rollInfluence:.01,isFrontWheel:!0,suspensionLength:0,customSlidingRotationalSpeed:-.1},e);this.sliding=t.sliding,this.connectionLocal=t.connectionLocal,this.connectionWorld=new He,this.directionLocal=t.directionLocal,this.directionWorld=new He,this.axleLocal=t.axleLocal,this.axleWorld=new He,this.radius=t.radius,this.suspensionStiffness=t.suspensionStiffness,this.frictionSlip=t.frictionSlip,this.forwardAcceleration=t.forwardAcceleration,this.sideAcceleration=t.sideAcceleration,this.steering=0,this.rotation=0,this.deltaRotation=0,this.maxSuspensionForce=t.maxSuspensionForce,this.suspensionForce=t.suspensionForce,this.dampingCompression=t.dampingCompression,this.dampingRelaxation=t.dampingRelaxation,this.maxSuspensionTravel=t.maxSuspensionTravel,this.rollInfluence=t.rollInfluence,this.engineForce=0,this.brake=0,this.isFrontWheel=t.isFrontWheel,this.slipInfo=0,this.skidInfo=0,this.suspensionLength=t.suspensionLength,this.customSlidingRotationalSpeed=t.customSlidingRotationalSpeed,this.sideImpulse=0,this.forwardImpulse=0,this.worldTransform=new Hl,this.isInContact=!1,this.raycastResult=new J1,this.suspensionRestLength=1,this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1}updateWheel(e){const t=this.raycastResult;if(this.isInContact){if(!t.directionWorld)return;const i=t.hitNormalWorld.dot(t.directionWorld);t.hitPointWorld.vsub(e.position,Cm),e.getVelocityAtWorldPoint(Cm,Rm);const n=t.hitNormalWorld.dot(Rm);if(i>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=10;else{const r=-1/i;this.suspensionRelativeVelocity=n*r,this.clippedInvContactDotSuspension=r}}else{if(t.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,!t.directionWorld)return;t.directionWorld.scale(-1,t.hitNormalWorld),this.clippedInvContactDotSuspension=1}}get position(){return this.worldTransform.position}get quaternion(){return this.worldTransform.quaternion}}class Q1 extends vm{}class eT extends mr{}uc=class extends A1{},Du=class extends tc{constructor(e){super();ne(this,"object");this.object=e}getPart(e){const t=this.object.getObjectByName(e);if(!t)throw`Child ${e} does not found`;return t}};class tT extends $1{constructor(t,i){super(i);ne(this,"object");At(this,Xl,.5);this.object=t}get isSkidding(){return Math.sqrt(this.sideImpulse*this.sideImpulse+this.forwardImpulse*this.forwardImpulse)>et(this,Xl)}update(){this.object.position.copy(this.position),this.object.quaternion.copy(this.quaternion)}}Xl=new WeakMap,hc=class{};var iT=Object.getOwnPropertyDescriptor,Pm=s=>{throw TypeError(s)},sT=(s,e,t,i)=>{for(var n=i>1?void 0:i?iT(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=a(n)||n);return n},Lm=(s,e,t)=>e.has(s)||Pm("Cannot "+t),Ut=(s,e,t)=>(Lm(s,e,"read from private field"),t?t.call(s):e.get(s)),_r=(s,e,t)=>e.has(s)?Pm("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),_s=(s,e,t,i)=>(Lm(s,e,"write to private field"),e.set(s,t),t),nT=(s,e,t,i)=>({set _(n){_s(s,e,n)},get _(){return Ut(s,e,i)}}),Ci,ya,Gl,Wl,ys,yr;oc=class{constructor(s){_r(this,Ci,[]),_r(this,ya),_r(this,Gl,0),_r(this,Wl,0),_r(this,ys,0),_r(this,yr,!1),_s(this,ya,s)}hasHistory(){return Ut(this,Ci).length>0}clear(){_s(this,Ci,[])}start(){_s(this,Gl,performance.now()),_s(this,Ci,[])}stepRecord(){Ut(this,Ci).push({time:performance.now()-Ut(this,Gl),state:Ut(this,ya).toJSON()})}startReplay(){_s(this,Wl,performance.now()),_s(this,ys,0),_s(this,yr,!0)}stepReplay(){if(!Ut(this,yr)||Ut(this,ys)>=Ut(this,Ci).length)return;const s=performance.now()-Ut(this,Wl);for(;Ut(this,ys)<Ut(this,Ci).length&&Ut(this,Ci)[Ut(this,ys)].time<=s;){const e=Ut(this,Ci)[Ut(this,ys)];Ut(this,ya).fromJSON(e.state),nT(this,ys)._++}Ut(this,ys)>=Ut(this,Ci).length&&_s(this,yr,!1)}isReplaying(){return Ut(this,yr)}},Ci=new WeakMap,ya=new WeakMap,Gl=new WeakMap,Wl=new WeakMap,ys=new WeakMap,yr=new WeakMap,oc=sT([mn([hc])],oc),Iu=(Tu=class extends Du{createChassisBody(s,e){const t=Em.fromMesh(s);return new Ou({material:Iu.material,angularDamping:.9,linearDamping:.1,...e,shape:t})}createWheel(s,e,t){s.visible=!1;const i=He.fromVector3(s.position);i.y=t;const n=new He(0,-1,0),r=new He(-1,0,0),{radius:a}=Uu(s.geometry);return new tT(e,{...e.userData,customSlidingRotationalSpeed:-30,useCustomSlidingRotationalSpeed:!0,connectionLocal:i,directionLocal:n,axleLocal:r,radius:a})}get position(){return this.chassis.body.position}get quaternion(){return this.chassis.body.quaternion}reset(s,e){return this.chassis.body.inertia.setZero(),this.chassis.body.velocity.setZero(),this.chassis.body.angularVelocity.setZero(),this.chassis.body.torque.setZero(),this.chassis.body.force.setZero(),this.engine.reset(),s&&this.spawn(s,e),this}spawn(s,e){return this.position.set(...s),e&&this.quaternion.set(...e),this}},ne(Tu,"material",new ic("Vehicle")),Tu),new TextDecoder("utf-16le",{fatal:!0}),Object.hasOwn=Object.hasOwn||function(s,e){return Object.prototype.hasOwnProperty.call(s,e)};class rT{constructor(){At(this,En);At(this,bs,0);At(this,zs,1);At(this,Yl,0);At(this,Zl,0);At(this,Bs,0);At(this,Sn);At(this,Yi);At(this,Ms,0);At(this,Sa,({code:e})=>{e==="ArrowLeft"&&(et(this,Yi).add("left"),Zi(this,En,Ua).call(this)),e==="ArrowRight"&&(et(this,Yi).add("right"),Zi(this,En,Ua).call(this)),e==="ShiftLeft"&&It(this,zs,0),e==="ArrowUp"&&It(this,bs,1),e==="ArrowDown"&&It(this,bs,-1),e==="Space"&&It(this,Bs,1),e==="KeyY"&&et(this,Sn).emit(1),e==="KeyH"&&et(this,Sn).emit(-1)});At(this,Ea,({code:e})=>{e==="ArrowLeft"&&(et(this,Yi).delete("left"),Zi(this,En,Ua).call(this)),e==="ArrowRight"&&(et(this,Yi).delete("right"),Zi(this,En,Ua).call(this)),e==="ShiftLeft"&&It(this,zs,1),(e==="ArrowUp"||e==="ArrowDown")&&It(this,bs,0),e==="Space"&&It(this,Bs,0)});It(this,Sn,new Pa),It(this,Yi,new Set)}get throttle(){return et(this,bs)}get clutch(){return et(this,zs)}get turbo(){return et(this,Yl)}get handbrake(){return et(this,Zl)}get brake(){return et(this,Bs)}get shift$(){return et(this,Sn).asObserver()}async enable(){addEventListener("keydown",et(this,Sa)),addEventListener("keyup",et(this,Ea))}async disable(){removeEventListener("keydown",et(this,Sa)),removeEventListener("keyup",et(this,Ea))}get steering(){return et(this,Ms)}toJSON(){return{steering:et(this,Ms),throttle:et(this,bs),brake:et(this,Bs),clutch:et(this,zs)}}fromJSON(e){It(this,Ms,e.steering),It(this,bs,e.throttle),It(this,zs,e.clutch),It(this,Bs,e.brake)}}bs=new WeakMap,zs=new WeakMap,Yl=new WeakMap,Zl=new WeakMap,Bs=new WeakMap,Sn=new WeakMap,Yi=new WeakMap,Ms=new WeakMap,En=new WeakSet,Ua=function(){const e=et(this,Yi).has("left"),t=et(this,Yi).has("right");return e&&!t?It(this,Ms,1):t&&!e?It(this,Ms,-1):It(this,Ms,0)},Sa=new WeakMap,Ea=new WeakMap;const aT=`:host {
  position: absolute;
  /* width: 280px;
  height: 380px; */
  /* background: white; */
  padding: 2em;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
}

:host img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

:host(.center) {
  z-index: 10;
  transform: scale(1.1) translateZ(0);
}

:host(.center) img {
  filter: none;
}

:host(.left-2) {
  z-index: 1;
  transform: translateX(-400px) scale(0.8) translateZ(-300px);
  opacity: 0.7;
}

:host(.left-2) img {
  filter: grayscale(100%);
}

:host(.left-1) {
  z-index: 5;
  transform: translateX(-200px) scale(0.9) translateZ(-100px);
  opacity: 0.9;
}

:host(.left-1) img {
  filter: grayscale(100%);
}

:host(.right-1) {
  z-index: 5;
  transform: translateX(200px) scale(0.9) translateZ(-100px);
  opacity: 0.9;
}

:host(.right-1) img {
  filter: grayscale(100%);
}

:host(.right-2) {
  z-index: 1;
  transform: translateX(400px) scale(0.8) translateZ(-300px);
  opacity: 0.7;
}

:host(.right-2) img {
  filter: grayscale(100%);
}

:host(.hidden) {
  opacity: 0;
  pointer-events: none;
}

@media (max-width: 768px) {
  :host {
    width: 200px;
    height: 280px;
  }

  :host(.left-2) {
    transform: translateX(-250px) scale(0.8) translateZ(-300px);
  }

  :host(.left-1) {
    transform: translateX(-120px) scale(0.9) translateZ(-100px);
  }

  :host(.right-1) {
    transform: translateX(120px) scale(0.9) translateZ(-100px);
  }

  :host(.right-2) {
    transform: translateX(250px) scale(0.8) translateZ(-300px);
  }
}
`;var oT=Object.getOwnPropertyDescriptor,lT=(s,e,t,i)=>{for(var n=i>1?void 0:i?oT(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=a(n)||n);return n};let Nm=class extends gn{constructor(e,t){super("",aT);ne(this,"img");ne(this,"info");this.info=t,this.img=Ki("img",{src:e,alt:t.title}),this.shadow.append(this.img)}get index(){return this.dataset.index}set index(e){this.dataset.index=e}};Nm=lT([mi("carousel-card")],Nm);const cT=`<!-- prettier-ignore -->
<button class="arrow left">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 -960 960 960" fill="none">
    <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" fill="currentColor"/>
  </svg>
</button>

<section class="track">
  <slot name="card"></slot>
</section>

<!-- prettier-ignore -->
<button class="arrow right">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 -960 960 960" fill="none">
    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" fill="currentColor" />
  </svg>
</button>

<div class="info">
  <h2 class="title"></h2>
  <p class="description"></p>
</div>

<ul class="dots">
  
</ul>
`,hT=`:host {
	width: 100%;
	max-width: 1200px;
	height: 450px;
	position: relative;
	perspective: 1000px;
	margin-top: 80px;
}

:host .track {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	transform-style: preserve-3d;
	transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

:host .arrow {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background: white;
	fill: black;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	z-index: 20;
	transition: all 0.3s ease;
	border: none;
	outline: none;
}

:host .arrow:hover {
	background: black;
  color: white;
	transform: translateY(-50%) scale(1.4);
}

:host .arrow.left {
	left: 20px;
	padding-right: 3px;
}

:host .arrow.right {
	right: 20px;
	padding-left: 3px;
}

:host .info {
	text-align: center;
	margin-top: 40px;
	transition: all 0.5s ease-out;
}

:host .info h2 {
	color: rgb(8, 42, 123);
	font-size: 2.5rem;
	font-weight: 700;
	margin-bottom: 10px;
	position: relative;
	display: inline-block;
}

:host .info h2::before,
:host .info h2::after {
	content: "";
	position: absolute;
	top: 100%;
	width: 100px;
	height: 2px;
	background: rgb(8, 42, 123);
}

:host .info h2::before {
	left: -120px;
}

:host .info h2::after {
	right: -120px;
}

:host .info p {
	color: #848696;
	font-size: 1.5rem;
	font-weight: 500;
	opacity: 0.8;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	padding: 10px 0;
	margin-top: -15px;
	position: relative;
}

:host .dots {
	display: flex;
	justify-content: center;
	gap: 10px;
	margin-top: 60px;
}

:host ::slotted(li) {
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background: rgba(8, 42, 123, 0.2);
	cursor: pointer;
	transition: all 0.3s ease;
}

:host li.active {
	background: rgb(8, 42, 123);
	transform: scale(1.2);
}

@media (max-width: 768px) {
  :host .info {
		font-size: 2rem;
	}

	:host .info p {
		font-size: 1.2rem;
	}

	:host .info::before,
	:host .info::after {
		width: 50px;
	}

	:host .info::before {
		left: -70px;
	}

	:host .info::after {
		right: -70px;
	}
}`;var uT=Object.getOwnPropertyDescriptor,dT=(s,e,t,i)=>{for(var n=i>1?void 0:i?uT(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=a(n)||n);return n};let Dm=class extends gn{constructor(){super(cT,hT);ne(this,"cards");ne(this,"dotsFn");ne(this,"dots");ne(this,"infoFn");ne(this,"info");ne(this,"infoTitleFn");ne(this,"infoTitle");ne(this,"infoDescriptionFn");ne(this,"infoDescription");ne(this,"trackFn");ne(this,"track");ne(this,"arrowLeftFn",ua("button"));ne(this,"arrowRightFn",xw(HTMLButtonElement));ne(this,"currentIndex");ne(this,"isAnimating");this.currentIndex=0,this.isAnimating=!1,this.dotsFn=_w(HTMLLIElement),this.dots=this.dotsFn(),this.infoFn=ua("div"),this.info=this.infoFn(),this.infoTitleFn=ua("h2"),this.infoTitle=this.infoTitleFn(),this.infoDescriptionFn=ua("p"),this.infoDescription=this.infoDescriptionFn(),this.trackFn=ua("section"),this.track=this.trackFn(),this.cards=[]}addCard(e){e.slot="card",this.cards.push(e),this.appendChild(e),this.infoTitle.textContent=e.info.title,this.infoDescription.textContent=e.info.description}connectedCallback(){const e=this.arrowLeftFn();e&&e.addEventListener("click",()=>{this.update(this.currentIndex-1)});const t=this.arrowRightFn();t&&t.addEventListener("click",()=>{this.update(this.currentIndex+1)})}update(e){this.isAnimating||(this.isAnimating=!0,this.currentIndex=(e+this.cards.length)%this.cards.length,this.cards.forEach((t,i)=>{const n=(i-this.currentIndex+this.cards.length)%this.cards.length;t.classList.remove("center","left-1","left-2","right-1","right-2","hidden"),n===0?t.classList.add("center"):n===1?t.classList.add("right-1"):n===2?t.classList.add("right-2"):n===this.cards.length-1?t.classList.add("left-1"):n===this.cards.length-2?t.classList.add("left-2"):t.classList.add("hidden")}),this.dots.forEach((t,i)=>{t.classList.toggle("active",i===this.currentIndex)}),this.infoTitle.style.opacity="0",this.infoDescription.style.opacity="0",setTimeout(()=>{this.infoTitle.textContent=this.cards[this.currentIndex].info.title,this.infoDescription.textContent=this.cards[this.currentIndex].info.description,this.infoTitle.style.opacity="1",this.infoDescription.style.opacity="1"},300),setTimeout(()=>{this.isAnimating=!1},800))}updateDots(){}};Dm=dT([mi("carousel-container")],Dm);const pT=`:host {
  /* display: flex; */
  margin: 50px 0;
  background-color: #e64a19;
}

:host menu {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  position: relative;
}

:host menu li {
  list-style: none;
  display: inline-block;
  background-color: #e64a19;
}

:host span {
  display: flex;
  padding: 0 10px;
  color: #fff;
  font-size: 20px;
  line-height: 60px;
  text-decoration: none;
}

:host span:hover {
  background-color: #000000;
}

/* Hide Dropdowns by Defamenut */
:host menu menu {
  display: none;
  position: absolute;
  top: 60px; /* the height of the main :host */
}

/* Display Dropdowns on Hover */
:host menu li:hover > menu {
  display: inherit;
}

/* Fisrt Tier Dropdown */
:host menu menu li {
  width: 170px;
  float: none;
  display: list-item;
  position: relative;
}

/* Second, Third and more Tiers	*/
:host menu menu menu li {
  position: relative;
  top: -60px;
  left: 170px;
}
`;var fT=Object.defineProperty,mT=Object.getOwnPropertyDescriptor,Um=s=>{throw TypeError(s)},gT=(s,e,t)=>e in s?fT(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,vT=(s,e,t,i)=>{for(var n=i>1?void 0:i?mT(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=a(n)||n);return n},xT=(s,e,t)=>gT(s,e+"",t),Im=(s,e,t)=>e.has(s)||Um("Cannot "+t),br=(s,e,t)=>(Im(s,e,"read from private field"),t?t.call(s):e.get(s)),Su=(s,e,t)=>e.has(s)?Um("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),Om=(s,e,t,i)=>(Im(s,e,"write to private field"),e.set(s,t),t),ba,Ma,jl;let Fm=class extends gn{constructor(s){super("",pT),Su(this,ba),Su(this,Ma),xT(this,"clicked$"),Su(this,jl,e=>{const t=ha.li(),i=ha.span({textContent:e.text});if(t.appendChild(i),"children"in e){const n=ha.menu();e.children.forEach(r=>{const a=br(this,jl).call(this,r);a&&n.appendChild(a),t.appendChild(n)})}else t.addEventListener("click",()=>{br(this,Ma).emit(e.action)});return t}),Om(this,Ma,new Pa),this.clicked$=br(this,Ma).asObserver(),Om(this,ba,ha.menu({})),s.forEach(e=>{const t=br(this,jl).call(this,e);t&&br(this,ba).appendChild(t)}),this.shadow.appendChild(br(this,ba))}};ba=new WeakMap,Ma=new WeakMap,jl=new WeakMap,Fm=vT([mi("toolbar-menu")],Fm);const _T=`<footer>
  <p>Races Games &copy; <var data-prop="year"></var></p>
</footer>
`,yT=`:host {
  padding: 2em;
  width: 100vw;
  display: flex;
  flex-direction: column;
}`;var bT=Object.getOwnPropertyDescriptor,MT=(s,e,t,i)=>{for(var n=i>1?void 0:i?bT(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=a(n)||n);return n};let zm=class extends gn{constructor(){super(_T,yT);ne(this,"model",yw({year:0}));ne(this,"state",this.model())}connectedCallback(){this.state.year=2025}};zm=MT([mi("home-footer")],zm);var wT=Object.getOwnPropertyDescriptor,ST=(s,e,t,i)=>{for(var n=i>1?void 0:i?wT(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(n=a(n)||n);return n};let Bm=class extends HTMLLIElement{};Bm=ST([mi("menu-item","li")],Bm);const km={graphic:{antialias:!0,powerPreference:"high-performance",stencil:!1,depth:!1,color:{clear:16777215,space:Ct},tone:{mapping:Ya,mappingExposure:.6},shadow:{enabled:!0,type:fc},size:{get width(){return innerWidth},get height(){return innerHeight},get pixelRatio(){return devicePixelRatio},get aspect(){return innerWidth/innerHeight}}},physic:{gravity:{x:0,y:-9.81,z:0},step:1/72}},Hm=new Mf("graphic.config"),Vm=new Mf("physic.config");Os({ref:Hm,use:km.graphic}),Os({ref:Vm,use:km.physic}),Os({ref:pu,use:s=>{const{antialias:e,powerPreference:t,stencil:i,depth:n}=s,r=new pu({powerPreference:t,antialias:e,stencil:i,depth:n}),{size:a,color:o}=s;r.setSize(a.width,a.height),r.setPixelRatio(a.pixelRatio),r.setClearColor(o.clear),r.outputColorSpace=o.space;const{shadow:l,tone:c}=s;return r.shadowMap.enabled=l.enabled,r.shadowMap.type=l.type,r.toneMapping=c.mapping,r.toneMappingExposure=c.mappingExposure,r},dep:[Hm]}),Os({ref:lc,use:s=>{const e=new Jw,t=new Kw;return new lc(s,e,t)},dep:[pu]}),Os({ref:uc,use:s=>{const e=new uc;e.gravity.copy(s.gravity),e.broadphase=new eT(e),e.defaultContactMaterial.restitution=.01,e.defaultContactMaterial.friction=.9;const t=new Q1;return t.iterations=10,e.solver=t,e},dep:[Vm]}),Os({ref:hc,use:rT}),bf().then(async()=>{const{AppElement:s}=await Ia(async()=>{const{AppElement:e}=await import("./app.element-BoWJT0zS.js");return{AppElement:e}},__vite__mapDeps([0,1]));document.body.prepend(new s)})})();export{eg as A,ze as C,Pu as D,Lu as E,Ss as G,$l as H,Ql as I,kt as L,Aa as M,Nu as P,li as Q,tg as R,ec as S,Ra as T,U as V,DT as __tla,Ht as a,Ca as b,He as c,Di as d,ig as e,Du as f,tc as g,Uu as h,Pa as i,Iu as j,Ou as k,ic as l,sc as m,Ki as n,La as o,nc as p,rc as q,ac as r,oc as s,lc as t,cc as u,hc as v,Na as w,uc as x,mi as y};

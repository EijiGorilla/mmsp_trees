"use strict";(self.webpackChunkmmsp_trees=self.webpackChunkmmsp_trees||[]).push([[394],{80394:(e,n,t)=>{t.d(n,{Fi:()=>X,Hq:()=>Y,Mk:()=>p,P_:()=>q,Qp:()=>J,VO:()=>G,Wt:()=>I,_D:()=>k,kr:()=>H,lK:()=>Q,nF:()=>E,tB:()=>W,ut:()=>F,vF:()=>U,zD:()=>b});t(59486);var i,o,l=t(63780),s=t(10064),r=t(68860),a=t(15075),c=t(45925),f=t(92975),u=t(53866),h=t(585),x=t(80885),m=t(78952);function p(e,n,t){return!(0,c.canProjectWithoutEngine)(e,n,t)}function g(e,n,t){const i=p(e,n,t);if(i&&!(0,c.isLoaded)())throw new s.Z("rasterprojectionhelper-project","projection engine is not loaded");return i}(o=i||(i={}))[o.None=0]="None",o[o.North=1]="North",o[o.South=2]="South",o[o.Both=3]="Both";const d=function(e,n,t){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(1===t[0])return[0,0];let o=1,l=-1,s=1,r=-1;for(let g=0;g<e.length;g+=2)isNaN(e[g])||(o=o>e[g]?e[g]:o,l=l>e[g]?l:e[g],s=s>e[g+1]?e[g+1]:s,r=r>e[g+1]?r:e[g+1]);const{cols:a,rows:c}=n,f=(l-o)/a/t[0],u=(r-s)/c/t[1],h=2*i;let x=0,m=!1,p=[0,0];for(let g=0;g<a-3;g++){for(let n=0;n<c-3;n++){const t=g*c*2+2*n,i=(e[t]+e[t+4]+e[t+4*c]+e[t+4*c+4])/4,o=(e[t+1]+e[t+5]+e[t+4*c+1]+e[t+4*c+5])/4,l=Math.abs((i-e[t+2*c+2])/f),s=Math.abs((o-e[t+2*c+3])/u);if(l+s>x&&(x=l+s,p=[l,s]),h&&x>h){m=!0;break}}if(m)break}return p},y={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},M=32,w=4,v=w,R=new Map,P=new Map,S=500;async function b(){(0,c.isLoaded)()||await(0,c.load)()}function k(e,n,t){return g(e.spatialReference,n),t?(0,c.getTransformation)(n,e.spatialReference,e):(0,c.getTransformation)(e.spatialReference,n,e)}function G(e,n,t){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;const o=e.spatialReference;if(o.equals(n))return e;g(o,n,i);const l=t.center,s=new u.Z({xmin:l.x-e.x/2,xmax:l.x+e.x/2,ymin:l.y-e.y/2,ymax:l.y+e.y/2,spatialReference:o}),a=(0,c.project)(s,n,i),f=F(n);let h;if(null==a||null!=f&&a.width>=f){const t=(0,r.c9)(o)/(0,r.c9)(n);h={x:e.x*t,y:e.y*t}}else h={x:a.width,y:a.height};return h}function N(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01;return(0,r.c9)(e)?n/(0,r.c9)(e):0}function E(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const o=e.spatialReference;if(o.equals(n))return e;g(o,n,t);const l=(0,c.project)(e,n,t);return i&&l?(T([e],[l],o,n),l):l}function T(e,n,t,i){const o=A(t,!0),l=A(i,!0),s=N(t,S),r=N(i,S);if(s&&null!=o&&null!=l)for(let a=0;a<e.length;a++){const t=n[a];if(!t)continue;const{x:i}=e[a],{x:c}=t;c>=l[1]-r&&Math.abs(i-o[0])<s?t.x-=l[1]-l[0]:c<=l[0]+r&&Math.abs(i-o[1])<s&&(t.x+=l[1]-l[0])}}function C(e){const{inSR:n,outSR:t,datumTransformation:i,preferPE:o}=e;if(n.equals(t)){const{points:n}=L(e,null);return n}if(n.isWebMercator&&t.isWGS84||n.isWGS84&&t.isWebMercator)return function(e){const{cols:n,rows:t,xres:i,yres:o,usePixelCenter:l,inSR:s,outSR:r}=e;let{xmin:a,ymax:f}=e;l&&(a+=i/2,f-=o/2);const u=[],x=[],m=Math.max(n,t);for(let g=0;g<m;g++){const e=a+i*Math.min(n,g),l=f-o*Math.min(t,g),m=(0,c.project)(new h.Z({x:e,y:l,spatialReference:s}),r);g<=n&&u.push(m.x),g<=t&&x.push(m.y)}const p=[];for(let c=0;c<n;c++)for(let e=0;e<t;e++)p.push([u[c],x[e]]);return p}(e);if(g(n,t,i)&&o){if(n.isGeographic)return _(e);if(null!=Z(n))return _(e)}return function(e){const{points:n}=L(e,null),{inSR:t,outSR:i,datumTransformation:o}=e,l=n.map((e=>new h.Z(e[0],e[1],t))),s=(0,c.project)(l,i,o);return o&&T(l,s,t,i),s.map((e=>e?[e.x,e.y]:[NaN,NaN]))}(e)}function _(e){const{inSR:n,outSR:t,datumTransformation:i}=e,o=Z(n),{points:l,mask:s}=L(e,o);if(!n.isGeographic){const e=n.wkid?a.P.coordsys(n.wkid):a.P.fromString(n.isGeographic?a.a.PE_TYPE_GEOGCS:a.a.PE_TYPE_PROJCS,n.wkt2||n.wkt);a.g.projToGeog(e,l.length,l)}if(null!=i&&i.steps.length){let e;const n=179.9955;if(t.isGeographic&&(e=l.map((e=>{let[t]=e;return t>n?1:t<-n?-1:0}))),i.steps.forEach((e=>{const n=e.wkid?a.P.geogtran(e.wkid):a.P.fromString(a.a.PE_TYPE_GEOGTRAN,e.wkt);a.h.geogToGeog(n,l.length,l,null,e.isInverse?a.a.PE_TRANSFORM_2_TO_1:a.a.PE_TRANSFORM_1_TO_2)})),e)for(let t=0;t<l.length;t++){const i=e[t],o=l[t][0],s=o>n?1:o<-n?-1:0;i&&s&&i!==s&&(l[t][0]=i>0?o+360:o-360)}}if(!t.isGeographic){const e=Z(t,!0),n=null!=e&&e.isEnvelope?[e.bbox[1],e.bbox[3]]:[-90,90];!function(e,n){const[t,i]=n;for(let o=0;o<e.length;o++){const n=e[o][1];(n<t||n>i)&&(e[o]=[NaN,NaN])}}(l,n);const i=t.wkid?a.P.coordsys(t.wkid):a.P.fromString(t.isGeographic?a.a.PE_TYPE_GEOGCS:a.a.PE_TYPE_PROJCS,t.wkt2||t.wkt);a.g.geogToProj(i,l.length,l)}let r=l;if(s&&l.length!==s.length){r=[];for(let e=0,n=0;e<s.length;e++)s[e]?r.push(l[n++]):r.push([NaN,NaN])}return r}function Z(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=e.wkid||e.wkt2||e.wkt;if(!t||e.isGeographic)return null;if(t=String(t),R.has(t)){const e=R.get(t);return n?null===e||void 0===e?void 0:e.gcs:null===e||void 0===e?void 0:e.pcs}const i=e.wkid?a.P.coordsys(e.wkid):a.P.fromString(e.isGeographic?a.a.PE_TYPE_GEOGCS:a.a.PE_TYPE_PROJCS,e.wkt2||e.wkt),o=z(i,N(e,1e-4)),l=z(i,0,!0);return R.set(t,{pcs:o,gcs:l}),n?l:o}function z(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i=a.j.generate(e),o=t?e.horizonGcsGenerate():e.horizonPcsGenerate();if(!i||null===o||void 0===o||!o.length)return null;let l=!1,s=o.find((e=>1===e.getInclusive()&&1===e.getKind()));if(!s){if(s=o.find((e=>1===e.getInclusive()&&0===e.getKind())),!s)return null;l=!0}const r=t?0:(2===i.getNorthPoleLocation()?1:0)|(2===i.getSouthPoleLocation()?2:0),c=i.isPannableRectangle(),f=s.getCoord();if(l)return{isEnvelope:l,isPannable:c,vertices:f,coef:null,bbox:[f[0][0]-n,f[0][1]-n,f[1][0]+n,f[1][1]+n],poleLocation:r};let u=0;const h=[];let[x,m]=f[0],[p,g]=f[0];for(let a=0,d=f.length;a<d;a++){u++,u===d&&(u=0);const[e,n]=f[a],[t,i]=f[u];if(i===n)h.push([e,t,n,i,2]);else{const o=(t-e)/(i-n||1e-4),l=e-o*n;n<i?h.push([o,l,n,i,0]):h.push([o,l,i,n,1])}x=x<e?x:e,m=m<n?m:n,p=p>e?p:e,g=g>n?g:n}return{isEnvelope:!1,isPannable:c,vertices:f,coef:h,bbox:[x,m,p,g],poleLocation:r}}function L(e,n){const t=[],{cols:i,rows:o,xres:l,yres:s,usePixelCenter:r}=e;let{xmin:a,ymax:c}=e;if(r&&(a+=l/2,c-=s/2),null==n){for(let e=0;e<i;e++)for(let n=0;n<o;n++)t.push([a+l*e,c-s*n]);return{points:t}}const f=new Uint8Array(i*o);if(n.isEnvelope){const{bbox:[e,r,u,h]}=n;for(let x=0,m=0;x<i;x++){const i=a+l*x,p=n.isPannable||i>=e&&i<=u;for(let e=0;e<o;e++,m++){const n=c-s*e;p&&n>=r&&n<=h&&(t.push([i,n]),f[m]=1)}}return{points:t,mask:f}}const u=n.coef,h=[];for(let x=0;x<o;x++){const e=c-s*x,n=[],t=[];for(let o=0;o<u.length;o++){const[i,l,s,r,a]=u[o];if(e===s&&s===r)n.push(i),n.push(l),t.push(2),t.push(2);else if(e>=s&&e<=r){const o=i*e+l;n.push(o),t.push(a)}}let i=n;if(n.length>2){let e=2===t[0]?0:t[0],o=n[0];i=[];for(let l=1;l<t.length;l++)2===t[l]&&l!==t.length-1||(t[l]!==e&&(i.push(0===e?Math.min(o,n[l-1]):Math.max(o,n[l-1])),e=t[l],o=n[l]),l===t.length-1&&i.push(0===t[l]?Math.min(o,n[l]):Math.max(o,n[l])));i.sort(((e,n)=>e-n))}else n[0]>n[1]&&(i=[n[1],n[0]]);h.push(i)}for(let x=0,m=0;x<i;x++){const e=a+l*x;for(let n=0;n<o;n++,m++){const i=c-s*n,o=h[n];if(2===o.length)e>=o[0]&&e<=o[1]&&(t.push([e,i]),f[m]=1);else if(o.length>2){let n=!1;for(let t=0;t<o.length;t+=2)if(e>=o[t]&&e<=o[t+1]){n=!0;break}n&&(t.push([e,i]),f[m]=1)}}}return{points:t,mask:f}}function j(e,n){var t;const i=F(e[0].spatialReference);if(e.length<2||null==i)return e[0];if(n=null!==(t=n)&&void 0!==t?t:N(e[0].spatialReference),1===(e=e.filter((e=>e.width>n))).length)return e[0];let{xmin:o,xmax:l,ymin:s,ymax:r}=e[0];for(let a=1;a<e.length;a++){const n=e[a];l=n.xmax+i*a,s=Math.min(s,n.ymin),r=Math.max(r,n.ymax)}return new u.Z({xmin:o,xmax:l,ymin:s,ymax:r,spatialReference:e[0].spatialReference})}function W(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const s=e.spatialReference;if(s.equals(n))return e;const r=Y(e),a=F(s,!0),f=F(n);if(0===r||null==a||null==f){const l=O(e,n,t,o);if(null==a&&null!=f&&Math.abs(l.width-f)<N(n)&&(0,c.isLoaded)()){const t=Z(s);if(null!=t&&t.poleLocation===i.None&&e.width<(t.bbox[2]-t.bbox[0])/2)return function(e,n){const t=F(n);if(null==t)return null;let{xmin:i,ymin:o,xmax:l,ymax:s}=e;const r=e.spatialReference,a=new x.Z({spatialReference:r,rings:[[[i,o],[l,o],[l,s],[i,s],[i,o]]]}),f=(0,c.project)(a,n);if(2!==f.rings.length||!f.rings[0].length||!f.rings[1].length)return null;const{rings:h}=f,m=N(r),p=new u.Z({spatialReference:n});for(let c=0;c<2;c++){i=l=h[c][0][0],o=s=h[c][0][1];for(let e=0;e<h[c].length;e++)i=i>h[c][e][0]?h[c][e][0]:i,l=l<h[c][e][0]?h[c][e][0]:l,o=o>h[c][e][1]?h[c][e][1]:o,s=s<h[c][e][1]?h[c][e][1]:s;if(0===c)p.ymin=o,p.ymax=s,p.xmin=i,p.xmax=l;else if(p.ymin=Math.min(p.ymin,o),p.ymax=Math.max(p.ymax,s),Math.abs(l-t/2)<m)p.xmin=i,p.xmax=p.xmax+t;else{if(!(Math.abs(i+t/2)<m))return null;p.xmax=l+t}}return p}(e,n)||l}return l}const h=e.clone().normalize();if(1===h.length&&e.xmax<a&&e.xmax-a/2>N(s)){const{xmin:n,xmax:t}=e;for(let i=0;i<=r;i++){const o=0===i?n:-a/2,l=i===r?t-a*i:a/2;h[i]=new u.Z({xmin:o,xmax:l,ymin:e.ymin,ymax:e.ymax,spatialReference:s})}}return j(h.map((e=>O(e,n,t,o))).filter(l.pC))}function I(e,n,t){if("extent"===e.type){const{xmin:n,ymin:t,xmax:i,ymax:o,spatialReference:l}=e;e=new x.Z({rings:[[[n,o],[i,o],[i,t],[n,t],[n,o]]],spatialReference:l})}return e.spatialReference.equals(n)?e:(g(e.spatialReference,n,t),(0,c.project)(e,n,t))}function O(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];const l=e.spatialReference;if(l.equals(n)||!n)return e;g(l,n,t);const s=(0,c.project)(e,n,t);if(o&&n.isWebMercator&&s&&(s.ymax=Math.min(20037508.342787,s.ymax),s.ymin=Math.max(-20037508.342787,s.ymin),s.ymin>=s.ymax))return null;if(!i||!s)return s;const r=A(l,!0),a=A(n,!0);if(null==r||null==a)return s;const f=N(l,.001),u=N(l,S),x=N(n,.001);if(Math.abs(s.xmin-a[0])<x&&Math.abs(s.xmax-a[1])<x){const i=Math.abs(e.xmin-r[0]),o=Math.abs(r[1]-e.xmax);if(i<f&&o>u){s.xmin=a[0];const i=[];i.push(new h.Z(e.xmax,e.ymin,l)),i.push(new h.Z(e.xmax,(e.ymin+e.ymax)/2,l)),i.push(new h.Z(e.xmax,e.ymax,l));const o=i.map((e=>E(e,n,t))).filter((e=>!isNaN(null===e||void 0===e?void 0:e.x))).map((e=>e.x));s.xmax=Math.max.apply(null,o)}if(o<f&&i>u){s.xmax=a[1];const i=[];i.push(new h.Z(e.xmin,e.ymin,l)),i.push(new h.Z(e.xmin,(e.ymin+e.ymax)/2,l)),i.push(new h.Z(e.xmin,e.ymax,l));const o=i.map((e=>E(e,n,t))).filter((e=>!isNaN(null===e||void 0===e?void 0:e.x))).map((e=>e.x));s.xmin=Math.min.apply(null,o)}}else{const e=N(n,.001);Math.abs(s.xmin-a[0])<e&&(s.xmin=a[0]),Math.abs(s.xmax-a[1])<e&&(s.xmax=a[1])}return s}function F(e){if(!e)return null;const n=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?20037508.342787:20037508.342788905;return e.isWebMercator?2*n:e.wkid&&e.isGeographic?360:2*y[e.wkid]||null}function A(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.isGeographic)return[-180,180];const t=F(e,n);return null!=t?[-t/2,t/2]:null}function B(e,n,t,i){let o=(e-n)/t;return o-Math.floor(o)!=0?o=Math.floor(o):i&&(o-=1),o}function Y(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const t=F(e.spatialReference);if(null==t)return 0;const i=n?0:-t/2,o=N(e.spatialReference),l=!n&&Math.abs(e.xmax-t/2)<o?t/2:e.xmax,s=!n&&Math.abs(e.xmin+t/2)<o?-t/2:e.xmin;return B(l,i,t,!0)-B(s,i,t,!1)}function q(e){const n=e.storageInfo.origin.x,t=F(e.spatialReference,!0);if(null==t)return{originX:n,halfWorldWidth:null,pyramidsInfo:null};const i=t/2,{nativePixelSize:o,storageInfo:l,extent:s}=e,{maximumPyramidLevel:r,blockWidth:a,pyramidScalingFactor:c}=l;let f=o.x;const u=[],h=null!=e.transform&&"gcs-shift"===e.transform.type,x=n+(h?0:i),m=h?t-n:i-n;for(let p=0;p<=r;p++){const e=(s.xmax-n)/f/a,t=e-Math.floor(e)==0?e:Math.ceil(e),i=m/f/a,o=i-Math.floor(i)==0?i:Math.ceil(i),l=Math.floor(x/f/a),r=Math.round(x/f)%a,h=(a-Math.round(m/f)%a)%a;u.push({resolutionX:f,blockWidth:a,datsetColumnCount:t,worldColumnCountFromOrigin:o,leftMargin:r,rightPadding:h,originColumnOffset:l}),f*=c}return{originX:n,halfWorldWidth:i,pyramidsInfo:u,hasGCSSShiftTransform:h}}function J(e){const n=e.isAdaptive&&null==e.spacing;let t=e.spacing||[M,M],i=D(e),o={cols:i.size[0]+1,rows:i.size[1]+1};const l=i.outofBoundPointCount>0&&i.outofBoundPointCount<i.offsets.length/2;let s=i.outofBoundPointCount===i.offsets.length/2||n&&l?[0,0]:d(i.offsets,o,t,v);const r=(s[0]+s[1])/2,c=e.projectedExtent.spatialReference,f=e.srcBufferExtent.spatialReference;if(n&&(l||r>v)&&(p(c,f,e.datumTransformation)&&(c.isGeographic||Z(c)),t=[w,w],i=D({...e,spacing:t}),o={cols:i.size[0]+1,rows:i.size[1]+1},s=d(i.offsets,o,t,v)),i.error=s,t[0]>1&&(i.coefficients=K(i.offsets,o,l)),e.includeGCSGrid&&!c.isGeographic&&!c.isWebMercator)if(f.isGeographic)i.gcsGrid={offsets:i.offsets,coefficients:i.coefficients,spacing:t};else{const n=Z(c);if(null!=n&&!n.isEnvelope){const n=function(e){if(!e||e.isGeographic)return e;const n=String(e.wkid||e.wkt2||e.wkt);let t;return P.has(n)?t=P.get(n):(t=(e.wkid?a.P.coordsys(e.wkid):a.P.fromString(a.a.PE_TYPE_PROJCS,e.wkt2||e.wkt)).getGeogcs().getCode(),P.set(n,t)),new m.Z({wkid:t})}(c),s=W(e.projectedExtent,n),{offsets:r}=D({...e,srcBufferExtent:s,spacing:t}),f=K(r,o,l);i.gcsGrid={offsets:r,coefficients:f,spacing:t}}}return i}function D(e){const{projectedExtent:n,srcBufferExtent:t,pixelSize:i,datumTransformation:o,rasterTransform:l}=e,s=n.spatialReference,r=t.spatialReference,a=g(s,r),{xmin:c,ymin:f,xmax:u,ymax:x}=n,m=F(r),p=null!=m&&(e.hasWrapAround||"gcs-shift"===(null===l||void 0===l?void 0:l.type)),d=e.spacing||[M,M],y=d[0]*i.x,v=d[1]*i.y,R=1===d[0],P=Math.ceil((u-c)/y-.1/d[0])+(R?0:1),b=Math.ceil((x-f)/v-.1/d[1])+(R?0:1),k=C({cols:P,rows:b,xmin:c,ymax:x,xres:y,yres:v,inSR:s,outSR:r,datumTransformation:o,preferPE:d[0]<=w,usePixelCenter:R}),G=[];let E,T=0;const _=R?-1:NaN,{xmin:z,xmax:L,ymax:j,width:W,height:I}=t,O=N(r,S),A=null!=m&&z>0&&L>m/2;let B=!1;if(a){const e=Z(s);B=null!=e&&e.poleLocation>0}for(let g=0;g<P;g++){const e=[];for(let n=0;n<b;n++){let t=k[g*b+n];if(p&&t[0]>L&&t[0]>m/2-O?t[0]-=m:p&&0===g&&t[0]<0&&A&&!l&&(t[0]+=m),!t||isNaN(t[0])||isNaN(t[1]))G.push(_),G.push(_),e.push(null),T++;else{if(l){const e=l.inverseTransform(new h.Z({x:t[0],y:t[1],spatialReference:r}));t=[e.x,e.y]}e.push(t),g>0&&p&&E[n]&&t[0]<E[n][0]&&(t[0]+=m,B&&t[0]>L&&t[0]>m&&(t[0]-=m)),G.push((t[0]-z)/W),G.push((j-t[1])/I)}}E=e}return{offsets:G,error:null,coefficients:null,outofBoundPointCount:T,spacing:d,size:R?[P,b]:[P-1,b-1]}}function K(e,n,t){const{cols:i,rows:o}=n,l=new Float32Array((i-1)*(o-1)*2*6),s=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),r=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let a=0;a<i-1;a++){for(let n=0;n<o-1;n++){let t=a*o*2+2*n;const c=e[t],f=e[t+1],u=e[t+2],h=e[t+3];t+=2*o;const x=e[t],m=e[t+1],p=e[t+2],g=e[t+3];let d=0,y=12*(n*(i-1)+a);for(let e=0;e<3;e++)l[y++]=s[d++]*c+s[d++]*u+s[d++]*p;d=0;for(let e=0;e<3;e++)l[y++]=s[d++]*f+s[d++]*h+s[d++]*g;d=0;for(let e=0;e<3;e++)l[y++]=r[d++]*c+r[d++]*x+r[d++]*p;d=0;for(let e=0;e<3;e++)l[y++]=r[d++]*f+r[d++]*m+r[d++]*g}if(t)for(let e=0;e<l.length;e++)isNaN(l[e])&&(l[e]=-1)}return l}function X(e){const{spatialReference:n}=e,t=(0,f.C5)(n);if(!t)return e;const[i,o]=t.valid,l=o-i;let s=0;if(e.xmin<i){const n=i-e.xmin;s=Math.ceil(n/l)}else if(e.xmin>o){const n=e.xmin-o;s=-Math.ceil(n/l)}return new u.Z({spatialReference:e.spatialReference,xmin:e.xmin+s*l,ymin:e.ymin,xmax:e.xmax+s*l,ymax:e.ymax})}function H(e,n,t){var i;const{storageInfo:o,pixelSize:l}=n;let s=0,a=!1;const{pyramidResolutions:c}=o,f="mixed"===(null===(i=o.tileInfo.format)||void 0===i?void 0:i.toLowerCase())?Math.max(1,Math.min(3,o.tileInfo.dpi/96)):1,u=(e.x+e.y)/2/f;if(null!=c&&c.length){const e=c[c.length-1],i=(e.x+e.y)/2,o=(l.x+l.y)/2;if(u<=o)s=0;else if(u>=i)s=c.length,a=u/i>8;else{let e,n=o;for(let i=1;i<=c.length;i++){if(e=(c[i-1].x+c[i-1].y)/2,u<=e){u===e?s=i:"down"===t?(s=i-1,a=u/n>8):s="up"===t||u-n>e-u||u/n>2?i:i-1;break}n=e}}const f=0===s?l:c[s-1];return a&&Math.min(f.x,f.y)*(0,r.c9)(n.spatialReference)>19567&&(a=!1),{pyramidLevel:s,pyramidResolution:new h.Z({x:f.x,y:f.y,spatialReference:n.spatialReference}),excessiveReading:a}}const x=Math.log(e.x/l.x)/Math.LN2,m=Math.log(e.y/l.y)/Math.LN2,p=n.storageInfo.maximumPyramidLevel||0;s="down"===t?Math.floor(Math.min(x,m)):"up"===t?Math.ceil(Math.max(x,m)):Math.round((x+m)/2),s<0?s=0:s>p&&(a=s>p+3,s=p);const g=2**s;return{pyramidLevel:s,pyramidResolution:new h.Z({x:g*n.nativePixelSize.x,y:g*n.nativePixelSize.y,spatialReference:n.spatialReference}),excessiveReading:a}}function Q(e,n){const{pixelSize:t,extent:i}=e,o=k(i,n,!1);return W(function(e,n){const t=e.clone().normalize();return 1===t.length?t[0]:j(t,n)}(i,(t.x+t.y)/16),n,o)}function U(e,n,t){var i,o,l;const s=null!==(i=null===t||void 0===t?void 0:t.tileSize)&&void 0!==i?i:512,a=null===(o=null===t||void 0===t?void 0:t.alignGlobalDatasetWithAGOL)||void 0===o||o,c=!(null===t||void 0===t||!t.limitToSrcResolution),{extent:f,spatialReference:u,pixelSize:x}=e,m=G(new h.Z({x:x.x,y:x.y,spatialReference:u}),n,f);if(null==m)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const p=(m.x+m.y)/2,g=(0,r.c9)(n),d=p*g*96*39.37,y=n.isGeographic?256/s*295828763.7958547:256/s*591657527.591555;let M="vector-magdir"===e.dataType||"vector-uv"===e.dataType;const w=Q(e,n),v=Math.min(Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2),Math.ceil(Math.log(y/2/d)/Math.LN2));if(!M&&a&&(n.isGeographic||n.isWebMercator)){const t=F(n);if(M=Y(w)>0||null!=t&&w.width>t/4,!M&&null!=t){let n=-1;if(v<3)n=2**v*p*s;else if(e.storageInfo){const{maximumPyramidLevel:t=0,pyramidScalingFactor:i=2}=e.storageInfo;n=i**t*p*s}const i=Math.ceil(t/n);M=1===i||2===i&&t/2-w.xmax<n}}let R,P=d;const S=1.001,b=Math.min(2,Math.max(1.414,(null===(l=e.storageInfo)||void 0===l?void 0:l.pyramidScalingFactor)||2));if(M){P=y;const e=n.isGeographic?1341104507446289e-21:.29858214164761665,t=e*(96*g*39.37),i=n.isGeographic?4326:3857;R=G(new h.Z({x:e,y:e,spatialReference:{wkid:i}}),u,w),R.x*=P/t,R.y*=P/t}else{R={x:x.x,y:x.y};let e=0;for(;P<y*(S/2)&&e<v;)e++,P*=b,R.x*=b,R.y*=b;Math.max(P,y)/Math.min(P,y)<=S&&(P=y)}const k=[P],N=[{x:R.x,y:R.y}],E=Math.min(70.5310735,d)/S;for(;P>=E;)P/=b,R.x/=b,R.y/=b,k.push(P),N.push({x:R.x,y:R.y});if(c){const e=.001*x.x;let n=N.findIndex((n=>n.x>=x.x-e&&n.x<=x.x+e));n>-1?(N.length=n+1,k.length=n+1):(n=N.findIndex((n=>n.x<=x.x+e)),n>0&&(N.length=n,k.length=n))}return{projectedPixelSize:m,scales:k,srcResolutions:N,isCustomTilingScheme:!M}}}}]);
//# sourceMappingURL=394.7644055f.chunk.js.map
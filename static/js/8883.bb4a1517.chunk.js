"use strict";(self.webpackChunkmmsp_trees=self.webpackChunkmmsp_trees||[]).push([[8883],{88396:(e,t,n)=>{n.d(t,{a:()=>l,f:()=>i,n:()=>r});var o=n(18722);function r(e,t){l(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;const l=t.length/2;let i=0,a=0;if((0,o.kJ)(t)||(0,o.Q7)(t)){for(let o=0;o<l;++o)e[i]=t[a],e[i+1]=t[a+1],i+=n,a+=r;return}const u=(0,o.Op)(t);if((0,o.B3)(t))for(let o=0;o<l;++o)e[i]=Math.max(t[a]/u,-1),e[i+1]=Math.max(t[a+1]/u,-1),i+=n,a+=r;else for(let o=0;o<l;++o)e[i]=t[a]/u,e[i+1]=t[a+1]/u,i+=n,a+=r}function i(e,t,n,o){var r,l;const i=e.typedBuffer,a=e.typedBufferStride,u=null!==(r=null===o||void 0===o?void 0:o.count)&&void 0!==r?r:e.count;let s=(null!==(l=null===o||void 0===o?void 0:o.dstIndex)&&void 0!==l?l:0)*a;for(let c=0;c<u;++c)i[s]=t,i[s+1]=n,s+=a}Object.freeze(Object.defineProperty({__proto__:null,fill:i,normalizeIntegerBuffer:l,normalizeIntegerBufferView:r},Symbol.toStringTag,{value:"Module"}))},92770:(e,t,n)=>{function o(e,t){r(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function r(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;const r=t.length/o;let l=0,i=0;for(let a=0;a<r;++a)e[l]=t[i],e[l+1]=t[i+1],e[l+2]=t[i+2],l+=n,i+=o}function l(e,t,n,o,r){var l,i;const a=e.typedBuffer,u=e.typedBufferStride,s=null!==(l=null===r||void 0===r?void 0:r.count)&&void 0!==l?l:e.count;let c=(null!==(i=null===r||void 0===r?void 0:r.dstIndex)&&void 0!==i?i:0)*u;for(let f=0;f<s;++f)a[c]=t,a[c+1]=n,a[c+2]=o,c+=u}n.d(t,{a:()=>o,c:()=>r,f:()=>l});Object.freeze(Object.defineProperty({__proto__:null,copy:r,copyView:o,fill:l},Symbol.toStringTag,{value:"Module"}))},69618:(e,t,n)=>{function o(e,t){r(e.typedBuffer,t,e.typedBufferStride)}function r(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;const o=t.typedBuffer,r=t.typedBufferStride,l=t.count;let i=0,a=0;for(let u=0;u<l;++u)e[i]=o[a],e[i+1]=o[a+1],e[i+2]=o[a+2],e[i+3]=o[a+3],i+=n,a+=r}function l(e,t,n,o,r,l){var i,a;const u=e.typedBuffer,s=e.typedBufferStride,c=null!==(i=null===l||void 0===l?void 0:l.count)&&void 0!==i?i:e.count;let f=(null!==(a=null===l||void 0===l?void 0:l.dstIndex)&&void 0!==a?a:0)*s;for(let d=0;d<c;++d)u[f]=t,u[f+1]=n,u[f+2]=o,u[f+3]=r,f+=s}n.d(t,{a:()=>r,c:()=>o,f:()=>l});Object.freeze(Object.defineProperty({__proto__:null,copy:r,copyView:o,fill:l},Symbol.toStringTag,{value:"Module"}))},48734:(e,t,n)=>{function o(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}n.d(t,{n1:()=>o})},58883:(e,t,n)=>{n.r(t),n.d(t,{loadGLTFMesh:()=>I});var o=n(51995),r=n(76200),l=n(10064),i=n(77427),a=n(16889),u=n(29303),s=n(21389),c=n(12400),f=n(86361),d=n(64995),p=n(11587),m=n(79694),v=n(50565),y=n(27474),g=n(69048),h=n(25158),T=n(11186),x=n(6754),B=n(48734);Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,n){var o,r;const l=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,u=t.typedBufferStride,s=n?n.count:t.count;let c=(null!==(o=null===n||void 0===n?void 0:n.dstIndex)&&void 0!==o?o:0)*i,f=(null!==(r=null===n||void 0===n?void 0:n.srcIndex)&&void 0!==r?r:0)*u;for(let d=0;d<s;++d){for(let e=0;e<9;++e)l[c+e]=a[f+e];c+=i,f+=u}}},Symbol.toStringTag,{value:"Module"}));Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,n){var o,r;const l=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,u=t.typedBufferStride,s=n?n.count:t.count;let c=(null!==(o=null===n||void 0===n?void 0:n.dstIndex)&&void 0!==o?o:0)*i,f=(null!==(r=null===n||void 0===n?void 0:n.srcIndex)&&void 0!==r?r:0)*u;for(let d=0;d<s;++d){for(let e=0;e<16;++e)l[c+e]=a[f+e];c+=i,f+=u}}},Symbol.toStringTag,{value:"Module"}));n(53801);var w=n(88396),b=n(92770),O=n(69618);function _(e,t){return new e(new ArrayBuffer(t*e.ElementCount*(0,B.n1)(e.ElementType)))}var E=n(66149),S=n(27053),M=n(57516),A=n(32315),C=n(57661),N=n(68845),R=n(8548);async function I(e,t,n){const u=new S.C(function(e){const t=null===e||void 0===e?void 0:e.resolveFile;return t?{busy:!1,request:async(e,n,o)=>{var l;const i=null!==(l=null===t||void 0===t?void 0:t(e))&&void 0!==l?l:e,a="image"===n?"image":"binary"===n||"image+type"===n?"array-buffer":"json";return(await(0,r.Z)(i,{responseType:a,signal:null===o||void 0===o?void 0:o.signal,timeout:0})).data}}:null}(n)),s=(await(0,M.loadGLTF)(u,t,n,!0)).model,d=s.lods.shift(),T=new Map,x=new Map;s.textures.forEach(((e,t)=>T.set(t,function(e){return new m.Z({data:((0,C.$A)(e.data),e.data),wrap:j(e.parameters.wrap)})}(e)))),s.materials.forEach(((e,t)=>x.set(t,function(e,t){const n=new o.Z(function(e,t){return(0,f.al)(q(e[0]),q(e[1]),q(e[2]),t)}(e.color,e.opacity)),r=e.emissiveFactor?new o.Z(function(e){return(0,c.al)(q(e[0]),q(e[1]),q(e[2]))}(e.emissiveFactor)):null,l=e=>{var t;return e?new v.Z({scale:e.scale?[e.scale[0],e.scale[1]]:[1,1],rotation:(0,a.BV)(null!==(t=e.rotation)&&void 0!==t?t:0),offset:e.offset?[e.offset[0],e.offset[1]]:[0,0]}):null};return new p.Z({color:n,colorTexture:t.get(e.textureColor),normalTexture:t.get(e.textureNormal),emissiveColor:r,emissiveTexture:t.get(e.textureEmissive),occlusionTexture:t.get(e.textureOcclusion),alphaMode:U(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.textureMetallicRoughness),colorTextureTransform:l(e.colorTextureTransform),normalTextureTransform:l(e.normalTextureTransform),occlusionTextureTransform:l(e.occlusionTextureTransform),emissiveTextureTransform:l(e.emissiveTextureTransform),metallicRoughnessTextureTransform:l(e.metallicRoughnessTextureTransform)})}(e,T))));const B=function(e){let t=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},o=new Map,r=new Map,l=[];for(const a of e.parts){const{attributes:{position:e,normal:u,color:s,tangent:c,texCoord0:f}}=a,d="\n      ".concat(L(e,o),"/\n      ").concat(L(u,o),"/\n      ").concat(L(s,o),"/\n      ").concat(L(c,o),"/\n      ").concat(L(f,o),"/\n      ").concat(D(a.transform),"\n    ");let p=!1;const m=(0,i.s1)(r,d,(()=>(p=!0,{start:t,length:e.count})));p&&(t+=e.count),u&&(n.normal=!0),s&&(n.color=!0),c&&(n.tangent=!0),f&&(n.texCoord0=!0),l.push({gltf:a,writeVertices:p,region:m})}return{vertexAttributes:{position:_(h.fP,t),normal:n.normal?_(h.ct,t):null,tangent:n.tangent?_(h.ek,t):null,color:n.color?_(h.mc,t):null,texCoord0:n.texCoord0?_(h.Eu,t):null},parts:l,components:[]}}(d);for(const o of B.parts)k(B,o,x);const{position:w,normal:b,tangent:O,color:A,texCoord0:N}=B.vertexAttributes,R=(0,g.G7)(e,n),I=e.spatialReference.isGeographic?(0,g.G7)(e):R,G=(0,E.qk)({vertexAttributes:{position:w.typedBuffer,normal:null===b||void 0===b?void 0:b.typedBuffer,tangent:null===O||void 0===O?void 0:O.typedBuffer},vertexSpace:I,spatialReference:e.spatialReference},R,{allowBufferReuse:!0,sourceUnit:null!==n&&void 0!==n&&n.unitConversionDisabled?void 0:"meters"});if(!G)throw new l.Z("load-gltf-mesh:vertex-space-projection","Failed to load mesh from glTF because we could not convert the vertex space from ".concat(I.type," to ").concat(R.type));return{transform:null,vertexSpace:R,components:B.components,spatialReference:e.spatialReference,vertexAttributes:new y.Q({...G,color:null===A||void 0===A?void 0:A.typedBuffer,uv:null===N||void 0===N?void 0:N.typedBuffer})}}function L(e,t){if(null==e)return"-";const n=e.typedBuffer;return"".concat((0,i.s1)(t,n.buffer,(()=>t.size)),"/").concat(n.byteOffset,"/").concat(n.byteLength)}function D(e){return null!=e?e.toString():"-"}function k(e,t,n){t.writeVertices&&function(e,t){const{position:n,normal:o,tangent:r,color:l,texCoord0:i}=e.vertexAttributes,c=t.region.start,{attributes:f,transform:d}=t.gltf,p=f.position.count;if((0,T.d)(n.slice(c,p),f.position,d),null!=f.normal&&null!=o){const e=(0,u.XL)((0,s.Ue)(),d),t=o.slice(c,p);(0,T.c)(t,f.normal,e),(0,a.oc)(e)&&(0,T.e)(t,t)}else null!=o&&(0,b.f)(o,0,0,1,{dstIndex:c,count:p});if(null!=f.tangent&&null!=r){const e=(0,u.xO)((0,s.Ue)(),d),t=r.slice(c,p);(0,x.a)(t,f.tangent,e),(0,a.oc)(e)&&(0,x.n)(t,t)}else null!=r&&(0,O.f)(r,0,0,1,1,{dstIndex:c,count:p});if(null!=f.texCoord0&&null!=i?(0,w.n)(i.slice(c,p),f.texCoord0):null!=i&&(0,w.f)(i,0,0,{dstIndex:c,count:p}),null!=f.color&&null!=l){const e=f.color,t=l.slice(c,p);if(4===e.elementCount)e instanceof h.ek?(0,x.s)(t,e,255):e instanceof h.mc?(0,O.c)(t,e):e instanceof h.v6&&(0,x.s)(t,e,1/256);else{(0,O.f)(t,255,255,255,255);const n=h.ne.fromTypedArray(t.typedBuffer,t.typedBufferStride);e instanceof h.ct?(0,T.s)(n,e,255):e instanceof h.ne?(0,b.a)(n,e):e instanceof h.mw&&(0,T.s)(n,e,1/256)}}else null!=l&&(0,O.f)(l.slice(c,p),255,255,255,255)}(e,t);const{indices:o,attributes:r,primitiveType:l,material:i}=t.gltf;let c=(0,A.p)(o||r.position.count,l);const f=t.region.start;if(f){const e=new Uint32Array(c);for(let t=0;t<c.length;t++)e[t]+=f;c=e}e.components.push(new d.Z({name:t.gltf.name,faces:c,material:n.get(i),shading:r.normal?"source":"flat",trustSourceNormals:!0}))}function U(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function j(e){return{horizontal:G(e.s),vertical:G(e.t)}}function G(e){switch(e){case R.e8.CLAMP_TO_EDGE:return"clamp";case R.e8.MIRRORED_REPEAT:return"mirror";case R.e8.REPEAT:return"repeat"}}function q(e){return e**(1/N.j)*255}},27053:(e,t,n)=>{n.d(t,{C:()=>u});var o=n(76200),r=n(14921),l=n(10064),i=n(66978),a=n(35995);class u{constructor(e){this._streamDataRequester=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return(0,a.HK)(e)?((0,i.k_)(t),(0,a.AH)(e)):this._load("binary",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,n){if(null==this._streamDataRequester)return(await(0,o.Z)(t,{responseType:s[e]})).data;const a=await(0,r.q6)(this._streamDataRequester.request(t,e,n));if(!0===a.ok)return a.value;throw(0,i.r9)(a.error),new l.Z("glt-loader-request-error","Request for resource failed: ".concat(a.error))}}const s={image:"image",binary:"array-buffer",json:"json","image+type":void 0}},32315:(e,t,n)=>{n.d(t,{p:()=>i});var o=n(18722),r=n(39406),l=n(8548);function i(e,t){switch(t){case l.MX.TRIANGLES:return"number"==typeof(n=e)?(0,r.KF)(n):(0,o.lq)(n)?new Uint16Array(n):n;case l.MX.TRIANGLE_STRIP:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return[];const n=t-2,o=(0,r.$z)(3*n);if("number"==typeof e){let e=0;for(let t=0;t<n;t+=1)t%2==0?(o[e++]=t,o[e++]=t+1,o[e++]=t+2):(o[e++]=t+1,o[e++]=t,o[e++]=t+2)}else{let t=0;for(let r=0;r<n;r+=1)r%2==0?(o[t++]=e[r],o[t++]=e[r+1],o[t++]=e[r+2]):(o[t++]=e[r+1],o[t++]=e[r],o[t++]=e[r+2])}return o}(e);case l.MX.TRIANGLE_FAN:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const n=t-2,o=n<=65536?new Uint16Array(3*n):new Uint32Array(3*n);if("number"==typeof e){let e=0;for(let t=0;t<n;++t)o[e++]=0,o[e++]=t+1,o[e++]=t+2;return o}const r=e[0];let l=e[1],i=0;for(let a=0;a<n;++a){const t=e[a+2];o[i++]=r,o[i++]=l,o[i++]=t,l=t}return o}(e)}var n}},57661:(e,t,n)=>{n.d(t,{$A:()=>i,Ml:()=>u,NM:()=>l,i$:()=>a});var o=n(93169),r=n(68401);class l{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=r.Ti.KTX2_ENCODING}}function i(e){return"encoded-mesh-texture"===(null===e||void 0===e?void 0:e.type)}async function a(e){const t=new Blob([e]),n=await t.text();return JSON.parse(n)}async function u(e,t){if(t===r.Ti.KTX2_ENCODING)return new l(e);const n=new Blob([e],{type:t}),i=URL.createObjectURL(n),a=new Image;if((0,o.Z)("esri-iPhone"))return new Promise(((e,t)=>{const n=()=>{r(),e(a)},o=e=>{r(),t(e)},r=()=>{URL.revokeObjectURL(i),a.removeEventListener("load",n),a.removeEventListener("error",o)};a.addEventListener("load",n),a.addEventListener("error",o),a.src=i}));try{a.src=i,await a.decode()}catch(u){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(i),a}},68401:(e,t,n)=>{var o,r,l,i,a,u,s,c;n.d(t,{Gv:()=>r,JJ:()=>s,Rw:()=>i,Ti:()=>c,V_:()=>u,Vr:()=>o,Xx:()=>l,hU:()=>a}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(o||(o={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(r||(r={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(l||(l={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(i||(i={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(a||(a={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee"}(u||(u={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(s||(s={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(c||(c={}))},68845:(e,t,n)=>{n.d(t,{j:()=>o});const o=2.1}}]);
//# sourceMappingURL=8883.bb4a1517.chunk.js.map
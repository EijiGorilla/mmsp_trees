"use strict";(self.webpackChunkmmsp_trees=self.webpackChunkmmsp_trees||[]).push([[3468],{86452:(e,t,n)=>{n.d(t,{B:()=>c});var r=n(16889),o=n(29134),s=n(12400);function i(e,t,n){const r=Math.sin(e),o=Math.cos(e),s=Math.sin(t),i=Math.cos(t),l=n;return l[0]=-r,l[4]=-s*o,l[8]=i*o,l[12]=0,l[1]=o,l[5]=-s*r,l[9]=i*r,l[13]=0,l[2]=0,l[6]=i,l[10]=s,l[14]=0,l[3]=0,l[7]=0,l[11]=0,l[15]=1,l}var l=n(96334),u=n(92975);function c(e,t,n,r){if(null==e||null==r)return!1;const s=(0,l.eT)(e,l.Jz),c=(0,l.eT)(r,l.sp);if(s===c&&!E(c)&&(s!==l.Ej.UNKNOWN||(0,u.fS)(e,r)))return(0,o.vc)(n,t),!0;if(E(c)){const e=l.rf[s][l.Ej.LON_LAT],r=l.rf[l.Ej.LON_LAT][c];return null!=e&&null!=r&&(e(t,0,a,0),r(a,0,f,0),i(v*a[0],v*a[1],n),n[12]=f[0],n[13]=f[1],n[14]=f[2],!0)}const d=E(s);if((c===l.Ej.WEB_MERCATOR||c===l.Ej.PLATE_CARREE||c===l.Ej.WGS84||c===l.Ej.CGCS2000)&&(s===l.Ej.WGS84||d||s===l.Ej.WEB_MERCATOR||s===l.Ej.CGCS2000)){const e=l.rf[s][l.Ej.LON_LAT],r=l.rf[l.Ej.LON_LAT][c];return null!=e&&null!=r&&(e(t,0,a,0),r(a,0,f,0),d?function(e,t,n){i(e,t,n),(0,o.p4)(n,n)}(v*a[0],v*a[1],n):(0,o.yR)(n),n[12]=f[0],n[13]=f[1],n[14]=f[2],!0)}return!1}function E(e){return e===l.Ej.SPHERICAL_ECEF||e===l.Ej.SPHERICAL_MARS_PCPF||e===l.Ej.SPHERICAL_MOON_PCPF||e===l.Ej.WGS84_ECEF}const v=(0,r.Vl)(1),a=(0,s.Ue)(),f=(0,s.Ue)()},68859:(e,t,n)=>{n.d(t,{K:()=>i});var r=n(12400),o=n(45925),s=n(50628);function i(e,t,n,r){var i,u;if((0,o.canProjectWithoutEngine)(e.spatialReference,n)){var c;l[0]=e.x,l[1]=e.y;const o=e.z;return l[2]=null!==(c=null!==o&&void 0!==o?o:r)&&void 0!==c?c:0,(0,s.projectBuffer)(l,e.spatialReference,0,t,n,0)}const E=(0,o.tryProjectWithZConversion)(e,n);return!!E&&(t[0]=null===E||void 0===E?void 0:E.x,t[1]=null===E||void 0===E?void 0:E.y,t[2]=null!==(i=null!==(u=null===E||void 0===E?void 0:E.z)&&void 0!==u?u:r)&&void 0!==i?i:0,!0)}const l=(0,r.Ue)()},29691:(e,t,n)=>{n.d(t,{rS:()=>E,wY:()=>c});var r=n(83448),o=n(78952),s=n(92975);const i=new o.Z(r.kU),l=new o.Z(r.JL),u=new o.Z(r.mM),c=new o.Z(r.pn);function E(e){const t=v.get(e);if(t)return t;let n=i;if(e)if(e===l)n=l;else if(e===u)n=u;else{const t=e.wkid,o=e.latestWkid;if(null!=t||null!=o)(0,s.o$)(t)||(0,s.o$)(o)?n=l:((0,s.ME)(t)||(0,s.ME)(o))&&(n=u);else{var r;const t=null!==(r=e.wkt2)&&void 0!==r?r:e.wkt;if(t){const e=t.toUpperCase();e===a?n=l:e===f&&(n=u)}}}return v.set(e,n),n}const v=new Map,a=l.wkt.toUpperCase(),f=u.wkt.toUpperCase()},11837:(e,t,n)=>{n.d(t,{convertMeshVertexSpace:()=>u});var r=n(10064),o=n(84652),s=n(66978),i=n(27474),l=n(66149);async function u(e,t,n){await Promise.resolve(),(0,s.k_)(n);const u=(0,l.qk)(e,t,{useEllipsoid:null===n||void 0===n?void 0:n.useEllipsoid});if(!u)throw new r.Z("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const c=e.cloneAndModifyVertexAttributes(new i.Q({...u,uv:(0,o.d9)(e.vertexAttributes.uv),color:(0,o.d9)(e.vertexAttributes.color)}),t);return c.transform=null,c}}}]);
//# sourceMappingURL=3468.9f84b4ed.chunk.js.map
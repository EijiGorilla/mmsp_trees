"use strict";(self.webpackChunkmmsp_trees=self.webpackChunkmmsp_trees||[]).push([[8162],{86452:(e,t,o)=>{o.d(t,{B:()=>u});var r=o(16889),n=o(14226),s=o(71353);function i(e,t,o){const r=Math.sin(e),n=Math.cos(e),s=Math.sin(t),i=Math.cos(t),a=o;return a[0]=-r,a[4]=-s*n,a[8]=i*n,a[12]=0,a[1]=n,a[5]=-s*r,a[9]=i*r,a[13]=0,a[2]=0,a[6]=i,a[10]=s,a[14]=0,a[3]=0,a[7]=0,a[11]=0,a[15]=1,a}var a=o(63865),p=o(92975);function u(e,t,o,r){if(null==e||null==r)return!1;const s=(0,a.eT)(e,a.Jz),u=(0,a.eT)(r,a.sp);if(s===u&&!l(u)&&(s!==a.Ej.UNKNOWN||(0,p.fS)(e,r)))return(0,n.d)(o,t),!0;if(l(u)){const e=a.rf[s][a.Ej.LON_LAT],r=a.rf[a.Ej.LON_LAT][u];return null!=e&&null!=r&&(e(t,0,d,0),r(d,0,y,0),i(c*d[0],c*d[1],o),o[12]=y[0],o[13]=y[1],o[14]=y[2],!0)}if((u===a.Ej.WEB_MERCATOR||u===a.Ej.PLATE_CARREE)&&(s===a.Ej.WGS84||s===a.Ej.CGCS2000&&u===a.Ej.PLATE_CARREE||s===a.Ej.SPHERICAL_ECEF||s===a.Ej.WEB_MERCATOR)){const e=a.rf[s][a.Ej.LON_LAT],r=a.rf[a.Ej.LON_LAT][u];return null!=e&&null!=r&&(e(t,0,d,0),r(d,0,y,0),s===a.Ej.SPHERICAL_ECEF?function(e,t,o){i(e,t,o),(0,n.t)(o,o)}(c*d[0],c*d[1],o):(0,n.g)(o),o[12]=y[0],o[13]=y[1],o[14]=y[2],!0)}return!1}function l(e){return e===a.Ej.SPHERICAL_ECEF||e===a.Ej.SPHERICAL_MARS_PCPF||e===a.Ej.SPHERICAL_MOON_PCPF}const c=(0,r.Vl)(1),d=(0,s.c)(),y=(0,s.c)()},29691:(e,t,o)=>{o.d(t,{rS:()=>u});var r=o(83448),n=o(78952),s=o(92975);const i=new n.Z(r.kU),a=new n.Z(r.JL),p=new n.Z(r.mM);new n.Z(r.pn);function u(e){return e&&((0,s.BZ)(e)||(0,s.fS)(e,a))?a:e&&((0,s.V2)(e)||(0,s.fS)(e,p))?p:i}},34207:(e,t,o)=>{o.d(t,{H3:()=>m,QI:()=>c,U4:()=>p,Yh:()=>y});var r=o(27366),n=o(46784),s=o(49861),i=(o(25243),o(63780),o(93169),o(27135)),a=o(69912);let p=class extends n.wq{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,r._)([(0,s.Cb)({type:Number})],p.prototype,"nodesPerPage",void 0),(0,r._)([(0,s.Cb)({type:Number})],p.prototype,"rootIndex",void 0),(0,r._)([(0,s.Cb)({type:String})],p.prototype,"lodSelectionMetricType",void 0),p=(0,r._)([(0,a.j)("esri.layer.support.I3SNodePageDefinition")],p);let u=class extends n.wq{constructor(){super(...arguments),this.factor=1}};(0,r._)([(0,s.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],u.prototype,"id",void 0),(0,r._)([(0,s.Cb)({type:Number})],u.prototype,"factor",void 0),u=(0,r._)([(0,a.j)("esri.layer.support.I3SMaterialTexture")],u);let l=class extends n.wq{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,r._)([(0,s.Cb)({type:[Number]})],l.prototype,"baseColorFactor",void 0),(0,r._)([(0,s.Cb)({type:u})],l.prototype,"baseColorTexture",void 0),(0,r._)([(0,s.Cb)({type:u})],l.prototype,"metallicRoughnessTexture",void 0),(0,r._)([(0,s.Cb)({type:Number})],l.prototype,"metallicFactor",void 0),(0,r._)([(0,s.Cb)({type:Number})],l.prototype,"roughnessFactor",void 0),l=(0,r._)([(0,a.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],l);let c=class extends n.wq{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,r._)([(0,i.J)({opaque:"opaque",mask:"mask",blend:"blend"})],c.prototype,"alphaMode",void 0),(0,r._)([(0,s.Cb)({type:Number})],c.prototype,"alphaCutoff",void 0),(0,r._)([(0,s.Cb)({type:Boolean})],c.prototype,"doubleSided",void 0),(0,r._)([(0,i.J)({none:"none",back:"back",front:"front"})],c.prototype,"cullFace",void 0),(0,r._)([(0,s.Cb)({type:u})],c.prototype,"normalTexture",void 0),(0,r._)([(0,s.Cb)({type:u})],c.prototype,"occlusionTexture",void 0),(0,r._)([(0,s.Cb)({type:u})],c.prototype,"emissiveTexture",void 0),(0,r._)([(0,s.Cb)({type:[Number]})],c.prototype,"emissiveFactor",void 0),(0,r._)([(0,s.Cb)({type:l})],c.prototype,"pbrMetallicRoughness",void 0),c=(0,r._)([(0,a.j)("esri.layer.support.I3SMaterialDefinition")],c);let d=class extends n.wq{};(0,r._)([(0,s.Cb)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:"".concat(t.index)}}})],d.prototype,"name",void 0),(0,r._)([(0,i.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],d.prototype,"format",void 0),d=(0,r._)([(0,a.j)("esri.layer.support.I3STextureFormat")],d);let y=class extends n.wq{constructor(){super(...arguments),this.atlas=!1}};(0,r._)([(0,s.Cb)({type:[d]})],y.prototype,"formats",void 0),(0,r._)([(0,s.Cb)({type:Boolean})],y.prototype,"atlas",void 0),y=(0,r._)([(0,a.j)("esri.layer.support.I3STextureSetDefinition")],y);let f=class extends n.wq{};(0,r._)([(0,i.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],f.prototype,"type",void 0),(0,r._)([(0,s.Cb)({type:Number})],f.prototype,"component",void 0),f=(0,r._)([(0,a.j)("esri.layer.support.I3SGeometryAttribute")],f);let v=class extends n.wq{};(0,r._)([(0,i.J)({draco:"draco"})],v.prototype,"encoding",void 0),(0,r._)([(0,s.Cb)({type:[String]})],v.prototype,"attributes",void 0),v=(0,r._)([(0,a.j)("esri.layer.support.I3SGeometryCompressedAttributes")],v);let h=class extends n.wq{constructor(){super(...arguments),this.offset=0}};(0,r._)([(0,s.Cb)({type:Number})],h.prototype,"offset",void 0),(0,r._)([(0,s.Cb)({type:f})],h.prototype,"position",void 0),(0,r._)([(0,s.Cb)({type:f})],h.prototype,"normal",void 0),(0,r._)([(0,s.Cb)({type:f})],h.prototype,"uv0",void 0),(0,r._)([(0,s.Cb)({type:f})],h.prototype,"color",void 0),(0,r._)([(0,s.Cb)({type:f})],h.prototype,"uvRegion",void 0),(0,r._)([(0,s.Cb)({type:f})],h.prototype,"featureId",void 0),(0,r._)([(0,s.Cb)({type:f})],h.prototype,"faceRange",void 0),(0,r._)([(0,s.Cb)({type:v})],h.prototype,"compressedAttributes",void 0),h=(0,r._)([(0,a.j)("esri.layer.support.I3SGeometryBuffer")],h);let m=class extends n.wq{};(0,r._)([(0,i.J)({triangle:"triangle"})],m.prototype,"topology",void 0),(0,r._)([(0,s.Cb)()],m.prototype,"geometryBuffers",void 0),m=(0,r._)([(0,a.j)("esri.layer.support.I3SGeometryDefinition")],m)},84076:(e,t,o)=>{o.d(t,{w:()=>l});var r=o(19545),n=o(76200),s=o(10064),i=o(66978),a=o(25899),p=o(7575),u=o(98995);async function l(e,t){var o,l;const y=(0,a.Qc)(e);if(!y)throw new s.Z("invalid-url","Invalid scene service url");const f={...t,sceneServerUrl:y.url.path,layerId:null!==(o=y.sublayer)&&void 0!==o?o:void 0};if(null!==(l=f.sceneLayerItem)&&void 0!==l||(f.sceneLayerItem=await async function(e){const t=(await c(e)).serviceItemId;if(!t)return null;const o=new u.default({id:t,apiKey:e.apiKey}),s=await async function(e){const t=null===r.id||void 0===r.id?void 0:r.id.findServerInfo(e.sceneServerUrl);if(null!==t&&void 0!==t&&t.owningSystemUrl)return t.owningSystemUrl;const o=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const t=(await(0,n.Z)(o,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(t)return t}catch(v){(0,i.r9)(v)}return null}(e);null!=s&&(o.portal=new p.Z({url:s}));try{return o.load({signal:e.signal})}catch(h){return(0,i.r9)(h),null}}(f)),null==f.sceneLayerItem)return d(f.sceneServerUrl.replace("/SceneServer","/FeatureServer"),f);const v=await async function(e){let{sceneLayerItem:t,signal:o}=e;if(!t)return null;try{const e=(await t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:o})).find((e=>"Feature Service"===e.type))||null;if(!e)return null;const r=new u.default({portal:e.portal,id:e.id});return await r.load(),r}catch(r){return(0,i.r9)(r),null}}(f);if(null===v||void 0===v||!v.url)throw new s.Z("related-service-not-found","Could not find feature service through portal item relationship");const h=await d(v.url,f);return h.portalItem=v,h}async function c(e){if(e.rootDocument)return e.rootDocument;const t={query:{f:"json",token:e.apiKey},responseType:"json",signal:e.signal};try{const o=await(0,n.Z)(e.sceneServerUrl,t);e.rootDocument=o.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,t){const o=(0,a.Qc)(e);if(!o)throw new s.Z("invalid-feature-service-url","Invalid feature service url");const r=o.url.path,i=t.layerId;if(null==i)return{serverUrl:r};const p=c(t),u=e=>{const o={query:{f:"json"},responseType:"json",authMode:e,signal:t.signal};return(0,n.Z)(r,o)},l=u("anonymous").catch((()=>u("no-prompt"))),[d,y]=await Promise.all([l,p]),f=null===y||void 0===y?void 0:y.layers,v=d.data&&d.data.layers;if(!Array.isArray(v))throw new Error("expected layers array");if(Array.isArray(f)){for(let n=0;n<Math.min(f.length,v.length);n++)if(f[n].id===i)return{serverUrl:r,layerId:v[n].id}}else if(null!=i&&i<v.length)return{serverUrl:r,layerId:v[i].id};throw new Error("could not find matching associated sublayer")}},96978:(e,t,o)=>{o.d(t,{C:()=>r});const r={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}},74509:(e,t,o)=>{o.d(t,{LR:()=>u,Uy:()=>i,VW:()=>s,Wb:()=>a,kf:()=>p});o(88152);function r(e){return e?l:c}function n(e,t){return null!==t&&void 0!==t&&t.mode?t.mode:r(e).mode}function s(e,t){return n(null!=e&&e.hasZ,t)}function i(e,t,o){return o&&o.mode!==t?"".concat(e," only support ").concat(t," elevation mode"):null}function a(e,t,o){return(null===o||void 0===o?void 0:o.mode)===t?"".concat(e," do not support ").concat(t," elevation mode"):null}function p(e,t){return null!=(null===t||void 0===t?void 0:t.featureExpressionInfo)&&"0"!==t.featureExpressionInfo.expression?"".concat(e," do not support featureExpressionInfo"):null}function u(e,t){t&&e.warn(".elevationInfo=",t)}const l={mode:"absolute-height",offset:0},c={mode:"on-the-ground",offset:null}},25220:(e,t,o)=>{o.d(t,{xe:()=>S});var r=o(76200),n=(o(63780),o(10064),o(93169),o(18722)),s=(o(22753),o(11873)),i=(o(14226),o(81949)),a=(o(48976),o(98131)),p=(o(11186),o(71353));o(83448),o(45925),o(78952),o(29691),o(86452),o(50628);(0,p.c)();var u=o(65156),l=(o(92975),o(21149),o(28278));o(51995);var c,d=o(67077);function y(e){return{...f,...e,type:"solid"}}!function(e){e[e.INVISIBLE=0]="INVISIBLE",e[e.TRANSPARENT=1]="TRANSPARENT",e[e.OPAQUE=2]="OPAQUE"}(c||(c={}));const f={color:(0,d.f)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:c.OPAQUE,hasSlicePlane:!1};(0,d.f)(0,0,0,.2),c.OPAQUE;o(49420);var v=o(94219),h=o(91526);(0,u.Ue)();var m;async function S(e,t,o,n,s){const i=[];for(const r of t)if(r&&s.includes(r.name)){const t="".concat(e,"/nodes/").concat(o,"/attributes/").concat(r.key,"/0");i.push({url:t,storageInfo:r})}const a=await Promise.allSettled(i.map((e=>(0,r.Z)(e.url,{responseType:"array-buffer"}).then((t=>(0,l.qM)(e.storageInfo,t.data)))))),p=[];for(const r of n){const e={};for(let t=0;t<a.length;t++){const o=a[t];if("fulfilled"===o.status){const n=o.value;e[i[t].storageInfo.name]=E(n,r)}}p.push(e)}return p}!function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"}(m||(m={}));const I=-32768,C=-(2**31);function E(e,t){if(!e)return null;const o=e[t];return(0,n.z3)(e)?o===I?null:o:(0,n.Hx)(e)?o===C?null:o:o!=o?null:o}y({color:[0,0,0,0],opacity:0});const g=new Array(24);new h.U(g,3),(0,p.c)(),(0,p.c)(),(0,s.a)();(0,i.a)(),(0,a.a)(),(0,u.Ue)(),(0,u.Ue)(),(0,v.Ue)(),(0,p.c)(),new Array(72),(0,i.a)()},49420:(e,t,o)=>{o.d(t,{a9:()=>r});var r;o(16889);!function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"}(r||(r={}))},94219:(e,t,o)=>{o.d(t,{Ue:()=>l,gI:()=>c});o(22753);var r=o(11873),n=o(48976),s=o(98131),i=o(11186),a=o(71353),p=(o(90045),o(67077)),u=(o(41414),o(76146),o(50951));(0,s.a)(),(0,a.c)(),(0,a.c)(),(0,p.c)(),(0,r.a)();function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,0,0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[-1,-1,-1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,s.a)();return{center:(0,a.g)(e),halfSize:(0,a.g)(t),quaternion:(0,s.b)(o)}}(()=>{const e=new Int8Array(162);let t=0;const o=o=>{for(let r=0;r<o.length;r++)e[t+r]=o[r];t+=6};o([6,2,3,1,5,4]),o([0,2,3,1,5,4]),o([0,2,3,7,5,4]),o([0,1,3,2,6,4]),o([0,1,3,2,0,0]),o([0,1,5,7,3,2]),o([0,1,3,7,6,4]),o([0,1,3,7,6,2]),o([0,1,5,7,6,2]),o([0,1,5,4,6,2]),o([0,1,5,4,0,0]),o([0,1,3,7,5,4]),o([0,2,6,4,0,0]),o([0,0,0,0,0,0]),o([1,3,7,5,0,0]),o([2,3,7,6,4,0]),o([2,3,7,6,0,0]),o([2,3,1,5,7,6]),o([0,1,5,7,6,2]),o([0,1,5,7,6,4]),o([0,1,3,7,6,4]),o([4,5,7,6,2,0]),o([4,5,7,6,0,0]),o([4,5,1,3,7,6]),o([0,2,3,7,5,4]),o([6,2,3,7,5,4]),o([6,2,3,1,5,4])})();function c(e,t,o,r,s){if((0,n.c)(s.quaternion,e.quaternion),r===u.JY.Global){(0,n.a)(v,e.quaternion),(0,i.v)(d,e.center,v),(0,i.w)(y,d),(0,i.x)(f,y,e.halfSize),(0,i.u)(f,y,f);const r=(0,i.l)(f);(0,i.g)(f,y,e.halfSize);const a=(0,i.l)(f);if(r<o)(0,i.c)(s.center,e.center),(0,i.s)(d,o,o,o),(0,i.g)(s.halfSize,e.halfSize,d);else{const n=a>0?1+t/a:1,p=r>0?1+o/r:1,u=(p+n)/2,l=(p-n)/2;(0,i.i)(s.halfSize,y,l),(0,i.q)(s.halfSize,s.halfSize,e.halfSize,u),(0,i.i)(s.center,y,u),(0,i.q)(s.center,s.center,e.halfSize,l),(0,i.z)(d,d),(0,i.A)(s.center,s.center,d),(0,i.v)(s.center,s.center,s.quaternion)}}else{const r=(0,i.s)(d,0,0,1);(0,i.q)(s.center,e.center,r,(o+t)/2),(0,n.a)(v,e.quaternion),(0,i.v)(r,r,v),(0,i.w)(r,r),(0,i.q)(s.halfSize,e.halfSize,r,(o-t)/2)}return s}const d=(0,a.c)(),y=(0,a.c)(),f=(0,a.c)(),v=(0,s.a)()},91526:(e,t,o)=>{o.d(t,{U:()=>r,a:()=>n});class r{constructor(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;this.data=e,this.size=t,this.stride=o}}class n extends r{constructor(e,t,o){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];super(e,o,arguments.length>4&&void 0!==arguments[4]?arguments[4]:o),this.indices=t,this.exclusive=r}}},24405:(e,t,o)=>{o.d(t,{V5:()=>s,e7:()=>n});var r=o(37270);async function n(e){var t,o;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.popupTemplate;if(null==n)return[];const s=await n.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:i}=n,{objectIdField:a,typeIdField:p,globalIdField:u,relationships:l}=e;if(s.includes("*"))return["*"];const c=i?(0,r.CH)(e):[],d=(0,r.Q0)(e.fieldsIndex,[...s,...c]);return p&&d.push(p),d&&a&&null!==(t=e.fieldsIndex)&&void 0!==t&&t.has(a)&&!d.includes(a)&&d.push(a),d&&u&&null!==(o=e.fieldsIndex)&&void 0!==o&&o.has(u)&&!d.includes(u)&&d.push(u),l&&l.forEach((t=>{var o;const{keyField:r}=t;d&&r&&(null===(o=e.fieldsIndex)||void 0===o?void 0:o.has(r))&&!d.includes(r)&&d.push(r)})),d}function s(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}}}]);
//# sourceMappingURL=8162.083111e4.chunk.js.map
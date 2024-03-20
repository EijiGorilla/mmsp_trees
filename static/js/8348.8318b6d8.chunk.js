"use strict";(self.webpackChunkmmsp_trees=self.webpackChunkmmsp_trees||[]).push([[8348],{40237:(t,e,s)=>{s.d(e,{N:()=>i});const i={convertToGEGeometry:function(t,e){return null==e?null:t.convertJSONToGeometry(e)},exportPoint:function(t,e,s){const i=new r(t.getPointX(e),t.getPointY(e),s),n=t.hasZ(e),a=t.hasM(e);return n&&(i.z=t.getPointZ(e)),a&&(i.m=t.getPointM(e)),i},exportPolygon:function(t,e,s){return new n(t.exportPaths(e),s,t.hasZ(e),t.hasM(e))},exportPolyline:function(t,e,s){return new a(t.exportPaths(e),s,t.hasZ(e),t.hasM(e))},exportMultipoint:function(t,e,s){return new o(t.exportPoints(e),s,t.hasZ(e),t.hasM(e))},exportExtent:function(t,e,s){const i=t.hasZ(e),r=t.hasM(e),n=new h(t.getXMin(e),t.getYMin(e),t.getXMax(e),t.getYMax(e),s);if(i){const s=t.getZExtent(e);n.zmin=s.vmin,n.zmax=s.vmax}if(r){const s=t.getMExtent(e);n.mmin=s.vmin,n.mmax=s.vmax}return n}};class r{constructor(t,e,s){this.x=t,this.y=e,this.spatialReference=s,this.z=void 0,this.m=void 0}}class n{constructor(t,e,s,i){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,s&&(this.hasZ=s),i&&(this.hasM=i)}}class a{constructor(t,e,s,i){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,s&&(this.hasZ=s),i&&(this.hasM=i)}}class o{constructor(t,e,s,i){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,s&&(this.hasZ=s),i&&(this.hasM=i)}}class h{constructor(t,e,s,i,r){this.xmin=t,this.ymin=e,this.xmax=s,this.ymax=i,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},19995:(t,e,s)=>{s.d(e,{_W:()=>_,iV:()=>m,oj:()=>y});var i=s(63780),r=s(66978),n=s(45925),a=s(40237),o=s(92975),h=s(81753);const u=[0,0];function d(t,e){if(!e)return null;if("x"in e){const s={x:0,y:0};return[s.x,s.y]=t(e.x,e.y,u),null!=e.z&&(s.z=e.z),null!=e.m&&(s.m=e.m),s}if("xmin"in e){const s={xmin:0,ymin:0,xmax:0,ymax:0};return[s.xmin,s.ymin]=t(e.xmin,e.ymin,u),[s.xmax,s.ymax]=t(e.xmax,e.ymax,u),e.hasZ&&(s.zmin=e.zmin,s.zmax=e.zmax,s.hasZ=!0),e.hasM&&(s.mmin=e.mmin,s.mmax=e.mmax,s.hasM=!0),s}return"rings"in e?{rings:l(e.rings,t),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:l(e.paths,t),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:c(e.points,t),hasM:e.hasM,hasZ:e.hasZ}:null}function l(t,e){const s=[];for(const i of t)s.push(c(i,e));return s}function c(t,e){const s=[];for(const i of t){const t=e(i[0],i[1],[0,0]);s.push(t),i.length>2&&t.push(i[2]),i.length>3&&t.push(i[3])}return s}async function _(t,e){if(!t||!e)return;const s=Array.isArray(t)?t.map((t=>null!=t.geometry?t.geometry.spatialReference:null)).filter(i.pC):[t];await(0,n.initializeProjection)(s.map((t=>({source:t,dest:e}))))}const f=d.bind(null,h.hG),p=d.bind(null,h.R6);function m(t,e,s,i){if(!t)return t;if(s||(s=e,e=t.spatialReference),!(0,o.JY)(e)||!(0,o.JY)(s)||(0,o.fS)(e,s))return t;if((0,h.Q8)(e,s)){const e=(0,o.sS)(s)?f(t):p(t);return e.spatialReference=s,e}return(0,n.projectMany)(a.N,[t],e,s,null,i)[0]}const g=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,e,s,i){var n;if(null===t||void 0===t||!t.length||!e||!s||(0,o.fS)(e,s))return t;const a={geometries:t,inSpatialReference:e,outSpatialReference:s,geographicTransformation:i,resolve:(0,r.hh)()};return this._jobs.push(a),null!==(n=this._timer)&&void 0!==n||(this._timer=setTimeout(this._process,10)),a.resolve.promise}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:e,inSpatialReference:s,outSpatialReference:i,resolve:r,geographicTransformation:u}=t;(0,h.Q8)(s,i)?(0,o.sS)(i)?r(e.map(f)):r(e.map(p)):r((0,n.projectMany)(a.N,e,s,i,u,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function y(t,e,s,i){return g.push(t,e,s,i)}},45367:(t,e,s)=>{s.d(e,{Z:()=>S});var i=s(10064),r=s(93169),n=s(32718),a=s(16889),o=s(66978),h=s(48732),u=s(46634),d=s(52410),l=s(94109),c=s(84328),_=s(84319),f=s(64668),p=s(98290),m=s(8548);const g=n.Z.getLogger("esri.views.layers.2d.features.support.AttributeStore"),y=(0,f.g)(f.P,g),x={sharedArrayBuffer:(0,r.Z)("esri-shared-array-buffer"),atomics:(0,r.Z)("esri-atomics")};function b(t,e){return s=>e(t(s))}class I{constructor(t,e,s,i){this.size=0,this.texelSize=4,this.dirtyStart=0,this.dirtyEnd=0;const{pixelType:r,layout:n,textureOnly:a}=i;this.textureOnly=a||!1,this.pixelType=r,this._ctype=e,this.layout=n,this._resetRange(),this._shared=t,this.size=s,a||(this.data=this._initData(r,s,t,e))}get buffer(){var t;return null===(t=this.data)||void 0===t?void 0:t.buffer}unsetComponentAllTexels(t,e){const s=this.data;for(let i=0;i<this.size*this.size;i++)s[i*this.texelSize+t]&=~e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(t,e){const s=this.data;for(let i=0;i<this.size*this.size;i++)s[i*this.texelSize+t]|=255&e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(t,e,s){const i=this.data;for(const r of s)i[r*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)}setComponentTexel(t,e,s){this.data[s*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}unsetComponentTexel(t,e,s){this.data[s*this.texelSize+t]&=~e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}getData(t,e){const s=(0,c.jL)(t);return this.data[s*this.texelSize+e]}setData(t,e,s){const i=(0,c.jL)(t),r=1<<e;0!=(this.layout&r)?null!=this.data&&(this.data[i*this.texelSize+e]=s,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)):g.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){this.pixelType===m.Br.UNSIGNED_BYTE&&this._shared&&x.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1)}unlock(){this.pixelType===m.Br.UNSIGNED_BYTE&&this._shared&&x.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0)}expand(t){if(this.size=t,!this.textureOnly){const e=this._initData(this.pixelType,t,this._shared,this._ctype),s=this.data;e.set(s),this.data=e}}toMessage(){const t=this.dirtyStart,e=this.dirtyEnd,s=this.texelSize;if(t>e)return null;this._resetRange();const i=!(this._shared||"local"===this._ctype),r=this.pixelType,n=this.layout,a=this.data;return{start:t,end:e,data:i&&a.slice(t*s,(e+1)*s)||null,pixelType:r,layout:n}}_initData(t,e,s,i){const r=s&&"local"!==i?SharedArrayBuffer:ArrayBuffer,n=(0,_.UK)(t),a=new n(new r(e*e*4*n.BYTES_PER_ELEMENT));for(let o=0;o<a.length;o+=4)a[o+1]=255;return a}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class S{constructor(t,e){this._client=t,this.config=e,this.updatingHandles=new u.R,this._blocks=new Array,this._filters=new Array(l.NS),this._attributeComputeInfo=null,this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._nextUpdate=null,this._currUpdate=null,this._idsToHighlight=new Set;const s=e.supportsTextureFloat?m.Br.FLOAT:m.Br.UNSIGNED_BYTE;y("Creating AttributeStore ".concat(x.sharedArrayBuffer?"with":"without"," shared memory")),this._blockDescriptors=[{pixelType:m.Br.UNSIGNED_BYTE,layout:1},{pixelType:m.Br.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:m.Br.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:s,layout:15},{pixelType:s,layout:15},{pixelType:s,layout:15},{pixelType:s,layout:15}],this._blocks=this._blockDescriptors.map((()=>null))}destroy(){this._abortController.abort(),this.updatingHandles.destroy()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}get hasHighlight(){return this._idsToHighlight.size>0}isUpdating(){const t=this.updatingHandles.updating||!!this._nextUpdate;return(0,r.Z)("esri-2d-log-updating")&&console.log("Updating AttributeStore: ".concat(t,"\n  -> updatingHandles ").concat(this.updatingHandles.updating," (currUpdate: ").concat(!!this._currUpdate,")\n  -> nextUpdate: ").concat(!!this._nextUpdate,"\n")),t}update(t,e){this.config=e;const s=e.schema.processors[0].storage,i=(0,h.Hg)(this._schema,s);if((t.targets.feature||t.targets.aggregate)&&(t.storage.data=!0),i&&((0,r.Z)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",i),t.storage.data=!0,this._schema=s,this._attributeComputeInfo=null,null!=s)){switch(s.target){case"feature":this._targetType=c.mi;break;case"aggregate":this._targetType=c.QC}if("subtype"===s.type){this._attributeComputeInfo={isSubtype:!0,subtypeField:s.subtypeField,map:new Map};for(const t in s.mapping){const e=s.mapping[t];if(null!=(null===e||void 0===e?void 0:e.vvMapping))for(const s of e.vvMapping)this._bindAttribute(s,parseInt(t,10))}}else{if(this._attributeComputeInfo={isSubtype:!1,map:new Map},null!=s.vvMapping)for(const t of s.vvMapping)this._bindAttribute(t);if(null!=s.attributeMapping)for(const t of s.attributeMapping)this._bindAttribute(t)}}}onTileData(t,e){if(null==e.addOrUpdate)return;const s=e.addOrUpdate.getCursor();for(;s.next();){const t=s.getDisplayId();this.setAttributeData(t,s)}}async setHighlight(t,e){const s=this._getBlock(0),i=e.map((t=>(0,c.jL)(t)));s.lock(),s.unsetComponentAllTexels(0,1),s.setComponent(0,1,i),s.unlock(),this._idsToHighlight.clear();for(const r of t)this._idsToHighlight.add(r);await this.sendUpdates()}async updateFilters(t,e,s){(0,r.Z)("esri-2d-update-debug")&&console.debug("AttributeStore::updateFilters");const{service:i,spatialReference:n}=s,{filters:a}=e,o=a.map(((t,e)=>this._updateFilter(t,e,i,n))),h=(await Promise.all(o)).some((t=>t));(0,r.Z)("esri-2d-update-debug")&&console.debug("AttributeStore::updateFilters - finsihed"),h&&(t.storage.filters=!0,(0,r.Z)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}setData(t,e,s,i){const r=(0,c.jL)(t);this._ensureSizeForTexel(r),this._getBlock(e).setData(t,s,i)}getData(t,e,s){return this._getBlock(e).getData(t,s)}getHighlightFlag(t){return this._idsToHighlight.has(t)?l.BB:0}unsetAttributeData(t){const e=(0,c.jL)(t);this._getBlock(0).setData(e,0,0)}setAttributeData(t,e){var s;const i=(0,c.jL)(t);if(this._ensureSizeForTexel(i),this._getBlock(0).setData(i,0,this.getFilterFlags(e)),this._targetType!==(0,c.vs)(t))return;const r=this._attributeComputeInfo,n=this.config.supportsTextureFloat?1:2;let o=null;r&&(o=r.isSubtype?r.map.get(e.readAttribute(r.subtypeField)):r.map,(null===(s=o)||void 0===s?void 0:s.size)&&o.forEach(((t,s)=>{const r=s*n%4,o=Math.floor(s*n/4),h=this._getBlock(o+l.mb),u=t(e);if(this.config.supportsTextureFloat)h.setData(i,r,u);else if(u===l.k9)h.setData(i,r,255),h.setData(i,r+1,255);else{const t=(0,a.uZ)(Math.round(u),-32767,32766)+32768,e=255&t,s=(65280&t)>>8;h.setData(i,r,e),h.setData(i,r+1,s)}})))}sendUpdates(){if((0,r.Z)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate"),this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=(0,o.hh)(),this.updatingHandles.addPromise(this._nextUpdate.promise),this._nextUpdate.promise;const t={blocks:this._blocks.map((t=>null!=t?t.toMessage():null))};return this._currUpdate=this._createResources().then((()=>{const e=()=>{if(this._currUpdate=null,this._nextUpdate){const t=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then((()=>t.resolve()))}else(0,r.Z)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::No additional updates queued")};(0,r.Z)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::client.update");const s=this.updatingHandles.addPromise(this._client.update(t,this._signal).then(e).catch(e));return this._client.render(this._signal),s})).catch((t=>{if((0,o.D_)(t))return this._createResourcesPromise=null,this._createResources();g.error(new i.Z("mapview-attribute-store","Encountered an error during client update",t))})),this._currUpdate}_ensureSizeForTexel(t){for(;t>=this._size*this._size;)if(this._expand())return}_bindAttribute(t,e){let s;if(null!=t.fieldIndex)t.normalizationField&&g.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),s=e=>e.getComputedNumericAtIndex(t.fieldIndex);else{if(!t.field)return;s=function(){const{normalizationField:e}=t;return e?s=>{const i=s.readAttribute(e);return i?s.readAttribute(t.field)/i:null}:e=>e.readAttribute(t.field)}()}const{valueRepresentation:i}=t;i&&(s=b(s,(t=>(0,p.qc)(t,i))));const r=t=>null===t||isNaN(t)||t===1/0||t===-1/0?l.k9:t,n=this._attributeComputeInfo;if(n.isSubtype){var a;const i=null!==(a=n.map.get(e))&&void 0!==a?a:new Map;i.set(t.binding,b(s,r)),n.map.set(e,i)}else n.map.set(t.binding,b(s,r))}_createResources(){if(null!=this._createResourcesPromise)return this._createResourcesPromise;this._getBlock(l.S),this._getBlock(l.U8),y("Initializing AttributeStore");const t={shared:x.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:this._blocks.map((t=>null!=t?{textureOnly:t.textureOnly,buffer:t.buffer,pixelType:t.pixelType}:null))},e=this._client.initialize(t,this._signal).catch((t=>{(0,o.D_)(t)?this._createResourcesPromise=null:g.error(new i.Z("mapview-attribute-store","Encountered an error during client initialization",t))}));return this._createResourcesPromise=e,e.then((()=>null==this._createResourcesPromise?this._createResources():void 0)),e}_getBlock(t){const e=this._blocks[t];if(null!=e)return e;y("Initializing AttributeBlock at index ".concat(t));const s=x.sharedArrayBuffer,i=this._client.type,r=new I(s,i,this._size,this._blockDescriptors[t]);return this._blocks[t]=r,this._createResourcesPromise=null,r}_expand(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;y("Expanding block size to",t,this._blocks);for(const e of this._blocks)null===e||void 0===e||e.expand(t);return this._createResourcesPromise=null,this._size=t,0}return g.error(new i.Z("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(t,e,s,i){const r=this._filters[e],n=null!=r&&r.hash;if(!r&&!t)return!1;if(n===JSON.stringify(t))return!1;if(null==t){if(!r)return!1;const t=1<<e+1,s=this._getBlock(0);return this._filters[e]=null,s.setComponentAllTexels(0,t),this.sendUpdates(),!0}const a=await this._getFilter(e,s);return await a.update(t,i),!0}async _getFilter(t,e){const i=this._filters[t];if(null!=i)return i;const{default:r}=await s.e(7481).then(s.bind(s,37481)),n=new r({geometryType:e.geometryType,hasM:!1,hasZ:!1,timeInfo:e.timeInfo,fieldsIndex:d.Z.fromJSON(e.fieldsIndex)});return this._filters[t]=n,n}isVisible(t){return!!(2&this._getBlock(0).getData(t,0))}getFilterFlags(t){let e=0;const s=(0,c.KS)(t.getDisplayId());for(let r=0;r<this._filters.length;r++){const i=!!(s&1<<r),n=this._filters[r];e|=(!i||null==n||n.check(t)?1:0)<<r}let i=0;if(this._idsToHighlight.size){const e=t.getObjectId();i=this.getHighlightFlag(e)}return e<<1|i}}},56078:(t,e,s)=>{s.d(e,{O:()=>o});var i=s(84328);class r{constructor(){this._freeIds=[],this._idCounter=1}createId(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,i.QS)(this._getFreeId(),t)}releaseId(t){this._freeIds.push(t)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}var n=s(44333);function a(t,e,s){if(!(t.length>e))for(;t.length<=e;)t.push(s)}class o{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new r,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const t=this._bitsets.length;return this._bitsets.push(n.p.create(this._allocatedSize,i.Ht)),t+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)}_ensureNumeric(t,e){this._numerics[t]||(this._numerics[t]=[]),a(this._numerics[t],e,0)}_ensureInstanceId(t){a(this._instanceIds,t,0)}_ensureString(t,e){this._strings[t]||(this._strings[t]=[]),a(this._strings[t],e,null)}createDisplayId(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const e=this._idGenerator.createId();return e>this._allocatedSize&&this._expand(),(0,i.QS)(e,t)}releaseDisplayId(t){for(const e of this._bitsets)e.unset(t);return this._idGenerator.releaseId(t&i.Ht)}getComputedNumeric(t,e){return this.getComputedNumericAtIndex(t&i.Ht,0)}setComputedNumeric(t,e,s){return this.setComputedNumericAtIndex(t&i.Ht,s,0)}getComputedString(t,e){return this.getComputedStringAtIndex(t&i.Ht,0)}setComputedString(t,e,s){return this.setComputedStringAtIndex(t&i.Ht,0,s)}getComputedNumericAtIndex(t,e){const s=t&i.Ht;return this._ensureNumeric(e,s),this._numerics[e][s]}setComputedNumericAtIndex(t,e,s){const r=t&i.Ht;this._ensureNumeric(e,r),this._numerics[e][r]=s}getInstanceId(t){const e=t&i.Ht;return this._ensureInstanceId(e),this._instanceIds[e]}setInstanceId(t,e){const s=t&i.Ht;this._ensureInstanceId(s),this._instanceIds[s]=e}getComputedStringAtIndex(t,e){const s=t&i.Ht;return this._ensureString(e,s),this._strings[e][s]}setComputedStringAtIndex(t,e,s){const r=t&i.Ht;this._ensureString(e,r),this._strings[e][r]=s}getXMin(t){return this._bounds[4*(t&i.Ht)]}getYMin(t){return this._bounds[4*(t&i.Ht)+1]}getXMax(t){return this._bounds[4*(t&i.Ht)+2]}getYMax(t){return this._bounds[4*(t&i.Ht)+3]}setBounds(t,e){const s=e.readHydratedGeometry();if(null===s||void 0===s||!s.coords.length)return!1;let r=1/0,n=1/0,o=-1/0,h=-1/0;s.forEachVertex(((t,e)=>{r=Math.min(r,t),n=Math.min(n,e),o=Math.max(o,t),h=Math.max(h,e)}));const u=t&i.Ht;return a(this._bounds,4*u+4,0),this._bounds[4*u]=r,this._bounds[4*u+1]=n,this._bounds[4*u+2]=o,this._bounds[4*u+3]=h,!0}}},92010:(t,e,s)=>{s.d(e,{s:()=>C});s(59486);var i,r,n,a=s(51064),o=s(93169),h=s(92026),u=s(84726),d=s(58237),l=s(23895),c=s(36372),_=s(83406),f=s(80457),p=s(6701),m=s(44333),g=s(77981);let y=0;const x=null!==(i=(0,o.Z)("featurelayer-simplify-thresholds"))&&void 0!==i?i:[.5,.5,.5,.5],b=x[0],I=x[1],S=x[2],T=x[3],A=null!==(r=(0,o.Z)("featurelayer-simplify-payload-size-factors"))&&void 0!==r?r:[1,2,4],v=A[0],z=A[1],w=A[2],M=null!==(n=(0,o.Z)("featurelayer-simplify-mobile-factor"))&&void 0!==n?n:2,F=(0,o.Z)("esri-mobile");class C{constructor(t,e){this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._contextTimeZone=null,this._level=0,this.instance=t,this._layerSchema=e}static createInstance(){return y++,y=y>65535?0:y,y}get isEmpty(){return null!=this._deleted&&this._deleted.countSet()===this.getSize()}get contextTimeZone(){return this._contextTimeZone}set contextTimeZone(t){this._contextTimeZone=t}set level(t){this._level=t}getAreaSimplificationThreshold(t,e){let s=1;const i=F?M:1;e>4e6?s=w*i:e>1e6?s=z*i:e>5e5?s=v*i:e>1e5&&(s=i);let r=0;t>4e3?r=T*s:t>2e3?r=S*s:t>100?r=I:t>15&&(r=b);let n=8;return this._level<4?n=1:this._level<5?n=2:this._level<6&&(n=4),r*n}createQuantizedExtrudedGeometry(t,e){return"esriGeometryPolyline"===this.geometryType?this._createQuantizedExtrudedLine(t,e):this._createQuantizedExtrudedQuad(t,e)}_createQuantizedExtrudedQuad(t,e){return new f.Z([5],[t-1,e,1,-1,1,1,-1,1,-1,-1])}_createQuantizedExtrudedLine(t,e){return new f.Z([2],[t-1,e+1,1,-1])}parseTimestampOffset(t){return t}setArcadeSpatialReference(t){this._arcadeSpatialReference=t}attachStorage(t){this._storage=t}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(t){return this.getComputedNumericAtIndex(0)}setComputedNumeric(t,e){return this.setComputedNumericAtIndex(e,0)}getComputedString(t){return this.getComputedStringAtIndex(0)}setComputedString(t,e){return this.setComputedStringAtIndex(0,e)}getComputedNumericAtIndex(t){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),t)}setComputedNumericAtIndex(t,e){this._storage.setComputedNumericAtIndex(this.getDisplayId(),t,e)}getComputedStringAtIndex(t){return this._storage.getComputedStringAtIndex(this.getDisplayId(),t)}setComputedStringAtIndex(t,e){return this._storage.setComputedStringAtIndex(this.getDisplayId(),t,e)}transform(t,e,s,i){const r=this.copy();return r._tx+=t,r._ty+=e,r._sx*=s,r._sy*=i,r}readAttributeAsTimestamp(t){const e=this.readAttribute(t);return"string"==typeof e?new Date(e).getTime():"number"==typeof e||null==e?e:null}readAttribute(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const s=this._readAttribute(t,e);if(void 0!==s)return s;for(const i of this._joined){i.setIndex(this.getIndex());const s=i._readAttribute(t,e);if(void 0!==s)return s}}readAttributes(){const t=this._readAttributes();for(const e of this._joined){e.setIndex(this.getIndex());const s=e._readAttributes();for(const e of Object.keys(s))t[e]=s[e]}return t}joinAttributes(t){this._joined.push(t)}readArcadeFeature(){return this}hasField(t){return this.fields.has(t)}geometry(){const t=this.readHydratedGeometry(),e=(0,_.di)(t,this.geometryType,this.hasZ,this.hasM),s=(0,g.im)(e);return s&&(s.spatialReference=this._arcadeSpatialReference),s}autocastArcadeDate(t,e){var s;return e&&e instanceof Date?this.isUnknownDateTimeField(t)?a.iG.unknownDateJSToArcadeDate(e):a.iG.dateJSAndZoneToArcadeDate(e,null!==(s=this.contextTimeZone)&&void 0!==s?s:p.By):e}isUnknownDateTimeField(t){return this._layerSchema.fieldsIndex.getTimeZone(t)===p._4}field(t){let e=this.fields.get(t);if(e)switch(e.type){case"date-only":case"esriFieldTypeDateOnly":return u.u.fromReader(this.readAttribute(t,!1));case"time-only":case"esriFieldTypeTimeOnly":return d.n.fromReader(this.readAttribute(t,!1));case"esriFieldTypeTimestampOffset":case"timestamp-offset":return a.iG.fromReaderAsTimeStampOffset(this.readAttribute(t,!1));case"date":case"esriFieldTypeDate":return this.autocastArcadeDate(t,this.readAttribute(t,!0));default:return this.readAttribute(t,!1)}for(const s of this._joined)if(s.setIndex(this.getIndex()),e=s.fields.get(t),e)switch(e.type){case"date-only":case"esriFieldTypeDateOnly":return u.u.fromReader(s._readAttribute(t,!1));case"time-only":case"esriFieldTypeTimeOnly":return d.n.fromReader(s._readAttribute(t,!1));case"esriFieldTypeTimestampOffset":case"timestamp-offset":return a.iG.fromReaderAsTimeStampOffset(s._readAttribute(t,!1));case"date":case"esriFieldTypeDate":return this.autocastArcadeDate(t,s._readAttribute(t,!0));default:return this.readAttribute(t,!1)}throw new Error("Field ".concat(t," does not exist"))}setField(t,e){throw new Error("Unable to update feature attribute values, feature is readonly")}keys(){return this.fields.fields.map((t=>t.name))}castToText(){var t;if(!(arguments.length>0&&void 0!==arguments[0]&&arguments[0]))return JSON.stringify(this.readLegacyFeature());const e=this.readLegacyFeature();if(!e)return JSON.stringify(null);const s={geometry:e.geometry,attributes:{...null!==(t=e.attributes)&&void 0!==t?t:{}}};for(const i in s.attributes){const t=s.attributes[i];t instanceof Date&&(s.attributes[i]=t.getTime())}return JSON.stringify(s)}gdbVersion(){return null}fullSchema(){return this._layerSchema}castAsJson(){var t,e;let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{attributes:this._readAttributes(),geometry:!0===(null===s||void 0===s?void 0:s.keepGeometryType)?this.geometry():null!==(t=null===(e=this.geometry())||void 0===e?void 0:e.toJSON())&&void 0!==t?t:null}}castAsJsonAsync(){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Promise.resolve(this.castAsJson(t))}removeIds(t){if(null==this._objectIdToIndex){const t=new Map,e=this.getCursor();for(;e.next();){const s=e.getObjectId();(0,h.O3)(s),t.set(s,e.getIndex())}this._objectIdToIndex=t}const e=this._objectIdToIndex;for(const s of t)e.has(s)&&this.removeAtIndex(e.get(s))}removeAtIndex(t){null==this._deleted&&(this._deleted=m.p.create(this.getSize())),this._deleted.set(t)}readGeometryForDisplay(){return this.readUnquantizedGeometry(!0)}readLegacyGeometryForDisplay(){return this.readLegacyGeometry(!0)}*features(){const t=this.getCursor();for(;t.next();)yield t.readOptimizedFeature()}_getExists(){return null==this._deleted||!this._deleted.has(this.getIndex())}_computeCentroid(){if("esriGeometryPolygon"!==this.geometryType)return null;const t=this.readUnquantizedGeometry();if(!t||t.hasIndeterminateRingOrder)return null;const e=l.z.fromOptimized(t,this.geometryType);e.yFactor*=-1;const s=(0,c.r)(e);return s?(s[1]*=-1,new f.Z([],s)):null}copyInto(t){t.seen=this.seen,t._storage=this._storage,t._arcadeSpatialReference=this._arcadeSpatialReference,t._joined=this._joined,t._tx=this._tx,t._ty=this._ty,t._sx=this._sx,t._sy=this._sy,t._deleted=this._deleted,t._objectIdToIndex=this._objectIdToIndex,t.contextTimeZone=this.contextTimeZone}}},28941:(t,e,s)=>{s.d(e,{i:()=>o});var i=s(83406),r=s(3182),n=s(52410),a=s(92010);class o extends a.s{static fromFeatures(t,e){const{objectIdField:s,geometryType:r}=e,n=(0,i.Yn)([],t,r,!1,!1,s);for(let i=0;i<n.length;i++)n[i].displayId=t[i].displayId;return o.fromOptimizedFeatures(n,e)}static fromFeatureSet(t,e){const s=(0,i.h_)(t,e.objectIdField);return o.fromOptimizedFeatureSet(s,e)}static fromOptimizedFeatureSet(t,e){const{features:s}=t,i=o.fromOptimizedFeatures(s,e);return i._exceededTransferLimit=t.exceededTransferLimit,i._transform=t.transform,i._fieldsIndex=new n.Z(e.fields),i}static fromOptimizedFeatures(t,e,s){const i=a.s.createInstance(),r=new o(i,t,e);return r._fieldsIndex=new n.Z(e.fields),r._transform=s,r}constructor(t,e,s){super(t,s),this._exceededTransferLimit=!1,this._featureIndex=-1,this._fieldsIndex=null,this._geometryType=null===s||void 0===s?void 0:s.geometryType,this._features=e}get fields(){return this._fieldsIndex}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(t){const e=new Set(t);this._features=this._features.filter((t=>!(null!=t.objectId&&e.has(t.objectId))))}append(t){for(const e of t)this._features.push(e)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let t="";for(const e in this._current.attributes)t+=this._current.attributes[e];return t}getIndex(){return this._featureIndex}setIndex(t){this._featureIndex=t}getObjectId(){var t;return null===(t=this._current)||void 0===t?void 0:t.objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){this._current.displayId=t}getGroupId(){return this._current.groupId}setGroupId(t){this._current.groupId=t}copy(){const t=new o(this.instance,this._features,this.fullSchema());return this.copyInto(t),t}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return(0,i.EI)(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const t=this.readUnquantizedGeometry();return(0,i.di)(t,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const t=this.readCentroid();return null==t?null:{x:t.coords[0]*this._sx+this._tx,y:t.coords[1]*this._sy+this._ty}}readGeometryArea(){return(0,r.S6)(this._current)?(0,i.lz)(this._current.geometry,2):0}readUnquantizedGeometry(){const t=this.readGeometry();if("esriGeometryPoint"===this.geometryType||!t)return t;const e=t.clone();return function(t){let{coords:e,lengths:s}=t,i=0;for(const r of s){for(let t=1;t<r;t++)e[2*(i+t)]+=e[2*(i+t)-2],e[2*(i+t)+1]+=e[2*(i+t)-1];i+=r}}(e),e}readHydratedGeometry(){const t=this._current.geometry;if(null==t)return null;const e=t.clone();return null!=this._transform&&(0,i.$g)(e,e,this.hasZ,this.hasM,this._transform),e}getXHydrated(){if(!(0,r.S6)(this._current))return 0;const t=this._current.geometry.coords[0],e=this.getQuantizationTransform();return null==e?t:t*e.scale[0]+e.translate[0]}getYHydrated(){if(!(0,r.S6)(this._current))return 0;const t=this._current.geometry.coords[1],e=this.getQuantizationTransform();return null==e?t:e.translate[1]-t*e.scale[1]}getX(){return(0,r.S6)(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return(0,r.S6)(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!(0,r.S6)(this._current)){if(null!=this._current.centroid){const[t,e]=this._current.centroid.coords;return this.createQuantizedExtrudedGeometry(t,e)}return null}const t=this._current.geometry.clone();if(t.isPoint)return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sy+this._ty,t;let e=0;for(const s of t.lengths)t.coords[2*e]=t.coords[2*e]*this._sx+this._tx,t.coords[2*e+1]=t.coords[2*e+1]*this._sy+this._ty,e+=s;return t}readCentroid(){return(0,r.S6)(this._current)?this._computeCentroid():this._current.centroid}_readAttribute(t,e){var s;const i=this._fieldsIndex.get(t);if(!i)return;let r=this._current.attributes[i.name];return null==r?r:("esriFieldTypeTimestampOffset"===(null===(s=this.fields.get(t))||void 0===s?void 0:s.type)&&(r=this.parseTimestampOffset(r)),e&&this.fields.isDateField(t)?new Date(r):r)}copyInto(t){super.copyInto(t),t._featureIndex=this._featureIndex,t._transform=this._transform,t._fieldsIndex=this._fieldsIndex}_readAttributes(){return this._current.attributes}}},44333:(t,e,s)=>{s.d(e,{p:()=>i});class i{static fromBuffer(t,e){return new i(t,e)}static create(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4294967295;const s=new Uint32Array(Math.ceil(t/32));return new i(s,e)}constructor(t,e){this._mask=0,this._buf=t,this._mask=e}_getIndex(t){return Math.floor(t/32)}has(t){const e=this._mask&t;return!!(this._buf[this._getIndex(e)]&1<<e%32)}hasRange(t,e){let s=t,i=e;for(;s%32&&s!==i;){if(this.has(s))return!0;s++}for(;i%32&&s!==i;){if(this.has(s))return!0;i--}if(s===i)return!1;for(let r=s/32;r!==i/32;r++)if(this._buf[r])return!0;return!1}set(t){const e=this._mask&t,s=this._getIndex(e),i=1<<e%32;this._buf[s]|=i}setRange(t,e){let s=t,i=e;for(;s%32&&s!==i;)this.set(s++);for(;i%32&&s!==i;)this.set(i--);if(s!==i)for(let r=s/32;r!==i/32;r++)this._buf[r]=4294967295}unset(t){const e=this._mask&t,s=this._getIndex(e),i=1<<e%32;this._buf[s]&=4294967295^i}resize(t){const e=this._buf,s=new Uint32Array(Math.ceil(t/32));s.set(e),this._buf=s}or(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=t._buf[e];return this}and(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=t._buf[e];return this}xor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=t._buf[e];return this}ior(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=~t._buf[e];return this}iand(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=~t._buf[e];return this}ixor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=~t._buf[e];return this}any(){for(let t=0;t<this._buf.length;t++)if(this._buf[t])return!0;return!1}copy(t){for(let e=0;e<this._buf.length;e++)this._buf[e]=t._buf[e];return this}clone(){return new i(this._buf.slice(),this._mask)}clear(){for(let t=0;t<this._buf.length;t++)this._buf[t]=0}forEachSet(t){for(let e=0;e<this._buf.length;e++){let s=this._buf[e],i=32*e;if(s)for(;s;)1&s&&t(i),s>>>=1,i++}}countSet(){let t=0;return this.forEachSet((e=>{t++})),t}}}}]);
//# sourceMappingURL=8348.8318b6d8.chunk.js.map
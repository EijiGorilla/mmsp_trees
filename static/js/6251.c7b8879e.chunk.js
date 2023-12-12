"use strict";(self.webpackChunkmmsp_trees=self.webpackChunkmmsp_trees||[]).push([[6251],{96866:(e,t,o)=>{o.d(t,{B:()=>y});var r=o(10064),i=o(9997),n=o(80292),s=o(35995),a=o(71907),p=o(33397),l=o(25265),c=o(49861),d=o(22892),u=o(53283);function y(e){var t;const o=null!==(t=null===e||void 0===e?void 0:e.origins)&&void 0!==t?t:[void 0];return(t,r)=>{const i=function(e,t,o){var r;if("resource"===(null===e||void 0===e?void 0:e.type))return function(e,t,o){const r=(0,p.Oe)(t,o);return{type:String,read:(e,t,o)=>{const i=(0,u.r)(e,t,o);return r.type===String?i:"function"==typeof r.type?new r.type({url:i}):void 0},write:{writer(t,i,a,p){if(null===p||void 0===p||!p.resources)return"string"==typeof t?void(i[a]=(0,u.t)(t,p)):void(i[a]=t.write({},p));const c=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,u.t)(c,{...p,verifyItemRelativeUrls:null!==p&&void 0!==p&&p.verifyItemRelativeUrls?{writtenUrls:p.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},u.M.NO),h=r.type!==String&&(!(0,n.l)(this)||(null===p||void 0===p?void 0:p.origin)&&this.originIdOf(o)>(0,l.M9)(p.origin)),g={object:this,propertyName:o,value:t,targetUrl:y,dest:i,targetPropertyName:a,context:p,params:e};null!==p&&void 0!==p&&p.portalItem&&y&&!(0,s.YP)(y)?h&&null!==e&&void 0!==e&&e.contentAddressed?v(g):h?function(e){var t;const{context:o,targetUrl:r,params:i,value:n,dest:a,targetPropertyName:p}=e;if(!o.portalItem)return;const l=o.portalItem.resourceFromPath(r),c=f(n,r,o),u=(0,d.B)(c),y=(0,s.Ml)(l.path),h=null!==(t=null===i||void 0===i?void 0:i.compress)&&void 0!==t&&t;u===y?(o.resources&&m({...e,resource:l,content:c,compress:h,updates:o.resources.toUpdate}),a[p]=r):v(e)}(g):function(e){let{context:t,targetUrl:o,dest:r,targetPropertyName:i}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(o),compress:!1}),r[i]=o)}(g):null!==p&&void 0!==p&&p.portalItem&&(null==y||null!=(0,u.i)(y)||(0,s.jc)(y)||h)?v(g):i[a]=y}}}}(e,t,o);switch(null!==(r=null===e||void 0===e?void 0:e.type)&&void 0!==r?r:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=u.a;return{read:e,write:t}}}}(e,t,r);for(const e of o){const o=(0,c.CJ)(t,e,r);for(const e in i)o[e]=i[e]}}}function v(e){var t,o,n,p;const{targetUrl:l,params:c,value:y,context:v,dest:h,targetPropertyName:g}=e;if(!v.portalItem)return;const b=(0,u.p)(l),_=f(y,l,v);if(null!==c&&void 0!==c&&c.contentAddressed&&"json"!==_.type)return void(null===(t=v.messages)||void 0===t||t.push(new r.Z("persistable:contentAddressingUnsupported",'Property "'.concat(g,'" is trying to serializing a resource with content of type ').concat(_.type," with content addressing. Content addressing is only supported for json resources."),{content:_})));const x=null!==c&&void 0!==c&&c.contentAddressed&&"json"===_.type?(0,i.F)(_.jsonString):null!==(o=null===b||void 0===b?void 0:b.filename)&&void 0!==o?o:(0,a.DO)(),S=(0,s.v_)(null!==(n=null===c||void 0===c?void 0:c.prefix)&&void 0!==n?n:null===b||void 0===b?void 0:b.prefix,x),w="".concat(S,".").concat((0,d.B)(_));if(null!==c&&void 0!==c&&c.contentAddressed&&v.resources&&"json"===_.type){var C;const e=null!==(C=v.resources.toKeep.find((e=>e.resource.path===w)))&&void 0!==C?C:v.resources.toAdd.find((e=>e.resource.path===w));if(e)return void(h[g]=e.resource.itemRelativeUrl)}const I=v.portalItem.resourceFromPath(w);(0,s.jc)(l)&&v.resources&&v.resources.pendingOperations.push((0,s.gi)(l).then((e=>{I.path="".concat(S,".").concat((0,d.B)({type:"blob",blob:e})),h[g]=I.itemRelativeUrl})).catch((()=>{})));const j=null!==(p=null===c||void 0===c?void 0:c.compress)&&void 0!==p&&p;v.resources&&m({...e,resource:I,content:_,compress:j,updates:v.resources.toAdd}),h[g]=I.itemRelativeUrl}function m(e){let{object:t,propertyName:o,updates:r,resource:i,content:n,compress:s}=e;r.push({resource:i,content:n,compress:s,finish:e=>{!function(e,t,o){"string"==typeof e[t]?e[t]=o.url:e[t].url=o.url}(t,o,e)}})}function f(e,t,o){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(o))}}},56251:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Z});var r,i=o(27366),n=o(10064),s=o(32718),a=o(97642),p=o(66978),l=o(94172),c=o(49861),d=(o(25243),o(63780),o(93169),o(38511)),u=o(69912),y=o(96866),v=o(30651),m=o(27961),f=o(11936),h=o(6061),g=o(29598),b=o(56811),_=o(81118),x=o(45948),S=o(34207),w=o(76200),C=o(40281),I=o(46784),j=o(35995),N=(o(59486),o(84652)),T=o(51370),U=o(31201),R=o(45925),M=o(80885);let O=r=class extends I.wq{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,o,r){var i;if(null!==(i=r.layer)&&void 0!==i&&i.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,R.canProjectWithoutEngine)(e.spatialReference,r.layer.spatialReference))return void((null===r||void 0===r?void 0:r.messages)&&r.messages.push(new T.Z("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const i=new M.Z;(0,R.projectPolygon)(e,i,r.layer.spatialReference),t[o]=i.toJSON(r)}else t[o]=e.toJSON(r);delete t[o].spatialReference}clone(){return new r({geometry:(0,N.d9)(this.geometry),type:this.type})}};(0,i._)([(0,c.Cb)({type:M.Z}),(0,y.B)()],O.prototype,"geometry",void 0),(0,i._)([(0,U.c)(["web-scene","portal-item"],"geometry")],O.prototype,"writeGeometry",null),(0,i._)([(0,c.Cb)({type:["clip","mask","replace"],nonNullable:!0}),(0,y.B)()],O.prototype,"type",void 0),O=r=(0,i._)([(0,u.j)("esri.layers.support.SceneModification")],O);const P=O;var A;let F=A=class extends((0,I.eC)(C.Z.ofType(P))){constructor(e){super(e),this.url=null}clone(){return new A({url:this.url,items:this.items.map((e=>e.clone()))})}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}static fromJSON(e,t){const o=new A;for(const r of e)o.add(P.fromJSON(r,t));return o}static async fromUrl(e,t,o){const r={url:(0,j.mN)(e),origin:"service"},i=await(0,w.Z)(e,{responseType:"json",signal:null===o||void 0===o?void 0:o.signal}),n=t.toJSON(),s=[];for(const a of i.data)s.push(P.fromJSON({...a,geometry:{...a.geometry,spatialReference:n}},r));return new A({url:e,items:s})}};(0,i._)([(0,c.Cb)({type:String})],F.prototype,"url",void 0),F=A=(0,i._)([(0,u.j)("esri.layers.support.SceneModifications")],F);const J=F;var L=o(74509),q=o(53283);let k=class extends((0,_.Vt)((0,f.Y)((0,h.q)((0,g.I)((0,b.M)((0,a.R)((0,m.V)(v.Z)))))))){constructor(){super(...arguments),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null}initialize(){this.addHandles((0,l.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),l.Z_))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:(0,q.f)(e,o),context:o}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=null===e||void 0===e?void 0:e.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){(0,p.r9)(o)}if(await this._fetchService(t),null!=this._modificationsSource){const t=await J.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(null!=this._modificationsSource)return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(_.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(_.xp.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new n.Z("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new n.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new n.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";(0,L.LR)(s.Z.getLogger(this),(0,L.Uy)(t,"absolute-height",e)),(0,L.LR)(s.Z.getLogger(this),(0,L.kf)(t,e))}};(0,i._)([(0,c.Cb)({type:String,readOnly:!0})],k.prototype,"geometryType",void 0),(0,i._)([(0,c.Cb)({type:["show","hide"]})],k.prototype,"listMode",void 0),(0,i._)([(0,c.Cb)({type:["IntegratedMeshLayer"]})],k.prototype,"operationalLayerType",void 0),(0,i._)([(0,c.Cb)({json:{read:!1},readOnly:!0})],k.prototype,"type",void 0),(0,i._)([(0,c.Cb)({type:S.U4,readOnly:!0})],k.prototype,"nodePages",void 0),(0,i._)([(0,c.Cb)({type:[S.QI],readOnly:!0})],k.prototype,"materialDefinitions",void 0),(0,i._)([(0,c.Cb)({type:[S.Yh],readOnly:!0})],k.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,c.Cb)({type:[S.H3],readOnly:!0})],k.prototype,"geometryDefinitions",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],k.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,c.Cb)({type:J}),(0,y.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],k.prototype,"modifications",void 0),(0,i._)([(0,d.r)(["web-scene","portal-item"],"modifications")],k.prototype,"readModifications",null),(0,i._)([(0,c.Cb)(x.PV)],k.prototype,"elevationInfo",null),(0,i._)([(0,c.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],k.prototype,"path",void 0),k=(0,i._)([(0,u.j)("esri.layers.IntegratedMeshLayer")],k);const Z=k},34207:(e,t,o)=>{o.d(t,{H3:()=>h,QI:()=>d,U4:()=>p,Yh:()=>y});var r=o(27366),i=o(46784),n=o(49861),s=(o(25243),o(63780),o(93169),o(27135)),a=o(69912);let p=class extends i.wq{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,r._)([(0,n.Cb)({type:Number})],p.prototype,"nodesPerPage",void 0),(0,r._)([(0,n.Cb)({type:Number})],p.prototype,"rootIndex",void 0),(0,r._)([(0,n.Cb)({type:String})],p.prototype,"lodSelectionMetricType",void 0),p=(0,r._)([(0,a.j)("esri.layer.support.I3SNodePageDefinition")],p);let l=class extends i.wq{constructor(){super(...arguments),this.factor=1}};(0,r._)([(0,n.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],l.prototype,"id",void 0),(0,r._)([(0,n.Cb)({type:Number})],l.prototype,"factor",void 0),l=(0,r._)([(0,a.j)("esri.layer.support.I3SMaterialTexture")],l);let c=class extends i.wq{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,r._)([(0,n.Cb)({type:[Number]})],c.prototype,"baseColorFactor",void 0),(0,r._)([(0,n.Cb)({type:l})],c.prototype,"baseColorTexture",void 0),(0,r._)([(0,n.Cb)({type:l})],c.prototype,"metallicRoughnessTexture",void 0),(0,r._)([(0,n.Cb)({type:Number})],c.prototype,"metallicFactor",void 0),(0,r._)([(0,n.Cb)({type:Number})],c.prototype,"roughnessFactor",void 0),c=(0,r._)([(0,a.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],c);let d=class extends i.wq{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,r._)([(0,s.J)({opaque:"opaque",mask:"mask",blend:"blend"})],d.prototype,"alphaMode",void 0),(0,r._)([(0,n.Cb)({type:Number})],d.prototype,"alphaCutoff",void 0),(0,r._)([(0,n.Cb)({type:Boolean})],d.prototype,"doubleSided",void 0),(0,r._)([(0,s.J)({none:"none",back:"back",front:"front"})],d.prototype,"cullFace",void 0),(0,r._)([(0,n.Cb)({type:l})],d.prototype,"normalTexture",void 0),(0,r._)([(0,n.Cb)({type:l})],d.prototype,"occlusionTexture",void 0),(0,r._)([(0,n.Cb)({type:l})],d.prototype,"emissiveTexture",void 0),(0,r._)([(0,n.Cb)({type:[Number]})],d.prototype,"emissiveFactor",void 0),(0,r._)([(0,n.Cb)({type:c})],d.prototype,"pbrMetallicRoughness",void 0),d=(0,r._)([(0,a.j)("esri.layer.support.I3SMaterialDefinition")],d);let u=class extends i.wq{};(0,r._)([(0,n.Cb)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:"".concat(t.index)}}})],u.prototype,"name",void 0),(0,r._)([(0,s.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],u.prototype,"format",void 0),u=(0,r._)([(0,a.j)("esri.layer.support.I3STextureFormat")],u);let y=class extends i.wq{constructor(){super(...arguments),this.atlas=!1}};(0,r._)([(0,n.Cb)({type:[u]})],y.prototype,"formats",void 0),(0,r._)([(0,n.Cb)({type:Boolean})],y.prototype,"atlas",void 0),y=(0,r._)([(0,a.j)("esri.layer.support.I3STextureSetDefinition")],y);let v=class extends i.wq{};(0,r._)([(0,s.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],v.prototype,"type",void 0),(0,r._)([(0,n.Cb)({type:Number})],v.prototype,"component",void 0),v=(0,r._)([(0,a.j)("esri.layer.support.I3SGeometryAttribute")],v);let m=class extends i.wq{};(0,r._)([(0,s.J)({draco:"draco"})],m.prototype,"encoding",void 0),(0,r._)([(0,n.Cb)({type:[String]})],m.prototype,"attributes",void 0),m=(0,r._)([(0,a.j)("esri.layer.support.I3SGeometryCompressedAttributes")],m);let f=class extends i.wq{constructor(){super(...arguments),this.offset=0}};(0,r._)([(0,n.Cb)({type:Number})],f.prototype,"offset",void 0),(0,r._)([(0,n.Cb)({type:v})],f.prototype,"position",void 0),(0,r._)([(0,n.Cb)({type:v})],f.prototype,"normal",void 0),(0,r._)([(0,n.Cb)({type:v})],f.prototype,"uv0",void 0),(0,r._)([(0,n.Cb)({type:v})],f.prototype,"color",void 0),(0,r._)([(0,n.Cb)({type:v})],f.prototype,"uvRegion",void 0),(0,r._)([(0,n.Cb)({type:v})],f.prototype,"featureId",void 0),(0,r._)([(0,n.Cb)({type:v})],f.prototype,"faceRange",void 0),(0,r._)([(0,n.Cb)({type:m})],f.prototype,"compressedAttributes",void 0),f=(0,r._)([(0,a.j)("esri.layer.support.I3SGeometryBuffer")],f);let h=class extends i.wq{};(0,r._)([(0,s.J)({triangle:"triangle"})],h.prototype,"topology",void 0),(0,r._)([(0,n.Cb)()],h.prototype,"geometryBuffers",void 0),h=(0,r._)([(0,a.j)("esri.layer.support.I3SGeometryDefinition")],h)},22892:(e,t,o)=>{o.d(t,{B:()=>i});var r=o(35995);function i(e){return n[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,r.Ml)(e);return p[t]||s}(e.url)}(e)]||a}const n={},s="text/plain",a=n[s],p={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const l in p)n[p[l]]=l},74509:(e,t,o)=>{o.d(t,{LR:()=>l,Uy:()=>s,VW:()=>n,Wb:()=>a,kf:()=>p});o(88152);function r(e){return e?c:d}function i(e,t){return null!==t&&void 0!==t&&t.mode?t.mode:r(e).mode}function n(e,t){return i(null!=e&&e.hasZ,t)}function s(e,t,o){return o&&o.mode!==t?"".concat(e," only support ").concat(t," elevation mode"):null}function a(e,t,o){return(null===o||void 0===o?void 0:o.mode)===t?"".concat(e," do not support ").concat(t," elevation mode"):null}function p(e,t){return null!=(null===t||void 0===t?void 0:t.featureExpressionInfo)&&"0"!==t.featureExpressionInfo.expression?"".concat(e," do not support featureExpressionInfo"):null}function l(e,t){t&&e.warn(".elevationInfo=",t)}const c={mode:"absolute-height",offset:0},d={mode:"on-the-ground",offset:null}}}]);
//# sourceMappingURL=6251.c7b8879e.chunk.js.map
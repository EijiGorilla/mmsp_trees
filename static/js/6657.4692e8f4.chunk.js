"use strict";(self.webpackChunkmmsp_trees=self.webpackChunkmmsp_trees||[]).push([[6657],{38566:(e,t,i)=>{i.r(t),i.d(t,{default:()=>G});var r=i(27366),s=(i(59486),i(44055)),o=(i(94931),i(78451),i(98689),i(57823),i(32066),i(49018),i(34999),i(28189),i(9014),i(40464)),n=i(97642),a=i(18202),p=i(35995),l=i(49861),u=i(25243),d=(i(63780),i(93169)),c=i(69912),y=i(31201),h=i(27823),m=i(30651),g=i(10064),f=i(54472),v=i(66978),b=i(70431),w=i(63543),C=i(45927),F=i(49818),_=i(6701),S=i(53866);let O=class extends f.Z{constructor(){super(...arguments),this._connection=null,this.capabilities=(0,w.MS)(!1,!1),this.type="wfs",this.refresh=(0,v.Ds)((async e=>{await this.load();const{extent:t}=await this._connection.invoke("refresh",e);return t&&(this.sourceJSON.extent=t),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}}))}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:t})),Promise.resolve(this)}destroy(){var e;null!==(e=this._connection)&&void 0!==e&&e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};await this.load(t);const i=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return F.Z.fromJSON(i)}async queryFeaturesJSON(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};await this.load(t);const i=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:i.count,extent:S.Z.fromJSON(i.extent)}}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _createLoadOptions(e){var t,i,r;const{url:s,customParameters:o,name:n,namespaceUri:a,fields:p,geometryType:l,swapXY:u}=this.layer,d="defaults"===this.layer.originOf("spatialReference")?void 0:this.layer.spatialReference;if(!s)throw new g.Z("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await(0,C.FU)(s,{customParameters:o,...e}));const c=["fields","geometryType","name","namespaceUri","swapXY"].some((e=>null==this.layer[e])),y=c?await(0,C.be)(this.wfsCapabilities,n,a,{spatialReference:d,customParameters:o,signal:null===e||void 0===e?void 0:e.signal}):{...(0,C.eB)(null!==p&&void 0!==p?p:[]),geometryType:l,name:n,namespaceUri:a,spatialReference:d,swapXY:u},m=(0,C.ft)(this.wfsCapabilities.readFeatureTypes(),y.name,y.namespaceUri),f=h.M.toJSON(y.geometryType);return{customParameters:o,featureType:m,fields:null!==(t=null===(i=y.fields)||void 0===i?void 0:i.map((e=>e.toJSON())))&&void 0!==t?t:[],geometryField:y.geometryField,geometryType:f,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:y.objectIdField,spatialReference:null===(r=y.spatialReference)||void 0===r?void 0:r.toJSON(),swapXY:!!y.swapXY}}async _startWorker(e){const[t,i]=await(0,v.as)([this._createLoadOptions(e),(0,b.bA)("WFSSourceWorker",{...e,strategy:(0,d.Z)("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),r=t.error||i.error||null,s=i.value||null;if(r)throw s&&s.close(),r;const o=t.value;this._connection=i.value;const n=(await this._connection.invoke("load",o,e)).extent;this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:_.pt},extent:n,fields:o.fields,geometryType:o.geometryType,objectIdField:o.objectIdField,geometryField:o.geometryField,drawingInfo:(0,w.bU)(o.geometryType),name:o.featureType.title,wfsInfo:{name:o.featureType.name,featureUrl:o.getFeatureUrl,maxFeatures:3e3,swapXY:o.swapXY,supportedSpatialReferences:o.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:o.featureType.namespaceUri}}}};(0,r._)([(0,l.Cb)()],O.prototype,"capabilities",void 0),(0,r._)([(0,l.Cb)({constructOnly:!0})],O.prototype,"layer",void 0),(0,r._)([(0,l.Cb)()],O.prototype,"sourceJSON",void 0),(0,r._)([(0,l.Cb)()],O.prototype,"type",void 0),(0,r._)([(0,l.Cb)()],O.prototype,"wfsCapabilities",void 0),O=(0,r._)([(0,c.j)("esri.layers.graphics.sources.WFSSource")],O);var I,R=i(6693),x=i(46671),T=i(7632),P=i(64390),j=i(6061),q=i(94207),U=i(29598),E=i(71684),N=i(56811),Z=i(99063),D=i(45948),A=i(83040),Q=i(25610),k=i(37270),J=i(28931),M=i(85116),Y=i(21149),W=i(81085),X=i(78952);const z=(0,Q.v)();let B=I=class extends((0,q.c)((0,x.N)((0,P.M)((0,T.b)((0,R.h)((0,Z.n)((0,E.Q)((0,N.M)((0,j.q)((0,U.I)((0,n.R)(m.Z)))))))))))){static fromWFSLayerInfo(e){const{customParameters:t,fields:i,geometryField:r,geometryType:s,name:o,namespaceUri:n,objectIdField:a,spatialReference:p,swapXY:l,url:u,wfsCapabilities:d}=e;return new I({customParameters:t,fields:i,geometryField:r,geometryType:s,name:o,namespaceUri:n,objectIdField:a,spatialReference:p,swapXY:l,url:u,wfsCapabilities:d})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new O({layer:this}),this.spatialReference=X.Z.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){var e;null===(e=this.source)||void 0===e||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),(0,k.YN)(this.renderer,this.fieldsIndex),(0,k.UF)(this.timeInfo,this.fieldsIndex)}))),Promise.resolve(this)}get capabilities(){var e;return null===(e=this.source)||void 0===e?void 0:e.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,t,i){const r=e.filter((e=>e.name!==C.u2));this.geometryField&&r.unshift(new A.Z({name:this.geometryField,alias:this.geometryField,type:"geometry"})),(0,a.RB)(i,r.map((e=>e.toJSON())),t)}get parsedUrl(){return(0,p.mN)(this.url)}set renderer(e){(0,k.YN)(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){var e;return null===(e=this.source)||void 0===e?void 0:e.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return(0,W.eZ)(this,e)}createQuery(){const e=new Y.Z;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:t,timeExtent:i}=this;return e.timeExtent=null!=t&&null!=i?i.offset(-t.value,t.unit):i||null,e}getFieldDomain(e,t){var i;return null===(i=this.getField(e))||void 0===i?void 0:i.domain}getField(e){var t;return null===(t=this.fieldsIndex)||void 0===t?void 0:t.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(Y.Z.from(e)||this.createQuery(),t))).then((e=>{if(null!==e&&void 0!==e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(Y.Z.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(Y.Z.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(Y.Z.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return null!=t&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};(0,r._)([(0,l.Cb)({readOnly:!0})],B.prototype,"capabilities",null),(0,r._)([(0,l.Cb)({type:String})],B.prototype,"copyright",void 0),(0,r._)([(0,l.Cb)({readOnly:!0})],B.prototype,"createQueryVersion",null),(0,r._)([(0,l.Cb)({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],B.prototype,"customParameters",void 0),(0,r._)([(0,l.Cb)((0,_.mi)("dateFieldsTimeReference"))],B.prototype,"dateFieldsTimeZone",void 0),(0,r._)([(0,l.Cb)({readOnly:!0})],B.prototype,"defaultPopupTemplate",null),(0,r._)([(0,l.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],B.prototype,"definitionExpression",void 0),(0,r._)([(0,l.Cb)({type:String})],B.prototype,"displayField",void 0),(0,r._)([(0,l.Cb)(D.PV)],B.prototype,"elevationInfo",void 0),(0,r._)([(0,l.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],B.prototype,"featureUrl",void 0),(0,r._)([(0,l.Cb)({type:[A.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],B.prototype,"fields",void 0),(0,r._)([(0,y.c)("fields")],B.prototype,"writeFields",null),(0,r._)([(0,l.Cb)(z.fieldsIndex)],B.prototype,"fieldsIndex",void 0),(0,r._)([(0,l.Cb)({type:S.Z,json:{name:"extent"}})],B.prototype,"fullExtent",void 0),(0,r._)([(0,l.Cb)()],B.prototype,"geometryField",void 0),(0,r._)([(0,l.Cb)({type:String,json:{read:{source:"layerDefinition.geometryType",reader:h.M.read},write:{target:"layerDefinition.geometryType",writer:h.M.write,ignoreOrigin:!0},origins:{service:{read:h.M.read}}}})],B.prototype,"geometryType",void 0),(0,r._)([(0,l.Cb)({type:String})],B.prototype,"id",void 0),(0,r._)([(0,l.Cb)(D.iR)],B.prototype,"labelsVisible",void 0),(0,r._)([(0,l.Cb)({type:[J.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:M.r},write:!0}})],B.prototype,"labelingInfo",void 0),(0,r._)([(0,l.Cb)(D.rn)],B.prototype,"legendEnabled",void 0),(0,r._)([(0,l.Cb)({type:["show","hide"]})],B.prototype,"listMode",void 0),(0,r._)([(0,l.Cb)({type:String})],B.prototype,"objectIdField",void 0),(0,r._)([(0,l.Cb)({type:["WFS"]})],B.prototype,"operationalLayerType",void 0),(0,r._)([(0,l.Cb)({type:u.z8,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],B.prototype,"maxFeatures",void 0),(0,r._)([(0,l.Cb)({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],B.prototype,"mode",void 0),(0,r._)([(0,l.Cb)({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],B.prototype,"name",void 0),(0,r._)([(0,l.Cb)({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],B.prototype,"namespaceUri",void 0),(0,r._)([(0,l.Cb)(D.bT)],B.prototype,"opacity",void 0),(0,r._)([(0,l.Cb)(z.outFields)],B.prototype,"outFields",void 0),(0,r._)([(0,l.Cb)({readOnly:!0})],B.prototype,"parsedUrl",null),(0,r._)([(0,l.Cb)(D.C_)],B.prototype,"popupEnabled",void 0),(0,r._)([(0,l.Cb)({type:s.Z,json:{name:"popupInfo",write:!0}})],B.prototype,"popupTemplate",void 0),(0,r._)([(0,l.Cb)({types:o.A,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:o.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],B.prototype,"renderer",null),(0,r._)([(0,l.Cb)(D.YI)],B.prototype,"screenSizePerspectiveEnabled",void 0),(0,r._)([(0,l.Cb)({readOnly:!0})],B.prototype,"source",void 0),(0,r._)([(0,l.Cb)({type:X.Z,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],B.prototype,"spatialReference",void 0),(0,r._)([(0,l.Cb)({readOnly:!0,type:[u.z8],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],B.prototype,"spatialReferences",void 0),(0,r._)([(0,l.Cb)({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],B.prototype,"swapXY",void 0),(0,r._)([(0,l.Cb)({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],B.prototype,"title",void 0),(0,r._)([(0,l.Cb)({json:{read:!1},readOnly:!0})],B.prototype,"type",void 0),(0,r._)([(0,l.Cb)(D.HQ)],B.prototype,"url",void 0),(0,r._)([(0,l.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],B.prototype,"version",void 0),(0,r._)([(0,l.Cb)()],B.prototype,"wfsCapabilities",null),B=I=(0,r._)([(0,c.j)("esri.layers.WFSLayer")],B);const G=B},3182:(e,t,i)=>{i.d(t,{S6:()=>s,nd:()=>o,u_:()=>r});class r{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;this.geometry=e,this.attributes=t,this.centroid=i,this.objectId=r,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const e=new r(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}function s(e){var t;return!(null===(t=e.geometry)||void 0===t||null===(t=t.coords)||void 0===t||!t.length)}class o extends r{}},80457:(e,t,i)=>{i.d(t,{Z:()=>r});class r{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.lengths=null!==e&&void 0!==e?e:[],this.coords=null!==t&&void 0!==t?t:[],this.hasIndeterminateRingOrder=i}static fromRect(e){const[t,i,s,o]=e,n=s-t,a=o-i;return new r([5],[t,i,n,0,0,a,-n,0,0,-a])}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let i=0;i<this.lengths.length;i++){const r=this.lengths[i];for(let i=0;i<r;i++)e(this.coords[2*(i+t)],this.coords[2*(i+t)+1]);t+=r}}clone(e){return e?(e.set(this.coords),new r(this.lengths.slice(),e,this.hasIndeterminateRingOrder)):new r(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}},60480:(e,t,i)=>{i.d(t,{g:()=>r});const r={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},63543:(e,t,i)=>{i.d(t,{Dm:()=>u,Hq:()=>d,MS:()=>c,bU:()=>a});var r=i(93169),s=i(84652),o=i(60480),n=i(76115);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.I4:"esriGeometryPolyline"===e?n.ET:n.lF}}}const p=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function u(e,t){if((0,r.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let i="this.".concat(t," = null;");for(const t in e)i+="this".concat(p.test(t)?".".concat(t):'["'.concat(t,'"]')," = ").concat(JSON.stringify(e[t]),";");const r=new Function("\n      return class AttributesClass$".concat(l++," {\n        constructor() {\n          ").concat(i,";\n        }\n      }\n    "))();return()=>new r}catch(i){return()=>({[t]:null,...e})}}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:o.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);
//# sourceMappingURL=6657.4692e8f4.chunk.js.map
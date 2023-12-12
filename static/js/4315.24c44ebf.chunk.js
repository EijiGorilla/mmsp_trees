"use strict";(self.webpackChunkmmsp_trees=self.webpackChunkmmsp_trees||[]).push([[4315],{87072:(e,t,r)=>{function i(e){var t;const r=e.layer;return"floorInfo"in r&&null!==(t=r.floorInfo)&&void 0!==t&&t.floorField&&"floors"in e.view?n(e.view.floors,r.floorInfo.floorField):null}function s(e,t){var r;return"floorInfo"in t&&null!==(r=t.floorInfo)&&void 0!==r&&r.floorField?n(e,t.floorInfo.floorField):null}function n(e,t){if(null===e||void 0===e||!e.length)return null;const r=e.filter((e=>""!==e)).map((e=>"'".concat(e,"'")));return r.push("''"),"".concat(t," IN (").concat(r.join(","),") OR ").concat(t," IS NULL")}r.d(t,{c:()=>i,f:()=>s})},58132:(e,t,r)=>{r.d(t,{FN:()=>n,QV:()=>s,ac:()=>a});var i=r(25265);function s(e,t,r){const i=t.flatten((e=>{let{sublayers:t}=e;return t})).length;return i!==e.length||(!!e.some((e=>e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r))||!o(e,t))}function n(e,t,r){return!!e.some((e=>{const t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(null==t.gdbVersion||t.gdbVersion===r))||e.originIdOf("renderer")>i.s3.SERVICE||e.originIdOf("labelingInfo")>i.s3.SERVICE||e.originIdOf("opacity")>i.s3.SERVICE||e.originIdOf("labelsVisible")>i.s3.SERVICE}))||!o(e,t)}function o(e,t){if(null===e||void 0===e||!e.length||null==t)return!0;const r=t.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).map((e=>e.id)).toArray();if(e.length>r.length)return!1;let i=0;const s=r.length;for(const{id:n}of e){for(;i<s&&r[i]!==n;)i++;if(i>=s)return!1}return!0}function a(e){return!!e&&e.some((e=>{var t;return null!=e.minScale||null!=(null===(t=e.layerDefinition)||void 0===t?void 0:t.minScale)}))}},39383:(e,t,r)=>{r.d(t,{T:()=>v});var i=r(66978),s=r(43e3),n=r(26885),o=r(55067),a=r(17842),l=r(68860),u=r(49229),c=r(84319),d=r(10435),h=r(98029),p=r(90316);function f(e,t){const r=t.length;if(e<t[0].value||1===r)return t[0].size;for(let i=1;i<r;i++)if(e<t[i].value){const r=(e-t[i-1].value)/(t[i].value-t[i-1].value);return t[i-1].size+r*(t[i].size-t[i-1].size)}return t[r-1].size}class y{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=d.v}getSizeVVFieldStops(e){var t;const r=this._vvSizeFieldStops;if(r)switch(r.type){case"static":return r;case"level-dependent":return null!==(t=r.levels[e])&&void 0!==t?t:(()=>{let t=1/0,i=0;for(const a in r.levels){const r=parseFloat(a),s=Math.abs(e-r);s<t&&(t=s,i=r)}if(t===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const s=2**((e-i)/2),n=r.levels[i],o=new Float32Array(n.values);return o[2]*=s,o[3]*=s,{sizes:n.sizes,values:o}})();default:return}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){null!=this._vvInfo&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,r){this._updateEffects(r),this._vvInfo=t,this._technique=(0,h.EJ)(e),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,e)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:(0,p.hc)("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(e){this.outsideLabelsVisible=null!=e&&e.excludedLabelsVisible}_updateVisualVariables(e,t){const r=this._vvMaterialParameters;if(r.vvOpacityEnabled=!1,r.vvSizeEnabled=!1,r.vvColorEnabled=!1,r.vvRotationEnabled=!1,!e)return;const i=e.size;if(i){if(r.vvSizeEnabled=!0,i.minMaxValue){const e=i.minMaxValue;let r,s;if((0,c.$K)(e.minSize)&&(0,c.$K)(e.maxSize))if((0,c.hj)(e.minSize)&&(0,c.hj)(e.maxSize))r=(0,a.F2)(e.minSize),s=(0,a.F2)(e.maxSize);else{const i=t.scale;r=(0,a.F2)(f(i,e.minSize.stops)),s=(0,a.F2)(f(i,e.maxSize.stops))}this.vvSizeMinMaxValue.set([e.minDataValue,e.maxDataValue,r,s])}if(i.scaleStops&&(this.vvSizeScaleStopsValue=(0,a.F2)(f(t.scale,i.scaleStops.stops))),i.unitValue){const e=(0,l.c9)(t.spatialReference)/u.a[i.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=e/t.resolution}i.fieldStops&&(this._vvSizeFieldStops=i.fieldStops)}const s=e.color;s&&(r.vvColorEnabled=!0,this.vvColorValues.set(s.values),this.vvColors.set(s.colors));const n=e.opacity;n&&(r.vvOpacityEnabled=!0,this.vvOpacityValues.set(n.values),this.vvOpacities.set(n.opacities));const o=e.rotation;o&&(r.vvRotationEnabled=!0,r.vvRotationType=o.type)}}class v extends o.Z{constructor(e){super(e),this._rendererInfo=new y,this._materialItemsRequestQueue=new s.Z,this.attributeView=new n.H((()=>this.onAttributeStoreUpdate()))}destroy(){this.children.forEach((e=>e.destroy())),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,r){this._rendererInfo.setInfo(e,t,r),this.requestRender()}async getMaterialItems(e,t){if(!e||0===e.length)return[];const r=(0,i.hh)();return this._materialItemsRequestQueue.push({items:e,abortOptions:t,resolver:r}),this.requestRender(),r.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop();for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commit(e);this._rendererInfo.update(e.state),super.renderChildren(e)}createRenderParams(e){const t=super.createRenderParams(e);return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,t){let{items:r,abortOptions:i,resolver:s}=t;const{painter:n,pixelRatio:o}=e,a=r.map((e=>n.textureManager.rasterizeItem(e.symbol,o,e.glyphIds,i)));Promise.all(a).then((e=>{if(!this.stage)return void s.reject();const t=e.map(((e,t)=>({id:r[t].id,mosaicItem:e})));s.resolve(t)}),s.reject)}}},55067:(e,t,r)=>{r.d(t,{Z:()=>u});var i=r(93169),s=r(80613),n=r(64510),o=r(52424),a=r(40655);const l=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class u extends n.Z{constructor(e){super(),this._tileInfoView=e}renderChildren(e){this.sortChildren(l),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,r=super.createRenderParams(e);return r.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,r.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),r}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[a.Z],drawPhase:s.jx.DEBUG|s.jx.MAP|s.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,i.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[o.Z],drawPhase:s.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(const r of this.children)r.stencilRef=t++}}},82022:(e,t,r)=>{r.d(t,{Z:()=>g});var i=r(92026),s=r(39383),n=r(22753),o=r(23588),a=r(15245),l=r(8229),u=r(91340),c=r(87422),d=r(84319),h=r(44070),p=r(8548),f=r(45412);const y=Math.PI/180;class v extends c.s{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,o.c)(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,i.M2)(this._program)}doRender(e){const{context:t}=e,r=this._getBounds();if(r.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,r),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(p.zi.ONE,p.zi.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const i=this._program;t.bindVAO(this._vao),t.useProgram(i),i.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(p.MX.LINES,8*r.length,p.g.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{dvs:(0,o.c)()}}_createShaderProgram(e){if(this._program)return;this._program=e.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",m().attributes)}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:r,size:i,resolution:s,pixelRatio:o,rotation:c,viewpoint:d}=t,h=y*c,{x:p,y:f}=d.targetGeometry,v=(0,u.or)(p,t.spatialReference);this._localOrigin.x=v,this._localOrigin.y=f;const m=o*i[0],g=o*i[1],b=s*m,_=s*g,w=(0,n.g)(this._dvsMat3);(0,n.m)(w,w,r),(0,n.h)(w,w,(0,a.f)(m/2,g/2)),(0,n.c)(w,w,(0,l.f)(i[0]/b,-g/_,1)),(0,n.r)(w,w,-h)}_updateBufferData(e,t){const{x:r,y:i}=this._localOrigin,s=8*t.length,n=new Float32Array(s),o=new Uint32Array(8*t.length);let a=0,l=0;for(const u of t)u&&(n[2*a]=u[0]-r,n[2*a+1]=u[1]-i,n[2*a+2]=u[0]-r,n[2*a+3]=u[3]-i,n[2*a+4]=u[2]-r,n[2*a+5]=u[3]-i,n[2*a+6]=u[2]-r,n[2*a+7]=u[1]-i,o[l]=a+0,o[l+1]=a+3,o[l+2]=a+3,o[l+3]=a+2,o[l+4]=a+2,o[l+5]=a+1,o[l+6]=a+1,o[l+7]=a+0,a+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(n.buffer):this._vertexBuffer=h.f.createVertex(e,p.l1.DYNAMIC_DRAW,n.buffer),this._indexBuffer?this._indexBuffer.setData(o):this._indexBuffer=h.f.createIndex(e,p.l1.DYNAMIC_DRAW,o),!this._vao){const t=m();this._vao=new f.U(e,t.attributes,t.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const m=()=>(0,d.cM)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:p.g.FLOAT}]});let g=class extends s.T{constructor(e){super(e),this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,i.SC)(this._boundsRenderer)}enableRenderingBounds(e){this._boundsRenderer=new v(e),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){e.clear(),this.contains(e)||this.addChild(e)}_renderChildren(e,t){for(const r of this.children)r.isReady&&r.hasData&&(r.commit(e),e.context.setStencilFunction(p.wb.EQUAL,r.stencilRef,255),r.getDisplayList().replay(e,r,t))}}},83978:(e,t,r)=>{r.d(t,{Z:()=>u});var i=r(27366),s=(r(32718),r(25243),r(63780),r(93169),r(10064),r(69912)),n=r(80613),o=r(82022),a=r(8548);let l=class extends o.Z{get hasHighlight(){return this.children.some((e=>e.hasData))}renderChildren(e){if(e.drawPhase!==n.jx.HIGHLIGHT)return;if(this.attributeView.update(),!this.children.some((e=>e.hasData)))return;this.attributeView.bindTextures(e.context),super.renderChildren(e);const{painter:t}=e,r=t.effects.highlight;r.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(a.lk.COLOR_BUFFER_BIT),this._renderChildren(e,r.defines.concat(["highlightAll"])),r.draw(e),r.unbind()}};l=(0,i._)([(0,s.j)("esri.views.2d.layers.support.HighlightGraphicContainer")],l);const u=l},13107:(e,t,r)=>{r.d(t,{Z:()=>u});var i=r(27366),s=r(32718),n=r(66978),o=r(94172),a=r(49861),l=(r(25243),r(63780),r(93169),r(69912));const u=e=>{let t=class extends e{initialize(){this.addHandles((0,o.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,n.D_)(e)||s.Z.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return(0,i._)([(0,a.Cb)()],t.prototype,"layer",void 0),t=(0,i._)([(0,l.j)("esri.layers.mixins.RefreshableLayerView")],t),t}},84848:(e,t,r)=>{r.d(t,{VF:()=>$,Uf:()=>Y});var i=r(27366),s=r(52639),n=r(7138),o=r(63780),a=r(40281),l=r(10064),u=r(42537),c=r(93169),d=r(77427),h=r(66978),p=r(94172),f=r(68860),y=r(49861),v=r(25243),m=r(69912),g=r(53866),b=r(82582),_=r(37270),w=r(87072);function x(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function I(e,t){var r;return"number"==typeof e?e:null!==e&&void 0!==e&&null!==(r=e.stops)&&void 0!==r&&r.length?function(e){let t=0,r=0;for(let i=0;i<e.length;i++){const s=e[i].size;"number"==typeof s&&(t+=s,r++)}return t/r}(e.stops):t}function S(e,t){if(!t)return e;const r=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:r,minSize:i}=t;return(I(r,e)+I(i,e))/2}));let i=0;const s=r.length;if(0===s)return e;for(let o=0;o<s;o++)i+=r[o];const n=Math.floor(i/s);return Math.max(n,e)}function R(e){var t;const r=null===e||void 0===e?void 0:e.renderer,i="touch"===(null===e||void 0===e||null===(t=e.event)||void 0===t?void 0:t.pointerType)?9:6;if(!r)return i;const s="visualVariables"in r?S(i,r.visualVariables):i;if("simple"===r.type)return x(s,r.symbol);if("unique-value"===r.type){var n;let e=s;return null!==(n=r.uniqueValueInfos)&&void 0!==n&&n.forEach((t=>{e=x(e,t.symbol)})),e}if("class-breaks"===r.type){let e=s;return r.classBreakInfos.forEach((t=>{e=x(e,t.symbol)})),e}return"dot-density"===r.type||r.type,s}var V=r(76200),F=r(91340),C=r(23084),E=r(76672),O=r(77981),M=r(92975),P=r(58132);function A(e){var t;const{mapExtent:r,floors:i,width:s,sublayers:n,layerIds:o,layerOption:a,gdbVersion:l}=e,u=null===n||void 0===n||null===(t=n.find((e=>null!=e.layer)))||void 0===t||null===(t=t.layer)||void 0===t?void 0:t.serviceSublayers,c="popup"===a,d={},h=(0,b.yZ)({extent:r,width:s,spatialReference:null===r||void 0===r?void 0:r.spatialReference}),p=[],f=e=>{const t=0===h,r=0===e.minScale||h<=e.minScale,i=0===e.maxScale||h>=e.maxScale;if(e.visible&&(t||r&&i))if(e.sublayers)e.sublayers.forEach(f);else{if(!1===(null===o||void 0===o?void 0:o.includes(e.id))||c&&(!e.popupTemplate||!e.popupEnabled))return;p.unshift(e)}};if(null!==n&&void 0!==n&&n.forEach(f),n&&!p.length)d.layerIds=[];else{const e=(0,P.FN)(p,u,l),t=p.map((e=>{const t=(0,w.f)(i,e);return e.toExportImageJSON(t)}));if(e)d.dynamicLayers=JSON.stringify(t);else{if(n){let e=p.map((e=>{let{id:t}=e;return t}));o&&(e=e.filter((e=>o.includes(e)))),d.layerIds=e}else(null===o||void 0===o?void 0:o.length)&&(d.layerIds=o);const e=function(e,t){const r=!(null===e||void 0===e||!e.length),i=t.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return i.length?i.map((t=>{const r=(0,w.f)(e,t),i=(0,E._)(r,t.definitionExpression);return{id:t.id,definitionExpression:null!==i&&void 0!==i?i:void 0}})):null}(i,p);if(null!=e&&e.length){const t={};for(const r of e)r.definitionExpression&&(t[r.id]=r.definitionExpression);Object.keys(t).length&&(d.layerDefs=JSON.stringify(t))}}}return d}var j,T=r(59486),z=r(62044),L=r(46784),N=r(78952);let Z=j=class extends L.wq{static from(e){return(0,v.TJ)(j,e)}constructor(e){super(e),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}};(0,i._)([(0,y.Cb)({type:Number,json:{write:!0}})],Z.prototype,"dpi",void 0),(0,i._)([(0,y.Cb)()],Z.prototype,"floors",void 0),(0,i._)([(0,y.Cb)({type:String,json:{write:!0}})],Z.prototype,"gdbVersion",void 0),(0,i._)([(0,y.Cb)({types:T.qM,json:{read:O.im,write:!0}})],Z.prototype,"geometry",void 0),(0,i._)([(0,y.Cb)({type:Number,json:{write:!0}})],Z.prototype,"geometryPrecision",void 0),(0,i._)([(0,y.Cb)({type:Number,json:{write:!0}})],Z.prototype,"height",void 0),(0,i._)([(0,y.Cb)({type:[Number],json:{write:!0}})],Z.prototype,"layerIds",void 0),(0,i._)([(0,y.Cb)({type:["top","visible","all","popup"],json:{write:!0}})],Z.prototype,"layerOption",void 0),(0,i._)([(0,y.Cb)({type:g.Z,json:{write:!0}})],Z.prototype,"mapExtent",void 0),(0,i._)([(0,y.Cb)({type:Number,json:{write:!0}})],Z.prototype,"maxAllowableOffset",void 0),(0,i._)([(0,y.Cb)({type:Boolean,json:{write:!0}})],Z.prototype,"returnFieldName",void 0),(0,i._)([(0,y.Cb)({type:Boolean,json:{write:!0}})],Z.prototype,"returnGeometry",void 0),(0,i._)([(0,y.Cb)({type:Boolean,json:{write:!0}})],Z.prototype,"returnM",void 0),(0,i._)([(0,y.Cb)({type:Boolean,json:{write:!0}})],Z.prototype,"returnUnformattedValues",void 0),(0,i._)([(0,y.Cb)({type:Boolean,json:{write:!0}})],Z.prototype,"returnZ",void 0),(0,i._)([(0,y.Cb)({type:N.Z,json:{write:!0}})],Z.prototype,"spatialReference",void 0),(0,i._)([(0,y.Cb)()],Z.prototype,"sublayers",void 0),(0,i._)([(0,y.Cb)({type:z.Z,json:{write:!0}})],Z.prototype,"timeExtent",void 0),(0,i._)([(0,y.Cb)({type:Number,json:{write:!0}})],Z.prototype,"tolerance",void 0),(0,i._)([(0,y.Cb)({type:Number,json:{write:!0}})],Z.prototype,"width",void 0),Z=j=(0,i._)([(0,m.j)("esri.rest.support.IdentifyParameters")],Z);const B=Z;var G=r(38511),q=r(31201),k=r(27823);let U=class extends L.wq{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,t){return s.Z.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(e,t){if(!e)return;const{attributes:r,geometry:i}=e;r&&(t.attributes={...r}),null!=i&&(t.geometry=i.toJSON(),t.geometryType=k.P.toJSON(i.type))}};(0,i._)([(0,y.Cb)({type:String,json:{write:!0}})],U.prototype,"displayFieldName",void 0),(0,i._)([(0,y.Cb)({type:s.Z})],U.prototype,"feature",void 0),(0,i._)([(0,G.r)("feature",["attributes","geometry"])],U.prototype,"readFeature",null),(0,i._)([(0,q.c)("feature")],U.prototype,"writeFeature",null),(0,i._)([(0,y.Cb)({type:Number,json:{write:!0}})],U.prototype,"layerId",void 0),(0,i._)([(0,y.Cb)({type:String,json:{write:!0}})],U.prototype,"layerName",void 0),U=(0,i._)([(0,m.j)("esri.rest.support.IdentifyResult")],U);const H=U;async function D(e,t,r){const i=(t=function(e){return B.from(e)}(t)).geometry?[t.geometry]:[],s=(0,C.en)(e);return s.path+="/identify",(0,F.aX)(i).then((e=>{const i=function(e,t){var r;const{dpi:i,gdbVersion:s,geometry:n,geometryPrecision:o,height:a,layerOption:l,mapExtent:u,maxAllowableOffset:c,returnFieldName:d,returnGeometry:h,returnUnformattedValues:p,returnZ:f,spatialReference:y,timeExtent:v,tolerance:m,width:g}=e.toJSON(),{dynamicLayers:b,layerDefs:_,layerIds:w}=A(e),x=null!=(null===t||void 0===t?void 0:t.geometry)?t.geometry:null,I={geometryPrecision:o,maxAllowableOffset:c,returnFieldName:d,returnGeometry:h,returnUnformattedValues:p,returnZ:f,tolerance:m},S=x&&x.toJSON()||n;I.imageDisplay="".concat(g,",").concat(a,",").concat(i),s&&(I.gdbVersion=s),S&&(delete S.spatialReference,I.geometry=JSON.stringify(S),I.geometryType=(0,O.Ji)(S));const R=null!==(r=null!==y&&void 0!==y?y:null===S||void 0===S?void 0:S.spatialReference)&&void 0!==r?r:null===u||void 0===u?void 0:u.spatialReference;if(R&&(I.sr=(0,M.B9)(R)),I.time=v?[v.start,v.end].join(","):null,u){const{xmin:e,ymin:t,xmax:r,ymax:i}=u;I.mapExtent="".concat(e,",").concat(t,",").concat(r,",").concat(i)}return _&&(I.layerDefs=_),b&&!_&&(I.dynamicLayers=b),I.layers="popup"===l?"visible":l,w&&!b&&(I.layers+=":".concat(w.join(","))),I}(t,{geometry:null===e||void 0===e?void 0:e[0]}),n=(0,C.cv)({...s.query,f:"json",...i}),o=(0,C.lA)(n,r);return(0,V.Z)(s.path,o).then(Q).then((e=>function(e,t){if(null===t||void 0===t||!t.length)return e;const r=new Map;function i(e){r.set(e.id,e),e.sublayers&&e.sublayers.forEach(i)}t.forEach(i);for(const s of e.results)s.feature.sourceLayer=r.get(s.layerId);return e}(e,t.sublayers)))}))}function Q(e){const t=e.data;return t.results=t.results||[],t.exceededTransferLimit=Boolean(t.exceededTransferLimit),t.results=t.results.map((e=>H.fromJSON(e))),t}var J=r(819),W=r(16072),K=r(24405);let X=null;function Y(e,t){return"tile"===t.type||"map-image"===t.type}let $=class extends n.Z{constructor(e){super(e),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=(0,h.Ds)((async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch((()=>{})))}))}initialize(){const e=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch((()=>{}))),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([(0,p.on)((()=>this.highlightGraphics),"change",(t=>e(t.added)),{onListenerAdd:t=>e(t)})])}async fetchPopupFeatures(e,t){var r,i;const{layerView:{layer:s,view:{scale:n}}}=this;if(!e)throw new l.Z("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:s});const o=function(e,t,r){const i=[];if(!e)return i;const s=e=>{const n=0===e.minScale||t<=e.minScale,o=0===e.maxScale||t>=e.maxScale;if(e.visible&&n&&o)if(e.sublayers)e.sublayers.forEach(s);else if(e.popupEnabled){const t=(0,K.V5)(e,{...r,defaultPopupTemplateEnabled:!1});null!=t&&i.unshift({sublayer:e,popupTemplate:t})}};return e.map(s),i}(s.sublayers,n,t);if(!o.length)return[];const a=await async function(e,t){var r;if(null!==(r=e.capabilities)&&void 0!==r&&null!==(r=r.operations)&&void 0!==r&&r.supportsQuery)return!0;try{return await Promise.any(t.map((e=>{let{sublayer:t}=e;return t.load().then((()=>t.capabilities.operations.supportsQuery))})))}catch{return!1}}(s,o);if((null!==(r=null===(i=s.capabilities)||void 0===i||null===(i=i.operations)||void 0===i?void 0:i.supportsIdentify)&&void 0!==r&&!r||!(s.version>=10.5))&&!a)throw new l.Z("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:s});return a?this._fetchPopupFeaturesUsingQueries(e,o,t):this._fetchPopupFeaturesUsingIdentify(e,o,t)}clearHighlights(){var e;null===(e=this.highlightGraphics)||void 0===e||e.removeAll()}highlight(e){var t,r;const i=this.highlightGraphics;if(!i)return(0,u.kB)();let n=null;if(e instanceof s.Z?n=[e]:a.Z.isCollection(e)&&e.length>0?n=e.toArray():Array.isArray(e)&&e.length>0&&(n=e),n=null===(t=n)||void 0===t?void 0:t.filter(o.pC),null===(r=n)||void 0===r||!r.length)return(0,u.kB)();for(const s of n){const e=s.sourceLayer;null!=e&&"geometryType"in e&&"point"===e.geometryType&&(s.visible=!1)}return i.addMany(n),(0,u.kB)((()=>{var e;return i.removeMany(null!==(e=n)&&void 0!==e?e:[])}))}async _updateHighlightedFeaturesSymbols(e){const{layerView:{view:t},highlightGraphics:i,highlightGraphicUpdated:s}=this;if(i&&s)for(const n of e){const e=n.sourceLayer&&"renderer"in n.sourceLayer&&n.sourceLayer.renderer;n.sourceLayer&&"geometryType"in n.sourceLayer&&"point"===n.sourceLayer.geometryType&&e&&"getSymbolAsync"in e&&e.getSymbolAsync(n).then((async o=>{var a;o||(o=new W.Z);let l=null;const u="visualVariables"in e?null===(a=e.visualVariables)||void 0===a?void 0:a.find((e=>"size"===e.type)):void 0;u&&(X||(X=(await Promise.resolve().then(r.bind(r,56011))).getSize),l=X(u,n,{view:t.type,scale:t.scale,shape:"simple-marker"===o.type?o.style:null})),l||(l="width"in o&&"height"in o&&null!=o.width&&null!=o.height?Math.max(o.width,o.height):"size"in o?o.size:16),i.includes(n)&&(n.symbol=new W.Z({style:"square",size:l,xoffset:"xoffset"in o?o.xoffset:0,yoffset:"yoffset"in o?o.yoffset:0}),s(n,"symbol"),n.visible=!0)}))}}async _updateHighlightedFeaturesGeometries(e){const{layerView:{layer:t,view:r},highlightGraphics:i,highlightGraphicUpdated:s}=this;if(this._highlightGeometriesResolution=e,!s||null===i||void 0===i||!i.length||!t.capabilities.operations.supportsQuery)return;const n=this._getTargetResolution(e),o=new Map;for(const u of i)if(!this._featuresResolutions.has(u)||this._featuresResolutions.get(u)>n){const e=u.sourceLayer;(0,d.s1)(o,e,(()=>new Map)).set(u.getObjectId(),u)}const a=Array.from(o,(e=>{let[t,i]=e;const s=t.createQuery();return s.objectIds=[...i.keys()],s.outFields=[t.objectIdField],s.returnGeometry=!0,s.maxAllowableOffset=n,s.outSpatialReference=r.spatialReference,t.queryFeatures(s)})),l=await Promise.all(a);if(!this.destroyed)for(const{features:u}of l)for(const e of u){const t=e.sourceLayer,r=o.get(t).get(e.getObjectId());r&&i.includes(r)&&(r.geometry=e.geometry,s(r,"geometry"),this._featuresResolutions.set(r,n))}}_getTargetResolution(e){const t=e*(0,f.c9)(this.layerView.view.spatialReference),r=t/16;return r<=10?0:e/t*r}async _fetchPopupFeaturesUsingIdentify(e,t,r){const i=await this._createIdentifyParameters(e,t,r);if(null==i)return[];const{results:s}=await D(this.layerView.layer.parsedUrl,i);return s.map((e=>e.feature))}async _createIdentifyParameters(e,t,r){const{floors:i,layer:s,timeExtent:n,view:{spatialReference:o,scale:a}}=this.layerView,l=null!=r?r.event:null;if(!t.length)return null;await Promise.all(t.map((e=>{let{sublayer:t}=e;return t.load().catch((()=>{}))})));const u=Math.min((0,c.Z)("mapservice-popup-identify-max-tolerance"),s.allSublayers.reduce(((e,t)=>t.renderer?R({renderer:t.renderer,event:l}):e),2)),d=this.createFetchPopupFeaturesQueryGeometry(e,u),h=(0,b.dp)(a,o),p=Math.round(d.width/h),f=new g.Z({xmin:d.center.x-h*p,ymin:d.center.y-h*p,xmax:d.center.x+h*p,ymax:d.center.y+h*p,spatialReference:d.spatialReference});return new B({floors:i,gdbVersion:"gdbVersion"in s?s.gdbVersion:void 0,geometry:e,height:p,layerOption:"popup",mapExtent:f,returnGeometry:!0,spatialReference:o,sublayers:s.sublayers,timeExtent:n,tolerance:u,width:p})}async _fetchPopupFeaturesUsingQueries(e,t,r){const{layerView:{floors:i,timeExtent:s}}=this,n=null!=r?r.event:null,a=t.map((async t=>{var r;let{sublayer:o,popupTemplate:a}=t;if(await o.load().catch((()=>{})),o.capabilities&&!o.capabilities.operations.supportsQuery)return[];const l=o.createQuery(),u=R({renderer:o.renderer,event:n}),c=this.createFetchPopupFeaturesQueryGeometry(e,u),d=new Set,[h]=await Promise.all([(0,K.e7)(o,a),null===(r=o.renderer)||void 0===r?void 0:r.collectRequiredFields(d,o.fieldsIndex)]);(0,_.gd)(d,o.fieldsIndex,h);const p=Array.from(d).sort();if(l.geometry=c,l.outFields=p,l.timeExtent=s,i){const e=i.clone(),t=(0,w.f)(e,o);null!=t&&(l.where=l.where?"(".concat(l.where,") AND (").concat(t,")"):t)}const f=this._getTargetResolution(c.width/u),y=await function(e){var t;return null!==(t=e.expressionInfos)&&void 0!==t&&t.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type))?(0,J.LC)():Promise.resolve()}(a),v="point"===o.geometryType||y&&y.arcadeUtils.hasGeometryOperations(a);v||(l.maxAllowableOffset=f);let{features:m}=await o.queryFeatures(l);const g=v?0:f;m=await async function(e,t){const r=e.renderer;return r&&"defaultSymbol"in r&&!r.defaultSymbol&&(t=r.valueExpression?await Promise.all(t.map((e=>r.getSymbolAsync(e).then((t=>t?e:null))))).then((e=>e.filter((e=>null!=e)))):t.filter((e=>null!=r.getSymbol(e)))),t}(o,m);for(const e of m)this._featuresResolutions.set(e,g);return m}));return(await Promise.allSettled(a)).reduce(((e,t)=>"fulfilled"===t.status?[...e,...t.value]:e),[]).filter(o.pC)}};(0,i._)([(0,y.Cb)({constructOnly:!0})],$.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),(0,i._)([(0,y.Cb)({constructOnly:!0})],$.prototype,"layerView",void 0),(0,i._)([(0,y.Cb)({constructOnly:!0})],$.prototype,"highlightGraphics",void 0),(0,i._)([(0,y.Cb)({constructOnly:!0})],$.prototype,"highlightGraphicUpdated",void 0),(0,i._)([(0,y.Cb)({constructOnly:!0})],$.prototype,"updatingHandles",void 0),$=(0,i._)([(0,m.j)("esri.views.layers.support.MapService")],$)},24405:(e,t,r)=>{r.d(t,{V5:()=>n,e7:()=>s});var i=r(37270);async function s(e){var t,r;let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.popupTemplate;if(null==s)return[];const n=await s.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:o}=s,{objectIdField:a,typeIdField:l,globalIdField:u,relationships:c}=e;if(n.includes("*"))return["*"];const d=o?(0,i.CH)(e):[],h=(0,i.Q0)(e.fieldsIndex,[...n,...d]);return l&&h.push(l),h&&a&&null!==(t=e.fieldsIndex)&&void 0!==t&&t.has(a)&&!h.includes(a)&&h.push(a),h&&u&&null!==(r=e.fieldsIndex)&&void 0!==r&&r.has(u)&&!h.includes(u)&&h.push(u),c&&c.forEach((t=>{var r;const{keyField:i}=t;h&&i&&(null===(r=e.fieldsIndex)||void 0===r?void 0:r.has(i))&&!h.includes(i)&&h.push(i)})),h}function n(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}},45008:(e,t,r)=>{r.d(t,{K:()=>n});r(59486);var i=r(68860),s=r(53866);function n(e,t,r){var n;let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new s.Z,a=0;if("2d"===r.type)a=t*(null!==(n=r.resolution)&&void 0!==n?n:0);else if("3d"===r.type){const s=r.overlayPixelSizeInMapUnits(e),n=r.basemapSpatialReference;a=null==n||n.equals(r.spatialReference)?t*s:(0,i.c9)(n)/(0,i.c9)(r.spatialReference)}const l=e.x-a,u=e.y-a,c=e.x+a,d=e.y+a,{spatialReference:h}=r;return o.xmin=Math.min(l,c),o.ymin=Math.min(u,d),o.xmax=Math.max(l,c),o.ymax=Math.max(u,d),o.spatialReference=h,o}new s.Z}}]);
//# sourceMappingURL=4315.24c44ebf.chunk.js.map
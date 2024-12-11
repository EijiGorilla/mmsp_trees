"use strict";(self.webpackChunkmmsp_trees=self.webpackChunkmmsp_trees||[]).push([[9887,50],{29887:(e,t,a)=>{a.d(t,{Ey:()=>F,applyEdits:()=>A,aw:()=>b,uploadAssets:()=>O});var r=a(52639),n=a(40281),o=a(10064),i=a(84652),l=a(32718),s=a(66978),d=a(35995),u=a(71907),c=a(91340),p=a(92975),f=a(56601),h=a(37270),m=a(18277),y=a(37933);function v(e){return null!=(null===e||void 0===e?void 0:e.applyEdits)}function g(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function b(e){return e.every(g)}function w(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function F(e){return e.every(w)}async function A(e,t,a){var r;let d,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const p="gdbVersion"in e?e.gdbVersion:null,h=null!==(r=c.gdbVersion)&&void 0!==r?r:p;if((0,f.lQ)(e)&&e.url)d=(0,f.jF)(e.url,e.layerId,h,"original-and-current-features"===c.returnServiceEditsOption);else{d=(0,s.hh)(),d.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:d.promise};e.emit("apply-edits",t)}try{var g;const{results:r,edits:s}=await async function(e,t,a,r){var i,s,d,c,p,f;if(await e.load(),!v(t))throw new o.Z("".concat(e.type,"-layer:no-editing-support"),"Layer source does not support applyEdits capability",{layer:e});if(!(0,y.ln)(e))throw new o.Z("".concat(e.type,"-layer:editing-disabled"),"Editing is disabled for layer",{layer:e});const{edits:h,options:g}=await async function(e,t,a){const r=(0,y.S1)(e),i=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),s=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),d=null!=e.infoFor3D;if(function(e,t,a,r,n,i){if(!e||!r&&!n)throw new o.Z("".concat(i,":missing-parameters"),"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&null!==a&&void 0!==a&&a.globalIdUsed)throw new o.Z("".concat(i,":invalid-parameter"),"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&n)throw new o.Z("".concat(i,":invalid-parameter"),"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((null===a||void 0===a||!a.globalIdUsed)&&n)throw new o.Z("".concat(i,":invalid-parameter"),"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}(t,r,a,!!i,!!s,"".concat(e.type,"-layer")),!r.data.isVersioned&&null!==a&&void 0!==a&&a.gdbVersion)throw new o.Z("".concat(e.type,"-layer:invalid-parameter"),"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!r.editing.supportsRollbackOnFailure&&null!==a&&void 0!==a&&a.rollbackOnFailureEnabled)throw new o.Z("".concat(e.type,"-layer:invalid-parameter"),"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const c={...a};if(null!=c.rollbackOnFailureEnabled||r.editing.supportsRollbackOnFailure||(c.rollbackOnFailureEnabled=!0),c.rollbackOnFailureEnabled||"original-and-current-features"!==c.returnServiceEditsOption||(!1===c.rollbackOnFailureEnabled&&l.Z.getLogger("esri.layers.graphics.editingSupport").warn("".concat(e.type,"-layer:invalid-parameter"),"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),c.rollbackOnFailureEnabled=!0),!r.editing.supportsReturnServiceEditsInSourceSpatialReference&&c.returnServiceEditsInSourceSR)throw new o.Z("".concat(e.type,"-layer:invalid-parameter"),"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(c.returnServiceEditsInSourceSR&&"original-and-current-features"!==c.returnServiceEditsOption)throw new o.Z("".concat(e.type,"-layer:invalid-parameter"),"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const p=function(e,t,a){var r,i,l;const s=function(e){var t,a;return{addFeatures:Array.from(null!==(t=null===e||void 0===e?void 0:e.addFeatures)&&void 0!==t?t:[]),updateFeatures:Array.from(null!==(a=null===e||void 0===e?void 0:e.updateFeatures)&&void 0!==a?a:[]),deleteFeatures:e&&n.Z.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}(e);if(null!==(r=s.addFeatures)&&void 0!==r&&r.length&&!t.operations.supportsAdd)throw new o.Z("".concat(a,":unsupported-operation"),"Layer does not support adding features.");if(null!==(i=s.updateFeatures)&&void 0!==i&&i.length&&!t.operations.supportsUpdate)throw new o.Z("".concat(a,":unsupported-operation"),"Layer does not support updating features.");if(null!==(l=s.deleteFeatures)&&void 0!==l&&l.length&&!t.operations.supportsDelete)throw new o.Z("".concat(a,":unsupported-operation"),"Layer does not support deleting features.");return s.addFeatures=s.addFeatures.map(R),s.updateFeatures=s.updateFeatures.map(R),s.addAssetFeatures=[],s}(t,r,"".concat(e.type,"-layer")),f=(null===a||void 0===a?void 0:a.globalIdUsed)||d,h=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(f){const{globalIdField:t}=e;if(null==t)throw new o.Z("".concat(e.type,"-layer:invalid-parameter"),"Layer does not specify a global id field.");p.addFeatures.forEach((e=>function(e,t){const{attributes:a}=e;null==a[t]&&(a[t]=(0,u.zS)())}(e,t)))}return p.addFeatures.forEach((t=>function(e,t,a,r){I(e,t,a,r),S(e,t)}(t,e,f,h))),p.updateFeatures.forEach((t=>function(e,t,a,r){I(e,t,a,r),S(e,t);const n=(0,y.S1)(t);if("geometry"in e&&null!=e.geometry&&(null===n||void 0===n||!n.editing.supportsGeometryUpdate))throw new o.Z("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support geometry updates.")}(t,e,f,h))),p.deleteFeatures.forEach((t=>function(e,t,a,r){I(e,t,a,r)}(t,e,f,h))),p.addAttachments.forEach((t=>Z(t,e))),p.updateAttachments.forEach((t=>Z(t,e))),d&&await async function(e,t){var a;const{infoFor3D:r}=t;if(null==r)return;if(!(0,m.Zq)(r))throw new o.Z("".concat(t.type,"-layer:binary-gltf-asset-not-supported"),"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");null!==(a=e.addAssetFeatures)&&void 0!==a||(e.addAssetFeatures=[]);const{addAssetFeatures:n}=e;for(const o of null!==(i=e.addFeatures)&&void 0!==i?i:[]){var i;k(o)&&n.push(o)}for(const o of null!==(l=e.updateFeatures)&&void 0!==l?l:[]){var l;k(o)&&n.push(o)}}(p,e),{edits:await E(p),options:c}}(e,a,r);return null!==(i=h.addFeatures)&&void 0!==i&&i.length||null!==(s=h.updateFeatures)&&void 0!==s&&s.length||null!==(d=h.deleteFeatures)&&void 0!==d&&d.length||null!==(c=h.addAttachments)&&void 0!==c&&c.length||null!==(p=h.updateAttachments)&&void 0!==p&&p.length||null!==(f=h.deleteAttachments)&&void 0!==f&&f.length?{edits:h,results:await t.applyEdits(h,g)}:{edits:h,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,a,c),p=e=>e.filter((e=>!e.error)).map(i.d9),f={edits:s,addedFeatures:p(r.addFeatureResults),updatedFeatures:p(r.updateFeatureResults),deletedFeatures:p(r.deleteFeatureResults),addedAttachments:p(r.addAttachmentResults),updatedAttachments:p(r.updateAttachmentResults),deletedAttachments:p(r.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:r.editMoment?new Date(r.editMoment):null,globalIdToObjectId:c.globalIdToObjectId};return null!==(g=r.editedFeatureResults)&&void 0!==g&&g.length&&(f.editedFeatures=r.editedFeatureResults),d.resolve(f),r}catch(b){throw d.reject(b),b}}function I(e,t,a,r){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"Feature should have '".concat(t.globalIdField,"' when 'globalIdUsed' is true"));if(!("attributes"in e)&&!e.globalId)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(r.length&&"attributes"in e)for(const l of r){const a=e.attributes[l.name];if(void 0!==a&&!(0,h.d2)(l,a))throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"Big-integer field '".concat(l.name,"' of the feature must be less than ").concat(Number.MAX_SAFE_INTEGER),{feature:e})}if("geometry"in e&&null!=e.geometry){var n,i;if(e.geometry.hasZ&&!1===(null===(n=t.capabilities)||void 0===n?void 0:n.data.supportsZ))throw new o.Z("".concat(t.type,"-layer:z-unsupported"),"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===(null===(i=t.capabilities)||void 0===i?void 0:i.data.supportsM))throw new o.Z("".concat(t.type,"-layer:m-unsupported"),"Layer does not support m values while feature has m values.")}}function S(e,t){var a;if("geometry"in e&&"mesh"===(null===(a=e.geometry)||void 0===a?void 0:a.type)&&null!=t.infoFor3D&&null!=t.spatialReference){const{geometry:a}=e,{spatialReference:r,vertexSpace:n}=a,i=t.spatialReference,l="local"===n.type,s=(0,p.sT)(i),d=(0,p.fS)(i,r),u=d||(0,p.oR)(i)&&((0,p.oR)(r)||(0,p.sS)(r));if(!(l&&s&&u||!l&&!s&&d))throw new o.Z("".concat(t.type,"-layer:mesh-unsupported"),"Uploading a mesh with a ".concat(n.type," vertex space and a spatial reference wkid:").concat(r.wkid," to a layer with a spatial reference wkid:").concat(i.wkid," is not supported."))}}function Z(e,t){var a;const{feature:r,attachment:n}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have reference to 'globalId' of the parent feature");if(!n.globalId)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have 'globalId'");if(!n.data&&!n.uploadId)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have 'data' or 'uploadId'");if(!(n.data instanceof File&&n.data.name)&&!n.name)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"'name' is required when attachment is specified as Base64 encoded string using 'data'");if((null===(a=t.capabilities)||void 0===a||!a.editing.supportsUploadWithItemId)&&n.uploadId)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof n.data){const e=(0,d.sJ)(n.data);if(e&&!e.isBase64)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function E(e){var t,a;const r=null!==(t=e.addFeatures)&&void 0!==t?t:[],n=null!==(a=e.updateFeatures)&&void 0!==a?a:[],o=r.concat(n).map((e=>e.geometry)),i=await(0,c.aX)(o),l=r.length,s=n.length;return i.slice(0,l).forEach(((e,t)=>r[t].geometry=e)),i.slice(l,l+s).forEach(((e,t)=>n[t].geometry=e)),e}function R(e){const t=new r.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function k(e){var t;return"mesh"===(null===e||void 0===e||null===(t=e.geometry)||void 0===t?void 0:t.type)}function O(e,t,a,r){if(!v(t))throw new o.Z("".concat(e.type,"-layer:no-editing-support"),"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new o.Z("".concat(e.type,"-layer:no-asset-upload-support"),"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(a,r)}},18277:(e,t,a)=>{a.d(t,{$6:()=>F,$z:()=>o,F7:()=>n,S0:()=>i,Wr:()=>m,X4:()=>c,Zq:()=>p,d1:()=>s,dm:()=>d,eP:()=>u,fe:()=>f,sg:()=>h});const r=[["binary","application/octet-stream","bin",""]];function n(e,t){var a;return null!=v(t.name,null!==(a=null===e||void 0===e?void 0:e.supportedFormats)&&void 0!==a?a:[])}function o(e,t){var a;if(!e)return!1;const r=d(t,null!==(a=e.supportedFormats)&&void 0!==a?a:[]);return null!=r&&e.editFormats.includes(r)}function i(e,t){return g(function(e,t){const a=e.toLowerCase();return y(t).find((e=>b(e)===a))}(e,t))}function l(e,t){return g(v(e,t))}function s(e,t){return b(function(e,t){return y(t).find((t=>g(t)===e))}(e,t))}function d(e,t){var a;return null!==(a=l(e.name,t))&&void 0!==a?a:i(e.type,t)}function u(e,t,a){var r;return null!==(r=i(e,a))&&void 0!==r?r:l(t,a)}function c(e){let{supportedFormats:t}=e;return u("model/gltf-binary","glb",t)}function p(e){const t=c(e);return null!=t&&e.editFormats.includes(t)}function f(e){let{supportedFormats:t}=e;return u("model/gltf+json","gltf",t)}function h(e){let{supportedFormats:t}=e;return u("application/esri3do-SR_world","wld",t)}function m(e){let{supportedFormats:t}=e;return u("application/esri3do-SR_prj","prj",t)}function y(e){return[...r,...e]}function v(e,t){const a=e.toLowerCase();return y(t).find((e=>w(e).some((e=>a.endsWith(e)))))}function g(e){return null===e||void 0===e?void 0:e[0]}function b(e){return null===e||void 0===e?void 0:e[1].toLowerCase()}function w(e){var t;return null!==(t=null===e||void 0===e?void 0:e[2].split(",").map((e=>e.toLowerCase())))&&void 0!==t?t:[]}function F(e){var t;return null===(t=e.tables)||void 0===t?void 0:t.find((e=>"assetMaps"===e.role))}}}]);
//# sourceMappingURL=9887.0a74ad61.chunk.js.map
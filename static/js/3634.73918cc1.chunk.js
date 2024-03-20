"use strict";(self.webpackChunkmmsp_trees=self.webpackChunkmmsp_trees||[]).push([[3634],{44070:(t,e,i)=>{i.d(e,{f:()=>c});var r=i(63780),n=i(32718),s=i(18722),h=i(37825),o=i(83826),a=i(8548);const l=n.Z.getLogger("esri.views.webgl.BufferObject");class c{static createIndex(t,e,i){return new c(t,a.w0.ELEMENT_ARRAY_BUFFER,e,i)}static createVertex(t,e,i){return new c(t,a.w0.ARRAY_BUFFER,e,i)}static createUniform(t,e,i){if(t.type!==o.zO.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new c(t,a.w0.UNIFORM_BUFFER,e,i)}static createPixelPack(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.l1.STREAM_READ,i=arguments.length>2?arguments[2]:void 0;if(t.type!==o.zO.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");const r=new c(t,a.w0.PIXEL_PACK_BUFFER,e);return i&&r.setSize(i),r}static createPixelUnpack(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.l1.STREAM_DRAW,i=arguments.length>2?arguments[2]:void 0;if(t.type!==o.zO.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new c(t,a.w0.PIXEL_UNPACK_BUFFER,e,i)}constructor(t,e,i,r){this._context=t,this.bufferType=e,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(a._g.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,h.zu)(this._context.gl),r&&this.setData(r)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteLength(){return this.bufferType===a.w0.ELEMENT_ARRAY_BUFFER?this._indexType===a.g.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===a.w0.ELEMENT_ARRAY_BUFFER||this.bufferType===a.w0.ARRAY_BUFFER}dispose(){var t;null!==(t=this._context)&&void 0!==t&&t.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(a._g.BufferObject,this),this._context=null):this._glName&&l.warn("Leaked WebGL buffer object")}setSize(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(t<=0&&l.error("Buffer size needs to be positive!"),this.bufferType===a.w0.ELEMENT_ARRAY_BUFFER&&null!=e)switch(this._indexType=e,e){case a.g.UNSIGNED_SHORT:t*=2;break;case a.g.UNSIGNED_INT:t*=4}this._setBufferData(t)}setData(t){if(!t)return;let e=t.byteLength;this.bufferType===a.w0.ELEMENT_ARRAY_BUFFER&&((0,s.Uc)(t)&&(e/=2,this._indexType=a.g.UNSIGNED_SHORT),(0,s.ZY)(t)&&(e/=4,this._indexType=a.g.UNSIGNED_INT)),this._setBufferData(e,t)}_setBufferData(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._size=t;const i=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const r=this._context.gl;null!=e?r.bufferData(this.bufferType,e,this.usage):r.bufferData(this.bufferType,t,this.usage),(0,h.zu)(r),this._isVAOAware&&this._context.bindVAO(i)}setSubData(t,e,i,r){if(!t)return;(e<0||e*t.BYTES_PER_ELEMENT>=this.byteLength)&&l.error("offset is out of range!"),i>=r&&l.error("end must be bigger than start!"),(e+(r-i))*t.BYTES_PER_ELEMENT>this.byteLength&&l.error("An attempt to write beyond the end of the buffer!");const n=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const s=this._context.gl;if(this._context.type===o.zO.WEBGL2)s.bufferSubData(this.bufferType,e*t.BYTES_PER_ELEMENT,t,i,r-i);else{const n=0===i&&r===t.length?t:t.subarray(i,r);s.bufferSubData(this.bufferType,e*t.BYTES_PER_ELEMENT,n)}(0,h.zu)(s),this._isVAOAware&&this._context.bindVAO(n)}getSubData(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;if(this._context.type!==o.zO.WEBGL2)return void l.error("Get buffer subdata is supported in WebGL2 only!");if(i<0||n<0)return void l.error("Problem getting subdata: offset and length were less than zero!");const s=function(t){return(0,r.zG)(t)}(t)?t.BYTES_PER_ELEMENT:1;if(s*((null!==i&&void 0!==i?i:0)+(null!==n&&void 0!==n?n:0))>t.byteLength)return void l.error("Problem getting subdata: offset and length exceeded destination size!");e+s*(null!==n&&void 0!==n?n:0)>this.byteLength&&l.warn("Potential problem getting subdata: requested data exceeds buffer size!");const h=this._context.gl;this._context.bindBuffer(this,a.w0.COPY_READ_BUFFER),h.getBufferSubData(a.w0.COPY_READ_BUFFER,e,t,i,n),this._context.unbindBuffer(a.w0.COPY_READ_BUFFER)}async getSubDataAsync(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;this._context.type===o.zO.WEBGL2?(await this._context.clientWaitAsync(),this.getSubData(t,e,i,r)):l.error("Get buffer subdata is supported in WebGL2 only!")}}},53634:(t,e,i)=>{i.d(e,{X:()=>f});i(93169);var r=i(32718),n=i(92026),s=i(44070),h=i(37825),o=i(83826),a=i(8548),l=i(46888),c=i(15880),u=i(57808);const _=r.Z.getLogger("esri.views.webgl.FramebufferObject");class f{constructor(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this._context=t,this._glName=null,this._colorAttachments=new Map,this._depthStencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,t.instanceCounter.increment(a._g.FramebufferObject,this);const r=d(e)?e:new u.x(this._context,e);if(this._colorAttachments.set(a.VY.COLOR_ATTACHMENT0,r),this._validateTextureDescriptor(r.descriptor),this._validateColorAttachmentPoint(a.VY.COLOR_ATTACHMENT0),null!=i)if(function(t){return d(t)||null!=t&&"pixelFormat"in t}(i))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),this._depthStencilTexture=d(i)?i:new u.x(this._context,i),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{const t=function(t){return null!=t&&"type"in t&&t.type===l.B.RenderBuffer}(i)?i:new c.r(this._context,i);this._depthStencilBuffer=t,this._validateRenderBufferDescriptor(t.descriptor)}}dispose(){var t,e;if(0===this._colorAttachments.size&&!this._glName)return;const i=this._context.getBoundFramebufferObject();this._colorAttachments.forEach(((t,e)=>{var i;return null===(i=this.detachColorTexture(e))||void 0===i?void 0:i.dispose()})),null!==(t=this.detachDepthStencilBuffer())&&void 0!==t&&t.dispose(),null!==(e=this.detachDepthStencilTexture())&&void 0!==e&&e.dispose(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(i),this._context.instanceCounter.decrement(a._g.FramebufferObject,this)}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(a.VY.COLOR_ATTACHMENT0)}get depthStencil(){return this._depthStencilTexture||this._depthStencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){var t,e;const i=this._colorAttachments.get(a.VY.COLOR_ATTACHMENT0);return null!==(t=null===i||void 0===i||null===(e=i.descriptor)||void 0===e?void 0:e.width)&&void 0!==t?t:0}get height(){var t,e;const i=this._colorAttachments.get(a.VY.COLOR_ATTACHMENT0);return null!==(t=null===i||void 0===i||null===(e=i.descriptor)||void 0===e?void 0:e.height)&&void 0!==t?t:0}get gpuMemoryUsage(){var t,e;return[...this._colorAttachments].reduce(((t,e)=>{let[i,r]=e;return t+r.gpuMemoryUsage}),null!==(t=null===(e=this.depthStencil)||void 0===e?void 0:e.gpuMemoryUsage)&&void 0!==t?t:0)}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&d(e)?e:null}get colorAttachments(){return[...this._colorAttachments.keys()]}attachColorTexture(t){var e;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.VY.COLOR_ATTACHMENT0;if(!t)return;this._validateColorAttachmentPoint(i);const r=t.descriptor;this._validateTextureDescriptor(r),null!==(e=this.detachColorTexture(i))&&void 0!==e&&e.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,i)),this._colorAttachments.set(i,t)}detachColorTexture(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.VY.COLOR_ATTACHMENT0;const e=this._colorAttachments.get(t);if(e){if(this._initialized){const e=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t),this._context.bindFramebuffer(e)}return this._colorAttachments.delete(t),e}}setColorTextureTarget(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.VY.COLOR_ATTACHMENT0;const i=this._colorAttachments.get(e);i&&this._framebufferTexture2D(i.glName,e,t)}attachDepthStencil(t){if(t)switch(t.type){case l.B.Texture:return this._attachDepthStencilTexture(t);case l.B.RenderBuffer:return this._attachDepthStencilBuffer(t)}}_attachDepthStencilTexture(t){var e;if(null==t)return;const i=t.descriptor;i.pixelFormat!==a.VI.DEPTH_STENCIL&&i.pixelFormat!==a.VI.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),i.dataType!==a.Br.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDescriptor(i),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,a.Lu)),null!==(e=this._depthStencilTexture)&&void 0!==e&&e.dispose(),this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;return t&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,a.Lu)),this._depthStencilTexture=null,t}_attachDepthStencilBuffer(t){if(null==t)return;const e=t.descriptor;if(this._validateRenderBufferDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl,r=this._getGLAttachmentPoint(e);i.framebufferRenderbuffer(a.qi.FRAMEBUFFER,r,i.RENDERBUFFER,t.glName)}this._depthStencilBuffer=t}detachDepthStencilBuffer(){const t=this._depthStencilBuffer;if(t&&this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl,i=this._getGLAttachmentPoint(t.descriptor);e.framebufferRenderbuffer(a.qi.FRAMEBUFFER,i,e.RENDERBUFFER,null)}return this._depthStencilBuffer=null,t}copyToTexture(t,e,i,r,n,s,h){(t<0||e<0||n<0||s<0)&&console.error("Offsets cannot be negative!"),(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!");const o=h.descriptor;h.descriptor.target!==a.No.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(null==(null===o||void 0===o?void 0:o.width)||null==(null===o||void 0===o?void 0:o.height)||t+i>this.width||e+r>this.height||n+i>o.width||s+r>o.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const l=this._context,c=l.bindTexture(h,u.x.TEXTURE_UNIT_FOR_UPDATES);l.setActiveTexture(u.x.TEXTURE_UNIT_FOR_UPDATES),l.bindFramebuffer(this),l.gl.copyTexSubImage2D(a.No.TEXTURE_2D,0,n,s,t,e,i,r),l.bindTexture(c,u.x.TEXTURE_UNIT_FOR_UPDATES)}readPixels(t,e,i,r,n,s,h){(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!"),h||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,e,i,r,n,s,h)}async readPixelsAsync(t,e,i,r,n,l,c){if(this._context.type!==o.zO.WEBGL2)return(0,h.hZ)()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(t,e,i,r,n,l,c);const u=this._context.gl,_=s.f.createPixelPack(this._context,a.l1.STREAM_READ,c.byteLength);this._context.bindBuffer(_),this._context.bindFramebuffer(this),u.readPixels(t,e,i,r,n,l,0),this._context.unbindBuffer(a.w0.PIXEL_PACK_BUFFER),await _.getSubDataAsync(c),_.dispose()}resize(t,e){var i,r;if(this.width===t&&this.height===e)return;const n={width:t,height:e};T(n,this._context.parameters.maxTextureSize),this._colorAttachments.forEach((t=>t.resize(n.width,n.height))),null!==(i=this._depthStencilTexture)&&void 0!==i&&i.resize(n.width,n.height),this._initialized&&(T(n,this._context.parameters.maxRenderbufferSize),null!==(r=this._depthStencilBuffer)&&void 0!==r&&r.resize(n.width,n.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}initializeAndBind(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.qi.FRAMEBUFFER;const e=this._context.gl;if(this._initialized)return void e.bindFramebuffer(t,this.glName);this._glName&&e.deleteFramebuffer(this._glName);const i=e.createFramebuffer();if(e.bindFramebuffer(t,i),this._colorAttachments.forEach(((e,i)=>this._framebufferTexture2D(e.glName,i,g(e),t))),this._depthStencilBuffer){const i=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);e.framebufferRenderbuffer(t,i,e.RENDERBUFFER,this._depthStencilBuffer.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,e.DEPTH_STENCIL_ATTACHMENT,g(this._depthStencilTexture),t);(0,h.hZ)()&&e.checkFramebufferStatus(t)!==e.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=i,this._initialized=!0}_framebufferTexture2D(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.VY.COLOR_ATTACHMENT0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.No.TEXTURE_2D,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a.qi.FRAMEBUFFER,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this._context.gl.framebufferTexture2D(r,e,i,t,n)}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthStencilBuffer){if(this._initialized){this._context.bindFramebuffer(this);const e=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);t.framebufferRenderbuffer(a.qi.FRAMEBUFFER,e,t.RENDERBUFFER,null)}this._depthStencilBuffer=(0,n.M2)(this._depthStencilBuffer)}this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=(0,n.M2)(this._depthStencilTexture))}_validateTextureDescriptor(t){t.target!==a.No.TEXTURE_2D&&t.target!==a.No.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),T(t,this._context.parameters.maxTextureSize),this._validateBufferDimensions(t)}_validateRenderBufferDescriptor(t){T(t,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(t)}_validateBufferDimensions(t){t.width<=0&&(t.width=this.width),t.height<=0&&(t.height=this.height),this.width>0&&this.height>0&&(this.width===t.width&&this.height===t.height||console.error("Attachment size must match framebuffer size!"))}_getGLAttachmentPoint(t){switch(t.internalFormat){case a.Tg.DEPTH_COMPONENT16:case a.Tg.DEPTH_COMPONENT24:case a.Tg.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case a.Tg.DEPTH24_STENCIL8:case a.Tg.DEPTH32F_STENCIL8:case a.Tg.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case a.Tg.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(t){if(-1===f._MAX_COLOR_ATTACHMENTS){const t=this._context.capabilities.drawBuffers;if(t){const e=this._context.gl;f._MAX_COLOR_ATTACHMENTS=e.getParameter(t.MAX_COLOR_ATTACHMENTS)}else f._MAX_COLOR_ATTACHMENTS=1}const e=t-a.VY.COLOR_ATTACHMENT0;e+1>f._MAX_COLOR_ATTACHMENTS&&r.Z.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject","illegal attachment point for color attachment: ".concat(e+1,". Implementation supports up to ").concat(f._MAX_COLOR_ATTACHMENTS," color attachments"))}}function d(t){return null!=t&&"type"in t&&t.type===l.B.Texture}function T(t,e){const i=Math.max(t.width,t.height);if(i>e){_.warn("Resizing FBO attachment size ".concat(t.width,"x").concat(t.height," to device limit ").concat(e));const r=e/i;return t.width=Math.round(t.width*r),t.height=Math.round(t.height*r),!1}return!0}function g(t){return t.descriptor.target===a.No.TEXTURE_CUBE_MAP?a.No.TEXTURE_CUBE_MAP_POSITIVE_X:a.No.TEXTURE_2D}f._MAX_COLOR_ATTACHMENTS=-1},15880:(t,e,i)=>{i.d(e,{r:()=>o});var r=i(83826),n=i(8548),s=i(46888),h=i(3479);class o{constructor(t,e){this._context=t,this._descriptor=e,this.type=s.B.RenderBuffer,this._context.instanceCounter.increment(n._g.Renderbuffer,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:h,height:o,internalFormat:a,multisampled:l}=e;if(l){if(this._context.type!==r.zO.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,a,h,o)}else i.renderbufferStorage(i.RENDERBUFFER,a,h,o)}get descriptor(){return this._descriptor}get samples(){const t=this._descriptor.samples,e=this._context.parameters.maxSamples;return t?Math.min(t,e):e}get gpuMemoryUsage(){return(0,h.G)(this._descriptor)}resize(t,e){const i=this._descriptor;if(i.width===t&&i.height===e)return;i.width=t,i.height=e;const r=this._context.gl;this._context.bindRenderbuffer(this),i.multisampled?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,i.internalFormat,i.width,i.height):r.renderbufferStorage(r.RENDERBUFFER,i.internalFormat,i.width,i.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(n._g.Renderbuffer,this),this._context=null)}}},3479:(t,e,i)=>{i.d(e,{G:()=>s,Y:()=>n});var r=i(3384);class n{constructor(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;this.internalFormat=t,this.width=e,this.height=i,this.multisampled=!1,this.samples=1}}function s(t){return t.width<=0||t.height<=0||null==t.internalFormat?0:t.width*t.height*(0,r.RG)(t.internalFormat)}}}]);
//# sourceMappingURL=3634.73918cc1.chunk.js.map
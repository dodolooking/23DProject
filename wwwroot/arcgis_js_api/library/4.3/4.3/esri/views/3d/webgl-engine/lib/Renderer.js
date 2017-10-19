// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ./IntervalUtilities ./ModelDirtyTypesTs ./Float32ArrayList ./InstanceBufferData ./Lighting ../materials/internal/SimpleGLMaterial ./LinearDepthTextureHelper ./NormalTextureHelper ./HighlightTextureHelper ./RenderPass ./RenderSlot ./RenderContext ./ExternalRendererContainer ./StencilRenderingHelper ./BitSet ./Util ./gl-matrix ./ComponentUtils ../../../webgl/Texture ../../../webgl/VertexArrayObject ../../../webgl/BufferObject ../../../webgl/Util ./FxaaRenderPass ./SmaaRenderPass ../../../webgl/enums ./DefaultVertexAttributeLocations".split(" "),
function(T,pa,U,qa,V,ba,ca,W,da,ea,fa,B,n,ga,ha,ia,ja,E,O,P,ka,Q,R,F,la,ma,ra,S){var D=E.assert,X=E.array2object,Y=E.objectEmpty,J=E.getFirstObjectValue,M=E.setMatrixTranslation3;T=O.vec2d;var Z=O.vec4d,C=O.mat4d,na=E.VertexAttrConstants,N=C.identity();E=function(){function e(a,b,d,c,g){this._lighting=new ca;this._mat2dataMerged={};this._mat2dataInstanced={};this._renderOrder=[];this._externalRenderers=new ha;this._renderContext=new ga;this._framesRendered=0;this._isRendering=!1;this._pixelRatio=
1;this._threshold=1535;this._needsRender=!0;this._stats=new oa;this.ssaoEnabled=!1;this.renderOptions={antialiasing:"smaa",earlyOcclusionPixelDraw:!1};this._programRep=a;this._materialRep=b;this._textureRep=d;this._orderedRendering=g;this._rctx=c;b=c.gl;this._fxaaPass=new la(c);this._smaaPass=new ma(c);this._selectionMaterial=new W(a,Z.createFrom(.1,.2,.9,.4),b.EQUAL);this._selectionMaterialLines=new W(a,Z.createFrom(.1,.2,.9,.4),b.EQUAL,b.LINES);this._renderContext.lightingData=this._lighting.get();
c.setDepthTestEnabled(!0);c.setFaceCullingEnabled(!0);c.setBlendingEnabled(!1);c.setBlendFunctionSeparate(770,771,1,771);this._bindParameters={view:null,proj:null,viewInvTransp:null,nearFar:null,lightingData:null,viewport:null,framebufferTex:null,shadowMap:null,origin:null,pixelRatio:null,instanceParameters:null,depthFBO:null,normalFBO:null,extensions:{angleInstancedArrays:c.extensions.angleInstancedArrays}};this._linearDepthTextureHelper=new da(c);this._normalTextureHelper=new ea(c);this._highlightTextureHelper=
new fa(c);this._stencilRenderingHelper=new ia(c);this._initializeFramebufferTexture()}e.prototype._initializeFramebufferTexture=function(){var a=this._rctx.gl,a=this._rctx.contextAttributes.alpha?a.RGBA:a.RGB,b=new ka(this._rctx,{target:3553,pixelFormat:a,dataType:5121,samplingMode:9728,wrapMode:33071,width:4,height:4});this._framebuffer={format:a,texture:b,copied:!1}};e.prototype.dispose=function(){for(var a in this._mat2dataMerged){this._releaseMaterials(a);var b=this._mat2dataMerged[a],d;for(d in b.origin2data)b.origin2data[d].vao.dispose(!0)}this._mat2dataMerged=
null;for(a in this._mat2dataInstanced)for(d in this._releaseMaterials(a),b=this._mat2dataInstanced[a],b.origin2data)b.origin2data[d].vao.dispose(!0);this._mat2dataInstanced=null;this._framebuffer.texture.dispose();this._framebuffer.texture=null;this._linearDepthTextureHelper.getEnableState()&&this._linearDepthTextureHelper.disable();this._normalTextureHelper.getEnableState()&&this._normalTextureHelper.disable();this._highlightTextureHelper.getEnableState()&&this._highlightTextureHelper.setEnableState(!1);
this._stencilRenderingHelper.getEnableState()&&this._stencilRenderingHelper.setEnableState(!1)};e.prototype.setLightingData=function(a){this._lighting.set(a);this._needsRender=!0};e.prototype.getLightingData=function(){return this._lighting.get()};e.prototype.setPixelRatio=function(a){this._pixelRatio=a;this._needsRender=!0};e.prototype.getPixelRatio=function(){return this._pixelRatio};e.prototype.addExternalRenderer=function(a,b){this._externalRenderers.addRenderer(a,b);return!0};e.prototype.removeExternalRenderer=
function(a){this._externalRenderers.removeRenderer(a);return!0};e.prototype.getExternalRenderers=function(){return this._externalRenderers};e.prototype.resetNeedsRender=function(){this._needsRender=!1;this._externalRenderers.resetNeedsRender()};e.prototype.needsRender=function(){return this._needsRender||this._externalRenderers.needsRender()};e.prototype.getCombinedStats=function(){this._stats.VBOallocatedSize=0;this._stats.VBOoptimalSize=0;this._stats.VBOusedSize=0;for(var a in this._mat2dataInstanced){var b=
this._mat2dataInstanced[a],d;for(d in b.origin2data){var c=b.origin2data[d];this._stats.VBOallocatedSize+=c.buffer.getArray().length;this._stats.VBOusedSize+=c.buffer.getSize();this._stats.VBOoptimalSize+=c.optimalCount}}for(a in this._mat2dataMerged)for(d in b=this._mat2dataMerged[a],b.origin2data)c=b.origin2data[d],this._stats.VBOallocatedSize+=c.buffer.getArray().length,this._stats.VBOusedSize+=c.buffer.getSize(),this._stats.VBOoptimalSize+=c.optimalCount;this._stats.VBOallocatedSize*=.00390625;
this._stats.VBOusedSize*=.00390625;this._stats.VBOoptimalSize*=.00390625;return this._stats};e.prototype.setSelectionObject=function(a,b){a?(Array.isArray(a)?this._selectionIndices=this._name2indices(X(a)):this._selectionIndices=this._name2indices(X([a])),this._selectionFaceIndexRange=void 0,null!=b&&1===b.length&&(this._selectionFaceIndexRange=[[3*b[0][0],3*b[0][1]]])):this._selectionFaceIndexRange=this._selectionIndices=void 0;this._needsRender=!0};e.prototype.renderGeometrySlots=function(a){this._externalRenderers.render(n.INTERNAL_MATERIAL,
a);this._renderInternalSlot(n.STENCIL_MATERIAL,a);this._externalRenderers.render(n.OPAQUE_TERRAIN,a);this._renderInternalSlot(n.OPAQUE_MATERIAL,a);this._externalRenderers.render(n.OPAQUE_EXTERNAL,a);a.ssaoHelper&&a.ssaoHelper.bindAll(this._programRep);this._renderInternalSlot(n.TRANSPARENT_MATERIAL,a);this.renderOptions.earlyOcclusionPixelDraw&&this._renderInternalSlot(n.OCCLUSION_PIXELS,this._renderContext);this._externalRenderers.render(n.TRANSPARENT_EXTERNAL,a);a.ssaoHelper&&a.ssaoHelper.bindAll(this._programRep);
this._externalRenderers.render(n.TRANSPARENT_TERRAIN,a)};e.prototype._renderHighlights=function(a,b,d,c){var g=!!c&&c.getEnableState()&&void 0!==this._selectionIndices;this._highlightTextureHelper.setEnableState(g);g&&(this._highlightTextureHelper.setupFBOs(a),this._highlightTextureHelper.prepareHighlightPass(),this.renderGeometryPass(B.MATERIAL_HIGHLIGHT,a,b,this._selectionIndices,this._selectionFaceIndexRange),this._rctx.clear(this._rctx.gl.DEPTH_BUFFER_BIT),this._renderInternalSlot(n.OVERLAY,this._renderContext),
this._highlightTextureHelper.finish(d),b=this._highlightTextureHelper.getHighlightFBO(),c.render(a,d,b))};e.prototype._renderUnordered=function(a,b,d,c,g,f,l){var e=this._rctx;this._isRendering=!0;this._stats.reset();this._framebuffer.copied=!1;this._updateGlobalUniforms(a.projectionMatrix);this._renderContext.pass=B.MATERIAL;this._renderContext.camera=a;this._renderContext.shadowMap=d;this._renderContext.ssaoHelper=c;this._renderContext.offscreenRenderingHelper=f;this._renderContext.stencilRenderingHelper=
this._stencilRenderingHelper;this._renderContext.depth=this._linearDepthTextureHelper.getDepthFBO();this._renderContext.normals=this._normalTextureHelper.getNormalFBO();this._renderContext.highlight=this._highlightTextureHelper.getHighlightFBO();this._renderContext.visibleContent=b;this._renderContext.filterContent=null;this._renderContext.filterFaceRange=null;this._renderContext.options=this.renderOptions;this._renderContext.rctx=this._rctx;f.setEnableState(!0);f.initializeFrame(a);this._externalRenderers.render(n.BACKGROUND,
this._renderContext);this.renderGeometrySlots(this._renderContext);this._externalRenderers.render(n.POSTPROCESSING_ATMOSPHERE,this._renderContext);switch(this.renderOptions.antialiasing){case "none":d=a.viewport;d=C.ortho(d[0],d[2],d[1],d[3],-1,1);f.drawQuad(d);this._fxaaPass.disable();this._smaaPass.disable();break;case "fxaa":this._smaaPass.disable();this._fxaaPass.render({colorTexture:f.getColorTexture()},null);break;case "smaa":this._fxaaPass.disable(),this._smaaPass.render({colorTexture:f.getColorTexture()},
null)}this.renderOptions.earlyOcclusionPixelDraw||(f.bindFramebuffer(),this._renderInternalSlot(n.OCCLUSION_PIXELS,this._renderContext));e.bindFramebuffer(null);this._renderContext.framebufferTex=f.getColorTexture();this._renderInternalSlot(n.OVERLAY,this._renderContext);this._renderHighlights(a,b,g,l);this._framesRendered++;this._isRendering=!1};e.prototype._renderOrdered=function(a,b){this._isRendering=!0;this._stats.reset();this._framebuffer.copied=!1;this._updateGlobalUniforms(a.projectionMatrix);
this._bindParameters.view=a.viewMatrix;this._bindParameters.proj=a.projectionMatrix;this._bindParameters.viewInvTransp=a.viewInverseTransposeMatrix;G[0]=a.near;G[1]=a.far;this._bindParameters.nearFar=G;this._bindParameters.lightingData=this._lighting.get();this._bindParameters.viewport=a.fullViewport;this._bindParameters.framebufferTex=this._framebuffer.texture;this._bindParameters.pixelRatio=this._pixelRatio;this._bindParameters.instanceParameters=void 0;this._bindParameters.depthFBO=this._linearDepthTextureHelper.getDepthFBO();
this._bindParameters.normalFBO=this._normalTextureHelper.getNormalFBO();a=null;for(var d=0;d<this._renderOrder.length;d++){var c=this._renderOrder[d][1];if(c.instanced){var g=c.instanced,f=g[B.MATERIAL];!f||f.isVisible&&!f.isVisible()||(this._renderInternalInstanced(g,f,this._bindParameters,Infinity,b,null,null,!1),a=null)}c.merged&&(g=c.merged,!(f=g[B.MATERIAL])||f.isVisible&&!f.isVisible()||(c=f.getProgram(),c!==a&&(c.setUniformMatrix4fv("model",N),c.hasUniform("modelNormal")&&c.setUniformMatrix4fv("modelNormal",
N)),a=c,this._renderInternalMerged(g,f,this._bindParameters,Infinity)))}this._framesRendered++;this._isRendering=!1};e.prototype.render=function(a,b,d,c,g,f,l){this._orderedRendering?this._renderOrdered(a,b):this._renderUnordered(a,b,d,c,g,l,f)};e.prototype.renderAuxiliaryBuffers=function(a,b,d,c,g,f){f=this.ssaoEnabled;this._linearDepthTextureHelper.setEnableState(f);f&&(this._linearDepthTextureHelper.setupFBOs(a),this._linearDepthTextureHelper.prepareDepthPass(),this.renderGeometryPass(B.MATERIAL_DEPTH,
a,b,void 0,void 0,d,c),this._linearDepthTextureHelper.finish(g));this._normalTextureHelper.setEnableState(this.ssaoEnabled);this.ssaoEnabled&&(this._normalTextureHelper.setupFBOs(a),this._normalTextureHelper.prepareNormalPass(),this.renderGeometryPass(B.MATERIAL_NORMAL,a,b,void 0,void 0,d,c),this._normalTextureHelper.finish(g));this.ssaoEnabled&&c.computeSSAO(a,g,this._linearDepthTextureHelper.getDepthFBO(),this._normalTextureHelper.getNormalFBO());c.bindAll(this._programRep)};e.prototype.renderGeometryPass=
function(a,b,d,c,g,f,l){this._isRendering=!0;this._updateGlobalUniforms(b.projectionMatrix);this._renderContext.pass=a;this._renderContext.camera=b;this._renderContext.shadowMap=f;this._renderContext.ssaoHelper=l;this._renderContext.depth=this._linearDepthTextureHelper.getDepthFBO();this._renderContext.normals=this._normalTextureHelper.getNormalFBO();this._renderContext.visibleContent=d;this._renderContext.filterContent=c;this._renderContext.filterFaceRange=g;this._renderContext.rctx=this._rctx;this.renderGeometrySlots(this._renderContext);
this._isRendering=!1};e.prototype.renderSelection=function(a){this._isRendering=!0;for(var b=0;b<n.MAX_SLOTS;++b)this._renderInternalSlot(b,a);this._isRendering=!1};e.prototype._renderInternalSlot=function(a,b){this._bindParameters.view=b.camera.viewMatrix;this._bindParameters.proj=b.camera.projectionMatrix;this._bindParameters.viewInvTransp=b.camera.viewInverseTransposeMatrix;this._bindParameters.cameraAboveGround=b.camera.aboveGround;G[0]=b.camera.near;G[1]=b.camera.far;this._bindParameters.nearFar=
G;this._bindParameters.lightingData=this._lighting.get();this._bindParameters.viewport=b.camera.fullViewport;this._bindParameters.framebufferTex=this._renderContext.offscreenRenderingHelper?this._renderContext.offscreenRenderingHelper.getColorTexture():this._framebuffer.texture;this._bindParameters.shadowMap=b.shadowMap;this._bindParameters.pixelRatio=this._pixelRatio;this._bindParameters.instanceParameters=void 0;this._bindParameters.depthFBO=this._linearDepthTextureHelper.getDepthFBO();for(var d in this._mat2dataInstanced){var c=
this._mat2dataInstanced[d],g=c[b.pass];g&&g.beginSlot(a)&&(!g.isVisible||g.isVisible())&&this._renderInternalInstanced(c,g,this._bindParameters,a,b.visibleContent,b.filterContent,b.filterFaceRange,!1)}if(b.filterContent)for(d in this._mat2dataMerged)c=this._mat2dataMerged[d],(g=c[b.pass])&&g.beginSlot(a)&&(!g.isVisible||g.isVisible())&&this._renderInternalInstanced(c,g,this._bindParameters,a,null,b.filterContent,b.filterFaceRange,!0);else{for(var c=this._programRep.getProgramsUsingUniform("model"),
g=this._programRep.getProgramsUsingUniform("modelNormal"),f=0;f<c.length;f++){var l=c[f];l.setUniformMatrix4fv("model",N);-1<g.indexOf(l)&&l.setUniformMatrix4fv("modelNormal",N)}for(d in this._mat2dataMerged)c=this._mat2dataMerged[d],(g=c[b.pass])&&g.beginSlot(a)&&(!g.isVisible||g.isVisible())&&this._renderInternalMerged(c,g,this._bindParameters,a)}this._stencilRenderingHelper.getEnableState()&&a===n.STENCIL_MATERIAL&&this._stencilRenderingHelper.prepareStencilDisabledPass()};e.prototype._renderInternalInstanced=
function(a,b,d,c,g,f,l,e){var h=this._rctx,k=h.gl,L=!1,x=b.getDrawMode(h),q=this._bindParameters.extensions.angleInstancedArrays,r;for(r in a.origin2data){var A=a.origin2data[r];d.origin=A.origin;c===n.STENCIL_MATERIAL&&(this._stencilRenderingHelper.setEnableState(!0),this._stencilRenderingHelper.prepareStencilWritePass());var w=!1;if(b.instanced)for(var v in A.perGeometryDataInfo){var t=A.perGeometryDataInfo[v];L||(b.bind(h,d),L=!0);h.bindVAO(t.vao);var u=b.getProgram();F.assertCompatibleVertexAttributeLocations(t.vao,
u);w||(b.bindView(h,d),w=!0);var u=t.to-t.from,m=t.refCount;x===k.TRIANGLES&&(this._stats.trianglesRendered+=m*u/3);q.drawArraysInstancedANGLE(x,t.from,u,m);this._stats.drawCallsAngleInstanced++;this._stats.instancesDrawnAngle+=m}else{var t=A.instances,p;for(p in t){var u=t[p],m=u.idx,y=u.displayedIndexRange;l&&(y=l);y&&0===y.length||g&&!g.get(m)||f&&!f.get(m)||(L||(b.bind(h,d),L=!0),w||(h.bindVAO(A.vao),b.bindView(h,d),w=!0),e||b.bindInstance(h,u),this._stats.drawCallsInstanced++,x===k.TRIANGLES&&
(this._stats.trianglesRendered+=(u.to-u.from)/3),y?this._drawArraysFaceRange(y,u.from,x):h.drawArrays(x,u.from,u.to-u.from))}}}h.bindVAO(null);L&&b.release(h,d)};e.prototype._drawArraysFaceRange=function(a,b,d){for(var c=this._rctx,g=0;g<a.length;g++){var f=a[g];c.drawArrays(d,f[0]+b,f[1]-f[0]+1)}this._stats.drawCallsFragmented+=a.length-1};e.prototype._renderInternalMerged=function(a,b,d,c){var g=this._rctx,f=g.gl,l=!1,e;for(e in a.origin2data){var h=a.origin2data[e];d.origin=h.origin;c===n.STENCIL_MATERIAL&&
(this._stencilRenderingHelper.setEnableState(!0),this._stencilRenderingHelper.prepareStencilWritePass());if(!h.displayedIndexRange||0!==h.displayedIndexRange.length){l||(b.bind(g,d),l=!0);var k=b.getProgram();g.bindVAO(h.vao);F.assertCompatibleVertexAttributeLocations(h.vao,k);b.bindView(g,d);this._stats.drawCallsMerged++;k=b.getDrawMode(g);k===f.TRIANGLES&&(this._stats.trianglesRendered+=h.vao.vertexBuffers.geometry.size/3);h.displayedIndexRange?this._drawArraysFaceRange(h.displayedIndexRange,0,
k):g.drawArrays(k,0,F.vertexCount(h.vao,"geometry"))}}l&&b.release(g,d)};e.prototype._updateGlobalUniforms=function(a){for(var b=this._programRep.getProgramsUsingUniform("proj"),d=0;d<b.length;d++)b[d].setUniformMatrix4fv("proj",a);if(this._lighting)for(b=this._programRep.getProgramsUsingUniform("lightDirection"),d=0;d<b.length;d++)this._lighting.setUniforms(b[d])};e.prototype.print=function(){var a=Object.keys(this._mat2dataMerged).length,b=Object.keys(this._mat2dataInstanced).length;console.log("number of materials (merged/instanced): "+
a+"/"+b);var a=0,d;for(d in this._mat2dataMerged){var b=this._mat2dataMerged[d],c;for(c in b.origin2data)a+=Object.keys(b.origin2data[c].instances).length}var g=0;for(d in this._mat2dataInstanced)for(c in b=this._mat2dataInstanced[d],b.origin2data)g+=Object.keys(b.origin2data[c].instances).length;console.log("number of instances (merged/instanced): "+a+"/"+g)};e.prototype.isEmpty=function(){for(var a in this._mat2dataInstanced){var b=this._mat2dataInstanced[a],d;for(d in b.origin2data)if(!Y(b.origin2data[d].instances))return!1}for(a in this._mat2dataMerged)for(d in b=
this._mat2dataMerged[a],b.origin2data)if(!Y(b.origin2data[d].instances))return!1;return!0};e.prototype.modify=function(a,b,d,c){this._isRendering&&console.warn("Renderer.modify called while rendering");var g=[],f=[];this._mergedOrInstanced(a,g,f);a=[];var l=[];this._mergedOrInstanced(b,a,l);b={};d&&this._performUpdates(d,b);d=[];this._modifyMerged(g,a,d,b);this._modifyInstanced(f,l,d);this._updateMergedFaceranges(b);this._releaseMaterials(d);this._modifyMaterials(c);this._needsRender=!0};e.prototype._isInstanced=
function(a){var b=!1,d=J(a.data.faces.indices).length,b=(b=(b=b||!1===a.material.canBeMerged)||a.material.instanced)||a.material.isBackdrop;return a.singleUse?b:b=b||d>this._threshold};e.prototype._mergedOrInstanced=function(a,b,d){for(var c=0;c<a.length;++c)1>J(a[c].data.faces.indices).length||(this._isInstanced(a[c])?d.push(a[c]):b.push(a[c]))};e.prototype._performUpdates=function(a,b){for(var d=0;d<a.length;d++){var c=a[d],g=c.renderGeometry,f=this._isInstanced(g),c=c.updateType;c&2&&this._updateFaceranges(g,
f,b);c&4||!f&&c&16?this._updateVertexAttributes(g,f):f&&c&16?this._updateInstanceTransformation(g,f):c&8&&this._updateColorAttributes(g)}};e.prototype._updateFaceranges=function(a,b,d){var c=a.material.getId(),g=a.origin.id,f=(b?this._mat2dataInstanced:this._mat2dataMerged)[c].origin2data[g],l=f.instances[a.uniqueName];l&&(l.displayedIndexRange=P.generateVisibleIndexRanges(a.instanceParameters.componentVisibilities,a.componentOffsets),b||(d[this._modifiedMergedFacerangesKey(c,g)]=f))};e.prototype._updateMergedFaceranges=
function(a){for(var b in a){var d=a[b];d.displayedIndexRange=[];var c=d.instances,g=!0,f;for(f in c){var l=c[f];l.displayedIndexRange?(d.displayedIndexRange.push.apply(d.displayedIndexRange,U.offsetIntervals(l.displayedIndexRange,l.from)),g=!1):d.displayedIndexRange.push([l.from,l.to-1])}d.displayedIndexRange=g?null:U.mergeIntervals(d.displayedIndexRange)}};e.prototype._updateVertexAttributes=function(a,b){var d=a.material,c=d.getId(),c=(b?this._mat2dataInstanced:this._mat2dataMerged)[c].origin2data[a.origin.id],
g=c.instances[a.uniqueName],f,l;b||(f=a.origin.vec3,M(H,-f[0],-f[1],-f[2]),C.multiply(H,a.transformation,I),C.inverse(I,K),C.transpose(K),f=I,l=K);b=F.getStride(d.getVertexBufferLayout());var e=b/4;D(g.from+d.getOutputAmount(J(a.data.faces.indices).length)/e===g.to,"material VBO layout has changed");d.fillInterleaved(a.data,f,l,a.instanceParameters,c.buffer.getArray(),g.from*e);c.vao.vertexBuffers.geometry.setSubData(c.buffer.getArray(),g.from*b,g.from*b,g.to*b)};e.prototype._updateInstanceTransformation=
function(a,b){var d=a.origin.vec3,c=(b?this._mat2dataInstanced:this._mat2dataMerged)[a.material.getId()].origin2data[a.origin.id];b=c.instances[a.uniqueName];M(H,-d[0],-d[1],-d[2]);C.multiply(H,a.transformation,b.transformation);C.inverse(b.transformation,b.transformationNormal);C.transpose(b.transformationNormal,b.transformationNormal);d=c.perGeometryDataInfo[a.data.id];if(c=d.instanceBufferData)a=c.getSlot(a.idx),c.fill(a,0,b.transformation),c.fill(a,16,b.transformationNormal),a=4*c.getOffset(a),
b=F.getStride(d.vao.layout.instance),d.vao.vertexBuffers.instance.setSubData(c.getArray(),a,a,a+b)};e.prototype._updateColorAttributes=function(a){var b=a.material,d=b.getId(),c=a.origin.id,d=(this._isInstanced(a)?this._mat2dataInstanced:this._mat2dataMerged)[d].origin2data[c],c=d.instances[a.uniqueName],g={};g[na.COLOR]=!0;var f=F.getStride(b.getVertexBufferLayout())/4;D(c.from+b.getOutputAmount(J(a.data.faces.indices).length)/f===c.to,"material VBO layout has changed");b.fillInterleaved(a.data,
void 0,void 0,a.instanceParameters,d.buffer.getArray(),c.from*f,g);d.vao.vertexBuffers.geometry.setSubData(d.buffer.getArray(),c.from*f*4,c.from*f*4,c.to*f*4)};e.prototype._modifyMerged=function(a,b,d,c){var g=this._rctx;a=this._compMat2delta(a,b,!1);for(var f in a){b=a[f];for(var l in b){var e=b[l],h=e.optimalCount,k=e.material,z=k.getVertexBufferLayout(),x=F.getStride(z)/4,q=this._mat2dataMerged[f];if(null==q){D(0<h);var r=k.getRenderPriority(),q={origin2data:{}};q[B.MATERIAL]=this._materialRep.aquire(k);
q[B.MATERIAL_DEPTH_SHADOWMAP]=this._materialRep.aquireDepthShadowMap(k);q[B.MATERIAL_NORMAL]=this._materialRep.aquireNormal(k);q[B.MATERIAL_DEPTH]=this._materialRep.aquireDepth(k);q[B.MATERIAL_HIGHLIGHT]=this._materialRep.aquireHighlight(k);this._mat2dataMerged[f]=q;this._orderedRendering&&this._insertIntoRenderOrder(q,r,"merged")}r=q.origin2data[l];null==r&&(D(0<h),r={instances:{},vao:new Q(g,S.Default3D,{geometry:z},{geometry:R.createVertex(g,35044)}),buffer:new V(h),optimalCount:0,origin:e.origin},
q.origin2data[l]=r);if(0<h){var z=r.buffer.getSize(),A=r.buffer.getArray(),q=h<e.sparseCount/2,w=r.buffer.resize(q?h:e.sparseCount),v=e.toRemove;if(q||w){for(var z=0,t=r.buffer.getArray(),q=0;q<v.length;++q)w=r.instances[v[q].uniqueName],r.optimalCount-=(w.to-w.from)*x,delete r.instances[v[q].uniqueName];var q={},u;for(u in r.instances)w=r.instances[u],D(null==q[w.from]),q[w.from]=w;for(var m in q){var w=q[m],p=w.from*x,y=w.to*x;t.set(A.subarray(p,y),z);w.from=z/x;z+=y-p;w.to=z/x}D(z===r.optimalCount)}else for(q=
0;q<v.length;++q)w=v[q].uniqueName,D(void 0!==r.instances[w]),p=r.instances[w].from*x,y=r.instances[w].to*x,r.buffer.erase(p,y),delete r.instances[w],r.optimalCount-=y-p;M(H,-e.origin[0],-e.origin[1],-e.origin[2]);A=e.toAdd;e=!1;for(q=0;q<A.length;++q)v=A[q],p=v.data,C.multiply(H,v.transformation,I),C.inverse(I,K),C.transpose(K),w=z,k.fillInterleaved(p,I,K,v.instanceParameters,r.buffer.getArray(),z),p=k.getOutputAmount(J(p.faces.indices).length),t=w+p,D(null==r.instances[v.uniqueName]),y=P.generateVisibleIndexRanges(v.instanceParameters.componentVisibilities,
v.componentOffsets),w=new aa(v.name,w/x,t/x,y,void 0,void 0,v.idx),y&&(e=!0),r.instances[v.uniqueName]=w,r.optimalCount+=p,z+=p;D(r.optimalCount===h);h=new Float32Array(r.buffer.getArray().buffer,0,r.buffer.getSize());r.vao.vertexBuffers.geometry.setData(h);if(e||r.displayedIndexRange)c[this._modifiedMergedFacerangesKey(f,l)]=r}else D(0===h),r.vao.dispose(!0),r.vao=null,delete q.origin2data[l],0===Object.keys(q.origin2data).length&&(d.push(f),delete this._mat2dataMerged[f],this._orderedRendering&&
this._removeFromRenderOrder(q,"merged"))}}};e.prototype._modifyInstanced=function(a,b,d){a=this._compMat2delta(a,b,!0);b=this._rctx;for(var c in a){var g=a[c],f;for(f in g){var l=g[f];if(0===l.optimalCount)l=this._mat2dataInstanced[c],l.origin2data[f].vao.dispose(!0),delete l.origin2data[f],0===Object.keys(l.origin2data).length&&(d.push(c),delete this._mat2dataInstanced[c],this._orderedRendering&&this._removeFromRenderOrder(l,"instanced"));else{var e=l.material,h=this._mat2dataInstanced[c];if(null==
h){var k=e.getRenderPriority(),h={origin2data:{}};h[B.MATERIAL]=this._materialRep.aquire(e);h[B.MATERIAL_DEPTH_SHADOWMAP]=this._materialRep.aquireDepthShadowMap(e);h[B.MATERIAL_NORMAL]=this._materialRep.aquireNormal(e);h[B.MATERIAL_DEPTH]=this._materialRep.aquireDepth(e);h[B.MATERIAL_HIGHLIGHT]=this._materialRep.aquireHighlight(e);this._mat2dataInstanced[c]=h;this._orderedRendering&&this._insertIntoRenderOrder(h,k,"instanced")}var z=e.getVertexBufferLayout(),x=h[B.MATERIAL].instanced?e.getInstanceBufferLayout():
void 0,q=x&&F.findAttribute(x,"instanceColor"),r=x&&F.findAttribute(x,"instanceFeatureAttribute"),A=F.getStride(z)/4,k=h.origin2data[f];null==k&&(k={instances:{},vao:new Q(b,S.Default3D,{geometry:z},{geometry:R.createVertex(b,35044)}),buffer:new V(l.optimalCount),optimalCount:0,perGeometryDataInfo:{},origin:l.origin},h.origin2data[f]=k);var h=k.buffer.getSize(),w=k.buffer.getArray(),v=l.optimalCount<l.sparseCount/2,t=k.buffer.resize(v?l.optimalCount:l.sparseCount),u;for(u in l.perGeometryDelta){var m=
k.perGeometryDataInfo[u];if(m&&m.instanceBufferData){var p=l.perGeometryDelta[u].removeCount;0<p&&m.instanceBufferData.prepareFree(p)}}var y=l.toRemove;if(v||t){for(v=0;v<y.length;++v){t=y[v];delete k.instances[t.uniqueName];u=t.data.id;var n=m=k.perGeometryDataInfo[u];0===--n.refCount&&null==l.dataId2refCount[u]?(k.optimalCount-=(n.to-n.from)*A,delete k.perGeometryDataInfo[u]):m.instanceBufferData&&m.instanceBufferData.free(t.idx)}var h=0,v=k.buffer.getArray(),t={},E;for(E in k.perGeometryDataInfo)n=
k.perGeometryDataInfo[E],D(null==t[n.from]),t[n.from]=n;for(var G in t)n=t[G],p=n.from*A,m=n.to*A,v.set(w.subarray(p,m),h),n.from=h/A,h+=m-p,n.to=h/A;for(var I in k.instances)p=k.instances[I],p.from=k.perGeometryDataInfo[p.dataId].from,p.to=k.perGeometryDataInfo[p.dataId].to}else for(v=0;v<y.length;++v)t=y[v],delete k.instances[t.uniqueName],u=t.data.id,m=k.perGeometryDataInfo[u],0===--m.refCount&&null==l.dataId2refCount[u]?(p=m.from*A,m=m.to*A,k.buffer.erase(p,m),k.optimalCount-=m-p,delete k.perGeometryDataInfo[u]):
m.instanceBufferData&&m.instanceBufferData.free(t.idx);M(H,-l.origin[0],-l.origin[1],-l.origin[2]);for(u in l.perGeometryDelta)(m=k.perGeometryDataInfo[u])&&m.instanceBufferData&&(v=l.perGeometryDelta[u].addCount,0<v&&m.instanceBufferData.prepareAllocate(v));w=l.toAdd;for(v=0;v<w.length;++v){t=w[v];p=t.data;u=p.id;m=k.perGeometryDataInfo[u];null==m?(e.fillInterleaved(p,void 0,void 0,void 0,k.buffer.getArray(),h),y=e.getOutputAmount(J(p.faces.indices).length),p=h/A,h+=y,m=h/A,k.optimalCount+=y,m={refCount:1,
from:p,to:m,vao:null,instanceBufferData:null},x&&(p=F.getStride(x)/4,m.vao=new Q(b,S.Default3D,{geometry:z,instance:x},{geometry:k.vao.vertexBuffers.geometry,instance:R.createVertex(b,35044)}),m.instanceBufferData=new ba(p,l.perGeometryDelta[u].addCount)),k.perGeometryDataInfo[u]=m):++m.refCount;D(m.from*A<=k.buffer.getSize()&&m.to*A<=k.buffer.getSize());p=C.create();C.multiply(H,t.transformation,p);y=P.generateVisibleIndexRanges(t.instanceParameters.componentVisibilities,t.componentOffsets);p=new aa(t.name,
m.from,m.to,y,p,t.instanceParameters,t.idx,u);if(m=m.instanceBufferData)y=m.allocate(t.idx),m.fill(y,0,p.transformation),m.fill(y,16,p.transformationNormal),q&&m.fill(y,q.offset/4,t.instanceParameters.color),r&&m.fill(y,r.offset/4,t.instanceParameters.featureAttribute);k.instances[t.uniqueName]=p}D(k.optimalCount===l.optimalCount);e=new Float32Array(k.buffer.getArray().buffer,0,k.buffer.getSize());k.vao.vertexBuffers.geometry.setData(e);for(u in k.perGeometryDataInfo)if(z=k.perGeometryDataInfo[u],
z.vao&&(e=z.vao.vertexBuffers.instance))x=l.perGeometryDelta[u],0<x.addCount+x.removeCount&&(z=z.instanceBufferData.compact(),e.setData(z))}}}};e.prototype._compMat2delta=function(a,b,d){var c={};this._updateMat2delta(a,!0,d,c);this._updateMat2delta(b,!1,d,c);return c};e.prototype._updateMat2delta=function(a,b,d,c){for(var g=0;g<a.length;++g){var f=a[g],e=f.origin,n=f.material,h=n.getId(),k=d?this._mat2dataInstanced[h]:this._mat2dataMerged[h],k=k&&k.origin2data[e.id],z=c[h];null==z&&(z={},c[h]=z);
h=z[e.id];if(null==h){h={optimalCount:null==k?0:k.optimalCount,sparseCount:null==k?0:k.buffer.getSize(),material:n,toAdd:[],toRemove:[],perGeometryDelta:null,origin:e.vec3};if(d){var x={};if(void 0!==k)for(var q in k.perGeometryDataInfo)x[q]=k.perGeometryDataInfo[q].refCount;h.dataId2refCount=x;h.perGeometryDelta={}}z[e.id]=h}e=n.getOutputAmount(J(f.data.faces.indices).length);d?(n=f.data.id,k=h.perGeometryDelta[n],k||(k={addCount:0,removeCount:0},h.perGeometryDelta[n]=k),b?(k.addCount++,null==h.dataId2refCount[n]&&
(h.dataId2refCount[n]=0),1===++h.dataId2refCount[n]&&(h.optimalCount+=e,h.sparseCount+=e),h.toAdd.push(f)):(k.removeCount++,0===--h.dataId2refCount[n]&&(delete h.dataId2refCount[n],h.optimalCount-=e),h.toRemove.push(f))):b?(h.optimalCount+=e,h.sparseCount+=e,h.toAdd.push(f)):(h.optimalCount-=e,h.toRemove.push(f))}};e.prototype._modifiedMergedFacerangesKey=function(a,b){return a+"_"+b};e.prototype._insertIntoRenderOrder=function(a,b,d){for(var c=a[B.MATERIAL].getMaterialId(),g=this._renderOrder.length,
e=0;e<g&&this._renderOrder[e][0]>=b;){var l=this._renderOrder[e][1];if(l.id===c){D(!l[d],"matData for type already exists");l[d]=a;return}e++}c={id:c,instanced:null,merged:null};c[d]=a;this._renderOrder.splice(e,0,[b,c])};e.prototype._removeFromRenderOrder=function(a,b){var d=a[B.MATERIAL].getMaterialId();for(a=0;this._renderOrder[a][1].id!==d;)a++;d=this._renderOrder[a][1];d[b]=null;d.instanced||d.merged||this._renderOrder.splice(a,1)};e.prototype._updateRenderOrder=function(a,b){for(var d=b.length,
c=0;c<d&&b[c][1].id!==a;)c++;if(c<d){a=b[c][1];a=(a.merged||a.instanced)[B.MATERIAL].getRenderPriority();var e=b[c][0];if(a!==b[c][0])for(b[c][0]=a,e=a>e?-1:1,c+=e;-1<c&&c<d&&e*b[c][0]>e*a;){var f=b[c];b[c]=b[c-e];b[c-e]=f;c+=e}}};e.prototype._modifyMaterials=function(a){for(var b in a)this._materialRep.updateMaterialParameters(b)};e.prototype.modifyRenderOrder=function(a){if(this._orderedRendering){for(var b in a)this._updateRenderOrder(b,this._renderOrder);this._needsRender=!0}};e.prototype._releaseMaterials=
function(a){if(Array.isArray(a))for(var b=0;b<a.length;b++)this._materialRep.release(a[b]),this._materialRep.releaseDepthShadowMap(a[b]),this._materialRep.releaseNormal(a[b]),this._materialRep.releaseDepth(a[b]),this._materialRep.releaseHighlight(a[b]);else this._materialRep.release(a),this._materialRep.releaseDepthShadowMap(a),this._materialRep.releaseNormal(a),this._materialRep.releaseDepth(a),this._materialRep.releaseHighlight(a)};e.prototype._name2indices=function(a){for(var b=new ja,d=0;2>d;++d){var c=
0===d?this._mat2dataMerged:this._mat2dataInstanced,e;for(e in c){var f=c[e].origin2data,l;for(l in f){var n=f[l].instances,h;for(h in n){var k=n[h];void 0!==a[k.name]&&b.set(k.idx)}}}}return b};return e}();var oa=function(){function e(){this.reset()}e.prototype.reset=function(){this.VBOusedSize=this.VBOoptimalSize=this.VBOallocatedSize=this.instancesDrawnAngle=this.drawCallsFragmented=this.drawCallsMerged=this.drawCallsAngleInstanced=this.drawCallsInstanced=this.trianglesRendered=0};return e}(),aa=
function(){return function(e,a,b,d,c,g,f,l){this.name=e;this.from=a;this.to=b;this.displayedIndexRange=d;this.transformation=c;this.instanceParameters=g;this.idx=f;this.dataId=l;null!=c&&(this.transformationNormal=C.create(),C.set(c,this.transformationNormal),C.inverse(this.transformationNormal,this.transformationNormal),C.transpose(this.transformationNormal,this.transformationNormal))}}(),G=T.create(),H=C.identity(),I=C.create(),K=C.create();return E});
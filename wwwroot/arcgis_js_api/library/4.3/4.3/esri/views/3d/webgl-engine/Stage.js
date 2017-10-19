// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ./parts/Model ./parts/View ./lib/Selector ./lib/Camera ./lib/gl-matrix ./lib/Util ./lib/ModelContentType".split(" "),function(t,u,n,w,p,x,g,k,v){t=g.vec2d;u=g.vec2;var h=g.vec3d;g=function(){function b(a,d){this._intersectTolerance=p.DEFAULT_TOLERANCE;this._viewContent=[];this._externalIntersectionHandlers=[];this.onSelectionChange=function(){};this.container=a;this.model=new n;this.view=new w(a,this,this.model.getDirtySet(),d);this.view.setLights(this.model.getAmbientLight(),
this.model.getDirectionalLight())}b.prototype.setNeedsRender=function(){this.view.setNeedsRender()};b.prototype.dispose=function(){this.view.dispose();this.model=this.view=null};b.prototype.setSelectionObject=function(a,d,c){this.model.setSelection(a,c);this.view.setSelectionObject(void 0!==a?a.getId():void 0,c);if(!d)this.onSelectionChange(a,c)};b.prototype.getSelectionObject=function(){return this.model.getSelection()};b.prototype.frame=function(a,d){void 0===d&&(d=0);var c=Math.max(1E-6,a.getBSRadius());
d=Math.max(2,d+2);d*=c;var c=this.getCamera(),b=h.create(c.viewForward);h.scale(b,-(1.5*d/Math.tan(c.fov)));h.set(a.getCenter(),c.center);h.add(c.center,b,c.eye);c=new x(c.eye,c.center,c.up);this.setCamera(c)};b.prototype.beginMod=function(){b.DebugSettings.fineGrainedContentValidation&&this.model.validateContent()};b.prototype.endMod=function(a){void 0===a&&(a=!1);b.DebugSettings.fineGrainedContentValidation&&!a&&this.model.validateContent()};b.prototype.add=function(a,d){this.model.add(a,d);"function"===
typeof d.addParentStage&&d.addParentStage(this)};b.prototype.remove=function(a,d){a=this.model.remove(a,d);"function"===typeof a.removeParentStage&&a.removeParentStage(this);return a};b.prototype.notifyDirty=function(a,d,c,b){this.model.notifyDirty(a,d,c,b)};b.prototype.processDirty=function(){var a=this.model.getDirtySet(),d=a.getDirtyMaterials();if(a.hasDirtyGeometryRecords()||d){b.DebugSettings.endFrameContentValidation&&this.model.validateContent();b.DebugSettings.logDirtySet&&console.log("Dirty set: "+
this.model.getDirtySet().formatDebugInfo(!1));var c=a.getAddRemoveUpdateListFilteredByLayers(this._viewContent,!0);(0<c[0].length+c[1].length+c[2].length||d)&&this.view.modify(c[0],c[1],c[2],d);b.DebugSettings.logDirtySet&&(console.log("RGs add: "+c[0].map(function(a){return a.uniqueName})),console.log("RGs remove: "+c[1].map(function(a){return a.uniqueName})));a.getAddRemoveUpdateList(!0);a.clearDirtyMaterials();this.view.setNeedsRender()}};b.prototype.processDirtyLayer=function(a){var d=this.model.getDirtySet(),
c=d.getDirtyMaterials();a=d.getAddRemoveUpdateListFilteredByLayers([a],!0);(0<a[0].length+a[1].length+a[2].length||c)&&this.view.modify(a[0],a[1],a[2],c);d.clearDirtyMaterials()};b.prototype.get=function(a,d){return this.model.get(a,d)};b.prototype.getAll=function(a){return this.model.getAll(a)};b.prototype.addTextureListener=function(a){this.view.addTextureListener(a)};b.prototype.removeTextureListener=function(a){this.view.removeTextureListener(a)};b.prototype.getContainer=function(){return this.container};
b.prototype.getCamera=function(){return this.view.getCamera()};b.prototype.setCamera=function(a){this.view.setCamera(a)};b.prototype.getViewParams=function(a){return this.view.getViewParams(a)};b.prototype.setViewParams=function(a){this.view.setViewParams(a)};b.prototype.getLayers=function(){return this.model.getAll(v.LAYER)};b.prototype.getAmbientLight=function(){return this.model.getAmbientLight()};b.prototype.getDirectionalLight=function(){return this.model.getDirectionalLight()};b.prototype.setAmbientLight=
function(a){this.model.setAmbientLight(a);this.view.setLights(this.model.getAmbientLight(),this.model.getDirectionalLight())};b.prototype.setDirectionalLight=function(a){this.model.setDirectionalLight(a);this.view.setLights(this.model.getAmbientLight(),this.model.getDirectionalLight())};b.prototype.getCanvas=function(){return this.view.getCanvas()};b.prototype.setRenderParams=function(a){this.view.setRenderParams(a)};b.prototype.getRenderParams=function(){return this.view.getRenderParams()};b.prototype.has=
function(a){return this.view.has(a)};b.prototype.getViewContent=function(){return this._viewContent.slice(0)};b.prototype.setViewContent=function(a){var d=k.array2object(this._viewContent),c=k.array2object(a),b=k.subtractObjects(c,d),d=k.subtractObjects(d,c);this.processDirty();c=this.model.getDirtySet();b=c.getResidentRenderGeometriesFilteredByLayers(k.object2array(b));d=c.getResidentRenderGeometriesFilteredByLayers(k.object2array(d));this.view.modify(b,d,[]);this._viewContent=a.slice(0)};b.prototype.addToViewContent=
function(a){for(var d=[],c=0;c<a.length;c++)-1===this._viewContent.indexOf(a[c])&&d.push(a[c]);0<a.length&&(this.processDirty(),a=this.model.getDirtySet().getResidentRenderGeometriesFilteredByLayers(d),this.view.modify(a,[],[]),this._viewContent.push.apply(this._viewContent,d))};b.prototype.removeFromViewContent=function(a){this.processDirty();for(var d=this.model.getDirtySet(),c=this._viewContent,b=[],f=0;f<a.length;f++){var h=c.indexOf(a[f]);-1<h&&(c[h]=c[c.length-1],c.pop(),b.push(a[f]))}a=d.getResidentRenderGeometriesFilteredByLayers(b);
this.view.modify([],a,[])};b.prototype.getViewFrustumObjects=function(){return this.view.getFrustumObjects()};b.prototype.getLocalOrigin=function(a,d,c){return this.model.getOrigin(a,d,c)};b.prototype.getFrameTask=function(){return this.view.getFrameTask()};b.prototype.requestScreenCapture=function(a,d){this.view.requestScreenCapture(a,d)};b.prototype.getAllTexturesLoaded=function(){return this.view.getAllTexturesLoaded()};b.prototype.getTextureLoaded=function(a){return this.view.getTextureLoaded(a)};
b.prototype.addExternalRenderer=function(a,d){"function"===typeof d.intersect&&this._externalIntersectionHandlers.push(d);return this.view.addExternalRenderer(a,d)};b.prototype.removeExternalRenderer=function(a){var d=this._externalIntersectionHandlers.indexOf(a);-1<d&&this._externalIntersectionHandlers.splice(d,1);return this.view.removeExternalRenderer(a)};b.prototype.getContentDebugStrings=function(a){return this.model.formatDebugInfo(a)};b.prototype.getRenderStats=function(){return this.view.getCombinedStats()};
b.prototype.getRenderStatString=function(a){var d=this.getRenderStats(),c="";if(a){var c=c+"\x3ctable\x3e",b;for(b in d)c+="\x3ctr\x3e\x3ctd\x3e"+b+'\x3c/td\x3e\x3ctd style\x3d"text-align: right"\x3e'+Math.round(d[b])+"\x3c/td\x3e\x3c/tr\x3e";c+="\x3c/table\x3e"}else for(b in d)c+=b+": "+d[b]+"\n";return c};b.prototype.pick=function(a,b,c,y){var d=h.create(),g=h.create();this.view.getPickRay(a,d,g);return this.pickRay(d,g,a,a,b,c,y)};b.prototype.pickRayWithBeginPoint=function(a,b,c,h,f){this.view.pickRayWithBeginPoint(a,
b,c,h,f)};b.prototype.pickRay=function(a,b,c,g,f,k,l){g=this.view.getCamera();c||(c=z,g.projectPoint(b,c));var d;if(f){d=Array(f.length);for(var e=0;e<d.length;e++)d[e]=this.model.get(n.ContentType.LAYER,f[e])}else{d=[];f=this.getViewContent();for(var q=this.model.getAll(n.ContentType.LAYER),e=0;e<f.length;e++){var r=q[f[e]];r&&"VISIBLE"===r.getState()&&d.push(r)}}l?l.init(d,a,b,c,g,this._intersectTolerance,k):l=new p(d,a,b,c,g,this._intersectTolerance,k);for(e=0;e<this._externalIntersectionHandlers.length;e++)this._externalIntersectionHandlers[e].intersect(l,
a,b,c);if(l.getHudResults().length){e=l.getHudResults();e.sort(function(a,b){return b.dist-a.dist});b=e[e.length-1];c=A;g.projectPoint(b.center,c);c[0]=Math.round(c[0]);c[1]=Math.round(c[1]);f=B;this.view.getPickRay(c,a,f);q=h.dist(b.center,a)/h.dist(a,f)*.99;m.init(d,a,f,c,g,this._intersectTolerance,k);for(e=0;e<this._externalIntersectionHandlers.length;e++)this._externalIntersectionHandlers[e].intersect(m,a,f,c);if(null==m.getMinResult().dist||q<=m.getMinResult().dist)l.getMinResult().set(b.target,
b.name,b.dist,b.normal,b.priority),l.getMinResult().setIntersector("stage")}return l};b.prototype.getIntersectTolerance=function(){return this._intersectTolerance};b.prototype.setIntersectTolerance=function(a){void 0===a&&(a=1E-5);this._intersectTolerance=a};b.prototype.getTextureGraphicsRenderer=function(){return this.view.getTextureGraphicsRenderer()};return b}();g.DebugSettings={fineGrainedContentValidation:!1,endFrameContentValidation:!1,logDirtySet:!1};g.ModelContentType=v;var z=t.create(),A=
u.create(),B=h.create(),m=new p;m.enableHUDSelection=!1;return g});
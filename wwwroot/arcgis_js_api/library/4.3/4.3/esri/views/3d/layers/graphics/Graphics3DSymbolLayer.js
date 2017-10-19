// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper dojo/_base/lang ../../support/PromiseLightweight ../../support/mathUtils ./ElevationInfo ./graphicUtils ../../../../core/Logger ../../../../Color".split(" "),function(l,y,p,m,q,r,h,n,t,u){function k(f,a){f=null!=f?a.attributes[f]:0;null!=f&&isFinite(f)||(f=0);return f}var g=new h,v=t.getLogger("esri.symbols.Symbol3D");l=function(f){function a(b,d,a){var c=f.call(this)||this;c.symbol=b;c._context=d;c._symbolLayerOrder=d.layerOrder;c._symbolLayerOrderDelta=
d.layerOrderDelta;c._elevationInfo=new h;c._material=null;c._updateDrivenProperties(a);c._updateElevationInfo();c._prepareResources();return c}p(a,f);a.prototype._logWarning=function(b){v.warn(b)};a.prototype._prepareResources=function(b){throw Error("This is an abstract base class");};a.prototype._defaultElevationInfoNoZ=function(){return w};a.prototype._defaultElevationInfoZ=function(){return x};a.prototype._updateElevationInfo=function(){for(var b in this._elevationInfo)this._elevationInfo[b]=
void 0;if(b=this._context.layer.elevationInfo)this._elevationInfo=m.mixin(this._elevationInfo,b);this.symbol.elevationInfo&&(this._elevationInfo=m.mixin(this._elevationInfo,this.symbol.elevationInfo))};a.prototype._getGraphicElevationInfo=function(b){b=b.geometry.hasZ?this._defaultElevationInfoZ():this._defaultElevationInfoNoZ();g.mode=this._elevationInfo.mode||b.mode;g.offset=null!=this._elevationInfo.offset?this._elevationInfo.offset:b.offset;g.featureExpression=this._elevationInfo.featureExpression;
g.offset/=this._context.renderCoordsHelper.unitInMeters;return g};a.prototype._getDrapedZ=function(){return-2};a.prototype._updateDrivenProperties=function(b){var d={color:!1,opacity:!1,size:!1};!b&&(b=this._context.renderer)&&(d.color=!!b.colorInfo,d.size=!!b.sizeInfo,b.visualVariables&&b.visualVariables.forEach(function(b){switch(b.type){case "color":d.color=!0;if(b.colors)for(var c=0;c<b.colors.length;c++){var a=b.colors[c];a&&(Array.isArray(a)&&3<a.length&&255!==a[3]||void 0!==a.a&&255!==a.a)&&
(d.opacity=!0)}if(b.stops)for(c=0;c<b.stops.length;c++)(a=b.stops[c].color)&&(Array.isArray(a)&&3<a.length&&255!==a[3]||void 0!==a.a&&255!==a.a)&&(d.opacity=!0);break;case "opacity":d.opacity=!0;break;case "size":d.size=!0}}));this._drivenProperties=d};a.prototype._isPropertyDriven=function(b){return this._drivenProperties[b]};a.prototype._getLayerOpacity=function(){if(this._context.layerView&&"fullOpacity"in this._context.layerView)return this._context.layerView.fullOpacity;var b=this._context.layer.opacity;
return null==b?1:b};a.prototype._getMaterialOpacity=function(){var b;b=1*this._getLayerOpacity();var a=this.symbol.material;a&&!this._isPropertyDriven("opacity")&&(b*=a.color.a);return b};a.prototype._getMaterialOpacityAndColor=function(){var b=this.symbol.material,a=this._getMaterialOpacity(),b=this._isPropertyDriven("color")||!b?null:u.toUnitRGB(b.color);return n.mixinColorAndOpacity(b,a)};a.prototype._getVertexOpacityAndColor=function(b,a,e){var c=this._isPropertyDriven("color")?b.color:null;b=
this._isPropertyDriven("opacity")?b.opacity:null;c=n.mixinColorAndOpacity(c,b);e&&(c[0]*=e,c[1]*=e,c[2]*=e,c[3]*=e);return a?new a(c):c};a.prototype._getStageIdHint=function(){return this._context.layer.id+"_symbol"};a.prototype.isFastUpdatesEnabled=function(){return this._fastUpdates&&this._fastUpdates.enabled};a.prototype.setDrawOrder=function(b,a,e){this._material&&(this._material.setRenderPriority(b),e[this._material.getId()]=!0)};a.prototype.createGraphics3DGraphic=function(b,a){for(var d=2;d<
arguments.length;d++);throw Error("This is an abstract base class");};a.prototype.destroy=function(){throw Error("This is an abstract base class");};a.prototype.layerPropertyChanged=function(b,a,e){return!1};a.prototype.applyRendererDiff=function(b,a,e,c){return!1};a.prototype._getFastUpdateAttrValues=function(b){if(!this._fastUpdates.enabled)return null;var a=this._fastUpdates.visualVariables,e=a.size?k(a.size.field,b):0,c=a.color?k(a.color.field,b):0;a.rotation?(a=a.rotation,b=k(a.field,b),b=r.deg2rad("arithmetic"===
a.rotationType?90-b:b)):b=0;return[e,c,b,0]};return a}(q.Promise);var w={mode:h.MODES.ON_THE_GROUND,offset:0},x={mode:h.MODES.ABSOLUTE_HEIGHT,offset:0};return l});
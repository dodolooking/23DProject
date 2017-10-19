// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ./LayerView2D ./support/TileStrategy ../engine/Bitmap ../engine/BitmapSource ../engine/BitmapContainer ../engine/Canvas2DContainer ../../../request ./support/TileKey ./support/TileInfoView ./support/TileQueue".split(" "),function(d,v,h,f,e,k,l,m,n,p,q,r,g,t,u){d=function(d){function b(){var a=null!==d&&d.apply(this,arguments)||this;a._tileStrategy=null;a._tileInfoView=
null;a._tileQueue=null;a.container=new q;a.layer=null;return a}h(b,d);b.prototype.hitTest=function(a,c){return null};b.prototype.update=function(a){this._tileQueue.pause();this._tileQueue.state=a.state;this._tileStrategy.update(a);this._tileQueue.resume();this.notifyChange("updating")};b.prototype.attach=function(){var a=this;this._tileContainer=new p;this.container.addChild(this._tileContainer);this._tileInfoView=new t(this.layer.tileInfo,this.layer.fullExtent);this._tileQueue=new u({tileInfoView:this._tileInfoView,
process:function(c){return a.fetchTile(c)}});this._tileStrategy=new l({container:{addTile:function(c){return a._tileContainer.addChild(c)},removeTile:function(c){return a._tileContainer.removeChild(c)},removeAllTiles:function(){return a._tileContainer.removeAllChildren()}},tileInfoView:this._tileInfoView,requestUpdate:function(){return a.requestUpdate()},fetchTile:function(c){return a._tileQueue.push(g.pool.acquire(c))}})};b.prototype.detach=function(){this._tileStrategy.destroy();this._tileQueue.clear();
this.container.removeChild(this._tileContainer);this._tileQueue=this._tileStrategy=this._tileInfoView=this._tileContainer=null};b.prototype.moveStart=function(){this.requestUpdate()};b.prototype.viewChange=function(){this.requestUpdate()};b.prototype.moveEnd=function(){this.requestUpdate()};b.prototype.getTileBounds=function(a,c){return this._tileStrategy.tileInfoView.getTileBounds(a,c)};b.prototype.getTileCoords=function(a,c){return this._tileStrategy.tileInfoView.getTileCoords(a,c)};b.prototype.getTileResolution=
function(a){return this._tileStrategy.tileInfoView.getTileResolution(a)};b.prototype.fetchTile=function(a){var c=this,b=this.layer.tilemapCache;return b?b.fetchAvailabilityUpsample(a.level,a.row,a.col,a).then(function(){return c._fetchImage(a)}):this._fetchImage(a)};b.prototype.isUpdating=function(){return this.attached&&(this._tileStrategy.updating||this.updateRequested)};b.prototype._fetchImage=function(a){var b=this,d=this.layer.getTileUrl(a.level,a.row,a.col),d=r(d,{responseType:"image"}).then(function(c){c=
new n(c.data);c.coords=b.getTileCoords(c.coords,a);c.resolution=b.getTileResolution(a);return new m(c)});d.always(function(){return g.pool.release(a)});return d};return b}(e.declared(k));f([e.property({dependsOn:["updateRequested"]})],d.prototype,"updating",void 0);return d=f([e.subclass("esri.views.2d.layers.TiledLayerView2D")],d)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper dojox/gfx/_base ./Shape ./svg".split(" "),function(a,e,h,f,k,g){a=function(a){function d(c){var b=a.call(this)||this;b.shape=f.getDefault("Image");b.rawNode=c;return b}h(d,a);d.prototype.setShape=function(c){this.shape=f.makeParameters(this.shape,c);this.bbox=null;c=this.rawNode;for(var b in this.shape)if("type"!==b&&"src"!==b){var a=this.shape[b];if("width"===b||"height"===b)a=0>a?0:a;c.setAttribute(b,a)}c.setAttribute("preserveAspectRatio",
"none");g._setAttributeNS(c,g.xmlns.xlink,"xlink:href",this.shape.src);c.__gfxObject__=this;return this};d.prototype.getBoundingBox=function(){return this.shape};d.prototype.setStroke=function(){return this};d.prototype.setFill=function(){return this};return d}(k.default);a.nodeType="image";Object.defineProperty(e,"__esModule",{value:!0});e.default=a});
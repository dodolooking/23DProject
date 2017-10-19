// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../../core/Accessor dojo/dom dojo/dom-class".split(" "),function(c,k,f,d,b,g,h,e){c=function(c){function b(){var a=null!==c&&c.apply(this,arguments)||this;a.widget=null;return a}f(b,c);b.prototype.destroy=function(){this.widget&&this.widget.destroy();this.node=null};Object.defineProperty(b.prototype,"id",{get:function(){return this._get("id")||this.get("node.id")},
set:function(a){this._set("id",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"node",{set:function(a){var b=this._get("node");a!==b&&(a&&e.add(a,"esri-component"),b&&e.remove(b,"esri-component"),this._set("node",a))},enumerable:!0,configurable:!0});b.prototype.castNode=function(a){if(!a)return this._set("widget",null),null;if("string"===typeof a||a&&"nodeType"in a)return this._set("widget",null),h.byId(a);a&&"function"===typeof a.render&&!a.domNode&&(a.domNode=document.createElement("div"));
this._set("widget",a);return a.domNode};return b}(b.declared(g));d([b.property()],c.prototype,"id",null);d([b.property()],c.prototype,"node",null);d([b.cast("node")],c.prototype,"castNode",null);d([b.property({readOnly:!0})],c.prototype,"widget",void 0);return c=d([b.subclass("esri.views.ui.Component")],c)});
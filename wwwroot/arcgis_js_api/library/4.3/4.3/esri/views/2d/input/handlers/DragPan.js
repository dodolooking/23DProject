// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../../input/handlers/support"],function(b,f,g,h,k){b=function(b){function e(l,c,d){var a=b.call(this,"esri.views.2d.input.handlers.DragPan - "+c,!0)||this;a.view=l;a.pointerType=c;a.registerIncoming("drag",d,function(c){return a._handleDrag(c)});return a}g(e,b);e.prototype._handleDrag=function(b){var c=b.data;if(!(1<c.pointers.length)){var d=c.pointers[0];if(k.eventMatchesPointerType(d.startEvent.native,
this.pointerType)){var a=this.view.navigation.pan;switch(c.action){case "start":a.begin(this.view,d);break;case "update":a.update(this.view,d);break;case "end":a.end(this.view,d)}b.stopPropagation()}}};return e}(h.InputHandler);f.DragPan=b});
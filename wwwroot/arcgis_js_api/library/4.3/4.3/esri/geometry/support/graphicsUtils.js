// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/_base/array","../Extent"],function(l,f,h,k){f.graphicsExtent=function(c){var b=c[0].geometry,d=b.extent,a=b;null===d&&(d=new k(a.x,a.y,a.x,a.y,b.spatialReference));for(var g=1;g<c.length;g++){var a=b=c[g].geometry,e=b.extent;null===e&&(e=new k(a.x,a.y,a.x,a.y,b.spatialReference));d=d.clone().union(e)}return 0>d.width&&0>d.height?null:d};f.getGeometries=function(c){return h.map(c,function(b){return b.geometry})};f._encodeGraphics=function(c,b){var d=[];h.forEach(c,
function(a,c){a=a.toJSON();var e={};if(a.geometry){var f=b&&b[c];e.geometry=f&&f.toJSON()||a.geometry}a.attributes&&(e.attributes=a.attributes);d[c]=e});return d}});
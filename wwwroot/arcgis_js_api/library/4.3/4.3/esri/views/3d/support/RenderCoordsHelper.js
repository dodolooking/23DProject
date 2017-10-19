// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["./earthUtils","./projectionUtils","../lib/glMatrix","../webgl-engine/lib/BufferVectorMath","../../../geometry/support/scaleUtils"],function(d,g,f,e,n){var l=f.vec3,h=e.Vec3Compact,m=d.earthRadius,k=[0,0,1];d=function(a){this.spatialReference=a};d.prototype.toRenderCoords=function(a,b,c){return"esri.geometry.Point"===a.declaredClass?g.pointToVector(a,b,this.spatialReference):g.vectorToVector(a,b,c,this.spatialReference)};d.prototype.fromRenderCoords=function(a,b,c){return"esri.geometry.Point"===
b.declaredClass||"esri.SpatialReference"===b.declaredClass?g.vectorToPoint(a,this.spatialReference,b,c):g.vectorToVector(a,this.spatialReference,b,c)};f=function(a){this.spatialReference=a=a||g.SphericalRenderSpatialReference;this.unitInMeters=1};f.prototype=new d;f.prototype.getAltitude=function(a,b){return h.length(a,b||0)-m};f.prototype.setAltitude=function(a,b,c){c=c||0;a=(a+m)/h.length(b,c);h.scale(b,c,a)};f.prototype.setAltitudeOfTransformation=function(a,b){this.setAltitude(a,b,12)};f.prototype.worldUpAtPosition=
function(a,b){l.normalize(a,b)};e=function(a){this.spatialReference=a;this.unitInMeters=n.getUnitValueForSR(a);this.worldUp=k};e.prototype=new d;e.prototype.getAltitude=function(a,b){return b?a[b+2]:a[2]};e.prototype.setAltitude=function(a,b,c){c?b[c+2]=a:b[2]=a};e.prototype.setAltitudeOfTransformation=function(a,b){this.setAltitude(a,b,12)};e.prototype.worldUpAtPosition=function(a,b){l.set(k,b)};e.worldUp=k;d.Spherical=f;d.Planar=e;return d});
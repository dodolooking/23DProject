// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/Error ../../../../core/numberUtils ../../../../Color ../../statistics/support/utils ../../../../symbols/SimpleMarkerSymbol ../../../../symbols/SimpleLineSymbol ../../../../symbols/SimpleFillSymbol ../../../../Basemap ../../../../support/basemapUtils ../../../../symbols/PointSymbol3D ../../../../symbols/IconSymbol3DLayer ../../../../symbols/ObjectSymbol3DLayer ../../support/utils".split(" "),function(z,f,l,h,m,n,p,q,r,t,u,k,v,w,x){function g(a,b){return new l(a,
b)}function y(a){var b=a.layer;return a.fields.filter(function(a){a=b.getFieldUsageInfo(a);return!a||!a.supportsRenderer})}f.createError=g;f.getDefaultDataRange=function(a,b,d){var c,e;b=n.getSuggestedDataRange({statistics:a,isDate:b});b.defaultValuesUsed?(c=b.min,e=b.max):!d||null!=a.avg&&a.stddev||(c=a.min,e=a.max);return null!=c?[c,e]:null};f.createColors=function(a,b){for(var d=[],c=a.length,e=0;e<b;e++)d.push(new m(a[e%c]));return d};f.createStopValues=function(a,b){var d=a.avg,c=d-a.stddev,
e=d+a.stddev;c<a.min&&(c=a.min);e>a.max&&(e=a.max);b&&(d=c+(e-c)/2);a=h.round([c,e],{strictBounds:!0});c=a[0];e=a[1];a=[c,c+(d-c)/2,d,d+(e-d)/2,e];return h.round(a,{strictBounds:!0})};f.createSymbol=function(a,b,d,c,e){var f;switch(d){case "point":case "multipoint":d=null!=e?e:a.size;"2d"===c?f=new p({color:b,size:d,outline:{color:a.outline.color,width:a.outline.width}}):"3d-flat"===c?f=new k({symbolLayers:[new v({size:d,resource:{primitive:"circle"},material:{color:b},outline:{color:a.outline.color,
size:a.outline.width}})]}):-1<c.indexOf("3d-volumetric")&&(f=new k({symbolLayers:[new w({height:d,resource:{primitive:"3d-volumetric-uniform"===c?"sphere":"cylinder"},material:{color:b}})]}));break;case "polyline":a=null!=e?e:a.width;"2d"===c&&(f=new q({color:b,width:a}));break;case "polygon":"2d"===c&&(f=new r({color:b,outline:{color:a.outline.color,width:a.outline.width}}))}return f};f.getBasemapId=function(a){var b=null;"string"===typeof a?b=a:a instanceof t&&(b=u.wellKnownBasemapId(a));return b||
"gray"};f.verifyBasicFieldValidity=function(a,b,d){var c=x.getUnknownFields({layer:a,fields:b});if(c.length)return g(d,"Unknown fields: "+c.join(", ")+". You can only use fields defined in the layer schema");a=y({layer:a,fields:b});if(a.length)return g(d,"Unsupported fields: "+a.join(", ")+". You can only use fields that are accessible to the renderer i.e. FieldUsageInfo.supportsRenderer must be true")}});
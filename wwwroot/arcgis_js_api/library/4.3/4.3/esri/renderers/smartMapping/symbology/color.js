// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports dojo/_base/lang ./support/colors ../../../Color ./support/utils".split(" "),function(m,c,E,F,p,u){function v(a,b){return a.map(function(a){a=new p(a);null!=b&&(a.a=b);return a})}function z(a,b){return a.r===b.r&&a.g===b.g&&a.b===b.b}function A(a,b){var e=0;if(a.length===b.length){var g=a.every(function(a,f){return z(a,b[f])});g?e=1:(g=a.slice(0).reverse().every(function(a,f){return z(a,b[f])}))&&(e=-1)}return e}function B(a,b){var e,g;if(g=A(a.colors,b))e=0<g?a:n.flipColors(a);
else{var q;a.colorsForClassBreaks.some(function(a){a.numClasses===b.length&&(q=a.colors);return!!q});q&&(g=A(q,b))&&(e=0<g?a:n.flipColors(a))}return e}function y(a,b){return a&&b?a.schemes[b.replace("-vector","")]:null}function C(a){a=a.basemaps;var b=[];a&&(b=b.concat(a));return b}function r(a,b,e,g,q){var f=F[a],d;if(f){d=b.fillOpacity;null==d&&-1!==D.indexOf(a)&&(d=.8);var c=v(f.stops),h=[],k;for(k in f)if("stops"!==k){var l=+k;h.push({numClasses:l,colors:v(f[l])})}f=new p(-1!==D.indexOf(a)?"#ffffff":
"#aaaaaa");d={id:g+"/"+q+"/"+a,theme:g,opacity:d||1,colors:c,colorsForClassBreaks:h,noDataColor:f};switch(e){case "point":case "multipoint":d.outline={color:new p(b.outline.color),width:b.outline.width};d.size=b.size;break;case "polyline":d.width=b.width;break;case "polygon":d.outline={color:new p(b.outline.color),width:b.outline.width}}}return d}m={color:[128,128,128,1],width:"0.5px"};c={color:[153,153,153,1],width:"0.5px"};var h={outline:c,fillOpacity:.8,width:"2px",size:"8px"},w={outline:m,fillOpacity:.6,
width:"2px",size:"8px"},x={outline:{color:[153,153,153,.5],width:"0.5px"},fillOpacity:.8,width:"2px",size:"8px"},D="highlight-orange-gray highlight-bluegreen-gray highlight-purple-gray highlight-pink-gray highlight-blue-gray highlight-red-gray highlight-orange-gray-dark highlight-blue-gray-dark highlight-orange-gray-bright highlight-blue-gray-bright extremes-orange-gray extremes-bluegreen-gray extremes-purple-gray extremes-pink-gray extremes-blue-gray extremes-red-gray extremes-orange-gray-dark extremes-blue-gray-dark extremes-orange-gray-bright extremes-blue-gray-bright".split(" "),
k="seq-single-blues seq-single-greens seq-single-grays seq-single-oranges seq-single-purples seq-single-reds seq-multi-bugn seq-multi-bupu seq-multi-gnbu seq-multi-orrd seq-multi-pubu seq-multi-pubugn seq-multi-purd seq-multi-rdpu seq-multi-ylgn seq-multi-ylgnbu seq-multi-ylorbr seq-multi-ylorrd".split(" "),l="div-brbg div-piyg div-prgn div-puor div-rdbu div-rdgy div-rdylbu div-rdylgn div-spectral".split(" "),t={"high-to-low":{name:"high-to-low",label:"TODO",description:"TODO",basemaps:"streets gray topo terrain national-geographic oceans osm satellite hybrid dark-gray".split(" "),
schemes:{streets:{common:h,primary:"seq-yellow-red-purple",secondary:"seq-yellow-orange-red seq-yellow-pink-purple seq-yellow-purple-blue seq-yellow-green-blue seq-teal-lightgreen-bright seq-green-lightgray-bright seq-teal-lightbrown-bright seq-reds-bright seq-purples-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-lightred-darkgray-bright".split(" ").concat(k)},
gray:{common:x,primary:"seq-yellow-red-purple",secondary:"seq-orange-red-light seq-yellow-orange-red seq-yellow-pink-purple seq-yellow-purple-blue seq-teal-lightgreen-bright seq-green-lightgray-bright seq-red-lightgray-bright seq-blue-lightgray-bright seq-orange-lightgray-bright seq-blue-red-yellow-bright seq-blue-tan-bright seq-teal-lightbrown-bright seq-reds-bright seq-purples-bright seq-blues-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-lightred-darkgray-bright".split(" ").concat(k)},
topo:{common:h,primary:"seq-yellow-green-blue",secondary:"seq-yellow-pink-purple seq-yellow-purple-blue seq-yellow-red-purple seq-yellow-orange-red seq-teal-lightgreen-bright seq-green-lightgray-bright seq-blue-lightgray-bright seq-orange-lightgray-bright seq-teal-lightbrown-bright seq-reds-bright seq-purples-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-lightred-darkgray-bright".split(" ").concat(k)},
terrain:{common:h,primary:"seq-pink-red",secondary:"seq-yellow-pink-purple seq-yellow-red-purple seq-yellow-orange-red seq-orange-red-light seq-teal-lightgreen-bright seq-green-lightgray-bright seq-red-lightgray-bright seq-blue-lightgray-bright seq-orange-lightgray-bright seq-blue-red-yellow-bright seq-blue-tan-bright seq-teal-lightbrown-bright seq-reds-bright seq-purples-bright seq-blues-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-lightred-darkgray-bright".split(" ").concat(k)},
"national-geographic":{common:h,primary:"seq-yellow-orange-red",secondary:"seq-yellow-red-purple seq-yellow-pink-purple seq-yellow-purple-blue seq-yellow-green-blue seq-teal-lightgreen-bright seq-blue-lightgray-bright seq-reds-bright seq-purples-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-lightred-darkgray-bright".split(" ").concat(k)},
oceans:{common:h,primary:"seq-yellow-green-blue",secondary:"seq-yellow-red-purple seq-yellow-orange-red seq-yellow-pink-purple seq-yellow-purple-blue seq-teal-lightgreen-bright seq-green-lightgray-bright seq-red-lightgray-bright seq-blue-lightgray-bright seq-blue-red-yellow-bright seq-teal-lightbrown-bright seq-reds-bright seq-purples-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-lightred-darkgray-bright".split(" ").concat(k)},
osm:{common:h,primary:"seq-red-blue-green",secondary:"seq-yellow-pink-purple seq-yellow-red-purple seq-yellow-purple-blue seq-teal-lightgreen-bright seq-blue-lightgray-bright seq-blue-red-yellow-bright seq-teal-lightbrown-bright seq-reds-bright seq-purples-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-lightred-darkgray-bright".split(" ").concat(k)},
satellite:{common:w,primary:"seq-orange-red-dark",secondary:"seq-yellow-green-blue seq-red-blue-green seq-yellow-purple-blue seq-teal-lightgreen-bright seq-blue-lightgray-bright seq-gray-lightgreen-bright seq-teal-lightbrown-bright seq-reds-bright seq-purples-bright seq-blues-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-lightred-darkgray-bright seq-lightmagenta-darkgray-bright seq-lightblue-darkgray-bright".split(" ").concat(k)},
hybrid:{common:w,primary:"seq-orange-red-dark",secondary:"seq-yellow-green-blue seq-red-blue-green seq-yellow-purple-blue seq-teal-lightgreen-bright seq-blue-lightgray-bright seq-gray-lightgreen-bright seq-teal-lightbrown-bright seq-reds-bright seq-purples-bright seq-blues-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-blue-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-lightred-darkgray-bright seq-lightmagenta-darkgray-bright seq-lightblue-darkgray-bright".split(" ").concat(k)},
"dark-gray":{common:x,primary:"seq-dark-to-light-blue-bright",secondary:"seq-blue-lightgray-bright seq-gray-lightgreen-bright seq-reds-bright seq-purples-bright seq-blues-bright seq-greens-bright seq-browns-bright seq-dark-to-light-magenta-bright seq-dark-to-light-purple-bright seq-dark-to-light-green-bright seq-brown-to-tan-bright seq-lightgray-blue-bright seq-lightgray-green-bright seq-lightgray-darkmagenta-bright seq-yellow-darkblue-bright seq-teal-lightgreen-bright seq-lightred-darkgray-bright seq-lightmagenta-darkgray-bright seq-lightblue-darkgray-bright".split(" ").concat(k)}}},
"above-and-below":{name:"above-and-below",label:"TODO",description:"TODO",basemaps:"streets gray topo terrain national-geographic oceans osm satellite hybrid dark-gray".split(" "),schemes:{streets:{common:h,primary:"div-bluegreen-yellow-orange",secondary:"div-orange-yellow-blue-light div-green-yellow-redpurple div-green-yellow-orange div-green-gray-bright div-red-blue-bright div-blue-orange-bright div-blue-lightgreen-bright div-red-gray-bright div-blue-gray-bright div-red-lightgreen-bright div-green-teal-bright div-lightgreen-yellow-bright div-lightred-gray-bright".split(" ").concat(l)},
gray:{common:x,primary:"div-bluegreen-orange",secondary:"div-orange-purple div-bluegreen-purple div-orange-pink div-blue-yellow-red-bright div-green-gray-bright div-red-green-bright div-red-blue-bright div-orange-gray-bright div-blue-orange-bright div-blue-lightgreen-bright div-red-gray-bright div-blue-gray-bright div-red-lightgreen-bright div-blue-green-bright div-purple-brown-bright div-blue-brown-bright div-teal-brown-bright div-green-teal-bright div-lightgreen-yellow-bright div-lightblue-gray-bright div-lightgreen-gray-bright div-lightred-gray-bright div-yellow-green-bright div-green-darkgray-bright".split(" ").concat(l)},
topo:{common:h,primary:"div-orange-pink",secondary:"div-redpurple-blue div-orange-blue div-green-pink div-blue-yellow-red-bright div-green-gray-bright div-red-green-bright div-red-blue-bright div-orange-gray-bright div-blue-orange-bright div-blue-lightgreen-bright div-red-gray-bright div-blue-gray-bright div-red-lightgreen-bright div-blue-green-bright div-purple-brown-bright div-blue-brown-bright div-teal-brown-bright div-green-teal-bright div-lightgreen-yellow-bright div-lightblue-gray-bright div-lightgreen-gray-bright div-lightred-gray-bright div-yellow-green-bright div-green-darkgray-bright".split(" ").concat(l)},
terrain:{common:h,primary:"div-bluegreen-orange",secondary:"div-bluegreen-redpurple div-green-redpurple div-green-orange div-blue-yellow-red-bright div-green-gray-bright div-red-blue-bright div-orange-gray-bright div-blue-lightgreen-bright div-red-gray-bright div-blue-gray-bright div-red-lightgreen-bright div-blue-green-bright div-purple-brown-bright div-blue-brown-bright div-teal-brown-bright div-green-teal-bright div-lightgreen-yellow-bright div-lightblue-gray-bright div-lightgreen-gray-bright div-lightred-gray-bright div-yellow-green-bright div-green-darkgray-bright".split(" ").concat(l)},
"national-geographic":{common:h,primary:"div-orange-yellow-blue-light",secondary:"div-bluegreen-yellow-orange div-green-yellow-redpurple div-red-green-bright div-red-blue-bright div-orange-gray-bright div-red-gray-bright div-blue-gray-bright div-red-lightgreen-bright div-blue-green-bright div-purple-brown-bright div-green-teal-bright div-lightgreen-yellow-bright div-lightred-gray-bright div-yellow-green-bright div-green-darkgray-bright".split(" ").concat(l)},oceans:{common:h,primary:"div-red-yellow-pink",
secondary:"div-blue-green div-bluegreen-yellow-redpurple div-bluegreen-yellow-orange div-blue-yellow-red-bright div-green-gray-bright div-red-green-bright div-red-blue-bright div-orange-gray-bright div-blue-orange-bright div-blue-lightgreen-bright div-red-gray-bright div-blue-gray-bright div-red-lightgreen-bright div-blue-green-bright div-purple-brown-bright div-blue-brown-bright div-teal-brown-bright div-green-teal-bright div-lightgreen-yellow-bright div-lightblue-gray-bright div-lightgreen-gray-bright div-lightred-gray-bright div-yellow-green-bright div-green-darkgray-bright".split(" ").concat(l)},
osm:{common:h,primary:"div-bluegreen-pink",secondary:"div-bluegreen-redpurple div-bluegreen-orange div-orange-pink div-green-gray-bright div-red-blue-bright div-red-gray-bright div-blue-gray-bright div-red-lightgreen-bright div-blue-green-bright div-purple-brown-bright div-green-teal-bright div-lightgreen-yellow-bright div-lightred-gray-bright div-yellow-green-bright div-green-darkgray-bright".split(" ").concat(l)},satellite:{common:w,primary:"div-blue-green-bright",secondary:"div-red-yellow-purple div-orange-yellow-pink div-orange-yellow-blue-light div-green-gray-bright div-red-green-bright div-red-blue-bright div-orange-gray-bright div-blue-orange-bright div-blue-lightgreen-bright div-red-gray-bright div-blue-gray-bright div-red-lightgreen-bright div-orange-yellow-blue-dark div-purple-brown-bright div-blue-brown-bright div-teal-brown-bright div-green-teal-bright div-lightgreen-yellow-bright div-lightblue-gray-bright div-lightgreen-gray-bright div-lightred-gray-bright div-lightmagenta-gray-bright div-yellow-green-bright div-lightblue-yellow-bright div-green-darkgray-bright".split(" ").concat(l)},
hybrid:{common:w,primary:"div-blue-green-bright",secondary:"div-red-yellow-purple div-orange-yellow-pink div-orange-yellow-blue-light div-green-gray-bright div-red-green-bright div-red-blue-bright div-orange-gray-bright div-blue-orange-bright div-blue-lightgreen-bright div-red-gray-bright div-blue-gray-bright div-red-lightgreen-bright div-orange-yellow-blue-dark div-purple-brown-bright div-blue-brown-bright div-teal-brown-bright div-green-teal-bright div-lightgreen-yellow-bright div-lightblue-gray-bright div-lightgreen-gray-bright div-lightred-gray-bright div-lightmagenta-gray-bright div-yellow-green-bright div-lightblue-yellow-bright div-green-darkgray-bright".split(" ").concat(l)},
"dark-gray":{common:x,primary:"div-blue-green-bright",secondary:"div-yellow-gray-purple div-lightblue-yellow-bright div-red-gray-blue div-green-gray-purple div-orange-gray-blue div-green-gray-bright div-red-green-bright div-red-blue-bright div-orange-gray-bright div-blue-orange-bright div-blue-lightgreen-bright div-red-gray-bright div-blue-gray-bright div-red-lightgreen-bright div-green-teal-bright div-purple-brown-bright div-blue-brown-bright div-teal-brown-bright div-lightgreen-yellow-bright div-lightblue-gray-bright div-lightgreen-gray-bright div-lightred-gray-bright div-lightmagenta-gray-bright div-yellow-green-bright div-green-darkgray-bright".split(" ").concat(l)}}},
"centered-on":{name:"centered-on",label:"TODO",description:"TODO",basemaps:"streets gray topo terrain national-geographic oceans osm satellite hybrid dark-gray".split(" "),schemes:{streets:{common:{outline:c,width:"2px",size:"8px"},primary:"highlight-orange",secondary:["highlight-bluegreen","highlight-orange-gray","highlight-bluegreen-gray"]},gray:{common:{outline:c,width:"2px",size:"8px"},primary:"highlight-orange",secondary:["highlight-purple","highlight-orange-gray","highlight-purple-gray"]},topo:{common:{outline:c,
width:"2px",size:"8px"},primary:"highlight-orange",secondary:["highlight-pink","highlight-orange-gray","highlight-pink-gray"]},terrain:{common:{outline:c,width:"2px",size:"8px"},primary:"highlight-orange",secondary:["highlight-bluegreen","highlight-orange-gray","highlight-bluegreen-gray"]},"national-geographic":{common:{outline:c,width:"2px",size:"8px"},primary:"highlight-orange",secondary:["highlight-blue","highlight-orange-gray","highlight-blue-gray"]},oceans:{common:{outline:c,width:"2px",size:"8px"},
primary:"highlight-red",secondary:["highlight-pink","highlight-red-gray","highlight-pink-gray"]},osm:{common:{outline:c,width:"2px",size:"8px"},primary:"highlight-pink",secondary:["highlight-bluegreen","highlight-pink-gray","highlight-bluegreen-gray"]},satellite:{common:{outline:m,width:"2px",size:"8px"},primary:"highlight-orange-dark",secondary:["highlight-blue-dark","highlight-orange-gray-dark","highlight-blue-gray-dark"]},hybrid:{common:{outline:m,width:"2px",size:"8px"},primary:"highlight-orange-dark",
secondary:["highlight-blue-dark","highlight-orange-gray-dark","highlight-blue-gray-dark"]},"dark-gray":{common:{outline:m,width:"2px",size:"8px"},primary:"highlight-orange-bright",secondary:["highlight-blue-bright","highlight-orange-gray-bright","highlight-blue-gray-bright"]}}},extremes:{name:"extremes",label:"TODO",description:"TODO",basemaps:"streets gray topo terrain national-geographic oceans osm satellite hybrid dark-gray".split(" "),schemes:{streets:{common:{outline:c,width:"2px",size:"8px"},
primary:"extremesdiv-bluegreen-yellow-orange",secondary:"extremesdiv-orange-yellow-blue-light extremesdiv-green-yellow-redpurple extremesdiv-green-yellow-orange extremes-orange extremes-bluegreen extremes-orange-gray extremes-bluegreen-gray".split(" ")},gray:{common:{outline:c,width:"2px",size:"8px"},primary:"extremesdiv-orange-purple",secondary:"extremesdiv-bluegreen-purple extremesdiv-bluegreen-orange extremesdiv-orange-pink extremes-orange extremes-purple extremes-orange-gray extremes-purple-gray".split(" ")},
topo:{common:{outline:c,width:"2px",size:"8px"},primary:"extremesdiv-orange-pink",secondary:"extremesdiv-redpurple-blue extremesdiv-orange-blue extremesdiv-green-pink extremes-orange extremes-pink extremes-orange-gray extremes-pink-gray".split(" ")},terrain:{common:{outline:c,width:"2px",size:"8px"},primary:"extremesdiv-bluegreen-orange",secondary:"extremesdiv-bluegreen-redpurple extremesdiv-green-redpurple extremesdiv-green-orange extremes-orange extremes-bluegreen extremes-orange-gray extremes-bluegreen-gray".split(" ")},
"national-geographic":{common:{outline:c,width:"2px",size:"8px"},primary:"extremesdiv-orange-yellow-blue-light",secondary:"extremesdiv-bluegreen-yellow-orange extremesdiv-green-yellow-redpurple extremes-orange extremes-blue extremes-orange-gray extremes-blue-gray".split(" ")},oceans:{common:{outline:c,width:"2px",size:"8px"},primary:"extremesdiv-red-yellow-pink",secondary:"extremesdiv-blue-green extremesdiv-bluegreen-yellow-redpurple extremesdiv-bluegreen-yellow-orange extremes-red extremes-pink extremes-red-gray extremes-pink-gray".split(" ")},
osm:{common:{outline:c,width:"2px",size:"8px"},primary:"extremesdiv-bluegreen-pink",secondary:"extremesdiv-bluegreen-redpurple extremesdiv-bluegreen-orange extremesdiv-orange-pink extremes-pink extremes-bluegreen extremes-pink-gray extremes-bluegreen-gray".split(" ")},satellite:{common:{outline:m,width:"2px",size:"8px"},primary:"extremesdiv-orange-yellow-blue-dark",secondary:"extremesdiv-red-yellow-purple extremesdiv-orange-yellow-pink extremesdiv-orange-yellow-blue-light extremes-orange-dark extremes-blue-dark extremes-orange-gray-dark extremes-blue-gray-dark".split(" ")},
hybrid:{common:{outline:m,width:"2px",size:"8px"},primary:"extremesdiv-orange-yellow-blue-dark",secondary:"extremesdiv-red-yellow-purple extremesdiv-orange-yellow-pink extremesdiv-orange-yellow-blue-light extremes-orange-dark extremes-blue-dark extremes-orange-gray-dark extremes-blue-gray-dark".split(" ")},"dark-gray":{common:{outline:m,width:"2px",size:"8px"},primary:"extremesdiv-orange-gray-blue",secondary:"extremesdiv-yellow-gray-purple extremesdiv-red-gray-blue extremesdiv-green-gray-purple extremes-orange-bright extremes-blue-bright extremes-orange-gray-bright extremes-blue-gray-bright".split(" ")}}}},
n={getThemes:function(a){var b=[];a=u.normalizedBasemapId(a);for(var e in t){var g=t[e],c=C(g);a&&-1===c.indexOf(a)||b.push({name:g.name,label:g.label,description:g.description,basemaps:c})}return b},getSchemes:function(a){var b=u.normalizedBasemapId(a.basemap),e=a.theme,g=a.geometryType,c=a.worldScale,f=a.view,d=y(t[e],b),h;d&&(a=r(d.primary,d.common,g,e,b),h={primaryScheme:c?n.toWorldScale({scheme:a,view:f}):a,secondarySchemes:d.secondary.map(function(a){a=r(a,d.common,g,e,b);return c?n.toWorldScale({scheme:a,
view:f}):a})});return h},getSchemeById:function(a){var b,e,g,c,f=a.id,d=a.geometryType;f&&(f=f.split("/"))&&(e=f[0],g=f[1],c=f[2]);(f=y(t[e],g))&&(b=r(c,f.common,d,e,g));return a.worldScale?n.toWorldScale({scheme:b,view:a.view}):b},cloneScheme:function(a){var b;a&&(b=E.mixin({},a),b.colors=v(b.colors),b.colorsForClassBreaks=b.colorsForClassBreaks.map(function(a){return{numClasses:a.numClasses,colors:v(a.colors)}}),b.noDataColor&&(b.noDataColor=new p(b.noDataColor)),b.outline&&(b.outline={color:b.outline.color&&
new p(b.outline.color),width:b.outline.width}));return b},flipColors:function(a){a.colors.reverse();a.colorsForClassBreaks.forEach(function(a){a.colors.reverse()});return a},getMatchingSchemes:function(a){var b=a.theme,c=a.geometryType,g=a.colors,h=a.worldScale,f=a.view,d=t[b],k=[];C(d).forEach(function(a){var e=y(d,a);if(e){var l=B(r(e.primary,e.common,c,b,a),g);l&&k.push(h?n.toWorldScale({scheme:l,view:f}):l);e.secondary.forEach(function(d){(d=B(r(d,e.common,c,b,a),g))&&k.push(h?n.toWorldScale({scheme:d,
view:f}):d)})}});return k},toWorldScale:function(a){if(a.scheme&&a.view){var b=a.scheme;b.width&&(b.width=u.toWorldScale(b.width,a.view));b.size&&(b.size=u.toWorldScale(b.size,a.view));return b}}};return n});
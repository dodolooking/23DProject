/*! ArcGIS API for JavaScript 4.3 | Copyright (c) 2017 Esri. All rights reserved. | http://www.esri.com/legal/privacy | https://developers.arcgis.com/terms/faq */
!function(e,t){"use strict";var n,r,a,o=e,i=o.document,l=o.navigator,s=o.setTimeout,c=o.clearTimeout,u=o.setInterval,f=o.clearInterval,d=o.getComputedStyle,p=o.encodeURIComponent,h=o.ActiveXObject,m=o.Error,y=o.Number.parseInt||o.parseInt,b=o.Number.parseFloat||o.parseFloat,v=o.Number.isNaN||o.isNaN,g=o.Date.now,w=o.Object.keys,x=o.Object.prototype.hasOwnProperty,C=o.Array.prototype.slice,E=function(){var e=function(e){return e};if("function"==typeof o.wrap&&"function"==typeof o.unwrap)try{var t=i.createElement("div"),n=o.unwrap(t);1===t.nodeType&&n&&1===n.nodeType&&(e=o.unwrap)}catch(e){}return e}(),T=function(e){return C.call(e,0)},j=function(){var e,n,r,a,o,i,l=T(arguments),s=l[0]||{};for(e=1,n=l.length;e<n;e++)if(null!=(r=l[e]))for(a in r)x.call(r,a)&&(o=s[a],i=r[a],s!==i&&i!==t&&(s[a]=i));return s},k=function(e){var t,n,r,a;if("object"!=typeof e||null==e||"number"==typeof e.nodeType)t=e;else if("number"==typeof e.length)for(t=[],n=0,r=e.length;n<r;n++)x.call(e,n)&&(t[n]=k(e[n]));else{t={};for(a in e)x.call(e,a)&&(t[a]=k(e[a]))}return t},D=function(e,t){for(var n={},r=0,a=t.length;r<a;r++)t[r]in e&&(n[t[r]]=e[t[r]]);return n},N=function(e,t){var n={};for(var r in e)t.indexOf(r)===-1&&(n[r]=e[r]);return n},O=function(e){if(e)for(var t in e)x.call(e,t)&&delete e[t];return e},I=function(e,t){if(e&&1===e.nodeType&&e.ownerDocument&&t&&(1===t.nodeType&&t.ownerDocument&&t.ownerDocument===e.ownerDocument||9===t.nodeType&&!t.ownerDocument&&t===e.ownerDocument))do{if(e===t)return!0;e=e.parentNode}while(e);return!1},F=function(e){var t;return"string"==typeof e&&e&&(t=e.split("#")[0].split("?")[0],t=e.slice(0,e.lastIndexOf("/")+1)),t},S=function(e){var t,n;return"string"==typeof e&&e&&(n=e.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),n&&n[1]?t=n[1]:(n=e.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),n&&n[1]&&(t=n[1]))),t},_=function(){var e,t;try{throw new m}catch(e){t=e}return t&&(e=t.sourceURL||t.fileName||S(t.stack)),e},L=function(){var e,n,r;if(i.currentScript&&(e=i.currentScript.src))return e;if(n=i.getElementsByTagName("script"),1===n.length)return n[0].src||t;if("readyState"in(n[0]||document.createElement("script")))for(r=n.length;r--;)if("interactive"===n[r].readyState&&(e=n[r].src))return e;return"loading"===i.readyState&&(e=n[n.length-1].src)?e:(e=_())?e:t},A=function(){var e,n,r,a=i.getElementsByTagName("script");for(e=a.length;e--;){if(!(r=a[e].src)){n=null;break}if(r=F(r),null==n)n=r;else if(n!==r){n=null;break}}return n||t},$=function(){var e=F(L())||A()||"";return e+"ZeroClipboard.swf"},V=function(){var e=/win(dows|[\s]?(nt|me|ce|xp|vista|[\d]+))/i;return!!l&&(e.test(l.appVersion||"")||e.test(l.platform||"")||(l.userAgent||"").indexOf("Windows")!==-1)},X=function(){return null==o.opener&&(!!o.top&&o!=o.top||!!o.parent&&o!=o.parent)}(),M="html"===i.documentElement.nodeName,Y={bridge:null,version:"0.0.0",pluginType:"unknown",sandboxed:null,disabled:null,outdated:null,insecure:null,unavailable:null,degraded:null,deactivated:null,overdue:null,ready:null},z="11.0.0",B={},P={},Z=null,H=0,R=0,J={ready:"Flash communication is established",error:{"flash-sandboxed":"Attempting to run Flash in a sandboxed iframe, which is impossible","flash-disabled":"Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.","flash-outdated":"Flash is too outdated to support ZeroClipboard","flash-insecure":"Flash will be unable to communicate due to a protocol mismatch between your `swfPath` configuration and the page","flash-unavailable":"Flash is unable to communicate bidirectionally with JavaScript","flash-degraded":"Flash is unable to preserve data fidelity when communicating with JavaScript","flash-deactivated":"Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.","flash-overdue":"Flash communication was established but NOT within the acceptable time limit","version-mismatch":"ZeroClipboard JS version number does not match ZeroClipboard SWF version number","clipboard-error":"At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard","config-mismatch":"ZeroClipboard configuration does not match Flash's reality","swf-not-found":"The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity","browser-unsupported":"The browser does not support the required HTML DOM and JavaScript features"}},K=["flash-unavailable","flash-degraded","flash-overdue","version-mismatch","config-mismatch","clipboard-error"],U=["flash-sandboxed","flash-disabled","flash-outdated","flash-insecure","flash-unavailable","flash-degraded","flash-deactivated","flash-overdue"],W=new RegExp("^flash-("+U.map(function(e){return e.replace(/^flash-/,"")}).join("|")+")$"),q=new RegExp("^flash-("+U.filter(function(e){return"flash-disabled"!==e}).map(function(e){return e.replace(/^flash-/,"")}).join("|")+")$"),G={swfPath:$(),trustedDomains:o.location.host?[o.location.host]:[],cacheBust:!0,forceEnhancedClipboard:!1,flashLoadTimeout:3e4,autoActivate:!0,bubbleEvents:!0,fixLineEndings:!0,containerId:"global-zeroclipboard-html-bridge",containerClass:"global-zeroclipboard-container",swfObjectId:"global-zeroclipboard-flash-bridge",hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",forceHandCursor:!1,title:null,zIndex:999999999},Q=function(e){"object"!=typeof e||!e||"length"in e||w(e).forEach(function(t){if(/^(?:forceHandCursor|title|zIndex|bubbleEvents|fixLineEndings)$/.test(t))G[t]=e[t];else if(null==Y.bridge)if("containerId"===t||"swfObjectId"===t){if(!ye(e[t]))throw new Error("The specified `"+t+"` value is not valid as an HTML4 Element ID");G[t]=e[t]}else G[t]=e[t]});{if("string"!=typeof e||!e)return k(G);if(x.call(G,e))return G[e]}},ee=function(){return We(),{browser:j(D(l,["userAgent","platform","appName","appVersion"]),{isSupported:te()}),flash:N(Y,["bridge"]),zeroclipboard:{version:Ge.version,config:Ge.config()}}},te=function(){return!!(i.addEventListener&&o.Object.keys&&o.Array.prototype.map)},ne=function(){return!!(Y.sandboxed||Y.disabled||Y.outdated||Y.unavailable||Y.degraded||Y.deactivated)},re=function(e,r){var a,o,i,l={};if("string"==typeof e&&e?i=e.toLowerCase().split(/\s+/):"object"!=typeof e||!e||"length"in e||"undefined"!=typeof r||w(e).forEach(function(t){var n=e[t];"function"==typeof n&&Ge.on(t,n)}),i&&i.length&&r){for(a=0,o=i.length;a<o;a++)e=i[a].replace(/^on/,""),l[e]=!0,B[e]||(B[e]=[]),B[e].push(r);if(l.ready&&Y.ready&&Ge.emit({type:"ready"}),l.error){for(te()||Ge.emit({type:"error",name:"browser-unsupported"}),a=0,o=U.length;a<o;a++)if(Y[U[a].replace(/^flash-/,"")]===!0){Ge.emit({type:"error",name:U[a]});break}n!==t&&Ge.version!==n&&Ge.emit({type:"error",name:"version-mismatch",jsVersion:Ge.version,swfVersion:n})}}return Ge},ae=function(e,t){var n,r,a,o,i;if(0===arguments.length?o=w(B):"string"==typeof e&&e?o=e.toLowerCase().split(/\s+/):"object"!=typeof e||!e||"length"in e||"undefined"!=typeof t||w(e).forEach(function(t){var n=e[t];"function"==typeof n&&Ge.off(t,n)}),o&&o.length)for(n=0,r=o.length;n<r;n++)if(e=o[n].replace(/^on/,""),i=B[e],i&&i.length)if(t)for(a=i.indexOf(t);a!==-1;)i.splice(a,1),a=i.indexOf(t,a);else i.length=0;return Ge},oe=function(e){var t;return t="string"==typeof e&&e?k(B[e])||null:k(B)},ie=function(e){var t,n,r;if(e=be(e),e&&!Te(e))return"ready"===e.type&&Y.overdue===!0?Ge.emit({type:"error",name:"flash-overdue"}):(t=j({},e),Ce.call(this,t),"copy"===e.type&&(r=_e(P),n=r.data,Z=r.formatMap),n)},le=function(){var e=G.swfPath||"",t=e.slice(0,2),n=e.slice(0,e.indexOf("://")+1);return"\\\\"===t?"file:":"//"===t||""===n?o.location.protocol:n},se=function(){var e,t,n=Y.sandboxed;return te()?(We(),"boolean"!=typeof Y.ready&&(Y.ready=!1),void(Y.sandboxed!==n&&Y.sandboxed===!0?(Y.ready=!1,Ge.emit({type:"error",name:"flash-sandboxed"})):Ge.isFlashUnusable()||null!==Y.bridge||(t=le(),t&&t!==o.location.protocol?Ge.emit({type:"error",name:"flash-insecure"}):(e=G.flashLoadTimeout,"number"==typeof e&&e>=0&&(H=s(function(){"boolean"!=typeof Y.deactivated&&(Y.deactivated=!0),Y.deactivated===!0&&Ge.emit({type:"error",name:"flash-deactivated"})},e)),Y.overdue=!1,Fe())))):(Y.ready=!1,void Ge.emit({type:"error",name:"browser-unsupported"}))},ce=function(){Ge.clearData(),Ge.blur(),Ge.emit("destroy"),Se(),Ge.off()},ue=function(e,t){var n;if("object"==typeof e&&e&&"undefined"==typeof t)n=e,Ge.clearData();else{if("string"!=typeof e||!e)return;n={},n[e]=t}for(var r in n)"string"==typeof r&&r&&x.call(n,r)&&"string"==typeof n[r]&&n[r]&&(P[r]=Ue(n[r]))},fe=function(e){"undefined"==typeof e?(O(P),Z=null):"string"==typeof e&&x.call(P,e)&&delete P[e]},de=function(e){return"undefined"==typeof e?k(P):"string"==typeof e&&x.call(P,e)?P[e]:void 0},pe=function(e){if(e&&1===e.nodeType){r&&(ze(r,G.activeClass),r!==e&&ze(r,G.hoverClass)),r=e,Ye(e,G.hoverClass);var t=e.getAttribute("title")||G.title;if("string"==typeof t&&t){var n=Oe(Y.bridge);n&&n.setAttribute("title",t)}var a=G.forceHandCursor===!0||"pointer"===Be(e,"cursor");Je(a),Re()}},he=function(){var e=Oe(Y.bridge);e&&(e.removeAttribute("title"),e.style.left="0px",e.style.top="-9999px",e.style.width="1px",e.style.height="1px"),r&&(ze(r,G.hoverClass),ze(r,G.activeClass),r=null)},me=function(){return r||null},ye=function(e){return"string"==typeof e&&e&&/^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e)},be=function(e){var t;if("string"==typeof e&&e?(t=e,e={}):"object"==typeof e&&e&&"string"==typeof e.type&&e.type&&(t=e.type),t){t=t.toLowerCase(),!e.target&&(/^(copy|aftercopy|_click)$/.test(t)||"error"===t&&"clipboard-error"===e.name)&&(e.target=a),j(e,{type:t,target:e.target||r||null,relatedTarget:e.relatedTarget||null,currentTarget:Y&&Y.bridge||null,timeStamp:e.timeStamp||g()||null});var n=J[e.type];return"error"===e.type&&e.name&&n&&(n=n[e.name]),n&&(e.message=n),"ready"===e.type&&j(e,{target:null,version:Y.version}),"error"===e.type&&(W.test(e.name)&&j(e,{target:null,minimumVersion:z}),q.test(e.name)&&j(e,{version:Y.version}),"flash-insecure"===e.name&&j(e,{pageProtocol:o.location.protocol,swfProtocol:le()})),"copy"===e.type&&(e.clipboardData={setData:Ge.setData,clearData:Ge.clearData}),"aftercopy"===e.type&&(e=Le(e,Z)),e.target&&!e.relatedTarget&&(e.relatedTarget=ve(e.target)),ge(e)}},ve=function(e){var t=e&&e.getAttribute&&e.getAttribute("data-clipboard-target");return t?i.getElementById(t):null},ge=function(e){if(e&&/^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)){var n=e.target,r="_mouseover"===e.type&&e.relatedTarget?e.relatedTarget:t,a="_mouseout"===e.type&&e.relatedTarget?e.relatedTarget:t,l=Pe(n),s=o.screenLeft||o.screenX||0,c=o.screenTop||o.screenY||0,u=i.body.scrollLeft+i.documentElement.scrollLeft,f=i.body.scrollTop+i.documentElement.scrollTop,d=l.left+("number"==typeof e._stageX?e._stageX:0),p=l.top+("number"==typeof e._stageY?e._stageY:0),h=d-u,m=p-f,y=s+h,b=c+m,v="number"==typeof e.movementX?e.movementX:0,g="number"==typeof e.movementY?e.movementY:0;delete e._stageX,delete e._stageY,j(e,{srcElement:n,fromElement:r,toElement:a,screenX:y,screenY:b,pageX:d,pageY:p,clientX:h,clientY:m,x:h,y:m,movementX:v,movementY:g,offsetX:0,offsetY:0,layerX:0,layerY:0})}return e},we=function(e){var t=e&&"string"==typeof e.type&&e.type||"";return!/^(?:(?:before)?copy|destroy)$/.test(t)},xe=function(e,t,n,r){r?s(function(){e.apply(t,n)},0):e.apply(t,n)},Ce=function(e){if("object"==typeof e&&e&&e.type){var t=we(e),n=B["*"]||[],r=B[e.type]||[],a=n.concat(r);if(a&&a.length){var i,l,s,c,u,f=this;for(i=0,l=a.length;i<l;i++)s=a[i],c=f,"string"==typeof s&&"function"==typeof o[s]&&(s=o[s]),"object"==typeof s&&s&&"function"==typeof s.handleEvent&&(c=s,s=s.handleEvent),"function"==typeof s&&(u=j({},e),xe(s,c,[u],t))}return this}},Ee=function(e){var t=null;return(X===!1||e&&"error"===e.type&&e.name&&K.indexOf(e.name)!==-1)&&(t=!1),t},Te=function(e){var t=e.target||r||null,o="swf"===e._source;switch(delete e._source,e.type){case"error":var i="flash-sandboxed"===e.name||Ee(e);"boolean"==typeof i&&(Y.sandboxed=i),"browser-unsupported"===e.name?j(Y,{disabled:!1,outdated:!1,unavailable:!1,degraded:!1,deactivated:!1,overdue:!1,ready:!1}):U.indexOf(e.name)!==-1?j(Y,{disabled:"flash-disabled"===e.name,outdated:"flash-outdated"===e.name,insecure:"flash-insecure"===e.name,unavailable:"flash-unavailable"===e.name,degraded:"flash-degraded"===e.name,deactivated:"flash-deactivated"===e.name,overdue:"flash-overdue"===e.name,ready:!1}):"version-mismatch"===e.name&&(n=e.swfVersion,j(Y,{disabled:!1,outdated:!1,insecure:!1,unavailable:!1,degraded:!1,deactivated:!1,overdue:!1,ready:!1})),He();break;case"ready":n=e.swfVersion;var l=Y.deactivated===!0;j(Y,{sandboxed:!1,disabled:!1,outdated:!1,insecure:!1,unavailable:!1,degraded:!1,deactivated:!1,overdue:l,ready:!l}),He();break;case"beforecopy":a=t;break;case"copy":var s,c,u=e.relatedTarget;!P["text/html"]&&!P["text/plain"]&&u&&(c=u.value||u.outerHTML||u.innerHTML)&&(s=u.value||u.textContent||u.innerText)?(e.clipboardData.clearData(),e.clipboardData.setData("text/plain",s),c!==s&&e.clipboardData.setData("text/html",c)):!P["text/plain"]&&e.target&&(s=e.target.getAttribute("data-clipboard-text"))&&(e.clipboardData.clearData(),e.clipboardData.setData("text/plain",s));break;case"aftercopy":je(e),Ge.clearData(),t&&t!==Me()&&t.focus&&t.focus();break;case"_mouseover":Ge.focus(t),G.bubbleEvents===!0&&o&&(t&&t!==e.relatedTarget&&!I(e.relatedTarget,t)&&ke(j({},e,{type:"mouseenter",bubbles:!1,cancelable:!1})),ke(j({},e,{type:"mouseover"})));break;case"_mouseout":Ge.blur(),G.bubbleEvents===!0&&o&&(t&&t!==e.relatedTarget&&!I(e.relatedTarget,t)&&ke(j({},e,{type:"mouseleave",bubbles:!1,cancelable:!1})),ke(j({},e,{type:"mouseout"})));break;case"_mousedown":Ye(t,G.activeClass),G.bubbleEvents===!0&&o&&ke(j({},e,{type:e.type.slice(1)}));break;case"_mouseup":ze(t,G.activeClass),G.bubbleEvents===!0&&o&&ke(j({},e,{type:e.type.slice(1)}));break;case"_click":a=null,G.bubbleEvents===!0&&o&&ke(j({},e,{type:e.type.slice(1)}));break;case"_mousemove":G.bubbleEvents===!0&&o&&ke(j({},e,{type:e.type.slice(1)}))}if(/^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type))return!0},je=function(e){if(e.errors&&e.errors.length>0){var t=k(e);j(t,{type:"error",name:"clipboard-error"}),delete t.success,s(function(){Ge.emit(t)},0)}},ke=function(e){if(e&&"string"==typeof e.type&&e){var t,n=e.target||null,r=n&&n.ownerDocument||i,a={view:r.defaultView||o,canBubble:!0,cancelable:!0,detail:"click"===e.type?1:0,button:"number"==typeof e.which?e.which-1:"number"==typeof e.button?e.button:r.createEvent?0:1},l=j(a,e);n&&r.createEvent&&n.dispatchEvent&&(l=[l.type,l.canBubble,l.cancelable,l.view,l.detail,l.screenX,l.screenY,l.clientX,l.clientY,l.ctrlKey,l.altKey,l.shiftKey,l.metaKey,l.button,l.relatedTarget],t=r.createEvent("MouseEvents"),t.initMouseEvent&&(t.initMouseEvent.apply(t,l),t._source="js",n.dispatchEvent(t)))}},De=function(){var e=G.flashLoadTimeout;if("number"==typeof e&&e>=0){var t=Math.min(1e3,e/10),n=G.swfObjectId+"_fallbackContent";R=u(function(){var e=i.getElementById(n);Ze(e)&&(He(),Y.deactivated=null,Ge.emit({type:"error",name:"swf-not-found"}))},t)}},Ne=function(){var e=i.createElement("div");return e.id=G.containerId,e.className=G.containerClass,e.style.position="absolute",e.style.left="0px",e.style.top="-9999px",e.style.width="1px",e.style.height="1px",e.style.zIndex=""+Ke(G.zIndex),e},Oe=function(e){for(var t=e&&e.parentNode;t&&"OBJECT"===t.nodeName&&t.parentNode;)t=t.parentNode;return t||null},Ie=function(e){return"string"==typeof e&&e?e.replace(/["&'<>]/g,function(e){switch(e){case'"':return"&quot;";case"&":return"&amp;";case"'":return"&apos;";case"<":return"&lt;";case">":return"&gt;";default:return e}}):e},Fe=function(){var e,t=Y.bridge,n=Oe(t);if(!t){var r=Xe(o.location.host,G),a="never"===r?"none":"all",l=$e(j({jsVersion:Ge.version},G)),s=G.swfPath+Ae(G.swfPath,G);M&&(s=Ie(s)),n=Ne();var c=i.createElement("div");n.appendChild(c),i.body.appendChild(n);var u=i.createElement("div"),f="activex"===Y.pluginType;u.innerHTML='<object id="'+G.swfObjectId+'" name="'+G.swfObjectId+'" width="100%" height="100%" '+(f?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':'type="application/x-shockwave-flash" data="'+s+'"')+">"+(f?'<param name="movie" value="'+s+'"/>':"")+'<param name="allowScriptAccess" value="'+r+'"/><param name="allowNetworking" value="'+a+'"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="'+l+'"/><div id="'+G.swfObjectId+'_fallbackContent">&nbsp;</div></object>',t=u.firstChild,u=null,E(t).ZeroClipboard=Ge,n.replaceChild(t,c),De()}return t||(t=i[G.swfObjectId],t&&(e=t.length)&&(t=t[e-1]),!t&&n&&(t=n.firstChild)),Y.bridge=t||null,t},Se=function(){var e=Y.bridge;if(e){var r=Oe(e);r&&("activex"===Y.pluginType&&"readyState"in e?(e.style.display="none",function t(){if(4===e.readyState){for(var n in e)"function"==typeof e[n]&&(e[n]=null);e.parentNode&&e.parentNode.removeChild(e),r.parentNode&&r.parentNode.removeChild(r)}else s(t,10)}()):(e.parentNode&&e.parentNode.removeChild(e),r.parentNode&&r.parentNode.removeChild(r))),He(),Y.ready=null,Y.bridge=null,Y.deactivated=null,Y.insecure=null,n=t}},_e=function(e){var t={},n={};if("object"==typeof e&&e){for(var r in e)if(r&&x.call(e,r)&&"string"==typeof e[r]&&e[r])switch(r.toLowerCase()){case"text/plain":case"text":case"air:text":case"flash:text":t.text=e[r],n.text=r;break;case"text/html":case"html":case"air:html":case"flash:html":t.html=e[r],n.html=r;break;case"application/rtf":case"text/rtf":case"rtf":case"richtext":case"air:rtf":case"flash:rtf":t.rtf=e[r],n.rtf=r}return{data:t,formatMap:n}}},Le=function(e,t){if("object"!=typeof e||!e||"object"!=typeof t||!t)return e;var n={};for(var r in e)if(x.call(e,r))if("errors"===r){n[r]=e[r]?e[r].slice():[];for(var a=0,o=n[r].length;a<o;a++)n[r][a].format=t[n[r][a].format]}else if("success"!==r&&"data"!==r)n[r]=e[r];else{n[r]={};var i=e[r];for(var l in i)l&&x.call(i,l)&&x.call(t,l)&&(n[r][t[l]]=i[l])}return n},Ae=function(e,t){var n=null==t||t&&t.cacheBust===!0;return n?(e.indexOf("?")===-1?"?":"&")+"noCache="+g():""},$e=function(e){var t,n,r,a,i="",l=[];if(e.trustedDomains&&("string"==typeof e.trustedDomains?a=[e.trustedDomains]:"object"==typeof e.trustedDomains&&"length"in e.trustedDomains&&(a=e.trustedDomains)),a&&a.length)for(t=0,n=a.length;t<n;t++)if(x.call(a,t)&&a[t]&&"string"==typeof a[t]){if(r=Ve(a[t]),!r)continue;if("*"===r){l.length=0,l.push(r);break}l.push.apply(l,[r,"//"+r,o.location.protocol+"//"+r])}return l.length&&(i+="trustedOrigins="+p(l.join(","))),e.forceEnhancedClipboard===!0&&(i+=(i?"&":"")+"forceEnhancedClipboard=true"),"string"==typeof e.swfObjectId&&e.swfObjectId&&(i+=(i?"&":"")+"swfObjectId="+p(e.swfObjectId)),"string"==typeof e.jsVersion&&e.jsVersion&&(i+=(i?"&":"")+"jsVersion="+p(e.jsVersion)),i},Ve=function(e){if(null==e||""===e)return null;if(e=e.replace(/^\s+|\s+$/g,""),""===e)return null;var t=e.indexOf("//");e=t===-1?e:e.slice(t+2);var n=e.indexOf("/");return e=n===-1?e:t===-1||0===n?null:e.slice(0,n),e&&".swf"===e.slice(-4).toLowerCase()?null:e||null},Xe=function(){var e=function(e){var t,n,r,a=[];if("string"==typeof e&&(e=[e]),"object"!=typeof e||!e||"number"!=typeof e.length)return a;for(t=0,n=e.length;t<n;t++)if(x.call(e,t)&&(r=Ve(e[t]))){if("*"===r){a.length=0,a.push("*");break}a.indexOf(r)===-1&&a.push(r)}return a};return function(t,n){var r=Ve(n.swfPath);null===r&&(r=t);var a=e(n.trustedDomains),o=a.length;if(o>0){if(1===o&&"*"===a[0])return"always";if(a.indexOf(t)!==-1)return 1===o&&t===r?"sameDomain":"always"}return"never"}}(),Me=function(){try{return i.activeElement}catch(e){return null}},Ye=function(e,t){var n,r,a,o=[];if("string"==typeof t&&t&&(o=t.split(/\s+/)),e&&1===e.nodeType&&o.length>0){for(a=(" "+(e.className||"")+" ").replace(/[\t\r\n\f]/g," "),n=0,r=o.length;n<r;n++)a.indexOf(" "+o[n]+" ")===-1&&(a+=o[n]+" ");a=a.replace(/^\s+|\s+$/g,""),a!==e.className&&(e.className=a)}return e},ze=function(e,t){var n,r,a,o=[];if("string"==typeof t&&t&&(o=t.split(/\s+/)),e&&1===e.nodeType&&o.length>0&&e.className){for(a=(" "+e.className+" ").replace(/[\t\r\n\f]/g," "),n=0,r=o.length;n<r;n++)a=a.replace(" "+o[n]+" "," ");a=a.replace(/^\s+|\s+$/g,""),a!==e.className&&(e.className=a)}return e},Be=function(e,t){var n=d(e,null).getPropertyValue(t);return"cursor"!==t||n&&"auto"!==n||"A"!==e.nodeName?n:"pointer"},Pe=function(e){var t={left:0,top:0,width:0,height:0};if(e.getBoundingClientRect){var n=e.getBoundingClientRect(),r=o.pageXOffset,a=o.pageYOffset,l=i.documentElement.clientLeft||0,s=i.documentElement.clientTop||0,c=0,u=0;if("relative"===Be(i.body,"position")){var f=i.body.getBoundingClientRect(),d=i.documentElement.getBoundingClientRect();c=f.left-d.left||0,u=f.top-d.top||0}t.left=n.left+r-l-c,t.top=n.top+a-s-u,t.width="width"in n?n.width:n.right-n.left,t.height="height"in n?n.height:n.bottom-n.top}return t},Ze=function(e){if(!e)return!1;var t=d(e,null);if(!t)return!1;var n=b(t.height)>0,r=b(t.width)>0,a=b(t.top)>=0,o=b(t.left)>=0,i=n&&r&&a&&o,l=i?null:Pe(e),s="none"!==t.display&&"collapse"!==t.visibility&&(i||!!l&&(n||l.height>0)&&(r||l.width>0)&&(a||l.top>=0)&&(o||l.left>=0));return s},He=function(){c(H),H=0,f(R),R=0},Re=function(){var e;if(r&&(e=Oe(Y.bridge))){var t=Pe(r);j(e.style,{width:t.width+"px",height:t.height+"px",top:t.top+"px",left:t.left+"px",zIndex:""+Ke(G.zIndex)})}},Je=function(e){Y.ready===!0&&(Y.bridge&&"function"==typeof Y.bridge.setHandCursor?Y.bridge.setHandCursor(e):Y.ready=!1)},Ke=function(e){if(/^(?:auto|inherit)$/.test(e))return e;var t;return"number"!=typeof e||v(e)?"string"==typeof e&&(t=Ke(y(e,10))):t=e,"number"==typeof t?t:"auto"},Ue=function(e){var t=/(\r\n|\r|\n)/g;return"string"==typeof e&&G.fixLineEndings===!0&&(V()?/((^|[^\r])\n|\r([^\n]|$))/.test(e)&&(e=e.replace(t,"\r\n")):/\r/.test(e)&&(e=e.replace(t,"\n"))),e},We=function(t){var n,r,a,o=Y.sandboxed,i=null;if(t=t===!0,X===!1)i=!1;else{try{r=e.frameElement||null}catch(e){a={name:e.name,message:e.message}}if(r&&1===r.nodeType&&"IFRAME"===r.nodeName)try{i=r.hasAttribute("sandbox")}catch(e){i=null}else{try{n=document.domain||null}catch(e){n=null}(null===n||a&&"SecurityError"===a.name&&/(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(a.message.toLowerCase()))&&(i=!0)}}return Y.sandboxed=i,o===i||t||qe(h),i},qe=function(e){function t(e){var t=e.match(/[\d]+/g);return t.length=3,t.join(".")}function n(e){return!!e&&(e=e.toLowerCase())&&(/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e)||"chrome.plugin"===e.slice(-13))}function r(e){e&&(s=!0,e.version&&(f=t(e.version)),!f&&e.description&&(f=t(e.description)),e.filename&&(u=n(e.filename)))}var a,o,i,s=!1,c=!1,u=!1,f="";if(l.plugins&&l.plugins.length)a=l.plugins["Shockwave Flash"],r(a),l.plugins["Shockwave Flash 2.0"]&&(s=!0,f="2.0.0.11");else if(l.mimeTypes&&l.mimeTypes.length)i=l.mimeTypes["application/x-shockwave-flash"],a=i&&i.enabledPlugin,r(a);else if("undefined"!=typeof e){c=!0;try{o=new e("ShockwaveFlash.ShockwaveFlash.7"),s=!0,f=t(o.GetVariable("$version"))}catch(n){try{o=new e("ShockwaveFlash.ShockwaveFlash.6"),s=!0,f="6.0.21"}catch(n){try{o=new e("ShockwaveFlash.ShockwaveFlash"),s=!0,f=t(o.GetVariable("$version"))}catch(e){c=!1}}}}Y.disabled=s!==!0,Y.outdated=f&&b(f)<b(z),Y.version=f||"0.0.0",Y.pluginType=u?"pepper":c?"activex":s?"netscape":"unknown"};qe(h),We(!0);var Ge=function(){return this instanceof Ge?void("function"==typeof Ge._createClient&&Ge._createClient.apply(this,T(arguments))):new Ge};Ge.version="2.3.0",Ge.config=function(){return Q.apply(this,T(arguments))},Ge.state=function(){return ee.apply(this,T(arguments))},Ge.isFlashUnusable=function(){return ne.apply(this,T(arguments))},Ge.on=function(){return re.apply(this,T(arguments))},Ge.off=function(){return ae.apply(this,T(arguments))},Ge.handlers=function(){return oe.apply(this,T(arguments))},Ge.emit=function(){return ie.apply(this,T(arguments))},Ge.create=function(){return se.apply(this,T(arguments))},Ge.destroy=function(){return ce.apply(this,T(arguments))},Ge.setData=function(){return ue.apply(this,T(arguments))},Ge.clearData=function(){return fe.apply(this,T(arguments))},Ge.getData=function(){return de.apply(this,T(arguments))},Ge.focus=Ge.activate=function(){return pe.apply(this,T(arguments))},Ge.blur=Ge.deactivate=function(){return he.apply(this,T(arguments))},Ge.activeElement=function(){return me.apply(this,T(arguments))},"function"==typeof define&&define.amd?define(function(){return Ge}):"object"==typeof module&&module&&"object"==typeof module.exports&&module.exports?module.exports=Ge:e.ZeroClipboard=Ge}(function(){return this||window}());
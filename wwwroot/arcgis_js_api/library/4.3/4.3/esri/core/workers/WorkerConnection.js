// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
require({cache:{"esri/core/workers/WorkerProxy":function(){define(["require","exports","dojo/Deferred"],function(l,m,h){return function(){function g(a,d,b){this.parentModule=a;this.worker=d;this.connection=b;this.msgCount=0;this.outgoingJobs={};this.incomingJobs={};this.msgCount=0;this.outgoingJobs={};this.incomingJobs={}}g.prototype.invoke=function(a,d,b,e){var c=this,f=++this.msgCount,k=new h(function(a){c.worker.postMessage({type:"\x3ccancel\x3e",id:f,connection:e,data:{reason:a}});c.outgoingJobs[f]&&
delete c.outgoingJobs[f]});this.outgoingJobs[f]=k;this.worker.postMessage({type:a,id:f,connection:e,data:d},b);return k.promise};g.prototype.message=function(a){var d=this;if(a&&a.data){var b=a.data.type;if(b){var e=a.data,c=a.data.id,f=a.data.connection;if("\x3cresponse\x3e"===b&&c){if(a=this.outgoingJobs[c])delete this.outgoingJobs[c],e.error?a.reject(e.error):a.resolve(e.data)}else"\x3ccancel\x3e"===b&&c?(a=this.incomingJobs[c])&&a.cancel(e.data.reason||"cancel"):(a=this.parentModule[b],"function"===
typeof a&&(e=a.call(this.parentModule,e.data,this.connection),this.incomingJobs[c]=e,e.then(function(a){d.worker.postMessage({type:"\x3cresponse\x3e",id:c,connection:f,data:a?a.data:null},a?a.buffers:[])}).otherwise(function(a){a||(a="Error encountered at method "+b);d.worker.postMessage({type:"\x3cresponse\x3e",id:c,connection:f,data:null,error:a})}).always(function(){delete d.incomingJobs[c]})))}}};return g}()})},"*noref":1}});
define(["require","exports","./WorkerProxy"],function(l,m,h){return function(){function g(a,d,b){this.id=b;this._target="function"===typeof a?new a(this):a;this.proxy=new h(this._target,d,this)}g.prototype.invoke=function(a,d,b){return this.proxy.invoke(a,d,b,this.id)};return g}()});
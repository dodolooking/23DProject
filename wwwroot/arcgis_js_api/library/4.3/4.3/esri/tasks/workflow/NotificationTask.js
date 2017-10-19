// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["dojo/_base/lang","../../request","./WMBaseTask","./support/Enum","./support/Util"],function(f,g,k,l,m){var h=new l,e=new m;return k.createSubclass({declaredClass:"esri.tasks.workflow.NotificationTask",properties:{url:{}},subscribeToNotification:function(a,b){var c={email:a.email,user:e._formatDomainUsername(a.user)};return this._sendRequest(c,"/notificationTypes/"+a.notificationTypeId+"/subscribe",b)},unsubscribeFromNotification:function(a,b){var c={email:a.email,user:e._formatDomainUsername(a.user)};
return this._sendRequest(c,"/notificationTypes/"+a.notificationTypeId+"/unsubscribe",b)},sendNotification:function(a,b){var c={type:a.notificationType,user:e._formatDomainUsername(a.user)};return this._sendRequest(c,"/jobs/"+a.jobId+"/sendNotification",b)},getAllChangeRules:function(a){var b=this.parsedUrl.path+"/spatialNotification/changeRules",c=this._encode(f.mixin({},this.parsedUrl.query,{f:"json"}));a=this._generateOptions(c,a);return g(b,a).then(function(a){a=a.data.changeRules;this._handleChangeRulesResponse(a);
return a}.bind(this))},getChangeRule:function(a,b){a=this.parsedUrl.path+"/spatialNotification/changeRules/"+a;var c=this._encode(f.mixin({},this.parsedUrl.query,{f:"json"}));b=this._generateOptions(c,b);return g(a,b).then(function(a){a=a.data;a.evaluators=this._handleEvaluatorsResponse(a.evaluators);return a}.bind(this))},queryChangeRules:function(a,b){var c=this.parsedUrl.path+"/spatialNotification/changeRules/query",d={f:"json"};a.name&&(d.name=a.name);a.description&&(d.description=a.description);
a.searchType&&(d.searchType=a.searchType);a.user&&(d.user=e._formatDomainUsername(a.user));a=this._encode(f.mixin({},this.parsedUrl.query,d));b=this._generateOptions(a,b);return g(c,b).then(function(a){a=a.data.changeRules;this._handleChangeRulesResponse(a);return a}.bind(this))},addChangeRule:function(a,b){var c=this.parsedUrl.path+"/spatialNotification/changeRules/add",d=a.rule;a={name:d.name,notifier:JSON.stringify(d.notifier),user:e._formatDomainUsername(a.user)};d.description&&(a.description=
d.description);d.summarize&&(a.summarize=d.summarize);d.evaluators&&(d.evaluators=this._handleEvaluatorsRequest(d.evaluators),a.evaluators=JSON.stringify(d.evaluators));d=this._encode(f.mixin({},this.parsedUrl.query,a));b=this._generateOptions(d,b);return g(c,b).then(function(a){return a.data.changeRuleId})},deleteChangeRule:function(a,b){var c={user:e._formatDomainUsername(a.user)};return this._sendRequest(c,"/spatialNotification/changeRules/"+a.ruleId+"/delete",b)},getDatabaseTime:function(a,b){a=
this.parsedUrl.path+"/spatialNotification/time/"+a;var c=this._encode(f.mixin({},this.parsedUrl.query,{f:"json"}));b=this._generateOptions(c,b);return g(a,b).then(function(a){return e._convertToDate(a.data.time)})},runSpatialNotificationOnHistory:function(a,b){var c=this.parsedUrl.path+"/spatialNotification/runOnHistory",d={dataWorkspaceId:a.dataWorkspaceId,user:e._formatDomainUsername(a.user),f:"json"};a.from&&(d.from=Date.parse(a.from));a.to&&(d.to=Date.parse(a.to));a.logMatches&&(d.logMatches=
a.logMatches);a.send&&(d.send=a.send);a=this._encode(f.mixin({},this.parsedUrl.query,d));b=this._generateOptions(a,b);return g(c,b).then(function(a){return a.data.sessionId})},getChangeRuleMatch:function(a,b){a=this.parsedUrl.path+"/spatialNotification/matches/"+a;var c=this._encode(f.mixin({},this.parsedUrl.query,{f:"json"}));b=this._generateOptions(c,b);return g(a,b).then(function(a){a.data.changeTime=e._convertToDate(a.data.changeTime);return a.data})},getSessionMatches:function(a,b){a=this.parsedUrl.path+
"/spatialNotification/esssions/"+a;var c=this._encode(f.mixin({},this.parsedUrl.query,{f:"json"}));b=this._generateOptions(c,b);return g(a,b).then(function(a){a=a.data.matches;for(var b=0;b<a.length;b++){var c=a[b];c.changeTime=e._convertToDate(c.changeTime)}return a})},notifySession:function(a,b){var c={user:e._formatDomainUsername(a.user)};a.deleteAfter&&(c.deleteAfter=a.deleteAfter);return this._sendRequest(c,"/spatialNotification/sessions/"+a.sessionId+"/notify",b)},_handleChangeRulesResponse:function(a){if(a)return a.forEach(function(a){a.evaluators&&
(a.evaluators=this._handleEvaluatorsResponse(a.evaluators))}.bind(this)),a},_handleEvaluatorsResponse:function(a){if(a)return a.forEach(function(a){a.relation&&(a.relation=h.spatialRelJsonDict.fromJSON(a.relation))}),a},_handleEvaluatorsRequest:function(a){if(a)return a.forEach(function(a){a.relation&&(a.relation=h.spatialRelJsonDict.toJSON(a.relation))}),a}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../../../core/Evented","../../../webscene/Lighting"],function(f,g){var d=new Date,c={target:null,date:null},e={target:null,timezoneOffset:0};return g.createSubclass([f],{declaredClass:"esri.views.3d.environment.SceneViewLighting",properties:{cameraTrackingEnabled:{value:!0},ambientOcclusionEnabled:{value:!1},defaultDate:{get:function(){return new Date(this._get("defaultDate"))},set:function(a){var b=this._get("date")===this._get("defaultDate");a=new Date(a);this._set("defaultDate",a);b&&
this._set("date",a)}},date:{cast:function(a){return a},set:function(a){null!=a&&(this._set("date",new Date(a)),this.positionTimezoneInfo.autoUpdated=!1,this._emitDateWillChange())}}},constructor:function(){this.positionTimezoneInfo={hours:0,minutes:0,seconds:0,autoUpdated:!0};this._autoUpdateDate=null;var a=(new Date).getFullYear(),a=new Date("March 15, "+a+" 12:00:00 UTC");this._set("defaultDate",a);this._set("date",a)},autoUpdate:function(a,b){var c=this._calculateTimezoneOffset(this.positionTimezoneInfo);
this.positionTimezoneInfo.hours=b.hours;this.positionTimezoneInfo.minutes=b.minutes;this.positionTimezoneInfo.seconds=b.seconds;if(null!=a){this.positionTimezoneInfo.autoUpdated=!0;var d=this.date&&this.date.getTime();this._set("date",new Date(a));this._emitDateWillChange()}b=this._calculateTimezoneOffset(this.positionTimezoneInfo);c!==b&&(e.target=this,e.timezoneOffset=b,this.emit("timezone-will-change",e));if(null!=a)return d!==a.getTime()},_calculateTimezoneOffset:function(a){return Math.round(a.hours+
a.minutes/60+a.seconds/3600)},_emitDateWillChange:function(){c.target=this;d.setTime(this._get("date").getTime());c.date=d;this.emit("date-will-change",c)}})});
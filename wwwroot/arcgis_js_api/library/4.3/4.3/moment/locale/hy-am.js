//>>built
(function(b,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define(["../moment"],a):a(b.moment)})(this,function(b){return b.defineLocale("hy-am",{months:{format:"\u0570\u0578\u0582\u0576\u057e\u0561\u0580\u056b \u0583\u0565\u057f\u0580\u057e\u0561\u0580\u056b \u0574\u0561\u0580\u057f\u056b \u0561\u057a\u0580\u056b\u056c\u056b \u0574\u0561\u0575\u056b\u057d\u056b \u0570\u0578\u0582\u0576\u056b\u057d\u056b \u0570\u0578\u0582\u056c\u056b\u057d\u056b \u0585\u0563\u0578\u057d\u057f\u0578\u057d\u056b \u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580\u056b \u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b \u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056b \u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b".split(" "),
standalone:"\u0570\u0578\u0582\u0576\u057e\u0561\u0580 \u0583\u0565\u057f\u0580\u057e\u0561\u0580 \u0574\u0561\u0580\u057f \u0561\u057a\u0580\u056b\u056c \u0574\u0561\u0575\u056b\u057d \u0570\u0578\u0582\u0576\u056b\u057d \u0570\u0578\u0582\u056c\u056b\u057d \u0585\u0563\u0578\u057d\u057f\u0578\u057d \u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580 \u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580 \u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580 \u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580".split(" ")},
monthsShort:"\u0570\u0576\u057e \u0583\u057f\u0580 \u0574\u0580\u057f \u0561\u057a\u0580 \u0574\u0575\u057d \u0570\u0576\u057d \u0570\u056c\u057d \u0585\u0563\u057d \u057d\u057a\u057f \u0570\u056f\u057f \u0576\u0574\u0562 \u0564\u056f\u057f".split(" "),weekdays:"\u056f\u056b\u0580\u0561\u056f\u056b \u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b \u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b \u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b \u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b \u0578\u0582\u0580\u0562\u0561\u0569 \u0577\u0561\u0562\u0561\u0569".split(" "),
weekdaysShort:"\u056f\u0580\u056f \u0565\u0580\u056f \u0565\u0580\u0584 \u0579\u0580\u0584 \u0570\u0576\u0563 \u0578\u0582\u0580\u0562 \u0577\u0562\u0569".split(" "),weekdaysMin:"\u056f\u0580\u056f \u0565\u0580\u056f \u0565\u0580\u0584 \u0579\u0580\u0584 \u0570\u0576\u0563 \u0578\u0582\u0580\u0562 \u0577\u0562\u0569".split(" "),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0569.",LLL:"D MMMM YYYY \u0569., HH:mm",LLLL:"dddd, D MMMM YYYY \u0569., HH:mm"},calendar:{sameDay:"[\u0561\u0575\u057d\u0585\u0580] LT",
nextDay:"[\u057e\u0561\u0572\u0568] LT",lastDay:"[\u0565\u0580\u0565\u056f] LT",nextWeek:function(){return"dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT"},lastWeek:function(){return"[\u0561\u0576\u0581\u0561\u056e] dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT"},sameElse:"L"},relativeTime:{future:"%s \u0570\u0565\u057f\u0578",past:"%s \u0561\u057c\u0561\u057b",s:"\u0574\u056b \u0584\u0561\u0576\u056b \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",m:"\u0580\u0578\u057a\u0565",mm:"%d \u0580\u0578\u057a\u0565",
h:"\u056a\u0561\u0574",hh:"%d \u056a\u0561\u0574",d:"\u0585\u0580",dd:"%d \u0585\u0580",M:"\u0561\u0574\u056b\u057d",MM:"%d \u0561\u0574\u056b\u057d",y:"\u057f\u0561\u0580\u056b",yy:"%d \u057f\u0561\u0580\u056b"},meridiemParse:/\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/,isPM:function(a){return/^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(a)},
meridiem:function(a){return 4>a?"\u0563\u056b\u0577\u0565\u0580\u057e\u0561":12>a?"\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561":17>a?"\u0581\u0565\u0580\u0565\u056f\u057e\u0561":"\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576"},ordinalParse:/\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/,ordinal:function(a,b){switch(b){case "DDD":case "w":case "W":case "DDDo":return 1===a?a+"-\u056b\u0576":a+"-\u0580\u0564";default:return a}},week:{dow:1,doy:7}})});
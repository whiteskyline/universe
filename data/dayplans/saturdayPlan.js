'use strict';
app.run(function(storage, dailyUtil){

  var saturdayPlanData = {
    "周六事项":{
      "Relocation服务代码更改完成": {
        "micloud-infra-review代码更改": {_dl: "16:30", _f: true},
        "play代码更改": {_dl: "17:30", _f: true},
        "relocation-fe代码更改": {_dl: "18:00", _f: true}
      },
      "Executor服务": {
        "构建Executor服务": {},
        "部署": {}
      },
      "理财功能增加": {
        "功能添加": {
          "小类日变化图":{
            "URL调查":{},
            "代码完成":{}
          }
        }
      }
    }
  };

  dailyUtil.registerDailyPlan(saturdayPlanData, "8:00", "23:00", "Saturday", "day")
});

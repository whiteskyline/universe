'use strict';
app.run(function(storage, dailyUtil){

  var mondayPlanData = {
    "日事项":{
      "工作": {
        "ClientSDK": {
          "Android依赖包处理": {},
          "Android请求重写": {},
          "修改Wifi-SDK使用重写包": {}
        },
        "剩余服务更新推动": {
          _dl: "23:00"
        },
        "mt-bug解决": {
          _f: true
        }
      },
      "学习": {
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

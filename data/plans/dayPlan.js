'use strict';
app.run(function(storage, dailyUtil){

  var mondayPlanData = {
    "日事项":{
      "工作": {
        "ClientSDK": {
          "修改Wifi-SDK使用重写包": {},
        }
      },
      "学习": {
        "ExecutorService更新版本": {_dl: "10:00"},
        "Redis两章": {_dl: "12:00"},
        "SnowFlake服务的总结": {_dl: "14:00"},
        "机器学习第一章完成": {_dl: "18:00"}
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

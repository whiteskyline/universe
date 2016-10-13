'use strict';
app.run(function(storage, dailyUtil){

  var mondayPlanData = {
    "日事项":{
      "工作": {
        "ClientSDK": {
          "环境切换过程Review": {},
          "Batch过程Review": {},
          "全部代码Check": {}
        }
      },
      "学习": {
        "Redis-Sentinel部署": {},
        "机器学习第一章完成": {_dl: "18:00", _f: 0.8}
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

'use strict';
app.run(function(storage, dailyUtil){

  var mondayPlanData = {
    "日事项":{
      "工作": {
        "ClientSDK": {
        },
        "剩余服务更新推动": {}
      },
      "学习": {
        "Thrift框架研究": {
          "Swift解释器部分": {}
        }
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

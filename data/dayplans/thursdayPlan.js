'use strict';
app.run(function(storage, dailyUtil){

  var thursdayPlanData = {
    "周四事项":{
      "Relocation-Action更改": {
        "添加https支持配置flag":{}
      }
    }
  };

  dailyUtil.registerDailyPlan(thursdayPlanData, "8:00", "23:00", "Thursday", "day")
});

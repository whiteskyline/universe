'use strict';
app.run(function(storage, dailyUtil){

  var fridayPlanData = {
    "周五事项":{
      "无":{}
    }
  };

  dailyUtil.registerDailyPlan(fridayPlanData, "8:00", "23:00", "Friday", "day")
});

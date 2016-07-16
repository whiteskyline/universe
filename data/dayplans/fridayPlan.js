'use strict';
app.run(function(storage, dailyUtil){

  var fridayPlanData = {
    "周五事项":{
      "无":{}
    }
  };

  storage.register("周五事项", fridayPlanData, true, "2016/7/15 10:00", "2016/7/15 23:00");
});

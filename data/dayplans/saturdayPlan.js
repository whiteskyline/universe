'use strict';
app.run(function(storage, dailyUtil){

  var saturdayPlanData = {
    "周六事项":{
      "无":{}
    }
  };

  storage.register("周六事项", saturdayPlanData, true, "2016/7/16 10:00", "2016/7/16 23:00");
});

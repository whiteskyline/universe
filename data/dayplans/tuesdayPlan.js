'use strict';
app.run(function(storage){

  var tuesdayPlanData = {
    "周二事项":{
      "周一遗留事务":{
        "客户端支持能力调研":{},
        "现有头部内容调查":{},
        "Wiki文档完成":{}
      },
      "HTTPS设计更改":{
        "Relocation-Redirect文档更改":{}
      },
      "Relocation更改安排":{
      }
    }
  };

  storage.register("周二事项", tuesdayPlanData, true, "2016/7/12 10:00", "2016/7/12 23:00");
});

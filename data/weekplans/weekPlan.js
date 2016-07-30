'use strict';
app.run(function(storage, weeklyUtil){

  var weekPlanData = {
    "周计划":{
      "Rose逻辑开发": {
        "Interceptor开发":{_f: 0.5},
        "MicloudInternalAPI更改Interceptor":{
          "代码更改":{_f: true},
          "Onebox测试":{}
        },
        _dl: "Thu 18"
      },
      "Play逻辑开发": {
        "RelocationAction开发":{_f: true},
        "Wifi更改":{
          "代码更改":{},
          "Onebox测试":{}
        },
        _dl: "Fri 16"
      }
    }
  };

  weeklyUtil.registerWeeklyPlan(weekPlanData, "week")
});

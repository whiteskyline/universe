'use strict';
app.run(function(storage, weeklyUtil){

  var weekPlanData = {
    "周计划":{
      "Rose逻辑开发": {
        "Interceptor开发":{_f: true}
      },
      "Play逻辑开发": {
        "RelocationAction开发":{_f: true},
        "Wifi更改":{
          "代码更改":{_f: true},
          "Onebox测试":{_f: true},
          "Staging上线":{_f: true}
        },
        _dl: "Tue 16"
      },
      "Relocation-Cache改进": {
        "调查学习": {_f: true},
        "实现细化": {_f: 0.3},
        "大规模测试": {}
      },
      "Rose-Play代码合并": {},
      "缓存不一致问题考虑解决": {}
    }
  };

  weeklyUtil.registerWeeklyPlan(weekPlanData, "week")
});

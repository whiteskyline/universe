'use strict';
app.run(function(storage, weeklyUtil){

  var weekPlanData = {
    "周计划":{
      "工作": {
        "ClientSDK工作": {
          "项目细化与时间估计": {}
        },
        "其他服务上线": {
          "其他服务上线": {_ac: true, _dl: "Web 12:00", _f: true}
        }
      },
      "学习": {
        "ExecutorService完成": {
          "Job正常执行": {_ac: true, _f: 0.6},
          "总结Thrift内部的一些高级的内容": {
          },
          _dl: "Tue 22:00"
        },
      }
    }
  };

  weeklyUtil.registerWeeklyPlan(weekPlanData, "isoWeek")
});

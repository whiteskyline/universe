'use strict';
app.run(function(storage, weeklyUtil){

  var weekPlanData = {
    "周计划":{
      "工作": {
        "ClientSDK工作": {
          "融合帐号与Auth认证机制": {_dl: "Sat 12:00"},
          "项目细化与时间估计": {_dl: "Sun 12:00"},
          "Wifi-FE-SDK发布": {_dl: "Sun 20:00"},
          "Wifi-FE客户端使用SDK调用": {}
        },
        "UserMappingId转换接口": {_ac: true}
      },
      "学习": {
        "ExecutorService完成": {
          _dl: "Tue 22:00"
        },
        "Redis使用学习": {_dl: "Sun 12:00"},
        "SnowFlake服务架构": {_dl: "Sat 12:00"}
      }
    }
  };

  weeklyUtil.registerWeeklyPlan(weekPlanData, "isoWeek")
});

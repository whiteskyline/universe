'use strict';
app.run(function(storage, weeklyUtil){

  var weekPlanData = {
    "周计划":{
      "工作": {
        "ClientSDK工作": {
          "研究各个客户端的基本帐号流程": {_dl: "Wed 12:00", _f: true},
          "融合帐号与Auth认证机制": {_dl: "Sat 12:00"},
          "项目细化与时间估计": {_dl: "Sun 12:00"},
          "Wifi-FE-SDK发布": {_dl: "Sun 20:00"},
          "Wifi-FE客户端使用SDK调用": {}
        },
        "其他服务上线": {
          "其他服务上线": {_ac: true, _dl: "Web 12:00", _f: true}
        },
        "mt-bug解决": {
          _ac: true,
          _f: true
        },
        "UserMappingId转换接口": {_ac: true}
      },
      "学习": {
        "ExecutorService完成": {
          "Job正常执行": {_ac: true, _f: 0.6, _dl: "Sat 20:00"},
          "Swift的序列化插件": {
            _dl: "Tue 22:00", _f: true
          },
          _dl: "Tue 22:00"
        },
        "Redis使用学习": {_dl: "Sun 12:00"},
        "沙盒技术总结": {_dl: "Sat 12:00"},
        "SnowFlake服务架构": {_dl: "Sat 12:00"}
      }
    }
  };

  weeklyUtil.registerWeeklyPlan(weekPlanData, "isoWeek")
});

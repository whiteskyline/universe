'use strict';
app.run(function(storage, weeklyUtil){

  var weekPlanData = {
    "周计划":{
      "工作": {
        "ClientSDK工作": {
          "项目细化与时间估计": {_dl: "Sun", _f: true},
          "PassportChain的common实现": {_dl: "Sat", _f: true},
          "RelocationChain的common实现": {_dl: "Sat", _f: true},
          "PassportChaint的test实现": {_dl: "Sun"},
          "RelocationChain的test实现": {_dl: "Sun"},
          "test环境基础测试": {_dl: "Sun"}
        },
        "UserMappingId转换接口": {
          _c: "提供micloud-infra-api进行所有的一些内部请求的处理"
        }
      },
      "学习": {
        "ExecutorService完成": {
          _f: true,
          _dl: "Tue 22:00"
        },
        "Redis使用学习": {_dl: "Sun 12:00"},
        "SnowFlake服务架构": {_dl: "Sat 12:00"},
        "机器学习第一章完成": {_dl: "Fri 12:00"}
      }
    }
  };

  weeklyUtil.registerWeeklyPlan(weekPlanData, "isoWeek")
});

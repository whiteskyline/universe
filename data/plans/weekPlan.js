'use strict';
app.run(function(storage, weeklyUtil){

  var weekPlanData = {
    "周计划":{
      "工作": {
        "ClientSDK工作": {
          "背景了解": {_ac: true},
          "项目细化与时间估计": {}
        },
        "其他服务上线": {
          "Https支持开启": {_ac: true},
          "其他服务上线": {}
        }
      },
      "学习": {
        "Apache Tomcat": {
          "时序图整理": {
            "协议层整理": {_f: true},
            "容器层整理": {},
            "应用层整理": {}
          },
          "Worker机制研究": {},
          "Action机制研究": {},
          "特殊情况处理": {},
          _dl: "Sat 20:00"
        },
        "ExecutorService完成": {
          "Job正常执行": {_ac: true},
          "Scala的Future/Promise机制探究": {

          },
          "总结Thrift内部的一些高级的内容": {
            "服务启动": {},
            "利用Factory等对Thrift服务进行定制，达到自动发现等功能": {
            }
          },
          _dl: "Wed 21:00"
        },
      }
    }
  };

  weeklyUtil.registerWeeklyPlan(weekPlanData, "week")
});

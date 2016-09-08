'use strict';
app.run(function(storage, weeklyUtil){

  var weekPlanData = {
    "周计划":{
      "工作": {
        "ClientSDK工作": {
          "背景了解": {_ac: true, _dl: "Wed 20:00"},
          "项目细化与时间估计": {}
        },
        "其他服务上线": {
          "Https支持开启": {_ac: true, _dl: "Tue 18:00", _f: true},
          "其他服务上线": {_ac: true, _dl: "Web 12:00", _f: true}
        }
      },
      "学习": {
        "Apache Tomcat": {
          "时序图整理": {
            "协议层整理": {_f: true},
            "容器层整理": {_f: true},
            "应用层整理": {_f: true}
          },
          "Worker机制研究": {},
          "Action机制研究": {},
          "特殊情况处理": {
            "Https支持": {_f: true}
          },
          _dl: "Wed 20:00"
        },
        "ExecutorService完成": {
          "Job正常执行": {_ac: true, _f: 0.6},
          "Scala的Future/Promise机制探究": {
            _f: true
          },
          "总结Thrift内部的一些高级的内容": {
            "服务启动": {},
            "利用Factory等对Thrift服务进行定制，达到自动发现等功能": {
            },
            "Thrift的序列化框架": {}
          },
          _dl: "Tue 22:00"
        },
      }
    }
  };

  weeklyUtil.registerWeeklyPlan(weekPlanData, "isoWeek")
});

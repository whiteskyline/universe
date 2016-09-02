'use strict';
app.run(function(storage, dailyUtil){

  var mondayPlanData = {
    "日事项":{
      "工作": {
        "ClientSDK": {
          "背景了解": {
            _ac: true,
            "antlr语法学习": {},
            "twirl模板框架使用学习": {}
          },
          "当前工作状态接手": {}
        }
      },
      "学习": {
        "ExecutorService实现": {
          "测试": {},
          "Scala/Java的Future/Promise机制探究": {}
        },
        "ThriftExecutorService对接": {

        },
        "Tomcat探究": {
          "时序图整理": {
            "容器曾整理": {_ac: true},
            "ClassLoader机制整理": {}
          }
        }
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

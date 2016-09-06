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
          "测试": {_f: 0.6},
          "Scala/Java的Future/Promise机制探究": {},
          "libcap更改": {}
        },
        "ThriftExecutorService对接": {
          _f: true
        },
        "Tomcat探究": {
          "时序图整理": {
            "容器层整理": {_f: true},
            "疑问解决": {
              "ClassLoader机制是如何工作的": {_f: true},
              "Https的机制是如何工作的": {},
              "LifeCycleMBeanBase的JMX相关的用来干什么": {_f: true},
              "KeepAlive机制如何进行工作": {_f: true}
            }
          }
        }
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

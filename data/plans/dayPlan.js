'use strict';
app.run(function(storage, dailyUtil){

  var mondayPlanData = {
    "日事项":{
      "工作": {
        "Status-API上线完成确认": {_f: true},
        "wifi-fe上线完成确认": {_f: 0.5},
        "Cache更改": {
          "代码编写": {_f: true},
          "测试": {_f: true}
        }
      },
      "学习": {
        "ExecutorService实现": {
          "编写": {_ac: true, _f: 0.3},
          "测试": {},
          "Scala/Java的Future/Promise机制探究": {}
        },
        "ThriftExecutorService对接": {

        },
        "Tomcat-Worker机制探究": {

        },
        "完成树形状的重构": {
          _ac: true
        }
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

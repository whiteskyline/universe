'use strict';
app.run(function(storage, dailyUtil){

  var mondayPlanData = {
    "日事项":{
      "工作": {
        "ClientSDK": {
          "背景了解": {
            _ac: true,
            _dl: "16:00",
            "antlr语法学习": {_dl: "12:00"},
            "twirl模板框架使用学习": {_dl: "15:00"}
          },
          "当前工作状态接手": {}
        },
        "剩余服务更新推动": {

        }
      },
      "学习": {
        "ExecutorService实现": {
          "测试": {_f: 0.6},
          "libcap更改": {_ac: true}
        },
        "Tomcat长连接作用机制": {

        }
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

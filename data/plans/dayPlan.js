'use strict';
app.run(function(storage, dailyUtil){

  var mondayPlanData = {
    "日事项":{
      "工作": {
        "ClientSDK": {
          "背景了解": {
            _ac: true,
            _dl: "16:00",
            "antlr语法学习": {_dl: "12:00", _f: true},
            "twirl模板框架使用学习": {_dl: "15:00", _f: true}
          },
          "当前工作状态接手": {_f: 0.6}
        },
        "剩余服务更新推动": {

        }
      },
      "学习": {
        "ExecutorService实现": {
          "测试": {_f: 0.8},
          "libcap更改": {_f: true}
        },
        "Tomcat长连接作用机制": {
          "tomcat-native-poll机制研究": {_f: true},
          _ac: true
        },
        "Thrift框架研究": {
          "Thrift基础部分": {_ac: true, _f: true},
          "Swift解释器部分": {},
          "Thrift服务发现部分": {}
        }
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

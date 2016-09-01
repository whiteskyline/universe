'use strict';
app.run(function(storage, dailyUtil){

  var mondayPlanData = {
    "日事项":{
      "工作": {
        "ClientSDK": {
          "背景了解": {_ac: true},
          "当前工作状态接手": {}
        },
        "机房ZK切换": {
          "服务过滤": {
            "relocation-fe": {_f: true},
            "relocation-mt": {_f: true},
            "useridholder-mt": {_f: true},
            "mqueue服务-lg": {_f: true},
            "kafka服务": {_f: true}
          },
          "上线": {
            "relocation-fe": {_f: true},
            "relocation-mt": {_f: true},
            "useridholder-mt": {_f: true},
            "mqueue服务-lg": {_f: true}
          },
          "更新配置": {
            "kafka配置": {_f: true}
          }
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
            "协议层整理": {_f: true},
            "容器曾整理": {_ac: true},
            "ClassLoader机制整理": {}
          }
        }
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

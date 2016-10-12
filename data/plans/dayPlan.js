'use strict';
app.run(function(storage, dailyUtil){

  var mondayPlanData = {
    "日事项":{
      "工作": {
        "ClientSDK": {
          "Log内容更改": {
            "定义Common的日志输出": {_f: true},
            "日志输出实现": {_f: true}
          },
          "环境更改Node编写代码测试": {
            "编写": {_dl: "23", _f: true},
            "测试": {_f: true}
          },
          "Relocation的代码测试": {_dl: "12", _ac: true, _f: true},
          "代码整理": {
            "host更换逻辑的更新": {
              "Host更换逻辑更新": {_dl: "21", _f: true}
            }
          }
        },
        "跨机房Queue": {
          "准备C3环境": {_f: true},
          "打通C3-Queue": {},
          _dl: "12:00"
        }
      },
      "学习": {
        "Redis资源节省章节": {_f: true},
        "机器学习第一章完成": {_dl: "18:00"}
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

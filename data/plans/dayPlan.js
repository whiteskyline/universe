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
            "编写": {_dl: "23"},
            "测试": {}
          },
          "Relocation的代码测试": {_dl: "22"},
          "代码整理": {
            "host更换逻辑的更新": {
              "Host更换逻辑更新": {_dl: "21"}
            }
          }
        }
      },
      "学习": {
        "Redis资源节省章节": {_dl: ""},
        "机器学习第一章完成": {_dl: "18:00"}
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

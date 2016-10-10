'use strict';
app.run(function(storage, dailyUtil){

  var mondayPlanData = {
    "日事项":{
      "工作": {
        "ClientSDK": {
          "Passport的common实现": {_dl: "15:00", _f: true},
          "Relocation的common实现": {_dl: "18:00", _f: true},
          "进行Relication的服务接口实现": {_dl: "15:00", _f: true},
          "RedirectNode的common实现": {_dl: "18:00", _f: true},
          "Network的common实现": {_dl: "18:00", _f: true},
          "RequestorFactory定义": {_dl: "19:00", _f: true},
          "PassportChaint的test实现": {_dl: "Sun", _f: true},
          "Relocation的代码测试": {},
          "代码整理": {
            "PassportChain/PassportChainImpl的代码整理": {_f: true},
            "host更换逻辑的更新": {
              "早先的客户端逻辑": {_f: true},
              "Host更换逻辑更新": {}
            }
          }
        }
      },
      "学习": {
        "ExecutorService更新版本": {_dl: "10:00", _f: true},
        "Redis两章": {_dl: "12:00", _f: true},
        "SnowFlake服务的总结": {_dl: "14:00", _f: true},
        "机器学习第一章完成": {_dl: "18:00"}
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

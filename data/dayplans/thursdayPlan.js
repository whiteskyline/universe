'use strict';
app.run(function(storage, dailyUtil){

  var thursdayPlanData = {
    "周四事项":{
      "调查旧接口对Auth的影响":{
        "扫描最近两个月的日志":{_ac: true, _f: 0.6},
        "追查OAuth的责任人":{_ac: true, _f: 0.5},
        _dl: "12:00"
      },
      "Play-FE支持验证与测试":{
        "Play添加测试用例":{
          "学习Play如何编写测试":{
            "Scala环境使用测试":{
              "JUnit测试":{_f: true},
              "SBT中JUnit总结":{},
              "ScalaTest测试":{}
            },
            "使用Play上下文测试":{
              "总结": {}
            }
          }
        },
        "部署Onebox并且测试通过":{
          "部署Onebox环境": {_dl: "14:30", _f: true},
          "调查micloud-bvt的测试环境切换": {_dl: "15:30", _f: true},
          "增加相关的测试": {_dl: "17:00", _f: true}
        }
      }
    }
  };

  dailyUtil.registerDailyPlan(thursdayPlanData, "8:00", "23:00", "Thursday", "day")
});

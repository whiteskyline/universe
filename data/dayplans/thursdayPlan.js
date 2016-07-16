'use strict';
app.run(function(storage){

  var thursdayPlanData = {
    "周四事项":{
      "调查旧接口对Auth的影响":{
        "扫描最近两个月的日志":{_ac: true, _f: 0.6},
        "追查OAuth的责任人":{_ac: true, _f: 0.5},
        _dl: "2016/7/14 12:00"
      },
      "Play-FE验证与测试":{
        "Play添加测试用例":{
          "学习Play如何编写测试":{
            "Scala环境使用测试":{
              "JUnit测试":{_f: true},
              "ScalaTest测试":{}
            },
            "使用Play上下文测试":{
              "Service测试":{},
              "接口测试":{}
            },
            _ac: true
          },
          "添加测试":{
            "utils包测试": {_f: true},
            "controller包测试": {_f: true}
          }
        },
        "部署Onebox并且测试通过":{_f: true},
        _dl: "2016/7/14 17:00"
      }
    }
  };

  storage.register("周四事项", thursdayPlanData, true, "2016/7/14 10:00", "2016/7/14 23:00");
});

'use strict';
app.run(function(storage, dailyUtil){

  var tuesdayPlanData = {
    "周二事项":{
      "Play-FE上线安排": {
        "准备micloud_playlib稳定版并且更改play-fe依赖的版本": {_ac: true, _f: true},
        "依赖服务发布正式版": {
          "passportsdk-play发布正式版":{_dl: "17:00", _f: true},
          "micloud-playlib发布正式版":{_dl: "18:00", _f: true},
          _ac: true
        },
        "发送上线申请": {_ac: true, _f: true},
        "上线完成并切换流量": {}
      },
      "流量搜索": {
        "发出每周的Job":{_dl: "14:00"}
      },
      "HTTPS支持开发": {
        "测试":{
          "添加BVT测试":{_f: 0.5},
          "搭建Onebox测试环境":{}
        }
      },
      "服务器沙盒化实现":{
        _dl: "22:00"
      },
      "Tomcat架构总结":{
        _dl: "23:00"
      }
    }
  };

  dailyUtil.registerDailyPlan(tuesdayPlanData, "8:00", "23:00", "Tuesday", "day")
});

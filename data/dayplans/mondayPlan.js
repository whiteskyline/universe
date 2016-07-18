'use strict';
app.run(function(storage, dailyUtil){

  var mondayPlanData = {
    "周一事项":{
      "Play-FE验证与上线": {
        "IAuth错误更正": {_dl: "11:00", _f: true},
        "Staging流量完整切换": {_dl: "14:00", _f:true},
        "发送上线申请": {_dl: "15:00"},
        "上线完成并切换流量": {_dl: "18:00"}
      },
      "OAuth流量搜索": {
        "简单验证一天的OAuth数据": {_dl: "12:00", _f: 0.5},
        "发出每周的Job":{_dl: "13:30"}
      },
      "HTTPS支持开发": {
        "逻辑开发": {
          "Playlib-DataCenterUtil更改":{_f: true},
          "ZK加入新配置":{_f: true},
          "HostListUtil加入getHostList支持版本":{_f: true},
          "上层调用": {_f: true},
          _dl: "20:00", _ac: true
        },
        "测试": {
          "添加单元测试": {_f: true},
          "添加BVT测试": {_ac: true},
          "搭建Onebox测试环境": {}
        }
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

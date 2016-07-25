'use strict';
app.run(function(storage, dailyUtil){

  var mondayPlanData = {
    "周一事项":{
      "Play-FE验证与上线": {
        "IAuth错误更正": {_dl: "11:00", _f: true},
        "Staging流量完整切换": {_dl: "14:00", _f:true},
        "发送上线申请": {_dl: "15:00", _f: true},
        "上线完成并切换流量": {_dl: "18:00", _f: true}
      },
      "OAuth流量搜索": {
        "简单验证一天的OAuth数据": {_dl: "12:00", _f: 0.5},
        "发出每周的Job":{_dl: "13:30"}
      },
      "HTTPS支持开发": {
        "测试": {
          "搭建Onebox测试环境": {}
        }
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

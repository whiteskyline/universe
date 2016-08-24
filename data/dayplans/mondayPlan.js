'use strict';
app.run(function(storage, dailyUtil){

  var mondayPlanData = {
    "周一事项":{
      "OAuth流量搜索": {
        "简单验证一天的OAuth数据": {_dl: "20:00", _f: 0.5},
        "发出每周的Job":{_dl: "20:30"}
      },
      "支持NPM的沙河机制服务搭建":{
        "依赖内容调研": {
          "子进程控制":{_f: true},
          "npm-rpc调研":{},
          "内部queue服务调度":{},
        },
        "代码实现": {
          "lpcap程序可在chroot后执行": {_f: true},
          "包装Java服务": {}
        }
      },
      "UniverseAPP进化":{
        "在一个层级的计划页面，显示上级计划内容": {}
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

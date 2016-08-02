'use strict';
app.run(function(storage, dailyUtil){

  var mondayPlanData = {
    "周一事项":{
      "OAuth流量搜索": {
        "简单验证一天的OAuth数据": {_dl: "20:00", _f: 0.5},
        "发出每周的Job":{_dl: "20:30"}
      },
      "整理Play版本的内容上线Staging": {
        _ac: true,
        "代码整理": {"更改https支持配置为hostlist配置":{_dl: "14:00", _f: true}},
        "增加Onebox测试": {_dl: "15:30", _f: true},
        "编写Bvt测试": {_dl: "18:00", _f: true},
        "准备SNAPSHOT版本": {_dl: "14:00", _f: true},
        "更新Staging-Wifi服务": {_dl: "15:00", _f: true}
      },
      "代码级别工作": {
        "Rose支持Https工作":{
          "整理Rose代码":{},
          "Onebox测试环境":{_dl: "20:30"},
          "编写Onebox测试":{_dl: "21:30"},
        },
        "Play支持Https工作": {
          "编写Onebox测试":{},
          "编写Bvt测试":{}
        },
        _dl: "20:00"
      },
      "支持NPM的沙河机制服务搭建":{
        "依赖内容调研": {
          "子进程控制":{},
          "npm-rpc调研":{},
          "内部queue服务调度":{},
        },
        "代码实现": {
          "lpcap程序可在chroot后执行": {},
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

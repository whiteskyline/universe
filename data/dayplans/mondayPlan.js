'use strict';
app.run(function(storage, dailyUtil){

  var mondayPlanData = {
    "周一事项":{
      "OAuth流量搜索": {
        "简单验证一天的OAuth数据": {_dl: "12:00", _f: 0.5},
        "发出每周的Job":{_dl: "13:30"}
      },
      "Rose与Play工作量分解":{_dl: "15:00", _f: true},
      "代码级别工作": {
        "Rose支持Https工作":{
          "代码编写":{
            "genRedirectUrl更改":{_f: true},
            "supportHttps配置添加":{_f: true},
            "判断redirect条件添加":{_f: true},
            _dl: "17:30"
          },
          "Onebox测试环境":{_dl: "20:30"},
          "编写Unit测试":{_dl: "19:30", _f: true},
          "编写Onebox测试":{_dl: "21:30"},
          "编写BVT测试":{_dl: "22:30"}
        },
        "Play支持Https工作": {
          "代码编写": {
            "genRedirectUrl更改":{_f: true},
            "supportHttps配置添加":{_f: true},
            "判断redirect条件添加":{_f: true}
          },
          "编写Unit测试":{},
          "编写Onebox测试":{},
          "编写Bvt测试":{}
        },
        _dl: "20:00"
      },
      "支持NPM的沙河机制服务搭建":{
        "依赖内容调研": {
          "子进程权限控制方案":{
            "CPU使用控制": {_f: true},
            "API防御漏洞": {_f: true},
            _ac: true
          },
          "子进程控制":{},
          "npm-rpc调研":{},
          "内部queue服务调度":{},
          _ac: true
        }
      },
      "UniverseAPP进化":{
        "在一个层级的计划页面，显示上级计划内容": {}
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

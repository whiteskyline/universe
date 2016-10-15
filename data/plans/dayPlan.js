'use strict';
app.run(function(storage, dailyUtil){

  var mondayPlanData = {
    "日事项":{
      "工作": {
        "ClientSDK": {
          "EnvNode的详细测试": {_dl: "11:30", _f: true},
          "RelocationNode的详细测试": {_dl: "14"},
          "PassportNode的详细测试": {_dl: "17"},
          "NetworkNode的详细测试": {_dl: "20"}
        }
      },
      "学习": {
        "Redis-Sentinel部署": {},
        "机器学习第一章完成": {_dl: "18:00", _f: 0.8}
      },
      "商业": {
        "webus页面": {
          _dl: "23",
          "页面": {
            "主页面": {
              "主要按钮": {_f: true},
              "边栏项目": {}
            },
            "购票页面": {_f: true},
            "验票页面": {_f: true},
            "登录页面": {}
          },
          "脚本": {
            "购票页面脚本": {
              "页面内部逻辑脚本": {_f: true},
              "页面API脚本": {}
            },
            "验票页面脚本": {
              "页面内部逻辑脚本": {},
              "页面API脚本": {}
            }
          },
          "API编写": {
            "购票API": {_f: true},
            "票务列表API": {},
            "用票API": {_c: "生成票面信息"},
            "登录API": {
              "弄明白微信的用户授权流程": {},
              "设计登录API": {}
            },
            "获取用户信息API": {}
          }
        }
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

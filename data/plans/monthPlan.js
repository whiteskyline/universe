'use strict';
app.run(function(storage, monthlyUtil){

  var monthPlanData = {
    "月计划":{
      "工作": {
        "ClientSDK": {
          "研究": {
            "研究各个客户端的基本帐号流程": {_ac: true, _dl: "14 12:00", _f: true}
          },
          "服务更改为ClientSDK发布与SDK改进": {
            "将原接口的代码迁移到maven编译": {_ac: true, _f: true},
            "定义Base层接口": {_f: true},
            "更新wiki设计和时间安排文档": {_f: true},
            "生成接口使用Base层定义": {
              _ac: true,
              "Relocation-Base实现": {_ac: true},
              "Passport-Base实现": {},
              "Network-Base实现": {}
            },
            "实现Test环境实现": {},
            "处理batch的接口对内容进行处理": {
              "请求处理": {_f: true},
              "返回值处理": {_f: true}
            }
          },
          "目标服务更改": {
            "Wifi-FE-SDK发布": {_dl: "19 12:00"},
            "Wifi-FE-客户端使用SDK调用": {
              "融合帐号与Auth认证机制": {_dl: "17 12:00"},
              "更改以可以正确编译通过": {}
            }
          },
          "SDK改进": {
            "Play接口定义改进": {_dl: "22 12:00"},
            "Play开发流程改进": {_dl: "25 12:00"},
            "Rose发布模板": {_dl: "28 12:00"},
            "Rose发布流程改进": {_dl: "30 12:00"}
          }
        },
        "Https服务全面上线": {
          "https证书落地": {_f: true},
          "所有服务的lib检查": {_f: true},
          "美西所有服务开启https": {_f: true}
        },
        "mt-bug解决": {
          _ac: true, _f: true
        }
      },
      "学习": {
        "Redis": {
          "基础功能了解": {_f: true},
          "部署以及功能测试": {_f: 0.5},
          "问题深入分析与总结": {},
          _dl: "25 12:00"
        },
        "Play测试": {_dl: "18 12:00"},
        "SnowFlake服务架构": {_dl: "17 12:00"},
        "沙盒技术总结": {_f: true},
        "了解小米股权重酬": {_f: true}
      },
      "商业": {
        "完成微店开店流程": {_f: true}
      },
      "阅读": {
        "激活消费者心理需求": {_ac: true}
      }
    }
  };

  monthlyUtil.registerMonthlyPlan(monthPlanData, "month")
});

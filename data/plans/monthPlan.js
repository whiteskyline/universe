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
            "Wifi-FE-SDK发布": {_dl: "19 12:00"},
            "Wifi-FE-客户端使用SDK调用": {
              "融合帐号与Auth认证机制": {_dl: "17 12:00"}
            }
          },
          "SDK改进": {
            "Play接口定义改进": {_dl: "22 12:00"},
            "Play开发流程改进": {_dl: "25 12:00"},
            "Rose发布模板": {_dl: "28 12:00"},
            "Rose发布流程改进": {_dl: "30 12:00"}
          }
        },
        "mt-bug解决": {
          _ac: true, _f: true
        }
      },
      "学习": {
        "Redis": {_dl: "25 12:00"},
        "Play测试": {_dl: "18 12:00"},
        "SnowFlake服务架构": {_dl: "17 12:00"},
        "沙盒技术总结": {_dl: "17 12:00"}
      },
      "阅读": {
        "激活消费者心理需求": {_ac: true}
      }
    }
  };

  monthlyUtil.registerMonthlyPlan(monthPlanData, "month")
});

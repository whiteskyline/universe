'use strict';
app.run(function(storage, monthlyUtil){

  var monthPlanData = {
    "月计划":{
      "工作": {
        "ClientSDK": {
          "服务更改为ClientSDK发布与SDK改进": {
            "生成接口使用Base层定义": {
              _ac: true,
              "Passport-Base实现": {_dl: "8 18:00", _f: true},
              "Network-Base实现": {_dl: "10 19:00", _f: true}
            },
            "实现Test环境实现": {
              "Passport实现": {_f: true},
              "Relocation实现": {_f: true},
              "Network实现": {_f: true},
              _dl: "13 19:00"
            }
          },
          "SDK改进": {
            "Play接口定义改进": {_dl: "22 12:00"},
            "Play开发流程改进": {_dl: "25 12:00"}
          }
        },
        "UserIdHolder接口提供": {

        },
        "micloud-infra-rose升级大版本": {
          "修改hbase-client的版本": {}
        }
      },
      "学习": {
        "Redis": {
          "部署以及功能测试": {_f: true, _dl: "7 12:00"},
          "问题深入分析与总结": {},
          _dl: "7 18:00"
        },
        "Play测试方法": {_dl: "6 12:00"},
        "SnowFlake服务架构": {_dl: "7 12:00", _f: true},
        "Universe改进": {
          "统一的完成进度处理": {_f: true},
          "统一的进度颜色处理": {_f: true},
          _dl: "5 23:00"
        }
      },
      "商业": {
      },
      "阅读": {
        "激活消费者心理需求": {
          "50%": {_dl: "15 00:00"},
          "75%": {_dl: "22 00:00"},
          "100%": {_dl: "30 00:00"},
          _ac: true
        }
      }
    }
  };

  monthlyUtil.registerMonthlyPlan(monthPlanData, "month")
});

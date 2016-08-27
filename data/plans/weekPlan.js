'use strict';
app.run(function(storage, weeklyUtil){

  var weekPlanData = {
    "周计划":{
      "工作": {
        "Relocation服务": {
          "Relocation-Cache改进": {
            "调查学习": {_f: true},
            "实现细化": {_f: true},
            "大规模测试": {_f: true}
          },
          "安排wifi-fe/micloud-api上线https": {
            "relocation-fe上线完成确认": {_f: true},
            "wifi-fe上线完成确认": {_f: true},
            "status-api上线完成确认": {_f: true},
            "其他服务上线完成确认": {}
          },
          "缓存不一致问题考虑解决": {},
          "Cache机制更改": {
            _ac: true,
            _f: true,
            _dl: "Fri 18:00"
          }
        },
        "ClientSDK工作": {

        }
      },
      "学习": {
        "Apache Tomcat": {
          "时序图整理": {},
          "Worker机制研究": {},
          "Action机制研究": {},
          _dl: "Sat 20:00"
        },
        "ExecutorService完成": {
          "Scala的Future/Promise机制探究": {

          },
          "总结Thrift内部的一些高级的内容": {
            "服务启动": {},
            "利用Factory等对Thrift服务进行定制，达到自动发现等功能": {

            }
          },
          _ac: true,
          _dl: "Wed 21:00"
        },
      }
    }
  };

  weeklyUtil.registerWeeklyPlan(weekPlanData, "week")
});

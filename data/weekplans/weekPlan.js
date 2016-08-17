'use strict';
app.run(function(storage, weeklyUtil){

  var weekPlanData = {
    "周计划":{
      "工作": {
        "Relocation-Cache改进": {
          "调查学习": {_f: true},
          "实现细化": {_f: 0.3},
          "大规模测试": {}
        },
        "缓存不一致问题考虑解决": {},
        "Play-Rose Interceptor Staging上线": {
          "Staging验证上线": {_f: true},
          "BVT测试添加": {_f: true},
          _dl: "Wed 16:00"
        },
        "Production上线": {
          "依赖库升级正式版本": {},
          "Staging再次测试": {},
          _dl: "Thu 20:00"
        },
        "Cache机制更改": {
          _dl: "Fri 18:00"
        }
      },
      "学习": {
        "Java复杂注释写法": {_f: true},
        "Apache Tomcat": {
          "时序图整理": {},
          "Worker机制研究": {},
          "Action机制研究": {},
          _dl: "Sat 20:00"
        },
        "ExecutorService完成": {
          _dl: "Wed 21:00"
        }
      }
    }
  };

  weeklyUtil.registerWeeklyPlan(weekPlanData, "week")
});

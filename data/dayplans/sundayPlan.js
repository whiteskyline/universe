'use strict';
app.run(function(storage, dailyUtil){

  var sundayPlanData = {
    "周日事项":{
      "升级日计划组件": {
        "简化计划时间设置":{_f: true},
        "提供计划型中间层":{_f: true}
      },
      "理财功能增加": {
        "基础问题尝试": {
          "URL基础调用成功":{_dl: "08:00", _f: true}
        },
        "功能添加": {
          "月支出累积变化图": {
            "URL调查":{},
            "代码完成":{}
          },
          "小类日变化图":{
            "URL调查":{},
            "代码完成":{}
          },
          "理财计划与当前状态变化":{
            "URL调查":{},
            "代码完成":{}
          }
        }
      }
    }
  };

  dailyUtil.registerDailyPlan(sundayPlanData, "01:00", "23:00", "Sunday", "day")
});

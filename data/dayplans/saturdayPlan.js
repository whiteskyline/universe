'use strict';
app.run(function(storage, dailyUtil){

  var saturdayPlanData = {
    "周六事项":{
      "升级日计划组件": {
        "简化计划时间设置":{_f: true},
        "提供计划型中间层":{_f: true}
      },
      "理财功能增加": {
        "基础问题尝试": {_f: true},
        "功能添加": {
          "月支出累积变化图": {
            "URL调查":{_f: true},
            "代码完成":{_f: true}
          },
          "小类日变化图":{
            "URL调查":{},
            "代码完成":{}
          },
          "理财计划与当前状态变化":{
            "URL调查":{_f: true},
            "代码完成":{_f: true}
          }
        }
      }
    }
  };

  dailyUtil.registerDailyPlan(saturdayPlanData, "8:00", "23:00", "Saturday", "day")
});

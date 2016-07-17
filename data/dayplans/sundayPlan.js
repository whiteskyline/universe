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
            "URL调查":{_f: true},
            "代码完成":{
              "完整获取数据": {_f: true},
              "将数据绘制出来": {_f: true}
            },
            _dl: "12:30"
          },
          "小类日变化图":{
            "URL调查":{},
            "代码完成":{},
            _dl: "14:00"
          },
          "理财计划与当前状态变化":{
            "URL调查":{},
            "代码完成":{
              "完整获取数据":{},
              "将数据绘制出来":{}
            },
            _dl: "22:00"
          }
        }
      }
    }
  };

  dailyUtil.registerDailyPlan(sundayPlanData, "01:00", "23:00", "Sunday", "day")
});

'use strict';
app.run(function(storage, dailyUtil){

  var mondayPlanData = {
    "日事项":{
      "工作": {
        "去除Relocation的userId": {
          _dl: "12:00",
          _ac: true,
          _f: true
        },
        "ClientSDK": {
          "使用框架生成Wifi服务": {_dl: "16:00"},
          "修改框架": {_dl: "18:00"}
        },
        "添加设备列表Host": {
          "为超哥的服务添加列表": {_dl: "19:00"}
        }
      },
      "学习": {
        "Redis-Sentinel部署": {},
        "机器学习第一章完成": {_dl: "18:00", _f: 0.8},
        "李笑来-Live": {}
      },
      "商业": {
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

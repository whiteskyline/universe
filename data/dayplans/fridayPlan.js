'use strict';
app.run(function(storage, dailyUtil){

  var fridayPlanData = {
    "周五事项":{
      "添加其余内容的的测试内容并且运行通过":{_f: true},
      "comments更改": {
        "header format 更改": {_f: true},
        "配置内容从properties更改为Config": {_f: true},
        "prefix组装内容变为直接配死": {_f: true},
        "Review完成": {_f: true}
      },
      "上线Staging并且合并测试代码":{_f: true},
      "确认上线完成":{_f: 0.5},
      "注释语法":{_dl: "21:30", _f: true},
      "Tomcat框架学习":{
        "记录上次进度":{_dl: "22:30"},
        "搞清Action等框架":{_dl: "23:00"}
      }
    }
  };

  dailyUtil.registerDailyPlan(fridayPlanData, "8:00", "23:30", "Friday", "day")
});

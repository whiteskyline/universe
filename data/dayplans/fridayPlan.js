'use strict';
app.run(function(storage, dailyUtil){

  var fridayPlanData = {
    "周五事项":{
      "micloud-infra升级版本": {},
      "MicloudInternalAPI更改并测试": {
        "升级新版本Relocation-Interceptor": {},
        "添加BVT测试": {},
        _dl: "18:00"
      },
      "Play版本更改": {
        "添加Https配置": {_f: true},
        "更改代码": {_f: true},
        "添加测试用例": {_f: true},
        _dl: "16:00"
      },
      "Rose版本修改": {
        
      },
      "确认上线完成":{_f: 0.5},
      "Tomcat框架学习":{
        "记录上次进度":{_dl: "22:30"},
        "搞清Action等框架":{_dl: "23:00"}
      }
    }
  };

  dailyUtil.registerDailyPlan(fridayPlanData, "8:00", "23:30", "Friday", "day")
});

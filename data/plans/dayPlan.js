'use strict';
app.run(function(storage, dailyUtil){

  var mondayPlanData = {
    "日事项":{
      "工作": {
        "ClientSDK": {
          "Android依赖包处理": {_f: true},
          "Android请求重写": {_f: true},
          "修改Wifi-SDK使用重写包": {},
          "定义Shared的数据结构": {_f: true},
          "定义Wifi相关的派生类": {_f: true},
          "定义返回相关的Class": {_f: true},
          "Thrift序列化问题解决": {_f: true},
          "解决UserIdHolder的异常Exception问题": {_f: true}
        },
        "剩余服务更新推动": {
          _dl: "23:00"
        },
        "mt-bug解决": {
          _f: true
        }
      },
      "学习": {
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

'use strict';
app.run(function(storage, dailyUtil){

  var mondayPlanData = {
    "日事项":{
      "工作": {
        "ClientSDK": {
          "Comments修改": {
            "Netty的Pipeling命名方式": {_f: true},
            "修改责任链命名": {_f: true},
            "简化日志框架": {_f: true},
            "验证QueryString和Form区分": {_f: true},
            "合并Passport的实现": {_f: true},
            "将Executor取消,合并为Request,并且生成两种方法,一种是直接调用": {_f: true},
            "更改用户获取的逻辑，表现为从上层传入": {_f: true},
            "解决Request的类型问题": {_f: true},
            "param列表更改": {_f: true}
          },
          "多账户实现": {_f: true}
        },
        "添加设备列表Host": {}
      },
      "学习": {
        "Redis-Sentinel部署": {},
        "机器学习第一章完成": {_dl: "18:00", _f: 0.8}
      },
      "商业": {
      }
    }
  };

  dailyUtil.registerDailyPlan(mondayPlanData, "8:00", "23:00", "Monday", "day")
});

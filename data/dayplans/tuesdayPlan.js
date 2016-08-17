'use strict';
app.run(function(storage, dailyUtil){

  var tuesdayPlanData = {
    "周二事项":{
      "Play-FE-Staging上线": {
        "comments更改": {_dl: "11:00", _f: true},
        "BVT测试添加": {_dl: "14:00", _ac: true, _f: true},
        "发布新版本库并上线Staging": {_dl: "15:00", _f: true},
        "Relocation-FE上线Staging": {_dl: "16:00", _f: true}
      },
      "学习": {
        "Java复杂注释": {_dl: "19:00", _f: true},
        "服务器沙盒化实现":{
          _dl: "22:00"
        }
      }
    }
  };

  dailyUtil.registerDailyPlan(tuesdayPlanData, "8:00", "23:00", "Tuesday", "day")
});

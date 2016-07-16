'use strict';
app.run(function(storage){

  var wednesdayPlanData = {
    "周三事项":{
      "HTTPS设计更改":{
        "追查OAuth/IAuth使用情况":{
          "IAuth":{_f: true},
          "OAuth":{_ac: true}
        },
        _dl: "2016/7/13 16:30"
      },
      "代码工作量预估": {
        "FE-Play上线需要工作分解预估":{_f: true},
        "FE-HTTPS需要的工作分解与时间预估":{_f: true},
        "Relocation-Interceptor支持HTTPS工作分解预估":{_f: true},
        _dl: "2016/7/13 17:00"
      },
      "D3.js简单总结":{
        _dl: "2016/7/13 21:30",
        _f: true
      },
      "Tomcat总结":{
        _dl: "2016/7/13 22:30"
      }
    }
  };

  storage.register("周三事项", wednesdayPlanData, false, "2016/7/13 10:00", "2016/7/13 23:00");
});

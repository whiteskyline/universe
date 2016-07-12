'use strict';
app.run(function(storage){

  var tuesdayPlanData = {
    "周二事项":{
      "周一遗留事务":{
        "客户端支持能力调研":{_c:"当Auth状态下的跳转,相关IAUTH和OAUTH对redirect流程的定义,因为不会有相关的头，那么就没关系", _f: true},
        "现有头部内容调查":{_f: true},
        "Wiki文档完成":{_f: true},
        _dl: "2016/7/12 16:00"
      },
      "HTTPS设计更改":{
        "Relocation-Redirect文档更改":{_f: true},
        "调查Relocation-API-AUTH请求量":{_f: true},
        "新版本时序图":{_f: true},
        "追查OAuth/IAuth使用情况":{},
        _dl: "2016/7/12 16:30"
      },
      "Relocation更改安排":{
        _f: true,
        _dl: "2016/7/12 17:30"
      },
      "服务器沙盒化调研":{
        _dl: "2016/7/12 22:00"
      },
      "Tomcat架构总结":{
        _dl: "2016/7/12 23:00"
      }
    }
  };

  storage.register("周二事项", tuesdayPlanData, true, "2016/7/12 10:00", "2016/7/12 23:00");
});
